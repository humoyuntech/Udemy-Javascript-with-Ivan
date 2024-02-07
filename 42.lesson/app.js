"use strict";

const person = {
    name: 'Alex',
    tel: '+998997008090',
};

//===> Objectni JSONga o'zgartirish
let jsonObj = JSON.stringify(person);
console.log(jsonObj);

//===> JSONni Objectga o'zgartirish
let obj = JSON.parse(jsonObj);
console.log(obj);



