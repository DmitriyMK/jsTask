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

let getTextFromUl = document.querySelectorAll('ul li a');

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




// 8. На все ссылки в примере установить класс “custom-link”






// 9. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)







// 10. Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:



// Условия:
// В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
// Количество пользователей может быть любым.
// Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
// В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
