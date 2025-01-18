import{a as i}from"./chunk-ICC3I7U3.js";import"./chunk-3NO74SQX.js";import"./chunk-A7763QJH.js";import{a}from"./chunk-JHHDKBNU.js";import"./chunk-4NKWSBMZ.js";import"./chunk-PTJD77X5.js";import{Pa as t,S as o,lb as r,mb as d,za as c}from"./chunk-UDQB7DFD.js";import"./chunk-TWZW5B45.js";var g=`<p class="ngde">Wraps a row in a proxy that will take care of editing the row and firing off the appropriate actions (via the services) to update the store and the server.</p><p class="ngde">Note: this function will attempt to make the keys in the row writeable so if you are relying on NgRX to ensure these are not mutated, you will need to find some other way to do that.</p><h2 id="presentation" href="api/functions/smart-ngrx/rowProxy" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="api/functions/smart-ngrx/rowProxy" class="ng-doc-code-anchor ngde">rowProxy</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  row</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  service</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/classes/smart-ngrx/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  parentService</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/classes/smart-ngrx/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/interfaces/smart-ngrx/RowProxyDelete" class="ng-doc-code-anchor ngde">RowProxyDelete</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> &#x26;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="api/functions/smart-ngrx/rowProxy" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/interfaces/smart-ngrx/RowProxyDelete" class="ng-doc-code-anchor ngde">RowProxyDelete</a> &#x26; T</code> <span class="ngde">-</span><p class="ngde">a proxy that will handle updating the row but is typed as T and <code class="ngde ng-doc-code-with-link"><a href="api/interfaces/smart-ngrx/RowProxyDelete" class="ng-doc-code-anchor ngde">RowProxyDelete</a></code></p></div><h2 id="parameters" href="api/functions/smart-ngrx/rowProxy" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">row<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">T</code></td><td class="ngde"><p class="ngde">the row to wrap</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">service<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/classes/smart-ngrx/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></code></td><td class="ngde"><p class="ngde">the <code class="ngde ng-doc-code-with-link"><a href="api/classes/smart-ngrx/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></code> that will handle updating the row</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">parentService<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/classes/smart-ngrx/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></code></td><td class="ngde"><p class="ngde">the <code class="ngde ng-doc-code-with-link"><a href="api/classes/smart-ngrx/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></code> that will handle updating the parent row</p></td></tr></tbody></table></div>`,n=class e extends a{constructor(){super();this.pageType="api";this.pageContent=g;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/row-proxy/row-proxy.function.ts?message=docs(): describe your changes here...#L22";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/row-proxy/row-proxy.function.ts#L22"}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=o({type:e,selectors:[["ng-doc-page-hdk3dt6d"]],standalone:!0,features:[r([{provide:a,useExisting:e}]),c,d],decls:1,vars:0,template:function(s,y){s&1&&t(0,"ng-doc-page")},dependencies:[i],encapsulation:2,changeDetection:0})}},p=[{path:"",component:n,title:"rowProxy"}],x=p;export{n as PageComponent,x as default};