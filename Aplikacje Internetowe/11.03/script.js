const tab = []; //pusta tablica

const tab2 = [1, 2, 3, 4];

const tab3 = ["Marcin", "Ania", "Agnieszka"];
const a = "ALA";
const b = 234;
const c = "PIES";

const tab = [a, b, c, "KOT", {...}]; //tablica z 5 elementami. Mogą to być oddzielne zmienne, ale też wartości wpisane bezpośrednio w tablicy
const tab = new Array(10);
console.log(tab); //[blank x 10]

const tab = new Array("Ala", "Bala", "Cala"); //gdy podamy więcej wartości staną się one elementami tablicy
console.log(tab); //["Ala", "Bala", "Cala"]
const tab = ["Ala", "ma", "rudego", "kota"];

console.log( tab[0] ); //Ala
console.log( tab[1] ); //ma
console.log( tab[2] ); //rudego
console.log( tab[3] ); //kota
console.log( tab[tab.length-1] ); //ostatni element - kota
const tab = ["Ala", "ma", "rudego", "kota"];
tab.at(0); //Ala
tab.at(1); //ma
tab.at(2); //rudego
tab.at(-1); //kota
tab.at(-2); //rudego
const tab = ["Marcin", "Ania", "Agnieszka"];

console.log( tab.length ); //3
console.log( tab[ tab.length-1 ] ); //Agnieszka

for (let i=0; i<tab.length; i++) {
    console.log(tab[i]);
}

const tab = ["Marcin", "Ania", "Agnieszka"];
tab.push("Piotrek");
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek]

tab.push("Y", "Z");
console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek, Y, Z]
const tab = ["Marcin", "Ania", "Agnieszka"];

tab[3] = "Piotrek";
//lub
tab[tab.length] = "Piotrek";

console.log(tab); //[Marcin, Ania, Agnieszka, Piotrek]
const tab = ["ala", "bala"]
const ob = { name : "Piotr" }

console.log(Array.isArray(tab)); //true
console.log(Array.isArray(ob)); //false

console.log(typeof tab); //"object";
console.log(typeof ob); //"object";
const tab = ["Marcin", "Ania", "Agnieszka"];
tab.push("Grzegorz");
console.log(tab) //["Marcin", "Ania", "Agnieszka", "Grzegorz"]
tab.push("Piotr", "Karol");
console.log(tab) //["Marcin", "Ania", "Agnieszka", "Grzegorz", "Piotr", "Karol"]
const tab = ["Marcin", "Ania", "Agnieszka"];
const last =  tab.pop();

console.log(last); //Agnieszka
console.log(tab); //[Marcin, Ania]
const tab = ["Marcin", "Ania", "Agnieszka"];
tab.unshift("Bartek");
console.log(tab); //[Bartek, Marcin, Ania, Agnieszka]
tab.unshift("Piotrek", "Paweł");
console.log(tab); //[Piotrek, Paweł, Bartek, Marcin, Ania, Agnieszka]
const tab = ["Marcin", "Ania", "Agnieszka"];
const first = tab.shift();

console.log(tab); //[Ania, Agnieszka]
console.log(first); //Marcin
const ourTable = ["Marcin", "Ania", "Agnieszka"];

console.log(ourTable.join()); //Marcin,Ania,Agnieszka

console.log(ourTable.join(" - ")); //Marcin - Ania - Agnieszka

console.log(ourTable.join(" <--> ")); //Marcin <--> Ania <--> Agnieszka
//zliczam liczbę liter w tablicy
const cars = ["Mercedes", "Audi", "BMW"];
console.log(cars.join("").length); //15
const txt = "kartofel";
const tab = [...txt];
console.log(tab); //["k", "a", "r", "t", "o", "f", "e", "l"]
const txt = "Ala ma kota";
const tab = txt.split(" ");
console.log(tab); //["Ala", "ma", "kota"];
const tab = [1, 2, 3, 4];
tab.reverse()
console.log(tab); //[4, 3, 2, 1]
const word = "kajak";
const tab = [...word];
console.log(tab.reverse().join("") === tab.join("")); //true czyli palindrom
const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];

console.log(tab.indexOf("Agnieszka")); //2
console.log(tab.indexOf("Karolina")); //-1

if (tab.indexOf("Ania") !== -1) {
    console.log("Ania występuje w tablicy pod indexem", tab.indexOf("Ania"));
}
const tab = ["Agnieszka", "Marcin", "Ania", "Agnieszka", "Monika"];
console.log(tab.lastIndexOf("Agnieszka")) //3;
const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];

if (tab.includes("Ania")) {
    console.log("Ania występuje w tablicy pod indeksem", tab.indexOf("Ania"));
}

if (!tab.includes("Pies")) {
    console.log("Pies nie występuje w tej tablicy");
}
const ob = { name : "Jan" }
const things = ["ala", "bala", "cala", ob, "data"];

