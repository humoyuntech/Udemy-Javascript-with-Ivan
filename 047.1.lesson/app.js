"use strict";
//GET - So'rov

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));

//========================================================
//POST - So'rov

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:"POST",
//     body: JSON.stringify({name: "Alex"}),
//     headers: {
//         "Content-type": "application/json"
//     }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

//=========================================================================================================================================
//=========================================================================================================================================
//=========================================================================================================================================
// function promiseFunction() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let result = true;

//             if (result) {
//                 resolve('Done!');  
//             }else{
//                 reject('FAIL')
//             }
//         }, 500);
//     });
// }


// async function startPromise() {
//     try{
//         let result = await promiseFunction();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// startPromise()
//========================================================
// kurs valyuta

async function getCurrencies () {
    let url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    const response = await fetch(url)
    let data = await response.json();

    let usdRate = data.Valute.USD.Value.toFixed(2);
    let eurRate = data.Valute.EUR.Value.toFixed(2);

    let usdElement = document.querySelector("#usd");
    let eurElement = document.querySelector("#eur");

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;

}

getCurrencies();


//==O'zbekiston markaziy bankiga so'rov yuborish
//consolega chiqarish
async function getCurrenciestwice () {
    let url = 'https://cbu.uz/uz/arkhiv-kursov-valyut/json/';
    const response = await fetch(url)
    let data = await response.json();

    let res = data.filter((item) => {
        return item.id == 69
    })

    console.log(res[0].Rate);

}

getCurrenciestwice();

// O'zbekiston markaziy bankiga so'rov yuborishni chatGPT-versiyasi
// async function getCurrencies () {
//     let url = 'https://cbu.uz/uz/arkhiv-kursov-valyut/json/';
//     const response = await fetch(url)
//     let data = await response.json();

//     let res = data.filter((item) => {
//         return item.id == 69
//     });

//     if (res.length > 0) {
//         let rate = res[0].Rate;
//         console.log(rate); // Это значение, которое вы ищете
//         // Далее вы можете использовать переменную rate для вашего кода
//     } else {
//         console.log("Валюта с id 69 не найдена.");
//     }
// }

// getCurrencies();















// https://www.youtube.com/watch?v=xXBTwb7cc88&t=32s

