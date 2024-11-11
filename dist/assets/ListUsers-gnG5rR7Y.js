import{a as P}from"./user.store-_n5nH9C9.js";import{s as v}from"./divider.esm-SeCDVjnY.js";import{d as S,a as R,P as E,o as k,e as I,f as l,t as n,y as s,g as e,E as r,p as L,k as C,j as U,b as c,Q as h,K as d,_ as A}from"./index-LiYCI9b4.js";import{s as i,a as N}from"./column.esm-eMIfGwkp.js";import{b as T}from"./concat-ZmUf8qUH.js";import{s as D}from"./image.esm-_z96pXTQ.js";import{v as u}from"./validation-permissions-V2luqZML.js";import"./axios.config-EMV3l8KB.js";import"./dropdown.esm-PQ4NbItx.js";import"./overlayeventbus.esm-LxMOlmSU.js";import"./index.esm-PaVpzf48.js";import"./inputtext.esm-jR-1LoTE.js";import"./index.esm-Crny-0lw.js";import"./checkbox.esm-83nsXBxg.js";import"./format.currency-CcPyHQva.js";import"./index.esm-DkVABTBB.js";const M=p=>(L("data-v-119cb7d2"),p=p(),C(),p),x={class:"card"},B={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},V={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},j={class:"mb-3"},z=M(()=>l("br",null,null,-1)),F={class:"flex flex-wrap gap-2 btn-right"},O=S({__name:"ListUsers",setup(p){const{getAll:g,state:m,setStateFilter:o}=P(),b=R(),y=async a=>{b.push({name:"admin.edit.user",params:{id:a}})},w=async()=>{b.push({name:"admin.add.user"})},_=E(()=>{let a=0;return o.page&&o.limit&&(a=(o.page-1)*o.limit),a});async function $(a){o.page=a.page+1,o.limit=a.rows,await f()}k(async()=>{await f()});const f=async()=>{await g()};return(a,G)=>(U(),I("div",x,[l("div",B,[l("span",V,[l("h2",j,n(a.$t("table.title.user")),1)]),l("span",null,[s(e(h),{label:a.$t("button.add"),severity:"info",onClick:w,disabled:e(u)(e(c).ADMIN_USER.CREATE)},null,8,["label","disabled"])])]),s(e(v)),z,s(e(N),{value:e(m).data.props,paginator:"",rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:e(m).isLoading,lazy:"",totalRecords:e(m).data.total,onPage:$,first:_.value,rows:e(o).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:`${a.$t("table.pagination.show")} {first} ${a.$t("table.pagination.to")} {last} ${a.$t("table.pagination.from")} {totalRecords} ${a.$t("table.pagination.row")}`},{default:r(()=>[s(e(i),{field:"id",header:a.$t("table.header.index")},{body:r(t=>[d(n(t.index+1),1)]),_:1},8,["header"]),s(e(i),{field:"profile",header:a.$t("table.header.profile"),headerStyle:"min-width: 8rem",frozen:""},{body:r(({data:t})=>[s(e(D),{src:t.profile,alt:"Image",preview:"",style:{"max-width":"80px"}},null,8,["src"])]),_:1},8,["header"]),s(e(i),{header:a.$t("table.header.name")},{body:r(({data:t})=>[d(n(t.name),1)]),_:1},8,["header"]),s(e(i),{header:a.$t("table.header.email")},{body:r(({data:t})=>[d(n(t.email),1)]),_:1},8,["header"]),s(e(i),{header:a.$t("table.header.role")},{body:r(({data:t})=>[d(n(t.role.name),1)]),_:1},8,["header"]),s(e(i),{header:a.$t("table.header.permission")},{body:r(({data:t})=>[d(n(e(T)(t.permissions)),1)]),_:1},8,["header"]),s(e(i),{headerStyle:"width: 10rem"},{body:r(({data:t})=>[l("div",F,[s(e(h),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:K=>y(t.id),disabled:e(u)(e(c).ADMIN_USER.UPDATE)},null,8,["onClick","disabled"]),s(e(h),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger",style:{color:"white"},disabled:e(u)(e(c).ADMIN_USER.DELETE)},null,8,["disabled"])])]),_:1})]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])]))}}),le=A(O,[["__scopeId","data-v-119cb7d2"]]);export{le as default};
