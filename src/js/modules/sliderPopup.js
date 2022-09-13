const sliderPopup = () => {
  const sliderPopup = document.createElement('div');
  const imgBig = document.createElement('div');
  const button = document.createElement('div');
  const workSection = document.querySelector('.slider-bg__track');
  const scroll = calcScroll();
 
  button.innerHTML = ` <button class="services__button services__service-popup-btn">Заказать консультацию</button>`;
  button.style.zIndex = '20';

  sliderPopup.classList.add('popup');
  workSection.appendChild(sliderPopup);

  sliderPopup.style.justifyContent = 'center';
  sliderPopup.style.alignItems = 'center';
  sliderPopup.style.display = 'none';
  // imgPopup.innerHTML = `<div class="services__close">&times;</div>`;

   //Esc key press
   window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      sliderPopup.style.display = 'none';
    }
  });

 

  sliderPopup.appendChild(imgBig);
  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;
    if (target && target.classList.contains('open')) {
      sliderPopup.style.display = 'flex';

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;

      imgBig.innerHTML = target.nextElementSibling.innerHTML;
      

      // const servicePopup = document.querySelector('.services__service-popup');
      // servicePopup.appendChild(button);

     

      const closeSlider = document.querySelector('.slider__close');
      closeSlider.addEventListener('click', (e) => {
        e.preventDefault();
        sliderPopup.style.display = 'none';
          document.body.style.overflow = "";
          document.body.style.marginRight = `0px`;
      });
    }

    // if (target && target.matches('div.popup')) {
    //   imgPopup.style.display = 'none';
    //   document.body.style.overflow = "";
    //   document.body.style.marginRight = `0px`;
    // }
  });

  

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

export default sliderPopup;
