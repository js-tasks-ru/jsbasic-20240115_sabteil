//Sabteil (Артур ИВанов);

function camelize(str) {

	const words = str.split("-"); //Создает массив из отдельных слов

	const answer = words.map((text, index) => {

		if (index === 0) { // Возвращает первый элемент массива без изменений

			return text;
		}

		return text.charAt(0).toUpperCase() + text.slice(1); //Следующие элементы массива с заглавной буквы

	}).join(''); //Соединяет элементы массива в одну строку без пробелов

	return answer //Возвращает текст преобразованный в camelCase

	};


