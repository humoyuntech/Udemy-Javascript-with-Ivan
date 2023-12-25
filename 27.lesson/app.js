"use strict";

const btns = document.querySelectorAll("button");


// console.log(btns[0].classList.length); //nechta class borligini bilsa bo'ladi
// console.log(btns[0].classList.item(1)); // classni oladi
// btns[3].classList.add("red"); //class qo'shadi
// btns[0].classList.remove("blue"); // classni o'chiradi
// btns[0].classList.toggle("blue") //class bo'lsa o'chiradi bo'lmasa qo'shadi
// console.log(btns[0].classList.contains("blue")); //classni tekshirib true yoki false qaytaradi

// ===========dynamic class qo'shish
/*
btns[0].addEventListener("click", () => {
    if(!btns[1].classList.contains("red")) {
        btns[1].classList.add("red");
    }else{
        btns[1].classList.remove("red");
    }
});
*/
/*
btns[0].addEventListener("click", () => {
    btns[1].classList.toggle("red");
});
*/

// ==============================================================================
// =================================Делегирование событий
// =================================Event delegation
/**
 * ota-ona(parent) blogida hodisa(addEventListener) ildiriladi va
 * shu hodisa orqali tekshiriladi shart tekshiriladi
 */
const wrapper = document.querySelector(".btn-block");
const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

/**
 * Ushbu xolat (pastagi birinchi misol)da ota-ona(parent) blockda hodisa(addEventListener)
 * ildirilgan yuqorida dinamik holatga element yaratilgan
 */
// 1
// wrapper.addEventListener("click", (event) => {
//     if(event.target && event.target.tagName == "BUTTON"){
//         console.log("Hello BUTTON");
//     }
// });

// ========== class orqali tekshirish
//2
// wrapper.addEventListener("click", (event) => {
//     if(event.target && event.target.classList.contains("blue")){
//         console.log("Hello");
//     }
// });




//delegation bo'lmasa addEventListener qo'shilsa dynamic holatga yaratilgan elementlarda ishlamaydi

// btns.forEach(item => {
//     item.addEventListener("click", ()=> {
//         console.log("Hi");
//     })
// });

//=============== matches metodi orqali tekshirish
/**
 * matches-tasodifni tekshiradi
 */
// wrapper.addEventListener("click", (event) => {
//     if(event.target && event.target.matches("button.red")){
//         console.log("Hello");
//     }
// });




