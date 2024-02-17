'use strict';

/**
 function User(name, age) {
     this.name = name;
     this.age = age;
 
     this.say = function() {
         console.log(`Foydalanuvchi ${this.name}, yoshi ${this.age}`);
     }
 }
 
 let humoyun = new User('Humoyun', 30);
 // tashqi tarafdan ta'sir qilish mumkin
 //foydalanish mumkin
 console.log(humoyun.name);
 console.log(humoyun.age);
 //o'zgartirish
 humoyun.name = 'Jahongir';
 humoyun.age = 31;
 humoyun.say()
 
 */
//-----------------------
/**
 function User(name, age) {
    this.name = name;
    let userAge = age;
 
    this.say = function() {
        console.log(`Foydalanuvchi ${this.name}, yoshi ${userAge}`);
    }
 }
 
 let humoyun = new User('Humoyun', 30);
 
 // inkapsulatsiya orqali foydalanish mumkin emas xolatga keltirdik 
 console.log(humoyun.name);
 console.log(humoyun.userAge);
 //o'zgartirish
 humoyun.name = 'Jahongir';
 humoyun.userAge = 31;
 humoyun.say() 
 */
//--------------------------------------------
// geter va seter orqali inkapsulatsiya qilish
//--------------------------------------------
/**
function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Foydalanuvchi ${this.name}, yoshi ${userAge}`);
    };

    this.getAge = function(){
        return userAge;
    };

    this.setAge = function(age){
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('yaroqsiz qiymat');
        };
    };
}

let humoyun = new User('Humoyun', 29);
 
// inkapsulatsiya orqali foydalanish mumkin emas xolatga keltirdik 
console.log(humoyun.name);
console.log(humoyun.getAge());

//o'zgartirish
humoyun.setAge(32);
humoyun.setAge(300);
console.log(humoyun.getAge());

humoyun.say();
*/
//------------------------------------------------------
/**
function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Foydalanuvchi ${this.name}, yoshi ${userAge}`);
    };

    this.getAge = function(){
        return userAge;
    };

    this.setAge = function(age){
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('yaroqsiz qiymat');
        };
    };
}

let humoyun = new User('Humoyun', 29);
 
// inkapsulatsiya orqali foydalanish mumkin emas xolatga keltirdik 
console.log(humoyun.name);
console.log(humoyun.getAge());

//o'zgartirish
humoyun.setAge(32);
humoyun.setAge(300);
console.log(humoyun.getAge());

humoyun.say();
*/
//----------------------------------------------------------------------------------------
//=== Class orqali
class User {
    constructor(name, age){
    this.name = name;
    this._age = age;
    }

    say(){
        console.log(`Foydalanuvchi ${this.name}, yoshi ${this._age}`);
    }

    get age(){
        return this._age;
    }

    set age(age){
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('yaroqsiz qiymat');
        };
    }
}

let humoyun = new User('Humoyun', 29);
 
// inkapsulatsiya orqali foydalanish mumkin emas xolatga keltirdik 
console.log(humoyun.age);
humoyun.age = 99;
console.log(humoyun.age);
humoyun.say();


