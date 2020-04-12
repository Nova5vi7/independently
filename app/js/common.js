// Получаем ссылку на кнопку и записываем её в переменную navigationButton
const navigationButton = document.getElementById("navigation-toggle-btn");
const navigationMenu = document.getElementById("navigation-menu");

// Добавляем обработчик событий на 'click' по кнопке "#navigation-toggle-btn" ссылка которой находится в переменной navigationButton
navigationButton.addEventListener("click", function() {
  // Удаляем класс при нажатии на кнопку
  // navigationButton.classList.remove("active");

  // Добавляем класс при нажатии на кнопку
  // navigationButton.classList.add("active");

  // Добавляем класс при нажатии на кнопку и удаляем его при повторном нажатии
  navigationButton.classList.toggle("active");
  navigationMenu.classList.toggle("active");
});
