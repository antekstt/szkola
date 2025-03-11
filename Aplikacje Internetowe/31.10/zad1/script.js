function validateForm() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;
    const birthdate = new Date(document.getElementById('birthdateInput').value);
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    let errors = [];

    // Email validation
    if (!isValidEmail(email)) {
        errors.push('Proszę podać poprawny adres email.');
    }

    // Password validation
    if (password.length < 8) {
        errors.push('Hasło musi mieć co najmniej 8 znaków.');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Hasło musi zawierać co najmniej jedną wielką literę.');
    }

    // Confirm password
    if (password !== confirmPassword) {
        errors.push('Hasła nie są takie same.');
    }

    // Age validation
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    if (age < 18) {
        errors.push('Musisz mieć co najmniej 18 lat, aby się zarejestrować.');
    }

    // Display errors or success message
    if (errors.length > 0) {
        errorMessage.innerHTML = errors.join('<br>');
        successMessage.innerHTML = '';
    } else {
        errorMessage.innerHTML = '';
        successMessage.innerHTML = 'Rejestracja zakończona sukcesem!';
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}