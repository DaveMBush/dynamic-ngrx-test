import{a as k}from"./chunk-HBZWFD3Q.js";import{a as d}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as n}from"./chunk-Q6N3FV5O.js";import{X as D}from"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as r,Ua as c,qb as p,za as t}from"./chunk-AKDYIXFS.js";import{a as l,b as i,h as F}from"./chunk-TWZW5B45.js";var h=F(D());var u={title:"Using With Existing Selectors",mdFile:"./index.md",order:12,category:k},s=u;var g=[];var E={},B=E;var m=`<h1 id="using-with-existing-selectors" href="using-smart-ng-rx/using-with-existing-selectors" headinglink="true" class="ngde">Using With Existing Selectors<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="using-with-existing-selectors"></ng-doc-heading-anchor></h1><p class="ngde">You may have noticed that <code class="ngde ng-doc-code-with-link"><a href="internal-api/functions/internal-api/createSmartSelector" class="ng-doc-code-anchor ngde">createSmartSelector</a></code> only accepts a parent selector that returns an entity type. But what if you have existing selectors you need to integrate with SmartNgRX that return a different type?</p><p class="ngde">For this, you'll need an adapter function that converts the output of your existing selector to the entity type. Here's an example:</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> createRowsToEntitySelector</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">RowType</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> extends</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> object</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  originalSelector</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> MemoizedSelector</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">object</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde"> idField</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">    MemoizedSelector</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">object</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> EntityState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">s1</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">      EntityState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> emptyEntityState</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> EntityState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">> </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ids</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> []</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> entities</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {} }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  return</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> createSelector</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(originalSelector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">rows</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    rows</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">reduce</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">EntityState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>>((</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">acc</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde"> row</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">      const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> id</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="internal-api/functions/internal-api/castTo" class="ng-doc-code-anchor ngde">castTo</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">Dictionary</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">number</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> |</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>>(row)[idField]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">!</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">      return</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ids</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">...</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">acc</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">ids</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> id]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> entities</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">...</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">acc</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">entities</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [id]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> row } }</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">        as</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> EntityState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">RowType</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> emptyEntityState)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  )</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre><p class="ngde">There are other ways you might achieve your goals, but this is a simple and effective way of creating a reusable adapter function that you can use to convert any selector that returns an array of objects to an entity state.</p><p class="ngde">This assumes the rows you are passing in are flat other than the child arrays which should ONLY be string arrays. If you have nested objects or arrays, you can still use this function but only the row itself and child array items as expected by SmartNgRX will be something you can use as though it were a SmartNgRX entity.</p><p class="ngde">If your current data is nested, you might consider using a library like Normalizr (unmaintained) or <a href="https://alternativeto.net/software/normalizr/" class="ngde">one of the alternatives</a> to flatten your data.</p><p class="ngde">You may need to adjust the function to suit your specific needs which is why we have not included this adapter in the library itself.</p>`,o=class a extends n{constructor(){super();this.pageType="guide";this.pageContent=m;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/using-with-existing-selectors/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/using-smart-ng-rx/using-with-existing-selectors/index.md";this.page=s;this.demoAssets=B}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=t({type:a,selectors:[["ng-doc-page-hme7nt3o"]],features:[p([{provide:n,useExisting:a},g,s.providers??[]]),r],decls:1,vars:0,template:function(e,x){e&1&&c(0,"ng-doc-page")},dependencies:[d],encapsulation:2,changeDetection:0})}},C=[i(l({},(0,h.isRoute)(s.route)?s.route:{}),{path:"",component:o,title:"Using With Existing Selectors"})],I=C;export{o as PageComponent,I as default};