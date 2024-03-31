import{s as v,a as N}from"./column.esm-BO9rEDhc.js";import{K as E,L as w,d as V,a as F,H as T,P as q,o as B,e as G,f as y,t as O,y as _,E as P,g as c,j as I,Q as S,U,_ as z}from"./index-aHRk8VVp.js";import{i as g,a as d,A as H,b as K}from"./axios.config-gXfSTYZr.js";import"./paginator.esm-SZcDKt0r.js";import"./dropdown.esm-R_1_2Z9Q.js";import"./overlayeventbus.esm-BdYJ0rtI.js";import"./inputnumber.esm-qO1zIiY4.js";import"./inputtext.esm-oS487f0c.js";import"./index.esm-2eUDJPHK.js";import"./checkbox.esm-QxiXwJAL.js";import"./index.esm-wPa-yS3V.js";var M=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,J=(e,t,r,s)=>{for(var a=s>1?void 0:s?Q(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&M(t,r,a),a},W=(e,t)=>(r,s)=>t(r,s,e);let f=class{constructor(e){this._api=e}async create(e){return{data:(await this._api.axios({method:"post",url:"/admin/create-policy",data:{policy_type:e.policy_type,title:e.title,description:e.description}})).data,message:"ສຳເລັດເເລ້ວ",status:"success"}}async update(e){return{data:(await this._api.axios({method:"put",url:`/admin/update-policy/${e.id}`,data:{policy_type:e.policy_type,title:e.title,description:e.description}})).data,message:"ອັບເດດ ສຳເລັດ",status:"success"}}async delete(e){return{data:(await this._api.axios({method:"delete",url:`/admin/delete-policy/${e}`})).data,message:"ສຳເລັດເເລ້ວ.",status:"success"}}async getAll(e){var a;const t=await this._api.axios({url:"/admin/list-policies",params:{page:e.page,per_page:e.limit,filter:(a=e.filter)==null?void 0:a.policy_type}}),{data:r,pagination:s}=t.data.data;return{data:{props:r,total:s.total},status:"success"}}async getOne(e){return(await this._api.axios({url:`/admin/list-footer/${e}`})).data}};f=J([g(),W(0,d(H))],f);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(e,t,r,s)=>{for(var a=s>1?void 0:s?Y(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&X(t,r,a),a},k=(e,t)=>(r,s)=>t(r,s,e);let j=class{constructor(e){this._api=e}async execute(e){return await this._api.create(e)}};j=Z([g(),k(0,d(f))],j);var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ae=(e,t,r,s)=>{for(var a=s>1?void 0:s?te(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&ee(t,r,a),a},se=(e,t)=>(r,s)=>t(r,s,e);let L=class{constructor(e){this._api=e}async execute(e){try{return await this._api.getAll(e)}catch(t){t.response.status===422&&Object.keys(t.response.data.errors).map(r=>`${r}: ${t.response.data.errors[r].join(", ")}`).join("; ")}}};L=ae([g(),se(0,d(f))],L);var re=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,oe=(e,t,r,s)=>{for(var a=s>1?void 0:s?ie(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&re(t,r,a),a},ne=(e,t)=>(r,s)=>t(r,s,e);let x=class{constructor(e){this._api=e}async execute(e){return await this._api.update(e)}};x=oe([g(),ne(0,d(f))],x);var pe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,ce=(e,t,r,s)=>{for(var a=s>1?void 0:s?le(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&pe(t,r,a),a},de=(e,t)=>(r,s)=>t(r,s,e);let C=class{constructor(e){this._api=e}async execute(e){return await this._api.delete(e)}};C=ce([g(),de(0,d(f))],C);var ue=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,fe=(e,t,r,s)=>{for(var a=s>1?void 0:s?_e(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&ue(t,r,a),a},ge=(e,t)=>(r,s)=>t(r,s,e);let D=class{constructor(e){this._api=e}async execute(e){return await this._api.getOne(e)}};D=fe([g(),ge(0,d(f))],D);var me=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,he=(e,t,r,s)=>{for(var a=s>1?void 0:s?ye(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&me(t,r,a),a},h=(e,t)=>(r,s)=>t(r,s,e);let A=class{constructor(e,t,r,s,a){this._create=e,this._getAll=t,this._update=r,this._delete=s,this._getOne=a}async register(e){return await this._create.execute(e)}async update(e){return await this._update.execute(e)}async delete(e){return await this._delete.execute(e)}async getAll(e){return await this._getAll.execute(e)}async getOne(e){return await this._getOne.execute(e)}};A=he([g(),h(0,d(j)),h(1,d(L)),h(2,d(x)),h(3,d(C)),h(4,d(D))],A);const ve=E("admin-policy-store",()=>{const e=K.resolve(A),t=w({data:{props:[],total:0},isLoading:!1,btnLoading:!1,error:""}),r=w({data:{props:""}}),s=w({page:1,limit:10,filter:{policy_type:""}}),a=w({});async function i(){t.isLoading=!0,t.btnLoading=!0;try{await e.register(a),await m(),t.error=""}catch(n){let p="";n.response.status===422&&(p=Object.keys(n.response.data.errors).map(u=>`${u}: ${n.response.data.errors[u].join(", ")}`).join("; ")),t.error=p}t.isLoading=!1,t.btnLoading=!1}async function o(){t.isLoading=!0,t.btnLoading=!0;try{await e.update(a),await m(),await l(),t.error=""}catch(n){let p="";n.response.status===422&&(p=Object.keys(n.response.data.errors).map(u=>`${u}: ${n.response.data.errors[u].join(", ")}`).join("; ")),t.error=p}t.isLoading=!1,t.btnLoading=!1}async function $(n){t.isLoading=!0;try{await e.delete(n),await m(),t.error=""}catch(p){let u="";p.response.status===422&&(u=Object.keys(p.response.data.errors).map(R=>`${R}: ${p.response.data.errors[R].join(", ")}`).join("; ")),t.error=u}t.isLoading=!1}async function b(n){t.isLoading=!0;const p=await e.getOne(n);p&&p.data&&p.message==="success"&&(r.data.props=p.data,t.isLoading=!1)}async function m(){t.isLoading=!0;const n=await e.getAll({page:s.page,limit:s.limit,filter:s.filter});n&&n.data&&(n==null?void 0:n.status)=="success"&&(t.data.props=n.data.props,t.data.total=n.data.total,t.isLoading=!1)}async function l(){a.title="",a.description="",a.policy_type=""}return{register:i,update:o,remove:$,getOne:b,getAll:m,form:a,setStateFilter:s,state:t,getFooter:r}}),we={class:"card"},Pe={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},$e={class:"p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0"},be={class:"mb-3"},Oe={class:"flex flex-wrap gap-2 btn-right"},je=V({__name:"ListView",setup(e){const{push:t}=F(),{query:r}=T(),{getAll:s,state:a,setStateFilter:i}=ve(),o=l=>{t({name:"admin.edit.policy",params:{id:l}})};async function $(l){i.page=l.page+1,i.limit=l.rows;const{page:n,limit:p}=i;t({name:"admin.policy",query:{page:n,limit:p}}),await s()}const b=q(()=>{let l=0;return i.page&&i.limit&&(l=(i.page-1)*i.limit),l});async function m(){Object.keys(r).length!==0&&(i.page=r.page?Number(r.page):1,i.limit=r.limit?Number(r.limit):10,t({query:{page:i.page,limit:i.limit}})),await s()}return B(async()=>{await m()}),(l,n)=>(I(),G("div",null,[y("div",we,[y("div",Pe,[y("span",$e,[y("h2",be,O(l.$t("table.title.policy")),1)])]),_(c(N),{value:c(a).data.props,loading:c(a).isLoading,lazy:"",tableStyle:"min-width: 50rem",totalRecords:c(a).data.total,onPage:$,paginator:"",first:b.value,rows:c(i).limit,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:`${l.$t("table.pagination.show")} {first} ${l.$t("table.pagination.to")} {last} ${l.$t("table.pagination.from")} {totalRecords} ${l.$t("table.pagination.row")}`},{default:P(()=>[_(c(v),{field:"id",header:l.$t("table.header.index"),style:{width:"25%"}},{body:P(p=>[S(O(p.index+1),1)]),_:1},8,["header"]),_(c(v),{field:"title",header:l.$t("table.header.title"),style:{width:"25%"}},null,8,["header"]),_(c(v),{field:"policy_type",header:l.$t("table.header.policy_type"),style:{width:"25%"}},{body:P(({data:p})=>[S(O(p.policy_type==="sign_up"?l.$t("messages.sign_up"):l.$t("messages.policy_return")),1)]),_:1},8,["header"]),_(c(v),{headerStyle:"width: 10rem"},{body:P(({data:p})=>[y("div",Oe,[_(c(U),{type:"button",icon:"pi pi-pencil",rounded:"",severity:"warning",style:{color:"white"},onClick:u=>o(p.id)},null,8,["onClick"]),_(c(U),{type:"button",icon:"pi pi-trash",rounded:"",severity:"danger"})])]),_:1})]),_:1},8,["value","loading","totalRecords","first","rows","currentPageReportTemplate"])])]))}}),Fe=z(je,[["__scopeId","data-v-57b171dd"]]);export{Fe as default};
