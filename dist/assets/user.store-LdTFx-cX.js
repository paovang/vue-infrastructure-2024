import{G as v,K as M,L as f}from"./index-bgL8X-Vz.js";import{i as _,a as l,A as W,b as B}from"./axios.config-gXfSTYZr.js";var F=Object.defineProperty,K=Object.getOwnPropertyDescriptor,T=(e,s,t,a)=>{for(var r=a>1?void 0:a?K(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&F(s,t,r),r},q=(e,s)=>(t,a)=>s(t,a,e);let u=class{constructor(e){this._api=e}async create(e){return{data:(await this._api.axios({method:"post",url:"/admin/add-user",data:{name:e.name,email:e.email,password:e.password,password_confirmation:e.password_confirmation,roleId:e.roleId,permissionIds:e.permissionIds,profile:e.profile}})).data,message:"ເພີ່ມຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",status:"success"}}async update(e){return{data:(await this._api.axios({method:"put",url:`/admin/edit-user/${e.id}`,data:{name:e.name,email:e.email,roleId:e.roleId,permissionIds:e.permissionIds,profile:e.profile}})).data,message:"ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",status:"success"}}async delete(e){return{data:(await this._api.axios({method:"delete",url:`/admin/delete-user/${e}`})).data,message:"ລຶບຂໍ້ມູນ ສຳເລັດເເລ້ວ.",status:"success"}}async getAll(e){var r,o;const s=await this._api.axios({url:"/admin/list-users",params:{page:e.page,per_page:e.limit,name:(r=e.filter)==null?void 0:r.name,role:(o=e.filter)==null?void 0:o.role}}),{data:t,pagination:a}=s.data.data;return{data:{props:t,total:a.total},status:"success"}}async getOne(e){return(await this._api.axios({method:"get",url:"/admin/list-user/"+e})).data}async getUserProfile(){const e=localStorage.getItem("roles");let s="";return e&&e.includes(v.ADMIN_OWNER)||e&&e.includes(v.USER_OWNER)?s="/owner/get-user-owner-profile":s="/admin/get-user-profile",(await this._api.axios({method:"get",url:s})).data}async getAllRoles(){return(await this._api.axios({method:"get",url:"roles",params:{roles:[v.ADMIN,v.USER]}})).data}async getAllPermissions(){return(await this._api.axios({method:"get",url:"permissions",params:{types:["all","admin"]}})).data}async updateProfile(e){return{data:(await this._api.axios({method:"put",url:`/admin/update-user-profile/${e.id}`,data:{name:e.name,email:e.email,profile:e.profile}})).data,message:"ອັບເດດ ຂໍ້ມູນສຳເລັດເເລ້ວ",status:"success"}}};u=T([_(),q(0,l(W))],u);var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,J=(e,s,t,a)=>{for(var r=a>1?void 0:a?H(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&z(s,t,r),r},Q=(e,s)=>(t,a)=>s(t,a,e);let g=class{constructor(e){this._api=e}async execute(e){return await this._api.create(e)}};g=J([_(),Q(0,l(u))],g);var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(e,s,t,a)=>{for(var r=a>1?void 0:a?X(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&V(s,t,r),r},Z=(e,s)=>(t,a)=>s(t,a,e);let h=class{constructor(e){this._api=e}async execute(e){try{return await this._api.getAll(e)}catch(s){s.response.status===422&&Object.keys(s.response.data.errors).map(t=>`${t}: ${s.response.data.errors[t].join(", ")}`).join("; ")}}};h=Y([_(),Z(0,l(u))],h);var k=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,se=(e,s,t,a)=>{for(var r=a>1?void 0:a?ee(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&k(s,t,r),r},re=(e,s)=>(t,a)=>s(t,a,e);let w=class{constructor(e){this._api=e}async execute(e){return await this._api.update(e)}};w=se([_(),re(0,l(u))],w);var ae=Object.defineProperty,te=Object.getOwnPropertyDescriptor,oe=(e,s,t,a)=>{for(var r=a>1?void 0:a?te(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&ae(s,t,r),r},ie=(e,s)=>(t,a)=>s(t,a,e);let O=class{constructor(e){this._api=e}async execute(e){return await this._api.delete(e)}};O=oe([_(),ie(0,l(u))],O);var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,ce=(e,s,t,a)=>{for(var r=a>1?void 0:a?le(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&ne(s,t,r),r},pe=(e,s)=>(t,a)=>s(t,a,e);let $=class{constructor(e){this._api=e}async execute(){return await this._api.getAllRoles()}};$=ce([_(),pe(0,l(u))],$);var ue=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,de=(e,s,t,a)=>{for(var r=a>1?void 0:a?_e(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&ue(s,t,r),r},fe=(e,s)=>(t,a)=>s(t,a,e);let y=class{constructor(e){this._api=e}async execute(){return await this._api.getAllPermissions()}};y=de([_(),fe(0,l(u))],y);var me=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,Pe=(e,s,t,a)=>{for(var r=a>1?void 0:a?ve(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&me(s,t,r),r},ge=(e,s)=>(t,a)=>s(t,a,e);let j=class{constructor(e){this._api=e}async execute(e){return await this._api.getOne(e)}};j=Pe([_(),ge(0,l(u))],j);var he=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Oe=(e,s,t,a)=>{for(var r=a>1?void 0:a?we(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&he(s,t,r),r},$e=(e,s)=>(t,a)=>s(t,a,e);let b=class{constructor(e){this._api=e}async execute(){return await this._api.getUserProfile()}};b=Oe([_(),$e(0,l(u))],b);var ye=Object.defineProperty,je=Object.getOwnPropertyDescriptor,be=(e,s,t,a)=>{for(var r=a>1?void 0:a?je(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&ye(s,t,r),r},xe=(e,s)=>(t,a)=>s(t,a,e);let x=class{constructor(e){this._api=e}async execute(e){return await this._api.updateProfile(e)}};x=be([_(),xe(0,l(u))],x);var Ae=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,De=(e,s,t,a)=>{for(var r=a>1?void 0:a?Ue(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(s,t,r):i(r))||r);return a&&r&&Ae(s,t,r),r},d=(e,s)=>(t,a)=>s(t,a,e);let A=class{constructor(e,s,t,a,r,o,i,m,P){this._create=e,this._getAll=s,this._update=t,this._delete=a,this._getAllRole=r,this._getOne=o,this._getAllPermission=i,this._getUserProfile=m,this._updateProfile=P}async register(e){return await this._create.execute(e)}async update(e){return await this._update.execute(e)}async delete(e){return await this._delete.execute(e)}async getAll(e){return await this._getAll.execute(e)}async getOne(e){return await this._getOne.execute(e)}async getAllRole(){return await this._getAllRole.execute()}async getAllPermission(){return await this._getAllPermission.execute()}async getProfile(){return await this._getUserProfile.execute()}async updateProfile(e){return await this._updateProfile.execute(e)}};A=De([_(),d(0,l(g)),d(1,l(h)),d(2,l(w)),d(3,l(O)),d(4,l($)),d(5,l(j)),d(6,l(y)),d(7,l(b)),d(8,l(x))],A);const Re=M("admin-user-store",()=>{const e=B.resolve(A),s=f({data:{props:[],total:0},isLoading:!1,btnLoading:!1,error:""}),t=f({page:1,limit:10,filter:{name:"",role:""}}),a=f({id:"",name:"",email:"",password:"",password_confirmation:""}),r=f({data:{props:[]}}),o=f({data:{props:""}}),i=f({data:{props:""}}),m=f({data:{props:""}});async function P(){s.isLoading=!0,s.btnLoading=!0;try{await e.register(a),s.error="",await N()}catch(n){let c="";n.response.status===422&&(c=Object.keys(n.response.data.errors).map(p=>`${p}: ${n.response.data.errors[p].join(", ")}`).join("; ")),s.error=c}s.isLoading=!1,s.btnLoading=!1}async function C(){s.isLoading=!0,s.btnLoading=!0;try{await e.update(a),s.error="",a.name=""}catch(n){let c="";n.response.status===422&&(c=Object.keys(n.response.data.errors).map(p=>`${p}: ${n.response.data.errors[p].join(", ")}`).join("; ")),s.error=c}s.isLoading=!1,s.btnLoading=!1}async function L(n){s.isLoading=!0;try{await e.delete(n),await U(),s.error="",a.name=""}catch(c){let p="";c.response.status===422&&(p=Object.keys(c.response.data.errors).map(D=>`${D}: ${c.response.data.errors[D].join(", ")}`).join("; ")),s.error=p}s.isLoading=!1}async function R(n){const c=await e.getOne(n);c&&c.data&&c.message=="success"&&(i.data.props=c.data)}async function U(){s.isLoading=!0;const n=await e.getAll({page:t.page,limit:t.limit,filter:t.filter});n&&n.data&&n.status=="success"&&(s.data.props=n.data.props,s.data.total=n.data.total,s.isLoading=!1)}async function I(){const n=await e.getAllRole();n&&n.data&&n.message=="success"&&(r.data.props=n.data)}async function E(){const n=await e.getAllPermission();n&&n.data&&n.message=="success"&&(o.data.props=n.data)}async function G(){const n=await e.getProfile();n&&n.data&&n.message==="success"&&(m.data.props=n.data)}async function S(){s.isLoading=!0,s.btnLoading=!0;try{await e.updateProfile(a),s.error="",a.name=""}catch(n){let c="";n.response.status===422&&(c=Object.keys(n.response.data.errors).map(p=>`${p}: ${n.response.data.errors[p].join(", ")}`).join("; ")),s.error=c}s.isLoading=!1,s.btnLoading=!1}async function N(){a.name="",a.email="",a.password="",a.password_confirmation="",a.permissionIds=[],a.role=""}return{register:P,update:C,remove:L,getOne:R,getAll:U,form:a,setStateFilter:t,state:s,allRole:r,getAllRole:I,allPermission:o,getAllPermission:E,userGetByOne:i,getUserProfile:m,getProfile:G,updateProfile:S}});export{Re as a};
