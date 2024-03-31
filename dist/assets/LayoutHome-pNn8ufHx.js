import{d as $,a as I,r as b,o as x,P as B,j as p,e as _,f as s,y as g,W as D,g as u,n as K,Q as h,t as o,h as T,F as O,i as G,G as k,p as N,k as E,_ as y,v as j}from"./index-EmxhuGEG.js";import{s as J}from"./inputtext.esm-tNwm8c1U.js";import{h as H}from"./home.store-fJsS5rKe.js";import"./axios.config-gXfSTYZr.js";import"./format.date--bimoUa2.js";const c=i=>(N("data-v-86955996"),i=i(),E(),i),Q={class:"home-layout-view"},W={class:"navbar is-dark is-fixed-top",role:"navigation","aria-label":"main navigation"},q={class:"navbar-brand"},X={class:"input-search"},Y=c(()=>s("span",null,null,-1)),Z=c(()=>s("span",null,null,-1)),ss=c(()=>s("span",null,null,-1)),es=[Y,Z,ss],as={class:"navbar-end"},ts=c(()=>s("i",{class:"pi pi-user"},null,-1)),os=c(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),ns=c(()=>s("i",{class:"pi pi-pencil"},null,-1)),is=c(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),ls=c(()=>s("i",{class:"pi pi-users"},null,-1)),cs=c(()=>s("span",{style:{"margin-left":"5px"}},null,-1)),rs={class:"navbar-item has-dropdown is-hoverable"},ds={class:"navbar-link"},ps=c(()=>s("i",{class:"pi pi-globe"},null,-1)),_s=c(()=>s("span",{style:{"margin-right":"5px"}},null,-1)),us={class:"navbar-dropdown"},ms=["onClick"],hs=$({__name:"Navbar",setup(i){const{getAll:d,setStateFilter:a}=H(),l=I(),n=async()=>{l.push({name:"sign.up"}),m.value=!1},v=async()=>{l.push({name:"login"}),m.value=!1},S=async()=>{const e=localStorage.getItem("roles");if(e){const t=JSON.parse(e);t.includes(k.SUPER_ADMIN)||t.includes(k.ADMIN)||t.includes(k.USER)?l.push({name:"customer"}):l.push({name:"owner.house"})}m.value=!1},M=async()=>{await l.push({name:"home"}),window.location.reload()},m=b(!1),V=async()=>{m.value=!m.value},w=b(),C=b(),z=b([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vi"},{name:"中国人",code:"lk"}]),A=async e=>{await localStorage.setItem("locale",e),window.location.reload()},F=async e=>{switch(e){case"en":return"English";case"la":return"ລາວ";case"th":return"ไทย";case"vi":return"Tiếng Việt";case"lk":return"中国人";default:return"English"}};x(async()=>{const e=localStorage.getItem("locale")||"English",t=await F(e);C.value=t,w.value=localStorage.getItem("token")||""});const L=B({get:()=>a.filter.search||"",set:e=>{a.filter&&(a.filter.search=e)}});async function R(e){var r;const t=e.target.name;e.target.value===""&&(t==="search"&&((r=a.filter)==null?void 0:r.search)!==void 0&&(a.filter.search=""),await d())}const P=async()=>{await d()};return(e,t)=>(p(),_("div",Q,[s("nav",W,[s("div",q,[s("a",{class:"navbar-item",onClick:M},"UK LAO"),s("div",X,[g(u(J),{modelValue:L.value,"onUpdate:modelValue":t[0]||(t[0]=r=>L.value=r),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"search",onKeyup:D(P,["enter"]),onInput:R},null,8,["modelValue","placeholder"])]),s("div",{class:"navbar-burger",onClick:V,"data-target":"navMenu"},es)]),s("div",{class:K(["navbar-menu",{"is-active":m.value}])},[s("div",as,[w.value?(p(),_("a",{key:0,onClick:t[1]||(t[1]=r=>S()),class:"navbar-item brackets"},[ts,os,h(" "+o(e.$t("messages.my_account")),1)])):T("",!0),s("a",{class:"navbar-item brackets",onClick:t[2]||(t[2]=r=>n())},[ns,is,h(" "+o(e.$t("messages.sign_up")),1)]),w.value?T("",!0):(p(),_("a",{key:1,class:"navbar-item brackets",onClick:t[3]||(t[3]=r=>v())},[ls,cs,h(" "+o(e.$t("messages.sign_in")),1)])),s("div",rs,[s("a",ds,[ps,_s,h(" "+o(C.value),1)]),s("div",us,[(p(!0),_(O,null,G(z.value,(r,U)=>(p(),_("a",{class:"navbar-item",key:U,onClick:Gs=>A(r.code)},o(r.name),9,ms))),128))])])])],2)])]))}}),vs=y(hs,[["__scopeId","data-v-86955996"]]),f=i=>(N("data-v-6bf28755"),i=i(),E(),i),gs={class:"footer"},fs={class:"columns is-12"},bs={class:"column is-4 is-mobile-12"},$s={class:"title"},ys=["innerHTML"],ws={class:"column is-5 is-mobile-12"},ks={class:"title"},Ss=["innerHTML"],Cs={class:"column is-3 is-mobile-12"},Ls={class:"title"},Ts=f(()=>s("i",{class:"pi pi-inbox"},null,-1)),Is={style:{"margin-top":"10px"}},xs=f(()=>s("i",{class:"pi pi-whatsapp"},null,-1)),Ns=f(()=>s("i",{class:"pi pi-facebook",style:{"font-size":"30px"}},null,-1)),Es=[Ns],Hs={style:{"margin-top":"20px","font-size":"20px","font-weight":"bold"}},Ms=f(()=>s("br",null,null,-1)),Vs=["innerHTML"],zs=f(()=>s("br",null,null,-1)),As=$({__name:"Footer",setup(i){const{getAllData:d,footer:a}=H(),l=n=>{window.open(n,"_blank")};return x(async()=>{await d()}),(n,v)=>(p(),_("div",gs,[s("div",fs,[s("div",bs,[s("p",$s,o(n.$t("footer.shop_on")),1),s("div",{innerHTML:u(a).data.props.shop_on,style:{"font-size":"18px","line-height":"2"}},null,8,ys)]),s("div",ws,[s("p",ks,o(n.$t("footer.payment_information")),1),s("div",{innerHTML:u(a).data.props.payment_information,style:{"font-size":"18px","line-height":"2"}},null,8,Ss)]),s("div",Cs,[s("p",Ls,o(n.$t("footer.contact_us")),1),s("p",null,[Ts,h(" "+o(u(a).data.props.email),1)]),s("p",Is,[xs,h(" "+o(u(a).data.props.whatsapp),1)]),s("p",{style:{"margin-top":"20px"},class:"facebook",onClick:v[0]||(v[0]=S=>l(u(a).data.props.facebook))},Es),s("p",Hs,o(n.$t("footer.customer_service")),1),Ms,s("div",{innerHTML:u(a).data.props.customer_service,style:{"font-size":"18px","line-height":"2"}},null,8,Vs)])]),zs]))}}),Fs=y(As,[["__scopeId","data-v-6bf28755"]]),Rs={class:"navbar is-light navbar1",role:"navigation","aria-label":"main navigation"},Ps={id:"navbarBasicExample",class:"navbar-menu"},Us={class:"navbar-start"},Bs=$({__name:"Navbar-HomePage",setup(i){const d=I(),a=async()=>{await d.push({name:"home"}),window.location.reload()},l=async()=>{await d.push({name:"about.us"})};return(n,v)=>(p(),_("nav",Rs,[s("div",Ps,[s("div",Us,[s("a",{class:"navbar-item",style:{"font-size":"20px","font-weight":"bold"},onClick:a},o(n.$t("messages.home")),1),s("a",{class:"navbar-item",onClick:a},o(n.$t("messages.real_estate")),1),s("a",{class:"navbar-item",onClick:l},o(n.$t("messages.about")),1)])])]))}}),Ds=y(Bs,[["__scopeId","data-v-bc17032a"]]),Ks={class:"home-view"},Os=$({__name:"LayoutHome",setup(i){return(d,a)=>{const l=j("router-view");return p(),_("div",null,[g(vs),g(Ds,{style:{"margin-top":"52px"}}),s("div",Ks,[g(l)]),g(Fs)])}}}),Xs=y(Os,[["__scopeId","data-v-5a89a7ba"]]);export{Xs as default};
