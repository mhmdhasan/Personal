var gulp = require('gulp');

var jadeInheritance = require('gulp-jade-inheritance');
var jade = require('gulp-jade');
var changed = require('gulp-changed');
var cached = require('gulp-cached');
var gulpif = require('gulp-if');
var htmlmin = require('gulp-htmlmin')
var filter = require('gulp-filter');
var del = require('del');
var runSequence = require('run-sequence');


var sass = require('gulp-sass');
var less = require('gulp-less');

var bs = require('browser-sync').create();

var path = require('path');

var srcMarkupFiles = 'src/**/*.jade'
var srcLessFiles = 'src/styles/style.*.less'
var srcSassFiles = 'src/scss/style.*.scss'

var distMainDir = 'distribution/'
var distStyleDir = 'distribution/css/'


var copy = ['js/**', 'img/**', 'css/**', 'fonts/**', 'favicon.png', 'readme.txt', 'license.txt', 'credits.txt']


var config = {
    browserSync: {
        enabled: true
    },
    less: {
        compress: false
    },
    sass: {
        outputStyle: 'nested',
        includePaths: ['src/scss', 'src/scss/modules']
    },
    htmlmin: {
        enabled: false,
        collapseWhitespace: true,
        removeComments: true,
        keepClosingSlash: true
    },
    jade: {
        locals: {
            styleSwitcher: false
        }
    }
}

gulp.task('browser-sync', ['less'], function () {
    bs.init({
        server: {
            baseDir: distMainDir
        }
    });
});

gulp.task('clean', function () {
    return del([
        distMainDir + '**/*'
    ]);
});


gulp.task('less', function () {
    return gulp.src(srcLessFiles)
        .pipe(less(config.less))
        .pipe(gulp.dest(distStyleDir))
        .pipe(bs.reload({ stream: true }));
});

gulp.task('sass', function () {
    return gulp.src(srcSassFiles)
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(gulp.dest(distStyleDir))
        .pipe(bs.reload({ stream: true }));
});

gulp.task('jade', function () {
    return gulp.src(srcMarkupFiles)

        //only pass unchanged *main* files and *all* the partials
        .pipe(changed(distMainDir, { extension: '.html' }))

        //filter out unchanged partials, but it only works when watching
        .pipe(gulpif(global.isWatching, cached('jade')))

        //find files that depend on the files that have changed
        .pipe(jadeInheritance({ basedir: 'src' }))

        //filter out partials (folders and files starting with "_" )
        .pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))

        //process jade templates
        .pipe(jade({
            pretty: true,
            locals: config.jade.locals
        }))

        //save all the files
        .pipe(gulp.dest(distMainDir));

});

gulp.task('copy', function () {
    return getFoldersSrc('src', copy)
        .pipe(changed(distMainDir))
        //save all the files
        .pipe(gulp.dest(distMainDir));

});


gulp.task('build', function () {
    runSequence('clean',
        ['jade', 'sass', 'copy']
    );
});

var getFoldersSrc = function (base, folders) {
    return gulp.src(folders.map(function (item) {
        return path.join(base, item);
    }), { base: base });
};

var getFolders = function (base, folders) {
    return folders.map(function (item) {
        return path.join(base, item);
    });
};