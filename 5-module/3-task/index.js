function initCarousel() {
  
  let rightClick = document.querySelector('.carousel__arrow.carousel__arrow_right'); // Выбирает правую стрелку
  //
  let leftClick = document.querySelector('.carousel__arrow.carousel__arrow_left'); // Выбирает левую стрелку
  //
  let carousel = document.querySelector('.carousel__inner');

  leftClick.style.display = 'none'; // По умолчанию скрывает левую стрелку
  let currentSlide = 0; // Отслеживает текущий слайд
  let c = 0; // Текущее смещение
  
  //Событие при нажатии на правую стрелку
  rightClick.onclick = () => {

    if (currentSlide != 3) {
    carousel.style.transform = `translateX(${cheker("right")})` ;
    currentSlide++ ; // Передает значение текущего слайда
    if (leftClick.style.display === "none") { leftClick.style.display = '' }; // Возвращает левую стрелку стрелку 
    if (currentSlide === 3) { rightClick.style.display = "none"  }; // Убирает правую стрелку на последнем слайде

    }

  }

  leftClick.onclick = () => {
    
    if (currentSlide != 0) {
    carousel.style.transform = `translateX(${cheker("left")})`;
    currentSlide--; // Передает значение текущего слайда
    if (currentSlide !=3) {rightClick.style.display = ""} // Возвращает правую стрелку
    if (currentSlide == 0) {leftClick.style.display = 'none'} // Убирает левую стрелку на первом слайде

    }

  }

  function cheker(whatButtonClick) { // функция которая возвращает необходимое смещение для слайда на всю его ширину

    let curentElem = carousel.children[currentSlide];
    let w = curentElem.offsetWidth;

    if (whatButtonClick === "right") {
    c += w;
    return "-" + c + "px";
    } else {
    c -= w;
    return "-" + c + "px";
    }
  
  }

}
