// Sabteil(Артур Иванов)

// function checkSpam(str) {

//   str = str.toLowerCase(); // Приводит все буквы в тексте к нижнему регистру
 

//   if (str.includes("1xbet") || str.includes("xxx")) { // Проверяет на запрещённые слова

//     // console.log("False"); // Тестовый вывод
//     return true;

//   } else {

//     // console.log("True"); // Тестовый вывод
//     return false;

//   }
// }

// // console.log(`Вывод: ${checkSpam("1XBeT")}`); // Тестовый ввод/вывод

function checkSpam(str) {
  str = str.toLowerCase(); // Приводит все буквы в тексте к нижнему регистру
  return str.includes("1xbet") || str.includes("xxx"); // Если содержит ключевые слова, то выводит true или false соответственно
  
}

// console.log(`Вывод: ${checkSpam("Котики")}`)