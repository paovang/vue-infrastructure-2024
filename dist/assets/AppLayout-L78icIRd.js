import{d as Z,u as oe,r as A,o as ae,G as r,a as le,b as m,c as z,e as l,f as i,g as c,w as U,n as R,t as y,h as f,F as M,i as ee,j as o,p as ce,k as de,_ as te,B as ue,s as ne,m as b,l as P,q,v as Y,x as T,y as S,Z as Q,D as F,z as fe,R as he,A as ve,C as ye,E as L,T as ge,H as _e,I as ke,J as ie,S as Se}from"./index-vDbwuxIV.js";import{p as we}from"./province.store-Cj_1aMZo.js";import{r as Ee}from"./real-estate-service.store-crVA_nlm.js";import{d as Ie}from"./district.store-AnlBgrv9.js";import{c as Re}from"./country.store-TdaEmuop.js";import{r as xe}from"./rent-store-tyjXovPF.js";import{s as Ae}from"./index.esm-58Drw6ci.js";import{u as Ce}from"./auth.store-1acBAEUK.js";import{s as Ne}from"./dropdown.esm-7TMhJ-KI.js";import{a as De}from"./user.store-D8aeHErF.js";import{c as Oe,_ as $e}from"./Change-User-Password.Component.vue_vue_type_script_setup_true_lang-OVYYC-v_.js";import{s as Ue}from"./progressspinner.esm-FkvwOCY-.js";import"./axios.config-EMV3l8KB.js";import"./service-uUjPpI3s.js";import"./overlayeventbus.esm-C5PELJAx.js";import"./FormInputPassword.vue_vue_type_script_setup_true_lang-RYdqxv91.js";import"./index.esm-clTnvdWN.js";import"./inputtext.esm-7NLY9XRf.js";import"./vee-validate.esm-W6fgz4lt.js";import"./index.esm-bZL4G4AX.js";const O=e=>(ce("data-v-133dbe56"),e=e(),de(),e),Pe={class:"shadow-1 h-screen fixed z-2 surface-overlay"},Le={class:"flex flex-column h-full white-space-nowrap"},Me={class:"flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"},Be=O(()=>i("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"38px"}},null,-1)),Te=O(()=>i("br",null,null,-1)),We={class:"overflow-y-auto"},Ve={class:"list-none p-0 m-0 overflow-hidden"},je={key:0},Ke=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),Fe={class:"font-medium"},ze={key:1},qe=O(()=>i("i",{class:"pi pi-users mr-2"},null,-1)),Ye={class:"font-medium"},Ze={key:2},Ge=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),He={class:"font-medium"},Je=O(()=>i("span",{class:"inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle",style:{"min-width":"1.5rem",height:"1.5rem","font-size":"14px !important","background-color":"#d13438 !important"}}," 0 ",-1)),Xe={class:"list-none p-0 m-0 overflow-hidden"},Qe={key:0,class:"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"},et={class:"font-medium"},tt=O(()=>i("i",{class:"pi pi-chevron-down ml-auto"},null,-1)),nt=["onClick"],it=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),rt={class:"font-medium"},st={key:0,class:"inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle",style:{"min-width":"1.5rem",height:"1.5rem","font-size":"14px !important","background-color":"#d13438 !important"}},ot=Z({__name:"AppSidebar",emits:["showHotelSidebar"],setup(e,{emit:t}){const{t:n}=oe(),{getAllAppointmentPending:a,appointmentPending:u}=xe(),{setStateFilter:s}=Ie(),{setStateFilter:w}=we(),{setStateFilter:C}=Re(),{setStateFilter:x}=Ee(),I=A(0);ae(async()=>{(v.includes(r.ADMIN_OWNER)||v.includes(r.USER_OWNER))&&(await a(),I.value=u.data.props?u.data.props:0)});const g=le(),G=[{key:"1",label:n("sidebar.settings"),icon:"pi pi-cog",color:"text-black-500",to:"settings",children:[{key:"1",label:n("sidebar.country"),name:"admin-country",icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.COUNTRY.VIEW},{key:"2",label:n("sidebar.province"),name:"admin-province",icon:"pi pi-chart-line",color:"text-red-500",to:"province",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.PROVINCE.VIEW},{key:"3",label:n("sidebar.district"),name:"admin-district",icon:"pi pi-chart-line",color:"text-red-500",to:"district",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.DISTRICT.VIEW},{key:"4",label:n("sidebar.service"),name:"admin-service-charge",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.services",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.SERVICE_CHARGE.VIEW},{key:"5",label:n("sidebar.user"),name:"admin-user",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.user",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.ADMIN_USER.VIEW},{key:"6",label:n("sidebar.house"),name:"owner-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.house",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:m.REAL_ESTATE.VIEW},{key:"7",label:n("sidebar.payment_service"),name:"owner-payment-service",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.payment.service",qty:0,roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:m.PAYMENT_REAL_ESTATE.VIEW},{key:"8",label:n("sidebar.appointment"),name:"owner-appointment",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.appointment",qty:I,roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:m.APPOINTMENT.VIEW},{key:"9",label:n("sidebar.rent_buy"),name:"owner-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.rent.buy",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:m.RENT_BUY.VIEW},{key:"10",label:n("sidebar.user"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.user",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:m.OWNER_USER.VIEW},{key:"11",label:n("sidebar.real_estate_type"),name:"admin-real_estate_type",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.type",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.REAL_ESTATE_TYPE.VIEW},{key:"12",label:n("sidebar.footer"),name:"admin-footer",icon:"pi pi-chart-line",color:"text-red-500",to:"footer",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.FOOTER.VIEW},{key:"13",label:n("sidebar.policy"),name:"admin-policy",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.policy",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.POLICY.VIEW},{key:"14",label:n("sidebar.about"),name:"admin-about-us",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.about",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.ABOUT_US.VIEW},{key:"15",label:n("sidebar.warning"),name:"admin-warning",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.warning",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.WARNING.VIEW},{key:"16",label:n("sidebar.qrcode_bank"),name:"admin-qrocde-bank",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.qrcode.bank",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.BANK_QRCODE.VIEW}]},{key:"2",label:n("sidebar.report"),icon:"pi pi-chart-line",color:"text-black-500",to:"settings",children:[{key:"1",label:n("sidebar.report_real_estate"),name:"admin-report-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"report.real.estate",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.REPORT_REAL_ESTATE.VIEW},{key:"2",label:n("sidebar.report_rent_buy"),name:"admin-report-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"report.rent.buy",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:m.REPORT_RENT_Buy.VIEW}]}],V=["province","country","district","real.estate.services"],H=async _=>{V.includes(_)&&(C.page=1,C.limit=10,s.page=1,s.limit=10,w.page=1,w.limit=10,x.page=1,x.limit=10)},N=async _=>{await H(_),g.push({name:_})},D=localStorage.getItem("roles")||"",v=D?JSON.parse(D):[],j=localStorage.getItem("permissions")||"",$=D?JSON.parse(j):[],J=()=>!!(v.includes(r.SUPER_ADMIN)||v.includes(r.ADMIN)),K=_=>v.includes(r.SUPER_ADMIN)||v.includes(r.ADMIN)?!0:$.includes(_),X=(_,k,E)=>v.includes(r.SUPER_ADMIN)||v.includes(r.ADMIN)||v.includes(r.ADMIN_OWNER)?_.some(p=>v.includes(p)):E==="owner-user"?!!($.includes(k)&&v.includes(r.USER_OWNER)):E==="admin-user"?!!($.includes(k)&&v.includes(r.USER)):$.includes(k);return(_,k)=>{const E=z("ripple"),p=z("styleclass");return o(),l("aside",Pe,[i("div",Le,[i("div",Me,[Be,i("span",{class:"font-bold text-3xl",style:{"margin-left":"10px"},onClick:k[0]||(k[0]=d=>c(g).push({name:"home"}))},"UK LAO")]),Te,i("div",We,[i("ul",Ve,[J()?(o(),l("li",je,[U((o(),l("a",{onClick:k[1]||(k[1]=d=>N("dashboard")),class:R([{"bg-highlight":c(g).currentRoute.value.name==="dashboard"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ke,i("span",Fe,y(_.$t("sidebar.dashboard")),1)],2)),[[E]])])):f("",!0),K(c(m).CUSTOMER.VIEW)?(o(),l("li",ze,[U((o(),l("a",{onClick:k[2]||(k[2]=d=>N("customer")),class:R([{"bg-highlight":c(g).currentRoute.value.name==="customer"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[qe,i("span",Ye,y(_.$t("sidebar.customer")),1)],2)),[[E]])])):f("",!0),K(c(m).PAYMENT_HISTORY.VIEW)?(o(),l("li",Ze,[U((o(),l("a",{onClick:k[3]||(k[3]=d=>N("admin.payment.history")),class:R([{"bg-highlight":c(g).currentRoute.value.name==="admin.payment.history"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ge,i("span",He,y(_.$t("sidebar.payment_service")),1),Je],2)),[[E]])])):f("",!0)]),i("ul",Xe,[(o(),l(M,null,ee(G,d=>i("li",{key:d.key},[d.key==="1"||c(v).includes(c(r).SUPER_ADMIN)||c(v).includes(c(r).ADMIN)||c(v).includes(c(r).USER)?U((o(),l("div",Qe,[i("i",{class:R(`${d.icon} ${d.color} mr-2`)},null,2),i("span",et,y(d.label),1),tt])),[[E],[p,{selector:"@next",enterClass:"hidden",enterActiveClass:"slidedown",leaveToClass:"hidden",leaveActiveClass:"slideup"}]]):f("",!0),i("ul",{class:R(["list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",{hidden:!["province","country","district","real.estate.services","owner.house","owner.payment.service","admin.user","owner.appointment","owner.rent.buy","owner.user","owner.add.user","owner.edit.user","real.estate.type","footer","report.real.estate","admin.policy","admin.edit.policy","admin.about","admin.edit.about","admin.warning","admin.edit.warning","admin.qrcode.bank","report.rent.buy","translate.real.estate.type"].includes(String(c(g).currentRoute.value.name))}])},[(o(!0),l(M,null,ee(d.children,h=>(o(),l("li",{key:d.key},[X(h.roles,h.permission,h.name)?U((o(),l("a",{key:0,onClick:fn=>N(h.to),class:R([{"bg-highlight":c(g).currentRoute.value.name===h.to},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[it,i("span",rt,y(h.label),1),h.qty?(o(),l("span",st,y(h.qty),1)):f("",!0)],10,nt)),[[E]]):f("",!0)]))),128))],2)])),64))])])])])}}}),at=te(ot,[["__scopeId","data-v-133dbe56"]]),lt={},ct={class:"layout-footer flex flex-column text-white font-bold surface-overlay"},dt=i("span",{class:"font-medium ml-2 text-color"},"Ⓒ2023 | All Rights Reserved",-1),ut=[dt];function pt(e,t){return o(),l("footer",ct,ut)}const mt=te(lt,[["render",pt]]);var bt=`
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
`,ft={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(t){var n=t.instance;return["p-menuitem",{"p-disabled":n.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},ht=ue.extend({name:"breadcrumb",css:bt,classes:ft}),vt={name:"BaseBreadcrumb",extends:ne,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:ht,provide:function(){return{$parentInstance:this}}},pe={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:ne,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,a=t.url,u=typeof window<"u"?window.location.pathname:"";return n===u||a===u?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:b({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("action",this.ptmOptions)),icon:b({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:b({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},yt=["href","target","aria-current"];function gt(e,t,n,a,u,s){return s.visible()?(o(),l("li",b({key:0,class:[e.cx("menuitem"),n.item.class]},e.ptm("menuitem",s.ptmOptions)),[n.templates.item?(o(),P(q(n.templates.item),{key:1,item:n.item,label:s.label(),props:s.getMenuItemProps},null,8,["item","label","props"])):(o(),l("a",b({key:0,href:n.item.url||"#",class:e.cx("action"),target:n.item.target,"aria-current":s.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("action",s.ptmOptions)),[n.templates&&n.templates.itemicon?(o(),P(q(n.templates.itemicon),{key:0,item:n.item,class:R(e.cx("icon",s.ptmOptions))},null,8,["item","class"])):n.item.icon?(o(),l("span",b({key:1,class:[e.cx("icon"),n.item.icon]},e.ptm("icon",s.ptmOptions)),null,16)):f("",!0),n.item.label?(o(),l("span",b({key:2,class:e.cx("label")},e.ptm("label",s.ptmOptions)),y(s.label()),17)):f("",!0)],16,yt))],16)):f("",!0)}pe.render=gt;var me={name:"Breadcrumb",extends:vt,components:{BreadcrumbItem:pe,ChevronRightIcon:Ae}};function _t(e,t,n,a,u,s){var w=Y("BreadcrumbItem"),C=Y("ChevronRightIcon");return o(),l("nav",b({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[i("ol",b({class:e.cx("menu")},e.ptm("menu")),[e.home?(o(),P(w,b({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):f("",!0),(o(!0),l(M,null,ee(e.model,function(x,I){return o(),l(M,{key:x.label+"_"+I},[e.home||I!==0?(o(),l("li",b({key:0,class:e.cx("separator")},e.ptm("separator")),[T(e.$slots,"separator",{},function(){return[S(C,b({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):f("",!0),S(w,{item:x,index:I,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}me.render=_t;var kt=`
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
`,St={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},wt={mask:function(t){var n=t.instance,a=t.props,u=["left","right","top","bottom"],s=u.find(function(w){return w===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(t){var n=t.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},Et=ue.extend({name:"sidebar",css:kt,classes:wt,inlineStyles:St}),It={name:"BaseSidebar",extends:ne,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Et,provide:function(){return{$parentInstance:this}}},be={name:"Sidebar",extends:It,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&Q.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&Q.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&F.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&Q.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(u){return u&&u.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.closeButton)),n&&F.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&F.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&F.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:fe,ripple:he},components:{Portal:ve,TimesIcon:ye}};function W(e){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(e)}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?re(Object(n),!0).forEach(function(a){Rt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Rt(e,t,n){return t=xt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xt(e){var t=At(e,"string");return W(t)=="symbol"?t:String(t)}function At(e,t){if(W(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(W(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ct=["aria-modal"],Nt=["aria-label"];function Dt(e,t,n,a,u,s){var w=Y("Portal"),C=z("ripple"),x=z("focustrap");return o(),P(w,null,{default:L(function(){return[u.containerVisible?(o(),l("div",b({key:0,ref:s.maskRef,onMousedown:t[1]||(t[1]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[S(ge,b({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:L(function(){return[e.visible?U((o(),l("div",b({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},se(se({},e.$attrs),e.ptm("root"))),[e.$slots.container?T(e.$slots,"container",{key:0,onClose:s.hide,closeCallback:s.hide}):(o(),l(M,{key:1},[i("div",b({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[T(e.$slots,"header",{class:R(e.cx("title"))},function(){return[e.header?(o(),l("div",b({key:0,class:e.cx("title")},e.ptm("title")),y(e.header),17)):f("",!0)]}),e.showCloseIcon?U((o(),l("button",b({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[T(e.$slots,"closeicon",{class:R(e.cx("closeIcon"))},function(){return[(o(),P(q(e.closeIcon?"span":"TimesIcon"),b({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,Nt)),[[C]]):f("",!0)],16),i("div",b({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[T(e.$slots,"default")],16)],64))],16,Ct)),[[x]]):f("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):f("",!0)]}),_:3})}be.render=Dt;const B=e=>(ce("data-v-5e09d4b1"),e=e(),de(),e),Ot={class:"flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground",style:{"padding-left":"1.5rem"}},$t={class:"flex align-items-center justify-content-center gap-2"},Ut=B(()=>i("i",{class:"pi pi-bars font-bold",style:{"font-size":"1rem"}},null,-1)),Pt=[Ut],Lt=["src"],Mt={class:"list-none mt-3 p-0"},Bt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Tt=B(()=>i("span",null,[i("i",{class:"pi pi-user text-xl text-color"})],-1)),Wt={class:"ml-3"},Vt={class:"mb-2 font-semibold"},jt={class:"text-color-secondary m-0"},Kt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Ft=B(()=>i("span",null,[i("i",{class:"pi pi-user text-xl text-color"})],-1)),zt={class:"ml-3"},qt={class:"mb-2 font-semibold"},Yt={class:"text-color-secondary m-0"},Zt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Gt=B(()=>i("span",null,[i("i",{class:"pi pi-user"})],-1)),Ht={class:"ml-3"},Jt={class:"mb-2 font-semibold"},Xt={class:"text-color-secondary m-0"},Qt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},en=B(()=>i("span",null,[i("i",{class:"pi pi-lock text-xl text-color"})],-1)),tn={class:"ml-3"},nn={class:"mb-2 font-semibold"},rn={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},sn=B(()=>i("span",null,[i("i",{class:"pi pi-power-off text-xl",style:{color:"brown"}})],-1)),on={class:"ml-3"},an={class:"mb-2 font-semibold",style:{color:"brown"}},ln=Z({__name:"AppTopbar",emits:["toggleSidebar"],setup(e,{emit:t}){const{t:n}=oe(),{logout:a}=Ce(),{getUserProfile:u,getProfile:s}=De(),{form:w,state:C,changeUserPassword:x}=Oe(),I=A([]),g=A(!1),G=t,V=A(),H=_e(),N=le(),D=A(),v=A([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vn"},{name:"China",code:"cn"}]),j=A(),$=A(),J=async p=>{g.value=!1,$.value=p,j.value.visible=!0},K=()=>{g.value=!1,N.push({name:"admin.user.profile"})},X=()=>{g.value=!1,N.push({name:"owner.user.profile"})},_=()=>{g.value=!1,N.push({name:"owner.user.owner.profile"})},k=async()=>{await localStorage.setItem("locale",D.value),window.location.reload()};function E(p){I.value=[],p.matched.forEach((d,h)=>{h!==0&&I.value.push(d.meta.label)}),V.value=I.value.map(d=>({label:n(d)}))}return ke(p=>{E(p)}),ae(async()=>{const p=localStorage.getItem("locale")||"en";D.value=p,E(H),await s()}),(p,d)=>(o(),l(M,null,[i("header",Ot,[i("div",$t,[i("div",{class:"cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500",style:{width:"40px",height:"40px"},onClick:d[0]||(d[0]=h=>G("toggleSidebar"))},Pt),S(c(me),{model:V.value,pt:{root:{class:"surface-ground border-none"},icon:{class:"text-indigo-500"},label:{class:"font-bold text-400"}}},null,8,["model"])]),i("div",null,[S(c(Ne),{modelValue:D.value,"onUpdate:modelValue":d[1]||(d[1]=h=>D.value=h),options:v.value,optionLabel:"name",class:"w-full",optionValue:"code",highlightOnSelect:!0,onChange:k},null,8,["modelValue","options"])]),i("div",null,[i("a",{class:"cursor-pointer",onClick:d[2]||(d[2]=h=>g.value=!0)},[i("img",{src:c(u).data.props.profile,class:"mr-3 bg-no-repeat border-circle lg:mr-0",style:{width:"32px",height:"32px"}},null,8,Lt)])])]),S(c(be),{visible:g.value,"onUpdate:visible":d[5]||(d[5]=h=>g.value=h),position:"right",class:"w-full sm:w-25rem"},{default:L(()=>[i("h2",null,y(c(u).data.props.name),1),i("ul",Mt,[c(u).data.props.role.name==="admin-owner"?(o(),l("li",{key:0,onClick:X},[i("a",Bt,[Tt,i("div",Wt,[i("span",Vt,y(p.$t("messages.profile")),1),i("p",jt,y(p.$t("messages.my_profile")),1)])])])):f("",!0),c(u).data.props.role.name==="user-owner"?(o(),l("li",{key:1,onClick:_},[i("a",Kt,[Ft,i("div",zt,[i("span",qt,y(p.$t("messages.profile")),1),i("p",Yt,y(p.$t("messages.my_profile")),1)])])])):f("",!0),c(u).data.props.role.name!=="admin-owner"&&c(u).data.props.role.name!=="user-owner"?(o(),l("li",{key:2,onClick:K},[i("a",Zt,[Gt,i("div",Ht,[i("span",Jt,y(p.$t("messages.profile")),1),i("p",Xt,y(p.$t("messages.my_profile")),1)])])])):f("",!0),i("li",{onClick:d[3]||(d[3]=h=>J(c(u).data.props.id))},[i("a",Qt,[en,i("div",tn,[i("span",nn,y(p.$t("messages.change_password")),1)])])]),i("li",{onClick:d[4]||(d[4]=h=>c(a)())},[i("a",rn,[sn,i("div",on,[i("span",an,y(p.$t("messages.sign_out")),1)])])])])]),_:1},8,["visible"]),S($e,{ref_key:"editForm",ref:j,form:c(w),"user-id":$.value,"change-user-password":c(x),state:c(C)},null,8,["form","user-id","change-user-password","state"])],64))}}),cn=te(ln,[["__scopeId","data-v-5e09d4b1"]]),dn={class:"flex flex-column justify-content-center align-items-center text-center",style:{"margin-top":"150px"}},un={class:"mb-3"},pn=i("div",null,[i("h3",null,"ກຳລັງໂຫຼດ...")],-1),mn=Z({__name:"LoadingComponent",setup(e){return(t,n)=>(o(),l("div",dn,[i("div",un,[S(c(Ue))]),pn]))}}),bn={class:"layout-main-container surface-ground"},Ln=Z({__name:"AppLayout",setup(e){const t=A(!0);return(n,a)=>{const u=Y("router-view");return o(),l("div",{class:R([t.value?"layout-mobile-active":"","layout-container"])},[S(at,{style:ie(t.value?"width: 15rem;":"width: 0rem")},null,8,["style"]),i("div",{class:"layout-content",style:ie([t.value?"":"margin-left: 0rem;transition: 0.2s ease-in-out;",{overflow:"hidden"}])},[S(cn,{onToggleSidebar:a[0]||(a[0]=()=>t.value=!t.value)}),i("main",bn,[S(u,null,{default:L(({Component:s})=>[s?(o(),P(Se,{key:0},{fallback:L(()=>[S(mn)]),default:L(()=>[(o(),P(q(s)))]),_:2},1024)):f("",!0)]),_:1})]),S(mt)],4),i("div",{class:"layout-mask",onClick:a[1]||(a[1]=()=>t.value=!t.value)})],2)}}});export{Ln as default};
