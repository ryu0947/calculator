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
let isPlusPush;
let isMinusPush = true;
let isCalcPush;

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
    isMinusPush = false;
  });
});

clear.addEventListener("click", () => {
  if (clear.textContent === "AC") {
    showNumber.textContent = "0";
    calc = 0;
    plus.classList.remove("click");
    minus.classList.remove("click");
  } else {
    showNumber.textContent = "0";
    clear.textContent = "AC";
  }
  countUp = 0;
  isPush = false;
  isPointPush = false;
  point.disabled = false;
  isCalcPush = false;
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
  isPush = true;
  if (isCalcPush) {
    minusValue();
  }
  if (isPush) {
    isPlusPush = true;
    isAnswer();
  }
  calc = Number(showNumber.textContent);
  point.disabled = false;
  countUp = 0;
  isPointPush = true;
  minus.classList.remove("click");
});

minus.addEventListener("click", () => {
  minus.classList.add("click");
  isPush = true;
  calc = Number(showNumber.textContent);
  point.disabled = false;
  countUp = 0;
  isPointPush = true;
  plus.classList.remove("click");
});

equal.addEventListener("click", () => {
  if (plus.classList.contains("click")) {
    addition();
  } else if (minus.classList.contains("click")) {
    subtraction();
  }
});

function isAnswer() {
  if (isPlusPush) {
    calc += Number(showNumber.textContent);
    showNumber.textContent = calc;
    isPlusPush = false;
  } else if (isMinusPush) {
    calc -= Number(showNumber.textContent);
    showNumber.textContent = calc;
  }
}

function addition() {
  if (showNumber.textContent.length < 10) {
    calc += Number(showNumber.textContent);
    showNumber.textContent = calc;
    plus.classList.remove("click");
    calc = 0;
    isPush = true;
    isMinusPush;
  } else {
    showNumber.textContent = "error";
    plus.classList.remove("click");
    isMinusPush = 0;
  }
}

function subtraction() {
  if (showNumber.textContent.length < 10) {
    calc -= Number(showNumber.textContent);
    showNumber.textContent = calc;
    minus.classList.remove("click");
    calc = 0;
    isPush = true;
    isMinusPush;
  } else {
    showNumber.textContent = "error";
    minus.classList.remove("click");
    isMinusPush;
  }
}

function minusValue() {
  showNumber.textContent = "-" + showNumber.textContent;
  isCalcPush = false;
  isMinusPush = true;
}
