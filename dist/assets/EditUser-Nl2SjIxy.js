import{d as A,M as P,u as j,E as D,a as G,C as Q,I as W,c as m,e as s,Q as p,t as c,v as l,f as o,F as S,h as $,V as H,p as J,i as K,o as u,U as X,_ as Y}from"./index-mHCSsdUJ.js";import{_ as V}from"./FormInputText.vue_vue_type_script_setup_true_lang-Pebb4t4t.js";import{a as Z}from"./user.store-0Tt9hgPX.js";import{s as ss}from"./dropdown.esm-4ImAtP73.js";import{s as g}from"./divider.esm-kpMt8y5p.js";import{s as es}from"./checkbox.esm-rk55F0hO.js";import{u as os}from"./index.esm-7e0v1_uz.js";import{e as ts}from"./user.schema-2G6c_uax.js";import"./inputtext.esm-vyCgjGqL.js";import"./axios.config-v11_PQCq.js";import"./index.esm-LK5sjnT0.js";import"./overlayeventbus.esm-5MxUSpaK.js";const r=f=>(J("data-v-48d237d5"),f=f(),K(),f),as={class:"card"},ls={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},is={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},rs=r(()=>s("i",{class:"pi pi-arrow-left",style:{color:"green"}},null,-1)),ns=r(()=>s("br",null,null,-1)),ds={class:"columns is-12 is-multiline"},ms={class:"column is-4 is-mobile-12"},ps={class:"column is-4 is-mobile-12"},cs={class:"column is-4 is-mobile-12"},us=r(()=>s("span",{class:"text-red-500"}," *",-1)),fs={style:{"font-size":"18px","font-weight":"bold"}},hs=r(()=>s("i",{class:"pi pi-users"},null,-1)),_s=r(()=>s("span",{style:{width:"10px"}},null,-1)),gs={class:"column is-12 is-mobile-12",style:{"font-size":"18px","font-weight":"bold"}},bs=r(()=>s("i",{class:"pi pi-check-circle",style:{color:"green"}},null,-1)),ws={class:"checkbox ml-2"},ys=r(()=>s("br",null,null,-1)),vs={style:{"text-align":"right"}},Is=A({__name:"EditUser",setup(f){const{form:t,update:x,getAllRole:k,getAllPermission:T,allPermission:U,allRole:B,state:h,getOne:E,userGetByOne:n}=Z(),b=P(),{t:d}=j(),w=D(),F=G(),y=Q([]),C={name:d("placeholder.inputText"),email:d("placeholder.inputText")},{handleSubmit:M,setFieldValue:v}=os({validationSchema:ts(C)}),N=M(async e=>{t.id=String(w.params.id),t.name=e.name,t.email=e.email,t.password=e.password,t.password_confirmation=e.password_confirmation,await x(),h.error?await z():await L()});W(async()=>{const e=Number(w.params.id);await E(e),await k(),await T(),t.roleId=n.data.props.role?n.data.props.role.id:void 0,v("name",n.data.props.name),v("email",n.data.props.email);const a=n.data.props.permissions;a&&(a.forEach(i=>{y.value.push(i.id)}),t.permissionIds=y.value)});const R=async()=>{F.push({name:"admin.user"})},z=()=>{b.add({severity:"error",summary:d("toast.summary.error"),detail:`${h.error}`,life:3e3})},L=()=>{b.add({severity:"success",summary:d("toast.summary.success"),detail:d("toast.detail.successfully"),life:3e3})};return(e,a)=>(u(),m("div",as,[s("div",ls,[s("span",is,[s("h2",{style:{"font-weight":"bold","font-size":"20px"},class:"arrow-left",onClick:R},[rs,p(" "+c(e.$t("messages.form_register")),1)])])]),l(o(g)),ns,s("form",{onSubmit:a[2]||(a[2]=H(i=>o(N)(),["prevent"])),class:"flex flex-column gap-3 h-full"},[s("div",ds,[s("div",ms,[l(V,{ref:"autoFocusCursor",name:"name",label:e.$t("messages.name"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),s("div",ps,[l(V,{ref:"autoFocusCursor",name:"email",label:e.$t("messages.email"),required:"",placeholder:e.$t("placeholder.inputText"),class:"h-full"},null,8,["label","placeholder"])]),s("div",cs,[s("label",null,[p(c(e.$t("messages.role"))+" ",1),us]),l(o(ss),{style:{"margin-top":"7px"},modelValue:o(t).roleId,"onUpdate:modelValue":a[0]||(a[0]=i=>o(t).roleId=i),options:o(B).data.props,optionLabel:"name",placeholder:e.$t("placeholder.dropdownSelect"),class:"w-full",optionValue:"id",highlightOnSelect:!0},null,8,["modelValue","options","placeholder"])])]),s("p",fs,[hs,_s,p(" "+c(e.$t("messages.permission")),1)]),l(o(g)),(u(!0),m(S,null,$(o(U).data.props,(i,O)=>(u(),m("div",{class:"columns is-12 is-multiline",key:O},[s("div",gs,[bs,p(" "+c(i.name),1)]),(u(!0),m(S,null,$(i.permissions,(I,_)=>(u(),m("div",{class:"column is-4 is-mobile-12",key:_},[s("label",ws,[l(o(es),{modelValue:o(t).permissionIds,"onUpdate:modelValue":a[1]||(a[1]=q=>o(t).permissionIds=q),inputId:"permission_"+_,name:"permission_"+_,value:I.id},null,8,["modelValue","inputId","name","value"]),p(" "+c(I.name),1)])]))),128))]))),128)),l(o(g),{style:{"margin-top":"-10px"}}),ys,s("div",vs,[l(o(X),{type:"submit",label:e.$t("button.edit_data"),loading:o(h).btnLoading},null,8,["label","loading"])])],32)]))}}),Ns=Y(Is,[["__scopeId","data-v-48d237d5"]]);export{Ns as default};
