// myscript.js
(function() {
    // Get the current script element
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];
    
    // Extract the id parameter from the src URL
    const src = currentScript.src;
    const urlParams = new URLSearchParams(src.split('?')[1]);
    const idValue = urlParams.get('id');
    
    // Find the target element
    const targetElement = document.getElementById(idValue);
    
    if (targetElement) {
        // Add HTML content using innerHTML
        targetElement.innerHTML = `
<h3>Google just announced that starting in 2026/2027, they will force all Android app developers to submit personal identity details directly to them—even for apps outside the Play Store. This destroys developer privacy and independent ecosystems like F-Droid. I don't host APKs here, but corporate gatekeeping affects us all, so I’m spreading the word anyway. <a href="//ricktree.free.nf/keepandroidopen/">Learn more...</a>
</h3>`;
        
        // OR add more complex HTML:
        // targetElement.innerHTML = `
        //     <div class="container">
        //         <p>${idValue}</p>
        //         <span>Additional text</span>
        //     </div>
        // `;
    } else {
        console.error(`Element with ID "${idValue}" not found`);
    }
})();
