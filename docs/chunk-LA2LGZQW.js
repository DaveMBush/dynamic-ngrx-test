import{a as o}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as s}from"./chunk-Q6N3FV5O.js";import"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as r,Ua as c,qb as i,za as t}from"./chunk-AKDYIXFS.js";import"./chunk-TWZW5B45.js";var d=`<p class="ngde">Registers a feature with the feature registry.</p><h2 id="presentation" href="internal-api/functions/internal-api/registerFeatureEffect" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="internal-api/functions/internal-api/registerFeatureEffect" class="ng-doc-code-anchor ngde">registerFeatureEffect</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  feature</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  effectsServiceToken</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> InjectionToken</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"><a href="internal-api/classes/internal-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"><a href="internal-api/interfaces/internal-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">effectService</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">?:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="internal-api/classes/internal-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"><a href="internal-api/interfaces/internal-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Observable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;{}></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="internal-api/functions/internal-api/registerFeatureEffect" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde ng-doc-code-with-link">(effectService?: <a href="internal-api/classes/internal-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a>&#x3C;<a href="internal-api/interfaces/internal-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a>>) => Observable&#x3C;{}></code> <span class="ngde">-</span><p class="ngde">An effect that will register the feature</p></div><h2 id="parameters" href="internal-api/functions/internal-api/registerFeatureEffect" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">feature<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">@param feature The feature to register</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">effectsServiceToken<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link">InjectionToken&#x3C;<a href="internal-api/classes/internal-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a>&#x3C;<a href="internal-api/interfaces/internal-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a>>></code></td><td class="ngde"><p class="ngde">@param effectsServiceToken The token to use to get the effect service</p></td></tr></tbody></table></div>`,n=class e extends s{constructor(){super();this.pageType="api";this.pageContent=d;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/effects/effects-factory/register-feature-effect.function.ts?message=docs(): describe your changes here...#L16";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/effects/effects-factory/register-feature-effect.function.ts#L16"}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=t({type:e,selectors:[["ng-doc-page-dy2ul0dx"]],features:[i([{provide:s,useExisting:e}]),r],decls:1,vars:0,template:function(a,f){a&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0})}},g=[{path:"",component:n,title:"registerFeatureEffect"}],y=g;export{n as PageComponent,y as default};