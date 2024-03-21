import{d as Y,u as te,a as ce,G as r,b,r as j,c as l,e as i,f as y,w as C,n as w,t as A,g as v,F as P,h as G,o,p as ne,i as ie,_ as H,B as re,s as J,m as u,j as O,k as K,l as F,q as $,v as k,Z,D as V,x as de,R as ue,y as pe,z as me,A as M,T as fe,C as U,E as be,H as he,I as ve,J as X,S as ye}from"./index-HCy8wx5B.js";import{p as ge}from"./province.store-nJz8pF8K.js";import{r as ke}from"./real-estate-service.store-9tq6wurQ.js";import{d as _e}from"./district.store-jyM5dc9P.js";import{c as Se}from"./country.store-nF4ECNN_.js";import{s as Ee}from"./index.esm-7UwoIJxz.js";import{u as we}from"./auth.store-f91o1-vw.js";import{s as Re}from"./dropdown.esm-Ch0uEGHS.js";import{s as Ie}from"./progressspinner.esm-ao5wWF5w.js";import"./axios.config--CckdG2z.js";import"./overlayeventbus.esm-IJt3ossM.js";const N=e=>(ne("data-v-6160f5f0"),e=e(),ie(),e),xe={class:"shadow-1 h-screen fixed z-2 surface-overlay"},Ce={class:"flex flex-column h-full white-space-nowrap"},Ae={class:"flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"},Oe=N(()=>i("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"38px"}},null,-1)),Ne=N(()=>i("br",null,null,-1)),De={class:"overflow-y-auto"},Le={class:"list-none p-0 m-0 overflow-hidden"},Ue={key:0},Me=N(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),Pe={class:"font-medium"},Be={key:1},$e=N(()=>i("i",{class:"pi pi-users mr-2"},null,-1)),Te={class:"font-medium"},We={key:2},Ve=N(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),je={class:"font-medium"},Ke={class:"list-none p-0 m-0 overflow-hidden"},Fe={class:"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"},Ye={class:"font-medium"},ze=N(()=>i("i",{class:"pi pi-chevron-down ml-auto"},null,-1)),Ze=["onClick"],Ge=N(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),He={class:"font-medium"},Je=Y({__name:"AppSidebar",setup(e){const{t}=te(),{setStateFilter:n}=_e(),{setStateFilter:a}=ge(),{setStateFilter:c}=Se(),{setStateFilter:s}=ke(),f=ce(),R=[{key:"1",label:t("sidebar.settings"),icon:"pi pi-cog",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.country"),name:"admin-country",icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.COUNTRY.VIEW},{key:"2",label:t("sidebar.province"),name:"admin-province",icon:"pi pi-chart-line",color:"text-red-500",to:"province",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.PROVINCE.VIEW},{key:"3",label:t("sidebar.district"),name:"admin-district",icon:"pi pi-chart-line",color:"text-red-500",to:"district",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.DISTRICT.VIEW},{key:"5",label:t("sidebar.service"),name:"admin-service-charge",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.services",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.SERVICE_CHARGE.VIEW},{key:"6",label:t("sidebar.user"),name:"admin-user",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.user",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.ADMIN_USER.VIEW},{key:"7",label:t("sidebar.house"),name:"owner-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.house",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:b.REAL_ESTATE.VIEW},{key:"8",label:t("sidebar.payment_service"),name:"owner-payment-service",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.payment.service",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:b.PAYMENT_REAL_ESTATE.VIEW},{key:"9",label:t("sidebar.appointment"),name:"owner-appointment",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.appointment",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:b.APPOINTMENT.VIEW},{key:"10",label:t("sidebar.rent_buy"),name:"owner-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.rent.buy",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:b.RENT_BUY.VIEW},{key:"11",label:t("sidebar.user"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.user",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:b.OWNER_USER.VIEW},{key:"12",label:t("sidebar.real_estate_type"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.type",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.REAL_ESTATE_TYPE.VIEW},{key:"13",label:t("sidebar.footer"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"footer",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.FOOTER.VIEW}]},{key:"1",label:t("sidebar.report"),icon:"pi pi-chart-line",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.report_real_estate"),name:"admin-report-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"report.real.estate",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.RENT_BUY.VIEW},{key:"1",label:t("sidebar.report_rent_buy"),icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:b.RENT_BUY.VIEW}]}],I=["province","country","district","real.estate.services"],_=async g=>{I.includes(g)&&(c.page=1,c.limit=10,n.page=1,n.limit=10,a.page=1,a.limit=10,s.page=1,s.limit=10)},D=async g=>{await _(g),f.push({name:g})},B=localStorage.getItem("roles")||"",d=B?JSON.parse(B):[],x=localStorage.getItem("permissions")||"",m=B?JSON.parse(x):[],S=()=>!!(d.includes(r.SUPER_ADMIN)||d.includes(r.ADMIN)),q=g=>d.includes(r.SUPER_ADMIN)||d.includes(r.ADMIN)?!0:m.includes(g),le=(g,p,h)=>d.includes(r.SUPER_ADMIN)||d.includes(r.ADMIN)||d.includes(r.ADMIN_OWNER)?g.some(z=>d.includes(z)):h==="owner-user"?!!(p==="view-user"&&d.includes(r.USER_OWNER)):h==="admin-user"?!!(p==="view-user"&&d.includes(r.USER)):h==="owner-real-estate"?!!(p==="view-real-estate"&&d.includes(r.USER_OWNER)):h==="admin-real-estate"?!!(p==="view-real-estate"&&d.includes(r.USER)):h==="owner-appointment"?!!(p==="view-appointment"&&d.includes(r.USER_OWNER)):h==="admin-appointment"?!!(p==="view-appointment"&&d.includes(r.USER)):h==="owner-rent-buy"?!!(p==="view-rent-buy"&&d.includes(r.USER_OWNER)):h==="admin-rent-buy"?!!(p==="view-rent-buy"&&d.includes(r.USER)):h==="admin-report-real-estate"?!!(p==="view-rent-buy"&&d.includes(r.USER)):m.includes(p);return(g,p)=>{const h=j("ripple"),z=j("styleclass");return o(),l("aside",xe,[i("div",Ce,[i("div",Ae,[Oe,i("span",{class:"font-bold text-3xl",style:{"margin-left":"10px"},onClick:p[0]||(p[0]=E=>y(f).push({name:"home"}))},"UK LAO")]),Ne,i("div",De,[i("ul",Le,[S()?(o(),l("li",Ue,[C((o(),l("a",{onClick:p[1]||(p[1]=E=>D("dashboard")),class:w([{"bg-highlight":y(f).currentRoute.value.name==="dashboard"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Me,i("span",Pe,A(g.$t("sidebar.dashboard")),1)],2)),[[h]])])):v("",!0),q(y(b).CUSTOMER.VIEW)?(o(),l("li",Be,[C((o(),l("a",{onClick:p[2]||(p[2]=E=>D("customer")),class:w([{"bg-highlight":y(f).currentRoute.value.name==="customer"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[$e,i("span",Te,A(g.$t("sidebar.customer")),1)],2)),[[h]])])):v("",!0),q(y(b).PAYMENT_HISTORY.VIEW)?(o(),l("li",We,[C((o(),l("a",{onClick:p[3]||(p[3]=E=>D("admin.payment.history")),class:w([{"bg-highlight":y(f).currentRoute.value.name==="admin.payment.history"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ve,i("span",je,A(g.$t("sidebar.payment_history")),1)],2)),[[h]])])):v("",!0)]),i("ul",Ke,[(o(),l(P,null,G(R,E=>i("li",{key:E.key},[C((o(),l("div",Fe,[i("i",{class:w(`${E.icon} ${E.color} mr-2`)},null,2),i("span",Ye,A(E.label),1),ze])),[[h],[z,{selector:"@next",enterClass:"hidden",enterActiveClass:"slidedown",leaveToClass:"hidden",leaveActiveClass:"slideup"}]]),i("ul",{class:w(["list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",{hidden:!["province","country","district","real.estate.services","owner.house","owner.payment.service","admin.user","owner.appointment","owner.rent.buy","owner.user","real.estate.type","footer","report.real.estate"].includes(String(y(f).currentRoute.value.name))}])},[(o(!0),l(P,null,G(E.children,L=>(o(),l("li",{key:E.key},[le(L.roles,L.permission,L.name)?C((o(),l("a",{key:0,onClick:Wt=>D(L.to),class:w([{"bg-highlight":y(f).currentRoute.value.name===L.to},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ge,i("span",He,A(L.label),1)],10,Ze)),[[h]]):v("",!0)]))),128))],2)])),64))])])])])}}}),qe=H(Je,[["__scopeId","data-v-6160f5f0"]]),Xe={},Qe={class:"layout-footer flex flex-column text-white font-bold surface-overlay"},et=i("span",{class:"font-medium ml-2 text-color"},"Ⓒ2023 | All Rights Reserved",-1),tt=[et];function nt(e,t){return o(),l("footer",Qe,tt)}const it=H(Xe,[["render",nt]]);var rt=`
@layer primevue {
    .p-breadcrumb {
        overflow-x: auto;
    }

    .p-breadcrumb .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    .p-breadcrumb .p-menuitem-text {
        line-height: 1;
    }

    .p-breadcrumb .p-menuitem-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .p-breadcrumb .p-menuitem-separator {
        display: flex;
        align-items: center;
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }
}
`,st={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(t){var n=t.instance;return["p-menuitem",{"p-disabled":n.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},ot=re.extend({name:"breadcrumb",css:rt,classes:st}),at={name:"BaseBreadcrumb",extends:J,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:ot,provide:function(){return{$parentInstance:this}}},se={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:J,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,a=t.url,c=typeof window<"u"?window.location.pathname:"";return n===c||a===c?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:u({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("action",this.ptmOptions)),icon:u({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:u({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},lt=["href","target","aria-current"];function ct(e,t,n,a,c,s){return s.visible()?(o(),l("li",u({key:0,class:[e.cx("menuitem"),n.item.class]},e.ptm("menuitem",s.ptmOptions)),[n.templates.item?(o(),O(K(n.templates.item),{key:1,item:n.item,label:s.label(),props:s.getMenuItemProps},null,8,["item","label","props"])):(o(),l("a",u({key:0,href:n.item.url||"#",class:e.cx("action"),target:n.item.target,"aria-current":s.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("action",s.ptmOptions)),[n.templates&&n.templates.itemicon?(o(),O(K(n.templates.itemicon),{key:0,item:n.item,class:w(e.cx("icon",s.ptmOptions))},null,8,["item","class"])):n.item.icon?(o(),l("span",u({key:1,class:[e.cx("icon"),n.item.icon]},e.ptm("icon",s.ptmOptions)),null,16)):v("",!0),n.item.label?(o(),l("span",u({key:2,class:e.cx("label")},e.ptm("label",s.ptmOptions)),A(s.label()),17)):v("",!0)],16,lt))],16)):v("",!0)}se.render=ct;var oe={name:"Breadcrumb",extends:at,components:{BreadcrumbItem:se,ChevronRightIcon:Ee}};function dt(e,t,n,a,c,s){var f=F("BreadcrumbItem"),R=F("ChevronRightIcon");return o(),l("nav",u({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[i("ol",u({class:e.cx("menu")},e.ptm("menu")),[e.home?(o(),O(f,u({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):v("",!0),(o(!0),l(P,null,G(e.model,function(I,_){return o(),l(P,{key:I.label+"_"+_},[e.home||_!==0?(o(),l("li",u({key:0,class:e.cx("separator")},e.ptm("separator")),[$(e.$slots,"separator",{},function(){return[k(R,u({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):v("",!0),k(f,{item:I,index:_,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}oe.render=dt;var ut=`
@layer primevue {
    .p-sidebar-mask {
        display: none;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }

    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-sidebar-visible {
        display: flex;
    }

    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
    }

    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
    }

    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    /* Animation */
    /* Center */
    .p-sidebar-left .p-sidebar-enter-from,
    .p-sidebar-left .p-sidebar-leave-to {
        transform: translateX(-100%);
    }
    .p-sidebar-right .p-sidebar-enter-from,
    .p-sidebar-right .p-sidebar-leave-to {
        transform: translateX(100%);
    }
    .p-sidebar-top .p-sidebar-enter-from,
    .p-sidebar-top .p-sidebar-leave-to {
        transform: translateY(-100%);
    }
    .p-sidebar-bottom .p-sidebar-enter-from,
    .p-sidebar-bottom .p-sidebar-leave-to {
        transform: translateY(100%);
    }
    .p-sidebar-full .p-sidebar-enter-from,
    .p-sidebar-full .p-sidebar-leave-to {
        opacity: 0;
    }
    .p-sidebar-full .p-sidebar-enter-active,
    .p-sidebar-full .p-sidebar-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }

    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }

    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }

    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }

    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }

    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }

    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }
}
`,pt={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},mt={mask:function(t){var n=t.instance,a=t.props,c=["left","right","top","bottom"],s=c.find(function(f){return f===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(t){var n=t.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},ft=re.extend({name:"sidebar",css:ut,classes:mt,inlineStyles:pt}),bt={name:"BaseSidebar",extends:J,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:ft,provide:function(){return{$parentInstance:this}}},ae={name:"Sidebar",extends:bt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&Z.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&Z.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&V.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&Z.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(c){return c&&c.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.closeButton)),n&&V.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&V.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&V.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:de,ripple:ue},components:{Portal:pe,TimesIcon:me}};function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(a){ht(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ht(e,t,n){return t=vt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vt(e){var t=yt(e,"string");return T(t)=="symbol"?t:String(t)}function yt(e,t){if(T(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(T(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var gt=["aria-modal"],kt=["aria-label"];function _t(e,t,n,a,c,s){var f=F("Portal"),R=j("ripple"),I=j("focustrap");return o(),O(f,null,{default:M(function(){return[c.containerVisible?(o(),l("div",u({key:0,ref:s.maskRef,onMousedown:t[1]||(t[1]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[k(fe,u({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:M(function(){return[e.visible?C((o(),l("div",u({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},ee(ee({},e.$attrs),e.ptm("root"))),[e.$slots.container?$(e.$slots,"container",{key:0,onClose:s.hide,closeCallback:s.hide}):(o(),l(P,{key:1},[i("div",u({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[$(e.$slots,"header",{class:w(e.cx("title"))},function(){return[e.header?(o(),l("div",u({key:0,class:e.cx("title")},e.ptm("title")),A(e.header),17)):v("",!0)]}),e.showCloseIcon?C((o(),l("button",u({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[$(e.$slots,"closeicon",{class:w(e.cx("closeIcon"))},function(){return[(o(),O(K(e.closeIcon?"span":"TimesIcon"),u({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,kt)),[[R]]):v("",!0)],16),i("div",u({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[$(e.$slots,"default")],16)],64))],16,gt)),[[I]]):v("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):v("",!0)]}),_:3})}ae.render=_t;const W=e=>(ne("data-v-e198fddd"),e=e(),ie(),e),St={class:"flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground",style:{"padding-left":"1.5rem"}},Et={class:"flex align-items-center justify-content-center gap-2"},wt=W(()=>i("i",{class:"pi pi-bars font-bold",style:{"font-size":"1rem"}},null,-1)),Rt=[wt],It=W(()=>i("img",{src:"https://api.duniagames.co.id/api/content/upload/file/10936507621668659213.jpg",class:"mr-3 bg-no-repeat border-circle lg:mr-0",style:{width:"32px",height:"32px"}},null,-1)),xt=[It],Ct=W(()=>i("h2",null,"paovang",-1)),At={class:"list-none mt-3 p-0"},Ot=W(()=>i("li",null,[i("a",{class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},[i("span",null,[i("i",{class:"pi pi-user text-xl text-color"})]),i("div",{class:"ml-3"},[i("span",{class:"mb-2 font-semibold"},"Profile"),i("p",{class:"text-color-secondary m-0"},"ຂໍ້ມູນໂປຼໄຟລ໌")])])],-1)),Nt=W(()=>i("a",{class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},[i("span",null,[i("i",{class:"pi pi-power-off text-xl text-color"})]),i("div",{class:"ml-3"},[i("span",{class:"mb-2 font-semibold"},"Sign Out"),i("p",{class:"text-color-secondary m-0"},"ອອກຈາກລະບົບ")])],-1)),Dt=[Nt],Lt=Y({__name:"AppTopbar",emits:["toggleSidebar"],setup(e,{emit:t}){const{t:n}=te(),{logout:a}=we(),c=U([]),s=U(!1),f=t,R=U(),I=be(),_=U(),D=U([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vi"},{name:"China",code:"lk"}]),B=async()=>{await localStorage.setItem("locale",_.value),window.location.reload()};function d(x){c.value=[],x.matched.forEach((m,S)=>{S!==0&&c.value.push(m.meta.label)}),R.value=c.value.map(m=>({label:n(m)}))}return he(x=>{d(x)}),ve(async()=>{const x=localStorage.getItem("locale")||"en";_.value=x,d(I)}),(x,m)=>(o(),l(P,null,[i("header",St,[i("div",Et,[i("div",{class:"cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500",style:{width:"40px",height:"40px"},onClick:m[0]||(m[0]=S=>f("toggleSidebar"))},Rt),k(y(oe),{model:R.value,pt:{root:{class:"surface-ground border-none"},icon:{class:"text-indigo-500"},label:{class:"font-bold text-400"}}},null,8,["model"])]),i("div",null,[k(y(Re),{modelValue:_.value,"onUpdate:modelValue":m[1]||(m[1]=S=>_.value=S),options:D.value,optionLabel:"name",class:"w-full",optionValue:"code",highlightOnSelect:!0,onChange:B},null,8,["modelValue","options"])]),i("div",null,[i("a",{class:"cursor-pointer",onClick:m[2]||(m[2]=S=>s.value=!0)},xt)])]),k(y(ae),{visible:s.value,"onUpdate:visible":m[4]||(m[4]=S=>s.value=S),position:"right",class:"w-full sm:w-25rem"},{default:M(()=>[Ct,i("ul",At,[Ot,i("li",{onClick:m[3]||(m[3]=S=>y(a)())},Dt)])]),_:1},8,["visible"])],64))}}),Ut=H(Lt,[["__scopeId","data-v-e198fddd"]]),Mt={class:"flex flex-column justify-content-center align-items-center text-center",style:{"margin-top":"150px"}},Pt={class:"mb-3"},Bt=i("div",null,[i("h3",null,"ກຳລັງໂຫຼດ...")],-1),$t=Y({__name:"LoadingComponent",setup(e){return(t,n)=>(o(),l("div",Mt,[i("div",Pt,[k(y(Ie))]),Bt]))}}),Tt={class:"layout-main-container surface-ground"},Xt=Y({__name:"AppLayout",setup(e){const t=U(!0);return(n,a)=>{const c=F("router-view");return o(),l("div",{class:w([t.value?"layout-mobile-active":"","layout-container"])},[k(qe,{style:X(t.value?"width: 15rem;":"width: 0rem")},null,8,["style"]),i("div",{class:"layout-content",style:X([t.value?"":"margin-left: 0rem;transition: 0.2s ease-in-out;",{overflow:"hidden"}])},[k(Ut,{onToggleSidebar:a[0]||(a[0]=()=>t.value=!t.value)}),i("main",Tt,[k(c,null,{default:M(({Component:s})=>[s?(o(),O(ye,{key:0},{fallback:M(()=>[k($t)]),default:M(()=>[(o(),O(K(s)))]),_:2},1024)):v("",!0)]),_:1})]),k(it)],4),i("div",{class:"layout-mask",onClick:a[1]||(a[1]=()=>t.value=!t.value)})],2)}}});export{Xt as default};
