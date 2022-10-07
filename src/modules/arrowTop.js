//Появление стрелки + анимация при клике по стрелки
'use strict';

const arrowTop = () => {
  const header = document.querySelector('header');
  const startPos = header.offsetHeight;
  const arrow = document.getElementById('totop');
  arrow.style.display = 'none';
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > startPos) {
      arrow.style.display = 'block';
    } else {
      arrow.style.display = 'none';
    }
  });
  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -15);
      setTimeout(backToTop, 1);
    }
  };
  arrow.addEventListener('click', (event) => {
    event.preventDefault();
    backToTop();
  });
};

export default arrowTop;
