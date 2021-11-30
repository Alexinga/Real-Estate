'use strict';
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navUl = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');
const agentImgs = document.querySelectorAll('.profile');
const allImgs = document.querySelectorAll('.fix-img');

// Smooth Scrolling
navUl.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('nav-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

// sticky Navigation
const callback = function(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

let options = {
    root: null,
    threshold: 0.1,
}
const header = document.getElementById('nav');

const navObserver = new IntersectionObserver(callback, options);
navObserver.observe(header);

// Opening menu
hamburgerMenu.addEventListener('click', openMenu);
function openMenu() {
    navUl.classList.toggle('active');
}

// Lazy Loading
const loadImg = function(entries, observer) {
    const [entry] = entries
    if(!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.remove('lazy');
    }
    observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg, options);
agentImgs.forEach(img => imgObserver.observe(img));
allImgs.forEach(img => imgObserver.observe(img));

