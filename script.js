const toggleMenu = document.querySelector('#toggle-menu');
const navMenu = document.querySelector('.navbar-wrapper');
const hidden = document.querySelector('body');
const links = document.querySelectorAll('nav ul li a');
const btnToTop = document.getElementById('btn-to-top');

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle('bx-x');
  hidden.classList.toggle('show');
  navMenu.classList.toggle('show');
};

for (const link of links) {
  link.addEventListener('click', () => {
    toggleMenu.classList.remove('bx-x');
    hidden.classList.remove('show');
    navMenu.classList.remove('show');
  });
}

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = 'block';
  } else {
    btnToTop.style.display = 'none';
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

ScrollReveal().reveal('.scroll', {
  delay: 200,
  reset: true,
});
