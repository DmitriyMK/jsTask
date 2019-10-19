'use strict'


// Список полей:
// Имя (больше 2-х символов и меньше - 40)
// Логин (должен быть заполнен/не пустой)
// Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)
// Галочка - "Прочитал условия" (должна быть включена)
// Если хоть одно из условий не совпадает, то форма не валидна.

const name = document.querySelector(".name");
const login = document.querySelector(".login");
const pass = document.querySelector(".pass");
const read = document.getElementById("readIt");
const form = document.querySelector('.form');


// Имя (больше 2-х символов и меньше - 40)
const checkNumSymbolsName = function () {
  if (name.value.length > 2 && name.value.length < 40) {
    return true;
  }
};


// Логин (должен быть заполнен/не пустой)
const checkEmptyField = function () {
  if (login.value.length > 1) {
    return true;
  }
}


// Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)
const checkPassword = function () {
  let regexPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])({9,})/g;

  if ((regexPassword.test(pass.value)) {
    return true;
  }
}


// Галочка - "Прочитал условия" (должна быть включена)
const checkChecked = function (element) {
  if (element.checked) {
    return true;
  }
}


// Если хоть одно из условий не совпадает, то форма не валидна.
form.addEventListener('submit', function (event) {
  event.preventDefault();

  checkNumSymbolsName(name) &&
    checkEmptyField(login) &&
    checkPassword(pass) &&
    checkChecked(read) ? console.log("Все хорошо") : console.log("Все плохо");
})