import{a as i}from"./chunk-7XN64D54.js";import"./chunk-IJ3JGE56.js";import{a as n}from"./chunk-CKVFDSHY.js";import{Ba as c,Ca as r,K as d,da as t,na as l}from"./chunk-WYUNPEIA.js";import"./chunk-RS6LHQUM.js";var o=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Class">Class</span></div><h1 id="arrayproxy" class="ngde">ArrayProxy<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#arrayproxy"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><div class="ng-doc-header-details ngde" indexable="false"><span class="ng-doc-header-details-label ngde">Implements</span><code indexable="false" class="ngde">ArrayLike&#x3C;C></code></div></header><section class="ngde"><p class="ngde">This is an internal class used by <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></code> to wrap the field that represents the child array with a class that manages all the magic of loading the data from the server as it is accessed.</p></section><section indexable="false" class="ngde"><h2 id="see-also" class="ngde">See Also<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#see-also"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ul class="ng-doc-see-also ngde"><li class="ngde"><p class="ngde"><code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></code></p></li></ul></section><section class="ngde"><h2 id="constructor" class="ngde">Constructor<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#constructor"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">The constructor for the ArrayProxy class.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde">	</span><span class="hljs-keyword ngde">private</span> childArray: <span class="hljs-built_in ngde">string</span><span class="hljs-params ngde">[] | <a href="/api/smart-ngrx/classes/ArrayProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ArrayProxy</a>&#x3C;C, F, E>, </span>
</span><span class="line ngde"><span class="hljs-params ngde">	</span><span class="hljs-keyword ngde">private</span><span class="hljs-params ngde"> child: EntityState&#x3C;C>, </span>
</span><span class="line ngde"><span class="hljs-params ngde">	</span><span class="hljs-keyword ngde">private</span><span class="hljs-params ngde"> feature: StringLiteralSource&#x3C;F>, </span>
</span><span class="line ngde"><span class="hljs-params ngde">	</span><span class="hljs-keyword ngde">private</span><span class="hljs-params ngde"> entity: StringLiteralSource&#x3C;E></span>
</span><span class="line ngde"><span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/classes/ArrayProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ArrayProxy</a></span>&#x3C;C, F, E>;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="childArray" data-slugtype="member" id="childArray" class="ngde"><td indexable="false" class="ngde">childArray<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string[] | ArrayProxy&#x3C;C, F, E></code></td><td class="ngde"><p class="ngde">The array of ids to wrap</p></td></tr><tr data-slug="child" data-slugtype="member" id="child" class="ngde"><td indexable="false" class="ngde">child<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">EntityState&#x3C;C></code></td><td class="ngde"><p class="ngde">The child entity we use to find the item in the store</p></td></tr><tr data-slug="feature" data-slugtype="member" id="feature" class="ngde"><td indexable="false" class="ngde">feature<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;F></code></td><td class="ngde"><p class="ngde">the feature the child belongs to</p></td></tr><tr data-slug="entity" data-slugtype="member" id="entity" class="ngde"><td indexable="false" class="ngde">entity<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;E></code></td><td class="ngde"><p class="ngde">the entity in the feature the child belongs to</p></td></tr></tbody></table></div></td></tr></tbody></table></div></section><section class="ngde"><h2 id="properties" class="ngde">Properties<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#properties"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-properties-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-properties-table-name ngde">Name</th><th class="ng-doc-properties-table-type ngde">Type</th><th class="ng-doc-properties-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="[isProxy]" data-slugtype="member" id="[isProxy]" class="ngde"><td indexable="false" class="ngde">[isProxy]<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean</code></td><td class="ngde"></td></tr><tr data-slug="length" data-slugtype="member" id="length" class="ngde"><td indexable="false" class="ngde">length<div class="ng-doc-node-details ngde">implements <code class="ngde">ArrayLike</code></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"></td></tr><tr data-slug="rawArray" data-slugtype="member" id="rawArray" class="ngde"><td indexable="false" class="ngde">rawArray<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string[]</code></td><td class="ngde"></td></tr></tbody></table></div></section><section class="ngde"><h2 id="methods" class="ngde">Methods<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#methods"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="getatindex" class="ngde">getAtIndex()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#getatindex"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">Allows us to go after the data in the store based on the index of the array.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">getAtIndex</span>(<span class="hljs-attr ngde">index</span>: <span class="hljs-built_in ngde">number</span>): C;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">index<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><p class="ngde">the index into the rawArray that has the ID we will lookup in the entity.</p></td></tr></tbody></table></div><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">C</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="init" class="ngde">init()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#init"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">This initialized the class once it has been created. We do this so that we can test the class without having to worry about executable code in the constructor.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">init</span>(): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="tojson" class="ngde">toJSON()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/ArrayProxy#tojson"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">This primarily exist for testing so you can stringify the array and then parse it so that you get an array you can compare against instead of an object of type ArrayProxy that you can't do much with.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">toJSON</span>(): C[];
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">C[]</code></p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends n{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=o,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-page-api-smart-ngrx-classes-array-proxy"]],standalone:!0,features:[c([{provide:n,useExisting:e}]),t,r],decls:1,vars:0,template:function(a,y){a&1&&l(0,"ng-doc-page")},dependencies:[i],encapsulation:2,changeDetection:0});let s=e;return s})(),h=[{path:"",component:p,title:"ArrayProxy"}],m=h;export{p as DynamicComponent,m as default};
