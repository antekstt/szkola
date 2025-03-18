// Część 1 - Podstawy

// Deklaracja zmiennych
const name = "Antoni";
const age = 15;
const favoriteColor = "szary";

// Wyświetlenie powitania z imieniem
alert(`Witaj, ${name}!`);

// Komunikat w konsoli z wiekiem
console.log(`Mój wiek to ${age} lat.`);

// Funkcja zwracająca spersonalizowane powitanie
function greetUser(userName) {
    return `Cześć, ${userName}! Miło Cię poznać!`;
}

// Wywołanie funkcji i wyświetlenie wyniku w konsoli
console.log(greetUser(name));

// Część 2 - Operacje i Pętle

// Tworzenie tablicy z liczbami
const numbers = [1, 2, 3, 4, 5];

// Wyświetlenie liczb w konsoli za pomocą pętli for
for (let i = 0; i < numbers.length; i++) {
    console.log(`Liczba: ${numbers[i]}`);
}

// Użycie metody map() do stworzenia nowej tablicy
const doubledNumbers = numbers.map(num => num * 2);
console.log("Liczby pomnożone przez 2:", doubledNumbers);

// Funkcja strzałkowa obliczająca kwadrat liczby
const square = (num) => num * num;
console.log(`Kwadrat liczby 4 to: ${square(4)}`);

// Sprawdzenie, czy użytkownik jest pełnoletni
if (age >= 18) {
    console.log("Jesteś pełnoletni.");
} else {
    console.log("Nie jesteś pełnoletni.");
}

// Obsługa błędów za pomocą try...catch
try {
    const undefinedVariable = someUndefinedVariable;
} catch (error) {
    console.error("Wystąpił błąd:", error.message);
}

// Część 3 - Interakcja

// Dodanie obsługi przycisku
const button = document.createElement("button");
button.textContent = "Kliknij mnie";
document.body.appendChild(button);

button.addEventListener("click", () => {
    alert("Przycisk został kliknięty!");
});

// Dodanie pola tekstowego i przycisku do spersonalizowanego powitania
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Wpisz swoje imię";
document.body.appendChild(input);

const greetButton = document.createElement("button");
greetButton.textContent = "Przywitaj się";
document.body.appendChild(greetButton);

greetButton.addEventListener("click", () => {
    const userName = input.value;
    if (userName) {
        alert(greetUser(userName));
    } else {
        alert("Proszę wpisać swoje imię!");
    }
});