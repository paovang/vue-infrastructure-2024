import{d as B,I as N,u as T,N as P,a as V,o as C,e as M,f as s,L as p,t as m,j as l,g as e,H as O,U as R,p as D,m as F,l as L,b as U,s as j,_ as z}from"./index-T-WJ2zvx.js";import{u as Q}from"./vee-validate.esm-p0-jNtp_.js";import{a as q}from"./store-XvMzV9_9.js";import{s as A}from"./divider.esm-mHcf66IL.js";import{_ as G}from"./FormInputText.vue_vue_type_script_setup_true_lang-u-p60v1b.js";import{Q as H}from"./vue-quill.snow-SZbvFGjg.js";import{v as W}from"./validation-permissions-qtqbTBx8.js";import"./axios.config-EMV3l8KB.js";import"./inputtext.esm-5F-_yqu6.js";const n=o=>(D("data-v-8a690d8c"),o=o(),F(),o),Y={class:"card"},J={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},K={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},X=n(()=>s("i",{class:"pi pi-arrow-left",style:{color:"green"}},null,-1)),Z=n(()=>s("br",null,null,-1)),ss={class:"columns is-12 is-multiline"},ts={class:"column is-12 is-mobile-12"},es={class:"column is-12 is-mobile-12",style:{"margin-top":"-30px"}},os=n(()=>s("span",{class:"text-red-500"}," *",-1)),as={class:"column is-12 is-mobile-12",style:{"text-align":"right","margin-top":"-20px"}},is=n(()=>s("i",{class:"pi pi-save",style:{"margin-right":"8px"}},null,-1)),ls=B({__name:"Edit",setup(o){const{getOne:g,getById:a,form:r,state:u,update:b}=q(),f=N(),{t:c}=T(),_=P(),w=V(),{handleSubmit:v,setFieldValue:S,handleReset:x}=Q({}),h=v(async t=>{r.id=f.params.id,r.title=t.title,r.description=a.data.props.description,await b(),u.error?await k():(await $(),await x(),await y())}),I=[[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],["link","image","video"],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}]],k=()=>{_.add({severity:"error",summary:c("toast.summary.error"),detail:`${u.error}`,life:3e3})},$=()=>{_.add({severity:"success",summary:c("toast.summary.success"),detail:c("toast.detail.successfully"),life:3e3})},y=async()=>{await g(f.params.id);const t=a.data.props;S("title",t.title)},E=async()=>{w.push({name:"admin.policy"})};return C(async()=>{await y()}),(t,i)=>(L(),M("div",Y,[s("div",J,[s("span",K,[s("h2",{style:{"font-weight":"bold","font-size":"20px"},class:"arrow-left",onClick:E},[X,p(" "+m(t.$t("messages.policy")),1)])])]),l(e(A)),Z,s("form",{onSubmit:i[1]||(i[1]=R((...d)=>e(h)&&e(h)(...d),["prevent"]))},[s("div",ss,[s("div",ts,[l(G,{name:"title",label:t.$t("messages.title"),required:"",placeholder:t.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),s("div",es,[s("label",null,[p(m(t.$t("messages.description"))+" ",1),os]),l(e(H),{toolbar:I,content:e(a).data.props.description,"onUpdate:content":i[0]||(i[0]=d=>e(a).data.props.description=d),"content-type":"html"},null,8,["content"])])]),s("div",as,[l(e(j),{style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"},type:"submit",severity:"info",disabled:e(W)(e(U).POLICY.UPDATE)},{default:O(()=>[is,p(" "+m(t.$t("button.edit_data")),1)]),_:1},8,["disabled"])])],32)]))}}),hs=z(ls,[["__scopeId","data-v-8a690d8c"]]);export{hs as default};
