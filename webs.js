let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const closeLoginForm = document.querySelector('#close-login-form');

loginBtn.onclick = () => {
    loginForm.classList.toggle('active',true);
};

closeLoginForm.onclick = () => {
    loginForm.classList.remove('active',);
};


const header = document.querySelector('.header');

const toggleHeaderOnScroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

// Call the function immediately and attach the scroll listener
toggleHeaderOnScroll();
window.addEventListener('scroll', toggleHeaderOnScroll);


document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        const speed = parseFloat(elm.getAttribute('data-speed'));

        const x = (window.innerWidth - e.pageX * speed) / 90;
        const y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translate(${x}px, ${y}px)`;
    });
};

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        

        elm.style.transform = `translate(0{x}px, 0{y}px)`;
    });
};




var swiper = new Swiper(".vehicles-slide", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centerdSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    911: {
      slidesPerView: 3,
    },
  },
});


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".featured-slider", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          911: {
              slidesPerView: 3,
          },
      },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".featured-slider", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          911: {
              slidesPerView: 3,
          },
      },
  });
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        911: {
            slidesPerView: 3,
        }
    }
});