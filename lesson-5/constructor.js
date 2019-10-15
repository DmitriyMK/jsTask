'use strict'

// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
  width: 25,
  height: 2,

  getSquare: function () {
    return this.width * this.height;
  }
}

// checking
console.log(`%cTask1`, 'color: tomato; font-weight: 700; font-size: 16px;')
console.log(rectangle.getSquare());



// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5


const price = {
  price: 10,
  discount: '15%',

  getPrice: function () {
    return this.price;
  },

  getPriceWithDiscount: function () {
    return this.price - this.price * (parseInt(this.discount) / 100);
  },
};

// checking
console.log(`%cTask2`, 'color: tomato; font-weight: 700; font-size: 16px;')
console.log("price: " + price.getPrice());
console.log("discount: " + price.getPriceWithDiscount());



// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;


let rubik = {
  width: 25,
  height: 10,

  growByStepOne: function () {
    return this.height += 1;
  },
}

rubik.growByStepOne();


// checking
console.log(`%cTask3`, 'color: tomato; font-weight: 700; font-size: 16px;')
console.log(rubik.height);


// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:


const numerator = {
  value: 1,

  double: function (value) {
    this.value *= 2;
    return this;
  },

  plusOne: function (value) {
    this.value += 1;
    return this;
  },

  minusOne: function (value) {
    this.value -= 1;
    return this;
  },
}



// checking
console.log(`%cTask4`, 'color: tomato; font-weight: 700; font-size: 16px;')
console.log(numerator.double().minusOne().minusOne().plusOne());




//5.  Cоздайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств. Вызов:
// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );


function Calculator() {

  this.read = function () {
    this.a = prompt("Значение первое");
    this.b = prompt("Значение второе");
  };

  this.sum = function () {
    return Number(this.a) + Number(this.b);
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();


// checking
console.log(`%cTask5`, 'color: tomato; font-weight: 700; font-size: 16px;')

console.log("Sum = " + calculator.sum());
console.log("Mul = " + calculator.mul());





// !!!!!!!!! Пока не нужно делать ??????????????
// 6. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)


// 7. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.


// 8. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes




// 9.  
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
