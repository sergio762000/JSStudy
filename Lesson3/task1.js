//  Задание 1
// Поиск подстроки внутри строки.

// Корректные пароли
// 1234-
// 4321_
// qaz-xsw
// _zxd

// Некорректные пароли
// _-a
// qaz
// _-3
// 123456789

const password = '123456789';
let isValidPasswordMessage = 'Пароль ненадежный';

if (password.length >= 4) {
  if (password.includes('_') || password.includes('-')) {
    isValidPasswordMessage = 'Пароль надежный';
  }
}

console.log(isValidPasswordMessage);
