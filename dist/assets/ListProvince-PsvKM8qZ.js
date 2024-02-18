import{d as X,u as Z,L as ee,M as te,A as q,a as ae,C as se,N as T,G as oe,c as ie,b as o,Q as ne,q as l,e as s,z as h,t as b,o as le,n as re,O as F,P as _,V as ce,p as de,h as ue,_ as me}from"./index-1gkhu5AI.js";import{s as $,a as pe}from"./column.esm-kwruIDz8.js";import{c as fe,a as he,u as ge,s as ye}from"./index.esm-vLmxGVPX.js";import{p as we}from"./province.store-jpU27fgB.js";import{c as ve}from"./country.store-I_C9NWEi.js";import{_ as be}from"./FormInputText.vue_vue_type_script_setup_true_lang-6Wyld5bP.js";import{s as _e}from"./dropdown.esm-EXqFucAq.js";import"./index.esm-gXsFauFS.js";import"./index.esm-VhLUVDKt.js";import"./index.esm-oI56uWDy.js";import"./axios.config-_uGP-K9E.js";const $e=m=>fe({name:he().required(m.name)}),Se=$e,Ce=m=>(de("data-v-89f5253a"),m=m(),ue(),m),xe={class:"card card-first"},Le={class:"col-12 md:col-12 flex flex-row"},Pe={class:"col-12 md:col-5"},ke={class:"flex flex-column h-full"},Re={class:"col-12 md:col-4"},Ve={class:"flex flex-column h-full"},qe={class:"col-12 md:col-3 flex flex-column"},Te={class:"card"},Fe={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Ie={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},Ne={class:"mb-3"},je={class:"w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0"},De={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Be={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},Me=Ce(()=>o("i",{class:"pi pi-search",style:{"margin-top":"-10px"}},null,-1)),Ae={class:"flex flex-wrap gap-2 btn-right"},Ee=X({__name:"ListProvince",setup(m){const{t:n}=Z(),g=ee(),I=te(),p=q(!1),S=q(),{push:y}=ae(),{query:d}=se(),{register:N,update:j,remove:D,getAll:w,form:u,state:r,setStateFilter:t}=we(),{getAll:B,state:C,setStateFilter:M}=ve(),A={name:n("placeholder.inputText")},{handleSubmit:x,handleReset:v,setFieldValue:L}=ge({validationSchema:Se(A)}),E=async()=>{r.btnLoading=!0,p.value=!1,t.filter&&(t.filter.name=""),await v(),await R(),await f(),r.btnLoading=!1},O=async e=>{await D(e),await v(),await f()},z=async e=>{var a;p.value=!0,u.country_id=(a=e.country)==null?void 0:a.id,L("id",e.id),L("name",e.name),await J()},U=x(async e=>{u.id=e.id,u.name=e.name,await j(),r.error?k():(await P(),await v(),await f(),p.value=!1)}),H=x(async e=>{u.name=e.name,await N(),r.error?await k():(await P(),await v(),await f())});async function K(e){t.page=e.page+1,t.limit=e.rows;const{page:a,limit:i,filter:c}=t;y({name:"province",query:{page:a,limit:i,search:c!=null&&c.name?c.name:void 0}}),await w()}const G=T(()=>{let e=0;return t.page&&t.limit&&(e=(t.page-1)*t.limit),e}),Q=async e=>{I.require({message:n("confirmDelete.message"),header:n("confirmDelete.header"),rejectLabel:n("confirmDelete.rejectLabel"),acceptLabel:n("confirmDelete.acceptLabel"),rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:async()=>{await O(e),g.add({severity:"success",summary:n("toast.summary.delete"),detail:n("toast.detail.delete"),life:3e3})},reject:()=>{g.add({severity:"error",summary:n("toast.summary.cancel_delete"),detail:n("toast.detail.cancel_delete"),life:3e3})}})},P=()=>{g.add({severity:"success",summary:n("toast.summary.success"),detail:n("toast.detail.successfully"),life:3e3})},k=()=>{g.add({severity:"error",summary:n("toast.summary.error"),detail:`${r.error}`,life:3e3})};async function R(){var e,a;Object.keys(d).length!==0&&(t.page=d.page?Number(d.page):1,t.limit=d.limit?Number(d.limit):10,((e=t.filter)==null?void 0:e.name)===""?(t.filter.name=d.search?d.search:"",y({query:{page:t.page,limit:t.limit,search:void 0}})):y({query:{page:t.page,limit:t.limit,search:(a=t.filter)==null?void 0:a.name}})),await w()}oe(async()=>{await R(),await f()});const f=async()=>{M.limit=200,await B(),u.country_id=C.data.props.length>0?C.data.props[0].id:void 0},V=T({get:()=>t.filter.name,set:e=>{t.filter?t.filter.name=e:t.filter={name:e}}});async function W(){await w()}async function Y(e){var a;e.target.value===""&&(((a=t.filter)==null?void 0:a.name)!==void 0&&(t.filter.name=""),y({query:{name:void 0}}),await w())}const J=()=>{var e;if(S.value){const a=S.value.$el,i=a.getBoundingClientRect();i.top>=0&&i.bottom<=window.innerHeight?(e=a.querySelector("input"))==null||e.focus():(window.scrollTo({top:window.scrollY+i.top-window.innerHeight/2,behavior:"smooth"}),setTimeout(()=>{var c;(c=a.querySelector("input"))==null||c.focus()},500))}};return(e,a)=>(le(),ie("div",null,[o("div",xe,[o("form",{onSubmit:a[1]||(a[1]=ne(i=>p.value?s(U)():s(H)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[o("div",Le,[o("div",Pe,[o("div",ke,[l(be,{ref_key:"autoFocusCursor",ref:S,name:"name",label:e.$t("messages.name"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])])]),o("div",Re,[o("div",Ve,[l(s(_e),{modelValue:s(u).country_id,"onUpdate:modelValue":a[0]||(a[0]=i=>s(u).country_id=i),options:s(C).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full md:w-14rem"},null,8,["modelValue","options","placeholder"])])]),o("div",qe,[l(s(_),{style:{width:"70%",display:"flex","justify-content":"center"},type:"submit",severity:"warning",loading:s(r).btnLoading},{default:h(()=>[o("i",{class:re(`${p.value?"pi pi-pencil":"pi pi-plus-circle"}`),style:{"margin-right":"8px"}},null,2),F(" "+b(p.value?e.$t("button.edit"):e.$t("button.save"))+" "+b(e.$t("messages.province")),1)]),_:1},8,["loading"])])])],32)]),o("div",Te,[o("div",Fe,[o("span",Ie,[o("h2",Ne,b(e.$t("table.title.province")),1)]),o("span",je,[l(s(_),{icon:"pi pi-refresh",rounded:"",severity:"warning",onClick:a[2]||(a[2]=i=>E()),loading:s(r).btnLoading},null,8,["loading"])])]),l(s(pe),{value:s(r).data.props,loading:s(r).isLoading,lazy:"",tableStyle:"min-width: 50rem",totalRecords:s(r).data.total,onPage:K,paginator:"",first:G.value,rows:s(t).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{header:h(()=>[o("div",De,[o("span",Be,[Me,l(s(ye),{modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=i=>V.value=i),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",onKeyup:ce(W,["enter"]),onInput:Y},null,8,["modelValue","placeholder"])])])]),default:h(()=>[l(s($),{field:"id",header:e.$t("table.header.index"),style:{width:"25%"}},{body:h(i=>[F(b(i.index+1),1)]),_:1},8,["header"]),l(s($),{field:"name",header:e.$t("table.header.province"),style:{width:"25%"}},null,8,["header"]),l(s($),{field:"country.name",header:e.$t("table.header.country"),style:{width:"25%"}},null,8,["header"]),l(s($),{headerStyle:"width: 10rem"},{body:h(({data:i})=>[o("div",Ae,[l(s(_),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:c=>z(i)},null,8,["onClick"]),l(s(_),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger",onClick:c=>Q(i.id)},null,8,["onClick"])])]),_:1})]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])])]))}}),Ze=me(Ee,[["__scopeId","data-v-89f5253a"]]);export{Ze as default};
