import{d as ie,u as oe,M as le,N as re,r as q,a as ne,H as ce,P as F,o as de,e as me,f as i,V as pe,y as r,g as t,l as j,E as f,h as A,t as h,j as x,Q as k,b as S,U as w,W as ue,p as fe,k as he,_ as ge}from"./index-TUdElwS8.js";import{s as $,a as we}from"./column.esm-unhARzhe.js";import{s as ye}from"./inputtext.esm-hMHw4CBo.js";import{d as ve}from"./district.store-jWnFn5lV.js";import{p as be}from"./province.store-OO5OI1Pr.js";import{u as _e}from"./vee-validate.esm-QaJNM0ci.js";import{c as Se,a as $e}from"./index.esm-KHeyReZT.js";import{_ as Pe}from"./FormInputText.vue_vue_type_script_setup_true_lang-IUZ_0AMy.js";import{s as Te}from"./dropdown.esm-_olTeqrO.js";import{v as P}from"./validation-permissions-0Xr70ND2.js";import"./paginator.esm-bOtiiIyB.js";import"./inputnumber.esm-S7AuMKQF.js";import"./overlayeventbus.esm-BGPp8Q0W.js";import"./index.esm-GWZ9s1vX.js";import"./checkbox.esm-hto2tll2.js";import"./index.esm-kyRYem98.js";import"./axios.config-gXfSTYZr.js";const Ce=p=>Se({name:$e().required(p.name)}),xe=Ce,I=p=>(fe("data-v-8ab97515"),p=p(),he(),p),ke={class:"card card-first"},Ie={class:"col-12 md:col-12 flex flex-row"},Le={class:"col-12 md:col-5"},Re={class:"flex flex-column h-full"},De={class:"col-12 md:col-5"},Ee={class:"flex flex-column h-full"},Ve={class:"col-12 md:col-2 flex flex-column"},Ne=I(()=>i("i",{class:"pi pi-plus-circle",style:{"margin-right":"8px"}},null,-1)),qe=I(()=>i("i",{class:"pi pi-plus-circle",style:{"margin-right":"8px"}},null,-1)),Fe={class:"card"},je={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Ae={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},Be={class:"mb-3"},Me={class:"w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0"},Ue={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Oe={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},He=I(()=>i("i",{class:"pi pi-search",style:{"margin-top":"-10px"}},null,-1)),Ke={class:"flex flex-wrap gap-2 btn-right"},We=ie({__name:"ListDistrict",setup(p){const{t:l}=oe(),y=le(),B=re(),u=q(!1),T=q(),{push:v}=ne(),{query:d}=ce(),{register:M,update:U,remove:O,getAll:b,form:m,state:n,setStateFilter:a}=ve(),{getAll:H,state:C,setStateFilter:K}=be(),W={name:l("placeholder.inputText")},{handleSubmit:L,handleReset:_,setFieldValue:R}=_e({validationSchema:xe(W)}),z=async()=>{n.btnLoading=!0,u.value=!1,a.filter&&(a.filter.name=""),await _(),await V(),await g(),n.btnLoading=!1},G=async e=>{await O(e),await _(),await g()},Q=async e=>{var s;u.value=!0,m.province_id=(s=e.province)==null?void 0:s.id,R("id",e.id),R("name",e.name),await se()},Y=L(async e=>{m.id=e.id,m.name=e.name,await U(),n.error?E():(await D(),await _(),await g(),u.value=!1)}),J=L(async e=>{m.name=e.name,await M(),n.error?await E():(await D(),await _(),await g())});async function X(e){a.page=e.page+1,a.limit=e.rows;const{page:s,limit:o,filter:c}=a;v({name:"district",query:{page:s,limit:o,search:c!=null&&c.name?c.name:void 0}}),await b()}const Z=F(()=>{let e=0;return a.page&&a.limit&&(e=(a.page-1)*a.limit),e}),ee=async e=>{B.require({message:l("confirmDelete.message"),header:l("confirmDelete.header"),rejectLabel:l("confirmDelete.rejectLabel"),acceptLabel:l("confirmDelete.acceptLabel"),rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:async()=>{await G(e),y.add({severity:"success",summary:l("toast.summary.delete"),detail:l("toast.detail.delete"),life:3e3})},reject:()=>{y.add({severity:"error",summary:l("toast.summary.cancel_delete"),detail:l("toast.detail.cancel_delete"),life:3e3})}})},D=()=>{y.add({severity:"success",summary:l("toast.summary.success"),detail:l("toast.detail.successfully"),life:3e3})},E=()=>{y.add({severity:"error",summary:l("toast.summary.error"),detail:`${n.error}`,life:3e3})};async function V(){var e,s;Object.keys(d).length!==0&&(a.page=d.page?Number(d.page):1,a.limit=d.limit?Number(d.limit):10,((e=a.filter)==null?void 0:e.name)===""?(a.filter.name=d.search?d.search:"",v({query:{page:a.page,limit:a.limit,search:void 0}})):v({query:{page:a.page,limit:a.limit,search:(s=a.filter)==null?void 0:s.name}})),await b()}de(async()=>{await V(),await g()});const g=async()=>{K.limit=200,await H(),m.province_id=C.data.props.length>0?C.data.props[0].id:void 0},N=F({get:()=>a.filter.name,set:e=>{a.filter?a.filter.name=e:a.filter={name:e}}});async function te(){await b()}async function ae(e){var s;e.target.value===""&&(((s=a.filter)==null?void 0:s.name)!==void 0&&(a.filter.name=""),v({query:{name:void 0}}),await b())}const se=()=>{var e;if(T.value){const s=T.value.$el,o=s.getBoundingClientRect();o.top>=0&&o.bottom<=window.innerHeight?(e=s.querySelector("input"))==null||e.focus():(window.scrollTo({top:window.scrollY+o.top-window.innerHeight/2,behavior:"smooth"}),setTimeout(()=>{var c;(c=s.querySelector("input"))==null||c.focus()},500))}};return(e,s)=>(x(),me("div",null,[i("div",ke,[i("form",{onSubmit:s[1]||(s[1]=pe(o=>u.value?t(Y)():t(J)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[i("div",Ie,[i("div",Le,[i("div",Re,[r(Pe,{ref_key:"autoFocusCursor",ref:T,name:"name",label:e.$t("messages.name"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])])]),i("div",De,[i("div",Ee,[r(t(Te),{modelValue:t(m).province_id,"onUpdate:modelValue":s[0]||(s[0]=o=>t(m).province_id=o),options:t(C).data.props,optionLabel:"name",placeholder:"ກະລຸນາເລືອກກ່ອນ...",optionValue:"id",highlightOnSelect:!0,class:"w-full md:w-14rem"},null,8,["modelValue","options"])])]),i("div",Ve,[u.value?A("",!0):(x(),j(t(w),{key:0,type:"submit",disabled:t(P)(t(S).DISTRICT.CREATE)},{default:f(()=>[Ne,k(" "+h(e.$t("button.save"))+" "+h(e.$t("messages.district")),1)]),_:1},8,["disabled"])),u.value?(x(),j(t(w),{key:1,type:"submit",severity:"warning",disabled:t(P)(t(S).DISTRICT.UPDATE)},{default:f(()=>[qe,k(" "+h(e.$t("button.edit"))+" "+h(e.$t("messages.district")),1)]),_:1},8,["disabled"])):A("",!0)])])],32)]),i("div",Fe,[i("div",je,[i("span",Ae,[i("h2",Be,h(e.$t("table.title.district")),1)]),i("span",Me,[r(t(w),{icon:"pi pi-refresh",rounded:"",severity:"warning",onClick:s[2]||(s[2]=o=>z()),loading:t(n).btnLoading},null,8,["loading"])])]),r(t(we),{value:t(n).data.props,loading:t(n).isLoading,lazy:"",tableStyle:"min-width: 50rem",totalRecords:t(n).data.total,onPage:X,paginator:"",first:Z.value,rows:t(a).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{header:f(()=>[i("div",Ue,[i("span",Oe,[He,r(t(ye),{modelValue:N.value,"onUpdate:modelValue":s[3]||(s[3]=o=>N.value=o),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",onKeyup:ue(te,["enter"]),onInput:ae},null,8,["modelValue","placeholder"])])])]),default:f(()=>[r(t($),{field:"id",header:e.$t("table.header.index"),style:{width:"25%"}},{body:f(o=>[k(h(o.index+1),1)]),_:1},8,["header"]),r(t($),{field:"name",header:e.$t("table.header.district"),style:{width:"25%"}},null,8,["header"]),r(t($),{field:"province.name",header:e.$t("table.header.province"),style:{width:"25%"}},null,8,["header"]),r(t($),{headerStyle:"width: 10rem"},{body:f(({data:o})=>[i("div",Ke,[r(t(w),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:c=>Q(o),disabled:t(P)(t(S).DISTRICT.UPDATE)},null,8,["onClick","disabled"]),r(t(w),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger",onClick:c=>ee(o.id),disabled:t(P)(t(S).DISTRICT.DELETE)},null,8,["onClick","disabled"])])]),_:1})]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])])]))}}),dt=ge(We,[["__scopeId","data-v-8ab97515"]]);export{dt as default};