const nr = prompt("Podaj jakąś liczbę");

if (nr > 20) { //jeżeli...
    console.log("Liczba jest większa od 20");
} else { //w przeciwnym razie...
    console.log("Liczba jest mniejsza lub równa 20");
}

const a = 10;
const b = 20;

console.log(b > a); //true
console.log(b < a); //false
console.log(b === a); //false

const result = a > b;
console.log(result); //false

if (a < b) { //kod się wykona
    console.log("A jest mniejsze od B");
}

const nr2 = prompt("Podaj jakąś liczbę");
if (nr2 > 5) {
    console.log(`Liczba ${nr2} jest większa od 5`);
}

if ("7" > 5) {
    console.log("Liczba 7 jest większa od 5");
}

console.log("ab" > "aa"); //true
console.log("pies" > "kot"); //true
console.log("abc" > "acc"); //false
console.log("alicja" > "bela"); //false
console.log("Marcin" > "Ania"); //true - znaczy lepszy 😏
console.log("a" > "A"); //true
console.log("Kot" > "kot"); //false

//dlatego warto przed konwersją zrównać wielkość liter
console.log("alicja" > "Beata"); //true
console.log("3" > 2); //true bo 3 > 2
console.log("02" > 3); //false bo 2 > 3
console.log("0" == 0); //true

console.log(true > 2); //false bo true to 1
console.log(false < 2); //true bo false to 0

console.log("Ala" > 0); //false bo konwersja "Ala" na liczbę to NaN (not a number), a NaN jest mniejsze od każdej liczby
console.log("Kot" > -Infinity); //false - to samo co powyżej. NaN jest mniejsze od każdej liczby

//zamiast
const nr3 = prompt("Podaj liczbę z zakresu 1-10");
if (nr3 > 5) { 
    console.log("Liczba jest większa od 5");
}

//napiszę
const nr4 = Number(prompt("Podaj liczbę z zakresu 1-10"));
if (nr4 > 5) { 
    console.log("Liczba jest większa od 5");
}

const nr5 = prompt("Podaj liczbę 10");
if (nr5 == 10) {
    console.log(nr5 + nr5);
}

const nr6 = prompt("Wpisz liczbę 10");
if (nr6 === 10) { //nic nie zobaczymy w konsoli bo "10" nie równa się 10
    console.log(nr6 + nr6);
}

const nr7 = Number(prompt("Wpisz liczbę 10"));
if (nr7 === 10) { //to zadziała
    console.log(nr7 + nr7); //20
}

if (false) { 
    // Ten blok się nie wykona
}

if (null) { 
    // Ten blok się nie wykona
}

if (undefined) { 
    // Ten blok się nie wykona
}

if (0) { 
    // Ten blok się nie wykona
}

if (NaN) { 
    // Ten blok się nie wykona
}

if ("") { 
    // Ten blok się nie wykona
}

if (document.all) { 
    // Ten blok się nie wykona
}

const a2 = 20;
const b2 = 0;
const c2 = null;

if (a2) { //to się wykona bo a2 !== 0
    console.log("A ma wartość ", a2);
}

if (b2) { //to się nie wykona bo b2 === 0
    console.log("B ma wartość ", b2);
}

if (c2) { //to się nie wykona bo null
    console.log("C ma wartość ", c2);
}

if (false) { //to się nie wykona bo false to false
}

Boolean(false); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(0); //false
Boolean(NaN); //false
Boolean(""); //false
Boolean(document.all); //false

Boolean("Ala"); //true
Boolean(2); //true
Boolean(2-2); //false

let x;
Boolean(x); //false bo x nie ma wartości czyli undefined

if (nr) { //kod się wykona jeżeli wartość liczby nr jest różna od falsy
}

const txt = "Ala ma kota";
if (txt.length) { //sprawdzam długość tekstu. Jeżeli większa od 0 to true
    console.log("Tekst ma długość większą od 0");
}

const tab = [];
if (tab.length) { //podobnie sprawdzam długość tablicy
    console.log("Tablica ma długość większą od 0");
}

const nr8 = Math.random() * 10;

if (nr8 > 5) {
    console.log("Liczba nr jest większa od 5");
}

const nr9 = Math.random() * 10;

