$(function () {


    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('.hero-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        autoplay: true,
        loop: true,
        mouseDrag: false
    });
    $('.portfolio-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        nav: false,
        margin: 10,
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


    /* ===============================================================
        PAGE TRANSITION EFFECT
     =============================================================== */
   $('.m-pagetransition').mPageTransition({
       fadeOutTime: 600,
       fadeInTime: 600
   });


   /* ===============================================================
         HUMBERGUR MENU ACTIVATE
      =============================================================== */
    $('.sidebar-toggler').on('click dblclick', function () {
        $(this).toggleClass('active');


        if ($('.sidebar-toggler').hasClass('active')) {
            $('.sidebar-menu-holder').show();
            setTimeout(function () {
                $('.sidebar-menu-holder').addClass('active');
            }, 50);
        } else {
            $('.sidebar-menu-holder').removeClass('active');
            $('.sidebar-menu-holder').hide();
        }
    });

});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.03;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
