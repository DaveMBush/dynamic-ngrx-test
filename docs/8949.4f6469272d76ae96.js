"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8949],{8038:(k,v,e)=>{e.d(v,{U:()=>o});var r=e(5825);let o=(()=>{class d{constructor(){this.kind="",this.type="declaration"}static#o=this.\u0275fac=function(i){return new(i||d)};static#n=this.\u0275cmp=r.Xpm({type:d,selectors:[["ng-doc-kind-icon"]],hostVars:2,hostBindings:function(i,p){2&i&&r.uIk("data-ng-doc-kind",p.kind)("data-ng-doc-type",p.type)},inputs:{kind:"kind",type:"type"},standalone:!0,features:[r.jDz],decls:1,vars:1,template:function(i,p){1&i&&r._uU(0),2&i&&r.Oqu(p.kind[0])},styles:["[_nghost-%COMP%]{display:inline-block;width:calc(var(--ng-doc-base-gutter) * 2);height:calc(var(--ng-doc-base-gutter) * 2);border-radius:calc(var(--ng-doc-base-gutter) / 4);font-size:13px;text-align:center;line-height:calc(var(--ng-doc-base-gutter) * 2);text-transform:uppercase;flex-shrink:0;font-weight:700}[data-ng-doc-type=declaration][data-ng-doc-kind=Class][_nghost-%COMP%]{background-color:var(--ng-doc-class-background);color:var(--ng-doc-class-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Interface][_nghost-%COMP%]{background-color:var(--ng-doc-interface-background);color:var(--ng-doc-interface-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Enum][_nghost-%COMP%]{background-color:var(--ng-doc-enum-background);color:var(--ng-doc-enum-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Variable][_nghost-%COMP%]{background-color:var(--ng-doc-variable-background);color:var(--ng-doc-variable-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Function][_nghost-%COMP%]{background-color:var(--ng-doc-function-background);color:var(--ng-doc-function-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=TypeAlias][_nghost-%COMP%]{background-color:var(--ng-doc-type-alias-background);color:var(--ng-doc-type-alias-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Component][_nghost-%COMP%]{background-color:var(--ng-doc-component-decorator-background);color:var(--ng-doc-component-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Directive][_nghost-%COMP%]{background-color:var(--ng-doc-directive-decorator-background);color:var(--ng-doc-directive-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Injectable][_nghost-%COMP%]{background-color:var(--ng-doc-injectable-decorator-background);color:var(--ng-doc-injectable-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Pipe][_nghost-%COMP%]{background-color:var(--ng-doc-pipe-decorator-background);color:var(--ng-doc-pipe-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=NgModule][_nghost-%COMP%]{background-color:var(--ng-doc-ng-module-decorator-background);color:var(--ng-doc-ng-module-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=ng-doc-tag-selector][_nghost-%COMP%]{background-color:var(--ng-doc-selector-background);color:var(--ng-doc-selector-color)}[data-ng-doc-type=type][data-ng-doc-kind=string][_nghost-%COMP%]{background-color:var(--ng-doc-string-background);color:var(--ng-doc-string-color)}[data-ng-doc-type=type][data-ng-doc-kind=number][_nghost-%COMP%]{background-color:var(--ng-doc-number-background);color:var(--ng-doc-number-color)}[data-ng-doc-type=type][data-ng-doc-kind=boolean][_nghost-%COMP%]{background-color:var(--ng-doc-boolean-background);color:var(--ng-doc-boolean-color)}[data-ng-doc-type=type][data-ng-doc-kind=null][_nghost-%COMP%]{background-color:var(--ng-doc-null-background);color:var(--ng-doc-null-color)}[data-ng-doc-type=type][data-ng-doc-kind=undefined][_nghost-%COMP%]{background-color:var(--ng-doc-undefined-background);color:var(--ng-doc-undefined-color)}[data-ng-doc-type=type][data-ng-doc-kind=object][_nghost-%COMP%]{background-color:var(--ng-doc-object-background);color:var(--ng-doc-object-color)}"],changeDetection:0})}return d})()},9739:(k,v,e)=>{e.d(v,{L:()=>z});var r=e(7872),o=e(5825),d=e(9938),N=e(3010),u=e(1218),i=e(9439);class p{}var D=e(939),x=e(7120);let H=(()=>{class t{keyboardEvent(n){this.dropdown&&("ArrowDown"===n.key&&!this.dropdown.isOpened&&(n.preventDefault(),this.dropdown.open()),"Escape"===n.key&&this.dropdown.isOpened&&(n.preventDefault(),this.dropdown.close()))}static#o=this.\u0275fac=function(c){return new(c||t)};static#n=this.\u0275dir=o.lG2({type:t,selectors:[["","ngDocDropdownHandler",""]],hostBindings:function(c,a){1&c&&o.NdJ("keydown",function(C){return a.keyboardEvent(C)})},inputs:{dropdown:["ngDocDropdownHandler","dropdown"]},standalone:!0})}return t})();var M=e(438),w=e(4691),b=e(6566),h=e(7839),P=e(1426),_=e(625),E=e(1465),F=e(8014);const T=["origin"],I=["*"];var g;let m=g=class f extends h.dK{constructor(s,n){super(n),this.ngZone=s,this.host=n,this.compareFn=P.U,this.displayValueFn=String,this.positions=["bottom-center","top-center"]}ngAfterContentInit(){this.inputControl?.valueChange.pipe((0,F.h)(()=>!!this.inputControl?.isFocused),(0,b.t)(this),(0,w.w1)(this.ngZone)).subscribe(()=>this.dropdown?.open()),this.typedControlChange(h.ri).pipe((0,b.t)(this)).subscribe(()=>this.dropdown?.close())}get listHostOrigin(){return this.inputControl?.elementRef}get searchText(){return this.hasValue?"":this.inputControl?.value||""}get width(){return this.origin?.nativeElement.offsetWidth||0}get panelClass(){return"ng-doc-combobox-host-overlay"}clickEvent(){this.disabled||this.dropdown?.open()}static#o=this.\u0275fac=function(n){return new(n||f)(o.Y36(o.R0b),o.Y36(_.K,12))};static#n=this.\u0275cmp=o.Xpm({type:f,selectors:[["ng-doc-combobox-host"]],contentQueries:function(n,c,a){if(1&n&&(o.Suo(a,x.V,5),o.Suo(a,N.f,5)),2&n){let l;o.iGM(l=o.CRH())&&(c.dropdown=l.first),o.iGM(l=o.CRH())&&(c.inputControl=l.first)}},viewQuery:function(n,c){if(1&n&&o.Gf(T,7,o.SBq),2&n){let a;o.iGM(a=o.CRH())&&(c.origin=a.first)}},inputs:{compareFn:"compareFn",displayValueFn:"displayValueFn"},standalone:!0,features:[o._Bn([(0,_.N)((0,o.Gpc)(()=>g)),{provide:u.d,useExisting:(0,o.Gpc)(()=>g)},{provide:i.E,useExisting:(0,o.Gpc)(()=>g)},{provide:E.d,useExisting:(0,o.Gpc)(()=>g)},{provide:p,useExisting:(0,o.Gpc)(()=>g)},{provide:D.X,useExisting:(0,o.Gpc)(()=>g)}]),o.qOj,o.jDz],ngContentSelectors:I,decls:3,vars:1,consts:[["ngDocFocusCatcher","",1,"ng-doc-dropdown-host",3,"ngDocDropdownHandler","click"],["origin",""]],template:function(n,c){1&n&&(o.F$t(),o.TgZ(0,"label",0,1),o.NdJ("click",function(){return c.clickEvent()}),o.Hsn(2),o.qZA()),2&n&&o.Q6J("ngDocDropdownHandler",c.dropdown)},dependencies:[M.b,H],styles:["[_nghost-%COMP%]{position:relative;display:block;width:100%}  .ng-doc-combobox-host-overlay .ng-doc-overlay-content{display:block;max-height:300px;overflow:auto}"],changeDetection:0})};m=g=(0,d.__decorate)([(0,b.c)(),(0,d.__metadata)("design:paramtypes",[o.R0b,h.dK])],m);var B=e(3430),G=e(8196),R=e(8998);function Q(t,s){if(1&t){const n=o.EpF();o.TgZ(0,"button",1),o.NdJ("click",function(){o.CHM(n);const a=o.oxw();return o.KtG(a.clear())})("focusout",function(){o.CHM(n);const a=o.oxw();return o.KtG(a.onTouched())}),o._UZ(1,"ng-doc-icon",2),o.qZA()}if(2&t){const n=o.oxw();o.Q6J("ngDocFocusable",!1)("disabled",n.disabled)("rounded",!1)}}let V=(()=>{let t=class y extends h.Km{constructor(n,c,a){super(c),this.changeDetectorRef=n,this.host=c,this.inputHost=a}ngAfterContentInit(){this.inputHost?.inputControl&&this.inputHost.inputControl.valueChange.pipe((0,b.t)(this)).subscribe(()=>this.changeDetectorRef.detectChanges())}get isVisible(){return this.inputHost?.inputControl?.hasValue||this.hasValue}clear(){this.inputHost?.inputControl?.writeValueFromHost(null),this.updateModel(null)}incomingUpdate(){}static#o=this.\u0275fac=function(c){return new(c||y)(o.Y36(o.sBO),o.Y36(_.K),o.Y36(i.E,8))};static#n=this.\u0275cmp=o.Xpm({type:y,selectors:[["ng-doc-clear-control"]],standalone:!0,features:[o.qOj,o.jDz],decls:1,vars:1,consts:[["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(c,a){1&c&&o.YNc(0,Q,2,3,"button",0),2&c&&o.Q6J("ngIf",a.isVisible)},dependencies:[r.O5,B.J,R.O,G.q],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})};return t=(0,d.__decorate)([(0,b.c)(),(0,d.__metadata)("design:paramtypes",[o.sBO,h.dK,i.E])],t),t})();var K=e(6806),j=e(9405),J=e(303),O=e(3514);function Y(t,s){1&t&&o.GkF(0)}function Z(t,s){1&t&&o._UZ(0,"ng-doc-clear-control")}function A(t,s){if(1&t&&o.YNc(0,Y,1,0,"ng-container",5)(1,Z,1,0,"ng-doc-clear-control",6),2&t){const n=o.oxw();o.Q6J("polymorpheusOutlet",n.rightContent),o.xp6(1),o.Q6J("ngIf",n.clearButton)}}function U(t,s){1&t&&o.GkF(0)}function S(t,s){if(1&t&&o.YNc(0,U,1,0,"ng-container",7),2&t){const n=o.oxw();o.Q6J("ngTemplateOutlet",n.data)}}let z=(()=>{class t extends h.dK{constructor(n){super(),this.elementRef=n,this.readonly=!1,this.placeholder="Chose the value",this.clearButton=!0,this.rightContent="",this.valueContent="",this.data=null}get listHostOrigin(){return this.elementRef.nativeElement}static#o=this.\u0275fac=function(c){return new(c||t)(o.Y36(o.SBq))};static#n=this.\u0275cmp=o.Xpm({type:t,selectors:[["ng-doc-combobox"]],contentQueries:function(c,a,l){if(1&c&&o.Suo(l,j.N,5,o.Rgc),2&c){let C;o.iGM(C=o.CRH())&&(a.data=C.first)}},inputs:{readonly:"readonly",placeholder:"placeholder",clearButton:"clearButton",rightContent:"rightContent",valueContent:"valueContent"},standalone:!0,features:[o._Bn([(0,_.N)(t),{provide:D.X,useExisting:t}]),o.qOj,o.jDz],decls:8,vars:7,consts:[["ngDocFocusCatcher","",3,"rightContent","blurContent","blurContext"],["ngDocInputString","",3,"readonly","placeholder"],["inputRightContent",""],[3,"content","closeIfInnerClick"],["dropdownContent",""],[4,"polymorpheusOutlet"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(c,a){if(1&c&&(o.TgZ(0,"ng-doc-combobox-host")(1,"ng-doc-input-wrapper",0),o._UZ(2,"input",1),o.YNc(3,A,2,2,"ng-template",null,2,o.W1O),o.TgZ(5,"ng-doc-dropdown",3),o.YNc(6,S,1,1,"ng-template",null,4,o.W1O),o.qZA()()()),2&c){const l=o.MAs(4),C=o.MAs(7);o.xp6(1),o.Q6J("rightContent",l)("blurContent",a.hasValue?a.valueContent:"")("blurContext",a.model),o.xp6(1),o.Q6J("readonly",a.readonly)("placeholder",a.placeholder),o.xp6(3),o.Q6J("content",C)("closeIfInnerClick",!0)}},dependencies:[m,K.u,M.b,J.v,O.wq,O.Li,r.O5,V,x.V,r.tP],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0})}return t})()},9405:(k,v,e)=>{e.d(v,{N:()=>o});var r=e(5825);let o=(()=>{class d{constructor(u,i){this.template=u,this.viewContainerRef=i}static#o=this.\u0275fac=function(i){return new(i||d)(r.Y36(r.Rgc),r.Y36(r.s_b))};static#n=this.\u0275dir=r.lG2({type:d,selectors:[["","ngDocData",""]],standalone:!0})}return d})()}}]);