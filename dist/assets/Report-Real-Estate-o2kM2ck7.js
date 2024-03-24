import{d as j,a as q,H as z,r as C,o as F,P as L,e as K,f as r,t as n,y as i,E as w,g as t,j as M,Q as m,W as H}from"./index-3LIc0aHG.js";import{s as Q}from"./image.esm-JRA9ekG7.js";import{s,a as W}from"./column.esm-MrPeeq1d.js";import{s as G}from"./inputtext.esm-Mi_A17gw.js";import{s as c}from"./dropdown.esm-zMrdp6Du.js";import{r as J}from"./real-estate-service.store-ZJikOCww.js";import{d as X}from"./store-0CqEkypI.js";import"./index.esm-bLUFBZUG.js";import"./paginator.esm-_aZTlF_y.js";import"./inputnumber.esm-ZGiwZSaF.js";import"./overlayeventbus.esm-OO8QkR1m.js";import"./index.esm-sbw5TPi6.js";import"./checkbox.esm-xZGMxITN.js";import"./index.esm-13yN3K1b.js";import"./axios.config-gXfSTYZr.js";import"./service-nuWS6klM.js";import"./format.date--bimoUa2.js";const Y={class:"card"},Z={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},x={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},ee={class:"mb-3"},te=r("span",{class:"w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0"},null,-1),ae={class:"col-12 md:col-12 flex flex-row"},le={class:"col-12 md:col-6"},ie=r("span",{class:"text-red-500"}," *",-1),re={class:"col-12 md:col-3"},oe=r("span",{class:"text-red-500"}," *",-1),de={class:"col-12 md:col-3"},se=r("span",{class:"text-red-500"}," *",-1),ne={class:"col-12 md:col-12 flex flex-row"},pe={class:"col-12 md:col-3"},me=r("span",{class:"text-red-500"}," *",-1),he={class:"col-12 md:col-3"},ce=r("span",{class:"text-red-500"}," *",-1),ue={class:"col-12 md:col-3"},fe=r("span",{class:"text-red-500"}," *",-1),ge={class:"col-12 md:col-3"},_e=r("span",{class:"text-red-500"}," *",-1),Be=j({__name:"Report-Real-Estate",setup(ye){const b=q(),{query:u}=z(),{form:a,getAllRealEstate:h,state:v,setStateFilter:l,getCountries:f,getAllCountries:R,getAllProvinces:$,getProvinces:p,getAllDistricts:S,getDistricts:g}=X(),{getOne:O,realestateType:y}=J(),k=C([{id:"all",name:"ທັງໝົດ"},{id:"sale",name:"ຂາຍ"},{id:"rent",name:"ເຊົ່າ"}]),N=C([{id:"all",name:"ທັງໝົດ"},{id:"air",name:"ເເອ"},{id:"fan",name:"ພັດລົມ"},{id:"no",name:"ບໍ່ມີ"}]);async function U(){Object.keys(u).length!==0&&(l.page=u.page?Number(u.page):1,l.limit=u.limit?Number(u.limit):10,b.push({query:{page:l.page,limit:l.limit}})),await B()}F(async()=>{await U()});async function D(e){l.page=e.page+1,l.limit=e.rows;const{page:d,limit:o}=l;b.push({name:"report.real.estate",query:{page:d,limit:o}}),await h()}const T=L(()=>{let e=0;return l.page&&l.limit&&(e=(l.page-1)*l.limit),e}),_=async()=>{l.filter&&(l.filter.real_estate_type_id=a.real_estate_type_id==="all"?"":a.real_estate_type_id,l.filter.service_model=a.service_model==="all"?"":a.service_model,l.filter.room_type=a.room_type==="all"?"":a.room_type,l.filter.district_id=a.district_id==="all"?"":a.district_id),await h()};async function A(e){var o;const d=e.target.name;e.target.value===""&&(d==="search"&&((o=l.filter)==null?void 0:o.search)!==void 0&&(l.filter.search=""),await h())}const V=L({get:()=>l.filter.search||"",set:e=>{l.filter&&(l.filter.search=e)}}),B=async()=>{await h(),await O(),y.props.unshift({id:"all",name:"ທັງໝົດ"}),a.room_type="all",a.service_model="all",await R(),await f.data.props.unshift({id:"all",name:"ທັງໝົດ"}),a.country_id=f.data.props.length>0?f.data.props[0].id:void 0,await $(f.data.props[0].id),p.data.props.unshift({id:"all",name:"ທັງໝົດ"}),a.real_estate_type_id=y.props.length>0?y.props[0].id:void 0,a.province_id=p.data.props.length>0?p.data.props[0].id:void 0,await S(p.data.props[0].id),await g.data.props.unshift({id:"all",name:"ທັງໝົດ"}),await P()},P=async()=>{a.district_id=g.data.props.length>0?g.data.props[0].id:void 0},E=async e=>{l.filter&&(await $(e),p.data.props.unshift({id:"all",name:"ທັງໝົດ"}),a.province_id=p.data.props.length>0?p.data.props[0].id:void 0,l.filter&&(l.filter.country_id=a.country_id==="all"?"":a.country_id,l.filter.district_id=a.district_id==="all"?"":a.district_id,l.filter.province_id=a.province_id==="all"?"":a.province_id),await h())},I=async e=>{await S(e),await g.data.props.unshift({id:"all",name:"ທັງໝົດ"}),await P(),l.filter&&(l.filter.country_id=a.country_id==="all"?"":a.country_id,l.filter.district_id=a.district_id==="all"?"":a.district_id,l.filter.province_id=a.province_id==="all"?"":a.province_id),await h()};return(e,d)=>(M(),K("div",Y,[r("div",Z,[r("span",x,[r("h2",ee,n(e.$t("table.title.report_real_estate")),1)]),te]),i(t(W),{value:t(v).data.props,onPage:D,paginator:"",first:T.value,rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:t(v).isLoading,lazy:"",totalRecords:t(v).data.total,rows:t(l).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{header:w(()=>[r("div",ae,[r("div",le,[r("label",null,[m(n(e.$t("messages.search"))+" ",1),ie]),i(t(G),{modelValue:V.value,"onUpdate:modelValue":d[0]||(d[0]=o=>V.value=o),placeholder:e.$t("placeholder.textSearch"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"search",onKeyup:H(_,["enter"]),onInput:A},null,8,["modelValue","placeholder"])]),r("div",re,[r("label",null,[m(n(e.$t("messages.realestate_type"))+" ",1),oe]),i(t(c),{name:"real_estate_type",modelValue:t(a).real_estate_type_id,"onUpdate:modelValue":d[1]||(d[1]=o=>t(a).real_estate_type_id=o),options:t(y).props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:_},null,8,["modelValue","options","placeholder"])]),r("div",de,[r("label",null,[m(n(e.$t("messages.service_model"))+" ",1),se]),i(t(c),{modelValue:t(a).service_model,"onUpdate:modelValue":d[2]||(d[2]=o=>t(a).service_model=o),options:k.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full",onChange:_},null,8,["modelValue","options","placeholder"])])]),r("div",ne,[r("div",pe,[r("label",null,[m(n(e.$t("messages.room_type"))+" ",1),me]),i(t(c),{modelValue:t(a).room_type,"onUpdate:modelValue":d[3]||(d[3]=o=>t(a).room_type=o),options:N.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:_},null,8,["modelValue","options","placeholder"])]),r("div",he,[r("label",null,[m(n(e.$t("messages.country"))+" ",1),ce]),i(t(c),{modelValue:t(a).country_id,"onUpdate:modelValue":d[4]||(d[4]=o=>t(a).country_id=o),options:t(f).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:d[5]||(d[5]=o=>E(t(a).country_id))},null,8,["modelValue","options","placeholder"])]),r("div",ue,[r("label",null,[m(n(e.$t("messages.province"))+" ",1),fe]),i(t(c),{modelValue:t(a).province_id,"onUpdate:modelValue":d[6]||(d[6]=o=>t(a).province_id=o),options:t(p).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:d[7]||(d[7]=o=>I(t(a).province_id))},null,8,["modelValue","options","placeholder"])]),r("div",ge,[r("label",null,[m(n(e.$t("messages.district"))+" ",1),_e]),i(t(c),{modelValue:t(a).district_id,"onUpdate:modelValue":d[8]||(d[8]=o=>t(a).district_id=o),options:t(g).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:_},null,8,["modelValue","options","placeholder"])])])]),default:w(()=>[i(t(s),{field:"id",header:e.$t("table.header.index")},{body:w(o=>[m(n(o.index+1),1)]),_:1},8,["header"]),i(t(s),{field:"image",header:e.$t("table.header.image"),headerStyle:"min-width: 8rem"},{body:w(({data:o})=>[i(t(Q),{src:o.image,alt:"Image",preview:"",style:{"max-width":"80px"}},null,8,["src"])]),_:1},8,["header"]),i(t(s),{field:"customer.customer_number",header:e.$t("table.header.customer_number"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"customer.name",header:e.$t("table.header.customer"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"customer.owner",header:e.$t("table.header.owner"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"real_esate_number",header:e.$t("table.header.real_esate_number"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"name",header:e.$t("table.header.name"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"real_estate_type.name",header:e.$t("table.header.realestate_type"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"service_model",header:e.$t("table.header.service_model"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"room_type",header:e.$t("table.header.room_type"),headerStyle:"min-width: 6rem"},null,8,["header"]),i(t(s),{field:"country.name",header:e.$t("table.header.country"),headerStyle:"min-width: 6rem"},null,8,["header"]),i(t(s),{field:"district.province.name",header:e.$t("table.header.province"),headerStyle:"min-width: 8rem"},null,8,["header"]),i(t(s),{field:"district.name",header:e.$t("table.header.district"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"village",header:e.$t("table.header.village"),headerStyle:"min-width: 7rem"},null,8,["header"]),i(t(s),{field:"zip_code",header:e.$t("table.header.zip_code"),headerStyle:"min-width: 6rem"},null,8,["header"]),i(t(s),{field:"wide",header:e.$t("table.header.wide"),headerStyle:"min-width: 6rem"},null,8,["header"]),i(t(s),{field:"long",header:e.$t("table.header.long"),headerStyle:"min-width: 6rem"},null,8,["header"]),i(t(s),{field:"status",header:e.$t("table.header.status"),headerStyle:"min-width: 6rem"},null,8,["header"])]),_:1},8,["value","first","loading","totalRecords","rows","currentPageReportTemplate"])]))}});export{Be as default};
