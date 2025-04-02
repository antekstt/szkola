import java.util.Scanner;
public class zad3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int wiek;
        System.out.println("Podaj swoj wiek:");
        wiek = scan.nextInt();
        System.out.println("Twój wiek w miesiącach: "+ calc(wiek));
        scan.close();
    }
    public static int calc(int wiek) {
        return wiek * 12;
    }
}
