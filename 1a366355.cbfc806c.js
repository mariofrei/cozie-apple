(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},120:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(22),o=r(121);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},121:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(119)),a=r(120),c={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is Cozie?",source:"@site/docs\\introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/FedericoTartarini/cozie-apple/tree/master/my-website/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/installation"}},u=[{value:"What is Cozie?",id:"what-is-cozie",children:[]},{value:"Taylor your survey",id:"taylor-your-survey",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"License",id:"license",children:[]}],s={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{alt:"Cozie apple survey",src:Object(a.a)("img/main face.png"),width:"200"}),Object(i.b)("h2",{id:"what-is-cozie"},"What is Cozie?"),Object(i.b)("p",null,"Cozie is an iOS App for for human comfort data collection.\nIt is extremely useful for conducting right-here-right-now surveys in buildings. It can, however, be used to ask questions in other settings, allowing people to provide feedback in real-time."),Object(i.b)("p",null,"Cozie for iOS builds on the knowledge that the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.budslab.org/"}),"BUDS Lab")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sinberbest.berkeley.edu"}),"SinBerBEST")," gained in developing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cozie.app"}),"Cozie for Fitbit"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.researchgate.net/publication/337376844_Is_your_clock-face_cozie_A_smartwatch_methodology_for_the_in-situ_collection_of_occupant_comfort_data"}),"Is your clock-face cozie? A smartwatch methodology for the in-situ collection of occupant comfort data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.researchgate.net/publication/338527635_Indoor_Comfort_Personalities_Scalable_Occupant_Preference_Capture_Using_Micro_Ecological_Momentary_Assessments"}),"Indoor Comfort Personalities: Scalable Occupant Preference Capture Using Micro Ecological Momentary Assessments"))),Object(i.b)("p",null,"Being Apple one of the major players in wearable devices market and with the Apple Watch dominating the global smartwatch market share, we decided to develop Cozie for iOS. "),Object(i.b)("p",null,"Cozie is now in Beta version and it will be soon available for download on the Apple Store. To find out more about Cozie or to become a tested please contact us at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:cozie.app@gmail.com"}),"cozie.app@gmail.com")),Object(i.b)("p",null,"To find out more about Cozie please watch the following video."),Object(i.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/5e4FwVydYRE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("h2",{id:"taylor-your-survey"},"Taylor your survey"),Object(i.b)("p",null,"Choose the questions to display to the users by changing the soruce code."),Object(i.b)("img",{alt:"Cozie apple survey",src:Object(a.a)("img/cozie_flow.png"),width:"100%"}),Object(i.b)("h2",{id:"compatibility"},"Compatibility"),Object(i.b)("p",null,"While Cozie Apple was developed using iPhone 11 and Apple watch 6, it is compatible with iOS 9 or newer and with the Apple Watch gen 3 or newer.."),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,"The Cozie is released under at GPLv3 License."))}p.isMDXComponent=!0}}]);