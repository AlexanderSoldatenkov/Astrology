const zoomImages = () => {
  const imgPopup = document.createElement('div');
  const imgBig = document.createElement('div');
  const workSection = document.querySelector('.certificates__wrapper');
  const scroll = calcScroll();
 

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(imgBig);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('certificates__imgSmall')) {
      imgPopup.style.display = 'flex';

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;

      imgBig.innerHTML = target.nextElementSibling.innerHTML;

      const close = imgBig.querySelector('.certificates__close');
      close.addEventListener('click', (e) => {
        e.preventDefault();
        imgPopup.style.display = 'none';
          document.body.style.overflow = "";
          document.body.style.marginRight = `0px`;
      });
      // console.log(testEl);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
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

export default zoomImages;
