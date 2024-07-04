import{a as o}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a}from"./chunk-RVP6FOET.js";import{L as t,Qa as i,Ra as l,ia as d,va as c}from"./chunk-ECT43PI4.js";import"./chunk-JPKLQMV2.js";var r='<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="addeffect" class="ngde">addEffect<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/addEffect#addeffect"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This is the effect that handles adding a new row to the store.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/addEffect#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/addEffect" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">addEffect</a></span>(<span class="hljs-params ngde">effectServiceToken: InjectionToken&#x3C;<a href="/api/smart-ngrx/classes/EffectService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">EffectService</a>&#x3C;T>>, actions: <a href="/api/smart-ngrx/interfaces/ActionGroup" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ActionGroup</a>&#x3C;T></span>): <span class="hljs-function ngde">(<span class="hljs-params ngde">actions$?: Actions&#x3C;<span class="hljs-built_in ngde">any</span>>, effectService?: EffectService&#x3C;T></span>) =></span> <span class="hljs-title class_ ngde">Observable</span>&#x3C;(<span class="hljs-title class_ ngde">Action</span>&#x3C;<span class="hljs-string ngde">`[<span class="hljs-subst ngde">${<span class="hljs-built_in ngde">any</span>}</span>] Add Success`</span>> &#x26; { <span class="hljs-attr ngde">oldRow</span>: T; <span class="hljs-attr ngde">newRow</span>: T; <span class="hljs-attr ngde">parentId</span>: <span class="hljs-built_in ngde">string</span>; <span class="hljs-attr ngde">parentFeature</span>: <span class="hljs-built_in ngde">string</span>; <span class="hljs-attr ngde">parentEntityName</span>: <span class="hljs-built_in ngde">string</span>; }) | { <span class="hljs-attr ngde">type</span>: <span class="hljs-built_in ngde">string</span>; }>;\n</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/addEffect#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">effectServiceToken<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">InjectionToken&#x3C;EffectService&#x3C;T>></code></td><td class="ngde"><p class="ngde">the effect token for the service that will be called</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">actions<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ActionGroup&#x3C;T></code></td><td class="ngde"><p class="ngde">The action that will have the type of action that was triggered so we know if we should handle it</p></td></tr></tbody></table></div></section>',p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=r,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-add-effect"]],standalone:!0,features:[i([{provide:a,useExisting:e}]),d,l],decls:1,vars:0,template:function(s,h){s&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let n=e;return n})(),f=[{path:"",component:p,title:"addEffect"}],x=f;export{p as DynamicComponent,x as default};