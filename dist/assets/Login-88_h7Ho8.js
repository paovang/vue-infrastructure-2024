import{d as _,M as h,c as v,e,V as b,v as t,f as a,p as x,i as w,o as y,U as S,_ as k}from"./index-rbCP5Ig9.js";import{_ as $}from"./FormInputText.vue_vue_type_script_setup_true_lang-2atBnGl3.js";import{_ as I}from"./FormInputPassword.vue_vue_type_script_setup_true_lang-GTtsZwb-.js";import{c as L,a as c,u as B}from"./index.esm-AQvIhrtO.js";import{u as M}from"./auth.store-rUOdExUL.js";import"./inputtext.esm-qgCDNmDE.js";import"./axios.config-BCWtO51O.js";const U=L({email:c().required("ກະລຸນາປ້ອນຊື່ກ່ອນ."),password:c().required("ກະລຸນາປ້ອນລະຫັດຜ່ານກ່ອນ.")}),n=s=>(x("data-v-7552de26"),s=s(),w(),s),V={class:"flex align-items-center justify-content-center min-h-screen lg:grid lg:nested-grid lg:m-0"},A=n(()=>e("div",{class:"col-8 min-h-screen hidden lg:block backgroundImage bg-cover bg-center bg-no-repeat"},null,-1)),R={class:"col-4 flex flex-column align-items-center"},j={class:"col-12 flex justify-content-center flex-column align-items-center"},q={class:"flex flex-column border-1 border-100 border-round-md p-5 shadow-1 lg:border-none lg:shadow-none"},N=n(()=>e("div",{class:"flex flex-column align-items-center"},[e("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"5rem"}}),e("span",{class:"font-bold text-3xl"},"UK LAOS")],-1)),T={class:"flex flex-column gap-3 mb-3"},z={class:"p-input-icon-left"},C=n(()=>e("span",{class:"white-space-nowrap font-medium ml-2 text-color"},"Ⓒ2023 Uk Laos | All Rights Reserved",-1)),E=_({__name:"Login",setup(s){const{form:F,state:o,login:d}=M(),l=h(),{handleSubmit:m,handleReset:p}=B({validationSchema:U}),u=m(async i=>{await d(i),o.errorMessage?g():(f(),p())}),f=()=>{l.add({severity:"success",summary:"ສຳເລັດເເລ້ວ",detail:"ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ.",life:3e3})},g=()=>{l.add({severity:"error",summary:"ເເຈ້ງເຕືອນ",detail:`${o.errorMessage}`,life:3e3})};return(i,r)=>(y(),v("div",V,[A,e("div",R,[e("div",j,[e("div",q,[N,e("form",{onSubmit:r[0]||(r[0]=b(K=>a(u)(),["prevent"])),class:"mt-3"},[e("div",T,[e("div",null,[e("span",z,[t($,{name:"email",label:"ອີເມວ",class:"w-18rem",placeholder:"ກະລຸນາປ້ອນອີເມວກ່ອນ..."})])]),e("div",null,[t(I,{style:{width:"100% !important"},name:"password",label:"ລະຫັດຜ່ານ",placeholder:"ກະລຸນາປ້ອນກ່ອນ..."})])]),e("div",null,[t(a(S),{class:"w-full surface-500 border-none",type:"submit",label:"ເຂົ້າສູ່ລະບົບ",loading:a(o).isLoading},null,8,["loading"])])],32)]),C])])]))}}),Q=k(E,[["__scopeId","data-v-7552de26"]]);export{Q as default};
