import java.util.Scanner;
public class zad5 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Podaj a");
        double a = scan.nextDouble();
        System.out.println("Podaj b");
        double b = scan.nextDouble();
        System.out.println("Jakie dzialanie chcesz wykonac: + - * /");
        String d = scan.next();
        if(d == "+") {
            System.out.println(sum(a, b));
        } else if(d == "-") {
            System.out.println(sub(a, b));
        } else if(d == "*") {
            System.out.println(mul(a, b));
        } else if(d == "/") {
            System.out.println(div(a, b));
        } else {
            System.out.println("Nieznane dzialanie");
        }
        scan.close();
    }
}
//zrobic funkcje