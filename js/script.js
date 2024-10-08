window.addEventListener("DOMContentLoaded", function () {
  $(".carousel").not(".slick-initialized").slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });

  $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $(".sp-navi").toggleClass("on");
  });
});
