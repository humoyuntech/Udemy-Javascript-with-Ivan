// setTimeout() - birmarta ishlaydi
// setInterval() - cheksiz ishlaydi



const timerId = setTimeout(() => {
    console.log("minut");
}, 1000)

//== yuqorodagini argument joylash
// const timerId = setTimeout((text) => {
//         console.log(text);
// }, 2000, "Hello")
    
/**
 * setTimeout() o'zgaruvchiga yozilgani sababi
 * clearInterval()- orqali setTimeout bekor qilinadi
 */

//=============================================
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500)
// })



// function logger () {
//     if(i ===3) {
//         clearInterval(timerId);
//     };
//     console.log("logger text");
//     i++;
// };

//=============================================
//=============================================
//=============================================
// recursiv setTimeout - bu o'zini - o'zi chaqiradi
//=============================================
//=============================================
//=============================================

// let id =setTimeout(function log(){
//     console.log("Hello");
//     id = setTimeout(log, 500);
// }, 500);




