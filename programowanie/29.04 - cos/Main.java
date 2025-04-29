public class Main {
    public static void main(String[] args) {
        int numer=123;
        int suma=0;

        while(numer>=0)
        {
            suma+=numer%10;
            numer = numer - numer%10;
            System.out.println(numer);
        }

        System.out.println(suma);
    }
}