"use strict";
/*
function showThis() {
    console.log(this); // use strict - bo'lsa undefinedga teng, bo'lmasa window ga teng.
}

showThis();
*/
//=======================================================================================================

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         };
//         shout();
//     },
// };

// obj.sum();
//=======================================================================================================
//this-ni qo'l bilan(boshqa functionga yoki objectga) biriktirish
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// };

// const user = {
//     name: "Jahn"
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith1"]);

//==================
// bind- yangi function yaratasi

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

//=======================================================================================================

let btn = document.querySelector('button');
//1
// btn.addEventListener("click", function() {
//     console.log(this);
//     this.style.backgroundColor = 'red'; // knopkani qizilga bo'yaydi
// });

//2 this-yoqaladi
// btn.addEventListener("click", () => {
//     console.log(this);
//     this.style.backgroundColor = 'red'; // xatolik beradi
// });

