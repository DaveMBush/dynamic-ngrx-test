import{a as o}from"./chunk-YN5MAOKI.js";import"./chunk-KNGISJ5E.js";import"./chunk-QASFK7WI.js";import{a}from"./chunk-I6DDVD3S.js";import"./chunk-QKSOPKFJ.js";import"./chunk-76ETPZPA.js";import{Ba as d,Fa as n,Wa as i,sb as l}from"./chunk-COWQBK44.js";import"./chunk-TWZW5B45.js";var c='<p class="ngde">This interface should be used by any interface that represents an entity in the store that uses the Smart NgRX library.</p><h2 id="properties" href="public-api/interfaces/public-api/SmartNgRXRowBase" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="id" data-slugtype="member" id="id"><td indexable="false" class="ngde"><span class="ngde">id</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">All rows need an id field that is a string</p></td></tr><tr class="ngde" data-slug="isDirty" data-slugtype="member" id="isDirty"><td indexable="false" class="ngde"><span class="ngde">isDirty</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Flag that indicates that the row is dirty. This is used internally by the mark and delete functionality.</p></td></tr><tr class="ngde" data-slug="isEditing" data-slugtype="member" id="isEditing"><td indexable="false" class="ngde"><span class="ngde">isEditing</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">This flag indicates that the row is currently being edited this is used internally.</p></td></tr><tr class="ngde" data-slug="isLoading" data-slugtype="member" id="isLoading"><td indexable="false" class="ngde"><span class="ngde">isLoading</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Flag that indicates that the row is a placeholder. You might want to use this to indicate that the row is being loaded by, for example, displaying skeleton rows via CSS.</p></td></tr><tr class="ngde" data-slug="parentId" data-slugtype="member" id="parentId"><td indexable="false" class="ngde"><span class="ngde">parentId</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">We use parentId to store the parentId of this row while we are adding it and to indicate that we are in adding mode. This is used internally.</p></td></tr></tbody></table></div>',t=class e extends a{constructor(){super();this.pageType="api";this.pageContent=c;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/types/smart-ngrx-row-base.interface.ts?message=docs(): describe your changes here...#L6";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/types/smart-ngrx-row-base.interface.ts#L6"}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=d({type:e,selectors:[["ng-doc-page-d4qm42p3"]],features:[l([{provide:a,useExisting:e}]),n],decls:1,vars:0,template:function(s,h){s&1&&i(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0})}},r=[{path:"",component:t,title:"SmartNgRXRowBase"}],y=r;export{t as PageComponent,y as default};
