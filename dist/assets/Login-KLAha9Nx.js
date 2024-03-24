import{d as v,H as S,e as m,g as t,Q as V,t as y,h as b,y as p,X as B,n as w,f as e,j as u,M as I,r as L,V as M,p as N,k as T,U as C,_ as P}from"./index-3LIc0aHG.js";import{_ as R}from"./FormInputText.vue_vue_type_script_setup_true_lang-oszZDzZB.js";import{s as U}from"./inputtext.esm-Mi_A17gw.js";import{b as j,c as q,u as E}from"./index.esm-9plnHIWu.js";import{u as F}from"./auth.store-hZvaoNfr.js";import"./axios.config-gXfSTYZr.js";const z={class:"flex flex-column gap-2 mb-3"},A=["for"],D={key:0,class:"text-red-500"},H=["id"],K=v({__name:"FormInputPass",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{},type:{type:Boolean},isEditing:{type:Boolean}},setup(n){const r=n,{value:o,errorMessage:i}=j(()=>r.name),s=S();r.value&&(o.value=r.value);const f=["country","province","district","real.estate.type"],g=(s==null?void 0:s.name)!==null&&(s==null?void 0:s.name)!==void 0&&f.includes(s.name);return(a,d)=>(u(),m("div",z,[t(g)?b("",!0):(u(),m("label",{key:0,for:a.name},[V(y(a.label)+" ",1),a.required?(u(),m("span",D," *")):b("",!0)],8,A)),p(t(U),{modelValue:t(o),"onUpdate:modelValue":d[0]||(d[0]=h=>B(o)?o.value=h:null),id:a.name,class:w({"p-invalid":t(i)}),type:a.type?"text":"password","aria-describedby":`text-error-${a.name}`,placeholder:a.placeholder},null,8,["modelValue","id","class","type","aria-describedby","placeholder"]),e("small",{class:"p-error",id:`text-error-${a.name}`},y(t(i)),9,H)]))}}),O=q({}),x=n=>(N("data-v-f5887710"),n=n(),T(),n),Q={class:"flex align-items-center justify-content-center min-h-screen lg:grid lg:nested-grid lg:m-0"},W=x(()=>e("div",{class:"col-8 min-h-screen hidden lg:block backgroundImage bg-cover bg-center bg-no-repeat"},null,-1)),X={class:"col-4 flex flex-column align-items-center"},G={class:"col-12 flex justify-content-center flex-column align-items-center"},J={class:"flex flex-column border-1 border-100 border-round-md p-5 shadow-1 lg:border-none lg:shadow-none"},Y=x(()=>e("div",{class:"flex flex-column align-items-center"},[e("img",{src:"https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png",style:{width:"5rem"}}),e("span",{class:"font-bold text-3xl"},"UK LAOS")],-1)),Z={class:"flex flex-column gap-3 mb-3"},ee={class:"p-input-icon-left"},se={style:{"margin-top":"-30px"}},ae={class:"password-input-container"},oe={style:{"margin-top":"20px"}},le=v({__name:"Login",setup(n){const{form:r,state:o,login:i}=F(),s=I(),{handleSubmit:f,handleReset:g}=E({validationSchema:O}),a=f(async l=>{if(!l.email||!l.password)return await h(),!0;await i(l),o.errorMessage?$():(d(),g())}),d=()=>{s.add({severity:"success",summary:"ສຳເລັດເເລ້ວ",detail:"ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ.",life:3e3})},h=()=>{s.add({severity:"error",summary:"ລອງໃໝ່",detail:"ກວດສອບອີເມວ ຫຼື ລະຫັດຜ່ານກ່ອນ.",life:3e3})},$=()=>{s.add({severity:"error",summary:"ເເຈ້ງເຕືອນ",detail:`${o.errorMessage}`,life:3e3})},c=L(!1),k=()=>{c.value=!c.value};return(l,_)=>(u(),m("div",Q,[W,e("div",X,[e("div",G,[e("div",J,[Y,e("form",{onSubmit:_[0]||(_[0]=M(te=>t(a)(),["prevent"])),class:"mt-3"},[e("div",Z,[e("div",null,[e("span",ee,[p(R,{name:"email",label:l.$t("messages.email"),class:"w-18rem",placeholder:l.$t("placeholder.inputText")},null,8,["label","placeholder"])])]),e("div",se,[e("div",ae,[p(K,{type:c.value,name:"password",label:l.$t("messages.password"),class:"w-18rem",required:"",placeholder:l.$t("placeholder.inputText")},null,8,["type","label","placeholder"]),e("span",{class:"toggle-password",onClick:k},[e("i",{class:w(["pi",c.value?"pi-eye-slash":"pi-eye"])},null,2)])])])]),e("div",oe,[p(t(C),{class:"w-full surface-500 border-none",type:"submit",label:"ເຂົ້າສູ່ລະບົບ",loading:t(o).isLoading},null,8,["loading"])])],32)])])])]))}}),pe=P(le,[["__scopeId","data-v-f5887710"]]);export{pe as default};
