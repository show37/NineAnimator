import{l as s,o as i,a as r,b as e,q as n,F as c,z as o,y as a}from"./app.6cd8af0e.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},p=e("h1",{id:"source-development-quick-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source-development-quick-start","aria-hidden":"true"},"#"),o(" Source Development Quick Start")],-1),h=e("h2",{id:"setting-up-development-environment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-up-development-environment","aria-hidden":"true"},"#"),o(" Setting up Development Environment")],-1),u=e("blockquote",null,[e("p",null,[o("To build this app, you will need to have the latest version of Xcode installed. When contributing, "),e("strong",null,"do not"),o(" include your team identifier.")])],-1),m=o("Create your own fork of the "),f={href:"https://github.com/SuperMarcus/NineAnimator/",target:"_blank",rel:"noopener noreferrer"},_=o("NineAnimator"),g=o(" repository."),b=e("p",null,[o("To fork, in the top-right corner of the repository, click "),e("strong",null,"Fork"),o(".")],-1),v=a(`<li><p>Clone your forked repository to your local machine.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">$ git clone https://github.com/YOUR-USERNAME/NineAnimator</span></span>
<span class="line"></span></code></pre></div></li><li><p>Open the repository in Xcode and modify the project settings (Bundle Identifier, Teams, and Capabilities.).</p><p><img src="https://github.com/SuperMarcus/NineAnimator/raw/master/Misc/Media/modify_proj.gif" alt="Modify Xcode Project Settings"></p><ol><li>Navigate to the <code>NineAnimator</code> project file.</li><li>Under the <code>General</code> tab, change part of the <code>Bundle Identifier</code> to any alphanumeric characters without whitespaces.</li><li>Then navigate to the <code>Signing &amp; Capabilities</code> tab. Select your team in the <code>Teams</code> drawer. If Xcode prompts you for the signing options, choose the one that let Xcode automatically manages signing.</li><li>Scroll down in the <code>Signing &amp; Capabilities</code> tab. Remove the associated domains capability.</li></ol></li><li><p>Build the app with Xcode</p><p>You won&#39;t need any Apple Developer membership to build and install this app.</p><p>Open this project in Xcode, connect your phone to the computer, select your device, and click the run button on the top left corner.</p><p><img src="https://github.com/SuperMarcus/NineAnimator/raw/master/Misc/Media/xcode_select_device.jpg" alt="Xcode select device"></p></li>`,3),y=e("h2",{id:"try-and-edit-a-source-optional",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#try-and-edit-a-source-optional","aria-hidden":"true"},"#"),o(" Try and edit a Source (Optional)")],-1),S=e("p",null,"Now that you have setup the development environment to contribute a source. You may try and modify an existing source to get a feel of how NineAnimator fetches data from different source anime websites, decodes it, and present the information to other components of NineAnimator.",-1),w=o("We are going to use "),N={href:"https://github.com/SuperMarcus/NineAnimator/tree/master/Modules/Sources/NineAnimatorNativeSources/AnimeSources/GogoAnime",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"GogoAnime",-1),A=o(" as our example source. You may pick any other sources when following the tutorial below."),E=a("<p>In a typical NineAnimator&#39;s source, there will be total of five files: <code>SourceName.swift</code>, <code>SourceName+Anime.swift</code>, <code>SourceName+Episode.swift</code>, <code>SourceName+Featured.swift</code>, <code>SourceName+Search.swift</code>. Each files are separated by it&#39;s functionality where <code>SourceName.swift</code> is the main distinct Source class, and the other files are the extension of the class.</p><p>In this section, you will making simple changes like changing the source&#39;s name and enabling/disabling the source.</p>",2),x=o("As mentioned, the "),C=e("code",null,"SourceName.swift",-1),M=o(" is the main distinct Source class of an anime source. It conforms to the NineAnimatorCommon "),B={href:"https://github.com/SuperMarcus/NineAnimatorCommon/blob/master/Sources/NineAnimatorCommon/Models/AnimeSource/Source.swift",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"Source",-1),q=o(" protocol. The class accepts a few variables, one of them is the "),X=e("code",null,"isEnabled",-1),I=o(" variable. As you may have guessed, this variable controls whether the anime source is enabled or not."),j=a(`<p>To disable the anime source, you can change the value of the <code>isEnabled</code> variable to <code>false</code>. To change the name of the anime source, edit the <code>name</code> variable.</p><div class="language-diff ext-diff line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">- var name: String { &quot;gogoanime.tv&quot; }</span></span>
<span class="line"><span style="color:#B5CEA8;">+ var name: String { &quot;gogoanime.video&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">- override var isEnabled: Bool { true }</span></span>
<span class="line"><span style="color:#B5CEA8;">+ override var isEnabled: Bool { false }</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Now, build and run the app in Xcode, and you should be able to see your changes in the app.</p>`,3);function D(F,O){const t=s("ExternalLinkIcon");return i(),r(c,null,[p,h,u,e("ol",null,[e("li",null,[e("p",null,[m,e("a",f,[_,n(t)]),g]),b]),v]),y,S,e("p",null,[w,e("a",N,[k,n(t)]),A]),E,e("p",null,[x,C,M,e("a",B,[T,n(t)]),q,X,I]),j],64)}var G=l(d,[["render",D]]);export{G as default};
