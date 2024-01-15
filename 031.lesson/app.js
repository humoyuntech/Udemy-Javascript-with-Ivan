"use strict"

// Yaratish
let data = new Date(); //Hozirgi vaqtni chiqaradi
// console.log(data); 

// let newData = new Date(`2024-05-24`); //sanani o'rnatish 1-usuli
// console.log(newData);


// возвращает таймстамп – количество миллисекунд, 
//прошедших с 1 января 1970 года UTC+0.
// console.log(data.getTime());


/**
 * Haftaning kunini 0 (yakshanba) dan 6 (shanba) ga qaytaring. 
 * Ba'zi mamlakatlarda dushanba haftaning birinchi kuni sifatida qabul 
 * qilinganiga qaramay, JavaScript-da hafta boshi yakshanba kuniga to'g'ri keladi.
 */
// console.log(data.getDay());

//===Sanani chiqaradi
// console.log(data.getDate());

//===oyni chiqarish
//===Получить месяц, от 0 до 11
// console.log(data.getMonth() + 1);

//===yilni chiqaradi
// console.log(data.getFullYear());

//===Метод getHours() возвращает часы указанной даты по местному времени.
// console.log(data.getHours());

//===Метод getMinutes() возвращает минуты указанной даты по местному времени.
// console.log(data.getMinutes());

//===Метод getSeconds() возвращает секунды указанной даты по местному времени.
// console.log(data.getSeconds());

//===Метод getMilliseconds() возвращает миллисекунды указанной даты по местному времени.
// console.log(data.getMilliseconds());

//=== UTC bo'yincha soatni olish
// console.log(data.getUTCHours()); 
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================

// let now = new Date();
// console.log(now.setHours(1));
// console.log(now);


//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
/*
let start = new Date();

for(let i = 0; i < 1000000; i++) {
    let some = i **3;
}

let end = new Date();
console.log(`For loop ${end - start} millisekund ishladi`);
*/
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
// === Teimer
let counter = 0;

let setTimer = setInterval(() =>{
  counter++;
  console.log(counter);
}, 1000);

let newNum = 0; 





















