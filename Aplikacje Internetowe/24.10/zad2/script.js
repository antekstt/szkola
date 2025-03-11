let a = parseFloat(prompt("Podaj liczbę a: "));
let b = parseFloat(prompt("Podaj liczbę b: "));

if (b === 0 || a === 0)
{
    document.getElementById("wynik3").innerText="Nie dzielimy przez 0";
}

document.getElementById("wynik1").innerText = `Wynik działania ${a} + ${b} = ${a + b}`;
document.getElementById("wynik2").innerText = `Wynik działania ${a} - ${b} = ${a - b}`;
document.getElementById("wynik3").innerText = `Wynik działania ${a} * ${b} = ${a * b}`;
document.getElementById("wynik4").innerText = `Wynik działania ${a} / ${b} = ${a / b}`;

//1 - dodawanie
//2 - odejmowanie
//3 - mnożenie
//4 - dzielenie