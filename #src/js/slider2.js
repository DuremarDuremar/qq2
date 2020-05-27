let slide2index = 1,
  slider2 = document.querySelectorAll(".slider2-item"),
  prev2 = document.querySelector(".slider2-prev"),
  next2 = document.querySelector(".slider2-next"),
  dotsWrap = document.querySelector(".slider2-dots"),
  dots = document.querySelectorAll(".slider2-dot");

let blockTimer = document.querySelectorAll(".works");

blockTimer.forEach(function (item) {
  item.addEventListener("click", function () {
    showSlider2(slide2index);
  });
});

function showSlider2(n) {
  if (n > slider2.length) {
    slide2index = 1;
  }
  if (n < 1) {
    slide2index = slider2.length;
  }

  slider2.forEach(function (item) {
    item.style.display = "none";
  });
  dots.forEach(function (item) {
    item.classList.remove("dot-active");
  });
  slider2[slide2index - 1].style.display = "flex";
  dots[slide2index - 1].classList.add("dot-active");
}

function plusSlide(n) {
  showSlider2((slide2index += n));
}

function currentSlide(n) {
  showSlider2((slide2index = n));
}

prev2.addEventListener("click", function () {
  plusSlide(-1);
});

next2.addEventListener("click", function () {
  plusSlide(1);
});

dotsWrap.addEventListener("click", function (event) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (
      event.target.classList.contains("slider2-dot") &&
      event.target == dots[i - 1]
    ) {
      currentSlide(i);
    }
  }
});
