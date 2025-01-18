import{a as p}from"./chunk-MMZV4BMI.js";import{a as l}from"./chunk-ICC3I7U3.js";import"./chunk-3NO74SQX.js";import"./chunk-A7763QJH.js";import{a as n}from"./chunk-JHHDKBNU.js";import{X as y}from"./chunk-4NKWSBMZ.js";import"./chunk-PTJD77X5.js";import{Pa as i,S as c,lb as g,mb as m,za as d}from"./chunk-UDQB7DFD.js";import{a,b as s,h as w}from"./chunk-TWZW5B45.js";var f=w(y());var N={title:"Deleting Rows",mdFile:"./index.md",order:10,category:p},e=N;var h=[];var R={},u=R;var P=`<h1 id="deleting-rows" href="demo-walkthrough/deleting-rows" headinglink="true" class="ngde">Deleting Rows<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="deleting-rows"></ng-doc-heading-anchor></h1><p class="ngde">Last, of course, is the ability to delete rows. Delete is implemented for Departments and DepartmentChildren and is triggered by the "Delete" button in the <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/demo/src/app/shared/components/tree/tree.component.html#L127-L134" class="ngde">tree.component.html</a> template. This calls the <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/demo/src/app/shared/components/tree/tree.component.ts#L94-L96" class="ngde">deleteNode method in the tree.component.ts</a> which calls down into the <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/demo/src/app/shared/components/tree/tree-component.service.ts#L114-L119" class="ngde">deleteNode() method of the TreeComponentService</a> which calls the <code class="ngde">delete()</code> method on the node.</p><p class="ngde">That's all you have to do to delete a node. All the real work is handled by SmartNgRX and your <code class="ngde ng-doc-code-with-link"><a href="api/classes/smart-ngrx/EffectService" class="ng-doc-code-anchor ngde">EffectService</a></code>.</p><p class="ngde">In order to access the <code class="ngde">delete()</code> method of the <code class="ngde ng-doc-code-with-link"><a href="api/classes/smart-ngrx/RowProxy" class="ng-doc-code-anchor ngde">RowProxy</a></code> we declare the row as implementing the <code class="ngde ng-doc-code-with-link"><a href="api/interfaces/smart-ngrx/RowProxyDelete" class="ng-doc-code-anchor ngde">RowProxyDelete</a></code> interface <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/demo/src/app/shared/components/tree/common-source-node.interface.ts" class="ngde">in our CommonSourceNode interface</a>. If you use SmartNgRX, the row you are working with implements the <code class="ngde ng-doc-code-with-link"><a href="api/interfaces/smart-ngrx/RowProxyDelete" class="ng-doc-code-anchor ngde">RowProxyDelete</a></code> interface.</p>`,r=class o extends n{constructor(){super();this.pageType="guide";this.pageContent=P;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/demo-walkthrough/deleting-rows/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/demo-walkthrough/deleting-rows/index.md";this.page=e;this.demoAssets=u}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=c({type:o,selectors:[["ng-doc-page-q4ro85vv"]],standalone:!0,features:[g([{provide:n,useExisting:o},h,e.providers??[]]),d,m],decls:1,vars:0,template:function(t,b){t&1&&i(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0})}},x=[s(a({},(0,f.isRoute)(e.route)?e.route:{}),{path:"",component:r,title:"Deleting Rows"})],G=x;export{r as PageComponent,G as default};