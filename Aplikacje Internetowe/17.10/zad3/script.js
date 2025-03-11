let a = parseFloat(prompt("Podaj liczbę a (nie -6):"));
let b = parseFloat(prompt("Podaj liczbę b (nie 4): "));

if (b === 4 || a === -6 )
{
    document.getElementById("wynik1").innerText="Nie dzielimy przez 0";
}
else
{
    y=a+6;
    z=b-4;
    x=y/z;
    document.getElementById("wynik1").innerText = `Wynik równania: (${a}+6) / (${b}-4) = ${x}`;
}