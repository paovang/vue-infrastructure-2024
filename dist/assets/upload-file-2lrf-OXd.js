import{c as i,a as e}from"./index.esm-blvxv04Q.js";import{s as u}from"./toast-AS0Hl_8E.js";const p=a=>i({name:e().required(a.name),email:e().required(a.email),password:e().required(a.password),password_confirmation:e().required(a.password_confirmation)}),w=p,l=a=>i({name:e().required(a.name),email:e().required(a.email)}),S=l;async function q({axios:a,file:n,state:t,selectedImage:m,toast:c,t:s}){var o;t.btnLoading=!0;try{let r=new FormData;r.append("file",n);const d=await a.post("http://127.0.0.1:8000/api/customer/upload-file",r,{headers:{"Content-Type":"multipart/form-data"}});m.value=(o=d.data)==null?void 0:o.filename,t.btnLoading=!1}catch(r){await u({toast:c,error:"error",summary:s("toast.summary.error"),detail:r})}}export{q as a,S as e,w as u};
