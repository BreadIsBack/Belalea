import Swiper, {Pagination, Navigation, Thumbs} from 'swiper';

Swiper.use([Pagination, Navigation, Thumbs]);

const bullets = document.querySelectorAll('.swiper-pagination-bullet');

bullets.forEach(bullet => {
  bullet.setAttribute('tabindex', 0);
  bullet.addEventListener("keyup", function (event) {

    if (event.keyCode === 9) {
      bullet.click();
    }

  })
});

const reviewsSlider = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  allowTouchMove: true,
});

const catalogItemSlider = new Swiper('.catalog-item__swiper', {
  slidesPerView: 1,
  allowTouchMove: true,
  slidersPerGroup: 1,

  thumbs: {
    swiper: {
      el: '.catalog-item__swiper-mini',
      slidesPerView: 4,
      spaceBetween: 10,
    }
  },
});
