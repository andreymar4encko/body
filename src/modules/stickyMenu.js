//Прилипающие меню
'use strict';

const stickyMenu = () => {
  const menu = document.querySelector('.top-menu');
  const gift = document.querySelector('.fixed-gift');
  const menuHeight = menu.offsetHeight + 10;
  const startPos = menu.offsetTop;
  if (gift) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= startPos && window.innerWidth <= 768) {
        gift.style.top = menuHeight + 'px';
        menu.style.position = 'fixed';
      } else {
        menu.removeAttribute('style');
        gift.removeAttribute('style');
      }
    });
  }
};

export default stickyMenu;
