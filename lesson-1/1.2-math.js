
// 1. Получить число pi из Math и округлить его до 2 - х знаков после точки
let somethingNumber = Math.PI.toFixed(2);
console.log(`1. Получить число pi из Math и округлить его до 2 - х знаков после точки - %c${somethingNumber}`, ' color: green; font-weight: 700; font-size: 16px;');


// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(`2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51 - %c${maxNumber} ${minNumber}`, ' color: green; font-weight: 700; font-size: 16px;');

// 3. Работа с Math.random:
// a.Получить случайное число и округлить его до двух цифр после запятой
// b.Получить случайное целое число от 0 до X.X - любое произвольное число.
let somethingNumberRandomA = Math.random().toFixed(2);
let somethingNumberRandomB = Math.floor(Math.random() * 10);
console.log(`3. Работа с Math.random: - %c${somethingNumberRandomA} ${somethingNumberRandomB}`, ' color: green; font-weight: 700; font-size: 16px;');

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду(1.3)
let sum = parseFloat((0.6 + 0.7).toFixed(1));
console.log(`4. Проверить результат вычисления 0.6 + 0.7: - %c${sum.toFixed(1)}`, ' color: green; font-weight: 700; font-size: 16px;');


// 5. Получить число из строки ‘100$’
let numberFromString = parseInt("100$");
console.log(`5. Получить число из строки ‘100$’: - %c${numberFromString}`, ' color: green; font-weight: 700; font-size: 16px;');



