const tab = []; // pusta tablica

const tab2 = [1, 2, 3, 4];

const tab3 = ["Marcin", "Ania", "Agnieszka"];
const a = "ALA";
const b = 234;
const c = "PIES";

const tab4 = [a, b, c, "KOT", {}]; // tablica z 5 elementami. Mogą to być oddzielne zmienne, ale też wartości wpisane bezpośrednio w tablicy
const tab5 = new Array(10);
console.log(tab5); // [ <10 empty items> ]

const tab6 = new Array("Ala", "Bala", "Cala"); // gdy podamy więcej wartości, staną się one elementami tablicy
console.log(tab6); // ["Ala", "Bala", "Cala"]

const tab7 = ["Ala", "ma", "rudego", "kota"];

console.log(tab7[0]); // "Ala"
console.log(tab7[1]); // "ma"
console.log(tab7[2]); // "rudego"
console.log(tab7[3]); // "kota"
console.log(tab7[tab7.length - 1]); // ostatni element - "kota"

const tab8 = ["Ala", "ma", "rudego", "kota"];
console.log(tab8.at(0)); // "Ala"
console.log(tab8.at(1)); // "ma"
console.log(tab8.at(2)); // "rudego"
console.log(tab8.at(-1)); // "kota"
console.log(tab8.at(-2)); // "rudego"

const tab9 = ["Marcin", "Ania", "Agnieszka"];
console.log(tab9.length); // 3
console.log(tab9[tab9.length - 1]); // "Agnieszka"

for (const element of tab9) {
    console.log(element);
}

tab9.push("Piotrek");
console.log(tab9); // ["Marcin", "Ania", "Agnieszka", "Piotrek"]

tab9.push("Y", "Z");
console.log(tab9); // ["Marcin", "Ania", "Agnieszka", "Piotrek", "Y", "Z"]

tab9[3] = "Piotrek";
// lub
tab9[tab9.length] = "Piotrek";

console.log(tab9); // ["Marcin", "Ania", "Agnieszka", "Piotrek"]

const tab10 = ["ala", "bala"];
const ob = { name: "Piotr" };

console.log(Array.isArray(tab10)); // true
console.log(Array.isArray(ob)); // false

console.log(typeof tab10); // "object"
console.log(typeof ob); // "object"

tab9.push("Grzegorz");
console.log(tab9); // ["Marcin", "Ania", "Agnieszka", "Grzegorz"]
tab9.push("Piotr", "Karol");
console.log(tab9); // ["Marcin", "Ania", "Agnieszka", "Grzegorz", "Piotr", "Karol"]

const last = tab9.pop();
console.log(last); // "Karol"
console.log(tab9); // ["Marcin", "Ania", "Agnieszka", "Grzegorz", "Piotr"]

tab9.unshift("Bartek");
console.log(tab9); // ["Bartek", "Marcin", "Ania", "Agnieszka", "Grzegorz", "Piotr"]

tab9.unshift("Piotrek", "Paweł");
console.log(tab9); // ["Piotrek", "Paweł", "Bartek", "Marcin", "Ania", "Agnieszka", "Grzegorz", "Piotr"]

const first = tab9.shift();
console.log(tab9); // ["Paweł", "Bartek", "Marcin", "Ania", "Agnieszka", "Grzegorz", "Piotr"]
console.log(first); // "Piotrek"

const ourTable = ["Marcin", "Ania", "Agnieszka"];
console.log(ourTable.join()); // "Marcin,Ania,Agnieszka"
console.log(ourTable.join(" - ")); // "Marcin - Ania - Agnieszka"
console.log(ourTable.join(" <--> ")); // "Marcin <--> Ania <--> Agnieszka"

const cars = ["Mercedes", "Audi", "BMW"];
console.log(cars.join("").length); // 15

const txt = "kartofel";
const tab11 = [...txt];
console.log(tab11); // ["k", "a", "r", "t", "o", "f", "e", "l"]

const txt2 = "Ala ma kota";
const tab12 = txt2.split(" ");
console.log(tab12); // ["Ala", "ma", "kota"]

const tab13 = [1, 2, 3, 4];
tab13.reverse();
console.log(tab13); // [4, 3, 2, 1]

