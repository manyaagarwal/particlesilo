(this["webpackJsonpparticle-silo"]=this["webpackJsonpparticle-silo"]||[]).push([[0],{225:function(e,t,a){},226:function(e,t,a){},332:function(e,t){},333:function(e,t){},334:function(e,t){},335:function(e,t){},336:function(e,t){},418:function(e,t,a){"use strict";a.r(t);var n,i=a(7),c=a(0),s=a(20),r=a.n(s),o=(a(225),a(226),a(420)),l=a(421),d=a(44),u=a(98),p=a.p+"static/media/logo.b1821787.svg",j=o.a.Header,h=o.a.Content,b=o.a.Footer,m=[{title:"Home",route:"/"},{title:"Useful Resources",route:"/resources"},{title:"Tips and Tricks",route:"/tips-tricks"},{title:"SciComm Forum",route:"/forum"},{title:"Upload",route:"/upload"}],f=function(e){var t=e.children,a=Object(d.g)(),n="/particlesilo".length,c=a.pathname.slice(n);return Object(i.jsxs)(o.a,{style:{height:"100vh",overflow:"scroll"},children:[Object(i.jsxs)(j,{style:{position:"fixed",zIndex:1,width:"100%",height:"auto",display:"flex",justifyContent:"space-between",backgroundColor:"white"},children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("img",{src:p,height:"100"})}),Object(i.jsx)(l.a,{mode:"horizontal",defaultSelectedKeys:[c],style:{display:"flex",justifyContent:"flex-end"},children:m.map((function(e){return Object(i.jsx)(l.a.Item,{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(i.jsx)(u.b,{to:e.route,children:e.title})},e.route)}))})]}),Object(i.jsx)(h,{className:"site-layout",style:{padding:"0 50px",marginTop:100,width:"90%",marginLeft:"auto",marginRight:"auto"},children:Object(i.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:t})}),Object(i.jsx)(b,{style:{textAlign:"center"},children:"Particle Silo"})]})},x=a(426),O=a(425),g=a(430),y=x.a.Panel,v=O.a.Title,w=[{question:"How can I identify my audience?",answer:"It is important that you know how to identify the audience you are communicating to so you can communicate the topics you want  properly. There are many possible audiences inside a population so you must ask \u201cwho am I communicating to?\u201d \n When looking at the audience,  it is important that you always consider the non-scientific public as being made of by people that are not experts in the area. Members of the public can differ in age, interests, experiences, opinions and academic background but, many of the times they are not completely lay in the theme.\n It is important that you verify if, inside the audience, there is more specific audiences (e.g., more elderly people, teenagers, children) and if you have access to more detailed information that allow you to adapt your communication to a more targeted audience (e.g., interests, financial background, geographical localisation). \n Besides the importance of identifying the audience , it is also important that you know how to characterize it - the more information you have about the audience, the bigger is the chance of adapting  the message correctly - and segment the audience - to segment an audience is to turn it into small groups with similar interests, behavioural patterns and needs.\n \n In order to properly segment the audience you must previously define the criteria that will characterize these groups. This will allow the groups to be the more homogenous possible, you can use: \n \u2022 Sociodemographic data (e.g., age, academic background, gender); \n \u2022 Geographic localisation (e.g., region, district, country); \n \u2022 Psychosocial data (e.g., values, interests, attitudes) ",images:[]}],T=function(){return Object(i.jsxs)("div",{className:"container-card",children:[Object(i.jsx)(v,{children:"Welcome to the Science Communication World"}),Object(i.jsx)(x.a,{bordered:!1,defaultActiveKey:["1"],expandIcon:function(e){var t=e.isActive;return Object(i.jsx)(g.a,{rotate:t?90:0})},className:"site-collapse-custom-collapse",style:{fontSize:"1.2em"},children:w.map((function(e,t){return Object(i.jsx)(y,{header:Object(i.jsx)("b",{children:e.question}),className:"site-collapse-custom-panel",style:{textAlign:"left"},children:Object(i.jsx)("p",{style:{whiteSpace:"pre-line"},children:e.answer})},t)}))})]})},S=function(){return Object(i.jsx)("h1",{children:"Home"})},C=a(162),I=a(427),k=a(428),A=a.p+"static/media/royaltyfreeimage.69bdcbb2.png",R=k.a.Meta,N=[{title:"ROYALTY-FREE PICTURES",description:"High-quality, free-to-use pictures of CERN facilities, experiments and so on",image:A,route:"/resources/images"},{title:"SHORT VIDEOS AND ANIMATIONS",description:"Instructional YouTube videos, GIFs and cartoons to explain the foundations of quantum mechanics and particle physics",image:A,route:"/resources/videos"},{title:"DATA VISUALIZATIONS, CHARTS, PLOTS",description:"Experimental data from CERN and other research centers in particle physics worldwide made visible and accessible",image:"",route:"/"},{title:"INTERACTIVE ACTIVITIES AND WORKSHOPS",description:"A collection of online and offline quizzes, tools and materials to get your audience to interact",image:"",route:"/"},{title:"PAPER DIGEST",description:"Some of the most fundamentals research in particle physics and science communication, summarized and made easy to be explained",image:A,route:"/"},{title:"TALKS AND PRESENTATIONS",description:"Speeches and presentations about particle physics themes and research topics",image:"",route:"/resources/presentations"}],P=function(){var e=Object(d.f)();return Object(i.jsx)("div",{style:{display:"flex",flexDirection:"row",flexFlow:"row wrap",justifyContent:"center"},children:N.map((function(t){return Object(i.jsx)(k.a,{hoverable:!0,style:{width:"350px",backgroundColor:"#DAE5FF",margin:"10px"},cover:Object(i.jsx)("img",{src:""===t.image?"//:0":t.image}),onClick:function(){return e.push(t.route)},children:Object(i.jsx)(R,{title:Object(i.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:t.title}),description:t.description})})}))})},F=C.a.TabPane,E=I.a.Search,D=O.a.Title,U=function(){return Object(i.jsxs)("div",{className:"container-card",children:[Object(i.jsx)(D,{children:"Resources"}),Object(i.jsx)(E,{placeholder:"Search for Resources",allowClear:!0,enterButton:!0,size:"large",onSearch:function(e){return console.log("Start Search for ",e)},style:{marginBottom:"10px"}}),Object(i.jsxs)(C.a,{defaultActiveKey:"1",type:"card",size:"large",tabPosition:"bottom",children:[Object(i.jsx)(F,{tab:"Category",children:Object(i.jsx)(k.a,{className:"tab-card",children:Object(i.jsx)(P,{})})},"1"),Object(i.jsx)(F,{tab:"Topic",children:Object(i.jsx)(k.a,{className:"tab-card",children:"Content of card tab 2"})},"2"),Object(i.jsx)(F,{tab:"Audience",children:Object(i.jsx)(k.a,{className:"tab-card",children:"Content of card tab 3"})},"3")]})]})},z=a(51),L=a.n(z),B=a(57),H=a(81),V=a(66),q=(a(291),a(293),a(419),a(110));q.a.initializeApp({apiKey:"AIzaSyBpPO9JjeTKF1Ny3WPkg_N8A10iZuzVr5A",authDomain:"particle-silo.firebaseapp.com",databaseURL:"https://particle-silo.firebaseio.com",projectId:"particle-silo",storageBucket:"particle-silo.appspot.com",messagingSenderId:"930203734678",appId:"1:930203734678:web:06de0904476dfd46aca8b7"}),n=q.a.firestore(),q.a.storage(),q.a.auth();q.a;var K=n,W=a(429),M=k.a.Meta,G=O.a.Title,J=function(){var e=Object(c.useState)([]),t=Object(V.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)(Object(H.a)(L.a.mark((function e(){var t,a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.collection("images"),e.next=3,t.get();case 3:a=e.sent,i=[],a.forEach((function(e){var t=e.data();i.push(Object(B.a)({id:e.id},t))})),n(i);case 7:case"end":return e.stop()}}),e)}))),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)(G,{children:"Royalty-Free Image Resources"}),Object(i.jsx)("div",{style:{display:"flex"},children:a.map((function(e){return Object(i.jsx)(k.a,{hoverable:!0,style:{width:400,margin:"10px"},cover:Object(i.jsx)("img",{alt:e.name,src:e.imageUrl}),children:Object(i.jsx)(M,{title:Object(i.jsx)("div",{style:{fontSize:"1.4em"},children:e.name}),description:(t=e.topic,Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(W.a,{children:e})}))}))})});var t}))})]})},Y=a(204),Z=a.n(Y),_=k.a.Meta,Q=O.a.Title,X=function(){var e=Object(c.useState)([]),t=Object(V.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)(Object(H.a)(L.a.mark((function e(){var t,a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.collection("videos"),e.next=3,t.get();case 3:a=e.sent,i=[],a.forEach(function(){var e=Object(H.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.data(),i.push(Object(B.a)({id:t.id},a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n(i);case 7:case"end":return e.stop()}}),e)}))),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)(Q,{children:"Video Resources"}),Object(i.jsx)("div",{style:{display:"flex"},children:a.map((function(e){return Object(i.jsx)(k.a,{hoverable:!0,style:{width:"500",backgroundColor:"#DAE5FF",margin:"10px"},cover:Object(i.jsx)(Z.a,{url:e.videoUrl,width:"auto"}),children:Object(i.jsx)(_,{title:Object(i.jsx)("div",{style:{fontSize:"1.4em"},children:e.name}),description:(t=e.topic,Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(W.a,{children:e})}))}))})});var t}))})]})},$=a(161),ee=a(160),te=O.a.Title,ae=x.a.Panel,ne=function(){var e=Object(c.useState)([]),t=Object(V.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(V.a)(s,2),o=r[0],l=r[1],d=Object(c.useState)(1),u=Object(V.a)(d,2),p=u[0],j=(u[1],Object(c.useState)(!1)),h=Object(V.a)(j,2),b=h[0],m=h[1];Object(c.useEffect)(Object(H.a)(L.a.mark((function e(){var t,a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.collection("presentations"),e.next=3,t.get();case 3:a=e.sent,i=[],a.forEach((function(e){var t=e.data();i.push(Object(B.a)({id:e.id},t))})),n(i);case 7:case"end":return e.stop()}}),e)}))),[]);function f(e){var t=e.numPages;l(t),m(!0)}return Object(i.jsxs)("div",{children:[Object(i.jsx)(te,{children:"Talks and Presentations"}),Object(i.jsx)(x.a,{accordion:!0,children:a.map((function(e,t){return Object(i.jsxs)(ae,{header:e.name,extra:(a=e.topic,Object(i.jsx)("div",{children:a.map((function(e){return Object(i.jsx)(W.a,{children:e})}))})),children:[Object(i.jsx)($.a,{file:e.presentationUrl,onLoadSuccess:f,error:"",children:b&&Object(i.jsx)($.b,{pageNumber:p})}),b&&Object(i.jsxs)("p",{children:["Page ",p," of ",o]}),Object(i.jsx)(ee.a,{url:e.presentationUrl,width:"80%",height:"600px",display:"initial"}),";"]},t);var a}))})]})},ie=a(422),ce=a(424),se=a(109),re=a(68),oe=a(83),le=a(118),de=a(432),ue=a(423),pe=a(218),je=a(431),he=ue.a.Dragger,be=ie.a.Option,me=O.a.Title,fe={name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:function(e){var t=e.file.status;"uploading"!==t&&console.log(e.file,e.fileList),"done"===t?pe.b.success("".concat(e.file.name," file uploaded successfully.")):"error"===t&&pe.b.error("".concat(e.file.name," file upload failed."))}},xe={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},Oe={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},ge=function(){var e=ce.a.useForm(),t=Object(V.a)(e,1)[0],a=function(){var e=Object(H.a)(L.a.mark((function e(a){var n,i,c,s,r,o,l,d,u,p,j,h,b,m,f,x,O,g,y,v,w,T;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Received values of form: ",a),n=K.collection(a.type),"images"!==a.type){e.next=10;break}return e.next=5,n.doc().set({audience:null!==(i=a.audience)&&void 0!==i?i:[],fileType:null!==(c=a.fileType)&&void 0!==c?c:"jpg",imageUrl:null!==(s=a.url)&&void 0!==s?s:"",name:null!==(r=a.name)&&void 0!==r?r:"",topic:null!==(o=a.topic)&&void 0!==o?o:[],uploadedBy:"DemoUser"});case 5:e.sent,pe.b.success("Resource added successfully."),t.resetFields(),e.next=31;break;case 10:if("videos"!==a.type){e.next=18;break}return e.next=13,n.doc().set({audience:null!==(l=a.audience)&&void 0!==l?l:[],fileType:null!==(d=a.fileType)&&void 0!==d?d:"mp4",name:null!==(u=a.name)&&void 0!==u?u:"",topic:null!==(p=a.topic)&&void 0!==p?p:[],uploadedBy:"DemoUser",videoUrl:null!==(j=a.url)&&void 0!==j?j:""});case 13:e.sent,pe.b.success("Resource added successfully."),t.resetFields(),e.next=31;break;case 18:if("presentations"!==a.type){e.next=26;break}return e.next=21,n.doc().set({audience:null!==(h=a.audience)&&void 0!==h?h:[],author:null!==(b=a.author)&&void 0!==b?b:"",fileType:null!==(m=a.fileType)&&void 0!==m?m:"pdf",name:null!==(f=a.name)&&void 0!==f?f:"",topic:null!==(x=a.topic)&&void 0!==x?x:[],uploadedBy:"DemoUser",presentationUrl:null!==(O=a.url)&&void 0!==O?O:""});case 21:e.sent,pe.b.success("Resource added successfully."),t.resetFields(),e.next=31;break;case 26:return e.next=28,n.doc().set({audience:null!==(g=a.audience)&&void 0!==g?g:[],fileType:null!==(y=a.fileType)&&void 0!==y?y:"mp4",name:null!==(v=a.name)&&void 0!==v?v:"",topic:null!==(w=a.topic)&&void 0!==w?w:[],uploadedBy:"DemoUser",url:null!==(T=a.url)&&void 0!==T?T:""});case 28:e.sent,pe.b.success("Resource added successfully."),t.resetFields();case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function n(e){console.log("selected ".concat(e))}return Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",flexDirection:"column"},children:[Object(i.jsx)(me,{style:{textAlign:"left"},children:" Upload Resources "}),Object(i.jsx)("div",{style:{height:"80vh",display:"flex",flexDirection:"column",marginTop:"auto",marginBottom:"auto"},children:Object(i.jsx)(ce.a,Object(B.a)(Object(B.a)({},xe),{},{form:t,name:"register",onFinish:a,initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0,children:Object(i.jsxs)(se.a,{children:[Object(i.jsx)(re.a,{span:12,children:Object(i.jsxs)(he,Object(B.a)(Object(B.a)({},fe),{},{children:[Object(i.jsx)("p",{className:"ant-upload-drag-icon",children:Object(i.jsx)(je.a,{})}),Object(i.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(i.jsx)("p",{className:"ant-upload-hint",children:"Strictly prohibit from uploading company data or other band files"})]}))}),Object(i.jsxs)(re.a,{span:12,children:[Object(i.jsx)(ce.a.Item,{name:"name",label:"Title",rules:[{required:!0,message:"Please input a title for the Resource"}],children:Object(i.jsx)(I.a,{})}),Object(i.jsx)(ce.a.Item,{name:"url",label:"Link",children:Object(i.jsx)(I.a,{})}),Object(i.jsx)(ce.a.Item,{name:"fileType",label:"File Type",children:Object(i.jsx)(I.a,{})}),Object(i.jsx)(ce.a.Item,{name:"author",label:Object(i.jsxs)("span",{children:["Author/Creator\xa0",Object(i.jsx)(oe.a,{title:"Who created this resource?",children:Object(i.jsx)(de.a,{})})]}),children:Object(i.jsx)(I.a,{})}),Object(i.jsx)(ce.a.Item,{name:"topic",label:"Topics",children:Object(i.jsx)(ie.a,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:n,children:["LHC","CERN","particles","supersymmetry","rutherford","nuclear","scattering","detector","neutrino"].map((function(e){return Object(i.jsx)(be,{children:e},e)}))})}),Object(i.jsx)(ce.a.Item,{name:"audience",label:"Audience",children:Object(i.jsxs)(ie.a,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",onChange:n,children:[Object(i.jsx)(be,{value:"children",children:"Children"}),Object(i.jsx)(be,{value:"high school",children:"High School Students"}),Object(i.jsx)(be,{value:"undergraduate",children:"Undergraduates"}),Object(i.jsx)(be,{value:"graduate",children:"Graduates"}),Object(i.jsx)(be,{value:"general public",children:"General Public"})]})}),Object(i.jsx)(ce.a.Item,{name:"type",label:"Resource Type",rules:[{required:!0,message:"Please input a type for the Resource"}],children:Object(i.jsxs)(ie.a,{showSearch:!0,style:{width:200},placeholder:"Select a type",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e))},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},onSearch:function(e){console.log("search:",e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(i.jsx)(be,{value:"images",children:"Royalty Free Images"}),Object(i.jsx)(be,{value:"videos",children:"Videos and Animations"}),Object(i.jsx)(be,{value:"visualisations",children:"Data Visualisations, Charts, Plots"}),Object(i.jsx)(be,{value:"activities",children:"Interactive Activities and Workshops"}),Object(i.jsx)(be,{value:"papers",children:"Paper Digest"}),Object(i.jsx)(be,{value:"presentations",children:"Talks and Presentations"})]})}),Object(i.jsx)(ce.a.Item,Object(B.a)(Object(B.a)({},Oe),{},{children:Object(i.jsx)(le.a,{type:"primary",htmlType:"submit",children:"Upload"})}))]})]})}))})]})};function ye(){return Object(i.jsx)(f,{children:Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{exact:!0,path:"/",component:S}),Object(i.jsx)(d.a,{exact:!0,path:"/upload",component:ge}),Object(i.jsx)(d.a,{exact:!0,path:"/tips-tricks",component:T}),Object(i.jsx)(d.a,{exact:!0,path:"/resources",component:U}),Object(i.jsx)(d.a,{exact:!0,path:"/resources/images",component:J}),Object(i.jsx)(d.a,{exact:!0,path:"/resources/videos",component:X}),Object(i.jsx)(d.a,{exact:!0,path:"/resources/presentations",component:ne})]})})}var ve=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(ye,{})})},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,433)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};r.a.render(Object(i.jsx)(u.a,{children:Object(i.jsx)(ve,{})}),document.getElementById("root")),we()}},[[418,1,2]]]);
//# sourceMappingURL=main.4dc06c36.chunk.js.map