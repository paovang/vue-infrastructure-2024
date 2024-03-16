import{d as z,M as L,u as N,a as E,I as P,c as d,e,Q as c,t as m,v as l,f as o,F as v,h as $,V as j,p as D,i as O,o as p,U as Q,_ as W}from"./index-mHCSsdUJ.js";import{_ as h}from"./FormInputText.vue_vue_type_script_setup_true_lang-Pebb4t4t.js";import{a as G}from"./user.store-0Tt9hgPX.js";import{s as H}from"./dropdown.esm-4ImAtP73.js";import{s as b}from"./divider.esm-kpMt8y5p.js";import{s as J}from"./checkbox.esm-rk55F0hO.js";import{u as K}from"./index.esm-7e0v1_uz.js";import{u as X}from"./user.schema-2G6c_uax.js";import"./inputtext.esm-vyCgjGqL.js";import"./axios.config-v11_PQCq.js";import"./index.esm-LK5sjnT0.js";import"./overlayeventbus.esm-5MxUSpaK.js";const i=u=>(D("data-v-2968eefe"),u=u(),O(),u),Y={class:"card"},Z={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},ee={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},se=i(()=>e("i",{class:"pi pi-arrow-left",style:{color:"green"}},null,-1)),oe=i(()=>e("br",null,null,-1)),le={class:"columns is-12 is-multiline"},ae={class:"column is-4 is-mobile-12"},te={class:"column is-4 is-mobile-12"},ie={class:"column is-4 is-mobile-12"},re={class:"column is-4 is-mobile-12"},ne={class:"column is-4 is-mobile-12"},de=i(()=>e("span",{class:"text-red-500"}," *",-1)),ce={style:{"font-size":"18px","font-weight":"bold"}},me=i(()=>e("i",{class:"pi pi-users"},null,-1)),pe=i(()=>e("span",{style:{width:"10px"}},null,-1)),ue={class:"column is-12 is-mobile-12",style:{"font-size":"18px","font-weight":"bold"}},he=i(()=>e("i",{class:"pi pi-check-circle",style:{color:"green"}},null,-1)),fe={class:"checkbox ml-2"},_e=i(()=>e("br",null,null,-1)),ge={style:{"text-align":"right"}},be=z({__name:"AddUser",setup(u){const{form:a,register:S,getAllRole:I,getAllPermission:x,allPermission:V,allRole:f,state:_}=G(),w=L(),{t}=N(),T=E(),k={name:t("placeholder.inputText"),email:t("placeholder.inputText"),password:t("placeholder.inputText"),password_confirmation:t("placeholder.inputText")},{handleSubmit:F,handleReset:C}=K({validationSchema:X(k)}),U=F(async s=>{a.name=s.name,a.email=s.email,a.password=s.password,a.password_confirmation=s.password_confirmation,await S(),_.error?await q():(await A(),await C())}),B=async()=>{T.push({name:"admin.user"})};P(async()=>{await I(),await x(),a.roleId=f.data.props.length>0?f.data.props[0].id:void 0});const q=()=>{w.add({severity:"error",summary:t("toast.summary.error"),detail:`${_.error}`,life:3e3})},A=()=>{w.add({severity:"success",summary:t("toast.summary.success"),detail:t("toast.detail.successfully"),life:3e3})};return(s,r)=>(p(),d("div",Y,[e("div",Z,[e("span",ee,[e("h2",{style:{"font-weight":"bold","font-size":"20px"},class:"arrow-left",onClick:B},[se,c(" "+m(s.$t("messages.form_register")),1)])])]),l(o(b)),oe,e("form",{onSubmit:r[2]||(r[2]=j(n=>o(U)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[e("div",le,[e("div",ae,[l(h,{ref:"autoFocusCursor",name:"name",label:s.$t("messages.name"),required:"",placeholder:s.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),e("div",te,[l(h,{ref:"autoFocusCursor",name:"email",label:s.$t("messages.email"),required:"",placeholder:s.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),e("div",ie,[l(h,{ref:"autoFocusCursor",name:"password",label:s.$t("messages.password"),required:"",placeholder:s.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),e("div",re,[l(h,{ref:"autoFocusCursor",name:"password_confirmation",label:s.$t("messages.confirm_password"),required:"",placeholder:s.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),e("div",ne,[e("label",null,[c(m(s.$t("messages.role"))+" ",1),de]),l(o(H),{style:{"margin-top":"7px"},modelValue:o(a).roleId,"onUpdate:modelValue":r[0]||(r[0]=n=>o(a).roleId=n),options:o(f).data.props,optionLabel:"name",placeholder:s.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])])]),e("p",ce,[me,pe,c(" "+m(s.$t("messages.permission")),1)]),l(o(b)),(p(!0),d(v,null,$(o(V).data.props,(n,M)=>(p(),d("div",{class:"columns is-12 is-multiline",key:M},[e("div",ue,[he,c(" "+m(n.name),1)]),(p(!0),d(v,null,$(n.permissions,(y,g)=>(p(),d("div",{class:"column is-4 is-mobile-12",key:g},[e("label",fe,[l(o(J),{modelValue:o(a).permissionIds,"onUpdate:modelValue":r[1]||(r[1]=R=>o(a).permissionIds=R),inputId:"permission_"+g,name:"permission_"+g,value:y.id},null,8,["modelValue","inputId","name","value"]),c(" "+m(y.name),1)])]))),128))]))),128)),l(o(b),{style:{"margin-top":"-10px"}}),_e,e("div",ge,[l(o(Q),{type:"submit",label:s.$t("button.save_data"),loading:o(_).btnLoading},null,8,["label","loading"])])],32)]))}}),Ue=W(be,[["__scopeId","data-v-2968eefe"]]);export{Ue as default};