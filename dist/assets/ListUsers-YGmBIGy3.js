import{o as L}from"./user.store-JmCVovT-.js";import{s as S}from"./divider.esm-ExFkAjO9.js";import{d as R,u as D,M as j,N as I,a as U,P as N,o as T,e as x,f as d,t as l,y as r,g as t,E as o,p as z,k as A,j as B,U as u,Q as p,_ as V}from"./index-GRK1YTSm.js";import{s as n,a as E}from"./column.esm-UxcX8kZH.js";import{b as F}from"./concat-xsDkugbM.js";import{s as M}from"./image.esm-lhljXnv6.js";import"./axios.config-gXfSTYZr.js";import"./paginator.esm-zCY4OKB_.js";import"./dropdown.esm-0LspyNKv.js";import"./overlayeventbus.esm-kiZpcDfU.js";import"./inputnumber.esm-8JSqyx1X.js";import"./inputtext.esm-TukeicE2.js";import"./index.esm-Zr2pEJ3y.js";import"./checkbox.esm-0pyBoICY.js";import"./index.esm-cP-HVwrc.js";import"./format.currency-CcPyHQva.js";import"./index.esm-Izauckbm.js";const q=c=>(z("data-v-bf9a4592"),c=c(),A(),c),O={class:"card"},Q={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},G={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},H={class:"mb-3"},J=q(()=>d("br",null,null,-1)),K={class:"flex flex-wrap gap-2"},W=R({__name:"ListUsers",setup(c){const{t:s}=D(),h=j(),b=I(),{remove:g,getAll:w,state:m,setStateFilter:i}=L(),f=U(),_=async e=>{f.push({name:"owner.edit.user",params:{id:e}})},$=async()=>{f.push({name:"owner.add.user"})},v=N(()=>{let e=0;return i.page&&i.limit&&(e=(i.page-1)*i.limit),e});async function P(e){i.page=e.page+1,i.limit=e.rows,await y()}const k=async e=>{b.require({message:s("confirmDelete.message"),header:s("confirmDelete.header"),rejectLabel:s("confirmDelete.rejectLabel"),acceptLabel:s("confirmDelete.acceptLabel"),rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:async()=>{await g(e),h.add({severity:"success",summary:s("toast.summary.delete"),detail:s("toast.detail.delete"),life:3e3})},reject:()=>{h.add({severity:"error",summary:s("toast.summary.cancel_delete"),detail:s("toast.detail.cancel_delete"),life:3e3})}})};T(async()=>{await y()});const y=async()=>{await w()};return(e,X)=>(B(),x("div",O,[d("div",Q,[d("span",G,[d("h2",H,l(e.$t("table.title.user")),1)]),d("span",null,[r(t(u),{label:e.$t("button.add"),severity:"info",onClick:$},null,8,["label"])])]),r(t(S)),J,r(t(E),{value:t(m).data.props,paginator:"",rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:t(m).isLoading,lazy:"",totalRecords:t(m).data.total,onPage:P,first:v.value,scrollable:"",rows:t(i).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{default:o(()=>[r(t(n),{field:"id",header:e.$t("table.header.index")},{body:o(a=>[p(l(a.index+1),1)]),_:1},8,["header"]),r(t(n),{headerStyle:"min-width: 8rem",frozen:""},{body:o(({data:a})=>[d("div",K,[r(t(u),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:C=>_(a.id)},null,8,["onClick"]),r(t(u),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger",style:{color:"white"},onClick:C=>k(a.id)},null,8,["onClick"])])]),_:1}),r(t(n),{field:"profile",header:e.$t("table.header.profile"),headerStyle:"min-width: 8rem",frozen:""},{body:o(({data:a})=>[r(t(M),{src:a.profile,alt:"Image",preview:"",style:{"max-width":"80px"}},null,8,["src"])]),_:1},8,["header"]),r(t(n),{header:e.$t("table.header.name"),headerStyle:"min-width: 10rem"},{body:o(({data:a})=>[p(l(a.name),1)]),_:1},8,["header"]),r(t(n),{header:e.$t("table.header.email"),headerStyle:"min-width: 3rem"},{body:o(({data:a})=>[p(l(a.email),1)]),_:1},8,["header"]),r(t(n),{header:e.$t("table.header.role"),headerStyle:"min-width: 8rem"},{body:o(({data:a})=>[p(l(a.role.name),1)]),_:1},8,["header"]),r(t(n),{header:e.$t("table.header.permission"),headerStyle:"min-width: 20rem"},{body:o(({data:a})=>[p(l(t(F)(a.permissions)),1)]),_:1},8,["header"])]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])]))}}),fe=V(W,[["__scopeId","data-v-bf9a4592"]]);export{fe as default};