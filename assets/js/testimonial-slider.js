jQuery(document).ready(function($){
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    })
})
