const nav = document.querySelector("#nav");
const buttonHamburger = document.querySelector("#buttonHamburger");
const colLeft = document.querySelector("#colLeft");
const buttonClose = document.querySelector("#buttonClose");

buttonHamburger.addEventListener("click", function () {
  nav.classList.add("nav--active");
  colLeft.classList.add("col--left-active");
});

buttonClose.addEventListener("click", function () {
  nav.classList.remove("nav--active");
  colLeft.classList.remove("col--left-active");
});
