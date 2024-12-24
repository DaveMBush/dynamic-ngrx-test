import{a as d}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as n}from"./chunk-Q6N3FV5O.js";import"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as r,Ua as t,qb as o,za as i}from"./chunk-AKDYIXFS.js";import"./chunk-TWZW5B45.js";var l=`<p class="ngde">This is an internal function that is used by the Effects to buffer the loadByIndexes actions coming into an effect so that we can dispatch indexes independently but send all the indexes to the server in a single request.</p><p class="ngde">NOTE: bufferAction assumes an array of indexes is passed to the action it is buffering.</p><h2 id="presentation" href="internal-api/functions/internal-api/bufferIndexes" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="internal-api/functions/internal-api/bufferIndexes" class="ng-doc-code-anchor ngde">bufferIndexes</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  bufferTimeMs</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> number</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 0</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">source</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Observable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"><a href="internal-api/interfaces/internal-api/IndexProp" class="ng-doc-code-anchor ngde">IndexProp</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Observable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"><a href="internal-api/interfaces/internal-api/IndexesProp" class="ng-doc-code-anchor ngde">IndexesProp</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="internal-api/functions/internal-api/bufferIndexes" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde ng-doc-code-with-link">(source: Observable&#x3C;<a href="internal-api/interfaces/internal-api/IndexProp" class="ng-doc-code-anchor ngde">IndexProp</a>>) => Observable&#x3C;<a href="internal-api/interfaces/internal-api/IndexesProp" class="ng-doc-code-anchor ngde">IndexesProp</a>></code> <span class="ngde">-</span><p class="ngde">The buffered indexes.</p></div><h2 id="parameters" href="internal-api/functions/internal-api/bufferIndexes" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">bufferTimeMs<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><p class="ngde">@param bufferTimeMs The time to buffer the ids before sending them to the server. The default is 1ms which only allow the buffer to last until the thread frees up and is probably all we will ever need.</p></td></tr></tbody></table></div>`,a=class e extends n{constructor(){super();this.pageType="api";this.pageContent=l;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/actions/action.service/buffer-indexes.function.ts?message=docs(): describe your changes here...#L84";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/actions/action.service/buffer-indexes.function.ts#L84"}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=i({type:e,selectors:[["ng-doc-page-0os5ax0l"]],features:[o([{provide:n,useExisting:e}]),r],decls:1,vars:0,template:function(s,h){s&1&&t(0,"ng-doc-page")},dependencies:[d],encapsulation:2,changeDetection:0})}},p=[{path:"",component:a,title:"bufferIndexes"}],m=p;export{a as PageComponent,m as default};
