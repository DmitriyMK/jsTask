'use strict'

// 1. Найти параграф и получить его текстовое содержимое (только текст!)
const findParagraph = document.querySelector('p').innerText;


// checking
console.log(findParagraph);



// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

const Node = document.querySelector('p');

function infoNode(Node) {
  return {
    'Тип узла': Node.nodeName,
    'Имя узла': Node.nodeType,
    'Количество дочерних узлов': Node.childElementCount
  }
}

// checking
console.log(infoNode(Node));




// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

let getTextFromUl = document.querySelectorAll('ul');

for (let i = 0; i < getTextFromUl.length; i++) {
  console.log(getTextFromUl[i].innerText);
}




// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let getText = document.querySelector('p');
let newText;


for (let i = 0; i < getText.childNodes.length; i++) {
  newText = getText.childNodes[i];
  newText.nodeValue = '-text-';
}

// checking
console.log(getText);




// 5. Найти в коде список ul и добавить класс “list”
let findList = document.querySelector('ul');
findList.classList.add('list');



// 6. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let findfLink = document.querySelector('ul ~ a');
findfLink.setAttribute('id', 'link');



//7. На li через один (начиная с самого первого) установить класс “item”
let oddLink = document.querySelectorAll('li:nth-of-type(odd)');
for (let item of oddLink) {
  item.classList.add('item');
}



// 8. На все ссылки в примере установить класс “custom-link”
let link = document.getElementsByTagName('a');
for (let item of link) {
  item.classList.add('custom-link');
}



// 9. Сделано в файлике бонус.js




// 10. Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:

// Условия:
// В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
// Количество пользователей может быть любым.
// Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
// В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

const map = {
  num: '#',
  name: 'Name',
  email: 'Email',
  balance: 'Balance'
}

const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
];





// Create Table
let table = document.querySelector('.table__wrap');


let tableCreate = document.createElement('table');
table.insertAdjacentElement('afterbegin', tableCreate);


// Create Thead
let thead = document.createElement('thead');
tableCreate.insertAdjacentElement('beforeend', thead);


let theadTrCreate = document.createElement('tr');
thead.insertAdjacentElement('beforeend', theadTrCreate);


for (let col in map) {
  let th = `<th>${map[col]}</th>`;
  theadTrCreate.insertAdjacentHTML("beforeend", th);
}


// Create tbody
let tbody = document.createElement('tbody');
tableCreate.insertAdjacentElement('beforeend', tbody);


users.forEach((elem, index) => {
  let tr = `<td>${++index}</td>
            <td>${elem.name}</td>
            <td>${elem.email}</td>
            <td>${elem.balance}</td>
           `;

  tbody.insertAdjacentHTML("beforeend", tr);
});


// Calculate total for tfoot
let total = [];

for (let list in users) {
  total.push(users[list].balance);
}

total = total.reduce(function (a, b) {
  return (a + b);
});


// Create tfoot
let tfoot = `<tfoot>
              <tr>
                <td colspan="4">Total balance: <b>${total}</b></td>
              </tr>
             </tfoot>
            `;

tableCreate.insertAdjacentHTML('beforeend', tfoot);