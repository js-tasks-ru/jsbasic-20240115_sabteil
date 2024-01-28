// Sabteil (Артур Иванов)

function sumSalary(salaries) {
  let answer = 0;
  
  for (let key in salaries) {                              // создает цикл для перебора значений 
    
    if (Number(salaries[key]) && salaries[key] != (NaN || Infinity || -Infinity)) {

      answer = answer + salaries[key];
      
    } else {                                                  //Если значение в свойстве не числовое или их нет, то возвращает 0 и останавливает цикл\\

     return answer;
    }
  }
    return answer // Не выполняется если есть отличные от числовых значение
}
