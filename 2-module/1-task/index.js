// Sabteil (Артур Иванов)
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false,
  Mamu: -Infinity,
}

function sumSalary(salaries) {
  let answer = 0;
  
  for (let key in salaries) {                              // создает цикл для перебора значений 
    
    if (typeof(salaries[key]) == 'number' && isFinite(salaries[key])) { 

      answer = answer + salaries[key];
      console.log(answer)

    }
  }
    return answer // Не выполняется если есть отличные от числовых значение
}

console.log(sumSalary(salaries));