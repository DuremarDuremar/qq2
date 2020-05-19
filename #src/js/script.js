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

// for (let item = 0; item < imgHome.length; item++) {
//   let ffg = { item };
//   console.log(ffg);
// }

imgHome.forEach((e) => {
  console.log(e.dataset.number);

  e = e.dataset.number;

  imgHome[e].addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
    imgHome[e].classList.add("active");
    modalW.classList.remove("modal-windowOff");
    document.body.style.overflow = "hidden";

    /////////////////////////open///////////////////

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
        imgHome[e].classList.add("active");
      });

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
