const toggleMenu = document.querySelector('#toggle-menu');
const navMenu = document.querySelector('.navbar-wrapper');
const hidden = document.querySelector('body');

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle('bx-x');
  hidden.classList.toggle('show');
  navMenu.classList.toggle('show');
};
