// initializing animate on scroll animation function

AOS.init();

// hamburger toggle menu
const megaMenu = document.querySelector('.mega-menu');
const hamburger = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    megaMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    megaMenu.classList.remove('show');
});