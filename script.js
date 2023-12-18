document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector('.navbar');
        var scrollUpBtn = document.querySelector('.scroll-up-btn');

        navbar.classList.toggle("sticky", window.scrollY > 20);
        scrollUpBtn.classList.toggle("show", window.scrollY > 500);
    });

    document.querySelector('.scroll-up-btn').addEventListener("click", function() {
        document.querySelector('html').animate({ scrollTop: 0 });
        document.querySelector('html').style.scrollBehavior = "auto";
    });

    document.querySelectorAll('.navbar .menu li a').forEach(function(element) {
        element.addEventListener("click", function() {
            document.querySelector('html').style.scrollBehavior = "smooth";
        });
    });

    document.querySelector('.menu-btn').addEventListener("click", function() {
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
    });

    var typedOptions = {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    new Typed(".typing", typedOptions);
    new Typed(".typing-2", typedOptions);

    var owlCarouselOptions = {
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    };

  //   $('.carousel').owlCarousel(owlCarouselOptions);
});
