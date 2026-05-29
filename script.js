// Document DOM Elements Selector Mapping
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Interactive Mobile Navigation Open/Close State Manager
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    
    if (mobileMenu.classList.contains('hidden')) {
        icon.className = 'fa-solid fa-bars text-xl';
    } else {
        icon.className = 'fa-solid fa-xmark text-xl';
    }
});

// Close menu immediately if an explicit layout section link gets selected
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars text-xl';
    });
});

// Sticky Nav visual configuration transformation on scroll event
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 20) {
        nav.classList.add('shadow-xl', 'bg-slate-950/90');
        nav.classList.remove('bg-slate-950/75');
    } else {
        nav.classList.remove('shadow-xl', 'bg-slate-950/90');
        nav.classList.add('bg-slate-950/75');
    }
});