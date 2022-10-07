//Валидация форм
'use strict';

const validForm = () => {
  //Функции обработки инпутов
  const formNameInput = (event) => {
    const target = event.target;
    target.value = target.value.replace(/[^а-яё\s]/gi, '');
    if (target.value.length < 2) {
      target.style.border = '5px solid #FF0000';
    } else {
      target.removeAttribute('style');
    }
  };
  const formNameBlur = (event) => {
    const target = event.target;
    if (target.value.length < 2) {
      target.value = '';
      target.removeAttribute('style');
    } else {
      target.value = target.value.split(/\s+/)
        .map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ')
        .trim();
    }
  };
  const formePhoneInput = (event) => {
    const target = event.target;
    target.value = target.value.replace(/[^\+\d]/g, '');
    if (target.value.length > 12) {
      target.value = target.value.substring(0, 12);
    } else if (target.value.charAt(0) !== '+' || target.value.charAt(1) !== '7') {
      target.value = '+7';
    }
  };
  const formPhoneBlur = (event) => {
    const target = event.target;
    target.value = target.value.replace(/^[\+]{1,}/g, '+').replace(/[\+]{1,}$/g, '');
  };
  //Вешаем слушатель по клику на body и внутри вешаем слушатель на нужный инпут с вызовом соответствущей функции
  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('[placeholder="Ваше имя..."]')) {
      target.addEventListener('input', formNameInput);
      target.addEventListener('blur', formNameBlur);
    } else if (target.matches('[placeholder*="Ваш номер"]')) {
      //Вешаем слушатель на поле плейсхолдер которого содержит подстроку "телефон"
      target.addEventListener('input', formePhoneInput);
      target.addEventListener('blur', formPhoneBlur);
    }
    //Удалять слушатели не нужно, повторного навешивания нет. Проверено.
  });
};

export default validForm;
