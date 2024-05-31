import{s as k,B,bv as H,h as p,bH as h,bI as u,v,bJ as M,r as g,l as U,d as q,bK as O,x as W,w as J,j as R,o as S,p as Q,bL as Y,bG as y,bM as z,bN as E,bO as V,bC as X,bP as Z,bQ as j,bR as ee,bE as re}from"./index-8RLJe14Q.js";import{l as A}from"./Grid2-05rHB71y.js";import{i as G,a as te,b as ae}from"./styles-03wp4ERq.js";const se=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ne=(e,r)=>{const{ownerState:t}=e;return[r.root,t.dense&&r.dense,t.divider&&r.divider,!t.disableGutters&&r.gutters]},ie=e=>{const{disabled:r,dense:t,divider:a,disableGutters:s,selected:o,classes:n}=e,l=Q({root:["root",t&&"dense",r&&"disabled",!s&&"gutters",a&&"divider",o&&"selected"]},Y,n);return p({},n,l)},oe=k(B,{shouldForwardProp:e=>H(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ne})(({theme:e,ownerState:r})=>p({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:v(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:v(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${u.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:v(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:v(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${A.root}`]:{marginTop:0,marginBottom:0},[`& .${A.inset}`]:{paddingLeft:36},[`& .${h.root}`]:{minWidth:36}},!r.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&p({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${h.root} svg`]:{fontSize:"1.25rem"}}))),le=g.forwardRef(function(r,t){const a=U({props:r,name:"MuiMenuItem"}),{autoFocus:s=!1,component:o="li",dense:n=!1,divider:i=!1,disableGutters:l=!1,focusVisibleClassName:c,role:f="menuitem",tabIndex:d,className:b}=a,K=q(a,se),I=g.useContext(O),P=g.useMemo(()=>({dense:n||I.dense||!1,disableGutters:l}),[I.dense,n,l]),m=g.useRef(null);W(()=>{s&&m.current&&m.current.focus()},[s]);const N=p({},a,{dense:P.dense,divider:i,disableGutters:l}),_=ie(a),F=J(m,t);let x;return a.disabled||(x=d!==void 0?d:-1),R.jsx(O.Provider,{value:P,children:R.jsx(oe,p({ref:F,role:f,tabIndex:x,component:o,focusVisibleClassName:S(_.focusVisible,c),className:S(_.root,b)},K,{ownerState:N,classes:_}))})}),kr=le;var ce=y,de=G,ue=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;function fe(e,r){if(ce(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||de(e)?!0:pe.test(e)||!ue.test(e)||r!=null&&e in Object(r)}var C=fe,be=te;function ve(e){return e==null?"":be(e)}var ge=ve,ye=y,$e=C,me=ae,_e=ge;function Ce(e,r){return ye(e)?e:$e(e,r)?[e]:me(_e(e))}var L=Ce,Ie=G,Pe=1/0;function xe(e){if(typeof e=="string"||Ie(e))return e;var r=e+"";return r=="0"&&1/e==-Pe?"-0":r}var $=xe,he=L,Me=$;function Oe(e,r){r=he(r,e);for(var t=0,a=r.length;e!=null&&t<a;)e=e[Me(r[t++])];return t&&t==a?e:void 0}var T=Oe,Re=z,Se=E,Ae=1,Ee=2;function Ge(e,r,t,a){var s=t.length,o=s,n=!a;if(e==null)return!o;for(e=Object(e);s--;){var i=t[s];if(n&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++s<o;){i=t[s];var l=i[0],c=e[l],f=i[1];if(n&&i[2]){if(c===void 0&&!(l in e))return!1}else{var d=new Re;if(a)var b=a(c,f,l,e,r,d);if(!(b===void 0?Se(f,c,Ae|Ee,a,d):b))return!1}}return!0}var Le=Ge,Te=V;function we(e){return e===e&&!Te(e)}var w=we,De=w,Ke=X;function Ne(e){for(var r=Ke(e),t=r.length;t--;){var a=r[t],s=e[a];r[t]=[a,s,De(s)]}return r}var Fe=Ne;function ke(e,r){return function(t){return t==null?!1:t[e]===r&&(r!==void 0||e in Object(t))}}var D=ke,Be=Le,He=Fe,Ue=D;function qe(e){var r=He(e);return r.length==1&&r[0][2]?Ue(r[0][0],r[0][1]):function(t){return t===e||Be(t,e,r)}}var We=qe,Je=T;function Qe(e,r,t){var a=e==null?void 0:Je(e,r);return a===void 0?t:a}var Ye=Qe;function ze(e,r){return e!=null&&r in Object(e)}var Ve=ze,Xe=L,Ze=Z,je=y,er=j,rr=ee,tr=$;function ar(e,r,t){r=Xe(r,e);for(var a=-1,s=r.length,o=!1;++a<s;){var n=tr(r[a]);if(!(o=e!=null&&t(e,n)))break;e=e[n]}return o||++a!=s?o:(s=e==null?0:e.length,!!s&&rr(s)&&er(n,s)&&(je(e)||Ze(e)))}var sr=ar,nr=Ve,ir=sr;function or(e,r){return e!=null&&ir(e,r,nr)}var lr=or,cr=E,dr=Ye,ur=lr,pr=C,fr=w,br=D,vr=$,gr=1,yr=2;function $r(e,r){return pr(e)&&fr(r)?br(vr(e),r):function(t){var a=dr(t,e);return a===void 0&&a===r?ur(t,e):cr(r,a,gr|yr)}}var mr=$r;function _r(e){return function(r){return r==null?void 0:r[e]}}var Cr=_r,Ir=T;function Pr(e){return function(r){return Ir(r,e)}}var xr=Pr,hr=Cr,Mr=xr,Or=C,Rr=$;function Sr(e){return Or(e)?hr(Rr(e)):Mr(e)}var Ar=Sr,Er=We,Gr=mr,Lr=re,Tr=y,wr=Ar;function Dr(e){return typeof e=="function"?e:e==null?Lr:typeof e=="object"?Tr(e)?Gr(e[0],e[1]):Er(e):wr(e)}var Br=Dr;export{kr as M,Br as _,T as a};
