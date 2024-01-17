window.addEventListener("DOMContentLoaded", () => {
//================> Tabs start
let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items')

/**
 * 1.keraksiz tablarni yashiramiz:
 * 2.kerakli tabni ko'rsatamiz:
 * 3. clickni yaratamiz
 */

// 1
function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
};

//2
function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) =>{
    const target = event.target;
    
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if(target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

//================> end tabs
//================> Timer
const deadline = '2025-01-01';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / 1000 /60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,
    };
}

function getZero(num) {
    if(num > 0 && num <10) {
        return `0${num}`;
    }else{
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes= timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.total <=0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);

});