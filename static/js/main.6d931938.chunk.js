(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(30),s=n.n(r),i=n(8),u=n(19),o=n(6),l=n(9),j=n.n(l),b=n(15),d=n(21);n(38),n(49),n(50);d.a.initializeApp({apiKey:"AIzaSyAK6L31HCMm0tWtgjNU7VF0OTgqdgnev44",authDomain:"nwitter-26551.firebaseapp.com",projectId:"nwitter-26551",storageBucket:"nwitter-26551.appspot.com",messagingSenderId:"263712855821",appId:"1:263712855821:web:6b7b59ab5e6c89c7e58244"});var p=d.a,f=d.a.auth(),h=d.a.firestore(),O=d.a.storage(),m=n(1),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],h=d[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,u);case 5:e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,u);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(m.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmit"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},v=n(11),g=n(20),y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(v.a,{icon:g.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(v.a,{icon:g.a})]})]})]})},w=n(32),N=n(17),k=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,O.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){u((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},value:d,required:!0,placeholder:"Edit your nweet",autoFocus:!0,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(m.jsx)("button",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(m.jsxs)("div",{className:"nweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:Object(m.jsx)(v.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(v.a,{icon:N.a})})]})]})})},S=n(52),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],d=o[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=12;break}return c=O.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return e.next=14,h.collection("nweets").add({text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a});case 14:s(""),d("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind ?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(v.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"imge/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(v.a,{icon:N.c})]})]})]})},I=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){h.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(C,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},F=function(e){var t=e.userObj,n=e.refreshUser,c=Object(a.useState)(t.displayName),r=Object(i.a)(c,2),s=r[0],u=r[1],o=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:o,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"Display name",value:s,autoFocus:!0,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){return f.signOut()},children:"Log Out"})]})},U=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(m.jsxs)(u.a,{children:[t&&Object(m.jsx)(A,{userObj:n}),Object(m.jsxs)(o.d,{children:[t?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(o.b,{exact:!0,path:"/",children:Object(m.jsx)(I,{userObj:n})}),Object(m.jsx)(o.b,{exact:!0,path:"/profile",children:Object(m.jsx)(F,{refreshUser:a,userObj:n})})]}):Object(m.jsx)(o.b,{exact:!0,path:"/",children:Object(m.jsx)(y,{})}),Object(m.jsx)(o.a,{from:"*",to:"/"})]})]})};var B=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){o(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(U,{isLoggedIn:Boolean(u),userObj:u,refreshUser:function(){var e=f.currentUser;o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})}}):"initalizing.."})};n(47);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6d931938.chunk.js.map