console.log(things.indexOf(ob)); //3
//bardziej realny przykład
const buttons = [...document.querySelectorAll(".pagination-btn")];

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const index = buttons.indexOf(btn);
        showSlide(index);
    });
});
const tab = ["Marcin", "Ania", "Piotrek", "Grześ"];
tab.sort();
console.log( tab ); //["Ania", "Grześ", "Marcin", "Piotrek"]
const tab = [1, 2, 21, 2.1, 32, 3.1];
tab.sort();

console.log(tab); //[ 1, 2, 2.1, 21, 3.1, 32 ]
const tab = ["Bartek", "ania", "Celina", "agnieszka"];
tab.sort();

console.log(tab); //["Bartek", "Celina", "agnieszka", "ania"]
function mySort(a, b) {
 //   ...
}

tab.sort(mySort);
function compare(a, b) {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
}

tab.sort(compare);
function compareNr(a, b) {
    return a - b
}

const tab = [100, 320, 10, 25, 310, 1200, 400];

const tab3 = tab.sort(compareNr);
console.log( tab3 ); //[10, 25, 100, 310, 320, 400, 1200]
const tab = [
    { name: "Marcin" , height : 183 },
    { name: "Ania" , height : 173 },
    { name: "Agnieszka" , height : 170 },
]

//dla sort spokojnie możemy używać funkcji anonimowej
tab.sort(function(a, b) {
    return a.height - b.height;
});

console.log(tab);
const tab = ["Marcin", "ania", "Bożena"]; //ania specjalnie z małej
tab.sort(function(a, b) {
    return a - b;
})
console.log(tab); //['Marcin', 'ania', 'Bożena']

tab.sort(function(a, b) {
    return a.localeCompare( b);
})
console.log(tab); //['ania', 'Bożena', 'Marcin']
const mails = [
    "marcin@wp.pl",
    "marcin@gmail.pl",
    "marcin@onet.pl",
    "marcin@interia.pl"
]

//sortuje po domenach
//z użyciem funkcji strzałkowej
mails.sort(function(a, b) {
    const aDomain = a.substring(a.indexOf("@") + 1);
    const bDomain = b.substring(b.indexOf("@") + 1);
    return aDomain.localeCompare(bDomain);
})

console.log(mails);
const users = [
    {
        name : "Marcin",
        car : {
            name : "Toyota",
            age : 10
        }
    },
    {
        name : "Marcin",
        car : {
            name : "Fiat",
            age : 15
        }
    },
    {
        name : "Monika",
        car : {
            name : "BMW",
            age : 5
        }
    },
]

//sortuje po wieku samochodu
users.sort(function(a, b) {
    return a.car.age - b.car.age
});

console.log(users);
const tab1 = ["Ala", "Basia"];
const tab2 = ["Piotr", "Marcin"];
console.log(tab1 + tab2); //Ala,BasiaPiotr,Marcin
const anim1 = ["Pies", "Kot"];
const anim2 = ["Słoń", "Wieloryb"];
const anim3 = ["Chomik ninja", "Świnka morderca"];

const table = anim1.concat(anim2);
console.log(table); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb"]

const tableBig = anim1.concat(anim2, anim3);
console.log(tableBig); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb", "Chomik ninja", "Świnka morderca"];
const anim1 = ["Pies", "Kot"];
const anim2 = ["Słoń", "Wieloryb"];
const table = [...anim1, ...anim2];
console.log(table)
const tab = ["Marcin", "Ania", "Agnieszka", "Monika", "Magda"];

const tab2 = tab.slice(0, 1);
console.log(tab2); //["Marcin"]
console.log(tab); //["Marcin", "Ania", "Agnieszka", "Monika", "Magda"]

const tab3 = tab.slice(2);
console.log(tab3); //["Agnieszka", "Monika", "Magda"]

const tab4 = tab.slice(0, 5);
console.log(tab4); //["Marcin", "Ania", "Agnieszka", "Monika", "Magda"]

const tab5 = tab.slice(-2); //od końca
console.log(tab5); //["Monika", "Magda"]

const tab6 = tab.slice(2, -1);
console.log(tab6); //["Agnieszka", "Monika"]
const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];

tab.splice(2, 1); //usuwam 1 element na indeksie 2
console.log(tab); //["Marcin", "Ania", "Monika"]
const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];

tab.splice(1, 0, "A") //nic nie usuwam na indeksie 1 i wstawiam przed niego nowy element
console.log(tab); //["Marcin", "A", "Ania", "Agnieszka", "Monika"]
const tab = ["pies", "kot", "chomik", "aligator", "świnka", "kanarek"];
const index = tab.indexOf("aligator");

