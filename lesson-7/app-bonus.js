// 9. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.


// !!!! Начал делать так, но не смог прописать порядковый номер в шаблонной строке ((
// const list = document.querySelector('ul');
// const item = `<li class='new-item'> item </li>
//               <li class='new-item'> item </li>
//               <li class='new-item'> item </li>`;
// list.insertAdjacentHTML('afterbegin', item);


let list = document.querySelector('ul');
let item = [];
let i;


for (i = 0; i < 8; i++) {
  item[i] = document.createElement('li');
  item[i].classList.add('new-item');
  item[i].innerText = `item ${list.childElementCount}`
  list.appendChild(item[i]);
}



// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 

let listArr = document.querySelectorAll('ul li');

for (i = 0; i < listArr.length; i++) {
  let addStrong = document.createElement('strong');
  listArr[i].insertAdjacentElement('afterbegin', addStrong);
}




// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let body = document.querySelector('body');
let addPicture = document.createElement('img');
addPicture.setAttribute('src', './hqdefault.jpg');
body.insertAdjacentElement('afterbegin', addPicture);




// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let findMark = document.querySelector('mark');
let addText = ' green ';
findMark.append(addText);
findMark.classList.add('green');



// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let listItems = Array.from(document.querySelectorAll('ul li'));
let listText = [];


for (let items of listItems) {
  listText.push(items.textContent);


  listText.sort(function (a, b) {
    if (a > b) { return -1; }
    if (a < b) { return 1; }
    return 0;
  });
}


console.log(listText);


// !!! Тут зашел в тупик. 
// !!! Сортировка по содержимому произошла, но только содержимое.
// Подскажите пожалуйста алгоритм, как можно произвести сортировку