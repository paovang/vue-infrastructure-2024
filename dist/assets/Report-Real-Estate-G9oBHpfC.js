import{d as j,u as q,a as F,H as K,r as P,o as M,N as C,e as z,f as s,t as p,y as r,E as y,g as a,j as H,O as h,U as G}from"./index-IEQe28hw.js";import{s as J}from"./image.esm-r6cAPYQj.js";import{s as d,a as Q}from"./column.esm-OrffhnHs.js";import{s as W}from"./inputtext.esm-AOnGUTsm.js";import{s as w}from"./dropdown.esm-QNg_qYZy.js";import{r as X}from"./real-estate-service.store-odE6f5Gl.js";import{d as Y}from"./store-IhdvnTwE.js";import"./index.esm-ktLzQEPJ.js";import"./paginator.esm-eRAHRNvb.js";import"./inputnumber.esm-P8DAIkM9.js";import"./overlayeventbus.esm-v52u7d4z.js";import"./index.esm-0UP4CAzj.js";import"./checkbox.esm-gU_fICfh.js";import"./index.esm-EUeEq7yb.js";import"./axios.config-jCy-uYyV.js";import"./service-SQLvwKvD.js";import"./format.date--bimoUa2.js";const Z={class:"card"},x={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},ee={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},ae={class:"mb-3"},te=s("span",{class:"w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0"},null,-1),le={class:"col-12 md:col-12 flex flex-row is-margin-top"},re={class:"col-12 md:col-12"},se=s("span",{class:"text-red-500"}," *",-1),ie={class:"col-12 md:col-12 flex flex-row is-margin-top"},oe={class:"col-12 md:col-3"},de=s("span",{class:"text-red-500"}," *",-1),ne={class:"col-12 md:col-3"},me=s("span",{class:"text-red-500"}," *",-1),pe={class:"col-12 md:col-3"},he=s("span",{class:"text-red-500"}," *",-1),ce={class:"col-12 md:col-3"},ue=s("span",{class:"text-red-500"}," *",-1),Ue=j({__name:"Report-Real-Estate",setup(fe){const{t:n}=q(),$=F(),{query:c}=K(),{form:t,getAllRealEstate:u,state:v,setStateFilter:l,getCountries:f,getAllCountries:L,getAllProvinces:S,getProvinces:m,getAllDistricts:R,getDistricts:b}=Y(),{getOne:N,realestateType:g}=X(),k=P([{id:"all",name:n("messages.all")},{id:"sale",name:n("messages.service_sale")},{id:"rent",name:n("messages.service_rent")}]),O=P([{id:"all",name:n("messages.all")},{id:"air",name:n("messages.air")},{id:"fan",name:n("messages.fan")},{id:"no",name:n("messages.none")}]);async function T(){Object.keys(c).length!==0&&(l.page=c.page?Number(c.page):1,l.limit=c.limit?Number(c.limit):10,$.push({query:{page:l.page,limit:l.limit}})),await E()}M(async()=>{await T()});async function U(e){l.page=e.page+1,l.limit=e.rows;const{page:o,limit:i}=l;$.push({name:"report.real.estate",query:{page:o,limit:i}}),await u()}const A=C(()=>{let e=0;return l.page&&l.limit&&(e=(l.page-1)*l.limit),e}),_=async()=>{l.filter&&(l.filter.real_estate_type_id=t.real_estate_type_id==="all"?"":t.real_estate_type_id,l.filter.service_model=t.service_model==="all"?"":t.service_model,l.filter.room_type=t.room_type==="all"?"":t.room_type,l.filter.district_id=t.district_id==="all"?"":t.district_id),await u()};async function D(e){var i;const o=e.target.name;e.target.value===""&&(o==="search"&&((i=l.filter)==null?void 0:i.search)!==void 0&&(l.filter.search=""),await u())}const V=C({get:()=>l.filter.search||"",set:e=>{l.filter&&(l.filter.search=e)}}),E=async()=>{await u(),await N(),g.props.unshift({id:"all",name:n("messages.all")}),t.room_type="all",t.service_model="all",await L(),await f.data.props.unshift({id:"all",name:n("messages.all")}),t.country_id=f.data.props.length>0?f.data.props[0].id:void 0,await S(f.data.props[0].id),m.data.props.unshift({id:"all",name:n("messages.all")}),t.real_estate_type_id=g.props.length>0?g.props[0].id:void 0,t.province_id=m.data.props.length>0?m.data.props[0].id:void 0,await R(m.data.props[0].id),await b.data.props.unshift({id:"all",name:n("messages.all")}),await I()},I=async()=>{t.district_id=b.data.props.length>0?b.data.props[0].id:void 0},B=async e=>{l.filter&&(await S(e),m.data.props.unshift({id:"all",name:n("messages.all")}),t.province_id=m.data.props.length>0?m.data.props[0].id:void 0,l.filter&&(l.filter.country_id=t.country_id==="all"?"":t.country_id,l.filter.district_id=t.district_id==="all"?"":t.district_id,l.filter.province_id=t.province_id==="all"?"":t.province_id),await u())};return(e,o)=>(H(),z("div",Z,[s("div",x,[s("span",ee,[s("h2",ae,p(e.$t("table.title.report_real_estate")),1)]),te]),r(a(Q),{value:a(v).data.props,onPage:U,paginator:"",first:A.value,rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:a(v).isLoading,lazy:"",totalRecords:a(v).data.total,rows:a(l).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{header:y(()=>[s("div",le,[s("div",re,[s("label",null,[h(p(e.$t("messages.search"))+" ",1),se]),r(a(W),{modelValue:V.value,"onUpdate:modelValue":o[0]||(o[0]=i=>V.value=i),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"search",onKeyup:G(_,["enter"]),onInput:D},null,8,["modelValue","placeholder"])])]),s("div",ie,[s("div",oe,[s("label",null,[h(p(e.$t("messages.realestate_type"))+" ",1),de]),r(a(w),{name:"real_estate_type",modelValue:a(t).real_estate_type_id,"onUpdate:modelValue":o[1]||(o[1]=i=>a(t).real_estate_type_id=i),options:a(g).props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:_},null,8,["modelValue","options","placeholder"])]),s("div",ne,[s("label",null,[h(p(e.$t("messages.service_model"))+" ",1),me]),r(a(w),{modelValue:a(t).service_model,"onUpdate:modelValue":o[2]||(o[2]=i=>a(t).service_model=i),options:k.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full",onChange:_},null,8,["modelValue","options","placeholder"])]),s("div",pe,[s("label",null,[h(p(e.$t("messages.room_type"))+" ",1),he]),r(a(w),{modelValue:a(t).room_type,"onUpdate:modelValue":o[3]||(o[3]=i=>a(t).room_type=i),options:O.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:_},null,8,["modelValue","options","placeholder"])]),s("div",ce,[s("label",null,[h(p(e.$t("messages.country"))+" ",1),ue]),r(a(w),{modelValue:a(t).country_id,"onUpdate:modelValue":o[4]||(o[4]=i=>a(t).country_id=i),options:a(f).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:o[5]||(o[5]=i=>B(a(t).country_id))},null,8,["modelValue","options","placeholder"])])])]),default:y(()=>[r(a(d),{field:"id",header:e.$t("table.header.index")},{body:y(i=>[h(p(i.index+1),1)]),_:1},8,["header"]),r(a(d),{field:"image",header:e.$t("table.header.image"),headerStyle:"min-width: 8rem"},{body:y(({data:i})=>[r(a(J),{src:i.image,alt:"Image",preview:"",style:{"max-width":"80px"}},null,8,["src"])]),_:1},8,["header"]),r(a(d),{field:"customer.customer_number",header:e.$t("table.header.customer_number"),headerStyle:"min-width: 7rem"},null,8,["header"]),r(a(d),{field:"customer.name",header:e.$t("table.header.customer"),headerStyle:"min-width: 7rem"},null,8,["header"]),r(a(d),{field:"real_esate_number",header:e.$t("table.header.real_esate_number"),headerStyle:"min-width: 7rem"},null,8,["header"]),r(a(d),{field:"name",header:e.$t("table.header.real_estate_name"),headerStyle:"min-width: 7rem"},null,8,["header"]),r(a(d),{field:"real_estate_type.name",header:e.$t("table.header.realestate_type"),headerStyle:"min-width: 7rem"},null,8,["header"]),r(a(d),{field:"service_model",header:e.$t("table.header.service_model"),headerStyle:"min-width: 7rem"},null,8,["header"]),r(a(d),{field:"room_type",header:e.$t("table.header.room_type"),headerStyle:"min-width: 6rem"},null,8,["header"]),r(a(d),{field:"owner_name",header:e.$t("table.header.owner"),headerStyle:"min-width: 6rem"},null,8,["header"]),r(a(d),{field:"agent_name",header:e.$t("table.header.name"),headerStyle:"min-width: 6rem"},null,8,["header"]),r(a(d),{field:"country.name",header:e.$t("table.header.country"),headerStyle:"min-width: 6rem"},null,8,["header"]),r(a(d),{field:"village",header:e.$t("table.header.address"),headerStyle:"min-width: 12rem"},null,8,["header"]),r(a(d),{field:"wide",header:e.$t("table.header.wide"),headerStyle:"min-width: 6rem"},null,8,["header"]),r(a(d),{field:"long",header:e.$t("table.header.long"),headerStyle:"min-width: 6rem"},null,8,["header"]),r(a(d),{field:"status",header:e.$t("table.header.status"),headerStyle:"min-width: 6rem"},null,8,["header"])]),_:1},8,["value","first","loading","totalRecords","rows","currentPageReportTemplate"])]))}});export{Ue as default};
