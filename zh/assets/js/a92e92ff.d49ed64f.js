"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={title:"IDP",toc_max_heading_level:6},a=void 0,s={unversionedId:"user-guide/administrator/idp",id:"user-guide/administrator/idp",title:"IDP",description:"An IDP, or Identity Provider, is a service that is responsible for authenticating users in a system that uses the OpenID Connect (OIDC) protocol. In the context of Horizon, the IDP is used to authenticate users when they log in to the system. Horizon does not store user information itself, but instead relies on the IDP to provide the necessary information about the user.",source:"@site/docs/user-guide/administrator/idp.md",sourceDirName:"user-guide/administrator",slug:"/user-guide/administrator/idp",permalink:"/zh/docs/user-guide/administrator/idp",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/administrator/idp.md",tags:[],version:"current",lastUpdatedBy:"Yaochen Ling",lastUpdatedAt:1678780550,formattedLastUpdatedAt:"2023\u5e743\u670814\u65e5",frontMatter:{title:"IDP",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Custom CI",permalink:"/zh/docs/tutorials/custom-ci"},next:{title:"Environment",permalink:"/zh/docs/user-guide/administrator/environment"}},l={},d=[{value:"Adding an IDP",id:"adding-an-idp",level:2},{value:"Gitlab as IDP",id:"gitlab-as-idp",level:3},{value:"Deleting an IDP",id:"deleting-an-idp",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An IDP, or Identity Provider, is a service that is responsible for authenticating users in a system that uses the OpenID Connect (OIDC) protocol. In the context of Horizon, the IDP is used to authenticate users when they log in to the system. Horizon does not store user information itself, but instead relies on the IDP to provide the necessary information about the user."),(0,o.kt)("h2",{id:"adding-an-idp"},"Adding an IDP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate an application ID and secret in the IDP system."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"more")," at the top of the page."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"admin")," option."),(0,o.kt)("li",{parentName:"ol"},"In the left sidebar, choose ",(0,o.kt)("strong",{parentName:"li"},"IDPs"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"New login method with OIDC")," button."),(0,o.kt)("li",{parentName:"ol"},"Enter the IDP's name, display name, and discovery endpoint."),(0,o.kt)("li",{parentName:"ol"},"Enter the application ID and secret."),(0,o.kt)("li",{parentName:"ol"},"Enter the scopes (such as profile, email, and openid)."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Submit"),"."),(0,o.kt)("li",{parentName:"ol"},"Test the OIDC configuration by attempting to ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/user-guide/administrator/user-management#modify-oidc-link"},"link")," with the new configuration in your personal space.")),(0,o.kt)("p",null,"If the IDP system does not support discovery service, you can omit the discovery endpoint and manually enter the other information. It is important to note that if multiple IDPs are configured, users will need to manually link to the new IDP rather than logging in directly, as this will result in two different accounts in Horizon."),(0,o.kt)("h3",{id:"gitlab-as-idp"},"Gitlab as IDP"),(0,o.kt)("p",null,"The following picture demonstrate how to add GitLab as an IDPbelow show how to add."),(0,o.kt)("img",{src:"/image/idp_add.png",style:{boxShadow:"10px 5px 5px grey",radius:"10px",borderRadius:"10px"}}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you don't have a discovery endpoint for your OIDC provider, you can manually specify the authorization endpoint, userinfo endpoint, and issuer for your provider."),(0,o.kt)("img",{src:"/image/discovery_field.png",style:{boxShadow:"10px 5px 5px grey",radius:"10px",borderRadius:"10px"}}),(0,o.kt)("h2",{id:"deleting-an-idp"},"Deleting an IDP"),(0,o.kt)("p",null,"To delete an IDP:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"more")," at the top of the page."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"admin")," option."),(0,o.kt)("li",{parentName:"ol"},"In the left sidebar, choose ",(0,o.kt)("strong",{parentName:"li"},"IDPs"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the appropriate IDP and click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),".")))}c.isMDXComponent=!0}}]);