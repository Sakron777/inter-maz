$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

         // подсветка ссылок
        $('#ul a'). removeClass('active')
        $this.addClass ('active')


    $('html, body').animate({
        scrollTop: blockOffset - 70
    },500);
});

