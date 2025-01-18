import{a as i}from"./chunk-YN5MAOKI.js";import"./chunk-KNGISJ5E.js";import"./chunk-QASFK7WI.js";import{a as s}from"./chunk-I6DDVD3S.js";import"./chunk-QKSOPKFJ.js";import"./chunk-76ETPZPA.js";import{Ba as n,Fa as t,Wa as l,sb as c}from"./chunk-COWQBK44.js";import"./chunk-TWZW5B45.js";var o=`<p class="ngde">Class that represents an array that is not fully loaded from the server but loads the data as it is needed.</p><h2 id="constructor" href="internal-api/classes/internal-api/VirtualArray" headinglink="true" class="ngde">Constructor<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="constructor"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">The constructor of the virtual array that takes the length of the array as a parameter.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">constructor</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">	array: <a href="internal-api/interfaces/internal-api/VirtualArrayContents" class="ng-doc-code-anchor ngde">VirtualArrayContents</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">	private parentActionService: <a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"><a href="public-api/interfaces/public-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">	parentId: string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">	childField: string</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): <a href="internal-api/classes/internal-api/VirtualArray" class="ng-doc-code-anchor ngde">VirtualArray</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">P</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> C</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="array" data-slugtype="member" id="array" class="ngde"><td indexable="false" class="ngde">array<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/VirtualArrayContents" class="ng-doc-code-anchor ngde">VirtualArrayContents</a></code></td><td class="ngde"><p class="ngde">@param array array that contains the available IDs</p></td></tr><tr data-slug="parentActionService" data-slugtype="member" id="parentActionService" class="ngde"><td indexable="false" class="ngde">parentActionService<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/ActionService" class="ng-doc-code-anchor ngde">ActionService</a>&#x3C;<a href="public-api/interfaces/public-api/SmartNgRXRowBase" class="ng-doc-code-anchor ngde">SmartNgRXRowBase</a>></code></td><td class="ngde"><p class="ngde">@param parentActionService the action service of the parent row</p></td></tr><tr data-slug="parentId" data-slugtype="member" id="parentId" class="ngde"><td indexable="false" class="ngde">parentId<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">@param parentId the id of the parent row</p></td></tr><tr data-slug="childField" data-slugtype="member" id="childField" class="ngde"><td indexable="false" class="ngde">childField<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">@param childField the fieldName in the parent row that holds the children for this array</p></td></tr></tbody></table></div></td></tr></tbody></table></div><h2 id="properties" href="internal-api/classes/internal-api/VirtualArray" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="fetchedIndexes" data-slugtype="member" id="fetchedIndexes"><td indexable="false" class="ngde"><span class="ngde">fetchedIndexes</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean[]</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="length" data-slugtype="member" id="length"><td indexable="false" class="ngde"><span class="ngde">length</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="rawArray" data-slugtype="member" id="rawArray"><td indexable="false" class="ngde"><span class="ngde">rawArray</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string[]</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr></tbody></table></div><h2 id="methods" href="internal-api/classes/internal-api/VirtualArray" headinglink="true" class="ngde">Methods<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="methods"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="dispatchloadbyindexes" href="internal-api/classes/internal-api/VirtualArray" headinglink="true" class="ngde">dispatchLoadByIndexes()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="dispatchloadbyindexes"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">This is used internally by the Proxy get handler</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">dispatchLoadByIndexes</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(parentId: string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> childField: string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> index: number): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">parentId<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">@param parentId the id of the parent row</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">childField<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">@param childField the fieldName in the parent row that holds the children for this array</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">index<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><p class="ngde">@param index the index to load</p></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="getidatindex" href="internal-api/classes/internal-api/VirtualArray" headinglink="true" class="ngde">getIdAtIndex()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="getidatindex"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">returns the id at the given index without fetching the id from the server. if the id does not exist, an ID based on the index is returned.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">getIdAtIndex</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(index: number): string </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">|</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> undefined</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">index<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><p class="ngde">@param index the index to get the id at</p></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">string | undefined</code> <span class="ngde">-</span><p class="ngde">the id at the given index</p></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="refetchindexes" href="internal-api/classes/internal-api/VirtualArray" headinglink="true" class="ngde">refetchIndexes()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="refetchindexes"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Tells the virtual array to refetch the indexes the next time an element is requested.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">refetchIndexes</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div>`,d=class e extends s{constructor(){super();this.pageType="api";this.pageContent=o;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/selector/virtual-array.class.ts?message=docs(): describe your changes here...#L9";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/selector/virtual-array.class.ts#L9"}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=n({type:e,selectors:[["ng-doc-page-a7dq9z02"]],features:[c([{provide:s,useExisting:e}]),t],decls:1,vars:0,template:function(a,p){a&1&&l(0,"ng-doc-page")},dependencies:[i],encapsulation:2,changeDetection:0})}},g=[{path:"",component:d,title:"VirtualArray"}],f=g;export{d as PageComponent,f as default};
