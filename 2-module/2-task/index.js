// Sabteil (Артур Иванов)

function isEmpty(obj) {

  let empty = true;

  for (let key in obj) { // Выполняется, только если есть свойства 
  empty = false;
  break;
  }

  return empty;
}
