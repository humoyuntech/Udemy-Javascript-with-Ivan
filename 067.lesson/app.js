/**
 * bu function qanaqdir natijani ketma ketlikda generatsiya qiladi
 */




/**
function* generator() {
    yield 1 + 2;
    yield 3 + 4;
    yield 5 + 6;
}

const str = generator();

console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
*/

function* count(n) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// yuworidagi console.loglarni for of orqali chiqarish

for(let k of count(7)) {
    console.log(k);
}









