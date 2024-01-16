'use strict';
const box = document.querySelector(".box");
const btn = document.querySelector("button")


/**
* ===========================
* ===========================
* clientWidth/Height
 * ===========================
 * ===========================

* Ushbu xususiyatlar element ramkalari ichidagi maydonning o'lchamidir.

 * Ular tarkibiga tarkib maydonining kengligi va 
 * ichki padding yozuvlari kiradi, lekin scrolsiz:
 */
// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log('width:', width);
// console.log('height:', height);
/**
* ===========================
* ===========================
*  offsetWidth/Height
 * ===========================
 * ===========================
 * Ular elementning "tashqi" kengligi/balandligini, ya'ni uning 
 * to'liq hajmini, shu jumladan ramkalarni o'z ichiga oladi.
*/

// const offsetwidth = box.offsetWidth;
// const offsetheight = box.offsetHeight;

// console.log('offset-width:', offsetwidth);
// console.log('offset-height:', offsetheight);
/**
 * ===========================
 * ===========================
 * 1.scrollWidth/Height
 * 2.scrollLeft/scrollTop
 * ===========================
 * ===========================
 * 1.  Bu xususiyatlar clientWidth/clientHeight kabi, 
 *  lekin elementning scroll (ko'rinmaydigan) 
 *  qismini ham o'z ichiga oladi.
 * 
 * 2.  crollLeft / scrollTop xususiyatlari-elementning chap va yuqori
 *   qismidagi ko'rinmas, o'ralgan qismining kengligi/balandligi.
 */



const scrollwidth = box.scrollWidth;
const scrollheight = box.scrollHeight;

// console.log('scroll-width:', scrollwidth);
// console.log('scroll-height:', scrollheight);


btn.addEventListener("click", ()=> {
    //boxni scrollni bo'yiga teng qilish
    box.style.height = box.scrollHeight + "px";

    //qancha scroll qilganimizni aniqlash
    // alert(box.scrollTop);
});

/**
  * ===========================
  * ===========================
  * getBoundingClientRect()
  * ===========================
  * ===========================
  * 
  * Element.getBoundingClientRect() -
  * Element metodi .getBoundingClientRect () elementning o'lchamini va uning 
  * viewportga nisbatan pozitsiyasini qaytaradi (sahifaning ekranda ko'rsatilgan
  * qismi va biz ko'rib turgan qismi).
  * 
  * ===========================
  * https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect
  * ===========================
  * 
 */

// console.log(box.getBoundingClientRect());
// console.log("x:", box.getBoundingClientRect().x);
// console.log("y:", box.getBoundingClientRect().y);

/**
 * ===========================
 * ===========================
 * getComputedStyle- elementga qo'llanilgan barcha
 * css larni ko'rsatadi.
 * style.css da yozilgan inline style emas bu Computed Style
 * ===========================
 * ===========================
 */

// const style = window.getComputedStyle(box);

// console.log(style);
// console.log(style.display);


/**
 * ===========================
 * ===========================
 * sahifani qayeriga kelganni ko'rish
 * ===========================
 * ===========================
 */

// console.log(document.documentElement.scrollTop);
/**
 * ===========================
 * ===========================
 * scrollBy-sahifani turgan joyidan pasga qarab 
 * ko'rsatilgan pxgacha scrol qiladi
 * 
 * scrollTo- sahifani boshidan pasga qarab 
 * ko'rsatilgan pxgacha scrol qiladi
 * ===========================
 * ===========================
 */

// window.scrollBy(0 ,40)
// window.scrollTo(0 ,40)














