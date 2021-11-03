// Задание - генератор произвольных массивов

// Даны:
// - диапазон чисел n-m
// - кол-во чисел в массиве count

const n = -3;
const m = -10;
const count = 42;

let startRangeNum = 0;
let endRangeNum = 0;
let widthRange = 0;
let resultArray = [];

startRangeNum = Math.min(n, m);
endRangeNum = Math.max(n, m);

widthRange = endRangeNum - startRangeNum;

for (let i = 0; i < count; i++) {
  resultArray.push(startRangeNum + Math.round(Math.random() * widthRange));
}

console.log(resultArray);
