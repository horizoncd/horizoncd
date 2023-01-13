"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[615],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return o?n.createElement(k,a(a({ref:t},u),{},{components:o})):n.createElement(k,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9854:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const l={title:"Deploy and Manage Pods",toc_max_heading_level:6},a=void 0,i={unversionedId:"user-guide/common-user/deploy-and-pod-management",id:"user-guide/common-user/deploy-and-pod-management",title:"Deploy and Manage Pods",description:"Horizon CD provide deploy and pods management based on Argo CD. You can easily deploy your cluster and check your pods status.",source:"@site/docs/user-guide/common-user/deploy-and-pod-management.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/deploy-and-pod-management",permalink:"/docs/user-guide/common-user/deploy-and-pod-management",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/deploy-and-pod-management.md",tags:[],version:"current",lastUpdatedBy:"kiloson",lastUpdatedAt:1673612503,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"Deploy and Manage Pods",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Cluster",permalink:"/docs/user-guide/common-user/cluster"},next:{title:"Monitor",permalink:"/docs/user-guide/common-user/monitor"}},s={},c=[{value:"Build and deploy cluster",id:"build-and-deploy-cluster",level:2},{value:"Deploy cluster",id:"deploy-cluster",level:2},{value:"Restart cluster",id:"restart-cluster",level:2},{value:"Rollback cluster",id:"rollback-cluster",level:2},{value:"Free cluster",id:"free-cluster",level:2},{value:"Check pods",id:"check-pods",level:2},{value:"Login pod terminal",id:"login-pod-terminal",level:2},{value:"Delete pods",id:"delete-pods",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Horizon CD provide deploy and pods management based on Argo CD. You can easily deploy your cluster and check your pods status."),(0,r.kt)("h2",{id:"build-and-deploy-cluster"},"Build and deploy cluster"),(0,r.kt)("p",null,"You can instantiate a pipeline to build and deploy your cluster. Your source code will be compiled, packaged and made to an artifact image in ",(0,r.kt)("strong",{parentName:"p"},"Build")," task, and the artifact will be released in kubernetes in ",(0,r.kt)("strong",{parentName:"p"},"Deploy")," task."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from the cluster page, click ",(0,r.kt)("strong",{parentName:"li"},"Build and deploy")," button"),(0,r.kt)("li",{parentName:"ol"},"select your git reference and check the differences from the last revision"),(0,r.kt)("li",{parentName:"ol"},"click ",(0,r.kt)("strong",{parentName:"li"},"Submit")," button to confirm the build and deploy.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note that")," after changing build and deploy configurations, you could run ",(0,r.kt)("strong",{parentName:"p"},"Build and deploy")," to sync the changes.")),(0,r.kt)("h2",{id:"deploy-cluster"},"Deploy cluster"),(0,r.kt)("p",null,"You can instantiate a pipeline to deploy your cluster based on the last artifact."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from the cluster page, click ",(0,r.kt)("strong",{parentName:"li"},"Deploy")," button"),(0,r.kt)("li",{parentName:"ol"},"check the differences from the last revision"),(0,r.kt)("li",{parentName:"ol"},"click ",(0,r.kt)("strong",{parentName:"li"},"Submit")," button to confirm the Deploy.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note that")," you just need to ",(0,r.kt)("strong",{parentName:"p"},"deploy")," your cluster to have deploy configurations take effect.")),(0,r.kt)("h2",{id:"restart-cluster"},"Restart cluster"),(0,r.kt)("p",null,"When your cluster is unhealthy, you may need to restart it. Horizon will initialize new pods and then delete the old pods."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from the cluster page, click ",(0,r.kt)("strong",{parentName:"li"},"Restart")," button"),(0,r.kt)("li",{parentName:"ol"},"confirm the Restart.")),(0,r.kt)("h2",{id:"rollback-cluster"},"Rollback cluster"),(0,r.kt)("p",null,"If the new changes are not as expected after released, you can quickly rollback to old revision."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from the cluster page, click on ",(0,r.kt)("strong",{parentName:"li"},"More")," and select ",(0,r.kt)("strong",{parentName:"li"},"Rollback")),(0,r.kt)("li",{parentName:"ol"},"select a pipeline to rollback"),(0,r.kt)("li",{parentName:"ol"},"confirm the rollback.")),(0,r.kt)("h2",{id:"free-cluster"},"Free cluster"),(0,r.kt)("p",null,"You can free the unused clusters to save kubernetes resources. ",(0,r.kt)("strong",{parentName:"p"},"Free")," will destroy all pods and return resources, preserving the cluster configurations. You can only click ",(0,r.kt)("strong",{parentName:"p"},"Deploy")," to start your cluster up again."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from the cluster page, click on ",(0,r.kt)("strong",{parentName:"li"},"More")," and select ",(0,r.kt)("strong",{parentName:"li"},"Free")),(0,r.kt)("li",{parentName:"ol"},"confirm the free.")),(0,r.kt)("h2",{id:"check-pods"},"Check pods"),(0,r.kt)("p",null,"From the cluster page, you can check you pods by ",(0,r.kt)("strong",{parentName:"p"},"Stdout"),", ",(0,r.kt)("strong",{parentName:"p"},"Events")," and ",(0,r.kt)("strong",{parentName:"p"},"Monitor")," in the pods table."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stdout: Check the stdout log for exception information"),(0,r.kt)("li",{parentName:"ul"},"Events: Check the Events for the warning events"),(0,r.kt)("li",{parentName:"ul"},"Monitor: view metrics of the cluster")),(0,r.kt)("h2",{id:"login-pod-terminal"},"Login pod terminal"),(0,r.kt)("p",null,"From the cluster page, click ",(0,r.kt)("strong",{parentName:"p"},"Terminal")," button in the pods table to login pod, which is an implementation of the kubernetes API ",(0,r.kt)("strong",{parentName:"p"},"exec"),"."),(0,r.kt)("h2",{id:"delete-pods"},"Delete pods"),(0,r.kt)("p",null,"You can delete one and more unhealthy pods in order to initialize new pods to replace them."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from the cluster page, select the pods you want to delete in the pods table."),(0,r.kt)("li",{parentName:"ol"},"click ",(0,r.kt)("strong",{parentName:"li"},"Delete")," button and confirm the deletion.")))}p.isMDXComponent=!0}}]);