(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8239d4a0"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 m-auto"},[n("div",{staticClass:"input-group mb-3"},[n("form",{attrs:{enctype:"multipart/from-data"},on:{submit:function(e){return e.preventDefault(),t.sendFile.apply(null,arguments)}}},[n("input",{ref:"file",attrs:{type:"file"},on:{change:t.selectFile}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.clientId,expression:"clientId"}],attrs:{type:"text"},domProps:{value:t.clientId},on:{input:function(e){e.target.composing||(t.clientId=e.target.value)}}}),n("button",[t._v("upload")])])])])])]),n("div",{staticClass:"container"},[n("h1",[t._v("List Clients")]),n("hr"),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"posts-container"},t._l(t.clients,(function(e){return n("div",{key:e._id,staticClass:"post"},[n("p",{staticClass:"text"},[t._v(t._s(e.nom))]),n("p",{staticClass:"text"},[t._v(t._s(e.adresse))]),n("p",{staticClass:"text"},[t._v(t._s(e.ville))]),n("p",{staticClass:"text"},[t._v(t._s(e.email))]),n("p",{staticClass:"text"},[t._v(t._s(e.telephone))]),n("p",{staticClass:"text"},[t._v(t._s(e.refClient))]),n("p",{staticClass:"text"},[t._v(t._s(e.password))])])})),0)])])},f=[],d=n("1da1"),m=(n("96cf"),n("99af"),n("b0c0"),n("d4ec")),h=n("bee2"),v=n("bc3a"),b=n.n(v),_="http://localhost:3000",g=function(){function t(){Object(m["a"])(this,t)}return Object(h["a"])(t,null,[{key:"getClients",value:function(){return new Promise((function(t,e){b.a.get(_+"/clients/show").then((function(e){t(e.data)})).catch((function(t){e(t)}))}))}}]),t}(),w=g,y=function(){function t(){Object(m["a"])(this,t)}return Object(h["a"])(t,null,[{key:"insertRapport",value:function(t,e){return new Promise((function(n,r){var o=new FormData;o.append("file",t),o.append("clientId",e),b.a.post("api/files/upload",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){n(t.data)})).catch((function(t){r(t.response.data)}))}))}},{key:"updateRapport",value:function(t,e){return new Promise((function(n,r){var o=new FormData;o.append("file",t),o.append("clientId",e),b.a.post("api/rapports/files/update",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){n(t.data)})).catch((function(t){r(t.response.data)}))}))}}]),t}(),C=y,j={name:"Home",data:function(){return{clients:[],error:"",file:null,titre:null,description:null,clientId:""}},components:{},methods:{selectFile:function(){this.file=this.$refs.file.files[0]},sendFile:function(){C.insertRapport(this.file,this.clientId).then((function(t){console.log(t)})).catch((function(t){throw console.error("HTTP error: ".concat(t.name," => ").concat(t.message)),"fail request at: GET /refreshtime"}))},updateFile:function(){C.updateRapport(this.file,this.clientId).then((function(t){console.log(t)})).catch((function(t){throw console.error("HTTP error: ".concat(t.name," => ").concat(t.message)),"fail request at: GET /refreshtime"}))}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.getClients().then((function(e){t.clients=e.client})).catch((function(t){throw console.error("HTTP error: ".concat(t.name," => ").concat(t.message)),"fail request at: GET /refreshtime"}));case 1:case"end":return e.stop()}}),e)})))()}},x=j,O=Object(i["a"])(x,p,f,!1,null,null,null),P=O.exports;r["a"].use(l["a"]);var T=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=new l["a"]({routes:T}),I=k,E=n("2f62");r["a"].use(E["a"]);var F=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:I,store:F,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.92d565d9.js.map