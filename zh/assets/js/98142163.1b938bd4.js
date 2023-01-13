"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={title:"Environment",toc_max_heading_level:6},a=void 0,s={unversionedId:"user-guide/administrator/environment",id:"user-guide/administrator/environment",title:"Environment",description:"What are Environments?",source:"@site/docs/user-guide/administrator/environment.md",sourceDirName:"user-guide/administrator",slug:"/user-guide/administrator/environment",permalink:"/zh/docs/user-guide/administrator/environment",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/administrator/environment.md",tags:[],version:"current",lastUpdatedBy:"kiloson",lastUpdatedAt:1673612503,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{title:"Environment",toc_max_heading_level:6},sidebar:"docs",previous:{title:"IDP",permalink:"/zh/docs/user-guide/administrator/idp"},next:{title:"Registry",permalink:"/zh/docs/user-guide/administrator/registry"}},l={},u=[{value:"What are Environments?",id:"what-are-environments",level:2},{value:"Usages of Horizon&#39;s Environments",id:"usages-of-horizons-environments",level:2},{value:"Association with Kubernetes",id:"association-with-kubernetes",level:3},{value:"Application&#39;s default Kubernetes of an Environment",id:"applications-default-kubernetes-of-an-environment",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-are-environments"},"What are Environments?"),(0,i.kt)("p",null,'Software development teams use Environments to create "stages" as they progress apps through the development process. Different environments often mean different stability requirements and service assurance capabilities.'),(0,i.kt)("p",null,"You can initialize sorts of Environments in Horizon as an admin. With these Environments, the entire software development cycle is well tied together, and developers, testers, and acceptance staff can participate and contribute at each stage."),(0,i.kt)("h2",{id:"usages-of-horizons-environments"},"Usages of Horizon's Environments"),(0,i.kt)("h3",{id:"association-with-kubernetes"},"Association with Kubernetes"),(0,i.kt)("p",null,"The kubernetes options available in different environments should be different, so you need to associate the environment with the optional kubernetes."),(0,i.kt)("p",null,"It also supports setting the default Kubernetes in an Environment."),(0,i.kt)("h3",{id:"applications-default-kubernetes-of-an-environment"},"Application's default Kubernetes of an Environment"),(0,i.kt)("p",null,"There is already a default Kubernetes configuration at the environment level, but there may be custom requirements at the application level."),(0,i.kt)("p",null,"Operation path: Application -> Settings -> Advance -> Default region"))}d.isMDXComponent=!0}}]);