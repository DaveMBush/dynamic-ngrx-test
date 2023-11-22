import{a as o}from"./chunk-ZWMEQZWW.js";import"./chunk-GST45GIV.js";import{a}from"./chunk-JQOWR4KM.js";import{Ba as l,Ca as i,K as t,da as d,na as c}from"./chunk-7I7HZGX7.js";import"./chunk-RS6LHQUM.js";var r=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="defaultrows" class="ngde">defaultRows<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/defaultRows#defaultrows"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Filters out the rows we already have and provides a default row for the ones we don't have.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/defaultRows#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/defaultRows" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">defaultRows</a></span>(<span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde">  ids: </span><span class="hljs-built_in ngde">string</span><span class="hljs-params ngde">[],</span>
</span><span class="line ngde"><span class="hljs-params ngde">  state: EntityState&#x3C;T>,</span>
</span><span class="line ngde"><span class="hljs-params ngde">  defaultRow: (id: </span><span class="hljs-built_in ngde">string</span><span class="hljs-params ngde">) => T</span>
</span><span class="line ngde"><span class="hljs-params ngde"></span>): T[];
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/defaultRows#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">ids<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string[]</code></td><td class="ngde"><p class="ngde">The ids to check</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">state<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">EntityState&#x3C;T></code></td><td class="ngde"><p class="ngde">The current state to check ids against</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">defaultRow<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">(id: string) => T</code></td><td class="ngde"><p class="ngde">The defaultRow function to use to create a new row for the ids that are missing.</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=r,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-default-rows"]],standalone:!0,features:[l([{provide:a,useExisting:e}]),d,i],decls:1,vars:0,template:function(n,f){n&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let s=e;return s})(),h=[{path:"",component:p,title:"defaultRows"}],x=h;export{p as DynamicComponent,x as default};
