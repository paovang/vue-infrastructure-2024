import{G as e,ao as t}from"./index-TUdElwS8.js";function l(o){const r=localStorage.getItem("roles")||"",s=r?JSON.parse(r):[];if(s.includes(e.SUPER_ADMIN)||s.includes(e.ADMIN)||s.includes(e.ADMIN_OWNER))return!1;{const n=localStorage.getItem(t)||"";return!(n?JSON.parse(n):[]).includes(o)}}export{l as v};