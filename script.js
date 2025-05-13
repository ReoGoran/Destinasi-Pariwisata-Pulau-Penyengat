// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        navButtons.classList.toggle('show');
    });
});
