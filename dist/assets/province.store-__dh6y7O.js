import{i as _,a as p,A as j,b as y}from"./axios.config-3l-LvThz.js";import{I as b,J as f}from"./index-OX01bSQz.js";var x=Object.defineProperty,L=Object.getOwnPropertyDescriptor,D=(e,r,s,a)=>{for(var t=a>1?void 0:a?L(r,s):r,o=e.length-1,n;o>=0;o--)(n=e[o])&&(t=(a?n(r,s,t):n(t))||t);return a&&t&&x(r,s,t),t},A=(e,r)=>(s,a)=>r(s,a,e);let u=class{constructor(e){this._api=e}async create(e){return{data:(await this._api.axios({method:"post",url:"/admin/province",params:{name:e.name,countries_id:e.country_id}})).data,message:"ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",status:"success"}}async update(e){return{data:(await this._api.axios({method:"put",url:"/admin/province/"+e.id,params:{name:e.name}})).data,message:"ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",status:"success"}}async delete(e){return{data:(await this._api.axios({method:"delete",url:`/admin/province/${e}`})).data,message:"ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",status:"success"}}async getAll(e){var t;const r=await this._api.axios({url:"/admin/province",params:{page:e.page,per_page:e.limit,filter:(t=e.filter)==null?void 0:t.name}}),{data:s,pagination:a}=r.data.data;return{data:{props:s,total:a.total},status:"success"}}async getById(e){console.log(e)}};u=D([_(),A(0,p(j))],u);var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,U=(e,r,s,a)=>{for(var t=a>1?void 0:a?S(r,s):r,o=e.length-1,n;o>=0;o--)(n=e[o])&&(t=(a?n(r,s,t):n(t))||t);return a&&t&&C(r,s,t),t},E=(e,r)=>(s,a)=>r(s,a,e);let m=class{constructor(e){this._api=e}async execute(e){return await this._api.create(e)}};m=U([_(),E(0,p(u))],m);var I=Object.defineProperty,B=Object.getOwnPropertyDescriptor,F=(e,r,s,a)=>{for(var t=a>1?void 0:a?B(r,s):r,o=e.length-1,n;o>=0;o--)(n=e[o])&&(t=(a?n(r,s,t):n(t))||t);return a&&t&&I(r,s,t),t},G=(e,r)=>(s,a)=>r(s,a,e);let g=class{constructor(e){this._api=e}async execute(e){try{return await this._api.getAll(e)}catch(r){r.response.status===422&&Object.keys(r.response.data.errors).map(s=>`${s}: ${r.response.data.errors[s].join(", ")}`).join("; ")}}};g=F([_(),G(0,p(u))],g);var J=Object.defineProperty,R=Object.getOwnPropertyDescriptor,q=(e,r,s,a)=>{for(var t=a>1?void 0:a?R(r,s):r,o=e.length-1,n;o>=0;o--)(n=e[o])&&(t=(a?n(r,s,t):n(t))||t);return a&&t&&J(r,s,t),t},z=(e,r)=>(s,a)=>r(s,a,e);let P=class{constructor(e){this._api=e}async execute(e){return await this._api.update(e)}};P=q([_(),z(0,p(u))],P);var H=Object.defineProperty,K=Object.getOwnPropertyDescriptor,M=(e,r,s,a)=>{for(var t=a>1?void 0:a?K(r,s):r,o=e.length-1,n;o>=0;o--)(n=e[o])&&(t=(a?n(r,s,t):n(t))||t);return a&&t&&H(r,s,t),t},N=(e,r)=>(s,a)=>r(s,a,e);let h=class{constructor(e){this._api=e}async execute(e){return await this._api.delete(e)}};h=M([_(),N(0,p(u))],h);var Q=Object.defineProperty,T=Object.getOwnPropertyDescriptor,V=(e,r,s,a)=>{for(var t=a>1?void 0:a?T(r,s):r,o=e.length-1,n;o>=0;o--)(n=e[o])&&(t=(a?n(r,s,t):n(t))||t);return a&&t&&Q(r,s,t),t},v=(e,r)=>(s,a)=>r(s,a,e);let w=class{constructor(e,r,s,a){this._create=e,this._getAll=r,this._update=s,this._delete=a}async register(e){return await this._create.execute(e)}async update(e){return await this._update.execute(e)}async delete(e){return await this._delete.execute(e)}async getAll(e){return await this._getAll.execute(e)}};w=V([_(),v(0,p(m)),v(1,p(g)),v(2,p(P)),v(3,p(h))],w);const Y=b("province-store",()=>{const e=y.resolve(w),r=f({data:{props:[],total:0},isLoading:!1,btnLoading:!1,error:""}),s=f({page:1,limit:10,filter:{name:""}}),a=f({id:"",name:"",country_id:""});async function t(){r.isLoading=!0,r.btnLoading=!0;try{await e.register(a),await d(),r.error="",a.name=""}catch(i){let c="";i.response.status===422&&(c=Object.keys(i.response.data.errors).map(l=>`${l}: ${i.response.data.errors[l].join(", ")}`).join("; ")),r.error=c}r.isLoading=!1,r.btnLoading=!1}async function o(){r.isLoading=!0,r.btnLoading=!0;try{await e.update(a),await d(),r.error="",a.name=""}catch(i){let c="";i.response.status===422&&(c=Object.keys(i.response.data.errors).map(l=>`${l}: ${i.response.data.errors[l].join(", ")}`).join("; ")),r.error=c}r.isLoading=!1,r.btnLoading=!1}async function n(i){r.isLoading=!0;try{await e.delete(i),await d(),r.error="",a.name=""}catch(c){let l="";c.response.status===422&&(l=Object.keys(c.response.data.errors).map(O=>`${O}: ${c.response.data.errors[O].join(", ")}`).join("; ")),r.error=l}r.isLoading=!1}async function $(){console.log("getOne")}async function d(){r.isLoading=!0;const i=await e.getAll({page:s.page,limit:s.limit,filter:s.filter});i&&i.data&&i.status=="success"&&(r.data.props=i.data.props,r.data.total=i.data.total,r.isLoading=!1)}return{register:t,update:o,remove:n,getOne:$,getAll:d,form:a,setStateFilter:s,state:r}});export{Y as p};
