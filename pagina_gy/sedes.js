document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', function () {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    });
});
