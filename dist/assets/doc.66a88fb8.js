import{a as l,o as _,x as u,w as c,j as n,L as a,D as $,r as f,c as g,d as o,b as t,f as b,F as w}from"./index.bbef421e.js";import{p as m}from"./preview.29eadb2e.js";/* empty css                                                            */const B=n("\u5F00\u59CB\u52A0\u8F7D"),N={setup(r){const e=()=>{a.show(),setTimeout(()=>{a.hide()},5e3)};return(s,d)=>{const i=l("m-button");return _(),u(i,{onClick:e},{default:c(()=>[B]),_:1})}}},C=n("\u5F00\u59CB\u52A0\u8F7D"),L={setup(r){const e=$(),s=()=>{e.proxy.$Loading.show(),setTimeout(()=>{e.proxy.$Loading.hide()},5e3)};return(d,i)=>{const p=l("m-button");return _(),u(p,{onClick:s},{default:c(()=>[C]),_:1})}}},k=n("\u70B9\u51FB\u52A0\u8F7D"),v={id:"loadingTextBox"},T=n("\u7F16\u8F91"),j=n("\u5220\u9664"),I={setup(r){const e=()=>{a.show({target:"#loadingTextBox"}),setTimeout(()=>{a.hide()},5e3)},s=f({options:{fileds:[{field:"name",title:"\u59D3\u540D",align:"center"},{field:"job",title:"\u804C\u4E1A"},{field:"address",title:"\u5730\u5740"},{field:"from",title:"\u7C4D\u8D2F"},{field:"action",title:"\u64CD\u4F5C",width:"200px",align:"center"}],datas:[{name:"\u738B\u5C0F\u4E8C",job:"\u653E\u7F8A\u5A03",address:"\u5728\u90A3\u9065\u8FDC\u7684\u5C0F\u5C71\u6751",from:"\u6C11\u95F4\u6D41\u4F20\u6545\u4E8B"},{name:"\u732A\u516B\u6212",job:"\u5F92\u5F1F",address:"\u9AD8\u8001\u5E84",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"},{name:"\u5218\u8001\u56DB",job:"\u519C\u6C11",address:"\u53EF\u80FD\u5728\u4E2D\u56FD",from:"\u60F3\u8C61\u51FA\u6765\u7684"},{name:"\u767D\u9AA8\u7CBE",job:"\u5996\u7CBE",address:"\u897F\u6E38\u8BB0",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"}]}}),{options:d}=s;return(i,p)=>{const h=l("m-button"),x=l("m-space"),y=l("m-table");return _(),g(w,null,[o(x,null,{default:c(()=>[o(h,{onClick:e},{default:c(()=>[k]),_:1})]),_:1}),t("div",v,[o(y,{options:b(d),size:"small"},{action:c(()=>[o(h,{type:"text",leftIcon:"m-icon-edit",size:"small"},{default:c(()=>[T]),_:1}),o(h,{type:"text",leftIcon:"m-icon-ashbin",style:{color:"#ec3437"},size:"small"},{default:c(()=>[j]),_:1})]),_:1},8,["options"])])],64)}}},S=n("\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u7247"),z={setup(r){const e=()=>{a.show({text:"\u6B63\u5728\u52AA\u529B\u52A0\u8F7D\u4E2D...",img:"https://mzlui.codeym.com/logo.png"}),setTimeout(()=>{a.hide()},5e3)};return(s,d)=>{const i=l("m-button");return _(),u(i,{onClick:e},{default:c(()=>[S]),_:1})}}},V=n("\u66F4\u591A\u81EA\u5B9A\u4E49\u914D\u7F6E\u9879"),D={setup(r){const e=()=>{a.show({text:"\u6B63\u5728\u52A0\u8F7Dguoguo-ui...",icon:"m-icon-loading3",scrollLock:!0,textColor:"#333",bgColor:"rgba(248,253,255,.9)",showIcon:!0}),setTimeout(()=>{a.hide()},5e3)};return(s,d)=>{const i=l("m-button");return _(),u(i,{onClick:e},{default:c(()=>[V]),_:1})}}},F={setup(r){const e=f({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"text",type:"String",red:"\u52A0\u8F7D\u6587\u5B57",sel:"\u2014\u2014",def:"\u52A0\u8F7D\u4E2D..."},{attr:"icon",type:"String",red:"\u52A0\u8F7D\u72B6\u6001\u56FE\u6807",sel:"m-icon-loading1 / m-icon-loading2 / m-icon-loading3 / m-icon-loading4 / m-icon-loading5 / m-icon-loading6",def:"m-icon-loading1"},{attr:"img",type:"String",red:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u7247\uFF0C\u8BBE\u7F6E\u540Eicon\u5C06\u5931\u6548",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"target",type:"String",red:"\u7ED1\u5B9A\u533A\u57DF\u5143\u7D20\uFF08class\u6216id\uFF09,\u9ED8\u8BA4body\u4E0D\u9700\u8981\u4F20",sel:"\u2014\u2014",def:"body"},{attr:"textColor",type:"String",red:"\u6587\u672C\u989C\u8272",sel:"\u2014\u2014",def:"#ffffff"},{attr:"bgColor",type:"String",red:"\u80CC\u666F\u989C\u8272",sel:"\u2014\u2014",def:"rgba(0, 0, 0, 0.6)"},{attr:"showIcon",type:"Boolean",red:"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001\u56FE\u6807\uFF08icon\u6709\u6548\uFF09",sel:"true / false",def:"true"},{attr:"scrollLock",type:"Boolean",red:"\u52A0\u8F7D\u4E2D\u662F\u5426\u9501\u5B9A\u6EDA\u52A8\u6761",sel:"true / false",def:"true"}]}}),{options:s}=e;return(d,i)=>{const p=l("m-table");return _(),u(p,{options:b(s),size:"small"},null,8,["options"])}}},A={class:"markdown-body"},E=t("h1",null,"Loading \u52A0\u8F7D\u4E2D",-1),q=t("h4",null,"\u7528\u4E8E\u9875\u9762\u548C\u533A\u5757\u7684\u52A0\u8F7D\u4E2D\u72B6\u6001",-1),G=t("br",null,null,-1),H=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),J=t("h4",null,"loading \u7EC4\u4EF6\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\u3002",-1),K={class:"componetnsBox"},M=t("h4",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u65B9\u5F0F\u6765\u8C03\u7528\u3002",-1),O={class:"componetnsBox"},P=t("h2",null,"\u533A\u57DF\u52A0\u8F7D",-1),Q=t("h4",null,[n("\u53EF\u901A\u8FC7\u8BBE\u7F6E "),t("em",null,"target"),n("\uFF08\u5143\u7D20\u7C7B\u540D\u6216 ID\uFF09\u6765\u4E3A\u6307\u5B9A\u533A\u57DF\u6DFB\u52A0\u3002")],-1),R={class:"componetnsBox"},U=t("h2",null,"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u7247",-1),W=t("h4",null,[n("\u53EF\u901A\u8FC7\u8BBE\u7F6E "),t("em",null,"img"),n(" \u6765\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u7247\uFF0C\u81EA\u5B9A\u4E49\u540E "),t("em",null,"icon"),n(" \u5C06\u5931\u6548\u3002")],-1),X={class:"componetnsBox"},Y=t("h2",null,"\u66F4\u591A\u81EA\u5B9A\u4E49\u914D\u7F6E\u9879",-1),Z=t("h4",null,"\u66F4\u591A\u914D\u7F6E\u9879\u793A\u4F8B\u3002",-1),tt={class:"componetnsBox"},ot=t("h2",null,"Attributes \u53C2\u6570",-1),et=t("br",null,null,-1),ct={setup(r,{expose:e}){return e({frontmatter:{}}),(d,i)=>(_(),g("div",A,[E,q,G,H,J,t("div",K,[o(N)]),o(m,{compName:"loading",demoName:"demo1"}),M,t("div",O,[o(L)]),o(m,{compName:"loading",demoName:"demo2"}),P,Q,t("div",R,[o(I)]),o(m,{compName:"loading",demoName:"demo3"}),U,W,t("div",X,[o(z)]),o(m,{compName:"loading",demoName:"demo4"}),Y,Z,t("div",tt,[o(D)]),o(m,{compName:"loading",demoName:"demo5"}),ot,o(F),et]))}};export{ct as default};