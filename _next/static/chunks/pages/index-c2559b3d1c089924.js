(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,n){"use strict";e.exports=n.g.process||n(7663)},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5051)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var s,o=(s=n(7294))&&s.__esModule?s:{default:s},a=n(6273),c=n(387),l=n(7190);var u={};function d(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),s=o.default.useMemo((function(){var t=i(a.resolveHref(r,e.href,!0),2),n=t[0],s=t[1];return{href:n,as:e.as?a.resolveHref(r,e.as):s||n}}),[r,e.href,e.as]),f=s.href,h=s.as,p=e.children,m=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var x=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,_=i(l.useIntersection({rootMargin:"200px"}),2),g=_[0],j=_[1],S=o.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);o.default.useEffect((function(){var e=j&&n&&a.isLocalURL(f),t="undefined"!==typeof b?b:r&&r.locale,i=u[f+"%"+h+(t?"%"+t:"")];e&&!i&&d(r,f,h,{locale:t})}),[h,f,j,b,n,r]);var w={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[i?"replace":"push"](n,r,{shallow:s,locale:c,scroll:o}))}(e,r,f,h,m,y,v,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(f)&&d(r,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof b?b:r&&r.locale,k=r&&r.isLocaleDomain&&a.getDomainLocale(h,R,r&&r.locales,r&&r.domainLocales);w.href=k||a.addBasePath(a.addLocale(h,R,r&&r.defaultLocale))}return o.default.cloneElement(t,w)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,r=s.useRef(),l=i(s.useState(!1),2),u=l[0],d=l[1],f=s.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||u||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,s=r.observer,o=r.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return s.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var s=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},5051:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),i=n(5988),s=(n(7294),n(1664)),o=n(9008),a=[{href:"https://zeit.co/now",label:"ZEIT"},{href:"https://github.com/zeit/next.js",label:"GitHub"}].map((function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e})),c=function(){return(0,r.jsxs)("nav",{className:"jsx-4aec2ad80414efde",children:[(0,r.jsxs)("ul",{className:"jsx-4aec2ad80414efde",children:[(0,r.jsx)("li",{className:"jsx-4aec2ad80414efde",children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"jsx-4aec2ad80414efde",children:"Home"})})}),a.map((function(e){var t=e.key,n=e.href,i=e.label;return(0,r.jsx)("li",{className:"jsx-4aec2ad80414efde",children:(0,r.jsx)("a",{href:n,className:"jsx-4aec2ad80414efde",children:i})},t)}))]}),(0,r.jsx)(i.default,{id:"4aec2ad80414efde",children:"body{margin:0;\nfont-family:-apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif}\nnav.jsx-4aec2ad80414efde{text-align:center}\nul.jsx-4aec2ad80414efde{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\nnav.jsx-4aec2ad80414efde>ul.jsx-4aec2ad80414efde{padding:4px 16px}\nli.jsx-4aec2ad80414efde{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\npadding:6px 8px}\na.jsx-4aec2ad80414efde{color:#067df7;\n-webkit-text-decoration:none;\ntext-decoration:none;\nfont-size:13px}"})]})},l=function(){return(0,r.jsxs)("div",{className:"jsx-8c9018ba51107eb4",children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{className:"jsx-8c9018ba51107eb4",children:"Home"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/nextjs-test/static/favicon.ico",className:"jsx-8c9018ba51107eb4"})]}),(0,r.jsx)(c,{}),(0,r.jsxs)("div",{className:"jsx-8c9018ba51107eb4 hero",children:[(0,r.jsx)("h1",{className:"jsx-8c9018ba51107eb4 title",children:"Welcome to Next.js!"}),(0,r.jsxs)("p",{className:"jsx-8c9018ba51107eb4 description",children:["To get started, edit ",(0,r.jsx)("code",{className:"jsx-8c9018ba51107eb4",children:"pages/index.js"})," and save to reload."]}),(0,r.jsxs)("div",{className:"jsx-8c9018ba51107eb4 row",children:[(0,r.jsx)(s.default,{href:"https://github.com/zeit/next.js#setup",children:(0,r.jsxs)("a",{className:"jsx-8c9018ba51107eb4 card",children:[(0,r.jsx)("h3",{className:"jsx-8c9018ba51107eb4",children:"Getting Started \u2192"}),(0,r.jsx)("p",{className:"jsx-8c9018ba51107eb4",children:"Learn more about Next.js on GitHub and in their examples."})]})}),(0,r.jsx)(s.default,{href:"https://github.com/zeit/next.js/tree/master/examples",children:(0,r.jsxs)("a",{className:"jsx-8c9018ba51107eb4 card",children:[(0,r.jsx)("h3",{className:"jsx-8c9018ba51107eb4",children:"Examples \u2192"}),(0,r.jsx)("p",{className:"jsx-8c9018ba51107eb4",children:"Find other example boilerplates on the Next.js GitHub."})]})}),(0,r.jsx)(s.default,{href:"https://github.com/zeit/next.js",children:(0,r.jsxs)("a",{className:"jsx-8c9018ba51107eb4 card",children:[(0,r.jsx)("h3",{className:"jsx-8c9018ba51107eb4",children:"Create Next App \u2192"}),(0,r.jsx)("p",{className:"jsx-8c9018ba51107eb4",children:"Was this tool helpful? Let us know how we can improve it!"})]})})]})]}),(0,r.jsx)(i.default,{id:"8c9018ba51107eb4",children:".hero.jsx-8c9018ba51107eb4{width:100%;\ncolor:#333}\n.title.jsx-8c9018ba51107eb4{margin:0;\nwidth:100%;\npadding-top:80px;\nline-height:1.15;\nfont-size:48px}\n.title.jsx-8c9018ba51107eb4, .description.jsx-8c9018ba51107eb4{text-align:center}\n.row.jsx-8c9018ba51107eb4{max-width:880px;\nmargin:80px auto 40px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-justify-content:space-around;\njustify-content:space-around}\n.card.jsx-8c9018ba51107eb4{padding:18px 18px 24px;\nwidth:220px;\ntext-align:left;\n-webkit-text-decoration:none;\ntext-decoration:none;\ncolor:#434343;\nborder:1px solid #9b9b9b}\n.card.jsx-8c9018ba51107eb4:hover{border-color:#067df7}\n.card.jsx-8c9018ba51107eb4 h3.jsx-8c9018ba51107eb4{margin:0;\ncolor:#067df7;\nfont-size:18px}\n.card.jsx-8c9018ba51107eb4 p.jsx-8c9018ba51107eb4{margin:0;\npadding:12px 0 0;\nfont-size:13px;\ncolor:#333}"})]})}},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a,c=[],l=!1,u=-1;function d(){l&&a&&(l=!1,a.length?c=a.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=o(d);l=!0;for(var t=c.length;t;){for(a=c,c=[];++u<t;)a&&a[u].run();u=-1,t=c.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||o(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(162);e.exports=i}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},9035:function(e,t,n){"use strict";t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;s[r]||(s[r]="jsx-"+(0,i.default)(e+"-"+n));return s[r]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;s[n]||(s[n]=t.replace(/__jsx-style-dynamic-selector/g,e));return s[n]};var r,i=(r=n(9887))&&r.__esModule?r:{default:r};var s={}},4287:function(e,t,n){"use strict";var r=n(3454);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof r&&r.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,a=void 0===i?s:i,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;c(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,r,a=e.prototype;return a.setOptimizeForSpeed=function(e){c("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(c(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(i){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,n){t&&c(o(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,n),r&&i(t,r),e}();function c(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=a},7884:function(e,t,n){"use strict";t.default=l;var r,i=(r=n(7294))&&r.__esModule?r:{default:r},s=n(8122),o=n(9035);var a=i.default.useInsertionEffect||i.default.useLayoutEffect,c="undefined"!==typeof window?(0,s.createStyleRegistry)():void 0;function l(e){var t=c||(0,s.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(a((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}l.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return(0,o.computeId)(t,n)})).join(" ")}},8122:function(e,t,n){"use strict";t.__esModule=!0,t.createStyleRegistry=u,t.StyleRegistry=function(e){var t=e.registry,n=e.children,r=(0,i.useContext)(l),s=(0,i.useState)((function(){return r||t||u()}))[0];return i.default.createElement(l.Provider,{value:s},n)},t.useStyleRegistry=function(){return(0,i.useContext)(l)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(r=n(4287))&&r.__esModule?r:{default:r},o=n(9035);function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}var c=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return i.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=(0,o.computeId)(r,n);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return(0,o.computeSelector)(i,e)})):[(0,o.computeSelector)(i,t)]}}return{styleId:(0,o.computeId)(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=c;var l=(0,i.createContext)(null);function u(){return new c}t.StyleSheetContext=l},5988:function(e,t,n){e.exports=n(7884)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);