if (nr9 >= 5) {
    console.log("Liczba nr jest większa lub równa 5");
} else {
    console.log("Liczba nr jest mniejsza od 5");
}

const nr10 = Math.random() * 10;

if (nr10 < 3) {
    console.log("Liczba jest mniejsza od 3");
} else if (nr10 <= 6) {
    console.log("Liczba jest mniejsza lub równa 6");
} else {
    console.log("Liczba jest większa od 6");
}

const name = "Marcin";

if (name === "Marcin") {
    console.log("Marciny są fajne");
} else if (name === "Ania") {
    console.log("Anie są fajne");
} else if (name === "Radosław") {
    console.log("Radki są fajne");
} else {
    console.log("Nie wiem kto jest fajny");
}

const x2 = 1;
const y2 = 2;

if (x2 > 0) {
    if (y2 > 0) {
        console.log("Jeżeli x > 0 i y > 0");
    }
}

//to samo co powyżej
if (x2 > 0 && y2 > 0) {
    console.log("Kod wykonywany jeżeli liczba > 0 i druga_liczba > 0");
}

const checkName = true;
const name2 = "Ala";

if (checkName) {
    if (name2 === "Ala") {
        console.log("Imię zaczyna się na A");
    }
    if (name2 === "Beata") {
        console.log("Imię zaczyna się na B");
    }
    if (name2 === "Monika") {
        console.log("Imię zaczyna się na M");
    }
}

const i = 1;

let number = "";
if (i > 0) {
    number = "dodatnia";
} else {
    number = "ujemna";
}

//to samo tylko w skróconej wersji
const number2 = (i > 0)? "dodatnia" : "ujemna";

const x4 = 23;
const isEven = (x4 % 2 === 0)? "parzysta" : "nieparzysta";
console.log(isEven); //"nieparzysta"

const age = 21;
const status = (age < 18) ? "jesteś za młody" : "zapraszamy na seans";
console.log(status); //"zapraszamy na seans"

const name3 = "Ola";
console.log( (name3 === "Ola") ? "Masz na imię Ola" : "Nie masz na imię Ola" ); //"Masz na imię Ola"

const nr11 = 10;
const answer = nr11 ? "yes" : "no";
console.log(answer);

const isMember = true;
console.log(`Koszt usługi to ${ (isMember ? "2.00" : "10.00") }zł`);

const animal = prompt("Wpisz jakiego masz zwierzaka");

switch (animal) {
    case "pies":
        console.log("Psy są najlepsze");
        break;
    case "kot":
        console.log("Koty są lepsze od psów");
        break;
    case "chomik":
        console.log("Każdy chomik jest super");
        break;
    default:
        console.log("Jakiś dziwny ten zwierzak");
}

const car = "bmw";

switch (car) {
    case "bmw" : 
        console.log("BMW");
        break;
    case "fiat" : 
        console.log("Fiat");
        break;
    case "audi" : 
        console.log("Audi");
        break;
}

//poniższe przyrównywanie nie zadziała
const nr12 = 5;
switch (true) {
    case (nr12 <= 5):
        console.log("Mało");
        break;
    case (nr12 > 5 && nr12 <= 10):
        console.log("Średnio");
        break;
    case (nr12 > 15) :
        console.log("Dużo");
        break;
}

console.log("Nie będę rozmawiał na lekcji Informatyki.");
console.log("Nie będę rozmawiał na lekcji Informatyki.");
console.log("Nie będę rozmawiał na lekcji Informatyki.");
console.log("Nie będę rozmawiał na lekcji Informatyki.");
console.log("Nie będę rozmawiał na lekcji Informatyki.");

//pętla od 0 do 99
for (let i=0; i<100; i++) {
    console.log("Nie będę rozmawiał na lekcji Informatyki.");
}

for (let i=0; i<10; i++) {
    console.log("Wykonanie pętli ", i);
}

let sum = 0;

for (let i=0; i<10; i++) {
    sum += i;
}

console.log(sum); //45

for (let i=10; i>0; i--) {
    console.log("Trwa odliczanie", i);
}

const a3 = 10;
const b3 = 20;

for (let i=1; i<=a3 && i<=b3; i++) {
    //bo oba muszą być prawdziwe
    console.log("Wypisze się tyle co ma mniejsza liczba", i);
}

let a4 = 10;
let i2 = 0;
for (; i2<10 ;) {
    console.log(i2);
    i2++;
}

