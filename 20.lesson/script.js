const btn = document.querySelector('button');

// ================= eski usul =================

// btn.onclick = function() {
//     alert('Bosildi!'); 
// };

// ================= yangi usul =================

btn.addEventListener('click', () => {
    alert('Salom dunyo');
});

// ================= mouseenter-sichqoncha element ustiga kelganda ishga tushadi =================

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// ===========================================
// btn.addEventListener('mouseenter', (e) => {
//        console.log(e);
   // console.log(e.target); //elementga ulanish;
  //e.target.remove(); //elementni o`chirish;
// });

// bir marta ishlatib hodisani o`chirish

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i ==1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);

// const link =document.querySelector('a');

// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(event.target);
// });