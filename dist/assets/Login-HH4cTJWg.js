import{d as b,K as v,r as w,e as y,f as e,Q as x,y as n,n as S,g as i,p as k,k as $,j as I,P as B,_ as L}from"./index-kn-qcOge.js";import{_ as P}from"./FormInputText.vue_vue_type_script_setup_true_lang-xDdNyMSP.js";import{_ as T,l as V}from"./login.shema-G8hZLEaN.js";import{u as j}from"./vee-validate.esm-AA2GrPCe.js";import{u as C}from"./auth.store-YQ1kLK0R.js";import"./inputtext.esm-lR4xbYt9.js";import"./index.esm-K9W09Hpr.js";import"./axios.config-jCy-uYyV.js";const c=o=>(k("data-v-dc6b0358"),o=o(),$(),o),M={class:"flex align-items-center justify-content-center min-h-screen lg:grid lg:nested-grid lg:m-0"},z=c(()=>e("div",{class:"col-8 min-h-screen hidden lg:block backgroundImage bg-cover bg-center bg-no-repeat"},null,-1)),A={class:"col-4 flex flex-column align-items-center"},E={class:"col-12 flex justify-content-center flex-column align-items-center"},K={class:"flex flex-column border-1 border-100 border-round-md p-5 shadow-1 lg:border-none lg:shadow-none"},N=c(()=>e("div",{class:"flex flex-column align-items-center"},[e("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"5rem"}}),e("span",{class:"font-bold text-3xl"},"UK LAOS")],-1)),U={class:"flex flex-column gap-3 mb-3"},q={class:"p-input-icon-left"},F={style:{"margin-top":"-30px"}},O={class:"password-input-container"},Q={style:{"margin-top":"20px"}},R=b({__name:"Login",setup(o){const{form:W,state:t,login:d}=C(),l=v(),{handleSubmit:m,handleReset:p}=j({validationSchema:V}),u=m(async s=>{if(!s.email||!s.password)return await f(),!0;await d(s),t.errorMessage?_():(g(),p())}),g=()=>{l.add({severity:"success",summary:"ສຳເລັດເເລ້ວ",detail:"ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ.",life:3e3})},f=()=>{l.add({severity:"error",summary:"ລອງໃໝ່",detail:"ກວດສອບອີເມວ ຫຼື ລະຫັດຜ່ານກ່ອນ.",life:3e3})},_=()=>{l.add({severity:"error",summary:"ເເຈ້ງເຕືອນ",detail:`${t.errorMessage}`,life:3e3})},a=w(!1),h=()=>{a.value=!a.value};return(s,r)=>(I(),y("div",M,[z,e("div",A,[e("div",E,[e("div",K,[N,e("form",{onSubmit:r[0]||(r[0]=x(D=>i(u)(),["prevent"])),class:"mt-3"},[e("div",U,[e("div",null,[e("span",q,[n(P,{name:"email",label:s.$t("messages.email"),class:"w-18rem",placeholder:s.$t("placeholder.inputText")},null,8,["label","placeholder"])])]),e("div",F,[e("div",O,[n(T,{type:a.value,name:"password",label:s.$t("messages.password"),class:"w-18rem",required:"",placeholder:s.$t("placeholder.inputText")},null,8,["type","label","placeholder"]),e("span",{class:"toggle-password",onClick:h},[e("i",{class:S(["pi",a.value?"pi-eye-slash":"pi-eye"])},null,2)])])])]),e("div",Q,[n(i(B),{class:"w-full surface-500 border-none",type:"submit",label:"ເຂົ້າສູ່ລະບົບ",loading:i(t).isLoading},null,8,["loading"])])],32)])])])]))}}),oe=L(R,[["__scopeId","data-v-dc6b0358"]]);export{oe as default};
