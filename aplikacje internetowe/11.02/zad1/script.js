// Możemy wypisywać teksty, liczby itp.
console.log("Witaj świecie");

// Możemy wypisać obiekt i go zbadać
console.log(window);

// Po przecinku możemy wypisać kilka elementów na raz
console.log("Witaj", window, 100);

// Bardzo często będziemy chcieli wypisać element, by go zbadać.
const someButton = document.querySelector("button"); // Dodane dla poprawności
console.dir(someButton);

// Pokaże w konsoli ładnie sformatowaną tabelę
console.table([1, 2, 3, 4, 5]);

// Grupowanie wielu tekstów w jedną grupę
console.group("Nazwa grupy");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd();

console.groupCollapsed("Nazwa grupy"); // Grupa domyślnie zwinięta
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd();

// Test szybkości działania kodu
console.time("test 1");
for (let i = 0; i < 10000; i++) {
    if (i % 1000 === 0) console.log(i);
}
console.timeEnd("test 1");

// Debugger - zatrzymuje działanie skryptu
function test() {
    let i = 0;
    debugger;
}
test();

const myArr = [];
console.log("Moja tablica:", myArr);
console.log({ myArr });

let zm = "Ania ma kota";
console.log(zm);
console.log({ zm });

console.log("Jestem zwykłym tekstem w konsoli");
console.log("%cJestem zwykłym tekstem w konsoli", "font-weight: bold; color: rebeccapurple; font-size: 30px; background: gold;");
console.log("Kot %s lubi się bawić", "Rysiek");
console.log("Cena tego produktu to %dzł", 120);
console.log("%cCena tego produktu to %dzł", "color: red; font-weight: bold", 120);

// Przykład komentarza wieloliniowego
/*
To jest komentarz składający się z wielu linii.
*/

// To jest przykład komentarza 1-liniowego
console.log('To jest mój pierwszy skrypt');

for (let i = 0; i < 100; i++) {
    console.log("Lubię koty i psy");
}

// TODO: Tutaj muszę zaimplementować funkcjonalność...
if (true) {
    // FIXME: Poprawić funkcjonalność
}

console.log(window);
console.log(window.alert);
console.log(window.confirm);
console.log(window.prompt);

alert("Treść komunikatu");

if (confirm("Czy jesteś pewien, że chcesz kontynuować?")) {
    alert("No to kontynuuj...");
} else {
    alert("Przykro mi, że nie chcesz kontynuować...");
}

const name = prompt("Podaj swoje imię:");
if (name) {
    alert("Witaj " + name);
} else {
    alert("Anulowałeś akcję, a okienko zwróciło " + name);
}

let txt = "Ala ma kota";
let nr = 20;
let url = "kontakt.html";

console.log(txt);
console.log(nr);
console.log(url);

txt = "Przykładowy tekst";
txt = "Inny tekst";

// Poprawione przypisanie do stałej
nr = 200;
console.log(nr);

const array = [1, 2, 3, 4, 5]; // Zadeklarowana tablica
for (let el of array) {
    console.log(el);
}

console.log(6 + 5 + 1);
console.log(4 + 5 + 2);
console.log(1 * 5 + 5 - 2);
console.log(8 + (5 * 10) + 5 + 9 + (5 * 10) + 5);

const min = 5;
const max = 15;
const random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);

// Pobranie elementu przycisku
const btn = document.querySelector(".button");
if (btn) {
    btn.classList.add("btn-primary");
    btn.setAttribute("title", "Kliknij mnie");
    btn.innerText = "Kliknij mnie!";
}

const myAge = 10;
const my_age = 10;

let key = "21389123718398";
key = 20;

const tab = [1, 2, 3];
tab.push(4, 5, 6);
console.log(tab);

let x = 20; // Zmienna globalna
{
    let a = 30; // Zmienna lokalna
    console.log(a);
}

// `a` nie istnieje poza blokiem - usunięto błędny `console.log(a);`

let c = "Ola";
console.log(c);

var d = 20; // Zmienna globalna

function testFunc() {
    let e = 30; // Zmienna lokalna
    console.log(e);
}
testFunc();

// `e` nie istnieje poza funkcją - usunięto błędny `console.log(e);`

if (true) {
    var myVar = 20;
}
console.log(myVar);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// `i` poza pętlą `let` nie istnieje - usunięto błędny `console.log(i);`

let text, age;
age = 20;
text = "Ala ma " + age + " lat";

let a = 20;
let b = 30;
console.log(a);
console.log(b);

// `window.a` i `window.b` nie działają w trybie `strict` - usunięto

x = 5;
console.log(x + 2);
console.log(x - 1);
console.log(x * 3);
console.log(x / 2);
console.log(x % 2);
console.log(9 % 3);
console.log(x ** 2);
console.log(3 ** 3);

let y = 24;
if (y % 2 === 0) {
    console.log(`Liczba ${y} jest parzysta`);
}

{
    let x = 5;
    x += 3;
    console.log(x);
}
{
    let x = 5;
    x -= 3;
    console.log(x);
}
{
    let x = 5;
    x *= 3;
    console.log(x);
}
{
    let x = 12;
    x /= 3;
    console.log(x);
}
{
    let x = 11;
    x %= 3;
    console.log(x);
}

x = 5;
x++;
console.log(x);

y = 5;
y--;

x = 5;
console.log(x++);
console.log(x);

y = 5;
if (y-- < 5) {
    console.log(y);
}

x = 5;
console.log(++x);
console.log(x);

y = 5;
if (--y < 5) {
    console.log(y);
}

y = 5;
y++;

if (y > 5) {
    console.log(y);
}

{
    let a = 10;
    console.log(a == 10);
    console.log(a == "10");
}
{
    let a = 10;
    console.log(a !== 10);
    console.log(a !== "10");
}
