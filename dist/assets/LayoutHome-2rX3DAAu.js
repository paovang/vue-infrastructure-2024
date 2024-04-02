import{d as S,a as z,H as R,r as f,o as A,P as G,j as c,e as r,f as s,y as v,W as J,g as p,Q as b,t,h as L,n as w,F as Q,i as W,E as Y,J as q,T as X,G as T,p as F,k as P,_ as C,v as Z}from"./index-ELpKldId.js";import{s as ss}from"./inputtext.esm-Ao4Vw9Da.js";import{h as U}from"./home.store-NsMWcWA_.js";import{s as es}from"./divider.esm-Quyk5Ljd.js";import{s as as}from"./dropdown.esm-3a8JB9Zh.js";import"./axios.config-gXfSTYZr.js";import"./format.date--bimoUa2.js";import"./overlayeventbus.esm-A7lprXZR.js";const d=l=>(F("data-v-c6233bd3"),l=l(),P(),l),ts={class:"home-layout-view"},os={class:"navbar is-dark is-fixed-top",role:"navigation","aria-label":"main navigation"},ns={class:"navbar-brand"},is={class:"input-search"},ls=d(()=>s("span",null,null,-1)),cs=d(()=>s("span",null,null,-1)),rs=d(()=>s("span",null,null,-1)),ds=[ls,cs,rs],us={class:"navbar-menu"},ps={class:"navbar-end"},_s=d(()=>s("i",{class:"pi pi-user"},null,-1)),ms=d(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),vs=d(()=>s("i",{class:"pi pi-pencil"},null,-1)),hs=d(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),gs=d(()=>s("i",{class:"pi pi-users"},null,-1)),bs=d(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),fs={class:"navbar-item has-dropdown is-hoverable"},ys={class:"navbar-link"},$s=d(()=>s("i",{class:"pi pi-globe"},null,-1)),ks=d(()=>s("span",{style:{"margin-right":"5px"}},null,-1)),ws={class:"navbar-dropdown"},Ss=["onClick"],Cs={key:0,class:"mobile-navbar"},Ls={class:"mobile-navbar-container"},Ts={class:"mobile-navbar-header"},Is={key:0},Ns={key:1},Hs={class:"mobile-navbar-list"},Vs={style:{"margin-top":"15px"}},xs={class:"navbar-item"},Es={class:"navbar-item"},Ms={class:"navbar-item"},zs={class:"navbar-item"},Rs={class:"navbar-item"},As="https://lab-108-bucket.s3.ap-southeast-1.amazonaws.com/assistant-logo/profile-logo.jpeg",Fs=S({__name:"Navbar",setup(l){const{getAll:_,setStateFilter:o}=U(),i=z(),u=R(),h=async()=>{i.push({name:"sign.up"}),g.value=!1},m=async()=>{i.push({name:"login"}),g.value=!1},I=async()=>{const e=localStorage.getItem("roles");if(e){const a=JSON.parse(e);a.includes(T.SUPER_ADMIN)||a.includes(T.ADMIN)||a.includes(T.USER)?i.push({name:"customer"}):i.push({name:"owner.house"})}g.value=!1},D=async()=>{await i.push({name:"home"}),window.location.reload()},g=f(!1),N=async()=>{g.value=!g.value},$=f(),H=f(),k=f(),V=f([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vi"},{name:"中国人",code:"lk"}]),x=async e=>{await localStorage.setItem("locale",e),window.location.reload()},B=async e=>{switch(e){case"en":return"English";case"la":return"ລາວ";case"th":return"ไทย";case"vi":return"Tiếng Việt";case"lk":return"中国人";default:return"English"}};A(async()=>{const e=localStorage.getItem("locale")||"en",a=await B(e);H.value=a,k.value=e,$.value=localStorage.getItem("token")||""});const E=G({get:()=>o.filter.search||"",set:e=>{o.filter&&(o.filter.search=e)}});async function O(e){var n;const a=e.target.name;e.target.value===""&&(a==="search"&&((n=o.filter)==null?void 0:n.search)!==void 0&&(o.filter.search=""),await _())}const K=async()=>{await _()},M=e=>u.name===e;return(e,a)=>(c(),r("div",ts,[s("nav",os,[s("div",ns,[s("a",{class:"navbar-item",onClick:D},"UK LAO"),s("div",is,[v(p(ss),{modelValue:E.value,"onUpdate:modelValue":a[0]||(a[0]=n=>E.value=n),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"search",onKeyup:J(K,["enter"]),onInput:O},null,8,["modelValue","placeholder"])]),s("div",{class:"navbar-burger",onClick:N,"data-target":"navMenu"},ds)]),s("div",us,[s("div",ps,[$.value?(c(),r("a",{key:0,onClick:a[1]||(a[1]=n=>I()),class:"navbar-item brackets"},[_s,ms,b(" "+t(e.$t("messages.my_account")),1)])):L("",!0),s("a",{class:w(["navbar-item brackets",{"is-active-tab":M("sign.up")}]),onClick:a[2]||(a[2]=n=>h())},[vs,hs,b(" "+t(e.$t("messages.sign_up")),1)],2),$.value?L("",!0):(c(),r("a",{key:1,class:w(["navbar-item brackets",{"is-active-tab":M("login")}]),onClick:a[3]||(a[3]=n=>m())},[gs,bs,b(" "+t(e.$t("messages.sign_in")),1)],2)),s("div",fs,[s("a",ys,[$s,ks,b(" "+t(H.value),1)]),s("div",ws,[(c(!0),r(Q,null,W(V.value,(n,j)=>(c(),r("a",{class:"navbar-item",key:j,onClick:me=>x(n.code)},t(n.name),9,Ss))),128))])])])])]),v(X,{name:"open"},{default:Y(()=>[g.value?(c(),r("div",Cs,[s("div",{class:"mobile-navbar-bg",onClick:N}),s("div",Ls,[s("div",Ts,[$.value?(c(),r("a",Ns,"My Profile")):(c(),r("span",Is,"You haven't login yet")),s("div",{class:"user",style:q({"background-image":"url("+As+")"})},null,4)]),s("ul",Hs,[s("li",null,[v(p(as),{modelValue:k.value,"onUpdate:modelValue":a[4]||(a[4]=n=>k.value=n),options:V.value,optionLabel:"name",class:"w-full md:w-14rem",style:{border:"none",background:"#3736362f"},optionValue:"code",highlightOnSelect:!0,onChange:a[5]||(a[5]=n=>x(k.value))},null,8,["modelValue","options"])]),v(p(es),{style:{"margin-top":"15px"}}),s("li",Vs,[s("a",xs,t(e.$t("messages.home")),1)]),s("li",null,[s("a",Es,t(e.$t("messages.real_estate")),1)]),s("li",null,[s("a",Ms,t(e.$t("messages.about")),1)]),s("li",null,[s("a",zs,t(e.$t("messages.sign_up")),1)]),s("li",null,[s("a",Rs,t(e.$t("messages.sign_in")),1)])])])])):L("",!0)]),_:1})]))}}),Ps=C(Fs,[["__scopeId","data-v-c6233bd3"]]),y=l=>(F("data-v-6bf28755"),l=l(),P(),l),Us={class:"footer"},Ds={class:"columns is-12"},Bs={class:"column is-4 is-mobile-12"},Os={class:"title"},Ks=["innerHTML"],js={class:"column is-5 is-mobile-12"},Gs={class:"title"},Js=["innerHTML"],Qs={class:"column is-3 is-mobile-12"},Ws={class:"title"},Ys=y(()=>s("i",{class:"pi pi-inbox"},null,-1)),qs={style:{"margin-top":"10px"}},Xs=y(()=>s("i",{class:"pi pi-whatsapp"},null,-1)),Zs=y(()=>s("i",{class:"pi pi-facebook",style:{"font-size":"30px"}},null,-1)),se=[Zs],ee={style:{"margin-top":"20px","font-size":"20px","font-weight":"bold"}},ae=y(()=>s("br",null,null,-1)),te=["innerHTML"],oe=y(()=>s("br",null,null,-1)),ne=S({__name:"Footer",setup(l){const{getAllData:_,footer:o}=U(),i=u=>{window.open(u,"_blank")};return A(async()=>{await _()}),(u,h)=>(c(),r("div",Us,[s("div",Ds,[s("div",Bs,[s("p",Os,t(u.$t("footer.shop_on")),1),s("div",{innerHTML:p(o).data.props.shop_on,style:{"font-size":"18px","line-height":"2"}},null,8,Ks)]),s("div",js,[s("p",Gs,t(u.$t("footer.payment_information")),1),s("div",{innerHTML:p(o).data.props.payment_information,style:{"font-size":"18px","line-height":"2"}},null,8,Js)]),s("div",Qs,[s("p",Ws,t(u.$t("footer.contact_us")),1),s("p",null,[Ys,b(" "+t(p(o).data.props.email),1)]),s("p",qs,[Xs,b(" "+t(p(o).data.props.whatsapp),1)]),s("p",{style:{"margin-top":"20px"},class:"facebook",onClick:h[0]||(h[0]=m=>i(p(o).data.props.facebook))},se),s("p",ee,t(u.$t("footer.customer_service")),1),ae,s("div",{innerHTML:p(o).data.props.customer_service,style:{"font-size":"18px","line-height":"2"}},null,8,te)])]),oe]))}}),ie=C(ne,[["__scopeId","data-v-6bf28755"]]),le={class:"navbar is-light navbar1",role:"navigation","aria-label":"main navigation"},ce={id:"navbarBasicExample",class:"navbar-menu"},re={class:"navbar-start"},de=S({__name:"Navbar-HomePage",setup(l){const _=z(),o=R(),i=async()=>{await _.push({name:"home"}),window.location.reload()},u=async()=>{await _.push({name:"about.us"})},h=m=>o.name===m;return(m,I)=>(c(),r("nav",le,[s("div",ce,[s("div",re,[s("a",{class:"navbar-item",style:{"font-size":"20px","font-weight":"bold"},onClick:i},t(m.$t("messages.home")),1),s("a",{class:w(["navbar-item",{"is-active-tab":h("home")}]),onClick:i},t(m.$t("messages.real_estate")),3),s("a",{class:w(["navbar-item",{"is-active-tab":h("about.us")}]),onClick:u},t(m.$t("messages.about")),3)])])]))}}),ue=C(de,[["__scopeId","data-v-44ce0e8c"]]),pe={class:"home-view"},_e=S({__name:"LayoutHome",setup(l){return(_,o)=>{const i=Z("router-view");return c(),r("div",null,[v(Ps),v(ue,{style:{"margin-top":"52px"}}),s("div",pe,[v(i)]),v(ie)])}}}),we=C(_e,[["__scopeId","data-v-5a89a7ba"]]);export{we as default};
