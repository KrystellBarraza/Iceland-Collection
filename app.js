var loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.height = "100px";
    loader.style.width = "100px";
    loader.style.borderRadius = "50%";
    loader.style.visibility = "hidden";

});

$(function(){
   
    $(window).on('scroll', function(){
        // At top of page.
        if ( ! $(document).scrollTop())
        {
            $('#shadow-top').removeClass('shadow');
        }
        // Not at top of page.
        else
        {
            $('#shadow-top').addClass('shadow');
        }
    });

});


function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.star');
});
