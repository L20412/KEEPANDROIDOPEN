# KEEPANDROIDOPEN

<h1>Keep Android Open</h1>
<h3>What's going on?</h3>
<p>In August 2025, Google <a href="https://developer.android.com/developer-verification">announced</a> that starting <b>September 30, 2026</b>, every Android app developer must register centrally with Google before their software can be installed on a GMS-certified Android device. <strong>Not just Play Store apps: all apps</strong>. This mandate will pilot first in Brazil, Indonesia, Singapore, and Thailand in late 2026, before expanding globally in 2027. I consider this the darkest change in Android's history.</p>

<h3>Who this hurts</h3>
<ul>
    <li><b>You (if your phone came with GMS):</b> You bought an Android phone because Google told you it was open. You could install what you wanted, and that was the deal. Google is now rewriting that deal, retroactively, on hardware you already own. After the update lands, you can only run software that Google has pre-approved.</li>
    <li><b>Independent and Hobbyist Developers</b>: Google claims they solved this by introducing a "Limited Distribution Account" that requires no fee or ID. The trap? <strong>It caps installations to a maximum of 20 total devices worldwide.</strong> The moment an indie developer, a student, or a neighborhood community group reaches their 21st user, they are blocked unless they hand over their government ID and cash to Google.</li>
    <li><b>The FOSS Ecosystem & F-Droid:</b> Free and Open Source software relies on volunteer code. F-Droid builds apps independently from public source code and signs them using F-Droid's own security keys. F-Droid cannot legally or practically register on behalf of thousands of anonymous global volunteers, meaning thousands of privacy tools, utilities, and community projects will be systematically choked out of standard devices.</li>
    <li><b>Government and Civil Society</b>: Google has a <a href="https://www.aclu.org/news/free-speech/app-store-oligopoly">documented track record</a> of complying when governments demand app removals. This doesn't just happen in authoritarian regimes—it happens routinely in <b>democratic countries</b> under the banner of regulatory compliance <strong style="color: red;">(such as Italy's sudden blocks on the <a href="https://www.theguardian.com/technology/2025/jan/29/deepseek-blocked-some-app-stores-italy-questions-data-use" style="color: red;">DeepSeek app</a> and the <a href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9852506" style="color: red;">Replika AI app</a>)</strong>. You might agree or disagree with those specific privacy rulings, but under the old Android rules, citizens could still choose to sideload the software at their own risk. Under Google's new centralized identity mandate, <b>a single regulatory complaint can revoke a developer's global signing certificate—killing the app not just on the Play Store, but rendering it <strong>un-installable on your own hardware</strong> globally</b>. With this program, the software that runs your country's institutions will exist entirely at the pleasure of a single, unaccountable foreign corporation.</li>
</ul>
    

<h3>Who this does not hurt</h3>
<ul>
<li><b>Me</b>: I have a Post-2019 Huawei Phone which does not come with Google Play Services. <strong>Given the <a href="https://techg3.com/lifestyle/banking-apps-is-now-available-for-download-on-huawei-appgallery/" target="_blank" rel="noopener">availability of banking apps on Huawei AppGallery</a> (like <a href="https://www.huaweicentral.com/revolut-financial-app-launched-on-huawei-appgallery/" target="_blank" rel="noopener">Revolut</a>), it is extremely unlikely that I would go back to a GMS phone</strong> under current drama.</li>
<li><b>Users without Google Play Services</b>: Users on LineageOS, GrapheneOS, /e/OS or any custom ROM, or even those who are on HUAWEI like me, will not be affected.</li>
</ul>

<h3>Google's so-called advanced flow</h3>
<p>In March 2026, Google revealed the details of its <a href="advflow.html">Advanced Flow</a>, which contains scary warnings and a mandatory 24-hour wait before you can install an app from an unverified developer. To even trigger this delay, users are forced to manually enable <b>Android Developer Mode</b> (tapping the device build number 7 times).</p>
<p>keepandroidopen.org argues that it is a trap because the enforcement is handled entirely through GMS, meaning Google can change it, tighten it, or remove it entirely at any moment.</p>
<p>The "Advanced Flow" is intentional friction designed to kill casual sideloading. Furthermore, forcing non-technical users into deep engineering settings just to install a FOSS tool is a massive security hazard in itself. Security via frustration is still censorship.</p>

<h3>Wait, isn't this about Security?</h3>
<p>The security rationale is a smokescreen and I consider it a big red flag. Google Play Protect already scans for malware independent of developer identity. Requiring a government ID only makes developers identifiable and controllable, but that does not mean the code inside is guaranteed to be safe. <b>Malware authors can register.</b> <strong>Indie developers and dissidents often can't or refuse to.</strong></p>
<h3>Wait, isn't this what apple does?</h3>
<p>Apple has been a walled garden from day one. People chose Android <i>because it was different.</i> "Apple does it too" is a race to the bottom and a weak <i>tu quoque</i> argument. And under regulatory pressure (such as the EU's Digital Markets Act), <b>even Apple is being forced to open up.</b> Google is moving in the opposite direction: attempting to further entrench its gatekeeping status.</p>
<h3>What you can do:</h3>
<ul>
<li>You can <a href="https://keepandroidopen.org/cta/#consumers">contact your regulator</a> about the upcoming lockdown of GMS phones. Complaints are significantly more impactful when they come from a country's citizens and are written in one of its official languages.</li>
<li>You can link to keepandroidopen.org, or you can also add a <a href="https://keepandroidopen.org/banner/" target="_blank" rel="noopener">countdown banner</a> if you run a website.</li>
<li>If you are a developer, <strong style="color: red;">DO NOT COMPLY OR AGREE WITH THIS!</strong> You can add <a href="https://github.com/woheller69/FreeDroidWarn">FreeDroidWarn</a> to warn your audience about it.</li>
<li>In some regions, <b>switching to a Huawei phone is viable now, because many fintech apps are now on Huawei AppGallery</b>, so I'd suggest switching to a Huawei phone. Alternatively, you can switch to /e/OS or a Linux phone.</li>
</ul>
</ul>
<h3>Is there a way to install apps from developers that haven't registered onto Google developer console?</h3>
<p>Since this will be enforced through certified GMS phones, here are the answers</p>
<ul style="text-align: left">
<li>For <b>people without Google Play Services</b> (such as HUAWEI phones, /e/OS phones, Pixel phone with LineageOS), installing an apk will continue to work with "allow unknown sources"</li>
<li>For <b>people with Google Play Services</b>, go to Google Play Store -&gt; Your profile picture icon at the top right corner -&gt; Settings -&gt; About.
<ul>
<li>If it says <b>Device is certified</b>, you will have to go through <a href="advflow.html" target="_blank" rel="noopener">advanced flow</a> (24h wait) or use ADB (req. PC)</li>
<li>If it says <b>device not certified</b>, apks will continue to install normally</li>
</ul>
</li>
<li><b>Universal:</b> Use ADB, Google has already confirmed that ADB will continue to work as normal for GMS certified phone, you can either use ADB from PC (any android version) or from <a href="https://github.com/sam1am/anyapk">anyapk</a> (Android 11+).</li>
</ul>
<h3>There is an irony in EU</h3>
<p>There is a massive geopolitical irony brewing in the EU. If Google succeeds in locking down GMS devices, Huawei—despite intense geopolitical scrutiny—could emerge as one of the few major hardware vendors offering a truly open platform compliant with the spirit of the <b>Digital Markets Act (DMA)</b>. For power users who value software freedom, migrating to a non-GMS ecosystem is becoming a viable reality, especially as essential services like banking apps have presence on Huawei AppGallery.</p>
