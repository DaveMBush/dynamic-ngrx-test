import{a as m}from"./chunk-3VZM5QD4.js";import{a as p}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a}from"./chunk-RVP6FOET.js";import{L as d,Qa as l,Ra as g,Rb as w,ia as c,va as i}from"./chunk-ECT43PI4.js";import{a as n,b as r,g as D}from"./chunk-JPKLQMV2.js";var f=D(w());var x={title:"Deleting Rows",mdFile:"./index.md",order:10,category:m},t=x;var h=[];var C={},u=C;var R=`<h1 id="deleting-rows" class="ngde">Deleting Rows<a title="Link to heading" class="ng-doc-header-link ngde" href="/demo-walkthrough/deleting-rows#deleting-rows"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">Last, of course, is the ability to delete rows. Delete is implemented for Departments and DepartmentChildren and is triggered by the "Delete" button in the <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/components/tree/tree.component.html#L121-L130" class="ngde">tree.component.html</a> template. This calls the <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/components/tree/tree.component.ts#L90-L93" class="ngde">deleteNode method in the tree.component.ts</a> which calls down into the <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/components/tree/tree-component.service.ts#L99-L101" class="ngde">deleteNode() method of the TreeComponentService</a> which calls the delete method on the node.</p><p class="ngde">That's all you have to do to delete a node. All the real work is handled by SmartNgRX.</p><p class="ngde"><code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/CustomProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">CustomProxy</a></code> is a class that is part of SmartNgRX. If you use SmartNgRX, the row you are working with is a <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/CustomProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">CustomProxy</a></code> object. You may need to cast your row to a <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/CustomProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">CustomProxy</a></code>, as we have, to access the <code class="ngde">delete</code> method.</p>`,N=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=R,this.page=t,this.demoAssets=u}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-page-demo-walkthrough-deleting-rows"]],standalone:!0,features:[l([{provide:a,useExisting:e},h,t.providers??[]]),c,g],decls:1,vars:0,template:function(s,b){s&1&&i(0,"ng-doc-page")},dependencies:[p],encapsulation:2,changeDetection:0});let o=e;return o})(),P=[r(n({},(0,f.isRoute)(t.route)?t.route:{}),{path:"",component:N,title:"Deleting Rows"})],F=P;export{N as DynamicComponent,F as default};