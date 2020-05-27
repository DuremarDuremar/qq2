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

  if (days.value == "" || persons.value == "") {
    totalValue.innerHTML = 0;
  } else {
    totalValue.innerHTML = total;
  }
});

days.addEventListener("change", function () {
  daysSum = +this.value;
  total = (personsSum + daysSum) * 4000;

  if (persons.value == "" || days.value == "") {
    totalValue.innerHTML = 0;
  } else {
    totalValue.innerHTML = total;
  }
});

place.addEventListener("change", function () {
  if (days.value == "" || persons.value == "") {
    totalValue.innerHTML = 0;
  } else {
    let a = total;
    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
  }
});
