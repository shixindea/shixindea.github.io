import{a as u,o as s,c as a,b as o,d as p,w as r,h as c,j as t}from"./index.7aa63605.js";const l={class:"markdown-body"},m=c(`<h1>\u5B89\u88C5\u4F7F\u7528</h1><h2>\u5B89\u88C5</h2><h4>\u63A8\u8350\u4F7F\u7528 <em>npm</em> \u7684\u65B9\u5F0F\u5B89\u88C5,\u4E5F\u53EF\u9009\u7528 <em>cpm</em> \u6216 <em>yarn</em> \u8FDB\u884C\u5B89\u88C5\u3002</h4><pre><code>npm install  guoguo-ui
cnpm install  guoguo-ui --save
yarn add guoguo-ui
</code></pre><br><h2>\u4F7F\u7528 guoguo-ui</h2><h4>\u9700\u8981\u6CE8\u610F\u7684\u662F css \u6837\u5F0F\u6587\u4EF6\u9700\u8981\u60A8\u5355\u72EC\u5F15\u5165\u3002</h4><pre><code class="language-javascript">/*js*/
import { createApp } from &quot;vue&quot;;
import App from &quot;@/App.vue&quot;;
import GuoGuoUI from &quot;guoguo-ui&quot;;
import &quot;../node_modules/guoguo-ui/dist/style.css&quot;;

const app = createApp(App);
app.use(GuoGuoUI);
app.mount(&quot;#app&quot;);
</code></pre><br><h2>\u6109\u5FEB\u5F00\u59CB</h2><h4>\u81F3\u6B64 guoguo-ui \u5C31\u5F15\u5165\u5B8C\u6210\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</h4><pre><code class="language-html">&lt;!-- html --&gt;
&lt;m-button&gt;\u9ED8\u8BA4\u6309\u94AE&lt;/m-buttonn&gt;
&lt;m-button type=&quot;primary&quot;&gt;\u4E3B\u8981\u6309\u94AE&lt;/m-button&gt;
</code></pre><br><h2>\u6309\u9700\u5F15\u7528</h2>`,14),i=t("\u60A8\u53EF\u4EE5\u6839\u636E\u4E2A\u4EBA\u9700\u8981\u6309\u9700\u5F15\u7528\u7EC4\u4EF6\u6765\u4F7F\u7528\uFF0C\u6309\u9700\u5F15\u7528\u65F6\u4E0D\u9700\u8981\u4F7F\u7528 "),d=o("strong",null,"app.use()",-1),h=t(" \u65B9\u6CD5\u6CE8\u518C\u3002"),g=o("pre",null,[o("code",{class:"language-javascript"},`/*js*/
import { mButton, mInput } from "guoguo-ui";
`)],-1),_=o("br",null,null,-1),b=o("pre",null,[o("code",{class:"language-html"},`<m-button>\u70B9\u51FB</m-button>
<m-input v-model="value" placeholder="\u57FA\u672C\u4F7F\u7528"></m-input>
`)],-1),f=o("br",null,null,-1),x={setup(q,{expose:e}){return e({frontmatter:{}}),(y,j)=>{const n=u("font");return s(),a("div",l,[m,o("h4",null,[i,p(n,{color:"#0e80eb"},{default:r(()=>[d]),_:1}),h]),g,_,b,f])}}};export{x as default};
