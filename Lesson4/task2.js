//С помощью цикла создать перевернутый вариант произвольной строки

let originalString = '1234567890';
let invertedString = '';


for (let i = originalString.length - 1; i >= 0 ; i--) {
  invertedString += originalString[i];
}

console.log(invertedString);