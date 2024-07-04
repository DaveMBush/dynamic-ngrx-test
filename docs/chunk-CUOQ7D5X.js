import{a as c}from"./chunk-FVRGWNNR.js";import"./chunk-VM5ESKQM.js";import{a as s}from"./chunk-C6HCTMWR.js";import{L as n,Qa as o,Ra as l,ia as d,va as i}from"./chunk-O5TFSMGJ.js";import"./chunk-JPKLQMV2.js";var g='<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Interface">Interface</span></div><h1 id="smartngrxrowbase" class="ngde">SmartNgRXRowBase<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/interfaces/SmartNgRXRowBase#smartngrxrowbase"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This interface should be used by any interface that represents an entity in the store that uses the Smart NgRX library.</p></section><section class="ngde"><h2 id="properties" class="ngde">Properties<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/interfaces/SmartNgRXRowBase#properties"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-properties-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-properties-table-name ngde">Name</th><th class="ng-doc-properties-table-type ngde">Type</th><th class="ng-doc-properties-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="isDirty" data-slugtype="member" id="isDirty" class="ngde"><td indexable="false" class="ngde">isDirty<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><p class="ngde">Flag that indicates that the row is dirty. This is used internally by the mark and delete functionality.</p></td></tr><tr data-slug="isEditing" data-slugtype="member" id="isEditing" class="ngde"><td indexable="false" class="ngde">isEditing<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><p class="ngde">This flag indicates that the row is currently being edited this is used internally.</p></td></tr><tr data-slug="isLoading" data-slugtype="member" id="isLoading" class="ngde"><td indexable="false" class="ngde">isLoading<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><p class="ngde">Flag that indicates that the row is a placeholder. You might want to use this to indicate that the row is being loaded by, for example, displaying skeleton rows via CSS.</p></td></tr><tr data-slug="parentId" data-slugtype="member" id="parentId" class="ngde"><td indexable="false" class="ngde">parentId<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string | undefined</code></td><td class="ngde"><p class="ngde">We use parentId to store the parentId of this row while we are adding it and to indicate that we are in adding mode. This is used internally.</p></td></tr></tbody></table></div></section>',p=(()=>{let e=class e extends s{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n({type:e,selectors:[["ng-doc-page-api-smart-ngrx-interfaces-smart-ng-rx-row-base"]],standalone:!0,features:[o([{provide:s,useExisting:e}]),d,l],decls:1,vars:0,template:function(a,f){a&1&&i(0,"ng-doc-page")},dependencies:[c],encapsulation:2,changeDetection:0});let t=e;return t})(),h=[{path:"",component:p,title:"SmartNgRXRowBase"}],b=h;export{p as DynamicComponent,b as default};