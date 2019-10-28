'use strict'

// 1
// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(a = 0) {
  return function (b = 0) {
    return a - b;
  }
}

// checking
console.log(minus()());



// 2
// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)


function multiplyMaker(a = 0) {
  let result = a;

  return function (value) {
    return result *= value;
  }
}

const multiply = multiplyMaker(2);


// checking
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10))




// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш

// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5


const strDoSmth = (function () {

  function setString(value) {
    if (typeof value === Number) {
      return value.toString;
    } else {
      return value;
    }
  }

  function getLengthStr(value) {
    return value.length;
  }

  function werewolfStr(value) {
    return value.split('').reverse().join('');
  }

  return {
    setString: setString,
    getLengthStr: getLengthStr,
    werewolfStr: werewolfStr,
  };

}());

// checking 
console.log(strDoSmth.setString('123'));
console.log(strDoSmth.getLengthStr('abcde'))
console.log(strDoSmth.werewolfStr('abcde'))




// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); 
// значение = 10модуль.прибавить(5); 
// значение += 5модуль.умножить(2); 
// значение *= 2модуль.узнатьЗначение(); 
// вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой: модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100


const calculator = (function () {
  let result = 0;

  function setValue(value) {
    return result = value;
  }

  function plusValue(value) {
    return result += value;
  }

  function multiplyValue(value) {
    return result *= value;
  }

  function getPow(value) {
    return Math.pow(result, value);
  }

  function getResult() {
    return Math.round(result);
  }

  return {
    setValue: setValue,
    plusValue: plusValue,
    multiplyValue: multiplyValue,
    getPow: getPow,
    getResult: getResult,
  }

}());


// checking
console.log(calculator.setValue(10));
console.log(calculator.plusValue(5));
console.log(calculator.multiplyValue(2));
console.log(calculator.getPow(2));
console.log(calculator.getResult());