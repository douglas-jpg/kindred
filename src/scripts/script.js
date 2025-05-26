const btnToggle = document.querySelector('.btn-hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.item-nav a');
const buttonToTop = document.querySelector('.back');
const accordion = document.querySelectorAll('.accordion');

btnToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        buttonToTop.style.display = 'block';
    } else {
        buttonToTop.style.display = 'none';
    }
});

buttonToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const scrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const height =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / height) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
};

scrollProgress();

accordion.forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display =
            content.style.display === 'block' ? 'none' : 'block';
    });
});

const initLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    document.querySelectorAll('.galeria img').forEach((img) => {
        img.addEventListener('click', () => {
            lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
};

initLightbox();

document.addEventListener('keydown', (e) => {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox.classList.contains('active')) return;

    const images = Array.from(document.querySelectorAll('.galeria img'));
    const current = images.findIndex(
        (img) => img.src === lightbox.querySelector('img').src
    );

    if (e.key === 'ArrowRight') {
        const next = (current + 1) % images.length;
        lightbox.innerHTML = `<img src="${images[next].src}" alt="${images[next].alt}">`;
    }

    if (e.key === 'ArrowLeft') {
        const prev = (current - 1 + images.length) % images.length;
        lightbox.innerHTML = `<img src="${images[prev].src}" alt="${images[prev].alt}">`;
    }
});
