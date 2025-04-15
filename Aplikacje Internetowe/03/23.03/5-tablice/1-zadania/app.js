// 1
const tab = ["kot", "pies", "samochód", "dom", "książka"];
console.log("1:");
console.log(tab);
console.log("Długość:", tab.length);
console.log("Pierwszy element:", tab[0]);
console.log("Ostatni element:", tab[tab.length - 1]);
console.log("--------------------");

// 2
console.log("2:");
console.log("Pętla for:");
for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]} - ${tab[i].length}`);
}

console.log("\nPętla for of:");
for (const item of tab) {
  console.log(`${item} - ${item.length}`);
}

console.log("\nMetoda forEach:");
tab.forEach(item => console.log(`${item} - ${item.length}`));
console.log("--------------------");

// 3
tab.push("nowy_koniec");
tab.unshift("nowy_początek");
console.log("3:");
console.log("Długość po dodaniu:", tab.length);
console.table(tab);
console.log("--------------------");

// 4
if (tab.length >= 3) {
  tab.splice(2, 1);
}
console.log("4:");
console.log("Po usunięciu:", tab);
console.log("--------------------");

// 5
const randomNumbers = Array.from({length: 10}, () => Math.floor(Math.random() * 11) + 10);
let min = randomNumbers[0], max = randomNumbers[0];
for (const num of randomNumbers) {
  if (num < min) min = num;
  if (num > max) max = num;
}
console.log("5:");
console.log("Tablica:", randomNumbers);
console.log("Min:", min, "Max:", max);
console.log("Lepszy sposób - Math.min/max:", 
  Math.min(...randomNumbers), Math.max(...randomNumbers));
console.log("--------------------");

// 6
const names = ["Marcin", "Ania", "Monika", "Piotrek", "Beata"];
console.log("6:");
console.log("Posortowane:", names.sort());
console.log("--------------------");

// 6 (drugie)
const tabLengths = [
  "xloremipsumdolor",
  "kloremipsum",
  "aloremipsumdol",
  "blor",
  "cloremipsu",
  "gloremip",
];
tabLengths.sort((a, b) => a.length - b.length);
const totalLetters = tabLengths.reduce((sum, item) => sum + item.length, 0);
console.log("6 (drugie):");
console.log("Posortowane po długości:", tabLengths);
console.log("Suma liter:", totalLetters);
console.log("--------------------");

// 7
const files = [
  "zdjecie.jpg", "wakacje.jpg", "kolekcja.filmow.jpg", "mem.gif",
  "wpis.na.blog.txt", "auto.png", "archiwum.zip", "dokument.txt",
  "paczka.zip", "kwiatek.png"
];
files.sort((a, b) => {
  const extA = a.split('.').pop();
  const extB = b.split('.').pop();
  return extA.localeCompare(extB);
});
console.log("7:");
console.log("Posortowane po rozszerzeniach:");
console.table(files);
console.log("--------------------");

// 8
const tabUsers = [
  {name: "Marcin", age: 14},
  {name: "Piotr", age: 18},
  {name: "Agnieszka", age: 13},
  {name: "Weronika", age: 20}
];
console.log("8:");
console.log("Pełnoletni (pętla for):");
for (const user of tabUsers) {
  if (user.age >= 18) console.log(user.name);
}

console.log("\nPełnoletni (filter + forEach):");
tabUsers
  .filter(user => user.age >= 18)
  .forEach(user => console.log(user.name));
console.log("--------------------");

// 9
function checkPalindrom(txt) {
  const cleaned = txt.toLowerCase().replace(/[^a-ząćęłńóśźż]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log("9:");
console.log("Kajak:", checkPalindrom("Kajak"));
console.log("Ania:", checkPalindrom("Ania"));
console.log("--------------------");

// 10
const txt = "Turlał goryl po Urlach kolorowe korale";
const lettersCount = txt.replace(/\s/g, '').length;
const wordsCount = txt.split(/\s+/).length;
console.log("10:");
console.log(`Zdanie ma ${lettersCount} liter i ${wordsCount} wyrazów.`);
console.log("--------------------");

// 11
const nestedTab = [1,2,3, [4,5,6, [7, 8]], 9, 10];
function flattenAndSum(arr) {
  return arr.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + flattenAndSum(item);
    }
    return sum + item;
  }, 0);
}
const sum = flattenAndSum(nestedTab);
const avg = sum / nestedTab.flat(Infinity).length;
console.log("11:");
console.log("Suma:", sum);
console.log("Średnia:", avg);
console.log("--------------------");

// 12
function monthName(nr) {
  const months = [
    "styczeń", "luty", "marzec", "kwiecień",
    "maj", "czerwiec", "lipiec", "sierpień",
    "wrzesień", "październik", "listopad", "grudzień"
  ];
  return nr >= 1 && nr <= 12 ? months[nr - 1] : "Nieprawidłowy numer miesiąca";
}
console.log("12:");
console.log("10:", monthName(10));
console.log("13:", monthName(13));