import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> owoce = new ArrayList<>();
        owoce.add("Jabłko");
        owoce.add("Banan");
        owoce.add("Wiśnia");

        for(String owoc:owoce){
            System.out.println("Owoc: "+owoc);
        }
    }
}
