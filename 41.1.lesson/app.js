// rest - alohida elementlarni Arrayga biriktiradi
const log = function(a, b, ...rest){
    console.log(a, b, rest); //basic rest ['operator', 'user']
}

log("basic", "rest", "operator", "user"); 

//============

function calcOrDouble(number, basis = 5) {
    console.log(number * basis);
}

calcOrDouble(3)