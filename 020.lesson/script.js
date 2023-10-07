const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const overlay = document.querySelector(".overlay");
const link =document.querySelector('a');
// ================= eski usul =================

// btn.onclick = function() {
//     alert('Bosildi!'); 
// };

// ================= yangi usul =================

// btn.addEventListener('click', () => {
//     alert('Salom dunyo');
// });

// ================= mouseenter-sichqoncha element ustiga kelganda ishga tushadi =================

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// ===================================================================


// =========================================== elementga ulanish va elementni o'chirish
// document.body.addEventListener('click', (e) => {
   //  console.log(e);
   //  console.log(e.target); //elementga ulanish;
  // e.target.remove(); //elementni o'chirish;

  // if (e.target.classList.contains('link'))  {
  //   alert(123)
  // }

// });



// =========================================== bir marta ishlatib hodisani o`chirish

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i ==1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);
//2-misol

function handleMouseClick(event) {
  console.log('Вы нажали на элемент:', event.target)
}

// Добавляем обработчик события
btn.addEventListener('click', handleMouseClick)

// Убираем обработчик события
btn.removeEventListener('click', handleMouseClick)


//link:(https://doka.guide/js/element-removeeventlistener/)




// ==============================================================
// ====================всплытие события js=======================
// ==============================================================
// const deleteElement = (e) => {
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//     // console.log(e.type);
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
// ===========================================



// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(event.target);
// });


// =================================================
// =================Bir nechta elemetga o'rnatish===
// =================================================

// btns.forEach((item) => {
//   item.addEventListener("click", (e)=> {
//     console.log(e.target);
//   })
// })