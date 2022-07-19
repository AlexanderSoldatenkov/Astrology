const newsPopup = () => {
  const imgPopup = document.createElement('div');
  const hidenTempl = document.createElement('div');
  const btn = document.createElement('div');
  const workSection = document.querySelector('.service-wrapper-justyfy');
  const scroll = calcScroll();
 
  btn.innerHTML = ` <button class="services__button services__service-popup-btn">Заказать консультацию</button>`;
  btn.style.zIndex = '20';

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  // imgPopup.innerHTML = `<div class="services__close">&times;</div>`;

 

 

  imgPopup.appendChild(hidenTempl);
  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;
    if (target && target.classList.contains('services__know-more')) {
      imgPopup.style.display = 'flex';

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;

      hidenTempl.innerHTML = target.nextElementSibling.innerHTML;
      
      
      const servicePopup = document.querySelector('.services__service-popup');
      servicePopup.appendChild(btn);

      const forma = document.querySelector('.overlay');
      const buttonOpenForm = document.querySelector('.services__service-popup-btn');
      const closeForm = document.querySelector('.modal__close');
      buttonOpenForm.addEventListener('click', (e) => {
        forma.classList.add('active');
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        imgPopup.style.display = 'none';   
      });
      closeForm.addEventListener('click', (e) => {
        forma.classList.remove('active'); 
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      });

      const close = document.querySelector('.news__close');
      close.addEventListener('click', (e) => {
        e.preventDefault();
        imgPopup.style.display = 'none';
          document.body.style.overflow = "";
          document.body.style.marginRight = `0px`;
          servicePopup.remove(btn);
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

export default newsPopup;
