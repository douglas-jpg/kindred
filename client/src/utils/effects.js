export function navbar() {
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
}

export function backToTop() {
    const buttonToTop = document.querySelector('.back');

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
}

export function scrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const height =
            document.documentElement.scrollHeight - window.innerHeight;
        const finalPage = (window.scrollY / height) * 100;
        progressBar.style.width = `${finalPage}%`;
    });
}

export function initLightbox() {
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
}

export function accordion() {
    const accord = document.querySelectorAll('.accordion');
    accord.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.display =
                content.style.display === 'block' ? 'none' : 'block';
        });
    });
}
