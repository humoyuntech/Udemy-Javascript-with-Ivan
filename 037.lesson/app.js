"use strict";

// const num = new Number(3);
// console.log(num);

//==============================================
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
};

User.prototype.exet = function() {
    console.log(`${this.name} - ismli foydalanuvchi chiqdi`);
};

const ivanjon = new User('Ivanjon', 32)
const alex = new User('Alex', 32)

console.log(ivanjon);
console.log(alex);

ivanjon.hello();
alex.hello();

ivanjon.exet();


/**
 * ES(5) - Standarti, bu eskirgan, hozir Class - orqali qilinadi
 */









