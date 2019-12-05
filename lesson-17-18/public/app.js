'use strict'


// Ваша задача сделать Main view. 
// По тестовому нам надо сделать главную форму 
//  котору будут подгружаться с псевдоАПИ сервера  Инвойсы 
// и будет кнопка Add new ?



// class CustomHttp {
//   get(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.addEventListener('load', () => callback(xhr.responseText))
//   }
// }

// const http = new CustomHttp();

// http.get(`http://localhost:3000/invoices`, loadInvoices);
// function loadInvoices(response) {
//   const parsedList = JSON.parse(response);
//   const invoicesInstance = new Invoices();
//   parsedList.forEach((post) => {
//     invoicesInstance.render(post);
//   })
// }

// class Invoices {
//   constructor() {
//     this.wrapper = document.querySelector('tbody')
//   }

//   render() {
//     const html = `<tr>
//                   <td>${date_created}</td>
//                   <td>${number}</td>
//                   <td>${date_supplied}</td>
//                   <td>${comment}</td>
//                 </tr>`;

//     this.wrapper.insertAdjacentHTML('beforeend', html);
//   }
// }
