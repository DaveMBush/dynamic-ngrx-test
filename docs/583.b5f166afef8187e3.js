"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[583],{583:(m,i,e)=>{e.r(i),e.d(i,{DynamicComponent:()=>c,default:()=>f});var o=e(8965),d=e(1514),l=e(6925);const t={title:"Entity Definitions",mdFile:"./index.md",order:4,category:e(493).Z},p=[],g={};var s=e(5825);let c=(()=>{class n extends o.a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent='<h1 id="entity-definitions" class="ngde">Entity Definitions<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/entity-definitions#entity-definitions"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">As mentioned earlier, most of NgRX is hidden from you by Smart NgRX. The first API that allows us to do this is the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/provideSmartFeatureEntities" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideSmartFeatureEntities</a></code> function. This is a functional provider that allows us to register all the entities for a feature.</p><p class="ngde">We\'ve found that the best way to use this provider is to create the entity definitions as objects in a separate file that we import into the location we want to register the entities. Each object would live with the entity code it represents. For example, if we have a <code class="ngde">User</code> entity, we would create a <code class="ngde">users-definition.ts</code> file that would contain the entity definition. We would then import that file into the the module file where our <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/provideSmartFeatureEntities" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideSmartFeatureEntities</a></code> function is located so we can register the entity.</p><p class="ngde">Let\'s take a look at an example. In this example, we\'ll create a <code class="ngde">users-definition.ts</code> file that contains the entity definition for the <code class="ngde">User</code> entity. We\'ll then import that file into the <code class="ngde">users.module.ts</code> file so we can register the entity.</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-comment ngde">// users-definition.ts</span>\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/interfaces/EntityDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">EntityDefinition</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'@smart/smart-ngrx/types/entity-definition.interface\'</span>;\n</span><span class="line ngde">\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">User</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'./user.interface\'</span>;\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { userEffectsServiceToken } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'./user-effects.service-token\'</span>;\n</span><span class="line ngde">\n</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">const</span> <span class="hljs-attr ngde">usersDefinition</span>: <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/interfaces/EntityDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">EntityDefinition</a></span>&#x3C;<span class="hljs-title class_ ngde">User</span>> = {\n</span><span class="line ngde">  <span class="hljs-attr ngde">fieldName</span>: <span class="hljs-string ngde">\'users\'</span>,\n</span><span class="line ngde">  <span class="hljs-attr ngde">effectServiceToken</span>: userEffectsServiceToken,\n</span><span class="line ngde">  <span class="hljs-attr ngde">defaultRow</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">id</span>) =></span> ({\n</span><span class="line ngde">    id,\n</span><span class="line ngde">    <span class="hljs-attr ngde">name</span>: <span class="hljs-string ngde">\'\'</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">children</span>: [],\n</span><span class="line ngde">    <span class="hljs-attr ngde">isDirty</span>: <span class="hljs-literal ngde">false</span>,\n</span><span class="line ngde">  }),\n</span><span class="line ngde">};\n</span></code></pre><p class="ngde">As outlined in the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/EntityDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">EntityDefinition</a></code> interface, we need to provide the following information:</p><ul class="ngde"><li class="ngde"><p class="ngde"><code class="ngde">fieldName</code>: The field name that you\'d usually use in the reducer object you\'d use in StoreModule.forFeature(featureName, reducer) OR the name you\'d use in provideState(featureName, reducer)<br class="ngde"><br class="ngde">We also use this name along with the feature as the Source field in actions but this should not matter to you because you\'ll either be using actions we\'ve created or using your own actions for your specific purposes.<br class="ngde"><br class="ngde">NOTE: this is not a "field" in the database sense but a "field in the sense of a "field" in a JavaScript object.</p></li><li class="ngde"><p class="ngde"><code class="ngde">effectServiceToken</code>: The Injection Token for the Effect Service that will be used by the entity. This is the service that the effect will call to perform CRUD operations against the server.</p></li><li class="ngde"><p class="ngde"><code class="ngde">defaultRow</code>: A function that returns a default row for the entity. This is used by the reducer to create a new row when the <code class="ngde">addRow</code> action is dispatched. The function takes an <code class="ngde">id</code> parameter that is the id of the row that is being created. This is useful if you need to create a row that has a reference to the id of the row that is being created.</p></li></ul>',this.page=t,this.demoAssets=g}static#e=this.\u0275fac=function(a){return new(a||n)};static#s=this.\u0275cmp=s.Xpm({type:n,selectors:[["ng-doc-page-using-smart-ng-rx-entity-definitions"]],standalone:!0,features:[s._Bn([{provide:o.a,useExisting:n},p,t.providers??[]]),s.qOj,s.jDz],decls:1,vars:0,template:function(a,k){1&a&&s._UZ(0,"ng-doc-page")},dependencies:[d.z],encapsulation:2,changeDetection:0})}return n})();const f=[{...(0,l.isRoute)(t.route)?t.route:{},path:"",component:c,title:"Entity Definitions"}]}}]);