// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(num) {
  let total = 1;

  if (num !== 0) {
    for (let i = 0; i < num.length; i++) {
      total *= num[i];
    }
    return total;
  } else {
    return num = 0
  }
}

// checking
console.log(multiply([5, 2, 36]));




// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverse(textToReverse) {
  if (typeof textToReverse === "string") {
    return String(textToReverse).split('').reverse().join('');
  } else {
    return "You should type a text";
  }
}

// checking
console.log(reverse("test"))



// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 
// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 


function replaceToUnicode(strUni) {
  let str = [];
  for (i = 0; i < strUni.length; i++) {
    str.push(strUni.charCodeAt([i]));
  }

  return str.join(' ');
}

// checking
console.log(replaceToUnicode("hello"))



// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber(numGuess) {

  if (numGuess > 0 && numGuess <= 10) {
    let numPC = Math.floor(Math.random() * 10);

    if (numGuess === numPC) {
      return "Вы выиграли"
    } else {
      return `Вы не угадали ваше число ${numGuess} а выпало число ${numPC}`
    }

  } else {
    return "Pls type number more than 0 and lower than 10";
  }
}

// checking
console.log(guessNumber(5))



// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n) {
  let result = [];

  for (var i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}

// checking
console.log(getArray(10));



// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(array) {
  return array.concat(array);
}

// check
console.log(doubleArray([1, 2, 3]))



// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  let result = [];

  for (removeFirstLetter in arguments) {
    result.push(arguments[removeFirstLetter].slice(1));
  }

  return result;
}

// check
console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']))



// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

let users = [
  { name: 'Denis', age: 29, gender: 'male' },
  { name: 'Ivan', age: 20, gender: 'male' }
]

function(funcGetUsers) {
  let result = [];

  



  return result;
}

// funcGetUsers(users, 'gender', 'male');





// 9. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов



// 10. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:

// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]