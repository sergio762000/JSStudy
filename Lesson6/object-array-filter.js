// Фильтрация массива объектов по значению свойства

function filter(arrayObjects, propertyName, propertyValue)
{
  let result = [];

  for (let object of arrayObjects) {
    if (object[propertyName] === propertyValue) {
      result.push(object);
    }
  }

  return result;
}

let objects = [
  { name: 'Василий', surname: 'Васильев'},
  { name: 'Иван', surname: 'Иванов'},
  { name: 'Петр', surname: 'Петров'},
];

console.log(filter(objects, 'surname', 'Петров'));