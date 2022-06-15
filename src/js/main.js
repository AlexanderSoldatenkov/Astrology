import '../scss/main.scss';
import '../index.html';

window.onload = () => {
//Header show / hide and arrowUp
const header = document.querySelector('nav');
const arrowUp = document.querySelector('.pageup');
const defaultOffset = 2500;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('nav-hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //Scroll down
    header.classList.add('nav-hide');
    arrowUp.classList.add('pageup-show');

  } else if (scrollPosition() < lastScroll && containHide() && scrollPosition() < defaultOffset) {
    //Scroll up
    header.classList.remove('nav-hide');
    arrowUp.classList.remove('pageup-show');
  }
  lastScroll = scrollPosition();
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

  // star.forEach(item => {
  //   item.addEventListener('click', () => {
  //     // star.classList.add('show');
  //     console.log('mouseover');
  //     item.classList.add('show', 'fade');
  //     item.classList.remove('hide');
  //     });
  //   });
  // element.addEventListener("mouseout", myThirdFunction);


  //Slider
  const sliderImages = document.querySelectorAll('.slider-bg__img');
  const slider = document.querySelector('.intro__slider');
  const track = document.querySelector('.slider-bg__wrapper');
  const arrowLeft = document.querySelector('.slider-bg__arow-left');
  const arrowRight = document.querySelector('.slider-bg__arow-right');
  

  let i = 0;
  let numberOfSlides = 2;
  let position = 0;
  hideSlide();
  showSlider(i);

  arrowRight.addEventListener('click', () => {
    if (i === 0 || i < numberOfSlides) {
      i++;
      console.log(i);
      hideSlide();
      showSlider(i);
    } else {
      i = 0;
      console.log(i);
      hideSlide();
      showSlider(i);
    }
    setposition();
  });

  arrowLeft.addEventListener('click', () => {
    if (i === 1 || i <= numberOfSlides && i > 0) {
      i--;
      console.log(i);
      hideSlide();
      showSlider(i);
    } else {
      i = numberOfSlides;
      console.log(i);
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

  //Slow scroll main menu

const menuHTML = document.getElementById('head__menu');
const linksHTML = menuHTML.querySelectorAll('a.head__menu-link');

for (let i = 0; i < linksHTML.length; i++) {
  linksHTML[i].addEventListener('click', event => onNavLinkClick(event));
}

function onNavLinkClick(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  const blockId = href.indexOf('#') !== -1 ? href.split('#')[1] : '';

  if (!blockId) {
    return;
  }

  document
    .getElementById(blockId)
    .scrollIntoView({
      behavior: "smooth"
    });
}




// Smooth scroll and page up
// window.scroll(function () {
//   if ($(this).scrollTop() > 800) {
//       $('.pageup').fadeIn();
//   } else {
//       $('.pageup').fadeOut();
//   }
// });


// document
//     .getElementById('.pageup')
//     .scrollIntoView({
//       behavior: "smooth"
//     });

  // function setposition () {
  //   track.style.transform: `translateX(${position}px)`;
  //   }
//   //Set slider in center
//   let windowWidth = slider.clientWidth;
//   const intro = document.querySelector('.intro__slider');
//   const widthInPersents = 50; //Please set Slider Width in persents
//   const sliderWidth = (windowWidth * widthInPersents) / 100;
//   const freeSpcse = (windowWidth - sliderWidth) / 2 + sliderWidth / 2;

//   function setCssVariables() {
//     intro.style.setProperty('--slider-margin-left', ('-' + freeSpcse + 'px'));
//     intro.style.setProperty('--slider-width', (widthInPersents + '%'));
//   }
//   setCssVariables();
 

// //Browser reload when window width is changed
//   let oldWidth = window.innerWidth;
//   window.onresize = function () {
//     let newWidth = window.innerWidth;

//     if (newWidth != oldWidth) {
//       oldWidth = newWidth;
//       location.reload();
//     }
//   };

  //Paddind under slider
  // let windowHeight = slider.clientHeight;
  // const servicesLike = document.querySelector('.services__like');
  // let servicesLikeMt = windowHeight/10;

  // servicesLike.style.setProperty('--services-like-mt', (servicesLikeMt + 'px'));

};
