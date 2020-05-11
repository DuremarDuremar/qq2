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
;
let tab = document.querySelectorAll(".link");
let info = document.querySelector(".header-nav");
let tabContent = document.querySelectorAll(".content");

let tabadap = document.querySelectorAll(".linkadaptiv");
let infoadap = document.querySelector(".nav-burger");

function hideTabContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
  }
}
hideTabContent(1);

function showTabContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}

info.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("link")) {
    for (let i = 0; i < tab.length; i++) {
      if (event.target == tab[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
});

infoadap.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("linkadaptiv")) {
    for (let i = 0; i < tabadap.length; i++) {
      if (event.target == tabadap[i]) {
        hideTabContent(0);
        showTabContent(i);
        document
          .querySelector(".nav-burger")
          .classList.remove("_active-burger");
        document
          .querySelector(".main-modal")
          .classList.remove("_active-burger");
        burger.classList.remove("_active-burger");
        break;
      }
    }
  }
});
;
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
console.log(moveWidth);

// console.log(text.getBoundingClientRect());

////////////////////////////////////////////////////////

let fff = document.querySelector(".arrow");

fff.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

/////////////////////////////////////////////

let start = 0;

let home = document.querySelectorAll(".home a");

console.log(home);

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
;
