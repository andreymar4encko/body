//Выпадающие меню
'use strict';

const selectClub = () => {
  const clubSelect = document.querySelector('.club-select');
  clubSelect.addEventListener('click', () => {
    if (clubSelect.querySelector('ul').hasAttribute('style')) {
      clubSelect.querySelector('ul').removeAttribute('style');
    } else {
      clubSelect.querySelector('ul').style.display = 'block';
    }
  });
};

export default selectClub;
