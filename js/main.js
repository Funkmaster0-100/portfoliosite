$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.menu').addClass('active');
    });
    $('.exit-ham-menu').on('click', function () {
        $('.menu').removeClass('active');
    });
});
