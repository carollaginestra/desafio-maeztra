const sliderPrincipal = $('.banner-slider');
if (sliderPrincipal.length) {
  sliderPrincipal.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  });
}

const benefits = $('.benefits__list');
if (benefits.length) {
  benefits.slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    speed: 300,
    infinite: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 615,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}

const brands = $('.brands__list');
if (brands.length) {
  brands.slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    speed: 300,
    infinite: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 760,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 380,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}

const shelf = $('.shelf__list');
if (shelf.length) {
  shelf.slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    speed: 300,
    infinite: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
}
