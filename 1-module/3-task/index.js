//Sabteil (Иванов Артур)
function ucFirst(str) {

  if(str == false) { //Проверка на пустую строку, если true, то возвращает пустую строку

    return "";

  } else {

    let answer = str[0].toUpperCase() + str.slice(1); // Делает первую букву в ввёрхнем регистре и конкатинирует со строкой без первой буквы 
    // console.log(`Тест: ${answer}`); // Тестовый вывод
    return answer; 

  }
}
