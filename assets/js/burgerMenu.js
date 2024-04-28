const buttonImg = document.querySelector(".burgerButton");
const ImgMenu = document.querySelector(".burgerImg");
const menu = document.querySelector(".sigg");
const html = document.querySelector("html");
const ImgBack = document.querySelectorAll(".contentFull");
const Logo = document.querySelector(".logotype");
const sigmaFooter = document.querySelector(".ayvasya");

const footer = document.querySelector(".footer");

buttonImg.addEventListener("click", () => {
  menu.classList.toggle("open");
  html.classList.toggle("unscroll");
  ImgBack.forEach((el) => {
    el.classList.toggle("hide");
  });
  footer.classList.toggle("backLose");
  Logo.classList.toggle("hide");
  sigmaFooter.classList.toggle("topchik");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  if (menu.classList.contains("open")) {
    ImgMenu.src = "/assets/img/icons/close.png";
  } else {
    ImgMenu.src = "/assets/img/icons/menu.png";
  }
});
