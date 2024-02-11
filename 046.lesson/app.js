"use strict";
/**
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
        // reject(); // xatoliklar catch ga tushadi
    }, 2000);
});



// req.then((product) =>{
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product)
//         }, 2000);
//     });

//     req2.then(data => {
//         console.log(data);
//     });
// });

//========== ^ yuqoridagi bo'lakni o'zgartirilgani

req.then((product) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product)
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error("xato")
}).finally(() =>{
    console.log('The End');
});

*/
//===================================================================================================================================

/**
let test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(()=> console.log('1000 ms'));
// test(2000).then(()=> console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log("All");
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log("Once");
});

*/
//===================================================================================================================================
//===================================================================================================================================
//===================================================================================================================================
//===================================================================================================================================
//===================================================================================================================================
//===================================================================================================================================
//===================================================================================================================================

/**
 * JavaScript для начинающих 2024. Полный курс за 6 часов. Уроки. Теория + практика
 * https://www.youtube.com/watch?v=maPRR_jjyOE&list=TLPQMTAwMjIwMjRGHOZC322caQ&index=2
 */

/**
let myPromise = new Promise ((resolve, reject) => {
    console.log('Promise created');
    setTimeout(function() {
        // -- Serverga so'rov;
        let response = true;

        if(response){
            let message = "SUCCESS";
            resolve(message);
        }else{
            let message = "FAILED";
            reject(message);
        }
    }, 1000);
});

// myPromise.then((data)=> {
//     console.log("Then Ok 1", data);
//     return data
// }).then((data)=> {
//     console.log("Then Ok 2", data);
//     return data
// }).then((data)=> {
//     console.log("Then Ok 3", data);
//     return data
// }).catch((data) => {
//     console.error("error", data);
// });
*/

//===========================================yuqoridagi holatni asinxron ko'rinish
// asinxron yozish uchun har bitta then Promise qaytarishi kerak

/**
myPromise.then((data)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            console.log("Then Ok 1", data);

            const response = true;
            if(response){
                resolve('Data from then 1');
            }else{
                reject()
            }
        }, 1500);

    })
}).then((data)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            console.log("Then Ok 2", data);

            const response = true;
            if(response){
                resolve('Data from then 2');
            }else{
                reject()
            }
        }, 1000);

    })
}).then((data)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            console.log("Then Ok 3", data);

            const response = true;
            if(response){
                resolve('Data from then 3');
            }else{
                reject()
            }
        }, 500);

    })
}).catch((data) => {
    console.error("error", data);
});

 */


//===================================================================================================================================
//===========================================================Amalyot=================================================================
//===================================================================================================================================
/**
 
let checkRooms = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("🏨 Mehmonxonada bo'sh xonani tekshiramiz...");
        const availableRooms = true;

        if(availableRooms) {
            resolve('Xona bor... 👍🏻');
        }else{
            reject("Xona yo'q... 🙅‍♂️");
        }
    }, 1500);

});

checkRooms.then((data) => {
    console.log('------then 1------');
    console.log('Oldingi harakatni javobi:', data);
    console.log('Dam olishga ketamiz! 🌴');
}).catch((data) => {
    console.log("------catch------");
    console.log("Oldingi harakatni javobi:", data);
    console.log("Dam olish bekor bo'ldi! 😢");
})
 
*/

//===========================================================================================================================================
//yuqoridagi holatni kengaytirilgani

let checkRooms = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("🏨 Mehmonxonada bo'sh xona borligini tekshiramiz...");
        const availableRooms = true;

        if(availableRooms) {
            resolve('Xona bor... 👍🏻');
        }else{
            reject("Xona yo'q... 🙅‍♂️");
        }
    }, 1500);

});

checkRooms.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Oldingi harakatni javobi:", data);
            console.log('Samalyot biletini tekshiramiz...');
            
            const availableTickets = true;

            if(availableTickets){
                let message = 'Bilet bor! ✈️';
                resolve(message)
            }else{
                let message = "Bilet yo'q! ✈️";
                reject(message)
            };

        }, 1000)
    });
}).then((data) => {
    console.log("Oldingi harakatni javobi:", data);
    console.log("Dubaiga sayohatga ketamiz! 🌴");
}).catch((data) => {
    console.log("------catch------");
    console.log("Oldingi harakatni javobi:", data);
    console.log("Dubaiga sayohat bekor qilinadi! 😢");
})
 




















