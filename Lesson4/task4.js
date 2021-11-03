// Работа с несколькими массивами

let daysOfMonth = [];
let daysOfWeek = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
];

let dayOfWeekStartYear = 'понедельник';
let pointStartYear;

for (let i = 1; i <= 31; i++){
  daysOfMonth[i] = i;
}

for (let keyDayOfWeek in daysOfWeek) {
  if (daysOfWeek[keyDayOfWeek] === dayOfWeekStartYear) {
    pointStartYear = keyDayOfWeek * 1;
  }
}

for (let i = 1; i < daysOfMonth.length; i++) {
  console.log(daysOfMonth[i] + ' января, ' + daysOfWeek[(pointStartYear + i - 1) % 7]);
}

