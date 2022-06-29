var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


// $('.js-carousel .major-carousel .owl-carousel').owlCarousel({
//     loop: true,
//     autoplay: true,
//     stagePadding: 7,
//     margin: 20,
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     nav: true,
//     autoplayHoverPause: true,
//     items: 3,
//     navText: ["<span class='fa fa-chevron-left'</span>", "<span class='fa fa-chevron-right'</span>"],
//     responsive: {
//         0: {
//             items: 1,
//             nav: false
//         },
//         600: {
//             items: 2,
//             nav: false
//         },
//         1000: {
//             items: 3,
//             nav: true,
//             loop: false
//         }
//     }
// })