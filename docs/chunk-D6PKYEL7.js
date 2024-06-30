import{a as r}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a as s}from"./chunk-RVP6FOET.js";import{L as t,Qa as i,Ra as o,ia as d,va as c}from"./chunk-ECT43PI4.js";import"./chunk-JPKLQMV2.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="removeidfromparents" class="ngde">removeIdFromParents<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/removeIdFromParents#removeidfromparents"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Helper method to remove the id of the row from the parent rows looking at it</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/removeIdFromParents#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/removeIdFromParents" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">removeIdFromParents</a></span>(<span class="hljs-params ngde">childDefinition: <a href="/api/smart-ngrx/interfaces/ChildDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ChildDefinition</a>&#x3C;<a href="/api/smart-ngrx/interfaces/SmartNgRXRowBase" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">SmartNgRXRowBase</a>, <a href="/api/smart-ngrx/interfaces/SmartNgRXRowBase" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">SmartNgRXRowBase</a>>, service: <a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a>, id: <span class="hljs-built_in ngde">string</span>, parentInfo: <a href="/api/smart-ngrx/interfaces/ParentInfo" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ParentInfo</a>[]</span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/removeIdFromParents#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">childDefinition<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ChildDefinition&#x3C;SmartNgRXRowBase, SmartNgRXRowBase></code></td><td class="ngde"><p class="ngde">the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/ChildDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ChildDefinition</a></code> that defines the parent/child relationship for the row being deleted</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">service<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a></code></td><td class="ngde"><p class="ngde">the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a></code> for the row being deleted</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">id<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">the id of the row being deleted</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">parentInfo<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ParentInfo[]</code></td><td class="ngde"><p class="ngde">holds the parent feature, entity, and ids that are affected by the delete</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends s{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-remove-id-from-parents"]],standalone:!0,features:[i([{provide:s,useExisting:e}]),d,o],decls:1,vars:0,template:function(a,f){a&1&&c(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"removeIdFromParents"}],u=h;export{p as DynamicComponent,u as default};
