import{l as h,r as g,a as m,o as p,x as f,f as d,w as b,d as t,c as V,b as e,j as s}from"./index.bbef421e.js";import{p as v}from"./preview.29eadb2e.js";/* empty css                                                            */const x={setup(_){const o=h("zhongguo"),n=g({radioOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),a=l=>{console.log(l.value,l.index)},{radioOptions:c}=n;return(l,i)=>{const u=m("m-radio");return p(),f(u,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=r=>o.value=r),options:d(c),onChange:a},null,8,["modelValue","options"])}}},y={setup(_){const o=h("zhongguo"),n=g({radioOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo",disabled:!0},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo",disabled:!0}]}),{radioOptions:a}=n;return(c,l)=>{const i=m("m-radio");return p(),f(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=u=>o.value=u),options:d(a)},null,8,["modelValue","options"])}}},z={setup(_){const o=h("zhongguo"),n=g({radioOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{radioOptions:a}=n;return(c,l)=>{const i=m("m-radio");return p(),f(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=u=>o.value=u),options:d(a),inline:!1},null,8,["modelValue","options"])}}},N={setup(_){const o=h(0),n=g({radioOptions:[{name:"\u5C0F\u660E",id:0},{name:"\u5C0F\u674E",id:1},{name:"\u5C0F\u7EA2",id:2},{name:"\u5C0F\u738B",id:3}]}),{radioOptions:a}=n;return(c,l)=>{const i=m("m-radio");return p(),f(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=u=>o.value=u),options:d(a),labelFiled:"name",valueFiled:"id"},null,8,["modelValue","options"])}}},B={setup(_){const o=h("zhongguo"),n=g({radioOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{radioOptions:a}=n;return(c,l)=>{const i=m("m-radio"),u=m("m-space");return p(),f(u,{inline:!1},{default:b(()=>[t(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=r=>o.value=r),options:d(a)},null,8,["modelValue","options"]),t(i,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=r=>o.value=r),options:d(a),size:"small"},null,8,["modelValue","options"]),t(i,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=r=>o.value=r),options:d(a),size:"mini"},null,8,["modelValue","options"])]),_:1})}}},O={setup(_){const o=h("zhongguo"),n=g({radioOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{radioOptions:a}=n;return(c,l)=>{const i=m("m-radio"),u=m("m-space");return p(),f(u,{inline:!1},{default:b(()=>[t(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=r=>o.value=r),options:d(a),customColor:"#09b63d"},null,8,["modelValue","options"]),t(i,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=r=>o.value=r),options:d(a),customColor:"#25B0F8"},null,8,["modelValue","options"])]),_:1})}}},C={setup(_){const o=g({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"String || Number",red:"\u5355\u9009\u7ED1\u5B9A\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"size",type:"String",red:"\u5C3A\u5BF8\u5927\u5C0F",sel:"default / small / mini",def:"default"},{attr:"options",type:"Array",red:"\u5355\u9009\u6570\u636E\u914D\u7F6E\uFF0C\u5177\u4F53\u89C1\u4E0B\u65B9 options API",sel:"\u2014\u2014",def:"[]"},{attr:"inline",type:"Boolean",red:"\u662F\u5426\u4E3A\u884C\u5185\u5143\u7D20",sel:"true / false",def:"true"},{attr:"labelFiled",type:"String",red:"\u81EA\u5B9A\u4E49\u66FF\u6362lable\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"label"},{attr:"valueFiled",type:"String",red:"\u81EA\u5B9A\u4E49\u66FF\u6362value\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"value"},{attr:"customColor",type:"String",red:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272\u8272\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"customClass",type:"String",red:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\u540D",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:n}=o;return(a,c)=>{const l=m("m-table");return p(),f(l,{options:d(n),size:"small"},null,8,["options"])}}},F={setup(_){const o=g({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"label",type:"String",red:"\u5355\u9009\u9ED8\u8BA4label\u5C55\u793A\u5B57\u6BB5\u540D\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 labelFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054lable\u5B57\u6BB5",sel:"\u2014\u2014",def:"label"},{attr:"value",type:"String",red:"\u5355\u9009\u9ED8\u8BA4value\u9009\u4E2D\u503C\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 valueFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054value\u5B57\u6BB5",sel:"\u2014\u2014",def:"value"},{attr:"disabled",type:"Boolean",red:"\u662F\u5426\u7981\u7528\u9009\u9879",sel:"true / false",def:"false"}]}}),{options:n}=o;return(a,c)=>{const l=m("m-table");return p(),f(l,{options:d(n),size:"small"},null,8,["options"])}}},U={setup(_){const o=g({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"change",red:"\u9009\u4E2D\u4E8B\u4EF6",attr:"(value:e)",exm:"change = (e) =>{console.log(e.value,e.index)}"}]}}),{options:n}=o;return(a,c)=>{const l=m("m-table");return p(),f(l,{options:d(n),size:"small"},null,8,["options"])}}},$={class:"markdown-body"},w=e("h1",null,"Radio \u5355\u9009",-1),S=e("h4",null,"\u5E38\u7528\u4ECE\u4E00\u7EC4\u6570\u636E\u4E2D\u9009\u62E9\u5355\u4E2A\u6570\u636E",-1),k=e("br",null,null,-1),A=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),E=e("h4",null,[s("radio \u7EC4\u4EF6\u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u9700\u8981\u4E00\u4E2A\u4E3B\u8981\u7684 "),e("em",null,"options"),s(" \u53C2\u6570\u3002")],-1),I={class:"componetnsBox"},P=e("h2",null,"\u7981\u7528\u9009\u9879",-1),j=e("h4",null,[s("\u53EF\u4EE5\u9488\u5BF9 "),e("em",null,"options"),s(" \u4E0B\u67D0\u4E2A\u9009\u9879\u6765\u6DFB\u52A0 "),e("em",null,"disabled"),s(" \u5C5E\u6027\u5B9E\u73B0\u7981\u7528\u9009\u9879\u3002")],-1),R={class:"componetnsBox"},T=e("h2",null,"\u5782\u76F4\u6392\u5217",-1),q=e("h4",null,[s("\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),e("em",null,"inline"),s(" \u5C5E\u6027\u4E3A "),e("em",null,"false"),s(" \u5B9E\u73B0\u5782\u76F4\u6392\u5217\u3002")],-1),D={class:"componetnsBox"},G=e("h2",null,"\u5339\u914D\u4E0D\u540C\u683C\u5F0F\u7684\u6570\u636E",-1),H=e("h4",null,[s("\u9ED8\u8BA4 "),e("em",null,"options"),s(" \u63A5\u6536 "),e("em",null,"label"),s(" \u548C "),e("em",null,"value"),s(" \u4F5C\u4E3A\u663E\u793A\u548C\u503C\u7ED1\u5B9A\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E "),e("em",null,"labelFiled"),s(" \u548C "),e("em",null,"valueFiled"),s(" \u6765\u91CD\u65B0\u786E\u5B9A\u5B57\u6BB5\u7684\u7ED1\u5B9A\uFF0C\u66F4\u65B9\u4FBF\u7684\u5339\u914D\u4E0D\u540C\u683C\u5F0F\u7684\u6570\u636E\u3002")],-1),J={class:"componetnsBox"},K=e("h2",null,"\u4E0D\u540C\u5927\u5C0F",-1),L=e("h4",null,[s("\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),e("em",null,"size"),s(" \u5C5E\u6027\u6765\u663E\u793A\u4E0D\u540C\u5927\u5C0F\u3002")],-1),M={class:"componetnsBox"},Q=e("h2",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),W=e("h4",null,[s("\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),e("em",null,"customColor"),s(" \u5C5E\u6027\u4E3A\u9009\u4E2D\u7684\u9009\u9879\u81EA\u5B9A\u4E49\u4F60\u559C\u6B22\u7684\u989C\u8272\u3002")],-1),X={class:"componetnsBox"},Y=e("h2",null,"Attributes \u53C2\u6570",-1),Z=e("br",null,null,-1),ee=e("h2",null,"options API",-1),oe=e("br",null,null,-1),le=e("h2",null,"Event \u4E8B\u4EF6",-1),te=e("br",null,null,-1),ie={setup(_,{expose:o}){return o({frontmatter:{}}),(a,c)=>(p(),V("div",$,[w,S,k,A,E,e("div",I,[t(x)]),t(v,{compName:"radio",demoName:"demo1"}),P,j,e("div",R,[t(y)]),t(v,{compName:"radio",demoName:"demo2"}),T,q,e("div",D,[t(z)]),t(v,{compName:"radio",demoName:"demo3"}),G,H,e("div",J,[t(N)]),t(v,{compName:"radio",demoName:"demo4"}),K,L,e("div",M,[t(B)]),t(v,{compName:"radio",demoName:"demo5"}),Q,W,e("div",X,[t(O)]),t(v,{compName:"radio",demoName:"demo6"}),Y,t(C),Z,ee,t(F),oe,le,t(U),te]))}};export{ie as default};