import{i as j,j as u,a as x,k as A,s as v,h as c,r as f,l as N,d as R,o as F,p as w,P,co as S}from"./index-8RLJe14Q.js";const U=j(u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function L(r){return A("MuiAvatar",r)}const z=x("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),Q=z,$=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],_=r=>{const{classes:t,variant:e,colorDefault:o}=r;return w({root:["root",e,o&&"colorDefault"],img:["img"],fallback:["fallback"]},L,t)},E=v("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,t[e.variant],e.colorDefault&&t.colorDefault]}})(({theme:r,ownerState:t})=>c({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},t.variant==="rounded"&&{borderRadius:(r.vars||r).shape.borderRadius},t.variant==="square"&&{borderRadius:0},t.colorDefault&&c({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:r.palette.mode==="light"?r.palette.grey[400]:r.palette.grey[600]}))),q=v("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(r,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),T=v(U,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(r,t)=>t.fallback})({width:"75%",height:"75%"});function B({crossOrigin:r,referrerPolicy:t,src:e,srcSet:o}){const[s,n]=f.useState(!1);return f.useEffect(()=>{if(!e&&!o)return;n(!1);let i=!0;const a=new Image;return a.onload=()=>{i&&n("loaded")},a.onerror=()=>{i&&n("error")},a.crossOrigin=r,a.referrerPolicy=t,a.src=e,o&&(a.srcset=o),()=>{i=!1}},[r,t,e,o]),s}const H=f.forwardRef(function(t,e){const o=N({props:t,name:"MuiAvatar"}),{alt:s,children:n,className:i,component:a="div",imgProps:d,sizes:D,src:g,srcSet:p,variant:k="circular"}=o,I=R(o,$);let l=null;const M=B(c({},d,{src:g,srcSet:p})),y=g||p,h=y&&M!=="error",m=c({},o,{colorDefault:!h,component:a,variant:k}),b=_(m);return h?l=u.jsx(q,c({alt:s,srcSet:p,src:g,sizes:D,ownerState:m,className:b.img},d)):n!=null?l=n:y&&s?l=s[0]:l=u.jsx(T,{ownerState:m,className:b.fallback}),u.jsx(E,c({as:a,ownerState:m,className:F(b.root,i),ref:e},I,{children:l}))}),X=H;function W(r){return A("MuiCard",r)}x("MuiCard",["root"]);const Z=["className","raised"],G=r=>{const{classes:t}=r;return w({root:["root"]},W,t)},J=v(P,{name:"MuiCard",slot:"Root",overridesResolver:(r,t)=>t.root})(()=>({overflow:"hidden"})),K=f.forwardRef(function(t,e){const o=N({props:t,name:"MuiCard"}),{className:s,raised:n=!1}=o,i=R(o,Z),a=c({},o,{raised:n}),d=G(a);return u.jsx(J,c({className:F(d.root,s),elevation:n?8:void 0,ref:e,ownerState:a},i))}),Y=K;function C(){const{currentLang:{numberFormat:{code:r,currency:t}}}=S();return{code:r??"en-US",currency:t??"USD"}}function V(r){const{code:t,currency:e}=C();if(!r)return"";const o=Number(r);return new Intl.NumberFormat(t,{style:"currency",currency:e,minimumFractionDigits:0,maximumFractionDigits:2}).format(o)}function rr(r){const{code:t}=C();if(!r)return"";const e=Number(r)/100;return new Intl.NumberFormat(t,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(e)}function tr(r){const{code:t}=C();if(!r)return"";const e=Number(r);return new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:2}).format(e).replace(/[A-Z]/g,s=>s.toLowerCase())}export{X as A,Y as C,V as a,tr as b,Q as c,rr as f};
