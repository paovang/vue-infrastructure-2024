import{d as K,u as ne,r as A,o as ie,a as me,G as r,b as h,c as W,e as l,f as i,g as y,w as O,n as E,t as C,h as v,F as U,i as q,j as o,p as re,k as se,_ as G,B as oe,s as H,m as p,l as N,q as V,v as j,x as P,y as k,Z,D as T,z as fe,R as be,A as he,C as ve,E as L,T as ye,H as ge,I as ke,J as Q,S as Se}from"./index-KGSMnzYI.js";import{p as _e}from"./province.store-9oDaRl3v.js";import{r as we}from"./real-estate-service.store-SGA_vAyD.js";import{d as Ee}from"./district.store-Pbz18pwp.js";import{c as Re}from"./country.store-QVOk5MZo.js";import{r as Ie}from"./rent-store-Y-ZluGTf.js";import{s as xe}from"./index.esm-JNgMc-d4.js";import{u as Ce}from"./auth.store-c5EiXbwv.js";import{s as Ae}from"./dropdown.esm-uV6zOBXf.js";import{s as Oe}from"./progressspinner.esm-TukYvVIr.js";import"./axios.config-gXfSTYZr.js";import"./service-nuWS6klM.js";import"./format.date--bimoUa2.js";import"./overlayeventbus.esm-ExPNO6Jr.js";const D=e=>(re("data-v-b8374a09"),e=e(),se(),e),Ne={class:"shadow-1 h-screen fixed z-2 surface-overlay"},De={class:"flex flex-column h-full white-space-nowrap"},Le={class:"flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"},Ue=D(()=>i("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"38px"}},null,-1)),Pe=D(()=>i("br",null,null,-1)),Me={class:"overflow-y-auto"},Be={class:"list-none p-0 m-0 overflow-hidden"},$e={key:0},Te=D(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),We={class:"font-medium"},Ve={key:1},je=D(()=>i("i",{class:"pi pi-users mr-2"},null,-1)),Ke={class:"font-medium"},Fe={key:2},ze=D(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),Ye={class:"font-medium"},Ze={class:"list-none p-0 m-0 overflow-hidden"},qe={class:"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"},Ge={class:"font-medium"},He=D(()=>i("i",{class:"pi pi-chevron-down ml-auto"},null,-1)),Je=["onClick"],Xe=D(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),Qe={class:"font-medium"},et={key:0,class:"inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle",style:{"min-width":"1.5rem",height:"1.5rem","font-size":"14px !important","background-color":"#d13438 !important"}},tt=K({__name:"AppSidebar",setup(e){const{t}=ne(),{getAllAppointmentPending:n,appointmentPending:a}=Ie(),{setStateFilter:d}=Ee(),{setStateFilter:s}=_e(),{setStateFilter:S}=Re(),{setStateFilter:R}=we(),I=A(0);ie(async()=>{await n(),I.value=a.data.props});const f=me(),F=[{key:"1",label:t("sidebar.settings"),icon:"pi pi-cog",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.country"),name:"admin-country",icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.COUNTRY.VIEW},{key:"2",label:t("sidebar.province"),name:"admin-province",icon:"pi pi-chart-line",color:"text-red-500",to:"province",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.PROVINCE.VIEW},{key:"3",label:t("sidebar.district"),name:"admin-district",icon:"pi pi-chart-line",color:"text-red-500",to:"district",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.DISTRICT.VIEW},{key:"4",label:t("sidebar.service"),name:"admin-service-charge",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.services",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.SERVICE_CHARGE.VIEW},{key:"5",label:t("sidebar.user"),name:"admin-user",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.user",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.ADMIN_USER.VIEW},{key:"6",label:t("sidebar.house"),name:"owner-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.house",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:h.REAL_ESTATE.VIEW},{key:"7",label:t("sidebar.payment_service"),name:"owner-payment-service",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.payment.service",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:h.PAYMENT_REAL_ESTATE.VIEW},{key:"8",label:t("sidebar.appointment"),name:"owner-appointment",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.appointment",qty:I,roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:h.APPOINTMENT.VIEW},{key:"9",label:t("sidebar.rent_buy"),name:"owner-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.rent.buy",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:h.RENT_BUY.VIEW},{key:"10",label:t("sidebar.user"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.user",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:h.OWNER_USER.VIEW},{key:"11",label:t("sidebar.real_estate_type"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.type",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.REAL_ESTATE_TYPE.VIEW},{key:"12",label:t("sidebar.footer"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"footer",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.FOOTER.VIEW}]},{key:"1",label:t("sidebar.report"),icon:"pi pi-chart-line",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.report_real_estate"),name:"admin-report-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"report.real.estate",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.REAL_ESTATE.VIEW},{key:"2",label:t("sidebar.report_rent_buy"),name:"admin-report-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"report.rent.buy",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:h.RENT_BUY.VIEW}]}],z=["province","country","district","real.estate.services"],$=async g=>{z.includes(g)&&(S.page=1,S.limit=10,d.page=1,d.limit=10,s.page=1,s.limit=10,R.page=1,R.limit=10)},_=async g=>{await $(g),f.push({name:g})},m=localStorage.getItem("roles")||"",c=m?JSON.parse(m):[],de=localStorage.getItem("permissions")||"",J=m?JSON.parse(de):[],ue=()=>!!(c.includes(r.SUPER_ADMIN)||c.includes(r.ADMIN)),X=g=>c.includes(r.SUPER_ADMIN)||c.includes(r.ADMIN)?!0:J.includes(g),pe=(g,u,b)=>c.includes(r.SUPER_ADMIN)||c.includes(r.ADMIN)||c.includes(r.ADMIN_OWNER)?g.some(Y=>c.includes(Y)):b==="owner-user"?!!(u==="view-user"&&c.includes(r.USER_OWNER)):b==="admin-user"?!!(u==="view-user"&&c.includes(r.USER)):b==="owner-real-estate"?!!(u==="view-real-estate"&&c.includes(r.USER_OWNER)):b==="admin-real-estate"?!!(u==="view-real-estate"&&c.includes(r.USER)):b==="owner-appointment"?!!(u==="view-appointment"&&c.includes(r.USER_OWNER)):b==="admin-appointment"?!!(u==="view-appointment"&&c.includes(r.USER)):b==="owner-rent-buy"?!!(u==="view-rent-buy"&&c.includes(r.USER_OWNER)):b==="admin-rent-buy"?!!(u==="view-rent-buy"&&c.includes(r.USER)):b==="admin-report-real-estate"?!!(u==="view-real-estate"&&c.includes(r.USER)):b==="admin-report-rent-buy"?!!(u==="view-rent-buy"&&c.includes(r.USER)):J.includes(u);return(g,u)=>{const b=W("ripple"),Y=W("styleclass");return o(),l("aside",Ne,[i("div",De,[i("div",Le,[Ue,i("span",{class:"font-bold text-3xl",style:{"margin-left":"10px"},onClick:u[0]||(u[0]=w=>y(f).push({name:"home"}))},"UK LAO")]),Pe,i("div",Me,[i("ul",Be,[ue()?(o(),l("li",$e,[O((o(),l("a",{onClick:u[1]||(u[1]=w=>_("dashboard")),class:E([{"bg-highlight":y(f).currentRoute.value.name==="dashboard"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Te,i("span",We,C(g.$t("sidebar.dashboard")),1)],2)),[[b]])])):v("",!0),X(y(h).CUSTOMER.VIEW)?(o(),l("li",Ve,[O((o(),l("a",{onClick:u[2]||(u[2]=w=>_("customer")),class:E([{"bg-highlight":y(f).currentRoute.value.name==="customer"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[je,i("span",Ke,C(g.$t("sidebar.customer")),1)],2)),[[b]])])):v("",!0),X(y(h).PAYMENT_HISTORY.VIEW)?(o(),l("li",Fe,[O((o(),l("a",{onClick:u[3]||(u[3]=w=>_("admin.payment.history")),class:E([{"bg-highlight":y(f).currentRoute.value.name==="admin.payment.history"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[ze,i("span",Ye,C(g.$t("sidebar.payment_history")),1)],2)),[[b]])])):v("",!0)]),i("ul",Ze,[(o(),l(U,null,q(F,w=>i("li",{key:w.key},[O((o(),l("div",qe,[i("i",{class:E(`${w.icon} ${w.color} mr-2`)},null,2),i("span",Ge,C(w.label),1),He])),[[b],[Y,{selector:"@next",enterClass:"hidden",enterActiveClass:"slidedown",leaveToClass:"hidden",leaveActiveClass:"slideup"}]]),i("ul",{class:E(["list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",{hidden:!["province","country","district","real.estate.services","owner.house","owner.payment.service","admin.user","owner.appointment","owner.rent.buy","owner.user","owner.add.user","owner.edit.user","real.estate.type","footer","report.real.estate"].includes(String(y(f).currentRoute.value.name))}])},[(o(!0),l(U,null,q(w.children,x=>(o(),l("li",{key:w.key},[pe(x.roles,x.permission,x.name)?O((o(),l("a",{key:0,onClick:zt=>_(x.to),class:E([{"bg-highlight":y(f).currentRoute.value.name===x.to},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Xe,i("span",Qe,C(x.label),1),x.qty?(o(),l("span",et,C(x.qty),1)):v("",!0)],10,Je)),[[b]]):v("",!0)]))),128))],2)])),64))])])])])}}}),nt=G(tt,[["__scopeId","data-v-b8374a09"]]),it={},rt={class:"layout-footer flex flex-column text-white font-bold surface-overlay"},st=i("span",{class:"font-medium ml-2 text-color"},"Ⓒ2023 | All Rights Reserved",-1),ot=[st];function at(e,t){return o(),l("footer",rt,ot)}const lt=G(it,[["render",at]]);var ct=`
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
`,dt={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(t){var n=t.instance;return["p-menuitem",{"p-disabled":n.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},ut=oe.extend({name:"breadcrumb",css:ct,classes:dt}),pt={name:"BaseBreadcrumb",extends:H,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:ut,provide:function(){return{$parentInstance:this}}},ae={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:H,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,a=t.url,d=typeof window<"u"?window.location.pathname:"";return n===d||a===d?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:p({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("action",this.ptmOptions)),icon:p({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:p({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},mt=["href","target","aria-current"];function ft(e,t,n,a,d,s){return s.visible()?(o(),l("li",p({key:0,class:[e.cx("menuitem"),n.item.class]},e.ptm("menuitem",s.ptmOptions)),[n.templates.item?(o(),N(V(n.templates.item),{key:1,item:n.item,label:s.label(),props:s.getMenuItemProps},null,8,["item","label","props"])):(o(),l("a",p({key:0,href:n.item.url||"#",class:e.cx("action"),target:n.item.target,"aria-current":s.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("action",s.ptmOptions)),[n.templates&&n.templates.itemicon?(o(),N(V(n.templates.itemicon),{key:0,item:n.item,class:E(e.cx("icon",s.ptmOptions))},null,8,["item","class"])):n.item.icon?(o(),l("span",p({key:1,class:[e.cx("icon"),n.item.icon]},e.ptm("icon",s.ptmOptions)),null,16)):v("",!0),n.item.label?(o(),l("span",p({key:2,class:e.cx("label")},e.ptm("label",s.ptmOptions)),C(s.label()),17)):v("",!0)],16,mt))],16)):v("",!0)}ae.render=ft;var le={name:"Breadcrumb",extends:pt,components:{BreadcrumbItem:ae,ChevronRightIcon:xe}};function bt(e,t,n,a,d,s){var S=j("BreadcrumbItem"),R=j("ChevronRightIcon");return o(),l("nav",p({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[i("ol",p({class:e.cx("menu")},e.ptm("menu")),[e.home?(o(),N(S,p({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):v("",!0),(o(!0),l(U,null,q(e.model,function(I,f){return o(),l(U,{key:I.label+"_"+f},[e.home||f!==0?(o(),l("li",p({key:0,class:e.cx("separator")},e.ptm("separator")),[P(e.$slots,"separator",{},function(){return[k(R,p({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):v("",!0),k(S,{item:I,index:f,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}le.render=bt;var ht=`
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
`,vt={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},yt={mask:function(t){var n=t.instance,a=t.props,d=["left","right","top","bottom"],s=d.find(function(S){return S===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(t){var n=t.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},gt=oe.extend({name:"sidebar",css:ht,classes:yt,inlineStyles:vt}),kt={name:"BaseSidebar",extends:H,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:gt,provide:function(){return{$parentInstance:this}}},ce={name:"Sidebar",extends:kt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&Z.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&Z.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&T.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&Z.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(d){return d&&d.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.closeButton)),n&&T.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&T.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&T.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:fe,ripple:be},components:{Portal:he,TimesIcon:ve}};function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ee(Object(n),!0).forEach(function(a){St(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function St(e,t,n){return t=_t(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _t(e){var t=wt(e,"string");return M(t)=="symbol"?t:String(t)}function wt(e,t){if(M(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(M(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Et=["aria-modal"],Rt=["aria-label"];function It(e,t,n,a,d,s){var S=j("Portal"),R=W("ripple"),I=W("focustrap");return o(),N(S,null,{default:L(function(){return[d.containerVisible?(o(),l("div",p({key:0,ref:s.maskRef,onMousedown:t[1]||(t[1]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[k(ye,p({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:L(function(){return[e.visible?O((o(),l("div",p({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},te(te({},e.$attrs),e.ptm("root"))),[e.$slots.container?P(e.$slots,"container",{key:0,onClose:s.hide,closeCallback:s.hide}):(o(),l(U,{key:1},[i("div",p({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[P(e.$slots,"header",{class:E(e.cx("title"))},function(){return[e.header?(o(),l("div",p({key:0,class:e.cx("title")},e.ptm("title")),C(e.header),17)):v("",!0)]}),e.showCloseIcon?O((o(),l("button",p({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[P(e.$slots,"closeicon",{class:E(e.cx("closeIcon"))},function(){return[(o(),N(V(e.closeIcon?"span":"TimesIcon"),p({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,Rt)),[[R]]):v("",!0)],16),i("div",p({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[P(e.$slots,"default")],16)],64))],16,Et)),[[I]]):v("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):v("",!0)]}),_:3})}ce.render=It;const B=e=>(re("data-v-e198fddd"),e=e(),se(),e),xt={class:"flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground",style:{"padding-left":"1.5rem"}},Ct={class:"flex align-items-center justify-content-center gap-2"},At=B(()=>i("i",{class:"pi pi-bars font-bold",style:{"font-size":"1rem"}},null,-1)),Ot=[At],Nt=B(()=>i("img",{src:"https://api.duniagames.co.id/api/content/upload/file/10936507621668659213.jpg",class:"mr-3 bg-no-repeat border-circle lg:mr-0",style:{width:"32px",height:"32px"}},null,-1)),Dt=[Nt],Lt=B(()=>i("h2",null,"paovang",-1)),Ut={class:"list-none mt-3 p-0"},Pt=B(()=>i("li",null,[i("a",{class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},[i("span",null,[i("i",{class:"pi pi-user text-xl text-color"})]),i("div",{class:"ml-3"},[i("span",{class:"mb-2 font-semibold"},"Profile"),i("p",{class:"text-color-secondary m-0"},"ຂໍ້ມູນໂປຼໄຟລ໌")])])],-1)),Mt=B(()=>i("a",{class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},[i("span",null,[i("i",{class:"pi pi-power-off text-xl text-color"})]),i("div",{class:"ml-3"},[i("span",{class:"mb-2 font-semibold"},"Sign Out"),i("p",{class:"text-color-secondary m-0"},"ອອກຈາກລະບົບ")])],-1)),Bt=[Mt],$t=K({__name:"AppTopbar",emits:["toggleSidebar"],setup(e,{emit:t}){const{t:n}=ne(),{logout:a}=Ce(),d=A([]),s=A(!1),S=t,R=A(),I=ge(),f=A(),F=A([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vi"},{name:"China",code:"lk"}]),z=async()=>{await localStorage.setItem("locale",f.value),window.location.reload()};function $(_){d.value=[],_.matched.forEach((m,c)=>{c!==0&&d.value.push(m.meta.label)}),R.value=d.value.map(m=>({label:n(m)}))}return ke(_=>{$(_)}),ie(async()=>{const _=localStorage.getItem("locale")||"en";f.value=_,$(I)}),(_,m)=>(o(),l(U,null,[i("header",xt,[i("div",Ct,[i("div",{class:"cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500",style:{width:"40px",height:"40px"},onClick:m[0]||(m[0]=c=>S("toggleSidebar"))},Ot),k(y(le),{model:R.value,pt:{root:{class:"surface-ground border-none"},icon:{class:"text-indigo-500"},label:{class:"font-bold text-400"}}},null,8,["model"])]),i("div",null,[k(y(Ae),{modelValue:f.value,"onUpdate:modelValue":m[1]||(m[1]=c=>f.value=c),options:F.value,optionLabel:"name",class:"w-full",optionValue:"code",highlightOnSelect:!0,onChange:z},null,8,["modelValue","options"])]),i("div",null,[i("a",{class:"cursor-pointer",onClick:m[2]||(m[2]=c=>s.value=!0)},Dt)])]),k(y(ce),{visible:s.value,"onUpdate:visible":m[4]||(m[4]=c=>s.value=c),position:"right",class:"w-full sm:w-25rem"},{default:L(()=>[Lt,i("ul",Ut,[Pt,i("li",{onClick:m[3]||(m[3]=c=>y(a)())},Bt)])]),_:1},8,["visible"])],64))}}),Tt=G($t,[["__scopeId","data-v-e198fddd"]]),Wt={class:"flex flex-column justify-content-center align-items-center text-center",style:{"margin-top":"150px"}},Vt={class:"mb-3"},jt=i("div",null,[i("h3",null,"ກຳລັງໂຫຼດ...")],-1),Kt=K({__name:"LoadingComponent",setup(e){return(t,n)=>(o(),l("div",Wt,[i("div",Vt,[k(y(Oe))]),jt]))}}),Ft={class:"layout-main-container surface-ground"},an=K({__name:"AppLayout",setup(e){const t=A(!0);return(n,a)=>{const d=j("router-view");return o(),l("div",{class:E([t.value?"layout-mobile-active":"","layout-container"])},[k(nt,{style:Q(t.value?"width: 15rem;":"width: 0rem")},null,8,["style"]),i("div",{class:"layout-content",style:Q([t.value?"":"margin-left: 0rem;transition: 0.2s ease-in-out;",{overflow:"hidden"}])},[k(Tt,{onToggleSidebar:a[0]||(a[0]=()=>t.value=!t.value)}),i("main",Ft,[k(d,null,{default:L(({Component:s})=>[s?(o(),N(Se,{key:0},{fallback:L(()=>[k(Kt)]),default:L(()=>[(o(),N(V(s)))]),_:2},1024)):v("",!0)]),_:1})]),k(lt)],4),i("div",{class:"layout-mask",onClick:a[1]||(a[1]=()=>t.value=!t.value)})],2)}}});export{an as default};
