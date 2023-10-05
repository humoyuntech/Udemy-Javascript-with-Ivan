'use strict';

let num = 600;


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue'; 
// box.style.width = '500px';      
// box.style.height = '500px';      
// box.style.borderRadius = "50%"

// === cssText-orqali huddi css da kod yozganday yoziladi:
// box.style.cssText = 'background-color: blue; width:500px';
// box.style.cssText = `background-color: blue; width:${num}px`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor ='#ff0000';

// === Sikl orqali ko'blab elementlarni o'zgartirish.

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// };


// === Teradigan metodlar orqali o'zgartirish

// hearts.forEach(item => {te
//     console.log(item);
//     item.style.backgroundColor = 'blue';
// });

// ======================================== Element yaratish

// createElement -orqali faqat JSda element yaratiladi va u faqat JSda mavjud
const div = document.createElement('div');
// const text = document.createTextNode('Men shuyerda');

div.classList.add('black'); //classList*** add-qo'shadi
console.log(div);

// yaratilgan element ichigiga yozish
div.innerHTML = "Hello world"; //HTML strukturani qo`yish(!!!warring!!!)
// div.textContent = "Hello"; //teks qoyish

// yaratilgan element sahifaga qoyish
// document.body.append(div); //qayerga qoyishni ko'rsatadi(oxiriga)
// wrapper.append(div); //(yuqoridagi holat)qayerga qoyishni ko`rsatadi(oxiriga)
// wrapper.prepend(div); //qayerga qoyishni ko`rsatadi(oldiga)

// yaratilgan element sahifaga qoyish
// hearts[0].before(div); // oldiga
hearts[0].after(div); // orqasiga
// ===================== sahifadan elementni o'chiradi
// circles[0].remove(); 

// =====================sahifadan elementni joyini alishtirish
// hearts[0].replaceWith(circles[0]);

// ===================================================


div.insertAdjacentHTML("beforebegin", "<h1>Salom</h1>")











