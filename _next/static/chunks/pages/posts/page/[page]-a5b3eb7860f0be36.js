(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1013:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/page/[page]",function(){return t(5682)}])},8572:function(e,r,t){"use strict";t.d(r,{E:function(){return c}});var n=t(5893),i=t(9352),a=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},c=function(e){var r=e.date;return(0,n.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,n.jsx)(i.N$g,{}),a(r)]})}},3759:function(e,r,t){"use strict";t.d(r,{E:function(){return l}});var n=t(5893),i=t(7294),a=t(1891);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.forwardRef((function(e,r){var t=e.children,i=e.src,l=e.alt,u=o(e,["children","src","alt"]),s=(0,a.O)()+i;return(0,n.jsx)("img",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}({src:s,alt:l},u,{ref:r,children:t}))}));l.displayName="Image"},8540:function(e,r,t){"use strict";t.d(r,{A:function(){return k}});var n=t(5893),i=t(958),a=t(9352),c=t(7294),o=t(9221),l=t(8820),u=t(3746),s=t(1190),f=(0,t(6902).ZP)((function(e){return{open:!1,setOpen:function(r){return e((function(){return{open:r}}))}}}));function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function h(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=(0,u.E)(l.g7),b={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},g=function(e){var r=e.children,t=h(e,["children"]),i=f((function(e){return e.setOpen}));return(0,n.jsx)(o.fC,p({},t,{onOpenChange:function(e){return i(e)},children:r}))},x=c.forwardRef((function(e,r){var t=e.children,i=h(e,["children"]),a=f((function(e){return e})).open;return(0,n.jsx)(s.M,{children:a&&(0,n.jsx)(m,p({},b,{children:(0,n.jsx)(l.g7,p({},i,{children:(0,n.jsx)(o.VY,{ref:r,forceMount:!0,children:t})}))}))})}));x.displayName="DropdownMenuContent";var y=o.xz,j=o.ck,v=t(4929),w=t(9562),O=function(e){var r=e.children;return(0,n.jsxs)(g,{children:[(0,n.jsx)(y,{asChild:!0,children:(0,n.jsx)("button",{className:"icon-btn rounded-full bg-white dark:bg-black shadow-xl","aria-label":"hamburger menu",children:(0,n.jsx)(a.I0R,{size:28})})}),(0,n.jsxs)(x,{sideOffset:8,collisionTolerance:16,className:"vstack gap-2 max-h-80 bg-primary-1 rounded-lg shadow-lg",children:[(0,n.jsx)("div",{className:"center",children:w.O.map((function(e){var r=e.name,t=e.href,i=e.icon;return(0,n.jsx)(j,{onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},className:"text-md text-primary-1 hover:text-teal-800 hover:dark:text-teal-400 focus:text-teal-800 focus:dark:text-teal-400 capitalize select-none cursor-pointer",children:(0,n.jsx)(v.r,{href:t,passHref:!0,children:(0,n.jsxs)("a",{className:"hstack gap-3 py-3 px-6",children:[i," ",r]})})},r)}))}),r]})]})},N=t(7377),k=function(e){var r=e.main,t=e.aside,a=e.hamburgerMenu,c=(0,N.P)("lg");return(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-10",children:[(0,n.jsx)("div",{className:"lg:col-span-2",children:(0,n.jsx)("main",{children:r})}),(0,n.jsx)("aside",{children:t}),c||(0,n.jsx)(i.h_,{children:(0,n.jsx)("div",{className:"fixed left-8 bottom-8",children:(0,n.jsx)(O,{children:a})})})]})}},713:function(e,r,t){"use strict";t.d(r,{N:function(){return o}});var n=t(5893),i=t(3759),a=t(7735),c=[{icon:(0,n.jsx)(a.jVV,{size:20})},{icon:(0,n.jsx)(a.pZu,{size:20})},{icon:(0,n.jsx)(a.mWf,{size:20})}],o=function(){return(0,n.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,n.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,n.jsx)(i.E,{className:"object-cover w-28 h-28 rounded-full bg-white",alt:"subt avatar",src:"/assets/author.png"}),(0,n.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"Next.js"})]}),(0,n.jsx)("p",{className:"text-primary-1",children:"Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI."}),(0,n.jsx)("div",{className:"flex gap-4",children:c.map((function(e,r){var t=e.icon;return(0,n.jsx)("div",{className:"text-primary-1",children:t},r)}))})]})}},1362:function(e,r,t){"use strict";t.d(r,{f:function(){return l}});var n=t(5893),i=t(3759),a=t(4929),c=t(8572),o=function(e){var r=e.title,t=e.coverImage,o=e.date,l=e.excerpt,u=e.slug;return(0,n.jsx)(a.r,{href:"/posts/".concat(u),children:(0,n.jsxs)("a",{className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ",children:[(0,n.jsx)("div",{className:"center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent",children:(0,n.jsx)(i.E,{src:t,alt:"Cover Image for ".concat(r),className:"w-full max-w-xs h-full object-cover"})}),(0,n.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,n.jsx)(c.E,{date:o}),(0,n.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:r}),(0,n.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:l})]})]})})},l=function(e){var r=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-primary-1 mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:"Stories"}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-10",children:r.map((function(e){return(0,n.jsx)(o,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},7377:function(e,r,t){"use strict";t.d(r,{P:function(){return o}});var n=t(7294);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,a=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(l){o=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c={sm:640,md:768,lg:1024,xl:1280},o=function(e){return function(){var e=a(n.useState({width:0,height:0}),2),r=e[0],t=e[1];return n.useEffect((function(){var e=function(){return t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),r}().width>=c[e]}},5682:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return E},default:function(){return A}});var n=t(5893),i=t(1163),a=t(8540),c=t(713),o=t(4929),l=t(7294),u=t(1670);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}function d(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=l.forwardRef((function(e,r){var t=e.children,i=e.href,a=e.condition,c=d(e,["children","href","condition"]);return(0,n.jsx)(n.Fragment,{children:a?(0,n.jsx)(u.r,f({href:i,passHref:!0},c,{ref:r,children:(0,n.jsx)("a",{children:t})})):(0,n.jsx)(n.Fragment,{children:t})})}));function h(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter(Boolean).join(" ")}p.displayName="ConditionalLink";var m={default:"",arrow:"",ellipsis:"w-auto px-1"},b=function(e){var r=e.children,t=e.variant,i=void 0===t?"default":t,a=e.active,c=e.disabled;return(0,n.jsx)("div",{className:h(m[i],c?"text-neutral-300 dark:text-neutral-600 ":"",a?"bg-teal-800 dark:bg-teal-600 text-white dark:text-white":"","center w-8 h-8 rounded-full text-lg text-accent-1"),children:r})},g=function(e){var r=e.cell,t=e.page,i=e.count;switch(r){case"<":return(0,n.jsx)(p,{condition:t>1,href:"posts/page/".concat(t-1),children:(0,n.jsx)("button",{type:"button","aria-label":"\u524d\u306b\u623b\u308b",disabled:1===t,children:(0,n.jsx)(b,{variant:"arrow",disabled:1===t,children:r})})});case">":return(0,n.jsx)(p,{condition:t<i,href:"/posts/page/".concat(t+1),children:(0,n.jsx)("button",{type:"button","aria-label":"\u6b21\u306b\u9032\u3080",disabled:t===i,children:(0,n.jsx)(b,{variant:"arrow",disabled:t===i,children:r})})});case"...":return(0,n.jsx)(b,{variant:"ellipsis",children:r});default:return(0,n.jsx)(o.r,{href:"posts/page/".concat(r),passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(b,{active:r===t,children:r})})})}};function x(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return x(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v={count:-1,page:-1,siblingCount:1,boundaryCount:1},w=function(e){var r,t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){y(e,r,t[r])}))}return e}({},v,e),n=t.count,i=t.page,a=t.siblingCount,c=t.boundaryCount,o=c+1+a,l=o+1>=i,u=n-o<=i;return r=l&&u?O(1,n+1):l?j(O(1,o+1+a+1)).concat(["..."],j(O(n+1-c,n+1))):u?j(O(1,c+1)).concat(["..."],j(O(n+1-(a+1+o),n+1))):j(O(1,1+c)).concat(["..."],j(O(i-a,i+a+1)),["..."],j(O(n+1-c,n+1))),["<"].concat(j(r),[">"])},O=function(e,r){return Array.from({length:r-e}).map((function(r,t){return e+t}))},N=function(e){var r=w(e),t=e.page,i=e.count;return(0,n.jsx)("div",{className:"overflow-x-auto w-full center",children:(0,n.jsx)("div",{className:"flex gap-1 px-4",children:r.map((function(e,r){return(0,n.jsx)(g,{cell:e,page:t,count:i},r)}))})})},k=t(1362),P=function(e){var r=e.posts,t=e.maxPage,o=Number((0,i.useRouter)().query.page);return(0,n.jsx)(a.A,{main:(0,n.jsxs)("div",{className:"vstack gap-10 p-8 bg-primary-1",children:[(0,n.jsx)(k.f,{posts:r}),(0,n.jsx)(N,{count:t,page:o})]}),aside:(0,n.jsx)(c.N,{})})};function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var E=!0,A=function(e){return(0,n.jsx)(P,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){S(e,r,t[r])}))}return e}({},e))}}},function(e){e.O(0,[415,937,256,774,888,179],(function(){return r=1013,e(e.s=r);var r}));var r=e.O();_N_E=r}]);