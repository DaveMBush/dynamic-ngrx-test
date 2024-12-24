import{a as m}from"./chunk-7UBZMV52.js";import"./chunk-HBZWFD3Q.js";import{a as g}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a}from"./chunk-Q6N3FV5O.js";import{X as y}from"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as d,Ua as c,qb as l,za as s}from"./chunk-AKDYIXFS.js";import{a as r,b as i,h as k}from"./chunk-TWZW5B45.js";var u=k(y());var w={title:"MarkAndDeleteInit",mdFile:"./index.md",order:2,category:m},e=w;var h=[];var D={},p=D;var v='<h1 id="markanddeleteinit" href="using-smart-ng-rx/mark-and-delete/mark-and-delete-init" headinglink="true" class="ngde">MarkAndDeleteInit<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="markanddeleteinit"></ng-doc-heading-anchor></h1><p class="ngde">The core interface for the Mark and Delete feature is the <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/MarkAndDeleteInit" class="ng-doc-code-anchor ngde">MarkAndDeleteInit</a></code> interface. This interface is used to configure the Mark and Delete feature for a given entity.</p><p class="ngde">The <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/MarkAndDeleteInit" class="ng-doc-code-anchor ngde">MarkAndDeleteInit</a></code> interface has the following properties:</p><h2 id="markdirtytime" href="using-smart-ng-rx/mark-and-delete/mark-and-delete-init" headinglink="true" class="ngde">markDirtyTime<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="markdirtytime"></ng-doc-heading-anchor></h2><p class="ngde">The time in milliseconds to wait before marking a row as dirty. When a row is marked as dirty, and it is being used it will re-retrieve the row if <code class="ngde">markDirtyFetchesNew</code> is true. If <code class="ngde">markDirtyFetchesNew</code> is false, it will just reset the isDirty flag in the row. This is how we know the row is still in use, or not.</p><p class="ngde">If <code class="ngde">markDirtyTime</code> is set to -1, then the row will never be marked as dirty, and <code class="ngde">removeTime</code> will be ignored. However, when the API we have for processing websocket messages marks the row as dirty, it will request new data from the server, regardless of what you set this value to. This allows us to use the same mechanism to refresh data for automated refreshes and manual refreshes in response to websocket notification.</p><p class="ngde">If <code class="ngde">markAndDelete</code> is not set, it will default to 15 minutes.</p><h2 id="markdirtyfetchesnew" href="using-smart-ng-rx/mark-and-delete/mark-and-delete-init" headinglink="true" class="ngde">markDirtyFetchesNew<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="markdirtyfetchesnew"></ng-doc-heading-anchor></h2><p class="ngde">As mentioned above, if this is set to true, than any time a row is marked as dirty, the system will retrieve a new value from the server. Otherwise, it will just reset the dirty timeout internally.</p><p class="ngde">If <code class="ngde">markDirtyFetchesNew</code> is not set, it will default to <code class="ngde">true</code>.</p><h2 id="removetime" href="using-smart-ng-rx/mark-and-delete/mark-and-delete-init" headinglink="true" class="ngde">removeTime<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="removetime"></ng-doc-heading-anchor></h2><p class="ngde">The time in milliseconds to wait before removing a row from the store. <code class="ngde">removeTime</code> must be greater than <code class="ngde">markDirtyTime</code>. If it is not, it will automatically set to twice <code class="ngde">markDirtyTime</code>.</p><p class="ngde">If <code class="ngde">removeTime</code> is not set, it will default to 30 minutes.</p><h2 id="runinterval" href="using-smart-ng-rx/mark-and-delete/mark-and-delete-init" headinglink="true" class="ngde">runInterval<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="runinterval"></ng-doc-heading-anchor></h2><p class="ngde">The time in milliseconds that determines how often the system looks at the rows to see if they need to be marked dirty or removed. If this is not set, it will default to one minute.</p><p class="ngde"><code class="ngde">runInterval</code> is only recognized at the global level. If you want to change it, you must change it at the global level.</p>',o=class t extends a{constructor(){super();this.pageType="guide";this.pageContent=v;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/mark-and-delete/mark-and-delete-init/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/using-smart-ng-rx/mark-and-delete/mark-and-delete-init/index.md";this.page=e;this.demoAssets=p}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=s({type:t,selectors:[["ng-doc-page-91r3yxnh"]],features:[l([{provide:a,useExisting:t},h,e.providers??[]]),d],decls:1,vars:0,template:function(n,x){n&1&&c(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0})}},N=[i(r({},(0,u.isRoute)(e.route)?e.route:{}),{path:"",component:o,title:"MarkAndDeleteInit"})],V=N;export{o as PageComponent,V as default};
