import{D as m}from"./service-SQLvwKvD.js";import{V as l,W as e}from"./index-IEQe28hw.js";import{c as u}from"./axios.config-jCy-uYyV.js";const A=l("report-rent-buy-store",()=>{const o=u.resolve(m),a=e({data:{props:[],total:0,summary:"",currency:""},isLoading:!1,btnLoading:!1,error:""}),r=e({data:{props:[]}}),n=e({data:{props:""}}),s=e({page:1,limit:10,filter:{service_model:"",from_date:"",to_date:"",search:"",customer_id:""}}),i=e({});async function c(){a.isLoading=!0;const t=await o.getAllReportRentBuy({page:s.page,limit:s.limit,filter:s.filter});t&&t.data&&(t==null?void 0:t.status)==="success"&&(a.data.props=t.data.props,a.data.total=t.data.total,a.data.summary=t.data.summary,a.data.currency=t.data.currency,a.isLoading=!1)}async function d(){const t=await o.getAllCustomers();t&&t.data&&(t==null?void 0:t.message)==="success"&&(r.data.props=t.data)}async function p(){const t=await o.getAllAppointmentPending();t&&t.data&&(t==null?void 0:t.message)==="success"&&(n.data.props=t.data)}return{form:i,setStateFilter:s,state:a,getAllReportRentBuy:c,getAllCustomers:d,getCustomers:r,getAllAppointmentPending:p,appointmentPending:n}});export{A as r};
