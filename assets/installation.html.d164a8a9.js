import{_ as r,l as n,o as s,a as l,b as e,q as a,F as h,y as i,z as t}from"./app.f561f6dd.js";const c={},d=i('<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><p>To install NineAnimator on <strong>iOS/iPadOS</strong>, you have the following options:</p><ul><li><a href="#testflight-beta-testing">TestFlight Beta Testing</a></li><li><a href="#appstore">AppStore</a></li><li><a href="#nineanimator-altstore-source-beta">NineAnimator AltStore Source (Beta)</a></li><li><a href="#legacy-methods">Legacy Methods</a><ul><li>Install from Third-Party App Stores</li><li>Install via Cydia Impactor with Compiled IPAs</li></ul></li><li><a href="#for-contributors">For Contributors</a><ul><li>Build from Source Code</li></ul></li></ul><p>To install/update NineAnimator on <strong>macOS</strong>, follow the steps below:</p>',4),p=t("Head to the "),u={href:"https://github.com/SuperMarcus/NineAnimator/releases/latest",target:"_blank",rel:"noopener noreferrer"},_=t("latest release"),m=t(" page;"),f=e("li",null,[t("Scroll down to Assets, click on the file with suffix "),e("code",null,".macCatalyst.zip"),t(";")],-1),g=e("li",null,"Decompress the archive and drag the NineAnimator app to your Applications folder.",-1),b=e("h2",{id:"testflight-beta-testing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#testflight-beta-testing","aria-hidden":"true"},"#"),t(" TestFlight Beta Testing")],-1),y=t("NineAnimator Beta Testing Program is currently unavailable. We plan to make it available again soon. Please use another method for now. Join our "),S={href:"https://discord.gg/dzTVzeW",target:"_blank",rel:"noopener noreferrer"},A=t("Discord server"),w=t(" for more information."),v=t("We're constantly adding supports for new websites and implementing additional features. Join the "),N={href:"https://testflight.apple.com/join/SzIVhF6w",target:"_blank",rel:"noopener noreferrer"},x=t("NineAnimator Beta Testing Program"),k=t(" to be the first ones to try out those updates: "),T={href:"https://testflight.apple.com/join/SzIVhF6w",target:"_blank",rel:"noopener noreferrer"},F=t("https://testflight.apple.com/join/SzIVhF6w"),I=e("h2",{id:"appstore",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#appstore","aria-hidden":"true"},"#"),t(" AppStore")],-1),C=t("Note: NineAnimator is currently unavailable on the App Store. Join our "),M={href:"https://discord.gg/dzTVzeW",target:"_blank",rel:"noopener noreferrer"},B=t("Discord server"),j=t(" for more information."),P={href:"https://apps.apple.com/app/nineanimator-the-anime-app/id1470033405",target:"_blank",rel:"noopener noreferrer"},z=e("img",{src:"https://github.com/SuperMarcus/NineAnimator/raw/master/Misc/Media/download_from_appstore_black.svg",alt:"Download on the AppStore"},null,-1),D=e("p",null,[e("s",null,"NineAnimator is now available on the AppStore. We recommand you to install NineAnimator from the AppStore.")],-1),V=e("h2",{id:"nineanimator-altstore-source-beta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nineanimator-altstore-source-beta","aria-hidden":"true"},"#"),t(" NineAnimator AltStore Source (Beta)")],-1),X=e("blockquote",null,[e("p",null,"Note: NineAnimator's AltStore Source is an experimental service. Currently the version on the AltStore source is synchronized with the latest Github release.")],-1),E=e("li",null,[t("Source URL: "),e("code",null,"https://9ani.app/api/altstore"),t(" ("),e("a",{href:"altstore://source?url=https%3A%2F%2F9ani.app%2Fapi%2Faltstore"},"Add Source"),t(")")],-1),O={href:"https://altsource.by.lao.sb/browse/?source=https%3A%2F%2F9ani.app%2Fapi%2Faltstore",target:"_blank",rel:"noopener noreferrer"},W=t("Source Preview"),L=e("h2",{id:"legacy-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#legacy-methods","aria-hidden":"true"},"#"),t(" Legacy Methods")],-1),q=e("h2",{id:"third-party-app-stores",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#third-party-app-stores","aria-hidden":"true"},"#"),t(" Third-Party App Stores")],-1),J=e("p",null,"NineAnimator is available on the following third-party app stores:",-1),G={href:"//app.ignition.fun",target:"_blank",rel:"noopener noreferrer"},R=t("Ignition"),U={href:"//builds.io",target:"_blank",rel:"noopener noreferrer"},H=t("Build Store"),Y=e("h2",{id:"cydia-impactor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cydia-impactor","aria-hidden":"true"},"#"),t(" Cydia Impactor")],-1),$=t("Download the latest compiled IPA file from the "),K={href:"https://github.com/SuperMarcus/NineAnimator/releases/latest",target:"_blank",rel:"noopener noreferrer"},Q=t("release page"),Z=t(" and install the app with Cydia Impactor."),ee=i(`<p>For detailed instructions please view the <strong>#installation</strong> channel on our Discord server.</p><h2 id="for-contributors" tabindex="-1"><a class="header-anchor" href="#for-contributors" aria-hidden="true">#</a> For Contributors</h2><h2 id="build-from-source-code" tabindex="-1"><a class="header-anchor" href="#build-from-source-code" aria-hidden="true">#</a> Build from Source Code</h2><h3 id="step-one-clone-the-source-code" tabindex="-1"><a class="header-anchor" href="#step-one-clone-the-source-code" aria-hidden="true">#</a> Step One: Clone the Source Code</h3><p>To build this app, you will need to have the latest version of Xcode installed. Open the Terminal app and clone the project to your local machine.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">$ git clone --recursive https://github.com/SuperMarcus/NineAnimator.git</span></span>
<span class="line"></span></code></pre></div><h3 id="step-two-modify-project-settings" tabindex="-1"><a class="header-anchor" href="#step-two-modify-project-settings" aria-hidden="true">#</a> Step Two: Modify Project Settings</h3><p>This repository contains the code used for distribution. To build and sign the app, you will need to modify the app&#39;s Bundle Identifier, Teams, and Capabilities.</p><p><img src="https://github.com/SuperMarcus/NineAnimator/raw/master/Misc/Media/modify_proj.gif" alt="Modify Xcode Project Settings"></p><ol><li>Navigate to the <code>NineAnimator</code> project file.</li><li>Under the <code>General</code> tab, change part of the <code>Bundle Identifier</code> to any alphanumeric characters without whitespace.</li><li>Then navigate to the <code>Signing &amp; Capabilities</code> tab. Select your team in the <code>Teams</code> drawer. If Xcode prompts you for the signing options, choose the one that let Xcode automatically manages signing.</li><li>Scroll down in the <code>Signing &amp; Capabilities</code> tab. Remove the associated domains capability.</li></ol><p>When contributing, do not include your team identifier.</p><h3 id="step-three-build-the-app-with-xcode" tabindex="-1"><a class="header-anchor" href="#step-three-build-the-app-with-xcode" aria-hidden="true">#</a> Step Three: Build the app with Xcode</h3><p>You won&#39;t need any Apple Developer membership to build and install this app. Open this project in Xcode, connect your phone to the computer, select your device, and click the run button on the top left corner.</p><p><img src="https://github.com/SuperMarcus/NineAnimator/raw/master/Misc/Media/xcode_select_device.jpg" alt="Xcode select device"></p>`,14);function te(oe,ae){const o=n("ExternalLinkIcon");return s(),l(h,null,[d,e("ol",null,[e("li",null,[p,e("a",u,[_,a(o)]),m]),f,g]),b,e("blockquote",null,[e("p",null,[y,e("a",S,[A,a(o)]),w])]),e("p",null,[e("s",null,[v,e("a",N,[x,a(o)]),k,e("a",T,[F,a(o)])])]),I,e("blockquote",null,[e("p",null,[C,e("a",M,[B,a(o)]),j])]),e("p",null,[e("a",P,[z,a(o)])]),D,V,X,e("ul",null,[E,e("li",null,[e("a",O,[W,a(o)])])]),L,q,J,e("ul",null,[e("li",null,[e("a",G,[R,a(o)])]),e("li",null,[e("a",U,[H,a(o)])])]),Y,e("p",null,[$,e("a",K,[Q,a(o)]),Z]),ee],64)}var re=r(c,[["render",te],["__file","installation.html.vue"]]);export{re as default};
