// ADD BACKGROUND COLOUR TO MENU BAR ON SCROLL //

$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('#nav').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.navbar').addClass('scroll');
        } else {
            $('.navbar').removeClass('scroll');
        }

    });
});

// SMOOTH SCROLLING //
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// REMOVE LSEP CHARACTERS //
$(document).ready(function() {
    $("body").children().each(function() {
        $(this).html($(this).html().replace(/&#8232;/g," "));
    });
});
