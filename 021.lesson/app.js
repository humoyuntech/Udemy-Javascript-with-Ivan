"use strict";
// console.log(document.body);
// console.log(document.childElement);
// console.log(document.body.childNodes); //bu yerda bodyni barcha bog'lamlari va bolalarini qaytaradi. psevda massiv
// console.log(document.body.firstChild); // ota-onani birinchi elementini topadi
// console.log(document.body.lastChild);// ota-onani oxirgi elementini topadi

// console.log(document.querySelector('#current').parentNode); //bitta yuqoridagi ota-ona elementni qaytaradi
// console.log(document.querySelector('#current').parentNode.parentNode); //ikkta yuqoridagi ota-ona elementni qaytaradi

// console.log(document.querySelector('[data-current="3"]')); // data atributga qaytarish
// console.log(document.querySelector('[data-current="3"]').previousSibling); // data atributni oldingisini qaytarad
// console.log(document.querySelector('[data-current="3"]').nextSibling); // data atributni keyingisini qaytarish

for(let node of document.childNodes) {
    if(node.nodeName == '#text'){
        continue;
    }


    console.log(node);
}







