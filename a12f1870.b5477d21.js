(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{41:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(8),o=(t(0),t(92)),i={id:"styling",title:"Styling",sidebar_label:"Styling"},l={unversionedId:"styling",id:"styling",isDocsHomePage:!1,title:"Styling",description:"CSS-in-JS",source:"@site/docs/styling.md",slug:"/styling",permalink:"/modal-docs/docs/styling",editUrl:"https://github.com/bigfanjs/modal/docs/styling.md",version:"current",sidebar_label:"Styling",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/modal-docs/docs/examples"},next:{title:"useModal",permalink:"/modal-docs/docs/useModal"}},d=[{value:"CSS-in-JS",id:"css-in-js",children:[]},{value:"Inline styles",id:"inline-styles",children:[]},{value:"Vanila CSS",id:"vanila-css",children:[]}],c={rightToc:d};function s(e){var n=e.components,t=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h2",{id:"css-in-js"},"CSS-in-JS"),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"<Modal>")," component takes a ",Object(o.mdx)("inlineCode",{parentName:"p"},"className")," prop which makes it possible to style it using ",Object(o.mdx)("inlineCode",{parentName:"p"},"styled-component"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-jsx"}),'import { Modal } from "@bigfan/modal";\nimport styled from "styled-component";\n\nconst StyledModal = styled(Modal)`\n  border-radius: 20px;\n  background-color: lightblue;\n`;\n\nexport default function Login() {\n  <StyledModal>\n    <div>My styled login modal</div>\n  </StyledModal>;\n}\n')),Object(o.mdx)("h2",{id:"inline-styles"},"Inline styles"),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"<Modal>")," accepts a style prop that overrides defaults styles."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-jsx"}),'import { Modal } from "@bigfan/modal";\n\nexport default function Login() {\n  <Modal style={{ borderRadius: 20, backgroundColor: "lightblue" }}>\n    <div>My styled login modal</div>\n  </Modal>;\n}\n')),Object(o.mdx)("h2",{id:"vanila-css"},"Vanila CSS"),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"modal")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"overlay")," both provide class names ",Object(o.mdx)("inlineCode",{parentName:"p"},".modal")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},".overlay"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-css"}),".modal {\n  border-radius: 20px;\n  background-color: lightblue;\n  overflow: hidden;\n}\n")),Object(o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.mdx)("div",Object(a.default)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(a.default)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(a.default)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.mdx)("path",Object(a.default)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.mdx)("div",Object(a.default)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"Please note that the modal already comes with a group of default inline styles:"),Object(o.mdx)("pre",{parentName:"div"},Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-css"}),"position: relative;\ntransform-origin: center center;\npointer-events: auto;\n")),Object(o.mdx)("p",{parentName:"div"},"You won't be able to override these styles using both ",Object(o.mdx)("inlineCode",{parentName:"p"},"CSS-in-JS")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"vanilla CSS")," unless you are using the ",Object(o.mdx)("inlineCode",{parentName:"p"},"!important")," flag or ",Object(o.mdx)("strong",{parentName:"p"},"overriding them using inline styles"),"."))))}s.isMDXComponent=!0},92:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return s})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),m=function(e){return function(n){var t=p(n.components);return r.a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,u=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return t?r.a.createElement(u,d(d({ref:n},l),{},{components:t})):r.a.createElement(u,d({ref:n},l))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);