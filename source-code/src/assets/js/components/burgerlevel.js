$(document).ready(function() {
    $('.header-top__spoller').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(200)

    });
});