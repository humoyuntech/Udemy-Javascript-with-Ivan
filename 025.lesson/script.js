'use strict';

// const box = document.querySelector('.box');

// const newHeight = 50;
// const newWidth = 50;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 300}px`;
// }

// changeParams(box, newHeight, newWidth);

// ==========================================
let game; // undefined
let game2 = null; //null
let game3 = "Sonic"; //string

console.log(game2 ?? game);
console.log(game ?? game2);
console.log(game ?? game3);
console.log(game ?? game2 ?? game3);


let user;
console.log(user ?? "Guest");
console.log(user || "Guest");

console.clear();
let score = 0; // false
let score2 = " "; // false

console.log(score || "no score registered"); // no score registered
console.log(score ?? "no score registered"); // 0
console.log(score2 ?? "no score registered"); // 0
/**
 * Nullish qiymati bor tarafni qaytaradi 0 bo'lsaham
 */


/**
 * https://www.youtube.com/watch?v=0zdfMJmWQsU
 */

// ==========================================

let a = "gilfayle",
    b = 42,
    c = null,
    d = undefined,
    e = '',
    f = false,
    g = 0, 
    h = NaN;

    console.log(a ?? ""); //gilfayle
    console.log(b ?? ""); //42
    console.log(c ?? "c is nullish"); //c is nullish
    console.log(d ?? "d is nullish");//d is nullish
    console.log(c || d || e || f || g || h || "hello"); //hello
    console.log(c ?? d ?? e ?? f ?? g ?? h ?? "hello"); //''
    console.log(c ?? d ?? f ?? g ?? h ?? "hello"); //false
    console.log(c ?? d ?? g ?? h ?? "hello"); // 0
    console.log(c ?? d ?? h ?? "hello"); //NaN
    console.log(c ?? d ?? "hello"); //hello
    /**
     * https://www.youtube.com/watch?v=onVLVOP7-gI
    */
// ==========================================






