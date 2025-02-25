package zad2;
import java.util.Scanner;

public class zad2 {
    public static void main(String[] args) {
        Scanner d = new Scanner(System.in);

        System.out.println("Podaj liczbę a (0;20] (a > b):");
        int a = d.nextInt();

        System.out.println("Podaj liczbę b:");
        int b = d.nextInt();

        System.out.println("Podaj liczbę c:");
        int c = d.nextInt();

        if ((a > 0 && a <= 20) && (a > b) && (b > 10 || c == 0)) {
            System.out.println("Warunek spełniony");
        } else {
            System.out.println("Warunek niespełniony");
        }

        System.out.println("Podane liczby: " + a + " " + b + " " + c);
    }
}
