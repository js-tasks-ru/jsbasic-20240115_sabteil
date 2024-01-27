// Sabteil (Иванов Артур)
function truncate(str, maxlength) {
  if (str.length > maxlength ) { // Проверка не превышает ли длинну

    strCut = str.slice(0 , maxlength - 1); // Обрезает строку на указанное количество символов 
    answer = strCut + "…"; //Добавляет в конец строки ...
    console.log(answer); // Тестовый вывод
    return answer;
  } else {
    return str
  }
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)