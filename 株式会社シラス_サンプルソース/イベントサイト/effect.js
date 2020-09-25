$(function(){
  $(window).scroll(function (){
    $('.effect-fade').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('effect-scroll');
        }
    });
  });
});

$(function(){
    $(window).on('load resize', function(){
        // masthead scroll
        var header   = $('header'); // fixed DOM
        var addclass = 'scrolled'; // add css class
        var offset   = header.offset();
        var scrollY  = offset.top; // scroll

        $(window).scroll(function() {
        if ($(window).scrollTop() > scrollY) {
            header.addClass(addclass);
        } else {
            header.removeClass(addclass);
        }
    });
});
});