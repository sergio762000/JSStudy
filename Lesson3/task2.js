// Задание 2
// Приведение иМени и ФАМИлиИ к виду "Имя Фамилия"

const sourceStringName = 'jOHN';
const sourceStringSurname = 'JoHNsoN';
let resultStringName = '';
let resultStringSurname = '';

// Обработка имени
const stringNameLowerCase = sourceStringName.toLowerCase();
let firstLetterName = stringNameLowerCase.substr(0, 1);
firstLetterName = firstLetterName.toUpperCase();
resultStringName = firstLetterName + stringNameLowerCase.substr(1);

console.log('Первоначальное значение имени: ' + sourceStringName);
sourceStringName === resultStringName
  ? console.log('Имя осталось без изменений')
  : console.log('Имя было преобразовано');

console.log('Результирующее значение имени: ' + resultStringName);

// Обработка фамилии
const stringSurnameLowerCase = sourceStringSurname.toLowerCase();
let firstLetterSurname = stringSurnameLowerCase.substr(0, 1);
firstLetterSurname = firstLetterSurname.toUpperCase();
resultStringSurname = firstLetterSurname + stringSurnameLowerCase.substr(1);

console.log('Первоначальное значение фамилии: ' + sourceStringSurname);
sourceStringSurname === resultStringSurname
  ? console.log('Фамилия осталась без изменений')
  : console.log('Фамилия была преобразована');

console.log('Результирующее значение фамилии: ' + resultStringSurname);
