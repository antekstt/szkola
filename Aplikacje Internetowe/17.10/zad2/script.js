let a = parseFloat(prompt("Podaj liczbę a: "));
let b = parseFloat(prompt("Podaj liczbę b: "));
let c = parseFloat(prompt("Podaj liczbę a: "));
let d = parseFloat(prompt("Podaj liczbę b: "));

if (b === 0 || a === 0 || c === 0 || d === 0)
{
    document.getElementById("wynik1").innerText="Nie dzielimy przez 0";
}
else
{
    let x=a/b;
    let y=c/d;
    let z=x+y;
    document.getElementById("wynik1").innerText = `Wynik równania: ${a} / ${b} + ${c} / ${d} = ${z}`;
}