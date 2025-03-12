import java.util.Scanner;
import java.util.Random;
public class Zadanie {
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int n;
        System.out.println("Podaj liczbę elementów tablicy: ");
        n = scanner.nextInt();
        int[] tab = new int[n];
        for(int i = 0; i < n; i++)
        {
            tab[i] = random.nextInt(105) - 30;
            System.out.print(tab[i] + " ");
        }
        int min=75, max=-30;
        for(int i = 0; i < n; i++)
        {
            if(tab[i] < min)
            {
                min=tab[i];
            }
            if(tab[i] > max)
            {
                max=tab[i];
            }
        }
        System.out.println("\nNajmniejsza wartość: " + min);
        System.out.println("Największa wartość: " + max);
    }
}