let burger = document.querySelector(".header-burger");

burger.addEventListener("click", function (event) {
  event.preventDefault;
  burger.classList.toggle("_active-burger");
  document.querySelector(".nav-burger").classList.toggle("_active-burger");
  document.querySelector(".main-modal").classList.toggle("_active-burger");
});

window.onresize = function () {
  if (window.matchMedia("screen and (min-width:778px)").matches) {
    document.querySelector(".nav-burger").classList.remove("_active-burger");
    document.querySelector(".main-modal").classList.remove("_active-burger");
    burger.classList.remove("_active-burger");
  } else {
  }
};
