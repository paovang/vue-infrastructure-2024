import{d as Z,u as se,r as C,o as oe,G as r,a as ae,b as u,c as z,e as l,f as n,g as m,w as N,n as I,t as v,h as b,F as M,i as Q,j as o,p as le,k as ce,_ as ee,B as de,s as te,m as p,l as D,q,v as Y,x as W,y as E,Z as X,D as F,z as be,R as fe,A as he,C as ve,E as P,T as ye,H as ge,I as _e,J as ne,S as ke}from"./index-56hUO3f1.js";import{p as Se}from"./province.store-ri_RXyDc.js";import{r as Ee}from"./real-estate-service.store-4e7RC-xg.js";import{d as we}from"./district.store-TnJhbfQD.js";import{c as Ie}from"./country.store-QQvBFXBh.js";import{r as Re}from"./rent-store-nPE-J95o.js";import{s as Ae}from"./index.esm-kQ6oSsHW.js";import{u as xe}from"./auth.store-B_kJNB9y.js";import{s as Ce}from"./dropdown.esm-PYf9JPUN.js";import{a as Ne}from"./user.store-NmSgBpNS.js";import{s as De}from"./progressspinner.esm-g4ERUGdk.js";import"./axios.config-gXfSTYZr.js";import"./service-nuWS6klM.js";import"./format.date--bimoUa2.js";import"./overlayeventbus.esm-8dPFfvjm.js";const O=e=>(le("data-v-9bdb6ceb"),e=e(),ce(),e),Oe={class:"shadow-1 h-screen fixed z-2 surface-overlay"},$e={class:"flex flex-column h-full white-space-nowrap"},Le={class:"flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"},Ue=O(()=>n("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"38px"}},null,-1)),Pe=O(()=>n("br",null,null,-1)),Me={class:"overflow-y-auto"},Be={class:"list-none p-0 m-0 overflow-hidden"},Te={key:0},We=O(()=>n("i",{class:"pi pi-chart-line mr-2"},null,-1)),Ve={class:"font-medium"},je={key:1},Ke=O(()=>n("i",{class:"pi pi-users mr-2"},null,-1)),Fe={class:"font-medium"},ze={key:2},qe=O(()=>n("i",{class:"pi pi-chart-line mr-2"},null,-1)),Ye={class:"font-medium"},Ze={class:"list-none p-0 m-0 overflow-hidden"},Ge={class:"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"},He={class:"font-medium"},Je=O(()=>n("i",{class:"pi pi-chevron-down ml-auto"},null,-1)),Xe=["onClick"],Qe=O(()=>n("i",{class:"pi pi-chart-line mr-2"},null,-1)),et={class:"font-medium"},tt={key:0,class:"inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle",style:{"min-width":"1.5rem",height:"1.5rem","font-size":"14px !important","background-color":"#d13438 !important"}},nt=Z({__name:"AppSidebar",setup(e){const{t}=se(),{getAllAppointmentPending:i,appointmentPending:a}=Re(),{setStateFilter:c}=we(),{setStateFilter:s}=Se(),{setStateFilter:_}=Ie(),{setStateFilter:k}=Ee(),R=C(0);oe(async()=>{(g.includes(r.ADMIN_OWNER)||g.includes(r.USER_OWNER))&&(await i(),R.value=a.data.props?a.data.props:0)});const y=ae(),G=[{key:"1",label:t("sidebar.settings"),icon:"pi pi-cog",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.country"),name:"admin-country",icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.COUNTRY.VIEW},{key:"2",label:t("sidebar.province"),name:"admin-province",icon:"pi pi-chart-line",color:"text-red-500",to:"province",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.PROVINCE.VIEW},{key:"3",label:t("sidebar.district"),name:"admin-district",icon:"pi pi-chart-line",color:"text-red-500",to:"district",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.DISTRICT.VIEW},{key:"4",label:t("sidebar.service"),name:"admin-service-charge",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.services",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.SERVICE_CHARGE.VIEW},{key:"5",label:t("sidebar.user"),name:"admin-user",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.user",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.ADMIN_USER.VIEW},{key:"6",label:t("sidebar.house"),name:"owner-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.house",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:u.REAL_ESTATE.VIEW},{key:"7",label:t("sidebar.payment_service"),name:"owner-payment-service",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.payment.service",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:u.PAYMENT_REAL_ESTATE.VIEW},{key:"8",label:t("sidebar.appointment"),name:"owner-appointment",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.appointment",qty:R,roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:u.APPOINTMENT.VIEW},{key:"9",label:t("sidebar.rent_buy"),name:"owner-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.rent.buy",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:u.RENT_BUY.VIEW},{key:"10",label:t("sidebar.user"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.user",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:u.OWNER_USER.VIEW},{key:"11",label:t("sidebar.real_estate_type"),name:"admin-real_estate_type",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.type",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.REAL_ESTATE_TYPE.VIEW},{key:"12",label:t("sidebar.footer"),name:"admin-footer",icon:"pi pi-chart-line",color:"text-red-500",to:"footer",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.FOOTER.VIEW},{key:"13",label:t("sidebar.policy"),name:"admin-policy",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.policy",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.POLICY.VIEW},{key:"14",label:t("sidebar.about"),name:"admin-about-us",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.about",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.ABOUT_US.VIEW},{key:"15",label:t("sidebar.warning"),name:"admin-warning",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.warning",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.WARNING.VIEW},{key:"16",label:t("sidebar.qrcode_bank"),name:"admin-qrocde-bank",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.qrcode.bank",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.BANK_QRCODE.VIEW}]},{key:"1",label:t("sidebar.report"),icon:"pi pi-chart-line",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.report_real_estate"),name:"admin-report-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"report.real.estate",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.REPORT_REAL_ESTATE.VIEW},{key:"2",label:t("sidebar.report_rent_buy"),name:"admin-report-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"report.rent.buy",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:u.REPORT_RENT_Buy.VIEW}]}],B=["province","country","district","real.estate.services"],$=async d=>{B.includes(d)&&(_.page=1,_.limit=10,c.page=1,c.limit=10,s.page=1,s.limit=10,k.page=1,k.limit=10)},L=async d=>{await $(d),y.push({name:d})},T=localStorage.getItem("roles")||"",g=T?JSON.parse(T):[],H=localStorage.getItem("permissions")||"",U=T?JSON.parse(H):[],K=()=>!!(g.includes(r.SUPER_ADMIN)||g.includes(r.ADMIN)),f=d=>g.includes(r.SUPER_ADMIN)||g.includes(r.ADMIN)?!0:U.includes(d),h=(d,S,A)=>g.includes(r.SUPER_ADMIN)||g.includes(r.ADMIN)||g.includes(r.ADMIN_OWNER)?d.some(J=>g.includes(J)):A==="owner-user"?!!(U.includes(S)&&g.includes(r.USER_OWNER)):A==="admin-user"?!!(U.includes(S)&&g.includes(r.USER)):U.includes(S);return(d,S)=>{const A=z("ripple"),J=z("styleclass");return o(),l("aside",Oe,[n("div",$e,[n("div",Le,[Ue,n("span",{class:"font-bold text-3xl",style:{"margin-left":"10px"},onClick:S[0]||(S[0]=w=>m(y).push({name:"home"}))},"UK LAO")]),Pe,n("div",Me,[n("ul",Be,[K()?(o(),l("li",Te,[N((o(),l("a",{onClick:S[1]||(S[1]=w=>L("dashboard")),class:I([{"bg-highlight":m(y).currentRoute.value.name==="dashboard"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[We,n("span",Ve,v(d.$t("sidebar.dashboard")),1)],2)),[[A]])])):b("",!0),f(m(u).CUSTOMER.VIEW)?(o(),l("li",je,[N((o(),l("a",{onClick:S[2]||(S[2]=w=>L("customer")),class:I([{"bg-highlight":m(y).currentRoute.value.name==="customer"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ke,n("span",Fe,v(d.$t("sidebar.customer")),1)],2)),[[A]])])):b("",!0),f(m(u).PAYMENT_HISTORY.VIEW)?(o(),l("li",ze,[N((o(),l("a",{onClick:S[3]||(S[3]=w=>L("admin.payment.history")),class:I([{"bg-highlight":m(y).currentRoute.value.name==="admin.payment.history"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[qe,n("span",Ye,v(d.$t("sidebar.payment_service")),1)],2)),[[A]])])):b("",!0)]),n("ul",Ze,[(o(),l(M,null,Q(G,w=>n("li",{key:w.key},[N((o(),l("div",Ge,[n("i",{class:I(`${w.icon} ${w.color} mr-2`)},null,2),n("span",He,v(w.label),1),Je])),[[A],[J,{selector:"@next",enterClass:"hidden",enterActiveClass:"slidedown",leaveToClass:"hidden",leaveActiveClass:"slideup"}]]),n("ul",{class:I(["list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",{hidden:!["province","country","district","real.estate.services","owner.house","owner.payment.service","admin.user","owner.appointment","owner.rent.buy","owner.user","owner.add.user","owner.edit.user","real.estate.type","footer","report.real.estate","admin.policy","admin.edit.policy","admin.about","admin.edit.about","admin.warning","admin.edit.warning","admin.qrcode.bank"].includes(String(m(y).currentRoute.value.name))}])},[(o(!0),l(M,null,Q(w.children,x=>(o(),l("li",{key:w.key},[h(x.roles,x.permission,x.name)?N((o(),l("a",{key:0,onClick:an=>L(x.to),class:I([{"bg-highlight":m(y).currentRoute.value.name===x.to},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Qe,n("span",et,v(x.label),1),x.qty?(o(),l("span",tt,v(x.qty),1)):b("",!0)],10,Xe)),[[A]]):b("",!0)]))),128))],2)])),64))])])])])}}}),it=ee(nt,[["__scopeId","data-v-9bdb6ceb"]]),rt={},st={class:"layout-footer flex flex-column text-white font-bold surface-overlay"},ot=n("span",{class:"font-medium ml-2 text-color"},"Ⓒ2023 | All Rights Reserved",-1),at=[ot];function lt(e,t){return o(),l("footer",st,at)}const ct=ee(rt,[["render",lt]]);var dt=`
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
`,ut={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(t){var i=t.instance;return["p-menuitem",{"p-disabled":i.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},pt=de.extend({name:"breadcrumb",css:dt,classes:ut}),mt={name:"BaseBreadcrumb",extends:te,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:pt,provide:function(){return{$parentInstance:this}}},ue={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:te,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,i=t.to,a=t.url,c=typeof window<"u"?window.location.pathname:"";return i===c||a===c?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:p({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("action",this.ptmOptions)),icon:p({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:p({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},bt=["href","target","aria-current"];function ft(e,t,i,a,c,s){return s.visible()?(o(),l("li",p({key:0,class:[e.cx("menuitem"),i.item.class]},e.ptm("menuitem",s.ptmOptions)),[i.templates.item?(o(),D(q(i.templates.item),{key:1,item:i.item,label:s.label(),props:s.getMenuItemProps},null,8,["item","label","props"])):(o(),l("a",p({key:0,href:i.item.url||"#",class:e.cx("action"),target:i.item.target,"aria-current":s.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("action",s.ptmOptions)),[i.templates&&i.templates.itemicon?(o(),D(q(i.templates.itemicon),{key:0,item:i.item,class:I(e.cx("icon",s.ptmOptions))},null,8,["item","class"])):i.item.icon?(o(),l("span",p({key:1,class:[e.cx("icon"),i.item.icon]},e.ptm("icon",s.ptmOptions)),null,16)):b("",!0),i.item.label?(o(),l("span",p({key:2,class:e.cx("label")},e.ptm("label",s.ptmOptions)),v(s.label()),17)):b("",!0)],16,bt))],16)):b("",!0)}ue.render=ft;var pe={name:"Breadcrumb",extends:mt,components:{BreadcrumbItem:ue,ChevronRightIcon:Ae}};function ht(e,t,i,a,c,s){var _=Y("BreadcrumbItem"),k=Y("ChevronRightIcon");return o(),l("nav",p({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[n("ol",p({class:e.cx("menu")},e.ptm("menu")),[e.home?(o(),D(_,p({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):b("",!0),(o(!0),l(M,null,Q(e.model,function(R,y){return o(),l(M,{key:R.label+"_"+y},[e.home||y!==0?(o(),l("li",p({key:0,class:e.cx("separator")},e.ptm("separator")),[W(e.$slots,"separator",{},function(){return[E(k,p({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):b("",!0),E(_,{item:R,index:y,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}pe.render=ht;var vt=`
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
`,yt={mask:function(t){var i=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:i==="left"?"flex-start":i==="right"?"flex-end":"center",alignItems:i==="top"?"flex-start":i==="bottom"?"flex-end":"center"}}},gt={mask:function(t){var i=t.instance,a=t.props,c=["left","right","top","bottom"],s=c.find(function(_){return _===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":i.containerVisible,"p-sidebar-full":i.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(t){var i=t.instance;return["p-sidebar p-component",{"p-input-filled":i.$primevue.config.inputStyle==="filled","p-ripple-disabled":i.$primevue.config.ripple===!1,"p-sidebar-full":i.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},_t=de.extend({name:"sidebar",css:vt,classes:gt,inlineStyles:yt}),kt={name:"BaseSidebar",extends:te,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:_t,provide:function(){return{$parentInstance:this}}},me={name:"Sidebar",extends:kt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&X.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&X.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&F.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&X.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(c){return c&&c.querySelector("[autofocus]")},i=this.$slots.header&&t(this.headerContainer);i||(i=this.$slots.default&&t(this.container),i||(i=this.closeButton)),i&&F.focus(i)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&F.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&F.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(i){t.isOutsideClicked(i)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:be,ripple:fe},components:{Portal:he,TimesIcon:ve}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function ie(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),i.push.apply(i,a)}return i}function re(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ie(Object(i),!0).forEach(function(a){St(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ie(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function St(e,t,i){return t=Et(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Et(e){var t=wt(e,"string");return V(t)=="symbol"?t:String(t)}function wt(e,t){if(V(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t||"default");if(V(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var It=["aria-modal"],Rt=["aria-label"];function At(e,t,i,a,c,s){var _=Y("Portal"),k=z("ripple"),R=z("focustrap");return o(),D(_,null,{default:P(function(){return[c.containerVisible?(o(),l("div",p({key:0,ref:s.maskRef,onMousedown:t[1]||(t[1]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[E(ye,p({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:P(function(){return[e.visible?N((o(),l("div",p({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},re(re({},e.$attrs),e.ptm("root"))),[e.$slots.container?W(e.$slots,"container",{key:0,onClose:s.hide,closeCallback:s.hide}):(o(),l(M,{key:1},[n("div",p({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[W(e.$slots,"header",{class:I(e.cx("title"))},function(){return[e.header?(o(),l("div",p({key:0,class:e.cx("title")},e.ptm("title")),v(e.header),17)):b("",!0)]}),e.showCloseIcon?N((o(),l("button",p({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[W(e.$slots,"closeicon",{class:I(e.cx("closeIcon"))},function(){return[(o(),D(q(e.closeIcon?"span":"TimesIcon"),p({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,Rt)),[[k]]):b("",!0)],16),n("div",p({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[W(e.$slots,"default")],16)],64))],16,It)),[[R]]):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):b("",!0)]}),_:3})}me.render=At;const j=e=>(le("data-v-b5adf21c"),e=e(),ce(),e),xt={class:"flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground",style:{"padding-left":"1.5rem"}},Ct={class:"flex align-items-center justify-content-center gap-2"},Nt=j(()=>n("i",{class:"pi pi-bars font-bold",style:{"font-size":"1rem"}},null,-1)),Dt=[Nt],Ot=["src"],$t={class:"list-none mt-3 p-0"},Lt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Ut=j(()=>n("span",null,[n("i",{class:"pi pi-user text-xl text-color"})],-1)),Pt={class:"ml-3"},Mt={class:"mb-2 font-semibold"},Bt={class:"text-color-secondary m-0"},Tt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Wt=j(()=>n("span",null,[n("i",{class:"pi pi-user text-xl text-color"})],-1)),Vt={class:"ml-3"},jt={class:"mb-2 font-semibold"},Kt={class:"text-color-secondary m-0"},Ft={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},zt=j(()=>n("span",null,[n("i",{class:"pi pi-user"})],-1)),qt={class:"ml-3"},Yt={class:"mb-2 font-semibold"},Zt={class:"text-color-secondary m-0"},Gt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Ht=j(()=>n("span",null,[n("i",{class:"pi pi-power-off text-xl",style:{color:"brown"}})],-1)),Jt={class:"ml-3"},Xt={class:"mb-2 font-semibold",style:{color:"brown"}},Qt=Z({__name:"AppTopbar",emits:["toggleSidebar"],setup(e,{emit:t}){const{t:i}=se(),{logout:a}=xe(),{getUserProfile:c,getProfile:s}=Ne(),_=C([]),k=C(!1),R=t,y=C(),G=ge(),B=ae(),$=C(),L=C([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vi"},{name:"China",code:"lk"}]),T=()=>{k.value=!1,B.push({name:"admin.user.profile"})},g=()=>{k.value=!1,B.push({name:"owner.user.profile"})},H=()=>{k.value=!1,B.push({name:"owner.user.owner.profile"})},U=async()=>{await localStorage.setItem("locale",$.value),window.location.reload()};function K(f){_.value=[],f.matched.forEach((h,d)=>{d!==0&&_.value.push(h.meta.label)}),y.value=_.value.map(h=>({label:i(h)}))}return _e(f=>{K(f)}),oe(async()=>{const f=localStorage.getItem("locale")||"en";$.value=f,K(G),await s()}),(f,h)=>(o(),l(M,null,[n("header",xt,[n("div",Ct,[n("div",{class:"cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500",style:{width:"40px",height:"40px"},onClick:h[0]||(h[0]=d=>R("toggleSidebar"))},Dt),E(m(pe),{model:y.value,pt:{root:{class:"surface-ground border-none"},icon:{class:"text-indigo-500"},label:{class:"font-bold text-400"}}},null,8,["model"])]),n("div",null,[E(m(Ce),{modelValue:$.value,"onUpdate:modelValue":h[1]||(h[1]=d=>$.value=d),options:L.value,optionLabel:"name",class:"w-full",optionValue:"code",highlightOnSelect:!0,onChange:U},null,8,["modelValue","options"])]),n("div",null,[n("a",{class:"cursor-pointer",onClick:h[2]||(h[2]=d=>k.value=!0)},[n("img",{src:m(c).data.props.profile,class:"mr-3 bg-no-repeat border-circle lg:mr-0",style:{width:"32px",height:"32px"}},null,8,Ot)])])]),E(m(me),{visible:k.value,"onUpdate:visible":h[4]||(h[4]=d=>k.value=d),position:"right",class:"w-full sm:w-25rem"},{default:P(()=>[n("h2",null,v(m(c).data.props.name),1),n("ul",$t,[m(c).data.props.role.name==="admin-owner"?(o(),l("li",{key:0,onClick:g},[n("a",Lt,[Ut,n("div",Pt,[n("span",Mt,v(f.$t("messages.profile")),1),n("p",Bt,v(f.$t("messages.my_profile")),1)])])])):b("",!0),m(c).data.props.role.name==="user-owner"?(o(),l("li",{key:1,onClick:H},[n("a",Tt,[Wt,n("div",Vt,[n("span",jt,v(f.$t("messages.profile")),1),n("p",Kt,v(f.$t("messages.my_profile")),1)])])])):b("",!0),m(c).data.props.role.name!=="admin-owner"&&m(c).data.props.role.name!=="user-owner"?(o(),l("li",{key:2,onClick:T},[n("a",Ft,[zt,n("div",qt,[n("span",Yt,v(f.$t("messages.profile")),1),n("p",Zt,v(f.$t("messages.my_profile")),1)])])])):b("",!0),n("li",{onClick:h[3]||(h[3]=d=>m(a)())},[n("a",Gt,[Ht,n("div",Jt,[n("span",Xt,v(f.$t("messages.sign_out")),1)])])])])]),_:1},8,["visible"])],64))}}),en=ee(Qt,[["__scopeId","data-v-b5adf21c"]]),tn={class:"flex flex-column justify-content-center align-items-center text-center",style:{"margin-top":"150px"}},nn={class:"mb-3"},rn=n("div",null,[n("h3",null,"ກຳລັງໂຫຼດ...")],-1),sn=Z({__name:"LoadingComponent",setup(e){return(t,i)=>(o(),l("div",tn,[n("div",nn,[E(m(De))]),rn]))}}),on={class:"layout-main-container surface-ground"},En=Z({__name:"AppLayout",setup(e){const t=C(!0);return(i,a)=>{const c=Y("router-view");return o(),l("div",{class:I([t.value?"layout-mobile-active":"","layout-container"])},[E(it,{style:ne(t.value?"width: 15rem;":"width: 0rem")},null,8,["style"]),n("div",{class:"layout-content",style:ne([t.value?"":"margin-left: 0rem;transition: 0.2s ease-in-out;",{overflow:"hidden"}])},[E(en,{onToggleSidebar:a[0]||(a[0]=()=>t.value=!t.value)}),n("main",on,[E(c,null,{default:P(({Component:s})=>[s?(o(),D(ke,{key:0},{fallback:P(()=>[E(sn)]),default:P(()=>[(o(),D(q(s)))]),_:2},1024)):b("",!0)]),_:1})]),E(ct)],4),n("div",{class:"layout-mask",onClick:a[1]||(a[1]=()=>t.value=!t.value)})],2)}}});export{En as default};
