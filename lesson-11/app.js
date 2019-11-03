'use strict'


// 1.
// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. 
// Получив ответ от сервера вывести имена пользователей на страницу. 
// При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. 
// Для визуальной части можно использовать bootstrap или другие фреймворки. 

// 2.
// Создать форму добавления пользователя состоящая из полей name, email, username, phone, website 
// при сабмите формы сделать POST запрос на сервер после ответа от сервера добавлять полученного пользователя на страницу.



class CustomHttp {
  get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () => callback(xhr.responseText))
  }
}


const http = new CustomHttp();

http.get('https://jsonplaceholder.typicode.com/users', (data) => {
  const parsedUsers = JSON.parse(data);
  const userForRendering = new Users();

  parsedUsers.forEach((user) => {
    userForRendering.render(user);
  })
});


class Users {
  constructor() {
    this.wrapper = document.querySelector('#users');
  }

  handleClick(event) {
    http.get('https://jsonplaceholder.typicode.com/users', (user) => {
      console.log(this.user)
    });
  }

  render(user) {
    const div = document.createElement('div')
    div.textContent = user.name;

    div.addEventListener('click', this.handleClick);
    this.wrapper.append(div);
  }
}


// class ShoppingMall extends Building {
//   constructor(name, countOfFloors, countOfShops) {
//     super(name, countOfFloors)
//     this.countOfShops = countOfShops;
//   }

//   getCount() {
//     return {
//       floors: this.countOfFloors,
//       shops: this.countOfFloors * this.countOfShops
//     }
//   }
// }


// "name"
// "username"
// "email"
// "phone": "010-692-6593 x09125",
