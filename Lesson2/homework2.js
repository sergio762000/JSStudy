//Задание 1

/*
let point1_x = -2;
let point1_y = -3;
let point2_x = 10;
let point2_y = 5;

$result = (point2_x - point1_x) * (point2_y - point1_y);
console.log("Площадь прямоугольника = " + $result + " условных единиц.");
*/

//Задание 2
//Примеры для проверки:
//
//    Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
//    Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
//    Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.
/*
let numFloat1 = 13.890123;
let numFloat2 = 2.891564;

let precision = 3;

let fractionNum1 = Math.floor((numFloat1 - Math.floor(numFloat1)) * Math.pow(10, precision));
let fractionNum2 = Math.floor((numFloat2 - Math.floor(numFloat2)) * Math.pow(10, precision));

console.log(fractionNum1 > fractionNum2);
console.log(fractionNum1 < fractionNum2);
console.log(fractionNum1 >= fractionNum2);
console.log(fractionNum1 <= fractionNum2);
console.log(fractionNum1 === fractionNum2);
console.log(fractionNum1 !== fractionNum2);
*/

//Задание 3
// Генерация нечетного числа в диапазоне m - n

// n = 0, m = 100
// n = 2, m = 5
// n = 100, m = -5
// n = -7, m = -10

let startRange = null;
let endRange = null;

//todo - определить начало и конец диапазона
if (n > m || n == m) {
    startRange = m;
    endRange = n;
} else {
    startRange = n;
    endRange = m;
}

//ширина диапазона 
let widthRange = endRange - startRange;

//случайное число
let randomNum = Math.round(Math.random() * widthRange);
let resultNum = startRange + randomNum;

//проверка на четность
if (resultNum % 2 === 0) {
    resultNum + 1 > endRange ? --resultNum : ++resultNum;
}

console.log(resultNum);