let burger = document.querySelector(".header-burger");

burger.addEventListener("click", function (event) {
  event.preventDefault;
  burger.classList.toggle("_active-burger");
  document.querySelector(".nav-burger").classList.toggle("_active-burger");
  document.querySelector(".main-modal").classList.toggle("_active-burger");
});

window.onresize = function () {
  if (window.matchMedia("screen and (min-width:778px)").matches) {
    document.querySelector(".nav-burger").classList.remove("_active-burger");
    document.querySelector(".main-modal").classList.remove("_active-burger");
    burger.classList.remove("_active-burger");
  } else {
  }
};
;
let tab = document.querySelectorAll(".link");
let info = document.querySelector(".header-nav");
let tabContent = document.querySelectorAll(".content");

let tabadap = document.querySelectorAll(".linkadaptiv");
let infoadap = document.querySelector(".nav-burger");

function hideTabContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
  }
}
hideTabContent(1);

function showTabContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}

info.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("link")) {
    for (let i = 0; i < tab.length; i++) {
      if (event.target == tab[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
});

infoadap.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("linkadaptiv")) {
    for (let i = 0; i < tabadap.length; i++) {
      if (event.target == tabadap[i]) {
        hideTabContent(0);
        showTabContent(i);
        document
          .querySelector(".nav-burger")
          .classList.remove("_active-burger");
        document
          .querySelector(".main-modal")
          .classList.remove("_active-burger");
        burger.classList.remove("_active-burger");
        break;
      }
    }
  }
});
;
let circleMove = document.querySelector(".circle");
let circleMove2 = circleMove.cloneNode(true);

let circleMove0 = document.querySelector(".circle0");

console.log(circleMove.getBoundingClientRect());

document.querySelector(".content-home-portfolio-title").prepend(circleMove2);
document
  .querySelector(".content-home-portfolio-title")
  .appendChild(circleMove0);

let text = document.querySelector(".content-home-portfolio-title");
// let textHeight = text.scrollHeight;
let moveWidth = text.clientWidth;
console.log(moveWidth);

// console.log(text.getBoundingClientRect());

////////////////////////////////////////////////////////

let fff = document.querySelector(".arrow");

fff.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

/////////////////////////////////////////////

let start = 0;

// let home = document.querySelectorAll(".home a");

// console.log(home);

// home.forEach((e) => {
//   e.onclick = function () {
//     if (window.matchMedia("screen and (max-width:700px)").matches) {
//       start = 400;
//     } else {
//       start = 0;
//     }
//   };
// });

if (window.matchMedia("screen and (max-width:700px)").matches) {
  start = 400;
} else {
  start = 0;
}

// window.onresize = function () {

// };

window.addEventListener("resize", function () {
  if (window.matchMedia("screen and (max-width:700px)").matches) {
    start = 400;
  } else {
    start = 0;
  }
});

// window.addEventListener('resize', someFunc2);

function move() {
  start = start + 32;
  circleMove2.style.left = start + "px";
  if (start > moveWidth) {
    return true;
  }
  setTimeout(move, 400);
}

circleMove2.addEventListener("click", function () {
  move();
});

let pusk = document.querySelectorAll(".about a");
console.log(pusk);

// pusk.forEach((e) => {
//   e.onclick = move;
// });

let link = document.querySelectorAll(".stop a");
console.log(link);

