const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const closeLoginForm = document.querySelector('#close-login-form');

loginBtn.onclick = () => {
    loginForm.classList.add('active'); 
};

closeLoginForm.onclick = () => {
    loginForm.classList.remove('active');
};

var swiper = new Swiper('.vehicles-slide', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





