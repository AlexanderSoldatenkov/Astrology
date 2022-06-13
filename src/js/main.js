import '../scss/main.scss';
import '../index.html';

window.onload = () => {
 //Hidden menu

const hamburger = document.querySelector('.hamburger'),
hiddenmenu = document.querySelector('.hiddenmenu'),
hiddenmenulink = document.querySelector('.hiddenmenu__list'),
closeElem = document.querySelector('.hiddenmenu__close'),
closeThankyou = document.querySelector('.modal__close');

hamburger.addEventListener('click', () => {
hiddenmenu.classList.add('active');
});

closeElem.addEventListener('click', () => {
hiddenmenu.classList.remove('active');
});

hiddenmenulink.addEventListener('click', () => {
hiddenmenu.classList.remove('active');
});
};
