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
import servicesPopup from './modules/servicesPopup';
import newsPopup from './modules/newsPopup';
import sliderPopup from './modules/sliderPopup';

window.onload = () => {
  sliderPopup();
  newsPopup();
  servicesPopup();
  zoomImages();
  accordion('.accordion__heading');
  scrollHeader();
  // parser();
  liveSearch();
  eventListeners();
  checkBox();
  slider();
  // forms();
  slowScroll();
  
  
  
};

// window.addEventListener('DOMContentLoaded', () => {
// //сТОИТ ПОДУМАТЬ ЧТОБЫ ОСНОВНАЯ КАРТИНКА ГРУЗИЛАСЬ ПОСЛЕ САЙТА
// });
