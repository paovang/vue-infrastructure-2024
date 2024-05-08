import{d as U,u as E,a as I,H as j,r as v,o as q,N as S,e as A,f as r,t as m,y as t,E as g,g as a,j as B,O as p,U as D}from"./index-uqBXdS39.js";import{s as F}from"./image.esm-I0U6Dawk.js";import{s as i,a as K}from"./column.esm-QNE8ZVa2.js";import{s as M}from"./inputtext.esm-twR6gMiV.js";import{s as y}from"./dropdown.esm-vZmjUTws.js";import{r as z}from"./real-estate-service.store-p0O2oJ9V.js";import{d as H}from"./store-DPVVVDdF.js";import"./index.esm-gaQKtf8n.js";import"./paginator.esm-Ws_hXeHh.js";import"./inputnumber.esm-vVn8G7aA.js";import"./overlayeventbus.esm-dTyTY2ZN.js";import"./index.esm-YblcrBC9.js";import"./checkbox.esm-WEvKr4KG.js";import"./index.esm-xT6tJOZ9.js";import"./axios.config-jCy-uYyV.js";import"./service-DfnpQ6QA.js";const G={class:"card"},J={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Q={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},W={class:"mb-3"},X=r("span",{class:"w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0"},null,-1),Y={class:"col-12 md:col-12 flex flex-row is-margin-top"},Z={class:"col-12 md:col-12"},x=r("span",{class:"text-red-500"}," *",-1),ee={class:"col-12 md:col-12 flex flex-row is-margin-top"},ae={class:"col-12 md:col-3"},te=r("span",{class:"text-red-500"}," *",-1),le={class:"col-12 md:col-3"},re=r("span",{class:"text-red-500"}," *",-1),oe={class:"col-12 md:col-3"},se=r("span",{class:"text-red-500"}," *",-1),ie={class:"col-12 md:col-3"},de=r("span",{class:"text-red-500"}," *",-1),Ce=U({__name:"Report-Real-Estate",setup(ne){const{t:n}=E(),w=I(),{query:h}=j(),{form:o,getAllRealEstate:c,state:_,setStateFilter:l,getCountries:f,getAllCountries:V}=H(),{getOne:P,realestateType:b}=z(),C=v([{id:"all",name:n("messages.all")},{id:"sale",name:n("messages.service_sale")},{id:"rent",name:n("messages.service_rent")}]),L=v([{id:"all",name:n("messages.all")},{id:"air",name:n("messages.air")},{id:"fan",name:n("messages.fan")},{id:"no",name:n("messages.none")}]);async function R(){Object.keys(h).length!==0&&(l.page=h.page?Number(h.page):1,l.limit=h.limit?Number(h.limit):10,w.push({query:{page:l.page,limit:l.limit}})),await T()}q(async()=>{await R()});async function N(e){l.page=e.page+1,l.limit=e.rows;const{page:d,limit:s}=l;w.push({name:"report.real.estate",query:{page:d,limit:s}}),await c()}const k=S(()=>{let e=0;return l.page&&l.limit&&(e=(l.page-1)*l.limit),e}),u=async()=>{l.filter&&(l.filter.real_estate_type_id=o.real_estate_type_id==="all"?"":o.real_estate_type_id,l.filter.service_model=o.service_model==="all"?"":o.service_model,l.filter.room_type=o.room_type==="all"?"":o.room_type,l.filter.country_id=o.country_id==="all"?"":o.country_id),await c()};async function O(e){var s;const d=e.target.name;e.target.value===""&&(d==="search"&&((s=l.filter)==null?void 0:s.search)!==void 0&&(l.filter.search=""),await c())}const $=S({get:()=>l.filter.search||"",set:e=>{l.filter&&(l.filter.search=e)}}),T=async()=>{await c(),await P(),b.props.unshift({id:"all",name:n("messages.all")}),o.room_type="all",o.service_model="all",await V(),await f.data.props.unshift({id:"all",name:n("messages.all")}),o.country_id=f.data.props.length>0?f.data.props[0].id:void 0};return(e,d)=>(B(),A("div",G,[r("div",J,[r("span",Q,[r("h2",W,m(e.$t("table.title.report_real_estate")),1)]),X]),t(a(K),{value:a(_).data.props,onPage:N,paginator:"",first:k.value,rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:a(_).isLoading,lazy:"",totalRecords:a(_).data.total,rows:a(l).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{header:g(()=>[r("div",Y,[r("div",Z,[r("label",null,[p(m(e.$t("messages.search"))+" ",1),x]),t(a(M),{modelValue:$.value,"onUpdate:modelValue":d[0]||(d[0]=s=>$.value=s),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"search",onKeyup:D(u,["enter"]),onInput:O},null,8,["modelValue","placeholder"])])]),r("div",ee,[r("div",ae,[r("label",null,[p(m(e.$t("messages.realestate_type"))+" ",1),te]),t(a(y),{name:"real_estate_type",modelValue:a(o).real_estate_type_id,"onUpdate:modelValue":d[1]||(d[1]=s=>a(o).real_estate_type_id=s),options:a(b).props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:u},null,8,["modelValue","options","placeholder"])]),r("div",le,[r("label",null,[p(m(e.$t("messages.service_model"))+" ",1),re]),t(a(y),{modelValue:a(o).service_model,"onUpdate:modelValue":d[2]||(d[2]=s=>a(o).service_model=s),options:C.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full",onChange:u},null,8,["modelValue","options","placeholder"])]),r("div",oe,[r("label",null,[p(m(e.$t("messages.room_type"))+" ",1),se]),t(a(y),{modelValue:a(o).room_type,"onUpdate:modelValue":d[3]||(d[3]=s=>a(o).room_type=s),options:L.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:u},null,8,["modelValue","options","placeholder"])]),r("div",ie,[r("label",null,[p(m(e.$t("messages.country"))+" ",1),de]),t(a(y),{modelValue:a(o).country_id,"onUpdate:modelValue":d[4]||(d[4]=s=>a(o).country_id=s),options:a(f).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:d[5]||(d[5]=s=>u())},null,8,["modelValue","options","placeholder"])])])]),default:g(()=>[t(a(i),{field:"id",header:e.$t("table.header.index")},{body:g(s=>[p(m(s.index+1),1)]),_:1},8,["header"]),t(a(i),{field:"image",header:e.$t("table.header.image"),headerStyle:"min-width: 8rem"},{body:g(({data:s})=>[t(a(F),{src:s.image,alt:"Image",preview:"",style:{"max-width":"80px"}},null,8,["src"])]),_:1},8,["header"]),t(a(i),{field:"customer.customer_number",header:e.$t("table.header.customer_number"),headerStyle:"min-width: 7rem"},null,8,["header"]),t(a(i),{field:"customer.name",header:e.$t("table.header.customer"),headerStyle:"min-width: 7rem"},null,8,["header"]),t(a(i),{field:"real_esate_number",header:e.$t("table.header.real_esate_number"),headerStyle:"min-width: 7rem"},null,8,["header"]),t(a(i),{field:"name",header:e.$t("table.header.real_estate_name"),headerStyle:"min-width: 7rem"},null,8,["header"]),t(a(i),{field:"trans_real_estate_type.name",header:e.$t("table.header.realestate_type"),headerStyle:"min-width: 7rem"},null,8,["header"]),t(a(i),{field:"service_model",header:e.$t("table.header.service_model"),headerStyle:"min-width: 7rem"},null,8,["header"]),t(a(i),{field:"room_type",header:e.$t("table.header.room_type"),headerStyle:"min-width: 6rem"},null,8,["header"]),t(a(i),{field:"owner_name",header:e.$t("table.header.owner"),headerStyle:"min-width: 6rem"},null,8,["header"]),t(a(i),{field:"agent_name",header:e.$t("table.header.name"),headerStyle:"min-width: 6rem"},null,8,["header"]),t(a(i),{field:"country.name",header:e.$t("table.header.country"),headerStyle:"min-width: 6rem"},null,8,["header"]),t(a(i),{field:"village",header:e.$t("table.header.address"),headerStyle:"min-width: 12rem"},null,8,["header"]),t(a(i),{field:"build_in",header:e.$t("table.header.build_in"),headerStyle:"min-width: 6rem"},null,8,["header"]),t(a(i),{field:"long",header:e.$t("table.header.long"),headerStyle:"min-width: 6rem"},null,8,["header"]),t(a(i),{field:"wide",header:e.$t("table.header.wide"),headerStyle:"min-width: 6rem"},null,8,["header"]),t(a(i),{field:"status",header:e.$t("table.header.status"),headerStyle:"min-width: 6rem"},null,8,["header"])]),_:1},8,["value","first","loading","totalRecords","rows","currentPageReportTemplate"])]))}});export{Ce as default};