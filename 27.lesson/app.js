"use strict";

const btns = document.querySelectorAll("button");
const wrapper = document.querySelector(".btn-block");

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
const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);


// ========== class orqali tekshirish
// wrapper.addEventListener("click", (event) => {
//     if(event.target && event.target.classList.contains("blue")){
//         console.log("Hello");
//     }
// });


//============= Element orqali tekshirish
// wrapper.addEventListener("click", (event) => {
//     if(event.target && event.target.tagName == "BUTTON"){
//         console.log("Hello");
//     }
// });


//delegation bo'lmasa addEventListener qo'shilsa dynamic elementlarda ishlamaydi

// btns.forEach(item => {
//     item.addEventListener("click", ()=> {
//         console.log("Hi");
//     })
// })

//=============== matches metodi orqali tekshirish
wrapper.addEventListener("click", (event) => {
    if(event.target && event.target.matches("button.red")){
        console.log("Hello");
    }
});




