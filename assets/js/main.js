(function ($) {
    "use strict";
    jQuery(document).ready(function($){
        
        //Counter Up
        if ($('.counter').length) {
            $('.counter').counterUp({
                delay: 10,
                time: 1500
            });
        }
        
        //Trusted Teams Logo Slider Active JS
        if ($('.trusted-logo-slider').length) {
            $('.trusted-logo-slider').owlCarousel({
                loop:false,
                margin:10,
                nav:true,
                autoplay: false,
                dots: false,
                navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        }

        //Quick Overview Slider Active JS
        if ($('#quick-overview-slider').length) {
            $('#quick-overview-slider').owlCarousel({
                loop:false,
                margin:10,
                nav:true,
                autoplay: false,
                dots: false,
                items: 1,
                navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
            });
        }


        //testimonial-slider Slider Active JS
        if ($('#testimonial-slider').length) {
            $('#testimonial-slider').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                autoplay: true,
                dots: false,
                items: 1,
                navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
            });
        }

        //Show Hide Navigation While Scroll
        ScrollNav();
        $(window).scroll(function(){
            ScrollNav();
        });
        function ScrollNav(){
            if( $(window).scrollTop() > 50 ){
                $('.site-header').addClass('sticky-header');
            }else{
                $('.site-header').removeClass('sticky-header');
            }
        }

        //Magnific Popup Active JS
        if ($('.popup-video').length) {
            $('.popup-video').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 300,
                preloader: false,
                fixedContentPos: false
            });
        }

        //Mobile Menu Active JS
        $('.side-nav').on('click', function() {
            if(!$(this).hasClass('active')){
                $('.main-menu, .side-nav').addClass('active');
                $('body').append('<div class="mobile-backdrop fade"></div>');
                setTimeout(function() {
                    $('.mobile-backdrop').addClass('show');
                }, 100);
            }else{
                $('.main-menu, .side-nav').removeClass('active');
                $('.mobile-backdrop').removeClass('show');
                setTimeout(function() {
                    $('.mobile-backdrop').remove();
                }, 100);
            }
        });

        //Mobile Menu Submenu
        var offcanvasNav = $('.main-menu');
        var offcanvasNavSubMenu = offcanvasNav.find('.sub-menu');
        offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

        $('.menu-expand').on('click', function(e){
            var $this = $(this);
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
                $this.removeClass('active');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
                $this.addClass('active');
            }
        });

    });
}(jQuery));