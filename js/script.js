// Highlight the active link in the navigation bar
const navLinks = document.querySelectorAll('nav ul li a');
const toggleMenu = document.getElementById('toggleMenu'); // Ensure we grab the correct element
const navList = document.getElementById('nav-list');
const carItems = document.querySelectorAll('.car-item');
const whyItems = document.querySelectorAll('.why-item');


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

// Function to check if an element is in the viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Function to add 'show' class when the element is in the viewport
const showCarItems = () => {
    carItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
};

const showWhyItems = () => {
    whyItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
};
showWhyItems(); // Call it once on load

// Listen for scroll events to trigger the animation
window.addEventListener('scroll', showCarItems);

// Trigger the function on page load to check if any elements are already in view
showCarItems();
