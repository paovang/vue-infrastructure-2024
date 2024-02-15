import{d as Y,a as Z,C as ee,L as te,M as le,A as U,G as ie,N as V,c as ae,b as l,q as r,e,z as b,o as oe,O as C,V as L,P as d,t as se}from"./index-KUI_GB_t.js";import{s as n,a as re}from"./column.esm-APri-95L.js";import{s as P}from"./inputtext.esm-DlClirjd.js";import{s as _}from"./dropdown.esm-3QwLH-LU.js";import{h as ne}from"./house.store-kiqXKikF.js";import{r as de}from"./real-estate-service.store-PRhGehBY.js";import{p as ce}from"./province.store-3bhrxdIL.js";import{d as pe}from"./district.store-G9pIGcip.js";import"./index.esm-v5PRxPgp.js";import"./index.esm-yT_IU4zy.js";import"./index.esm-aKYeC3x1.js";import"./axios-ggIcBn7C.js";import"./axios.config-1NnBFu2p.js";const me={class:"card"},ue={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},fe=l("span",{class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},[l("h2",{class:"mb-3"}," ລາຍການ ຂໍ້ມູນທັງໝົດ ")],-1),_e={class:"w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0"},ge={class:"col-12 md:col-12 flex flex-row"},he={class:"col-12 md:col-3"},ve=l("label",null,[d(" ປະເພດ ບໍລິການ "),l("span",{class:"text-red-500"}," *")],-1),ye={class:"col-12 md:col-3"},we=l("label",null,[d(" ຮູບເເບບ ບໍລິການ "),l("span",{class:"text-red-500"}," *")],-1),Ve={class:"col-12 md:col-3"},be=l("label",null,[d(" ປະເພດຫ້ອງ "),l("span",{class:"text-red-500"}," *")],-1),xe={class:"col-12 md:col-3"},Se=l("label",null,[d(" ເເຂວງ "),l("span",{class:"text-red-500"}," *")],-1),Ce={class:"col-12 md:col-12 flex flex-row"},Le={class:"col-12 md:col-3"},Pe=l("label",null,[d(" ເມືອງ "),l("span",{class:"text-red-500"}," *")],-1),ke={class:"col-12 md:col-3"},Ne=l("label",null,[d(" ບ້ານ "),l("span",{class:"text-red-500"}," *")],-1),$e={class:"col-12 md:col-3"},Oe=l("label",null,[d(" ລວງກ້ວາງ "),l("span",{class:"text-red-500"}," *")],-1),Re={class:"col-12 md:col-3"},Ae=l("label",null,[d(" ລວງຍາວ "),l("span",{class:"text-red-500"}," *")],-1),De={class:"flex flex-wrap gap-2 btn-right"},Je=Y({__name:"ListHouse",setup(Ue){const g=Z(),{query:p}=ee(),x=te(),F=le(),{form:i,getAll:m,state:u,setStateFilter:t,remove:T}=ne(),{getOne:j,realestateType:h}=de(),{getAll:q,state:v,setStateFilter:B}=ce(),{getAll:k,state:f,setStateFilter:y}=pe(),M=U([{id:"all",name:"ທັງໝົດ"},{id:"sale",name:"ຂາຍ"},{id:"rent",name:"ເຊົ່າ"}]),z=U([{id:"all",name:"ທັງໝົດ"},{id:"air",name:"ເເອ"},{id:"fan",name:"ພັດລົມ"},{id:"no",name:"ບໍ່ມີ"}]);async function N(){Object.keys(p).length!==0&&(t.page=p.page?Number(p.page):1,t.limit=p.limit?Number(p.limit):10,g.push({query:{page:t.page,limit:t.limit}})),await W()}ie(async()=>{await N()});const H=async s=>{g.push({name:"owner.edit.house",params:{id:s}})},K=async s=>{await T(s),u.error?await Q():await N()};async function I(s){t.page=s.page+1,t.limit=s.rows;const{page:o,limit:a}=t;g.push({name:"owner.house",query:{page:o,limit:a}}),await m()}const E=V(()=>{let s=0;return t.page&&t.limit&&(s=(t.page-1)*t.limit),s}),c=async()=>{t.filter&&(t.filter.real_estate_type_id=i.real_estate_type_id==="all"?"":i.real_estate_type_id,t.filter.service_model=i.service_model==="all"?"":i.service_model,t.filter.room_type=i.room_type==="all"?"":i.room_type,t.filter.district_id=i.district_id==="all"?"":i.district_id),await m()};async function S(s){var a,w,D;const o=s.target.name;s.target.value===""&&(o==="village"&&((a=t.filter)==null?void 0:a.village)!==void 0&&(t.filter.village=""),o==="wide"&&((w=t.filter)==null?void 0:w.wide)!==void 0&&(t.filter.wide=""),o==="long"&&((D=t.filter)==null?void 0:D.long)!==void 0&&(t.filter.long=""),await m())}const $=V({get:()=>t.filter.village||"",set:s=>{t.filter&&(t.filter.village=s)}}),O=V({get:()=>t.filter.wide||"",set:s=>{t.filter&&(t.filter.wide=s)}}),R=V({get:()=>t.filter.long||"",set:s=>{t.filter&&(t.filter.long=s)}}),W=async()=>{await m(),await j(),h.props.unshift({id:"all",name:"ທັງໝົດ"}),i.room_type="all",i.service_model="all",B.limit=1e3,await q(),v.data.props.unshift({id:"all",name:"ທັງໝົດ"}),i.real_estate_type_id=h.props.length>0?h.props[0].id:void 0,i.province_id=v.data.props.length>0?v.data.props[0].id:void 0,y.filter&&(y.filter.province_id=i.province_id,await k(),f.data.props.unshift({id:"all",name:"ທັງໝົດ"}),await A())},A=async()=>{i.district_id=f.data.props.length>0?f.data.props[0].id:void 0},G=async s=>{y.filter&&(y.filter.province_id=s,await k(),f.data.props.unshift({id:"all",name:"ທັງໝົດ"}),await A(),t.filter&&(t.filter.district_id=i.district_id==="all"?"":i.district_id,t.filter.province_id=i.province_id==="all"?"":i.province_id),await m())},J=async s=>{F.require({message:"ທ່ານຕ້ອງການລຶບບັນທຶກນີ້ບໍ?",header:"ຢືນຢັນການລຶບຂໍ້ມູນ",rejectLabel:"ຍົກເລີກ",acceptLabel:"ຕົກລົງ",rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:async()=>{await K(s),x.add({severity:"success",summary:"ການລຶບຂໍ້ມູນສຳເລັດເເລ້ວ.",detail:"ຖືກລຶບອອກເເລ້ວ",life:3e3})},reject:()=>{x.add({severity:"error",summary:"ຍົກເລີກການລຶບຂໍ້ມູນເເລ້ວ.",detail:"ຖືກຍົກເລີກເເລ້ວ",life:3e3})}})},Q=()=>{x.add({severity:"error",summary:"ເກີດຂໍ້ຜິດພາດ.",detail:`${u.error}`,life:3e3})},X=async()=>{g.push({name:"owner.add.house"})};return(s,o)=>(oe(),ae("div",me,[l("div",ue,[fe,l("span",_e,[r(e(C),{icon:"pi pi-plus-circle",rounded:"",severity:"info",onClick:o[0]||(o[0]=a=>X())})])]),r(e(re),{value:e(u).data.props,onPage:I,paginator:"",first:E.value,rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem",loading:e(u).isLoading,lazy:"",totalRecords:e(u).data.total,rows:e(t).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"ສະແດງ {first} ຫາ {last} ຈາກ {totalRecords} ແຖວ"},{header:b(()=>[l("div",ge,[l("div",he,[ve,r(e(_),{name:"real_estate_type",modelValue:e(i).real_estate_type_id,"onUpdate:modelValue":o[1]||(o[1]=a=>e(i).real_estate_type_id=a),options:e(h).props,optionLabel:"name",placeholder:"ກະລຸນາເລືອກກ່ອນ...",class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:c},null,8,["modelValue","options"])]),l("div",ye,[we,r(e(_),{modelValue:e(i).service_model,"onUpdate:modelValue":o[2]||(o[2]=a=>e(i).service_model=a),options:M.value,optionLabel:"name",placeholder:"Select a City",optionValue:"id",highlightOnSelect:!0,class:"w-full",onChange:c},null,8,["modelValue","options"])]),l("div",Ve,[be,r(e(_),{modelValue:e(i).room_type,"onUpdate:modelValue":o[3]||(o[3]=a=>e(i).room_type=a),options:z.value,optionLabel:"name",placeholder:"Select a City",class:"w-full",optionValue:"id",highlightOnSelect:!0,onChange:c},null,8,["modelValue","options"])]),l("div",xe,[Se,r(e(_),{modelValue:e(i).province_id,"onUpdate:modelValue":o[4]||(o[4]=a=>e(i).province_id=a),options:e(v).data.props,optionLabel:"name",placeholder:"ກະລຸນາເລືອກກ່ອນ...",class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:o[5]||(o[5]=a=>G(e(i).province_id))},null,8,["modelValue","options"])])]),l("div",Ce,[l("div",Le,[Pe,r(e(_),{modelValue:e(i).district_id,"onUpdate:modelValue":o[6]||(o[6]=a=>e(i).district_id=a),options:e(f).data.props,optionLabel:"name",placeholder:"Select a City",class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:c},null,8,["modelValue","options"])]),l("div",ke,[Ne,r(e(P),{modelValue:$.value,"onUpdate:modelValue":o[7]||(o[7]=a=>$.value=a),placeholder:"ຄົ້ນຫາ ດ້ວຍເບີໂທລະສັບ...",style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"village",onKeyup:L(c,["enter"]),onInput:S},null,8,["modelValue"])]),l("div",$e,[Oe,r(e(P),{modelValue:O.value,"onUpdate:modelValue":o[8]||(o[8]=a=>O.value=a),placeholder:"ຄົ້ນຫາ ລວງກ້ວາງ...",style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"wide",onKeyup:L(c,["enter"]),onInput:S},null,8,["modelValue"])]),l("div",Re,[Ae,r(e(P),{modelValue:R.value,"onUpdate:modelValue":o[9]||(o[9]=a=>R.value=a),placeholder:"ຄົ້ນຫາ ລວງກ້ວາງ...",style:{"font-family":"NotoSansLao, Montserrat"},class:"w-full",name:"long",onKeyup:L(c,["enter"]),onInput:S},null,8,["modelValue"])])])]),default:b(()=>[r(e(n),{field:"id",header:s.$t("table.header.index")},{body:b(a=>[d(se(a.index+1),1)]),_:1},8,["header"]),r(e(n),{field:"real_estate_type.name",header:"ປະເພດບໍລິການ"}),r(e(n),{field:"service_model",header:"ຮູບເເບບບໍລິການ"}),r(e(n),{field:"room_type",header:"ປະເພດຫ້ອງ"}),r(e(n),{field:"village",header:"ບ້ານ"}),r(e(n),{field:"district.name",header:"ເມືອງ"}),r(e(n),{field:"district.province.name",header:"ເເຂວງ"}),r(e(n),{field:"zip_code",header:"zip code"}),r(e(n),{field:"wide",header:"ລວງກ້ວາງ"}),r(e(n),{field:"long",header:"ລວງຍາວ"}),r(e(n),{headerStyle:"width: 10rem"},{body:b(({data:a})=>[l("div",De,[r(e(C),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:w=>H(a.id)},null,8,["onClick"]),r(e(C),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger",onClick:w=>J(a.id)},null,8,["onClick"])])]),_:1})]),_:1},8,["value","first","loading","totalRecords","rows"])]))}});export{Je as default};
