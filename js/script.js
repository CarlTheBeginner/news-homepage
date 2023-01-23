const btnToggle = document.getElementsByClassName('header-nav--icon')[0];
const navLinks = document.getElementsByClassName('header-nav')[0];

btnToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
