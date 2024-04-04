import{d as C,a as R,H as A,r as f,o as F,P as J,j as c,e as r,f as s,y as v,W as Q,g as m,Q as b,t,h as I,n as w,F as W,i as Y,E as q,J as X,T as Z,G as N,p as P,k as U,_ as S,v as ss}from"./index-bgL8X-Vz.js";import{s as es}from"./inputtext.esm-zGjb6H1F.js";import{h as D}from"./home.store-dsKLJCra.js";import{s as as}from"./divider.esm-HeB-4usy.js";import{s as ts}from"./dropdown.esm-kBrI3kap.js";import"./axios.config-gXfSTYZr.js";import"./format.date--bimoUa2.js";import"./overlayeventbus.esm-Dh5SKjDP.js";const u=i=>(P("data-v-e7274b7b"),i=i(),U(),i),os={class:"home-layout-view"},ns={class:"navbar is-dark is-fixed-top",role:"navigation","aria-label":"main navigation"},ls={class:"navbar-brand"},is={class:"input-search"},cs=u(()=>s("span",null,null,-1)),rs=u(()=>s("span",null,null,-1)),us=u(()=>s("span",null,null,-1)),ds=[cs,rs,us],ps={class:"navbar-menu"},ms={class:"navbar-end"},_s=u(()=>s("i",{class:"pi pi-user"},null,-1)),vs=u(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),hs=u(()=>s("i",{class:"pi pi-pencil"},null,-1)),gs=u(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),bs=u(()=>s("i",{class:"pi pi-users"},null,-1)),fs=u(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),ys={class:"navbar-item has-dropdown is-hoverable"},$s={class:"navbar-link"},ks=u(()=>s("i",{class:"pi pi-globe"},null,-1)),ws=u(()=>s("span",{style:{"margin-right":"5px"}},null,-1)),Cs={class:"navbar-dropdown"},Ss=["onClick"],Ts={key:0,class:"mobile-navbar"},Ls={class:"mobile-navbar-container"},Is={class:"mobile-navbar-header"},Ns={key:0},Hs={key:1},Vs={class:"mobile-navbar-list"},xs={style:{"margin-top":"15px"}},Es="https://lab-108-bucket.s3.ap-southeast-1.amazonaws.com/assistant-logo/profile-logo.jpeg",Ms=C({__name:"Navbar",setup(i){const{getAll:_,setStateFilter:o}=D(),n=R(),d=A(),h=async()=>{await n.push({name:"about.us"}),g.value=!1},p=async()=>{n.push({name:"sign.up"}),g.value=!1},T=async()=>{n.push({name:"sign.in"}),g.value=!1},B=async()=>{const e=localStorage.getItem("roles");if(e){const a=JSON.parse(e);a.includes(N.SUPER_ADMIN)||a.includes(N.ADMIN)||a.includes(N.USER)?n.push({name:"customer"}):n.push({name:"owner.house"})}g.value=!1},L=async()=>{await n.push({name:"home"}),window.location.reload()},g=f(!1),H=async()=>{g.value=!g.value},$=f(),V=f(),k=f(),x=f([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vi"},{name:"中国人",code:"lk"}]),E=async e=>{await localStorage.setItem("locale",e),window.location.reload()},O=async e=>{switch(e){case"en":return"English";case"la":return"ລາວ";case"th":return"ไทย";case"vi":return"Tiếng Việt";case"lk":return"中国人";default:return"English"}};F(async()=>{const e=localStorage.getItem("locale")||"en",a=await O(e);V.value=a,k.value=e,$.value=localStorage.getItem("token")||""});const M=J({get:()=>o.filter.search||"",set:e=>{o.filter&&(o.filter.search=e)}});async function K(e){var l;const a=e.target.name;e.target.value===""&&(a==="search"&&((l=o.filter)==null?void 0:l.search)!==void 0&&(o.filter.search=""),await _())}const j=async()=>{await _()},z=e=>d.name===e;return(e,a)=>(c(),r("div",os,[s("nav",ns,[s("div",ls,[s("a",{class:"navbar-item",onClick:L},"UK LAO"),s("div",is,[v(m(es),{modelValue:M.value,"onUpdate:modelValue":a[0]||(a[0]=l=>M.value=l),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"search",onKeyup:Q(j,["enter"]),onInput:K},null,8,["modelValue","placeholder"])]),s("div",{class:"navbar-burger",onClick:H,"data-target":"navMenu"},ds)]),s("div",ps,[s("div",ms,[$.value?(c(),r("a",{key:0,onClick:a[1]||(a[1]=l=>B()),class:"navbar-item brackets"},[_s,vs,b(" "+t(e.$t("messages.my_account")),1)])):I("",!0),s("a",{class:w(["navbar-item brackets",{"is-active-tab":z("sign.up")}]),onClick:a[2]||(a[2]=l=>p())},[hs,gs,b(" "+t(e.$t("messages.sign_up")),1)],2),$.value?I("",!0):(c(),r("a",{key:1,class:w(["navbar-item brackets",{"is-active-tab":z("sign.in")}]),onClick:a[3]||(a[3]=l=>T())},[bs,fs,b(" "+t(e.$t("messages.sign_in")),1)],2)),s("div",ys,[s("a",$s,[ks,ws,b(" "+t(V.value),1)]),s("div",Cs,[(c(!0),r(W,null,Y(x.value,(l,G)=>(c(),r("a",{class:"navbar-item",key:G,onClick:ue=>E(l.code)},t(l.name),9,Ss))),128))])])])])]),v(Z,{name:"open"},{default:q(()=>[g.value?(c(),r("div",Ts,[s("div",{class:"mobile-navbar-bg",onClick:H}),s("div",Ls,[s("div",Is,[$.value?(c(),r("a",Hs,"My Profile")):(c(),r("span",Ns,"You haven't login yet")),s("div",{class:"user",style:X({"background-image":"url("+Es+")"})},null,4)]),s("ul",Vs,[s("li",null,[v(m(ts),{modelValue:k.value,"onUpdate:modelValue":a[4]||(a[4]=l=>k.value=l),options:x.value,optionLabel:"name",class:"w-full md:w-14rem",style:{border:"none",background:"#3736362f"},optionValue:"code",highlightOnSelect:!0,onChange:a[5]||(a[5]=l=>E(k.value))},null,8,["modelValue","options"])]),v(m(as),{style:{"margin-top":"15px"}}),s("li",xs,[s("a",{class:"navbar-item",onClick:L},t(e.$t("messages.home")),1)]),s("li",null,[s("a",{class:"navbar-item",onClick:L},t(e.$t("messages.real_estate")),1)]),s("li",null,[s("a",{class:"navbar-item",onClick:h},t(e.$t("messages.about")),1)]),s("li",null,[s("a",{class:"navbar-item",onClick:p},t(e.$t("messages.sign_up")),1)]),s("li",null,[s("a",{class:"navbar-item",onClick:T},t(e.$t("messages.sign_in")),1)])])])])):I("",!0)]),_:1})]))}}),zs=S(Ms,[["__scopeId","data-v-e7274b7b"]]),y=i=>(P("data-v-6bf28755"),i=i(),U(),i),Rs={class:"footer"},As={class:"columns is-12"},Fs={class:"column is-4 is-mobile-12"},Ps={class:"title"},Us=["innerHTML"],Ds={class:"column is-5 is-mobile-12"},Bs={class:"title"},Os=["innerHTML"],Ks={class:"column is-3 is-mobile-12"},js={class:"title"},Gs=y(()=>s("i",{class:"pi pi-inbox"},null,-1)),Js={style:{"margin-top":"10px"}},Qs=y(()=>s("i",{class:"pi pi-whatsapp"},null,-1)),Ws=y(()=>s("i",{class:"pi pi-facebook",style:{"font-size":"30px"}},null,-1)),Ys=[Ws],qs={style:{"margin-top":"20px","font-size":"20px","font-weight":"bold"}},Xs=y(()=>s("br",null,null,-1)),Zs=["innerHTML"],se=y(()=>s("br",null,null,-1)),ee=C({__name:"Footer",setup(i){const{getAllData:_,footer:o}=D(),n=d=>{window.open(d,"_blank")};return F(async()=>{await _()}),(d,h)=>(c(),r("div",Rs,[s("div",As,[s("div",Fs,[s("p",Ps,t(d.$t("footer.shop_on")),1),s("div",{innerHTML:m(o).data.props.shop_on,style:{"font-size":"18px","line-height":"2"}},null,8,Us)]),s("div",Ds,[s("p",Bs,t(d.$t("footer.payment_information")),1),s("div",{innerHTML:m(o).data.props.payment_information,style:{"font-size":"18px","line-height":"2"}},null,8,Os)]),s("div",Ks,[s("p",js,t(d.$t("footer.contact_us")),1),s("p",null,[Gs,b(" "+t(m(o).data.props.email),1)]),s("p",Js,[Qs,b(" "+t(m(o).data.props.whatsapp),1)]),s("p",{style:{"margin-top":"20px"},class:"facebook",onClick:h[0]||(h[0]=p=>n(m(o).data.props.facebook))},Ys),s("p",qs,t(d.$t("footer.customer_service")),1),Xs,s("div",{innerHTML:m(o).data.props.customer_service,style:{"font-size":"18px","line-height":"2"}},null,8,Zs)])]),se]))}}),ae=S(ee,[["__scopeId","data-v-6bf28755"]]),te={class:"navbar is-light navbar1",role:"navigation","aria-label":"main navigation"},oe={id:"navbarBasicExample",class:"navbar-menu"},ne={class:"navbar-start"},le=C({__name:"Navbar-HomePage",setup(i){const _=R(),o=A(),n=async()=>{await _.push({name:"home"}),window.location.reload()},d=async()=>{await _.push({name:"about.us"})},h=p=>o.name===p;return(p,T)=>(c(),r("nav",te,[s("div",oe,[s("div",ne,[s("a",{class:"navbar-item",style:{"font-size":"20px","font-weight":"bold"},onClick:n},t(p.$t("messages.home")),1),s("a",{class:w(["navbar-item",{"is-active-tab":h("home")}]),onClick:n},t(p.$t("messages.real_estate")),3),s("a",{class:w(["navbar-item",{"is-active-tab":h("about.us")}]),onClick:d},t(p.$t("messages.about")),3)])])]))}}),ie=S(le,[["__scopeId","data-v-e04720ba"]]),ce={class:"home-view"},re=C({__name:"LayoutHome",setup(i){return(_,o)=>{const n=ss("router-view");return c(),r("div",null,[v(zs),v(ie,{style:{"margin-top":"52px"}}),s("div",ce,[v(n)]),v(ae)])}}}),fe=S(re,[["__scopeId","data-v-5a89a7ba"]]);export{fe as default};
