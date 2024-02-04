// Sabteil (Иванов Артур)
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

/*

function namify(users) { // Передаётся массив в качестве аргумента

  const answer = []; // Создаем массив для имён

  for (let {name} of users) { // Цикл перебирает значения свойства обьекта с именем name:
  
    answer.push(name); // Добавляет в массив answer текущее значение свойства name:

  }

  return answer; // В конце итераций возвращает полученный массив с именами

} 

*/

const namify = users => users.map(user => user.name); /* Компактный вариант. Создает функцию, которая принимает массив users, после используется метод .map для которая создает 
новый массив и включает туда только свойства обьектов внутри массива с ключём user. */

console.log(namify(users));