import{B as a,o as r,c as p,m as i,s as u}from"./index-UY_ClqEZ.js";var o={root:function(t){var l=t.instance,s=t.props;return["p-inputtext p-component",{"p-filled":l.filled,"p-inputtext-sm":s.size==="small","p-inputtext-lg":s.size==="large"}]}},d=a.extend({name:"inputtext",classes:o}),m={name:"BaseInputText",extends:u,props:{modelValue:null,size:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},c={name:"InputText",extends:m,emits:["update:modelValue"],methods:{getPTOptions:function(t){return this.ptm(t,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0}}},f=["value"];function x(e,t,l,s,g,n){return r(),p("input",i({class:e.cx("root"),value:e.modelValue,onInput:t[0]||(t[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},n.getPTOptions("root"),{"data-pc-name":"inputtext"}),null,16,f)}c.render=x;export{c as s};
