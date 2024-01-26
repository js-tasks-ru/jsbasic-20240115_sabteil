// Sabteil(Артур Иванов)

function checkSpam(str) {

  str = str.toLowerCase(); // Приводит все буквы в тексте к нижнему регистру
 

  if (str.includes("1xbet") || str.includes("xxx")) { // Проверяет на запрещённые слова

    // console.log("False"); // Тестовый вывод
    return true;

  } else {

    // console.log("True"); // Тестовый вывод
    return false;

  }
}

// console.log(`Вывод: ${checkSpam("1XBeT")}`); // Тестовый ввод/вывод