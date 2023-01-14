"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?o.createElement(k,l(l({ref:t},c),{},{components:a})):o.createElement(k,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3279:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={title:"How to deploy your first workload",toc_max_heading_level:6},l=void 0,i={unversionedId:"tutorials/how-to-deploy-your-first-workload",id:"tutorials/how-to-deploy-your-first-workload",title:"How to deploy your first workload",description:"This section describes how to deploy your first workload step by step. You can check out the demo video for a overview of Horizon CD.",source:"@site/docs/tutorials/how-to-deploy-your-first-workload.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-deploy-your-first-workload",permalink:"/docs/tutorials/how-to-deploy-your-first-workload",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/tutorials/how-to-deploy-your-first-workload.md",tags:[],version:"current",lastUpdatedBy:"kiloson",lastUpdatedAt:1673679406,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"How to deploy your first workload",toc_max_heading_level:6},sidebar:"docs",previous:{title:"How to Install",permalink:"/docs/tutorials/how-to-install"},next:{title:"IDP",permalink:"/docs/user-guide/administrator/idp"}},s={},p=[{value:"1. Login Horizon CD",id:"1-login-horizon-cd",level:2},{value:"2. Create a registry",id:"2-create-a-registry",level:2},{value:"3. Create a kubernetes cluster",id:"3-create-a-kubernetes-cluster",level:2},{value:"4. Create an environment",id:"4-create-an-environment",level:2},{value:"5. Create a template",id:"5-create-a-template",level:2},{value:"6. Create a group",id:"6-create-a-group",level:2},{value:"7. Create an application",id:"7-create-an-application",level:2},{value:"8. Create a cluster",id:"8-create-a-cluster",level:2},{value:"9. Deploy your cluster",id:"9-deploy-your-cluster",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes how to deploy your first workload step by step. You can check out the demo video for a overview of Horizon CD."),(0,n.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=307659880&bvid=BV1fA411Z7GT&cid=963860081&page=1&high_quality=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"95%",height:"600"}," "),(0,n.kt)("h2",{id:"1-login-horizon-cd"},"1. Login Horizon CD"),(0,n.kt)("p",null,"The initial password for the admin account is auto-generated when you perform the installation. Using the email ",(0,n.kt)("inlineCode",{parentName:"p"},"admin@cloudnative.com")," and the password, login to Horizon CD."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open Horizon CD's home page in your browser and click on ",(0,n.kt)("strong",{parentName:"li"},"Login"),".\n",(0,n.kt)("img",{alt:"home",src:a(5464).Z,width:"2560",height:"1194"})),(0,n.kt)("li",{parentName:"ol"},"Enter the email and password to log in.\n",(0,n.kt)("img",{alt:"password-login",src:a(6215).Z,width:"1920",height:"878"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Now, you need create some ",(0,n.kt)("strong",{parentName:"p"},"required system resources")," to set up your devops platform. ")),(0,n.kt)("h2",{id:"2-create-a-registry"},"2. Create a registry"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"More")," option in the top of the home page and select ",(0,n.kt)("strong",{parentName:"li"},"Admin"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Registries")," option in the left-side menu."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add registry")," to enter the page below. Fill in the registry information below and click ",(0,n.kt)("strong",{parentName:"li"},"Submit")," to add it.\n",(0,n.kt)("img",{alt:"new-harbor-demo",src:a(2346).Z,width:"1920",height:"1009"}))),(0,n.kt)("p",null,"The configurations is as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"local"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Server"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://harbor.horizoncd.svc.cluster.local"},"https://harbor.horizoncd.svc.cluster.local"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path"),(0,n.kt)("td",{parentName:"tr",align:null},"library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Token"),(0,n.kt)("td",{parentName:"tr",align:null},"YWRtaW46SGFyYm9yMTIzNDU=")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Skip TLS"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type"),(0,n.kt)("td",{parentName:"tr",align:null},"harbor")))),(0,n.kt)("h2",{id:"3-create-a-kubernetes-cluster"},"3. Create a kubernetes cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"More")," option in the top of the home page and select ",(0,n.kt)("strong",{parentName:"li"},"Admin"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Kubernetes")," option in the left-side menu."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add kubernetes")," to enter the page below.\n",(0,n.kt)("img",{alt:"new-k8s",src:a(875).Z,width:"1920",height:"810"})),(0,n.kt)("li",{parentName:"ol"},"Fill in your kubernetes information and click ",(0,n.kt)("strong",{parentName:"li"},"Submit")," to add it."),(0,n.kt)("li",{parentName:"ol"},"Then, enter your kubernetes page, click ",(0,n.kt)("strong",{parentName:"li"},"Add tags")," to add a specific tag which is used to link your group and kubernetes. For example:\n",(0,n.kt)("img",{alt:"k8s-tags",src:a(4041).Z,width:"1545",height:"432"})),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Submit")," to add the tag.")),(0,n.kt)("h2",{id:"4-create-an-environment"},"4. Create an environment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"More")," option in the top of the home page and select ",(0,n.kt)("strong",{parentName:"li"},"Admin"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Environments")," option in the left-side menu."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New environment")," to enter the creation page.\n",(0,n.kt)("img",{alt:"new-env",src:a(2085).Z,width:"1920",height:"807"})),(0,n.kt)("li",{parentName:"ol"},"Fill in your kubernetes information and click ",(0,n.kt)("strong",{parentName:"li"},"Submit")," to create the environment."),(0,n.kt)("li",{parentName:"ol"},"Finally, enter your environment page, click ",(0,n.kt)("strong",{parentName:"li"},"Link kubernetes")," to link the kubernetes you just added.\n",(0,n.kt)("img",{alt:"env-link-k8s",src:a(365).Z,width:"1920",height:"800"}))),(0,n.kt)("h2",{id:"5-create-a-template"},"5. Create a template"),(0,n.kt)("p",null,"A template is required to hold build and deploy configurations of your applications. Now, let's create a public template: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Templates")," tab in the top of the home page."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Public templates")," and click on ",(0,n.kt)("strong",{parentName:"li"},"New template")," in the top right corner of the page.\n",(0,n.kt)("img",{alt:"new-template",src:a(5304).Z,width:"1920",height:"807"})),(0,n.kt)("li",{parentName:"ol"},"Enter the relevant information for the template.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note that ",(0,n.kt)("strong",{parentName:"p"},"Git repo")," is the clone link of the template, through which Horizon pulls it. A sample template of deployment workload (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/deployment.git"},"https://github.com/horizoncd/deployment.git"),") is provided to you to deploy your first workload. You can use it as shown below:\n",(0,n.kt)("img",{alt:"new-template-demo1",src:a(6092).Z,width:"1920",height:"807"}),"\n",(0,n.kt)("img",{alt:"new-template-demo2",src:a(4301).Z,width:"1920",height:"810"})))),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Submit"),".")),(0,n.kt)("h2",{id:"6-create-a-group"},"6. Create a group"),(0,n.kt)("p",null,"Now create and administer a new group:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Groups")," tab in the top of the home page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New group")," to create you own group."),(0,n.kt)("li",{parentName:"ol"},"Groups need bound kubernetes which is used to deploy your applications by tags. Now, link kubernetes resources to your new group: ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Enter your group page, click on ",(0,n.kt)("strong",{parentName:"li"},"Settings")," in the left sidebar and select ",(0,n.kt)("strong",{parentName:"li"},"Advance"),"."),(0,n.kt)("li",{parentName:"ol"},"click on ",(0,n.kt)("strong",{parentName:"li"},"Add tags")," and fill in the tag your kubernetes holds.")))),(0,n.kt)("h2",{id:"7-create-an-application"},"7. Create an application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the group page, click ",(0,n.kt)("strong",{parentName:"li"},"New application")," button to start to create a new application."),(0,n.kt)("li",{parentName:"ol"},"Fill some basic information of your application and click ",(0,n.kt)("strong",{parentName:"li"},"Next"),".",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"A sample application git repository (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/springboot-source-demo.git"},"https://github.com/horizoncd/springboot-source-demo.git"),") is provided. You can use it as shown below:\n",(0,n.kt)("img",{alt:"new-app-demo1",src:a(9866).Z,width:"1920",height:"1080"})))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"dockerfile")," build type and fill ",(0,n.kt)("inlineCode",{parentName:"li"},"Dockerfile")," in dockerfile path. Then click ",(0,n.kt)("strong",{parentName:"li"},"Next"),".\n",(0,n.kt)("img",{alt:"new-app-demo2",src:a(9861).Z,width:"1920",height:"1080"})),(0,n.kt)("li",{parentName:"ol"},"Select your template and fill your deploy configurations.\n",(0,n.kt)("img",{alt:"new-app-demo3",src:a(2242).Z,width:"1920",height:"1080"})),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Next")," and audit your configurations."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Submit")," to create it.")),(0,n.kt)("h2",{id:"8-create-a-cluster"},"8. Create a cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the application page, click ",(0,n.kt)("strong",{parentName:"li"},"New cluster")," button to start to create a new cluster."),(0,n.kt)("li",{parentName:"ol"},"Select environment and region where you want to deploy the cluster."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Next")," and ",(0,n.kt)("strong",{parentName:"li"},"Submit")," to create it.")),(0,n.kt)("h2",{id:"9-deploy-your-cluster"},"9. Deploy your cluster"),(0,n.kt)("p",null,"Now, it is the last step to deploy your first workload!"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the cluster page, click ",(0,n.kt)("strong",{parentName:"li"},"Build and deploy")," button"),(0,n.kt)("li",{parentName:"ol"},"Select your git reference and check the differences from the last revision."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Submit")," button to confirm the build and deploy."),(0,n.kt)("li",{parentName:"ol"},"Check the pipeline's log and cluster status."),(0,n.kt)("li",{parentName:"ol"},"When the cluster status is ",(0,n.kt)("strong",{parentName:"li"},"healthy"),", your first ",(0,n.kt)("inlineCode",{parentName:"li"},"deployment")," workload is successfully deployed on kubernetes!\n",(0,n.kt)("img",{alt:"cluster-builddeploy",src:a(9978).Z,width:"1920",height:"873"}))))}d.isMDXComponent=!0},9978:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cluster-builddeploy-067eed5395f5dbd1bdc9ce193b97ee36.png"},365:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/env-link-k8s-6a9ce6f155f0fe23670d9de4c62b524f.png"},5464:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/home-6fa38a8adfcfb9789f5640611160241b.png"},4041:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/k8s-tags-6e79ee51b41dab896b636baf3a23a427.png"},9866:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-app-demo1-0b687241c74c3f977a31cfe250dfa201.png"},9861:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-app-demo2-eb3756b5289a6235d971c247505ea146.png"},2242:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-app-demo3-776279bf3eceafcb41584c646bcf0389.png"},2085:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-env-dbac7a4b4012a352e36fe97f0b038fb8.png"},2346:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-harbor-demo-3fd64bcaeabb9647f5f84eead0d69a80.png"},875:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-k8s-2a95f0d0569ae2710d84db9a8f5093b1.png"},6092:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-template-demo1-feda7f5e7cc639170b0be135d523b396.png"},4301:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-template-demo2-7a5f8383e0289898378eddc1c52d635e.png"},5304:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-template-6eef9d35680ecf46e3d05745273a50a8.png"},6215:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/password-login-0f21e1cab391073ade78bc687aa55441.png"}}]);