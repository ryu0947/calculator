"use strict";

const showNumber = document.getElementById("show-number");
const numPanels = document.querySelectorAll(".num");
const reset = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const divided = document.getElementById("divided");
const equal = document.getElementById("equal");
let countUp = 1;
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
        countUp++;
      }
    } else {
      showNumber.textContent = "error";
    }
  });
});

reset.addEventListener("click", () => {
  showNumber.textContent = "0";
  reset.textContent = "AC";
  countUp = 1;
});

plus.addEventListener("click", () => {
  plus.classList.toggle("click");
  sum += Number(showNumber.textContent);
  flag = true;
});