const word = "kajak";
const tab14 = [...word];
console.log(tab14.toReversed().join("") === tab14.join("")); // true, czyli palindrom

const tab15 = ["Marcin", "Ania", "Agnieszka", "Monika"];
console.log(tab15.indexOf("Agnieszka")); // 2
console.log(tab15.indexOf("Karolina")); // -1

if (tab15.indexOf("Ania") !== -1) {
    console.log("Ania występuje w tablicy pod indexem", tab15.indexOf("Ania"));
}

const tab16 = ["Agnieszka", "Marcin", "Ania", "Agnieszka", "Monika"];
console.log(tab16.lastIndexOf("Agnieszka")); // 3

const tab17 = ["Marcin", "Ania", "Agnieszka", "Monika"];
if (tab17.includes("Ania")) {
    console.log("Ania występuje w tablicy pod indeksem", tab17.indexOf("Ania"));
}

if (!tab17.includes("Pies")) {
    console.log("Pies nie występuje w tej tablicy");
}

const ob2 = { name: "Jan" };
const things = ["ala", "bala", "cala", ob2, "data"];
console.log(things.indexOf(ob2)); // 3

const buttons = [...document.querySelectorAll(".pagination-btn")];
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const index = buttons.indexOf(btn);
        showSlide(index);
    });
});

const tab18 = ["Marcin", "Ania", "Piotrek", "Grześ"];
tab18.sort((a, b) => a.localeCompare(b));
console.log(tab18); // ["Ania", "Grześ", "Marcin", "Piotrek"]

const tab19 = [1, 2, 21, 2.1, 32, 3.1];
tab19.sort((a, b) => a - b);
console.log(tab19); // [1, 2, 2.1, 21, 3.1, 32]

const tab20 = ["Bartek", "ania", "Celina", "agnieszka"];
tab20.sort((a, b) => a.localeCompare(b));
console.log(tab20); // ["Bartek", "Celina", "agnieszka", "ania"]

function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

tab20.sort(compare);

function compareNr(a, b) {
    return a - b;
}

const tab21 = [100, 320, 10, 25, 310, 1200, 400];
const tab22 = tab21.toSorted(compareNr);
console.log(tab22); // [10, 25, 100, 310, 320, 400, 1200]

const tab23 = [
    { name: "Marcin", height: 183 },
    { name: "Ania", height: 173 },
    { name: "Agnieszka", height: 170 },
];

tab23.sort((a, b) => a.height - b.height);
console.log(tab23);

const tab24 = ["Marcin", "ania", "Bożena"];
tab24.sort((a, b) => a.localeCompare(b));
console.log(tab24); // ["ania", "Bożena", "Marcin"]

const mails = [
    "marcin@wp.pl",
    "marcin@gmail.pl",
    "marcin@onet.pl",
    "marcin@interia.pl"
];

mails.sort((a, b) => {
    const aDomain = a.substring(a.indexOf("@") + 1);
    const bDomain = b.substring(b.indexOf("@") + 1);
    return aDomain.localeCompare(bDomain);
});

console.log(mails);

const users = [
    { name: "Marcin", car: { name: "Toyota", age: 10 } },
    { name: "Marcin", car: { name: "Fiat", age: 15 } },
    { name: "Monika", car: { name: "BMW", age: 5 } },
];

users.sort((a, b) => a.car.age - b.car.age);
console.log(users);

const tab25 = ["Ala", "Basia"];
const tab26 = ["Piotr", "Marcin"];
console.log(tab25 + tab26); // "Ala,BasiaPiotr,Marcin"

const anim1 = ["Pies", "Kot"];
const anim2 = ["Słoń", "Wieloryb"];
const anim3 = ["Chomik ninja", "Świnka morderca"];

const table = anim1.concat(anim2);
console.log(table); // ["Pies", "Kot", "Słoń", "Wieloryb"]

const tableBig = anim1.concat(anim2, anim3);
console.log(tableBig); // ["Pies", "Kot", "Słoń", "Wieloryb", "Chomik ninja", "Świnka morderca"]

const table2 = [...anim1, ...anim2];
console.log(table2);

