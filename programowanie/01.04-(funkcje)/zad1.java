//program wyswietlajacy imie i nazwisko z funkcją
public class zad1 {
    public static void main(String[] args){
        String imie="Antoni";
        String nazwisko="Styczeń";
        System.out.println(imie(imie, nazwisko));
    }

    public static String imie(String imie, String nazwisko) {
        return "Imie: " + imie + " Nazwisko: " + nazwisko;
    }
}