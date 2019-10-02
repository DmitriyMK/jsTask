// Записать в виде switch case следующее условие:
let a;

// if (a === 'block') {
//   console.log('block')
// } else if (a === 'none') {
//   console.log('none')
// }
// else if (a === 'inline') {
//   console.log('inline')
// } else {
//   console.log('other')
// }

switch (a) {
  case (a === 'block'): console.log('block');
    break;
  case (a === 'none'): console.log('none');
    break;
  case (a === 'inline'): console.log('inline');
    break;
  default: console.log('other');
}



// Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
let answer =
  (a === 'block') ? console.log('block') :
    (a === 'none') ? console.log('none') :
      (a === 'inline') ? console.log('inline') : console.log('other');



// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре.
// Использовать for или while.
let stringLowerCase = 'i am in the easycode';
let stringUpperCase = 0;
let stringToArray = stringLowerCase.split(' ');


for (let i = 0; i < stringToArray.length; i++) {
  stringToArray[i] = stringToArray[i][0].toUpperCase() + stringToArray[i].substring(1);
  stringUpperCase = stringToArray.join(' ');
}

console.log(stringUpperCase);



// 2. Дана строка “tseb eht ma i”.Используя циклы, сделать строку - перевертыш(то есть последняя буква становится первой, предпоследняя - второй итд).
let stringWerewolf = "tseb eht ma i";
let stringWerewolfToArray = stringWerewolf.split('');
let stringReverse = stringWerewolfToArray.reverse().join('');

console.log(stringReverse);



// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циклов вычислить факториал числа 10. Использовать for.
// let numberFactorial = 0;

// for (let numFactorial = 10; numFactorial < 10; numFactorial--) {
//   console.log(numFactorial);
// }
let numberForFactorial = 10;

for (i = 0; i < numberForFactorial; i++) {
  let factorial = (numberForFactorial - i);


  console.log(factorial);
}







// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены.Использовать for.

let stringLowerCase2 = 'JavaScript is a pretty good language';
let stringUpperCase2 = 0;
let stringToArray2 = stringLowerCase2.split(' ');


for (let i = 0; i < stringToArray.length; i++) {
  stringToArray2[i] = stringToArray2[i][0].toUpperCase() + stringToArray2[i].substring(1);
  stringUpperCase2 = stringToArray2.join('');
}

console.log(stringUpperCase2);



// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
// Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.


// 6. Дан объект:
//   let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29
//   }

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.Использовать for in.
