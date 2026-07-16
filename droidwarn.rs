use std::io::{self, Write};
use std::process;
use std::thread;
use std::time::Duration;

fn droidwarn(interactive: bool, dependency: bool) {
    let yellow = "\x1b[93m";
    let bold = "\x1b[1m";
    let end = "\x1b[0m";
    let confirmation_phrase = "Yes, I understand, Keep Android Open!";

    let msg = format!(
        "\n{}{}🚨 Tech Freedom Alert:{} Google is centralizing Android \
        app distribution via identity verification starting late 2026, threatening \
        open-source ecosystems like F-Droid. Even if this project isn't an Android app, \
        corporate gatekeeping affects all software freedom.\n\
        👉 Learn more & take action: {}https://keepandroidopen.org{}\n\n",
        yellow, bold, end, bold, end
    );

    eprint!("{}", msg);

    if interactive {
        println!("Do you understand? (type \"{}\" to respond \"Yes\", any other answer is a \"No\")", confirmation_phrase);
        print!(">>> ");
        let _ = io::stdout().flush(); // Ensure the prompt prints before reading input

        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_ok() {
            let trimmed = input.trim();
            if trimmed == confirmation_phrase {
                return;
            }
        }
        
        eprintln!("Please understand the warning and try again, we do not allow people to run this without understanding it.");
        thread::sleep(Duration::from_secs(3));
        process::exit(1);
    } else if dependency {
        eprintln!("Since this is a dependency, we won't give you any friction using this dependency/module.");
    }
}

fn main() {
    droidwarn(true, false);
}