link.forEach((e) => {
  e.onclick = function () {
    start = 0;
  };
});
;
let deadline = "2020-07-27";

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    // hours = Math.floor(t / (1000 * 60 * 60));
    hours = Math.floor((t / 1000 / 60 / 60) % 24),
    days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function setClock(id, endtime) {
  let timer = document.getElementById(id),
    days = timer.querySelector(".days"),
    hours = timer.querySelector(".hours"),
    minutes = timer.querySelector(".minutes"),
    seconds = timer.querySelector(".seconds"),
    timeInterval = setInterval(updateClock, 1000);

  function updateClock() {
    let t = getTimeRemaining(endtime);
    days.textContent = t.days;

    // minutes.textContent = t.minutes;
    // seconds.textContent = t.seconds;

    if (t.hours < 10) {
      hours.textContent = "0" + t.hours;
    } else {
      hours.textContent = t.hours;
    }

    if (t.minutes < 10) {
      minutes.textContent = "0" + t.minutes;
    } else {
      minutes.textContent = t.minutes;
    }

    if (t.seconds < 10) {
      seconds.textContent = "0" + t.seconds;
    } else {
      seconds.textContent = t.seconds;
    }

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}
setClock("timer", deadline);
;
("use strict");

(function () {
  let originalPositions = [];
  let daElements = document.querySelectorAll("[data-da]");
  let daElementsArray = [];
  let daMatchMedia = [];
  //Заполняем массивы
  if (daElements.length > 0) {
    let number = 0;
    for (let index = 0; index < daElements.length; index++) {
      const daElement = daElements[index];
      const daMove = daElement.getAttribute("data-da");
      if (daMove != "") {
        const daArray = daMove.split(",");
        const daPlace = daArray[1] ? daArray[1].trim() : "last";
        const daBreakpoint = daArray[2] ? daArray[2].trim() : "767";
        const daDestination = document.querySelector("." + daArray[0].trim());
        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute("data-da-index", number);
          //Заполняем массив первоначальных позиций
          originalPositions[number] = {
            parent: daElement.parentNode,
            index: indexInParent(daElement),
          };
          //Заполняем массив элементов
          daElementsArray[number] = {
            element: daElement,
            destination: document.querySelector("." + daArray[0].trim()),
            place: daPlace,
            breakpoint: daBreakpoint,
          };
          number++;
        }
      }
    }
    dynamicAdaptSort(daElementsArray);

    //Создаем события в точке брейкпоинта
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daBreakpoint = el.breakpoint;
      const daType = "max"; //Для MobileFirst поменять на min

      daMatchMedia.push(
        window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)")
      );
      daMatchMedia[index].addListener(dynamicAdapt);
    }
  }
  //Основная функция
  function dynamicAdapt(e) {
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daElement = el.element;
      const daDestination = el.destination;
      const daPlace = el.place;
      const daBreakpoint = el.breakpoint;
      const daClassname = "_dynamic_adapt_" + daBreakpoint;

      if (daMatchMedia[index].matches) {
        //Перебрасываем элементы
        if (!daElement.classList.contains(daClassname)) {
          let actualIndex = indexOfElements(daDestination)[daPlace];
          if (daPlace === "first") {
            actualIndex = indexOfElements(daDestination)[0];
          } else if (daPlace === "last") {
            actualIndex = indexOfElements(daDestination)[
              indexOfElements(daDestination).length
            ];
          }
          daDestination.insertBefore(
            daElement,
            daDestination.children[actualIndex]
          );
          daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(daElement);
          daElement.classList.remove(daClassname);
        }
      }
    }
    customAdapt();
  }

  //Вызов основной функции
  dynamicAdapt();

  //Функция возврата на место
  function dynamicAdaptBack(el) {
    const daIndex = el.getAttribute("data-da-index");
    const originalPlace = originalPositions[daIndex];
    const parentPlace = originalPlace["parent"];
    const indexPlace = originalPlace["index"];
    const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  }
  //Функция получения индекса внутри родителя
  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  }
  //Функция получения массива индексов элементов внутри родителя
  function indexOfElements(parent, back) {
    const children = parent.children;
    const childrenArray = [];
    for (let i = 0; i < children.length; i++) {
      const childrenElement = children[i];
      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute("data-da") == null) {
          childrenArray.push(i);
        }
      }
    }
    return childrenArray;
  }
  //Сортировка объекта
  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      } //Для MobileFirst поменять
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  //Дополнительные сценарии адаптации
  function customAdapt() {
    const viewport_width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }
})();
;
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
;

let imgHome = document.querySelectorAll(".content-home-portfolio-block img");
let imgHomePort = document.querySelector(".content-home-portfolio-block");
let modalW = document.querySelector(".modal-window");
// console.log(modalW);
let test11 = document.querySelector(".test11");
let test12 = document.querySelector(".test12");
// console.log(test11);

// for (let i = 0; i < imgHome.length; i++) {
//   console.log(imgHome[3]);
// }

// for (let item = 0; item < imgHome.length; item++) {
//   let ffg = { item };
//   console.log(ffg);
// }

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
