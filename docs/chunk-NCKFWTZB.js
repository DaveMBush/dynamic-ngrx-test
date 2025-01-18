import{a as g}from"./chunk-MMZV4BMI.js";import{a as l}from"./chunk-YN5MAOKI.js";import"./chunk-KNGISJ5E.js";import"./chunk-QASFK7WI.js";import{a}from"./chunk-I6DDVD3S.js";import{X as D}from"./chunk-QKSOPKFJ.js";import"./chunk-76ETPZPA.js";import{Ba as r,Fa as d,Wa as p,sb as c}from"./chunk-COWQBK44.js";import{a as n,b as i,h as b}from"./chunk-TWZW5B45.js";var u=b(D());var v={title:"Setup Client Side",mdFile:"./index.md",order:4,category:g},e=v;var m=[];var N={},h=N;var R=`<h1 id="setup-client-side" href="demo-walkthrough/setup-client-side" headinglink="true" class="ngde">Setup Client Side<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="setup-client-side"></ng-doc-heading-anchor></h1><p class="ngde">Now that you've had a look at the data we are working with, let's take a look at how to get that data into our client code.</p><h2 id="global-registration" href="demo-walkthrough/setup-client-side" headinglink="true" class="ngde">Global Registration<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="global-registration"></ng-doc-heading-anchor></h2><p class="ngde">As you may remember from our <a href="/using-smart-ng-rx/global-registration" class="ngde">Global Registration</a> documentation, the first thing we need to do is to provide a global registration in our app.module.ts file directly or indirectly. Because we use standalone components for our App component, we put this code in our app.config.ts file.</p><p class="ngde">Simply add the <code class="ngde ng-doc-code-with-link"><a href="public-api/functions/public-api/provideSmartNgRX" class="ng-doc-code-anchor ngde">provideSmartNgRX</a></code> function to the providers array like we've done in <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/app.config.ts#L67" class="ngde">apps/demo/src/app/app.config.ts</a></p><h2 id="entity-registration" href="demo-walkthrough/setup-client-side" headinglink="true" class="ngde">Entity Registration<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="entity-registration"></ng-doc-heading-anchor></h2><p class="ngde">The next step we covered in our documentation was <a href="/using-smart-ng-rx/entity-registration" class="ngde">Entity Registration</a> which registers the features and entities that we want to use in our appliction.</p><p class="ngde">As we mentioned in the <a href="/demo-walkthrough/introduction" class="ngde">Introduction</a>, each of the tabs in our application follow a separate strategy. We also store state for the currently selected <code class="ngde">location</code> using a standard NgRX slice. Not everything is suitable for SmartNgRX.</p><p class="ngde">You can view the registration code for each of the tabs in the following locations. I'm providing links to the providers section and under each of those links, links to the entity definitions they reference</p><ul class="ngde"><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/app.routes.ts#L65-L75" class="ngde">Tree (Standard)</a><ul class="ngde"><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-standard/store/top/standard-top-definition.const.ts" class="ngde">standardTopDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-standard/store/locations/standard-locations-definition.ts" class="ngde">standardLocationsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-standard/store/department/standard-departments-definition.ts" class="ngde">standardDepartmentsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-standard/store/department-children/standard-department-children-definition.ts" class="ngde">standardDepartmentChildrenDefinition</a></li></ul></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/app.routes.ts#L83-L94" class="ngde">Tree (No Refresh)</a><ul class="ngde"><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-refresh/store/top/no-refresh-top-definition.const.ts" class="ngde">noRefreshTopDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-refresh/store/locations/no-refresh-locations-definition.ts" class="ngde">noRefreshLocationsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-refresh/store/department/no-refresh-departments-definition.ts" class="ngde">noRefreshDepartmentsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-refresh/store/department-children/no-refresh-department-children-definition.ts" class="ngde">noRefreshDepartmentChildrenDefinition</a></li></ul></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/app.routes.ts#L119-L129" class="ngde">Tree (No Remove)</a><ul class="ngde"><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-remove/store/top/no-remove-top-definition.const.ts" class="ngde">noRemoveTopDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-remove/store/locations/no-remove-locations-definition.ts" class="ngde">noRemoveLocationsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-remove/store/department/no-remove-departments-definition.ts" class="ngde">noRemoveDepartmentsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-remove/store/department-children/no-remove-department-children-definition.ts" class="ngde">noRemoveDepartmentChildrenDefinition</a></li></ul></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/app.routes.ts#L101-L112" class="ngde">Tree (No Dirty)</a><ul class="ngde"><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-dirty/store/top/no-dirty-top-definition.const.ts" class="ngde">noDirtyTopDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-dirty/store/locations/no-dirty-locations-definition.ts" class="ngde">noDirtyLocationsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-dirty/store/department/no-dirty-departments-definition.ts" class="ngde">noDirtyDepartmentsDefinition</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/routes/tree-no-dirty/store/department-children/department-child.selector.ts" class="ngde">noDirtyDepartmentChildrenDefinition</a></li></ul></li></ul><p class="ngde">One thing you'll notice is that each of the routes points to the same tables in the end. This is so we can illustrate the various ways SmartNgRX can be used. In your application, you'd have one definition per table.</p>`,s=class t extends a{constructor(){super();this.pageType="guide";this.pageContent=R;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/demo-walkthrough/setup-client-side/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/demo-walkthrough/setup-client-side/index.md";this.page=e;this.demoAssets=h}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=r({type:t,selectors:[["ng-doc-page-72r40pr7"]],features:[c([{provide:a,useExisting:t},m,e.providers??[]]),d],decls:1,vars:0,template:function(o,w){o&1&&p(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0})}},y=[i(n({},(0,u.isRoute)(e.route)?e.route:{}),{path:"",component:s,title:"Setup Client Side"})],G=y;export{s as PageComponent,G as default};
