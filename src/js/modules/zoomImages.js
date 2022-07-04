const zoomImages = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.certificates__wrapper'),
        bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;
      //target.classList.contains('certificates__imgSmsll')
    //target.querySelector('img')
      if (target && target.classList.contains('certificates__imgSmall')) {
          imgPopup.style.display = 'flex';
          const path = target.parentNode.getAttribute('href');
          bigImage.setAttribute('src', path);
          console.log(target.nextElementSibling.innerHTML);
      }

      if (target && target.matches('div.popup')) {
          imgPopup.style.display = 'none';
      }
  });

};

export default zoomImages;