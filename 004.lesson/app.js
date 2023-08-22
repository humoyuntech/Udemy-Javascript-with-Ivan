
let num = 50;

// =========== 1 - The “while” loop ===========
// while(num < 55) {
//     console.log(num);
//     num++;
// }

// =========== 2 - The “do…while” loop===========

// do {
//     console.log(num);
//     num++;
// }
// while(num <= 60)

// =========== 3 - The “for” loop ===========

// for(i = 1; i <= 20; i++) {
//     if(i===6){
        // break; //to'xtadi
       // continue; // tashlab ketadi
//     }
//     console.log(i);
// }


// for(let i = 0; i < 3; i++) {
//         console.log("i", "=", i);
//         for(let j = 0; j < 3; j++){
//                 console.log("j", "=", j);
//         }
// }


// ============ Yangi dars ============

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for(let i = 1; i < length; i++){
//         for(j = 0; j < i; j++){
//                 result += "*";
//         }
//         result += '\n';
// };

// console.log(result);

// first: for(let i = 0; i < 3; i++) {
//         console.log(`First level: ${i}`);
//         for(let j = 0; j < 3; j++){
//                 console.log(`Second level: ${j}`);
//                 for(let k = 0; k < 3; k++){
//                         if(k===2) continue first;
//                         console.log(`Third level: ${k}`);
//                 }
//         }
// }