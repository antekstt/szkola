function sprawdzHaslo() {
    // Hasło ustawione w skrypcie
    const haslo = "haslo";

    // Pobierz hasło z pola tekstowego
    const wpisaneHaslo = document.getElementById("haslo").value;

    // Sprawdź, czy hasło jest prawidłowe
    if (wpisaneHaslo === haslo) {
        alert("Hasło poprawne! Witamy na stronie.");
        // Właściwa zawartość strony
        document.getElementById("zawartosc").style.display = "block";
        document.getElementById("formularz").style.display = "none";
    } else {
        alert("Nieprawidłowe hasło! Spróbuj ponownie.");
    }
}