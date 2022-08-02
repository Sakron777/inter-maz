


    let header = $('#fixhead');
    let introH = $('#introhe').innerHeight();
    let scrollOffset =  $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on ('scroll', function() {
        scrollOffset = $(this).scrollTop();

          checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if(scrollOffset >= introH) {
            header.addClass('fixedd');
        }else {
        header.removeClass('fixedd')
    }
    }









