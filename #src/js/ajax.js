let irub = document.querySelector(".rub");
let iusd = document.querySelector(".usd");
let number;

irub.addEventListener("input", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
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

////////////////////////////////////////////////////////////

let message = {
  loading: "загрузка...",
  success: "спасибо",
  failure: "ошибка",
};

let form = document.querySelector(".ajax2 form");

let input = form.querySelector("input");

let statusMessage = document.createElement("div");
statusMessage.classList.add("status");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  input.classList.toggle("border-red");
  form.appendChild(statusMessage);

  let request = new XMLHttpRequest();
  request.open("POST", "http://jsonplaceholder.typicode.com/posts");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  let formData = new FormData(form);
  request.send(formData);

  request.addEventListener("readystatechange", function () {
    if (request.readyState < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (this.readyState.readyState === 4 && request.status == 200) {
      statusMessage.innerHTML = message.success;
    } else {
      statusMessage.innerHTML = message.failure;
    }
  });
});
