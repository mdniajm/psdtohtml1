$(document).ready(function () {
  
    // OnePage Nav Script
    $("nav").onePageNav();
    // Owl carousel Script Start
    $("#works-carousel").owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        nav: true,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
                dots: true,
                nav: false,
            },
            1000: {
                items: 3,
                loop: true,
                dots: true,
                nav: false,
            },
        },
    });

    $("#blog-carousel").owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: false,
        nav: true,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 2,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 2,
                nav: false,
                loop: true,
            },
        },
    });
    $("#banner").owlCarousel({
        loop: true,
        margin: 2,
        responsiveClass: true,
        autoplay: true,
        nav: false,
        dots: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            600: {
                items: 1,
                loop: true,
                dots: true,
            },
            1000: {
                items: 1,
                loop: true,
                dots: true,
            },
        },
        onTranslated: function () {
            changeNavsThump();
        },
    });
    // Owl carousel Script End.
    
    // mobile menu script
    jQuery("nav .nav-ul").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });
   
    
});
