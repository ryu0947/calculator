'use strict';

const calc = document.getElementById('calc');
const numPanels = document.querySelectorAll('.num');

numPanels.forEach( numPanel => {
    numPanel.addEventListener("click", () => {
        calc.textContent = numPanel.value;
    });
});