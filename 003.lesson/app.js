"use strict";

//=============== Conditional branching: if, 

if (num > 100) {
    console.log("its > 100");  
} else if(num < 9) {
    console.log("its < 9");
} else {
    console.log("its ok");
}

//=================== ternary operator '?'
let num = 100;

(num ===50) ? console.log("Ok") : console.log("Error");

//==================The switch case statement

let numberOne = 50 + 72;
console.log(numberOne);

switch(numberOne) {
    case 50:
        console.log("its: 50");
        break;
    case 122:
        console.log("its: 122");    
        break;
    case 132:
        console.log("its: 132");    
        break;  
    case 150:
        console.log("its: 150");    
        break;
    default: 
        console.log("I'm sorry");  
        break;        
}

