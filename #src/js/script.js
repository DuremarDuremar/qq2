@@include("burger.js");
@@include("tabs.js");
@@include("move.js");
@@include("timer.js");
@@include("adaptivjs.js");
@@include("other.js");

let imgHome = document.querySelectorAll(".content-home-portfolio-block img");
let imgHomePort = document.querySelector(".content-home-portfolio-block");
let modalW = document.querySelector(".modal-window");
// console.log(modalW);

imgHome.forEach((e) => {
  e.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
    e.classList.add("active");
    modalW.classList.remove("modal-windowOff");
    document.body.style.overflow = "hidden";
    document
      .querySelector(".modal-close")
      .addEventListener("click", function () {
        modalW.classList.add("modal-windowOff");
        e.classList.remove("active");
        document.body.style.overflow = "";
      });
  });
});

let activ = document.querySelector(".active");
console.log(activ);

// let activ = 0;

// document.querySelector(".modal-right").onclick = function () {
//     images[activ].classList.remove("active");
//     console.log(images[activ]);
//     if (activ + 1 == images.length) {
//       activ = 0;
//     } else {
//       activ++;
//     }
