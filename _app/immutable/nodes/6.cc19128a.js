import{s as K,n as N,f as O,r as L,b as P}from"../chunks/scheduler.7ca2eff6.js";import{S as Q,i as U,g as S,s as E,D as q,e as D,h as B,y as W,c as A,E as M,j,f as v,k as h,a as m,x as X,C,A as T}from"../chunks/index.e4d86af0.js";import{e as k}from"../chunks/each.e59479a4.js";const Y=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:Y},Symbol.toStringTag,{value:"Module"}));function z(i,e,o){const t=i.slice();return t[8]=e[o].color,t[9]=e,t[10]=o,t}function H(i,e,o){const t=i.slice();return t[11]=e[o],t[12]=e,t[10]=o,t}function I(i,e,o){const t=i.slice();return t[11]=e[o],t}function R(i,e,o){const t=i.slice();return t[15]=e[o],t}function V(i){let e,o,t,n,c;return{c(){e=q("line"),this.h()},l(s){e=M(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),j(e).forEach(v),this.h()},h(){h(e,"x1",o=i[0][i[15]].x),h(e,"y1",t=i[0][i[15]].y),h(e,"x2",n=i[11].x),h(e,"y2",c=i[11].y),h(e,"stroke","#123432"),h(e,"stroke-width","0.7")},m(s,f){m(s,e,f)},p(s,f){f&1&&o!==(o=s[0][s[15]].x)&&h(e,"x1",o),f&1&&t!==(t=s[0][s[15]].y)&&h(e,"y1",t),f&1&&n!==(n=s[11].x)&&h(e,"x2",n),f&1&&c!==(c=s[11].y)&&h(e,"y2",c)},d(s){s&&v(e)}}}function F(i){let e,o=k(i[11].nl),t=[];for(let n=0;n<o.length;n+=1)t[n]=V(R(i,o,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=D()},l(n){for(let c=0;c<t.length;c+=1)t[c].l(n);e=D()},m(n,c){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,c);m(n,e,c)},p(n,c){if(c&1){o=k(n[11].nl);let s;for(s=0;s<o.length;s+=1){const f=R(n,o,s);t[s]?t[s].p(f,c):(t[s]=V(f),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=o.length}},d(n){n&&v(e),C(t,n)}}}function G(i){let e,o,t,n,c,s=i[10],f,g;const y=()=>i[6](e,s),p=()=>i[6](null,s);return{c(){e=q("circle"),this.h()},l(a){e=M(a,"circle",{ondragover:!0,id:!0,cx:!0,cy:!0,r:!0,fill:!0,class:!0,stroke:!0,"stroke-width":!0}),j(e).forEach(v),this.h()},h(){h(e,"ondragover","return false"),h(e,"id","c"+i[10]),h(e,"cx",o=i[11].x),h(e,"cy",t=i[11].y),h(e,"r",$),h(e,"fill",n=i[11].b),h(e,"class",c=O(i[11].b)+" svelte-kbs88b"),h(e,"stroke","#123432"),h(e,"stroke-width","0.7")},m(a,_){m(a,e,_),y(),f||(g=T(e,"drop",i[3]),f=!0)},p(a,_){i=a,_&1&&o!==(o=i[11].x)&&h(e,"cx",o),_&1&&t!==(t=i[11].y)&&h(e,"cy",t),_&1&&n!==(n=i[11].b)&&h(e,"fill",n),_&1&&c!==(c=O(i[11].b)+" svelte-kbs88b")&&h(e,"class",c),s!==i[10]&&(p(),s=i[10],y())},d(a){a&&v(e),p(),f=!1,g()}}}function J(i){let e,o,t=i[10],n,c;const s=()=>i[7](e,t),f=()=>i[7](null,t);return{c(){e=S("div"),this.h()},l(g){e=B(g,"DIV",{id:!0,class:!0,draggable:!0}),j(e).forEach(v),this.h()},h(){h(e,"id","b"+i[10]),h(e,"class",o="objects "+i[8]+" svelte-kbs88b"),h(e,"draggable","true")},m(g,y){m(g,e,y),s(),n||(c=[T(e,"dragstart",i[4]),T(e,"dragend",i[5])],n=!0)},p(g,y){i=g,y&2&&o!==(o="objects "+i[8]+" svelte-kbs88b")&&h(e,"class",o),t!==i[10]&&(f(),t=i[10],s())},d(g){g&&v(e),f(),n=!1,L(c)}}}function Z(i){let e,o="Malom",t,n,c,s,f,g,y,p=k(i[0]),a=[];for(let r=0;r<p.length;r+=1)a[r]=F(I(i,p,r));let _=k(i[0]),u=[];for(let r=0;r<_.length;r+=1)u[r]=G(H(i,_,r));let x=k(i[1]),d=[];for(let r=0;r<x.length;r+=1)d[r]=J(z(i,x,r));return{c(){e=S("h1"),e.textContent=o,t=E(),n=q("svg");for(let r=0;r<a.length;r+=1)a[r].c();c=D();for(let r=0;r<u.length;r+=1)u[r].c();s=E(),f=S("br"),g=E();for(let r=0;r<d.length;r+=1)d[r].c();y=D(),this.h()},l(r){e=B(r,"H1",{"data-svelte-h":!0}),W(e)!=="svelte-qa0aos"&&(e.textContent=o),t=A(r),n=M(r,"svg",{id:!0,viewBox:!0,class:!0});var b=j(n);for(let l=0;l<a.length;l+=1)a[l].l(b);c=D();for(let l=0;l<u.length;l+=1)u[l].l(b);b.forEach(v),s=A(r),f=B(r,"BR",{}),g=A(r);for(let l=0;l<d.length;l+=1)d[l].l(r);y=D(),this.h()},h(){h(n,"id","mt"),h(n,"viewBox","0 0 120 120"),h(n,"class","svelte-kbs88b")},m(r,b){m(r,e,b),m(r,t,b),m(r,n,b);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(n,null);X(n,c);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(n,null);m(r,s,b),m(r,f,b),m(r,g,b);for(let l=0;l<d.length;l+=1)d[l]&&d[l].m(r,b);m(r,y,b)},p(r,[b]){if(b&1){p=k(r[0]);let l;for(l=0;l<p.length;l+=1){const w=I(r,p,l);a[l]?a[l].p(w,b):(a[l]=F(w),a[l].c(),a[l].m(n,c))}for(;l<a.length;l+=1)a[l].d(1);a.length=p.length}if(b&13){_=k(r[0]);let l;for(l=0;l<_.length;l+=1){const w=H(r,_,l);u[l]?u[l].p(w,b):(u[l]=G(w),u[l].c(),u[l].m(n,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=_.length}if(b&50){x=k(r[1]);let l;for(l=0;l<x.length;l+=1){const w=z(r,x,l);d[l]?d[l].p(w,b):(d[l]=J(w),d[l].c(),d[l].m(y.parentNode,y))}for(;l<d.length;l+=1)d[l].d(1);d.length=x.length}},i:N,o:N,d(r){r&&(v(e),v(t),v(n),v(s),v(f),v(g),v(y)),C(a,r),C(u,r),C(d,r)}}}var $=3.1;function ee(i,e,o){var t=[{x:10,y:10,b:"white",nl:[1,9]},{x:60,y:10,b:"white",nl:[0,2,4]},{x:110,y:10,b:"white",nl:[1,14]},{x:25,y:25,b:"white",nl:[4,10]},{x:60,y:25,b:"white",nl:[1,3,5,7]},{x:95,y:25,b:"white",nl:[4,13]},{x:40,y:40,b:"white",nl:[7,11]},{x:60,y:40,b:"white",nl:[4,6,8]},{x:80,y:40,b:"white",nl:[7,12]},{x:10,y:60,b:"white",nl:[0,10,21]},{x:25,y:60,b:"white",nl:[3,9,11,18]},{x:40,y:60,b:"white",nl:[6,10,15]},{x:80,y:60,b:"white",nl:[8,13,17]},{x:95,y:60,b:"white",nl:[5,12,14,20]},{x:110,y:60,b:"white",nl:[2,13,23]},{x:40,y:80,b:"white",nl:[11,16]},{x:60,y:80,b:"white",nl:[15,17,19]},{x:80,y:80,b:"white",nl:[12,16]},{x:25,y:95,b:"white",nl:[10,19]},{x:60,y:95,b:"white",nl:[16,18,20,22]},{x:95,y:95,b:"white",nl:[13,19]},{x:10,y:110,b:"white",nl:[9,22]},{x:60,y:110,b:"white",nl:[19,21,23]},{x:110,y:110,b:"white",nl:[14,22]}];let n=Array(18).fill(null).map((a,_)=>({el:null,color:_<9?"red":"blue"})),c=Array(24).fill(null).map(()=>null);function s(a){a.preventDefault();var _=a.target.id.slice(1),u=a.dataTransfer.getData("id");o(0,t[_].b=n[u].color,t),o(1,n[u].el.style.display="none",n),c[_].setAttribute("ondragover","return true")}function f(a){var _=a.target.getAttribute("id").slice(1);a.dataTransfer.setData("id",_),a.target.style.backgroundColor=n[_].color=="red"?"#f88":"#88f"}function g(a){a.target.style.backgroundColor=n[a.target.id.slice(1)].color}function y(a,_){P[a?"unshift":"push"](()=>{c[_]=a,o(2,c)})}function p(a,_){P[a?"unshift":"push"](()=>{n[_].el=a,o(1,n)})}return[t,n,c,s,f,g,y,p]}class re extends Q{constructor(e){super(),U(this,e,ee,Z,K,{})}}export{re as component,ie as universal};
