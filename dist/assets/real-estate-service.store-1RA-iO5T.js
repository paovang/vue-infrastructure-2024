import{I as D,J as f,A as L}from"./index-OX01bSQz.js";import{i as u,a as n,A as C,b as A}from"./axios.config-3l-LvThz.js";var E=Object.defineProperty,S=Object.getOwnPropertyDescriptor,R=(e,t,s,r)=>{for(var a=r>1?void 0:r?S(t,s):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(a=(r?c(t,s,a):c(a))||a);return r&&a&&E(t,s,a),a},I=(e,t)=>(s,r)=>t(s,r,e);let l=class{constructor(e){this._api=e}async create(e){return{data:(await this._api.axios({method:"post",url:"/admin/service-charge",params:{country_id:e.country_id,real_estate_type_id:e.real_estate_type_id,service_charge:e.service_charge,unit_price:e.unit_price}})).data,message:"ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",status:"success"}}async update(e){return{data:(await this._api.axios({method:"put",url:"/admin/service-charge/"+e.id,params:{country_id:e.country_id,real_estate_type_id:e.real_estate_type_id,service_charge:e.service_charge,unit_price:e.unit_price}})).data,message:"ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",status:"success"}}async delete(e){return{data:(await this._api.axios({method:"delete",url:`/admin/service-charge/${e}`})).data,message:"ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",status:"success"}}async getAll(e){var a,i,c;const t=await this._api.axios({url:"/admin/service-charge",params:{page:e.page,per_page:e.limit,country_id:(a=e.filter)==null?void 0:a.country_id,real_estate_type_id:(i=e.filter)==null?void 0:i.real_estate_type_id,unit_price:(c=e.filter)==null?void 0:c.unit_price}}),{data:s,pagination:r}=t.data.data;return{data:{props:s,total:r.total},status:"success"}}async getById(e){return console.log(e),(await this._api.axios({url:"/admin/realestate/type"})).data}};l=R([u(),I(0,n(C))],l);var B=Object.defineProperty,U=Object.getOwnPropertyDescriptor,F=(e,t,s,r)=>{for(var a=r>1?void 0:r?U(t,s):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(a=(r?c(t,s,a):c(a))||a);return r&&a&&B(t,s,a),a},G=(e,t)=>(s,r)=>t(s,r,e);let h=class{constructor(e){this._api=e}async execute(e){return await this._api.create(e)}};h=F([u(),G(0,n(l))],h);var J=Object.defineProperty,T=Object.getOwnPropertyDescriptor,q=(e,t,s,r)=>{for(var a=r>1?void 0:r?T(t,s):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(a=(r?c(t,s,a):c(a))||a);return r&&a&&J(t,s,a),a},z=(e,t)=>(s,r)=>t(s,r,e);let g=class{constructor(e){this._api=e}async execute(e){try{return await this._api.getAll(e)}catch(t){t.response.status===422&&Object.keys(t.response.data.errors).map(s=>`${s}: ${t.response.data.errors[s].join(", ")}`).join("; ")}}};g=q([u(),z(0,n(l))],g);var H=Object.defineProperty,K=Object.getOwnPropertyDescriptor,M=(e,t,s,r)=>{for(var a=r>1?void 0:r?K(t,s):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(a=(r?c(t,s,a):c(a))||a);return r&&a&&H(t,s,a),a},N=(e,t)=>(s,r)=>t(s,r,e);let m=class{constructor(e){this._api=e}async execute(e){return await this._api.update(e)}};m=M([u(),N(0,n(l))],m);var Q=Object.defineProperty,V=Object.getOwnPropertyDescriptor,W=(e,t,s,r)=>{for(var a=r>1?void 0:r?V(t,s):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(a=(r?c(t,s,a):c(a))||a);return r&&a&&Q(t,s,a),a},X=(e,t)=>(s,r)=>t(s,r,e);let w=class{constructor(e){this._api=e}async execute(e){return await this._api.delete(e)}};w=W([u(),X(0,n(l))],w);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,k=(e,t,s,r)=>{for(var a=r>1?void 0:r?Z(t,s):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(a=(r?c(t,s,a):c(a))||a);return r&&a&&Y(t,s,a),a},ee=(e,t)=>(s,r)=>t(s,r,e);let P=class{constructor(e){this._api=e}async execute(e){return await this._api.getById(e)}};P=k([u(),ee(0,n(l))],P);var te=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,re=(e,t,s,r)=>{for(var a=r>1?void 0:r?ae(t,s):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(a=(r?c(t,s,a):c(a))||a);return r&&a&&te(t,s,a),a},d=(e,t)=>(s,r)=>t(s,r,e);let O=class{constructor(e,t,s,r,a){this._create=e,this._getAll=t,this._update=s,this._delete=r,this._getById=a}async register(e){return await this._create.execute(e)}async update(e){return await this._update.execute(e)}async delete(e){return await this._delete.execute(e)}async getAll(e){return await this._getAll.execute(e)}async getById(e){return await this._getById.execute(e)}};O=re([u(),d(0,n(h)),d(1,n(g)),d(2,n(m)),d(3,n(w)),d(4,n(P))],O);const ce=D("real-estate-service-store",()=>{const e=A.resolve(O),t=f({data:{props:[],total:0},isLoading:!1,btnLoading:!1,error:""}),s=f({props:[]}),r=L([{id:"day",name:"day"},{id:"month",name:"month"},{id:"year",name:"year"}]),a=f({page:1,limit:10,filter:{country_id:"",real_estate_type_id:"",unit_price:""}}),i=f({id:"",country_id:"",real_estate_type_id:"",service_charge:"",unit_price:"day"});async function c(){t.isLoading=!0,t.btnLoading=!0;try{await e.register(i),await v(),t.error="",y()}catch(o){let p="";o.response.status===422&&(p=Object.keys(o.response.data.errors).map(_=>`${_}: ${o.response.data.errors[_].join(", ")}`).join("; ")),t.error=p}t.isLoading=!1,t.btnLoading=!1}async function j(){t.isLoading=!0,t.btnLoading=!0;try{await e.update(i),await v(),t.error="",y()}catch(o){let p="";o.response.status===422&&(p=Object.keys(o.response.data.errors).map(_=>`${_}: ${o.response.data.errors[_].join(", ")}`).join("; ")),t.error=p}t.isLoading=!1,t.btnLoading=!1}async function b(o){t.isLoading=!0;try{await e.delete(o),await v(),t.error="",y()}catch(p){let _="";p.response.status===422&&(_=Object.keys(p.response.data.errors).map($=>`${$}: ${p.response.data.errors[$].join(", ")}`).join("; ")),t.error=_}t.isLoading=!1}async function x(){const o=await e.getById(i.id);o&&o.data&&o.message=="success"&&(s.props=o.data)}async function v(){t.isLoading=!0;const o=await e.getAll({page:a.page,limit:a.limit,filter:a.filter});o&&o.data&&o.status=="success"&&(t.data.props=o.data.props,t.data.total=o.data.total,t.isLoading=!1)}async function y(){i.id="",i.service_charge="",i.unit_price="day"}return{register:c,update:j,remove:b,getOne:x,getAll:v,form:i,setStateFilter:a,state:t,realestateType:s,unitPrices:r}});export{ce as r};
