"use strict";

const showNumber = document.getElementById("show-number");
const numPanels = document.querySelectorAll(".num");
const reset = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const divided = document.getElementById("divided");
const equal = document.getElementById("equal");
let countUp = 0;
let sum = 0;
let flag = false;

numPanels.forEach((numPanel) => {
  numPanel.addEventListener("click", () => {
    reset.textContent = "C";
    if (countUp < 10) {
      if (showNumber.textContent === "0" || flag === true) {
        showNumber.textContent = numPanel.value;
      } else {
        showNumber.textContent += numPanel.value;
      }
      countUp++;
    } else {
      showNumber.textContent = "error";
    }
  });
});

reset.addEventListener("click", () => {
  if (reset.textContent === "AC") {
    showNumber.textContent = "0";
    sum = 0;
    countUp = 0;
    plus.classList.remove("click");
  } else {
    showNumber.textContent = "0";
    reset.textContent = "AC";
    countUp = 0;
  }
});

plus.addEventListener("click", () => {
  plus.classList.add("click");
  sum = Number(showNumber.textContent);
  flag = true;
});

equal.addEventListener("click", () => {
  addition();
});

function addition() {
  sum += Number(showNumber.textContent);
  showNumber.textContent = sum;
  plus.classList.remove("click");
  sum = 0;
}
