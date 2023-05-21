var navigation = document.querySelector('.navigation');

// Добавляем обработчик события прокрутки окна
window.addEventListener('scroll', function() {
  // Проверяем положение прокрутки
  if (window.pageYOffset > 0) {
    // Если прокрутка больше 0, добавляем класс "scrolled"
    navigation.classList.add('scrolled');
  } else {
    // Иначе, удаляем класс "scrolled"
    navigation.classList.remove('scrolled');
  }
});




var elements = document.querySelectorAll('.navigation__element , .navigation__search');

elements.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    // проявляем линию
    element.style.textDecoration = 'underline';
    element.style.textDecorationThickness = '1px';
  });

  element.addEventListener('mouseout', function() {
    // убираем линию
    element.style.textDecoration = 'none';
  });
});

var links = document.querySelectorAll('.link');

links.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    // Изменяем цвет при наведении
    element.style.textDecorationColor = 'gray';
  });

  element.addEventListener('mouseout', function() {
    // Возвращаем исходный цвет при уходе мыши
    element.style.textDecorationColor = '';
  });
});


var buttons = document.querySelectorAll('.intro__pause, .intro__button , .join-cont__button');

buttons.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    // Change the text color to red when the mouse is over the button
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
  });

  element.addEventListener('mouseout', function() {
    // Restore the original text color when the mouse moves out of the button
    element.style.backgroundColor = '';
    element.style.color = '';
  });
});


var pauseButton = document.querySelector('.intro__pause');
var video = document.querySelector('.intro__video');

pauseButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    pauseButton.textContent = 'Pause video';
  } else {
    video.pause();
    pauseButton.textContent = 'Play video';
  }
});


var cellsElements = document.querySelectorAll('.four-cols__cells');

cellsElements.forEach(function(cellsElement) {
  var nameElement = cellsElement.querySelector('.four-cols__name');

  cellsElement.addEventListener('mouseover', function() {
    nameElement.style.textDecoration = 'underline';
    nameElement.style.textDecorationThickness = '1px';
  });

  cellsElement.addEventListener('mouseout', function() {
    nameElement.style.textDecoration = 'none';
  });
});