"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[85],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Group",toc_max_heading_level:6},u=void 0,i={unversionedId:"user-guide/common-user/group",id:"user-guide/common-user/group",title:"Group",description:"Groups",source:"@site/docs/user-guide/common-user/group.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/group",permalink:"/docs/user-guide/common-user/group",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/group.md",tags:[],version:"current",lastUpdatedBy:"yeka",lastUpdatedAt:1677636555,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Group",toc_max_heading_level:6},sidebar:"docs",previous:{title:"User Management",permalink:"/docs/user-guide/administrator/user-management"},next:{title:"Application",permalink:"/docs/user-guide/common-user/application"}},p={},l=[{value:"Groups",id:"groups",level:2},{value:"Create groups",id:"create-groups",level:2},{value:"Edit groups",id:"edit-groups",level:2},{value:"Advance",id:"advance",level:2},{value:"Transfer groups",id:"transfer-groups",level:3},{value:"Link kubernetes",id:"link-kubernetes",level:3},{value:"Delete groups",id:"delete-groups",level:3}],s={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"groups"},"Groups"),(0,o.kt)("p",null,"Groups provide a logical grouping of applications from multiple teams, which provide the following features: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"defining templates in group to deploy custom applications"),(0,o.kt)("li",{parentName:"ul"},"defining group member roles to provide group, application and cluster RBAC"),(0,o.kt)("li",{parentName:"ul"},"managing access tokens for the resources that need access to the Horizon CD API"),(0,o.kt)("li",{parentName:"ul"},"managing Oauth apps that can use Horizon as an OAuth provider"),(0,o.kt)("li",{parentName:"ul"},"providing other advanced features (e.g. migration, linking to kubernetes etc...)")),(0,o.kt)("h2",{id:"create-groups"},"Create groups"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note that")," only administrators can create root groups.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Groups")," tab at the top navigation, and select and click to the parent group where you want to create a group. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"New subgroup")," to create you own group.\nNow, you can manage your group!")),(0,o.kt)("h2",{id:"edit-groups"},"Edit groups"),(0,o.kt)("p",null,"From the group page, click on ",(0,o.kt)("strong",{parentName:"p"},"Settings")," in the left sidebar and select ",(0,o.kt)("strong",{parentName:"p"},"General")," to edit your groups. "),(0,o.kt)("h2",{id:"advance"},"Advance"),(0,o.kt)("p",null,"From the group page, click on ",(0,o.kt)("strong",{parentName:"p"},"Settings")," in the left sidebar and select ",(0,o.kt)("strong",{parentName:"p"},"Advance")," to use advanced features. "),(0,o.kt)("h3",{id:"transfer-groups"},"Transfer groups"),(0,o.kt)("p",null,"You can transfer the group to another group, where your role should be no less than Maintainer. "),(0,o.kt)("h3",{id:"link-kubernetes"},"Link kubernetes"),(0,o.kt)("p",null,"Groups can bound kubernetes which is used to deploy your applications by tags. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-guide/administrator/kubernetes"},"kubernetes")," for More information. "),(0,o.kt)("h3",{id:"delete-groups"},"Delete groups"),(0,o.kt)("p",null,"When there is no application or cluster under the group, you can delete it."))}c.isMDXComponent=!0}}]);