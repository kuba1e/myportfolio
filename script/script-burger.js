$(document).ready(function () {
    $('.header__burger_logo').click(function (event) {
        $('.burger__link,.header__slidebar_menu,.burger_menu,.header__burger_logo_title,.header__mail_logo').toggleClass('active');
    });
    $('.header__burger_logo').hover(function () {
        $('.burger__link,.burger_menu,.header__mail_logo,.burger_menu.active,.header__burger_logo_title').toggleClass('hover_link');
    });
});
