'use strict';

const box = document.querySelector('.box');

const newHeight = 50;
const newWidth = 50;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 300}px`;
}

changeParams(box, newHeight, newWidth);