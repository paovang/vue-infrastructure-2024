import{s as f}from"./inputtext.esm-sieFuAl8.js";import{a as y}from"./vee-validate.esm-EwUG2ApX.js";import{d as v,H as h,e as r,g as s,Q as V,t as i,h as m,y as B,X as g,n as N,f as _,j as t}from"./index-xcrNp63J.js";const k={class:"flex flex-column gap-2 mb-3"},C=["for"],R={key:0,class:"text-red-500"},q=["id"],F=v({__name:"FormInputText",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{},isEditing:{type:Boolean},disabled:{type:Boolean}},setup(p){const o=p,{value:l,errorMessage:n}=y(()=>o.name),a=h();o.value&&(l.value=o.value);const c=["country","province","district","real.estate.type"],u=(a==null?void 0:a.name)!==null&&(a==null?void 0:a.name)!==void 0&&c.includes(a.name);return(e,d)=>(t(),r("div",k,[s(u)?m("",!0):(t(),r("label",{key:0,for:e.name},[V(i(e.label)+" ",1),e.required?(t(),r("span",R," *")):m("",!0)],8,C)),B(s(f),{modelValue:s(l),"onUpdate:modelValue":d[0]||(d[0]=b=>g(l)?l.value=b:null),id:e.name,class:N({"p-invalid":s(n)}),type:"text","aria-describedby":`text-error-${e.name}`,placeholder:e.placeholder,disabled:e.disabled},null,8,["modelValue","id","class","aria-describedby","placeholder","disabled"]),_("small",{class:"p-error",id:`text-error-${e.name}`},i(s(n)),9,q)]))}});export{F as _};
