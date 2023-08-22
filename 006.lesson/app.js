"use strict"

// ============ function declaration ============
// let one = +prompt("birinchi son", ""),
//     two = +prompt("ikkinchi son", "");


// function calc(a, b) {
//  console.log(a + b);
// }

// calc(one, two)

// ============ function expression ============
// let logger = function() {
//     console.log("Hello function expression");
// };

// logger();
// ============ Arrow functions ============

// let sayHi = () => {
//     console.log("Hello!");
// }
// sayHi();

// ============ return ============


function dollorTosum(dollor) {
    return(dollor * 11605)
}

let value = dollorTosum(2);
console.log(value);