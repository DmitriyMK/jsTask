// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let variable = "hidden";

if (variable = "hidden") {
  variable = "visible"
} else {
  variable = "hidden"
};

console.log(`%c ${variable}`, 'color: green; font-weight: 700; font-size: 16px;');



// 2. Используя if, записать условие:
//   если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10(использовать краткую запись).
let num = 50;

if (num == 0) {
  num == 1
} else if (num < 0) {
  num = "less then zero"
} else {
  num *= 10;
};

console.log(`%c ${num}`, 'color: green; font-weight: 700; font-size: 16px;');


// ----------------
// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
}

if (car.age > 5) {
  console.log(`%c "Need Repair"`, 'color: green; font-weight: 700; font-size: 16px;') && car.needRepair == true;
} else {
  car.needRepair == false;
};


// ----------------
// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет.иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
}

let discountNum = parseInt(item.discount);
let priceNum = parseInt(item.price);
let priceWithDiscount = priceNum * discountNum;

let price = parseInt(item.price);


if (discountNum > 0) {
  console.log(`%c ${priceWithDiscount}$`, 'color: green; font-weight: 700; font-size: 16px;');
} else {
  console.log(`%c ${price}$`, 'color: tomato; font-weight: 700; font-size: 16px;');
}


// ----------------
// 5. Дан следующий код:
// Написать условие если(цена товара больше или равна минимальной цене) и(меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "20$"
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

let priceNumm = parseInt(product.price);
let result = (priceNumm >= min && priceNumm <= max) ? product.name : "товаров не найдено";

console.log(`%c ${result}`, 'color: green; font-weight: 700; font-size: 16px;');


