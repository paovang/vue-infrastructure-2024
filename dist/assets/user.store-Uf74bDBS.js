import{G as b,K as I,L as f}from"./index-aHRk8VVp.js";import{i as _,a as l,A as G,b as E}from"./axios.config-gXfSTYZr.js";var S=Object.defineProperty,B=Object.getOwnPropertyDescriptor,F=(e,s,t,r)=>{for(var a=r>1?void 0:r?B(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&S(s,t,a),a},K=(e,s)=>(t,r)=>s(t,r,e);let p=class{constructor(e){this._api=e}async create(e){return{data:(await this._api.axios({method:"post",url:"/admin/add-user",data:{name:e.name,email:e.email,password:e.password,password_confirmation:e.password_confirmation,roleId:e.roleId,permissionIds:e.permissionIds,profile:e.profile}})).data,message:"ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",status:"success"}}async update(e){return{data:(await this._api.axios({method:"put",url:`/admin/edit-user/${e.id}`,data:{name:e.name,email:e.email,roleId:e.roleId,permissionIds:e.permissionIds,profile:e.profile}})).data,message:"ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",status:"success"}}async delete(e){return{data:(await this._api.axios({method:"delete",url:`/admin/delete-user/${e}`})).data,message:"ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",status:"success"}}async getAll(e){var a,o;const s=await this._api.axios({url:"/admin/list-users",params:{page:e.page,per_page:e.limit,name:(a=e.filter)==null?void 0:a.name,role:(o=e.filter)==null?void 0:o.role}}),{data:t,pagination:r}=s.data.data;return{data:{props:t,total:r.total},status:"success"}}async getOne(e){return(await this._api.axios({method:"get",url:"/admin/list-user/"+e})).data}async getAllRoles(){return(await this._api.axios({method:"get",url:"roles",params:{roles:[b.ADMIN,b.USER]}})).data}async getAllPermissions(){return(await this._api.axios({method:"get",url:"permissions",params:{types:["all","admin"]}})).data}};p=F([_(),K(0,l(G))],p);var M=Object.defineProperty,N=Object.getOwnPropertyDescriptor,T=(e,s,t,r)=>{for(var a=r>1?void 0:r?N(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&M(s,t,a),a},q=(e,s)=>(t,r)=>s(t,r,e);let m=class{constructor(e){this._api=e}async execute(e){return await this._api.create(e)}};m=T([_(),q(0,l(p))],m);var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,J=(e,s,t,r)=>{for(var a=r>1?void 0:r?H(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&z(s,t,a),a},Q=(e,s)=>(t,r)=>s(t,r,e);let v=class{constructor(e){this._api=e}async execute(e){try{return await this._api.getAll(e)}catch(s){s.response.status===422&&Object.keys(s.response.data.errors).map(t=>`${t}: ${s.response.data.errors[t].join(", ")}`).join("; ")}}};v=J([_(),Q(0,l(p))],v);var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,X=(e,s,t,r)=>{for(var a=r>1?void 0:r?W(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&V(s,t,a),a},Y=(e,s)=>(t,r)=>s(t,r,e);let g=class{constructor(e){this._api=e}async execute(e){return await this._api.update(e)}};g=X([_(),Y(0,l(p))],g);var Z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,ee=(e,s,t,r)=>{for(var a=r>1?void 0:r?k(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&Z(s,t,a),a},se=(e,s)=>(t,r)=>s(t,r,e);let w=class{constructor(e){this._api=e}async execute(e){return await this._api.delete(e)}};w=ee([_(),se(0,l(p))],w);var ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,te=(e,s,t,r)=>{for(var a=r>1?void 0:r?re(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&ae(s,t,a),a},oe=(e,s)=>(t,r)=>s(t,r,e);let h=class{constructor(e){this._api=e}async execute(){return await this._api.getAllRoles()}};h=te([_(),oe(0,l(p))],h);var ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,le=(e,s,t,r)=>{for(var a=r>1?void 0:r?ne(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&ie(s,t,a),a},ce=(e,s)=>(t,r)=>s(t,r,e);let P=class{constructor(e){this._api=e}async execute(){return await this._api.getAllPermissions()}};P=le([_(),ce(0,l(p))],P);var pe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,ue=(e,s,t,r)=>{for(var a=r>1?void 0:r?_e(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&pe(s,t,a),a},de=(e,s)=>(t,r)=>s(t,r,e);let O=class{constructor(e){this._api=e}async execute(e){return await this._api.getOne(e)}};O=ue([_(),de(0,l(p))],O);var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,ve=(e,s,t,r)=>{for(var a=r>1?void 0:r?me(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(s,t,a):i(a))||a);return r&&a&&fe(s,t,a),a},d=(e,s)=>(t,r)=>s(t,r,e);let $=class{constructor(e,s,t,r,a,o,i){this._create=e,this._getAll=s,this._update=t,this._delete=r,this._getAllRole=a,this._getOne=o,this._getAllPermission=i}async register(e){return await this._create.execute(e)}async update(e){return await this._update.execute(e)}async delete(e){return await this._delete.execute(e)}async getAll(e){return await this._getAll.execute(e)}async getOne(e){return await this._getOne.execute(e)}async getAllRole(){return await this._getAllRole.execute()}async getAllPermission(){return await this._getAllPermission.execute()}};$=ve([_(),d(0,l(m)),d(1,l(v)),d(2,l(g)),d(3,l(w)),d(4,l(h)),d(5,l(O)),d(6,l(P))],$);const he=I("admin-user-store",()=>{const e=E.resolve($),s=f({data:{props:[],total:0},isLoading:!1,btnLoading:!1,error:""}),t=f({page:1,limit:10,filter:{name:"",role:""}}),r=f({id:"",name:"",email:"",password:"",password_confirmation:""}),a=f({data:{props:""}}),o=f({data:{props:""}}),i=f({data:{props:""}});async function A(){s.isLoading=!0,s.btnLoading=!0;try{await e.register(r),s.error="",await R()}catch(n){let c="";n.response.status===422&&(c=Object.keys(n.response.data.errors).map(u=>`${u}: ${n.response.data.errors[u].join(", ")}`).join("; ")),s.error=c}s.isLoading=!1,s.btnLoading=!1}async function x(){s.isLoading=!0,s.btnLoading=!0;try{await e.update(r),s.error="",r.name=""}catch(n){let c="";n.response.status===422&&(c=Object.keys(n.response.data.errors).map(u=>`${u}: ${n.response.data.errors[u].join(", ")}`).join("; ")),s.error=c}s.isLoading=!1,s.btnLoading=!1}async function D(n){s.isLoading=!0;try{await e.delete(n),await y(),s.error="",r.name=""}catch(c){let u="";c.response.status===422&&(u=Object.keys(c.response.data.errors).map(j=>`${j}: ${c.response.data.errors[j].join(", ")}`).join("; ")),s.error=u}s.isLoading=!1}async function C(n){const c=await e.getOne(n);c&&c.data&&c.message=="success"&&(i.data.props=c.data)}async function y(){s.isLoading=!0;const n=await e.getAll({page:t.page,limit:t.limit,filter:t.filter});n&&n.data&&n.status=="success"&&(s.data.props=n.data.props,s.data.total=n.data.total,s.isLoading=!1)}async function L(){const n=await e.getAllRole();n&&n.data&&n.message=="success"&&(a.data.props=n.data)}async function U(){const n=await e.getAllPermission();n&&n.data&&n.message=="success"&&(o.data.props=n.data)}async function R(){r.name="",r.email="",r.password="",r.password_confirmation="",r.permissionIds=[],r.role=""}return{register:A,update:x,remove:D,getOne:C,getAll:y,form:r,setStateFilter:t,state:s,allRole:a,getAllRole:L,allPermission:o,getAllPermission:U,userGetByOne:i}});export{he as a};
