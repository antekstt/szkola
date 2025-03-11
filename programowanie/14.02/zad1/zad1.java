package zad1;
import java.util.Scanner;

public class Zad1 {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        Scanner wzrost = new Scanner(System.in);
        System.out.println("Podaj wzrost");
        int wzrost1 = wzrost.nextInt();

        if(wzrost1 < 150) System.out.println("Ale karzel");
        else if(wzrost1 >=150 & wzrost1 < 160) System.out.println("Bardzo niski");
        else if(wzrost1 >=160 & wzrost1 < 170) System.out.println("Niski");
        else if(wzrost1 >=170 & wzrost1 < 180) System.out.println("Średni");
        else if(wzrost1 >=180 & wzrost1 < 190) System.out.println("Wysoki");
        else if(wzrost1 >=190 & wzrost1 < 220) System.out.println("Bardzo wysoki");
    }
}