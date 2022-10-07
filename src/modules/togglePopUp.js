//Модальные окна
'use strict';

const togglePopUp = () => {
  const headMain = document.querySelector('.head-main .right');
  const freeVisitForm = document.getElementById('free_visit_form');
  const callbackForm = document.getElementById('callback_form');
  headMain.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.matches('.open-popup')) {
      freeVisitForm.style.display = 'block';
    } else if (target.matches('.callback-btn')) {
      callbackForm.style.display = 'block';
    }
  });
  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('.overlay') || target.closest('.close-form') || target.matches('.close-btn')) {
      target.closest('.popup').removeAttribute('style');
    }
  });
};

export default togglePopUp;
