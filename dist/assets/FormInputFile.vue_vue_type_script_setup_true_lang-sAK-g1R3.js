import{s as y}from"./inputtext.esm-2UNliDqj.js";import{b}from"./index.esm-E0oZroW5.js";import{d as v,H as h,e as r,g as l,Q as V,t as d,h as m,y as B,X as g,n as N,f as _,j as n}from"./index-7buRGwXt.js";const k={class:"flex flex-column gap-2 mb-3"},C=["for"],F={key:0,class:"text-red-500"},R=["id"],$=v({__name:"FormInputFile",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{},isEditing:{type:Boolean},multiple:{type:Boolean}},setup(p){const o=p,{value:s,errorMessage:t}=b(()=>o.name),a=h();o.value&&(s.value=o.value);const u=["country","province","district"],c=(a==null?void 0:a.name)!==null&&(a==null?void 0:a.name)!==void 0&&u.includes(a.name);return(e,i)=>(n(),r("div",k,[l(c)?m("",!0):(n(),r("label",{key:0,for:e.name},[V(d(e.label)+" ",1),e.required?(n(),r("span",F," *")):m("",!0)],8,C)),B(l(y),{modelValue:l(s),"onUpdate:modelValue":i[0]||(i[0]=f=>g(s)?s.value=f:null),id:e.name,class:N({"p-invalid":l(t)}),type:"file","aria-describedby":`text-error-${e.name}`,placeholder:e.placeholder,multiple:e.multiple},null,8,["modelValue","id","class","aria-describedby","placeholder","multiple"]),_("small",{class:"p-error",id:`text-error-${e.name}`},d(l(t)),9,R)]))}});export{$ as _};