(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(2113)}])},4997:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(5893),o=n(8420),l=n(5313),i=function(e){var t=e.dateString,n=(0,o.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,l.Z)(n,"LLLL\td, yyyy")})}},4707:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(5893),o=n(7294),l=n(529);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=o.forwardRef((function(e,t){var n=e.children,o=e.src,a=e.alt,c=s(e,["children","src","alt"]),u=(0,l.W)()+o;return(0,r.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({src:u,alt:a},c,{ref:t,children:n}))}));a.displayName="Image"},2756:function(e,t,n){"use strict";n.d(t,{A:function(){return k}});var r=n(5893),o=n(958),l=n(9352),i=n(7294),s=n(9221),a=n(8820),c=n(3746),u=n(1190),d=(0,n(6902).ZP)((function(e){return{open:!1,setOpen:function(t){return e((function(){return{open:t}}))}}}));function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=(0,c.E)(a.g7),g={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},v=function(e){var t=e.children,n=h(e,["children"]),o=d((function(e){return e.setOpen}));return(0,r.jsx)(s.fC,m({},n,{onOpenChange:function(e){return o(e)},children:t}))},x=i.forwardRef((function(e,t){var n=e.children,o=h(e,["children"]),l=d((function(e){return e})).open;return(0,r.jsx)(u.M,{children:l&&(0,r.jsx)(p,m({},g,{children:(0,r.jsx)(a.g7,m({},o,{children:(0,r.jsx)(s.VY,{ref:t,forceMount:!0,children:n})}))}))})}));x.displayName="DropdownMenuContent";var b=s.xz,y=s.ck,C=n(2737),j=n(9562),S=function(e){var t=e.children;return(0,r.jsxs)(v,{children:[(0,r.jsx)(b,{asChild:!0,children:(0,r.jsx)("button",{className:"icon-btn rounded-full bg-white dark:bg-black shadow-xl","aria-label":"hamburger menu",children:(0,r.jsx)(l.I0R,{size:28})})}),(0,r.jsxs)(x,{sideOffset:8,collisionTolerance:16,className:"vstack gap-2 max-h-80 bg-primary-1 rounded-lg shadow-lg",children:[(0,r.jsx)("div",{className:"center",children:j.O.map((function(e){var t=e.name,n=e.href,o=e.icon;return(0,r.jsx)(y,{onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},className:"text-md text-primary-1 hover:text-teal-800 hover:dark:text-teal-400 focus:text-teal-800 focus:dark:text-teal-400 capitalize select-none cursor-pointer",children:(0,r.jsx)(C.r,{href:n,passHref:!0,children:(0,r.jsxs)("a",{className:"hstack gap-3 py-3 px-6",children:[o," ",t]})})},t)}))}),t]})]})},N=n(7377),k=function(e){var t=e.main,n=e.aside,l=e.hamburgerMenu,i=(0,N.P)("lg");return(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-10",children:[(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)("aside",{children:n}),i||(0,r.jsx)(o.h_,{children:(0,r.jsx)("div",{className:"fixed left-8 bottom-8",children:(0,r.jsx)(S,{children:l})})})]})}},9384:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var r=n(5893),o=n(8820),l=n(4707),i=n(7735),s=[{icon:(0,r.jsx)(i.jVV,{})},{icon:(0,r.jsx)(i.pZu,{})},{icon:(0,r.jsx)(i.mWf,{})}],a=function(){return(0,r.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,r.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,r.jsx)(l.E,{className:"object-cover w-28 h-28 rounded-full bg-white",alt:"subt avatar",src:"/assets/author.png"}),(0,r.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"subt"})]}),(0,r.jsx)("p",{className:"text-primary-1",children:"Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI."}),(0,r.jsx)("div",{className:"flex gap-4",children:s.map((function(e,t){var n=e.icon;return(0,r.jsx)(o.g7,{size:20,className:"text-primary-1",children:n},t)}))})]})}},7377:function(e,t,n){"use strict";n.d(t,{P:function(){return s}});var r=n(7294);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(a){s=!0,o=a}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i={sm:640,md:768,lg:1024,xl:1280},s=function(e){return function(){var e=l(r.useState({width:0,height:0}),2),t=e[0],n=e[1];return r.useEffect((function(){var e=function(){return n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),t}().width>=i[e]}},2113:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return O}});var r=n(5893),o=n(9008),l=n.n(o),i=n(2756),s=n(221),a=n.n(s),c=function(e){var t=e.content;return(0,r.jsx)("div",{className:"post",children:(0,r.jsx)("div",{className:a().markdown,dangerouslySetInnerHTML:{__html:t}})})},u=n(8193),d=n(9352),f=n(4997),m=n(4707),h=n(2737),p=function(e){var t=e.title,n=e.coverImage,o=e.date,l=e.tags;return(0,r.jsxs)("div",{className:"vstack gap-4",children:[(0,r.jsx)(m.E,{src:n,alt:"Cover Image for ".concat(t)}),(0,r.jsx)("h1",{className:"text-primary-1 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:t}),(0,r.jsxs)("div",{className:"wrap gap-4",children:[(0,r.jsxs)("span",{className:"select-none hstack gap-2 text-md font-bold text-accent-1",children:[(0,r.jsx)(d.N$g,{}),(0,r.jsx)(f.C,{dateString:o})]}),(0,r.jsxs)("div",{className:"wrap gap-2",children:[(0,r.jsx)("span",{className:"select-none text-primary-1",children:(0,r.jsx)(u.EhI,{})}),l.map((function(e){return(0,r.jsx)(h.r,{href:"/tags/".concat(e),passHref:!0,children:(0,r.jsx)("a",{className:"badge",children:e})},e)}))]})]})]})},g=function(e){var t=e.post,n=t.title,o=t.coverImage,l=t.date,i=t.tags,s=t.content;return(0,r.jsxs)("div",{className:"p-8 bg-primary-1",children:[(0,r.jsx)(p,{title:n,coverImage:o,date:l,tags:i}),(0,r.jsx)(c,{content:s})]})},v=n(9384),x=n(7294),b=n(5434),y=n(2866),C=n.n(y),j=function(){return(0,x.useEffect)((function(){return C().init({tocSelector:".toc",contentSelector:".post",headingSelector:"h1, h2, h3",scrollSmoothOffset:-80}),function(){return C().destroy()}}),[]),(0,r.jsxs)("div",{className:"select-none vstack gap-3 p-6 bg-primary-1",children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsxs)("div",{className:"center gap-2 py-2 px-3 border-b-2 border-teal-700 dark:border-teal-400 text-base font-bold text-primary-1",children:[(0,r.jsx)(b.twx,{}),"\u76ee\u6b21"]})}),(0,r.jsx)("nav",{className:"toc"})]})},S=n(7377),N=function(e){var t=e.post,n=(0,S.P)("lg");return(0,r.jsx)(i.A,{main:(0,r.jsxs)("article",{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:t.title}),(0,r.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,r.jsx)(g,{post:t})]}),aside:(0,r.jsxs)("div",{className:"vstack gap-6 h-full",children:[(0,r.jsx)(v.N,{}),n&&(0,r.jsx)("div",{className:"sticky top-20",children:(0,r.jsx)(j,{})})]}),hamburgerMenu:(0,r.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},onKeyDown:function(){},className:"overflow-y-auto cursor-default",children:(0,r.jsx)(j,{})})})};function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=!0,O=function(e){return(0,r.jsx)(N,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){k(e,t,n[t])}))}return e}({},e))}},221:function(e){e.exports={markdown:"markdown-styles_markdown__d9RxG"}},1557:function(e){e.exports=function(e){var t,n=[].forEach,r=[].some,o=document.body,l=!0,i=" ";function s(t,r){var o=r.appendChild(function(t){var r=document.createElement("li"),o=document.createElement("a");e.listItemClass&&r.setAttribute("class",e.listItemClass);e.onClick&&(o.onclick=e.onClick);e.includeTitleTags&&o.setAttribute("title",t.textContent);e.includeHtml&&t.childNodes.length?n.call(t.childNodes,(function(e){o.appendChild(e.cloneNode(!0))})):o.textContent=t.textContent;return o.setAttribute("href",e.basePath+"#"+t.id),o.setAttribute("class",e.linkClass+i+"node-name--"+t.nodeName+i+e.extraLinkClasses),r.appendChild(o),r}(t));if(t.children.length){var l=a(t.isCollapsed);t.children.forEach((function(e){s(e,l)})),o.appendChild(l)}}function a(t){var n=e.orderedList?"ol":"ul",r=document.createElement(n),o=e.listClass+i+e.extraListClasses;return t&&(o+=i+e.collapsibleClass,o+=i+e.isCollapsedClass),r.setAttribute("class",o),r}function c(t){var n=0;return null!==t&&(n=t.offsetTop,e.hasInnerContainers&&(n+=c(t.offsetParent))),n}function u(t){return t&&-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(i+e.isCollapsedClass).join(""),u(t.parentNode.parentNode)):t}return{enableTocAnimation:function(){l=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"===typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(l=!1)},render:function(e,n){var r=a(!1);if(n.forEach((function(e){s(e,r)})),null!==(t=e||t))return t.firstChild&&t.removeChild(t.firstChild),0===n.length?t:t.appendChild(r)},updateToc:function(s){var a;a=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop,e.positionFixedSelector&&function(){var n;n=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop;var r=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=t.offsetTop),n>e.fixedSidebarOffset?-1===r.className.indexOf(e.positionFixedClass)&&(r.className+=i+e.positionFixedClass):r.className=r.className.split(i+e.positionFixedClass).join("")}();var d,f=s;if(l&&null!==t&&f.length>0){r.call(f,(function(t,n){return c(t)>a+e.headingsOffset+10?(d=f[0===n?n:n-1],!0):n===f.length-1?(d=f[f.length-1],!0):void 0}));var m=t.querySelectorAll("."+e.linkClass);n.call(m,(function(t){t.className=t.className.split(i+e.activeLinkClass).join("")}));var h=t.querySelectorAll("."+e.listItemClass);n.call(h,(function(t){t.className=t.className.split(i+e.activeListItemClass).join("")}));var p=t.querySelector("."+e.linkClass+".node-name--"+d.nodeName+'[href="'+e.basePath+"#"+d.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');p&&-1===p.className.indexOf(e.activeLinkClass)&&(p.className+=i+e.activeLinkClass);var g=p&&p.parentNode;g&&-1===g.className.indexOf(e.activeListItemClass)&&(g.className+=i+e.activeListItemClass);var v=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);n.call(v,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=i+e.isCollapsedClass)})),p&&p.nextSibling&&-1!==p.nextSibling.className.indexOf(e.isCollapsedClass)&&(p.nextSibling.className=p.nextSibling.className.split(i+e.isCollapsedClass).join("")),u(p&&p.parentNode.parentNode)}}}}},1340:function(e){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1}},2866:function(e,t,n){var r,o,l,i;i="undefined"!==typeof n.g?n.g:this.window||this.global,o=[],r=function(e){"use strict";var t,r,o,l=n(1340),i={},s={},a=n(1557),c=n(9620),u=n(3693),d=!!e&&!!e.document&&!!e.document.querySelector&&!!e.addEventListener;if("undefined"!==typeof window||d){var f=Object.prototype.hasOwnProperty;return s.destroy=function(){var e=g(i);null!==e&&(i.skipRendering||e&&(e.innerHTML=""),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(i.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1)))},s.init=function(e){if(d){i=m(l,e||{}),this.options=i,this.state={},i.scrollSmooth&&(i.duration=i.scrollSmoothDuration,i.offset=i.scrollSmoothOffset,s.scrollSmooth=n(764).initSmoothScrolling(i)),t=a(i),r=c(i),this._buildHtml=t,this._parseContent=r,this._headingsArray=o,s.destroy();var f=p(i);if(null!==f){var v=g(i);if(null!==v&&null!==(o=r.selectHeadings(f,i.headingSelector))){var x=r.nestHeadingsArray(o).nest;i.skipRendering||t.render(v,x),this._scrollListener=h((function(e){t.updateToc(o),!i.disableTocScrollSync&&u(i);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(o),i.scrollEndCallback&&i.scrollEndCallback(e))}),i.throttleTimeout),this._scrollListener(),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var b=null;return this._clickListener=h((function(e){i.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(o),b&&clearTimeout(b),b=setTimeout((function(){t.enableTocAnimation()}),i.scrollSmoothDuration)}),i.throttleTimeout),i.scrollContainer&&document.querySelector(i.scrollContainer)?document.querySelector(i.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},s.refresh=function(e){s.destroy(),s.init(e||this.options)},e.tocbot=s,s}function m(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)f.call(n,r)&&(e[r]=n[r])}return e}function h(e,t,n){var r,o;return t||(t=250),function(){var l=n||this,i=+new Date,s=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout((function(){r=i,e.apply(l,s)}),t)):(r=i,e.apply(l,s))}}function p(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch(t){return console.warn("Contents element not found: "+e.contentSelector),null}}function g(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch(t){return console.warn("TOC element not found: "+e.tocSelector),null}}}(i),void 0===(l="function"===typeof r?r.apply(t,o):r)||(e.exports=l)},9620:function(e){e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function r(e){return+e.nodeName.toUpperCase().replace("H","")}function o(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;const n=t.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim());var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:r(t),textContent:n};return e.includeHtml&&(o.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(o,t):o}return{nestHeadingsArray:function(r){return t.call(r,(function(t,r){var l=o(r);return l&&function(t,r){for(var l=o(t),i=l.headingLevel,s=r,a=n(s),c=i-(a?a.headingLevel:0);c>0&&(!(a=n(s))||i!==a.headingLevel);)a&&void 0!==a.children&&(s=a.children),c--;i>=e.collapseDepth&&(l.isCollapsed=!0),s.push(l)}(l,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var r=n;e.ignoreSelector&&(r=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return t.querySelectorAll(r)}catch(o){return console.warn("Headers not found with selector: "+r),null}}}}},764:function(e,t){t.initSmoothScrolling=function(e){var t=e.duration,n=e.offset,r=location.hash?o(location.href):location.href;function o(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(l){var i;"a"!==(i=l.target).tagName.toLowerCase()||!(i.hash.length>0||"#"===i.href.charAt(i.href.length-1))||o(i.href)!==r&&o(i.href)+"#"!==r||l.target.className.indexOf("no-smooth-scroll")>-1||"#"===l.target.href.charAt(l.target.href.length-2)&&"!"===l.target.href.charAt(l.target.href.length-1)||-1===l.target.className.indexOf(e.linkClass)||function(e,t){var n,r,o=window.pageYOffset,l={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||d},i=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]')||document.querySelector('[id="'+e.split("#").join("")+'"]'),s="string"===typeof e?l.offset+(e?i&&i.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,a="function"===typeof l.duration?l.duration(s):l.duration;function c(e){r=e-n,window.scrollTo(0,l.easing(r,o,s,a)),r<a?requestAnimationFrame(c):u()}function u(){window.scrollTo(0,o+s),"function"===typeof l.callback&&l.callback()}function d(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}requestAnimationFrame((function(e){n=e,c(e)}))}(l.target.hash,{duration:t,offset:n,callback:function(){!function(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}(l.target.hash)}})}),!1)}},3693:function(e){e.exports=function(e){var t=e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop)}}}},function(e){e.O(0,[415,937,228,256,771,774,888,179],(function(){return t=592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);