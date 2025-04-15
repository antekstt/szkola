//1
console.log("Zadanie 1:");
let stars = '';
for (let i = 0; i < 6; i++) {
  stars += '*';
}
console.log(stars);
console.log("--------------------");

//2
console.log("Zadanie 2:");
let numbers = '';
for (let i = 1; i <= 10; i++) {
  numbers += i;
}
console.log(numbers);
console.log("--------------------");

//3
console.log("Zadanie 3:");
const frameText = "To jest jakiś tekst";
const frameLength = frameText.length + 4; // +4 dla spacji i ramki

let topBorder = '╔';
for (let i = 0; i < frameLength; i++) {
  topBorder += '═';
}
topBorder += '╗';

let bottomBorder = '╚';
for (let i = 0; i < frameLength; i++) {
  bottomBorder += '═';
}
bottomBorder += '╝';

console.log(topBorder);
console.log(`║  ${frameText}  ║`);
console.log(bottomBorder);
console.log("--------------------");

//4
console.log("Zadanie 4:");
let countAbove5 = 0;
let randomNumbers = [];

console.log("Wylosowane liczby:");
for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * 10) + 1;
  randomNumbers.push(num);
  if (num > 5) {
    countAbove5++;
  }
}
console.log(randomNumbers.join(', '));

if (countAbove5 >= 5) {
  console.log("udało się");
} else {
  console.log("niestety nie tym razem");
}
console.log("--------------------");

//5
console.log("Zadanie 5:");
const n = 5; // Możesz zmienić tę wartość
const txt = "maslo";
let result = '';

if (n > 0) {
  for (let i = 0; i < n; i++) {
    result += txt;
  }
  console.log(result);
} else {
  console.log("Liczba musi być dodatnia");
}
console.log("--------------------");

//7
console.log("Zadanie 7:");
const n7 = 10;
let pattern = '';

for (let i = 1; i <= n7; i++) {
  pattern += i;
  for (let j = 0; j < i; j++) {
    pattern += '-';
  }
}

console.log(pattern);
console.log("--------------------");