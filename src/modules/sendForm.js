//Отправка форм со страниц
'use strict';

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...';
  const loadMessage = 'Загрузка...';
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
    if (target.closest('#card_order')) {
      statusMessage.style.cssText = 'font-size: 2rem; color: #000000;';
    } else {
      statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff;';
    }
    target.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(target);
    target.reset();
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    const messageError = () => {
      document.getElementById('thanks').style.display = 'block';
      document.querySelector('#thanks .form-content h4').textContent = 'Ошибка';
      document.querySelector('#thanks .form-content p').textContent = errorMessage;
    };
    setTimeout(() => statusMessage.remove(), 1000);
    postData(body).then((response) => {
      if (response.status !== 200) {
        throw new Error('Status network not 200');
      }
      document.getElementById('thanks').style.display = 'block';
    }).catch(error => {
      messageError();
      console.error(error);
    });
  };
  document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!event.target.closest('.popup')) {
      const target = event.target;
      if (target.querySelector('input[type="checkbox"]')) {
        //Если подтверждение существует, проверяем выбрано или нет
        if (target.querySelector('input[type="checkbox"]').checked) {
          formSubmit(target);
        } else {
          statusMessage.style.cssText = 'padding-top: 5px; color: #FF0000;';
          statusMessage.textContent = 'Необходимо подтвердить согласие на персональных обработку данных';
          target.appendChild(statusMessage);
          setTimeout(() => statusMessage.remove(), 2000);
        }
      } else if (target.querySelectorAll('input[type="radio"]')) {
        const selectClub = target.querySelectorAll('input[type="radio"]');
        if (selectClub[0].checked || selectClub[1].checked) {
          formSubmit(target);
        }
      }
    }
  });
};

export default sendForm;
