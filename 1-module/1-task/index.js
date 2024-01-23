// Sabteil (Артур Иванов 20240115)

function factorial(n) {
  let answer = n; // Первый множитель. Будет возвращать факториал.
  let dropValue = n; // Второй множитель, который выполяет роль уменьшения множителя

  if (answer == 0) { // Проверка на исключение !0 = 1;
      return 1;
  } else {
    for (let countToStop = n ; countToStop != 1 && countToStop <= n; --countToStop) { //Цикл с счётчиком
      dropValue--; // (n - 1)
      answer = answer * dropValue; // n * ( n - 1 )
      // console.log(answer); // Тестовый вывод
    }
  }
  return answer; // После завершения цикла возвращает полученный факториал
}

// console.log(`Тест: ${factorial()}`); // Тестовый ввод/вывод



