$(function () {
    $('.hero-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
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


    /* ===============================================================
        PAGE TRANSITION EFFECT
     =============================================================== */
   $('.m-pagetransition').mPageTransition({
       fadeOutTime: 600,
       fadeInTime: 600
   });

});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.03;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
