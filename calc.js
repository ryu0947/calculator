"use strict";

const calc = document.getElementById("calc");
const numPanels = document.querySelectorAll(".num");
let nums = 10;

numPanels.forEach((numPanel) => {
  numPanel.addEventListener("click", () => {
    if (calc.textContent === "0") {
      calc.textContent = numPanel.value;
    } else {
      calc.textContent += numPanel.value;
    }
  });
});
