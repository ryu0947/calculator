"use strict";

const calc = document.getElementById("calc");
const numPanels = document.querySelectorAll(".num");
const reset = document.getElementById("ac");
let countUp = 1;

numPanels.forEach((numPanel) => {
  numPanel.addEventListener("click", () => {
    reset.textContent = "C"; 
    if (countUp < 10) {
      if (calc.textContent === "0") {
        calc.textContent = numPanel.value;
      } else {
        calc.textContent += numPanel.value;
        countUp++;
      }
    }
  });
});

reset.addEventListener("click", () => {
    calc.textContent = "0";
    reset.textContent = "AC";
    countUp = 1;
});