"use strict";(self.webpackChunkzcomposition=self.webpackChunkzcomposition||[]).push([[653],{302:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-c0f61c4e",path:"/composition/Effect/usePermission/",title:"使用许可",lang:"en-CN",frontmatter:{category:"Browser"},excerpt:"",headers:[{level:2,title:"基本用法",slug:"基本用法",children:[]},{level:2,title:"代码演示",slug:"代码演示",children:[{level:3,title:"参数",slug:"参数",children:[]}]}],filePathRelative:"composition/Effect/usePermission/README.md",git:{updatedTime:1632830925e3,contributors:[{name:"curryPaste",email:"2771885247@qq.com",commits:1}]}}},8121:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(6252),e=a(3577),o=a(2262),p=a(1272),c=a(1790);const i=(0,t._)("h1",{id:"使用许可",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#使用许可","aria-hidden":"true"},"#"),(0,t.Uk)(" 使用许可")],-1),r=(0,t.Uk)("响应式 "),l={href:"https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("权限 API"),d=(0,t.Uk)("提供了一些工具，允许开发人员在权限方面实现更好的用户体验。"),k=(0,t._)("h2",{id:"基本用法",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#"),(0,t.Uk)(" 基本用法")],-1),m=(0,t.uE)('<h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token constant">YAML</span> <span class="token keyword">from</span> <span class="token string">&#39;js-yaml&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> usePermission <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zcomposition&#39;</span>\n\n<span class="token keyword">const</span> geolocation <span class="token operator">=</span> <span class="token function">usePermission</span><span class="token punctuation">(</span><span class="token string">&#39;geolocation&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> microphone <span class="token operator">=</span> <span class="token function">usePermission</span><span class="token punctuation">(</span><span class="token string">&#39;microphone&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> notifications <span class="token operator">=</span> <span class="token function">usePermission</span><span class="token punctuation">(</span><span class="token string">&#39;notifications&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token function">usePermission</span><span class="token punctuation">(</span><span class="token string">&#39;camera&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// const midi = usePermission(&#39;midi&#39;)</span>\n\n<span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">YAML</span><span class="token punctuation">.</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  geolocation<span class="token punctuation">,</span>\n  microphone<span class="token punctuation">,</span>\n  notifications<span class="token punctuation">,</span>\n  camera<span class="token punctuation">,</span>\n  <span class="token comment">// midi,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>geolocation</td><td>地理位置</td><td>Promise&lt;PermissionStatus or undefined&gt;</td><td>-</td></tr><tr><td>microphone</td><td>麦克风权限</td><td>Promise&lt;PermissionStatus or undefined&gt;</td><td>-</td></tr><tr><td>notifications</td><td>通知权限</td><td>Promise&lt;PermissionStatus or undefined&gt;</td><td>-</td></tr><tr><td>camera</td><td>相机权限</td><td>Promise&lt;PermissionStatus or undefined&gt;</td><td>-</td></tr><tr><td>clipboard-read</td><td>剪贴板读取权限</td><td>Promise&lt;PermissionStatus or undefined&gt;</td><td>-</td></tr><tr><td>speaker</td><td>扬声器权限</td><td>Promise&lt;PermissionStatus or undefined&gt;</td><td>-</td></tr></tbody></table>',4),b=(0,t.aZ)({setup(n){const s=(0,c.gI)("geolocation"),a=(0,c.gI)("microphone"),b=(0,c.gI)("notifications"),h=(0,c.gI)("camera"),f=(0,o.Fl)((()=>p.ZP.dump((0,o.qj)({geolocation:s,microphone:a,notifications:b,camera:h}))));return(n,s)=>{const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t._)("p",null,[r,(0,t._)("a",l,[u,(0,t.Wm)(a)]),d]),k,(0,t._)("pre",null,(0,e.zw)((0,o.SU)(f)),1),m],64)}}})}}]);