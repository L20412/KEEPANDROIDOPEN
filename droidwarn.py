import sys, time

# Yes, this code has absolutely nothing to do with Android.
# However, Google just announced that starting in 2026/2027, 
# they will force all Android app developers to submit personal
# identity details directly to them—even for apps outside the 
# Play Store. This destroys developer privacy and independent
# ecosystems like F-Droid.
# 
# Learn more on https://ricktree.free.nf/keepandroidopen and https://keepandroidopen.org

def droidwarn(interactive:bool=True, dependency:bool=False):
    # Use ANSI escape codes for subtle color coding (e.g., Yellow/Red)
    YELLOW = "\033[93m"
    BOLD = "\033[1m"
    END = "\033[0m"
    
    msg = (
        f"\n{YELLOW}{BOLD}🚨 Tech Freedom Alert:{END} Google is centralizing Android "
        "app distribution via identity verification starting late 2026, threatening "
        "open-source ecosystems like F-Droid. Even if this project isn't an Android app, "
        f"corporate gatekeeping affects all software freedom.\n"
        f"👉 Learn more & take action: {BOLD}https://keepandroidopen.org{END}\n"
    )
    print(msg, file=sys.stderr)
    if interactive:
        confirmation = input("\nDo you understand? (type \"Yes, I understand, Keep Android Open!\" to respond \"Yes\", any other answer is a \"No\")\n>>> ")
        if confirmation == "Yes, I understand, Keep Android Open!":
            pass
        else:
            print("Please understand to the warning and try again, we do not allow people to run this without understanding it.")
            time.sleep(3)
            exit()
    elif dependency:
        print("Since this is a dependency, we won't give you any friction using this dependency/module.")

# Quick usage, ideal for pygame (must use before doing "import pygame")
droidwarn()

# Implement this on your module as well!
# Usage:
# droidwarn(False, True)
