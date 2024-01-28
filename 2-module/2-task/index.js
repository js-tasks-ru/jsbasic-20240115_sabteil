// Sabteil (Артур Иванов)

function isEmpty(obj) {

  let empty = true;

  for (let key in obj) { // Выполняется, только если есть свойства 
  empty = false;
  break;
  }

  // Проверяет был ли выполнен цикл
  if (empty) { 
    return true;
  } else {
    return false;
  }
}
