//Дипломная работа
'use strict';

import adaptiveMenu from './modules/adaptiveMenu';
import selectClub from './modules/selectClub';
import togglePopUp from './modules/togglePopUp';
import validForm from './modules/validForm';
import sendFormModal from './modules/sendFormModal';
import sendForm from './modules/sendForm';
import gift from './modules/gift';
import stickyMenu from './modules/stickyMenu';
import arrowTop from './modules/arrowTop';
import scrollFooterMenu from './modules/scrollFooterMenu';
import calculator from './modules/calculator';
import headerSlider from './modules/headerSlider';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';

adaptiveMenu();
selectClub();
togglePopUp();
window.onload = validForm();
sendFormModal();
sendForm();
gift();
stickyMenu();
arrowTop();
scrollFooterMenu();
calculator();
headerSlider();
slider();
sliderCarousel();