for (let j=0; j<10; ) {
    console.log(j);
    j++;
}

let i3 = 1;

while (i3 <= 100) {
    console.log("Nie będę...");
    i3++;
}

let i4 = 0;

while (i4 < 0.5) {
    console.log(i4);
    i4 = Math.random();
}

console.log(i4);

let i5 = 0;

do {
   i5++;
   console.log(i5);
} while (i5 < 5); //wykona się minimum 1 raz

let i6 = 0;

do {
    i6++;
    console.log(i6);
} while (false); //warunek od początku nie spełniony ale i tak 1 raz się wykona

for (let i=0; i<10; i++) {

    console.log("%c Główna pętla nr: " + i, "color:red");

    for (let j=0; j<6; j++) {
        console.log("%c Pętla wewnętrzna nr: " + j, "color:blue");
    }
}

for (let i=0; i<10; i++) {
    for (let j=0; j<6; j++) {
        console.log(`Główna pętla: ${i}, pętla zagnieżdżona: ${j}`);
    }
}

for (let i=0; i<10; i++) {
    for (let i=0; i<6; i++) {
        //nie mam dostępu do zewnętrznego licznika...
        console.log(`Pętla zagnieżdżona: ${i}`);
    }
}

let str = "";

for (let j=0; j<6; j++) {
    str += "*";
}

console.log(str);

let str2 = "";

for (let i=0; i<4; i++) {
    for (let j=0; j<6; j++) {
        str2 += "*";
    }
    str2 += "\n";
}

console.log(str2);

let str3 = "";

for (let i=0; i<4; i++) {
    for (let j=0; j<6; j++) {
        if (i===0 || i===3 || j===0 || j===5) {
            str3 += "*";
        } else {
            str3 += "-";
        }
    }
    str3 += "\n";
}

console.log(str3);

let str4 = '';
let i7 = 0;

while (i7 <= 100) {
    str4 += i7;
    if (str4.length > 20) break;
    i7++;
}

console.log(str4);

const tab2 = ["Ala", "Monika", "Beata", "Karol"];

let userExist = false;

for (let i=0; i<tab2.length; i++) {
    if (tab2[i] === "Beata") {
        userExist = true;
        break; //dalej nie ma sensu sprawdzać
    }
}

//to samo uzyskamy o wiele lepiej za pomocą includes(), indexOf() czy findIndex()

let nr13 = -1;

for (let i=0; i<1000; i++) {
    nr13 = Math.random();
    if (nr13 >= 0.95) break;
}

console.log(nr13);

const tab3 = ["Ala", "Monika", "Beata", "Karol", "Alicja"];

for (let i=0; i<tab3.length; i++) {
    if (tab3[i] === "Karol") {
        continue; //Karola pomiń
    }
    console.log(tab3[i]);
}

let i8 = 0;
let sum2 = 0;

while (i8 < 5) {
    i8++;
    if (i8 === 3) continue;
    sum2 += i8;
    console.log(i8, `suma kolejnych liczb to ${sum2}`);
}

let i9 = 0;
let sum3 = 0;

while (i9 < 100) {
    i9++;
    if (i9 % 2 === 0) continue; //gdy i jest parzyste przerywamy daną iterację i przechodzimy do następnej
    sum3 += i9;
}
console.log(i9, `suma kolejnych liczb to ${sum3}`);

for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
    }
}

first:
for (let i=0; i<10; i++) {
    second:
    for (let j=0; j<10; j++) {
       
    }
}

loopA: for (let i=0; i<10; i++) {
    loopB: for (let j=0; j<10; j++) {

    }
}

const a5 = 100;
const b5 = 200;

 const nr14 = a5 * b5; //label która ma nazwę "$"

let nr15 = 20; //prosta liczba
let text2 = "To jest tekst"; //prosty łańcuch znaków
let bol = true; //logiczny - prawda/fałsz
let myNul = null; //nic
let x2z; //zmienna z nieokreśloną wartością

//prosty obiekt
const ob = {
    name : "Karol"
}
ob.name //pobieram właściwość name obiektu -> Karol

//to samo mogę zrobić dla prymitywnego tekstu
const txt2 = "Ala ma kota";
txt2.length //długość
txt2.toUpperCase(); //na duże litery

