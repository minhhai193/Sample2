$(function () {
  $(".open-menu").click(function () {
    document.getElementsByClassName("menu-mobile")[0].style.width = "70%";
  });
});

$(function () {
  $(".close-menu").click(function () {
    document.getElementsByClassName("menu-mobile")[0].style.width = "0%";
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
  $(".section-members .owl-carousel").owlCarousel({
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
  $(".section-our-team .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
