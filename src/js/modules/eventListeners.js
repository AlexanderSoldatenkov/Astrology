const eventListeners = () => {
//Form button
const buttonsOpenForm = document.querySelectorAll('.services__button');
const closeForm = document.querySelectorAll('.modal__close');
const forma = document.querySelector('.overlay');

const scroll = calcScroll();



// headSearch.addEventListener('click', function (e) { 
//   e.preventDefault();
//   const smenu = document.querySelector('.search');
//   smenu.classList.add('hide');
//   smenu.classList.remove('show');
// });





buttonsOpenForm.forEach(item => {
  item.addEventListener('click', (e) => {
    forma.classList.add('active');
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
  });
});
closeForm.forEach(item => {
  item.addEventListener('click', (e) => {
    forma.classList.remove('active'); 
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  });
});



//Hidden menu
const hamburger = document.querySelector('.hamburger'),
  hiddenmenu = document.querySelector('.hiddenmenu'),
  hiddenmenulink = document.querySelector('.hiddenmenu__list'),
  closeElem = document.querySelector('.hiddenmenu__close'),
  closeThankyou = document.querySelector('.modal__close'),
  star = document.querySelectorAll('.hiddenmenu__link');
const overlay = document.querySelector('.hiddenmenu__overlay');
const closeClickOverlay = true;

hamburger.addEventListener('click', () => {
  hiddenmenu.classList.add('active');
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scroll}px`;
});

closeElem.addEventListener('click', () => {
  hiddenmenu.classList.remove('active');
  document.body.style.overflow = "";
  document.body.style.marginRight = `0px`;
});

hiddenmenulink.addEventListener('click', () => {
  hiddenmenu.classList.remove('active');
  document.body.style.overflow = "";
  document.body.style.marginRight = `0px`;
});
//Close menu when click on overlay
overlay.addEventListener('click', (e) => {
  if (e.target === overlay && closeClickOverlay) {
    hiddenmenu.classList.remove('active');
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  }
});

//CalcSckoll right
function calcScroll() {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}
};
export default eventListeners;