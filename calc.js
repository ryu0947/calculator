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
let sum = 0;
let isPush;

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
  });
});

clear.addEventListener("click", () => {
  if (clear.textContent === "AC") {
    showNumber.textContent = "0";
    sum = 0;
    countUp = 0;
    isPush = false;
    point.disabled = false;
    plus.classList.remove("click");
  } else {
    showNumber.textContent = "0";
    clear.textContent = "AC";
    countUp = 0;
    isPush = false;
    point.disabled = false;
  }
});

point.addEventListener("click", () => {
  if (point.disabled === true) {
    return;
  }
  point.disabled = true;
  showNumber.textContent += point.value;
});

plus.addEventListener("click", () => {
  plus.classList.add("click");
  sum = Number(showNumber.textContent);
  isPush = true;
  point.disabled = false;
  countUp = 0;
});

equal.addEventListener("click", () => {
  addition();
});

function addition() {
  if (showNumber.textContent.length < 10) {
    sum += Number(showNumber.textContent);
    showNumber.textContent = sum;
    plus.classList.remove("click");
    sum = 0;
    isPush = true;
  } else {
    showNumber.textContent = "error";
    plus.classList.remove("click");
  }
}
