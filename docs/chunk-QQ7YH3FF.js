import{a as r}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as n}from"./chunk-Q6N3FV5O.js";import"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as t,Ua as o,qb as d,za as i}from"./chunk-AKDYIXFS.js";import"./chunk-TWZW5B45.js";var c=`<p class="ngde">Merges the new row with the existing row keeping the virtual array data in place if it is in the existing row.</p><h2 id="presentation" href="internal-api/functions/internal-api/mergeNewRowWithExisting" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="internal-api/functions/internal-api/mergeNewRowWithExisting" class="ng-doc-code-anchor ngde">mergeNewRowWithExisting</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  feature</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  entity</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  newRow</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Record</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">keyof</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> unknown</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">> </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x26;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  existingRow</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Record</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">keyof</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> unknown</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">> </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x26;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="internal-api/interfaces/internal-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="internal-api/functions/internal-api/mergeNewRowWithExisting" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">T</code> <span class="ngde">-</span><p class="ngde">merged row</p></div><h2 id="parameters" href="internal-api/functions/internal-api/mergeNewRowWithExisting" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">feature<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">@param feature the name of the feature the row represent</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">entity<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">@param entity the name of the entity the row represent</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">newRow<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Record&#x3C;keyof T, unknown> &#x26; T</code></td><td class="ngde"><p class="ngde">@param newRow new row to merge</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">existingRow<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link">Record&#x3C;keyof T, unknown> &#x26; <a href="internal-api/interfaces/internal-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a></code></td><td class="ngde"><p class="ngde">@param existingRow existing row to merge with</p></td></tr></tbody></table></div>`,a=class s extends n{constructor(){super();this.pageType="api";this.pageContent=c;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/common/merge-new-row-with-existing.function.ts?message=docs(): describe your changes here...#L17";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/common/merge-new-row-with-existing.function.ts#L17"}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275cmp=i({type:s,selectors:[["ng-doc-page-muu3ztaq"]],features:[d([{provide:n,useExisting:s}]),t],decls:1,vars:0,template:function(e,h){e&1&&o(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0})}},g=[{path:"",component:a,title:"mergeNewRowWithExisting"}],f=g;export{a as PageComponent,f as default};