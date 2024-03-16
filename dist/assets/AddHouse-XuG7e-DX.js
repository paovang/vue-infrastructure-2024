import{d as me,u as he,M as fe,N as ge,a as _e,C as m,I as ve,c as h,e as l,Q as p,t as r,v as n,f as a,A as C,V as ye,p as be,i as we,o as f,F as $e,h as Se,w as Ve,a4 as ke,g as Fe,U as M,J as N,_ as Ce}from"./index-rbCP5Ig9.js";import{_ as b}from"./FormInputText.vue_vue_type_script_setup_true_lang-2atBnGl3.js";import{_ as Ie}from"./FormTextArea.vue_vue_type_script_setup_true_lang-fF1TdOwu.js";import{s as w}from"./dropdown.esm-dcyYKwNr.js";import{s as Le}from"./inputnumber.esm-QQMiPssQ.js";import{u as De}from"./index.esm-AQvIhrtO.js";import{h as Te,s as z}from"./panel.esm-VzWZaVV6.js";import{c as x}from"./axios.config-BCWtO51O.js";import{s as E}from"./divider.esm-zFSXg2DL.js";import{r as Ue}from"./real-estate-service.store-g3wN2k_i.js";import{h as Be}from"./house.store-McopF4oE.js";import{p as Ae}from"./province.store-Q6D8FnXh.js";import{d as qe}from"./district.store-bTd8eaYr.js";import"./inputtext.esm-qgCDNmDE.js";import"./textarea.esm--nh7x9fe.js";import"./index.esm-obkyY8oI.js";import"./index.esm-MBvmVdwp.js";import"./index.esm-jkJgQTLm.js";const d=S=>(be("data-v-c5158d62"),S=S(),we(),S),Me={class:"card"},Ne={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},ze={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},xe=d(()=>l("i",{class:"pi pi-arrow-left",style:{color:"green"}},null,-1)),Ee=d(()=>l("br",null,null,-1)),Oe={class:"columns is-12 is-multiline",style:{"margin-top":"20px"}},Ge={class:"column is-mobile-12 is-2"},je=d(()=>l("span",{class:"text-red-500"}," *",-1)),Pe={class:"column is-mobile-12 is-2"},He=d(()=>l("span",{class:"text-red-500"}," *",-1)),Re={class:"column is-mobile-12 is-2"},Je=d(()=>l("span",{class:"text-red-500"}," *",-1)),Qe={class:"column is-mobile-12 is-2"},We={class:"column is-mobile-12 is-2"},Ke=d(()=>l("span",{class:"text-red-500"}," *",-1)),Xe={class:"column is-mobile-12 is-2"},Ye=d(()=>l("span",{class:"text-red-500"}," *",-1)),Ze={class:"column is-mobile-12 is-2"},el={class:"column is-mobile-12 is-2"},ll={class:"column is-mobile-12 is-2"},tl={class:"column is-mobile-12 is-2"},sl={class:"column is-mobile-12 is-4"},al={class:"column is-mobile-12 is-12"},ol={class:"column is-12"},il={class:"column is-3"},nl=d(()=>l("span",{class:"text-red-500"}," *",-1)),rl={class:"column is-3"},dl=d(()=>l("span",{class:"text-red-500"}," *",-1)),cl={class:"column is-5"},pl=["onUpdate:modelValue"],ul={class:"column is-1"},ml=["onClick"],hl=d(()=>l("i",{class:"pi pi-times-circle"},null,-1)),fl=[hl],gl={class:"column is-mobile-12 is-12"},_l={class:"column is-12"},vl={class:"column is-mobile-12 is-12"},yl=d(()=>l("span",{class:"text-red-500"}," *",-1)),bl={key:0},wl={key:1,style:{color:"#029217"}},$l={class:"column is-mobile-12 is-12"},Sl=d(()=>l("span",{class:"text-red-500"}," *",-1)),Vl={key:0},kl={key:1,style:{color:"#029217"}},Fl={class:"column is-mobile-12 is-12 text-right"},Cl=d(()=>l("i",{class:"pi pi-save",style:{"margin-right":"8px"}},null,-1)),Il=me({__name:"AddHouse",setup(S){const{t:i}=he(),$=fe(),O=ge(),G=_e(),{form:o,state:g,register:j}=Be(),{getOne:P,realestateType:I}=Ue(),{getAll:H,state:L,setStateFilter:R}=Ae(),{getAll:B,state:D,setStateFilter:V}=qe(),v=m(null),y=m(),J=async()=>{G.push({name:"owner.house"})},Q=()=>{document.getElementById("fileInput").click()},W=async e=>{var u;const t=(u=e.target.files)==null?void 0:u[0];t&&(v.value=i("uploadFile.uploading"),await de(t),v.value=i("uploadFile.upload_success"))},K=()=>{document.getElementById("galleryInput").click()},X=async e=>{const t=e.target.files;t&&(y.value=i("uploadFile.uploading")+t.length,await ce(t),y.value=i("uploadFile.upload_success")+"("+t.length+" "+i("uploadFile.file")+")")},_=m([{price:"",unit_price:"",detail:""}]),Y=async()=>{var e;_.value&&(((e=_.value)==null?void 0:e.length)>2?$.add({severity:"error",summary:i("toast.summary.must_be_length_three"),detail:i("toast.detail.cancel_delete"),life:3e3}):_.value.push({price:"",unit_price:"",detail:""}))},Z=async e=>{_.value&&_.value.splice(e,1)},T=m(!1),ee=async e=>{e==="rent"?T.value=!0:T.value=!1},{handleSubmit:le}=De({validationSchema:Te}),te=m([{id:"sale",name:"ບໍລິການຂາຍ"},{id:"rent",name:"ບໍລິການເຊົ່າ"}]),se=m([{id:"air",name:"ເເອ"},{id:"fan",name:"ພັດລົມ"},{id:"no",name:"ບໍ່ມີ"}]),ae=m([{id:"sale",name:"ບໍລິການຂາຍ"},{id:"day",name:"ບໍລິການ ເຊົ່າເປັນມື້"},{id:"month",name:"ບໍລິການ ເຊົ່າເປັນເດືອນ"},{id:"year",name:"ບໍລິການ ເຊົ່າເປັນປີ"}]),A=localStorage.getItem("token"),k=m(),F=m();ve(async()=>{await oe()});const oe=async()=>{o.room_type="air",o.service_model="sale",R.limit=1e3,await H(),await P(),o.real_estate_type_id=I.props.length>0?I.props[0].id:void 0,o.province_id=L.data.props.length>0?L.data.props[0].id:void 0,V.filter&&(V.filter.province_id=o.province_id,await B(),await q())},ie=async e=>{V.filter&&(V.filter.province_id=e,await B(),await q())},q=async()=>{o.district_id=D.data.props.length>0?D.data.props[0].id:void 0},ne=le(async e=>{o.district_id?F.value?k.value?(o.village=e.village,o.zip_code=e.zipcode,o.wide=e.wide,o.long=e.long,o.name=e.name,o.remark=e.remark,o.location=e.location,o.prices=_.value,o.image=F.value,o.gallery=k.value,await j(),g.error?await pe():await ue()):await U(i("placeholder.dropdownSelect")+" "+i("messages.gallery")):await U(i("placeholder.dropdownSelect")+" "+i("messages.image")):await U(i("placeholder.dropdownSelect")+" "+i("messages.district"))}),re=async()=>{v.value="",y.value="",F.value="",k.value="";const e=document.getElementById("fileInput");e.value="";const s=document.getElementById("galleryInput");s.value=""},de=async e=>{var s;g.btnLoading=!0;try{let t=new FormData;t.append("file",e);const u=await x.post("http://159.223.42.254/api/upload_file",t,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${A}`}});F.value=(s=u.data)==null?void 0:s.filename,g.btnLoading=!1}catch(t){console.error("Upload failed:",t)}},ce=async e=>{g.btnLoading=!0;try{let s=new FormData;for(let c=0;c<e.length;c++)s.append("files[]",e[c]);const u=(await x.post("http://159.223.42.254/api/upload/multiple/files",s,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${A}`}})).data.filename.map(c=>({image:`${c}`}));k.value=u,g.btnLoading=!1}catch(s){console.error("Upload failed:",s)}},U=e=>{$.add({severity:"error",summary:i("toast.summary.error"),detail:e,life:3e3})},pe=()=>{$.add({severity:"error",summary:i("toast.summary.error"),detail:`${g.error}`,life:3e3})},ue=async()=>{O.require({message:i("confirmDuplicate.message"),header:i("confirmDuplicate.header"),rejectLabel:i("confirmDuplicate.rejectLabel"),acceptLabel:i("confirmDuplicate.acceptLabel"),rejectClass:"p-button-danger",acceptClass:"p-button-info",accept:async()=>{await re(),$.add({severity:"success",summary:i("toast.summary.duplicate"),detail:i("toast.detail.success_duplicate"),life:3e3})},reject:async()=>{window.location.reload(),$.add({severity:"error",summary:i("toast.summary.not_duplicate"),detail:i("toast.detail.cancel_duplicate"),life:3e3})}})};return(e,s)=>(f(),h("div",Me,[l("div",Ne,[l("span",ze,[l("h2",{style:{"font-weight":"bold","font-size":"20px"},class:"arrow-left",onClick:s[0]||(s[0]=t=>J())},[xe,p(" "+r(e.$t("messages.form_register")),1)])])]),Ee,n(a(E)),l("form",{onSubmit:s[8]||(s[8]=ye(t=>a(ne)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[l("div",Oe,[l("div",Ge,[l("label",null,[p(r(e.$t("messages.realestate_type"))+" ",1),je]),n(a(w),{name:"real_estate_type",style:{"margin-top":"8px"},modelValue:a(o).real_estate_type_id,"onUpdate:modelValue":s[1]||(s[1]=t=>a(o).real_estate_type_id=t),options:a(I).props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])]),l("div",Pe,[l("label",null,[p(r(e.$t("messages.service_model"))+" ",1),He]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).service_model,"onUpdate:modelValue":s[2]||(s[2]=t=>a(o).service_model=t),options:te.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full",onChange:s[3]||(s[3]=t=>ee(a(o).service_model))},null,8,["modelValue","options","placeholder"])]),l("div",Re,[l("label",null,[p(r(e.$t("messages.room_type"))+" ",1),Je]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).room_type,"onUpdate:modelValue":s[4]||(s[4]=t=>a(o).room_type=t),options:se.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])]),l("div",Qe,[n(b,{name:"name",label:e.$t("messages.name"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",We,[l("label",null,[p(r(e.$t("messages.province"))+" ",1),Ke]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).province_id,"onUpdate:modelValue":s[5]||(s[5]=t=>a(o).province_id=t),options:a(L).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:s[6]||(s[6]=t=>ie(a(o).province_id))},null,8,["modelValue","options","placeholder"])]),l("div",Xe,[l("label",null,[p(r(e.$t("messages.district"))+" ",1),Ye]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).district_id,"onUpdate:modelValue":s[7]||(s[7]=t=>a(o).district_id=t),options:a(D).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:""},null,8,["modelValue","options","placeholder"])]),l("div",Ze,[n(b,{name:"village",label:e.$t("messages.village"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",el,[n(b,{name:"zipcode",label:e.$t("messages.zip_code"),placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",ll,[n(b,{name:"wide",label:e.$t("messages.wide"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",tl,[n(b,{name:"long",label:e.$t("messages.long"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",sl,[n(b,{name:"location",label:e.$t("messages.location"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",al,[n(Ie,{name:"remark",label:e.$t("messages.details"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",ol,[n(a(z),{header:e.$t("messages.setting_price_for_rent")},{default:C(()=>[(f(!0),h($e,null,Se(_.value,(t,u)=>(f(),h("div",{class:"columns is-12",key:u},[l("div",il,[l("label",null,[p(r(e.$t("messages.service_model"))+" ",1),nl]),n(a(w),{modelValue:t.unit_price,"onUpdate:modelValue":c=>t.unit_price=c,options:ae.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,required:""},null,8,["modelValue","onUpdate:modelValue","options","placeholder"])]),l("div",rl,[l("label",null,[p(r(e.$t("messages.price"))+" ",1),dl]),n(a(Le),{modelValue:t.price,"onUpdate:modelValue":c=>t.price=c,placeholder:"ກະລຸນາປ້ອນກ່ອນ...",required:"",style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'",width:"100% !important"}},null,8,["modelValue","onUpdate:modelValue"])]),l("div",cl,[l("label",null,r(e.$t("messages.details")),1),Ve(l("input",{name:"detail",type:"text",class:"input","onUpdate:modelValue":c=>t.detail=c,placeholder:"ກະລຸນາປ້ອນກ່ອນ...",style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"}},null,8,pl),[[ke,t.detail]])]),l("div",ul,[u>0?(f(),h("a",{key:0,onClick:c=>Z(u),class:"button is-danger remove-btn",style:{"margin-top":"22px"}},fl,8,ml)):Fe("",!0)])]))),128)),l("div",gl,[n(a(M),{onClick:Y,class:"button is-primary",style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"},disabled:!T.value},{default:C(()=>[p(r(e.$t("button.add_item")),1)]),_:1},8,["disabled"])])]),_:1},8,["header"])]),l("div",_l,[n(a(z),{header:e.$t("messages.profile_and_gallery")},{default:C(()=>[l("div",vl,[l("label",null,[p(r(e.$t("messages.profile"))+" ",1),yl]),l("label",{class:"upload-box",onClick:Q,style:N({border:v.value?"1px dashed #029217":"1px dashed red"})},[v.value?(f(),h("div",wl,r(v.value),1)):(f(),h("div",bl,r(e.$t("placeholder.inputFile")),1))],4),l("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:W},null,32)]),n(a(E)),l("div",$l,[l("label",null,[p(r(e.$t("messages.gallery"))+" ",1),Sl]),l("label",{class:"upload-box",onClick:K,style:N({border:y.value?"1px dashed #029217":"1px dashed red"})},[y.value?(f(),h("div",kl,r(y.value),1)):(f(),h("div",Vl,r(e.$t("placeholder.inputFile")),1))],4),l("input",{type:"file",id:"galleryInput",multiple:"",style:{display:"none"},onChange:X},null,32)])]),_:1},8,["header"])]),l("div",Fl,[n(a(M),{style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"},type:"submit",severity:"info",loading:a(g).btnLoading},{default:C(()=>[Cl,p(" "+r(e.$t("button.save_data")),1)]),_:1},8,["loading"])])])],32)]))}}),Jl=Ce(Il,[["__scopeId","data-v-c5158d62"]]);export{Jl as default};
