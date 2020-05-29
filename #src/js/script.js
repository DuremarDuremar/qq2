@@include("burger.js");
@@include("tabs.js");
@@include("move.js");
@@include("timer.js");
@@include("adaptivjs.js");
@@include("slider.js");
@@include("slider2.js");
@@include("calcSelect.js");
@@include("ajax.js");
@@include("other.js");

let checkboxDiv = document.querySelector(".dop");
let checkbox = document.querySelector(".dop input");

if (localStorage.getItem("isChecked") === "false") {
  localStorage.setItem("isChecked", false);
  checkbox.checked = false;
} else {
  localStorage.setItem("isChecked", true);
  checkbox.checked = true;
}

checkbox.addEventListener("click", function () {
  if (localStorage.getItem("isChecked") === "false") {
    localStorage.setItem("isChecked", true);
  } else {
    localStorage.setItem("isChecked", false);
  }
});
