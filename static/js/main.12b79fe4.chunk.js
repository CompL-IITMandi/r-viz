(this["webpackJsonprsh-wiz"]=this["webpackJsonprsh-wiz"]||[]).push([[0],{411:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(26),s=n.n(c),o=n(13),r=n(463),l=n(466),d=n(468),u=n(413),j=n(121),h=n(225),m=n.n(h),b=n(1),x=Object(r.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function p(e){var t=x(),n=e.toggleTheme;return Object(b.jsx)("div",{className:t.root,children:Object(b.jsx)(l.a,{position:"static",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(j.a,{variant:"h6",className:t.title,children:"Runtime Visualizer"}),Object(b.jsx)(u.a,{edge:"start",className:t.menuButton,color:"inherit",onClick:n,children:Object(b.jsx)(m.a,{})})]})})})}var g=n(500),f=n(257),O=n(469),v=n(474),C=n(473),y=n(470),S=n(471),N=n(227),k=n.n(N),M=n(472),R=n(226),I=n.n(R);var w=Object(r.a)((function(e){return{paper:{color:e.palette.text.secondary,height:"100%",overflow:"scroll",scrollbarWidth:"none"},paperText:{color:e.palette.text.secondary,scrollbarWidth:"none",marginTop:e.spacing(1),padding:e.spacing(2)},mainDataContainer:{padding:e.spacing(2),display:"flex",flexDirection:"column"},gridContainer:{height:"100%"},gridItemContainer:{padding:e.spacing(2),paddingTop:16,paddingBottom:16,overflow:"hidden"},gridItemContainerLeft:{padding:e.spacing(2),paddingTop:16,paddingBottom:16,overflow:"scroll"},heading:{marginBottom:e.spacing(2)},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),width:400},button:{width:200,alignSelf:"left"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},secTitle:{fontSize:12,fontWeight:"bold"},pos:{marginBottom:12},jsonCard:{borderRadius:e.shape.borderRadius,marginTop:20,marginBottom:10},reportIcon:{color:"tomato",fontSize:50}}})),T=function(e){var t=w(),n=e.height,i=e.start,c=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)({}),s=Object(o.a)(c,2),r=s[0],l=s[1];return{selectedJSON:n,meta:r,updateFile:function(e){i(e)},updateMeta:function(e){l(e)},reset:function(){i(null),l({})}}}(),s=new FileReader;s.onload=function(e){try{c.updateFile(JSON.parse(e.target.result))}catch(t){c.reset()}};var r=Object(b.jsx)("span",{className:t.bullet,children:"\u2022"});return Object(b.jsx)(O.a,{container:!0,spacing:0,className:t.gridContainer,children:Object(b.jsx)(O.a,{item:!0,xs:12,children:Object(b.jsxs)(O.a,{container:!0,spacing:0,className:t.gridContainer,children:[Object(b.jsx)(O.a,{item:!0,xs:7,children:Object(b.jsxs)("div",{className:t.gridItemContainerLeft,style:{height:n},children:[Object(b.jsx)(y.a,{children:Object(b.jsxs)(S.a,{children:[Object(b.jsxs)(j.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["rsh",r,"viz"]}),Object(b.jsx)(j.a,{className:t.pos,color:"textSecondary",children:"Simple Runtime visualizer for \u0158"}),Object(b.jsx)(j.a,{className:t.pos,color:"textSecondary",children:"IIT Mandi CompL Group"})]})}),Object(b.jsx)(f.a,{className:t.paperText})]})}),Object(b.jsx)(O.a,{item:!0,xs:5,children:Object(b.jsx)("div",{className:t.gridItemContainer,style:{height:n},children:Object(b.jsx)(f.a,{className:t.paper,children:Object(b.jsxs)("div",{className:t.mainDataContainer,children:[Object(b.jsx)(j.a,{className:t.heading,variant:"h4",gutterBottom:!0,align:"center",children:"Session Settings"}),c.selectedJSON&&Object(b.jsx)(y.a,{elevation:2,className:t.jsonCard,children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(k.a,{className:t.reportIcon,style:{}}),Object(b.jsx)(j.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:c.meta.name}),Object(b.jsx)(j.a,{className:t.secTitle,color:"textSecondary",gutterBottom:!0,children:new Date(c.meta.lastModified).toLocaleDateString()}),Object(b.jsx)(j.a,{variant:"h5",component:"h2",children:c.meta.sizeReadable}),Object(b.jsx)(M.a,{children:Object(b.jsx)(C.a,{size:"small",onClick:c.reset,children:"Delete"})})]})}),Object(b.jsx)(v.a,{className:t.formControl,children:Object(b.jsx)(C.a,{variant:"outlined",component:"span",className:t.button,children:Object(b.jsx)(I.a,{onChange:function(e){s.readAsText(e[0]),c.updateMeta({name:e[0].name,sizeReadable:e[0].sizeReadable,lastModified:e[0].lastModified})},onError:function(e){return console.log(e)},accepts:[".json"],clickable:!0,children:c.updateFile?"select another file":"Upload runtime JSON"})})}),Object(b.jsx)(C.a,{onClick:function(){return i(c.selectedJSON,c.meta)},disabled:null===c.selectedJSON,variant:"contained",className:t.button,color:"secondary",children:"Start"})]})})})})]})})})},D=n(31),B=n(117),F=n(254),z=n(503),A=n(481),V=n(477),W=n(414),E=n(478),L=n(475),_=n(476),P=n(228),H=n.n(P),G=n(229),J=n.n(G),X=n(506),K=n(482),Y=n(504),U=n(501),q=n(480),Q=n(230),Z=n.n(Q),$=n(479),ee=["children","value","index"],te=Object(r.a)((function(e){return{tabPanelContainer:{margin:e.spacing(2)},root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{},formControl:{width:"100%",marginTop:20,marginBottom:20}}}));function ne(e){var t=e.children,n=e.value,a=e.index,i=Object(F.a)(e,ee),c=te();return Object(b.jsx)("div",Object(B.a)(Object(B.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},i),{},{children:n===a&&Object(b.jsx)("div",{className:c.tabPanelContainer,children:t})}))}var ae=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(W.a,{button:!0,onClick:function(){return e.handleOpened(e.index)},children:[Object(b.jsx)(L.a,{primary:"".concat(e.mainFileData.getName(e.methodId)," [").concat(e.mainFileData.getVersionCount(e.methodId),"]"),secondary:"[".concat(e.mainFileData.getRuntime(e.methodId).effect.toString().substring(0,4),"%] ").concat(e.mainFileData.getRuntime(e.methodId).runtime.toString().substring(0,9)," ms, ").concat(e.mainFileData.getRuns(e.methodId)," calls")}),-1!==e.open.indexOf(e.index)?Object(b.jsx)(H.a,{}):Object(b.jsx)(J.a,{})]}),Object(b.jsx)(_.a,{in:-1!==e.open.indexOf(e.index),timeout:"auto",unmountOnExit:!0,children:Object(b.jsx)(V.a,{component:"div",dense:!0,disablePadding:!0,children:e.mainFileData.getContexts(e.methodId).map((function(t,n){return Object(b.jsxs)(W.a,{className:e.classes.nested,children:[Object(b.jsx)(E.a,{children:Object(b.jsx)(Y.a,{edge:"start",checked:-1!==e.checked.indexOf("".concat(e.index,"_").concat(n)),tabIndex:-1,style:{color:e.mainFileData.getContextColor(t)},onClick:function(){return e.handleCheckedChange("".concat(e.index,"_").concat(n))}})}),Object(b.jsx)("div",{style:{overflow:"scroll"},children:t}),Object(b.jsx)($.a,{children:Object(b.jsx)(u.a,{disabled:e.selected==="".concat(e.methodId,"-method-sub-").concat(e.index,"-").concat(n),onClick:function(){e.setSelected("".concat(e.methodId,"-method-sub-").concat(e.index,"-").concat(n)),e.updateSelected(e.methodId,t)},edge:"end",children:Object(b.jsx)(Z.a,{})})})]},"method-sub-".concat(e.index,"-").concat(n))}))})}),Object(b.jsx)(q.a,{})]},e.index)},ie=function(e){var t=e.mainFileData,n=e.updateSelected,c=i.a.useState(1),s=Object(o.a)(c,2),r=s[0],l=s[1],d=i.a.useState(0),u=Object(o.a)(d,2),h=u[0],m=u[1],x=i.a.useState([]),p=Object(o.a)(x,2),g=p[0],f=p[1],O=i.a.useState(""),C=Object(o.a)(O,2),y=C[0],S=C[1],N=i.a.useState([]),k=Object(o.a)(N,2),M=k[0],R=k[1],I=te(),w=i.a.useState([]),T=Object(o.a)(w,2),B=T[0],F=T[1],W=function(e){var t=B.indexOf(e),n=Object(D.a)(B);-1===t?n.push(e):n.splice(t,1),F(n)},E=function(e){var t=g.indexOf(e),n=Object(D.a)(g);-1===t?n.push(e):n.splice(t,1),f(n)};return Object(a.useEffect)((function(){var e=[];e[0]=t.getSortedByRuntime(),e[1]=t.getSortedByCalls(),e[2]=t.getSortedByContexts(),R(e)}),[t]),Object(b.jsxs)("div",{style:{width:"100%"},children:[Object(b.jsxs)(z.a,{value:r,indicatorColor:"secondary",textColor:"secondary",onChange:function(e,t){l(t)},scrollButtons:"auto",variant:"scrollable",children:[Object(b.jsx)(A.a,{label:"Files"}),Object(b.jsx)(A.a,{label:"Methods"}),Object(b.jsx)(A.a,{label:"Raw Data"})]}),Object(b.jsx)(ne,{value:r,index:0,children:Object(b.jsx)(j.a,{gutterBottom:!0,children:t.getMetadata().name})}),Object(b.jsxs)(ne,{value:r,index:1,children:[Object(b.jsxs)(v.a,{className:I.formControl,children:[Object(b.jsx)(X.a,{id:"sort-by",children:"Sort By"}),Object(b.jsxs)(U.a,{labelId:"sort-by",value:h,onChange:function(e){m(e.target.value),F([])},children:[Object(b.jsx)(K.a,{value:0,children:"Runtime"}),Object(b.jsx)(K.a,{value:1,children:"Calls"}),Object(b.jsx)(K.a,{value:2,children:"Contexts"})]})]}),3===M.length&&Object(b.jsx)(V.a,{dense:!0,children:M[h].map((function(e,a){return Object(b.jsx)(ae,{selected:y,setSelected:S,mainFileData:t,index:a,methodId:e,open:B,classes:I,checked:g,handleOpened:W,handleCheckedChange:E,updateSelected:n},"".concat(e,"-").concat(a))}))})]}),Object(b.jsx)(ne,{value:r,index:2,children:Object(b.jsx)("div",{style:{backgroundColor:"red"}})})]})},ce=n(42),se=n(483),oe=n(484),re=n(488),le=n(145),de=n(144),ue=n(116),je=n(120),he=n(243),me=n(491),be=n(489),xe=n(490),pe=n(507),ge=Object(r.a)((function(e){return{sliderHolder:{width:150,paddingLeft:10,paddingRight:10},smallCaption:{fontSize:14},boldCaption:{fontSize:14,fontWeight:"bold"},divider:{marginTop:10,marginBottom:10},switchHolder:{paddingRight:10},switchLabel:{fontSize:13},slider:{marginLeft:10}}})),fe=function(e){var t=e.mainFileData,n=e.selectedMethod,c=i.a.useState({results:[],contexts:[]}),s=Object(o.a)(c,2),r=s[0],l=s[1],d=i.a.useState(0),u=Object(o.a)(d,2),h=u[0],m=u[1],x=i.a.useState(100),p=Object(o.a)(x,2),g=p[0],f=p[1],O=Object(ce.a)();Object(a.useEffect)((function(){if(t.isValidId(n.id)){l(function(){var e=[],a=n.id,i=t.getContexts(a),c={};i.forEach((function(e){c[e]=t.getContextRuntimes(a,e)}));for(var s=1e3*h;;){for(var o={},r=0;r<i.length;r++){var l=i[r],d=c[l][s];void 0!==d&&(o[l]=d)}if(++s>1e3*h+g||0===Object.keys(o).length)break;e.push(o)}return{results:e,contexts:i}}())}}),[t,n.id,O.palette.type,h,g]);var v=i.a.useState(!1),C=Object(o.a)(v,2),y=C[0],S=C[1],N=i.a.useState(!1),k=Object(o.a)(N,2),M=k[0],R=k[1],I=i.a.useState(!0),w=Object(o.a)(I,2),T=w[0],D=w[1],B=i.a.useState(15),F=Object(o.a)(B,2),z=F[0],A=F[1],V=ge();return Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:[Object(b.jsx)(se.a,{width:"80%",minHeight:50,maxHeight:"90%",children:Object(b.jsxs)(oe.a,{data:r.results.slice(z),margin:{top:5,right:30,left:20,bottom:5},children:[y&&Object(b.jsx)(re.a,{strokeDasharray:"3 3"}),Object(b.jsx)(le.a,{yAxisId:"left"}),Object(b.jsx)(de.a,{}),Object(b.jsx)(ue.a,{}),Object(b.jsx)(je.a,{}),r.contexts.map((function(e,a){return Object(b.jsx)(he.a,{name:e.length<20?e:"...".concat(e.slice(-17)),strokeWidth:n.context===e&&T?3:void 0,yAxisId:"left",type:"monotone",dataKey:""===e?a:e,dot:M,stroke:t.getContextColor(e),activeDot:{r:n.context===e&&T?5:void 0},animationDuration:600},"relativert-line-".concat(a))}))]})}),Object(b.jsxs)(be.a,{children:[Object(b.jsx)(xe.a,{label:Object(b.jsxs)(j.a,{className:V.smallCaption,children:["Skip first ",Object(b.jsx)("b",{children:z})]}),labelPlacement:"top",control:Object(b.jsx)(pe.a,{className:V.slider,color:"secondary",valueLabelDisplay:"auto",onChange:function(e,t){return A(t)},value:z,step:5,marks:!0,min:0,max:50})}),Object(b.jsx)(xe.a,{label:Object(b.jsxs)(j.a,{className:V.smallCaption,children:["Data ",Object(b.jsx)("b",{children:"[".concat(1e3*h," - ").concat(1e3*h+1e3,"]")})]}),labelPlacement:"top",control:Object(b.jsx)(pe.a,{className:V.slider,color:"secondary",valueLabelDisplay:"auto",onChange:function(e,t){return m(t)},value:h,step:1,marks:!0,min:0,max:100})}),Object(b.jsx)(xe.a,{label:Object(b.jsxs)(j.a,{className:V.smallCaption,children:["Showing ",Object(b.jsx)("b",{children:g})," datapoints"]}),labelPlacement:"top",control:Object(b.jsx)(pe.a,{className:V.slider,color:"secondary",valueLabelDisplay:"auto",onChange:function(e,t){return f(t)},value:g,step:50,marks:!0,min:50,max:1e3})}),Object(b.jsx)(q.a,{className:V.divider}),Object(b.jsx)(xe.a,{label:Object(b.jsx)(j.a,{className:V.smallCaption,children:"Grid"}),labelPlacement:"start",control:Object(b.jsx)(me.a,{size:"small",checked:y,onChange:function(){return S(!y)}})}),Object(b.jsx)(xe.a,{label:Object(b.jsx)(j.a,{className:V.smallCaption,children:"Dots"}),labelPlacement:"start",control:Object(b.jsx)(me.a,{size:"small",checked:M,onChange:function(){return R(!M)}})}),Object(b.jsx)(xe.a,{label:Object(b.jsx)(j.a,{className:V.smallCaption,children:"Bold"}),labelPlacement:"start",control:Object(b.jsx)(me.a,{size:"small",checked:T,onChange:function(){return D(!T)}})})]})]})},Oe=n(70),ve=n.n(Oe),Ce=n(175),ye=n(492),Se=n(245),Ne=n(146),ke=n(508),Me=Object(r.a)((function(e){return{leftContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",flex:1},rightContainer:{display:"flex",flex:3},rlContainer:{flex:2,display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"},rrContainer:{flex:1,overflow:"scroll",scrollbarWidth:"none",marginTop:30},compilationOrder:{},assumptions:{marginTop:5,fontSize:15,fontWeight:"bold"},typeFeedback:{fontSize:15,fontWeight:"bold"},caption:{fontSize:10,fontWeight:"bold"},chip:{position:"relative",top:5},root:{display:"flex",flex:1,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},smallCaption:{fontSize:13,marginTop:5},boldCaption:{fontSize:14,fontWeight:"bold"},tooltipHolder:{padding:5,borderRadius:5,background:"rgba(0,0,0,0.6)",color:"#fff",position:"relative",top:50},sliderHolder:{textAlign:"center"},slider:{width:150},tooltipLattice:{position:"absolute",display:"none",padding:5,borderRadius:5,background:"rgba(0,0,0,0.6)",color:"#fff",top:50}}})),Re=function(e){var t=e.split(";"),n=[],a=[],i=0;if(void 0!==t[1]){n=t[0].split(",");var c=t[1].split(" miss: ");void 0===c[1]?a=t[1].split(","):(a=c[0].split(","),i=c[1])}else{var s=t[0].split(" miss: ");void 0===s[1]?n=t[0].split(","):(n=s[0].split(","),i=s[1])}return{assumptions:n,typeAssumptions:a,missing:i}},Ie=function(e){var t=e.mainFileData,n=e.id,a=Me();return t.isValidId(n)&&t.getMethodsThatCompiled(n).map((function(e,n){return Object(b.jsxs)("div",{children:[Object(b.jsx)(ke.a,{style:{backgroundColor:t.getContextColor(e[2])},label:"C-".concat(t.getContextIndex(e[2])),className:a.chip}),Object(b.jsx)(j.a,{align:"right",className:a.assumptions,variant:"subtitle2",children:Re(e[2]).assumptions.join(" ")}),Object(b.jsx)(j.a,{align:"right",className:a.typeFeedback,variant:"subtitle1",children:Re(e[2]).typeAssumptions.join(" ")}),Object(b.jsxs)(j.a,{align:"right",className:a.typeFeedback,variant:"subtitle1",children:[Re(e[2]).missing," miss"]}),Object(b.jsxs)(j.a,{className:a.caption,variant:"subtitle1",children:["Basic Blocks: ",e[7]]}),Object(b.jsxs)(j.a,{className:a.caption,variant:"subtitle1",children:["Promises: ",e[8]]}),Object(b.jsxs)(j.a,{gutterBottom:!0,className:a.caption,variant:"subtitle1",children:["Cmp + Opt: ",e[5]+e[6]]}),Object(b.jsxs)(j.a,{gutterBottom:!0,className:a.caption,variant:"subtitle1",children:["Total: ",e[3]]}),Object(b.jsxs)(j.a,{gutterBottom:!0,className:a.caption,variant:"subtitle1",children:["Total Runs: ",t.getContextRuns(e[0],e[2])]}),Object(b.jsx)(q.a,{})]},"".concat(e[0],"-list-").concat(e[2],"-").concat(n))}))},we=function(e){var t=Me(),n=Object(ce.a)(),c=e.mainFileData,s=e.selectedMethod,r=e.height,l=i.a.useState(0),d=Object(o.a)(l,2),u=d[0],h=d[1],m=i.a.useState([]),x=Object(o.a)(m,2),p=x[0],g=x[1],f=i.a.useState(0),O=Object(o.a)(f,2),v=O[0],C=O[1],y=i.a.useState(15),S=Object(o.a)(y,2),N=S[0],k=S[1],M=i.a.useState([]),R=Object(o.a)(M,2),I=R[0],w=R[1],T=i.a.useState([]),F=Object(o.a)(T,2),z=F[0],A=F[1],V=Object(a.useRef)(null),W=function(){h(0),g([]),C(0)},E=function(){var e=Object(Ce.a)(ve.a.mark((function e(){var t,n;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.getRuntime(s.id),n=(t.rir2pir+t.opt)/t.runtime*100,h(n),C(c.getContextRuns(s.id,"baseline"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(Ce.a)(ve.a.mark((function e(t){var n;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c.getContexts(s.id).forEach((function(e,a){var i=c.getLastNAvg(s.id,e,t),o=i.value,r=i.lastN;-1!==o&&n.push({name:"C-"+c.getContextIndex(e),value:o,lastN:r,context:e})})),n.sort((function(e,t){return e.value<t.value?1:-1})),g(n),k(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){if(!c.isValidId(s.id))return W();E(),L(N),_()}),[s.id,c]);var _=function(){if(!c.isValidId(s.id))return W();if(null!==V.current&&null!==V.current.clientHeight){var e=c.getContexts(s.id),t={},n=function(e,t){return 0===t.length||t.every((function(t){return e.includes(t)}))};e.forEach((function(a){var i=[];e.forEach((function(e){a!==e&&function(e,t){var a=Re(e),i=Re(t);return a.missing===i.missing&&n(a.assumptions,i.assumptions)&&n(a.typeAssumptions,i.typeAssumptions)}(e,a)&&i.push(e)})),t[a]=i})),t.baseline=e;var a=t.baseline.indexOf("baseline");t.baseline.splice(a,1);var i=function(e){for(var t=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&0===e[n].length&&t.push(n);return t},n=Object(B.a)({},e),a=[];0!==Object.keys(n).length;){var i=t(n);for(var c in a.push(i),i.forEach((function(e){return delete n[e]})),n)if(n.hasOwnProperty(c)){var s=0;for(s=0;s<i.length;s++){var o=i[s],r=Object(D.a)(n[c]),l=r.indexOf(o);-1!==l&&r.splice(l,1),n[c]=r}}}return a}(t),o={},r=i.length,l=function(){var e=function(){if(0===r||null===V.current)return[];var e=V.current.clientHeight,t=V.current.clientWidth,n=parseInt(e/r)+1,a=[],c=0,s=0;for(c=0;c<e;c+=n){var l=c+n/2,d=i[s],u=parseInt(t/d.length)+1,j=0,h=0;for(j=0;j<t;j+=u){var m=j+u/2,b=l,x=d[h];o[x]={x:m,y:b},a.push([m,b,x]),h++}s++}return a}(),n=function(){for(var e=function e(n,a){var c=i[a];if(void 0===c)return["baseline"];var s=0,o=[];for(s=0;s<c.length;s++){var r=c[s];-1!==t[r].indexOf(n)&&o.push(r)}return o.length>0?o:e(n,a+1)},n=[],a=0,c=i[a];void 0!==c;){var s=0,r=function(){var t=c[s];e(t,a+1).forEach((function(e){return n.push([o[t].x,o[t].y,o[e].x,o[e].y])}))};for(s=0;s<c.length;s++)r();a++,c=i[a]}return n}();w(e),A(n)};window.addEventListener("resize",l,!1),l()}},P=function(){document.getElementById("tooltip-lattice").style.display="none"};return Object(b.jsxs)("div",{className:t.root,children:[Object(b.jsxs)("div",{className:t.leftContainer,children:[Object(b.jsx)(se.a,{width:"100%",height:r/2,children:Object(b.jsxs)(ye.a,{width:15,data:p,children:[Object(b.jsx)(le.a,{}),Object(b.jsx)(de.a,{dataKey:"name"}),Object(b.jsx)(Se.a,{dataKey:"value",children:p.map((function(e,t){return Object(b.jsx)(Ne.a,{strokeWidth:e.context===s.context?2:0,stroke:"#000",fill:c.getContextColor(e.context)},"".concat(s.id,"-bar-art-").concat(e.name.split("-")[1]))}))}),Object(b.jsx)(je.a,{content:function(e){var n=e.active,a=e.payload;e.label;return n&&a&&a.length?Object(b.jsx)("div",{className:t.tooltipHolder,children:Object(b.jsxs)(j.a,{className:t.smallCaption,children:[Object(b.jsxs)("b",{children:[a[0].payload.name," [",a[0].payload.lastN," runs]: "]})," ",a[0].value]})}):null}})]})}),c.isValidId(s.id)&&Object(b.jsx)("div",{className:t.sliderHolder,children:Object(b.jsx)(pe.a,{className:t.slider,color:"secondary",valueLabelDisplay:"auto",onChange:function(e,t){return L(t)},value:N,step:5,marks:!0,min:5,max:50})}),c.isValidId(s.id)&&Object(b.jsxs)(j.a,{className:t.smallCaption,align:"center",children:["Relative Average Runtimes (Last ",N,"% runs)"]}),c.isValidId(s.id)&&Object(b.jsx)(j.a,{className:t.smallCaption,align:"left",children:"Considers last N% runs for each version for calculating the average runtime. Hovering over the graph shows the number of runs considered to calculate the average for that version."})]}),Object(b.jsxs)("div",{className:t.rightContainer,children:[Object(b.jsxs)("div",{className:t.rlContainer,children:[Object(b.jsxs)("svg",{ref:V,height:"100%",width:"100%",children:[z.map((function(e,t){return Object(b.jsx)("line",{x1:e[0],y1:e[1],x2:e[2],y2:e[3],stroke:n.palette.secondary.main,strokeWidth:1.5},"".concat(s.id,"-edge-").concat(t))})),I.map((function(e,t){return Object(b.jsxs)("g",{id:"UrTavla",children:[Object(b.jsx)("circle",{onMouseMove:function(t){return function(e,t){var n=document.getElementById("tooltip-lattice"),a=Re(t);n.innerHTML=a.assumptions.join(" ")+"<br/>"+a.typeAssumptions.join(" ")+"<br>missing: "+a.missing,n.style.display="block",n.style.left=e.pageX+10+"px",n.style.top=e.pageY+10+"px"}(t,e[2])},onMouseOut:P,cx:e[0],cy:e[1],r:18,stroke:e[2]===s.context?"black":"gray",strokeWidth:e[2]===s.context?2:1,fill:c.getContextColor(e[2])}),Object(b.jsx)("text",{x:e[0],y:e[1],"text-anchor":"middle",fill:"white",style:{fontSize:15,fontFamily:"mono",fontWeight:"bold",mixBlendMode:"difference"},dy:6,children:c.getContextRuns(s.id,e[2])})]},"".concat(s.id,"-node-").concat(t))})),"Sorry, your browser does not support inline SVG."]}),Object(b.jsx)(j.a,{className:t.boldCaption,align:"center",gutterBottom:!0,children:c.isValidId(s.id)&&"".concat(u.toString().substring(0,4)," % of runtime spent on compilation")})]}),Object(b.jsxs)("div",{className:t.rrContainer,children:[Object(b.jsx)("div",{className:t.compilationOrder,children:c.isValidId(s.id)&&Object(b.jsx)(Ie,{mainFileData:c,id:s.id})}),Object(b.jsxs)(j.a,{className:t.boldCaption,align:"right",children:["Baseline Runs: ",v.toString()]})]})]}),Object(b.jsx)("div",{id:"tooltip-lattice",display:"none",className:t.tooltipLattice})]})},Te=Object(r.a)((function(e){return{root:{display:"flex",flex:1,padding:e.spacing(4)},leftSide:{flex:4},rightSide:{flex:1,padding:e.spacing(1)},smallCaption:{fontSize:14},callboxContainer:{flex:6,display:"flex",flexDirection:"column"},svgContainer:{flex:1},x_run:{display:"flex",flexDirection:"row"},x_tag:{flex:1,textAlign:"center",fontSize:12,fontWeight:"bold",fontFamily:"mono"},yAxis:{display:"flex",flex:1},y_run:{display:"flex",flexDirection:"column"},y_tag:{flex:1,textAlign:"center",fontSize:12,fontWeight:"bold",fontFamily:"mono",display:"flex",justifyContent:"center"}}})),De=function(e){var t=e.id,n=e.data,a=e.XMAX,i=e.YMAX,c=e.mainFileData,s=100/i,o=100/a;return Object(D.a)(Array(a)).map((function(e,a){return Object(D.a)(Array(i)).map((function(e,r){var l=n[a*i+r],d=100-s-s*r,u=o*a;return void 0!==l?Object(b.jsx)("rect",{x:"".concat(u,"%"),y:"".concat(d,"%"),width:"".concat(o,"%"),height:"".concat(s,"%"),fill:c.getContextColor(l)},"cell-".concat(t,"-").concat(a,"-").concat(r)):Object(b.jsx)("g",{},"cell-".concat(t,"-").concat(a,"-").concat(r))}))}))},Be=function(e){var t=e.mainFileData,n=e.selectedMethod,c=Te(),s=Object(ce.a)(),r=i.a.useState([]),l=Object(o.a)(r,2),d=l[0],u=l[1],h=i.a.useState(10),m=Object(o.a)(h,2),x=m[0],p=m[1],g=i.a.useState(50),f=Object(o.a)(g,2),O=f[0],v=f[1],C=i.a.useState(!0),y=Object(o.a)(C,2),S=y[0],N=y[1];return Object(a.useEffect)((function(){if(t.isValidId(n.id)){var e=t.getContextCallRuns(n.id);u(e)}}),[n.id,t]),Object(b.jsxs)("div",{className:c.root,children:[Object(b.jsxs)("div",{className:c.callboxContainer,children:[Object(b.jsx)("div",{className:c.x_run,children:x<35&&Object(D.a)(Array(x)).map((function(e,t){return Object(b.jsxs)("div",{className:c.x_tag,children:["Run ",Object(b.jsx)("br",{})," ",O*(t+1)]})}))}),Object(b.jsx)("div",{className:c.yAxis,children:Object(b.jsx)("div",{className:c.svgContainer,children:Object(b.jsxs)("svg",{className:c.leftSide,height:"100%",width:"100%",children:[Object(b.jsx)(De,{id:n.id,data:d,mainFileData:t,XMAX:x,YMAX:O}),S&&Object(D.a)(Array(x)).map((function(e,t){var a=100/x+100/x*t+"%";return Object(b.jsx)("line",{x1:a,y1:"0%",x2:a,y2:"100%",stroke:s.palette.secondary.main,strokeWidth:1},"grid1-".concat(n.id,"-").concat(t))})),S&&Object(D.a)(Array(O)).map((function(e,t){var a=100/O+100/O*t+"%";return Object(b.jsx)("line",{x1:"0%",y1:a,x2:"100%",y2:a,stroke:s.palette.secondary.main,strokeWidth:1},"grid2-".concat(n.id,"-").concat(t))})),"Sorry, your browser does not support inline SVG."]})})}),Object(b.jsx)("div",{className:c.x_run,children:x<35&&Object(D.a)(Array(x)).map((function(e,t){return Object(b.jsxs)("div",{className:c.x_tag,children:["Run ",Object(b.jsx)("br",{})," ",O*t+1]})}))})]}),Object(b.jsx)("div",{className:c.rightSide,children:Object(b.jsxs)(be.a,{children:[Object(b.jsx)(xe.a,{label:Object(b.jsxs)(j.a,{className:c.smallCaption,children:[Object(b.jsx)("b",{children:x})," Stacks"]}),labelPlacement:"top",control:Object(b.jsx)(pe.a,{defaultValue:10,color:"secondary",value:x,onChange:function(e,t){return p(t)},step:5,marks:!0,min:5,max:100})}),Object(b.jsx)(xe.a,{label:Object(b.jsxs)(j.a,{className:c.smallCaption,children:[Object(b.jsx)("b",{children:O})," Rows Per Stack"]}),labelPlacement:"top",control:Object(b.jsx)(pe.a,{defaultValue:10,color:"secondary",value:O,onChange:function(e,t){return v(t)},step:1,min:1,max:1e3})}),Object(b.jsx)(xe.a,{label:Object(b.jsx)(j.a,{className:c.smallCaption,children:"Grid"}),labelPlacement:"start",control:Object(b.jsx)(me.a,{size:"small",checked:S,onChange:function(){return N(!S)}})})]})})]})},Fe=Object(r.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},chip:{margin:10}}})),ze=function(e){var t=Fe(),n=e.selectedMethod,a=e.mainFileData,i=e.updateSelected;return Object(b.jsx)("div",{className:t.root,children:a.isValidId(n.id)&&a.getCalledMethodIds(n.id).map((function(e){return Object(b.jsx)(ke.a,{className:t.chip,label:a.getName(e),onClick:function(){i(e,"baseline")}},"call-graph-".concat(e))}))})},Ae=n(505),Ve=n(246),We=n(494),Ee=n(498),Le=n(497),_e=n(493),Pe=n(495),He=n(496),Ge=Object(r.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},leftContainer:{flex:1},rightContainer:{flex:3,padding:e.spacing(1)},table:{minWidth:650}}})),Je=function(e){var t=e.mainFileData,n=e.selectedMethod,c=Ge(),s=Object(ce.a)(),r=i.a.useState([]),l=Object(o.a)(r,2),d=l[0],u=l[1],h=i.a.useState([0,0,0,0]),m=Object(o.a)(h,2),x=m[0],p=m[1];return Object(a.useEffect)((function(){if(t.isValidId(n.id)){var e=t.getContextTotalRuntime(n.id,n.context)/t.getRuntime(n.id).runtime*100,a=t.getContextRuntimes(n.id,n.context),i=[];if(a.length>0){var c=a.reduce((function(e,t){return e+t}),0)/a.length||0,s=Object(D.a)(t.getContextRuntimes(n.id,n.context));s.sort((function(e,t){return e-t}));var o=s[s.length-1],r=s[0];i.push(r),i.push(o),i.push(c);var l=Math.round(.05*a.length);if(0===l)i.push("Not Enough Data");else{var d=a.slice(-l),j=d.reduce((function(e,t){return e+t}),0)/d.length||0;i.push(j)}}p(i),u([{name:"Others",value:parseInt(100-e)},{name:"This Context",value:parseInt(e)}])}}),[n,t]),Object(b.jsxs)("div",{className:c.root,style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:[Object(b.jsxs)("div",{className:c.leftContainer,children:[Object(b.jsx)(se.a,{width:"100%",height:200,children:Object(b.jsxs)(Ae.a,{width:300,height:200,children:[Object(b.jsx)(je.a,{}),Object(b.jsxs)(Ve.a,{data:d,dataKey:"value",cx:"50%",cy:"50%",innerRadius:40,outerRadius:50,fill:"#82ca9d",label:!0,children:[Object(b.jsx)(Ne.a,{fill:"gray"}),Object(b.jsx)(Ne.a,{fill:s.palette.secondary.main})]})]})}),Object(b.jsx)(j.a,{variant:"subtitle2",align:"center",children:t.isValidId(n.id)&&"Version Runtime V Total Runtime"})]}),Object(b.jsxs)("div",{className:c.rightContainer,children:[t.isValidId(n.id)&&Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{variant:"body1",style:{fontWeight:"bold"},children:t.getName(n.id)}),Object(b.jsx)(j.a,{variant:"subtitle2",children:n.context})]}),0!==x.length&&Object(b.jsx)(_e.a,{component:f.a,children:Object(b.jsxs)(We.a,{className:c.table,size:"small",children:[Object(b.jsx)(Pe.a,{children:Object(b.jsxs)(He.a,{children:[Object(b.jsx)(Le.a,{children:"Min"}),Object(b.jsx)(Le.a,{children:"Max"}),Object(b.jsx)(Le.a,{children:"Avg"}),Object(b.jsx)(Le.a,{children:"Avg (Last 5%)"})]})}),Object(b.jsx)(Ee.a,{children:Object(b.jsxs)(He.a,{hover:!0,children:[Object(b.jsx)(Le.a,{children:x[0]}),Object(b.jsx)(Le.a,{children:x[1]}),Object(b.jsx)(Le.a,{children:x[2]}),Object(b.jsx)(Le.a,{children:x[3]})]})})]})}),t.isValidId(n.id)&&Object(b.jsxs)("div",{style:{marginTop:10},children:[Object(b.jsxs)(j.a,{variant:"subtitle1",gutterBottom:!0,children:[Object(b.jsx)("b",{children:"Version Runtime:"})," ",t.getContextTotalRuntime(n.id,n.context),Object(b.jsx)("b",{children:" ms | RIR2PIR:"})," ",t.getContextCompileTime(n.id,n.context),Object(b.jsx)("b",{children:" ms | OPT:"}),"     ",t.getContextOptTime(n.id,n.context),Object(b.jsx)("b",{children:" ms | Runs:"}),"     ",t.getContextRuns(n.id,n.context)]}),Object(b.jsxs)(j.a,{variant:"subtitle1",gutterBottom:!0,children:["Version Spent ",((t.getContextCompileTime(n.id,n.context)+t.getContextOptTime(n.id,n.context))/t.getContextTotalRuntime(n.id,n.context)*100).toString().substr(0,4)," % of its total runtime in compilation"]})]})]})]})},Xe=Object(r.a)((function(e){return{paper:{color:e.palette.text.secondary,height:"100%",scrollbarWidth:"none",display:"flex"},gridContainer:{height:"100%"},gridItemContainer:{padding:e.spacing(2),paddingTop:16,paddingBottom:16,overflow:"hidden"},formControl:{margin:e.spacing(1),minWidth:120},topTab:{position:"absolute",right:20}}})),Ke=[{name:"Relative Runtimes",component:fe},{name:"Compilations",component:we},{name:"Call Box",component:Be}],Ye=[{name:"Info",component:Je},{name:"Method Calls",component:ze}],Ue=function(e){var t=Xe(),n=e.selectedMethod,a=e.mainFileData,c=e.height,s=e.updateSelected,r=i.a.useState(0),l=Object(o.a)(r,2),d=l[0],u=l[1],j=i.a.useState(0),h=Object(o.a)(j,2),m=h[0],x=h[1],p=.6*c-16,g=.4*c-16;return Object(b.jsxs)(O.a,{container:!0,spacing:0,className:t.gridContainer,children:[Object(b.jsx)(O.a,{item:!0,xs:12,children:Object(b.jsx)("div",{className:t.gridItemContainer,style:{height:p},children:Object(b.jsxs)(f.a,{className:t.paper,children:[Object(b.jsx)("div",{className:t.topTab,children:Object(b.jsx)(v.a,{className:t.formControl,children:Object(b.jsx)(U.a,{value:d,onChange:function(e,t){u(e.target.value)},children:Ke.map((function(e,t){return Object(b.jsx)(K.a,{value:t,children:e.name},"top-views-sel-".concat(t))}))})})}),Ke.map((function(e,t){var i=e.component;return d===t&&Object(b.jsx)(i,{height:p,updateSelected:s,mainFileData:a,selectedMethod:n},"top-views-".concat(t))}))]})})}),Object(b.jsx)(O.a,{item:!0,xs:12,children:Object(b.jsx)("div",{className:t.gridItemContainer,style:{height:g},children:Object(b.jsxs)(f.a,{className:t.paper,children:[Object(b.jsx)("div",{className:t.topTab,children:Object(b.jsx)(v.a,{className:t.formControl,children:Object(b.jsx)(U.a,{value:m,onChange:function(e,t){x(e.target.value)},children:Ye.map((function(e,t){return Object(b.jsx)(K.a,{value:t,children:e.name},"bottom-views-sel-".concat(t))}))})})}),Ye.map((function(e,t){var i=e.component;return m===t&&Object(b.jsx)(i,{height:g,updateSelected:s,mainFileData:a,selectedMethod:n},"bottom-views-".concat(t))}))]})})})]})},qe=Object(r.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.default},paper:{color:e.palette.text.secondary,height:"100%",overflow:"scroll",scrollbarWidth:"none",display:"flex"},gridContainer:{height:"100%"},gridItemContainer:{padding:e.spacing(2),paddingTop:16,paddingBottom:16,overflow:"hidden"}}})),Qe=function(e){var t=qe(),n=e.height,a=e.mainFileData,c=i.a.useState({}),s=Object(o.a)(c,2),r=s[0],l=s[1],d=function(e,t){l({id:e,context:t})};return Object(b.jsxs)(O.a,{container:!0,spacing:0,className:t.gridContainer,children:[Object(b.jsx)(O.a,{item:!0,xs:2,children:Object(b.jsx)("div",{className:t.gridItemContainer,style:{height:n},children:Object(b.jsx)(f.a,{className:t.paper,children:Object(b.jsx)(ie,{mainFileData:a,updateSelected:d})})})}),Object(b.jsx)(O.a,{item:!0,xs:10,children:Object(b.jsx)(Ue,{updateSelected:d,selectedMethod:r,mainFileData:a,height:n})})]})},Ze=n(250),$e=n(251),et=function(){function e(t,n,a,i,c,s,o,r,l,d,u,j,h,m){Object(Ze.a)(this,e),this.methodCTMap=i,this.methodCSMap=c,this.totalRuntime=s,this.methodMeta=o,this.methodsThatCompiledMap=r,this.methodRuntimeMap=l,this.methodContextMap=d,this.methodCallMap=u,this.metaData=j,this.s_runtime=t,this.s_calls=n,this.s_contexts=a,this.boxContextCallRuns=h,this.boxContextResolutionOriginal=m;var b={},x={},p=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e};for(var g in m){b[m[g]]=g;var f="baseline"===g?"#a0a0a0":p();void 0===x[m[g]]&&(x[m[g]]=f),void 0===x[g]&&(x[g]=f)}this.boxContextResolution=b,this.colorMap=x}return Object($e.a)(e,[{key:"getContextIndex",value:function(e){return this.boxContextResolutionOriginal[e]}},{key:"getContextColor",value:function(e){return this.colorMap[e]}},{key:"getContextCallRuns",value:function(e){return this.boxContextCallRuns[e]}},{key:"resolveContextByIndex",value:function(e){return this.boxContextResolution[e]}},{key:"getSortedByRuntime",value:function(){return Object(D.a)(this.s_runtime)}},{key:"getSortedByCalls",value:function(){return Object(D.a)(this.s_calls)}},{key:"getSortedByContexts",value:function(){return Object(D.a)(this.s_contexts)}},{key:"getVersionCount",value:function(e){return this.methodContextMap[e].length}},{key:"getName",value:function(e){return this.methodMeta[e].name}},{key:"getRuns",value:function(e){return this.methodMeta[e].runs}},{key:"getRuntime",value:function(e){return this.methodRuntimeMap[e]}},{key:"getContexts",value:function(e){return Object(D.a)(this.methodContextMap[e])}},{key:"getCalledMethodIds",value:function(e){return void 0===this.methodCallMap[e]?[]:this.methodCallMap[e]}},{key:"getMetadata",value:function(){return this.metaData}},{key:"getContextRuntimes",value:function(e,t){return this.methodCSMap[e][t]}},{key:"getContextTotalRuntime",value:function(e,t){return this.methodCSMap[e][t].reduce((function(e,t){return e+t}),0)}},{key:"getBoxData",value:function(e){return Object(D.a)(this.methodsThatCompiledMap[e])}},{key:"getMethodsThatCompiled",value:function(e){return void 0===this.methodsThatCompiledMap[e]?[]:Object(D.a)(this.methodsThatCompiledMap[e])}},{key:"getContextRuns",value:function(e,t){return this.methodCTMap[e][t].runs}},{key:"getContextCompileTime",value:function(e,t){return this.methodCTMap[e][t].cmp}},{key:"getContextOptTime",value:function(e,t){return this.methodCTMap[e][t].opt}},{key:"getContextRunTime",value:function(e,t){return this.methodCTMap[e][t].run}},{key:"getContextAvgRuntimeNoComp",value:function(e,t){return(this.methodCTMap[e][t].run-(this.methodCTMap[e][t].cmp+this.methodCTMap[e][t].opt))/this.methodCTMap[e][t].runs}},{key:"getLastNAvg",value:function(e,t,n){var a=this.methodCSMap[e][t],i=Math.round(a.length*(n/100));if(i<=0)return{value:-1,lastN:i};var c=a.slice(-i);return{value:c.reduce((function(e,t){return e+t}),0)/c.length||0,lastN:i}}},{key:"isValidId",value:function(e){return void 0!==this.methodRuntimeMap[e]}}]),e}();var tt=n(252),nt=n(499),at=n(149),it=Object(tt.a)({palette:{type:"light",primary:{main:nt.a[600]},secondary:{main:at.a[500]}}}),ct=Object(tt.a)({palette:{type:"dark",primary:{main:nt.a[800]},secondary:{main:at.a[600]}}});var st=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1],c=function(){var e=Object(a.useState)(null!==localStorage.getItem("theme")?localStorage.getItem("theme"):"dark"),t=Object(o.a)(e,2),n=t[0],i=t[1],c="dark"===n;return{backgroundStyle:{backgroundColor:c?"#303030":"#fafafa"},currentTheme:c?ct:it,onchange:function(){"dark"===n?(localStorage.setItem("theme","light"),i("light")):(localStorage.setItem("theme","dark"),i("dark"))}}}(),s=Object(a.useRef)(null),r=function(e,t,n,i){var c=Object(a.useState)(0),s=Object(o.a)(c,2),r=s[0],l=s[1];return Object(a.useEffect)((function(){var a=function(){var a=t()-n;null!==e.current&&(a=t()-(e.current.clientHeight+n)),l(a)};return a(),window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[e,i]),r}(s,(function(){return window.innerHeight}),32,n);return Object(b.jsxs)(g.a,{theme:c.currentTheme,children:[!n&&Object(b.jsx)("div",{ref:s,children:Object(b.jsx)(p,{style:{margin:0},toggleTheme:c.onchange})}),Object(b.jsx)("div",{style:c.backgroundStyle,children:null!==n?Object(b.jsx)(Qe,{height:r,mainFileData:n}):Object(b.jsx)(T,{height:r,start:function(e,t){i(function(e,t){return new et(e.s_runtime,e.s_calls,e.s_contexts,e.methodCTMap,e.methodCSMap,e.totalRuntime,e.methodMeta,e.methodsThatCompiledMap,e.methodRuntimeMap,e.methodContextMap,e.methodCallMap,t,e.boxContextCallRuns,e.boxContextResolution)}(e,t))}})})]})};n(411);s.a.render(Object(b.jsx)(st,{}),document.getElementById("root"))}},[[412,1,2]]]);
//# sourceMappingURL=main.12b79fe4.chunk.js.map