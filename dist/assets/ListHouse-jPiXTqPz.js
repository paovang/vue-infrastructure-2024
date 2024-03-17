import{d as oe,u as se,a as ie,E as re,P as ne,Q as de,C as q,I as ce,V,c as pe,e as a,t as c,v as r,f as t,A as L,o as ue,X as C,W as p,$ as k}from"./index-kU_R0p5R.js";import{s as d,a as me}from"./column.esm-WBUaPdKh.js";import{s as U}from"./inputtext.esm-K2lcKqKO.js";import{s as _}from"./dropdown.esm-cvAemcgL.js";import{h as fe}from"./house.store-e1DGsWnG.js";import{r as he}from"./real-estate-service.store-rXgsR7FJ.js";import{p as ge}from"./province.store-iKSoRIKX.js";import{d as ye}from"./district.store-bbOUSpIP.js";import"./paginator.esm-DEpk_RMw.js";import"./inputnumber.esm-ixG6T3Oj.js";import"./overlayeventbus.esm-sQdJG6dl.js";import"./index.esm-OcPB7vHP.js";import"./checkbox.esm-GWkSzIY0.js";import"./index.esm-bPkhvm65.js";import"./axios.config-HGXv1ygo.js";const ve={class:"card"},_e={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},we={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},be={class:"mb-3"},$e={class:"w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0"},Se={class:"col-12 md:col-12 flex flex-row"},Ve={class:"col-12 md:col-3"},Le=a("span",{class:"text-red-500"}," *",-1),Ce={class:"col-12 md:col-3"},Pe=a("span",{class:"text-red-500"}," *",-1),ke={class:"col-12 md:col-3"},Ue=a("span",{class:"text-red-500"}," *",-1),De={class:"col-12 md:col-3"},je=a("span",{class:"text-red-500"}," *",-1),Ne={class:"col-12 md:col-12 flex flex-row"},Re={class:"col-12 md:col-3"},Te=a("span",{class:"text-red-500"}," *",-1),Ae={class:"col-12 md:col-3"},Oe=a("span",{class:"text-red-500"}," *",-1),Fe={class:"col-12 md:col-3"},Ie=a("span",{class:"text-red-500"}," *",-1),qe={class:"col-12 md:col-3"},Be=a("span",{class:"text-red-500"}," *",-1),He={class:"flex flex-wrap gap-2 btn-right"},ot=oe({__name:"ListHouse",setup(Ke){const{t:n}=se(),w=ie(),{query:m}=re(),f=ne(),D=de(),{form:s,getAll:h,state:g,setStateFilter:l,remove:B,updateStatus:H}=fe(),{getOne:K,realestateType:b}=he(),{getAll:M,state:$,setStateFilter:z}=ge(),{getAll:j,state:y,setStateFilter:S}=ye(),E=q([{id:"all",name:"ທັງໝົດ"},{id:"sale",name:"ຂາຍ"},{id:"rent",name:"ເຊົ່າ"}]),W=q([{id:"all",name:"ທັງໝົດ"},{id:"air",name:"ເເອ"},{id:"fan",name:"ພັດລົມ"},{id:"no",name:"ບໍ່ມີ"}]),Q=e=>{switch(e){case"open":return"success";case"close":return"danger";case"rent":return"warning";case"buy":return"danger";default:return"info"}};async function N(){Object.keys(m).length!==0&&(l.page=m.page?Number(m.page):1,l.limit=m.limit?Number(m.limit):10,w.push({query:{page:l.page,limit:l.limit}})),await O()}ce(async()=>{await N()});const X=async e=>{w.push({name:"owner.edit.house",params:{id:e}})},G=async e=>{await B(e),g.error?await le():await N()};async function J(e){l.page=e.page+1,l.limit=e.rows;const{page:i,limit:o}=l;w.push({name:"owner.house",query:{page:i,limit:o}}),await h()}const Y=V(()=>{let e=0;return l.page&&l.limit&&(e=(l.page-1)*l.limit),e}),u=async()=>{l.filter&&(l.filter.real_estate_type_id=s.real_estate_type_id==="all"?"":s.real_estate_type_id,l.filter.service_model=s.service_model==="all"?"":s.service_model,l.filter.room_type=s.room_type==="all"?"":s.room_type,l.filter.district_id=s.district_id==="all"?"":s.district_id),await h()};async function P(e){var o,v,I;const i=e.target.name;e.target.value===""&&(i==="village"&&((o=l.filter)==null?void 0:o.village)!==void 0&&(l.filter.village=""),i==="wide"&&((v=l.filter)==null?void 0:v.wide)!==void 0&&(l.filter.wide=""),i==="long"&&((I=l.filter)==null?void 0:I.long)!==void 0&&(l.filter.long=""),await h())}const R=V({get:()=>l.filter.village||"",set:e=>{l.filter&&(l.filter.village=e)}}),T=V({get:()=>l.filter.wide||"",set:e=>{l.filter&&(l.filter.wide=e)}}),A=V({get:()=>l.filter.long||"",set:e=>{l.filter&&(l.filter.long=e)}}),O=async()=>{await h(),await K(),b.props.unshift({id:"all",name:"ທັງໝົດ"}),s.room_type="all",s.service_model="all",z.limit=1e3,await M(),$.data.props.unshift({id:"all",name:"ທັງໝົດ"}),s.real_estate_type_id=b.props.length>0?b.props[0].id:void 0,s.province_id=$.data.props.length>0?$.data.props[0].id:void 0,S.filter&&(S.filter.province_id=s.province_id,await j(),y.data.props.unshift({id:"all",name:"ທັງໝົດ"}),await F())},F=async()=>{s.district_id=y.data.props.length>0?y.data.props[0].id:void 0},Z=async e=>{S.filter&&(S.filter.province_id=e,await j(),y.data.props.unshift({id:"all",name:"ທັງໝົດ"}),await F(),l.filter&&(l.filter.district_id=s.district_id==="all"?"":s.district_id,l.filter.province_id=s.province_id==="all"?"":s.province_id),await h())},x=async e=>{D.require({message:n("confirmDelete.message"),header:n("confirmDelete.header"),rejectLabel:n("confirmDelete.rejectLabel"),acceptLabel:n("confirmDelete.acceptLabel"),rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:async()=>{await G(e),f.add({severity:"success",summary:n("toast.summary.delete"),detail:n("toast.detail.delete"),life:3e3})},reject:()=>{f.add({severity:"error",summary:n("toast.summary.cancel_delete"),detail:n("toast.detail.cancel_delete"),life:3e3})}})},ee=async e=>{await H(e),await O()},te=async e=>{D.require({message:n("confirmUpdateStatus.message"),header:n("confirmUpdateStatus.header"),rejectLabel:n("confirmUpdateStatus.rejectLabel"),acceptLabel:n("confirmUpdateStatus.acceptLabel"),rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:async()=>{await ee(e),f.add({severity:"success",summary:n("toast.summary.success"),detail:n("toast.detail.successfully"),life:3e3})},reject:()=>{f.add({severity:"error",summary:n("toast.summary.cancel_update"),detail:n("toast.detail.cancel_update"),life:3e3})}})},le=()=>{f.add({severity:"error",summary:n("toast.summary.error"),detail:`${g.error}`,life:3e3})},ae=async()=>{w.push({name:"owner.add.house"})};return(e,i)=>(ue(),pe("div",ve,[a("div",_e,[a("span",we,[a("h2",be,c(e.$t("table.title.real_estate")),1)]),a("span",$e,[r(t(C),{icon:"pi pi-plus-circle",rounded:"",severity:"info",onClick:i[0]||(i[0]=o=>ae())})])]),r(t(me),{value:t(g).data.props,onPage:J,paginator:"",first:Y.value,rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:t(g).isLoading,lazy:"",totalRecords:t(g).data.total,rows:t(l).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:`${e.$t("table.pagination.show")} {first} ${e.$t("table.pagination.to")} {last} ${e.$t("table.pagination.from")} {totalRecords} ${e.$t("table.pagination.row")}`},{header:L(()=>[a("div",Se,[a("div",Ve,[a("label",null,[p(c(e.$t("messages.realestate_type"))+" ",1),Le]),r(t(_),{name:"real_estate_type",modelValue:t(s).real_estate_type_id,"onUpdate:modelValue":i[1]||(i[1]=o=>t(s).real_estate_type_id=o),options:t(b).props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:u},null,8,["modelValue","options","placeholder"])]),a("div",Ce,[a("label",null,[p(c(e.$t("messages.service_model"))+" ",1),Pe]),r(t(_),{modelValue:t(s).service_model,"onUpdate:modelValue":i[2]||(i[2]=o=>t(s).service_model=o),options:E.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full",onChange:u},null,8,["modelValue","options","placeholder"])]),a("div",ke,[a("label",null,[p(c(e.$t("messages.room_type"))+" ",1),Ue]),r(t(_),{modelValue:t(s).room_type,"onUpdate:modelValue":i[3]||(i[3]=o=>t(s).room_type=o),options:W.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:u},null,8,["modelValue","options","placeholder"])]),a("div",De,[a("label",null,[p(c(e.$t("messages.province"))+" ",1),je]),r(t(_),{modelValue:t(s).province_id,"onUpdate:modelValue":i[4]||(i[4]=o=>t(s).province_id=o),options:t($).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:i[5]||(i[5]=o=>Z(t(s).province_id))},null,8,["modelValue","options","placeholder"])])]),a("div",Ne,[a("div",Re,[a("label",null,[p(c(e.$t("messages.district"))+" ",1),Te]),r(t(_),{modelValue:t(s).district_id,"onUpdate:modelValue":i[6]||(i[6]=o=>t(s).district_id=o),options:t(y).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:u},null,8,["modelValue","options","placeholder"])]),a("div",Ae,[a("label",null,[p(c(e.$t("messages.village"))+" ",1),Oe]),r(t(U),{modelValue:R.value,"onUpdate:modelValue":i[7]||(i[7]=o=>R.value=o),placeholder:e.$t("placeholder.inputText"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"village",onKeyup:k(u,["enter"]),onInput:P},null,8,["modelValue","placeholder"])]),a("div",Fe,[a("label",null,[p(c(e.$t("messages.wide"))+" ",1),Ie]),r(t(U),{modelValue:T.value,"onUpdate:modelValue":i[8]||(i[8]=o=>T.value=o),placeholder:e.$t("placeholder.inputText"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"wide",onKeyup:k(u,["enter"]),onInput:P},null,8,["modelValue","placeholder"])]),a("div",qe,[a("label",null,[p(c(e.$t("messages.long"))+" ",1),Be]),r(t(U),{modelValue:A.value,"onUpdate:modelValue":i[9]||(i[9]=o=>A.value=o),placeholder:e.$t("placeholder.inputText"),style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"long",onKeyup:k(u,["enter"]),onInput:P},null,8,["modelValue","placeholder"])])])]),default:L(()=>[r(t(d),{field:"id",header:e.$t("table.header.index")},{body:L(o=>[p(c(o.index+1),1)]),_:1},8,["header"]),r(t(d),{field:"real_esate_number",header:e.$t("table.header.real_esate_number")},null,8,["header"]),r(t(d),{field:"real_estate_type.name",header:e.$t("table.header.realestate_type")},null,8,["header"]),r(t(d),{field:"service_model",header:e.$t("table.header.service_model")},null,8,["header"]),r(t(d),{field:"room_type",header:e.$t("table.header.room_type")},null,8,["header"]),r(t(d),{field:"village",header:e.$t("table.header.village")},null,8,["header"]),r(t(d),{field:"district.name",header:e.$t("table.header.district")},null,8,["header"]),r(t(d),{field:"district.province.name",header:e.$t("table.header.province")},null,8,["header"]),r(t(d),{field:"zip_code",header:e.$t("table.header.zip_code")},null,8,["header"]),r(t(d),{field:"wide",header:e.$t("table.header.wide")},null,8,["header"]),r(t(d),{field:"long",header:e.$t("table.header.long")},null,8,["header"]),r(t(d),{field:"status",header:e.$t("table.header.status")},null,8,["header"]),r(t(d),{headerStyle:"width: 10rem",style:{width:"23%"}},{body:L(({data:o})=>[a("div",He,[r(t(C),{type:"button",label:o.status,rounded:"",severity:Q(o.status),style:{color:"white"},onClick:v=>te(o.id)},null,8,["label","severity","onClick"]),r(t(C),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:v=>X(o.id)},null,8,["onClick"]),r(t(C),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger",onClick:v=>x(o.id)},null,8,["onClick"])])]),_:1})]),_:1},8,["value","first","loading","totalRecords","rows","currentPageReportTemplate"])]))}});export{ot as default};
