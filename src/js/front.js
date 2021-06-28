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


let moreSnippetsBtn = $('#moreSnippetsBtn');
$.getJSON('js/snippets.json', function (data) {
    let i = 0;
    moreSnippetsBtn.on('click', function () {
        snippet = `<div class="col-lg-4 mb-4"><div class="card card-animated border-0"><div class="card-body rounded shadow p-lg-5"><h3 class="h4">${data[i].title}</h3><p class="text-muted">${data[i].description}</p><a class="btn btn-primary btn-sm" href="${data[i].url}">View snippet</a></div></div></div>`;
        snippet += `<div class="col-lg-4 mb-4"><div class="card card-animated border-0"><div class="card-body rounded shadow p-lg-5"><h3 class="h4">${data[i+1].title}</h3><p class="text-muted">${data[i+1].description}</p><a class="btn btn-primary btn-sm" href="${data[i+1].url}">View snippet</a></div></div></div>`;
        snippet += `<div class="col-lg-4 mb-4"><div class="card card-animated border-0"><div class="card-body rounded shadow p-lg-5"><h3 class="h4">${data[i+2].title}</h3><p class="text-muted">${data[i+2].description}</p><a class="btn btn-primary btn-sm" href="${data[i+2].url}">View snippet</a></div></div></div>`;
        $(snippet).insertBefore(moreSnippetsBtn.parent());
        i = i + 3;

        if (i > data.length - 1) {
            moreSnippetsBtn.parent().hide();
        }
    });


});
