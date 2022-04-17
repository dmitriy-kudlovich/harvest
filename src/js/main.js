const nav = document.querySelector("#nav");
const buttonHamburger = document.querySelector("#buttonHamburger");
const colLeft = document.querySelector("#colLeft");
const buttonClose = document.querySelector("#buttonClose");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Получtybt текущеuj времени
function getTimeCurrent() {
  let hoursNow = new Date(Date.now()).getHours();
  let minutesNow = new Date(Date.now()).getMinutes();
  let secondsNow = new Date(Date.now()).getSeconds();

  hoursNow = hoursNow < 10 ? "0" + hoursNow : hoursNow;
  minutesNow = minutesNow < 10 ? "0" + minutesNow : minutesNow;
  secondsNow = secondsNow < 10 ? "0" + secondsNow : secondsNow;

  hours.innerHTML = hoursNow + ":";
  minutes.innerHTML = minutesNow + ":";
  seconds.innerHTML = secondsNow;
}

// Показ мобильного меню
buttonHamburger.addEventListener("click", function () {
  nav.classList.add("nav--active");
  colLeft.classList.add("col--left-active");
});

// Закрытие мобильного меню
buttonClose.addEventListener("click", function () {
  nav.classList.remove("nav--active");
  colLeft.classList.remove("col--left-active");
});

// Вызов функции получения текущего времени
setInterval(getTimeCurrent, 1000);
