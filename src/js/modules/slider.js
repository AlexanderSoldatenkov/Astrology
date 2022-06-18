const slider = () => {
  //Slider
  const sliderImages = document.querySelectorAll('.slider-bg__img');
  const slider = document.querySelector('.intro__slider');
  const track = document.querySelector('.slider-bg__wrapper');
  const arrowLeft = document.querySelector('.slider-bg__arow-left');
  const arrowRight = document.querySelector('.slider-bg__arow-right');
  

  let i = 0;
  let numberOfSlides = 23;
  let position = 0;
  hideSlide();
  showSlider(i);

  arrowRight.addEventListener('click', () => {
    if (i === 0 || i < numberOfSlides) {
      i++;
      // console.log(i);
      hideSlide();
      showSlider(i);
    } else {
      i = 0;
      // console.log(i);
      hideSlide();
      showSlider(i);
    }
    // setposition();
  });

  arrowLeft.addEventListener('click', () => {
    if (i === 1 || i <= numberOfSlides && i > 0) {
      i--;
      // console.log(i);
      hideSlide();
      showSlider(i);
    } else {
      i = numberOfSlides;
      // console.log(i);
      hideSlide();
      showSlider(i);
    }


  });

  function hideSlide() {

    sliderImages.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

  }

  function showSlider(i) {
    sliderImages[i].classList.add('show', 'fade');
    sliderImages[i].classList.remove('hide');
  }
};
export default slider;