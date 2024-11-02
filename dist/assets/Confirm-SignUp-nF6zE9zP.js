import{s as x}from"./checkbox.esm-RLbfyQ9t.js";import{s as _}from"./divider.esm-5Wd1d_Pb.js";import{h as z}from"./home.store-FoopU8qw.js";import{d as B,H as M,a as N,u as U,M as q,r as f,o as H,e as L,y as r,g as a,f as o,t as g,p as R,k as j,j as E,Q as A,_ as D}from"./index-7hT8Cx7_.js";import{s as O}from"./scroll-top-GikMqvpz.js";import{s as P}from"./inputtext.esm-Ja8AIr6s.js";import{v as Q,s as h,i as W}from"./toast-FY7odgkM.js";import{_ as G,u as J}from"./upload-file-tqKhhbJT.js";import{a as K}from"./axios.config-EMV3l8KB.js";import{u as X}from"./vee-validate.esm-RRM2BQeV.js";import{_ as Y}from"./FormInputText.vue_vue_type_script_setup_true_lang-3qqNPsH5.js";import"./format.date--bimoUa2.js";const n=u=>(R("data-v-023ff0bb"),u=u(),j(),u),Z={class:"signup-form"},ee={style:{"font-size":"20px","font-weight":"bold"}},se=n(()=>o("br",null,null,-1)),ae=["innerHTML"],oe=n(()=>o("br",null,null,-1)),te=n(()=>o("br",null,null,-1)),re={class:"flex align-items-center"},ie={for:"ingredient1",class:"ml-2"},le=n(()=>o("br",null,null,-1)),ne={class:"column is-12 is-mobile-12",style:{"margin-top":"-10px"}},ue={class:"column is-12 is-mobile-12",style:{"margin-top":"-30px"}},de=n(()=>o("br",null,null,-1)),ce=B({__name:"Confirm-SignUp",setup(u){const{formSignUp:s,register:b,state:d,getAllPolicy:y,policy:w}=z(),{query:p}=M(),S=N(),{t}=U(),l=q(),{handleSubmit:v,handleReset:k}=X({}),T=v(async e=>{s.check_rule===!0&&m.value&&(s.isValidToServer=!1,s.id_no=e.id_no,s.id_image=m.value,await b(),d.error?await $():(await C(),await k(),S.push({name:"sign.up"})))}),$=()=>{l.add({severity:"error",summary:t("toast.summary.error"),detail:`${d.error}`,life:3e3})},C=()=>{l.add({severity:"success",summary:t("toast.summary.success"),detail:t("toast.detail.successfully"),life:3e3})},c=f(),I=async()=>{c.value&&await O(c)};H(async()=>{if(await y(),await I(),s.check_rule=!1,Object.keys(p).length!==0){const e=p;s.name=String(e.name),s.address=String(e.address),s.email=String(e.email),s.phone_number=String(e.phone_number),s.password=String(e.password),s.password_confirmation=String(e.password_confirmation),s.profile=String(e.profile),s.country_id=String(e.country_id)}});const m=f(),F=async e=>{const i=e.target.files[0];if(!await Q(i)){await h({toast:l,error:"error",summary:t("toast.summary.error"),detail:t("toast.summary.profile_valid_file_mimes")}),e.target.value="";return}if(!await W(i)){await h({toast:l,error:"error",summary:t("toast.summary.error"),detail:t("toast.summary.profile_valid_file_size")}),e.target.value="";return}await J({axios:K,file:i,state:d,selectedImage:m,toast:l,t})};return(e,i)=>(E(),L("div",Z,[r(a(P),{hidden:"",ref_key:"autoFocusCursor",ref:c},null,512),o("h2",ee,g(e.$t("messages.sign_up")),1),r(a(_)),se,o("div",null,[o("p",{innerHTML:a(w).data.props.description,style:{"font-size":"18px"}},null,8,ae)]),oe,r(a(_)),te,o("div",re,[r(a(x),{modelValue:a(s).check_rule,"onUpdate:modelValue":i[0]||(i[0]=V=>a(s).check_rule=V),inputId:"ingredient1",name:"rule",binary:""},null,8,["modelValue"]),o("label",ie,g(e.$t("messages.i_gree")),1)]),le,o("div",ne,[r(Y,{name:"id_no",label:e.$t("messages.id_no"),required:"",placeholder:e.$t("placeholder.inputTextIdNo"),class:"h-full",disabled:!a(s).check_rule},null,8,["label","placeholder","disabled"])]),o("div",ue,[r(G,{name:"id_image",label:e.$t("messages.id_image"),required:"",multiple:!0,class:"h-full",onChange:F,disabled:!a(s).check_rule},null,8,["label","disabled"])]),de,r(a(A),{class:"w-full surface-500 border-none",type:"submit",label:e.$t("button.sign_up"),loading:a(d).btnLoading,onClick:a(T),disabled:!a(s).check_rule},null,8,["label","loading","onClick","disabled"])]))}}),Te=D(ce,[["__scopeId","data-v-023ff0bb"]]);export{Te as default};
