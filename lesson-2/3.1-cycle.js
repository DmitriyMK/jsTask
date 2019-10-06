// Записать в виде switch case следующее условие:
let a = 'inline';

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
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
}



// Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let variable = "hidden";

(variable = "hidden") ? variable = "visible" : variable = "hidden";
console.log(variable);



// 2. Используя if, записать условие:
//   если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10(использовать краткую запись).
// let num = 50;

let num;
(num === 0) ? num === 1 : (num < 0) ? console.log('less then zero') : num *= 10;



// ----------------
// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 1,
  create: 2008,
  needRepair: false
}

car.age > 5 ? ((car.needRepair = true) && (console.log("Need Repair"))) : car.needRepair = false;
console.log(car);





// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре.
// Использовать for или while.
let stringLowerCase = 'i am in the easycode';
let stringUpperCase;
let stringToArray = stringLowerCase.split(' ');


for (let i = 0; i < stringToArray.length; i++) {
  stringToArray[i] = stringToArray[i][0].toUpperCase() + stringToArray[i].substring(1);
  stringUpperCase = stringToArray.join(' ');
}

console.log(stringUpperCase);



// 2. Дана строка “tseb eht ma i”.Используя циклы, сделать строку - перевертыш(то есть последняя буква становится первой, предпоследняя - второй итд).
let stringWerewolf = "tseb eht ma i";
// let stringWerewolfToArray = stringWerewolf.split('');
// let stringReverse = stringWerewolfToArray.reverse().join('');
let stringReverse = "";

for (let i = stringWerewolf.length - 1; i >= 0; i--) {
  stringReverse += stringWerewolf[i];
}
console.log(stringReverse);


// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циклов вычислить факториал числа 10. Использовать for.
let numberForFactorial = 10;
let factorial = 1;

for (let num = 1; num <= numberForFactorial; num++) {
  factorial *= num;
}

console.log(factorial);




// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены.Использовать for.
let stringLowerCase2 = 'JavaScript is a pretty good language';
let stringUpperCase2 = "";
let stringToArray2 = stringLowerCase2.split(' ');


for (let i = 0; i < stringToArray.length; i++) {
  stringToArray2[i] = stringToArray2[i][0].toUpperCase() + stringToArray2[i].substring(1);
  stringUpperCase2 = stringToArray2.join('');
}

console.log(stringUpperCase2);



// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
// Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let oddNumber of numberArray) {
  if (oddNumber % 2 !== 0) {
    console.log(oddNumber)
  }
}

// 6. Дан объект:
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.Использовать for in.

let list = {
  name: 'denis',
  work: 'easycode',
  workempry: '',
  age: 29
}

for (let stringToUpperCase in list) {
  if (typeof list[stringToUpperCase] == 'string' && stringToUpperCase.length > 0) {
    list[stringToUpperCase] = list[stringToUpperCase].toUpperCase();
  }
}

console.log(list)