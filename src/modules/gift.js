//Подарок
'use strict';

const gift = () => {
  const giftBtn = document.querySelector('.fixed-gift');
  if (giftBtn) {
    giftBtn.addEventListener('click', () => {
      document.getElementById('gift').style.display = 'block';
      giftBtn.remove();
    });
  }
};

export default gift;
