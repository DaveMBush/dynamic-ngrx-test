import{a as o}from"./chunk-YN5MAOKI.js";import"./chunk-KNGISJ5E.js";import"./chunk-QASFK7WI.js";import{a as n}from"./chunk-I6DDVD3S.js";import"./chunk-QKSOPKFJ.js";import"./chunk-76ETPZPA.js";import{Ba as i,Fa as c,Wa as r,sb as t}from"./chunk-COWQBK44.js";import"./chunk-TWZW5B45.js";var d=`<p class="ngde">retrieves child and parent actionServices from the registry</p><h2 id="presentation" href="internal-api/functions/internal-api/getServices" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="internal-api/functions/internal-api/getServices" class="ng-doc-code-anchor ngde">getServices</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">childDefinition</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="internal-api/interfaces/internal-api/ChildDefinition" class="ng-doc-code-anchor ngde">ChildDefinition</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">P</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> C</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  service</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">C</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  parentService</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">P</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="internal-api/functions/internal-api/getServices" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde ng-doc-code-with-link">{ service: <a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a>&#x3C;C>; parentService: <a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a>&#x3C;P>; }</code> <span class="ngde">-</span><p class="ngde">the actionServices for the child and the parent</p></div><h2 id="parameters" href="internal-api/functions/internal-api/getServices" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">childDefinition<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/ChildDefinition" class="ng-doc-code-anchor ngde">ChildDefinition</a>&#x3C;P, C></code></td><td class="ngde"><p class="ngde">@param childDefinition the ChildDefinition to retrieve the services for</p></td></tr></tbody></table></div>`,a=class e extends n{constructor(){super();this.pageType="api";this.pageContent=d;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/selector/get-services.function.ts?message=docs(): describe your changes here...#L12";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/selector/get-services.function.ts#L12"}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=i({type:e,selectors:[["ng-doc-page-k1uny5yg"]],features:[t([{provide:n,useExisting:e}]),c],decls:1,vars:0,template:function(s,h){s&1&&r(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0})}},g=[{path:"",component:a,title:"getServices"}],y=g;export{a as PageComponent,y as default};