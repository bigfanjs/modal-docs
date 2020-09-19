(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(e,t,a){"use strict";var l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(100));var i=function(e){var t=e.metadata;return n.default.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},n.default.createElement("div",{className:"pagination-nav__item"},t.previous&&n.default.createElement(r.default,{className:"pagination-nav__link",to:t.previous.permalink},n.default.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),n.default.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.default.createElement(r.default,{className:"pagination-nav__link",to:t.next.permalink},n.default.createElement("div",{className:"pagination-nav__sublabel"},"Next"),n.default.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};t.default=i},209:function(e,t,a){"use strict";var l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(91)),i=l(a(100)),d=a(121);var u=function(){var e=(0,r.default)().siteConfig.title,t=(0,d.useActivePlugin)({failfast:!0}).pluginId,a=(0,d.useActiveVersion)(t),l=(0,d.useDocVersionSuggestions)(t),u=l.latestDocSuggestion,c=l.latestVersionSuggestion;if(!c)return n.default.createElement(n.default.Fragment,null);var o,s=null!=u?u:(o=c).docs.find((function(e){return e.id===o.mainDocId}));return n.default.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===a.name?n.default.createElement("div",null,"This is unreleased documentation for ",e," ",n.default.createElement("strong",null,a.label)," version."):n.default.createElement("div",null,"This is documentation for ",e," ",n.default.createElement("strong",null,a.label),", which is no longer actively maintained."),n.default.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",n.default.createElement("strong",null,n.default.createElement(i.default,{to:s.path},"latest version"))," ","(",c.label,")."))};t.default=u},210:function(e,t,a){"use strict";var l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(211)),i=l(a(82)),d="table-of-contents__link";function u(e){var t=e.headings,a=e.isChild;return t.length?n.default.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.default.createElement("li",{key:e.id},n.default.createElement("a",{href:"#"+e.id,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.default.createElement(u,{isChild:!0,headings:e.children}))}))):null}var c=function(e){var t=e.headings;return(0,r.default)(d,"table-of-contents__link--active",100),n.default.createElement("div",{className:i.default.tableOfContents},n.default.createElement(u,{headings:t}))};t.default=c},211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(0);var n=function(e,t,a){var n=(0,l.useState)(void 0),r=n[0],i=n[1];(0,l.useEffect)((function(){var l,n;function d(){var d=function(){var e=0,t=null;for(l=document.getElementsByClassName("anchor");e<l.length&&!t;){var n=l[e],r=n.getBoundingClientRect().top;r>=0&&r<=a&&(t=n),e+=1}return t}();if(d){var u=0,c=!1;for(n=document.getElementsByClassName(e);u<n.length&&!c;){var o=n[u],s=o.href,m=decodeURIComponent(s.substring(s.indexOf("#")+1));d.id===m&&(r&&r.classList.remove(t),o.classList.add(t),i(o),c=!0),u+=1}}}return document.addEventListener("scroll",d),document.addEventListener("resize",d),d(),function(){document.removeEventListener("scroll",d),document.removeEventListener("resize",d)}}))};t.default=n},32:function(e,t,a){"use strict";var l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(128)),i=l(a(91)),d=l(a(102)),u=l(a(208)),c=l(a(209)),o=l(a(210)),s=l(a(95)),m=l(a(83)),f=a(121);var v=function(e){var t,a=(0,i.default)().siteConfig,l=void 0===a?{}:a,v=l.url,g=l.title,E=e.content,p=E.metadata,_=p.description,h=p.title,b=p.permalink,N=p.editUrl,y=p.lastUpdatedAt,w=p.lastUpdatedBy,k=E.frontMatter,C=k.image,x=k.keywords,I=k.hide_title,L=k.hide_table_of_contents,M=(0,f.useActivePlugin)({failfast:!0}).pluginId,A=(0,f.useVersions)(M),O=(0,f.useActiveVersion)(M),P=A.length>1,S=h?h+" | "+g:g,T=(0,d.default)(C,{absolute:!0});return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.default,null,n.default.createElement("title",null,S),n.default.createElement("meta",{property:"og:title",content:S}),_&&n.default.createElement("meta",{name:"description",content:_}),_&&n.default.createElement("meta",{property:"og:description",content:_}),x&&x.length&&n.default.createElement("meta",{name:"keywords",content:x.join(",")}),C&&n.default.createElement("meta",{property:"og:image",content:T}),C&&n.default.createElement("meta",{property:"twitter:image",content:T}),C&&n.default.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),b&&n.default.createElement("meta",{property:"og:url",content:v+b}),b&&n.default.createElement("link",{rel:"canonical",href:v+b})),n.default.createElement("div",{className:(0,s.default)("container padding-vert--lg",m.default.docItemWrapper)},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:(0,s.default)("col",(t={},t[m.default.docItemCol]=!L,t))},n.default.createElement(c.default,null),n.default.createElement("div",{className:m.default.docItemContainer},n.default.createElement("article",null,P&&n.default.createElement("div",null,n.default.createElement("span",{className:"badge badge--secondary"},"Version: ",O.label)),!I&&n.default.createElement("header",null,n.default.createElement("h1",{className:m.default.docTitle},h)),n.default.createElement("div",{className:"markdown"},n.default.createElement(E,null))),(N||y||w)&&n.default.createElement("div",{className:"margin-vert--xl"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col"},N&&n.default.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},n.default.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},n.default.createElement("g",null,n.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(y||w)&&n.default.createElement("div",{className:"col text--right"},n.default.createElement("em",null,n.default.createElement("small",null,"Last updated"," ",y&&n.default.createElement(n.default.Fragment,null,"on"," ",n.default.createElement("time",{dateTime:new Date(1e3*y).toISOString(),className:m.default.docLastUpdatedAt},new Date(1e3*y).toLocaleDateString()),w&&" "),w&&n.default.createElement(n.default.Fragment,null,"by ",n.default.createElement("strong",null,w)),!1))))),n.default.createElement("div",{className:"margin-vert--lg"},n.default.createElement(u.default,{metadata:p})))),!L&&E.rightToc&&n.default.createElement("div",{className:"col col--3"},n.default.createElement(o.default,{headings:E.rightToc})))))};t.default=v}}]);