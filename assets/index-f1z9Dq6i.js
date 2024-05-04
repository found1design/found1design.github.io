(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function k(t){return t=t||[],Array.isArray(t)?t:[t]}function v(t){return`[Vaadin.Router] ${t}`}function xe(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const B="module",O="nomodule",$=[B,O];function D(t){if(!t.match(/.+\.[m]?js$/))throw new Error(v(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function ie(t){if(!t||!f(t.path))throw new Error(v('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,n=["component","redirect","bundle"];if(!y(t.action)&&!Array.isArray(t.children)&&!y(t.children)&&!S(e)&&!n.some(a=>f(t[a])))throw new Error(v(`Expected route config "${t.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(e)if(f(e))D(e);else if($.some(a=>a in e))$.forEach(a=>a in e&&D(e[a]));else throw new Error(v('Expected route bundle to include either "'+O+'" or "'+B+'" keys, or both'));t.redirect&&["bundle","component"].forEach(a=>{a in t&&console.warn(v(`Route config "${t.path}" has both "redirect" and "${a}" properties, and "redirect" will always override the latter. Did you mean to only use "${a}"?`))})}function N(t){k(t).forEach(e=>ie(e))}function V(t,e){let n=document.head.querySelector('script[src="'+t+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",t),e===B?n.setAttribute("type",B):e===O&&n.setAttribute(O,""),n.async=!0),new Promise((a,i)=>{n.onreadystatechange=n.onload=r=>{n.__dynamicImportLoaded=!0,a(r)},n.onerror=r=>{n.parentNode&&n.parentNode.removeChild(n),i(r)},n.parentNode===null?document.head.appendChild(n):n.__dynamicImportLoaded&&a()})}function Le(t){return f(t)?V(t):Promise.race($.filter(e=>e in t).map(e=>V(t[e],e)))}function x(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function S(t){return typeof t=="object"&&!!t}function y(t){return typeof t=="function"}function f(t){return typeof t=="string"}function se(t){const e=new Error(v(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const _=new class{};function Ce(t){const e=t.port,n=t.protocol,r=n==="http:"&&e==="80"||n==="https:"&&e==="443"?t.hostname:t.host;return`${n}//${r}`}function Z(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const n=t.composedPath?t.composedPath():t.path||[];for(let l=0;l<n.length;l++){const s=n[l];if(s.nodeName&&s.nodeName.toLowerCase()==="a"){e=s;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Ce(e))!==window.location.origin)return;const{pathname:i,search:r,hash:o}=e;x("go",{pathname:i,search:r,hash:o})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const Ae={activate(){window.document.addEventListener("click",Z)},inactivate(){window.document.removeEventListener("click",Z)}},Me=/Trident/.test(navigator.userAgent);Me&&!y(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,!!e.bubbles,!!e.cancelable),n.state=e.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);function G(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:n,hash:a}=window.location;x("go",{pathname:e,search:n,hash:a})}const Pe={activate(){window.addEventListener("popstate",G)},inactivate(){window.removeEventListener("popstate",G)}};var E=he,Re=j,Te=Se,ke=le,Be=ue,oe="/",ce="./",Oe=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function j(t,e){for(var n=[],a=0,i=0,r="",o=e&&e.delimiter||oe,l=e&&e.delimiters||ce,s=!1,c;(c=Oe.exec(t))!==null;){var u=c[0],h=c[1],d=c.index;if(r+=t.slice(i,d),i=d+u.length,h){r+=h[1],s=!0;continue}var p="",F=t[i],ge=c[2],be=c[3],we=c[4],C=c[5];if(!s&&r.length){var H=r.length-1;l.indexOf(r[H])>-1&&(p=r[H],r=r.slice(0,H))}r&&(n.push(r),r="",s=!1);var ye=p!==""&&F!==void 0&&F!==p,_e=C==="+"||C==="*",Ee=C==="?"||C==="*",z=p||o,U=be||we;n.push({name:ge||a++,prefix:p,delimiter:z,optional:Ee,repeat:_e,partial:ye,pattern:U?He(U):"[^"+b(z)+"]+?"})}return(r||i<t.length)&&n.push(r+t.substr(i)),n}function Se(t,e){return le(j(t,e))}function le(t){for(var e=new Array(t.length),n=0;n<t.length;n++)typeof t[n]=="object"&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(a,i){for(var r="",o=i&&i.encode||encodeURIComponent,l=0;l<t.length;l++){var s=t[l];if(typeof s=="string"){r+=s;continue}var c=a?a[s.name]:void 0,u;if(Array.isArray(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(c.length===0){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(u=o(c[h],s),!e[l].test(u))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');r+=(h===0?s.prefix:s.delimiter)+u}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(u=o(String(c),s),!e[l].test(u))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+u+'"');r+=s.prefix+u;continue}if(s.optional){s.partial&&(r+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}return r}}function b(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function He(t){return t.replace(/([=!:$/()])/g,"\\$1")}function de(t){return t&&t.sensitive?"":"i"}function qe(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var a=0;a<n.length;a++)e.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function $e(t,e,n){for(var a=[],i=0;i<t.length;i++)a.push(he(t[i],e,n).source);return new RegExp("(?:"+a.join("|")+")",de(n))}function Ie(t,e,n){return ue(j(t,n),e,n)}function ue(t,e,n){n=n||{};for(var a=n.strict,i=n.start!==!1,r=n.end!==!1,o=b(n.delimiter||oe),l=n.delimiters||ce,s=[].concat(n.endsWith||[]).map(b).concat("$").join("|"),c=i?"^":"",u=t.length===0,h=0;h<t.length;h++){var d=t[h];if(typeof d=="string")c+=b(d),u=h===t.length-1&&l.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+b(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?c+=b(d.prefix)+"("+p+")?":c+="(?:"+b(d.prefix)+"("+p+"))?":c+=b(d.prefix)+"("+p+")"}}return r?(a||(c+="(?:"+o+")?"),c+=s==="$"?"$":"(?="+s+")"):(a||(c+="(?:"+o+"(?="+s+"))?"),u||(c+="(?="+o+"|"+s+")")),new RegExp(c,de(n))}function he(t,e,n){return t instanceof RegExp?qe(t,e):Array.isArray(t)?$e(t,e,n):Ie(t,e,n)}E.parse=Re;E.compile=Te;E.tokensToFunction=ke;E.tokensToRegExp=Be;const{hasOwnProperty:je}=Object.prototype,I=new Map;I.set("|false",{keys:[],pattern:/(?:)/});function K(t){try{return decodeURIComponent(t)}catch{return t}}function Fe(t,e,n,a,i){n=!!n;const r=`${t}|${n}`;let o=I.get(r);if(!o){const c=[];o={keys:c,pattern:E(t,c,{end:n,strict:t===""})},I.set(r,o)}const l=o.pattern.exec(e);if(!l)return null;const s=Object.assign({},i);for(let c=1;c<l.length;c++){const u=o.keys[c-1],h=u.name,d=l[c];(d!==void 0||!je.call(s,h))&&(u.repeat?s[h]=d?d.split(u.delimiter).map(K):[]:s[h]=d&&K(d))}return{path:l[0],keys:(a||[]).concat(o.keys),params:s}}function pe(t,e,n,a,i){let r,o,l=0,s=t.path||"";return s.charAt(0)==="/"&&(n&&(s=s.substr(1)),n=!0),{next(c){if(t===c)return{done:!0};const u=t.__children=t.__children||t.children;if(!r&&(r=Fe(s,e,!u,a,i),r))return{done:!1,value:{route:t,keys:r.keys,params:r.params,path:r.path}};if(r&&u)for(;l<u.length;){if(!o){const d=u[l];d.parent=t;let p=r.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=pe(d,e.substr(p),n,r.keys,r.params)}const h=o.next(c);if(!h.done)return{done:!1,value:h.value};o=null,l++}return{done:!0}}}}function ze(t){if(y(t.route.action))return t.route.action(t)}function Ue(t,e){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}function De(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=(t.route||{}).path;return n&&(e+=` Resolution had failed on route: '${n}'`),e}function Ne(t,e){const{route:n,path:a}=e;if(n&&!n.__synthetic){const i={path:a,route:n};if(!t.chain)t.chain=[];else if(n.parent){let r=t.chain.length;for(;r--&&t.chain[r].route&&t.chain[r].route!==n.parent;)t.chain.pop()}t.chain.push(i)}}class L{constructor(e,n={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=n.baseUrl||"",this.errorHandler=n.errorHandler,this.resolveRoute=n.resolveRoute||ze,this.context=Object.assign({resolver:this},n.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){N(e);const n=[...k(e)];this.root.__children=n}addRoutes(e){return N(e),this.root.__children.push(...k(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const n=Object.assign({},this.context,f(e)?{pathname:e}:e),a=pe(this.root,this.__normalizePathname(n.pathname),this.baseUrl),i=this.resolveRoute;let r=null,o=null,l=n;function s(c,u=r.value.route,h){const d=h===null&&r.value.route;return r=o||a.next(d),o=null,!c&&(r.done||!Ue(u,r.value.route))?(o=r,Promise.resolve(_)):r.done?Promise.reject(se(n)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},n,r.value),Ne(l,r.value),Promise.resolve(i(l)).then(p=>p!=null&&p!==_?(l.result=p.result||p,l):s(c,u,p)))}return n.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(c=>{const u=De(l);if(c?console.warn(u):c=new Error(u),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,n){return new URL(e,n)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const n=this.__effectiveBaseUrl,a=this.constructor.__createUrl(e,n).href;if(a.slice(0,n.length)===n)return a.slice(n.length)}}L.pathToRegexp=E;const{pathToRegexp:J}=L,X=new Map;function me(t,e,n){const a=e.name||e.component;if(a&&(t.has(a)?t.get(a).push(e):t.set(a,[e])),Array.isArray(n))for(let i=0;i<n.length;i++){const r=n[i];r.parent=e,me(t,r,r.__children||r.children)}}function W(t,e){const n=t.get(e);if(n&&n.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return n&&n[0]}function Y(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ve(t,e={}){if(!(t instanceof L))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(a,i)=>{let r=W(n,a);if(!r&&(n.clear(),me(n,t.root,t.root.__children),r=W(n,a),!r))throw new Error(`Route "${a}" not found`);let o=X.get(r.fullPath);if(!o){let s=Y(r),c=r.parent;for(;c;){const p=Y(c);p&&(s=p.replace(/\/$/,"")+"/"+s.replace(/^\//,"")),c=c.parent}const u=J.parse(s),h=J.tokensToFunction(u),d=Object.create(null);for(let p=0;p<u.length;p++)f(u[p])||(d[u[p].name]=!0);o={toPath:h,keys:d},X.set(s,o),r.fullPath=s}let l=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const s={},c=Object.keys(i);for(let h=0;h<c.length;h++){const d=c[h];o.keys[d]||(s[d]=i[d])}const u=e.stringifyQueryParams(s);u&&(l+=u.charAt(0)==="?"?u:`?${u}`)}return l}}let Q=[];function Ze(t){Q.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),Q=t}const Ge=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},Ke=(t,e)=>{const n=()=>{t.removeEventListener("animationend",n),e()};t.addEventListener("animationend",n)};function ee(t,e){return t.classList.add(e),new Promise(n=>{if(Ge(t)){const a=t.getBoundingClientRect(),i=`height: ${a.bottom-a.top}px; width: ${a.right-a.left}px`;t.setAttribute("style",`position: absolute; ${i}`),Ke(t,()=>{t.classList.remove(e),t.removeAttribute("style"),n()})}else t.classList.remove(e),n()})}const Je=256;function q(t){return t!=null}function Xe(t){const e=Object.assign({},t);return delete e.next,e}function m({pathname:t="",search:e="",hash:n="",chain:a=[],params:i={},redirectFrom:r,resolver:o},l){const s=a.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:t,search:e,hash:n,routes:s,route:l||s.length&&s[s.length-1]||null,params:i,redirectFrom:r,getUrl:(c={})=>R(w.pathToRegexp.compile(fe(s))(Object.assign({},i,c)),o)}}function ne(t,e){const n=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:n}}}function We(t,e){e.location=m(t);const n=t.chain.map(a=>a.route).indexOf(t.route);return t.chain[n].element=e,e}function P(t,e,n){if(y(t))return t.apply(n,e)}function te(t,e,n){return a=>{if(a&&(a.cancel||a.redirect))return a;if(n)return P(n[t],e,n)}}function Ye(t,e){if(!Array.isArray(t)&&!S(t))throw new Error(v(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const n=k(t);for(let a=0;a<n.length;a++)ie(n[a]),e.__children.push(n[a])}function A(t){if(t&&t.length){const e=t[0].parentNode;for(let n=0;n<t.length;n++)e.removeChild(t[n])}}function R(t,e){const n=e.__effectiveBaseUrl;return n?e.constructor.__createUrl(t.replace(/^\//,""),n).pathname:t}function fe(t){return t.map(e=>e.path).reduce((e,n)=>n.length?e.replace(/\/$/,"")+"/"+n.replace(/^\//,""):e,"")}class w extends L{constructor(e,n){const a=document.head.querySelector("base"),i=a&&a.getAttribute("href");super([],Object.assign({baseUrl:i&&L.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},n)),this.resolveRoute=o=>this.__resolveRoute(o);const r=w.NavigationTrigger;w.setTriggers.apply(w,Object.keys(r).map(o=>r[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=m({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const n=e.route;let a=Promise.resolve();y(n.children)&&(a=a.then(()=>n.children(Xe(e))).then(r=>{!q(r)&&!y(n.children)&&(r=n.children),Ye(r,n)}));const i={redirect:r=>ne(e,r),component:r=>{const o=document.createElement(r);return this.__createdByRouter.set(o,!0),o}};return a.then(()=>{if(this.__isLatestRender(e))return P(n.action,[e,i],n)}).then(r=>{if(q(r)&&(r instanceof HTMLElement||r.redirect||r===_))return r;if(f(n.redirect))return i.redirect(n.redirect);if(n.bundle)return Le(n.bundle).then(()=>{},()=>{throw new Error(v(`Bundle not found: ${n.bundle}. Check if the file name is correct`))})}).then(r=>{if(q(r))return r;if(f(n.component))return i.component(n.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,n=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),n||this.__onNavigationEvent(),this.ready}render(e,n){const a=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},f(e)?{pathname:e}:e,{__renderId:a});return this.ready=this.resolve(i).then(r=>this.__fullyResolveChain(r)).then(r=>{if(this.__isLatestRender(r)){const o=this.__previousContext;if(r===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=m(r),n&&this.__updateBrowserHistory(r,a===1),x("location-changed",{router:this,location:this.location}),r.__skipAttach)return this.__copyUnchangedElements(r,o),this.__previousContext=r,this.location;this.__addAppearingContent(r,o);const l=this.__animateIfNeeded(r);return this.__runOnAfterEnterCallbacks(r),this.__runOnAfterLeaveCallbacks(r,o),l.then(()=>{if(this.__isLatestRender(r))return this.__removeDisappearingContent(),this.__previousContext=r,this.location})}}).catch(r=>{if(a===this.__lastStartedRenderId)throw n&&this.__updateBrowserHistory(i),A(this.__outlet&&this.__outlet.children),this.location=m(Object.assign(i,{resolver:this})),x("error",Object.assign({router:this,error:r},i)),r}),this.ready}__fullyResolveChain(e,n=e){return this.__findComponentContextAfterAllRedirects(n).then(a=>{const r=a!==n?a:e,l=R(fe(a.chain),a.resolver)===a.pathname,s=(c,u=c.route,h)=>c.next(void 0,u,h).then(d=>d===null||d===_?l?c:u.parent!==null?s(c,u.parent,d):d:d);return s(a).then(c=>{if(c===null||c===_)throw se(r);return c&&c!==_&&c!==a?this.__fullyResolveChain(r,c):this.__amendWithOnBeforeCallbacks(a)})})}__findComponentContextAfterAllRedirects(e){const n=e.result;return n instanceof HTMLElement?(We(e,n),Promise.resolve(e)):n.redirect?this.__redirect(n.redirect,e.__redirectCount,e.__renderId).then(a=>this.__findComponentContextAfterAllRedirects(a)):n instanceof Error?Promise.reject(n):Promise.reject(new Error(v(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${xe(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(n=>n===this.__previousContext||n===e?n:this.__fullyResolveChain(n))}__runOnBeforeCallbacks(e){const n=this.__previousContext||{},a=n.chain||[],i=e.chain;let r=Promise.resolve();const o=()=>({cancel:!0}),l=s=>ne(e,s);if(e.__divergedChainIndex=0,e.__skipAttach=!1,a.length){for(let s=0;s<Math.min(a.length,i.length)&&!(a[s].route!==i[s].route||a[s].path!==i[s].path&&a[s].element!==i[s].element||!this.__isReusableElement(a[s].element,i[s].element));s=++e.__divergedChainIndex);if(e.__skipAttach=i.length===a.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,n.result),e.__skipAttach){for(let s=i.length-1;s>=0;s--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:o},a[s]);for(let s=0;s<i.length;s++)r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:o,redirect:l},i[s]),a[s].element.location=m(e,a[s].route)}else for(let s=a.length-1;s>=e.__divergedChainIndex;s--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:o},a[s])}if(!e.__skipAttach)for(let s=0;s<i.length;s++)s<e.__divergedChainIndex?s<a.length&&a[s].element&&(a[s].element.location=m(e,a[s].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:o,redirect:l},i[s]),i[s].element&&(i[s].element.location=m(e,i[s].route)));return r.then(s=>{if(s){if(s.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(s.redirect)return this.__redirect(s.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,n,a,i){const r=m(n);return e.then(o=>{if(this.__isLatestRender(n))return te("onBeforeLeave",[r,a,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,n,a,i){const r=m(n,i.route);return e.then(o=>{if(this.__isLatestRender(n))return te("onBeforeEnter",[r,a,this],i.element)(o)})}__isReusableElement(e,n){return e&&n?this.__createdByRouter.get(e)&&this.__createdByRouter.get(n)?e.localName===n.localName:e===n:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,n,a){if(n>Je)throw new Error(v(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(n||0)+1,__renderId:a})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(v(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:n="",hash:a=""},i){if(window.location.pathname!==e||window.location.search!==n||window.location.hash!==a){const r=i?"replaceState":"pushState";window.history[r](null,document.title,e+n+a),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,n){let a=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const r=n&&n.chain[i].element;if(r)if(r.parentNode===a)e.chain[i].element=r,a=r;else break}return a}__addAppearingContent(e,n){this.__ensureOutlet(),this.__removeAppearingContent();const a=this.__copyUnchangedElements(e,n);this.__appearingContent=[],this.__disappearingContent=Array.from(a.children).filter(r=>this.__addedByRouter.get(r)&&r!==e.result);let i=a;for(let r=e.__divergedChainIndex;r<e.chain.length;r++){const o=e.chain[r].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===a&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&A(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(A(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,n){if(n)for(let a=n.chain.length-1;a>=e.__divergedChainIndex&&this.__isLatestRender(e);a--){const i=n.chain[a].element;if(i)try{const r=m(e);P(i.onAfterLeave,[r,{},n.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&A(i.children)}}}__runOnAfterEnterCallbacks(e){for(let n=e.__divergedChainIndex;n<e.chain.length&&this.__isLatestRender(e);n++){const a=e.chain[n].element||{},i=m(e,e.chain[n].route);P(a.onAfterEnter,[i,{},e.resolver],a)}}__animateIfNeeded(e){const n=(this.__disappearingContent||[])[0],a=(this.__appearingContent||[])[0],i=[],r=e.chain;let o;for(let l=r.length;l>0;l--)if(r[l-1].route.animate){o=r[l-1].route.animate;break}if(n&&a&&o){const l=S(o)&&o.leave||"leaving",s=S(o)&&o.enter||"entering";i.push(ee(n,l)),i.push(ee(a,s))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:n,search:a,hash:i}=e?e.detail:window.location;f(this.__normalizePathname(n))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:n,search:a,hash:i},!0))}static setTriggers(...e){Ze(e)}urlForName(e,n){return this.__urlForName||(this.__urlForName=Ve(this)),R(this.__urlForName(e,n),this)}urlForPath(e,n){return R(w.pathToRegexp.compile(e)(n),this)}static go(e){const{pathname:n,search:a,hash:i}=f(e)?this.__createUrl(e,"http://a"):e;return x("go",{pathname:n,search:a,hash:i})}}const Qe=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,T=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function en(){function t(){return!0}return ve(t)}function nn(){try{return tn()?!0:an()?T?!rn():!en():!1}catch{return!1}}function tn(){return localStorage.getItem("vaadin.developmentmode.force")}function an(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function rn(){return!!(T&&Object.keys(T).map(e=>T[e]).filter(e=>e.productionMode).length>0)}function ve(t,e){if(typeof t!="function")return;const n=Qe.exec(t.toString());if(n)try{t=new Function(n[1])}catch(a){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",a)}return t(e)}window.Vaadin=window.Vaadin||{};const ae=function(t,e){if(window.Vaadin.developmentMode)return ve(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=nn());function sn(){}const on=function(){if(typeof ae=="function")return ae(sn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});on();w.NavigationTrigger={POPSTATE:Pe,CLICK:Ae};const cn=`<body> 

    <div id="contenedor">
      <nav class="extra-nav-menu fixed">
        <div class="navbar-menu">
          <a class="svg-found-menu links" href="/">
          </a>    
          
          <a class="exit links"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </a>
        </div>
      </nav>

      <div class="extra-menuabierto fixed">
        <div class="menuabierto">
          <p class="nombre">
           Juan Montalbán Molina
          </p>
          <ul class="menu">
            <li><a class="links" href="/branding">Branding</a></li>
            <li><a class="links" href="/advertising">Advertising</a></li>
            <li><a class="links" href="/festival">Festival</a></li>
            <li><a class="links" href="/tipografia">Tipografía</a></li>
          </ul>  
        </div>
      </div>    
    </div>
        
    <nav class="extra-nav fixed">
      <div class="navbar">
        <a class="svg-found links" href="/"> </a>    
        <a class="hamburger links" href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </a>
      </div>
    </nav>

    <footer>
      <div class="extra-futer">
        <div class="futer"> 
          <a href="mailto:foundarealperson@gmail.com" class="textofuter" target="_blank">foundarealperson@gmail.com</a>
         
          <a href="https://www.instagram.com/found1design/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--color-blanco)" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
          </a>
  
          <a href="https://www.behance.net/found1design" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
            </svg>
          </a>
          
          <a class="textofuter">Copyright 2024 © Found Studio</a>
  
  
        </div>   
      </div>
        
      
    </footer>

    <main>  

      <div class="h-10"></div>

      <header class="hola mix-blend-difference">
        <h1 class="title">Hola!</h1>
        <p class="saludo">Me llamo Juan Montalbán y soy un estudiante de diseño en la UPV, Valencia, aunque originalmente soy de Murcia. He realizado proyectos de branding, publicidad, tipografía... Actualmente estoy interesado en realizar proyectos de visuales y sonido, con programas como TouchDesigner. </p>
      </header>
    
      <section class="proyectos">
          <ul class="album">
          </ul>
      </section>

      <div class="h-10"></div>

    </main>
</body>






`;class M{constructor(e,n,a,i,r,o){this.id=e,this.nombre=n,this.img=a,this.descr=i,this.fecha=r,this.enlace=o}}const re=[new M(0,"3 Days of Type","Tab.gif","Tres letras diseñadas en base a una representación visual del sonido diferente.","Enero 2024","tipografia"),new M(1,"Terra","Terra.png","Campaña para alentar a chicas de bachillerato a que estudien la carrera de Geomática y Topografía en la UPV","Junio 2023","advertising"),new M(2,"LPLS","Lpls.png",'Cartel y folleto para el festival "La Palabra y los Sentidos".',"Febrero 2024","festival"),new M(3,"Ocoa","Chocolate.gif","Rebranding de marca para una empresa de chocolate Valenciana que se rejuvenece de su tradición.","Marzo 2023","branding")],g=(t,e)=>{t.innerHTML=`  
     <?xml version="1.0" encoding="UTF-8"?>
     <svg class="w-64 sm:w-[35rem] ${e}" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1295.73 380.76">
       <defs>
         <style>
           .cls-1 {
             fill: ${e};
             stroke-width: 0px;
           }
         </style>
       </defs>
       <g id="Layer_1-2" data-name="Layer 1">
         <g>
           <path class="cls-1" d="M0,106.1h40.02v-22.51c0-28.02,7.5-48.86,22.51-62.54,8.67-7.67,19.76-13.17,33.27-16.51C109.31,1.22,124.57-.28,141.58.04c5.33,0,10.67.17,16.01.5,5.33.34,10.83.84,16.51,1.5v56.03c-10.01-.33-18.51-.33-25.51,0-7,.34-12.76,1.59-17.26,3.75-4.5,2.17-7.75,5.42-9.76,9.75-2,4.34-3,10.18-3,17.51v17.01h55.53v51.03h-55.53v215.12H40.02v-215.12H0v-51.03Z"/>
           <path class="cls-1" d="M313.68,380.76c-21.35,0-40.7-3.59-58.03-10.76-17.35-7.17-32.19-17.09-44.53-29.77-12.34-12.67-21.85-27.59-28.52-44.78-6.68-17.17-10.01-35.77-10.01-55.78s3.33-38.6,10.01-55.78c6.67-17.17,16.17-32.1,28.52-44.78,12.33-12.67,27.18-22.59,44.53-29.77,17.34-7.17,36.68-10.76,58.03-10.76s40.19,3.59,57.53,10.76c17.34,7.18,32.1,17.1,44.28,29.77,12.17,12.68,21.59,27.6,28.27,44.78,6.67,17.18,10,35.77,10,55.78s-3.34,38.61-10,55.78c-6.68,17.18-16.1,32.1-28.27,44.78-12.18,12.68-26.94,22.6-44.28,29.77-17.35,7.17-36.52,10.76-57.53,10.76ZM313.18,323.73c19.67,0,34.77-7.75,45.28-23.26,10.51-15.51,15.76-35.77,15.76-60.79s-5.25-45.85-15.76-61.54c-10.51-15.67-25.6-23.51-45.28-23.51s-35.19,7.84-45.53,23.51c-10.34,15.68-15.51,36.19-15.51,61.54s5.17,45.28,15.51,60.79c10.33,15.51,25.51,23.26,45.53,23.26Z"/>
           <path class="cls-1" d="M642.86,372.26v-38.02h-1.5c-9.68,15.68-20.85,27.19-33.52,34.52-12.68,7.33-28.19,11.01-46.53,11.01-30.35,0-53.53-8.92-69.54-26.77-16.01-17.84-24.01-41.44-24.01-70.79V106.1h78.54v161.09c0,15.01,3.58,26.52,10.76,34.52,7.17,8,17.76,12.01,31.77,12.01,16.01,0,28.52-5.33,37.52-16.01,9-10.67,13.51-24.34,13.51-41.02V106.1h77.54v266.15h-74.54Z"/>
           <path class="cls-1" d="M827.96,146.63h1.5c8.33-16.01,19.43-28.02,33.27-36.02,13.84-8,30.09-12.01,48.78-12.01,29.34,0,52.11,8.93,68.29,26.77,16.17,17.85,24.26,41.77,24.26,71.79v175.1h-78.04v-160.09c0-14.67-3.75-26.43-11.26-35.27-7.5-8.83-18.6-13.26-33.27-13.26s-27.69,5.5-37.02,16.51c-9.34,11.01-14.01,25.01-14.01,42.02v150.08h-78.54V106.1h76.04v40.52Z"/>
           <path class="cls-1" d="M1138.14,380.76c-17.35,0-33.02-3.25-47.03-9.75-14.01-6.5-26.01-15.84-36.02-28.02-10.01-12.17-17.68-27.01-23.01-44.53-5.34-17.51-8-37.27-8-59.28,0-20.34,2.75-39.1,8.25-56.28,5.5-17.17,13.26-32.02,23.26-44.53,10.01-12.51,22.09-22.26,36.27-29.27,14.17-7,29.93-10.51,47.28-10.51,18.34,0,33.85,3.92,46.53,11.76,12.67,7.84,23.51,18.76,32.52,32.77h1c-.67-8.33-1.17-17.84-1.5-28.52-.34-10.67-.5-21.68-.5-33.02V.04h78.54v372.21h-75.54v-39.02h-1c-7.68,16.34-18.6,28.35-32.77,36.02-14.18,7.67-30.27,11.51-48.28,11.51ZM1159.15,317.72c19.01,0,33.85-7.25,44.53-21.76,10.67-14.51,16.01-33.43,16.01-56.78,0-11.67-1.25-22.51-3.75-32.52-2.5-10.01-6.25-18.59-11.26-25.76-5-7.17-11.26-12.76-18.76-16.76-7.5-4-16.26-6-26.26-6-18.68,0-32.6,7.43-41.77,22.26-9.18,14.84-13.76,34.27-13.76,58.28s4.58,43.2,13.76,57.53c9.17,14.34,22.93,21.51,41.27,21.51Z"/>
         </g>
       </g>
     </svg>
    `};class ln extends HTMLElement{connectedCallback(){this.innerHTML=cn,window.onpopstate=function(l){location.reload(!0)};const e=document.querySelector(".svg-found");g(e,"magnitudine-primus");const n=document.querySelector(".svg-found-menu");g(n,"magnitudine-primu"),document.querySelector(".hamburger").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="visible"}),document.querySelector(".exit").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="hidden"}),document.addEventListener("DOMContentLoaded",function(){const l=document.createElement("div");l.classList.add("custom-cursor"),document.body.appendChild(l),document.addEventListener("mousemove",function(c){l.style.left=c.clientX+"px",l.style.top=c.clientY+"px"}),document.querySelectorAll("a").forEach(c=>{c.addEventListener("mouseover",function(){l.style.width="200px",l.style.height="200px"}),c.addEventListener("mouseout",function(){l.style.width="30px",l.style.height="30px"})})});const a=document.querySelector(".album");let i="";(()=>{const l=re.length,u=Array.from(Array(l)).map((d,p)=>p).sort();let h=[];for(let d=0;d<l;d++)h[d]=re[u[d]];return h.slice(0,4)})().forEach(l=>{i+=`
            <div class="image">
                <a href="./${l.enlace}"><img class="image__img" src="./public/proyectos/${l.img}">
		        <div class="image__overlay image__overlay--primary">
			        <div class="image__title">${l.nombre}</div>
			        <p class="image__description">
				        ${l.descr}
                    <br>
                    ${l.fecha}
			        </p>
		        </div>
                </a>
	        </div>
        `}),a.innerHTML=i}}customElements.define("domus-pagina",ln);const dn=`<body> 

  <div id="contenedor">
    <nav class="extra-nav-menu fixed">
      <div class="navbar-menu">
        <a class="svg-found-menu links" href="/">
        </a>    
        
        <a class="exit links"> 
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </a>
      </div>
    </nav>

    <div class="extra-menuabierto fixed">
      <div class="menuabierto">
        <p class="nombre">
         Juan Montalbán Molina
        </p>
        <ul class="menu">
          <li><a class="links" href="/branding">Branding</a></li>
          <li><a class="links" href="/advertising">Advertising</a></li>
          <li><a class="links" href="/festival">Festival</a></li>
          <li><a class="links" href="/tipografia">Tipografía</a></li>
        </ul>  
      </div>
    </div>    
  </div>
    
  <nav class="extra-nav fixed">
    <div class="navbar">
      <a class="svg-found links" href="/"> </a>    
      <a class="hamburger links" href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </a>
    </div>
  </nav>

  <footer>
    <div class="extra-futer">
      <div class="futer"> 
        <a href="mailto:foundarealperson@gmail.com" class="textofuter" target="_blank">foundarealperson@gmail.com</a>
       
        <a href="https://www.instagram.com/found1design/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--color-blanco)" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
        </a>

        <a href="https://www.behance.net/found1design" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
              <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
          </svg>
        </a>
        
        <a class="textofuter">Copyright 2024 © Found Studio</a>


      </div>   
    </div>
      
    
  </footer>

  <main>  

    <div class="espacio"></div>
    <img class="w-screen h-auto" src="./public/proyectos/Tabletas.png" alt="">

    <div class="hola mix-blend-difference">
      <h1 class="title">Propuesta</h1>
      <p class="saludo">Ocoa, una empresa dedicada a la fabricación de chocolate, ha demostrado su calidad y tradición a lo largo de los años. Sin embargo, en un mundo en constante evolución, es esencial que las marcas se adapten para seguir siendo relevantes. Con el objetivo de mantener su posición como líder en el mercado y conectarse con una audiencia más joven y moderna, proponemos un proyecto de rebranding completo para Ocoa. Este proyecto no solo actualizará la imagen de la marca, sino que también redefinirá sus valores para reflejar una mentalidad más contemporánea y vanguardista.
      </p>
    </div>

    <img class="w-screen h-auto pb-10" src="./public/proyectos/Pegatina.png" alt="">
    
    <div class="hola mix-blend-difference">
      <h1 class="title">Objetivos</h1>
      <p class="saludo">
        1. Crear una nueva identidad de marca que refleje los valores de modernidad, juventud y vanguardia. <br>
        2. Atraer a una audiencia más joven sin alienar a los clientes existentes. <br>
        3. Diferenciar a Ocoa de la competencia, destacando su calidad y compromiso con la innovación. <br>
        4. Desarrollar una estrategia de marketing coherente que transmita los nuevos valores de la marca y fortalezca su posicionamiento en el mercado.
      </p>
    </div>
    
    <img class="w-screen h-auto pb-10" src="./public/proyectos/Bolsa.png" alt="">
    <img class="w-screen h-auto pb-10" src="./public/proyectos/Tarjeta.png" alt="">
    <img class="w-screen h-auto pb-10" src="./public/proyectos/Rotulo.png" alt="">
    <img class="w-screen h-auto pb-10" src="./public/proyectos/Camisetas.png" alt="">
    <video class="w-screen h-auto pb-10" autoplay muted loop src="./public/proyectos/Stories.mp4"></video>

    

    <div class="hola mix-blend-difference">
      <h1 class="title">Conclusión</h1>
      <p class="saludo">El proyecto de rebranding propuesto para Ocoa ofrece una oportunidad emocionante para revitalizar la marca y conectar con una nueva generación de consumidores. Al adoptar una identidad más moderna, joven y vanguardista, Ocoa podrá mantener su posición como líder en la industria del chocolate mientras se prepara para un futuro de crecimiento y éxito continuo.
      </p>
    </div>
  
    

    <div class="h-10"></div>

  </main>
</body>






`;class un extends HTMLElement{connectedCallback(){this.innerHTML=dn,window.onpopstate=function(a){location.reload(!0)};const e=document.querySelector(".svg-found");g(e,"magnitudine-primus");const n=document.querySelector(".svg-found-menu");g(n,"magnitudine-primu"),document.querySelector(".hamburger").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="visible"}),document.querySelector(".exit").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="hidden"}),document.addEventListener("DOMContentLoaded",function(){const a=document.createElement("div");a.classList.add("custom-cursor"),document.body.appendChild(a),document.addEventListener("mousemove",function(r){a.style.left=r.clientX+"px",a.style.top=r.clientY+"px"}),document.querySelectorAll("a").forEach(r=>{r.addEventListener("mouseover",function(){a.style.width="150px",a.style.height="150px"}),r.addEventListener("mouseout",function(){a.style.width="30px",a.style.height="30px"})})})}}customElements.define("branding-pagina",un);const hn=`


<body> 

    <div id="contenedor">
      <nav class="extra-nav-menu fixed">
        <div class="navbar-menu">
          <a class="svg-found-menu links" href="/">
          </a>    
          
          <a class="exit links"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </a>
        </div>
      </nav>
  
      <div class="extra-menuabierto fixed">
        <div class="menuabierto">
          <p class="nombre">
           Juan Montalbán Molina
          </p>
          <ul class="menu">
            <li><a class="links" href="/branding">Branding</a></li>
            <li><a class="links" href="/advertising">Advertising</a></li>
            <li><a class="links" href="/festival">Festival</a></li>
            <li><a class="links" href="/tipografia">Tipografía</a></li>
          </ul>  
        </div>
      </div>    
    </div>
      
    <nav class="extra-nav fixed">
      <div class="navbar">
        <a class="svg-found links" href="/"> </a>    
        <a class="hamburger links" href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </a>
      </div>
    </nav>
  
    <footer>
        <div class="extra-futer">
          <div class="futer"> 
            <a href="mailto:foundarealperson@gmail.com" class="textofuter" target="_blank">foundarealperson@gmail.com</a>
           
            <a href="https://www.instagram.com/found1design/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--color-blanco)" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            </a>
    
            <a href="https://www.behance.net/found1design" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
              </svg>
            </a>
            
            <a class="textofuter">Copyright 2024 © Found Studio</a>
    
    
          </div>   
        </div>
          
        
      </footer>
  
    <main>  
  
      <div class="espacio"></div>
        <img class="w-screen max-w-[45rem] h-auto vertical" src="./public/proyectos/Lepesepe.jpg" alt="">
      
  
      <div class="hola mix-blend-difference">
        <h1 class="title">Propuesta</h1>
        <p class="saludo">El Festival "La Palabra y los Sentidos" es una celebración de la creatividad y la expresión artística que combina la magia de la música y la profundidad de la poesía en un evento único. Con el objetivo de promover este festival y atraer a un público diverso y apasionado, se propone una campaña dinámica que destaque la emoción y la inspiración que ofrece este encuentro cultural.


        </p>
      </div>
  
      <img class="w-screen h-auto" src="./public/proyectos/Flyer.gif" alt="">
      
      <div class="hola mix-blend-difference pb-[4rem]">
        <h1 class="title">Objetivos</h1>
        <p class="saludo">
          1. Aumentar la conciencia y la participación en el Festival "La Palabra y los Sentidos".<br>
          2. Destacar la conexión entre la música y la poesía como formas de expresión artística.<br>
          3. Atraer a un público diverso, incluyendo amantes de la música, aficionados a la poesía y entusiastas de la cultura.<br>
          4. Generar expectación y entusiasmo en torno al evento.
        </p>
      </div>
      
      <img class="w-screen max-w-[45rem] vertical h-auto pb-[12rem]" src="./public/proyectos/Lpls.png" alt="">
      <img class="w-screen max-w-[50rem] h-auto pb-[7rem] pr-4 vertical" src="./public/proyectos/Folleto1.png" alt="">
      <img class="w-screen max-w-[50rem] h-auto pb-[4rem] pr-4 vertical" src="./public/proyectos/Folleto2.png" alt="">
      
  
      <div class="hola mix-blend-difference">
        <h1 class="title">Conclusión</h1>
        <p class="saludo">Con esta campaña, se busca capturar la esencia única del Festival "La Palabra y los Sentidos" y compartir su magia con una audiencia amplia y diversa. Al fusionar música y poesía en un evento emocionante y enriquecedor, estamos se crea un espacio donde las palabras y los sentimientos se entrelazan para inspirar y conectar a las personas a través del arte y la creatividad.

        </p>
      </div>
    
      <div class="h-10"></div>

     </main>
  </body>`;class pn extends HTMLElement{connectedCallback(){this.innerHTML=hn,window.onpopstate=function(a){location.reload(!0)};const e=document.querySelector(".svg-found");g(e,"magnitudine-primus");const n=document.querySelector(".svg-found-menu");g(n,"magnitudine-primu"),document.querySelector(".hamburger").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="visible"}),document.querySelector(".exit").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="hidden"}),document.addEventListener("DOMContentLoaded",function(){const a=document.createElement("div");a.classList.add("custom-cursor"),document.body.appendChild(a),document.addEventListener("mousemove",function(r){a.style.left=r.clientX+"px",a.style.top=r.clientY+"px"}),document.querySelectorAll("a").forEach(r=>{r.addEventListener("mouseover",function(){a.style.width="150px",a.style.height="150px"}),r.addEventListener("mouseout",function(){a.style.width="30px",a.style.height="30px"})})})}}customElements.define("festival-pagina",pn);const mn=`
<body> 

    <div id="contenedor">
      <nav class="extra-nav-menu fixed">
        <div class="navbar-menu">
          <a class="svg-found-menu links" href="/">
          </a>    
          
          <a class="exit links"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </a>
        </div>
      </nav>
  
      <div class="extra-menuabierto fixed">
        <div class="menuabierto">
          <p class="nombre">
           Juan Montalbán Molina
          </p>
          <ul class="menu">
            <li><a class="links" href="/branding">Branding</a></li>
            <li><a class="links" href="/advertising">Advertising</a></li>
            <li><a class="links" href="/festival">Festival</a></li>
            <li><a class="links" href="/tipografia">Tipografía</a></li>
          </ul>  
        </div>
      </div>    
    </div>
      
    <nav class="extra-nav fixed">
      <div class="navbar">
        <a class="svg-found links" href="/"> </a>    
        <a class="hamburger links" href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </a>
      </div>
    </nav>
  
    <footer>
        <div class="extra-futer">
          <div class="futer"> 
            <a href="mailto:foundarealperson@gmail.com" class="textofuter" target="_blank">foundarealperson@gmail.com</a>
           
            <a href="https://www.instagram.com/found1design/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--color-blanco)" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            </a>
    
            <a href="https://www.behance.net/found1design" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
              </svg>
            </a>
            
            <a class="textofuter">Copyright 2024 © Found Studio</a>
    
    
          </div>   
        </div>
          
        
      </footer>
  
    <main>  
  
      <div class="espacio"></div>
        <img class="w-screen max-w-[45rem] h-auto vertical" src="./public/proyectos/PosterMockup.jpg" alt="">
      
  
      <div class="hola mix-blend-difference">
        <h1 class="title">Propuesta</h1>
        <p class="saludo">La carrera de Geomática y Topografía en la UPV ofrece una oportunidad emocionante para aquellos apasionados por la tecnología, la ciencia y el medio ambiente. Sin embargo, existe una brecha de género en este campo, con menos mujeres participando en comparación con los hombres. Con el objetivo de promover la diversidad y la inclusión, proponemos una campaña diseñada específicamente para alentar a las chicas de bachillerato a considerar esta emocionante carrera como una opción educativa.


        </p>
      </div>
  
      <img class="w-screen h-auto" src="./public/proyectos/BannerMockup.jpg" alt="">
      
      <div class="hola mix-blend-difference ">
        <h1 class="title">Objetivos</h1>
        <p class="saludo">
          1. Aumentar la participación de chicas en la carrera de Geomática y Topografía de la UPV.<br>
          2. Desafiar estereotipos de género asociados con las carreras STEM.<br>
          3. Destacar las oportunidades profesionales y personales que ofrece la carrera.<br>
          4. Generar conciencia sobre la importancia de la diversidad de género en el campo de la Geomática y Topografía.
        </p>
      </div>
      
      <img class="w-screen max-w-[45rem] vertical h-auto pb-[12rem]" src="./public/proyectos/Terra.png" alt="">
      <img class="w-screen max-w-[80rem] h-auto pb-[12rem] vertical" src="./public/proyectos/Banderola.jpg" alt="">
      <img class="w-screen h-auto" src="./public/proyectos/OrdenadorMockup.jpg" alt="">
      <div class="bg-[#d0d0d0]">
        <video class="w-screen max-w-[80rem] h-auto vertical" autoplay muted loop src="./public/proyectos/Posts.mov"></video>
      </div>
      <div class="bg-[#d0d0d0]">
        <video class="w-screen max-w-[100rem] h-auto vertical subir" autoplay muted loop src="./public/proyectos/Historias.mp4"></video>
      </div>
      <div class="bg-[#d0d0d0]">
        <video class="w-screen max-w-[80rem] h-auto vertical subir" autoplay muted loop src="./public/proyectos/Filters.mov"></video>
      </div>
      
  
      <div class="hola mix-blend-difference">
        <h1 class="title">Conclusión</h1>
        <p class="saludo">Con esta campaña, buscamos romper barreras y abrir nuevas oportunidades para las chicas de bachillerato interesadas en explorar el apasionante mundo de la Geomática y Topografía. Al inspirar, informar y empoderar a las futuras generaciones de mujeres en STEM, estamos construyendo un camino hacia un futuro más diverso, inclusivo e innovador en este campo tan importante.
        </p>
      </div>
    
      
  
      <img class="w-screen max-w-[50rem] vertical h-auto subir" src="./public/proyectos/Niña.gif" alt="">
    </main>
  </body>`;class fn extends HTMLElement{connectedCallback(){this.innerHTML=mn,window.onpopstate=function(a){location.reload(!0)};const e=document.querySelector(".svg-found");g(e,"magnitudine-primus");const n=document.querySelector(".svg-found-menu");g(n,"magnitudine-primu"),document.querySelector(".hamburger").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="visible"}),document.querySelector(".exit").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="hidden"}),document.addEventListener("DOMContentLoaded",function(){const a=document.createElement("div");a.classList.add("custom-cursor"),document.body.appendChild(a),document.addEventListener("mousemove",function(r){a.style.left=r.clientX+"px",a.style.top=r.clientY+"px"}),document.querySelectorAll("a").forEach(r=>{r.addEventListener("mouseover",function(){a.style.width="150px",a.style.height="150px"}),r.addEventListener("mouseout",function(){a.style.width="30px",a.style.height="30px"})})})}}customElements.define("advertising-pagina",fn);const vn=`
<body> 

    <div id="contenedor">
      <nav class="extra-nav-menu fixed">
        <div class="navbar-menu">
          <a class="svg-found-menu links" href="/">
          </a>    
          
          <a class="exit links"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </a>
        </div>
      </nav>
  
      <div class="extra-menuabierto fixed">
        <div class="menuabierto">
          <p class="nombre">
           Juan Montalbán Molina
          </p>
          <ul class="menu">
            <li><a class="links" href="/branding">Branding</a></li>
            <li><a class="links" href="/advertising">Advertising</a></li>
            <li><a class="links" href="/festival">Festival</a></li>
            <li><a class="links" href="/tipografia">Tipografía</a></li>
          </ul>  
        </div>
      </div>    
    </div>
      
    <nav class="extra-nav fixed">
      <div class="navbar">
        <a class="svg-found links" href="/"> </a>    
        <a class="hamburger links" href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </a>
      </div>
    </nav>
  
    <footer>
        <div class="extra-futer">
          <div class="futer"> 
            <a href="mailto:foundarealperson@gmail.com" class="textofuter" target="_blank">foundarealperson@gmail.com</a>
           
            <a href="https://www.instagram.com/found1design/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--color-blanco)" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            </a>
    
            <a href="https://www.behance.net/found1design" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
              </svg>
            </a>
            
            <a class="textofuter">Copyright 2024 © Found Studio</a>
    
    
          </div>   
        </div>
          
        
      </footer>
  
    <main>  
  
      <div class="espacio"></div>
        <img class="w-screen max-w-[60rem] h-auto vertical" src="./public/proyectos/Tab.gif" alt="">
      
  
      <div class="hola mix-blend-difference pb-[2rem]">
        <h1 class="title">Propuesta</h1>
        <p class="saludo">"Triángulo de Amor Bizarro" es un grupo conocido por su música experimental y cautivadora, llena de capas de sonido que crean atmósferas únicas. Para ofrecer una experiencia visual única de su música, proponemos diseñar tres letras, cada una representando una canción emblemática del grupo mediante cimática, osciloscopio y espectrograma. Estas representaciones visuales permitirán a los espectadores explorar la estructura sonora de las canciones de una manera innovadora y artística.

        </p>
      </div>
  
      <img class="w-screen max-w-[40rem] h-auto vertical pb-[7rem]" src="./public/proyectos/T.jpg" alt="">
      <img class="w-screen max-w-[40rem] h-auto vertical pb-[7rem]" src="./public/proyectos/A.jpg" alt="">
      <img class="w-screen max-w-[40rem] h-auto vertical pb-[7rem]" src="./public/proyectos/B.jpg" alt="">
      
      <video class="w-screen h-auto pb-[7rem]" autoplay muted loop src="./public/proyectos/Osciloscopio.mp4"></video>
      <video class="w-screen max-w-[70rem] h-auto vertical pb-[7rem]" autoplay muted loop src="./public/proyectos/Cimatica.mp4"></video>
      <video class="w-screen h-auto" autoplay muted loop src="./public/proyectos/Espectrograma.mp4"></video>
      
  
      <div class="hola mix-blend-difference">
        <h1 class="title">Conclusión</h1>
        <p class="saludo">Con esta propuesta de diseño, buscamos ofrecer una nueva forma de experimentar y apreciar la música de Triángulo de Amor Bizarro a través de representaciones visuales del sonido. Al combinar la cimática, el osciloscopio y los espectrogramas, esperamos proporcionar una visión única de la experimentación sonora y la expresión artística del grupo, inspirando a los espectadores a explorar y conectar con su música desde una perspectiva visual innovadora.
        </p>
      </div>
    
      <div class="h-10"></div>

     </main>
  </body>`;class gn extends HTMLElement{connectedCallback(){this.innerHTML=vn,window.onpopstate=function(a){location.reload(!0)};const e=document.querySelector(".svg-found");g(e,"magnitudine-primus");const n=document.querySelector(".svg-found-menu");g(n,"magnitudine-primu"),document.querySelector(".hamburger").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="visible"}),document.querySelector(".exit").addEventListener("click",()=>{document.getElementById("contenedor").style.visibility="hidden"}),document.addEventListener("DOMContentLoaded",function(){const a=document.createElement("div");a.classList.add("custom-cursor"),document.body.appendChild(a),document.addEventListener("mousemove",function(r){a.style.left=r.clientX+"px",a.style.top=r.clientY+"px"}),document.querySelectorAll("a").forEach(r=>{r.addEventListener("mouseover",function(){a.style.width="150px",a.style.height="150px"}),r.addEventListener("mouseout",function(){a.style.width="30px",a.style.height="30px"})})})}}customElements.define("tipografia-pagina",gn);const bn=document.querySelector("#app"),wn=new w(bn);wn.setRoutes([{path:"/",component:"domus-pagina"},{path:"/branding",component:"branding-pagina"},{path:"/advertising",component:"advertising-pagina"},{path:"/tipografia",component:"tipografia-pagina"},{path:"/festival",component:"festival-pagina"}]);
