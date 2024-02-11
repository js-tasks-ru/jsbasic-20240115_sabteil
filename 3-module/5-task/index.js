//Sabteil (Артур Иванов)

function getMinMax(str) {

  arrayStr = str.split(' ').map(value => +value).filter(value => !isNaN(value)); // Преобразует из строки массив, пропуская только числовые значения

  const minMax = { // Объект для возврата, в котором только минимально и максимальное значение

    min: Math.min(...arrayStr), // С помощью spread оператора, развертывает элементы массива arrayStr в функции, что бы найти среди них минимальное значение

    max: Math.max(...arrayStr), // С помощью spread оператора, развертывает элементы массива arrayStr в функции, что бы найти среди них максимальное значение

  }

  return minMax;

}
