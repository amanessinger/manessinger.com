/*!
 * manessingercomment: Core, ES5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==E?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n){return{t:n[0],e:n[1],r:!!n[2],i:!!n[3],o:!!n[4]}}function r(n,t){if(_(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function i(n,t,e,r){var i=n.u.get(t);i&&((r=i["s-ld"]||i.$activeLoading)&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),n.u.delete(t))}function o(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)T.push(arguments[f]);for(;T.length>0;){var c=T.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)T.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&T.push(f);t.class=T.join(" "),T.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],P):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,f:void 0,c:!1}}function u(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function f(n,t){n.a.has(t)||(n.a.set(t,!0),n.s?n.queue.write(function(){return c(n,t)}):n.queue.tick(function(){return c(n,t)}))}function c(n,t,e,r,i,o){if(n.a.delete(t),!n.l.has(t)){if(r=n.v.get(t),e=!r){if((i=n.u.get(t))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(function(){c(n,t)}),void(i.$onRender=i["s-rc"]);r=function u(n,t,e,r,i,o,f){try{r=new(i=n.d(t).p),function c(n,t,e,r,i,o,u){for(u in n.y.set(r,e),n.m.has(e)||n.m.set(e,{}),(o=Object.assign({color:{type:String}},t.properties)).mode={type:String},o)s(n,o[u],e,r,u,i)}(n,i,t,r,e)}catch(e){r={},n.b(e,7,t,!0)}return n.v.set(t,r),r}(n,t,n.w.get(t))}o&&o.then?o.then(function(){return a(n,t,r,e)}):a(n,t,r,e)}}function a(n,e,r,i){(function u(n,e,r,i){try{var u,f=e.p.host,c=e.p.encapsulation,a="shadow"===c&&n.M.g;if(u=a?r.shadowRoot:r,!r["s-rn"]){n.k(n,n.M,e,r);var s=r["s-sc"];s&&(n.M.j(r,t(s,!0)),i.render||n.M.j(r,t(s)))}if(i.render||i.hostData||f){n.A=!0;var l=i.render&&i.render();n.A=!1;var v=n.C.get(r)||{};v.f=u;var p=o(null,void 0,l);n.C.set(r,n.render(r,v,p,a,c))}n.O&&n.O._(r),r["s-rn"]=!0,r.$onRender&&(r["s-rc"]=r.$onRender),r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.A=!1,n.b(t,8,r,!0)}})(n,n.d(e),e,r);try{i?e["s-init"]():w(n.C.get(e))}catch(t){n.b(t,6,e,!0)}}function s(n,t,e,i,o,u,f,c){if(t.type||t.state){var a=n.m.get(e);t.state||(!t.attr||void 0!==a[o]&&""!==a[o]||(f=u&&u.x)&&_(c=f[t.attr])&&(a[o]=r(t.type,c)),e.hasOwnProperty(o)&&(void 0===a[o]&&(a[o]=r(t.type,e[o])),"mode"!==o&&delete e[o])),i.hasOwnProperty(o)&&void 0===a[o]&&(a[o]=i[o]),t.watchCallbacks&&(a[W+o]=t.watchCallbacks.slice()),p(i,o,function s(t){return(t=n.m.get(n.y.get(this)))&&t[o]},function d(e,r){(r=n.y.get(this))&&(t.state||t.mutable)&&l(n,r,o,e)})}else if(t.context){var h=n.S(t.context);void 0!==h&&v(i,o,h.T&&h.T(e)||h)}}function l(n,t,e,r,i,o,u){(i=n.m.get(t))||n.m.set(t,i={}),r!==i[e]&&(i[e]=r,n.v.get(t)&&(i[W+e],!n.A&&t["s-rn"]&&f(n,t)))}function v(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function p(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function d(n,t,e,r,i,o,u){if("class"!==e||o)if("style"===e){for(var f in r)i&&null!=i[f]||(/-/.test(f)?t.style.P(f):t.style[f]="");for(var f in i)r&&i[f]===r[f]||(/-/.test(f)?t.style.setProperty(f,i[f]):t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var c=n.d(t);c&&c.W&&c.W[e]?y(t,e,i):"ref"!==e&&(y(t,e,null==i?"":i),null!=i&&!1!==i||n.M.N(t,e))}else null!=i&&"key"!==e?function a(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(N,x(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(N,x(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.M.L(t,e)&&(null==i||!1===i))&&n.M.N(t,e);else e=x(e)in t?x(e.substring(2)):x(e[2])+e.substring(3),i?i!==r&&n.M.R(t,e,i):n.M.D(t,e);else if(r!==i){var s=h(r),l=h(i),v=s.filter(function(n){return!l.includes(n)}),p=h(t.className).filter(function(n){return!v.includes(n)}),d=l.filter(function(n){return!s.includes(n)&&!p.includes(n)});p.push.apply(p,d),t.className=p.join(" ")}}function h(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function y(n,t,e){try{n[t]=e}catch(n){}}function m(n,t,e,r,i){var o=11===e.f.nodeType&&e.f.host?e.f.host:e.f,u=t&&t.vattrs||C,f=e.vattrs||C;for(i in u)f&&null!=f[i]||null==u[i]||d(n,o,i,u[i],void 0,r,e.c);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||d(n,o,i,u[i],f[i],r,e.c)}function b(n,t){function e(i,o,u,f,c,l,h,y,b){if(y=o.vchildren[u],a||(v=!0,"slot"===y.vtag&&(s&&t.j(f,s+"-s"),y.vchildren?y.F=!0:y.H=!0)),_(y.vtext))y.f=t.q(y.vtext);else if(y.H)y.f=t.q("");else{if(l=y.f=L||"svg"===y.vtag?t.B("http://www.w3.org/2000/svg",y.vtag):t.U(y.F?"slot-fb":y.vtag),L="svg"===y.vtag||"foreignObject"!==y.vtag&&L,m(n,null,y,L),_(s)&&l["s-si"]!==s&&t.j(l,l["s-si"]=s),y.vchildren)for(c=0;c<y.vchildren.length;++c)(h=e(i,y,c,l))&&t.I(l,h);"svg"===y.vtag&&(L=!1)}return y.f["s-hn"]=p,(y.F||y.H)&&(y.f["s-sr"]=!0,y.f["s-cr"]=d,y.f["s-sn"]=y.vname||"",(b=i&&i.vchildren&&i.vchildren[u])&&b.vtag===y.vtag&&i.f&&r(i.f)),y.f}function r(e,i,o,u){n.Q=!0;var a=t.Y(e);for(o=a.length-1;o>=0;o--)(u=a[o])["s-hn"]!==p&&u["s-ol"]&&(t.Z(u),t.z(c(u),u,f(u)),t.Z(u["s-ol"]),u["s-ol"]=null,v=!0),i&&r(u,i);n.Q=!1}function i(n,r,i,o,u,c,a,s){var l=n["s-cr"]||n.$defaultHolder;for((a=l&&t.G(l)||n).shadowRoot&&t.J(a)===p&&(a=a.shadowRoot);u<=c;++u)o[u]&&(s=_(o[u].vtext)?t.q(o[u].vtext):e(null,i,u,n))&&(o[u].f=s,t.z(a,s,f(r)))}function o(n,e,i,o){for(;e<=i;++e)_(n[e])&&(o=n[e].f,l=!0,o["s-ol"]?t.Z(o["s-ol"]):r(o,!0),t.Z(o))}function u(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function f(n){return n&&n["s-ol"]?n["s-ol"]:n}function c(n){return t.G(n["s-ol"]?n["s-ol"]:n)}var a,s,l,v,p,d,h=[];return function y(b,w,g,M,$,k,j,A,E,C,O,x){if(p=t.J(b),d=b["s-cr"],a=M,s=b["s-sc"],v=l=!1,function a(s,l,v){var p=l.f=s.f,d=s.vchildren,h=l.vchildren;L=l.f&&_(t.K(l.f))&&void 0!==l.f.ownerSVGElement,L="svg"===l.vtag||"foreignObject"!==l.vtag&&L,_(l.vtext)?(v=p["s-cr"]||p.$defaultHolder)?t.V(t.G(v),l.vtext):s.vtext!==l.vtext&&t.V(p,l.vtext):("slot"!==l.vtag&&m(n,s,l,L),_(d)&&_(h)?function y(n,s,l,v,p,d,h,m){for(var b=0,w=0,g=s.length-1,M=s[0],$=s[g],k=v.length-1,j=v[0],A=v[k];b<=g&&w<=k;)if(null==M)M=s[++b];else if(null==$)$=s[--g];else if(null==j)j=v[++w];else if(null==A)A=v[--k];else if(u(M,j))a(M,j),M=s[++b],j=v[++w];else if(u($,A))a($,A),$=s[--g],A=v[--k];else if(u(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||r(t.G(M.f)),a(M,A),t.z(n,M.f,t.X($.f)),M=s[++b],A=v[--k];else if(u($,j))"slot"!==M.vtag&&"slot"!==A.vtag||r(t.G($.f)),a($,j),t.z(n,$.f,M.f),$=s[--g],j=v[++w];else{for(p=null,d=b;d<=g;++d)if(s[d]&&_(s[d].vkey)&&s[d].vkey===j.vkey){p=d;break}_(p)?((m=s[p]).vtag!==j.vtag?h=e(s&&s[w],l,p,n):(a(m,j),s[p]=void 0,h=m.f),j=v[++w]):(h=e(s&&s[w],l,w,n),j=v[++w]),h&&t.z(c(M.f),h,f(M.f))}b>g?i(n,null==v[k+1]?null:v[k+1].f,l,v,w,k):w>k&&o(s,b,g)}(p,d,l,h):_(h)?(_(s.vtext)&&t.V(p,""),i(p,null,l,h,0,h.length-1)):_(d)&&o(d,0,d.length-1)),L&&"svg"===l.vtag&&(L=!1)}(w,g),v){for(function n(e,r,i,o,u,f,c,a,s,v){for(u=0,f=(r=t.Y(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.Y(t.G(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(v=t.nn(o))||8===v)&&""===s||1===v&&null===t.tn(o,"slot")&&""===s||1===v&&t.tn(o,"slot")===s)&&(h.some(function(n){return n.en===o})||(l=!0,o["s-sn"]=s,h.push({rn:i,en:o})));1===t.nn(i)&&n(i)}}(g.f),j=0;j<h.length;j++)(A=h[j]).en["s-ol"]||((E=t.q(""))["s-nr"]=A.en,t.z(t.G(A.en),A.en["s-ol"]=E,A.en));for(n.Q=!0,j=0;j<h.length;j++){for(A=h[j],O=t.G(A.rn),x=t.X(A.rn),E=A.en["s-ol"];E=t.in(E);)if((C=E["s-nr"])&&C&&C["s-sn"]===A.en["s-sn"]&&O===t.G(C)&&(C=t.X(C))&&C&&!C["s-nr"]){x=C;break}(!x&&O!==t.G(A.en)||t.X(A.en)!==x)&&A.en!==x&&(t.Z(A.en),t.z(O,A.en,x))}n.Q=!1}return l&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.Y(e)).length;o<u;o++)if(r=i[o],1===t.nn(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.nn(i[f]),""!==c){if(1===a&&c===t.tn(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.on(i[f]).trim()){r.hidden=!0;break}n(r)}}(g.f),h.length=0,g}}function w(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.f),n.vchildren&&n.vchildren.forEach(function(n){w(n,t)}))}function g(n,t,e,o){e.connectedCallback=function(){(function e(n,t,r){n.l.delete(r),n.un.has(r)||(n.un.set(r,!0),r["s-id"]||(r["s-id"]=n.fn()),function i(n,t,e){for(e=t;e=n.M.K(e);)if(n.cn(e)){n.an.has(t)||(n.u.set(t,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.w.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.sn(r)),r["s-cr"]||n.tn(r,A)||n.g&&1===t.ln||(r["s-cr"]=n.q(""),r["s-cr"]["s-cn"]=!0,n.z(r,r["s-cr"],n.Y(r)[0])),n.g||1!==t.ln||(r.shadowRoot=r),1===t.ln&&n.g&&!r.shadowRoot&&n.vn(r,{mode:"open"}),i={pn:r["s-id"],x:{}},t.W&&Object.keys(t.W).forEach(function(e){(o=t.W[e].dn)&&(i.x[o]=n.tn(r,o))}),i}(n.M,t,r)),n.hn(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e){!n.Q&&function r(n,t){for(;t;){if(!n.G(t))return 9!==n.nn(t);t=n.G(t)}}(n.M,e)&&(n.l.set(e,!0),i(n,e),w(n.C.get(e),!0),n.M.D(e),n.yn.delete(e),n.O&&n.O.mn(e),[n.u,n.bn,n.w].forEach(function(n){return n.delete(e)}))})(n,this)},e["s-init"]=function(){(function t(n,e,r,o,u){if(!n.an.has(e)&&n.v.get(e)&&!n.l.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],n.an.set(e,!0);try{w(n.C.get(e)),(u=n.bn.get(e))&&(u.forEach(function(n){return n(e)}),n.bn.delete(e))}catch(t){n.b(t,4,e)}n.M.j(e,r),i(n,e)}})(n,this,o)},e.forceUpdate=function(){f(n,this)},function u(n,t,e){t&&Object.keys(t).forEach(function(i){var o=t[i],u=o.wn;1===u||2===u?p(e,i,function t(){return(n.m.get(this)||{})[i]},function t(e){l(n,this,i,r(o.gn,e))}):6===u&&v(e,i,S)})}(n,t.W,e)}function M(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.Mn.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.U(e),n.I(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function $(t,e,r,i,u,c){var a={html:{}},s={},l=r[t]=r[t]||{},v=function p(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap,i={Mn:e,$n:!1,nn:function(n){return n.nodeType},U:function(n){return e.createElement(n)},B:function(n,t){return e.createElementNS(n,t)},q:function(n){return e.createTextNode(n)},kn:function(n){return e.createComment(n)},z:function(n,t,e){return n.insertBefore(t,e)},Z:function(n){return n.remove()},I:function(n,t){return n.appendChild(t)},j:function(n,t){return n.classList.add(t)},Y:function(n){return n.childNodes},G:function(n){return n.parentNode},X:function(n){return n.nextSibling},in:function(n){return n.previousSibling},J:function(n){return x(n.nodeName)},on:function(n){return n.textContent},V:function(n,t){return n.textContent=t},tn:function(n,t){return n.getAttribute(t)},jn:function(n,t,e){return n.setAttribute(t,e)},An:function(n,t,e,r){return n.setAttributeNS(t,e,r)},N:function(n,t){return n.removeAttribute(t)},L:function(n,t){return n.hasAttribute(t)},sn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},En:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.K(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},R:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.En(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.En(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===O[s[1]]&&o(n)}),a=i.$n?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},D:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},vn:function(n,t){return n.attachShadow(t)}};return i.g=!!i.Mn.documentElement.attachShadow,"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),i.Cn=function(n,e,r){return n&&n.dispatchEvent(new t.CustomEvent(e,r))},i.K=function(n,t){return(t=i.G(n))&&11===i.nn(t)?t.host:t},i}(l,r,i);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=r,e.location=r.location,e.document=i,e.resourcesUrl=e.publicPath=u,l.h=o,l.Context=e;var d=r["s-defined"]=r.$definedCmps=r["s-defined"]||r.$definedCmps||{},h=0,y={M:v,On:function m(n,t){r.customElements.get(n.n)||(g(y,a[n.n]=n,t.prototype,c),r.customElements.define(n.n,t))},_n:e.emit,d:function(n){return a[v.J(n)]},S:function(n){return e[n]},isClient:!0,cn:function(n){return!(!d[v.J(n)]&&!y.d(n))},fn:function(){return t+h++},b:function(n,t,e){},xn:function(n){return function t(n,e,r){return{create:M(n,e,r,"create"),componentOnReady:M(n,e,r,"componentOnReady")}}(v,s,n)},queue:e.queue=function w(n,t){function e(n){for(var t=0;t<n.length;t++)try{n[t](o())}catch(n){}n.length=0}function r(n,t){for(var e,r=0;r<n.length&&(e=o())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function i(){l++,e(c);var t=o()+7*Math.ceil(l*(1/22));r(a,t),r(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(v=c.length+a.length+s.length>0)?n.raf(i):l=0}var o=function(){return t.performance.now()},u=Promise.resolve(),f=[],c=[],a=[],s=[],l=0,v=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return e(f)})},read:function(t){c.push(t),v||(v=!0,n.raf(i))},write:function(t){a.push(t),v||(v=!0,n.raf(i))}}}(l,r),hn:function $(n,t,e){if(n.p)f(y,t);else{var r={mode:t.mode,scoped:2===n.ln||1===n.ln&&!v.g};n.Sn(r).then(function(e){try{n.p=e,function r(n,t,e,i,o){if(i){var u=t.n+(o||E);t[u]||(t[u]=i)}}(0,n,n.ln,e.style,e.styleMode)}catch(t){n.p=function i(){}}f(y,t)})}},u:new WeakMap,Tn:new WeakMap,un:new WeakMap,yn:new WeakMap,an:new WeakMap,y:new WeakMap,w:new WeakMap,v:new WeakMap,l:new WeakMap,a:new WeakMap,bn:new WeakMap,Pn:new WeakMap,C:new WeakMap,m:new WeakMap};y.render=b(y,v);var k=v.Mn.documentElement;return k["s-ld"]=[],k["s-rn"]=!0,k["s-init"]=function(){y.an.set(k,l.loaded=y.s=!0),v.Cn(r,"appload",{detail:{namespace:t}})},y.k=function(t,e,r,i){(function o(t,e,r,i){var o=2===r.ln||1===r.ln&&!t.M.g,u=r.n+i.mode,f=r[u];if(o&&(i["s-sc"]=n(r,i.mode)),f||(f=r[u=r.n+E],o&&(i["s-sc"]=n(r))),f){var c=e.Mn.head;if(e.g)if(1===r.ln)c=i.shadowRoot;else for(var a=i;a=e.G(a);)if(a.host&&a.host.shadowRoot){c=a.host.shadowRoot;break}var s=t.Tn.get(c);if(s||t.Tn.set(c,s={}),!s[u]){var l=void 0;if(t.O?l=t.O.Wn(i,u,f):((l=e.U("style")).innerHTML=f,s[u]=!0),l){var v=c.querySelectorAll("[data-styles]");e.z(c,l,v.length&&v[v.length-1].nextSibling||c.firstChild)}}}})(t,e,r,i)},function j(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.d(t);if(r)if(n.an.has(t))e(t);else{var i=n.bn.get(t)||[];i.push(e),n.bn.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(y,l,r,r["s-apps"],r["s-cr"]),l.initialized=!0,y}function k(n,t,r){void 0===r&&(r={}),t=Array.isArray(t)?t:[t];var i=n.document,o=r.hydratedCssClass||"hydrated",u=t.filter(function(n){return n[2]}).map(function(n){return n[0]});if(u.length){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=r.namespace||"manessingercomment";D||(D=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,c,n.HTMLElement.prototype)),applyPolyfills(n,function(){if(!R[c]){var u={},f=r.resourcesUrl||"./";j(c,u,n,i,f,o),R[c]=$(c,u,n,i,f,o)}t.forEach(function(t){var r;!function i(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(r=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:r,configurable:!0}}):r=new Function("w","return class extends w.HTMLElement{}")(n),R[c].On(function o(n,t,r){var i={n:n[0],W:{color:{dn:"color"}}};i.Sn=n[1];var o=n[3];if(o)for(t=0;t<o.length;t++)r=o[t],i.W[r[0]]={wn:r[1],Nn:!!r[2],dn:"string"==typeof r[3]?r[3]:r[3]?r[0]:0,gn:r[4]};return i.ln=n[4],n[5]&&(i.Ln=n[5].map(e)),i}(t),r)})})}this&&this.Rn||(Object.setPrototypeOf||Array);var j=function(){};function applyPolyfills(n,t){n.Dn=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[x]&&h(r);var i=e.Fn;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Hn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.Fn===T?s(n,t.Hn):t.Fn===P?l(n,t.Hn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.qn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Bn&&n.Bn(n.Hn),p(n)}function s(n,t){n.Fn===S&&(n.Hn=t,n.Fn=T,0!==n.Un.length&&M(p,n))}function l(n,t){n.Fn===S&&(n.Fn=P,n.Hn=t,M(a,n))}function v(n,t,e,r){var i=n.Un,o=i.length;n.Bn=null,i[o]=t,i[o+T]=e,i[o+P]=r,0===o&&n.Fn&&M(p,n)}function p(n){var t=n.Un,e=n.Fn;if(0!==t.length){for(var r,i,o=n.Hn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.Un.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.Fn===S&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===P&&l(t,o))}function h(n){n[x]=N++,n.Fn=void 0,n.Hn=void 0,n.Un=[]}var y,m=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,w=void 0,g=void 0,M=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(g?g(e):_())},$=(y=void 0!==n?n:void 0)||{},k=$.In||$.Qn;$="undefined"==typeof self;var j,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),_=void 0;_=k?(j=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=j=++j%2}):C?function(){var n=new MessageChannel;return n.Yn.onmessage=e,function(){return n.Zn.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().zn("vertx");return void 0!==(w=n.Gn||n.Jn)?function(){w(e)}:t()}catch(n){return t()}}():t();var x=Math.random().toString(36).substring(2),S=void 0,T=1,P=2,W={error:null},N=0,L=function(){function n(n,t){this.Kn=n,this.Vn=new n(o),this.Vn[x]||h(this.Vn),m(t)?(this.Xn=this.length=t.length,this.Hn=Array(this.length),0===this.length?s(this.Vn,this.Hn):(this.length=this.length||0,this.nt(t),0===this.Xn&&s(this.Vn,this.Hn))):l(this.Vn,Error("Array Methods must be provided an Array"))}return n.prototype.nt=function(n){for(var t=0;this.Fn===S&&t<n.length;t++)this.tt(n[t],t)},n.prototype.tt=function(n,t){var e=this.Kn,c=e.resolve;c===i?(c=u(n))===r&&n.Fn!==S?this.et(n.Fn,t,n.Hn):"function"!=typeof c?(this.Xn--,this.Hn[t]=n):e===R?(f(e=new e(o),n,c),this.rt(e,t)):this.rt(new e(function(t){return t(n)}),t):this.rt(c(n),t)},n.prototype.et=function(n,t,e){var r=this.Vn;r.Fn===S&&(this.Xn--,n===P?l(r,e):this.Hn[t]=e),0===this.Xn&&s(r,this.Hn)},n.prototype.rt=function(n,t){var e=this;v(n,void 0,function(n){return e.et(T,t,n)},function(n){return e.et(P,t,n)})},n}(),R=function(){function n(t){if(this[x]=N++,this.Hn=this.Fn=void 0,this.Un=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return R.prototype.then=r,R.all=function(n){return new L(this,n).Vn},R.race=function(n){var t=this;return m(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},R.resolve=i,R.reject=function(n){var t=new this(o);return l(t,n),t},R.it=function(n){g=n},R.ot=function(n){M=n},R.ut=M,R.ft=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.ct)return}n.Promise=R},R.Promise=R,R.ft(),R}();var e=[];n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||e.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||e.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||e.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||e.push(import("./polyfills/string.js")),n.fetch||e.push(import("./polyfills/fetch.js")),Promise.all(e).then(function(e){e.forEach(function(t){t.applyPolyfill(n,n.document)}),t()})}var A="ssrv",E="$",C={},O={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},_=function(n){return null!=n},x=function(n){return n.toLowerCase()},S=function(){},T=[],P={forEach:function(n,t){n.forEach(function(n,e,r){return t(u(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(u(n),e,r))})}},W="wc-",N="http://www.w3.org/1999/xlink",L=!1,R={},D=!1;export{k as defineCustomElement,o as h};