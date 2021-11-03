// Функция принимает в качестве аргументов 2 массива
// Первый массив - общий список значений
// Второй массив - список значений, входящих в черный список
// Возвращаемое значение - белый список

function getWhiteListValue(generalList, blackList = [])
{
  let whiteList = [];
  for (let value of generalList) {
    if (!blackList.includes(value)) {
      whiteList.push(value);
    }
  }

  return whiteList;
}

const generalList = [
  "1",
  "2",
  "3",
  "4",
  "5"
];
const blackList = ["3", "4"];

let whiteList = getWhiteListValue(generalList, blackList);

console.log(whiteList);
