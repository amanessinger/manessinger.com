/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='manessingercomment']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t,e){return"sc-"+t.t+(e&&e!==E?"-"+e:"")}function f(t,e){return t+(e?"-h":"-s")}function r(t){return{e:t[0],n:t[1],o:!!t[2],i:!!t[3],f:!!t[4]}}function c(t,e){if(A(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function l(t,e,n,o){const i=t.r.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.r.delete(e))}function s(t,e){let n,o,i=null,f=!1,r=!1;for(var c=arguments.length;c-- >2;)L.push(arguments[c]);for(;L.length>0;){let e=L.pop();if(e&&void 0!==e.pop)for(c=e.length;c--;)L.push(e[c]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&f?i[i.length-1].vtext+=e:null===i?i=[r?{vtext:e}:e]:i.push(r?{vtext:e}:e),f=r}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(c in e.class)e.class[c]&&L.push(c);e.class=L.join(" "),L.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],q):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,c:void 0,l:!1}}function u(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function a(t,e){t.s.has(e)||(t.s.set(e,!0),t.u?t.queue.write(()=>p(t,e)):t.queue.tick(()=>p(t,e)))}function p(t,e,n,o,i,f){if(t.s.delete(e),!t.a.has(e)){if(o=t.p.get(e),n=!o){if((i=t.r.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{p(t,e)}),void(i.$onRender=i["s-rc"]);o=function r(t,e,n,o,i,f,c){try{o=new(i=t.v(e).d),function l(t,e,n,o,i,f,r){for(r in t.m.set(o,n),t.y.has(n)||t.y.set(n,{}),(f=Object.assign({color:{type:String}},e.properties)).mode={type:String},f)v(t,f[r],n,o,r,i)}(t,i,e,o,n)}catch(n){o={},t.b(n,7,e,!0)}return t.p.set(e,o),o}(t,e,t.g.get(e))}f&&f.then?f.then(()=>d(t,e,o,n)):d(t,e,o,n)}}function d(t,e,n,o){(function i(t,e,n,o){try{const i=e.d.host,r=e.d.encapsulation,c="shadow"===r&&t.M.w;let l,u;if(u=c?n.shadowRoot:n,!n["s-rn"]){t.k(t,t.M,e,n);const i=n["s-sc"];i&&(t.M.C(n,f(i,!0)),o.render||t.M.C(n,f(i)))}if(o.render||o.hostData||i||l){t.x=!0;const e=o.render&&o.render();let i;t.x=!1;const f=t.W.get(n)||{};f.c=u;const l=s(null,i,e);t.W.set(n,t.render(n,f,l,c,r))}n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.x=!1,t.b(e,8,n,!0)}})(t,t.v(e),e,n);try{o?e["s-init"]():k(t.W.get(e))}catch(n){t.b(n,6,e,!0)}}function v(t,e,n,o,i,f,r,l){if(e.type||e.state){const s=t.y.get(n);e.state||(!e.attr||void 0!==s[i]&&""!==s[i]||(r=f&&f.j)&&A(l=r[e.attr])&&(s[i]=c(e.type,l)),n.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=c(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=o[i]),e.watchCallbacks&&(s[B+i]=e.watchCallbacks.slice()),y(o,i,function s(e){return(e=t.y.get(t.m.get(this)))&&e[i]},function u(n,o){(o=t.m.get(this))&&(e.state||e.mutable)&&m(t,o,i,n)})}else if(e.context){const f=t.N(e.context);void 0!==f&&h(o,i,f.O&&f.O(n)||f)}}function m(t,e,n,o,i,f,r){(i=t.y.get(e))||t.y.set(e,i={}),o!==i[n]&&(i[n]=o,t.p.get(e)&&(i[B+n],!t.x&&e["s-rn"]&&a(t,e)))}function h(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function y(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function b(t,e,n,o,i,f,r){if("class"!==n||f)if("style"===n){for(const t in o)i&&null!=i[t]||(/-/.test(t)?e.style.S(t):e.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!f&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.v(e);o&&o.A&&o.A[n]?w(e,n,i):"ref"!==n&&(w(e,n,null==i?"":i),null!=i&&!1!==i||t.M.T(e,n))}else null!=i&&"key"!==n?function c(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(D,T(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(D,T(e),n):t.setAttribute(e,n))}(e,n,i):(f||t.M.R(e,n)&&(null==i||!1===i))&&t.M.T(e,n);else n=T(n)in e?T(n.substring(2)):T(n[2])+n.substring(3),i?i!==o&&t.M.L(e,n,i):t.M.q(e,n);else if(o!==i){const t=g(o),n=g(i),f=t.filter(t=>!n.includes(t)),r=g(e.className).filter(t=>!f.includes(t)),c=n.filter(e=>!t.includes(e)&&!r.includes(e));r.push(...c),e.className=r.join(" ")}}function g(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function w(t,e,n){try{t[e]=n}catch(t){}}function M(t,e,n,o,i){const f=11===n.c.nodeType&&n.c.host?n.c.host:n.c,r=e&&e.vattrs||O,c=n.vattrs||O;for(i in r)c&&null!=c[i]||null==r[i]||b(t,f,i,r[i],void 0,o,n.l);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?f[i]:r[i])||b(t,f,i,r[i],c[i],o,n.l)}function $(t,e){function n(i,f,r,c,l,s,p,h,y){if(h=f.vchildren[r],u||(d=!0,"slot"===h.vtag&&(a&&e.C(c,a+"-s"),h.vchildren?h.B=!0:h.D=!0)),A(h.vtext))h.c=e.P(h.vtext);else if(h.D)h.c=e.P("");else{if(s=h.c=P||"svg"===h.vtag?e.F("http://www.w3.org/2000/svg",h.vtag):e.H(h.B?"slot-fb":h.vtag),P="svg"===h.vtag||"foreignObject"!==h.vtag&&P,M(t,null,h,P),A(a)&&s["s-si"]!==a&&e.C(s,s["s-si"]=a),h.vchildren)for(l=0;l<h.vchildren.length;++l)(p=n(i,h,l,s))&&e.I(s,p);"svg"===h.vtag&&(P=!1)}return h.c["s-hn"]=v,(h.B||h.D)&&(h.c["s-sr"]=!0,h.c["s-cr"]=m,h.c["s-sn"]=h.vname||"",(y=i&&i.vchildren&&i.vchildren[r])&&y.vtag===h.vtag&&i.c&&o(i.c)),h.c}function o(n,i,f,r){t.U=!0;const s=e.Q(n);for(f=s.length-1;f>=0;f--)(r=s[f])["s-hn"]!==v&&r["s-ol"]&&(e.Z(r),e.z(l(r),r,c(r)),e.Z(r["s-ol"]),r["s-ol"]=null,d=!0),i&&o(r,i);t.U=!1}function i(t,o,i,f,r,l,s,u){const a=t["s-cr"]||t.$defaultHolder;for((s=a&&e.G(a)||t).shadowRoot&&e.J(s)===v&&(s=s.shadowRoot);r<=l;++r)f[r]&&(u=A(f[r].vtext)?e.P(f[r].vtext):n(null,i,r,t))&&(f[r].c=u,e.z(s,u,c(o)))}function f(t,n,i,f){for(;n<=i;++n)A(t[n])&&(f=t[n].c,p=!0,f["s-ol"]?e.Z(f["s-ol"]):o(f,!0),e.Z(f))}function r(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function c(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.G(t["s-ol"]?t["s-ol"]:t)}const s=[];let u,a,p,d,v,m;return function h(y,b,g,w,$,k,C,x,W,j,N,E){if(v=e.J(y),m=y["s-cr"],u=w,a=y["s-sc"],d=p=!1,function s(u,a,p){const d=a.c=u.c,v=u.vchildren,m=a.vchildren;P=a.c&&A(e.K(a.c))&&void 0!==a.c.ownerSVGElement,P="svg"===a.vtag||"foreignObject"!==a.vtag&&P,A(a.vtext)?(p=d["s-cr"]||d.$defaultHolder)?e.V(e.G(p),a.vtext):u.vtext!==a.vtext&&e.V(d,a.vtext):("slot"!==a.vtag&&M(t,u,a,P),A(v)&&A(m)?function h(t,u,a,p,d,v,m,y){let b=0,g=0,w=u.length-1,M=u[0],$=u[w],k=p.length-1,C=p[0],x=p[k];for(;b<=w&&g<=k;)if(null==M)M=u[++b];else if(null==$)$=u[--w];else if(null==C)C=p[++g];else if(null==x)x=p[--k];else if(r(M,C))s(M,C),M=u[++b],C=p[++g];else if(r($,x))s($,x),$=u[--w],x=p[--k];else if(r(M,x))"slot"!==M.vtag&&"slot"!==x.vtag||o(e.G(M.c)),s(M,x),e.z(t,M.c,e.X($.c)),M=u[++b],x=p[--k];else if(r($,C))"slot"!==M.vtag&&"slot"!==x.vtag||o(e.G($.c)),s($,C),e.z(t,$.c,M.c),$=u[--w],C=p[++g];else{for(d=null,v=b;v<=w;++v)if(u[v]&&A(u[v].vkey)&&u[v].vkey===C.vkey){d=v;break}A(d)?((y=u[d]).vtag!==C.vtag?m=n(u&&u[g],a,d,t):(s(y,C),u[d]=void 0,m=y.c),C=p[++g]):(m=n(u&&u[g],a,g,t),C=p[++g]),m&&e.z(l(M.c),m,c(M.c))}b>w?i(t,null==p[k+1]?null:p[k+1].c,a,p,g,k):g>k&&f(u,b,w)}(d,v,a,m):A(m)?(A(u.vtext)&&e.V(d,""),i(d,null,a,m,0,m.length-1)):A(v)&&f(v,0,v.length-1)),P&&"svg"===a.vtag&&(P=!1)}(b,g),d){for(function t(n,o,i,f,r,c,l,u,a,d){for(r=0,c=(o=e.Q(n)).length;r<c;r++){if((i=o[r])["s-sr"]&&(f=i["s-cr"]))for(u=e.Q(e.G(f)),a=i["s-sn"],l=u.length-1;l>=0;l--)(f=u[l])["s-cn"]||f["s-nr"]||f["s-hn"]===i["s-hn"]||((3===(d=e.Y(f))||8===d)&&""===a||1===d&&null===e._(f,"slot")&&""===a||1===d&&e._(f,"slot")===a)&&(s.some(t=>t.tt===f)||(p=!0,f["s-sn"]=a,s.push({et:i,tt:f})));1===e.Y(i)&&t(i)}}(g.c),C=0;C<s.length;C++)(x=s[C]).tt["s-ol"]||((W=e.P(""))["s-nr"]=x.tt,e.z(e.G(x.tt),x.tt["s-ol"]=W,x.tt));for(t.U=!0,C=0;C<s.length;C++){for(x=s[C],N=e.G(x.et),E=e.X(x.et),W=x.tt["s-ol"];W=e.nt(W);)if((j=W["s-nr"])&&j&&j["s-sn"]===x.tt["s-sn"]&&N===e.G(j)&&(j=e.X(j))&&j&&!j["s-nr"]){E=j;break}(!E&&N!==e.G(x.tt)||e.X(x.tt)!==E)&&x.tt!==E&&(e.Z(x.tt),e.z(N,x.tt,E))}t.U=!1}return p&&function t(n,o,i,f,r,c,l,s){for(f=0,r=(i=e.Q(n)).length;f<r;f++)if(o=i[f],1===e.Y(o)){if(o["s-sr"])for(l=o["s-sn"],o.hidden=!1,c=0;c<r;c++)if(i[c]["s-hn"]!==o["s-hn"])if(s=e.Y(i[c]),""!==l){if(1===s&&l===e._(i[c],"slot")){o.hidden=!0;break}}else if(1===s||3===s&&""!==e.ot(i[c]).trim()){o.hidden=!0;break}t(o)}}(g.c),s.length=0,g}}function k(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.c),t.vchildren&&t.vchildren.forEach(t=>{k(t,e)}))}function C(t,e,n,o,i){const f=t.Y(e);let r,c,l,s;if(i&&1===f){(c=t._(e,N))&&(l=c.split("."))[0]===o&&((s={}).vtag=t.J(s.c=e),n.vchildren||(n.vchildren=[]),n.vchildren[l[1]]=s,n=s,i=""!==l[2]);for(let f=0;f<e.childNodes.length;f++)C(t,e.childNodes[f],n,o,i)}else 3===f&&(r=e.previousSibling)&&8===t.Y(r)&&"s"===(l=t.ot(r).split("."))[0]&&l[1]===o&&((s={vtext:t.ot(e)}).c=e,n.vchildren||(n.vchildren=[]),n.vchildren[l[2]]=s)}function x(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.a.delete(o),t.it.has(o)||(t.it.set(o,!0),o["s-id"]||(o["s-id"]=t.ft()),function i(t,e,n){for(n=e;n=t.M.K(n);)if(t.rt(n)){t.ct.has(e)||(t.r.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.g.set(o,function n(t,e,o,i,f){return o.mode||(o.mode=t.lt(o)),o["s-cr"]||t._(o,j)||t.w&&1===e.st||(o["s-cr"]=t.P(""),o["s-cr"]["s-cn"]=!0,t.z(o,o["s-cr"],t.Q(o)[0])),t.w||1!==e.st||(o.shadowRoot=o),1===e.st&&t.w&&!o.shadowRoot&&t.ut(o,{mode:"open"}),i={at:o["s-id"],j:{}},e.A&&Object.keys(e.A).forEach(n=>{(f=e.A[n].pt)&&(i.j[f]=t._(o,f))}),i}(t.M,e,o)),t.dt(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n){!t.U&&function o(t,e){for(;e;){if(!t.G(e))return 9!==t.Y(e);e=t.G(e)}}(t.M,n)&&(t.a.set(n,!0),l(t,n),k(t.W.get(n),!0),t.M.q(n),t.vt.delete(n),[t.r,t.mt,t.g].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,f){if(!t.ct.has(n)&&t.p.get(n)&&!t.a.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.ct.set(n,!0);try{k(t.W.get(n)),(f=t.mt.get(n))&&(f.forEach(t=>t(n)),t.mt.delete(n))}catch(e){t.b(e,4,n)}t.M.C(n,o),l(t,n)}})(t,this,o)},n.forceUpdate=function(){a(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],f=i.ht;1===f||2===f?y(n,o,function e(){return(t.y.get(this)||{})[o]},function e(n){m(t,this,o,c(i.yt,n))}):6===f&&h(n,o,R)})}(t,e.A,n)}function W(t,e,n,o){return function(){const i=arguments;return function f(t,e,n){let o=e[n];const i=t.bt.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.H(n),t.I(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const j="ssrv",N="ssrc",E="$",O={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},A=t=>null!=t,T=t=>t.toLowerCase(),R=()=>{},L=[],q={forEach:(t,e)=>{t.forEach((t,n,o)=>e(u(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(u(t),n,o)))},B="wc-",D="http://www.w3.org/1999/xlink";let P=!1;(function F(t,e,n,o,f,c){function l(t,e){n.customElements.get(t.t)||(x(b,u[t.t]=t,e.prototype,c),n.customElements.define(t.t,e))}const u={html:{}},p={},d=n[t]=n[t]||{},v=function m(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={bt:n,gt:!1,Y:t=>t.nodeType,H:t=>n.createElement(t),F:(t,e)=>n.createElementNS(t,e),P:t=>n.createTextNode(t),wt:t=>n.createComment(t),z:(t,e,n)=>t.insertBefore(e,n),Z:t=>t.remove(),I:(t,e)=>t.appendChild(e),C:(t,e)=>t.classList.add(e),Q:t=>t.childNodes,G:t=>t.parentNode,X:t=>t.nextSibling,nt:t=>t.previousSibling,J:t=>T(t.nodeName),ot:t=>t.textContent,V:(t,e)=>t.textContent=e,_:(t,e)=>t.getAttribute(e),Mt:(t,e,n)=>t.setAttribute(e,n),$t:(t,e,n,o)=>t.setAttributeNS(e,n,o),T:(t,e)=>t.removeAttribute(e),R:(t,e)=>t.hasAttribute(e),lt:e=>e.getAttribute("mode")||(t.Context||{}).mode,kt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.K(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,L:(e,n,f,r,c,l,s,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof l?p=i.kt(e,l):"object"==typeof l?p=l:(u=n.split(":")).length>1&&(p=i.kt(e,u[0]),n=u[1]),!p)return;let v=f;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===S[u[1]]&&f(t)})),s=i.gt?{capture:!!r,passive:!!c}:!!r,t.ael(p,n,v,s),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,s),d[a]=null})},q:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},ut:(t,e)=>t.attachShadow(e)};return i.w=!!i.bt.documentElement.attachShadow,i.Ct=((t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o))),i.K=((t,e)=>(e=i.G(t))&&11===i.Y(e)?e.host:e),i}(d,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=f,d.h=s,d.Context=e;const h=n["s-defined"]=n.$definedCmps=n["s-defined"]||n.$definedCmps||{};let y=0;const b={M:v,xt:l,Wt:e.emit,v:t=>u[v.J(t)],N:t=>e[t],isClient:!0,rt:t=>!(!h[v.J(t)]&&!b.v(t)),ft:()=>t+y++,b:(t,e,n)=>void 0,jt:t=>(function e(t,n,o){return{create:W(t,n,o,"create"),componentOnReady:W(t,n,o,"componentOnReady")}})(v,p,t),queue:e.queue=function g(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e](f())}catch(t){}t.length=0}function o(t,e){let n,o=0;for(;o<t.length&&(n=f())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function i(){a++,n(l);const e=f()+7*Math.ceil(a*(1/22));o(s,e),o(u,e),s.length>0&&(u.push(...s),s.length=0),(p=l.length+s.length+u.length>0)?t.raf(i):a=0}const f=()=>e.performance.now(),r=Promise.resolve(),c=[],l=[],s=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){c.push(t),1===c.length&&r.then(()=>n(c))},read(e){l.push(e),p||(p=!0,t.raf(i))},write(e){s.push(e),p||(p=!0,t.raf(i))}}}(d,n),dt:function w(t,e,n){if(t.d)a(b,e);else{const n="string"==typeof t.Nt?t.Nt:t.Nt[e.mode],o=2===t.st||1===t.st&&!v.w;import(f+n+(o?".sc":"")+".js").then(n=>{try{t.d=n[(t=>T(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,f){if(i){const n=e.t+(f||E);if(!e[n]){const o=t.H("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.I(t.bt.head,o)}}}(v,t,t.st,t.d.style,t.d.styleMode)}catch(e){t.d=class{}}a(b,e)}).catch(t=>void 0)}},r:new WeakMap,Et:new WeakMap,it:new WeakMap,vt:new WeakMap,ct:new WeakMap,m:new WeakMap,g:new WeakMap,p:new WeakMap,a:new WeakMap,s:new WeakMap,mt:new WeakMap,Ot:new WeakMap,W:new WeakMap,y:new WeakMap};b.render=$(b,v);const M=v.bt.documentElement;M["s-ld"]=[],M["s-rn"]=!0,M["s-init"]=(()=>{b.ct.set(M,d.loaded=b.u=!0),v.Ct(n,"appload",{detail:{namespace:t}})}),function k(t,e,n){const o=n.querySelectorAll(`[${j}]`),i=o.length;let f,r,c,l,s,u;if(i>0)for(t.ct.set(n,!0),l=0;l<i;l++)for(f=o[l],r=e._(f,j),(c={}).vtag=e.J(c.c=f),t.W.set(f,c),s=0,u=f.childNodes.length;s<u;s++)C(e,f.childNodes[s],c,r,!0)}(b,v,M),b.k=((t,e,n,o)=>{(function f(t,e,n,o){const f=2===n.st||1===n.st&&!t.M.w;let r=n.t+o.mode,c=n[r];if(f&&(o["s-sc"]=i(n,o.mode)),c||(c=n[r=n.t+E],f&&(o["s-sc"]=i(n))),c){let i=e.bt.head;if(e.w)if(1===n.st)i=o.shadowRoot;else{let t=o;for(;t=e.G(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let f=t.Et.get(i);if(f||t.Et.set(i,f={}),!f[r]){let t;{t=c.content.cloneNode(!0),f[r]=!0;const n=i.querySelectorAll("[data-styles]");e.z(i,t,n.length&&n[n.length-1].nextSibling||i.firstChild)}}}})(t,e,n,o)}),(d.components||[]).map(t=>{const e=function n(t,e,o){const i={t:t[0],A:{color:{pt:"color"}}};i.Nt=t[1];const f=t[3];if(f)for(e=0;e<f.length;e++)o=f[e],i.A[o[0]]={ht:o[1],St:!!o[2],pt:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,yt:o[4]};return i.st=t[4],t[5]&&(i.At=t[5].map(r)),i}(t);return u[e.t]=e}).forEach(t=>l(t,class extends HTMLElement{})),function N(t,e,n,o,i,f){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.v(e);if(o)if(t.ct.has(e))n(e);else{const o=t.mt.get(e)||[];o.push(n),t.mt.set(e,o)}return!!o}),i){for(f=i.length-1;f>=0;f--)e.componentOnReady(i[f][0],i[f][1])&&i.splice(f,1);for(f=0;f<o.length;f++)if(!n[o[f]].componentOnReady)return;for(f=0;f<i.length;f++)i[f][1](null);i.length=0}}(b,d,n,n["s-apps"],n["s-cr"]),d.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"manessingercomment","hydrated");