const tab27 = ["Marcin", "Ania", "Agnieszka", "Monika", "Magda"];
const tab28 = tab27.slice(0, 1);
console.log(tab28); // ["Marcin"]
console.log(tab27); // ["Marcin", "Ania", "Agnieszka", "Monika", "Magda"]

const tab29 = tab27.slice(2);
console.log(tab29); // ["Agnieszka", "Monika", "Magda"]

const tab30 = tab27.slice(0, 5);
console.log(tab30); // ["Marcin", "Ania", "Agnieszka", "Monika", "Magda"]

const tab31 = tab27.slice(-2);
console.log(tab31); // ["Monika", "Magda"]

const tab32 = tab27.slice(2, -1);
console.log(tab32); // ["Agnieszka", "Monika"]

const tab33 = ["Marcin", "Ania", "Agnieszka", "Monika"];
tab33.splice(2, 1);
console.log(tab33); // ["Marcin", "Ania", "Monika"]

tab33.splice(1, 0, "A");
console.log(tab33); // ["Marcin", "A", "Ania", "Monika"]

const tab34 = ["pies", "kot", "chomik", "aligator", "świnka", "kanarek"];
const index2 = tab34.indexOf("aligator");
if (index2 !== -1) {
    tab34.splice(index2, 1);
    console.log(tab34); // ["pies", "kot", "chomik", "świnka", "kanarek"]
}

const tab35 = new Array(20);
console.log(tab35); // [ <20 empty items> ]
tab35.fill("kot");
console.log(tab35); // ["kot", "kot", "kot", ...]

const tab36 = [];
tab36.length = 15;
console.log(tab36); // [ <15 empty items> ]
tab36.fill("kot", 2, 5);
console.log(tab36); // [ <2 empty items>, "kot", "kot", "kot", <10 empty items> ]

const tab37 = [1, 2, 3, 4, 5];
tab37.fill("pies", 2);
console.log(tab37); // [1, 2, "pies", "pies", "pies"]

const tab38 = ["Marcin", "Ania", "Agnieszka"];
for (let i = 0; i < tab38.length; i++) {
    console.log("licznik pętli: " + i); // 0, 1...
    console.log(tab38[i]); // "Marcin", "Ania"...
}

for (const el of tab38) {
    console.log(el.toUpperCase()); // "MARCIN", "ANIA"...
}

const tab39 = [
    ["a1", "a2", "a3", "a4", "a5", "a6"],
    ["b1", "b2", "b3", "b4", "b5", "b6"],
    ["c1", "c2", "c3", "c4", "c5", "c6"],
];

console.log(tab39[0]); // ["a1", "a2", "a3", "a4", "a5", "a6"]
console.log(tab39[0].length); // 6
console.log(tab39[0][1]); // "a2"
console.log(tab39[2][3]); // "c4"

const tab40 = [
    ["Marcin", 183, "red", "kot"],
    ["Ania", 173, "blue", "pies"],
    ["Agnieszka", 170, "yellow", "świnka"]
];

console.log(`
    imię:       ${tab40[0][0]}
    wzrost:     ${tab40[0][1]}
    kolor:      ${tab40[0][2]}
    zwierzak:   ${tab40[0][3]}
`);

