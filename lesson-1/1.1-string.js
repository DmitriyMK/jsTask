let string = "some test string";


// 1. Получить первую и последнюю буквы строки
let firstLetter = string[0];
let lastLetter = string[string.length - 1];
let firstLastLetter = [firstLetter, lastLetter];
console.log(`1. Получить первую и последнюю буквы строки - %c${firstLastLetter}`, ' color: green; font-weight: 700; font-size: 16px;');


// 2. Сделать первую и последнюю буквы в верхнем регистре
let sliceString = string.slice(1, -1);
let replaceFirstLastLetter = firstLetter.toUpperCase() + sliceString + lastLetter.toUpperCase();
console.log(`2. Сделать первую и последнюю буквы в верхнем регистре - %c${replaceFirstLastLetter}`, ' color: green; font-weight: 700; font-size: 16px;');


// 3. Найти положение слова ‘string’ в строке
let searchString = "string";
let searchIndex = string.indexOf(searchString);
let searchStringLength = searchString.length;
let rangeString = (`Положение слова в строке с ${searchIndex} до ${searchIndex + searchStringLength}`);
console.log(`3. Сделать первую и последнюю буквы в верхнем регистре - %c${replaceFirstLastLetter}`, ' color: green; font-weight: 700; font-size: 16px;');


// 4. Найти положение второго пробела (“вручную” ничего не считать)
let firstSpace = string.indexOf(" ");
let secondSpace = string.indexOf(" ", firstSpace + 1);
console.log(`4. Найти положение второго пробела - %c${secondSpace}`, ' color: green; font-weight: 700; font-size: 16px;');


// 5. Получить строку с 5-го символа длиной 4 буквы
let startSlice = 4;
let sliceLength = Number(startSlice + 5);
let spliceSomeWord = string.slice(startSlice, sliceLength);
console.log(`5. Получить строку с 5-го символа длиной 4 буквы - %c${spliceSomeWord}`, ' color: green; font-weight: 700; font-size: 16px;');


// 6. Получить строку с 5-го по 9-й символы
let spliceSomeWordNew = string.substring(4, 9);
console.log(`6. Получить строку с 5-го по 9-й символы - %c${spliceSomeWordNew}`, ' color: green; font-weight: 700; font-size: 16px;');


// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
let newString = string.slice(0, -6);
console.log(`7. Получить новую строку из исходной путем удаления последних 6-и символов - %c${newString}`, ' color: green; font-weight: 700; font-size: 16px;');


// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20, b = 16;
let strings = String(a) + String(b);
console.log(`8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016” - %c"${strings}"`, ' color: green; font-weight: 700; font-size: 16px;');
