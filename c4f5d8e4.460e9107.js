(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{42:function(e,t,a){"use strict";var l=a(27),n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,u=n(a(2)),f=l(a(0)),r=n(a(259)),m=n(a(96)),c=n(a(119)),i=n(a(101)),s=n(a(91)),o=n(a(95)),E=n(a(90)),g=["FADE","POP UP","SLIDE LEFT","SLIDE RIGHT","SLIDE UP","SLIDE DOWN","HORIZONTAL FLIP","VERTICALE FLIP","ROTATE","SPRING"],p=[{title:"Smart",imageUrl:"img/smart.svg",description:f.default.createElement(f.default.Fragment,null,"ability to automaticaly close modals and to open any modal from anywhere in your code")},{title:"Scalable",imageUrl:"img/scalable.svg",description:f.default.createElement(f.default.Fragment,null,"scalable, loosely coupled, and easily maintainable modal library that saves you time and energy when have many modals.")},{title:"Animated",imageUrl:"img/animated.svg",description:f.default.createElement(f.default.Fragment,null,"Comes with 10+ modal effects plus an animated overlay ")},{title:"Custimizable",imageUrl:"img/customize.svg",description:f.default.createElement(f.default.Fragment,null,"the freedom to add custom effects and add customize modals.")}];function v(e){var t=e.imageUrl,a=e.title,l=e.description,n=(0,o.default)(t);return f.default.createElement("div",{className:E.default.featureWrapper},f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:(0,m.default)("",E.default.feature)},n&&f.default.createElement("img",{className:E.default.featureImage,src:n,alt:a}),f.default.createElement("div",{className:E.default.featureInfo},f.default.createElement("h3",null,a),f.default.createElement("p",null,l)))))}var N=function(){var e=(0,f.useState)(""),t=e[0],a=e[1],l=(0,s.default)().siteConfig,n=void 0===l?{}:l;return(0,f.useEffect)((function(){clearTimeout(d);var e=g.indexOf(t),l=g.length-1;return d=setTimeout((function(){return a(g[e<l?e+1:0])}),e<=-1?500:2e3),function(){return clearTimeout(d)}}),[t]),f.default.createElement(c.default,{title:"Hello from "+n.title,description:"Description will go into a meta tag in <head />"},f.default.createElement("header",{className:(0,m.default)("hero shadow--lw",E.default.heroBanner)},f.default.createElement("div",{className:"container"},f.default.createElement("h1",{className:"hero__title"},n.title),f.default.createElement("p",{className:"hero__subtitle"},n.tagline),f.default.createElement(i.default,{className:(0,m.default)("button button--secondary button--lg",E.default.getStarted),to:(0,o.default)("docs/")},"Get Started"))),f.default.createElement("main",null,f.default.createElement("div",{className:E.default.effects},f.default.createElement("div",{className:(0,m.default)("container",E.default.effectsContent)},f.default.createElement("div",{className:E.default.effectsTitle},f.default.createElement("span",null,"10+"),"Super smooth and slick Modal Effects"),t&&f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:E.default.effectNamesDesktop},f.default.createElement(r.default,{size:600,text:t,open:!0})),f.default.createElement("div",{className:E.default.effectNamesTablet},f.default.createElement(r.default,{size:450,text:t,open:!0})),f.default.createElement("div",{className:E.default.effectNamesMobile},f.default.createElement(r.default,{size:350,text:t,open:!0}))))),p&&p.length>0&&f.default.createElement("section",{className:E.default.features},p.map((function(e,t){return f.default.createElement(v,(0,u.default)({key:t},e))})))))};t.default=N}}]);