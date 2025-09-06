document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    });

    // 2. Typewriter Effect
    const typewriterElement = document.getElementById('name-typewriter');
    const name = "Rayyan"; // Updated your name here
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
    
    // 3. Interactive Card Border Effect (No longer used in current design, but harmless)
    const cards = document.querySelectorAll('.project-card, .osu-profile-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

});