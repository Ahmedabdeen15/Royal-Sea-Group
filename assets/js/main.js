(function($) {
    "use strict"
    jQuery(document).ready(function() {

        // Initiate superfish on nav menu
        $('.nav-menu').superfish({
            animation: {
            opacity: 'show'
            },
            speed: 400
        });

        // Mobile Navigation
        if ($('#nav-menu-container').length) {
            var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
            });
            $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
            });
            $('body').append($mobile_nav);
            $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
            $('body').append('<div id="mobile-body-overly"></div>');
            $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');
            
            $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
            });

            $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
            });

            $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu ');
                $('#mobile-body-overly').fadeOut();
                }
            }
            });
            $('#mobile-nav-toggle').addClass('header-i'); 
        } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
            $("#mobile-nav, #mobile-nav-toggle").hide();
        }

        // Smooth scroll for the menu and links with .scrollto classes
        $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                top_space = $('#header').outerHeight();

                if( ! $('#header').hasClass('header-fixed') ) {
                    top_space = top_space;
                }
                }

                $('html, body').animate({
                scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
            }
        });


        $(document).ready(function() {
            $('html, body').hide();
          
            if (window.location.hash) {
              setTimeout(function() {
                $('html, body').scrollTop(0).show();
          
                $('html, body').animate({
                  scrollTop: $(window.location.hash).offset().top
                }, 1000);
              }, 0);
            } else {
              $('html, body').show();
            }
          });
        

        // Header scroll class
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled'); 
            } else {
            $('#header').removeClass('header-scrolled');

            }
        });


        // Department Slider
        $('.Projects-slider').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            smartSpeed: 2000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });



        // // Nice Select
        $('select').niceSelect();
        

        

    });

    jQuery(window).on('load', function() {
        // WOW JS
        new WOW().init();
        // Preloader
		$('.preloader').fadeOut(500);
    });
    
})(jQuery);

// Open the popup
function openPopup() {
    document.getElementById("imagePopup").style.display = "block";
}

// Close the popup
function closePopup() {
    document.getElementById("imagePopup").style.display = "none";
}

// Set image source and open popup on click
document.querySelectorAll(".img-gal").forEach(function(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        var imageUrl = this.getAttribute("href");
        document.getElementById("popupImage").src = imageUrl;
        openPopup();
    });
});
var map = L.map('map').setView([31.443663538872407, 31.768183547339532], 14);
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);
var marker = L.marker([31.443663538872407, 31.768183547339532]).addTo(map);
marker.bindPopup("Our Main Office<br/>Damietta El-Gadeeda City,<br/>New Damietta Harbour Department,<br/> Damietta Governorate 8062001").openPopup();

