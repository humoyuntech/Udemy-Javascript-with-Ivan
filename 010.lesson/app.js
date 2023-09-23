console.log("Callback");

/* ==============================================

Callback - в JavaScript - это функция, которая передается в качестве аргумента другой функции и выполняется после завершения выполнения этой функции

Callback - JavaScript-da, boshqa funktsiyaga argument sifatida uzatiladigan va ushbu funktsiyani bajarishni tugatgandan so'ng bajariladigan funksiya.

================================================ */

function learnJS(lang, callback) {
    console.log(`Men ${lang}ni o'qiyobman!!!`);

    callback();
}

function onStatus() {
    console.log("Kursni tugatim...");
}


learnJS("JavaScript", onStatus)


