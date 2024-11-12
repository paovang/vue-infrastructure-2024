import{d as H,u as ae,r as I,o as le,G as r,a as ce,b as f,c as Y,e as l,f as i,g as c,w as $,n as R,t as y,h,F as M,i as te,j as o,p as de,k as ue,_ as ne,B as pe,s as ie,m as b,l as U,q as Z,v as G,x as V,y as k,Z as ee,D as q,z as he,R as ve,A as ye,C as ge,E as L,T as _e,H as ke,I as Se,J as re,S as we}from"./index-MjRCg0YL.js";import{p as Ee}from"./province.store-2p96Wi7g.js";import{r as Ie}from"./real-estate-service.store-sWgzdwol.js";import{d as Re}from"./district.store-_2b0VM5h.js";import{c as xe}from"./country.store-RgBgqLOX.js";import{r as Ae}from"./rent-store-S8rBiTix.js";import{s as Ce}from"./index.esm-sUZKYg91.js";import{u as Ne}from"./auth.store-vkG0_6pE.js";import{s as De}from"./dropdown.esm-UQOMQvoi.js";import{a as Oe}from"./user.store-Nhsu0cIU.js";import{c as $e,_ as Ue}from"./Change-User-Password.Component.vue_vue_type_script_setup_true_lang-UL5c-6ZI.js";import{s as Pe}from"./progressspinner.esm-h-rgJSPd.js";import"./axios.config-EMV3l8KB.js";import"./service-oQCQfoSh.js";import"./overlayeventbus.esm-GnOA58Nm.js";import"./FormInputPassword.vue_vue_type_script_setup_true_lang-oPpT9Hc2.js";import"./index.esm-cZhEF_77.js";import"./inputtext.esm-UqIFFayD.js";import"./vee-validate.esm-AfGsekNX.js";import"./index.esm-K9qsEADX.js";const O=e=>(de("data-v-06f4011d"),e=e(),ue(),e),Le={class:"shadow-1 h-screen fixed z-2 surface-overlay"},Me={class:"flex flex-column h-full white-space-nowrap"},Be={class:"flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"},Te=O(()=>i("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"38px"}},null,-1)),We=O(()=>i("br",null,null,-1)),Ve={class:"overflow-y-auto"},je={class:"list-none p-0 m-0 overflow-hidden"},Ke={key:0},Fe=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),ze={class:"font-medium"},qe={key:1},Ye=O(()=>i("i",{class:"pi pi-users mr-2"},null,-1)),Ze={class:"font-medium"},Ge={key:2},He=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),Je={class:"font-medium"},Xe=O(()=>i("span",{class:"inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle",style:{"min-width":"1.5rem",height:"1.5rem","font-size":"14px !important","background-color":"#d13438 !important"}}," 0 ",-1)),Qe={class:"list-none p-0 m-0 overflow-hidden"},et={key:0,class:"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"},tt={class:"font-medium"},nt=O(()=>i("i",{class:"pi pi-chevron-down ml-auto"},null,-1)),it=["onClick"],rt=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),st={class:"font-medium"},ot={key:0,class:"inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle",style:{"min-width":"1.5rem",height:"1.5rem","font-size":"14px !important","background-color":"#d13438 !important"}},at=H({__name:"AppSidebar",emits:["showHotelSidebar"],setup(e,{emit:t}){const{t:n}=ae(),{getAllAppointmentPending:a,appointmentPending:d}=Ae(),{setStateFilter:s}=Re(),{setStateFilter:S}=Ee(),{setStateFilter:N}=xe(),{setStateFilter:x}=Ie(),w=I(0),E=I(0);le(async()=>{(v.includes(r.ADMIN_OWNER)||v.includes(r.USER_OWNER))&&(await a(),w.value=d.data.props?d.data.props.appointment:0,E.value=d.data.props?d.data.props.owner_payment_service:0)});const A=ce(),K=[{key:"1",label:n("sidebar.settings"),icon:"pi pi-cog",color:"text-black-500",to:"settings",children:[{key:"1",label:n("sidebar.country"),name:"admin-country",icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.COUNTRY.VIEW},{key:"2",label:n("sidebar.province"),name:"admin-province",icon:"pi pi-chart-line",color:"text-red-500",to:"province",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.PROVINCE.VIEW},{key:"3",label:n("sidebar.district"),name:"admin-district",icon:"pi pi-chart-line",color:"text-red-500",to:"district",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.DISTRICT.VIEW},{key:"4",label:n("sidebar.service"),name:"admin-service-charge",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.services",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.SERVICE_CHARGE.VIEW},{key:"5",label:n("sidebar.user"),name:"admin-user",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.user",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.ADMIN_USER.VIEW},{key:"6",label:n("sidebar.house"),name:"owner-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.house",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:f.REAL_ESTATE.VIEW},{key:"7",label:n("sidebar.payment_service"),name:"owner-payment-service",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.payment.service",qty:E,roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:f.PAYMENT_REAL_ESTATE.VIEW},{key:"8",label:n("sidebar.appointment"),name:"owner-appointment",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.appointment",qty:w,roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:f.APPOINTMENT.VIEW},{key:"9",label:n("sidebar.rent_buy"),name:"owner-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.rent.buy",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:f.RENT_BUY.VIEW},{key:"10",label:n("sidebar.user"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.user",roles:[r.ADMIN_OWNER,r.USER_OWNER],permission:f.OWNER_USER.VIEW},{key:"11",label:n("sidebar.real_estate_type"),name:"admin-real_estate_type",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.type",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.REAL_ESTATE_TYPE.VIEW},{key:"12",label:n("sidebar.footer"),name:"admin-footer",icon:"pi pi-chart-line",color:"text-red-500",to:"footer",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.FOOTER.VIEW},{key:"13",label:n("sidebar.policy"),name:"admin-policy",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.policy",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.POLICY.VIEW},{key:"14",label:n("sidebar.about"),name:"admin-about-us",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.about",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.ABOUT_US.VIEW},{key:"15",label:n("sidebar.warning"),name:"admin-warning",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.warning",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.WARNING.VIEW},{key:"16",label:n("sidebar.qrcode_bank"),name:"admin-qrocde-bank",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.qrcode.bank",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.BANK_QRCODE.VIEW}]},{key:"2",label:n("sidebar.report"),icon:"pi pi-chart-line",color:"text-black-500",to:"settings",children:[{key:"1",label:n("sidebar.report_real_estate"),name:"admin-report-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"report.real.estate",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.REPORT_REAL_ESTATE.VIEW},{key:"2",label:n("sidebar.report_rent_buy"),name:"admin-report-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"report.rent.buy",roles:[r.SUPER_ADMIN,r.ADMIN,r.USER],permission:f.REPORT_RENT_Buy.VIEW}]}],J=["province","country","district","real.estate.services"],T=async _=>{J.includes(_)&&(N.page=1,N.limit=10,s.page=1,s.limit=10,S.page=1,S.limit=10,x.page=1,x.limit=10)},C=async _=>{await T(_),A.push({name:_})},W=localStorage.getItem("roles")||"",v=W?JSON.parse(W):[],F=localStorage.getItem("permissions")||"",P=W?JSON.parse(F):[],X=()=>!!(v.includes(r.SUPER_ADMIN)||v.includes(r.ADMIN)),z=_=>v.includes(r.SUPER_ADMIN)||v.includes(r.ADMIN)?!0:P.includes(_),Q=(_,g,u)=>v.includes(r.SUPER_ADMIN)||v.includes(r.ADMIN)||v.includes(r.ADMIN_OWNER)?_.some(m=>v.includes(m)):u==="owner-user"?!!(P.includes(g)&&v.includes(r.USER_OWNER)):u==="admin-user"?!!(P.includes(g)&&v.includes(r.USER)):P.includes(g);return(_,g)=>{const u=Y("ripple"),m=Y("styleclass");return o(),l("aside",Le,[i("div",Me,[i("div",Be,[Te,i("span",{class:"font-bold text-3xl",style:{"margin-left":"10px"},onClick:g[0]||(g[0]=p=>c(A).push({name:"home"}))},"UK LAO")]),We,i("div",Ve,[i("ul",je,[X()?(o(),l("li",Ke,[$((o(),l("a",{onClick:g[1]||(g[1]=p=>C("dashboard")),class:R([{"bg-highlight":c(A).currentRoute.value.name==="dashboard"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Fe,i("span",ze,y(_.$t("sidebar.dashboard")),1)],2)),[[u]])])):h("",!0),z(c(f).CUSTOMER.VIEW)?(o(),l("li",qe,[$((o(),l("a",{onClick:g[2]||(g[2]=p=>C("customer")),class:R([{"bg-highlight":c(A).currentRoute.value.name==="customer"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Ye,i("span",Ze,y(_.$t("sidebar.customer")),1)],2)),[[u]])])):h("",!0),z(c(f).PAYMENT_HISTORY.VIEW)?(o(),l("li",Ge,[$((o(),l("a",{onClick:g[3]||(g[3]=p=>C("admin.payment.history")),class:R([{"bg-highlight":c(A).currentRoute.value.name==="admin.payment.history"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[He,i("span",Je,y(_.$t("sidebar.payment_service")),1),Xe],2)),[[u]])])):h("",!0)]),i("ul",Qe,[(o(),l(M,null,te(K,p=>i("li",{key:p.key},[p.key==="1"||c(v).includes(c(r).SUPER_ADMIN)||c(v).includes(c(r).ADMIN)||c(v).includes(c(r).USER)?$((o(),l("div",et,[i("i",{class:R(`${p.icon} ${p.color} mr-2`)},null,2),i("span",tt,y(p.label),1),nt])),[[u],[m,{selector:"@next",enterClass:"hidden",enterActiveClass:"slidedown",leaveToClass:"hidden",leaveActiveClass:"slideup"}]]):h("",!0),i("ul",{class:R(["list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",{hidden:!["province","country","district","real.estate.services","owner.house","owner.payment.service","admin.user","owner.appointment","owner.rent.buy","owner.user","owner.add.user","owner.edit.user","real.estate.type","footer","report.real.estate","admin.policy","admin.edit.policy","admin.about","admin.edit.about","admin.warning","admin.edit.warning","admin.qrcode.bank","report.rent.buy","translate.real.estate.type"].includes(String(c(A).currentRoute.value.name))}])},[(o(!0),l(M,null,te(p.children,D=>(o(),l("li",{key:p.key},[Q(D.roles,D.permission,D.name)?$((o(),l("a",{key:0,onClick:hn=>C(D.to),class:R([{"bg-highlight":c(A).currentRoute.value.name===D.to},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[rt,i("span",st,y(D.label),1),D.qty?(o(),l("span",ot,y(D.qty),1)):h("",!0)],10,it)),[[u]]):h("",!0)]))),128))],2)])),64))])])])])}}}),lt=ne(at,[["__scopeId","data-v-06f4011d"]]),ct={},dt={class:"layout-footer flex flex-column text-white font-bold surface-overlay"},ut=i("span",{class:"font-medium ml-2 text-color"},"Ⓒ2023 | All Rights Reserved",-1),pt=[ut];function mt(e,t){return o(),l("footer",dt,pt)}const ft=ne(ct,[["render",mt]]);var bt=`
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
`,ht={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(t){var n=t.instance;return["p-menuitem",{"p-disabled":n.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},vt=pe.extend({name:"breadcrumb",css:bt,classes:ht}),yt={name:"BaseBreadcrumb",extends:ie,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:vt,provide:function(){return{$parentInstance:this}}},me={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:ie,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,a=t.url,d=typeof window<"u"?window.location.pathname:"";return n===d||a===d?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:b({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("action",this.ptmOptions)),icon:b({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:b({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},gt=["href","target","aria-current"];function _t(e,t,n,a,d,s){return s.visible()?(o(),l("li",b({key:0,class:[e.cx("menuitem"),n.item.class]},e.ptm("menuitem",s.ptmOptions)),[n.templates.item?(o(),U(Z(n.templates.item),{key:1,item:n.item,label:s.label(),props:s.getMenuItemProps},null,8,["item","label","props"])):(o(),l("a",b({key:0,href:n.item.url||"#",class:e.cx("action"),target:n.item.target,"aria-current":s.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("action",s.ptmOptions)),[n.templates&&n.templates.itemicon?(o(),U(Z(n.templates.itemicon),{key:0,item:n.item,class:R(e.cx("icon",s.ptmOptions))},null,8,["item","class"])):n.item.icon?(o(),l("span",b({key:1,class:[e.cx("icon"),n.item.icon]},e.ptm("icon",s.ptmOptions)),null,16)):h("",!0),n.item.label?(o(),l("span",b({key:2,class:e.cx("label")},e.ptm("label",s.ptmOptions)),y(s.label()),17)):h("",!0)],16,gt))],16)):h("",!0)}me.render=_t;var fe={name:"Breadcrumb",extends:yt,components:{BreadcrumbItem:me,ChevronRightIcon:Ce}};function kt(e,t,n,a,d,s){var S=G("BreadcrumbItem"),N=G("ChevronRightIcon");return o(),l("nav",b({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[i("ol",b({class:e.cx("menu")},e.ptm("menu")),[e.home?(o(),U(S,b({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):h("",!0),(o(!0),l(M,null,te(e.model,function(x,w){return o(),l(M,{key:x.label+"_"+w},[e.home||w!==0?(o(),l("li",b({key:0,class:e.cx("separator")},e.ptm("separator")),[V(e.$slots,"separator",{},function(){return[k(N,b({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):h("",!0),k(S,{item:x,index:w,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}fe.render=kt;var St=`
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
`,wt={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},Et={mask:function(t){var n=t.instance,a=t.props,d=["left","right","top","bottom"],s=d.find(function(S){return S===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(t){var n=t.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},It=pe.extend({name:"sidebar",css:St,classes:Et,inlineStyles:wt}),Rt={name:"BaseSidebar",extends:ie,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:It,provide:function(){return{$parentInstance:this}}},be={name:"Sidebar",extends:Rt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&ee.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&ee.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&q.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&ee.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(d){return d&&d.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.closeButton)),n&&q.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&q.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&q.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:he,ripple:ve},components:{Portal:ye,TimesIcon:ge}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?se(Object(n),!0).forEach(function(a){xt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function xt(e,t,n){return t=At(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function At(e){var t=Ct(e,"string");return j(t)=="symbol"?t:String(t)}function Ct(e,t){if(j(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(j(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Nt=["aria-modal"],Dt=["aria-label"];function Ot(e,t,n,a,d,s){var S=G("Portal"),N=Y("ripple"),x=Y("focustrap");return o(),U(S,null,{default:L(function(){return[d.containerVisible?(o(),l("div",b({key:0,ref:s.maskRef,onMousedown:t[1]||(t[1]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[k(_e,b({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:L(function(){return[e.visible?$((o(),l("div",b({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},oe(oe({},e.$attrs),e.ptm("root"))),[e.$slots.container?V(e.$slots,"container",{key:0,onClose:s.hide,closeCallback:s.hide}):(o(),l(M,{key:1},[i("div",b({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[V(e.$slots,"header",{class:R(e.cx("title"))},function(){return[e.header?(o(),l("div",b({key:0,class:e.cx("title")},e.ptm("title")),y(e.header),17)):h("",!0)]}),e.showCloseIcon?$((o(),l("button",b({key:0,ref:s.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[V(e.$slots,"closeicon",{class:R(e.cx("closeIcon"))},function(){return[(o(),U(Z(e.closeIcon?"span":"TimesIcon"),b({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,Dt)),[[N]]):h("",!0)],16),i("div",b({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[V(e.$slots,"default")],16)],64))],16,Nt)),[[x]]):h("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):h("",!0)]}),_:3})}be.render=Ot;const B=e=>(de("data-v-5e09d4b1"),e=e(),ue(),e),$t={class:"flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground",style:{"padding-left":"1.5rem"}},Ut={class:"flex align-items-center justify-content-center gap-2"},Pt=B(()=>i("i",{class:"pi pi-bars font-bold",style:{"font-size":"1rem"}},null,-1)),Lt=[Pt],Mt=["src"],Bt={class:"list-none mt-3 p-0"},Tt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Wt=B(()=>i("span",null,[i("i",{class:"pi pi-user text-xl text-color"})],-1)),Vt={class:"ml-3"},jt={class:"mb-2 font-semibold"},Kt={class:"text-color-secondary m-0"},Ft={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},zt=B(()=>i("span",null,[i("i",{class:"pi pi-user text-xl text-color"})],-1)),qt={class:"ml-3"},Yt={class:"mb-2 font-semibold"},Zt={class:"text-color-secondary m-0"},Gt={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},Ht=B(()=>i("span",null,[i("i",{class:"pi pi-user"})],-1)),Jt={class:"ml-3"},Xt={class:"mb-2 font-semibold"},Qt={class:"text-color-secondary m-0"},en={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},tn=B(()=>i("span",null,[i("i",{class:"pi pi-lock text-xl text-color"})],-1)),nn={class:"ml-3"},rn={class:"mb-2 font-semibold"},sn={class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},on=B(()=>i("span",null,[i("i",{class:"pi pi-power-off text-xl",style:{color:"brown"}})],-1)),an={class:"ml-3"},ln={class:"mb-2 font-semibold",style:{color:"brown"}},cn=H({__name:"AppTopbar",emits:["toggleSidebar"],setup(e,{emit:t}){const{t:n}=ae(),{logout:a}=Ne(),{getUserProfile:d,getProfile:s}=Oe(),{form:S,state:N,changeUserPassword:x}=$e(),w=I([]),E=I(!1),A=t,K=I(),J=ke(),T=ce(),C=I(),W=I([{name:"English",code:"en"},{name:"ລາວ",code:"la"},{name:"ไทย",code:"th"},{name:"Tiếng Việt",code:"vn"},{name:"China",code:"cn"}]),v=I(),F=I(),P=async u=>{E.value=!1,F.value=u,v.value.visible=!0},X=()=>{E.value=!1,T.push({name:"admin.user.profile"})},z=()=>{E.value=!1,T.push({name:"owner.user.profile"})},Q=()=>{E.value=!1,T.push({name:"owner.user.owner.profile"})},_=async()=>{await localStorage.setItem("locale",C.value),window.location.reload()};function g(u){w.value=[],u.matched.forEach((m,p)=>{p!==0&&w.value.push(m.meta.label)}),K.value=w.value.map(m=>({label:n(m)}))}return Se(u=>{g(u)}),le(async()=>{const u=localStorage.getItem("locale")||"en";C.value=u,g(J),await s()}),(u,m)=>(o(),l(M,null,[i("header",$t,[i("div",Ut,[i("div",{class:"cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500",style:{width:"40px",height:"40px"},onClick:m[0]||(m[0]=p=>A("toggleSidebar"))},Lt),k(c(fe),{model:K.value,pt:{root:{class:"surface-ground border-none"},icon:{class:"text-indigo-500"},label:{class:"font-bold text-400"}}},null,8,["model"])]),i("div",null,[k(c(De),{modelValue:C.value,"onUpdate:modelValue":m[1]||(m[1]=p=>C.value=p),options:W.value,optionLabel:"name",class:"w-full",optionValue:"code",highlightOnSelect:!0,onChange:_},null,8,["modelValue","options"])]),i("div",null,[i("a",{class:"cursor-pointer",onClick:m[2]||(m[2]=p=>E.value=!0)},[i("img",{src:c(d).data.props.profile,class:"mr-3 bg-no-repeat border-circle lg:mr-0",style:{width:"32px",height:"32px"}},null,8,Mt)])])]),k(c(be),{visible:E.value,"onUpdate:visible":m[5]||(m[5]=p=>E.value=p),position:"right",class:"w-full sm:w-25rem"},{default:L(()=>[i("h2",null,y(c(d).data.props.name),1),i("ul",Bt,[c(d).data.props.role.name==="admin-owner"?(o(),l("li",{key:0,onClick:z},[i("a",Tt,[Wt,i("div",Vt,[i("span",jt,y(u.$t("messages.profile")),1),i("p",Kt,y(u.$t("messages.my_profile")),1)])])])):h("",!0),c(d).data.props.role.name==="user-owner"?(o(),l("li",{key:1,onClick:Q},[i("a",Ft,[zt,i("div",qt,[i("span",Yt,y(u.$t("messages.profile")),1),i("p",Zt,y(u.$t("messages.my_profile")),1)])])])):h("",!0),c(d).data.props.role.name!=="admin-owner"&&c(d).data.props.role.name!=="user-owner"?(o(),l("li",{key:2,onClick:X},[i("a",Gt,[Ht,i("div",Jt,[i("span",Xt,y(u.$t("messages.profile")),1),i("p",Qt,y(u.$t("messages.my_profile")),1)])])])):h("",!0),i("li",{onClick:m[3]||(m[3]=p=>P(c(d).data.props.id))},[i("a",en,[tn,i("div",nn,[i("span",rn,y(u.$t("messages.change_password")),1)])])]),i("li",{onClick:m[4]||(m[4]=p=>c(a)())},[i("a",sn,[on,i("div",an,[i("span",ln,y(u.$t("messages.sign_out")),1)])])])])]),_:1},8,["visible"]),k(Ue,{ref_key:"editForm",ref:v,form:c(S),"user-id":F.value,"change-user-password":c(x),state:c(N)},null,8,["form","user-id","change-user-password","state"])],64))}}),dn=ne(cn,[["__scopeId","data-v-5e09d4b1"]]),un={class:"flex flex-column justify-content-center align-items-center text-center",style:{"margin-top":"150px"}},pn={class:"mb-3"},mn=i("div",null,[i("h3",null,"ກຳລັງໂຫຼດ...")],-1),fn=H({__name:"LoadingComponent",setup(e){return(t,n)=>(o(),l("div",un,[i("div",pn,[k(c(Pe))]),mn]))}}),bn={class:"layout-main-container surface-ground"},Mn=H({__name:"AppLayout",setup(e){const t=I(!0);return(n,a)=>{const d=G("router-view");return o(),l("div",{class:R([t.value?"layout-mobile-active":"","layout-container"])},[k(lt,{style:re(t.value?"width: 15rem;":"width: 0rem")},null,8,["style"]),i("div",{class:"layout-content",style:re([t.value?"":"margin-left: 0rem;transition: 0.2s ease-in-out;",{overflow:"hidden"}])},[k(dn,{onToggleSidebar:a[0]||(a[0]=()=>t.value=!t.value)}),i("main",bn,[k(d,null,{default:L(({Component:s})=>[s?(o(),U(we,{key:0},{fallback:L(()=>[k(fn)]),default:L(()=>[(o(),U(Z(s)))]),_:2},1024)):h("",!0)]),_:1})]),k(ft)],4),i("div",{class:"layout-mask",onClick:a[1]||(a[1]=()=>t.value=!t.value)})],2)}}});export{Mn as default};
