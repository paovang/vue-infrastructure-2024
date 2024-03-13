import{d as z,u as te,a as ce,G as s,b as h,r as j,c as l,e as i,f as y,w as D,n as E,t as N,g as v,F as P,h as G,o,p as ne,i as ie,_ as J,B as q,s as Y,m as d,j as C,k as K,l as F,q as M,v as g,Z as H,D as V,x as de,R as ue,y as pe,z as me,A as $,T as fe,C as L,E as be,H as he,I as ve,J as X,S as ye}from"./index-8HoVcFyD.js";import{p as ge}from"./province.store-Io_3xx0t.js";import{r as ke}from"./real-estate-service.store-TRt3DP65.js";import{d as Se}from"./district.store-ZwrNt_U4.js";import{c as we}from"./country.store-JICLWRES.js";import{s as _e}from"./index.esm-HxIvfdlI.js";import{u as Ee}from"./auth.store-sg1wFWh8.js";import{s as Ie}from"./dropdown.esm-joiATYkQ.js";import"./axios.config-HO1saC6l.js";import"./index.esm-NkfN2j1Z.js";const O=e=>(ne("data-v-f450907c"),e=e(),ie(),e),Re={class:"shadow-1 h-screen fixed z-2 surface-overlay"},xe={class:"flex flex-column h-full white-space-nowrap"},Ce=O(()=>i("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"38px"}},null,-1)),Oe=O(()=>i("span",{class:"font-bold text-3xl",style:{"margin-left":"10px"}},"UK LAO",-1)),Ae=[Ce,Oe],Le=O(()=>i("br",null,null,-1)),De={class:"overflow-y-auto"},Ne={class:"list-none p-0 m-0 overflow-hidden"},$e={key:0},Pe=O(()=>i("i",{class:"pi pi-users mr-2"},null,-1)),Ue={class:"font-medium"},Be={key:1},Me=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),Te={class:"font-medium"},We={class:"list-none p-0 m-0 overflow-hidden"},Ve={class:"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"},je={class:"font-medium"},Ke=O(()=>i("i",{class:"pi pi-chevron-down ml-auto"},null,-1)),Fe=["onClick"],ze=O(()=>i("i",{class:"pi pi-chart-line mr-2"},null,-1)),Ye={class:"font-medium"},Ze=z({__name:"AppSidebar",setup(e){const{t}=te(),{setStateFilter:n}=Se(),{setStateFilter:a}=ge(),{setStateFilter:c}=we(),{setStateFilter:r}=ke(),f=ce(),I=[{key:"1",label:t("sidebar.settings"),icon:"pi pi-cog",color:"text-black-500",to:"settings",children:[{key:"1",label:t("sidebar.country"),name:"admin-country",icon:"pi pi-chart-line",color:"text-red-500",to:"country",roles:[s.SUPER_ADMIN,s.ADMIN,s.USER],permission:h.COUNTRY.VIEW},{key:"2",label:t("sidebar.province"),name:"admin-province",icon:"pi pi-chart-line",color:"text-red-500",to:"province",roles:[s.SUPER_ADMIN,s.ADMIN,s.USER],permission:h.PROVINCE.VIEW},{key:"3",label:t("sidebar.district"),name:"admin-district",icon:"pi pi-chart-line",color:"text-red-500",to:"district",roles:[s.SUPER_ADMIN,s.ADMIN,s.USER],permission:h.DISTRICT.VIEW},{key:"5",label:t("sidebar.service"),name:"admin-service-charge",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.services",roles:[s.SUPER_ADMIN,s.ADMIN,s.USER],permission:h.SERVICE_CHARGE.VIEW},{key:"6",label:t("sidebar.user"),name:"admin-user",icon:"pi pi-chart-line",color:"text-red-500",to:"admin.user",roles:[s.SUPER_ADMIN,s.ADMIN,s.USER],permission:h.ADMIN_USER.VIEW},{key:"7",label:t("sidebar.house"),name:"owner-real-estate",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.house",roles:[s.ADMIN_OWNER,s.USER_OWNER],permission:h.REAL_ESTATE.VIEW},{key:"8",label:t("sidebar.payment_service"),name:"owner-payment-service",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.payment.service",roles:[s.ADMIN_OWNER,s.USER_OWNER],permission:h.PAYMENT_REAL_ESTATE.VIEW},{key:"9",label:t("sidebar.appointment"),name:"owner-appointment",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.appointment",roles:[s.ADMIN_OWNER,s.USER_OWNER],permission:h.APPOINTMENT.VIEW},{key:"10",label:t("sidebar.rent_buy"),name:"owner-rent-buy",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.rent.buy",roles:[s.ADMIN_OWNER,s.USER_OWNER],permission:h.RENT_BUY.VIEW},{key:"11",label:t("sidebar.user"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"owner.user",roles:[s.ADMIN_OWNER,s.USER_OWNER],permission:h.OWNER_USER.VIEW},{key:"12",label:t("sidebar.real_estate_type"),name:"owner-user",icon:"pi pi-chart-line",color:"text-red-500",to:"real.estate.type",roles:[s.SUPER_ADMIN,s.ADMIN,s.USER],permission:h.REAL_ESTATE_TYPE.VIEW}]},{key:"1",label:t("sidebar.report"),icon:"pi pi-chart-line",color:"text-black-500",to:"settings",children:[]}],R=["province","country","district","real.estate.services"],w=async S=>{R.includes(S)&&(c.page=1,c.limit=10,n.page=1,n.limit=10,a.page=1,a.limit=10,r.page=1,r.limit=10)},U=async S=>{await w(S),f.push({name:S})},B=localStorage.getItem("roles")||"",u=B?JSON.parse(B):[],x=localStorage.getItem("permissions")||"",p=B?JSON.parse(x):[],k=S=>u.includes(s.SUPER_ADMIN)||u.includes(s.ADMIN)?!0:p.includes(S),le=(S,m,b)=>u.includes(s.SUPER_ADMIN)||u.includes(s.ADMIN)||u.includes(s.ADMIN_OWNER)?S.some(Z=>u.includes(Z)):b==="owner-user"?!!(m==="view-user"&&u.includes(s.USER_OWNER)):b==="admin-user"?!!(m==="view-user"&&u.includes(s.USER)):b==="owner-real-estate"?!!(m==="view-real-estate"&&u.includes(s.USER_OWNER)):b==="admin-real-estate"?!!(m==="view-real-estate"&&u.includes(s.USER)):b==="owner-appointment"?!!(m==="view-appointment"&&u.includes(s.USER_OWNER)):b==="admin-appointment"?!!(m==="view-appointment"&&u.includes(s.USER)):b==="owner-rent-buy"?!!(m==="view-rent-buy"&&u.includes(s.USER_OWNER)):b==="admin-rent-buy"?!!(m==="view-rent-buy"&&u.includes(s.USER)):p.includes(m);return(S,m)=>{const b=j("ripple"),Z=j("styleclass");return o(),l("aside",Re,[i("div",xe,[i("div",{onClick:m[0]||(m[0]=_=>y(f).push({name:"dashboard"})),class:"flex align-items-center justify-content-center pt-3 overflow-hidden cursor-pointer"},Ae),Le,i("div",De,[i("ul",Ne,[k(y(h).CUSTOMER.VIEW)?(o(),l("li",$e,[D((o(),l("a",{onClick:m[1]||(m[1]=_=>U("customer")),class:E([{"bg-highlight":y(f).currentRoute.value.name==="customer"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Pe,i("span",Ue,N(S.$t("sidebar.customer")),1)],2)),[[b]])])):v("",!0),k(y(h).PAYMENT_HISTORY.VIEW)?(o(),l("li",Be,[D((o(),l("a",{onClick:m[2]||(m[2]=_=>U("admin.payment.history")),class:E([{"bg-highlight":y(f).currentRoute.value.name==="admin.payment.history"},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[Me,i("span",Te,N(S.$t("sidebar.payment_history")),1)],2)),[[b]])])):v("",!0)]),i("ul",We,[(o(),l(P,null,G(I,_=>i("li",{key:_.key},[D((o(),l("div",Ve,[i("i",{class:E(`${_.icon} ${_.color} mr-2`)},null,2),i("span",je,N(_.label),1),Ke])),[[b],[Z,{selector:"@next",enterClass:"hidden",enterActiveClass:"slidedown",leaveToClass:"hidden",leaveActiveClass:"slideup"}]]),i("ul",{class:E(["list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",{hidden:!["province","country","district","real.estate.services","owner.house","owner.payment.service","admin.user","owner.appointment","owner.rent.buy","owner.user","real.estate.type"].includes(String(y(f).currentRoute.value.name))}])},[(o(!0),l(P,null,G(_.children,A=>(o(),l("li",{key:_.key},[le(A.roles,A.permission,A.name)?D((o(),l("a",{key:0,onClick:Kt=>U(A.to),class:E([{"bg-highlight":y(f).currentRoute.value.name===A.to},"flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"])},[ze,i("span",Ye,N(A.label),1)],10,Fe)),[[b]]):v("",!0)]))),128))],2)])),64))])])])])}}}),He=J(Ze,[["__scopeId","data-v-f450907c"]]),Ge={},Je={class:"layout-footer flex flex-column text-white font-bold surface-overlay"},qe=i("span",{class:"font-medium ml-2 text-color"},"Ⓒ2023 Haltech | All Rights Reserved",-1),Xe=[qe];function Qe(e,t){return o(),l("footer",Je,Xe)}const et=J(Ge,[["render",Qe]]);var tt=`
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
`,nt={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(t){var n=t.instance;return["p-menuitem",{"p-disabled":n.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},it=q.extend({name:"breadcrumb",css:tt,classes:nt}),rt={name:"BaseBreadcrumb",extends:Y,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:it,provide:function(){return{$parentInstance:this}}},re={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:Y,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,a=t.url,c=typeof window<"u"?window.location.pathname:"";return n===c||a===c?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:d({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("action",this.ptmOptions)),icon:d({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:d({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},st=["href","target","aria-current"];function ot(e,t,n,a,c,r){return r.visible()?(o(),l("li",d({key:0,class:[e.cx("menuitem"),n.item.class]},e.ptm("menuitem",r.ptmOptions)),[n.templates.item?(o(),C(K(n.templates.item),{key:1,item:n.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(o(),l("a",d({key:0,href:n.item.url||"#",class:e.cx("action"),target:n.item.target,"aria-current":r.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("action",r.ptmOptions)),[n.templates&&n.templates.itemicon?(o(),C(K(n.templates.itemicon),{key:0,item:n.item,class:E(e.cx("icon",r.ptmOptions))},null,8,["item","class"])):n.item.icon?(o(),l("span",d({key:1,class:[e.cx("icon"),n.item.icon]},e.ptm("icon",r.ptmOptions)),null,16)):v("",!0),n.item.label?(o(),l("span",d({key:2,class:e.cx("label")},e.ptm("label",r.ptmOptions)),N(r.label()),17)):v("",!0)],16,st))],16)):v("",!0)}re.render=ot;var se={name:"Breadcrumb",extends:rt,components:{BreadcrumbItem:re,ChevronRightIcon:_e}};function at(e,t,n,a,c,r){var f=F("BreadcrumbItem"),I=F("ChevronRightIcon");return o(),l("nav",d({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[i("ol",d({class:e.cx("menu")},e.ptm("menu")),[e.home?(o(),C(f,d({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):v("",!0),(o(!0),l(P,null,G(e.model,function(R,w){return o(),l(P,{key:R.label+"_"+w},[e.home||w!==0?(o(),l("li",d({key:0,class:e.cx("separator")},e.ptm("separator")),[M(e.$slots,"separator",{},function(){return[g(I,d({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):v("",!0),g(f,{item:R,index:w,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}se.render=at;var lt=`
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
`,ct={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},dt={mask:function(t){var n=t.instance,a=t.props,c=["left","right","top","bottom"],r=c.find(function(f){return f===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},r?"p-sidebar-".concat(r):""]},root:function(t){var n=t.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},ut=q.extend({name:"sidebar",css:lt,classes:dt,inlineStyles:ct}),pt={name:"BaseSidebar",extends:Y,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:ut,provide:function(){return{$parentInstance:this}}},oe={name:"Sidebar",extends:pt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&H.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&H.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&V.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&H.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(c){return c&&c.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.closeButton)),n&&V.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&V.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&V.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:de,ripple:ue},components:{Portal:pe,TimesIcon:me}};function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(a){mt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function mt(e,t,n){return t=ft(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ft(e){var t=bt(e,"string");return T(t)=="symbol"?t:String(t)}function bt(e,t){if(T(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(T(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ht=["aria-modal"],vt=["aria-label"];function yt(e,t,n,a,c,r){var f=F("Portal"),I=j("ripple"),R=j("focustrap");return o(),C(f,null,{default:$(function(){return[c.containerVisible?(o(),l("div",d({key:0,ref:r.maskRef,onMousedown:t[1]||(t[1]=function(){return r.onMaskClick&&r.onMaskClick.apply(r,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[g(fe,d({name:"p-sidebar",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},e.ptm("transition")),{default:$(function(){return[e.visible?D((o(),l("div",d({key:0,ref:r.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},ee(ee({},e.$attrs),e.ptm("root"))),[e.$slots.container?M(e.$slots,"container",{key:0,onClose:r.hide,closeCallback:r.hide}):(o(),l(P,{key:1},[i("div",d({ref:r.headerContainerRef,class:e.cx("header")},e.ptm("header")),[M(e.$slots,"header",{class:E(e.cx("title"))},function(){return[e.header?(o(),l("div",d({key:0,class:e.cx("title")},e.ptm("title")),N(e.header),17)):v("",!0)]}),e.showCloseIcon?D((o(),l("button",d({key:0,ref:r.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":r.closeAriaLabel,onClick:t[0]||(t[0]=function(){return r.hide&&r.hide.apply(r,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[M(e.$slots,"closeicon",{class:E(e.cx("closeIcon"))},function(){return[(o(),C(K(e.closeIcon?"span":"TimesIcon"),d({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,vt)),[[I]]):v("",!0)],16),i("div",d({ref:r.contentRef,class:e.cx("content")},e.ptm("content")),[M(e.$slots,"default")],16)],64))],16,ht)),[[R]]):v("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):v("",!0)]}),_:3})}oe.render=yt;const W=e=>(ne("data-v-390ee103"),e=e(),ie(),e),gt={class:"flex align-items-center justify-content-between pl-3 pr-4 h-4rem surface-ground",style:{"padding-left":"1.5rem !important"}},kt={class:"flex align-items-center justify-content-center gap-2"},St=W(()=>i("i",{class:"pi pi-bars font-bold",style:{"font-size":"1rem"}},null,-1)),wt=[St],_t=W(()=>i("img",{src:"https://api.duniagames.co.id/api/content/upload/file/10936507621668659213.jpg",class:"mr-3 bg-no-repeat border-circle lg:mr-0",style:{width:"32px",height:"32px"}},null,-1)),Et=[_t],It=W(()=>i("h2",null,"paovang",-1)),Rt={class:"list-none mt-3 p-0"},xt=W(()=>i("li",null,[i("a",{class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},[i("span",null,[i("i",{class:"pi pi-user text-xl text-color"})]),i("div",{class:"ml-3"},[i("span",{class:"mb-2 font-semibold"},"Profile"),i("p",{class:"text-color-secondary m-0"},"ຂໍ້ມູນໂປຼໄຟລ໌")])])],-1)),Ct=W(()=>i("a",{class:"cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150"},[i("span",null,[i("i",{class:"pi pi-power-off text-xl text-color"})]),i("div",{class:"ml-3"},[i("span",{class:"mb-2 font-semibold"},"Sign Out"),i("p",{class:"text-color-secondary m-0"},"ອອກຈາກລະບົບ")])],-1)),Ot=[Ct],At=z({__name:"AppTopbar",emits:["toggleSidebar"],setup(e,{emit:t}){const{t:n}=te(),{logout:a}=Ee(),c=L([]),r=L(!1),f=t,I=L(),R=be(),w=L(),U=L([{name:"ລາວ",code:"la"},{name:"English",code:"en"}]),B=async()=>{await localStorage.setItem("locale",w.value),window.location.reload()};function u(x){c.value=[],x.matched.forEach((p,k)=>{k!==0&&c.value.push(p.meta.label)}),I.value=c.value.map(p=>({label:n(p)}))}return he(x=>{u(x)}),ve(async()=>{const x=localStorage.getItem("locale")||"en";w.value=x,u(R)}),(x,p)=>(o(),l(P,null,[i("header",gt,[i("div",kt,[i("div",{class:"cursor-pointer flex align-items-center justify-content-center border-circle hover:bg-gray-200 hover:text-gray-800 hover:border-2 border-gray-500",style:{width:"40px",height:"40px"},onClick:p[0]||(p[0]=k=>f("toggleSidebar"))},wt),g(y(se),{model:I.value,pt:{root:{class:"surface-ground border-none"},icon:{class:"text-indigo-500"},label:{class:"font-bold text-400"}}},null,8,["model"])]),i("div",null,[g(y(Ie),{modelValue:w.value,"onUpdate:modelValue":p[1]||(p[1]=k=>w.value=k),options:U.value,optionLabel:"name",class:"w-full",optionValue:"code",highlightOnSelect:!0,onChange:B},null,8,["modelValue","options"])]),i("div",null,[i("a",{class:"cursor-pointer",onClick:p[2]||(p[2]=k=>r.value=!0)},Et)])]),g(y(oe),{visible:r.value,"onUpdate:visible":p[4]||(p[4]=k=>r.value=k),position:"right",class:"w-full sm:w-25rem"},{default:$(()=>[It,i("ul",Rt,[xt,i("li",{onClick:p[3]||(p[3]=k=>y(a)())},Ot)])]),_:1},8,["visible"])],64))}}),Lt=J(At,[["__scopeId","data-v-390ee103"]]);var Dt=`
@layer primevue {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progress-spinner-svg {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
`,Nt={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},$t=q.extend({name:"progressspinner",css:Dt,classes:Nt}),Pt={name:"BaseProgressSpinner",extends:Y,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:$t,provide:function(){return{$parentInstance:this}}},ae={name:"ProgressSpinner",extends:Pt,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Ut=["fill","stroke-width"];function Bt(e,t,n,a,c,r){return o(),l("div",d({class:e.cx("root"),role:"progressbar"},e.ptm("root"),{"data-pc-name":"progressspinner"}),[(o(),l("svg",d({class:e.cx("spinner"),viewBox:"25 25 50 50",style:r.svgStyle},e.ptm("spinner")),[i("circle",d({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,Ut)],16))],16)}ae.render=Bt;const Mt={class:"flex flex-column justify-content-center align-items-center text-center",style:{"margin-top":"150px"}},Tt={class:"mb-3"},Wt=i("div",null,[i("h3",null,"ກຳລັງໂຫຼດ...")],-1),Vt=z({__name:"LoadingComponent",setup(e){return(t,n)=>(o(),l("div",Mt,[i("div",Tt,[g(y(ae))]),Wt]))}}),jt={class:"layout-main-container surface-ground"},en=z({__name:"AppLayout",setup(e){const t=L(!0);return(n,a)=>{const c=F("router-view");return o(),l("div",{class:E([t.value?"layout-mobile-active":"","layout-container"])},[g(He,{style:X(t.value?"width: 15rem;":"width: 0rem")},null,8,["style"]),i("div",{class:"layout-content",style:X(t.value?"":"margin-left: 0rem;transition: 0.2s ease-in-out;")},[g(Lt,{onToggleSidebar:a[0]||(a[0]=()=>t.value=!t.value)}),i("main",jt,[g(c,null,{default:$(({Component:r})=>[r?(o(),C(ye,{key:0},{fallback:$(()=>[g(Vt)]),default:$(()=>[(o(),C(K(r)))]),_:2},1024)):v("",!0)]),_:1})]),g(et)],4),i("div",{class:"layout-mask",onClick:a[1]||(a[1]=()=>t.value=!t.value)})],2)}}});export{en as default};
