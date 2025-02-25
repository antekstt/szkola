document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function flipCard(card) {
    card.classList.toggle('flipped');
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // You might want to add code here to actually send the form data to a server

    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');

    formContainer.style.display = 'none'; // Hide the form
    successMessage.style.display = 'block'; // Show the success message
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth; // Get the width of a single slide
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000); // Changed to 3 seconds for smoother transition

// Initial slide display
window.addEventListener('load', () => {
    showSlide(slideIndex);
});

window.addEventListener('resize', () => {
    // Recalculate slide width on window resize
    showSlide(slideIndex);
});