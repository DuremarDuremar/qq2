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
    let b = PlaceChange2;
    totalValue.innerHTML = b * 1.1;
  } else if (localStorage.getItem("isChecked") === "true") {
    localStorage.setItem("isChecked", false);
    let d = PlaceChange2;
    totalValue.innerHTML = d;
  }
});
