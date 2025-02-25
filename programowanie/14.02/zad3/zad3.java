package zad3;
import java.util.Scanner;
public class zad3
{
    public static void main(String[] args)
    {
        Scanner d = new Scanner(System.in);
        int wiek;
        System.out.println("Podaj swoj wiek:");
        wiek=d.nextInt();
        if(wiek>=18) System.out.println("Jestes pelnoletni");
        else System.out.println("Nie jestes pelnoletni");
    }
}