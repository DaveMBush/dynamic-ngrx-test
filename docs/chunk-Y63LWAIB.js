import{a as g}from"./chunk-2NLE4TRD.js";import"./chunk-HBZWFD3Q.js";import{a as p}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as n}from"./chunk-Q6N3FV5O.js";import{X as F}from"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as r,Ua as d,qb as c,za as t}from"./chunk-AKDYIXFS.js";import{a as l,b as i,h as B}from"./chunk-TWZW5B45.js";var y=B(F());var u={title:"Delete a Row",mdFile:"./index.md",order:5,category:g},e=u;var h=[];var D={},k=D;var f='<h1 id="deleting-a-row" href="using-smart-ng-rx/crud-support/deleting" headinglink="true" class="ngde">Deleting a Row<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="deleting-a-row"></ng-doc-heading-anchor></h1><p class="ngde">Every row that is returned by SmartNgRX is wrapped in the <code class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/RowProxy" class="ng-doc-code-anchor ngde">RowProxy</a></code> class, which provides access to a <code class="ngde">delete()</code> method. Calling <code class="ngde">delete()</code> on a row will optimistically remove the row from the store, including the child arrays in every parent that references it. Then the <code class="ngde">delete()</code> method in your Effect Service will get called. If the <code class="ngde">delete()</code> method fails, the deletion will be rolled back.</p><p class="ngde">Sample code from the demo app:</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">deleteNode</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(node: TreeNode): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>\n<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  node</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">node</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">delete</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">!</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>\n<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre><p class="ngde">Note: node.node is typed as <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/RowProxyDelete" class="ng-doc-code-anchor ngde">RowProxyDelete</a></code>, which defines the optional delete method. Because the delete method will, by definition, be available, we can safely use the non-null assertion operator <code class="ngde">!</code> to call it.</p><p class="ngde">Everything else happens for you under the covers.</p><p class="ngde">And this ultimately calls your <code class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a></code> class.</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">override </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">delete</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">id</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Observable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">> {</span></span>\n<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  return</span><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">http</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">delete</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">undefined</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>(</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">`</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">${</span><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">this</span><span style="color:#032F62;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">apiDepartments</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">/</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">id</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">`</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>\n<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>',o=class s extends n{constructor(){super();this.pageType="guide";this.pageContent=f;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/crud-support/deleting/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/using-smart-ng-rx/crud-support/deleting/index.md";this.page=e;this.demoAssets=k}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=t({type:s,selectors:[["ng-doc-page-58z2lro7"]],features:[c([{provide:n,useExisting:s},h,e.providers??[]]),r],decls:1,vars:0,template:function(a,b){a&1&&d(0,"ng-doc-page")},dependencies:[p],encapsulation:2,changeDetection:0})}},E=[i(l({},(0,y.isRoute)(e.route)?e.route:{}),{path:"",component:o,title:"Delete a Row"})],L=E;export{o as PageComponent,L as default};
