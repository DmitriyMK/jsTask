'use strict'

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
// --
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.


function isParent(parent, child) {
  return parent.contains(child);
}

// checking
console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));




// 2. Получить список всех ссылок, которые не находятся внутри списка ul
const links = Array.from(document.querySelectorAll('a')).filter(link => !link.closest('ul'));


// checking
console.log(links)


// 3. Найти элемент, который находится перед и после списка ul
const sibling = [document.querySelector("ul").previousElementSibling, document.querySelector("ul").nextElementSibling];

// checking
console.log(sibling)
