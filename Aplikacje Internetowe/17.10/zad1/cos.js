    let a = parseFloat(prompt("Podaj liczbę a: "));
    let b = parseFloat(prompt("Podaj liczbę b: "));

    if (b === 0 || a === 0)
    {
        document.getElementById("wynik1").innerText="Nie dzielimy przez 0";
    }

    else
    {
        let x=a/b;
        document.getElementBy("wynik1").innerText = `Wynik równania ${a} / ${b} = ${x}`;
    }