const ourText = "Przykładowy tekst"; //deklarujemy prostą stałą
ourText.length //js poza sceną tworzy obiekt String, zwróci jego długość i przywróci zmienną do typu prostego

const nr16 = 23;
nr16.toFixed(2); //znowu to samo działanie - numer został na chwilę zamieniony na obiekt  Number, została użyta metoda toFixed po czym przywrócono go do typu prostego

let a6 = 12;
let b6 = a6;

console.log(a6); //12
console.log(b6); //12

a6 = 15;

console.log(a6); //15
console.log(b6); //12

const a7 = [1, 2, 3];
const b7 = a7;

a7.push(4);

console.log(a7); //[1, 2, 3, 4]
console.log(b7); //[1, 2, 3, 4]

const a8 = { name : "kot" }
const b8 = a8;
const c3 = b8;
const d = c3;
d.name = "pies";

console.log(a8, b8, c3, d); //{ name : "pies" } { name : "pies" } { name : "pies" } { name : "pies" }

const tab4 = [1, 2, 3, 4]; //tablica - obiekt złożony
tab4[0] = "kot";
console.log(tab4); //["kot", 2, 3, 4]; //zmieniłem pierwszy klucz

//typ prosty
const txt3 = "Ala ma kota";
txt3[0] = "O"; //spróbuję zmienić pierwszą literę
console.log(txt3); //Ala ma kota

const txt4 = "ala";
const big = txt4.toUpperCase(); //funkcja toUpperCase() zwróciła tekst pisany dużymi literami

console.log(big); //"ALA"
console.log(txt4); //"ala"

const txt5 = "Ala ma kota";
const nr17 = 23;
const bool = true;
const tab5 = [1, 2, 3];
const ob2 = {}
console.log("Ala" + " ma kota");
[1, 2, 3].push(4);
console.log({name: "Piotr"});

const txt6 = new String("Ala ma kota");
const nr18 = new Number(23);
const bool2 = new Boolean(true);
const tab6 = new Array(1, 2, 3);
const ob3 = new Object();

const nr19 = 10;
const txt7 = "przykładowy tekst";
const arr = [1, 2, 3];
const ob4 = {};
const n = null;
//zmiennej zzz specjalnie nie zadeklarowałem

console.log( typeof nr19 ); //"number"
console.log( typeof txt7 ); //"string"
console.log( typeof arr ); //"object" hmm?
console.log( typeof ob4 ); //"object"
console.log( typeof n ); //"object" hmm?
console.log( typeof zzz ); //"undefined"

//sprawdzamy typy zmiennych
if (typeof nr19 === "number") 
if (typeof txt7 === "string") 
if (Array.isArray(arr)) 
if (typeof ob4 === "object") 
    if (n === null) 
if (typeof zzz === "undefined")

Array.isArray(arr); //true

const txt8 = new String("Ala ma kota");
const nr20 = new Number(23);
const bool3 = new Boolean(true);
const tab7 = new Array(1, 2, 3);
const ob5 = new Object();

console.log(typeof txt8); //"object"
console.log(typeof nr20); //"object"
console.log(typeof bool3); //"object"
console.log(typeof tab7); //"object"
console.log(typeof ob5); //"object"

const txt9 = "Ala"; //za pomocą literału
const txt10 = new String("Ala"); //za pomocą konstruktora

console.log(typeof txt9); //"string"
console.log(typeof txt10); //"object"

const txt11 = "Ala";
const txt12 = "Ala";
console.log(txt11 === txt12); //true

const txt13 = new String("Ala");
const txt14 = new String("Ala");
console.log(txt13 === txt14); //false

"1" + 2 //"12"
2 + "1" //"21"
2 + 3 + "4" //"54" ponieważ 2+3=5 czyli 5 + "4"
2 + 2 + 3 + "3" //"73"
2 + 2 + "3" + 3  //"433"
"2" * 3 //6
3 * "3" //9
"5" - 1 //4
8 / "2" //4
[1, 2, 3] + "kot" //1,2,3kot, bo tablica została skonwertowana na 1,2,3
23 + "" + false  //"23false"



"" + {}  //"[object Object]" bo obiekt został skonwertowany na zapis [object Object]
[1, 2, 3] + {}  //"1,2,3[object Object]"
{} + {}  //"[object Object][object Object]"
"23" + [1, 2, 3] + {} + !true  //"231,2,3[object Object]false"

