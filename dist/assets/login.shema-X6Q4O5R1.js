import{s as f}from"./inputtext.esm-EDgTkcJ7.js";import{a as h}from"./vee-validate.esm-g7d8zZ0k.js";import{d as v,H as b,e as r,g as s,O as V,t as d,h as p,y as g,a2 as B,n as N,f as _,j as t}from"./index-yVBRwehP.js";import{c as k}from"./index.esm-LBttzci4.js";const w={class:"flex flex-column gap-2 mb-3"},C=["for"],R={key:0,class:"text-red-500"},$=["id"],j=v({__name:"FormInputPass",props:{name:{},label:{},required:{type:Boolean},placeholder:{},value:{},type:{type:Boolean},isEditing:{type:Boolean}},setup(m){const l=m,{value:o,errorMessage:n}=h(()=>l.name),a=b();l.value&&(o.value=l.value);const c=["country","province","district","real.estate.type"],u=(a==null?void 0:a.name)!==null&&(a==null?void 0:a.name)!==void 0&&c.includes(a.name);return(e,i)=>(t(),r("div",w,[s(u)?p("",!0):(t(),r("label",{key:0,for:e.name},[V(d(e.label)+" ",1),e.required?(t(),r("span",R," *")):p("",!0)],8,C)),g(s(f),{modelValue:s(o),"onUpdate:modelValue":i[0]||(i[0]=y=>B(o)?o.value=y:null),id:e.name,class:N({"p-invalid":s(n)}),type:e.type?"text":"password","aria-describedby":`text-error-${e.name}`,placeholder:e.placeholder},null,8,["modelValue","id","class","type","aria-describedby","placeholder"]),_("small",{class:"p-error",id:`text-error-${e.name}`},d(s(n)),9,$)]))}}),x=k({});export{j as _,x as l};