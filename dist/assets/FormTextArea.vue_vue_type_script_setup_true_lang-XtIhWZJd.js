import{s as u}from"./textarea.esm-THqP4cFe.js";import{a as c}from"./vee-validate.esm-p0-jNtp_.js";import{d as f,e as t,f as n,L as b,t as d,i as v,j as h,g as s,a2 as V,n as _,l as i}from"./index-T-WJ2zvx.js";const y={class:"flex flex-column gap-2 mb-3 w-full"},g=["for"],B={key:0,class:"text-red-500"},N=["id"],w=f({__name:"FormTextArea",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{}},setup(m){const r=m,{value:a,errorMessage:l}=c(()=>r.name);return r.value&&(a.value=r.value),(e,o)=>(i(),t("div",y,[n("label",{for:e.name},[b(d(e.label)+" ",1),e.required?(i(),t("span",B," *")):v("",!0)],8,g),h(s(u),{"auto-resize":"",rows:"5",modelValue:s(a),"onUpdate:modelValue":o[0]||(o[0]=p=>V(a)?a.value=p:null),id:e.name,class:_({"p-invalid":s(l)}),"aria-describedby":`text-error-${e.name}`,placeholder:e.placeholder},null,8,["modelValue","id","class","aria-describedby","placeholder"]),n("small",{class:"p-error",id:`text-error-${e.name}`},d(s(l)),9,N)]))}});export{w as _};