if (index !== -1) {
    tab.splice(index, 1);
    console.log(tab); //["pies", "kot", "chomik", "świnka", "kanarek"];
}
const tab = new Array(20);
console.log(tab); //[empty x 20]
tab.fill("kot");
console.log(tab); //["kot", "kot", "kot", ...]


const tab2 = [];
tab2.length = 15;
console.log(tab2); //[empty x 15]
tab2.fill("kot", 2, 5);
console.log(tab2); //[empty × 2, "kot", "kot", "kot", empty × 10]


const tab3 = [1, 2, 3, 4, 5];
tab3.fill("pies", 2);
console.log(tab3); //[1, 2, "pies", "pies", "pies"]

const tab = ["Marcin", "Ania", "Agnieszka"];

for (let i=0; i<tab.length; i++) {
    console.log("licznik pętli: " + i); //0, 1...
    console.log(tab[i]); //"Marcin", "Ania"...
}
const tab = ["Marcin", "Ania", "Agnieszka"];

for (let i=0; i<tab.length; i++) {
    const el = tab[i];
    console.log(el.toUpperCase()); //"MARCIN", "ANIA"...
}
const tab = ["Marcin", "Ania", "Agnieszka"];

for (const el of tab) { //el to nazwa zmiennej wymyślona przez nas
    console.log(el); //"Marcin", "Ania"...
}

for (const xxx of tab) { //xxx to nazwa zmiennej wymyślona przez nas
    console.log(xxx.toUpperCase()); //"MARCIN"...
}

for (let lorem of tab) { //niektórzy używają tutaj let zamiast const
    console.log(lorem);
}
const tab = [
    ["a1", "a2", "a3", "a4", "a5", "a6"],
    ["b1", "b2", "b3", "b4", "b5", "b6"],
    ["c1", "c2", "c3", "c4", "c5", "c6"],
]

console.log(tab[0]); //["a1", "a2", "a3", "a4", "a5", "a6"]
console.log(tab[0].length); //6
console.log(tab[0][1]); //"a2"
console.log(tab[2][3]); //"c4"

const tab = [
    ["Marcin", 183, "red", "kot"],
    ["Ania", 173, "blue", "pies"],
    ["Agnieszka", 170, "yellow", "świnka"]
]

