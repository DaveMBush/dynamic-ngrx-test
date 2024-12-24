import{a as g}from"./chunk-HBZWFD3Q.js";import{a as h}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as i}from"./chunk-Q6N3FV5O.js";import{X as D}from"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as d,Ua as c,qb as l,za as s}from"./chunk-AKDYIXFS.js";import{a as n,b as r,h as y}from"./chunk-TWZW5B45.js";var f=y(D());var w={title:"Child Fields",mdFile:"./index.md",order:10,category:g},e=w;var p=[];var P={},m=P;var N=`<h1 id="child-fields" href="using-smart-ng-rx/child-fields" headinglink="true" class="ngde">Child Fields<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="child-fields"></ng-doc-heading-anchor></h1><p class="ngde">We've discussed the concept of a child field multiple times now, but we haven't gone into a lot of detail about what they are or how they work.</p><p class="ngde">A child field is a field that is defined on a component that points to other rows in another entity. It does this either by using a list of ids that we then use to fetch the rows from the entity. If we don't yet have the rows in the store, Smart NgRX will automatically fetch them for you.</p><p class="ngde">There are two types of child fields. The first type is just a list of ids. An array of strings. For most situations this is sufficient. But if you have a long list of children, you might want to load the IDs into the array as you need them. For this you need a Child field of type <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/PartialArrayDefinition" class="ng-doc-code-anchor ngde">PartialArrayDefinition</a></code>. <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/PartialArrayDefinition" class="ng-doc-code-anchor ngde">PartialArrayDefinition</a></code> holds a list of indexes, the length of elements that will ultimately be in the array and the start position in the ultimate array that the indexes that are returned to SmartNgRX will be placed at.</p><p class="ngde">SmartNgRX is smart enough to know that if you are using an Array, you have all the IDs you will ever need. If you return a <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/PartialArrayDefinition" class="ng-doc-code-anchor ngde">PartialArrayDefinition</a></code> from your <code class="ngde ng-doc-code-with-link"><a href="internal-api/classes/internal-api/EffectService" class="ng-doc-code-anchor ngde">EffectService</a></code>, SmartNgRX will know that you are using a virtual array and will automatically fetch the rows from the server as you need them.</p><p class="ngde">When you retrieve a row, you can either provide a <code class="ngde ng-doc-code-with-link"><a href="internal-api/interfaces/internal-api/PartialArrayDefinition" class="ng-doc-code-anchor ngde">PartialArrayDefinition</a></code> that has the first N IDs in the array already provided in the <code class="ngde">indexes</code> property, or you can provide an empty array and just provide the ultimate length of the array. Which you choose will depend on how soon you'll need those IDs and how expensive it will be to return them as part of the request for the row.</p><p class="ngde">This information will be important later when we discuss <a href="/using-smart-ng-rx/crud-support/retrieving" class="ngde">Retrieving Rows</a>.</p>`,a=class t extends i{constructor(){super();this.pageType="guide";this.pageContent=N;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/child-fields/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/using-smart-ng-rx/child-fields/index.md";this.page=e;this.demoAssets=m}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=s({type:t,selectors:[["ng-doc-page-66v6ohf7"]],features:[l([{provide:i,useExisting:t},p,e.providers??[]]),d],decls:1,vars:0,template:function(o,C){o&1&&c(0,"ng-doc-page")},dependencies:[h],encapsulation:2,changeDetection:0})}},v=[r(n({},(0,f.isRoute)(e.route)?e.route:{}),{path:"",component:a,title:"Child Fields"})],G=v;export{a as PageComponent,G as default};
