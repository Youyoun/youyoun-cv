(window["webpackJsonpyouyoun-cv"]=window["webpackJsonpyouyoun-cv"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/linkedin.53621746.jpeg"},22:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),c=(a(27),a(28),a(15)),o=(a(29),a(6)),s=a(7),m=a(9),u=a(8),d=a(21),h=(a(30),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={active:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("li",{onFocus:function(){return e.setState({active:!0})},onBlur:function(){return e.setState({active:!1})},className:this.props.selectedSection===this.props.section?"active":""},l.a.createElement("button",{className:"linkButton",onClick:function(){return e.props.onClick()}},this.props.section))}}]),a}(l.a.Component)),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={open:!1},n}return Object(s.a)(a,[{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this;return l.a.createElement("aside",{className:"sidebar ".concat(this.state.open?"open":""),id:"sidebar"},l.a.createElement(d.a,{variant:"outline-primary",onClick:function(){return e.handleClick()},className:"glyphicon glyphicon-align-justify ".concat(this.state.open?"active":"")}),l.a.createElement("img",{className:"round-img",src:this.props.photo}),l.a.createElement("h1",{id:"sidebar-name"},this.props.name),l.a.createElement("span",{className:"sidebar-job position"},this.props.title),l.a.createElement("nav",{id:"sidebar-menu",className:"navbar"},l.a.createElement("ul",null,Object.keys(this.props.sections).map((function(t,a){return l.a.createElement(h,{onClick:function(){e.props.sections[t].current.scrollIntoView({behavior:"smooth",block:"start"})},key:a,section:t,selectedSection:e.props.visibleSection})})))))}}]),a}(l.a.Component),E=a(18),f=a(1),g=a(13),v=a.n(g);a(33);function b(e){var t=e.background,a=e.children;return l.a.createElement("div",{className:"slide",style:{backgroundImage:t}},l.a.createElement(E.a,{className:"no-margin-left"},l.a.createElement(f.a,{xs:12,md:8},a)))}function y(e){var t=e.iconClass?l.a.createElement(v.a,{icon:e.iconClass}):null;return l.a.createElement("a",{className:"btn btn-primary button",id:e.id,href:e.link,target:"_blank",rel:"noopener noreferrer",style:e.style},e.text," ",t)}var k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={n_slides:0,current_slide:0,slides:[null],start:Date.now(),timer:0,interval:10},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({slides:this.props.children,n_slides:this.props.children.length,interval:this.props.autoSwapDelay,fadeEffect:""}),this.startTimer()}},{key:"nextSlide",value:function(){var e=this;this.setState({fadeEffect:"fadeOut"},(function(){setTimeout((function(){return e.setState({current_slide:(e.state.current_slide+1)%e.state.n_slides,fadeEffect:"fadeIn"})}),2e3)}))}},{key:"startTimer",value:function(){var e=this;this.timer=setInterval((function(){return e.setState({timer:Date.now()-e.state.start},(function(){return e.swapSlideOnIntervalPass()}))}),1e3)}},{key:"swapSlideOnIntervalPass",value:function(){Math.floor(this.state.timer/1e3)%this.state.interval===0&&this.nextSlide()}},{key:"render",value:function(){return l.a.createElement("div",{className:"slide-container ".concat(this.state.fadeEffect)},this.state.slides[this.state.current_slide])}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"introduction"},l.a.createElement(k,{autoSwapDelay:7},l.a.createElement(b,{background:"url(images/intro-1.jpg)"},l.a.createElement("h1",{id:"slide1-text"},"Hello! ",l.a.createElement("br",null),"I'm Younes"),l.a.createElement(y,{id:"slide1-button",link:"CV_younes_belkouchi.pdf",text:"View CV",iconClass:"folder-download"})),l.a.createElement(b,{background:"url(images/youyounDTY.jpg)"},l.a.createElement("h1",{style:{color:"white"}},"Check out some of my projects !"),l.a.createElement(y,{id:"slide1-button",link:"https://github.com/youyoun",text:"View Projects",iconClass:"briefcase"}),l.a.createElement(y,{id:"slide1-button",style:{marginLeft:"5px"},link:"https://scholar.google.com/citations?user=06I0Q1sAAAAJ",text:"View Research",iconClass:"briefcase"}))))}}]),a}(n.Component),w=a(3);a(34);function N(){return l.a.createElement("section",{className:"about"},l.a.createElement(w.a,null,l.a.createElement(f.a,{md:12},l.a.createElement("span",{className:"heading-meta"},"About Me"),l.a.createElement("h2",{className:"heading"},"Introduction"),l.a.createElement("p",null,"I graduated from Ecole Centrale Paris, a leading french engineering school. I have always been passionate about IT. I am currently taking a huge interest in everything that is related to machine learning or deep learning, and especially their application to the medical field. I am currently doing a PhD on deep learning methods applied to medical imaging."),l.a.createElement("p",null,"Beside my adoration for technology, I also enjoy playing video games and indoor climbing."))))}function j(){return l.a.createElement("section",{className:"about"},l.a.createElement(w.a,null,l.a.createElement(f.a,{md:6},l.a.createElement("h2",{className:"heading"},"Domains of interest"))),l.a.createElement(w.a,null,l.a.createElement(P,{colorId:5,title:"Machine Learning",icon:"database"},l.a.createElement("p",null,"I have worked on personal and professional projects that use machine learning and/or deep learning to answer some real world problems",l.a.createElement("br",null),"I enjoy this domain for the technical difficulties that arise when solving said problems.")),l.a.createElement(P,{colorId:1,title:"Fullstack Development",icon:"terminal"},l.a.createElement("p",null,"I have followed a tech intensive track called the digital tech year during which I honed my Fullstack Development skills. ",l.a.createElement("br",null),"I have experience developing frontend and backend using multiple tools such as python or javascript. I developed this website using ReactJS. I find development fun and complementary to a lot of problems that relate to data science.")),l.a.createElement(P,{colorId:3,title:"Data Structures & Algorithms",icon:"omega"},l.a.createElement("p",null,"Since I studied computer science, I have a good grasp over concepts related to algorithmic, data structure or mathematics. ",l.a.createElement("br",null),"I try to keep a hybrid profile where I am able to comprehend mathematics but also develop software based on these theories. My current algorithmic interests are related to mathematical optimization. I enjoy participating in coding contests to hone and practice skills related to this field."))))}function P(e){return l.a.createElement(f.a,{md:4,style:{textAlign:"center"}},l.a.createElement("div",{className:"services-box"},l.a.createElement("div",{className:"services color-"+e.colorId},l.a.createElement("div",{className:"icon"},l.a.createElement(v.a,{icon:e.icon,className:"icon",style:{height:"100%"}})),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,e.title," "),e.children))))}function S(){return l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(j,null))}var C=a(14),O=a(20),x={marginBottom:"15px",display:"block",fontSize:"10px",textTransform:"uppercase",color:"#999999",fontWeight:"500",letterSpacing:"5px"},T={fontSize:"18px",marginBottom:"3em",fontWeight:"700",textTransform:"uppercase",letterSpacing:"5px",lineHeight:"1.8",position:"relative"};function D(e){var t=e.title,a=e.subTitle;return l.a.createElement(w.a,{className:"row"},l.a.createElement(f.a,{md:6},l.a.createElement("span",{style:x},t),l.a.createElement("h2",{style:T},a)))}a(35);function A(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],i=a[1];return l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h4",{className:"panel-title",style:{margin:0}},l.a.createElement("button",Object(C.a)({className:"collapse-button",onClick:function(){i(!r)}},"className",r?"collapsed":""),e.title))),l.a.createElement(O.a,{in:r},l.a.createElement("div",{style:{margin:0,padding:0}},l.a.createElement("div",{className:"panel-body"},e.children))))}function L(){return l.a.createElement("section",{className:"education"},l.a.createElement(D,{title:"Education",subTitle:"Education"}),l.a.createElement(w.a,null,l.a.createElement(f.a,{md:12},l.a.createElement("div",{className:"fancy-collapse-panel"},l.a.createElement("div",{className:"panel-group",id:"accordion"},l.a.createElement(A,{title:"Ecole Centrale Paris",buttonId:"1"},l.a.createElement(f.a,{md:12},l.a.createElement("p",null,"Ecole Centrale Paris is a prestigious Engineering School, member of France\u2019s Grandes Ecoles, that uses a highly selective international admission process."),"Courses include:",l.a.createElement(w.a,null,l.a.createElement(f.a,{md:6},l.a.createElement("li",null,"Mathematics and Statistics"),l.a.createElement("li",null,"Object Oriented Programming"),l.a.createElement("li",null,"Databases and database optimization"),l.a.createElement("li",null,"Theoretical Computer Science")),l.a.createElement(f.a,{md:6},l.a.createElement("li",null,"Machine Learning & Deep Learning"),l.a.createElement("li",null,"Algebra & Cryptography"),l.a.createElement("li",null,"Information System Architectures"),l.a.createElement("li",null,"Algorithmic"))))),l.a.createElement(A,{title:"Al khawarizmi Foundation Courses",buttonId:"2"},l.a.createElement("p",null,"Foundation courses is a 2-year school program following high school where students study intensively science and are forced to take an international ranking test where they are highly selected depending on their rank in order to enroll to their chosen schools.")))))))}a(36);function B(e){return l.a.createElement("article",{className:"timeline-entry"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-"+e.colorId},e.icon?l.a.createElement(v.a,{icon:e.icon}):""),e.children?l.a.createElement("div",{className:"timeline-label"},e.children):""))}function R(){return l.a.createElement("div",null,l.a.createElement("section",{className:"experience"},l.a.createElement(D,{title:"Highlights",subTitle:"Work Experience"}),l.a.createElement(w.a,null,l.a.createElement(f.a,{md:12},l.a.createElement("div",{className:"timeline-centered"},l.a.createElement(B,{colorId:7,icon:"book"},l.a.createElement("h2",null,"PhD Student at CentraleSupelec and Gustave Roussy ",l.a.createElement("span",null,"(10/2020-present, Paris FR)")),l.a.createElement("p",null,"The goal of my thesis is to identify prognostic or predictive imaging biomarkers using machine learning to determine if a patient will respond or not to immunotherapy.")),l.a.createElement(B,{colorId:2,icon:"images"},l.a.createElement("h2",null,"Data scientist at Institut Gustave Roussy ",l.a.createElement("span",null,"(03/2020-10/2020, Paris FR)")),l.a.createElement("p",null,"My current work involves identifying relapse in breast cancer using histopathology images. ",l.a.createElement("br",null),"It involves using Deep Neural networks to identify regions that are more susceptible to cause a relapse in a patient.")),l.a.createElement(B,{colorId:3,icon:"book"},l.a.createElement("h2",null,"Data Science Internship at BNPP CIB Analytics Consulting - AI Lab ",l.a.createElement("span",null,"(05/2019-11/2019, Paris FR)")),l.a.createElement("p",null,"I joined BNP Paribas as a Data science intern. My work involves researching new techniques used in state of the art models and test them to validate these results. ",l.a.createElement("br",null),"Through this internship, I was able to deepen my knowledge of machine learning and see how ML software can be used in the industry.")),l.a.createElement(B,{colorId:4,icon:"stack"},l.a.createElement("h2",null,"Software & Machine Learning Intern at xBrain ",l.a.createElement("span",null,"(08/2017-02/2018, CA US)")),l.a.createElement("p",null,"During my internship at xBrain, I had the opportunity to work with a very passionate team on a subject involving multiple tasks, be it machine learning, full stack development and even algorithm optimisation. ",l.a.createElement("br",null),"I used NLP for processing textual data, different clusterisation algorithms on huge quantity of scrapped data. ",l.a.createElement("br",null),"I also developed micro services that interact with each other using API's. These micro services were all dockerized.")),l.a.createElement(B,{colorId:5,icon:"clipboard"},l.a.createElement("h2",null,"Software developer & Agile Prototyper at Paris Digital Lab ",l.a.createElement("span",null,"(01/2017-07/2017, Paris FR)")),l.a.createElement("div",null,"The Paris Digital Lab is a program based in agile prototyping oriented towards innovation and design-thinking. The aim is for students to become proficient in all kinds of technologies, through the making of real-world projects for high tech businesses."),l.a.createElement("div",null,"During this tracks, I created three prototypes:"),l.a.createElement("div",null," \u2192 Capgemini: Voice Print Authentication"),l.a.createElement("div",null," \u2192 Foncia: Chatbot using NLP and Machine Learning."),l.a.createElement("div",null," \u2192 Le Peuple Habile: IoT and NLP"),l.a.createElement("div",null,"As a plus, I also Helped a 30 student class through a Coding Week on full stack development after the end of the track.")),l.a.createElement(B,{colorId:6,icon:"codepen"},l.a.createElement("h2",null,"Secretary & IT Developer at VIA Centrale Reseaux ",l.a.createElement("span",null,"(2016-2017, Paris FR)")),l.a.createElement("div",null,"VIA is a student association that manages and develops digital services for the student housing network & IP-TV management for 1200 people, Cluster virtualization of more than 100 VM, Team management of 20 people, 100k\u20ac of budget, Partnerships with IT leader companies in France.")),l.a.createElement(B,{colorId:"none"}))))))}a(37);function M(e){return l.a.createElement(f.a,{md:6},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,e.skillName),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-"+e.colorId,style:{width:e.percentProficiency+"%"}},l.a.createElement("span",null,e.percentProficiency)))))}var F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"skills"},l.a.createElement(D,{title:"My skills",subTitle:"Skills"}),l.a.createElement(w.a,null,l.a.createElement(f.a,{md:12},l.a.createElement("p",null,"These are some of the skills that I find interesting to develop and work on and that I try to hone through my work. The values displays are of course subjective and shouldn't be considered absolute:")),l.a.createElement(M,{skillName:"Python",colorId:1,percentProficiency:95}),l.a.createElement(M,{skillName:"Web development",colorId:2,percentProficiency:80}),l.a.createElement(M,{skillName:"Docker",colorId:3,percentProficiency:80}),l.a.createElement(M,{skillName:"Linux",colorId:4,percentProficiency:95}),l.a.createElement(M,{skillName:"Git",colorId:6,percentProficiency:80}),l.a.createElement(M,{skillName:"SGBD",colorId:5,percentProficiency:85}),l.a.createElement(M,{skillName:"Project Management",colorId:1,percentProficiency:80}),l.a.createElement(M,{skillName:"Learn and Adapt to New Technologies",colorId:3,percentProficiency:95})))}}]),a}(l.a.Component),V=a(16),_=(a(38),l.a.Component,a(19)),z=a.n(_);function W(e){var t=e.getBoundingClientRect().height,a=e.offsetTop;return{height:t,offsetTop:a,offsetBottom:a+t}}var G=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useRef)(null),o=Object(n.useRef)(null),s=Object(n.useRef)(null),m=Object(n.useRef)(null),u=Object(n.useRef)(null),d=(Object(n.useRef)(null),{Introduction:i,About:o,Experience:s,Education:m,Skills:u});return Object(n.useEffect)((function(){function e(){var e,t=window.scrollY;for(var n in d){var l=d[n].current;if(l){var i=W(l),c=i.offsetBottom,o=i.offsetTop;if(t>=(o>0?o-300:o)&&t<c-300){e=n;break}}}e!==a?r(e):!e&&a&&r(null)}return e(),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[a,d]),l.a.createElement("div",null,l.a.createElement(p,{sections:d,photo:z.a,name:"Younes Belkouchi",title:"Machine Learning and Software Engineer",visibleSection:a}),l.a.createElement("div",{id:"app"},l.a.createElement("div",{ref:i},l.a.createElement(I,null)),l.a.createElement("div",{className:"pad-sides"},l.a.createElement("div",{ref:o},l.a.createElement(S,null)),l.a.createElement("div",{ref:s},l.a.createElement(R,null)),l.a.createElement("div",{ref:m},l.a.createElement(L,null)),l.a.createElement("div",{ref:u},l.a.createElement(F,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.54f9223f.chunk.js.map