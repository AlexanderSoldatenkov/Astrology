const scrollHeader = () => {
//Header show / hide and arrowUp
const header = document.querySelector('nav');
const arrowUp = document.querySelector('.pageup');
const defaultOffset = 2500;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('nav-hide');
const containHideScroll = () => header.classList.contains('pageup-show');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //Scroll down
    header.classList.add('nav-hide');
    arrowUp.classList.add('pageup-show');

  } else if (scrollPosition() < lastScroll && containHide() && scrollPosition() < defaultOffset) {
    //Scroll up
    header.classList.remove('nav-hide');
    arrowUp.classList.remove('pageup-show');
  } else if (scrollPosition() > 3300) {
    //Scroll up
    arrowUp.classList.remove('pageup-show');
  } 

  // if (scrollPosition() < 3300 && !containHideScroll()) {
  //   //Scroll up
  //   arrowUp.classList.add('pageup-show');
  // } else if (scrollPosition() > 3300 && containHideScroll()) {
  //   //Scroll up
  //   arrowUp.classList.remove('pageup-show');
  // } 

  lastScroll = scrollPosition();
});
};
export default scrollHeader;