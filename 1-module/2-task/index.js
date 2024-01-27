//Sabteil(Артур Иванов)
function print(text) {
  console.log(text);
}


function isValid(userName) { // Поменял пременную user -> userName которая принимает значение при вызове функции sayHello()

  return userName !=null && !userName.includes(" ") && userName.length > 3; // Короткий вариант 

  // if (userName.includes(" ") != true && userName != null && userName != false && userName.length > 3 ) { // имя не пустое, без пробелов, минимум 4 символа
  // //console.log("Тест: true"); // Тестовый вывод
  // return true;
  // } else {
  // //console.log("Тест: false"); // Тест вывод
  // return false;
  //   }
}
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
