$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.show-modal').click(function () {
        $('.modal-overlay').addClass('active');
        $(document.body).addClass('modal-opened');
        var top = $(document).scrollTop();
        $('.modal-overlay').css('top', top);
    });
    $('[data-close]').click(':not(.modal-body)', function () {
        $('.modal-overlay').removeClass('active');
        $(document.body).removeClass('modal-opened');
    });
    $('.modal-body').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
    });
    $('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 1000,
	  fade: true,
	  cssEase: 'linear'
	});
});
