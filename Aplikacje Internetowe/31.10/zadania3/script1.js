	const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const birthDate = new Date(document.getElementById('birthDate').value);
        const currentDate = new Date();

        let errors = [];

        // Walidacja emaila
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("Nieprawidłowy adres email.");
        }

        // Walidacja hasła
        if (password.length < 8 || !/[A-Z]/.test(password)) {
            errors.push("Hasło musi mieć co najmniej 8 znaków i zawierać co najmniej jedną wielką literę.");
        }

        if (password !== confirmPassword) {
            errors.push("Hasła muszą być takie same.");
        }

        // Walidacja daty urodzenia
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            errors.push("Musisz mieć co najmniej 18 lat.");
        }

        // Wyświetlanie błędów
        if (errors.length > 0) {
            message.textContent = errors.join('\n');
            message.style.color = 'red';
        } else {
            message.textContent = "Rejestracja zakończona pomyślnie!";
            message.style.color = 'green';
        }
    });