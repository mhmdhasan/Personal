let windowHeight = $(window).innerHeight();
$('.page-content').css('min-height', `${windowHeight}px`);

let preloader = $('.preloader');
$(window).on('load', function () {
    preloader.fadeOut('slow');
    setTimeout(function () {
        preloader.remove();
    }, 300);
});

$(function () {

    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('.hero-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        dots: false,
        mouseDrag: false,
        navText: ['<i class="text-gradient fas fa-long-arrow-alt-left"></i>', '<i class="text-gradient fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            991: {
                nav: true
            }
        }
    });
    $('.portfolio-carousel').owlCarousel({
        items: 1,
        nav: false,
        margin: 0,
        navText: ['<i class="text-gradient fas fa-long-arrow-alt-left"></i>', '<i class="text-gradient fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            991: {
                nav: true
            }
        }
    });


    $(window).on('load', function () {
        if ($(window).outerWidth() < 768) {
            $('.d-none.d-lg-block').remove();
        }
    });

    $('.btn-loading').on('click', function() {
        var $this = $(this);
      $this.button('loading');
        setTimeout(function() {
           $this.button('reset');
       }, 8000);
    });


    /* ===============================================================
        PAGE TRANSITION EFFECT
     =============================================================== */
   // $('.m-pagetransition').mPageTransition({
   //     fadeOutTime: 600,
   //     fadeInTime: 600
   // });
   //

   /* ===============================================================
         HUMBERGUR MENU ACTIVATE
      =============================================================== */
    $('.sidebar-toggler').on('click dblclick', function () {
        $(this).toggleClass('active');


        if ($('.sidebar-toggler').hasClass('active')) {
            $('body').css('overflow', 'hidden');
            $('.sidebar-menu-holder').show();
            setTimeout(function () {
                $('.sidebar-menu-holder').addClass('active');
            }, 50);
        } else {
            $('.sidebar-menu-holder').removeClass('active');
            $('.sidebar-menu-holder').hide();
            $('body').css('overflow', 'auto');
        }
    });


    /* ===============================================================
         DATEPICKER INITIALIZATION
      =============================================================== */
    var datePickerHolder = $('.datepicker-1').parent('.form-group');
    $('.datepicker-1').datepicker({
        todayHighlight: true,
        // autoclose: true,
        format: 'dd MM yyyy',
        container: datePickerHolder
    });
    var datePickerHolder1 = $('.datepicker-2').parent('.form-group');
    $('.datepicker-2').datepicker({
        todayHighlight: true,
        // autoclose: true,
        format: 'dd MM yyyy',
        container: datePickerHolder1
    });


    $('input[name="budget"]').on('input', function () {
        var downPayment = ($(this).val() * 0.2);

        $('.down-payment').text(Math.ceil(downPayment));
    });

    $('.selectpicker').on('change', function () {
        $(this).closest('.dropdown').find('.filter-option-inner-inner').addClass('selected');
    });


    /* ===============================================================
    *   CUSTOM FILE INPUT
    * =============================================================== */
    let customeUploader = $(':file');
    if (customeUploader) {
        customeUploader.filestyle({
            buttonBefore: true,
            btnClass: "btn-primary",
            placeholder: "No file chosen"
        });
    }



    /* ===============================================================
    *   SHOW MORE BUTTON
    * =============================================================== */
    function viewMoreBtn(selector, textLength) {
        $(selector).each(function (e) {
            if ($(this).html().length > textLength) {
                let shortText = $(this).html().substr(0, textLength);
                let longText = $(this).html().substr(textLength);

                $(this).html(shortText + `<a href="#" class="view-more reset-anchor text-primary">...read more</a><span class="rest-text" style="display: none;">${longText}</span>`);


                $(document).on('click', '.view-more', function (e) {
                    e.preventDefault();
                    $(this).hide();
                    $(this).parent(selector).find('.rest-text').show();
                });
            }
        });

    }

    viewMoreBtn('.limited-text', 70);



    let snippetModal = $('#snippetModal');
    $(document).on('click', '.snippet-btn', function (e) {
        let snippetEmbededSrc = $(this).attr('data-source');
        snippetModal.find('iframe').attr('src', `https://jsfiddle.net/${snippetEmbededSrc}/embedded/result,js,html,css/dark/?username=MhmdHasan`);
    });




    // /* ===============================================================
    // *   INITATE MASONRY GRID
    // * =============================================================== */
    // var $grid = $('.snippets-holder').masonry({
    //     temSelector: '.grid-item',
    //     columnWidth: '.grid-sizer',
    //     percentPosition: true,
    // });


    let moreSnippetsBtn = $('#moreSnippetsBtn');
    $.getJSON('js/snippets.json', function (data) {
        let i = 0;
        moreSnippetsBtn.on('click', function () {
            snippet = `<div class="col-lg-4 col-md-6 mb-4"><div class="card card-animated border-0"><div class="card-body rounded shadow p-lg-5"><h3 class="h5 font-weight-normal">${data[i].title}</h3><p class="text-muted limited-text">${data[i].description}</p><button class="btn btn-primary btn-sm snippet-btn d-none d-sm-inline-block" data-source="${data[i].url}" data-toggle="modal" data-target="#snippetModal">View snippet</button><a class="btn btn-primary btn-sm d-inline-block d-sm-nonr" href="https://jsfiddle.net/MhmdHasan/${data[i].url}" target="_blank">View snippet</a></div></div></div>`;

            snippet += `<div class="col-lg-4 col-md-6 mb-4"><div class="card card-animated border-0"><div class="card-body rounded shadow p-lg-5"><h3 class="h5 font-weight-normal">${data[i+1].title}</h3><p class="text-muted limited-text">${data[i+1].description}</p><button class="btn btn-primary btn-sm snippet-btn d-none d-sm-inline-block" data-source="${data[i+1].url}" data-toggle="modal" data-target="#snippetModal">View snippet</button><a class="btn btn-primary btn-sm d-inline-block d-sm-nonr" href="https://jsfiddle.net/MhmdHasan/${data[i+1].url}" target="_blank">View snippet</a></div></div></div>`;

            snippet += `<div class="col-lg-4 col-md-6 mb-4"><div class="card card-animated border-0"><div class="card-body rounded shadow p-lg-5"><h3 class="h5 font-weight-normal">${data[i+2].title}</h3><p class="text-muted limited-text">${data[i+2].description}</p><button class="btn btn-primary btn-sm snippet-btn d-none d-sm-inline-block" data-source="${data[i+2].url}" data-toggle="modal" data-target="#snippetModal">View snippet</button><a class="btn btn-primary btn-sm d-inline-block d-sm-nonr" href="https://jsfiddle.net/MhmdHasan/${data[i+2].url}" target="_blank">View snippet</a></div></div></div>`;
            $(snippet).insertBefore(moreSnippetsBtn.parent());
            i = i + 3;

            if (i > data.length - 1) {
                moreSnippetsBtn.parent().hide();
            }

            viewMoreBtn('.limited-text', 70);
        });


    });



});





var textarea = document.querySelector('textarea');
if (textarea) {
    textarea.addEventListener('keydown', autosize);
    function autosize(){
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }
}
