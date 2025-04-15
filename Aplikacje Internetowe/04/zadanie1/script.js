const imie = "Antoni";
const wiek = 15;
const kolor = "czerwony";

alert(`Cześć, jestem ${imie}!`);

console.log(`Mój wiek to: ${wiek} lat`);

function greetUser(imie) {
    return `Witaj, ${imie}! Miło Cię poznać!`;
}

const liczby = [1, 2, 3, 4, 5];

console.log("Tablica liczb:");
for (const liczba of liczby) {
    console.log(liczba);
}

const pomnozone = liczby.map(num => num * 2);
console.log("Liczby pomnożone przez 2:", pomnozone);

const squareNumber = num => num * num;
console.log("Kwadrat liczby 4:", squareNumber(4));

if (wiek >= 18) {
    console.log("Jestem pełnoletni.");
} else {
    console.log("Nie jestem pełnoletni.");
}

try {
    const undefinedVariable = someUndefinedVariable;
} catch (error) {
    console.error("Wystąpił błąd:", error.message);
}

document.getElementById('showMessageBtn').addEventListener('click', () => {
    alert('Kliknąłeś przycisk!');
});

document.getElementById('greetBtn').addEventListener('click', () => {
    const imie = document.getElementById('nameInput').value;
    if (imie.trim() === '') {
        alert('Proszę wpisać swoje imię!');
    } else {
        alert(greetUser(imie));
    }
});