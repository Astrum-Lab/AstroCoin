"use strict";(self["webpackChunkastracoin"]=self["webpackChunkastracoin"]||[]).push([[596],{22596:function(r,t,e){e.r(t),e.d(t,{default:function(){return p}});var n=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{attrs:{id:"repass"}},[e("div",{staticClass:"login-page"},[e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"login-page"}},[r._m(0),e("div",{staticClass:"login-form"},[e("div",{staticClass:"login-desc"},[r._v("Enter new password for your account")]),e("form",{staticClass:"form-modal",attrs:{action:"#",method:"post"},on:{submit:function(t){return t.preventDefault(),r.submit.apply(null,arguments)}}},[e("div",{staticClass:"form-control"},[e("label",{attrs:{for:"old_password"}},[r._v("Current password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:r.oldPassword,expression:"oldPassword"}],attrs:{type:"password",name:"pass_two",id:"old_password"},domProps:{value:r.oldPassword},on:{input:function(t){t.target.composing||(r.oldPassword=t.target.value)}}})]),e("div",{staticClass:"form-control"},[e("label",{attrs:{for:"password"}},[r._v("New password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:r.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password"},domProps:{value:r.password},on:{input:function(t){t.target.composing||(r.password=t.target.value)}}})]),e("div",{staticClass:"form-control"},[e("label",{attrs:{for:"verify_pass"}},[r._v("Re-enter new password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:r.confirmation,expression:"confirmation"}],attrs:{type:"password",name:"pass_two",id:"verify_pass"},domProps:{value:r.confirmation},on:{input:function(t){t.target.composing||(r.confirmation=t.target.value)}}})]),r._m(1)])])])])])])},o=[function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"login-header"},[e("div",{staticClass:"app-logo"})])},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"form-control submit-btn"},[e("input",{attrs:{type:"submit",value:"Submit"}})])}],s=e(16198),i=(e(78975),e(17004)),a=e(68520),u=e(4459),c={name:"UpdatePassword",data:function(){return{password:"",confirmation:"",oldPassword:""}},validations:{password:{required:i.Z,minLength:(0,a.Z)(8)},confirmation:{required:i.Z,minLength:(0,a.Z)(8),sameAs:(0,u.Z)("password")},oldPassword:{required:i.Z,minLength:(0,a.Z)(8)}},methods:{submit:function(){var r=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.$v.$invalid){t.next=4;break}return r.$v.$touch(),r.$v.password.$invalid?Toast.fire("Пароль должен быть не менее 8 символов.","error"):r.$v.password.$invalid?Toast.fire("Поле Пароль обязательно для заполнения","","error"):r.$v.confirmation.$invalid?Toast.fire("Поле Подтверждение пароля обязательно для заполнения","","error"):r.$v.confirmation.$error.sameAs&&Toast.fire("Пароли не совпадают","","error"),t.abrupt("return");case 4:return t.prev=4,t.next=7,r.$store.dispatch("updatePassword",{password:r.password,password_confirmation:r.confirmation,old_password:r.oldPassword});case 7:Toast.fire("Пароль успешно изменен","","success"),r.$router.push("/user-page"),t.next=14;break;case 11:if(t.prev=11,t.t0=t["catch"](4),r.$store.state.errors)for(e in r.$store.state.errors)Toast.fire(r.$store.state.errors[e][0],"","error");else Toast.fire(r.$store.state.error,"","error");case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))()}}},f=c,l=e(1001),d=(0,l.Z)(f,n,o,!1,null,null,null),p=d.exports},9343:function(r,t,e){e.d(t,{RP:function(){return d}});var n=e(93019),o=e(9726),s=(e(21703),[]),i=null;function a(){null!==i&&s.push(i),i={}}function u(){var r=i,t=i=s.pop()||null;return t&&(Array.isArray(t.$sub)||(t.$sub=[]),t.$sub.push(r)),r}function c(r){if("object"!==(0,o.Z)(r)||Array.isArray(r))throw new Error("params must be an object");i=(0,n.Z)((0,n.Z)({},i),r)}function f(r,t){return l((function(e){return function(){e(r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t.apply(this,o)}}))}function l(r){var t=r(c);return function(){a();try{for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];return t.apply(this,e)}finally{u()}}}function d(r,t){return"object"===(0,o.Z)(r)&&void 0!==t?f(r,t):l(r)}},12237:function(r,t,e){e.d(t,{Lx:function(){return s},Sz:function(){return u},Zh:function(){return i},iH:function(){return a}});var n=e(9726),o=(e(47941),e(74916),e(77601),e(63718)),s=function(r){if(Array.isArray(r))return!!r.length;if(void 0===r||null===r)return!1;if(!1===r)return!0;if(r instanceof Date)return!isNaN(r.getTime());if("object"===(0,n.Z)(r)){for(var t in r)return!0;return!1}return!!String(r).length},i=function(r){return Array.isArray(r)?r.length:"object"===(0,n.Z)(r)?Object.keys(r).length:String(r).length},a=function(r,t,e){return"function"===typeof r?r.call(t,e):e[r]},u=function(r,t){return(0,o.Z)({type:r},(function(r){return!s(r)||t.test(r)}))}},68520:function(r,t,e){var n=e(63718),o=e(12237);t["Z"]=function(r){return(0,n.Z)({type:"minLength",min:r},(function(t){return!(0,o.Lx)(t)||(0,o.Zh)(t)>=r}))}},17004:function(r,t,e){e(73210);var n=e(63718),o=e(12237);t["Z"]=(0,n.Z)({type:"required"},(function(r){return"string"===typeof r?(0,o.Lx)(r.trim()):(0,o.Lx)(r)}))},4459:function(r,t,e){var n=e(63718),o=e(12237);t["Z"]=function(r){return(0,n.Z)({type:"sameAs",eq:r},(function(t,e){return t===(0,o.iH)(r,this,e)}))}},63718:function(r,t,e){var n="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?e(96015).R:e(9343).RP;t["Z"]=n},96015:function(r,t,e){e.d(t,{R:function(){return i}});var n=e(9726),o="undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:{},s=function(r,t){return"object"===(0,n.Z)(r)&&void 0!==t?t:r((function(){}))},i=o.vuelidate?o.vuelidate.withParams:s},93019:function(r,t,e){e.d(t,{Z:function(){return s}});e(47941),e(82526),e(57327),e(41539),e(38880),e(54747),e(49337);function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function o(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function s(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}}}]);
//# sourceMappingURL=596-legacy.21ff4d12.js.map