"use strict";

const showNumber = document.getElementById("show-number");
const numPanels = document.querySelectorAll(".num");
const clear = document.getElementById("clear");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const divided = document.getElementById("divided");
const point = document.getElementById("point");
const equal = document.getElementById("equal");

let countUp = 0;
let calc = 0;
let isPush;
let isPointPush;

numPanels.forEach((numPanel) => {
  numPanel.addEventListener("click", () => {
    clear.textContent = "C";
    if (countUp < 10) {
      if (showNumber.textContent === "0" || isPush === true) {
        showNumber.textContent = numPanel.value;
      } else {
        showNumber.textContent += numPanel.value;
      }
      countUp++;
    } else {
      showNumber.textContent = "error";
    }
    isPush = false;
    isPointPush = false;
  });
});

clear.addEventListener("click", () => {
  if (clear.textContent === "AC") {
    showNumber.textContent = "0";
    calc = 0;
    countUp = 0;
    isPush = false;
    isPointPush = false;
    point.disabled = false;
    plus.classList.remove("click");
  } else {
    showNumber.textContent = "0";
    clear.textContent = "AC";
    countUp = 0;
    isPush = false;
    isPointPush = false;
    point.disabled = false;
  }
});

point.addEventListener("click", () => {
  if (point.disabled === true) {
    return;
  }

  if (!isPointPush) {
    showNumber.textContent += ".";
  } else {
    countUp = 1;
    isPush = false;
    showNumber.textContent = "0.";
  }
  point.disabled = true;
});

plus.addEventListener("click", () => {
  plus.classList.add("click");
  calc = Number(showNumber.textContent);
  isPush = true;
  point.disabled = false;
  countUp = 0;
  isPointPush = true;
});

equal.addEventListener("click", () => {
  addition();
});

function addition() {
  if (showNumber.textContent.length < 10) {
    calc += Number(showNumber.textContent);
    showNumber.textContent = calc;
    plus.classList.remove("click");
    calc = 0;
    isPush = true;
  } else {
    showNumber.textContent = "error";
    plus.classList.remove("click");
  }

  function subtraction() {
    calc -= Number(showNumber.textContent);
    showNumber.textContent = calc;
    plus.classList.remove("click");
    calc = 0;
    isPush = true;
  }
}
