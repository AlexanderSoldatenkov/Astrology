const eventListeners = () => {
//Form button
const buttonsOpenForm = document.querySelectorAll('.services__button');
const closeForm = document.querySelectorAll('.modal__close');
const forma = document.querySelector('.overlay');

buttonsOpenForm.forEach(item => {
  item.addEventListener('click', (e) => {
    forma.classList.add('active');
  });
});
closeForm.forEach(item => {
  item.addEventListener('click', (e) => {
    forma.classList.remove('active');
  });
});


//Hidden menu
const hamburger = document.querySelector('.hamburger'),
  hiddenmenu = document.querySelector('.hiddenmenu'),
  hiddenmenulink = document.querySelector('.hiddenmenu__list'),
  closeElem = document.querySelector('.hiddenmenu__close'),
  closeThankyou = document.querySelector('.modal__close'),
  star = document.querySelectorAll('.hiddenmenu__link');

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
export default eventListeners;