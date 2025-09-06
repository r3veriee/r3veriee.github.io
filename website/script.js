document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('name-typewriter');
    const name = "Your Name"; // Change this to your name
    let index = 0;

    function type() {
        if (index < name.length) {
            typewriterElement.textContent += name.charAt(index);
            index++;
            setTimeout(type, 150); // Speed of typing
        }
    }

    type();
});