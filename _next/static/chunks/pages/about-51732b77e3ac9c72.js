(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8318:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(5196)}])},8540:function(e,n,r){"use strict";r.d(n,{A:function(){return E}});var t=r(5893),i=r(958),a=r(7377),c=r(1764),o=r(9352),s=r(7294),u=r(9221),l=r(8820),f=r(3746),d=r(1190),h=(0,r(6902).ZP)((function(e){return{open:!1,setOpen:function(n){return e((function(){return{open:n}}))}}}));function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}function x(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var v=(0,f.E)(l.g7),g={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},b=function(e){var n=e.children,r=x(e,["children"]),i=h((function(e){return e.setOpen}));return(0,t.jsx)(u.fC,p({},r,{onOpenChange:function(e){return i(e)},children:n}))},y=s.forwardRef((function(e,n){var r=e.children,i=x(e,["children"]),a=h((function(e){return e})).open;return(0,t.jsx)(d.M,{children:a&&(0,t.jsx)(v,p({},g,{children:(0,t.jsx)(l.g7,p({},i,{children:(0,t.jsx)(u.VY,{ref:n,forceMount:!0,children:r})}))}))})}));y.displayName="DropdownMenuContent";var j=u.xz,w=u.ck,N=r(4929),O=r(9562),k=function(e){var n=e.children;return(0,t.jsxs)(b,{children:[(0,t.jsx)(j,{asChild:!0,children:(0,t.jsx)("button",{className:"icon-btn rounded-full bg-white dark:bg-black shadow-xl","aria-label":"hamburger menu",children:(0,t.jsx)(o.I0R,{size:28})})}),(0,t.jsxs)(y,{sideOffset:8,collisionTolerance:16,className:"vstack gap-2 max-h-80 bg-primary-1 rounded-lg shadow-lg",children:[(0,t.jsx)("div",{className:"center",children:O.O.map((function(e){var n=e.name,r=e.href,i=e.icon;return(0,t.jsx)(w,{onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},className:"text-md text-primary-1 hover:text-teal-800 hover:dark:text-teal-400 focus:text-teal-800 focus:dark:text-teal-400 capitalize select-none cursor-pointer",children:(0,t.jsx)(N.r,{href:r,passHref:!0,children:(0,t.jsxs)("a",{className:"hstack gap-3 py-3 px-6",children:[i," ",n]})})},n)}))}),n]})]})},E=function(e){var n=e.main,r=e.aside,o=e.hamburgerMenu,s=e.className,u=(0,a.P)("lg");return(0,t.jsxs)("div",{className:(0,c.cn)(s,"grid grid-cols-1 lg:grid-cols-3 gap-10"),children:[(0,t.jsx)("div",{className:"lg:col-span-2",children:(0,t.jsx)("main",{children:n})}),(0,t.jsx)("aside",{children:r}),u||(0,t.jsx)(i.h_,{children:(0,t.jsx)("div",{className:"fixed left-8 bottom-8",children:(0,t.jsx)(k,{children:o})})})]})}},6965:function(e,n,r){"use strict";r.d(n,{N:function(){return c}});var t=r(5893),i=r(4929),a=r(4759),c=function(){return(0,t.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,t.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,t.jsx)("img",{className:"object-cover w-28 h-28 rounded-full bg-white",alt:"subt avatar",src:"/assets/author.png"}),(0,t.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"subt"})]}),(0,t.jsx)("p",{className:"text-primary-1",children:"Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI."}),(0,t.jsx)("div",{className:"flex gap-4",children:a.e.map((function(e){var n=e.href,r=e.icon;return(0,t.jsx)(i.r,{href:n,passHref:!0,children:(0,t.jsx)("a",{className:"text-primary-1",children:r})},n)}))})]})}},7377:function(e,n,r){"use strict";r.d(n,{P:function(){return o}});var t=r(7294);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,a=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);c=!0);}catch(s){o=!0,i=s}finally{try{c||null==r.return||r.return()}finally{if(o)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c={sm:640,md:768,lg:1024,xl:1280},o=function(e){return function(){var e=a(t.useState({width:0,height:0}),2),n=e[0],r=e[1];return t.useEffect((function(){var e=function(){return r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),n}().width>=c[e]}},1764:function(e,n,r){"use strict";function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter(Boolean).join(" ")}r.d(n,{cn:function(){return t}})},5196:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var t=r(5893),i=r(8540),a=r(6965),c=function(){return(0,t.jsx)(i.A,{className:"lg:block",main:(0,t.jsx)(a.N,{})})},o=function(){return(0,t.jsx)(c,{})}}},function(e){e.O(0,[937,256,774,888,179],(function(){return n=8318,e(e.s=n);var n}));var n=e.O();_N_E=n}]);