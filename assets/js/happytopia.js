$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: true,
        afterResponsive: function(isResponsive) {

        },
    });


    var ww = $(window).width();
    if (ww < 1024) {
        // fullpage_api.destroy();
        fullpage_api.setResponsive(true);
    }

    // scroll mouse

    //menu 
    $(window).load(function() {
        $('.open-menu').removeAttr('disabled');
        $('header').on('click', '.open-menu', function() {
            $(this).addClass('close-menu').removeClass('open-menu').attr('disabled', 'disabled');
            $(".open").css("display", "none")
            $(".close_navmenu").css("display", "block");


            $('.container').addClass('blur');
            setTimeout(function() {
                $('.close-menu').removeAttr('disabled');
            }, 1100);
            $('.float-nav').show();
            setTimeout(function() {
                $('.float-nav').addClass('active');
            }, 100);
            if (window.matchMedia('screen and (max-width: 1023px)').matches) {
                setTimeout(function() {
                    $('#header').removeClass('bgr_color');
                }, 800);
            }
        });

        function fechaMenu() {
            $('.close-menu').removeClass('close-menu').addClass('open-menu').attr('disabled', 'disabled');
            $('.float-nav').removeClass('active');
            $(".open").css("display", "block");

            $(".close_navmenu").css("display", "none")
            setTimeout(function() {
                $('.float-nav').hide();
                $('.open-menu').removeAttr('disabled');
            }, 1100);
        }
        $('header').on('click', '.close-menu', function() {
            fechaMenu();
        });

        $('.float-nav ul li').on('click', 'a', function() {
            fechaMenu();
        });
    });

    //slide courses

    $('.slide_courses').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // thanh menu fullpage



    let options = {
            horizontal: 1,
            itemNav: 'basic',
            speed: 300,
            scrollBy: 1,
            mouseDragging: 1,
            touchDragging: 1,
            dragHandle: 1,
            scrollBar: $('.js-slider').find('.scrollbar')
        },
        slider = new Sly('.js-slider-frame', options).init();

    if (window.matchMedia('screen and (max-width: 1023px)').matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('#header').addClass('bgr_color');
            } else {
                $('#header').removeClass('bgr_color');
            }
        });

    };

    //animation wow
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();



});


document.addEventListener('DOMContentLoaded', () => {
    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    const player = new Plyr('#player');

    // Expose
    window.player = player;

    // Bind event listener
    function on(selector, type, callback) {
        document.querySelector(selector).addEventListener(type, callback, false);
    }


});
$(document).on('click', '#scroll', function() {
    fullpage_api.moveSectionDown();
});