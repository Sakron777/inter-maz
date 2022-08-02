$(document).ready(function() {
    $('.catalog__filter-price').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(200)

    });
});


$(document).ready(function() {
    $('.catalog__filter-blogs').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(200)

    });
});