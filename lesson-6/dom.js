'use strict'

// Зная структуру html, с помощью изученных
// методов получить(в консоль):
// 1. head
const infoAboutHead = document.head;
console.log(infoAboutHead);


// 2. body
const infoAboutBody = document.body;
console.log(infoAboutBody);


// 3. все дочерние элементы body и вывести их в консоль.
const childBody = document.body.children;
console.log(childBody);


// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
const firstDivAll = document.querySelector("div");
console.log(firstDivAll);


// б) вывести в консоль все дочерние узлы,
//   кроме первого и последнего 
//   Для навигации по DOM использовать методы,
//   которые возвращают только элементы

for (let i = 1; i < firstDivAll.children.length - 1; i++) {
  console.log(firstDivAll.children[i]);
}