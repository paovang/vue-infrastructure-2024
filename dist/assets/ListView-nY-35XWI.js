import{s as p,a as b}from"./column.esm-9UPKlPQF.js";import{d as _,a as P,H as y,N as $,o as v,e as R,f as s,t as g,y as n,E as d,g as a,j as k,O as N,P as L,b as S,_ as x}from"./index-Ieph5Qgc.js";import{a as C}from"./store-gqqLzdnG.js";import{v as T}from"./validation-permissions-ZONgxtxv.js";import"./paginator.esm-4rh9lzK1.js";import"./dropdown.esm-BZeqJQ9m.js";import"./overlayeventbus.esm-di4A_FML.js";import"./inputnumber.esm-f_fisCeD.js";import"./inputtext.esm-RZCRaX-S.js";import"./index.esm-W2Z0rEsa.js";import"./checkbox.esm-EWaDW57o.js";import"./index.esm-b3fvrvPV.js";import"./axios.config-EMV3l8KB.js";const E={class:"card"},I={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},V={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},O={class:"mb-3"},j={class:"flex flex-wrap gap-2 btn-right"},q=_({__name:"ListView",setup(A){const{push:r}=P(),{query:i}=y(),{getAll:m,state:l,setStateFilter:t}=C(),u=e=>{r({name:"admin.edit.warning",params:{id:e}})};async function f(e){t.page=e.page+1,t.limit=e.rows;const{page:c,limit:o}=t;r({name:"admin.warning",query:{page:c,limit:o}}),await m()}const w=$(()=>{let e=0;return t.page&&t.limit&&(e=(t.page-1)*t.limit),e});async function h(){Object.keys(i).length!==0&&(t.page=i.page?Number(i.page):1,t.limit=i.limit?Number(i.limit):10,r({query:{page:t.page,limit:t.limit}})),await m()}return v(async()=>{await h()}),(e,c)=>(k(),R("div",null,[s("div",E,[s("div",I,[s("span",V,[s("h2",O,g(e.$t("table.title.warning")),1)])]),n(a(b),{value:a(l).data.props,loading:a(l).isLoading,lazy:"",tableStyle:"min-width: 50rem",totalRecords:a(l).data.total,onPage:f,paginator:"",first:w.value,rows:a(t).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{default:d(()=>[n(a(p),{field:"id",header:e.$t("table.header.index")},{body:d(o=>[N(g(o.index+1),1)]),_:1},8,["header"]),n(a(p),{field:"description",header:e.$t("table.header.warning")},null,8,["header"]),n(a(p),{headerStyle:"width: 10rem"},{body:d(({data:o})=>[s("div",j,[n(a(L),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:B=>u(o.id),disabled:a(T)(a(S).WARNING.UPDATE)},null,8,["onClick","disabled"])])]),_:1})]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])])]))}}),Z=x(q,[["__scopeId","data-v-3796589c"]]);export{Z as default};