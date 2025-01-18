import{a as c}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a}from"./chunk-Q6N3FV5O.js";import"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as r,Ua as o,qb as t,za as i}from"./chunk-AKDYIXFS.js";import"./chunk-TWZW5B45.js";var l=`<p class="ngde">Buffers IDs and removes duplicates within the buffer window</p><h2 id="presentation" href="internal-api/functions/internal-api/bufferIds" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="internal-api/functions/internal-api/bufferIds" class="ng-doc-code-anchor ngde">bufferIds</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  bufferTimeMs</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> number</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 0</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">source</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Observable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Observable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="internal-api/functions/internal-api/bufferIds" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">(source: Observable&#x3C;string>) => Observable&#x3C;string[]></code> <span class="ngde">-</span><p class="ngde">An observable of unique ID arrays</p></div><h2 id="parameters" href="internal-api/functions/internal-api/bufferIds" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">bufferTimeMs<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><p class="ngde">@param bufferTimeMs The time window for buffering (default: 1ms)</p></td></tr></tbody></table></div>`,n=class s extends a{constructor(){super();this.pageType="api";this.pageContent=l;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/actions/action.service/buffer-ids.function.ts?message=docs(): describe your changes here...#L16";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/actions/action.service/buffer-ids.function.ts#L16"}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275cmp=i({type:s,selectors:[["ng-doc-page-seldgg6j"]],features:[t([{provide:a,useExisting:s}]),r],decls:1,vars:0,template:function(e,h){e&1&&o(0,"ng-doc-page")},dependencies:[c],encapsulation:2,changeDetection:0})}},g=[{path:"",component:n,title:"bufferIds"}],m=g;export{n as PageComponent,m as default};