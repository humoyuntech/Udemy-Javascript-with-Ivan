"use strict";

let user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

//flagslarni xolatini ko'rish
// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Object.defineProperty(user, "name", {writable: false});
// user.name = "Janh";

//yangi element yaratamiz
Object.defineProperty(user, "gender", {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, "gender"));
// defineProperty orqali yaratganimizda hamma flagslar falseda turadi

/**
Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).
-writable – если true, свойство можно изменить, иначе оно только для чтения.
-enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
-configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

https://learn.javascript.ru/property-descriptors

 */








