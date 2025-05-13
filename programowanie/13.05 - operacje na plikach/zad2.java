import java.io.*;
import java.util.*;

public class zad2 {
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

        // Zadanie 1: Największa liczba parzysta
        int maxEven = numbers.stream().filter(n -> n % 2 == 0).max(Integer::compare).orElse(-1);

        // Zadanie 2: Liczby palindromiczne
        List<Integer> palindromes = numbers.stream()
                .filter(zad2::isPalindrome)
                .toList();

        // Zadanie 3: Liczby z sumą cyfr > 30 i suma wszystkich cyfr
        List<Integer> sumGreaterThan30 = new ArrayList<>();
        int totalDigitSum = 0;
        for (int number : numbers) {
            int digitSum = sumOfDigits(number);
            totalDigitSum += digitSum;
            if (digitSum > 30) {
                sumGreaterThan30.add(number);
            }
        }

        // Zapis wyników do pliku wyniki5.txt
        try (PrintWriter writer = new PrintWriter("wyniki5.txt")) {
            writer.println("Zadanie 1:");
            writer.println("Największa liczba parzysta: " + maxEven);

            writer.println("\nZadanie 2:");
            writer.println("Liczby palindromiczne:");
            for (int palindrome : palindromes) {
                writer.println(palindrome);
            }

            writer.println("\nZadanie 3:");
            writer.println("Liczby z sumą cyfr > 30:");
            for (int number : sumGreaterThan30) {
                writer.println(number);
            }
            writer.println("Suma wszystkich cyfr: " + totalDigitSum);
        } catch (IOException e) {
            System.out.println("Błąd podczas zapisu do pliku wyniki5.txt.");
        }
    }

    // Metoda sprawdzająca, czy liczba jest palindromiczna
    private static boolean isPalindrome(int number) {
        String str = String.valueOf(number);
        return str.equals(new StringBuilder(str).reverse().toString());
    }

    // Metoda obliczająca sumę cyfr liczby
    private static int sumOfDigits(int number) {
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number /= 10;
        }
        return sum;
    }
}
