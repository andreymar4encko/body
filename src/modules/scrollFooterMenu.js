//Анимация прокрутки из меню в футере
'use strict';

const scrollFooterMenu = () => {
  const footerMenu = document.querySelector('.footer-top .left');
  const scroll = (event) => {
    let target = event.target.closest('[href^="#"]');
    const link = target.getAttribute('href').substring(1);
    const scrollBlock = document.getElementById(link).offsetTop;
    let animation, count = window.pageYOffset; //Позиция начала прокрутки
    const scrollRun = () => {
      animation = requestAnimationFrame(scrollRun);
      if (count > scrollBlock) {
        count -= 15;
        document.documentElement.scrollTop = count;
      } else {
        cancelAnimationFrame(animation);
      }
    };
    requestAnimationFrame(scrollRun);
  };
  footerMenu.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('[href^="#"]')) {
      event.preventDefault();
      scroll(event);
    }
  });
};

export default scrollFooterMenu;
