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

    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');

    formContainer.style.display = 'none'; // Hide the form
    successMessage.style.display = 'block'; // Show the success message
});

// Slider functionality for the main slider in #start
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
        slideIndex = 0; // Wróć do pierwszego slajdu po ostatnim
    }
    slider.style.transition = 'transform 0.5s ease-in-out';
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);

window.addEventListener('load', () => {
    showSlide(slideIndex);
});

window.addEventListener('resize', () => {
    showSlide(slideIndex);
});

// Slider functionality for the gallery sliders
function scrollGallerySlider(button, direction) {
    const sliderWrapper = button.closest('.gallery-slider-wrapper');
    if (!sliderWrapper) {
        return;
    }

    const slider = sliderWrapper.querySelector('.gallery-slider');
    if (!slider) {
        return;
    }

    const slides = slider.querySelectorAll('.gallery-slide');
    if (slides.length === 0) {
        return;
    }

    const slideWidth = slides[0].offsetWidth;
    const currentTransform = slider.style.transform ? parseInt(slider.style.transform.split('(')[1]) : 0;

    let newTransform = currentTransform + direction * slideWidth;

    if (newTransform > 0) {
        newTransform = -(slideWidth * (slides.length - 1));
    } else if (newTransform < -(slideWidth * (slides.length - 1))) {
        newTransform = 0;
    }

    slider.style.transform = `translateX(${newTransform}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
}

// Toggle menu visibility on smaller screens
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});