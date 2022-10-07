//Слайдер фотогалереи
'use strict';

const slider = () => {
  const addStyle = () => {
    const style = document.createElement('style');
    style.id = 'slider-style';
    style.textContent = `
      .slide-item {
        display: none;
      }
      .slide-active {
        display: block;
      }
    `;
    document.head.appendChild(style);
  };
  addStyle();
  const slider = document.querySelector('.gallery-slider');
  const slide = document.querySelectorAll('.gallery-slider .slide');
  const btnDotWrap = document.querySelector('.slider-dots-wrapper');
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.add('slide-item');
    if (i === 0) {
      slide[i].classList.add('slide-active');
    }
  }
  const elemDots = document.createElement('ul');
  elemDots.className = 'slider-dots';
  elemDots.style.cssText = 'position: relative; bottom: 50px;';
  btnDotWrap.append(elemDots);
  const btnDot = document.querySelector('.slider-dots');
  for (let i = 0; i < slide.length; i++) {
    const dotsItem = document.createElement('li');
    const dots = document.createElement('button');
    dots.classList.add('dotBtn');
    dotsItem.classList.add('dot');
    if (i === 0) {
      dotsItem.classList.add('slick-active');
    }
    btnDot.append(dotsItem);
    dotsItem.append(dots);
  }
  const dot = slider.querySelectorAll('.dot');
  let currentSlide = 0,
    interval;
  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'slick-active');
  };
  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearTimeout(interval);
  };
  slider.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'slick-active');
    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.closest('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target.closest('.dot')) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'slick-active');
  });
  slider.addEventListener('mouseover', (event) => {
    if (event.target.closest('.slider-arrow') || event.target.closest('.dot')) {
      stopSlide();
    }
  });
  slider.addEventListener('mouseout', (event) => {
    if (event.target.closest('.slider-arrow') || event.target.closest('.dot')) {
      startSlide();
    }
  });
  startSlide(1500);
};

export default slider;
