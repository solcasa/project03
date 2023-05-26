
$(function () {
    $('.main_slide').slick({
        arrows: false,
        dots: true,
        // fade: true
        // vertical: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $('.main_visual .dots li').on('mouseenter', function () {
        // 내가 클릭한 요소의 번호를 알려줘
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});


$(function () {
    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.main_tit .arrows .left').on('click', function () {
        $('.product_slide').slick('slickprev');
    });
    $('.main_tit .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });

})

$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/CAeWgQFz16k',
        containment: '#main_video',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,

    });


    $('main_video .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })
    $('main_video .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })
})

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

});


$(window).scroll(function () {

    if ($(this).scrollTop() > 200) {

        $('.to_top').fadeIn();

    } else {

        $('.to_top').fadeOut();

    }

});

