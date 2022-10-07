//Оправка формы из модальных окон
'use strict';

const sendFormModal = () => {
  const errorMessage = 'Что-то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
  const statusMessage = document.createElement('div');
  //Функция отправки данных на сервер и обработки ответа
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
  const formSubmit = (target) => {
    //Записываем исходное содержимое формы в переменную formText
    const formText = target.innerHTML;
    statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff;';
    statusMessage.textContent = loadMessage;
    target.appendChild(statusMessage);
    const formData = new FormData(target);
    target.reset();
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    const message = (result) => {
      target.style.cssText = 'padding-top: 25%; font-size: 2rem; color: #ffffff;';
      target.textContent = result;
    };
    const removeMessage = () => {
      //Через 5 секунд восстанавливаем содержимое формы и закрываем её
      setTimeout(() => {
        target.removeAttribute('style');
        target.innerHTML = formText;
        target.closest('.popup').removeAttribute('style');
      }, 5000);
    };
    postData(body).then((response) => {
      if (response.status !== 200) {
        throw new Error('Status network not 200');
      }
      if (target.closest('.popup')) {
        message(successMessage);
        removeMessage();
      }
    }).catch(error => {
      if (target.closest('.popup')) {
        message(errorMessage);
        removeMessage();
      }
      console.error(error);
    });
  };
  document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.closest('.popup')) {
      if (target.querySelector('input[type="checkbox"]').checked) {
        formSubmit(target);
      } else {
        statusMessage.style.cssText = 'padding-top: 5px; color: #FF0000;';
        statusMessage.textContent = 'Необходимо подтвердить согласие на персональных обработку данных';
        target.appendChild(statusMessage);
        setTimeout(() => statusMessage.remove(), 2000);
      }
    }
  });
};

export default sendFormModal;
