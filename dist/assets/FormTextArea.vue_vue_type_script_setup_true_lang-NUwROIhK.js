import{s as u}from"./textarea.esm-G2maBaA3.js";import{b as c}from"./index.esm-nl1pd9Ne.js";import{d as f,c as t,e as n,Q as b,t as d,g as v,v as h,f as s,a0 as V,n as _,o as i}from"./index-qFf_kE_4.js";const y={class:"flex flex-column gap-2 mb-3 w-full"},g=["for"],B={key:0,class:"text-red-500"},N=["id"],w=f({__name:"FormTextArea",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{}},setup(m){const r=m,{value:a,errorMessage:o}=c(()=>r.name);return r.value&&(a.value=r.value),(e,l)=>(i(),t("div",y,[n("label",{for:e.name},[b(d(e.label)+" ",1),e.required?(i(),t("span",B," *")):v("",!0)],8,g),h(s(u),{"auto-resize":"",rows:"5",modelValue:s(a),"onUpdate:modelValue":l[0]||(l[0]=p=>V(a)?a.value=p:null),id:e.name,class:_({"p-invalid":s(o)}),"aria-describedby":`text-error-${e.name}`,placeholder:e.placeholder},null,8,["modelValue","id","class","aria-describedby","placeholder"]),n("small",{class:"p-error",id:`text-error-${e.name}`},d(s(o)),9,N)]))}});export{w as _};