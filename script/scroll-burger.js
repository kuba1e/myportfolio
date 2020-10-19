$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('main').addClass("small");
    } else {
        $('main').removeClass("small");
    }
});