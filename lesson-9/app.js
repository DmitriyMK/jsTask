'use strict'

console.log(`%cTask#1`, 'color: green; font-weight: 700;');
// 1
// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’


class Planet {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return `Planet name is ${this.name}`;
  }
}

class PlanetWithSatellite extends Planet {
  constructor(name, satelliteName) {
    super(name);
    this.satelliteName = satelliteName;
  }

  getName() {
    return `${super.getName()}. The satellite is ${this.satelliteName}`
  }
}

const earth = new PlanetWithSatellite('earth', 'moon');
earth.getName();


// checking
console.log(earth.getName());




console.log(`%cTask#2`, 'color: green; font-weight: 700;');
// 2
// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)


class Building {
  constructor(name, countOfFloors) {
    this.name = name;
    this.countOfFloors = countOfFloors;
  }

  setCountOfFloors(value) {
    this.countOfFloors = value;
  }
  getCountOfFloors() {
    return this.countOfFloors;
  }
}


class House extends Building {
  constructor(name, countOfFloors, countOfFlats) {
    super(name, countOfFloors)
    this.countOfFlats = countOfFlats;
  }

  getCount() {
    return {
      floors: this.countOfFloors,
      flats: this.countOfFloors * this.countOfFlats
    }
  }
}


class ShoppingMall extends Building {
  constructor(name, countOfFloors, countOfShops) {
    super(name, countOfFloors)
    this.countOfShops = countOfShops;
  }

  getCount() {
    return {
      floors: this.countOfFloors,
      shops: this.countOfFloors * this.countOfShops
    }
  }
}


const house = new House('Jack', 5, 2);
const shoppingMall = new ShoppingMall('Gulliver', 90, 10);



// checking
console.log(house.getCount());
console.log(shoppingMall.getCount());




console.log(`%cTask#3`, 'color: green; font-weight: 700;');
// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.


function Furniture(name, price) {
  this.name = name;
  this.price = price;
}

Furniture.prototype.getInfo = function () {
  return {
    name: this.name,
    price: this.price
  }
};

// OFFICE
function FurnitureForOffice(name, price, tables) {
  Furniture.call(this, name, price);
  this.tables = tables;
}

FurnitureForOffice.prototype = Object.create(Furniture.prototype);
// FurnitureForOffice.prototype.constructor = FurnitureForOffice;


FurnitureForOffice.prototype.getInfo = function () {
  return {
    name: this.name,
    price: this.price,
    tables: this.tables
  }
};


// HOME
function FurnitureForHome(name, price, chairs) {
  Furniture.call(this, name, price);
  this.chairs = chairs;
}

FurnitureForHome.prototype = Object.create(Furniture.prototype);
// FurnitureForOffice.prototype.constructor = FurnitureForOffice;


FurnitureForHome.prototype.getInfo = function () {
  return {
    name: this.name,
    price: this.price,
    chairs: this.chairs
  }
};




const furniture = new Furniture('table', 300);
const furnitureForOffice = new FurnitureForOffice('table', 600, 20);
const furnitureForHome = new FurnitureForHome('table', 300, 5);


// checking
console.log(furniture);
console.log(furniture.getInfo());

console.log(furnitureForOffice);
console.log(furnitureForOffice.getInfo());

console.log(furnitureForHome);
console.log(furnitureForHome.getInfo());



console.log(`%cTask#4`, 'color: green; font-weight: 700;');
// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)


class User {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  getInfo() {
    return {
      name: this.name,
      date: this.date
    }
  }
}

class Admin extends User {
  constructor(name, date, supeAdmin) {
    super(name, date);
    this.supeAdmin = supeAdmin;
  }
}

class Guest extends User {
  constructor(name, date, validDate) {
    super(name, date);
    this.validDate = validDate;
  }
}


const user = new User('Mike', '2020 10 01');
const admin = new Admin('John', '2000 01 25', true);
const guest = new Guest('Chupacabra', '2021 01 25', '2021 01 30');


// checking
console.log(user);
console.log(admin);
console.log(guest);