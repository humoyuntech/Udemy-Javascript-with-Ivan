"use strict";

let persone = {
    name: 'Humo',
    age: 25,

    //get nimadirni olishga ishlatiladi
    get userAge() {
        return this.age;
    },

    //set nimadirni o'rnatishni uchun ishlatiladi

    set userAge(num) {
        this.age = num;
    },
};


console.log(persone.userAge);
console.log(persone.userAge = 30);





