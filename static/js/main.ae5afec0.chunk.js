(this["webpackJsonpface-recognition-brain"]=this["webpackJsonpface-recognition-brain"]||[]).push([[0],{105:function(e,t,s){},106:function(e,t,s){},107:function(e,t,s){},108:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},427:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s(9),i=s.n(r),o=s(50),a=s.n(o),c=(s(105),s(18)),l=s(19),m=s(21),d=s(20),u=(s(106),s(107),function(e){var t=e.actualRoute,s=e.onRouteChange;return e.isSignedIn?Object(n.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(n.jsx)("p",{onClick:function(){return s("signin")},className:"sign-btn f3 pa3 pointer",children:"Sign out"})}):"signin"===t?Object(n.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(n.jsx)("p",{onClick:function(){return s("signin")},className:"disable sign-btn f3 pa3",children:"Sign in"}),Object(n.jsx)("p",{onClick:function(){return s("register")},className:"enable sign-btn f3 pa3 pointer",children:"Register"})]}):"register"===t?Object(n.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(n.jsx)("p",{onClick:function(){return s("signin")},className:"enable sign-btn f3 pa3 pointer",children:"Sign in"}),Object(n.jsx)("p",{onClick:function(){return s("register")},className:"disable sign-btn f3 pa3",children:"Register"})]}):void 0}),g=s(97),h=s.n(g),b=(s(108),s.p+"static/media/facial-recognition.a4f0dcd5.svg"),j=function(){return Object(n.jsx)("div",{className:"logo-div ma4 mt0",children:Object(n.jsx)(h.a,{className:"Tilt br2 shadow-2",options:{max:30},style:{height:150,width:150},children:Object(n.jsx)("div",{className:"Tilt-inner pa3",children:Object(n.jsx)("img",{style:{paddingTop:"5px"},alt:"logo",src:b})})})})},p=(s(109),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentWillUnmount",value:function(){this.props.clearState()}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"input-title f2",children:"We will detect faces on given images! Give it a try"}),Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(n.jsx)("input",{className:"input-field f4 pa2 w-70",type:"text",placeholder:"Image URL",onChange:this.props.onInputChange}),Object(n.jsx)("button",{className:"input-btn w-30 f4 ph3 pv2 dib pointer",onClick:this.props.onBtnSubmit,children:"Detect"})]})})]})}}]),s}(r.Component)),v=function(e){var t=e.user,s=t.name,r=t.entries;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"white f3",children:"".concat(s,", your current rank is ...")}),Object(n.jsx)("div",{className:"white f1",children:"#".concat(r)})]})},x=(s(110),function(e){var t=e.box,s=e.imageUrl;return Object(n.jsx)("div",{className:"center ma",children:Object(n.jsxs)("div",{className:"absolute mt2 mb2",children:[Object(n.jsx)("img",{id:"input-image",className:"image",alt:"",src:s,width:"500px",height:"auto"}),t.map((function(e,t){return Object(n.jsx)("div",{className:"bounding-box",style:{top:e.top_row,right:e.right_col,bottom:e.bottom_row,left:e.left_col}},t)}))]})})}),f=(s(111),s(112),s.p+"static/media/close.486d740d.svg"),O="https://face-recognition-server-pedro.herokuapp.com",w=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInUser:e.target.value})},n.onPwrdChange=function(e){n.setState({signInPwrd:e.target.value})},n.removeErrors=function(e){try{document.getElementsByClassName(e)[0].classList.remove("active")}catch(t){console.warn(t)}},n.showLoginError=function(){var e=n.state,t=e.signInUser,s=e.signInPwrd;""===t&&""===s||(document.getElementsByClassName("error-box credentials")[0].classList.add("active"),setTimeout((function(){n.removeErrors("error-box credentials")}),1e4))},n.onSubmitSigiIn=function(){fetch("".concat(O,"/signin"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({givenUser:n.state.signInUser,givenPassword:n.state.signInPwrd})}).then((function(e){return e.json()})).then((function(e){var t=e.isSuccessful,s=e.msg;t?(n.props.loadUsers(s),n.props.onRouteChange("home")):n.showLoginError()})).catch((function(e){return alert("Server error...\nTry again later\n\nError: ".concat(e))}))},n.checkInputs=function(){for(var e=!0,t=n.state,s=t.signInUser,r=t.signInPwrd,i=document.getElementsByClassName("error-box email-user")[0],o=document.getElementsByClassName("error-box password")[0],a=window.setTimeout((function(){}),0);a--;)window.clearTimeout(a);""===s.trim()?(i.classList.add("active"),setTimeout((function(){n.removeErrors("error-box email-user")}),1e4),e=!1):n.removeErrors("error-box email-user"),""===r.trim()?(o.classList.add("active"),setTimeout((function(){n.removeErrors("error-box password")}),1e4),e=!1):n.removeErrors("error-box password"),e?n.onSubmitSigiIn():n.removeErrors("error-box credentials")},n.checkReturn=function(e){"Enter"===e.key&&n.checkInputs()},n.state={signInUser:"",signInPwrd:""},n}return Object(l.a)(s,[{key:"componentWillUnmount",value:function(){for(var e=window.setTimeout((function(){}),0);e--;)window.clearTimeout(e)}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"signin-container",children:[Object(n.jsxs)("div",{className:"signin-box",children:[Object(n.jsx)("h1",{children:"Sign In"}),Object(n.jsxs)("div",{className:"signin-inputs-div",children:[Object(n.jsx)("input",{id:"email-input",type:"text",placeholder:"Email / Username",onChange:this.onEmailChange,onKeyDown:this.checkReturn}),Object(n.jsx)("input",{id:"pwrd-input",type:"password",placeholder:"Password",onChange:this.onPwrdChange,onKeyDown:this.checkReturn})]}),Object(n.jsxs)("div",{className:"sign-in-buttons-div",children:[Object(n.jsx)("hr",{className:"horizontal-line"}),Object(n.jsx)("button",{onClick:this.checkInputs,children:"Sign In"}),Object(n.jsx)("button",{onClick:function(){e.props.onRouteChange("register")},children:"Don't have an account?"})]})]}),Object(n.jsxs)("div",{className:"errors-container",children:[Object(n.jsxs)("div",{className:"error-box email-user",children:[Object(n.jsx)("p",{children:"Email / Username field is empty"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box email-user")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box password",children:[Object(n.jsx)("p",{children:"Password field is empty"}),Object(n.jsx)("img",{alt:"img",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box password")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box credentials",children:[Object(n.jsx)("p",{children:"Wrong credentials"}),Object(n.jsx)("img",{alt:"img",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box credentials")[0].classList.remove("active")}})]})]})]})}}]),s}(r.Component),C=(s(113),s(114),s(98)),N=s.n(C),y=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).onNameChange=function(e){n.setState({registerName:e.target.value})},n.onUserChange=function(e){n.setState({registerUser:e.target.value})},n.onEmailChange=function(e){n.setState({registerEmail:e.target.value})},n.onPwrdChange=function(e){n.setState({registerPwrd:e.target.value})},n.onRepeatPwrdChange=function(e){n.setState({secondPwrd:e.target.value})},n.removeErrors=function(e){document.getElementsByClassName(e)[0].classList.remove("active")},n.showEmailError=function(){n.removeErrors("error-box credentials"),document.getElementsByClassName("error-box invalid-email")[0].classList.add("active"),setTimeout((function(){n.removeErrors("error-box invalid-email")}),1e4)},n.showRegisterError=function(){n.removeErrors("error-box pwrds-not-match");var e=n.state,t=e.registerName,s=e.registerUser,r=e.registerEmail,i=e.registerPwrd,o=e.secondPwrd;""===t&&""===s&&""===r&&""===i&&""===o||(document.getElementsByClassName("error-box credentials")[0].classList.add("active"),setTimeout((function(){n.removeErrors("error-box credentials")}),1e4))},n.onSubmitRegister=function(){var e=n.state,t=e.registerName,s=e.registerUser,r=e.registerEmail,i=e.registerPwrd,o=e.secondPwrd;N.a.isEmail(r)?(n.removeErrors("error-box invalid-email"),i===o?fetch("".concat(O,"/register"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({givenName:t,givenUser:s,givenEmail:r,givenPassword:i})}).then((function(e){return e.json()})).then((function(e){var t=e.isSuccessful,s=e.user;t?(n.props.loadUsers(s),n.props.onRouteChange("home")):n.showRegisterError()})):(document.getElementsByClassName("error-box pwrds-not-match")[0].classList.add("active"),setTimeout((function(){n.removeErrors("error-box pwrds-not-match")}),1e4))):n.showEmailError()},n.checkInputs=function(){for(var e=!0,t=n.state,s=t.registerName,r=t.registerUser,i=t.registerEmail,o=t.registerPwrd,a=t.secondPwrd,c=document.getElementsByClassName("error-box name")[0],l=document.getElementsByClassName("error-box user")[0],m=document.getElementsByClassName("error-box email")[0],d=document.getElementsByClassName("error-box password")[0],u=document.getElementsByClassName("error-box repeat-password")[0],g=window.setTimeout((function(){}),0);g--;)window.clearTimeout(g);""===s.trim()?(c.classList.add("active"),setTimeout((function(){n.removeErrors("error-box name")}),1e4),e=!1):n.removeErrors("error-box name"),""===r.trim()?(l.classList.add("active"),setTimeout((function(){n.removeErrors("error-box user")}),1e4),e=!1):n.removeErrors("error-box user"),""===i.trim()?(m.classList.add("active"),setTimeout((function(){n.removeErrors("error-box email")}),1e4),e=!1):n.removeErrors("error-box email"),""===o.trim()?(d.classList.add("active"),setTimeout((function(){n.removeErrors("error-box password")}),1e4),e=!1):n.removeErrors("error-box password"),""===a.trim()?(u.classList.add("active"),setTimeout((function(){n.removeErrors("error-box repeat-password")}),1e4),e=!1):n.removeErrors("error-box repeat-password"),e?n.onSubmitRegister():(n.removeErrors("error-box credentials"),n.removeErrors("error-box pwrds-not-match"))},n.state={registerName:"",registerUser:"",registerEmail:"",registerPwrd:"",secondPwrd:""},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"register-container",children:[Object(n.jsxs)("div",{className:"register-box",children:[Object(n.jsx)("h1",{children:"Register"}),Object(n.jsxs)("div",{className:"register-inputs-div",children:[Object(n.jsx)("input",{onChange:this.onNameChange,id:"name-input",type:"text",placeholder:"Full name "}),Object(n.jsx)("input",{onChange:this.onUserChange,id:"user-input",type:"text",placeholder:"Username"}),Object(n.jsx)("input",{onChange:this.onEmailChange,id:"email-input",type:"email",placeholder:"Email"}),Object(n.jsx)("input",{onChange:this.onPwrdChange,id:"pwrd-input",type:"password",placeholder:"Password"}),Object(n.jsx)("input",{onChange:this.onRepeatPwrdChange,id:"repeat-pwrd-input",type:"password",placeholder:"Repeat password"})]}),Object(n.jsxs)("div",{className:"register-buttons-div",children:[Object(n.jsx)("hr",{className:"horizontal-line"}),Object(n.jsx)("button",{onClick:this.checkInputs,children:"Register"}),Object(n.jsx)("button",{onClick:function(){e.props.onRouteChange("signin")},children:"I already have an account"})]})]}),Object(n.jsxs)("div",{className:"errors-container",children:[Object(n.jsxs)("div",{className:"error-box name",children:[Object(n.jsx)("p",{children:"Full name field is empty"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box name")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box user",children:[Object(n.jsx)("p",{children:"Username field is empty"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box user")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box email",children:[Object(n.jsx)("p",{children:"Email field is empty"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box email")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box password",children:[Object(n.jsx)("p",{children:"Password field is empty"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box password")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box repeat-password",children:[Object(n.jsx)("p",{children:"Repeat password field is empty"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box repeat-password")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box pwrds-not-match",children:[Object(n.jsx)("p",{children:"Given passwords don't match each other"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box pwrds-not-match")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box credentials",children:[Object(n.jsx)("p",{children:"Looks like you already have an account"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box credentials")[0].classList.remove("active")}})]}),Object(n.jsxs)("div",{className:"error-box invalid-email",children:[Object(n.jsx)("p",{children:"Invalid Email"}),Object(n.jsx)("img",{alt:"",src:f,className:"close",onClick:function(){document.getElementsByClassName("error-box invalid-email")[0].classList.remove("active")}})]})]})]})}}]),s}(r.Component),E=s(99),S=s.n(E),k={particles:{collisions:{enable:!0},number:{value:50,density:{enable:!0,value_area:1e3}},shape:{type:"images",image:[{src:"path/to/first/image.svg",height:20,width:20},{src:"path/to/second/image.jpg",height:20,width:20}]},line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:5}}}},L=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).loadUsers=function(t){var s=t[0],n=s.id,r=s.name,i=s.user_name,o=s.email,a=s.entries,c=s.joined;e.setState({user:{id:n,name:r,userName:i,email:o,entries:a,joined:c}})},e.calculateFaceLocation=function(t){var s;if(!t.outputs)return e.setState({isLoading:!1,loadingState:""}),alert("Something went wrong ...\nCheck if the URL returns a valid image");var n=null===t||void 0===t||null===(s=t.outputs[0])||void 0===s?void 0:s.data.regions,r=document.getElementById("input-image"),i=Number(r.width),o=Number(r.height),a=n.map((function(e){var t=e.region_info.bounding_box;return t.left_col=t.left_col*i,t.top_row=t.top_row*o,t.right_col=i-t.right_col*i,t.bottom_row=o-t.bottom_row*o,t}));e.setState({box:a,isLoading:!1,loadingState:""})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onBtnSubmit=function(){e.setState({imageUrl:e.state.input,box:[],isLoading:!0,loadingState:"Requesting data from API ..."},e.requestApi)},e.clearState=function(){e.setState(e.baseState)},e.requestApi=function(){fetch("".concat(O,"/image_url"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.imageUrl})}).then((function(e){return e.json()})).then((function(t){t&&fetch("".concat(O,"/image"),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.calculateFaceLocation(t)}))},e.onRouteChange=function(t){"signin"===t?e.setState(e.baseState):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.showMessage=function(e){return window.scrollTo(0,document.body.scrollHeight),Object(n.jsxs)("h1",{className:"info-message",children:["Detected ",e," faces"]})},e.state={input:"",imageUrl:"",box:[],route:"signin",isSignedIn:!1,isLoading:!1,loadingState:"",user:{id:"",name:"",userName:"",email:"",entries:0,joined:""}},e.baseState=e.state,e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,s=e.route,r=e.box,i=e.imageUrl,o=e.user,a=e.isLoading,c=e.loadingState;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(S.a,{className:"particles",params:k}),Object(n.jsx)(u,{actualRoute:s,onRouteChange:this.onRouteChange,isSignedIn:t}),"home"===s?Object(n.jsxs)("div",{className:"homeContainer",children:[Object(n.jsx)(j,{}),Object(n.jsx)(v,{user:o}),Object(n.jsx)(p,{clearState:this.clearState,onInputChange:this.onInputChange,onBtnSubmit:this.onBtnSubmit}),a?Object(n.jsx)("h1",{className:"info-message",children:c}):null,r.length?this.showMessage(r.length):null,Object(n.jsx)(x,{box:r,imageUrl:i})]}):"signin"===s?Object(n.jsx)(w,{loadUsers:this.loadUsers,onRouteChange:this.onRouteChange}):Object(n.jsx)(y,{loadUsers:this.loadUsers,onRouteChange:this.onRouteChange})]})}}]),s}(r.Component),I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,428)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),i(e),o(e)}))};s(425),s(426);a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),I()}},[[427,1,2]]]);
//# sourceMappingURL=main.ae5afec0.chunk.js.map