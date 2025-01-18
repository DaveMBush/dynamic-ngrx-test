import{a as c}from"./chunk-ICC3I7U3.js";import"./chunk-3NO74SQX.js";import"./chunk-A7763QJH.js";import{a as n}from"./chunk-JHHDKBNU.js";import"./chunk-4NKWSBMZ.js";import"./chunk-PTJD77X5.js";import{Pa as d,S as t,lb as r,mb as o,za as i}from"./chunk-UDQB7DFD.js";import"./chunk-TWZW5B45.js";var g=`<p class="ngde">We can't, necessarily, register an entity as part of the provideSmartFeatureEntities() function because it gets called while the Routes are being registered. This means that the getGlobalMarkAndDeleteInit() function will return an empty object when it should return a full MarkAndDeleteInit object.</p><p class="ngde">This function exists to wait until the MarkAndDeleteInit object is fully populated before registering the entity.</p><h2 id="presentation" href="api/functions/smart-ngrx/delayedRegisterEntity" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="api/functions/smart-ngrx/delayedRegisterEntity" class="ng-doc-code-anchor ngde">delayedRegisterEntity</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  featureName</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  entityName</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  entityDefinition</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/interfaces/smart-ngrx/SmartEntityDefinition" class="ng-doc-code-anchor ngde">SmartEntityDefinition</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"><a href="api/interfaces/smart-ngrx/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> boolean</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="api/functions/smart-ngrx/delayedRegisterEntity" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">boolean</code> <span class="ngde">-</span><p class="ngde">true if the entity can't be registered yet and false if it has this is so it works with the takeWhile() in the calling code.</p></div><h2 id="parameters" href="api/functions/smart-ngrx/delayedRegisterEntity" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">featureName<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">the feature to register</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">entityName<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">the entity in the feature to register</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">entityDefinition<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/interfaces/smart-ngrx/SmartEntityDefinition" class="ng-doc-code-anchor ngde">SmartEntityDefinition</a>&#x3C;<a href="api/interfaces/smart-ngrx/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a>></code></td><td class="ngde"><p class="ngde">the entity definition that was originally</p></td></tr></tbody></table></div>`,a=class e extends n{constructor(){super();this.pageType="api";this.pageContent=g;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/functions/delayed-register-entity.function.ts?message=docs(): describe your changes here...#L26";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/functions/delayed-register-entity.function.ts#L26"}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=t({type:e,selectors:[["ng-doc-page-q32spmck"]],standalone:!0,features:[r([{provide:n,useExisting:e}]),i,o],decls:1,vars:0,template:function(s,y){s&1&&d(0,"ng-doc-page")},dependencies:[c],encapsulation:2,changeDetection:0})}},p=[{path:"",component:a,title:"delayedRegisterEntity"}],b=p;export{a as PageComponent,b as default};