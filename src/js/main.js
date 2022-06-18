import '../scss/main.scss';
import '../index.html';
import eventListeners from './modules/eventListeners';
import forms from './modules/forms';
import slider from './modules/slider';
import slowScroll from './modules/slowScroll';
import scrollHeader from './modules/scrollHeader';

window.onload = () => {
  eventListeners();
  slider();
  forms();
  slowScroll();
  scrollHeader();
};
