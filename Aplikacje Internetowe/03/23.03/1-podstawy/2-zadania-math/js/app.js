// Zadanie 1
const random1 = Math.floor(Math.random() * 11) + 10;
const random2 = Math.floor(Math.random() * 11) + 10;
const random3 = Math.floor(Math.random() * 11) + 10;

console.log('Zadanie 1:');
console.log('Wylosowane liczby:', random1, random2, random3);
console.log('Największa liczba:', Math.max(random1, random2, random3));

// Zadanie 3
console.log('\nZadanie 3:');
console.log('Standardowe logowanie');
console.warn('To jest ostrzeżenie!');
console.error('To jest błąd!');
console.table(['apple', 'banana', 'orange']);
console.group('Grupa testowa');
console.log('Element 1 w grupie');
console.log('Element 2 w grupie');
console.groupEnd();

// Zadanie 4
console.log('\nZadanie 4:');
console.log('Math.sin(1):', Math.sin(1));
console.log('Math.cos(1):', Math.cos(1));
console.log('Math.tan(1):', Math.tan(1));
console.log('Math.PI:', Math.PI);

console.log('Zaokrąglone wartości:');
console.log('sin(1):', Math.round(Math.sin(1) * 100) / 100);
console.log('cos(1):', Math.round(Math.cos(1) * 100) / 100);
console.log('tan(1):', Math.round(Math.tan(1) * 100) / 100);
console.log('PI:', Math.round(Math.PI * 100) / 100);

// Zadanie 5
console.log('\nZadanie 5:');
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log('Wylosowana liczba:', randomNumber);

const userGuess = prompt('Zgadnij liczbę od 1 do 10:');
if (parseInt(userGuess) === randomNumber) {
    console.log('trafiłeś!');
} else {
    console.log('niestety nie tym razem');
}