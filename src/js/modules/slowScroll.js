const slowScroll = () => {
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
};
export default slowScroll;