document.addEventListener("DOMContentLoaded", () => {
  new Mmenu("#menu", {
    extensions: ["position-front", "position-right"],
  });
});

const scrollDown = () => {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".services").offset().top,
    },
    1000
  );
};

$(document).ready(function () {
  $(".members .owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".our-team .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    margin: 55,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
