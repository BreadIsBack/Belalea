import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

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
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  allowTouchMove: true,
});
