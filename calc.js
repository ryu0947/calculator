"use strict";

const calc = document.getElementById("calc");
const numPanels = document.querySelectorAll(".num");
let countUp = 1;

numPanels.forEach((numPanel) => {
  numPanel.addEventListener("click", () => {
    if (countUp <= 10) {
      countUp++;
      if (calc.textContent === "0") {
        calc.textContent = numPanel.value;
      } else {
        calc.textContent += numPanel.value;
      }
    }
  });
});
