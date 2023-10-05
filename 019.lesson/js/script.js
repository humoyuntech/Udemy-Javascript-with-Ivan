/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


let advertisingImg = document.querySelectorAll(".promo__adv img");
let promoGenre = document.querySelector(".promo__genre");
let promoBg = document.querySelector(".promo__bg");
//1
advertisingImg.forEach(item => {
    item.remove();
})

//2
promoGenre.textContent = "Драма";
//3
// promoBg.cssText = 'background: url(./../img/bg.jpg)'
promoBg.cssText = 'background: url(./../img/bg.jpg)';




