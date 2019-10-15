// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


let arr1 = ['my', 'name', 'is', 'Trinity'];
let arr2 = [10, 20, 30];
let arr3 = [{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }];
let arr4 = ['abc', '123'];


function getNewValue(arr, callback) {
  return 'New value: ' + callback(arr);
}

function getStringTogether(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}

function getMyltiplyByTen() {
  return arr2.map(num => num * 10);
}

function getUserData() {
  return arr3.map(element => { return `${element.name} is ${element.age}` }).join(', ');
}

function getReverseStr() {
  return arr4.map(element => { return element.split('').reverse().join('') })
}


// Checking
console.log(getNewValue(arr1, getStringTogether));
console.log(getNewValue(arr2, getMyltiplyByTen));
console.log(getNewValue(arr3, getUserData));
console.log(getNewValue(arr4, getReverseStr));




// 2. Написать аналог метода every. 
// Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 


let arrNum = [12, 5, 20];

function copyEveryMethod(arr, checkingArr) {
  if (Array.isArray(arr) && typeof checkingArr === "function") {
    console.log("something went wrong");
  }

  for (i in arr) {
    if (checkingArr(arr[i])) {
      return false;
    }
  }
  return true;
}

function checkingArr(elements) {
  return elements > 5;
}


//checking
console.log(copyEveryMethod(arrNum, checkingArr));




//3. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// {digit: 1, odd: true }, { digit: 2, odd: false }, { digit: 3, odd: true }

let arrDigit = [1, 2, 3, 5, 8, 9, 10];


function isOddFunction(arr) {

  const isOdd = arr.map(num => {
    if (num % 2 === 0) {
      return { digit: num, odd: true }
    } else {
      return { digit: num, odd: false }
    }
  })

  return isOdd;
}


// Checking
console.log(isOddFunction(arrDigit));




// 4. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.
let arrZero = [12, 4, 50, 1, 0, 18, 40];

function isZeroHere(arr) {
  return arr.some(x => x === 0);
}


//checking 
console.log(isZeroHere(arrZero));



//5.  Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
let searchLetters = ['yes', 'hello', 'no', 'easycode', 'what'];

function isSomeLettersHere(arr) {
  return arr.some(x => x.length > 3);
}


// checking
console.log(isSomeLettersHere(searchLetters));



//4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения строки


let arrStart = [{ char: "H", index: 0 }, { char: "i", index: 1 }, { char: "!", index: 2 }];

function arrTransform(arr) {
  let arrSort = arr.sort((a, b) => a + b);

  return arrSort.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.char;
  }, '');
}


// Checking
console.log(arrTransform(arrStart));




// 6. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

let arrForSort = [[14, 45], [1], ['a', 'c', 'd']];

function arrResultSort(arr) {
  return arr.sort((a, b) => a.length - b.length);
}


// Checking
console.log(arrResultSort(arrForSort));



// 7. Есть массив объектов:
// Отсортировать их по возрастающему количеству ядер (cores).

let arrPC = [
  { cpu: 'intel', info: { cores: 2, сache: 3 } },
  { cpu: 'intel', info: { cores: 4, сache: 4 } },
  { cpu: 'firsttt', info: { cores: 000, сache: 1 } },
  { cpu: 'intel', info: { cores: 3, сache: 2 } },
  { cpu: 'amd', info: { cores: 4, сache: 2 } }
]

function arrPCSortByCores(arr) {
  return arrPC.sort((a, b) => (a.info.cores - b.info.cores));
}


// Checking
console.log(arrPCSortByCores(arrPC));





// 8. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]


let products = [
  { title: 'prod1', price: 5.2 }, { title: 'prod2', price: 0.18 },
  { title: 'prod3', price: 15 }, { title: 'prod4', price: 25 },
  { title: 'prod5', price: 18.9 }, { title: 'prod6', price: 8 },
  { title: 'prod7', price: 19 }, { title: 'prod8', price: 63 }
];

function productsSortByPrice(product, priceMin, priceMax) {

  product = product.sort((a, b) => (a.price - b.price));


  let productFilter = product.filter((element) => {
    return element.price > priceMin && element.price < priceMax;
  })

  return productFilter;
}

// Checking
console.log(productsSortByPrice(products, 5, 15));
