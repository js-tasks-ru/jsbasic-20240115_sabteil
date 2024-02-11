// Sabteil(Иванов Артур)

function showSalary(users, age ) { // 

  const filteredUsers = users.filter(user => user.age <= age) // Сортирует пользователей которые младше указанного возраста

  let result = filteredUsers.map((el) => { 

    let line = `${el.name}, ${el.balance}`; //Cоздает строку в массиве с необходимыми свойсвами

    return line;

  }).join('\n'); // Объединяет массив в одну строку, добавляя линейный разделитель табуляции
  
  return result; //Возврат строки

}

