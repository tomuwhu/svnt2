import{s as p,n as m}from"./scheduler.7ca2eff6.js";import{S as b,i as M,g as v,h as d,j as g,f as c,k as h,a as _,C as S,m as j,n as q,x as D}from"./index.e4d86af0.js";function f(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function u(s,n,i){const t=s.slice();return t[2]=n[i],t[4]=i,t}function r(s){let n,i=s[2][1]+"",t,l,a;return{c(){n=v("a"),t=j(i),this.h()},l(e){n=d(e,"A",{class:!0,href:!0});var o=g(n);t=q(o,i),o.forEach(c),this.h()},h(){h(n,"class",l="x"+s[4]+" "+(s[0]==s[4].toString()?"a":"")+" svelte-1bqjbmy"),h(n,"href",a=s[0]==s[4].toString()?"":s[2][0])},m(e,o){_(e,n,o),D(n,t)},p(e,o){o&1&&l!==(l="x"+e[4]+" "+(e[0]==e[4].toString()?"a":"")+" svelte-1bqjbmy")&&h(n,"class",l),o&1&&a!==(a=e[0]==e[4].toString()?"":e[2][0])&&h(n,"href",a)},d(e){e&&c(n)}}}function A(s){let n,i=f(s[1]),t=[];for(let l=0;l<i.length;l+=1)t[l]=r(u(s,i,l));return{c(){n=v("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){n=d(l,"DIV",{class:!0});var a=g(n);for(let e=0;e<t.length;e+=1)t[e].l(a);a.forEach(c),this.h()},h(){h(n,"class","svelte-1bqjbmy")},m(l,a){_(l,n,a);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null)},p(l,[a]){if(a&3){i=f(l[1]);let e;for(e=0;e<i.length;e+=1){const o=u(l,i,e);t[e]?t[e].p(o,a):(t[e]=r(o),t[e].c(),t[e].m(n,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=i.length}},i:m,o:m,d(l){l&&c(n),S(t,l)}}}function y(s,n,i){let{active:t=""}=n;var l=[["./index.html","Damerau-Levenshtein távolság"],["./animation","Animáció"],["./dragdrop","Drag & Drop"],["./malom_v01","Malom tábla"],["./malom_v02","Malom bábuk mozgatása"],["./malom_v03","Malom teljes"],["./seti","Időzítés"]];return s.$$set=a=>{"active"in a&&i(0,t=a.active)},[t,l]}class E extends b{constructor(n){super(),M(this,n,y,A,p,{active:0})}}export{E as M,f as e};