null + null //0
null + true //1
null + true + "10" //"110"
23 + true  //24, bo true zostało skonwertowane na 1
true + true + true  //3
true + false  //1, bo false zostało skonwertowane na 0
23 + 2 * []  //23 - bo tablica została skonwertowana na "". 2 * "" daje w wyniku 2 * 0
true + {}  //"true[object Object]" - konwersja true na 1 i tak by nic nie dała, bo 1 do obiektu nie da się dodać. Dlatego zostało skonwertowane na "true"
null + true + {} //"1[object Object]"

const nr21 = 102;

console.log("" + nr21); //"102"
console.log(nr21.toString()); //"102"
console.log(String(nr21)); //"102"

String(102); //"102"
String(true); //"true"
String(null); //"null"
String(undefined); //"undefined"

console.log( Number("100")); //100
console.log( Number("50.5")); //50.5
console.log( Number("50px")); //NaN

console.log( parseInt("24px", 10)); //24
console.log( parseInt("26.5", 10)); //26
console.log( parseInt("100kot", 10)); //100
console.log( parseInt("Ala102", 10)); //NaN - zaczyna się od liter
console.log( parseInt("Hello", 10)); //NaN

console.log( "20px" + "20px"); //20px20px
console.log( parseInt("20px", 10) + parseInt("20px", 10) + "px"); //40px
console.log( parseInt("230") ); //230
console.log( parseInt("230abc") ); //230
console.log( parseInt("0x200") ); //512
console.log( parseInt("0x200", 10)); //0

const txt15 = "20"
console.log( +txt15 ); //20
console.log( txt15 * 1 ); //20
console.log( txt15 / 1 ); //20
console.log( ~~txt15 ); //20

const nr22 = 123.456789;

nr22.toFixed()      // "123"
nr22.toFixed(0)     // "123"
nr22.toFixed(1)     // "123.5"
nr22.toFixed(2)     // "123.46"
nr22.toFixed(3)     // "123.457"
nr22.toFixed(4)     // "123.4568"
nr22.toFixed(5)     // "123.45679"
nr22.toFixed(6)     // "123.456789"
nr22.toFixed(7)     // "123.4567890"
nr22.toFixed(8)     // "123.45678900"
nr22.toFixed(9)     // "123.456789000"
nr22.toFixed(10)    // "123.4567890000"
nr22.toFixed(11)    // "123.45678900000"
nr22.toPrecision()      // "123.456789"
nr22.toPrecision(1)     // "1e+2"
nr22.toPrecision(2)     // "1.2e+2"
nr22.toPrecision(3)     // "123"
nr22.toPrecision(4)     // "123.5"
nr22.toPrecision(5)     // "123.46"
nr22.toPrecision(6)     // "123.457"
nr22.toPrecision(7)     // "123.4568"
nr22.toPrecision(8)     // "123.45679"
nr22.toPrecision(9)     // "123.456789"
nr22.toPrecision(10)    // "123.4567890"
nr22.toPrecision(11)    // "123.45678900"

Boolean(102); //true
Boolean("kot"); //true
Boolean(false); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(0); //false
Boolean(NaN); //false
Boolean(""); //false
Boolean(document.all); //false

const nr23 = 102;
const nr24 = 1.25;
const nr25 = 1e6; //1 * 1000000
const nr26 = 2e5; //2 * 100000
const nr27 = 1.3e4; //1.3 * 10000
const nr28 = 1e-5; //5 zer na lewo od liczby => 0.00001
const nr29 = 2e-3; //3 zera na lewo 0.002
const nr30 = 2.1e-4; //4 zera na lewo 0.00021

//szesnastkowy - znany z kolorów CSS
console.log(0xFF); //255
console.log(0x66); //102

//ósemkowy
const nr31 = 0o377; //255

//dwójkowy
const nr32 = 0b11111111; //255

console.log(0xFF === 0o377, 0o377 === 0b11111111, 0xFF === 0b11111111); //true, true, true

const nr33 = 150;
console.log(nr33.toString(16)); //"96"
console.log(nr33.toString(10)); //"150"
console.log(nr33.toString(2)); //"10010110"
console.log(nr33.toString()); //"150" - domyślnie dziesiętny

