"use strict";(self["webpackChunkastracoin"]=self["webpackChunkastracoin"]||[]).push([[37],{5037:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"container"}},[t._m(0),s("div",{attrs:{id:"transfer-page"}},[s("div",{staticClass:"transfer-userDate"},[s("div",{staticClass:"transform_userPic"},[s("img",{attrs:{src:t.$store.state.transferTo.m_photo?t.$store.state.url+"/storage/"+t.$store.state.transferTo.m_photo:r(6391),alt:""}})]),s("div",{staticClass:"transfer-userName"},[t._v(t._s(t.$store.state.transferTo.fio)+" "),t.$store.state.transferTo.verify?s("div",{staticClass:"verify-ion"},[s("svg",{attrs:{width:"18",height:"18",fill:"none",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M11.517 3.389c.776-.704 1.164-1.056 1.59-1.222a2.467 2.467 0 0 1 1.786 0c.427.166.814.518 1.59 1.222.366.331.549.497.753.62.275.167.58.278.898.327.236.037.482.028.976.008 1.046-.04 1.57-.06 2.003.087a2.467 2.467 0 0 1 1.368 1.148c.22.4.291.92.433 1.958.067.489.1.733.177.96.104.304.266.585.478.827.157.18.352.33.742.633.828.642 1.242.963 1.48 1.354.319.527.43 1.154.31 1.759-.09.448-.369.892-.927 1.778-.263.417-.395.626-.481.849-.116.3-.173.62-.166.94.005.24.057.48.161.963.222 1.024.333 1.536.263 1.988a2.468 2.468 0 0 1-.893 1.547c-.356.286-.855.446-1.853.766-.47.15-.705.226-.914.341-.282.155-.53.364-.732.614-.15.186-.265.405-.495.841-.488.927-.732 1.39-1.076 1.692A2.468 2.468 0 0 1 17.31 26c-.458-.01-.942-.208-1.912-.604-.457-.187-.686-.28-.92-.326a2.47 2.47 0 0 0-.955 0c-.235.046-.463.14-.92.326-.97.396-1.455.594-1.912.604a2.468 2.468 0 0 1-1.678-.61c-.344-.302-.589-.766-1.077-1.692-.23-.437-.345-.655-.495-.841a2.468 2.468 0 0 0-.732-.615c-.209-.115-.444-.19-.914-.34-.997-.32-1.496-.48-1.853-.767a2.468 2.468 0 0 1-.893-1.547c-.07-.452.041-.964.263-1.988.105-.482.157-.723.162-.962a2.467 2.467 0 0 0-.166-.941c-.087-.223-.218-.431-.481-.85-.559-.885-.838-1.329-.927-1.777a2.468 2.468 0 0 1 .31-1.759c.237-.391.651-.712 1.48-1.354.39-.302.584-.454.741-.633.212-.242.374-.523.478-.828.077-.226.11-.47.178-.96.141-1.037.212-1.556.433-1.957.296-.54.784-.95 1.368-1.148.433-.147.956-.127 2.003-.087.493.02.74.03.976-.008.317-.049.622-.16.897-.326.205-.124.388-.29.753-.621z",fill:"#5733d1"}}),s("path",{attrs:{d:"M9.476 14.707l2.879 2.879 5.758-5.758",id:"verified_svg__verified_tick",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),s("div",{staticClass:"verification-toolTips"},[t._v("This account is verified from AstroCoin Team")])]):t._e()])]),s("div",{staticClass:"transfer-form"},[s("div",{staticClass:"send-coin_userPic"}),s("div",{staticClass:"transfer-desc"},[t._v("Enter the amount you want to send")]),s("form",{staticClass:"form-modal",attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.transferCoin.apply(null,arguments)}}},[s("div",{staticClass:"form-control"},[s("label",{attrs:{for:"amount"}},[t._v("Amount:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",name:"",id:"amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),s("div",{staticClass:"form-control"},[s("label",{attrs:{for:"amount"}},[t._v("Comment:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{type:"text"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),s("div",{staticClass:"form-control submit-btn"},[s("button",{staticClass:"submit-btn",attrs:{type:"submit",disabled:!0===t.success}},[t._v("Send "),s("i",{staticClass:"ai ai-send-outline"})])])])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"transfer-header"},[r("div",{staticClass:"app-logo"}),r("div",{staticClass:"hr-line"}),r("div",{staticClass:"header-title"},[t._v("Transfer")])])}],a=r(7004),i=r(8501),o={name:"Transfers",data:()=>({amount:null,comment:"",success:!1}),validations:{email:{required:a.Z,email:i.Z}},mounted(){document.title="AstroCoin | Transfers",this.$store.dispatch("checkWallet",this.$route.params.wallet_token).then((t=>{console.log("Success")})).catch((t=>{Toast.fire("Wrong wallet","","error"),this.$router.push("/")}))},methods:{async transferCoin(){try{await this.$store.dispatch("transfer",{wallet_to:this.$route.params.wallet_token,amount:this.amount,comment:this.comment}),Toast.fire("Sent","","success"),await this.$store.dispatch("getUser"),await this.$store.dispatch("getHistory"),this.user=this.$store.state.user,this.walletHistory=this.$store.state.walletHistory,this.$router.push("/")}catch(t){Toast.fire(this.$store.state.error,"","error"),this.$router.push("/")}}}},c=o,u=r(1001),l=(0,u.Z)(c,s,n,!1,null,"f149d06c",null),f=l.exports},9343:function(t,e,r){r.d(e,{RP:function(){return l}});r(1703);const s=[];let n=null;function a(){null!==n&&s.push(n),n={}}function i(){const t=n,e=n=s.pop()||null;return e&&(Array.isArray(e.$sub)||(e.$sub=[]),e.$sub.push(t)),t}function o(t){if("object"!==typeof t||Array.isArray(t))throw new Error("params must be an object");n={...n,...t}}function c(t,e){return u((r=>function(...s){return r(t),e.apply(this,s)}))}function u(t){const e=t(o);return function(...t){a();try{return e.apply(this,t)}finally{i()}}}function l(t,e){return"object"===typeof t&&void 0!==e?c(t,e):u(t)}},2237:function(t,e,r){r.d(e,{Lx:function(){return n},Sz:function(){return o},Zh:function(){return a},iH:function(){return i}});var s=r(3718);const n=t=>{if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===typeof t){for(let e in t)return!0;return!1}return!!String(t).length},a=t=>Array.isArray(t)?t.length:"object"===typeof t?Object.keys(t).length:String(t).length,i=(t,e,r)=>"function"===typeof t?t.call(e,r):r[t],o=(t,e)=>(0,s.Z)({type:t},(t=>!n(t)||e.test(t)))},8501:function(t,e,r){var s=r(2237);const n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;e["Z"]=(0,s.Sz)("email",n)},7004:function(t,e,r){var s=r(3718),n=r(2237);e["Z"]=(0,s.Z)({type:"required"},(t=>"string"===typeof t?(0,n.Lx)(t.trim()):(0,n.Lx)(t)))},3718:function(t,e,r){const s="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(6015).R:r(9343).RP;e["Z"]=s},6015:function(t,e,r){r.d(e,{R:function(){return a}});const s="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},n=(t,e)=>"object"===typeof t&&void 0!==e?e:t((()=>{})),a=s.vuelidate?s.vuelidate.withParams:n},6391:function(t,e,r){t.exports=r.p+"img/default-user-pic.bc19d8f4.png"}}]);
//# sourceMappingURL=37.d6560933.js.map