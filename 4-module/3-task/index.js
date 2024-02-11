function highlight(table) {
  let rows = table.querySelectorAll('tbody tr'); // Присваевает переменной rows все DOM элементы строк tr

  rows = Array.from(rows); //Преобразуем в массив псевдомассив

  // Создаем функцию обратного вызова
  rows.forEach(row => {

    let statusCell = row.querySelector('td[data-available]'); // Присваивает переменной statusCell ячейку с атрибутом data-valiable

    if(statusCell) {  // Если в текущей ячейке есть атрибут data 

    let available = statusCell.dataset.available; // 

    if (available === 'true') { // создает класс в текущей tr в зависимости от содержимого в атрибуте data

      row.classList.add('available'); 

    } else if (available === 'false') {

      row.classList.add('unavailable')

    } 

  } else { // если нету

    row.setAttribute('hidden', 'true') // скрывает элемент с помощью добавленного атрибута hidden

  }

  let genderCell = row.querySelector('td:nth-child(3)'); // выбирает 3 ячейку в строке

  if (genderCell.textContent === 'm') { // В зависимости от текстового содержимого присваевает строке класс 

    row.classList.add('male');

  } else {

    row.classList.add('female');
    
  }

  let ageCell = row.querySelector('td:nth-child(2)');

  if ( Number(ageCell.textContent) < 18) {  // Если в ячейке 2 число меньше 18 то делает все элементы строки перечеркнутыми

    row.style.textDecoration = 'line-through';

  }



    
  });
}