import '../scss/main.scss';
import '../index.html';
import '../policy.html';
import eventListeners from './modules/eventListeners';
import forms from './modules/forms';
import slider from './modules/slider';
import slowScroll from './modules/slowScroll';
import scrollHeader from './modules/scrollHeader';
import checkBox from './modules/checkBox';
import liveSearch from './modules/liveSearch';
import parser from './modules/parser';
import accordion from './modules/accordion';
import zoomImages from './modules/zoomImages';
import closeClickOverlay from './modules/closeClickOverlay';

window.onload = () => {
  // closeClickOverlay('.hiddenmenu', '.hiddenmenu__overlay', '.services__button', '.modal__close');
  zoomImages();
  accordion('.accordion__heading');
  // parser();
  liveSearch();
  eventListeners();
  checkBox();
  slider();
  // forms();
  slowScroll();
  scrollHeader();
  
  
};

// window.addEventListener('DOMContentLoaded', () => {
// //сТОИТ ПОДУМАТЬ ЧТОБЫ ОСНОВНАЯ КАРТИНКА ГРУЗИЛАСЬ ПОСЛЕ САЙТА
// });
