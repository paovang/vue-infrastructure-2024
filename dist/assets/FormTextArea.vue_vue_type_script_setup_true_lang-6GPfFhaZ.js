import{s as u}from"./textarea.esm-sp_8RtEu.js";import{a as c}from"./vee-validate.esm-PjB-hUvr.js";import{d as f,e as t,f as n,O as b,t as d,h,y as v,g as s,a3 as V,n as y,j as i}from"./index-zggZ08vq.js";const _={class:"flex flex-column gap-2 mb-3 w-full"},g=["for"],B={key:0,class:"text-red-500"},N=["id"],w=f({__name:"FormTextArea",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{}},setup(m){const r=m,{value:a,errorMessage:o}=c(()=>r.name);return r.value&&(a.value=r.value),(e,l)=>(i(),t("div",_,[n("label",{for:e.name},[b(d(e.label)+" ",1),e.required?(i(),t("span",B," *")):h("",!0)],8,g),v(s(u),{"auto-resize":"",rows:"5",modelValue:s(a),"onUpdate:modelValue":l[0]||(l[0]=p=>V(a)?a.value=p:null),id:e.name,class:y({"p-invalid":s(o)}),"aria-describedby":`text-error-${e.name}`,placeholder:e.placeholder},null,8,["modelValue","id","class","aria-describedby","placeholder"]),n("small",{class:"p-error",id:`text-error-${e.name}`},d(s(o)),9,N)]))}});export{w as _};
