import{a as g}from"./chunk-2NLE4TRD.js";import"./chunk-HBZWFD3Q.js";import{a as p}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as o}from"./chunk-Q6N3FV5O.js";import{X as B}from"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as c,Ua as d,qb as l,za as i}from"./chunk-AKDYIXFS.js";import{a as r,b as t,h as u}from"./chunk-TWZW5B45.js";var y=u(B());var D={title:"Create (Add) a Row",mdFile:"./index.md",order:4,category:g},e=D;var h=[];var f={},k=f;var F=`<h1 id="create-add-a-row" href="using-smart-ng-rx/crud-support/create" headinglink="true" class="ngde">Create (Add) a Row<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="create-add-a-row"></ng-doc-heading-anchor></h1><p class="ngde">By now, you should be familiar with the structure of SmartNgRX rows. A row can have zero or more children. The children are represented by an <code class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/ArrayProxy" class="ng-doc-code-anchor ngde">ArrayProxy</a></code> object. To add a child row, you need to first call the <code class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/ArrayProxy" class="ng-doc-code-anchor ngde">ArrayProxy</a></code>'s <code class="ngde">addToStore</code> method, which you can access from the <code class="ngde ng-doc-code-with-link"><a href="public-api/interfaces/public-api/SmartArray" class="ng-doc-code-anchor ngde">SmartArray</a></code> interface, passing it a dummy row you want to add, including a unique ID. This will add the row to the store and the ID to the array.</p><p class="ngde">Sample code from the demo app:</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">addChild</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(row: DepartmentChild</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> parent: TreeNode): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  if</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (parent</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">isExpanded </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">===</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">toggleExpand</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(parent)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  parent</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">node</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">children</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">addToStore</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">!</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(row</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> parent</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">node)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre><p class="ngde">At this point, the row is in the store, and you can edit it like you would edit an already existing row. The only difference is that the row is not yet on the server.</p><p class="ngde">To save the row to the server, you update the row in the same way you would update any other row. The system is smart enough to know that the row is new and will ultimately call the <code class="ngde">add</code> method in the corresponding <code class="ngde ng-doc-code-with-link"><a href="public-api/classes/public-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a></code>.</p><p class="ngde">To remove a row that has not been saved to the server yet, you would call the <code class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/ArrayProxy" class="ng-doc-code-anchor ngde">ArrayProxy</a></code>'s <code class="ngde">removeFromStore</code> method. This will remove the row from the store and the ID from the array.</p><h2 id="storing-to-the-server" href="using-smart-ng-rx/crud-support/create" headinglink="true" class="ngde">Storing to the Server<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="storing-to-the-server"></ng-doc-heading-anchor></h2><p class="ngde">Once again, SmartNgRX ends up calling your <code class="ngde ng-doc-code-with-link"><a href="public-api/classes/public-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a></code> class to store the data to the server.</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">override </span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">add</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(row: DepartmentChild): Observable</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">DepartmentChild[]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  return this.http.post&#x3C;DepartmentChild[]>(this.apiDepartments, row);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>`,n=class s extends o{constructor(){super();this.pageType="guide";this.pageContent=F;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/crud-support/create/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/using-smart-ng-rx/crud-support/create/index.md";this.page=e;this.demoAssets=k}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=i({type:s,selectors:[["ng-doc-page-vq24coe2"]],features:[l([{provide:o,useExisting:s},h,e.providers??[]]),c],decls:1,vars:0,template:function(a,C){a&1&&d(0,"ng-doc-page")},dependencies:[p],encapsulation:2,changeDetection:0})}},w=[t(r({},(0,y.isRoute)(e.route)?e.route:{}),{path:"",component:n,title:"Create (Add) a Row"})],G=w;export{n as PageComponent,G as default};
