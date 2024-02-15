"use strict";

//eski sintaksis 
//new RegExp('pattern', 'flags');
//yangi sintaksis
// /pattern/f


let paragraph = document.querySelector('.paragraph').innerText;
//let reg =/qiditilaydigan element/qayerdan
let reg = /o/igm;

// flags
//i-Ushbu bayroq bilan qidirish registrga bog'liq emas: A va a o'rtasida farq yo'q.
// g-Ushbu bayroq yordamida qidiruv barcha mosliklarni(tasodiflarni) qidiradi, usiz esa faqat birinchisi.
// m-Ko'p qatorli rejim (ankorlarning ko'p qatorli rejimi bo'limida muhokama qilingan ^ $, bayroq "m").
// console.log(paragraph.search(reg));
// console.log(paragraph.match(reg));
// console.log(reg.test(paragraph)); //true

/**
 * Регулярные выражения - Regular expressions
 * https://learn.javascript.ru/regular-expressions
 */






