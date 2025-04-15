//1
const zad1Text = "JavaScript jest super!";
console.log("Zadanie 1:");
console.log(zad1Text);
console.log("Długość zdania:", zad1Text.length);
console.log("--------------------");

//2
const zad2Text = "Koty i psy to fajne zwierzaki";
const wordCount = zad2Text.split(" ").length;
console.log("Zadanie 2:");
console.log("Liczba wyrazów:", wordCount);
console.log("--------------------");

//3
let zad3Name = "piotrek";
zad3Name = zad3Name.charAt(0).toUpperCase() + zad3Name.slice(1);
console.log("Zadanie 3:");
console.log("Poprawione imię:", zad3Name);
console.log("--------------------");

//4
const zad4Text = "Ala ma kota";
console.log("Zadanie 4:");
if (zad4Text.includes("kot")) {
  console.log("Zdanie zawiera słowo kot");
} else {
  console.log("Zdanie nie zawiera słowa kot");
}
console.log("--------------------");

//5
const zad5Text = "Uczę się stringów w C++";
console.log("Zadanie 5:");

//Sposob 1 (z replace)
const zad5NewText1 = zad5Text.replace("C++", "Javascript");
console.log("Sposób 1 (replace):", zad5NewText1);

// Sposob 2 (bez replace)
const index = zad5Text.indexOf("C++");
const zad5NewText2 = zad5Text.substring(0, index) + "Javascript";
console.log("Sposób 2 (bez replace):", zad5NewText2);
console.log("--------------------");

// 6
let zad6Url = "http://mojastrona.pl";
const zad6TextToAdd = "Uczę się stringów w Javascript";
const encodedText = encodeURIComponent(zad6TextToAdd);
zad6Url += `?text=${encodedText}`;
console.log("Zadanie 6:");
console.log(zad6Url);
console.log("--------------------");

//7
const zad7Text = "Ala ma kota";
console.log("Zadanie 7:");

//Male litery
console.log("Małe litery:", zad7Text.toLowerCase());

// Duze litery
console.log("Duże litery:", zad7Text.toUpperCase());

// Naprzemiennie
let alternateText = "";
for (let i = 0; i < zad7Text.length; i++) {
  alternateText += i % 2 === 0 
    ? zad7Text[i].toUpperCase() 
    : zad7Text[i].toLowerCase();
}
console.log("Naprzemiennie:", alternateText);

// Zamiana Ala na Ola
console.log("Zamiana Ala na Ola:", zad7Text.replace("Ala", "Ola"));
console.log("--------------------");

// Zadanie 8
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const uniqueID = generateRandomString(20);
console.log("Zadanie 8:");
console.log("Unikalne ID:", uniqueID);