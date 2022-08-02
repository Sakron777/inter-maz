


    /////////////////////////////intro


let slider = $("#reviewsSlider");

/*Для слайдов мы подключили библиотеку по ссылке и скопировали код с сайта*/

/*Вызываем для нашего элемента слайдер.
infinite: true, - будет скролить все время.
slidesToShow: 1, - сколько мы хотим показывать слайдов
slidesToScroll: 1 - сколько мы будем сколить слайдов при клике на скрол
fade: true - затемнение отзывов, один появлялся, другой исчезал
arrows: false - убирает кнопки в слайдере
dots:true - добавляет точки для скролла*/

slider.slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: false,
    arrows: false,
    dots:true,
    autoplay: true,
    appendDots: $('.intro__item-link'),
    autoplaySpeed: 2500

  });


  $(".intro__blog").on('afterChange', function(event, slick, currentSlide){
    $("#cp").text(currentSlide + 1);
 });


    /////////////////////////////saleshits



    let slider2 = $("#reviewsSlider2");
    let dots = $('.your-dots');

/*Для слайдов мы подключили библиотеку по ссылке и скопировали код с сайта*/

/*Вызываем для нашего элемента слайдер.
infinite: true, - будет скролить все время.
slidesToShow: 1, - сколько мы хотим показывать слайдов
slidesToScroll: 1 - сколько мы будем сколить слайдов при клике на скрол
fade: true - затемнение отзывов, один появлялся, другой исчезал
arrows: false - убирает кнопки в слайдере
dots:true - добавляет точки для скролла*/



slider2.slick({
    infinite: true,
    cssEase: 'linear',
    slidesToScroll: 4,
    slidesToShow: 4,
    fade: false,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1254,
        settings: {

          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 815,
        settings: {

          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });




  ////////////////////novelty

  let slider3 = $("#reviewsSlider3");

/*Для слайдов мы подключили библиотеку по ссылке и скопировали код с сайта*/

/*Вызываем для нашего элемента слайдер.
infinite: true, - будет скролить все время.
slidesToShow: 1, - сколько мы хотим показывать слайдов
slidesToScroll: 1 - сколько мы будем сколить слайдов при клике на скрол
fade: true - затемнение отзывов, один появлялся, другой исчезал
arrows: false - убирает кнопки в слайдере
dots:true - добавляет точки для скролла*/



slider3.slick({
  infinite: true,
  cssEase: 'linear',
  slidesToScroll: 3,
  slidesToShow: 3,
  fade: false,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 1620,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1254,
      settings: {

        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 815,
      settings: {

        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});





  ////////////////////product


  let slider4 = $("#oneSlider");


  slider4.slick({
    infinite: true,
    cssEase: 'linear',
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: false,
    arrows: true,
    dots: false,
    asNavFor: '#navSlider',
    autoplay: true,
    autoplaySpeed: 2500
  });


  let slider5 = $("#navSlider");

  slider5.slick({
    infinite: true,
    cssEase: 'linear',
    variableWidth: true,
    slidesToScroll: 4,
    slidesToShow: 1,
    fade: false,
    arrows: false,
    dots: false,
    asNavFor: '#oneSlider',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2500
  });
