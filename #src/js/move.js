let circleMove = document.querySelector(".circle");
let circleMove2 = circleMove.cloneNode(true);

let circleMove0 = document.querySelector(".circle0");

console.log(circleMove.getBoundingClientRect());

document.querySelector(".content-home-portfolio-title").prepend(circleMove2);
document
  .querySelector(".content-home-portfolio-title")
  .appendChild(circleMove0);

let text = document.querySelector(".content-home-portfolio-title");
// let textHeight = text.scrollHeight;
let moveWidth = text.clientWidth;

// console.log(text.getBoundingClientRect());

////////////////////////////////////////////////////////

let fff = document.querySelector(".arrow");

fff.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

/////////////////////////////////////////////

let start = 0;

// let home = document.querySelectorAll(".home a");

// console.log(home);

// home.forEach((e) => {
//   e.onclick = function () {
//     if (window.matchMedia("screen and (max-width:700px)").matches) {
//       start = 400;
//     } else {
//       start = 0;
//     }
//   };
// });

if (window.matchMedia("screen and (max-width:700px)").matches) {
  start = 400;
} else {
  start = 0;
}

// window.onresize = function () {

// };

window.addEventListener("resize", function () {
  if (window.matchMedia("screen and (max-width:700px)").matches) {
    start = 400;
  } else {
    start = 0;
  }
});

// window.addEventListener('resize', someFunc2);

function move() {
  start = start + 32;
  circleMove2.style.left = start + "px";
  if (start > moveWidth) {
    return true;
  }
  setTimeout(move, 400);
}

circleMove2.addEventListener("click", function () {
  move();
});

let pusk = document.querySelectorAll(".about a");
console.log(pusk);

// pusk.forEach((e) => {
//   e.onclick = move;
// });

let link = document.querySelectorAll(".stop a");
console.log(link);

link.forEach((e) => {
  e.onclick = function () {
    start = 0;
  };
});
