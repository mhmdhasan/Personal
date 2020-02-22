

/* =========================================
    COUNTDOWN 1
========================================= */
$('#getting-started').countdown('2020/3/1').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div class="holder"><span class="h1 number">%D</span> Day%!d</div>'
    + '<div class="holder"><span class="h1 number">%H</span> Hr</div>'
    + '<div class="holder"><span class="h1 number">%M</span> Min</div>'
    + '<div class="holder"><span class="h1 number">%S</span> Sec</div>'));
});
