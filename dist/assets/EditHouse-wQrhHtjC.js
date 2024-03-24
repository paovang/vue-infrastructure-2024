import{d as W,O as Ve,e as v,f as l,Q as m,t as p,h as X,y as i,g as a,X as Se,n as ke,j as b,u as Ie,M as Ce,a as Fe,H as Te,r as y,o as Ge,E as U,V as Le,p as Ue,k as Be,F as j,i as x,w as Ee,a3 as qe,U as k,_ as ze}from"./index-3LIc0aHG.js";import{_ as g}from"./FormInputText.vue_vue_type_script_setup_true_lang-oszZDzZB.js";import{s as Oe}from"./textarea.esm-kH9ZYGNh.js";import{b as De,u as Ae}from"./index.esm-9plnHIWu.js";import{s as $}from"./dropdown.esm-zMrdp6Du.js";import{s as Me}from"./inputnumber.esm-ZGiwZSaF.js";import{h as Ne,s as q}from"./panel.esm-WAg0pm5b.js";import{s as H}from"./divider.esm-ZRufuv4Z.js";import{r as Pe}from"./real-estate-service.store-ZJikOCww.js";import{h as Re}from"./house.store-jaXBXeat.js";import{p as je}from"./province.store-S2y085nn.js";import{d as xe}from"./district.store-hckxvzZ6.js";import{c as Q}from"./axios.config-gXfSTYZr.js";import"./inputtext.esm-Mi_A17gw.js";import"./overlayeventbus.esm-OO8QkR1m.js";import"./index.esm-aI_aEbn6.js";import"./index.esm-13yN3K1b.js";const He={class:"flex flex-column gap-2 mb-3 w-full"},Qe=["for"],We={key:0,class:"text-red-500"},Xe=["id"],Je=W({__name:"FormEditTextArea",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{}},setup(w){const _=w,{value:f,errorMessage:I}=De(()=>_.name);return Ve(()=>_.value,c=>{f.value=c}),(c,t)=>(b(),v("div",He,[l("label",{for:c.name},[m(p(c.label)+" ",1),c.required?(b(),v("span",We," *")):X("",!0)],8,Qe),i(a(Oe),{"auto-resize":"",rows:"5",modelValue:a(f),"onUpdate:modelValue":t[0]||(t[0]=d=>Se(f)?f.value=d:null),id:c.name,class:ke({"p-invalid":a(I)}),"aria-describedby":`text-error-${c.name}`,placeholder:c.placeholder},null,8,["modelValue","id","class","aria-describedby","placeholder"]),l("small",{class:"p-error",id:`text-error-${c.name}`},p(a(I)),9,Xe)]))}}),u=w=>(Ue("data-v-afa09074"),w=w(),Be(),w),Ke={class:"card"},Ye={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Ze={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},el=u(()=>l("i",{class:"pi pi-arrow-left",style:{color:"green"}},null,-1)),ll=u(()=>l("br",null,null,-1)),tl={class:"columns is-12 is-multiline",style:{"margin-top":"20px"}},al={class:"column is-mobile-12 is-2"},sl=u(()=>l("span",{class:"text-red-500"}," *",-1)),ol={class:"column is-mobile-12 is-2"},il=u(()=>l("span",{class:"text-red-500"}," *",-1)),nl={class:"column is-mobile-12 is-2"},rl=u(()=>l("span",{class:"text-red-500"}," *",-1)),dl={class:"column is-mobile-12 is-2"},cl={class:"column is-mobile-12 is-2"},pl=u(()=>l("span",{class:"text-red-500"}," *",-1)),ul={class:"column is-mobile-12 is-2"},ml=u(()=>l("span",{class:"text-red-500"}," *",-1)),hl={class:"column is-mobile-12 is-2"},gl={class:"column is-mobile-12 is-2"},_l={class:"column is-mobile-12 is-2 set-margin-top"},fl={class:"column is-mobile-12 is-2 set-margin-top"},yl={class:"column is-mobile-12 is-2"},vl={class:"column is-mobile-12 is-2"},bl={class:"column is-mobile-12 is-2 set-margin-top"},wl={class:"column is-mobile-12 is-10"},$l={class:"column is-mobile-12 is-12"},Vl={class:"column is-12"},Sl={class:"column is-3"},kl=u(()=>l("span",{class:"text-red-500"}," *",-1)),Il={class:"column is-3"},Cl=u(()=>l("span",{class:"text-red-500"}," *",-1)),Fl={class:"column is-5"},Tl=["onUpdate:modelValue","placeholder"],Gl={class:"column is-1"},Ll=["onClick"],Ul=u(()=>l("i",{class:"pi pi-times-circle"},null,-1)),Bl=[Ul],El={class:"column is-mobile-12 is-12"},ql={class:"column is-12"},zl={class:"columns is-12 is-multiline"},Ol={class:"column is-mobile-12 is-3"},Dl={class:"card",style:{padding:"0rem !important"}},Al={class:"card-image"},Ml={class:"image is-4by3"},Nl=["src"],Pl={class:"content",style:{display:"flex","justify-content":"center"}},Rl={style:{padding:"10px !important"}},jl={class:"column is-12"},xl={class:"columns is-12 is-multiline"},Hl={class:"card",style:{padding:"0rem !important"}},Ql={class:"card-image"},Wl={class:"image is-4by3"},Xl=["src"],Jl={class:"content",style:{display:"flex","justify-content":"center"}},Kl={style:{padding:"10px !important"}},Yl=u(()=>l("span",{style:{"margin-left":"10px"}},null,-1)),Zl={class:"column is-mobile-12 is-12",style:{"text-align":"right"}},et={class:"column is-mobile-12 is-12 text-right"},lt=u(()=>l("i",{class:"pi pi-save",style:{"margin-right":"8px"}},null,-1)),tt=W({__name:"EditHouse",setup(w){const{t:_}=Ie(),f=Ce(),I=Fe(),c=Te(),{form:t,state:d,update:J,getOne:K,houseGetByOne:B,deleteGallery:Y,updateGallery:Z,addGallery:ee}=Re(),{getOne:le,realestateType:te}=Pe(),{getAll:ae,state:se,setStateFilter:oe}=je(),{getAll:z,state:ie,setStateFilter:C}=xe(),F=y(),E=y(),O=y([{id:"",image:""}]),V=y(),D=y(),A=localStorage.getItem("token"),ne=async()=>{I.push({name:"owner.house"})},re=async()=>{t.prices&&(t.prices.length>2?f.add({severity:"error",summary:_("toast.summary.must_be_length_three"),detail:_("toast.detail.cancel_delete"),life:3e3}):t.prices.push({price:"",unit_price:"",detail:""}))},de=async e=>{t.prices&&t.prices.splice(e,1)},{handleSubmit:ce,setFieldValue:h}=Ae({validationSchema:Ne}),pe=y([{id:"sale",name:"ບໍລິການຂາຍ"},{id:"rent",name:"ບໍລິການເຊົ່າ"}]),ue=y([{id:"air",name:"ເເອ"},{id:"fan",name:"ພັດລົມ"},{id:"no",name:"ບໍ່ມີ"}]),me=y([{id:"sale",name:"ບໍລິການຂາຍ"},{id:"day",name:"ບໍລິການ ເຊົ່າເປັນມື້"},{id:"month",name:"ບໍລິການ ເຊົ່າເປັນເດືອນ"},{id:"year",name:"ບໍລິການ ເຊົ່າເປັນປີ"}]);Ge(async()=>{await S()});const S=async()=>{const e=Number(c.params.id);d.btnLoading=!0,await K(e),await he(),d.btnLoading=!1},he=async()=>{const e=B.data.props;h("village",e.village),h("zipcode",e.zip_code),h("wide",e.wide),h("long",e.long),h("location",e.location),h("name",e.name),h("bed",e.total_bed),h("bath",e.total_bath),h("garage",e.garage),t.room_type=e.room_type,t.service_model=e.service_model,t.remark=e.remark,t.prices=e.price,F.value=e.image,O.value=e.gallery,oe.limit=1e3,await ae(),await le(),t.real_estate_type_id=e.real_estate_type?e.real_estate_type.id:void 0,t.province_id=e.province?e.province.id:void 0,C.filter&&(C.filter.province_id=t.province_id,await z(),await M())},ge=async e=>{C.filter&&(C.filter.province_id=e,await z(),await M())},M=async()=>{t.district_id=B.data.props.district?B.data.props.district.id:void 0},_e=ce(async e=>{t.id=String(c.params.id),t.village=e.village,t.name=e.name,t.zip_code=e.zipcode,t.wide=e.wide,t.long=e.long,t.total_bed=e.bed,t.total_bath=e.bath,t.garage=e.garage,t.name=e.name,t.remark=e.remark,t.location=e.location,t.image=E.value,await J(),d.error?await T():(await L(),await S(),await G())}),fe=()=>{document.getElementById("fileInput").click()},ye=async e=>{var r;const s=(r=e.target.files)==null?void 0:r[0];s&&(await P(s,"image"),F.value=URL.createObjectURL(s))},N=(e,o)=>{t.id=e,D.value=o,D.value==="update"?document.getElementById("updateGalleryInput").click():document.getElementById("addGalleryInput").click()},ve=async e=>{await Y(e),d.error?await T():(await L(),await S(),await G())},be=async e=>{var r;const s=(r=e.target.files)==null?void 0:r[0];s&&(await P(s,"gallery"),t.gallery=V.value,await Z(),d.error?await T():(await L(),await S(),await G()))},we=async e=>{const s=e.target.files;s&&(await $e(s),t.gallery=V.value,await ee(),d.error?await T():(await L(),await S(),await G()))},T=()=>{f.add({severity:"error",summary:_("toast.summary.error"),detail:`${d.error}`,life:3e3})},G=()=>{f.add({severity:"success",summary:_("toast.summary.success"),detail:_("toast.detail.successfully"),life:3e3})},L=async()=>{F.value="",E.value="",V.value="";const e=document.getElementById("fileInput");e.value="";const o=document.getElementById("updateGalleryInput");o.value="";const s=document.getElementById("addGalleryInput");s.value=""},$e=async e=>{d.btnLoading=!0;try{let o=new FormData;for(let n=0;n<e.length;n++)o.append("files[]",e[n]);const r=(await Q.post("http://188.166.183.153:8000/api/upload/multiple/files",o,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${A}`}})).data.filename.map(n=>({image:`${n}`}));V.value=r,d.btnLoading=!1}catch(o){console.error("Upload failed:",o)}},P=async(e,o)=>{var s,r;d.btnLoading=!0;try{let n=new FormData;n.append("file",e);const R=await Q.post("http://188.166.183.153:8000/api/upload_file",n,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${A}`}});o==="image"?E.value=(s=R.data)==null?void 0:s.filename:V.value=(r=R.data)==null?void 0:r.filename,d.btnLoading=!1}catch(n){console.error("Upload failed:",n)}};return(e,o)=>(b(),v("div",Ke,[l("div",Ye,[l("span",Ze,[l("h2",{style:{"font-weight":"bold","font-size":"20px"},class:"arrow-left",onClick:o[0]||(o[0]=s=>ne())},[el,m(" "+p(e.$t("messages.form_register")),1)])])]),ll,i(a(H)),l("form",{onSubmit:o[8]||(o[8]=Le(s=>a(_e)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[l("div",tl,[l("div",al,[l("label",null,[m(p(e.$t("messages.realestate_type"))+" ",1),sl]),i(a($),{name:"real_estate_type",style:{"margin-top":"8px"},modelValue:a(t).real_estate_type_id,"onUpdate:modelValue":o[1]||(o[1]=s=>a(t).real_estate_type_id=s),options:a(te).props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])]),l("div",ol,[l("label",null,[m(p(e.$t("messages.service_model"))+" ",1),il]),i(a($),{style:{"margin-top":"8px"},modelValue:a(t).service_model,"onUpdate:modelValue":o[2]||(o[2]=s=>a(t).service_model=s),options:pe.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),optionValue:"id",highlightOnSelect:!0,class:"w-full"},null,8,["modelValue","options","placeholder"])]),l("div",nl,[l("label",null,[m(p(e.$t("messages.room_type"))+" ",1),rl]),i(a($),{style:{"margin-top":"8px"},modelValue:a(t).room_type,"onUpdate:modelValue":o[3]||(o[3]=s=>a(t).room_type=s),options:ue.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])]),l("div",dl,[i(g,{name:"name",label:e.$t("messages.name"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",cl,[l("label",null,[m(p(e.$t("messages.province"))+" ",1),pl]),i(a($),{style:{"margin-top":"8px"},modelValue:a(t).province_id,"onUpdate:modelValue":o[4]||(o[4]=s=>a(t).province_id=s),options:a(se).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:"",onChange:o[5]||(o[5]=s=>ge(a(t).province_id))},null,8,["modelValue","options","placeholder"])]),l("div",ul,[l("label",null,[m(p(e.$t("messages.district"))+" ",1),ml]),i(a($),{style:{"margin-top":"8px"},modelValue:a(t).district_id,"onUpdate:modelValue":o[6]||(o[6]=s=>a(t).district_id=s),options:a(ie).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,filter:""},null,8,["modelValue","options","placeholder"])]),l("div",hl,[i(g,{name:"village",label:e.$t("messages.village"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full",value:a(t).village},null,8,["label","placeholder","value"])]),l("div",gl,[i(g,{name:"zipcode",label:e.$t("messages.zip_code"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full",value:a(t).zip_code},null,8,["label","placeholder","value"])]),l("div",_l,[i(g,{name:"bed",label:e.$t("messages.total_bed"),placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",fl,[i(g,{name:"bath",label:e.$t("messages.total_bath"),placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),l("div",yl,[i(g,{name:"wide",label:e.$t("messages.wide"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full",value:a(t).wide},null,8,["label","placeholder","value"])]),l("div",vl,[i(g,{name:"long",label:e.$t("messages.long"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full",value:a(t).long},null,8,["label","placeholder","value"])]),l("div",bl,[i(g,{name:"garage",label:e.$t("messages.garage"),required:"",placeholder:e.$t("placeholder.inputTextGarage"),class:"h-full"},null,8,["label","placeholder"])]),l("div",wl,[i(g,{name:"location",label:e.$t("messages.location"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full",value:a(t).location},null,8,["label","placeholder","value"])]),l("div",$l,[i(Je,{name:"remark",label:e.$t("messages.remark"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full",value:a(t).remark},null,8,["label","placeholder","value"])]),l("div",Vl,[i(a(q),{header:e.$t("messages.setting_price_for_rent")},{default:U(()=>[(b(!0),v(j,null,x(a(t).prices,(s,r)=>(b(),v("div",{class:"columns is-12",key:r},[l("div",Sl,[l("label",null,[m(p(e.$t("messages.service_model"))+" ",1),kl]),i(a($),{modelValue:s.unit_price,"onUpdate:modelValue":n=>s.unit_price=n,options:me.value,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0,required:""},null,8,["modelValue","onUpdate:modelValue","options","placeholder"])]),l("div",Il,[l("label",null,[m(p(e.$t("messages.price"))+" ",1),Cl]),i(a(Me),{modelValue:s.price,"onUpdate:modelValue":n=>s.price=n,placeholder:e.$t("placeholder.inputText"),required:"",style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'",width:"100% !important"}},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),l("div",Fl,[l("label",null,p(e.$t("messages.details")),1),Ee(l("input",{name:"detail",type:"text",class:"input","onUpdate:modelValue":n=>s.detail=n,placeholder:e.$t("placeholder.inputText"),style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"}},null,8,Tl),[[qe,s.detail]])]),l("div",Gl,[r>0?(b(),v("a",{key:0,onClick:n=>de(r),class:"button is-danger remove-btn",style:{"margin-top":"22px"}},Bl,8,Ll)):X("",!0)])]))),128)),l("div",El,[l("a",{onClick:re,class:"button is-primary"},p(e.$t("button.add_item")),1)])]),_:1},8,["header"])]),l("div",ql,[i(a(q),{header:e.$t("messages.profile")},{default:U(()=>[l("div",zl,[l("div",Ol,[l("div",Dl,[l("div",Al,[l("figure",Ml,[l("img",{src:F.value,alt:"Placeholder image"},null,8,Nl)])]),l("div",Pl,[l("span",Rl,[i(a(k),{icon:"pi pi-pencil",severity:"warning",rounded:"",onClick:fe,style:{color:"white"}}),l("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:ye},null,32)])])])])])]),_:1},8,["header"])]),l("div",jl,[i(a(q),{header:e.$t("messages.profile_and_gallery")},{default:U(()=>[l("div",xl,[(b(!0),v(j,null,x(O.value,(s,r)=>(b(),v("div",{class:"column is-mobile-12 is-3",key:r},[l("div",Hl,[l("div",Ql,[l("figure",Wl,[l("img",{src:s==null?void 0:s.image,alt:"Placeholder image"},null,8,Xl)])]),l("div",Jl,[l("span",Kl,[i(a(k),{icon:"pi pi-trash",severity:"danger",rounded:"",onClick:n=>ve(s.id)},null,8,["onClick"]),Yl,i(a(k),{icon:"pi pi-pencil",severity:"warning",rounded:"",onClick:n=>N(s.id,"update"),style:{color:"white"}},null,8,["onClick"])]),l("input",{type:"file",id:"updateGalleryInput",style:{display:"none"},onChange:be},null,32),l("input",{type:"file",id:"addGalleryInput",multiple:"",style:{display:"none"},onChange:we},null,32)])])]))),128)),i(a(H)),l("div",Zl,[i(a(k),{icon:"pi pi-plus-circle",onClick:o[7]||(o[7]=s=>N(a(c).params.id,"add"))})])])]),_:1},8,["header"])]),l("div",et,[i(a(k),{style:{"font-family":"'NotoSansLao','Montserrat', 'sans-serif'"},type:"submit",severity:"info",loading:a(d).btnLoading},{default:U(()=>[lt,m(" "+p(e.$t("button.edit_data")),1)]),_:1},8,["loading"])])])],32)]))}}),bt=ze(tt,[["__scopeId","data-v-afa09074"]]);export{bt as default};
