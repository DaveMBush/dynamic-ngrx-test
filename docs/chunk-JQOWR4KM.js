import{$ as s,Aa as F,Ab as Me,B as ce,Bb as we,Ca as y,Ea as be,Fa as Ce,H as ae,Hb as We,J as a,Jc as z,K as b,Ka as ye,Kb as Pe,Kc as je,La as B,Lb as Re,M as D,Ma as K,N as se,Na as W,O as de,Oc as V,Pa as X,Pc as Fe,Qa as De,T as le,Ua as xe,Uc as Be,Va as H,W as ge,Wa as _e,X as m,Z as I,_ as h,aa as pe,b as J,ba as he,ca as me,cc as Ee,da as fe,e as R,ea as T,f as ee,fa as l,fc as Ie,g as te,ga as ue,hb as ke,hc as Te,ib as Ge,j as O,ja as x,jb as Ze,ka as C,kb as Ke,l as ne,la as g,m as G,ma as p,na as f,o as M,p as oe,rc as Se,sc as Ne,t as E,ta as S,ua as Z,uc as Q,v as ie,va as N,vc as L,wa as w,xa as ve,xb as Oe,ya as j,z as re}from"./chunk-7I7HZGX7.js";import{f as P,h as Y}from"./chunk-RS6LHQUM.js";var A=class{};var He=(()=>{let e=class e{set ngDocChecked(o){this.updateProperty("checked",o||!1),this.updateProperty("indeterminate",o===null)}constructor(o,t){this.element=o,this.renderer=t,this.ngDocCheckedChange=new he,this.updateProperty("checked",!1)}onChange({checked:o}){this.updateProperty("indeterminate",!1),this.ngDocCheckedChange.emit(o)}updateProperty(o,t){this.renderer.setProperty(this.element.nativeElement,o,t)}};e.\u0275fac=function(t){return new(t||e)(s(m),s(I))},e.\u0275dir=D({type:e,selectors:[["input","ngDocChecked",""],["input","ngDocCheckedChange",""]],hostBindings:function(t,i){t&1&&S("change",function(d){return i.onChange(d.target)})},inputs:{ngDocChecked:"ngDocChecked"},outputs:{ngDocCheckedChange:"ngDocCheckedChange"},standalone:!0});let n=e;return n})();function Xe(n,e){n&1&&f(0,"ng-doc-icon",8)}function Ye(n,e){n&1&&f(0,"ng-doc-icon",9)}var Je=[[["ng-doc-icon"]],"*"],et=["ng-doc-icon","*"],Mt=(()=>{let e=class e extends Ie{constructor(){super({host:Te({optional:!0}),compareHost:a(Ee,{optional:!0})}),this.color="primary"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b({type:e,selectors:[["ng-doc-checkbox"]],hostVars:1,hostBindings:function(t,i){t&2&&T("data-lu-color",i.color)},inputs:{color:"color"},standalone:!0,features:[fe,y],ngContentSelectors:et,decls:10,vars:5,consts:[[1,"ng-doc-checkbox-wrapper"],[1,"ng-doc-checkbox"],["type","checkbox",3,"disabled","ngDocChecked","ngDocFocusable","ngDocCheckedChange","blur"],["icon","minus",4,"ngIf"],["icon","check",4,"ngIf"],[1,"ng-doc-checkbox-content"],[1,"ng-doc-checkbox-icons"],[1,"ng-doc-checkbox-text"],["icon","minus"],["icon","check"]],template:function(t,i){t&1&&(N(Je),g(0,"label",0)(1,"div",1)(2,"input",2),S("ngDocCheckedChange",function(){return i.toggle(),i.touch()})("blur",function(){return i.touch()}),p(),C(3,Xe,1,0,"ng-doc-icon",3)(4,Ye,1,0,"ng-doc-icon",4),p(),g(5,"div",5)(6,"span",6),w(7),p(),g(8,"div",7),w(9,1),p()()()),t&2&&(h(2),l("disabled",i.disabled)("ngDocChecked",i.checked())("ngDocFocusable",!1),h(1),l("ngIf",i.isIntermediate),h(1),l("ngIf",i.checked))},dependencies:[He,Ne,_e,z],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:flex-start;flex-direction:column;font-family:var(--ng-doc-font-family);font-variant:no-contextual;color:var(--ng-doc-text);line-height:var(--ng-doc-line-height);font-size:var(--ng-doc-font-size);font-weight:var(--ng-doc-font-weight)}[_nghost-%COMP%]:not(:last-of-type){margin-bottom:var(--ng-doc-list-element-vertical-space);margin-right:var(--ng-doc-list-element-horizontal-space)}[_nghost-%COMP%]:hover:not([data-checked=true])   .ng-doc-checkbox[_ngcontent-%COMP%]{border:var(--ng-doc-checkbox-border-hover)}[_nghost-%COMP%]:not([data-disabled=true])   .ng-doc-checkbox-wrapper[_ngcontent-%COMP%]{cursor:pointer}[data-checked=true][_nghost-%COMP%]   .ng-doc-checkbox[_ngcontent-%COMP%]{background-color:var(--ng-doc-checkbox-color);--ng-doc-checkbox-border: var(--ng-doc-checkbox-color);--ng-doc-checkbox-border-hover: var(--ng-doc-checkbox-color);--ng-doc-icon-color: var(--ng-doc-checkbox-color-text)}input[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;outline:0}.ng-doc-checkbox-wrapper[_ngcontent-%COMP%]{display:flex}.ng-doc-checkbox[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2);height:calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2);border:var(--ng-doc-checkbox-border);flex:0 0 calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2);background-color:var(--ng-doc-base-0);transition:background-color var(--ng-doc-transition);box-sizing:border-box;border-radius:calc(var(--ng-doc-base-gutter) / 2)}.ng-doc-checkbox-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.ng-doc-checkbox-icons[_ngcontent-%COMP%]{display:flex;margin-left:var(--ng-doc-base-gutter);margin-top:calc(var(--ng-doc-base-gutter) / 2)}.ng-doc-checkbox-icons[_ngcontent-%COMP%]:empty{display:none}.ng-doc-checkbox-text[_ngcontent-%COMP%]{margin-left:var(--ng-doc-base-gutter);line-height:calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2)}.ng-doc-checkbox-text[_ngcontent-%COMP%]:empty{display:none}"],changeDetection:0});let n=e;return n})();te();var u,U=(u=class{constructor(e,r,o){this.templateRef=e,this.viewContainerRef=r,this.breakpointObserver=o,this.match=[],this.breakpoints=Fe,this.unsubscribe$=new J}ngOnChanges(){this.unsubscribe$.next(),this.breakpointObserver.observe(this.match).pipe(ie("matches"),E(),ce(this.unsubscribe$),L(this)).subscribe(e=>{this.viewRef?.destroy(),this.viewRef=void 0,e&&(this.viewRef=this.viewContainerRef.createEmbeddedView(this.templateRef),this.viewRef.markForCheck())})}},u.\u0275fac=function(r){return new(r||u)(s(B),s(x),s(V))},u.\u0275dir=D({type:u,selectors:[["","ngDocMediaQuery",""]],inputs:{match:["ngDocMediaQuery","match"]},exportAs:["ngDocMediaQuery"],standalone:!0,features:[de]}),u);U=R([Q(),ee("design:paramtypes",[B,x,V])],U);function tt(n,e){if(n&1&&(g(0,"span",3)(1,"span",4),f(2,"ng-doc-icon",5),j(3),p()()),n&2){let r=e.$implicit;h(3),F(" ",r," ")}}var nt=n=>[n],qt=(()=>{let e=class e{constructor(){this.breadcrumbs=[],this.home=a(A).routePrefix||"/"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b({type:e,selectors:[["ng-doc-breadcrumb"]],inputs:{breadcrumbs:"breadcrumbs"},standalone:!0,features:[y],decls:3,vars:4,consts:[["ng-doc-button-icon","",1,"ng-doc-breadcrumb",3,"routerLink"],["icon","home"],["class","ng-doc-breadcrumb",4,"ngFor","ngForOf"],[1,"ng-doc-breadcrumb"],["ng-doc-text",""],["icon","chevron-right"]],template:function(t,i){t&1&&(g(0,"a",0),f(1,"ng-doc-icon",1),p(),C(2,tt,4,1,"span",2)),t&2&&(l("routerLink",be(2,nt,i.home)),h(2),l("ngForOf",i.breadcrumbs))},dependencies:[je,we,z,H,Be],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:calc(var(--ng-doc-base-gutter) * 2);opacity:.9}[_nghost-%COMP%]   .ng-doc-breadcrumb[_ngcontent-%COMP%]:not(:first-child){margin-right:var(--ng-doc-base-gutter)}[_nghost-%COMP%]   .ng-doc-breadcrumb[_ngcontent-%COMP%]:not(:first-child):not(:last-child){opacity:.6}"],changeDetection:0});let n=e;return n})();var Kt=(()=>{let e=class e{constructor(o){this.sanitizer=o}transform(o){return this.sanitizer.bypassSecurityTrustHtml(o)}};e.\u0275fac=function(t){return new(t||e)(s(ke,16))},e.\u0275pipe=se({name:"ngDocSanitizeHtml",type:e,pure:!0,standalone:!0});let n=e;return n})();var $=P(We(),1),en=(()=>{let e=class e{constructor(o,t){this.elementRef=o,this.viewContainerRef=t,this.processors=a(Pe,{optional:!0})??[],this.customProcessors=a(Re,{optional:!0})??[],this.injector=a(le)}ngOnInit(){(0,$.asArray)(this.processors,this.customProcessors).forEach(this.process.bind(this))}process(o){this.elementRef.nativeElement.querySelectorAll(o.selector).forEach(t=>{if(t.parentNode){let i=(o.nodeToReplace&&o.nodeToReplace(t))??t,c=o.extractOptions(t,this.elementRef.nativeElement),d=this.viewContainerRef.createComponent(o.component,{projectableNodes:c.content,injector:this.injector});c.inputs&&(0,$.objectKeys)(c.inputs).forEach(k=>c.inputs&&d.setInput(k,c.inputs[k])),i.parentNode?.replaceChild(d.location.nativeElement,i),d.changeDetectorRef.markForCheck()}})}};e.\u0275fac=function(t){return new(t||e)(s(m),s(x))},e.\u0275dir=D({type:e,selectors:[["","ngDocPageProcessor",""]],standalone:!0});let n=e;return n})();te();var q=P(Ge(),1);var ot=["ng-doc-toc-element",""],it=["*"],rt=["selection"];function ct(n,e){if(n&1&&(g(0,"li",8),j(1),p()),n&2){let r=e.$implicit,o=Z(2);l("href",r.path)("level",r.level)("selected",r===o.activeItem),h(1),F(" ",r.title," ")}}function at(n,e){if(n&1&&(g(0,"div",2)(1,"div",3),f(2,"div",4,5),g(4,"ul",6),C(5,ct,2,4,"li",7),p()()()),n&2){let r=Z();h(5),l("ngForOf",r.tableOfContent)}}var st=(n,e)=>[n,e],Qe=(()=>{let e=class e{constructor(o){this.elementRef=o,this.href="",this.selected=!1,this.level=1}};e.\u0275fac=function(t){return new(t||e)(s(m))},e.\u0275cmp=b({type:e,selectors:[["li","ng-doc-toc-element",""]],hostVars:2,hostBindings:function(t,i){t&2&&T("data-ng-doc-selected",i.selected)("data-ng-doc-level",i.level)},inputs:{href:"href",selected:"selected",level:"level"},standalone:!0,features:[y],attrs:ot,ngContentSelectors:it,decls:2,vars:3,consts:[[3,"href"]],template:function(t,i){t&1&&(N(),g(0,"a",0),w(1),p()),t&2&&(ue("padding-left","calc(var(--ng-doc-toc-indent) * "+i.level+")"),l("href",i.href,ge))},styles:['[_nghost-%COMP%]{display:flex;margin:0;color:var(--ng-doc-text)}[data-ng-doc-level="1"][_nghost-%COMP%]   a[_ngcontent-%COMP%]{padding-left:var(--ng-doc-base-gutter)}[data-ng-doc-selected=true][_nghost-%COMP%]{color:var(--ng-doc-primary)}[_nghost-%COMP%]:hover{cursor:pointer;color:var(--ng-doc-primary)}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{font-family:var(--ng-doc-font-family);font-variant:no-contextual;color:var(--ng-doc-text);line-height:var(--ng-doc-line-height);font-size:var(--ng-doc-font-size);font-weight:var(--ng-doc-font-weight);padding:calc(var(--ng-doc-base-gutter) / 2);color:inherit;width:100%;text-decoration:none;word-break:break-word;--ng-doc-font-size: 14px}'],changeDetection:0});let n=e;return n})(),v,Le=(v=class{constructor(){this.tableOfContent=[],this.elements=new ye,this.document=a(xe),this.ngZone=a(me),this.changeDetectorRef=a(pe),this.renderer=a(I),this.router=a(Me)}ngAfterViewInit(){let e=ne(this.document,"scroll").pipe(M(()=>!!this.tableOfContent.length),O(t=>t.target.scrollingElement),re(this.document.scrollingElement),O(t=>{let i=t.scrollTop*100/(t.scrollHeight-t.offsetHeight),c=t.scrollTop+t.offsetHeight*i/100;return this.tableOfContent.length?this.tableOfContent.reduce((d,k)=>{let $e=d.element.getBoundingClientRect().top+t.scrollTop,qe=k.element.getBoundingClientRect().top+t.scrollTop;return Math.abs(qe-c)<Math.abs($e-c)?k:d}):null}),M(q.isPresent)),r=this.router.events.pipe(O(t=>{if(t instanceof Oe){let i=this.tableOfContent.find(c=>c.path.includes(t.routerEvent.url));if(i)return i}return null}),M(q.isPresent),oe(20)),o=this.elements.changes.pipe(O(()=>this.activeItem),M(q.isPresent));G(G(e,r).pipe(E()),o).pipe(Se(this.ngZone),L(this)).subscribe(this.select.bind(this))}select(e){let r=this.tableOfContent.indexOf(e);if(this.selection){let o=this.elements.toArray()[r]?.elementRef.nativeElement;o&&(this.renderer.setStyle(this.selection.nativeElement,"top",`${o.offsetTop}px`),this.renderer.setStyle(this.selection.nativeElement,"height",`${o.offsetHeight}px`),o.scrollIntoView({block:"nearest"}))}this.activeItem=e,this.changeDetectorRef.detectChanges()}},v.\u0275fac=function(r){return new(r||v)},v.\u0275cmp=b({type:v,selectors:[["ng-doc-toc"]],viewQuery:function(r,o){if(r&1&&(W(rt,5,m),W(Qe,5)),r&2){let t;K(t=X())&&(o.selection=t.first),K(t=X())&&(o.elements=t)}},inputs:{tableOfContent:"tableOfContent"},standalone:!0,features:[y],decls:2,vars:4,consts:[[3,"ngDocMediaQuery"],["mediaQuery","ngDocMediaQuery"],[1,"ng-doc-toc-wrapper"],[1,"ng-doc-toc-container"],[1,"ng-doc-toc-selection"],["selection",""],[1,"ng-doc-toc"],["ng-doc-toc-element","",3,"href","level","selected",4,"ngFor","ngForOf"],["ng-doc-toc-element","",3,"href","level","selected"]],template:function(r,o){if(r&1&&C(0,at,6,1,"ng-template",0,1,De),r&2){let t=ve(1);l("ngDocMediaQuery",Ce(1,st,t.breakpoints.Large,t.breakpoints.XLarge))}},dependencies:[H,Qe,U],styles:["[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]{position:relative;width:var(--ng-doc-toc-width)}[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]   .ng-doc-toc-container[_ngcontent-%COMP%]{position:fixed;overflow-y:auto;height:calc(100% - var(--ng-doc-navbar-height) - var(--ng-doc-base-gutter) * 5);width:var(--ng-doc-toc-width)}[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]   .ng-doc-toc-selection[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%);width:calc(var(--ng-doc-base-gutter) / 2);border-radius:calc(var(--ng-doc-base-gutter) / 2);background-color:var(--ng-doc-primary);left:calc(var(--ng-doc-toc-margin) + 1px);transition:var(--ng-doc-transition)}[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]   .ng-doc-toc[_ngcontent-%COMP%]{list-style:none;margin:0 0 0 var(--ng-doc-toc-margin);border-left:1px solid var(--ng-doc-base-3);padding:0 0 0 var(--ng-doc-base-gutter)}"],changeDetection:0}),v);Le=R([Q()],Le);var Ve=P(Ze(),1),Ae=P(Ke(),1);function bn(n,e,r){let o=n.createComponent(e);r&&Object.entries(r).forEach(([t,i])=>{o.setInput(t,i)}),o.changeDetectorRef.detectChanges()}function Cn(n){return Y(this,null,function*(){return(yield import("./chunk-7UWQMZ5F.js")).default.html(n.trim(),{wrap:50,markup:{forceIndent:!0}})})}function yn(n){let e=["h1","h2","h3","h4","h5","h6"],r=Array.from(n.querySelectorAll(e.join(", "))).filter(t=>t.id),o=(0,Ve.asArray)(new Set(r.map(ze).sort()));return r.reduce((t,i)=>{let c=ze(i),d=i.querySelector("a.ng-doc-header-link");return d&&t.push({title:i.textContent?.trim()??"",element:i,path:d.pathname+d.hash,level:o.indexOf(c)+1}),t},[])}function ze(n){return Number(n.tagName.toLowerCase().replace(/[a-z]*/g,"")||1)}function Dn(n){return(0,Ae.objectKeys)(n).includes("type")}var Ue=new Map;function On(n,e,r){let o=new ae(`NG_DOC_TYPE_CONTROL_${n}`,{providedIn:"root",factory:()=>({control:e,options:r})});return Ue.set(n,o),{provide:"nothing",useValue:null}}function Mn(n){return Ue.get(n)}export{A as a,Mt as b,qt as c,Kt as d,en as e,Le as f,bn as g,Cn as h,yn as i,Dn as j,On as k,Mn as l};
