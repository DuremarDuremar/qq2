@@include("burger.js");
@@include("tabs.js");
@@include("move.js");
@@include("timer.js");
@@include("adaptivjs.js");
@@include("slider.js");
@@include("ajax.js");
@@include("other.js");

let slide2index = 1,
  slider2 = document.querySelectorAll(".slider2-item"),
  prev2 = document.querySelector(".slider2-prev"),
  next2 = document.querySelector(".slider2-next"),
  dotsWrap = document.querySelector(".slider2-dots"),
  dots = document.querySelectorAll(".slider2-dot");

function showSlider2(n) {
  slider2.forEach(function (item) {
    item.style.display = "none";
  });
  dots.forEach(function (item) {
    item.classList.remove("dot-active");
  });
  slider2[slide2index - 1].style.display = "flex";
  dots[slide2index - 1].classList.add("dot-active");
}
showSlider2(slide2index);
