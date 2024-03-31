import{d as G,M as H,u as Q,H as W,a as J,r as I,o as K,e as p,f as s,Q as u,t as c,y as i,g as a,F as V,i as x,V as X,p as Y,k as Z,j as f,U as ee,_ as se}from"./index-xcrNp63J.js";import{_ as F}from"./FormInputText.vue_vue_type_script_setup_true_lang-yrtctkof.js";import{o as oe}from"./user.store-nsUxHMbZ.js";import{s as ae}from"./dropdown.esm--HgI_NV_.js";import{s as w}from"./divider.esm-fGnZxRMx.js";import{s as te}from"./checkbox.esm-IdfTNiTj.js";import{u as le}from"./vee-validate.esm-EwUG2ApX.js";import{e as ie}from"./user.schema-5B8yG8Jx.js";import{c as re}from"./axios.config-HGXv1ygo.js";import{_ as ne,u as me}from"./upload-file-HM_assbW.js";import{v as de,s as k,i as pe}from"./toast-FY7odgkM.js";import"./inputtext.esm-sieFuAl8.js";import"./overlayeventbus.esm-WQ6PlLcO.js";import"./index.esm-ZKzB-Lal.js";const n=h=>(Y("data-v-8419718e"),h=h(),Z(),h),ue={class:"card"},ce={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},fe={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},he=n(()=>s("i",{class:"pi pi-arrow-left",style:{color:"green"}},null,-1)),_e=n(()=>s("br",null,null,-1)),ge={class:"columns is-12 is-multiline"},ye={class:"column is-2 is-mobile-12"},we={class:"column is-3 is-mobile-12"},be={class:"column is-2 is-mobile-12"},ve=n(()=>s("span",{class:"text-red-500"}," *",-1)),Se={class:"column is-5 is-mobile-12"},$e={style:{"font-size":"18px","font-weight":"bold"}},Ie=n(()=>s("i",{class:"pi pi-users"},null,-1)),Ve=n(()=>s("span",{style:{width:"10px"}},null,-1)),xe={class:"column is-12 is-mobile-12",style:{"font-size":"18px","font-weight":"bold"}},Fe=n(()=>s("i",{class:"pi pi-check-circle",style:{color:"green"}},null,-1)),ke={class:"checkbox ml-2"},Te=n(()=>s("br",null,null,-1)),Be={style:{"text-align":"right"}},Ue=G({__name:"EditUser",setup(h){const{form:t,update:T,getAllRole:B,getAllPermission:U,allPermission:C,allRole:E,state:_,getOne:z,userGetByOne:m}=oe(),d=H(),{t:l}=Q(),b=W(),N=J(),v=I([]),g=I(),M={name:l("placeholder.inputText"),email:l("placeholder.inputText")},{handleSubmit:R,setFieldValue:S}=le({validationSchema:ie(M)}),q=R(async e=>{if(t.id=String(b.params.id),t.name=e.name,t.email=e.email,t.password=e.password,t.password_confirmation=e.password_confirmation,t.profile=g.value,await T(),_.error)await j();else{await A(),g.value="";const o=document.getElementById("id_image");o.value=""}}),L=async e=>{const o=e.target.files[0];if(!await de(o)){await k({toast:d,error:"error",summary:l("toast.summary.error"),detail:l("toast.summary.profile_valid_file_mimes")}),e.target.value="";return}if(!await pe(o)){await k({toast:d,error:"error",summary:l("toast.summary.error"),detail:l("toast.summary.profile_valid_file_size")}),e.target.value="";return}await me({axios:re,file:o,state:_,selectedImage:g,toast:d,t:l})};K(async()=>{const e=Number(b.params.id);await z(e),await B(),await U(),t.roleId=m.data.props.role?m.data.props.role.id:void 0,S("name",m.data.props.name),S("email",m.data.props.email);const o=m.data.props.permissions;o&&(o.forEach(r=>{v.value.push(r.id)}),t.permissionIds=v.value)});const O=async()=>{N.push({name:"owner.user"})},j=()=>{d.add({severity:"error",summary:l("toast.summary.error"),detail:`${_.error}`,life:3e3})},A=()=>{d.add({severity:"success",summary:l("toast.summary.success"),detail:l("toast.detail.successfully"),life:3e3})};return(e,o)=>(f(),p("div",ue,[s("div",ce,[s("span",fe,[s("h2",{style:{"font-weight":"bold","font-size":"20px"},class:"arrow-left",onClick:O},[he,u(" "+c(e.$t("messages.form_register")),1)])])]),i(a(w)),_e,s("form",{onSubmit:o[2]||(o[2]=X(r=>a(q)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[s("div",ge,[s("div",ye,[i(F,{ref:"autoFocusCursor",name:"name",label:e.$t("messages.name"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),s("div",we,[i(F,{ref:"autoFocusCursor",name:"email",label:e.$t("messages.email"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),s("div",be,[s("label",null,[u(c(e.$t("messages.role"))+" ",1),ve]),i(a(ae),{style:{"margin-top":"7px"},modelValue:a(t).roleId,"onUpdate:modelValue":o[0]||(o[0]=r=>a(t).roleId=r),options:a(E).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])]),s("div",Se,[i(ne,{name:"profile",label:e.$t("messages.profile"),required:"",multiple:!0,class:"h-full",onChange:L},null,8,["label"])])]),s("p",$e,[Ie,Ve,u(" "+c(e.$t("messages.permission")),1)]),i(a(w)),(f(!0),p(V,null,x(a(C).data.props,(r,P)=>(f(),p("div",{class:"columns is-12 is-multiline",key:P},[s("div",xe,[Fe,u(" "+c(r.name),1)]),(f(!0),p(V,null,x(r.permissions,($,y)=>(f(),p("div",{class:"column is-4 is-mobile-12",key:y},[s("label",ke,[i(a(te),{modelValue:a(t).permissionIds,"onUpdate:modelValue":o[1]||(o[1]=D=>a(t).permissionIds=D),inputId:"permission_"+y,name:"permission_"+y,value:$.id},null,8,["modelValue","inputId","name","value"]),u(" "+c($.name),1)])]))),128))]))),128)),i(a(w),{style:{"margin-top":"-10px"}}),Te,s("div",Be,[i(a(ee),{type:"submit",label:e.$t("button.edit_data"),loading:a(_).btnLoading},null,8,["label","loading"])])],32)]))}}),He=se(Ue,[["__scopeId","data-v-8419718e"]]);export{He as default};
