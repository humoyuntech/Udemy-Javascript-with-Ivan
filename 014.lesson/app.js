

const soldier = {
    health: 400,
    armor: 100,
    sayHI(){
        console.log("How are you?");
    }
};


const jonh = { 
    health: 100
};

/*
==============="Prototype"ning eskirgan usulo===============
*/

// jonh.__proto__ = soldier;

// console.log(jonh);
// console.log(jonh.armor);
// jonh.sayHI();

/*
==============="Prototype"ning yangi usulo===============
*/
// 1.Object.setPrototypeOf
// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh);
// console.log(jonh.armor);
// jonh.sayHI();

// 2.Object.create()
let nick = Object.create(soldier);
nick.sayHI();
console.log(nick);
console.log(nick.armor);