console.log( 0.1 + 0.2 ); //0.30000000000000004
console.log( 0.1.toFixed(20) ); // 0.10000000000000000555
console.log( 9999999999999999 ); //10000000000000000 - podobna rzecz, ale w drugą stronę

const var1 = 56.5;
const var2 = 74.3;

Math.min(var1, var2) //56.5
Math.max(var1, var2) //74.3
Math.max(1,3,6,2) //6

Math.abs(-1) //1

Math.round(var1) //57
Math.round(20.52) //21
Math.round(-10.21) //-10
Math.round(-11.82) //-12

Math.floor(var1) //56
Math.floor(20.52) //20
Math.floor(-10.21) //-11
Math.floor(-11.82) //-12

Math.ceil(var1) //57
Math.ceil(20.52) //21
Math.ceil(-10.21) //-10
Math.ceil(-11.82) //-11

const min = 3;
const max = 7;

const result2 =  Math.floor(Math.random() * (max-min+1) + min);

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

console.log( randomColor() );
console.log( randomColor() );
console.log( randomColor() );

const color =  "#" + Math.random().toString(16).substr(2,6);

function randomColor2() {
    return `hsl(${Math.random() * 360}, 100%, 70%)`;
}

const color2 = randomColor2();
console.log(color2);

const text3 = "Ala ma kota, a kot ma Ale."; //podwójne cudzysłowy

//lub

const text4 = 'Ala ma kota'; //pojedyncze apostrofy

//dzięki temu że zacząłem string od pojedynczych apostrofów
//bez problemu pisałem w środku cudzysłowy
const img = '<div class="element" data-text="test">';

//no to w drugą stronę
const txt16 = "It's a big year";

//ale w sumie nie ma to aż takiego znaczenia, bo zawsze możemy użyć znaku ucieczki
const img2 = "<div class=\"element\" data-text=\"test\">";
const txt17 = 'It\'s a big year';

const text5 = "Ala ma kota";

//poprzez operator przypisania
let text6 = "Stoi na stacji lokomotywa,<br>";
text6 += "Ciężka, ogromna i pot z niej spływa:<br>";
text6 += "Tłusta oliwa.";

//poprzez dodawanie części tekstu
let text7 = "Stoi na stacji lokomotywa,<br>"
+ "Ciężka, ogromna i pot z niej spływa:<br>"
+ "Tłusta oliwa."

//Poprzez zastosowanie znaku backslash na końcu linii
let text8 = "Stoi na stacji lokomotywa,<br>\
Ciężka, ogromna i pot z niej spływa:<br>\
Tłusta oliwa.\
"

//Najlepsza metoda - użycie template strings
let text9 = `Stoi na stacji lokomotywa,<br>
Ciężka, ogromna i pot z niej spływa:<br>
Tłusta oliwa.`

const age2 = 10;

const text10 = "Ten pies ma " + age2 + " lat";
const text11 = 'Ten kot ma ' + age2 + ' lat';
const text12 = `Ten chomik ma ${age2} lat`;

const a9 = 112;
const b9 = 120;

const text13 = "Cena produktu A to " + a9 + "zł, cena produktu B to " + b9 + "zł, a suma to " + (a9+b9)+ "zł";
const text14 = `Cena produktu A to ${a9}zł, cena produktu B to ${b9}zł, a suma to ${a9+b9}zł`;

const text15 = "Ala";
text15.length; //3

"Koty i psy są fajne".length //19

const text16 = "Ala ma kota, a kot ma Ale";

console.log(text16.charAt(0)); //A
console.log(text16.charAt(4)); //m

console.log(text16[0]); //A
console.log(text16[4]); //m

console.log(text16.charAt(text16.length-1)); //e
console.log(text16[text16.length-1]); //e

const txt18 = "Ala ma kota";
txt18[0] = "E";
console.log(txt18); //"Ala ma kota"

const txt19 = "Ala ma kota";
const tab8 = [...txt19];
tab8[0] = "E";
const newTxt = tab8.join("");
console.log(newTxt); //"Ela ma kota"

const text17 = "Ala ma kota";

console.log(text17.toUpperCase()); //"ALA MA KOTA"
console.log(text17.toLowerCase()); //"ala ma kota"

