import{a as y}from"./user.store-70bEoole.js";import{s as $}from"./divider.esm-Cq0xmJze.js";import{d as P,a as v,V as k,I as L,c as R,e as l,t as i,v as o,f as t,A as r,p as C,i as S,o as I,X as m,W as d,_ as U}from"./index-kU_R0p5R.js";import{s as n,a as x}from"./column.esm-WBUaPdKh.js";import{c as A}from"./concat-9eYZKFoS.js";import"./axios.config-HGXv1ygo.js";import"./paginator.esm-DEpk_RMw.js";import"./dropdown.esm-cvAemcgL.js";import"./overlayeventbus.esm-sQdJG6dl.js";import"./inputnumber.esm-ixG6T3Oj.js";import"./inputtext.esm-K2lcKqKO.js";import"./index.esm-OcPB7vHP.js";import"./checkbox.esm-GWkSzIY0.js";import"./index.esm-bPkhvm65.js";const N=p=>(C("data-v-a1751414"),p=p(),S(),p),T={class:"card"},V={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},B={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},D={class:"mb-3"},F=N(()=>l("br",null,null,-1)),j={class:"flex flex-wrap gap-2 btn-right"},z=P({__name:"ListUsers",setup(p){const{getAll:g,state:c,setStateFilter:s}=y(),u=v(),f=async e=>{u.push({name:"admin.edit.user",params:{id:e}})},b=async()=>{u.push({name:"admin.add.user"})},w=k(()=>{let e=0;return s.page&&s.limit&&(e=(s.page-1)*s.limit),e});async function _(e){s.page=e.page+1,s.limit=e.rows,await h()}L(async()=>{await h()});const h=async()=>{await g()};return(e,E)=>(I(),R("div",T,[l("div",V,[l("span",B,[l("h2",D,i(e.$t("table.title.user")),1)]),l("span",null,[o(t(m),{icon:"pi pi-plus-circle",rounded:"",onClick:b})])]),o(t($)),F,o(t(x),{value:t(c).data.props,paginator:"",rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:t(c).isLoading,lazy:"",totalRecords:t(c).data.total,onPage:_,first:w.value,rows:t(s).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{default:r(()=>[o(t(n),{field:"id",header:e.$t("table.header.index")},{body:r(a=>[d(i(a.index+1),1)]),_:1},8,["header"]),o(t(n),{header:e.$t("table.header.name")},{body:r(({data:a})=>[d(i(a.name),1)]),_:1},8,["header"]),o(t(n),{header:e.$t("table.header.email")},{body:r(({data:a})=>[d(i(a.email),1)]),_:1},8,["header"]),o(t(n),{header:e.$t("table.header.role")},{body:r(({data:a})=>[d(i(a.role.name),1)]),_:1},8,["header"]),o(t(n),{header:e.$t("table.header.permission")},{body:r(({data:a})=>[d(i(t(A)(a.permissions)),1)]),_:1},8,["header"]),o(t(n),{headerStyle:"width: 10rem"},{body:r(({data:a})=>[l("div",j,[o(t(m),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:M=>f(a.id)},null,8,["onClick"]),o(t(m),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger",style:{color:"white"}})])]),_:1})]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])]))}}),oe=U(z,[["__scopeId","data-v-a1751414"]]);export{oe as default};