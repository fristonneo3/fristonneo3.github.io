// Highlight the active link in the navigation bar
const navLinks = document.querySelectorAll('nav ul li a');
const toggleMenu = document.getElementById('toggleMenu'); // Ensure we grab the correct element
const navList = document.getElementById('nav-list');



navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Toggle the navigation menu on mobile
toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Only show mobile menu toggle if screen size is small
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        toggleMenu.style.display = 'block';
    } else {
        toggleMenu.style.display = 'none';
        navList.classList.remove('open');
    }
});

if (window.innerWidth <= 768) {
    toggleMenu.style.display = 'block';
}
