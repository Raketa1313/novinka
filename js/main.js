
// Slick
$(document).ready(function(){

    // $('.totalSlides').text( $('.home-slider div[class^="h-slid"]').length );

    $('.sliderLoc').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'home-dots',
        arrows: true,
        prevArrow: '<button type="button" class="prev">Previous</button>',
        nextArrow: '<button type="button" class="next">Previous</button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
});

    // $('.home-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     $('.currentSlide').text(nextSlide+1)
    // });





    //===========   Выездной сайдбар слева  =============
    jQuery(document).ready(function($) {
        $('.touch-menu').click(function(event) {
            $('header, .touch-menu').toggleClass('active');
        });
    });


    //============ Плавный скролл в history =============
    $('.nav-vertical a, a.arrows').mPageScroll2id({
        offset: 135,
        scrollSpeed: 1500
    });



    //============ MagnificPopap =============

    function mainMagnificInline(namePopup) {

        $(namePopup).magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',
            modal: false,

            closeBtnInside: false,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade',

            closeMarkup: '<button title="%title%" type="button" class="mfp-close"><span class="mfp-text">Закрыть</span><span class="close">×</span></button>'
        //
        //     callbacks: {
        //         close: function() {
        //             document.querySelector('html').classList.add( 'sp-fp-disabled' );
        //         },
        //         open: function() {
        //             document.querySelector('html').classList.remove( 'sp-fp-disabled' );
        //         }
        //     }
        });
    }

    mainMagnificInline('.callback-om, .aboutBtn');
    // mainMagnificInline('.plan a');

    $('svg.svg-frame g').each(function (){
        mainMagnificInline(this);
    });


    function mainMagnificImage(nameGal) {

        $(nameGal).magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade mfp-omar',

            callbacks: {
                close: function() {
                    document.querySelector('html').classList.add( 'sp-fp-disabled' );
                },
                open: function() {
                    document.querySelector('html').classList.remove( 'sp-fp-disabled' );
                }
            }
        });
    }

    mainMagnificImage('.gallery-img a');
    mainMagnificImage('.infoBtn');


    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    // =============== Маска ввода телефона =================
        $("input[type=tel]").mask("+9-999-9999999");
        $("input[type=tel]").attr('title','+x-xxx-xxxxxxx');
        $("input[type=tel]").attr('pattern','\\+[0-9]{1}-[0-9]{3}-[0-9]{7}');


});