"use strict";

let inputRub = document.querySelector("#rub")
let inputUsd = document.querySelector("#usd");

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () =>{
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed();
        } else {
            inputUsd.value = "Nimadir xatolik yuz berdi";
        }
    })
  
    




});

    /**
     * open - sozlamarni yig'adi
     * request.open(method, URL, Async, login, pass);    
    */
