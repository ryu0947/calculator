"use strict";

const showNumber = document.getElementById("show-number");
const numPanels = document.querySelectorAll(".num");
const reset = document.getElementById("ac");
let countUp = 1;

numPanels.forEach((numPanel) => {
  numPanel.addEventListener("click", () => {
    reset.textContent = "C"; 
    if (countUp < 10) {
      if (showNumber.textContent === "0") {
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