"Ala ma kota".indexOf("kot"); //7

const text18 = "Ala ma kota";

//sprawdzamy czy ciąg "psa" istnieje
if (text18.indexOf("psa") !== -1) {
    console.log("Ala ma kota");
} else {
    console.log("Ala ma psa");
}

"Ala ma kota i tak już jest".lastIndexOf("a"); //15

const url = "http://nazwastrony.pl/przykladowaNazwaPliku.php";

//korzystając z funkcji opisanych poniżej tniemy url na części
console.log( url.slice(url.lastIndexOf(".") + 1) ); //"php"
console.log( url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf(".")) ); //"przykladowaNazwaPliku"

//można też ciut inaczej
const file = url.slice(url.lastIndexOf("/") + 1); //"przykladowaNazwaPliku.php"
const part = file.split("."); //dzielimy nazwę na części (otrzymujemy tablicę)
console.log( part[1] ); //"php"
console.log( part[0] ); //"przykladowaNazwaPliku"

const text19 = "Ala ma kota";

if (text19.includes("psa")) {
    console.log("Ala ma psa" );
} else {
    console.log("Ala ma kota" );
}

const text20 = "Ala ma kota";

text20.startsWith("Ala"); //true
text20.startsWith("Ola"); //false

text20.endsWith("kota"); //true
text20.endsWith("psa"); //false

const text21 = "Ala ma kota";

console.log(text21.substring(0, 3)); //"Ala"
console.log(text21.substring(4)); //"ma kota"
console.log("Ala ma kota".substring(6, 4)); //"ma"

const txt20 = "Ala ma kota";

const txt21 = txt20.slice(0,3);
console.log(txt21); //"Ala"

const txt22 = txt20.slice(1,5);
console.log(txt22); //"la m"

const txt23 = txt20.slice(4,6);
console.log(txt23); //"ma"

const txt24 = txt20.slice(4);
console.log(txt24); //"ma kota"

const txt25 = txt20.slice(-4);
console.log("Ala już nie ma " + txt25 + ", bo kocur jej zwiał..."); //Ala już nie ma kota, bo kocur jej zwiał...

const text22 = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("
const parts2 = text22.split(", ");

parts2.forEach(function(letter) {
    console.log(letter.toUpperCase());
});

const text23 = "Ala ma kota"
const textNew2 = text23.replace("kota", "psa");

console.log(textNew2); //"Ala ma psa"

const text24 = "Ola lubi koty, Ola lubi psy";
const textNew3 = text24.replace("Ola", "Ela");
console.log(textNew3); //"Ela lubi koty, Ola lubi psy"

const text25 = "Ola lubi koty, Ola lubi psy";
const textNew4 = text25.replace(/Ola/g, "Ela"); //g jak globalnie w całym tekście
console.log(textNew4); //"Ela lubi koty, Ela lubi psy"

const text26 = "Ola lubi koty, Ola lubi psy";
const textNew5 = text26.replaceAll("Ola", "Ela");
console.log(textNew5); //"Ela lubi koty, Ela lubi psy"

const text27 = "kot";
console.log(text27.repeat(3)); //kotkotkot
"-".repeat(10); //----------

let str5 = "";
for (let i=1; i<=3; i++) {
    str5 += "kot";
}
console.log(str5); //kotkotkot

const txt26 = "abecadło";

for (let i=0; i<txt26.length; i++) {
    console.log(txt26[i]);
}

for (const el of txt26) {
    console.log(el);
}

const txt27 = "abecadło";

[...txt27].forEach(function(el) {
    console.log(el);
});

txt27.split("").forEach(function(el) {
    console.log(el);
});

"a".length //1
"🐶".length //2 ????

console.log("\u00BC"); //¼
console.log("\u{BC}"); //¼
console.log("\xBCb"); //¼

console.log("\u00A9"); //©
console.log("\u{A9}"); //©
console.log("\xA9"); //©
console.log("\u{1F691}"); //🚑
console.log("\u{1F4A9}"); //💩
console.log("\u{1F4A9}"); //💩
console.log("\uD83D\uDCA9"); //💩

console.log("\u{1F691}"); //🚑
console.log("\uD83D\uDE91"); //🚑

"👩‍❤️‍👩" === "👩" + "❤️‍" + "👩"
console.log("👩‍❤️‍👩");