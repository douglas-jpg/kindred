const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-item a');

menu.addEventListener('click', () => {
    navList.classList.toggle('open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        navItems.forEach((item) => item.classList.remove('active'));

        link.parentElement.classList.add('active');
        navList.classList.remove('open');
    });
});

lucide.createIcons();
