import{a as o}from"./chunk-YN5MAOKI.js";import"./chunk-KNGISJ5E.js";import"./chunk-QASFK7WI.js";import{a}from"./chunk-I6DDVD3S.js";import"./chunk-QKSOPKFJ.js";import"./chunk-76ETPZPA.js";import{Ba as d,Fa as t,Wa as c,sb as l}from"./chunk-COWQBK44.js";import"./chunk-TWZW5B45.js";var i=`<p class="ngde">RowProxy wraps the row so we can intercept changes to it and fire off the appropriate actions to update the store and the server.</p><p class="ngde">Since proxying the row directly will cause the setter to throw an error when the NgRX rules are turned on that disallow mutating the row directly, we need to wrap the row in our own class that uses the Proxy class to handle the updates. By casting the RowProxy to type T (above) the rest of our code still believes it is working with the original row.</p><h2 id="constructor" href="internal-api/classes/internal-api/RowProxy" headinglink="true" class="ngde">Constructor<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="constructor"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">This is the constructor for the RowProxy class.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">constructor</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">	row: </span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">	private service: <a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">T</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">	parentService: <a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"><a href="public-api/interfaces/public-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): <a href="internal-api/classes/internal-api/RowProxy" class="ng-doc-code-anchor ngde">RowProxy</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">T</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="row" data-slugtype="member" id="row" class="ngde"><td indexable="false" class="ngde">row<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">T</code></td><td class="ngde"><p class="ngde">@param row The row to create the custom proxy for</p></td></tr><tr data-slug="service" data-slugtype="member" id="service" class="ngde"><td indexable="false" class="ngde">service<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a>&#x3C;T></code></td><td class="ngde"><p class="ngde">@param service The service that will handle updating the row</p></td></tr><tr data-slug="parentService" data-slugtype="member" id="parentService" class="ngde"><td indexable="false" class="ngde">parentService<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a>&#x3C;<a href="public-api/interfaces/public-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a>></code></td><td class="ngde"><p class="ngde">@param parentService The service that will handle updating the parent row</p></td></tr></tbody></table></div></td></tr></tbody></table></div><h2 id="properties" href="internal-api/classes/internal-api/RowProxy" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="changes" data-slugtype="member" id="changes"><td indexable="false" class="ngde"><span class="ngde">changes</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Record&#x3C;string | symbol, unknown></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="record" data-slugtype="member" id="record"><td indexable="false" class="ngde"><span class="ngde">record</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Record&#x3C;string | symbol, unknown></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr></tbody></table></div><h2 id="methods" href="internal-api/classes/internal-api/RowProxy" headinglink="true" class="ngde">Methods<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="methods"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="delete" href="internal-api/classes/internal-api/RowProxy" headinglink="true" class="ngde">delete()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="delete"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">implements <code class="ngde ng-doc-code-with-link"><a href="public-api/interfaces/public-api/RowProxyDelete" class="ng-doc-code-anchor ngde">RowProxyDelete</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Initiates delete of this object from the server which will also optimistically update the store</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">delete</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="getrealrow" href="internal-api/classes/internal-api/RowProxy" headinglink="true" class="ngde">getRealRow()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="getrealrow"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">This retrieves the backing row for this proxy</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">getRealRow</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): </span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">T</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">T</code> <span class="ngde">-</span><p class="ngde">the backing row for this proxy</p></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="tojson" href="internal-api/classes/internal-api/RowProxy" headinglink="true" class="ngde">toJSON()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="tojson"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">When we stringify this object, it needs to stringify the real row and any changes we've made to it.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">toJSON</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): </span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">T</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> &#x26;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Record</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">string </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">|</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> symbol</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> unknown</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">T &#x26; Record&#x3C;string | symbol, unknown></code> <span class="ngde">-</span><p class="ngde">the real row with any changes we've made to it</p></div></td></tr></tbody></table></div>`,n=class e extends a{constructor(){super();this.pageType="api";this.pageContent=i;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/row-proxy/row-proxy.class.ts?message=docs(): describe your changes here...#L22";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/row-proxy/row-proxy.class.ts#L22"}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=d({type:e,selectors:[["ng-doc-page-wzkgpu4i"]],features:[l([{provide:a,useExisting:e}]),t],decls:1,vars:0,template:function(s,h){s&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0})}},g=[{path:"",component:n,title:"RowProxy"}],B=g;export{n as PageComponent,B as default};
