(this["webpackJsonpmuskie-black"]=this["webpackJsonpmuskie-black"]||[]).push([[0],{207:function(e,t,a){e.exports=a.p+"static/media/logo-dark.22e92208.png"},216:function(e,t,a){e.exports=a(463)},228:function(e,t,a){e.exports=a.p+"static/media/home-img.b7340a70.png"},229:function(e,t,a){e.exports=a.p+"static/media/bg.3dc6eb74.jpg"},230:function(e,t,a){e.exports=a.p+"static/media/muskie_bg.386b5bb6.png"},231:function(e,t,a){e.exports=a.p+"static/media/muskie_bg2.01b23533.jpg"},232:function(e,t,a){e.exports=a.p+"static/media/muskie_bg3.030be37b.jpg"},233:function(e,t,a){e.exports=a.p+"static/media/muskie_bg4.2951d009.jpg"},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(27),s=a.n(r),i=a(10),c=a(11),o=a(13),m=a(12),u=a(133),d=a(135),g=a(136),p=a(137),h=a(88),v=a(142),f=a(143),E=a(144),b=a(89),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).scrollSection=function(){var e;n.scrollTargetIds.forEach((function(t,a){e=document.getElementById(t).offsetTop-(n.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(t).scrollHeight?(n.getNavLinkElement(t).classList.add(n.activeNavClass),n.getNavLinkElement(t).parentNode.classList.add(n.activeNavClass),n.clearOtherNavLinkActiveStyle(t)):(n.getNavLinkElement(t).classList.remove(n.activeNavClass),n.getNavLinkElement(t).parentNode.classList.remove(n.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&a===n.scrollTargetIds.length-1&&(n.getNavLinkElement(t).classList.add(n.activeNavClass),n.getNavLinkElement(t).parentNode.classList.add(n.activeNavClass),n.clearOtherNavLinkActiveStyle(t))}))},n.props=e,n.scrollTargetIds=n.props.scrollTargetIds,n.activeNavClass=n.props.activeNavClass,n.scrollDuration=Number(n.props.scrollDuration)||1e3,n.headerBackground="true"===n.props.headerBackground,n.props.router&&"HashRouter"===n.props.router?(n.homeDefaultLink="#/",n.hashIdentifier="#/#"):(n.homeDefaultLink="/",n.hashIdentifier="#"),n.scrollSection.bind(Object(b.a)(n)),n}return Object(c.a)(a,[{key:"easeInOutQuad",value:function(e,t,a,n){return(e/=n/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,a){var n=this,l=t-e,r=0;!function t(){r+=10;var s=n.easeInOutQuad(r,e,l,a);window.scrollTo(0,s),r<a&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(a){a.preventDefault();var n=e.getNavToSectionID(t.getAttribute("href"));if(n){var l=document.getElementById(n).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,l,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.forEach((function(a,n){a!==e&&(t.getNavLinkElement(a).classList.remove(t.activeNavClass),t.getNavLinkElement(a).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return l.a.createElement("div",{"data-nav":"list",className:this.props.className},this.props.children)}}]),a}(n.Component),y=a(90),N=a.n(y),w=a(207),O=a.n(w),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggle=function(){n.setState({isOpenMenu:!n.state.isOpenMenu})},n.state={isOpenMenu:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.navItems.map((function(e){return e.idnm}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{expand:"lg",fixed:"top",className:"navbar-custom sticky sticky-dark "+this.props.navClass},l.a.createElement(d.a,null,l.a.createElement(g.a,{className:"logo text-uppercase",href:"/"},!0===this.props.imglight?l.a.createElement("img",{src:N.a,alt:"",className:"logo-light",height:"60"}):l.a.createElement("img",{src:O.a,alt:"",className:"logo-dark",height:"60"})),l.a.createElement(p.a,{onClick:this.toggle},l.a.createElement("i",{className:"mdi mdi-menu"})),l.a.createElement(h.a,{id:"navbarCollapse",isOpen:this.state.isOpenMenu,navbar:!0},l.a.createElement(k,{scrollTargetIds:e,scrollDuration:"200",headerBackground:"true",activeNavClass:"active",className:"navbar-collapse"},l.a.createElement(v.a,{navbar:!0,className:"ml-auto navbar-center",id:"mySidenav"},this.props.navItems.map((function(e,t){return l.a.createElement(f.a,{key:t,className:"Home"===e.navheading?"active":""},l.a.createElement(E.a,{href:"#"+e.idnm}," ",e.navheading))}))))))))}}]),a}(n.Component),C=a(157),S=a(158),x=a(54),I=(a(228),a(229),a(230),a(231),a(232),a(233),a(94),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"hero-section-5",id:"home"},l.a.createElement("div",{className:"bg-overlay"}),l.a.createElement(d.a,null,l.a.createElement(C.a,{className:"justify-content-center"},l.a.createElement(S.a,{lg:8,className:"align-content-center"},l.a.createElement("div",{className:"hero-wrapper text-center"},l.a.createElement("h1",{className:"hero-title text-white mb-5",style:{fontFamily:"Amsterdam",fontSize:"7em"}},"Muskie Black",l.a.createElement("br",null)),l.a.createElement("h1",{className:"hero-title text-white mb-5"},l.a.createElement("span",{className:"text-primary"},"Management & Consulting"),l.a.createElement("br",null)),l.a.createElement("p",{className:"font-20 text-white"},"Assisting your business virtually. Wherever. Whenever."),l.a.createElement("div",{className:"mt-4"},l.a.createElement(x.a,{onClick:function(){return e.props.scrollToContact()},className:"btn btn-primary mt-2 mr-2"},"Enquire Now"))))))))}}]),a}(n.Component)),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{className:"justify-content-center"},l.a.createElement(S.a,{lg:8},l.a.createElement("div",{className:"text-center mb-4"},l.a.createElement("h4",{className:"mb-3 text-dark",style:{fontFamily:"Amsterdam",fontSize:"4em"}},this.props.title),l.a.createElement("h5",{className:"text-primary text-uppercase small-title"},this.props.subtitle),l.a.createElement("p",null,this.props.desc)))))}}]),a}(n.Component),A=a(48),F=a.n(A),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.services.map((function(e,t){return l.a.createElement(S.a,{xl:3,sm:6,key:t},l.a.createElement("div",{className:"text-center p-4 mt-1"},l.a.createElement("div",{className:"avatar-md mx-auto mb-3"},l.a.createElement("span",{className:"avatar-title rounded-circle bg-soft-primary"},l.a.createElement("i",null,l.a.createElement(F.a,{icon:e.icon,className:"icon-dual-primary"})))),l.a.createElement("div",null,l.a.createElement("h5",{className:"font-18",style:{minHeight:"60px",display:"flex",justifyContent:"center",alignItems:"center"}},e.title)),l.a.createElement("p",{className:"mb-0 text-muted"},e.desc),l.a.createElement("br",null),e.items.map((function(e){return l.a.createElement("li",{className:"mb-2 text-primary"},e)}))))})))}}]),a}(n.Component),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={services:[{icon:"edit",title:"Company Registration & Compliance",desc:"We provide services to help your company stay legal by ensuring that all your business documents and procedures comply with the Companies Act.",items:["Company Registration Certificates","Income Tax Numbers","B-BBEE Certificates"]},{icon:"dollar-sign",title:"Bookkeeping",desc:"Your accounts in safe hands. We offer credible, precise and diligent bookkeeping services making it easy for you to keep track of your financial transactions.",items:["Management of accounts","Bank account reconciliations","Finanacial transaction recording"]},{icon:"book-open",title:"Report Writing",desc:"We create surveys and analyse information compiled by clients for reports such as; yearly, quarterly, annual, investor meetings and projects etc.",items:["Minutes of Meeting","Proof Reading and Editing of Documents","Academic Thesis"]},{icon:"image",title:"Graphic Design",desc:"Creating a good impression is vital, so we make use of optic compositions to communicate with potential and current clients,  and solve problems for your business. ",items:["Visual designing"," Publication designs","Marketing & Advertising"]}]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section bg-light pb-0",id:"services"},l.a.createElement(d.a,null,l.a.createElement(L,{subtitle:"Services",title:"What we do"}),l.a.createElement(C.a,null,l.a.createElement(T,{services:this.state.services})))))}}]),a}(n.Component),B=a(159),D=a(38),W=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"bg-primary py-3"},l.a.createElement(d.a,null,l.a.createElement(C.a,null,l.a.createElement(S.a,{lg:12},l.a.createElement("div",{className:"float-sm-left"},l.a.createElement(D.b,{to:"#"},l.a.createElement("img",{src:N.a,alt:"",height:"20"}))),l.a.createElement("div",{className:"float-sm-right mt-4 mt-sm-0"},l.a.createElement("p",{className:"copyright-desc text-white mb-0"},(new Date).getFullYear()," \xa9 Muskie Black Management & Consulting")))))))}}]),a}(n.Component),q=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={links1:[{link:"#",title:"About Us"},{link:"#",title:"Media & Press"},{link:"#",title:"Career"},{link:"#",title:"Blog"}],links2:[{link:"#",title:"Pricing"},{link:"#",title:"For Marketing"},{link:"#",title:"For CEOs"},{link:"#",title:"For Agencies"},{link:"#",title:"Our Apps"}]},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"footer"},l.a.createElement(d.a,null,l.a.createElement(C.a,null,l.a.createElement(S.a,{lg:4,sm:6},l.a.createElement("div",null,l.a.createElement("h5",{className:"mb-4 footer-list-title"},"About Muskie Black"),l.a.createElement("p",null,"We are skilled, independent professionals who remotely provide administrative, consulting and creative business support services "))),l.a.createElement(S.a,null),l.a.createElement(S.a,{lg:4,sm:6},l.a.createElement("div",null,l.a.createElement("h5",{className:"mb-4 footer-list-title"},"Contact"),l.a.createElement("div",null,l.a.createElement(B.a,null,l.a.createElement("i",null,l.a.createElement(F.a,{icon:"mail",className:"icon-dual-light icons-sm mt-1 mr-2"})),l.a.createElement(B.a,{body:!0},l.a.createElement("p",null,"info@muskieblack.co.za"))),l.a.createElement(B.a,null,l.a.createElement("i",null,l.a.createElement(F.a,{icon:"phone",className:"icon-dual-light icons-sm mt-1 mr-2"})),l.a.createElement(B.a,{body:!0},l.a.createElement("p",null,"+27 73 224 7068"))),l.a.createElement(B.a,null,l.a.createElement("i",null,l.a.createElement(F.a,{icon:"facebook",className:"icon-dual-light icons-sm mt-1 mr-2"})),l.a.createElement(B.a,{body:!0},l.a.createElement("p",{style:{position:"relative"}},"Muskie Black Management & Consulting",l.a.createElement("a",{className:"stretched-link",target:"_blank",href:"https://www.facebook.com/MuskieBlack"})))),l.a.createElement(B.a,null,l.a.createElement("i",null,l.a.createElement(F.a,{icon:"instagram",className:"icon-dual-light icons-sm mt-1 mr-2"})),l.a.createElement(B.a,{body:!0},l.a.createElement("p",{style:{position:"relative"}},"@muskie_black",l.a.createElement("a",{className:"stretched-link",target:"_blank",href:"http://www.instagram.com/muskie_black"})))))))))),l.a.createElement(W,null))}}]),a}(n.Component),H=a(209),Y=a.n(H),_=a(91),R=a.n(_),z=a(129),U=a.n(z),G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"small-section bg-primary"},l.a.createElement(d.a,null,l.a.createElement(R.a,null,l.a.createElement(U.a,{lg:3},l.a.createElement("div",{className:"hero-wrapper"},l.a.createElement("h1",{className:"hero-title text-white",style:{fontFamily:"Amsterdam",fontSize:"3em"}},"Our Mission"))),l.a.createElement(U.a,null,l.a.createElement("div",null,l.a.createElement("p",{className:"text-white font-20 pl-5"},'"To virtually provide clients with the highest quality office administration and graphic design services; allowing them to focus entirely on their core passion"')))))))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section bg-light pb-8",id:"about"},l.a.createElement(Y.a,null,l.a.createElement(R.a,{className:"justify-content-center mb-0"},l.a.createElement(S.a,{lg:10},l.a.createElement(L,{subtitle:"About Us",title:"Who we are"}),l.a.createElement("div",{className:"text-center"},l.a.createElement("p",null,"We are a reputable, 100% female black owned company, providing Consulting, Administrative and Graphic design services. We strive to deliver a seamless customer experience while providing the highest quality out-of-office services. We provide these services according to each clients\u2019 specific needs, and tailor make solutions; simplifying office management tasks. The outsourcing of these tasks allows our clients to better focus on their core business, while remaining compliant and attractive to their target markets.")))))),l.a.createElement(G,null))},V=a(210),Z=a(130),J=a.n(Z),Q=a(211),$=a(185),K=a(186),X=a(56),ee=a(213),te=a(214),ae=a.n(te),ne=a(215),le=a.n(ne),re=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=Object(Q.a)(J.a.mark((function e(){var t,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/),""===n.state.firstname||""===n.state.email||!t.test(n.state.email)||""===n.state.subject||""===n.state.message){e.next=13;break}return n.setState({msgSending:!0}),e.prev=3,a={name:n.state.firstname,email:n.state.email,subject:n.state.subject,message:n.state.message},e.next=7,ae.a.send("".concat("service_py8a7tr"),"".concat("template_cnd9aog"),a,"".concat("user_6WGLR1NzOxFCpLcgE0Ag8")).then((function(e){n.setState({msgSendSuccess:!0,msgSending:!1}),console.log("Success!",e.status,e.text),n.myFormRef.reset()}));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),n.setState({msgSendSuccess:!1,msgSending:!1}),console.log("Failed!",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,9]])}))),n.onInputChangeHandler=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(V.a)({},a,t))},n.state={firstname:"",email:"",subject:"",message:"",msgSendSuccess:!1,msgSending:!1,hideForm:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section bg-light",id:"contact"},l.a.createElement(d.a,null,l.a.createElement(L,{subtitle:"Contact Us",title:"Get In Touch"}),l.a.createElement("div",{className:"custom-form pt-4 mt-4"},l.a.createElement("div",{id:"message"},this.state.msgSendSuccess?l.a.createElement(ee.Animated,{animationIn:"bounceIn",animationOut:"flash",animationInDuration:1e3,animationOutDuration:1e3,isVisible:!0},l.a.createElement("fieldset",null,l.a.createElement("div",{id:"success_page"},l.a.createElement("h3",{className:"text-primary"},"Email Sent Successfully."),l.a.createElement("p",null,"Thank you ",l.a.createElement("strong",null,this.state.firstname),", your message has been submitted to us. Someone will be in touch with you shortly.")))):null),this.state.msgSending?l.a.createElement("div",{className:"d-flex justify-content-center float"},l.a.createElement(le.a,{style:{width:"3rem",height:"3rem"}})):l.a.createElement(X.AvForm,{name:"contact-form",id:"contact-form",ref:function(t){return e.myFormRef=t},onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement(C.a,null,l.a.createElement(S.a,{md:"4"},l.a.createElement($.a,null,l.a.createElement(K.a,{for:"name"},"Name"),l.a.createElement(X.AvField,{name:"firstname",placeholder:"Your name...",type:"text",disabled:this.state.msgSending,errorMessage:"Enter First Name",className:"form-control",validate:{required:{value:!0}},id:"validationCustom01",onChange:function(t){return e.onInputChangeHandler(t)}}))),l.a.createElement(S.a,{md:"4"},l.a.createElement($.a,null,l.a.createElement(K.a,{for:"email"},"Email address"),l.a.createElement(X.AvField,{name:"email",placeholder:"Your email...",type:"email",disabled:this.state.msgSending,errorMessage:"Enter Valid Email Adress",className:"form-control",validate:{required:{value:!0},email:{value:!0}},onChange:function(t){return e.onInputChangeHandler(t)}}))),l.a.createElement(S.a,{md:"4"},l.a.createElement($.a,null,l.a.createElement(K.a,{for:"subject"},"Subject"),l.a.createElement(X.AvField,{name:"subject",placeholder:"Your Subject..",type:"text",disabled:this.state.msgSending,errorMessage:"Enter Subject Name",className:"form-control",validate:{required:{value:!0}},id:"validationCustom01",onChange:function(t){return e.onInputChangeHandler(t)}})))),l.a.createElement(C.a,null,l.a.createElement(S.a,{md:"12"},l.a.createElement($.a,null,l.a.createElement(K.a,{for:"message"},"Message"),l.a.createElement(X.AvField,{type:"textarea",name:"message",id:"message",disabled:this.state.msgSending,rows:"4",className:"form-control",errorMessage:"Enter your message.",placeholder:"Your message...",validate:{required:{value:!0}},onChange:function(t){return e.onInputChangeHandler(t)}})))),l.a.createElement(C.a,null,l.a.createElement(S.a,{sm:"12",className:"text-right"},l.a.createElement("input",{type:"submit",id:"submit",name:"send",className:"submitBnt btn btn-dark btn-custom",value:"Send Message"}),l.a.createElement("div",{id:"simple-msg"}))))))))}}]),a}(n.Component),se=[{path:"/",component:function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).scrollToContact=function(){document.getElementById("contact").scrollIntoView({behavior:"smooth"})},n.scrollNavigation=function(){document.documentElement.scrollTop>n.state.pos?n.setState({navClass:"nav-sticky",imglight:!1}):n.setState({navClass:"",imglight:!0})},n.state={navItems:[{id:1,idnm:"home",navheading:"Home"},{id:2,idnm:"about",navheading:"About Us"},{id:3,idnm:"services",navheading:"Services"},{id:4,idnm:"contact",navheading:"Contact Us"}],pos:document.documentElement.scrollTop,imglight:!0,navClass:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{navItems:this.state.navItems,navClass:this.state.navClass,imglight:this.state.imglight}),l.a.createElement(I,{scrollToContact:this.scrollToContact}),l.a.createElement(P,null),l.a.createElement(M,null),l.a.createElement(re,{id:"contact"}),l.a.createElement(q,null))}}]),a}(n.Component)}],ie=a(15),ce=(a(461),a(462),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,null,l.a.createElement(ie.c,null,se.map((function(e,t){return l.a.createElement(ie.a,{path:e.path,component:e.component,key:t})})))))}}]),a}(n.Component)),oe=Object(ie.f)(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=l.a.createElement(D.a,null,l.a.createElement(oe,null));s.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a.p+"static/media/logo-light.5232f82e.png"}},[[216,1,2]]]);
//# sourceMappingURL=main.54d4d292.chunk.js.map