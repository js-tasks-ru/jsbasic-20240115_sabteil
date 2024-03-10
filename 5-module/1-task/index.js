function hideSelf() {
  // Получаем DOM-элемент нужной нам кнопки и записываем его в переменную
  const button = document.querySelector(".hide-self-button");
  // Создаем событие при нажатии на кнопку, добавляет атрибут hidden="true"
  return button.onclick = () => button.setAttribute('hidden' , true );
}
