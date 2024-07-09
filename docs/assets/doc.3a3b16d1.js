import{l as r,a as d,o as c,x as p,w as v,d as l,j as u,r as V,f as g,c as x,b as e}from"./index.09b1296c.js";import{p as _}from"./preview.b1f7449c.js";/* empty css                                                            */const b={setup(m){const t=r("");return(a,n)=>{const s=d("m-input");return c(),p(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),placeholder:"\u57FA\u672C\u4F7F\u7528"},null,8,["modelValue"])}}},y={setup(m){const t=r("");return(a,n)=>{const s=d("m-input");return c(),p(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),disabled:"",placeholder:"\u7981\u7528\u72B6\u6001"},null,8,["modelValue"])}}},N={setup(m){const t=r(""),a=()=>{console.log("\u6E05\u7A7A")};return(n,s)=>{const o=d("m-input");return c(),p(o,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=i=>t.value=i),clearable:"",onClear:a,placeholder:"\u53EF\u6E05\u7A7A"},null,8,["modelValue"])}}},B={setup(m){const t=r(""),a=r("");return(n,s)=>{const o=d("m-input"),i=d("g-space");return c(),p(i,null,{default:v(()=>[l(o,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=f=>t.value=f),leftIcon:"m-icon-search"},null,8,["modelValue"]),l(o,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=f=>a.value=f),rightIcon:"m-icon-calendar"},null,8,["modelValue"])]),_:1})}}},w={setup(m){const t=r(""),a=r(""),n=r("");return(s,o)=>{const i=d("m-input"),f=d("g-space");return c(),p(f,null,{default:v(()=>[l(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=h=>t.value=h),placeholder:"\u9ED8\u8BA4\u5927\u5C0F"},null,8,["modelValue"]),l(i,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=h=>a.value=h),placeholder:"\u5C0F\u7684",size:"small"},null,8,["modelValue"]),l(i,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=h=>n.value=h),placeholder:"\u66F4\u5C0F\u7684",size:"mini"},null,8,["modelValue"])]),_:1})}}},U=u("\u641C\u7D22"),$={setup(m){const t=r("");return(a,n)=>{const s=d("m-button"),o=d("m-input");return c(),p(o,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i),clearable:""},{btn:v(()=>[l(s,{type:"primary",leftIcon:"m-icon-search"},{default:v(()=>[U]),_:1})]),_:1},8,["modelValue"])}}},I={setup(m){const t=r("");return(a,n)=>{const s=d("m-input");return c(),p(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),type:"password",showPassword:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])}}},z={setup(m){const t=r("");return(a,n)=>{const s=d("m-input");return c(),p(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),type:"text",placeholder:"\u81EA\u5B9A\u4E49\u4F60\u559C\u6B22\u7684focus\u989C\u8272",focusColor:"red"},null,8,["modelValue"])}}},C={setup(m){const t=V({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"string / number",red:"input\u7ED1\u5B9A\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"type",type:"string",red:"\u652F\u6301\u6240\u6709\u539F\u751Ftype\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"placeholder",type:"string",red:"\u8F93\u5165\u6846\u5360\u4F4D\u5B57\u7B26",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"disabled",type:"Boolean",red:"\u662F\u5426\u7981\u7528",sel:"true / false",def:"false"},{attr:"readonly",type:"Boolean",red:"\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB",sel:"true / false",def:"false"},{attr:"form",type:"String",red:"\u539F\u751F\u5C5E\u6027\uFF0C\u6240\u5C5E\u8868\u5355",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"clearable",type:"Boolean",red:"\u662F\u5426\u53EF\u6E05\u7A7A",sel:"true / false",def:"false"},{attr:"showPassword",type:"Boolean",red:"\u662F\u5426\u663E\u793A\u5BC6\u7801\u67E5\u770B\u56FE\u6807\uFF0C\u9700\u914D\u5408type\u4E3Apassword\u7C7B\u578B\u4E00\u8D77\u4F7F\u7528",sel:"true / false",def:"false"},{attr:"size",type:"String",red:"\u5C3A\u5BF8\u5927\u5C0F",sel:"default / small / mini",def:"default"},{attr:"leftIcon / rightIcon",type:"String",red:"\u662F\u5426\u5E26\u56FE\u6807\uFF0C\u5E76\u786E\u5B9A\u56FE\u6807\u7684\u4F4D\u7F6E",sel:"\u53C2\u8003\u56FE\u6807\u5E93",def:"\u2014\u2014"},{attr:"autofocus",type:"Boolean",red:"\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",sel:"true / false",def:"false"},{attr:"focusColor",type:"String",red:"\u81EA\u5B9A\u4E49Focus\u989C\u8272\u7684\u8272\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:a}=t;return(n,s)=>{const o=d("m-table");return c(),p(o,{options:g(a),size:"small"},null,8,["options"])}}},E={setup(m){const t=V({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"focus",red:"input\u5728\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1",attr:"(event: Event)",exm:"focus=(e)=>{console.log(e.target.value)}"},{name:"blur",red:"input\u5728\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",attr:"(event: Event)",exm:"blur=(e)=>{console.log(e.target.value)}"},{name:"input",red:"input\u503C\u53D8\u5316\u65F6\u89E6\u53D1",attr:"(value: string | number)",exm:"input=(e)=>{console.log(e)}"},{name:"change",red:"\u7528\u6237\u83B7\u5F97\u7126\u70B9\u5E76\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1",attr:"(event: Event)",exm:"change=(e)=>{console.log(e.target.value)}"},{name:"clear",red:"\u53EF\u6E05\u7A7A\u7684input\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1",attr:"\u2014\u2014",exm:"\u2014\u2014"}]}}),{options:a}=t;return(n,s)=>{const o=d("m-table");return c(),p(o,{options:g(a),size:"small"},null,8,["options"])}}},k={class:"markdown-body"},S=e("h1",null,"Input \u8F93\u5165\u6846",-1),P=e("h4",null,"\u6570\u636E\u8F93\u5165\u6846\u7C7B\u578B\uFF0C\u901A\u8FC7\u952E\u76D8\u8F93\u5165\u5B57\u7B26",-1),F=e("br",null,null,-1),j=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),A=e("h4",null,"input \u7684\u57FA\u672C\u4F7F\u7528",-1),T={class:"componetnsBox"},q=e("h2",null,"\u7981\u7528\u72B6\u6001",-1),D=e("h4",null,[u("input \u7684\u7981\u7528\u72B6\u6001\uFF0C\u901A\u8FC7 "),e("em",null,"disabled"),u(" \u5C5E\u6027\u9650\u5236\u8F93\u5165\u53CA\u64CD\u4F5C")],-1),G={class:"componetnsBox"},H=e("h2",null,"\u53EF\u6E05\u7A7A\u6570\u636E",-1),J=e("h4",null,[u("input \u7684 value \u53EF\u5FEB\u6377\u6E05\u7A7A\uFF0C\u901A\u8FC7 "),e("em",null,"clearable"),u(" \u5C5E\u6027\u542F\u7528")],-1),K={class:"componetnsBox"},L=e("h2",null,"\u5E26\u56FE\u6807",-1),M=e("h4",null,[u("\u53EF\u4F7F\u7528 "),e("em",null,"leftIcon"),u(" \u6216\u8005 "),e("em",null,"rightIcon"),u(" \u6765\u5B9A\u4E49\u663E\u793A\u56FE\u6807\u5E76\u786E\u5B9A\u663E\u793A\u7684\u4F4D\u7F6E\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C\u5B9A\u4E49\u4E86\u53F3\u4FA7\u663E\u793A\u56FE\u6807\uFF0C\u90A3 "),e("em",null,"clearable"),u(" \u5C06\u4E0D\u518D\u8D77\u4F5C\u7528")],-1),O={class:"componetnsBox"},Q=e("h2",null,"\u4E0D\u540C\u5927\u5C0F",-1),R=e("h4",null,[u("\u901A\u8FC7\u8BBE\u7F6E "),e("em",null,"size"),u(" \u5C5E\u6027\u6765\u9002\u5E94\u4E0D\u540C\u5927\u5C0F")],-1),W={class:"componetnsBox"},X=e("h2",null,"\u7EC4\u5408\u8F93\u5165",-1),Y=e("h4",null,[u("\u53EF\u901A\u8FC7\u63D2\u69FD\u5B8C\u6210\u7EC4\u5408\u8F93\u5165\uFF0C\u63D2\u69FD\u540D\u9ED8\u8BA4\u4E3A "),e("em",null,"btn")],-1),Z={class:"componetnsBox"},ee=e("h2",null,"\u5BC6\u7801\u7C7B\u578B",-1),te=e("h4",null,[u("\u5BC6\u7801\u7C7B\u578B\u7684\u8F93\u5165\u6846\uFF0C\u53EF\u901A\u8FC7 "),e("em",null,"showPassword"),u(" \u6765\u542F\u7528\u662F\u5426\u5F00\u542F\u663E\u793A\u5BC6\u7801")],-1),oe={class:"componetnsBox"},le=e("h2",null,"\u81EA\u5B9A\u4E49 Focus \u989C\u8272",-1),ne=e("h4",null,[u("\u901A\u8FC7 "),e("em",null,"focusColor"),u(" \u5C5E\u6027\u81EA\u5B9A\u4E49 input \u5728\u83B7\u53D6\u7126\u70B9\u540E\u7684\u989C\u8272")],-1),se={class:"componetnsBox"},ae=e("h2",null,"Attributes \u53C2\u6570",-1),ue=e("br",null,null,-1),de=e("h2",null,"Event \u4E8B\u4EF6",-1),re=e("br",null,null,-1),ie={setup(m,{expose:t}){return t({frontmatter:{}}),(n,s)=>(c(),x("div",k,[S,P,F,j,A,e("div",T,[l(b)]),l(_,{compName:"input",demoName:"demo1"}),q,D,e("div",G,[l(y)]),l(_,{compName:"input",demoName:"demo2"}),H,J,e("div",K,[l(N)]),l(_,{compName:"input",demoName:"demo3"}),L,M,e("div",O,[l(B)]),l(_,{compName:"input",demoName:"demo4"}),Q,R,e("div",W,[l(w)]),l(_,{compName:"input",demoName:"demo5"}),X,Y,e("div",Z,[l($)]),l(_,{compName:"input",demoName:"demo6"}),ee,te,e("div",oe,[l(I)]),l(_,{compName:"input",demoName:"demo7"}),le,ne,e("div",se,[l(z)]),l(_,{compName:"input",demoName:"demo8"}),ae,l(C),ue,de,l(E),re]))}};export{ie as default};