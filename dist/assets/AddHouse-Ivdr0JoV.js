import{d as ue,u as he,P as ge,Q as fe,a as _e,C as u,I as ve,c as g,e as l,W as p,t as r,v as n,f as a,A as C,Y as ye,p as be,i as we,o as f,F as $e,h as Se,w as Ve,a5 as ke,g as Fe,X as z,J as M,_ as Ce}from"./index-p18KraAw.js";import{_ as h}from"./FormInputText.vue_vue_type_script_setup_true_lang-5L3SWj1y.js";import{_ as Ie}from"./FormTextArea.vue_vue_type_script_setup_true_lang-xoRp_CoO.js";import{s as w}from"./dropdown.esm-tvG2QJJd.js";import{s as Le}from"./inputnumber.esm-x-00MMpB.js";import{u as Te}from"./index.esm-DIYb9xuP.js";import{h as De,s as N}from"./panel.esm--Rr1iJBw.js";import{c as E}from"./axios.config-gXfSTYZr.js";import{s as G}from"./divider.esm-0de5D9KN.js";import{r as Ue}from"./real-estate-service.store-25c-i_9x.js";import{h as Be}from"./house.store-1_uiHnLg.js";import{p as Ae}from"./province.store-PNM0CRa-.js";import{d as qe}from"./district.store-BLFAJ8tW.js";import"./inputtext.esm-vuoyAHZn.js";import"./textarea.esm-AY1aBz8E.js";import"./overlayeventbus.esm-CwIctdoV.js";import"./index.esm-BnchIRzT.js";import"./index.esm-PjeKsBrF.js";const d=S=>(be("data-v-3ba8e18b"),S=S(),we(),S),ze={class:"card"},Me={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Ne={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},Ee=d(()=>l("i",{class:"pi pi-arrow-left",style:{color:"green"}},null,-1)),Ge=d(()=>l("br",null,null,-1)),Oe={class:"columns is-12 is-multiline",style:{"margin-top":"20px"}},je={class:"column is-mobile-12 is-2"},Pe=d(()=>l("span",{class:"text-red-500"}," *",-1)),xe={class:"column is-mobile-12 is-2"},He=d(()=>l("span",{class:"text-red-500"}," *",-1)),Re={class:"column is-mobile-12 is-2"},We=d(()=>l("span",{class:"text-red-500"}," *",-1)),Je={class:"column is-mobile-12 is-2"},Qe={class:"column is-mobile-12 is-2"},Xe=d(()=>l("span",{class:"text-red-500"}," *",-1)),Ye={class:"column is-mobile-12 is-2"},Ke=d(()=>l("span",{class:"text-red-500"}," *",-1)),Ze={class:"column is-mobile-12 is-2 set-margin-top"},el={class:"column is-mobile-12 is-2 set-margin-top"},ll={class:"column is-mobile-12 is-2 set-margin-top"},sl={class:"column is-mobile-12 is-2 set-margin-top"},tl={class:"column is-mobile-12 is-2 set-margin-top"},al={class:"column is-mobile-12 is-2 set-margin-top"},ol={class:"column is-mobile-12 is-2 set-margin-top"},il={class:"column is-mobile-12 is-10 set-margin-top"},nl={class:"column is-mobile-12 is-12 set-margin-top"},rl={class:"column is-12"},dl={class:"column is-3"},cl=d(()=>l("span",{class:"text-red-500"}," *",-1)),pl={class:"column is-3"},ml=d(()=>l("span",{class:"text-red-500"}," *",-1)),ul={class:"column is-5"},hl=["onUpdate:modelValue"],gl={class:"column is-1"},fl=["onClick"],_l=d(()=>l("i",{class:"pi pi-times-circle"},null,-1)),vl=[_l],yl={class:"column is-mobile-12 is-12"},bl={class:"column is-12"},wl={class:"column is-mobile-12 is-12"},$l=d(()=>l("span",{class:"text-red-500"}," *",-1)),Sl={key:0},Vl={key:1,style:{color:"#029217"}},kl={class:"column is-mobile-12 is-12"},Fl=d(()=>l("span",{class:"text-red-500"}," *",-1)),Cl={key:0},Il={key:1,style:{color:"#029217"}},Ll={class:"column is-mobile-12 is-12 text-right"},Tl=d(()=>l("i",{class:"pi pi-save",style:{"margin-right":"8px"}},null,-1)),Dl=ue({__name:"AddHouse",setup(S){const{t:i}=he(),$=ge(),O=fe(),j=_e(),{form:o,state:_,register:P}=Be(),{getOne:x,realestateType:I}=Ue(),{getAll:H,state:L,setStateFilter:R}=Ae(),{getAll:B,state:T,setStateFilter:V}=qe(),y=u(null),b=u(),W=async()=>{j.push({name:"owner.house"})},J=()=>{document.getElementById("fileInput").click()},Q=async e=>{var m;const s=(m=e.target.files)==null?void 0:m[0];s&&(y.value=i("uploadFile.uploading"),await de(s),y.value=i("uploadFile.upload_success"))},X=()=>{document.getElementById("galleryInput").click()},Y=async e=>{const s=e.target.files;s&&(b.value=i("uploadFile.uploading")+s.length,await ce(s),b.value=i("uploadFile.upload_success")+"("+s.length+" "+i("uploadFile.file")+")")},v=u([{price:"",unit_price:"",detail:""}]),K=async()=>{var e;v.value&&(((e=v.value)==null?void 0:e.length)>2?$.add({severity:"error",summary:i("toast.summary.must_be_length_three"),detail:i("toast.detail.cancel_delete"),life:3e3}):v.value.push({price:"",unit_price:"",detail:""}))},Z=async e=>{v.value&&v.value.splice(e,1)},D=u(!1),ee=async e=>{e==="rent"?D.value=!0:D.value=!1},{handleSubmit:le}=Te({validationSchema:De}),se=u([{id:"sale",name:i("messages.service_sale")},{id:"rent",name:i("messages.service_rent")}]),te=u([{id:"air",name:i("messages.air")},{id:"fan",name:i("messages.fan")},{id:"no",name:i("messages.none")}]),ae=u([{id:"sale",name:"ບໍລິການຂາຍ"},{id:"day",name:"ບໍລິການ ເຊົ່າເປັນມື້"},{id:"month",name:"ບໍລິການ ເຊົ່າເປັນເດືອນ"},{id:"year",name:"ບໍລິການ ເຊົ່າເປັນປີ"}]),A=localStorage.getItem("token"),k=u(),F=u();ve(async()=>{await oe()});const oe=async()=>{o.room_type="air",o.service_model="sale",R.limit=1e3,await H(),await x(),o.real_estate_type_id=I.props.length>0?I.props[0].id:void 0,o.province_id=L.data.props.length>0?L.data.props[0].id:void 0,V.filter&&(V.filter.province_id=o.province_id,await B(),await q())},ie=async e=>{V.filter&&(V.filter.province_id=e,await B(),await q())},q=async()=>{o.district_id=T.data.props.length>0?T.data.props[0].id:void 0},ne=le(async e=>{o.district_id?F.value?k.value?(o.village=e.village,o.zip_code=e.zipcode,o.wide=e.wide,o.long=e.long,o.name=e.name,o.remark=e.remark,o.location=e.location,o.prices=v.value,o.image=F.value,o.gallery=k.value,await P(),_.error?await pe():await me()):await U(i("placeholder.dropdownSelect")+" "+i("messages.gallery")):await U(i("placeholder.dropdownSelect")+" "+i("messages.image")):await U(i("placeholder.dropdownSelect")+" "+i("messages.district"))}),re=async()=>{y.value="",b.value="",F.value="",k.value="";const e=document.getElementById("fileInput");e.value="";const t=document.getElementById("galleryInput");t.value=""},de=async e=>{var t;_.btnLoading=!0;try{let s=new FormData;s.append("file",e);const m=await E.post("http://188.166.183.153:8000/api/upload_file",s,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${A}`}});F.value=(t=m.data)==null?void 0:t.filename,_.btnLoading=!1}catch(s){console.error("Upload failed:",s)}},ce=async e=>{_.btnLoading=!0;try{let t=new FormData;for(let c=0;c<e.length;c++)t.append("files[]",e[c]);const m=(await E.post("http://188.166.183.153:8000/api/upload/multiple/files",t,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${A}`}})).data.filename.map(c=>({image:`${c}`}));k.value=m,_.btnLoading=!1}catch(t){console.error("Upload failed:",t)}},U=e=>{$.add({severity:"error",summary:i("toast.summary.error"),detail:e,life:3e3})},pe=()=>{$.add({severity:"error",summary:i("toast.summary.error"),detail:`${_.error}`,life:3e3})},me=async()=>{O.require({message:i("confirmDuplicate.message"),header:i("confirmDuplicate.header"),rejectLabel:i("confirmDuplicate.rejectLabel"),acceptLabel:i("confirmDuplicate.acceptLabel"),rejectClass:"p-button-danger",acceptClass:"p-button-info",accept:async()=>{await re(),$.add({severity:"success",summary:i("toast.summary.duplicate"),detail:i("toast.detail.success_duplicate"),life:3e3})},reject:async()=>{window.location.reload(),$.add({severity:"error",summary:i("toast.summary.not_duplicate"),detail:i("toast.detail.cancel_duplicate"),life:3e3})}})};return(e,t)=>(f(),g("div",ze,[l("div",Me,[l("span",Ne,[l("h2",{style:{"font-weight":"bold","font-size":"20px"},class:"arrow-left",onClick:t[0]||(t[0]=s=>W())},[Ee,p(" "+r(e.$t("messages.form_register")),1)])])]),Ge,n(a(G)),l("form",{onSubmit:t[8]||(t[8]=ye(s=>a(ne)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[l("div",Oe,[l("div",je,[l("label",null,[p(r(e.$t("messages.realestate_type"))+" ",1),Pe]),n(a(w),{name:"real_estate_type",style:{"margin-top":"8px"},modelValue:a(o).real_estate_type_id,"onUpdate:modelValue":t[1]||(t[1]=s=>a(o).real_estate_type_id=s),options:a(I).props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])]),l("div",xe,[l("label",null,[p(r(e.$t("messages.service_model"))+" ",1),He]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).service_model,"onUpdate:modelValue":t[2]||(t[2]=s=>a(o).service_model=s),options:se.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full",onChange:t[3]||(t[3]=s=>ee(a(o).service_model))},null,8,["modelValue","options","placeholder"])]),l("div",Re,[l("label",null,[p(r(e.$t("messages.room_type"))+" ",1),We]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).room_type,"onUpdate:modelValue":t[4]||(t[4]=s=>a(o).room_type=s),options:te.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])]),l("div",Je,[n(h,{name:"name",label:e.$t("messages.name"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",Qe,[l("label",null,[p(r(e.$t("messages.province"))+" ",1),Xe]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).province_id,"onUpdate:modelValue":t[5]||(t[5]=s=>a(o).province_id=s),options:a(L).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:t[6]||(t[6]=s=>ie(a(o).province_id))},null,8,["modelValue","options","placeholder"])]),l("div",Ye,[l("label",null,[p(r(e.$t("messages.district"))+" ",1),Ke]),n(a(w),{style:{"margin-top":"8px"},modelValue:a(o).district_id,"onUpdate:modelValue":t[7]||(t[7]=s=>a(o).district_id=s),options:a(T).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:""},null,8,["modelValue","options","placeholder"])]),l("div",Ze,[n(h,{name:"village",label:e.$t("messages.village"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",el,[n(h,{name:"zipcode",label:e.$t("messages.zip_code"),placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",ll,[n(h,{name:"bed",label:e.$t("messages.total_bed"),placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",sl,[n(h,{name:"bath",label:e.$t("messages.total_bath"),placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",tl,[n(h,{name:"wide",label:e.$t("messages.wide"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",al,[n(h,{name:"long",label:e.$t("messages.long"),placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",ol,[n(h,{name:"garage",label:e.$t("messages.garage"),required:"",placeholder:e.$t("placeholder.inputTextGarage"),class:"h-full"},null,8,["label","placeholder"])]),l("div",il,[n(h,{name:"location",label:e.$t("messages.location"),required:"",placeholder:e.$t("placeholder.inputTextLocation"),class:"h-full"},null,8,["label","placeholder"])]),l("div",nl,[n(Ie,{name:"remark",label:e.$t("messages.details"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",rl,[n(a(N),{header:e.$t("messages.setting_price_for_rent")},{default:C(()=>[(f(!0),g($e,null,Se(v.value,(s,m)=>(f(),g("div",{class:"columns is-12",key:m},[l("div",dl,[l("label",null,[p(r(e.$t("messages.service_model"))+" ",1),cl]),n(a(w),{modelValue:s.unit_price,"onUpdate:modelValue":c=>s.unit_price=c,options:ae.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,required:""},null,8,["modelValue","onUpdate:modelValue","options","placeholder"])]),l("div",pl,[l("label",null,[p(r(e.$t("messages.price"))+" ",1),ml]),n(a(Le),{modelValue:s.price,"onUpdate:modelValue":c=>s.price=c,placeholder:"ກະລຸນາປ້ອນກ່ອນ...",required:"",style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'",width:"100% !important"}},null,8,["modelValue","onUpdate:modelValue"])]),l("div",ul,[l("label",null,r(e.$t("messages.details")),1),Ve(l("input",{name:"detail",type:"text",class:"input","onUpdate:modelValue":c=>s.detail=c,placeholder:"ກະລຸນາປ້ອນກ່ອນ...",style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"}},null,8,hl),[[ke,s.detail]])]),l("div",gl,[m>0?(f(),g("a",{key:0,onClick:c=>Z(m),class:"button is-danger remove-btn",style:{"margin-top":"22px"}},vl,8,fl)):Fe("",!0)])]))),128)),l("div",yl,[n(a(z),{onClick:K,class:"button is-primary",style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"},disabled:!D.value},{default:C(()=>[p(r(e.$t("button.add_item")),1)]),_:1},8,["disabled"])])]),_:1},8,["header"])]),l("div",bl,[n(a(N),{header:e.$t("messages.profile_and_gallery")},{default:C(()=>[l("div",wl,[l("label",null,[p(r(e.$t("messages.profile"))+" ",1),$l]),l("label",{class:"upload-box",onClick:J,style:M({border:y.value?"1px dashed #029217":"1px dashed red"})},[y.value?(f(),g("div",Vl,r(y.value),1)):(f(),g("div",Sl,r(e.$t("placeholder.inputFile")),1))],4),l("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:Q},null,32)]),n(a(G)),l("div",kl,[l("label",null,[p(r(e.$t("messages.gallery"))+" ",1),Fl]),l("label",{class:"upload-box",onClick:X,style:M({border:b.value?"1px dashed #029217":"1px dashed red"})},[b.value?(f(),g("div",Il,r(b.value),1)):(f(),g("div",Cl,r(e.$t("placeholder.inputFile")),1))],4),l("input",{type:"file",id:"galleryInput",multiple:"",style:{display:"none"},onChange:Y},null,32)])]),_:1},8,["header"])]),l("div",Ll,[n(a(z),{style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"},type:"submit",severity:"info",loading:a(_).btnLoading},{default:C(()=>[Tl,p(" "+r(e.$t("button.save_data")),1)]),_:1},8,["loading"])])])],32)]))}}),Xl=Ce(Dl,[["__scopeId","data-v-3ba8e18b"]]);export{Xl as default};
