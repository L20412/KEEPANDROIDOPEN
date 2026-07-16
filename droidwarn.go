package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"time"
)

func droidwarn(interactive bool, dependency bool) {
	yellow := "\033[93m"
	bold := "\033[1m"
	end := "\033[0m"
	confirmationPhrase := "Yes, I understand, Keep Android Open!"

	msg := fmt.Sprintf("\n%s%s🚨 Tech Freedom Alert:%s Google is centralizing Android "+
		"app distribution via identity verification starting late 2026, threatening "+
		"open-source ecosystems like F-Droid. Even if this project isn't an Android app, "+
		"corporate gatekeeping affects all software freedom.\n"+
		"👉 Learn more & take action: %shttps://keepandroidopen.org%s\n\n", yellow, bold, end, bold, end)

	fmt.Fprint(os.Stderr, msg)

	if interactive {
		fmt.Printf("Do you understand? (type \"%s\" to respond \"Yes\", any other answer is a \"No\")\n>>> ", confirmationPhrase)
		reader := bufio.NewReader(os.Stdin)
		input, _ := reader.ReadString('\n')
		input = strings.TrimSpace(input) // Remove newline characters

		if input == confirmationPhrase {
			return
		} else {
			fmt.Fprintln(os.Stderr, "Please understand the warning and try again, we do not allow people to run this without understanding it.")
			time.Sleep(3 * time.Second)
			os.Exit(1)
		}
	} else if dependency {
		fmt.Fprintln(os.Stderr, "Since this is a dependency, we won't give you any friction using this dependency/module.")
	}
}

func main() {
	droidwarn(true, false)
}
