//Close menu when click on overlay
const closeClickOverlay = (object, overlaySelector, btnOpen, btnClose) => {
const hiddenmenu = document.querySelector(object);
const overlay = document.querySelector(overlaySelector);

const buttonsOpenForm = document.querySelectorAll(btnOpen);
const closeForm = document.querySelectorAll(btnClose);

buttonsOpenForm.forEach(item => {
  item.addEventListener('click', (e) => {
    overlay.classList.add('active');
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
  });
});
closeForm.forEach(item => {
  item.addEventListener('click', (e) => {
    overlay.classList.remove('active'); 
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  });
});


const closeClickOverlay = true;
const scroll = calcScroll();
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

export default closeClickOverlay;