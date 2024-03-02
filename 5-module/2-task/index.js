function toggleText() {
  // Находим кнопку по классу
  const buttonOnClick = document.querySelector('.toggle-text-button');

  // Находим элемент текста по его id
  let divIsHidden = document.getElementById('text');

  // Назначаем обработчик события click на кнопку
  buttonOnClick.onclick = () => divIsHidden.hidden = !divIsHidden.hidden;
}

// Вызываем функцию после полной загрузки страницы
document.addEventListener('DOMContentLoaded', toggleText() );