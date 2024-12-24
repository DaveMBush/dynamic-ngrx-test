import{a as r}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as s}from"./chunk-Q6N3FV5O.js";import"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as i,Ua as d,qb as o,za as n}from"./chunk-AKDYIXFS.js";import"./chunk-TWZW5B45.js";var c='<p class="ngde">this is the interface used to initialize the mark and delete functionality at the global or feature level</p><h2 id="properties" href="internal-api/interfaces/internal-api/MarkAndDeleteInit" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="markDirtyFetchesNew" data-slugtype="member" id="markDirtyFetchesNew"><td indexable="false" class="ngde"><span class="ngde">markDirtyFetchesNew</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">If this is set to true, than any time a row is marked as dirty the system will retrieve a new value from the server. Otherwise, it will just reset the dirty timeout internally.</p></td></tr><tr class="ngde" data-slug="markDirtyTime" data-slugtype="member" id="markDirtyTime"><td indexable="false" class="ngde"><span class="ngde">markDirtyTime</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">The time in milliseconds to wait before marking a row as dirty. When a row is marked as dirty, and it is being used it will re-retrieve the row if <code class="ngde">markDirtyFetchesNew</code> is true. If <code class="ngde">markDirtyFetchesNew</code> is false, it will just reset the isDirty flag in the row. his is how we know the row is still in use, or not.</p><p class="ngde">If <code class="ngde">markDirtyTime</code> is set to -1, then the row will never be marked as dirty, and <code class="ngde">removeTime</code> will be ignored. If you manually mark a row as dirty (coming soon), the system will assume you want to refetch the row from the server, regardless of what you set here. This allows us to use the same mechanism to refresh data for automated refreshes and manual refreshes in response to websocket notification.</p><p class="ngde">If <code class="ngde">markAndDelete</code> is not set, it will default to 15 minutes.</p></td></tr><tr class="ngde" data-slug="removeTime" data-slugtype="member" id="removeTime"><td indexable="false" class="ngde"><span class="ngde">removeTime</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">The time in milliseconds to wait before removing a row from the store. <code class="ngde">removeTime</code> must be greater than <code class="ngde">markDirtyTime</code>. If it is not, it will automatically set to twice <code class="ngde">markDirtyTime</code>.</p></td></tr><tr class="ngde" data-slug="runInterval" data-slugtype="member" id="runInterval"><td indexable="false" class="ngde"><span class="ngde">runInterval</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">The time in milliseconds that determines how often the system looks at the rows to see if they need to be marked dirty or removed. If this is not set, it will default to one minute.</p><p class="ngde">runInterval is only recognized at the global level. If you want to change it, you must change it at the global level.</p></td></tr></tbody></table></div>',a=class e extends s{constructor(){super();this.pageType="api";this.pageContent=c;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/types/mark-and-delete-init.interface.ts?message=docs(): describe your changes here...#L5";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/types/mark-and-delete-init.interface.ts#L5"}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=n({type:e,selectors:[["ng-doc-page-lg5z7ayo"]],features:[o([{provide:s,useExisting:e}]),i],decls:1,vars:0,template:function(t,p){t&1&&d(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0})}},g=[{path:"",component:a,title:"MarkAndDeleteInit"}],b=g;export{a as PageComponent,b as default};
