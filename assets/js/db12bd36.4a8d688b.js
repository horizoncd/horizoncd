"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Application",toc_max_heading_level:6},o=void 0,l={unversionedId:"user-guide/common-user/application",id:"user-guide/common-user/application",title:"Application",description:"Applications",source:"@site/docs/user-guide/common-user/application.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/application",permalink:"/docs/user-guide/common-user/application",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/application.md",tags:[],version:"current",lastUpdatedBy:"kiloson",lastUpdatedAt:1673612503,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"Application",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Group",permalink:"/docs/user-guide/common-user/group"},next:{title:"Cluster",permalink:"/docs/user-guide/common-user/cluster"}},p={},c=[{value:"Applications",id:"applications",level:2},{value:"Create applications",id:"create-applications",level:2},{value:"Edit applications",id:"edit-applications",level:2},{value:"Transfer applications",id:"transfer-applications",level:2},{value:"Set default region",id:"set-default-region",level:2},{value:"Delete applications",id:"delete-applications",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("p",null,"An application is defined as a set of clusters and provide default configurations for the clusters created under it. The following features about applications are provide: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"defining application member roles to provide application and cluster RBAC"),(0,r.kt)("li",{parentName:"ul"},"providing statistics of pipelines"),(0,r.kt)("li",{parentName:"ul"},"providing webhook to notify external systems"),(0,r.kt)("li",{parentName:"ul"},"managing access tokens for the resources that need access to the Horizon CD API")),(0,r.kt)("h2",{id:"create-applications"},"Create applications"),(0,r.kt)("p",null,"From the group page, you can click ",(0,r.kt)("strong",{parentName:"p"},"New application")," button to create a new application. The following table illustrates the application parameters: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"An unique name identifier for the application"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The description for the application"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Priority"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The priority of application instance in kubernetes"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Git URL"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The git repository of source code"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Git revision"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The git reference, which can be branch, tag and commit"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Git subfolder"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional subdirectory for the source code, used as a context directory for build"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Build config"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Build configurations, where you can select build type and other settings"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Deploy template"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Deploy template, where you can select workload"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Template release"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Deploy template, where you can select workload"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Template config"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Template configurations, such as health check, target port"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"edit-applications"},"Edit applications"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For basic information:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"click on ",(0,r.kt)("strong",{parentName:"li"},"Details")," in the sidebar from the application page;"),(0,r.kt)("li",{parentName:"ol"},"select ",(0,r.kt)("strong",{parentName:"li"},"Edit")," above to change application settings.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For configurations of specific environment:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"click on ",(0,r.kt)("strong",{parentName:"li"},"Details")," in the sidebar from the application page;"),(0,r.kt)("li",{parentName:"ol"},"select environment in the dropdown in ",(0,r.kt)("strong",{parentName:"li"},"Application configs")," card, then click ",(0,r.kt)("strong",{parentName:"li"},"Edit")," to do changes.")),(0,r.kt)("h2",{id:"transfer-applications"},"Transfer applications"),(0,r.kt)("p",null,"You can transfer the applications to another group, where your role should be no less than Maintainer. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"click on ",(0,r.kt)("strong",{parentName:"li"},"Settings -> Advance")," in the sidebar from the application page;"),(0,r.kt)("li",{parentName:"ol"},"select a target group and click ",(0,r.kt)("strong",{parentName:"li"},"Transfer"),".")),(0,r.kt)("h2",{id:"set-default-region"},"Set default region"),(0,r.kt)("p",null,"You can configure the default region for different environments. When you create a cluster for a environment, the default region for the environment is automatically populated."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"click on ",(0,r.kt)("strong",{parentName:"li"},"Settings -> Advance")," in the sidebar from the application page;"),(0,r.kt)("li",{parentName:"ol"},"select region for environment in the dropdown and click ",(0,r.kt)("strong",{parentName:"li"},"Submit"),".")),(0,r.kt)("h2",{id:"delete-applications"},"Delete applications"),(0,r.kt)("p",null,"When there is no cluster in the application, you can delete it. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"click on ",(0,r.kt)("strong",{parentName:"li"},"Details")," in the sidebar from the application page;"),(0,r.kt)("li",{parentName:"ol"},"click ",(0,r.kt)("strong",{parentName:"li"},"More -> Delete")," above to delete your application.")))}d.isMDXComponent=!0}}]);