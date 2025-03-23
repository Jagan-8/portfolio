/* ================== Toggle Menu Icon and Navbar ================== */
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle('fa-xmark'); // Changes "bars" icon to "X"
        navbar.classList.toggle('active');
    });
});

/* ================== Scroll Section Active Link ================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); // Changed to querySelectorAll to select multiple links

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => { // Changed "forEach.apply" to "forEach"
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    /* ================== Sticky Navbar ================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================== Remove Toggle Icon and Navbar When Clicking Link ================== */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ================== Scroll Reveal Animation ================== */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Fixed missing dot before "heading"
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' }); // Fixed "portfokio-box" typo
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ================== Typing Animation (Typed.js) ================== */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'], // Fixed "String" → "strings"
    typeSpeed: 70, // Fixed "typespeed" → "typeSpeed"
    backSpeed: 70, // Fixed "backspeed" → "backSpeed"
    backDelay: 1000, // Fixed "backDealy" → "backDelay"
    loop: true,
});



