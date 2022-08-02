

$(function() {
    $('.header__catalog-link').on('click', function(e) {
        e.preventDefault();
        $('.header__catalog-blo').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});





