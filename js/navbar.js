$(function () {
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 50) {
            $('#navbar').addClass('color-scroll');

            $('#navbar').css({
                'padding': '30px'
            });
        }
        else {
            $('#navbar').removeClass('color-scroll');
            $('#navbar').css('transition', '0.5s');

            $('#navbar').css({
                'padding': '20px'
            });
        }

    });
});
