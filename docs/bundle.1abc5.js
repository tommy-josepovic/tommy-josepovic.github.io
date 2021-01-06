!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({"/hs+":function(e,t,n){"use strict";n.r(t);var o=n("hosL"),r=(n("vCah"),function(){return Object(o.b)("section",{class:"profile"},Object(o.b)("h1",{class:"profile__name"},"Tommy Josepovic"),Object(o.b)("img",{class:"profile__image",src:"/assets/profile-image.jpg",alt:"Me"}),Object(o.b)("p",{class:"profile__bubble"},"Hey, I'm Tommy Josepovic. I'm a Software Engineering student from Concordia University, Montreal. My passions include web development, history, and philosophy."))}),l=function(e){var t=e.src,n=e.title,r=e.description,l=e.href;new URL(l);return Object(o.b)("a",{class:"card",href:l,target:"_blank"},Object(o.b)("div",{class:"card__thumb",style:{backgroundImage:"url("+t+")"}}),Object(o.b)("div",{class:"card__body"},Object(o.b)("h5",{class:"card__body__title"},n),Object(o.b)("p",{class:"card__body__description"},r)))},_=(n("jroU"),function(){return Object(o.b)("section",{class:"projects container"},Object(o.b)("h2",null,"Projects"),Object(o.b)("div",{class:"projects__grid"},Object(o.b)(l,{title:"Bemol",description:"A fast and simple web framework for C#. There is no magic; just code.",href:"https://github.com/tommy-josepovic/bemol",src:"/assets/bemol.jpg"}),Object(o.b)(l,{title:"Shoppies v2",description:"A web app to browse and nominate movies. My second attempt at Shopify Challenge for Web Developer Interns.",href:"https://shoppies-v2.web.app/",src:"/assets/shoppies-v2.jpg"}),Object(o.b)(l,{title:"ror2-editor",description:"A web app to customize Risk of Rain 2 savefiles.",href:"https://riskofrain2-save-editor.web.app/",src:"/assets/ror2-editor.jpg"}),Object(o.b)(l,{title:"Shoppies",description:"A web app to browse and nominate movies. Part of Shopify Challenge for Web Developer Interns. Superseded by Shoppies v2.",href:"https://shoppies-challenge.web.app/",src:"/assets/shoppies.jpg"})))});n("h3ov"),t.default=function(){return Object(o.b)(o.a,null,Object(o.b)("main",null,Object(o.b)(r,null),Object(o.b)(_,null)))}},h3ov:function(){},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var o,r,l,i=arguments,u={};for(l in t)"key"==l?o=t[l]:"ref"==l?r=t[l]:u[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(i[l]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===u[l]&&(u[l]=e.defaultProps[l]);return _(e,u,o,r,null)}function _(e,t,n,o,r){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++P.__v:r};return null!=P.vnode&&P.vnode(l),l}function i(e){return e.children}function u(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function c(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return c(e)}}function p(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!a.__r++||D!==P.debounceRendering)&&((D=P.debounceRendering)||A)(a)}function a(){for(var e;a.__r=T.length;)e=T.sort((function(e,t){return e.__v.__b-t.__v.__b})),T=[],e.some((function(e){var t,n,r,l,_,i,u;e.__d&&(i=(_=(t=e).__v).__e,(u=t.__P)&&(n=[],(r=o({},_)).__v=_.__v+1,l=g(u,_,r,t.__n,void 0!==u.ownerSVGElement,null!=_.__h?[i]:null,n,null==i?s(_):i,_.__h),k(n,_),l!=i&&c(_)))}))}function f(e,t,n,o,l,u,c,p,a,f){var h,v,y,b,m,k,j,O=o&&o.__k||U,x=O.length;for(a==L&&(a=null!=c?c[0]:x?s(o,0):null),n.__k=[],h=0;h<t.length;h++)if(null!=(b=n.__k[h]=null==(b=t[h])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?_(null,b,null,null,b):Array.isArray(b)?_(i,{children:b},null,null,null):null!=b.__e||null!=b.__c?_(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(y=O[h])||y&&b.key==y.key&&b.type===y.type)O[h]=void 0;else for(v=0;v<x;v++){if((y=O[v])&&b.key==y.key&&b.type===y.type){O[v]=void 0;break}y=null}m=g(e,b,y=y||L,l,u,c,p,a,f),(v=b.ref)&&y.ref!=v&&(j||(j=[]),y.ref&&j.push(y.ref,null,b),j.push(v,b.__c||m,b)),null!=m?(null==k&&(k=m),a=d(e,b,y,O,c,m,a),f||"option"!=n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&y.__e==a&&a.parentNode!=e&&(a=s(y))}if(n.__e=k,null!=c&&"function"!=typeof n.type)for(h=c.length;h--;)null!=c[h]&&r(c[h]);for(h=x;h--;)null!=O[h]&&S(O[h],O[h]);if(j)for(h=0;h<j.length;h++)w(j[h],j[++h],j[++h])}function d(e,t,n,o,r,l,_){var i,u,s;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(r==n||l!=_||null==l.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(l),i=null;else{for(u=_,s=0;(u=u.nextSibling)&&s<o.length;s+=2)if(u==l)break e;e.insertBefore(l,_),i=_}return void 0!==i?i:l.nextSibling}function h(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||E.test(t)?n:n+"px"}function v(e,t,n,o,r){var l,_,i;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||h(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||h(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),(_=t.toLowerCase())in e&&(t=_),t=t.slice(2),e.l||(e.l={}),e.l[t+l]=n,i=l?b:y,n?o||e.addEventListener(t,i,l):e.removeEventListener(t,i,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function y(e){this.l[e.type+!1](P.event?P.event(e):e)}function b(e){this.l[e.type+!0](P.event?P.event(e):e)}function m(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&m(r,t,n),t=d(n,r,r,e.__k,null,r.__e,t),"function"==typeof e.type&&(e.__d=t)))}function g(e,t,n,r,l,_,s,c,p){var a,d,h,v,y,b,g,k,w,S,x,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(p=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(a=P.__b)&&a(t);try{e:if("function"==typeof C){if(k=t.props,w=(a=C.contextType)&&r[a.__c],S=a?w?w.props.value:a.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:("prototype"in C&&C.prototype.render?t.__c=d=new C(k,S):(t.__c=d=new u(k,S),d.constructor=C,d.render=O),w&&w.sub(d),d.props=k,d.state||(d.state={}),d.context=S,d.__n=r,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=C.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=o({},d.__s)),o(d.__s,C.getDerivedStateFromProps(k,d.__s))),v=d.props,y=d.state,h)null==C.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,S),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,S)||t.__v===n.__v){d.props=k,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&s.push(d),m(t,c,e);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,b)}))}d.context=S,d.props=k,d.state=d.__s,(a=P.__r)&&a(t),d.__d=!1,d.__v=t,d.__P=e,a=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=o(o({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(b=d.getSnapshotBeforeUpdate(v,y)),x=null!=a&&a.type==i&&null==a.key?a.props.children:a,f(e,Array.isArray(x)?x:[x],t,n,r,l,_,s,c,p),d.base=t.__e,t.__h=null,d.__h.length&&s.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=j(n.__e,t,n,r,l,_,s,p);(a=P.diffed)&&a(t)}catch(e){t.__v=null,(p||null!=_)&&(t.__e=c,t.__h=!!p,_[_.indexOf(c)]=null),P.__e(e,t,n)}return t.__e}function k(e,t){P.__c&&P.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){P.__e(e,t.__v)}}))}function j(e,t,n,o,r,l,_,i){var u,s,c,p,a,d=n.props,h=t.props;if(r="svg"===t.type||r,null!=l)for(u=0;u<l.length;u++)if(null!=(s=l[u])&&((null===t.type?3===s.nodeType:s.localName===t.type)||e==s)){e=s,l[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),l=null,i=!1}if(null===t.type)d===h||i&&e.data===h||(e.data=h);else{if(null!=l&&(l=U.slice.call(e.childNodes)),c=(d=n.props||L).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!i){if(null!=l)for(d={},a=0;a<e.attributes.length;a++)d[e.attributes[a].name]=e.attributes[a].value;(p||c)&&(p&&(c&&p.__html==c.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||v(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||v(e,l,t[l],n[l],o)})(e,h,d,r,i),p?t.__k=[]:(u=t.props.children,f(e,Array.isArray(u)?u:[u],t,n,o,"foreignObject"!==t.type&&r,l,_,L,i)),i||("value"in h&&void 0!==(u=h.value)&&(u!==e.value||"progress"===t.type&&!u)&&v(e,"value",u,d.value,!1),"checked"in h&&void 0!==(u=h.checked)&&u!==e.checked&&v(e,"checked",u,d.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){P.__e(e,n)}}function S(e,t,n){var o,l,_;if(P.unmount&&P.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||w(o,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){P.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&S(o[_],t,n);null!=l&&r(l)}function O(e,t,n){return this.constructor(e,n)}function x(e,t,n){var o,r,_;P.__&&P.__(e,t),r=(o=n===M)?null:n&&n.__k||t.__k,e=l(i,null,[e]),_=[],g(t,(o?t:n||t).__k=e,r||L,L,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:t.childNodes.length?U.slice.call(t.childNodes):null,_,n||L,o),k(_,e)}function C(e,t){x(e,t,M)}n.d(t,"d",(function(){return x})),n.d(t,"c",(function(){return C})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var P,T,A,D,M,L={},U=[],E=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;P={__e:function(e,t){for(var n,o,r,l=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=l,n.__E=n}catch(t){e=t}throw e},__v:0},u.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},u.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},u.prototype.render=i,T=[],A="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a.__r=0,M=L},jroU:function(){},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL"),r=o.b,l=o.d,_=o.c,i=function(e){return e&&e.default?e.default:e},u=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof i(n("/hs+"))){var s=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=i(n("/hs+")),t={},o=document.querySelector('[type="__PREACT_CLI_DATA__"]');o&&(t=JSON.parse(decodeURI(o.innerHTML)).preRenderData||t);var c={preRenderData:t},p=t.url?u(t.url):"",a=_&&p===u(location.pathname);s=(a?_:l)(r(e,{CLI_DATA:c}),document.body,s)}()}},vCah:function(){}});
//# sourceMappingURL=bundle.1abc5.js.map