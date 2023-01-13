"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[28],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Cluster",toc_max_heading_level:6},l=void 0,i={unversionedId:"user-guide/common-user/cluster",id:"user-guide/common-user/cluster",title:"Cluster",description:"Clusters",source:"@site/docs/user-guide/common-user/cluster.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/cluster",permalink:"/user-guide/common-user/cluster",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/cluster.md",tags:[],version:"current",lastUpdatedBy:"closetool",lastUpdatedAt:1673596867,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"Cluster",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Application",permalink:"/user-guide/common-user/application"},next:{title:"Deploy and Manage Pods",permalink:"/user-guide/common-user/deploy-and-pod-management"}},c={},s=[{value:"Clusters",id:"clusters",level:2},{value:"Create clusters",id:"create-clusters",level:2},{value:"Copy clusters",id:"copy-clusters",level:2},{value:"Edit clusters",id:"edit-clusters",level:2},{value:"Delete clusters",id:"delete-clusters",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"clusters"},"Clusters"),(0,a.kt)("p",null,"A cluster is a deployment instance of the application in the Horizon context. You can deploy your cluster to various environments (e.g. online, test etc...) and regions. The cluster inherits the configuration of the application, and of course, you can modify most of the configuration and grant different permissions of the cluster to different members. The following features are provide: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"viewing pipeline histories and details"),(0,a.kt)("li",{parentName:"ul"},"providing rich monitoring abilities")),(0,a.kt)("h2",{id:"create-clusters"},"Create clusters"),(0,a.kt)("p",null,"From the application page, you can click ",(0,a.kt)("strong",{parentName:"p"},"New cluster")," button to create a new cluster. The following table illustrates the additional parameters of clusters over applications: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Environment"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Environment is a logical concept of associated regions"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Region"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Region refers to the deployment destination for applications and clusters"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Duration"),(0,a.kt)("td",{parentName:"tr",align:"center"},"The duration of the cluster, the expired cluster will be automatically freed"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h2",{id:"copy-clusters"},"Copy clusters"),(0,a.kt)("p",null,"From the application page, you can select a cluster and click ",(0,a.kt)("strong",{parentName:"p"},"Copy cluster")," button to duplicate it. You can also edit the cluster parameters when copying clusters."),(0,a.kt)("h2",{id:"edit-clusters"},"Edit clusters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"click into your cluster in the application page"),(0,a.kt)("li",{parentName:"ol"},"click on ",(0,a.kt)("strong",{parentName:"li"},"More")," and select ",(0,a.kt)("strong",{parentName:"li"},"Edit")," on the right side of the cluster page"),(0,a.kt)("li",{parentName:"ol"},"do and submit your changes.")),(0,a.kt)("h2",{id:"delete-clusters"},"Delete clusters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"click into your cluster in the application page"),(0,a.kt)("li",{parentName:"ol"},"click on ",(0,a.kt)("strong",{parentName:"li"},"More")," and select ",(0,a.kt)("strong",{parentName:"li"},"Delete")," on the right side of the cluster page"),(0,a.kt)("li",{parentName:"ol"},"confirm your deletion.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note that")," clusters cannot be deleted until they are freed.")))))}p.isMDXComponent=!0}}]);