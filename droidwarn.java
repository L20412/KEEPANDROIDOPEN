/** 

I mainly use this to target command line based projects
You are free to make it GUI based manually

*/

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class droidwarn {
    public static void droidwarn(boolean interactive, boolean dependency) {
        String yellow = "\033[93m";
        String bold = "\033[1m";
        String end = "\033[0m";
        String confirmationPhrase = "Yes, I understand, Keep Android Open!";

        String msg = "\n" + yellow + bold + "🚨 Tech Freedom Alert:" + end + " Google is centralizing Android " +
                "app distribution via identity verification starting late 2026, threatening " +
                "open-source ecosystems like F-Droid. Even if this project isn't an Android app, " +
                "corporate gatekeeping affects all software freedom.\n" +
                "👉 Learn more & take action: " + bold + "https://keepandroidopen.org" + end + "\n";

        System.err.print(msg);

        if (interactive) {
            System.out.println("\nDo you understand? (type \"" + confirmationPhrase + "\" to respond \"Yes\", any other answer is a \"No\")");
            System.out.print(">>> ");
            try {
                BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
                String input = reader.readLine();
                if (input != null && input.trim().equals(confirmationPhrase)) {
                    return;
                } else {
                    System.err.println("Please understand the warning and try again, we do not allow people to run this without understanding it.");
                    Thread.sleep(3000);
                    System.exit(1);
                }
            } catch (Exception e) {
                System.exit(1);
            }
        } else if (dependency) {
            System.err.println("Since this is a dependency, we won't give you any friction using this dependency/module.");
        }
    }

    public static void main(String[] args) {
        droidwarn(true, false);
    }
}
