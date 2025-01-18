import{a as h}from"./chunk-2NLE4TRD.js";import"./chunk-HBZWFD3Q.js";import{a as c}from"./chunk-ORFBQXZO.js";import"./chunk-5HHMA4R7.js";import"./chunk-PW6HQIYA.js";import{a as o}from"./chunk-Q6N3FV5O.js";import{X as f}from"./chunk-7ONHY52D.js";import"./chunk-E6SX6AWP.js";import{Da as l,Ua as d,qb as p,za as r}from"./chunk-AKDYIXFS.js";import{a as n,b as i,h as y}from"./chunk-TWZW5B45.js";var m=y(f());var B={title:"Updates",mdFile:"./index.md",order:3,category:h},e=B;var g=[];var w={},u=w;var D=`<h1 id="updates" href="using-smart-ng-rx/crud-support/updates" headinglink="true" class="ngde">Updates<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="updates"></ng-doc-heading-anchor></h1><p class="ngde">Any row that has been exposed to your main application via a smart selector will automatically be available for update. All you have to do is assign a row. All the necessary dispatches to the reducer and effects will be handled for you.</p><p class="ngde">You will need to implement the update method in your effects service for the row the entity lives in.</p><p class="ngde">As an example, here is how we've updated the <code class="ngde">update</code> method in the <code class="ngde">DepartmentEffectsService</code> in the demo:</p><ng-doc-blockquote class="ngde"><p class="ngde"><strong class="ngde">Note:</strong> explanation of this code will follow the code snippet.</p></ng-doc-blockquote><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">override </span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">update</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">newRow</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Location</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Observable</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Location[]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">  newRow</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Location</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  return</span><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">http</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">put</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">Location</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]>(</span><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">apiLocation</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> newRow)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><p class="ngde">Everything is handled for you including optimistic updates of the store and rollbacks as required.</p><p class="ngde">This needs a bit of explanation. The effect that calls this service keeps track of the row that was updated. Instead of using switchMap() around our call to this service, we use concatMap(). By doing this, if a call fails, we can rollback each call so that when the next call comes in, the row is in the state is was prior to the update that just failed.</p><p class="ngde">Also, notice that we always return an array of rows even though there should only ever be one row in the array. This allows us to reuse code that we used previously to get the list of rows from the server. You'll see that in our implementation on the server, we reuse the getByIds code to get the row we just updated.</p><p class="ngde">All of this has implications for how you update by assigning a value to a field in a row.</p><p class="ngde">Let's say you have an edit field that you want to have update the row. You might be tempted to bind it directly to the field in the row. This would work, but even with debounce, you'd end up updating the row more frequently than you'd want to. Instead, you should consider binding the edit field to a local variable and then, when you are ready to update the row, assign the value of the local variable to the row. We've designed the code so that either way will work. But the latter will be more performant.</p><p class="ngde">We've also ensured that updating multiple fields will update the row only once as long as those multiple assignments happen within the same event loop. This is because we use a <code class="ngde">debounceTime(1)</code> to ensure that the update only happens once. And if you update multiple rows within the same event loop, it will keep track of each row and call the effect service's update method once for each row.</p>`,t=class s extends o{constructor(){super();this.pageType="guide";this.pageContent=D;this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/crud-support/updates/index.md?message=docs(): describe your changes here...";this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/apps/documentation/src/app/using-smart-ng-rx/crud-support/updates/index.md";this.page=e;this.demoAssets=u}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=r({type:s,selectors:[["ng-doc-page-0tz0pdrh"]],features:[p([{provide:o,useExisting:s},g,e.providers??[]]),l],decls:1,vars:0,template:function(a,b){a&1&&d(0,"ng-doc-page")},dependencies:[c],encapsulation:2,changeDetection:0})}},F=[i(n({},(0,m.isRoute)(e.route)?e.route:{}),{path:"",component:t,title:"Updates"})],Y=F;export{t as PageComponent,Y as default};