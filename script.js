const toggleMenu = document.querySelector('#toggle-menu');
const navMenu = document.querySelector('.navbar-wrapper');
const hidden = document.querySelector('body');

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle('bx-x');
  hidden.classList.toggle('show');
  navMenu.classList.toggle('show');
};

window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.scroll-1', {
  delay: 100,
  rotate: {
    x: 100,
    y: 0,
    z: 0,
  },
});
ScrollReveal().reveal('.scroll-2', {
  delay: 100,
  rotate: {
    x: 100,
    y: 0,
    z: 0,
  },
});
ScrollReveal().reveal('.scroll-3', {
  delay: 100,
  rotate: {
    x: 100,
    y: 0,
    z: 0,
  },
});
ScrollReveal().reveal('.scroll-4', {
  delay: 100,
  rotate: {
    x: 100,
    y: 0,
    z: 0,
  },
});
ScrollReveal().reveal('.scroll-5', {
  delay: 100,
  rotate: {
    x: 100,
    y: 0,
    z: 0,
  },
});
ScrollReveal().reveal('.scroll-6', {
  delay: 100,
  rotate: {
    x: 100,
    y: 0,
    z: 0,
  },
});
ScrollReveal().reveal('.scroll-7', {
  delay: 100,
  rotate: {
    x: 100,
    y: 0,
    z: 0,
  },
});
