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
const read = document.querySelector(".readIt");


const form = document.querySelector('.form');
const submit = document.querySelector('.submit');

const fields = form.querySelectorAll('input')



form.addEventListener('submit', function (event) {
  event.preventDefault()

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank');
    }
  }

  if (name.value.length > 2 || name.value.length < 40) {
    console.log('name is absent');
  }
})





// submit.addEventListener('click', function (event) {
//   // event.preventDefault();
//   let result;

//   if (name.value.length > 2 || name.value.length < 40) {
//     return result++;
//   } else {
//     return false;
//   };

// });