import{da as h}from"./chunk-QKSOPKFJ.js";import{$ as i,Da as y,Eb as g,J as v,M as c,S as u,U as a,c as b,da as m,qa as p,ya as l}from"./chunk-COWQBK44.js";function w(n){n||(a(w),n=u(i));let t=new b(e=>n.onDestroy(e.next.bind(e)));return e=>e.pipe(v(t))}function D(n,t){let e=!t?.manualCleanup;e&&!t?.injector&&a(D);let s=e?t?.injector?.get(i)??u(i):null,d=k(t?.equal),o;t?.requireSync?o=l({kind:0},{equal:d}):o=l({kind:1,value:t?.initialValue},{equal:d});let f=n.subscribe({next:r=>o.set({kind:1,value:r}),error:r=>{if(t?.rejectErrors)throw r;o.set({kind:2,error:r})}});if(t?.requireSync&&o().kind===0)throw new c(601,!1);return s?.onDestroy(f.unsubscribe.bind(f)),g(()=>{let r=o();switch(r.kind){case 1:return r.value;case 2:throw r.error;case 0:throw new c(601,!1)}},{equal:t?.equal})}function k(n=Object.is){return(t,e)=>t.kind===1&&e.kind===1&&n(t.value,e.value)}var $=(()=>{class n{constructor(e){this.elementRef=e,this.selectAll=!1}ngOnInit(){let e=this.elementRef.nativeElement;h.isNativeKeyboardFocusable(e)&&e.focus(),this.selectAll&&e instanceof HTMLInputElement&&Promise.resolve().then(()=>e.select())}static{this.\u0275fac=function(s){return new(s||n)(p(m))}}static{this.\u0275dir=y({type:n,selectors:[["","ngDocAutofocus",""]],inputs:{selectAll:"selectAll"}})}}return n})();export{w as a,D as b,$ as c};