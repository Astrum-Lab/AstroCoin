if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=s=>n(s,r),c={module:{uri:r},exports:u,require:o};l[r]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(e(...s),u)))}}define(["./workbox-4f586afe"],(function(s){"use strict";s.setCacheNameDetails({prefix:"astracoin"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/117.edd031fc.css",revision:null},{url:"/css/429.e561793b.css",revision:null},{url:"/css/455.af83049f.css",revision:null},{url:"/css/478.15fbf088.css",revision:null},{url:"/css/758.ee215c5a.css",revision:null},{url:"/css/895.644b0968.css",revision:null},{url:"/css/app.b4da63b7.css",revision:null},{url:"/css/chunk-vendors.5940d3bb.css",revision:null},{url:"/fonts/Alpha-Icons.668668d3.eot",revision:null},{url:"/fonts/Alpha-Icons.77a9cea5.woff",revision:null},{url:"/fonts/Alpha-Icons.b53b96a7.ttf",revision:null},{url:"/img/Alpha-Icons.5fb7a366.svg",revision:null},{url:"/img/astrocoin-coin.df2369b3.webp",revision:null},{url:"/img/astrum.73fbe7cc.svg",revision:null},{url:"/img/default-user-pic.bc19d8f4.png",revision:null},{url:"/img/wallet.29725889.svg",revision:null},{url:"/index.html",revision:"fac8aaf928abbea6212d653090e18a51"},{url:"/js/117.0cb0ce80.js",revision:null},{url:"/js/123.44fcf77a.js",revision:null},{url:"/js/220.ae2d8242.js",revision:null},{url:"/js/413.a4e2b1fb.js",revision:null},{url:"/js/429.919f36cc.js",revision:null},{url:"/js/455.bf0ac6d0.js",revision:null},{url:"/js/478.0d95345c.js",revision:null},{url:"/js/54.1c0fdfec.js",revision:null},{url:"/js/592.5696083c.js",revision:null},{url:"/js/758.1840f6e5.js",revision:null},{url:"/js/895.b281be9c.js",revision:null},{url:"/js/app.35a4dbd8.js",revision:null},{url:"/manifest.json",revision:"8f42789e34d8eaba0fdbd1c47f676f96"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
