import{d as E,a as I,H as T,u as F,o as H,e as d,f as s,F as w,i as b,g,j as p,h as x,t,K as c,_ as L}from"./index-tOJr_tL0.js";import{h as V}from"./home.store-ABVJI0VC.js";import{d as j}from"./store-ZrNbJOj4.js";import{f as k}from"./format.currency-CcPyHQva.js";import"./axios.config-EMV3l8KB.js";import"./format.date--bimoUa2.js";import"./service-uUjPpI3s.js";const q={style:{padding:"20px"}},z={class:"row"},D=["src"],M={class:"card-detail"},R={style:{"font-size":"24px","font-weight":"bold"}},K={style:{background:"green",padding:"2px","border-radius":"4px",color:"white"}},O={style:{"margin-left":"5px"}},G={style:{background:"#00b7c3",padding:"2px","border-radius":"4px",color:"white"}},J={style:{width:"250px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},P=["src"],Q={class:"card-detail"},U={style:{"font-size":"24px","font-weight":"bold"}},W={style:{background:"green",padding:"2px","border-radius":"4px",color:"white"}},X={style:{"margin-left":"5px"}},Y={style:{background:"#00b7c3",padding:"2px","border-radius":"4px",color:"white"}},Z={style:{width:"250px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},ee=E({__name:"ListHouse1",setup(te){const{getAllCountries:S,getCountries:y}=j(),{form:m,getAll:N,state:f,setStateFilter:o,realEstateTypes:h,getAllData:$}=V(),B=I(),{query:a}=T(),{t:v}=F();H(async()=>{await C(),await S(),await $(),y.data.props.unshift({id:"all",name:v("messages.all")}),m.country_id=y.data.props.length>0?y.data.props[0].id:void 0,h.data.props.unshift({id:"all",name:v("messages.all")}),m.real_estate_type_id=h.data.props.length>0?h.data.props[0].id:void 0});async function C(){if(Object.keys(a).length!==0){o.page=a.page?Number(a.page):1,o.limit=a.limit?Number(a.limit):10;const r=a.real_estate_type_id!==void 0?String(a.real_estate_type_id):void 0,u=a.service_model!==void 0?String(a.service_model):void 0,e=a.room_type!==void 0?String(a.room_type):void 0,l=a.total_bed!==void 0?String(a.total_bed):void 0,n=a.total_bath!==void 0?String(a.total_bath):void 0,i=a.country_id!==void 0?String(a.country_id):void 0;o.filter&&(o.filter.real_estate_type_id=r!=="all"?r:"",o.filter.service_model=u!=="all"?u:"",o.filter.room_type=e!=="all"?e:"",o.filter.total_bed=l!=="all"?l:"",o.filter.total_bath=n!=="all"?n:"",o.filter.country_id=i!=="all"?i:""),B.push({query:{page:o.page,limit:o.limit,real_estate_type_id:r,service_model:u,room_type:e,total_bed:l,total_bath:n,country_id:i}})}await A()}const A=async()=>{await N()};return(r,u)=>(p(),d("div",q,[s("div",z,[(p(!0),d(w,null,b(g(f).data.props,e=>{var l,n,i,_;return p(),d("div",{class:"column",key:e.id},[e.image?(p(),d("img",{key:0,src:e.image,alt:"Not found image",class:"card-image"},null,8,D)):x("",!0),s("div",M,[s("p",R,t(g(k)((n=(l=e.price)==null?void 0:l[0])==null?void 0:n.price,(i=e.country)==null?void 0:i.currency)),1),s("p",null,t(e.name),1),s("p",null,[s("span",K,t(e.status),1),s("span",O,", "+t(e.service_model),1),c(" , "),s("span",G,t(r.$t("messages.refer"))+": "+t(e.refer),1)]),s("p",null,[c(t((_=e.trans_real_estate_type)==null?void 0:_.name)+", ",1),s("span",null,t(r.$t("messages.long"))+": "+t(e.long),1),c(", "),s("span",null,t(r.$t("messages.wide"))+": "+t(e.wide),1)]),s("p",J,t(e.village),1)])])}),128)),(p(!0),d(w,null,b(g(f).data.props,e=>{var l,n,i,_;return p(),d("div",{class:"column",key:e.id},[e.image?(p(),d("img",{key:0,src:e.image,alt:"Not found image",class:"card-image"},null,8,P)):x("",!0),s("div",Q,[s("p",U,t(g(k)((n=(l=e.price)==null?void 0:l[0])==null?void 0:n.price,(i=e.country)==null?void 0:i.currency)),1),s("p",null,t(e.name),1),s("p",null,[s("span",W,t(e.status),1),s("span",X,", "+t(e.service_model),1),c(" , "),s("span",Y,t(r.$t("messages.refer"))+": "+t(e.refer),1)]),s("p",null,[c(t((_=e.trans_real_estate_type)==null?void 0:_.name)+", ",1),s("span",null,t(r.$t("messages.long"))+": "+t(e.long),1),c(", "),s("span",null,t(r.$t("messages.wide"))+": "+t(e.wide),1)]),s("p",Z,t(e.village),1)])])}),128))])]))}}),de=L(ee,[["__scopeId","data-v-77385411"]]);export{de as default};
