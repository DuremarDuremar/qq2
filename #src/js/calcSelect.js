let persons = document.querySelectorAll(".payment-inputs input")[0];
let days = document.querySelectorAll(".payment-inputs input")[1];
let place = document.querySelector("#place");
let totalValue = document.querySelector(".fin");
let personsSum = 0,
  daysSum = 0,
  total = 0;

persons.addEventListener("change", function () {
  personsSum = +this.value;
  total = (personsSum + daysSum) * 4000;

  if (localStorage.getItem("isChecked") === "true") {
    total = total * 1.1;
  }

  if (days.value == "" || persons.value == "") {
    totalValue.innerHTML = 0;
  } else {
    totalValue.innerHTML = total;
  }
});

days.addEventListener("change", function () {
  daysSum = +this.value;
  total = (personsSum + daysSum) * 4000;

  if (localStorage.getItem("isChecked") === "true") {
    total = total * 1.1;
  }

  if (persons.value == "" || days.value == "") {
    totalValue.innerHTML = 0;
  } else {
    totalValue.innerHTML = total;
  }
});

let PlaceChange = 0;
let PlaceChange2 = 0;

place.addEventListener("change", function () {
  if (days.value == "" || persons.value == "") {
    totalValue.innerHTML = 0;
  } else {
    PlaceChange = total;
    PlaceChange2 = PlaceChange * this.options[this.selectedIndex].value;
    totalValue.innerHTML = PlaceChange2;
  }
});

console.log(totalValue.textContent);
