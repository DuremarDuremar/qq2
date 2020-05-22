let irub = document.querySelector(".rub");
let iusd = document.querySelector(".usd");
let number;

irub.addEventListener("input", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  console.log(request);
  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);

      number = irub.value / data.usd;
      iusd.value = number.toFixed(2);
    } else {
      iusd.value = "bad";
    }
  });
});
