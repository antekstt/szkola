import java.util.Scanner;
public class zad4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Podaj temperature w celcjuszach:");
        double tempC = scan.nextDouble();
        System.out.println(tempC + " stopni C to "+ calc(tempC)+" stopni F");
        scan.close();
    }
    public static double calc(double tempC) {
        return tempC * 1.8 + 32;
    }
}
