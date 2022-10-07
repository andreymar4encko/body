//Калькулятор
'use strict';

const calculator = () => {
  const priceTotal = document.getElementById('price-total');
  if (priceTotal) {
    const cardOrder = document.getElementById('card_order');
    const cardTime = document.querySelector('.time');
    const cardType = document.querySelector('label[for^="m"]').textContent;
    const clubName = document.querySelector('input[name="club-name"]').value;
    const code = document.querySelector('input[name="code"]');
    const getPrice = (url, card) => {
      fetch(`./${url}.html`).then(response => response.text()).then(responseText => {
        const page = new DOMParser().parseFromString(responseText, 'text/html');
        const elements = page.querySelectorAll('label[for^="t"]');
        for (const element of elements) {
          const solo = element.querySelector('.solo').textContent;
          const isSolo = /[соло]/i.test(solo);
          const long = element.querySelector('.long').textContent;
          if (long === card && isSolo) {
            const cost = element.querySelector('.cost').textContent;
            const price = parseInt(cost);
            if (code.value === 'ТЕЛО2020') {
              const percent = parseInt(cost) / 100 * 30;
              priceTotal.textContent = price - Math.ceil(percent);
            } else {
              priceTotal.textContent = price;
            }
          }
        }
      });
    };
    let url = clubName; //Записываем значение clubName как часть url страницы
    let card = cardType; //Записываем значение cardType как время действия карты
    getPrice(url, card); //Вызываем getPrice для получения стоимости карты
    cardOrder.addEventListener('change', (event) => {
      const target = event.target;
      if (target.matches('input[name="club-name"]')) {
        url = target.value;
      }
      getPrice(url, card);
    });
    cardTime.addEventListener('click', (event) => {
      const target = event.target;
      if (target.matches('label[for^="m"]')) {
        card = target.textContent;
      }
      getPrice(url, card);
    });
  }
};

export default calculator;
