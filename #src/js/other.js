let rus = document.querySelector(".Russia");

rus.addEventListener("click", function (event) {
  //   this.style.backgroundColor = "red";
  event.target.style.backgroundColor = "green";
});

let user1 = {
  name: "Ivan",
  color: " white",
};

let user2 = {
  name: "Sergay",
  color: " braun",
};

let user3 = {
  name: "Oleg",
  color: " gray",
};

function userName(number) {
  //   console.log(this);
  console.log(this.name + this.color + number);
}

// userName();

// userName.call(user1, " 3");
// userName.apply(user2, [" 4", " 5"]);

//////////////////////promis

// function Gre() {

// }

// Gre();

// const pr = new Promise(function (resolve, reject) {
//   // setTimeout(function () {
//   //   console.log("eeeee");
//   // }, 4000);
//   console.log("www");
//   console.log("rrrrr");
//   const color = {
//     red: 09,
//     green: 12,
//   };
//   resolve(color);
// });

// pr.then((color) => {
//   console.log(color.green);

// });
