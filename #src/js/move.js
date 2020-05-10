let circleMove = document.querySelector(".circle");
let circleMove2 = circleMove.cloneNode(true);

let circleMove0 = document.querySelector(".circle0");

console.log(circleMove.getBoundingClientRect());

document.querySelector(".content-home-portfolio-title").prepend(circleMove2);
document
  .querySelector(".content-home-portfolio-title")
  .appendChild(circleMove0);

// let text = document.querySelector(".container");
// let textHeight = text.scrollHeight;
// let textWidth = text.clientWidth;
// console.log(text.getBoundingClientRect());

////////////////////////////////////////////////////////

let fff = document.querySelector(".arrow");

fff.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

/////////////////////////////////////////////

let start = 0;

function move() {
  start = start + 16;
  circleMove.style.top = start + "px";
  if (start > 600) {
    return true;
  }
  setTimeout(move, 400);
}

let pusk = document.querySelectorAll(".about a");
console.log(pusk);

pusk.forEach((e) => {
  e.onclick = move;
});

let link = document.querySelectorAll(".stop a");
console.log(link);

link.forEach((e) => {
  e.onclick = function () {
    start = 0;
  };
});
