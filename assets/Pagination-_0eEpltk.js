import{i as m,j as p,s as j,h as r,c8 as c,B as J,v as N,r as E,l as V,d as U,u as K,o as T,aw as h,p as G,c9 as Q,a as X,k as Y,q as Z}from"./index-2QzxJVRX.js";const W=m(p.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),A=m(p.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),F=m(p.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),_=m(p.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),w=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],q=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${h(o.size)}`],o.variant==="text"&&t[`text${h(o.color)}`],o.variant==="outlined"&&t[`outlined${h(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},S=a=>{const{classes:t,color:o,disabled:s,selected:v,size:b,shape:x,type:e,variant:d}=a,f={root:["root",`size${h(b)}`,d,x,o!=="standard"&&`${d}${h(o)}`,s&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[e]],icon:["icon"]};return G(f,Q,t)},aa=j("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ta=j(J,{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:N(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:N(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${c.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>r({},t.variant==="text"&&{[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${c.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:N(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:N(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:N(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:N(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${c.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),oa=j("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>r({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),sa=E.forwardRef(function(t,o){const s=V({props:t,name:"MuiPaginationItem"}),{className:v,color:b="standard",component:x,components:e={},disabled:d=!1,page:f,selected:z=!1,shape:R="circular",size:y="medium",slots:l={},type:i="page",variant:B="text"}=s,I=U(s,w),u=r({},s,{color:b,disabled:d,selected:z,shape:R,size:y,type:i,variant:B}),k=K(),g=S(u),$=(k.direction==="rtl"?{previous:l.next||e.next||_,next:l.previous||e.previous||F,last:l.first||e.first||A,first:l.last||e.last||W}:{previous:l.previous||e.previous||F,next:l.next||e.next||_,first:l.first||e.first||A,last:l.last||e.last||W})[i];return i==="start-ellipsis"||i==="end-ellipsis"?p.jsx(aa,{ref:o,ownerState:u,className:T(g.root,v),children:"…"}):p.jsxs(ta,r({ref:o,ownerState:u,component:x,disabled:d,className:T(g.root,v)},I,{children:[i==="page"&&f,$?p.jsx(oa,{as:$,ownerState:u,className:g.icon}):null]}))}),na=sa;function ia(a){return Y("MuiPagination",a)}const ea=X("MuiPagination",["root","ul","outlined","text"]),fa=ea,ra=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function la(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:v=1,disabled:b=!1,hideNextButton:x=!1,hidePrevButton:e=!1,onChange:d,page:f,showFirstButton:z=!1,showLastButton:R=!1,siblingCount:y=1}=a,l=U(a,ra),[i,B]=Z({controlled:f,default:v,name:o,state:"page"}),I=(n,P)=>{f||B(P),d&&d(n,P)},u=(n,P)=>{const H=P-n+1;return Array.from({length:H},(ba,D)=>n+D)},k=u(1,Math.min(t,s)),g=u(Math.max(s-t+1,t+1),s),L=Math.max(Math.min(i-y,s-t-y*2-1),t+2),$=Math.min(Math.max(i+y,t+y*2+2),g.length>0?g[0]-2:s-1),M=[...z?["first"]:[],...e?[]:["previous"],...k,...L>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...u(L,$),...$<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...g,...x?[]:["next"],...R?["last"]:[]],O=n=>{switch(n){case"first":return 1;case"previous":return i-1;case"next":return i+1;case"last":return s;default:return null}},C=M.map(n=>typeof n=="number"?{onClick:P=>{I(P,n)},type:"page",page:n,selected:n===i,disabled:b,"aria-current":n===i?"true":void 0}:{onClick:P=>{I(P,O(n))},type:n,page:O(n),selected:!1,disabled:b||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?i>=s:i<=1)});return r({items:C},l)}const ca=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],pa=a=>{const{classes:t,variant:o}=a;return G({root:["root",o],ul:["ul"]},ia,t)},da=j("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),ua=j("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ga(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const va=E.forwardRef(function(t,o){const s=V({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:b,color:x="standard",count:e=1,defaultPage:d=1,disabled:f=!1,getItemAriaLabel:z=ga,hideNextButton:R=!1,hidePrevButton:y=!1,renderItem:l=C=>p.jsx(na,r({},C)),shape:i="circular",showFirstButton:B=!1,showLastButton:I=!1,siblingCount:u=1,size:k="medium",variant:g="text"}=s,L=U(s,ca),{items:$}=la(r({},s,{componentName:"Pagination"})),M=r({},s,{boundaryCount:v,color:x,count:e,defaultPage:d,disabled:f,getItemAriaLabel:z,hideNextButton:R,hidePrevButton:y,renderItem:l,shape:i,showFirstButton:B,showLastButton:I,siblingCount:u,size:k,variant:g}),O=pa(M);return p.jsx(da,r({"aria-label":"pagination navigation",className:T(O.root,b),ownerState:M,ref:o},L,{children:p.jsx(ua,{className:O.ul,ownerState:M,children:$.map((C,n)=>p.jsx("li",{children:l(r({},C,{color:x,"aria-label":z(C.type,C.page,C.selected),shape:i,size:k,variant:g}))},n))})}))}),ya=va;export{ya as P,fa as p};