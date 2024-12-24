import{a as o}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as n}from"./chunk-Q6N3FV5O.js";import"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as c,Ua as r,qb as i,za as t}from"./chunk-AKDYIXFS.js";import"./chunk-TWZW5B45.js";var d=`<p class="ngde">This is an internal function used by <code class="ngde ng-doc-code-with-link"><a href="public-api/functions/public-api/createSmartSelector" class="ng-doc-code-anchor ngde">createSmartSelector</a></code>. It is documented here for completeness. Use <code class="ngde ng-doc-code-with-link"><a href="public-api/functions/public-api/createSmartSelector" class="ng-doc-code-anchor ngde">createSmartSelector</a></code> instead.</p><p class="ngde">createInnerSmartSelector wraps the specified child array with a Proxy that will request the items from the server as they are accessed (virtual data) rather than loading everything from the array up front.</p><p class="ngde">In order to access the array without triggering a request, as is needed for a tree control that uses virtual data, the proxy adds support for a rawArray property that returns the original array before it was proxied.</p><section indexable="false" class="ngde"><h2 id="see-also" href="internal-api/functions/internal-api/createInnerSmartSelector" headinglink="true" class="ngde">See Also<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="see-also"></ng-doc-heading-anchor></h2><ul class="ng-doc-see-also ngde"><li class="ngde"><p class="ngde"><code class="ngde ng-doc-code-with-link"><a href="public-api/functions/public-api/createSmartSelector" class="ng-doc-code-anchor ngde">createSmartSelector</a></code></p></li><li class="ngde"><p class="ngde"><code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/ChildDefinition" class="ng-doc-code-anchor ngde">ChildDefinition</a></code></p></li><li class="ngde"><p class="ngde"><code class="ngde ng-doc-code-with-link"><a href="internal-api/type-aliases/internal-api/ParentSelector" class="ng-doc-code-anchor ngde">ParentSelector</a></code></p></li></ul></section><h2 id="presentation" href="internal-api/functions/internal-api/createInnerSmartSelector" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="internal-api/functions/internal-api/createInnerSmartSelector" class="ng-doc-code-anchor ngde">createInnerSmartSelector</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  parentSelector</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="internal-api/type-aliases/internal-api/ParentSelector" class="ng-doc-code-anchor ngde">ParentSelector</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">P</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  childDefinition</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="internal-api/interfaces/internal-api/ChildDefinition" class="ng-doc-code-anchor ngde">ChildDefinition</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">P</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> C</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> MemoizedSelector</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">object</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> EntityState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">P</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> DefaultProjectorFn</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">EntityState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">P</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>>></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="internal-api/functions/internal-api/createInnerSmartSelector" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">MemoizedSelector&#x3C;object, EntityState&#x3C;P>, DefaultProjectorFn&#x3C;EntityState&#x3C;P>>></code> <span class="ngde">-</span><ul class="ngde"><li class="ngde">an entity with the specified childArray proxies so that when an element is accessed, the childAction will be dispatched to request data from the server.</li></ul></div><h2 id="parameters" href="internal-api/functions/internal-api/createInnerSmartSelector" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">parentSelector<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="internal-api/type-aliases/internal-api/ParentSelector" class="ng-doc-code-anchor ngde">ParentSelector</a>&#x3C;P></code></td><td class="ngde"><p class="ngde">@param parentSelector The <code class="ngde ng-doc-code-with-link"><a href="internal-api/type-aliases/internal-api/ParentSelector" class="ng-doc-code-anchor ngde">ParentSelector</a></code> to retrieve the parent data from the store.</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">childDefinition<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/ChildDefinition" class="ng-doc-code-anchor ngde">ChildDefinition</a>&#x3C;P, C></code></td><td class="ngde"><p class="ngde">@param childDefinition <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/ChildDefinition" class="ng-doc-code-anchor ngde">ChildDefinition</a></code> that defines what the child should look like</p></td></tr></tbody></table></div>`,s=class e extends n{constructor(){super();this.pageType="api";this.pageContent=d;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/selector/create-inner-smart-selector.function.ts?message=docs(): describe your changes here...#L32";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/selector/create-inner-smart-selector.function.ts#L32"}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=t({type:e,selectors:[["ng-doc-page-m5ceurz8"]],features:[i([{provide:n,useExisting:e}]),c],decls:1,vars:0,template:function(a,h){a&1&&r(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0})}},p=[{path:"",component:s,title:"createInnerSmartSelector"}],F=p;export{s as PageComponent,F as default};
