if(!self.define){let s,l={};const e=(e,n)=>(e=new URL(e+".js",n).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=s=>e(s,r),c={module:{uri:r},exports:u,require:o};l[r]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-4f586afe"],(function(s){"use strict";s.setCacheNameDetails({prefix:"astracoin"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/177.2f32c558.css",revision:null},{url:"/css/478.15fbf088.css",revision:null},{url:"/css/509.d6e5cb07.css",revision:null},{url:"/css/683.171d3946.css",revision:null},{url:"/css/727.af83049f.css",revision:null},{url:"/css/758.ee215c5a.css",revision:null},{url:"/css/app.5f848032.css",revision:null},{url:"/css/chunk-vendors.5940d3bb.css",revision:null},{url:"/fonts/Alpha-Icons.668668d3.eot",revision:null},{url:"/fonts/Alpha-Icons.77a9cea5.woff",revision:null},{url:"/fonts/Alpha-Icons.b53b96a7.ttf",revision:null},{url:"/img/Alpha-Icons.5fb7a366.svg",revision:null},{url:"/img/astrocoin-coin.df2369b3.webp",revision:null},{url:"/img/astrum.73fbe7cc.svg",revision:null},{url:"/img/default-user-pic.bc19d8f4.png",revision:null},{url:"/img/wallet.29725889.svg",revision:null},{url:"/index.html",revision:"75a98892fe5d18434abf76a1e367150a"},{url:"/js/123.44fcf77a.js",revision:null},{url:"/js/177.950576fe.js",revision:null},{url:"/js/220.ae2d8242.js",revision:null},{url:"/js/263.1a7d4bce.js",revision:null},{url:"/js/478.0d95345c.js",revision:null},{url:"/js/509.5e2d3101.js",revision:null},{url:"/js/649.f4e281e8.js",revision:null},{url:"/js/683.7d3c5c15.js",revision:null},{url:"/js/727.658c991e.js",revision:null},{url:"/js/758.1840f6e5.js",revision:null},{url:"/js/851.5794e8dd.js",revision:null},{url:"/js/app.c68eefa9.js",revision:null},{url:"/manifest.json",revision:"8f42789e34d8eaba0fdbd1c47f676f96"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
