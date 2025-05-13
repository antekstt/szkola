import java.io.*;
import java.util.*;

public class zad1 {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        try (Scanner scanner = new Scanner(new File("liczby.txt"))) {
            while (scanner.hasNextInt()) {
                numbers.add(scanner.nextInt());
            }
        } catch (FileNotFoundException e) {
            System.out.println("Plik liczby.txt nie został znaleziony.");
            return;
        }

        int min = Collections.min(numbers);
        long evenCount = numbers.stream().filter(n -> n % 2 == 0).count();
        List<Integer> oddNumbers = numbers.stream().filter(n -> n % 2 != 0).toList();
        int maxEven = numbers.stream().filter(n -> n % 2 == 0).max(Integer::compare).orElse(-1);

        try (PrintWriter writer = new PrintWriter("wyniki.txt")) {
            writer.println("Najmniejsza liczba: " + min);
            writer.println("Ilość liczb parzystych: " + evenCount);
            writer.println("Największa liczba parzysta: " + maxEven);
            writer.println("Liczby nieparzyste:");
            for (int odd : oddNumbers) {
                writer.println(odd);
            }
        } catch (IOException e) {
            System.out.println("Błąd podczas zapisu do pliku wyniki.txt.");
        }
    }
}