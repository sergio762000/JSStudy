// Научиться переводить требования к сложному заданию в код
// для проверки работоспособности раскоментируйте соответствующие строку ниже.

let roadMines = [true, true, true, true, true, true, true, true, true, true];
//let roadMines = [true, false, false, false, false, false, false, false, false, true];
//let roadMines = [false, false, false, true, false, false, false, false, false, false];
//let roadMines = [false, false, false, false, false, false, false, false, false, false];


let messageArray = ['Танк переместился на ', 'Танк поврежден', 'Танк уничтожен'];
let mineExplosion = 0;

for (let i = 0; i < roadMines.length; i++) {
  console.log(messageArray[0] + (i + 1));
  if (roadMines[i]) {
    console.log(messageArray[++mineExplosion]);
  }
  if (mineExplosion === 2) {
    break;
  }
}
