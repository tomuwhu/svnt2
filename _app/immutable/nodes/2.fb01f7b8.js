import{s as I,n as E,r as L}from"../chunks/scheduler.e108d1fd.js";import{S as T,i as B,g as b,s as z,m as M,h as j,y as D,c as C,j as F,n as O,f as _,k,a as h,z as P,x as S,A as H,o as N}from"../chunks/index.c5af3f48.js";const R=!0,J=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"}));function U(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var q=function(s,i,o){var u=s.length,a=i.length,n=[];o=(o||(a>u?a:u))+1;for(var t=0;t<o;t++)n[t]=[t],n[t].length=o;for(t=0;t<o;t++)n[0][t]=t;if(Math.abs(u-a)>(o||100))return m(o||100);if(u===0)return m(a);if(a===0)return m(u);var r,f,y,c,v,p;for(t=1;t<=u;++t)for(f=s[t-1],r=1;r<=a;++r){if(t===r&&n[t][r]>4)return m(u);y=i[r-1],c=f===y?0:1,v=n[t-1][r]+1,(p=n[t][r-1]+1)<v&&(v=p),(p=n[t-1][r-1]+c)<v&&(v=p),n[t][r]=t>1&&r>1&&f===i[r-2]&&s[t-2]===y&&(p=n[t-2][r-2]+c)<v?p:v}return m(n[u][a]);function m(d){var g=Math.max(u,a),x=g===0?0:d/g,e=1-x;return{steps:d,relative:x,similarity:e}}};const w=U(q);function A(s){let i,o="Két szöveg hasonlósága",u,a,n,t,r,f,y,c,v,p,m,d,g,x;return{c(){i=b("h1"),i.textContent=o,u=z(),a=b("input"),n=z(),t=b("br"),r=z(),f=b("input"),y=z(),c=b("br"),v=z(),p=b("div"),m=M("Hasonlóság: "),d=M(s[2]),this.h()},l(e){i=j(e,"H1",{"data-svelte-h":!0}),D(i)!=="svelte-1kp9x55"&&(i.textContent=o),u=C(e),a=j(e,"INPUT",{type:!0}),n=C(e),t=j(e,"BR",{}),r=C(e),f=j(e,"INPUT",{type:!0}),y=C(e),c=j(e,"BR",{}),v=C(e),p=j(e,"DIV",{class:!0});var l=F(p);m=O(l,"Hasonlóság: "),d=O(l,s[2]),l.forEach(_),this.h()},h(){k(a,"type","text"),k(f,"type","text"),k(p,"class","svelte-10xj5zy")},m(e,l){h(e,i,l),h(e,u,l),h(e,a,l),P(a,s[0]),h(e,n,l),h(e,t,l),h(e,r,l),h(e,f,l),P(f,s[1]),h(e,y,l),h(e,c,l),h(e,v,l),h(e,p,l),S(p,m),S(p,d),g||(x=[H(a,"input",s[3]),H(f,"input",s[4])],g=!0)},p(e,[l]){l&1&&a.value!==e[0]&&P(a,e[0]),l&2&&f.value!==e[1]&&P(f,e[1]),l&4&&N(d,e[2])},i:E,o:E,d(e){e&&(_(i),_(u),_(a),_(n),_(t),_(r),_(f),_(y),_(c),_(v),_(p)),g=!1,L(x)}}}function K(s,i,o){let u;var a="jézuska",n="géppuska";function t(){a=this.value,o(0,a)}function r(){n=this.value,o(1,n)}return s.$$.update=()=>{s.$$.dirty&3&&o(2,u=w(a,n).similarity.toFixed(2))},[a,n,u,t,r]}class Q extends T{constructor(i){super(),B(this,i,K,A,I,{})}}export{Q as component,J as universal};
