import{D as h}from"./service-tqvsgP2m.js";import{V as _,W as o}from"./index-LdcnITiF.js";import{c as A}from"./axios.config-jCy-uYyV.js";const S=_("dashboard-store",()=>{const s=A.resolve(h),t=o({data:{props:[],total:0},isLoading:!1,btnLoading:!1,error:""}),d=o({data:{props:[]}}),p=o({data:{props:[]}}),l=o({data:{props:[]}}),g=o({data:{props:[]}}),i=o({page:1,limit:10,filter:{real_estate_type_id:"",service_model:"",room_type:"",search:"",district_id:"",province_id:"",country_id:""}}),c=o({});async function u(){t.isLoading=!0,t.btnLoading=!0;try{await s.register(c),await n(),t.error=""}catch(a){let e="";a.response.status===422&&(e=Object.keys(a.response.data.errors).map(r=>`${r}: ${a.response.data.errors[r].join(", ")}`).join("; ")),t.error=e}t.isLoading=!1,t.btnLoading=!1}async function m(){t.isLoading=!0,t.btnLoading=!0;try{await s.update(c),await n(),await j(),t.error=""}catch(a){let e="";a.response.status===422&&(e=Object.keys(a.response.data.errors).map(r=>`${r}: ${a.response.data.errors[r].join(", ")}`).join("; ")),t.error=e}t.isLoading=!1,t.btnLoading=!1}async function y(a){t.isLoading=!0;try{await s.delete(a),await n(),t.error=""}catch(e){let r="";e.response.status===422&&(r=Object.keys(e.response.data.errors).map(f=>`${f}: ${e.response.data.errors[f].join(", ")}`).join("; ")),t.error=r}t.isLoading=!1}async function L(){t.isLoading=!0;const a=await s.reportRealEstateTypes();a&&a.data&&a.message==="success"&&(d.data.props=a.data,t.isLoading=!1)}async function n(){t.isLoading=!0;const a=await s.getAll({page:i.page,limit:i.limit,filter:i.filter});a&&a.data&&(a==null?void 0:a.status)==="success"&&(t.data.props=a.data.props,t.data.total=a.data.total,t.isLoading=!1)}async function b(){const a=await s.getCountries();a&&a.data&&(a==null?void 0:a.message)==="success"&&(p.data.props=a.data)}async function w(a){const e=await s.getAllProvinces(a);e&&e.data&&(e==null?void 0:e.message)==="success"&&(l.data.props=e.data)}async function v(a){const e=await s.getAllDistricts(a);e&&e.data&&(e==null?void 0:e.message)==="success"&&(g.data.props=e.data)}async function j(){}return{register:u,update:m,remove:y,reportRealEstateTypes:L,getAllRealEstate:n,form:c,setStateFilter:i,state:t,getAllCountries:b,getCountries:p,getAllProvinces:w,getProvinces:l,getAllDistricts:v,getDistricts:g,getRealEstateTypes:d}});export{S as d};