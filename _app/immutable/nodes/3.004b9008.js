import{s as B,n as S,r as N}from"../chunks/scheduler.e108d1fd.js";import{S as O,i as R,g as v,s as h,m as E,h as y,y as U,c as d,j as q,n as H,f as l,k as C,a as i,z,x as I,A as T,o as A}from"../chunks/index.c5af3f48.js";import{l as D}from"../chunks/index.af3116c6.js";const F=!0,J=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"}));function K(a){let n,o="Két szöveg hasonlósága",r,s,p,f,m,u,c,b,x,_,g,j,k,P;return{c(){n=v("h1"),n.textContent=o,r=h(),s=v("input"),p=h(),f=v("br"),m=h(),u=v("input"),c=h(),b=v("br"),x=h(),_=v("div"),g=E("Hasonlóság: "),j=E(a[2]),this.h()},l(t){n=y(t,"H1",{"data-svelte-h":!0}),U(n)!=="svelte-1kp9x55"&&(n.textContent=o),r=d(t),s=y(t,"INPUT",{type:!0}),p=d(t),f=y(t,"BR",{}),m=d(t),u=y(t,"INPUT",{type:!0}),c=d(t),b=y(t,"BR",{}),x=d(t),_=y(t,"DIV",{class:!0});var e=q(_);g=H(e,"Hasonlóság: "),j=H(e,a[2]),e.forEach(l),this.h()},h(){C(s,"type","text"),C(u,"type","text"),C(_,"class","svelte-10xj5zy")},m(t,e){i(t,n,e),i(t,r,e),i(t,s,e),z(s,a[0]),i(t,p,e),i(t,f,e),i(t,m,e),i(t,u,e),z(u,a[1]),i(t,c,e),i(t,b,e),i(t,x,e),i(t,_,e),I(_,g),I(_,j),k||(P=[T(s,"input",a[3]),T(u,"input",a[4])],k=!0)},p(t,[e]){e&1&&s.value!==t[0]&&z(s,t[0]),e&2&&u.value!==t[1]&&z(u,t[1]),e&4&&A(j,t[2])},i:S,o:S,d(t){t&&(l(n),l(r),l(s),l(p),l(f),l(m),l(u),l(c),l(b),l(x),l(_)),k=!1,N(P)}}}function M(a,n,o){let r;var s="jézuska",p="géppuska";function f(){s=this.value,o(0,s)}function m(){p=this.value,o(1,p)}return a.$$.update=()=>{a.$$.dirty&3&&o(2,r=D(s,p).similarity.toFixed(2))},[s,p,r,f,m]}class L extends O{constructor(n){super(),R(this,n,M,K,B,{})}}export{L as component,J as universal};
