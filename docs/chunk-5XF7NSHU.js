import{a as p}from"./chunk-HBZWFD3Q.js";import{a as l}from"./chunk-YN5MAOKI.js";import"./chunk-KNGISJ5E.js";import"./chunk-QASFK7WI.js";import{a as n}from"./chunk-I6DDVD3S.js";import{X as D}from"./chunk-QKSOPKFJ.js";import"./chunk-76ETPZPA.js";import{Ba as i,Fa as c,Wa as d,sb as g}from"./chunk-COWQBK44.js";import{a,b as s,h as y}from"./chunk-TWZW5B45.js";var u=y(D());var N={title:"Error Handling",mdFile:"./index.md",order:14,category:p},e=N;var m=[];var P={},h=P;var w=`<h1 id="error-handling" href="using-smart-ng-rx/error-handling" headinglink="true" class="ngde">Error Handling<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="error-handling"></ng-doc-heading-anchor></h1><p class="ngde">From time to time, SmartNgRX will catch errors and fail gracefully. But, you will probably still want to know they occurred.</p><p class="ngde">For this, we've created a service token that you can use to register your own class which we will use to notify your code of the error.</p><p class="ngde">The token you'll need to import is <code class="ngde ng-doc-code-with-link"><a href="public-api/variables/public-api/smartNgRXErrorHandlerToken" class="ng-doc-code-anchor ngde">smartNgRXErrorHandlerToken</a></code> and you'll want your class to implement <code class="ngde ng-doc-code-with-link"><a href="public-api/interfaces/public-api/SmartNgRXErrorHandler" class="ng-doc-code-anchor ngde">SmartNgRXErrorHandler</a></code> which has one method <code class="ngde ng-doc-code-with-link"><a href="internal-api/functions/internal-api/handleError" class="ng-doc-code-anchor ngde">handleError</a></code>.</p><p class="ngde"><code class="ngde ng-doc-code-with-link"><a href="internal-api/functions/internal-api/handleError" class="ng-doc-code-anchor ngde">handleError</a></code> takes two arguments:</p><ul class="ngde"><li class="ngde"><code class="ngde">message</code>: A string that describes where the error originated</li><li class="ngde"><code class="ngde">error</code>: The error that occurred as caught by the exception handler</li></ul>`,t=class o extends n{constructor(){super();this.pageType="guide";this.pageContent=w;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/error-handling/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/using-smart-ng-rx/error-handling/index.md";this.page=e;this.demoAssets=h}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=i({type:o,selectors:[["ng-doc-page-2y2lom5x"]],features:[g([{provide:n,useExisting:o},m,e.providers??[]]),c],decls:1,vars:0,template:function(r,C){r&1&&d(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0})}},R=[s(a({},(0,u.isRoute)(e.route)?e.route:{}),{path:"",component:t,title:"Error Handling"})],G=R;export{t as PageComponent,G as default};