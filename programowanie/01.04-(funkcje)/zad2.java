import java.util.Scanner;
public class zad2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Podaj odleglosc w milach morskich:");
        double mile = scan.nextDouble();
        System.out.println(mile + " mile morskie to "+ calc(mile)+" km");
        scan.close();
    }
    public static double calc(double mile) {
        return mile * 1.852;
    }

}
