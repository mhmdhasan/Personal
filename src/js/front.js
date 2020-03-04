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
        dots: false,
        mouseDrag: false
    });
    $('.portfolio-carousel').owlCarousel({
        items: 1,
        // autoplay: true,
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
        autoclose: true,
        format: 'dd MM yyyy',
        container: datePickerHolder
    });
    var datePickerHolder1 = $('.datepicker-2').parent('.form-group');
    $('.datepicker-2').datepicker({
        todayHighlight: true,
        autoclose: true,
        format: 'dd MM yyyy',
        container: datePickerHolder1
    });


    $('input[name="budget"]').on('input', function () {
        var downPayment = ($(this).val() * 0.2);

        $('.down-payment').text(Math.ceil(downPayment));
    });

});


var textarea = document.querySelector('textarea');
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


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.03;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
