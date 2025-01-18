import{a as g}from"./chunk-MMZV4BMI.js";import{a as l}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as r}from"./chunk-Q6N3FV5O.js";import{X as f}from"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as d,Ua as c,qb as h,za as i}from"./chunk-AKDYIXFS.js";import{a as n,b as s,h as w}from"./chunk-TWZW5B45.js";var u=w(f());var b={title:"Retrieving Data",mdFile:"./index.md",order:3,category:g},e=b;var p=[];var D={},m=D;var y=`<h1 id="retrieving-data" href="demo-walkthrough/retrieving-data" headinglink="true" class="ngde">Retrieving Data<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="retrieving-data"></ng-doc-heading-anchor></h1><p class="ngde">Now that we understand the structure of the database, let's look at how we retrieve data from the database using our server code.</p><p class="ngde">We are using NestJS to create our server code in combination with Prisma to interact with the database. NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses modern JavaScript and is built with TypeScript. Prisma is a modern database toolkit that makes it easy to interact with databases in a type-safe way.</p><p class="ngde">You can find the server code in <a href="https://github.com/DaveMBush/SmartNgRX/tree/main/apps/server/src/app" class="ngde">apps/server/src/app</a> directory.</p><p class="ngde">We won't go into the details of how to set up a NestJS server or how to use Prisma in this walkthrough. Instead, we'll focus on how we retrieve data from the database.</p><h2 id="retrieving-top-level-data" href="demo-walkthrough/retrieving-data" headinglink="true" class="ngde">Retrieving Top Level Data<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="retrieving-top-level-data"></ng-doc-heading-anchor></h2><p class="ngde">Remember that our Locations table is our top level table. To load it in a way that SmartNgRX can use, we need to create a pseudo table. In our code, we name this pseudo table <code class="ngde">top</code>. We'll come back to this later when we look at the client code. For now, we need to remember what we are dealing with so we know why we are doing things the way we are on the server.</p><p class="ngde">On the server, look at the code in <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/server/src/app/top/top.controller.ts" class="ngde">apps/server/src/app/top/top.controller.ts</a>. You'll see that we have one method in the controller that retrieves all the location ids from the locations table and returns them in a pseudo row.</p><h2 id="retrieving-child-data" href="demo-walkthrough/retrieving-data" headinglink="true" class="ngde">Retrieving Child Data<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="retrieving-child-data"></ng-doc-heading-anchor></h2><h3 id="locations" href="demo-walkthrough/retrieving-data" headinglink="true" class="ngde">Locations<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="locations"></ng-doc-heading-anchor></h3><p class="ngde">Locations represents a straight forward way of retrieving child data. Look at the code in <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/server/src/app/locations/locations.controller.ts#L21-L49" class="ngde">apps/server/src/app/locations/locations.controller.ts</a>. Here, you will see the that we retrieve all the fields from a row as well as all the child ids for the departments that are associated with the location.</p><h3 id="departments" href="demo-walkthrough/retrieving-data" headinglink="true" class="ngde">Departments<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="departments"></ng-doc-heading-anchor></h3><p class="ngde">Retrieving the departments data is similar except that this uses the <code class="ngde">VirtualArrayContent</code> structure we mention in the main documentation. So, when we retrieve a row, we also need to retrieve the virtual array content. You can view the code for this here: <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/server/src/app/departments/department.controller.ts#L61-L75" class="ngde">apps/server/src/app/departments/departments.controller.ts</a>.</p><p class="ngde">You'll notice that <code class="ngde">getByIds</code> ends up calling <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/server/src/app/departments/department.controller.ts#L210-L233" class="ngde">getDepartmentChildrenIndexes(...)</a> which then calls <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/server/src/app/departments/department.controller.ts#L188-L208" class="ngde">getBatchIndexes(...)</a>. This is where we retrieve the IDs for the first 500 rows of the child tables.</p><p class="ngde">In this way, we allow the server to provide the first 500 rows of the child tables and then we can later <a href="https://github.com/DaveMBush/SmartNgRX/blob/v-next/apps/server/src/app/departments/department.controller.ts#L113-L150" class="ngde">retrieve the remaining rows as we ask for them.</a></p><h3 id="an-alternate-way-to-retrieve-departments" href="demo-walkthrough/retrieving-data" headinglink="true" class="ngde">An Alternate Way to Retrieve Departments<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="an-alternate-way-to-retrieve-departments"></ng-doc-heading-anchor></h3><p class="ngde">We could have done all this same work on the server in the EffectsService that retrieves the Departments, but we chose to do it in the controller because, in most case, doing the work on the server will have better performance. It will also provide greater flexibility as we embellish the server to cover more complex scenarios.</p><h3 id="retrieving-the-remaining-tables" href="demo-walkthrough/retrieving-data" headinglink="true" class="ngde">Retrieving The Remaining Tables<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="retrieving-the-remaining-tables"></ng-doc-heading-anchor></h3><p class="ngde">The remaining tables retrieve data similar to how we retrieved data for locations. You can view the code for these in their respective controller files.</p><ng-doc-blockquote class="ngde"><p class="ngde">[!NOTE] While the "standard" way of retrieving data from a server uses a GET method, we use a POST. This gives us greater flexibility in how we retrieve data. We can pass in as many parameters to the server as we need without being concerned about how long the resulting URL is.</p></ng-doc-blockquote>`,o=class t extends r{constructor(){super();this.pageType="guide";this.pageContent=y;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/demo-walkthrough/retrieving-data/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/demo-walkthrough/retrieving-data/index.md";this.page=e;this.demoAssets=m}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=i({type:t,selectors:[["ng-doc-page-unln72mn"]],features:[h([{provide:r,useExisting:t},p,e.providers??[]]),d],decls:1,vars:0,template:function(a,k){a&1&&c(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0})}},N=[s(n({},(0,u.isRoute)(e.route)?e.route:{}),{path:"",component:o,title:"Retrieving Data"})],W=N;export{o as PageComponent,W as default};