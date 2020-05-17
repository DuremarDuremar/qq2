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
let test11 = document.querySelector(".test11");
let test12 = document.querySelector(".test12");
// console.log(test11);

// for (let i = 0; i < imgHome.length; i++) {
//   console.log(imgHome[3]);
// }

for (let item of imgHome) {
  console.log(item);
}

imgHome.forEach((e) => {
  e = 2;
  console.log(imgHome.index);

  imgHome[e].addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
    imgHome[e].classList.add("active");
    modalW.classList.remove("modal-windowOff");
    document.body.style.overflow = "hidden";

    /////////////////////////open///////////////////
    // let activ = document.querySelector(".active");
    // console.log(activ);
    // document.querySelector(".modal-right").onclick = function () {
    //   activ.classList.remove("active");
    // };

    document
      .querySelector(".modal-right")
      .addEventListener("click", function () {
        imgHome[e].classList.remove("active");
        if (e + 1 == imgHome.length) {
          e = 0;
        } else {
          e++;
        }
        imgHome[e].classList.add("active");
      });
    document
      .querySelector(".modal-left")
      .addEventListener("click", function () {
        // e = e;
        imgHome[e].classList.add("active");
      });
    //   imgHome[activ].classList.remove("active");
    //   console.log(imgHome[activ]);
    //   if (activ + 1 == imgHome.length) {
    //     activ = 0;
    //   } else {
    //     activ++;
    //   }

    /////////////////////close//////////////////
    document
      .querySelector(".modal-close")
      .addEventListener("click", function () {
        modalW.classList.add("modal-windowOff");

        imgHome[e].classList.remove("active");
        document.body.style.overflow = "";
      });
  });
});

// let activ = document.querySelector(".active");
// console.log(activ);

// document.querySelector(".modal-right").onclick = function () {
//   activ.classList.remove("active");
// };

// let activ = 0;

// document.querySelector(".modal-right").onclick = function () {
//   images[activ].classList.remove("active");
//   console.log(images[activ]);
//   if (activ + 1 == images.length) {
//     activ = 0;
//   } else {
//     activ++;
//   }
// };
