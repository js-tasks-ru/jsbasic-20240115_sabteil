
function makeFriendsList(friends) {

  const ul = document.createElement("ul"); /* Создаём переменную и тег ul(Не
  нумерованный список) */

  for (let i = 0 ; i < friends.length ; i++) {

    let li = document.createElement('li'); // Создает элемент списка

    li.appendChild(document.createTextNode(`${friends[i].firstName} ${friends[i].lastName} `)) // Создает дочерний элемент элемента li 
    ul.appendChild(li); // Добавляет элемент списка в список.
  }

  return ul; // возвращает готовый список

}
