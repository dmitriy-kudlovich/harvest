let buttonCheck = document.querySelectorAll(".icon-wrapper-check");
let files = document.querySelectorAll(".icon-wrapper-file");

buttonCheck.forEach(function (item, index) {
  item.addEventListener("click", function (event) {
    buttonCheck[index].classList.toggle("icon-wrapper-check--active");
    files[index].classList.toggle("icon-wrapper-file--active");
  });
});
