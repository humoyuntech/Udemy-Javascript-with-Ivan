"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};

//==========objectga murajat qilish
// console.log(options.name);
// console.log(options["colors"]["bg"]);

//========== objectdan nimadirni o'chirish
// delete options.name
// console.log(options);

//========== objectdagi keylarni for loop qilish
let arr = [];
let arr2 = [];
let arr3 = [];
// for(let key in options){
    // arr.push(key);
    // arr2.push(options[key]);
    // console.log();
// }
// console.log(arr2);

//ichmaich ni for loop qilish
// for(let key in options){
//     if(typeof(options[key]) === "object"){
//         for(let i in options[key]){
//             arr3.push(options[key][i]);
//         }
//     }else{
//         arr3.push(options[key]);
//     }
// }

// console.log(arr3);

// ================Methods.
//Object.keys() Obyektni keylarini array qilib beradi
// let value = Object.keys(options);

//Деструктуризация 
let user = {
    name: "Khumoyun",
    age: 30,
    address: "Bukhara",
    skills: {
        one: "HTML",
        two: "CSS",
        three: "JavaScript"
    },
    sayHi(){
        console.log(`hello ${this.name}`);
    }
}

user.sayHi();

const {name, age, address, skills: {one, two, three}} = user;


console.log(name);
console.log(age);
console.log(address);
console.log(one);
























