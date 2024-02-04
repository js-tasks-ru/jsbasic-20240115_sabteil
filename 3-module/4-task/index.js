// Sabteil(Иванов Артур)

function showSalary(users, age ) { // 

  const filteredUsers = age ? users.filter(user => user.age <= age) : users; // Сортирует пользователей которые младше указанного возраста

  let result = filteredUsers.map((el, index, array) => { 

    let line = `${el.name}, ${el.balance}`; //Cоздает строку в массиве с необходимыми свойсвами

    return index === array.length - 1 ? line.trimEnd() : line; // Удаляет табуляцию у последнего элемента массива

  }).join('\n'); // Объединяет массив в одну строку, добавляя линейный разделитель табуляции
  
  return result; //Возврат строки

}
console.log(showSalary(users, 30));

