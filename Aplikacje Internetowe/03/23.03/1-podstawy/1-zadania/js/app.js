//poniższej linijki nie kasuj
document.querySelector('button').innerText = "Nowy tekst na przycisku";

//swoje skrypty pisz poniżej
// Zadanie 3
const stringVar = "Hello World";
const numberVar = 42;
const booleanVar = true;
const nullVar = null;
let undefinedVar;
const objectVar = { name: "John", age: 30 };
const arrayVar = [1, 2, 3];
const functionVar = function() { console.log("I'm a function"); };

console.log("Zadanie 3 - Typy zmiennych:");
console.log("stringVar:", stringVar, typeof stringVar);
console.log("numberVar:", numberVar, typeof numberVar);
console.log("booleanVar:", booleanVar, typeof booleanVar);
console.log("nullVar:", nullVar, typeof nullVar);
console.log("undefinedVar:", undefinedVar, typeof undefinedVar);
console.log("objectVar:", objectVar, typeof objectVar);
console.log("arrayVar:", arrayVar, typeof arrayVar);
console.log("functionVar:", functionVar, typeof functionVar);

// Zadanie 4
const number1 = "23";
const number2 = "34";

console.log("\nZadanie 4:");
console.log("Typ number1:", typeof number1);
console.log("Typ number2:", typeof number2);

// Konwersja na liczby i dodanie
const sum = Number(number1) + Number(number2);
console.log("Suma:", sum);

// Zadanie 5
console.log("\nZadanie 5:");
if (typeof nr === 'undefined') {
    var nr = 100; // używamy var, aby zmienna była dostępna globalnie
    console.log("Zmienna nr została utworzona. Typ:", typeof nr);
} else {
    console.log("Zmienna nr już istnieje. Typ:", typeof nr);
}

// Testowanie przycisku (Zad 2)
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('testButton');
    if (button) {
        button.addEventListener('click', function() {
            console.log("Przycisk działa! Skrypt w head poprawnie obsługuje DOM.");
        });
    }
});

const age = prompt("Ile masz lat?");
if (age < 18) {
    alert("Masz za mało lat");
} else {
    alert("Ok, możesz wejść");
}