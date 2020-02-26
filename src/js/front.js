

/* =========================================
    COUNTDOWN 1
========================================= */
// $('#getting-started').countdown('2020/3/1').on('update.countdown', function(event) {
//     var $this = $(this).html(event.strftime(''
//     + '<div class="holder"><span class="h1 number">%D</span> Day%!d</div>'
//     + '<div class="holder"><span class="h1 number">%H</span> Hr</div>'
//     + '<div class="holder"><span class="h1 number">%M</span> Min</div>'
//     + '<div class="holder"><span class="h1 number">%S</span> Sec</div>'));
// });


$(function () {
    $('.hero-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items: 1,
        autoplay: true,
        loop: true,
        mouseDrag: false
    });


    $(window).on('load', function () {
        if ($(window).outerWidth() < 768) {
            $('.d-none.d-lg-block').remove();
        }
    });
});



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
