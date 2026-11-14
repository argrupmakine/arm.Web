// Page loading

$(window).load(function () {
    $(".loading").fadeOut(600);
});

// Swiper Slider
$(function () {
    var slider = new Swiper(".slider", {
        navigation: {
            nextEl: ".slider .swiper-button-next",
            prevEl: ".slider .swiper-button-prev",
        },
        pagination: {
            el: ".slider .swiper-pagination",
            clickable: true,
        },
    });

    var mslider = new Swiper(".m-slider", {
        navigation: {
            nextEl: ".m-slider .swiper-button-next",
            prevEl: ".m-slider .swiper-button-prev",
        },
        pagination: {
            el: ".m-slider .swiper-pagination",
            clickable: true,
        },
    });

    var about = new Swiper(".about-carou", {
        spaceBetween: 15,
        navigation: {
            nextEl: ".about .arrows .swiper-button-next",
            prevEl: ".about .arrows .swiper-button-prev",
        },
    });

    var carou = new Swiper(".reference-carou", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".reference-carou .swiper-button-next",
            prevEl: ".reference-carou .swiper-button-prev",
        },
        breakpoints: {
            240: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            },
        }
    });

    $(".reference-carou .swiper-slide-next").next().addClass("act");
    carou.on('transitionEnd', function () {
        $(".reference-carou .swiper-slide").removeClass("act");
        $(".reference-carou .swiper-slide-next").next().addClass("act");
    });

    var carou2 = new Swiper(".product-carou", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".product-carou .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            240: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
        }
    });

    var homeCarou = new Swiper(".home-carou", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            240: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".home-carou .swiper-button-next",
            prevEl: ".home-carou .swiper-button-prev",
        },
    });

    var newsCarou = new Swiper(".news-carou", {
        navigation: {
            nextEl: ".news-carou .swiper-button-next",
        },
        scrollbar: {
            el: ".news-carou .swiper-scrollbar",
        },
    });

    var list = new Swiper(".product-list.plc", {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            240: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".product-list.plc .swiper-button-next",
            prevEl: ".product-list.plc .swiper-button-prev",
        },
    });

    var detail = new Swiper(".detail-carou", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".detail-carou .swiper-button-next",
            prevEl: ".detail-carou .swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        }
    });

    var list = new Swiper(".project-list", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".project-list .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        }
    });

    var brand = new Swiper(".brand-carou", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".brand-carou .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
        }
    });
});

// Side Nav
$(function () {
    $(".side-nav li").each(function () {
        let parentLi = $(this);
        let hasSub = $(this).children("ul");

        if (hasSub.length > 0) {
            parentLi.addClass("has-sub");
        }
    });

    $(".side-nav .has-sub").append('<div class="arrow"><i class="feather-chevron-right"></i></div>');

    $(".side-nav .has-sub .arrow").click(function () {
        $(this).toggleClass("active");
        $(this).parent().children("ul").toggleClass("opened");
    });

    let url = window.location.href;
    url = url.split("/");
    url = url.pop();
    //console.log(url);

    $(".side-nav a").each(function () {
        let link = $(this).attr("href");
        if (url == link) {
            $(this).parent().children("ul").addClass("opened");
            $(this).parent().children(".arrow").addClass("active");
        }
        else {
            $(".side-nav ul li:first-child").children("ul").addClass("opened");
            $(".side-nav ul li:first-child").children(".arrow").addClass("active");
        }
    });
});

// Product Gallery
$(function () {
    var thumbs = new Swiper(".thumbs", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var gallery = new Swiper(".own", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".own .swiper-button-next",
            prevEl: ".own .swiper-button-prev",
        },
        thumbs: {
            swiper: thumbs,
        },
    });
});

// Menu Function
$(function () {
    $(".mobile-menu").prepend('<div class="close-btn"><i class="feather-x"></i></div>');
    let mn = $(".top-menu").html();
    $(".mobile-menu").append(mn);

    $(".mobile-menu > ul li").each(function () {
        if ($(this).children("ul").length > 0) {
            $(this).children("ul").prepend('<div class="back-icon"><i class="feather-chevron-left"></i></div>');
            $(this).append('<div class="sub-icon"><i class="feather-chevron-right"></i></div>');
        }
    });

    $(".mobile-menu .back-icon").click(function () {
        $(this).parent("ul").removeClass("opened");
    });
    $(".mobile-menu .sub-icon").click(function () {
        $(this).parent("li").children("ul").toggleClass("opened");
    });

    $(".top-menu > ul li").each(function () {
        $(this).hover(function () {
            $(this).children("ul").toggleClass("opened");
        });
    });

    $(".menu-btn").click(function () {
        $(".mobile-menu").toggleClass("opened");
        $(".mobile-menu ul").removeClass("opened");
    });
    $(".close-btn").click(function () {
        $(".mobile-menu").removeClass("opened");
        $(".mobile-menu ul").removeClass("opened");
    });
    $(".top-menu > ul > li").each(function () {
        if ($(this).children("ul").length > 0) {
            $(this).children("ul").prev("a").append('<i class="feather-chevron-down"></i>');
        }
    });
});

// Tab
$(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $(this).siblings().removeClass('tcurrent');
        $(this).parent().parent().children(".tab-content").removeClass('tcurrent');

        $(this).addClass('tcurrent');
        $("#" + tab_id).addClass('tcurrent');
    })
});
