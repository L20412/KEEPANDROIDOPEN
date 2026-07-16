/**
 * DROIDWARN: Help Keep Android Open! (https://keepandroidopen.org)
 * 
 * Yes, this code has absolutely nothing to do with Android.
 * However, Google is forcing Android app developers to submit personal
 * identity details directly to them—even for apps outside the Play Store. 
 * This destroys developer privacy and independent ecosystems like F-Droid.
 */

const CONFIRMATION_PHRASE = "Yes, I understand, Keep Android Open!";

// Helper to check the environment
const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

function droidwarn(interactive = true, dependency = false) {
    if (isNode) {
        runNodeWarning(interactive, dependency);
    } else if (isBrowser) {
        runBrowserWarning(interactive, dependency);
    }
}

// ==========================================
// 💻 NODE.JS TERMINAL IMPLEMENTATION
// ==========================================
function runNodeWarning(interactive, dependency) {
    const YELLOW = "\x1b[93m";
    const BOLD = "\x1b[1m";
    const END = "\x1b[0m";

    const msg = `\n${YELLOW}${BOLD}🚨 Tech Freedom Alert:${END} Google is centralizing Android ` +
        "app distribution via identity verification starting late 2026, threatening " +
        "open-source ecosystems like F-Droid. Even if this project isn't an Android app, " +
        `corporate gatekeeping affects all software freedom.\n` +
        `👉 Learn more & take action: ${BOLD}https://keepandroidopen.org${END}\n`;

    console.error(msg);

    if (interactive) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nDo you understand? (type "${CONFIRMATION_PHRASE}" to respond "Yes", any other answer is a "No")\n>>> `, (answer) => {
            readline.close();
            if (answer === CONFIRMATION_PHRASE) {
                // Let them proceed
                console.log("Thank you for standing up for open ecosystems!\n");
            } else {
                console.error("Please understand the warning and try again, we do not allow people to run this without understanding it.");
                setTimeout(() => {
                    process.exit(1);
                }, 3000); // 3-second penalty loop
            }
        });
    } else if (dependency) {
        console.error("Since this is a dependency, we won't give you any friction using this dependency/module.");
    }
}

// ==========================================
// 🌐 BROWSER/HTML IMPLEMENTATION
// ==========================================
function runBrowserWarning(interactive, dependency) {
    if (dependency) {
        console.warn(
            "🚨 Tech Freedom Alert: Google is centralizing Android app distribution starting late 2026, threatening open-source ecosystems like F-Droid. Learn more: https://keepandroidopen.org"
        );
        return;
    }

    if (!interactive) return;

    // Create a full-screen blocking overlay using pure JS DOM manipulation
    const overlay = document.createElement('div');
    overlay.id = 'droidwarn-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#111';
    overlay.style.color = '#fff';
    overlay.style.zIndex = '999999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.fontFamily = 'sans-serif';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';
    overlay.style.textAlign = 'center';

    overlay.innerHTML = `
        <div style="max-width: 600px; line-height: 1.6;">
            <h1 style="color: #ffcc00; font-size: 2.5rem; margin-bottom: 20px;">🚨 Tech Freedom Alert</h1>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">
                Google is centralizing Android app distribution via identity verification starting late 2026, 
                threatening open-source ecosystems like F-Droid. Even if this project isn't an Android app, 
                corporate gatekeeping affects all software freedom.
            </p>
            <p style="margin-bottom: 30px;">
                👉 Learn more & take action: <a href="https://keepandroidopen.org" target="_blank" style="color: #66b2ff; text-decoration: underline;">keepandroidopen.org</a>
            </p>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 10px; font-weight: bold;">
                    Type exactly: <span style="color: #ffcc00; background: #222; padding: 2px 6px; border-radius: 4px; font-family: monospace;">${CONFIRMATION_PHRASE}</span>
                </label>
                <input type="text" id="droidwarn-input" autocomplete="off" placeholder="Type response here..." style="width: 100%; padding: 12px; font-size: 1rem; border: 2px solid #555; border-radius: 6px; background: #222; color: #fff; text-align: center; box-sizing: border-box;" />
            </div>
            
            <button id="droidwarn-submit" style="background: #ffcc00; color: #000; border: none; padding: 12px 30px; font-size: 1rem; font-weight: bold; border-radius: 6px; cursor: pointer; width: 100%;">
                I Understand & Wish to Proceed
            </button>
            <p id="droidwarn-error" style="color: #ff4444; margin-top: 15px; min-height: 24px; font-weight: bold;"></p>
        </div>
    `;

    // Wait until document body is available, then inject
    if (document.body) {
        document.body.appendChild(overlay);
        setupBrowserEvents();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(overlay);
            setupBrowserEvents();
        });
    }

    function setupBrowserEvents() {
        const inputField = document.getElementById('droidwarn-input');
        const submitBtn = document.getElementById('droidwarn-submit');
        const errorText = document.getElementById('droidwarn-error');

        // Prevent users from easily tabbing or clicking out of the modal
        document.body.style.overflow = 'hidden';

        function checkSubmission() {
            if (inputField.value === CONFIRMATION_PHRASE) {
                // Remove overlay and restore page scrolling
                overlay.remove();
                document.body.style.overflow = '';
            } else {
                errorText.innerText = "Please type the phrase exactly (it is case-sensitive!)";
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.5';
                
                // 3-second UI penalty lock
                setTimeout(() => {
                    errorText.innerText = "";
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 3000);
            }
        }

        submitBtn.addEventListener('click', checkSubmission);
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !submitBtn.disabled) {
                checkSubmission();
            }
        });
    }
}

// Run the script instantly
droidwarn(true, false);
