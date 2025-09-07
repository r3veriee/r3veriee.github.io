document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    });

    // 2. Typewriter Effect
    const typewriterElement = document.getElementById('name-typewriter');
    const name = "Rayyan";
    let index = 0;

    function type() {
        if (index < name.length) {
            typewriterElement.textContent += name.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    
    if (typewriterElement) {
        type();
    }
    
    // 3. Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

});