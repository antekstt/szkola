// Część 1 - Podstawy
const name = "Antoni";
const age = 15;
const favoriteColor = "szary";

alert(`Witaj, ${name}!`);

console.log(`Mój wiek to ${age} lat.`);

function greetUser(userName) {
    return `Cześć, ${userName}! Miło Cię poznać!`;
}

console.log(greetUser(name));

// Część 2 - Operacje i Pętle
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Liczba: ${numbers[i]}`);
}

const doubledNumbers = numbers.map(num => num * 2);
console.log("Liczby pomnożone przez 2:", doubledNumbers);

const square = (num) => num * num;
console.log(`Kwadrat liczby 4 to: ${square(4)}`);

if (age >= 18) {
    console.log("Jesteś pełnoletni.");
} else {
    console.log("Nie jesteś pełnoletni.");
}

try {
    const undefinedVariable = someUndefinedVariable; // Ta zmienna nie istnieje
} catch (error) {
    console.error("Wystąpił błąd:", error.message);
}

// Część 3 - Interakcja

const alertButton = document.getElementById("alertButton");
const greetButton = document.getElementById("greetButton");
const nameInput = document.getElementById("nameInput");

alertButton.addEventListener("click", () => {
    alert("Przycisk został kliknięty!");
});

greetButton.addEventListener("click", () => {
    const userName = nameInput.value;
    if (userName) {
        alert(greetUser(userName));
    } else {
        alert("Proszę wpisać swoje imię!");
    }
});