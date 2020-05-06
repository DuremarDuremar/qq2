let circleMove = document.querySelector(".circle");
console.log(circleMove);

let start = 0;

function move() {
  start = start + 16;
  circleMove.style.top = start + "px";
  if (start > 665) {
    return true;
  }
  setTimeout(move, 400);
  console.log(start);
}

let pusk = document.querySelectorAll(".about a");
console.log(pusk);

pusk.forEach((e) => {
  e.onclick = move;
});
