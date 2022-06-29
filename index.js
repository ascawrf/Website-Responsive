$(function () {
    const navbar = $('.header-inner');
    $(window).scroll(function () {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
        everydropdown.addEventListener('shown.bs.dropdown', function () {
            el_overlay = document.createElement('span');
            el_overlay.className = 'screen-darken';
            document.body.appendChild(el_overlay)
        });

        everydropdown.addEventListener('hide.bs.dropdown', function () {
            document.body.removeChild(document.querySelector('.screen-darken'));
        });
    });

});