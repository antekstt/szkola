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

        // c) Liczenie elementów kończących się cyfrą 3 lub 5
        int konczy3lub5 = 0;
        for (int i = 0; i < n; i++) {
            int lastDigit = Math.abs(tab[i] % 10);
            if (lastDigit == 3 || lastDigit == 5) {
                konczy3lub5++;
            }
        }
        System.out.println("Liczba elementów kończących się cyfrą 3 lub 5: " + konczy3lub5);

        int suma=0;
        double sr=0;
        for(int i = 0; i < n; i++)
        {
            if(tab[i] > 0)
            {
                suma=suma+tab[i];
                sr++;
            }
        }
        sr=suma/sr;
        System.out.println("Średnia arytmetyczna liczb dodatnich: " + sr);

        int dod=0;
        for(int i = 0; i < n; i++)
        {
            if(tab[i] > 0)
            {
                dod++;
            }
        }
        System.out.println("Ilość liczb dodatnich: " + dod);
    }
}