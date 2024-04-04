import{d as Z,u as se,r as N,o as oe,G as n,a as ae,b as m,c as F,e as l,f as r,g as b,w as O,n as A,t as g,h,F as M,i as Q,j as o,p as le,k as ce,_ as ee,B as de,s as te,m as p,l as D,q as z,v as Y,x as V,y as w,Z as X,D as K,z as fe,R as be,A as he,C as ve,E as $,T as ye,H as ge,I as _e,J as ne,S as ke}from"./index-bgL8X-Vz.js";import{p as Ee}from"./province.store-NbI71vs1.js";import{r as Se}from"./real-estate-service.store-VYIX88cI.js";import{d as we}from"./district.store-0hGOTwGs.js";import{c as Re}from"./country.store-KoAKmOD6.js";import{r as Ie}from"./rent-store-7lpwXM3-.js";import{s as Ae}from"./index.esm-7Ogb4HD4.js";import{u as Ce}from"./auth.store-8VgpMSN2.js";import{s as xe}from"./dropdown.esm-kBrI3kap.js";import{a as Ne}from"./user.store-LdTFx-cX.js";import{s as Oe}from"./progressspinner.esm-gg9GBTAd.js";import"./axios.config-gXfSTYZr.js";import"./service-nuWS6klM.js";import"./format.date--bimoUa2.js";import"./overlayeventbus.esm-Dh5SKjDP.js";const U=e=>(le("data-v-3241cab1"),e=e(),ce(),e),De={class:"shadow-1 h-screen fixed z-2 surface-overlay"},Ue={class:"flex flex-column h-full white-space-nowrap"},Le={class:"flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"},Pe=U(()=>r("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"38px"}},null,-1)),$e=U(()=>r("br",null,null,-1)),Me={class:"overflow-y-auto"},Be={class:"list-none p-0 m-0 overflow-hidden"},Te={key:0},Ve=U(()=>r("i",{class:"pi pi-chart-line mr-2"},null,-1)),We={class:"font-medium"},je={key:1},Ke=U(()=>r("i",{class:"pi pi-users mr-2"},null,-1)),Fe={class:"font-medium"},ze={key:2},Ye=U(()=>r("i",{class:"pi pi-chart-line mr-2"},null,-1)),Ze={class:"font-medium"},qe={class:"list-none p-0 m-0 overflow-hidden"},Ge={class:"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"},He={class:"font-medium"},Je=U(()=>r("i",{class:"pi pi-chevron-down ml-auto"},null,-1)),Xe=["onClick"],Qe=U(()=>r("i",{class:"pi pi-chart-line mr-2"},null,-1)),et={class:"font-medium"},tt={key:0,class:"inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle",style:{"min-width":"1.5rem",height:"1.5rem","font-size":"14px !important","background-color":"#d13438 !important"}},nt=Z({__name:"AppSidebar",setup(e){const{t}=se(),{getAllAppointmentPending:i,appointmentPending:a}=Ie(),{setStateFilter:c}=we(),{setStateFilter:s}=Ee(),{setStateFilter:_}=Re(),{setStateFilter:E}=Se(),C=N(0);oe(async()=>{(d.includes(n.ADMIN_OWNER)||d.includes(n.USER_OWNER))&&(await i(),C.value=a.data.props?a.data.props:0)});const y=ae(),G=[{key:"1",label:t("sidebar.settings"),icon:"pi pi-cog",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.country"),name:"admin-country",icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.COUNTRY.VIEW},{key:"2",label:t("sidebar.province"),name:"admin-province",icon:"pi pi-chart-line",color:"text-red-500",to:"province",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.PROVINCE.VIEW},{key:"3",label:t("sidebar.district"),name:"admin-district",icon:"pi pi-chart-line",color:"text-red-500",to:"district",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.DISTRICT.VIEW},{key:"4",label:t("sidebar.service"),name:"admin-service-charge",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.services",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.SERVICE_CHARGE.VIEW},{key:"5",label:t("sidebar.user"),name:"admin-user",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.user",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.ADMIN_USER.VIEW},{key:"6",label:t("sidebar.house"),name:"owner-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.house",roles:[n.ADMIN_OWNER,n.USER_OWNER],permission:m.REAL_ESTATE.VIEW},{key:"7",label:t("sidebar.payment_service"),name:"owner-payment-service",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.payment.service",roles:[n.ADMIN_OWNER,n.USER_OWNER],permission:m.PAYMENT_REAL_ESTATE.VIEW},{key:"8",label:t("sidebar.appointment"),name:"owner-appointment",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.appointment",qty:C,roles:[n.ADMIN_OWNER,n.USER_OWNER],permission:m.APPOINTMENT.VIEW},{key:"9",label:t("sidebar.rent_buy"),name:"owner-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.rent.buy",roles:[n.ADMIN_OWNER,n.USER_OWNER],permission:m.RENT_BUY.VIEW},{key:"10",label:t("sidebar.user"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.user",roles:[n.ADMIN_OWNER,n.USER_OWNER],permission:m.OWNER_USER.VIEW},{key:"11",label:t("sidebar.real_estate_type"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.type",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.REAL_ESTATE_TYPE.VIEW},{key:"12",label:t("sidebar.footer"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"footer",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.FOOTER.VIEW},{key:"13",label:t("sidebar.policy"),name:"admin-policy",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.policy",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.PROVINCE.VIEW},{key:"14",label:t("sidebar.about"),name:"admin-about",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.about",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.PROVINCE.VIEW},{key:"15",label:t("sidebar.warning"),name:"admin-warning",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.warning",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.PROVINCE.VIEW}]},{key:"1",label:t("sidebar.report"),icon:"pi pi-chart-line",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.report_real_estate"),name:"admin-report-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"report.real.estate",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.REAL_ESTATE.VIEW},{key:"2",label:t("sidebar.report_rent_buy"),name:"admin-report-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"report.rent.buy",roles:[n.SUPER_ADMIN,n.ADMIN,n.USER],permission:m.RENT_BUY.VIEW}]}],j=["province","country","district","real.estate.services"],L=async S=>{j.includes(S)&&(_.page=1,_.limit=10,c.page=1,c.limit=10,s.page=1,s.limit=10,E.page=1,E.limit=10)},P=async S=>{await L(S),y.push({name:S})},B=localStorage.getItem("roles")||"",d=B?JSON.parse(B):[],H=localStorage.getItem("permissions")||"",T=B?JSON.parse(H):[],k=()=>!!(d.includes(n.SUPER_ADMIN)||d.includes(n.ADMIN)),f=S=>d.includes(n.SUPER_ADMIN)||d.includes(n.ADMIN)?!0:T.includes(S),R=(S,u,v)=>d.includes(n.SUPER_ADMIN)||d.includes(n.ADMIN)||d.includes(n.ADMIN_OWNER)?S.some(J=>d.includes(J)):v==="owner-user"?!!(u==="view-user"&&d.includes(n.USER_OWNER)):v==="admin-user"?!!(u==="view-user"&&d.includes(n.USER)):v==="owner-real-estate"?!!(u==="view-real-estate"&&d.includes(n.USER_OWNER)):v==="admin-real-estate"?!!(u==="view-real-estate"&&d.includes(n.USER)):v==="owner-appointment"?!!(u==="view-appointment"&&d.includes(n.USER_OWNER)):v==="admin-appointment"?!!(u==="view-appointment"&&d.includes(n.USER)):v==="owner-rent-buy"?!!(u==="view-rent-buy"&&d.includes(n.USER_OWNER)):v==="admin-rent-buy"?!!(u==="view-rent-buy"&&d.includes(n.USER)):v==="admin-report-real-estate"?!!(u==="view-real-estate"&&d.includes(n.USER)):v==="admin-report-rent-buy"?!!(u==="view-rent-buy"&&d.includes(n.USER)):T.includes(u);return(S,u)=>{const v=F("ripple"),J=F("styleclass");return o(),l("aside",De,[r("div",Ue,[r("div",Le,[Pe,r("span",{class:"font-bold text-3xl",style:{"margin-left":"10px"},onClick:u[0]||(u[0]=I=>b(y).push({name:"home"}))},"UK LAO")]),$e,r("div",Me,[r("ul",Be,[k()?(o(),l("li",Te,[O((o(),l("a",{onClick:u[1]||(u[1]=I=>P("dashboard")),class:A([{"bg-highlight":b(y).currentRoute.value.name==="dashboard"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ve,r("span",We,g(S.$t("sidebar.dashboard")),1)],2)),[[v]])])):h("",!0),f(b(m).CUSTOMER.VIEW)?(o(),l("li",je,[O((o(),l("a",{onClick:u[2]||(u[2]=I=>P("customer")),class:A([{"bg-highlight":b(y).currentRoute.value.name==="customer"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ke,r("span",Fe,g(S.$t("sidebar.customer")),1)],2)),[[v]])])):h("",!0),f(b(m).PAYMENT_HISTORY.VIEW)?(o(),l("li",ze,[O((o(),l("a",{onClick:u[3]||(u[3]=I=>P("admin.payment.history")),class:A([{"bg-highlight":b(y).currentRoute.value.name==="admin.payment.history"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ye,r("span",Ze,g(S.$t("sidebar.payment_service")),1)],2)),[[v]])])):h("",!0)]),r("ul",qe,[(o(),l(M,null,Q(G,I=>r("li",{key:I.key},[O((o(),l("div",Ge,[r("i",{class:A(`${I.icon} ${I.color} mr-2`)},null,2),r("span",He,g(I.label),1),Je])),[[v],[J,{selector:"@next",enterClass:"hidden",enterActiveClass:"slidedown",leaveToClass:"hidden",leaveActiveClass:"slideup"}]]),r("ul",{class:A(["list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",{hidden:!["province","country","district","real.estate.services","owner.house","owner.payment.service","admin.user","owner.appointment","owner.rent.buy","owner.user","owner.add.user","owner.edit.user","real.estate.type","footer","report.real.estate","admin.policy","admin.edit.policy","admin.about","admin.edit.about","admin.warning","admin.edit.warning"].includes(String(b(y).currentRoute.value.name))}])},[(o(!0),l(M,null,Q(I.children,x=>(o(),l("li",{key:I.key},[R(x.roles,x.permission,x.name)?O((o(),l("a",{key:0,onClick:tn=>P(x.to),class:A([{"bg-highlight":b(y).currentRoute.value.name===x.to},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Qe,r("span",et,g(x.label),1),x.qty?(o(),l("span",tt,g(x.qty),1)):h("",!0)],10,Xe)),[[v]]):h("",!0)]))),128))],2)])),64))])])])])}}}),it=ee(nt,[["__scopeId","data-v-3241cab1"]]),rt={},st={class:"layout-footer flex flex-column text-white font-bold surface-overlay"},ot=r("span",{class:"font-medium ml-2 text-color"},"Ⓒ2023 | All Rights Reserved",-1),at=[ot];function lt(e,t){return o(),l("footer",st,at)}const ct=ee(rt,[["render",lt]]);var dt=`
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
`,ut={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(t){var i=t.instance;return["p-menuitem",{"p-disabled":i.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},pt=de.extend({name:"breadcrumb",css:dt,classes:ut}),mt={name:"BaseBreadcrumb",extends:te,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:pt,provide:function(){return{$parentInstance:this}}},ue={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:te,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,i=t.to,a=t.url,c=typeof window<"u"?window.location.pathname:"";return i===c||a===c?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:p({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("action",this.ptmOptions)),icon:p({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:p({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},ft=["href","target","aria-current"];function bt(e,t,i,a,c,s){return s.visible()?(o(),l("li",p({key:0,class:[e.cx("menuitem"),i.item.class]},e.ptm("menuitem",s.ptmOptions)),[i.templates.item?(o(),D(z(i.templates.item),{key:1,item:i.item,label:s.label(),props:s.getMenuItemProps},null,8,["item","label","props"])):(o(),l("a",p({key:0,href:i.item.url||"#",class:e.cx("action"),target:i.item.target,"aria-current":s.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("action",s.ptmOptions)),[i.templates&&i.templates.itemicon?(o(),D(z(i.templates.itemicon),{key:0,item:i.item,class:A(e.cx("icon",s.ptmOptions))},null,8,["item","class"])):i.item.icon?(o(),l("span",p({key:1,class:[e.cx("icon"),i.item.icon]},e.ptm("icon",s.ptmOptions)),null,16)):h("",!0),i.item.label?(o(),l("span",p({key:2,class:e.cx("label")},e.ptm("label",s.ptmOptions)),g(s.label()),17)):h("",!0)],16,ft))],16)):h("",!0)}ue.render=bt;var pe={name:"Breadcrumb",extends:mt,components:{BreadcrumbItem:ue,ChevronRightIcon:Ae}};function ht(e,t,i,a,c,s){var _=Y("BreadcrumbItem"),E=Y("ChevronRightIcon");return o(),l("nav",p({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[r("ol",p({class:e.cx("menu")},e.ptm("menu")),[e.home?(o(),D(_,p({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):h("",!0),(o(!0),l(M,null,Q(e.model,function(C,y){return o(),l(M,{key:C.label+"_"+y},[e.home||y!==0?(o(),l("li",p({key:0,class:e.cx("separator")},e.ptm("separator")),[V(e.$slots,"separator",{},function(){return[w(E,p({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):h("",!0),w(_,{item:C,index:y,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}pe.render=ht;var vt=`
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
`,yt={mask:function(t){var i=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:i==="left"?"flex-start":i==="right"?"flex-end":"center",alignItems:i==="top"?"flex-start":i==="bottom"?"flex-end":"center"}}},gt={mask:function(t){var i=t.instance,a=t.props,c=["left","right","top","bottom"],s=c.find(function(_){return _===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":i.containerVisible,"p-sidebar-full":i.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(t){var i=t.instance;return["p-sidebar p-component",{"p-input-filled":i.$primevue.config.inputStyle==="filled","p-ripple-disabled":i.$primevue.config.ripple===!1,"p-sidebar-full":i.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},_t=de.extend({name:"sidebar",css:vt,classes:gt,inlineStyles:yt}),kt={name:"BaseSidebar",extends:te,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:_t,provide:function(){return{$parentInstance:this}}},me={name:"Sidebar",extends:kt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&X.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&X.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&K.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&X.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(c){return c&&c.querySelector("[autofocus]")},i=this.$slots.header&&t(this.headerContainer);i||(i=this.$slots.default&&t(this.container),i||(i=this.closeButton)),i&&K.focus(i)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&K.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&K.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(i){t.isOutsideClicked(i)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:fe,ripple:be},components:{Portal:he,TimesIcon:ve}};function W(e){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(e)}function ie(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),i.push.apply(i,a)}return i}function re(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ie(Object(i),!0).forEach(function(a){Et(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ie(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function Et(e,t,i){return t=St(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function St(e){var t=wt(e,"string");return W(t)=="symbol"?t:String(t)}function wt(e,t){if(W(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t||"default");if(W(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Rt=["aria-modal"],It=["aria-label"];function At(e,t,i,a,c,s){var _=Y("Portal"),E=F("ripple"),C=F("focustrap");return o(),D(_,null,{default:$(function(){return[c.containerVisible?(o(),l("div",p({key:0,ref:s.maskRef,onMousedown:t[1]||(t[1]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[w(ye,p({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:$(function(){return[e.visible?O((o(),l("div",p({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},re(re({},e.$attrs),e.ptm("root"))),[e.$slots.container?V(e.$slots,"container",{key:0,onClose:s.hide,closeCallback:s.hide}):(o(),l(M,{key:1},[r("div",p({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[V(e.$slots,"header",{class:A(e.cx("title"))},function(){return[e.header?(o(),l("div",p({key:0,class:e.cx("title")},e.ptm("title")),g(e.header),17)):h("",!0)]}),e.showCloseIcon?O((o(),l("button",p({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[V(e.$slots,"closeicon",{class:A(e.cx("closeIcon"))},function(){return[(o(),D(z(e.closeIcon?"span":"TimesIcon"),p({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,It)),[[E]]):h("",!0)],16),r("div",p({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[V(e.$slots,"default")],16)],64))],16,Rt)),[[C]]):h("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):h("",!0)]}),_:3})}me.render=At;const q=e=>(le("data-v-d9c60c8c"),e=e(),ce(),e),Ct={class:"flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground",style:{"padding-left":"1.5rem"}},xt={class:"flex align-items-center justify-content-center gap-2"},Nt=q(()=>r("i",{class:"pi pi-bars font-bold",style:{"font-size":"1rem"}},null,-1)),Ot=[Nt],Dt=["src"],Ut={class:"list-none mt-3 p-0"},Lt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Pt=q(()=>r("span",null,[r("i",{class:"pi pi-user text-xl text-color"})],-1)),$t={class:"ml-3"},Mt={class:"mb-2 font-semibold"},Bt={class:"text-color-secondary m-0"},Tt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Vt=q(()=>r("span",null,[r("i",{class:"pi pi-user"})],-1)),Wt={class:"ml-3"},jt={class:"mb-2 font-semibold"},Kt={class:"text-color-secondary m-0"},Ft={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},zt=q(()=>r("span",null,[r("i",{class:"pi pi-power-off text-xl",style:{color:"brown"}})],-1)),Yt={class:"ml-3"},Zt={class:"mb-2 font-semibold",style:{color:"brown"}},qt=Z({__name:"AppTopbar",emits:["toggleSidebar"],setup(e,{emit:t}){const{t:i}=se(),{logout:a}=Ce(),{getUserProfile:c,getProfile:s}=Ne(),_=N([]),E=N(!1),C=t,y=N(),G=ge(),j=ae(),L=N(),P=N([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vi"},{name:"China",code:"lk"}]),B=()=>{E.value=!1,j.push({name:"admin.user.profile"})},d=()=>{E.value=!1,j.push({name:"owner.user.profile"})},H=async()=>{await localStorage.setItem("locale",L.value),window.location.reload()};function T(k){_.value=[],k.matched.forEach((f,R)=>{R!==0&&_.value.push(f.meta.label)}),y.value=_.value.map(f=>({label:i(f)}))}return _e(k=>{T(k)}),oe(async()=>{const k=localStorage.getItem("locale")||"en";L.value=k,T(G),await s()}),(k,f)=>(o(),l(M,null,[r("header",Ct,[r("div",xt,[r("div",{class:"cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500",style:{width:"40px",height:"40px"},onClick:f[0]||(f[0]=R=>C("toggleSidebar"))},Ot),w(b(pe),{model:y.value,pt:{root:{class:"surface-ground border-none"},icon:{class:"text-indigo-500"},label:{class:"font-bold text-400"}}},null,8,["model"])]),r("div",null,[w(b(xe),{modelValue:L.value,"onUpdate:modelValue":f[1]||(f[1]=R=>L.value=R),options:P.value,optionLabel:"name",class:"w-full",optionValue:"code",highlightOnSelect:!0,onChange:H},null,8,["modelValue","options"])]),r("div",null,[r("a",{class:"cursor-pointer",onClick:f[2]||(f[2]=R=>E.value=!0)},[r("img",{src:b(c).data.props.profile,class:"mr-3 bg-no-repeat border-circle lg:mr-0",style:{width:"32px",height:"32px"}},null,8,Dt)])])]),w(b(me),{visible:E.value,"onUpdate:visible":f[4]||(f[4]=R=>E.value=R),position:"right",class:"w-full sm:w-25rem"},{default:$(()=>[r("h2",null,g(b(c).data.props.name),1),r("ul",Ut,[b(c).data.props.role.name==="admin-owner"?(o(),l("li",{key:0,onClick:d},[r("a",Lt,[Pt,r("div",$t,[r("span",Mt,g(k.$t("messages.profile")),1),r("p",Bt,g(k.$t("messages.my_profile")),1)])])])):h("",!0),b(c).data.props.role.name!=="admin-owner"?(o(),l("li",{key:1,onClick:B},[r("a",Tt,[Vt,r("div",Wt,[r("span",jt,g(k.$t("messages.profile")),1),r("p",Kt,g(k.$t("messages.my_profile")),1)])])])):h("",!0),r("li",{onClick:f[3]||(f[3]=R=>b(a)())},[r("a",Ft,[zt,r("div",Yt,[r("span",Zt,g(k.$t("messages.sign_out")),1)])])])])]),_:1},8,["visible"])],64))}}),Gt=ee(qt,[["__scopeId","data-v-d9c60c8c"]]),Ht={class:"flex flex-column justify-content-center align-items-center text-center",style:{"margin-top":"150px"}},Jt={class:"mb-3"},Xt=r("div",null,[r("h3",null,"ກຳລັງໂຫຼດ...")],-1),Qt=Z({__name:"LoadingComponent",setup(e){return(t,i)=>(o(),l("div",Ht,[r("div",Jt,[w(b(Oe))]),Xt]))}}),en={class:"layout-main-container surface-ground"},yn=Z({__name:"AppLayout",setup(e){const t=N(!0);return(i,a)=>{const c=Y("router-view");return o(),l("div",{class:A([t.value?"layout-mobile-active":"","layout-container"])},[w(it,{style:ne(t.value?"width: 15rem;":"width: 0rem")},null,8,["style"]),r("div",{class:"layout-content",style:ne([t.value?"":"margin-left: 0rem;transition: 0.2s ease-in-out;",{overflow:"hidden"}])},[w(Gt,{onToggleSidebar:a[0]||(a[0]=()=>t.value=!t.value)}),r("main",en,[w(c,null,{default:$(({Component:s})=>[s?(o(),D(ke,{key:0},{fallback:$(()=>[w(Qt)]),default:$(()=>[(o(),D(z(s)))]),_:2},1024)):h("",!0)]),_:1})]),w(ct)],4),r("div",{class:"layout-mask",onClick:a[1]||(a[1]=()=>t.value=!t.value)})],2)}}});export{yn as default};
