//Адаптивное меню + анимация
'use strict';

const adaptiveMenu = () => {
  const bigMenu = document.querySelector('.hidden-small');
  const menuButton = document.querySelector('.menu-button');
  const menuHeight = menuButton.offsetHeight;
  const popUpMenu = document.querySelector('.popup-menu');
  const scroll = (event, menuHeight = 0) => {
    let target = event.target.closest('[href^="#"]');
    //Проверяем что target не null и не кнопка закрытия меню
    if (target && !target.matches('[href="#close"]')) {
      const link = target.getAttribute('href').substring(1);
      const scrollBlock = document.getElementById(link).offsetTop;
      let animation, count = window.pageYOffset; //Позиция начала прокрутки
      const scrollRun = () => {
        animation = requestAnimationFrame(scrollRun);
        if (count < scrollBlock - 15 - menuHeight) {
          count += 15; //Прокрутка вниз с учётом высоты меню
          document.documentElement.scrollTop = count;
        } else if (count > scrollBlock + 15 - menuHeight) {
          count -= 15; //Прокрутка вверх с учётом высоты меню
          document.documentElement.scrollTop = count;
        } else {
          cancelAnimationFrame(animation);
        }
      };
      requestAnimationFrame(scrollRun);
    }
  };
  const menu = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.closest('.close-menu-btn') || target.matches('[href^="#"]')) {
      popUpMenu.removeAttribute('style');
      if (window.innerWidth <= 768) {
        scroll(event, menuHeight);
      } else {
        scroll(event);
      }
    }
  };
  menuButton.addEventListener('click', (event) => {
    if (event.target.matches('img')) {
      popUpMenu.style.display = 'flex';
      popUpMenu.addEventListener('click', menu);
    }
  });
  bigMenu.addEventListener('click', menu);
};

export default adaptiveMenu;