const level = [
    [1, 1, 0, 0, 2, 2, 0, 0, 1, 1],
    [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
    [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
    [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
    [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
    [1, 1, 0, 0, 2, 2, 0, 0, 1, 1]
];

let str = "";
for (const subTab of level) {
    for (const el of subTab) {
        switch (el) {
            case 0: str += "🟩"; break;
            case 1: str += "🟫"; break;
            case 2: str += "⬛"; break;
        }
    }
    str += "\n";
}
console.log(str);

const tab41 = [
    1,
    [2, 3],
    [4, 5, [6, 7]],
    [[[8, 9], [10, 11]]]
];

console.log(tab41.flat(1));
console.log(tab41.flat(2));
console.log(tab41.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const ob3 = {
    0: "ala",
    1: "bela",
    length: 2
};

console.log(Array.from(ob3)); // ["ala", "bela"]

const buttons2 = document.querySelectorAll("button");
console.log(buttons2); // NodeList [button, button...]

const tab42 = Array.from(buttons2);
console.log(tab42); // Array [button, button...]

const ob4 = {
    0: "ala",
    1: "bela",
    length: 2
};

const tab43 = Array.from(ob4, el => el.toUpperCase());
console.log(tab43); // ["ALA", "BELA"]

const buttons3 = document.querySelectorAll("button");
const buttonsTabA = [...buttons3]; // array
const buttonsTabB = Array.from(buttons3); // array

const ob5 = { 0: "a", 1: "b", length: 2 };
console.log(Array.from(ob5)); // ["a", "b"]

{
    const tab44 = [1, 2, 3, 4];
    const newTab = tab44.toReversed(); // metoda zwraca odwróconą tablicę, ale nie zmienia oryginalnej
    console.log(tab44); // [4, 3, 2, 1]
    console.log(newTab); // [4, 3, 2, 1]
}

{
    const tab45 = [1, 2, 3, 4];
    const newTab = tab45.toReversed(); // nowa metoda zwraca odwróconą tablicę, ale nie zmienia oryginalnej
    console.log(tab45); // [1, 2, 3, 4]
    console.log(newTab); // [4, 3, 2, 1]
}

{
    const tab46 = [10, 1.4, 22, 2];
    const newTab = tab46.toSorted((a, b) => a - b);
    console.log(tab46); // [1.4, 2, 10, 22]
    console.log(newTab); // [1.4, 2, 10, 22]
}

{
    const tab47 = [10, 1.4, 22, 2];
    const newTab = tab47.toSorted((a, b) => a - b);
    console.log(tab47); // [10, 1.4, 22, 2]
    console.log(newTab); // [1.4, 2, 10, 22]
}

{
    const tab48 = [1, 2, 3, 4];
    const newTab = [...tab48].reverse();
    console.log(tab48); // [1, 2, 3, 4]
    console.log(newTab); // [4, 3, 2, 1]
}

{
    const tab49 = [10, 1.4, 22, 2];
    const newTab = [...tab49].sort((a, b) => a - b);
    console.log(tab49); // [10, 1.4, 22, 2]
    console.log(newTab); // [1.4, 2, 10, 22]
}

const tab50 = [1, 2, 3, 4, 5];
const newTab50 = tab50.with(1, 10);
console.log(newTab50); // [1, 10, 3, 4, 5]

const tab51 = ["Ala", "Beata", "Cecylia", "Dagmara", "Ela"];
const newTab51 = tab51.with(-2, "Karol");
console.log(newTab51); // ['Ala', 'Beata', 'Cecylia', 'Karol', 'Ela']

const tab52 = [1, 2, 3, 4, 5];
const newTab52 = [...tab52].splice(1, 1, 10);
console.log(newTab52); // [1, 10, 3, 4, 5]

function nazwaFunkcji(nr) {
    return nr * nr;
}

console.log(nazwaFunkcji(2)); // 4
console.log(nazwaFunkcji(3)); // 9
console.log(nazwaFunkcji(5)); // 25

alert("Ala ma kota");

const randomValue = Math.random();
console.log(randomValue);
const maxValue = Math.max(1, 2, 3);
console.log(maxValue);

const upperCaseText = "ala ma kota".toUpperCase();
console.log(upperCaseText);
const result = "kot i pies".substring(1);
console.log(result);

[1, 2, 3].push(4);
const joinedArray = [1, 2, 3].join("-");
console.log(joinedArray);

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(4, 3)); // 7

function lineText(name, pet) {
    console.log(`${name} ma ${pet}`);
}

lineText("Ola", "kota"); // "Ola ma kota"
lineText("Ala", "psa"); // "Ala ma psa"

function writeText(name, age) {
    console.log(`${name} ma kota, który ma ${age} lat`);
}

writeText("Ala", 5); // "Ala ma kota, który ma 5 lat"
writeText("Marysia"); // "Marysia ma kota, który ma undefined lat"
writeText(); // "undefined ma kota, który ma undefined lat"

function printText(txt) {
    console.log("Twój tekst to " + txt);
}

printText("kot"); // "Twój tekst to kot"
printText(); // "Twój tekst to undefined"

function print(name = "Michał", status = "najlepszy") {
    console.log(`${name} jest ${status}`);
}

print(); // "Michał jest najlepszy"
print("Karol"); // "Karol jest najlepszy"
print("Paweł", "wysoki"); // "Paweł jest wysoki"
print(undefined, "wysoki"); // "Michał jest wysoki"

function sumArguments() {
    console.log(arguments);
}

sumArguments(); // Arguments []
sumArguments(1, 2, 3, 4); // Arguments [1, 2, 3, 4]
sumArguments("ala", "ma", "kota"); // Arguments ["ala", "ma", "kota"]

function sumNumbers() {
    const sum = [...arguments].reduce((a, b) => a + b, 0);
    return sum;
}

console.log(sumNumbers(1, 2, 3, 4)); // 10

function superSum(...params) {
    console.log(params); // [1, 2, 3, 4]
    const sum = params.reduce((a, b) => a + b, 0);
    return sum;
}

console.log(superSum(1, 2, 3, 4)); // 10

function calculate(number1, number2) {
    return number1 + number2;
}

console.log(calculate(10, 4)); // 14

function randomBetween(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.body.innerText = randomBetween(1, 100);

console.log("kot".repeat(randomBetween(1, 6)));

console.log(randomBetween(1, 6) + randomBetween(1, 10));

for (let i = 0; i < 10; i++) {
    randomBetween(1, 100);
}

if (randomBetween(1, 10)) {
    // ...
}

function add(a, b) {
    return a + b;
}

function getStatus(number) {
    if (number < 20) return "bad";
    if (number < 30) return "medium";
    return "good";
}

console.log(getStatus(10)); // "bad"
console.log(getStatus(25)); // "medium"

function fixName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const result2 = fixName("piotr") + " " + fixName("kowalski");
console.log(result2); // "Piotr Kowalski"

function returnArray(size) {
    return new Array(size).fill(0).map((el, key) => key);
}

const result3 = returnArray(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(result3[0]); // 0

function returnObject() {
    return {
        first: "ala",
        second: "bala",
        third: "cala"
    };
}

console.log(returnObject().first); // "ala"

function printTextNew() {
    // ...
}

printTextNew();

const printText2 = function() {
    // ...
};

printText2();

myFunction(); // Tutaj jest ok

function myFunction() {
    console.log("...");
}

document.addEventListener("click", function() {
    console.log("klik");
});

[1, 2, 3].forEach(function(el) {
    console.log(el);
});

[1, 2, 3].sort(function(a, b) {
    return a - b;
});

const myFn = function() {
    // Function implementation here
    console.log("Function executed");
};

[3, 1, 2].sort(function(a, b) {
    return a - b;
});

const myFn2 = () => {
};

[3, 1, 2].sort((a, b) => {
    return a - b;
});

const myF2 = function(a) {
    console.log(a * a);
};

const myF3 = a => console.log(a * a);

const myF4 = function(a) {
    return "Wynik to: " + a * a;
};

const myF5 = a => "Wynik to: " + a * a;

[3, 1, 2].sort((a, b) => a - b);

const myF6 = function(a, b) {
    const result = a * b;
    console.log("Wynik mnożenia to", result);
    return result;
};

const myF7 = (a, b) => {
    const result = a * b;
    console.log(`Multiplication result is ${result}`);
    return result;
};

const getObj = function(name) {
    return { team: name, score: 0 };
};

const getObj2 = name => ({ team: name, score: 0 });

const text2 = "Moja mała świnka";
console.log(text2);

console.log(window);

const a2 = 10;
const b2 = 20;
console.log("a: ", a2, "b: ", b2);

const obj2 = { name: "test" };
console.log("Wynik:", obj2); // "Wynik:", {name: "test"}

console.log();
console.dir();
console.table();

const ob6 = { key: "value" };
const ob7 = { key2: "value2" };
debugger;

const ob8 = { ...ob6, ...ob7 };
debugger;

const users2 = [
    { name: "Marcin", points: 51 },
    { name: "Weronika", points: 87 },
    { name: "Piotr", points: 65 },
    { name: "Monika", points: 46 },
    { name: "Anna", points: 98 },
];

users2.forEach(user => {
    console.log(user.name, user.points);
});

let x = "Jola";

{
    let a = "Ala";
    console.log(a); // "Ala"
    console.log(x); // "Jola"
}

{
    let a = "Ola";
    console.log(a); // "Ola"
    console.log(x); // "Jola"
}

// console.log(a); // ReferenceError: a is not defined
console.log(x); // "Jola"

let x2 = "Jola";

function fn1() {
    let a = "Ala";
    console.log(a); // "Ala"
    console.log(x2); // "Jola"
}

function fn2() {
    let a = "Ola";
    console.log(a); // "Ola"
    console.log(x2); // "Jola"
}

// console.log(a); // ReferenceError: a is not defined
console.log(x2); // "Jola"

let x3 = 1;

function show() {
    var x3 = 2;
    console.log(x3); // 2
}

show();
console.log(x3); // 1

let x4 = 1;

{
    let x4 = 2;
    console.log(x4); // 2
}

console.log(x4); // 1

const a3 = 10;
const b3 = 20;

function myF2(a, b) {
    console.log(a, b); // "Ala", "Ola"
}

myF2("Ala", "Ola");
console.log(a3, b3); // 10, 20

var sum2 = 1;

function show2(a, b) {
    sum2 = a + b;
    console.log(sum2); // 5
}

show2(2, 3); // 5
console.log(sum2); // 5

let sum3 = 1;
{
    sum3 = 2 + 3;
    console.log(sum3); // 5
}
console.log(sum3); // 5

var lv0 = 0;

function fn3() {
    var lv1 = 1;
    console.log(lv0); // 0
    // console.log(lv2); // ReferenceError: lv2 is not defined

    function fn4() {
        var lv2 = 2;
        console.log(lv0, lv1, lv2); // 0, 1, 2
    }
}

// console.log(lv1, lv2); // ReferenceError: lv1 is not defined

let lv02 = 0;

{
    let lv12 = 1;
    console.log(lv02); // 0
    // console.log(lv22); // ReferenceError: lv22 is not defined

    {
        let lv22 = 2;
        var lv2B = 2;
        console.log(lv02, lv12, lv22); // 0, 1, 2
    }
}

// console.log(lv12, lv22); // ReferenceError: lv12 is not defined
console.log(lv2B); // 2

let a4 = 0;

function myF3() {
    a4++;
    console.log(`a: ${a4}`);
}

myF3(); // a: 1
myF3(); // a: 2
myF3(); // a: 3
myF3(); // a: 4

let a5 = 0;

function myF4() {
    let b = 0;
    a5++;
    b++;
    console.log(`a: ${a5}, b: ${b}`);
}

myF4(); // a: 1, b: 1
myF4(); // a: 2, b: 1
myF4(); // a: 3, b: 1
myF4(); // a: 4, b: 1

function firstFn() {
    let a = 0;

    function myF5() {
        let b = 0;
        a++;
        b++;
        console.log(`a: ${a}, b: ${b}`);
    }

    myF5(); // a: 1, b: 1
    myF5(); // a: 2, b: 1
    myF5(); // a: 3, b: 1
    myF5(); // a: 4, b: 1
}

firstFn();

function firstFn2() {
    let a = 0;

    return function() {
        a++;
        console.log(a);
    };
}

const c2 = firstFn2();
c2(); // 1
c2(); // 2
c2(); // 3
c2(); // 4

function mySafeArea() {
    let x = 100;

    const show = () => {
        console.log(`x: ${x}`);
    };

    const setX = nr => {
        x = nr;
    };

    return {
        setX,
        show
    };
}

const ob9 = mySafeArea();
// ob9.x = 150; // nie można zmienić bezpośrednio
ob9.show(); // x: 100
ob9.setX(150);
ob9.show(); // x: 150

const fn5 = function() {
};

const fn6 = function(a) {
    console.log(a);
};

fn5();

fn6("ala");

{
    let a = 20;
    var b1 = 10;
}
console.log(b1); // 10

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

function show3(a) {
    console.log(a);
}

show3(1); // 1
show3("Ala"); // "Ala"
show3({ a: 2 }); // { a: 2 }
show3([1, 2, 3]); // [1, 2, 3]

[1, 2, 1, 4].sort((a, b) => a - b);

[1, 2, 3, 4].forEach(el => {
    console.log(el);
});

element.addEventListener("click", () => {
    alert("klik");
});

function sortFn(a, b) {
    return a - b;
}

function printText3(el) {
    console.log(el);
}

function klik() {
    alert("klik");
}

[1, 2, 1, 4].sort(sortFn);

[1, 2, 3, 4].forEach(printText3);

element.addEventListener("click", klik);

function myF8(fn) {
    fn();
}

myF8(() => {
    console.log("...");
});

function randomBetween2(min, max, fn) {
    const nr = Math.floor(Math.random() * (max - min + 1) + min);
    fn(nr);
}

randomBetween2(10, 20, res => {
    console.log("Losowa liczba to: " + res);
});

function sumTable(tab, fn) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    fn(sum);
}

sumTable([1, 2, 3, 4], res => {
    console.log("Suma liczb w tablicy to: " + res);
});

function myF9(fn) {
    const text = "Ala";
    fn(text);
}

myF9(a => {
    console.log(a + " ma kota"); // "Ala ma kota"
});

function myFn2() {
    console.log("test");
    myFn2();
}

myFn2();

function fibonacci(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        const arr = fibonacci(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

function loop() {
    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }

    setTimeout(() => loop(), 2000);
}

loop();

const arr = [1, 2, 3, [4, 5, 6, [7, 8], [9, 10, [11, 12]]]];

function sumTab(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        if (Array.isArray(tab[i])) {
            sum += sumTab(tab[i]);
        } else {
            sum += tab[i];
        }
    }
    return sum;
}

console.log(sumTab(arr)); // 78

const tab54 = ["Marcin", "Monika", "Magda", "Piotrek", "Grześ", "Magda"];

for (let i = 0; i < tab54.length; i++) {
    const el = tab54[i];
    console.log(el);
}

const tab55 = ["Marcin", "Monika", "Magda"];

tab55.forEach(el => {
    console.log(el.toUpperCase());
});

tab55.forEach((el, i) => {
    console.log(`Aktualny element to ${el}, a jego indeks to ${i}`);
});

const tab56 = ["Marcin", "Ania", , "Agnieszka"];

tab56.forEach((el, i, arr) => {
    console.log(`Indeks elementu to ${i}, a długość tablicy to ${arr.length}`);
});

const tab57 = ["Marcin", "Monika", "Magda"];

function printDetails(el, i, arr) {
    console.log(el, i, arr);
}

tab57.forEach(printDetails);

new Array(100).forEach(() => {
    console.log("Ala ma kota");
});

const tab58 = ["Marcin", "Monika", "Magda"];

const ob10 = {
    name: "Marcin"
};

tab58.forEach(function() {
    console.log(this); // window
});

tab58.forEach(function() {
    console.log(this); // ob10
}, ob10);

const tab59 = ["kot", "pies", "świnka", "jeż"];

const word3letter = tab59.some(el => el.length >= 3);
console.log(word3letter); // true

const tab60 = [
    { name: "Piotr", age: 18 },
    { name: "Ania", age: 15 },
    { name: "Monika", age: 16 }
];

console.log(tab60.some(el => el.age >= 18)); // true

const tab61 = ["Marcin", "Monika", "Magda"];

const tab62 = tab61.map(el => el.toUpperCase());

console.log(tab61); // ["Marcin", "Monika", "Magda"]
console.log(tab62); // ["MARCIN", "MONIKA", "MAGDA"]

const tab63 = [1, 2, 3];
const tab64 = tab63.map(el => el * 2);

console.log(tab64); // [2, 4, 6]

const numbers2 = [1.2, 4.5, 9.3];

const absolute = numbers2.map(el => Math.ceil(el));
console.log(absolute); // [2, 5, 10]

function multiple3(number) {
    return number * 3;
}

const ourTable2 = [1, 2, 3];
console.log(ourTable2.map(multiple3)); // [3, 6, 9]

const tab65 = [1, 2, 3, 4, 5, 6];

const evenNumbers = tab65.filter(el => el % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const tab66 = ["Marcin", "Agnieszka", "Magda", "Monika", "Piotrek"];

const woman = tab66.filter(name => name.endsWith("a"));
console.log(woman); // ["Agnieszka", "Magda", "Monika"]

const tab67 = [
    { name: "Piotr", age: 18 },
    { name: "Ania", age: 15 },
    { name: "Monika", age: 16 },
    { name: "Andrzej", age: 20 },
];

const adultUsers = tab67.filter(user => user.age >= 18);
console.log(adultUsers); // [{ name: "Piotr", age: 18 }, { name: "Andrzej", age: 20 }]

const tab68 = [1, 2, 3, 4];

const result4 = tab68.reduce((prev, curr) => prev + curr);
console.log(result4); // 10

const tab69 = [3, 2, 4, 2];

const result5 = tab69.reduce((a, b) => a * b);
console.log(result5); // 48

const tab70 = [1, 2, 3];
const sum4 = tab70.reduce((a, b) => a + b, 0);
console.log(sum4); // 6

const sum5 = [1, 2, 3].reduce((a, b) => a + b, "");
console.log(sum5); // "123"

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatArray = data.reduce((total, amount) => total.concat(amount), []);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const data2 = [{ age: 10 }, { age: 12 }, { age: 15 }];

const age = data2.reduce((a, b) => ({ age: a.age + b.age }), { age: 0 });
console.log(age); // { age: 37 }

const ob11 = { name: "Jan" };
const things2 = ["ala", "bala", "cala", ob11, "data"];

console.log(things2.indexOf(ob11)); // 3
console.log(things2.includes(ob11)); // true

const tab71 = [
    { name: "Karol", age: 10, gender: "m" },
    { name: "Beata", age: 13, gender: "w" },
    { name: "Marcin", age: 18, gender: "m" },
    { name: "Ania", age: 20, gender: "w" }
];

const firstWoman = tab71.find(el => el.gender === "w");
console.log(firstWoman); // { name: "Beata", age: 13, gender: "w" }

const adult2 = tab71.find(el => el.age >= 18);
console.log(adult2); // { name: "Marcin", age: 18, gender: "m" }

const tab72 = [12, 5, 8, 130, 44];

const bigNr = tab72.find(el => el >= 15);
console.log(bigNr); // 130

const tab73 = [
    { name: "Karol", age: 10, gender: "m" },
    { name: "Beata", age: 13, gender: "w" },
    { name: "Marcin", age: 18, gender: "m" },
    { name: "Ania", age: 20, gender: "w" }
];

const lastWoman = tab73.find(el => el.gender === "w");
console.log(lastWoman); // { name: "Ania", age: 20, gender: "w" }

const tab74 = [
    { name: "Karol", age: 10, gender: "m" },
    { name: "Beata", age: 13, gender: "w" },
    { name: "Marcin", age: 18, gender: "m" },
    { name: "Ania", age: 20, gender: "w" }
];

const index3 = tab74.findIndex(el => el.gender === "m");
console.log("index pasującego elementu:", index3);
console.log("Pasujący element:", tab74[index3]);

const tab75 = [
    { name: "Monika", gender: "w" },
    { name: "Agata", gender: "w" },
    { name: "Marcin", gender: "m" },
    { name: "Patrycja", gender: "w" }
];

const index4 = tab75.findIndex(el => el.gender === "m");
tab75.splice(index4, 1);
console.log(tab75); // [{ name: "Monika", gender: "w" }, { name: "Agata", gender: "w" }, { name: "Patrycja", gender: "w" }]

const text3 = "Ala ma kota";

text3.toUpperCase().substr(0, 3).length;

text3
    .toUpperCase()
    .substr(0, 3)
    .length;

const tab76 = ["Marcin", "Monika", "Magda"];

const newTab53 = tab76
    .map(el => el.toLowerCase())
    .filter(el => el.endsWith("a"))
    .map(el => el + "!")
    .forEach(el => console.log(el));

console.log(newTab53);

const tab77 = ["Marcin", "Monika", "Magda"];

const lower = el => el.toLowerCase();
const checkLastLetterA = el => el.endsWith("a");
const addExclamationMark = el => el + "!";
const showElement = el => console.log(el);

const newTab54 = tab77
    .map(lower)
    .filter(checkLastLetterA)
    .map(addExclamationMark)
    .forEach(showElement);

console.log(newTab54);