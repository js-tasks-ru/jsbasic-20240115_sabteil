// Sabteil(Артур Иванов)



function checkSpam(str) {
  str = str.toLowerCase(); // Приводит все буквы в тексте к нижнему регистру
  return str.includes("1xbet") || str.includes("xxx"); // Если содержит ключевые слова, то выводит true или false соответственно
  
}

