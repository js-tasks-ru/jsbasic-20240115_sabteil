function toggleText() {
  // Находим кнопку по классу
  const buttonOnClick = document.querySelector('.toggle-text-button');

  // Находим элемент текста по его id
  let divIsHidden = document.querySelector('#text');

  // Назначаем обработчик события click на кнопку
  return buttonOnClick.onclick = () => { 

    // Получаем текущее значение атрибута hidden (true/false)
    const isHidden = divIsHidden.getAttribute("hidden") === "true";

    // Если текст не скрыт, скрываем его
    if (!isHidden) {
      divIsHidden.setAttribute("hidden", true); 
    } else { 
      // Если текст уже скрыт, показываем его
      divIsHidden.removeAttribute('hidden'); 
    }
  }
}

// Вызываем функцию после полной загрузки страницы
document.addEventListener('DOMContentLoaded', toggleText);