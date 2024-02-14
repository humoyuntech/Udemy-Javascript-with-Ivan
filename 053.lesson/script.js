'use strict';
/*
localStoragega yozish uchun setItem buyrug`i ishlatiladi
birinchi argument kalit(key);
 ikkinchi argument qiymat(value);
*/

// localStorage.setItem('number', 5);


//=== localStoragedan chiqrish uchun getItem buyrug`i ishlatiladi

// let oneLocalStorage = localStorage.getItem('number');

// localStorage.removeItem('number'); //===o`chirish
// localStorage.clear();

// console.log(oneLocalStorage);

//----------------------------------------------------

let checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');


if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if(localStorage.getItem('bg') === 'changed'){
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#red';
}
    
    checkbox.addEventListener('change', ()=> {
        localStorage.setItem('isChecked', true);
    });    

    change.addEventListener('click', () => {
        if(localStorage.getItem('bg') === 'changed'){
            localStorage.removeItem('bg');
            form.style.backgroundColor = '#fff';
        }else{
            localStorage.setItem('bg', 'changed');
            form.style.backgroundColor = 'red';
        }
    });


    let persone = {
        name: 'Humoyun',
        age: 25
    };

    // ===JSON-Farmatda chiqarish

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('persone', serializedPersone);
    console.log(JSON.parse(localStorage.getItem('alex')));

    //===oddiy farmatda chiqarish

    // localStorage.setItem('persone', persone);
    // console.log(localStorage.getItem('persone'));