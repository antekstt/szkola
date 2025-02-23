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
