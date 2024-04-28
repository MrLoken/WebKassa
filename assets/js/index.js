const accordion = document.querySelectorAll(".accordion");
const images = document.querySelectorAll("#imgIcon");



const swiperContent = document.querySelector(".swiper-open");
const swiperWrapper = document.querySelector(".swipw");
const swiperSliders = document.querySelectorAll(".swiper-slide");

const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");

const imgSubstract = document.querySelector(".substract");

accordion.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});



function resize() {
  if (window.innerWidth < 1544) {
    imgSubstract.src = "assets/img/backless.png";
    if (window.innerWidth < 810) {
      swiperContent.classList.add("swiper");
      swiperWrapper.classList.add("swiper-wrapper");
      buttonNext.classList.add("swiper-button-next");
      buttonPrev.classList.add("swiper-button-prev");

      const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      swiperContent.classList.remove("swiper");
      swiperWrapper.classList.remove("swiper-wrapper");
      buttonNext.classList.remove("swiper-button-next");
      buttonPrev.classList.remove("swiper-button-prev");
      swiperWrapper.id = "123";
    }
  } else {
    imgSubstract.src = "assets/img/backmore.png";
    swiperContent.classList.remove("swiper");
    swiperWrapper.classList.remove("swiper-wrapper");
    buttonNext.classList.remove("swiper-button-next");
    buttonPrev.classList.remove("swiper-button-prev");
    swiperWrapper.id = "123";
  }
}

window.addEventListener("resize", resize);

window.onload = resize;

//
