// Sabteil (Артур Иванов)

let calculator = {
  valuea: null, // Память калькулятора для a
  valueb: null, // Память калькулятора для b

  read(a, b) {
    this.valuea = a; // Перенос значения a в память
    this.valueb = b; // Перенос значения b в память
    return "Сохранено"; // Подтверждение
  },

  sum() {  // Складывает числа из памяти и возвращает ответ
   return this.valuea + this.valueb;
  },

  mul() { // Умножает числа из памяти и возвращает ответ
    return this.valuea * this.valueb;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
