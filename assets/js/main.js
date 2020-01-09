jQuery(document).ready(function($) {

    new TRX().init();

    $('a[href^="#"]').on('click', function(e) {
        // e.preventDefault();
        $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top }, 700);
    });




    // Scroll to ID
    var page = jQuery('html, body');
    jQuery('a[href*="#"]').click(function() {
        page.animate({
            scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });



    jQuery(window).scroll(function() { // Scroll actions for animated elements
        scroll_anim();
    });

    function scroll_anim() {
        "use strict";
        var scroll_offset = jQuery(window).scrollTop();
        jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
            if (jQuery(this).offset().top < scroll_offset + jQuery(window).height())
                jQuery(this).addClass(jQuery(this).data('animation'));
        });
    }

    $(document).ready(function() {



        var $slider = $('.slider');
        var $progressBar = $('.progress');
        var $progressBarLabel = $('.slider__label');

        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc);

            $progressBarLabel.text(calc + '% completed');
        });



        $('.slider').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 3,
            variableWidth: true,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    });

});