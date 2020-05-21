@@include("burger.js");
@@include("tabs.js");
@@include("move.js");
@@include("timer.js");
@@include("adaptivjs.js");
@@include("slaider.js");
@@include("other.js");

let irub = document.querySelector(".rub");
let iusd = document.querySelector(".usd");
let number;

irub.addEventListener("input", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  console.log(request);
  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);
      console.log(data);

      number = irub.value / data.usd;
      iusd.value = number.toFixed(2);

      //   iusd.value.toFixed(2) = iusd.value;
    } else {
      iusd.value = "bad";
    }
  });
  console.log(number);
});
