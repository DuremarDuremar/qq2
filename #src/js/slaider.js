let imgHome = document.querySelectorAll(".content-home-portfolio-block img");
let imgHomePort = document.querySelector(".content-home-portfolio-block");
let modalW = document.querySelector(".modal-window");

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
        imgHome[e].classList.remove("active");
        if (e == 0) {
          e = imgHome.length - 1;
        } else {
          e--;
        }
        imgHome[e].classList.add("active");
      });

    /////////////////////close//////////////////
    document
      .querySelector(".modal-close")
      .addEventListener("click", function () {
        location.reload();
        // modalW.classList.add("modal-windowOff");
        // imgHome[e].classList.remove("active");
        // document.body.style.overflow = "";
      });
  });
});