console.log(`
    imię:       ${tab[0][0]}
    wzrost:     ${tab[0][1]}
    kolor:      ${tab[0][2]}
    zwierzak:   ${tab[0][3]}
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
    //pod subTab mamy każdą kolejną podtablicę

    for (const el of subTab) {
        switch (el) {
            case 0 : str += "🟩"; break;
            case 1 : str += "🟫"; break;
            case 2 : str += "⬛"; break;
        }
    }

    str += "\n";
}

console.log(str);
const tab = [
    1,
    [2,3],
    [4,5,[6,7]],
    [[[8,9], [10,11]]]
]

console.log(tab.flat(1));
const tab = [
    1,
    [2,3],
    [4,5,[6,7]],
    [[[8,9], [10,11]]]
]

console.log(tab.flat(2));
const tab = [
    1,
    [2,3],
    [4,5,[6,7]],
    [[[8,9], [10,11]]]
]

console.log(tab.flat(Infinity)); //[1,2,3,4,5,6,7,8,9,10,11]
const ob = {
    0 : "ala",
    1 : "bela",
    length: 2
}

console.log(Array.from(ob)); //["ala", "bela"]
//pobieram kolekcję buttonów ze strony
const buttons = document.querySelectorAll("button");
console.log(buttons); //NodeList [button, button...]

const tab = Array.from(buttons);
console.log(tab); //Array [button, button...]
const ob = {
    0 : "ala",
    1 : "bela",
    length: 2
}

const tab = Array.from(ob, function(el) {
    return el.toUpperCase()
});
console.log(tab); //["ALA", "BELA"]
const buttons = document.querySelectorAll("button");
console.log(buttons); //NodeList [button, button...]

const buttonsTabA = [...buttons]; //array
const buttonsTabB = Array.from(buttons); //array
const ob = { 0: "a", 1: "b", length: 2 };

console.log(Array.from(ob)); //["a", "b"]

console.log([...ob]); //ob[Symbol.iterator] is not a function

{
    const tab = [1, 2, 3, 4];
    const newTab = tab.reverse(); //metoda zmienia oryginalną tablicę
    console.log(tab); //[4, 3, 2, 1]
    console.log(newTab); //[4, 3, 2, 1]
}

{
    const tab = [1, 2, 3, 4];
    //nowa metoda zwraca odwróconą tablicę ale nie zmienia oryginalnej
    const newTab = tab.toReversed();
    console.log(tab); //[1, 2, 3, 4]
    console.log(newTab); //[4, 3, 2, 1]
}
{
    const tab = [10, 1.4, 22, 2];
    const newTab = tab.sort(function(a, b) {
        return a - b;
    })
    console.log(tab); //[1.4, 2, 10, 22]
    console.log(newTab); //[1.4, 2, 10, 22]
}

{
    const tab = [10, 1.4, 22, 2];
    const newTab = tab.toSorted(function(a, b) {
        return a - b;
    })
    console.log(tab); //[10, 1.4, 22, 2]
    console.log(newTab); //[1.4, 2, 10, 22]
}
{
    const tab = [1, 2, 3, 4];
    //za pomocą spread operator stworzyłem kopię oryginalnej tablicy, a potem ją odwróciłem
    const newTab = [...tab].reverse();
    console.log(tab); //[1, 2, 3, 4]
    console.log(newTab); //[4, 3, 2, 1]
}

{
    const tab = [10, 1.4, 22, 2];
    const newTab = [...tab].sort(function(a, b) {
        return a - b;
    })
    console.log(tab); //[10, 1.4, 22, 2]
    console.log(newTab); //[1.4, 2, 10, 22]
}
const tab = [1, 2, 3, 4, 5];
const newTab = tab.with(1, 10);
console.log(newTab); //[1, 10, 3, 4, 5];

const tabB = ["Ala", "Beata", "Cecylia", "Dagmara", "Ela"];
const newTabB = tabB.with(-2, "Karol");
console.log(newTabB); //['Ala', 'Beata', 'Cecylia', 'Karol', 'Ela']
const tab = [1, 2, 3, 4, 5];
const newTab = [...tab].splice(1, 1, 10);
console.log(newTab); //[1, 10, 3, 4, 5];
function nazwaFunkcji(nr) {
    const result = nr * nr; //możemy też po prostu zwrócić nr * nr
    return result;
}

//Po stworzeniu funkcji wystarczy ją wywołać poprzez podanie jej nazwy:
nazwaFunkcji(2); //4
nazwaFunkcji(3); //9
nazwaFunkcji(5); //25
alert("Ala ma kota");

Math.random();
Math.max(1,2,3);

"ala ma kota".toUpperCase();
"kot i pies".substr(1);

[1,2,3].push(4);
[1,2,3].join("-");
function sum(a, b) {
    return a + b;
}

console.log( sum(2, 3) ); //5
console.log( sum(4, 3) ); //7
function lineText(name, pet) {
    console.log(name + " ma " + pet);
}

lineText("Ola", "kota"); //Ola ma kota
lineText("Ala", "psa"); //Ala ma psa
function writeText(name, age) {
    console.log(`${name} ma kota, który ma ${age} lat`);
}

writeText("Ala", 5); //"Ala ma kota, który ma 5 lat"
writeText("Marysia"); //"Marysia ma kota, który ma undefined lat"
writeText(); //"undefined ma kota, który ma undefined lat"
function printText(txt) {
    console.log("Twój tekst to " + txt);
}

printText("kot"); //"Twój tekst to kot"
printText(); //"Twój tekst to undefined"
function print(name = "Michał", status = "najlepszy") {
    console.log(name + " jest " + status);
}

print(); //"Michał jest najlepszy"
print("Karol"); //"Karol jest najlepszy"
print("Paweł", "wysoki"); //"Paweł jest wysoki"
print(undefined, "wysoki"); //"Michał jest wysoki" - undefined jest traktowane jak niepodanie wartości

function sum() {
    console.log(arguments);
}

sum(); //[] Arguments 
sum(1, 2, 3, 4); //[1, 2, 3, 4] Arguments 
sum("ala", "ma", "kota"); //["ala", "ma", "kota"] Arguments

function sumNumbers() {
    const sum = arguments.reduce(function(a, b) { //błąd, reduce jest dla tablic
        return a + b;
    });

    return sum;
}

sumNumbers(1, 2, 3, 4);

function superSum(...r) {
    console.log(r); //[1, 2, 3, 4]
}

superSum(1, 2, 3, 4);
function superSum(...params) {
    console.log(params); //[1, 2, 3, 4]

    const sum = params.reduce(function(a, b) { //można krócej ale na to przyjdzie jeszcze czas
        return a + b;
    });

    return sum;
}

superSum(1, 2, 3, 4);

function calculate(number1, number2) {
    const result = number1 + number2;
    return result;
}

calculate(10, 4) //wypisze 14
function randomBetween(min = 0, max = 10) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


//wstawiam wynik do body
document.body.innerText = randomBetween(1, 100);

//wykorzystuję funkcję do powtarzania tekstu
console.log( "kot".repeat(randomBetween(1, 6)) );

//dodaję 2 losowe liczby
console.log( randomBetween(1, 6) + randomBetween(1, 10) );

//generuję tablicę z liczbami 1-100
const tab = [];
for (let i=0; i<10; i++) {
    tab.push(randomBetween(1, 100));
}

if (randomBetween(1, 10)) { //w miejscu gdzie używamy funkcji pojawia się wynik
  //  ...
}
function sum(a, b) {
    return a + b;

    console.log(a + b); //nigdy nie zostanie wykonane, bo wcześniej return przerwie działanie funkcji
    console.log("Test");
}

function getStatus(number) {
    if (number < 20) {
        return "bad"
    }

    if (number < 30) {
        return "medium"
    }

    return "good"
}

console.log(getStatus(10));
console.log(getStatus(25));
function fixName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const result = fixName("piotr") + " " + fixName("kowalski");
console.log(result); //Piotr Kowalski

function returnArray(size) {
    return new Array(size).fill(0).map((el, key) => key);
}

const result = returnArray(10); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(result[0]); //0

function returnObject() {
    return {
        first: "ala",
        second: "bala",
        third: "cala"
    }
}

console.log(returnObject().first); //"ala"

function printText() {
   // ...
}

printText();

const printText = function() {
   // ...
}

printText();

myFunction(); //Tutaj jest ok

function myFunction() {
    console.log("...");
}

document.addEventListener("click", function() {
    console.log("klik");
});

[1,2,3].forEach(function(el) {
    console.log(el);
});

[1,2,3].sort(function(a, b) {
    return a - b;
});

const myFn = function() {
}

[3,1,2].sort(function(a, b) {
})

//to samo co powyżej mogę zapisać za pomocą skróconego zapisu:

const myFn = () => {
}

[3,1,2].sort((a, b) => {
})

const myF = function(a) {
    console.log(a * a);
}

const myF = a => {
    console.log(a * a);
}
[3,1,2].forEach(function(el) {

})

[3,1,2].forEach(el => {

})

const myF = function() {
    console.log("Ala ma kota");
}

const myF = () => {
    console.log("Ala ma kota");
}
[3,1,2].sort(function(a, b) {
    return a - b;
})

[3,1,2].sort((a, b) => {
    return a - b;
})

const myF = function(a) {
    console.log( a * a );
}

const myF = a => console.log( a * a );

const myF = function(a) {
    return "Wynik to: " + a * a;
}

const myF = a => "Wynik to: " + a * a;
[3,1,2].sort(function(a, b) {
    return a - b;
})

[3,1,2].sort((a, b) => a - b)

const myF = function(a, b) {
    const result = a * b;
    console.log( "Wynik mnożenia to", result );
    return result;
}

const myF = (a, b) => {
    const result = a * b;
    console.log( "Wynik mnożenia to", result );
    return result;
}

const getObj = function(name) {
    return { team : name, score : 0 }
}


const getObj = name => { team : name, score : 0 } //błąd

const getObj = name => ({ team : name, score : 0 }) //ok








//wypisanie tekstu
const text = "Moja mała świnka";
console.log(text);

//wypisywanie całego obiektu
console.log(window);

//wypisanie wielu rzeczy po przecinku
const a = 10;
const b = 20;
console.log("a: ", a, "b: ", b);

const obj = { name: "test" }

//zamiast
console.log("Wynik: " + obj); //"Wynik: [object Object]"

//użyj
console.log("Wynik:", obj); //"Wynik:", {name: "test"}

console.log() //klasyk
console.dir() //do bardziej szczegółowego wypisywania obiektów. Szczególnie przydatna przy wypisywaniu elementów DOM
console.table() //wypisuje ładnie sformatowany stan tabeli w danym momencie

const ob1 = { ... }
const ob2 = { ... }
debugger; //zatrzymujemy wykonywanie kodu

const ob3 = {...ob1, ...ob2};
debugger; //znowu zatrzymujemy - a co!
const users = [
    { name : "Marcin", points : 51 },
    { name : "Weronika", points : 87 },
    { name : "Piotr", points : 65 },
    { name : "Monika", points : 46 },
    { name : "Anna", points : 98 },
]

users.forEach(function(user) {
    console.log(user.name, user.points);
})

let x = "Jola";

{
    let a = "Ala";
    console.log(a); //Ala
    console.log(x); //Jola
}

{
    let a = "Ola"; //zmienna lokalna w tym bloku
    console.log(a); //Ola
    console.log(x); //Jola
}

console.log(a); //error - nie ma takiej zmiennej
console.log(x); //Jola

var x = "Jola";

function fn1() {
    var a = "Ala";
    console.log(a); //Ala
    console.log(x); //Jola
}

function fn2() {
    var a = "Ola";
    console.log(a); //Ola
    console.log(x); //Jola
}

console.log(a); //błąd bo zmienna a jest dostępna tylko w funkcji
console.log(x); //Jola

var x = 1;

function show() {
    //deklarujemy zmienną x dostępną tylko w tej funkcji
    //zbieżność nazw z zewnętrzną zmienną x nie przeszkadza, bo to nie są te same zmienne
    var x = 2;
    console.log(x); //2
}

show();
console.log(x); //1 - jesteśmy poza funkcją

let x = 1;

{
    let x = 2;
    console.log(x); //2
}

console.log(x); //1

const a = 10;
const b = 20;

function myF(a, b) {
    console.log(a, b); //"Ala", "Ola"
}

myF("Ala", "Ola");
console.log(a, b); //10, 20

var sum = 1;

function show(a, b) {
    //funkcja show zaczyna definiować swoje zmienne.
    //musi zadeklarować zmienne parametrów a i b
    //czy poniżej musi zdefiniować nową zmienną sum?
    //Nie, ponieważ poniżej nie ma deklaracji nowej zmiennej
    //(brakuje słowa var, let lub const)
    //funkcja więc odwołuje się tutaj do zmiennej z zewnątrz

    sum = a + b;
    console.log(sum); //wypisze 5
}

show(2, 3); //5
console.log(sum); //5 a powinno być 1
let sum = 1;
{
    sum = 2 + 3;
    console.log(sum); //5
}
console.log(sum); //5

var lv0 = 0;

function fn1() {
    var lv1 = 1;
    console.log(lv0); //0
    console.log(lv2); //błąd - nie ma dostępu do zmiennych w wewnętrznej funkcji

    function fn2() {
        var lv2 = 2;
        console.log(lv0, lv1, lv2); //0, 1, 2
    }
}

console.log(lv1, lv2); //błąd - zewnętrzne środowisko nie ma dostępu
let lv0 = 0;

{
    let lv1 = 1;
    console.log(lv0); //0
    console.log(lv2); //błąd - nie ma dostępu do zmiennych w wewnętrznym bloku

    {
        let lv2 = 2;
        var lv2B = 2;
        console.log(lv0, lv1, lv2); //0, 1, 2
    }
}

console.log(lv1, lv2); //błąd - zewnętrzne środowisko nie ma dostępu
console.log(lv2B); //uwaga - lv2B to var. Mamy tutaj dostęp, bo zmienna ta nie jest wewnatrz funkcji

let a = 0;

function myF() {
    a++; //zmienna globalna
    console.log(`a: ${a}`);
}

myF(); //a: 1
myF(); //a: 2
myF(); //a: 3
myF(); //a: 4

let a = 0;

function myF() {
    let b = 0;
    a++;
    b++;
    console.log(`a: ${a}, b: ${b}`);
}

myF(); //a: 1, b: 1
myF(); //a: 2, b: 1
myF(); //a: 3, b: 1
myF(); //a: 4, b: 1

function firstFn() {
    let a = 0;

    function myF() {
        let b = 0;
        a++;
        b++;
        console.log(`a: ${a}, b: ${b}`);
    }

    myF(); //a: 1, b: 1
    myF(); //a: 2, b: 1
    myF(); //a: 3, b: 1
    myF(); //a: 4, b: 1
}

firstFn();

function firstFn() {
    let a = 0;

    return function() {
        a++;
        console.log(a);
    }
}

const c = firstFn(); //podstawiam wynik funkcji firstFn czyli funkcję z linii 4
c(); //1
c(); //2
c(); //3
c(); //4

function mySafeArea() {
    let x = 100;

    const show = () => {
        console.log(`x: ${x}`);
    }

    const setX = (nr) => {
        x = nr
    }

    //poniżej zwracany obiekt, który ma dostęp do powyższych zmiennych i metod
    //dzięki którym może te zmienne modyfikować
    return {
        setX,
        show
    }
}

const ob = mySafeArea();
ob.x = 150; //nie mogę tak ustawić zmiennej bo nie mam do niej dostępu z zewnątrz
ob.show(); //x: 100
ob.setX(150);
ob.show(); //x: 150

const fn1 = function() {...}

const fn2 = function(a) {
    console.log(a);
}

fn1();

fn2("ala");

{
    let a = 20;
    var b = 10;
}
console.log(b); //10

for (i=0; i<10; i++) {
    console.log(i);
}

for (i=0; i<10; i++) {
    console.log(i);
}

console.log(i); //10
console.log(window.i); //10

function show(a) {
    console.log(a)
 }
 
 show(1); //przekazaliśmy numer
 show("Ala"); //przekazaliśmy tekst
 show({a : 2}); //przekazaliśmy obiekt
 show([1,2,3]); //przekazaliśmy tablicę
 [1,2,1,4].sort((a, b) => {
    return a - b
})

[1,2,3,4].forEach(el => {
    console.log(el);
});

element.addEventListener("click", () => {
    alert("klik");
});
function sortFn(a, b) {
    return a - b;
}

function printText(el) {
    console.log(el);
}

function klik() {
    alert("klik");
}

[1,2,1,4].sort(sortFn);

[1,2,3,4].forEach(printText);

element.addEventListener("click", klik);

function myF(fn) {
    //pod fn trafia poniższa anonimowa funkcja
    //no to ją wywołajmy...
    fn();
}

myF(() => {
    console.log("...");
});
function randomBetween(min, max, fn) {
    const nr = Math.floor(Math.random()*(max-min+1)+min);
    fn(nr);
}

randomBetween(10, 20, res => {
    console.log("Losowa liczba to: " + res);
});
function sumTable(tab, fn) {
    let sum = 0;
    for (let i=0; i<tab.length; i++) {
        sum += tab[i];
    }
    fn(sum);
}

sumTable([1,2,3,4], res => {
    console.log("Suma liczb w tablicy to: " + res);
});

function myF(fn) {
    const text = "Ala"
    fn(text); //pod poniższe "a" trafi tekst "Ala"
}

myF((a) => {
    console.log(a + " ma kota") //Ala ma kota
})

function myFn() {
    console.log("test");
    myFn();
}

myFn();

function fibonacci(n) {
    if (n===1) {
        return [0, 1];
    } else {
        const arr = fibonacci(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log(fibonacci(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

function loop() {
    for (let i=0; i<10000; i++) {
        console.log(i);
    }

    setTimeout(() => loop(), 2000); //po 2 sekundach ponownie odpalam loop
}

loop();

const arr = [ 1, 2, 3, [ 4, 5, 6, [7, 8], [9, 10, [11, 12] ] ] ];

function sumTab(tab) {
    let sum = 0;
    for (let i=0; i<tab.length; i++) {
        if (Array.isArray(tab[i])) {
            sum += sumTab(tab[i]);
        } else {
            sum += tab[i];
        }
    }
    return sum;
}

console.log( sumTab(arr) ); //78

const tab = ["Marcin", "Monika", "Magda", "Piotrek", "Grześ", "Magda"];

for (let i=0; i<tab.length; i++) {
    const el = tab[i];
    console.log(el);
}

const tab = ["Marcin", "Monika", "Magda"];

//pod zmienną el trafią kolejne elementy
tab.forEach(el => {
    console.log(el.toUpperCase());
});
const tab = ["Marcin", "Monika", "Magda"];

//pod zmienną i będzie wstawiany indeks elementu
tab.forEach((el, i) => {
    console.log(`Aktualny element to ${el}, a jego indeks to ${i}`);
});
const tab = ["Marcin", "Ania", , "Agnieszka"];

//pod zmienną arr wstawiana będzie aktualna tablica po której iterujemy - może kiedyś to się przyda?
tab.forEach((el, i, arr) => {
    console.log(`Indeks elementu to ${i}, a długość tablicy to ${arr.length}`);
});
const tab = ["Marcin", "Monika", "Magda"];

function printDetails(el, i, arr) {
    console.log(el, i, arr);
}

tab.forEach(printDetails);
new Array(100).forEach(() => {
    console.log("Ala ma kota"); //wykona się 100 razy, bez wypisywania żadnego elementu, indeksu itp
});

const tab = ["Marcin", "Monika", "Magda"];

const ob = {
    name : "Marcin"
};

tab.forEach(function() {
    console.log(this); //window
});

tab.forEach(function() {
    console.log(this); //ob
}, ob);

const tab = ["kot", "pies", "świnka", "jeż"];

//sprawdzam czy chociaż jedno słowo ma minimum 3 litery
const word3letter = tab.some(el => el.length >= 3);

console.log(word3letter); //true

const tab = [
    { name : "Piotr", age: 18 },
    { name : "Ania", age: 15 },
    { name : "Monika", age: 16 }
];

//a może chociaż jeden user jest pełnoletni?
console.log( tab.some(el => el.age >= 18) ); //true

const tab = ["Marcin", "Monika", "Magda"];

const tab2 = tab.map(el => el.toUpperCase());

console.log(tab); //[Marcin, Monika, Magda]
console.log(tab2); //[MARCIN, MONIKA, MAGDA]

const tab = [1, 2, 3];
const tab2 = tab.map(el => el * 2);

console.log(tab2); //[2, 4, 6]
const numbers = [1.2, 4.5, 9.3];

const absolute = numbers.map(el => Math.ceil(el));
console.log(absolute); //[2, 5, 10]
function multiple3(number) {
    return number * 3;
}

var ourTable = [1, 2, 3];
console.log(ourTable.map(multiple3)); //[3, 6, 9]

const tab = [1, 2, 3, 4, 5, 6];

const evenNumbers = tab.filter(el => el % 2 === 0);

console.log(evenNumbers); //[2, 4, 6]
const tab = ["Marcin", "Agnieszka", "Magda", "Monika", "Piotrek"];

const woman = tab.filter(name => name.endsWith("a"));

console.log(woman); //["Agnieszka", "Magda", "Monika"]
const tab = [
    { name : "Piotr", age: 18 },
    { name : "Ania", age: 15 },
    { name : "Monika", age: 16 },
    { name : "Andrzej", age: 20 },
];

const adultUsers = tab.filter(user => user.age >= 18);

console.log(adultUsers); //[{ name : "Piotr", age: 18 },  { name : "Andrzej", age: 20}]

const tab = [1, 2, 3, 4];

const result = tab.reduce((prev, curr) => prev + curr);

//1 iteracja => prev = 1, curr = 2
//2 iteracja => prev = 3, curr = 3
//3 iteracja => prev = 6, curr = 4
//wynik = 10
const tab = [3, 2, 4, 2];

const result = tab.reduce((a, b) => a * b);

//1 iteracja => prev = 3,  curr = 2
//2 iteracja => prev = 6,  curr = 4
//3 iteracja => prev = 24, curr = 2

//wynik = 48

const tab = [3, 2, 4, 2];
let sum = 0;

for (let i=0; i<tab.length; i++) {
    sum += tab[i];
}

//atrybut po funkcji to początkowa wartość
const sum = [1, 2, 3].reduce((a, b) => a + b, 0);

console.log(sum); //6
const sum = [1, 2, 3].reduce((a, b) => a + b, "");

console.log(sum); //"123"
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatArray = data.reduce((total, amount) => total.concat(amount), []);

console.log(flatArray); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const data = [{age : 10}, {age : 12}, {age : 15}];

//dlaczego poniżej muszę zwracać obiekt z kluczem age?
const age = data.reduce((a, b) => ({age : a.age + b.age}), {age : 0});

console.log(age); //37

const ob = { name : "Jan" }
const things = ["ala", "bala", "cala", ob, "data"];

console.log(things.indexOf(ob)); //3
console.log(things.includes(ob)); //true

const tab = [
    { name : "Karol", age: 10, gender: "m" },
    { name : "Beata", age: 13, gender: "w" },
    { name : "Marcin", age: 18, gender: "m" },
    { name : "Ania", age: 20, gender: "w" }
];

const firstWoman = tab.find(el => el.gender === "w");
console.log(firstWoman); //{ name : "Beata", age: 13, gender: "w" }

const adult = tab.find(el => el.age >= 18);
console.log(adult) //{ name : "Marcin", age: 18, gender: "m" }
const tab = [12, 5, 8, 130, 44];

const bigNr = tab.find(el => el >= 15);
console.log(bigNr); //130


const tab = [
    { name : "Karol", age: 10, gender: "m" },
    { name : "Beata", age: 13, gender: "w" },
    { name : "Marcin", age: 18, gender: "m" },
    { name : "Ania", age: 20, gender: "w" }
];

const lastWoman = tab.find(el => el.gender === "w");
console.log(lastWoman); //{ name : "Ania", age: 20, gender: "w" }

const tab = [
    { name : "Karol", age: 10, gender: "m" },
    { name : "Beata", age: 13, gender: "w" },
    { name : "Marcin", age: 18, gender: "m" },
    { name : "Ania", age: 20,gender: "w" }
];

const index = tab.findIndex(el => el.gender === "m")

console.log("index pasującego elementu:", index);
console.log("Pasujący element:", tab[index]);
const tab = [
    { name : "Monika", gender: "w" },
    { name : "Agata", gender: "w" },
    { name : "Marcin", gender: "m" },
    { name : "Patrycja", gender: "w" }
]

const index = tab.findIndex(el => el.gender === "m");
tab.splice(index, 1); //usuwam wyszukany element
console.log(tab); //[{Monika...}, {Agata...}, {Patrycja...}]

const text = "Ala ma kota";

text.toUpperCase().substr(0, 3).length //kolejne funkcje odpalamy po kropce

//czasami trzymanie wszystkiego w jednej linii nie jest dobrym rozwiązaniem
text
    .toUpperCase()
    .substr(0, 3)
    .length

    const tab = ["Marcin", "Monika", "Magda"];

const newTab = tab
    .map(el => el.toLowerCase()) //zwracam nową tablicę...
    .filter(el => el.endsWith("a")) //...więc mogę ją odfiltrować
    .map(el => el + "!") //...filter zwróciło tablicę więc mogę użyć map
    .forEach(el => console.log(el)) //...map zwróciło tablicę więc forEach pasuje

console.log(newTab)

const tab = ["Marcin", "Monika", "Magda"];

const lower = function(el) {
    return el.toLowerCase();
}

const checkLastLetterA = function(el) {
    return el.endsWith("a");
}

const addExclamationMark = function(el) {
    return el + "!"
}

const showElement = function(el) {
    console.log(el);
}

const newTab = tab
    .map(lower)
    .filter(checkLastLetterA)
    .map(addExclamationMark)
    .forEach(showElement);

console.log(newTab)

