import{s as n,a as w}from"./column.esm-eMIfGwkp.js";import{d as _,a as P,H as y,P as $,o as v,e as k,f as r,t as g,y as i,E as p,g as a,j as R,K as L,Q as S,b as C,_ as N}from"./index-LiYCI9b4.js";import{a as T}from"./store-YEE2ZHc4.js";import{v as x}from"./validation-permissions-V2luqZML.js";import"./dropdown.esm-PQ4NbItx.js";import"./overlayeventbus.esm-LxMOlmSU.js";import"./index.esm-PaVpzf48.js";import"./inputtext.esm-jR-1LoTE.js";import"./index.esm-Crny-0lw.js";import"./checkbox.esm-83nsXBxg.js";import"./axios.config-EMV3l8KB.js";const E={class:"card"},V={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},A={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},B={class:"mb-3"},I={class:"flex flex-wrap gap-2 btn-right"},O=_({__name:"ListView",setup(j){const{push:l}=P(),{query:o}=y(),{getAll:m,state:d,setStateFilter:t}=T(),u=e=>{l({name:"admin.edit.about",params:{id:e}})};async function f(e){t.page=e.page+1,t.limit=e.rows;const{page:c,limit:s}=t;l({name:"admin.about",query:{page:c,limit:s}}),await m()}const h=$(()=>{let e=0;return t.page&&t.limit&&(e=(t.page-1)*t.limit),e});async function b(){Object.keys(o).length!==0&&(t.page=o.page?Number(o.page):1,t.limit=o.limit?Number(o.limit):10,l({query:{page:t.page,limit:t.limit}})),await m()}return v(async()=>{await b()}),(e,c)=>(R(),k("div",null,[r("div",E,[r("div",V,[r("span",A,[r("h2",B,g(e.$t("table.title.about")),1)])]),i(a(w),{value:a(d).data.props,loading:a(d).isLoading,lazy:"",tableStyle:"min-width: 50rem",totalRecords:a(d).data.total,onPage:f,paginator:"",first:h.value,rows:a(t).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{default:p(()=>[i(a(n),{field:"id",header:e.$t("table.header.index")},{body:p(s=>[L(g(s.index+1),1)]),_:1},8,["header"]),i(a(n),{field:"title",header:e.$t("table.header.title")},null,8,["header"]),i(a(n),{field:"link_videos",header:e.$t("table.header.link_videos")},null,8,["header"]),i(a(n),{headerStyle:"width: 10rem"},{body:p(({data:s})=>[r("div",I,[i(a(S),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:q=>u(s.id),disabled:a(x)(a(C).ABOUT_US.UPDATE)},null,8,["onClick","disabled"])])]),_:1})]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])])]))}}),X=N(O,[["__scopeId","data-v-11d4f032"]]);export{X as default};
