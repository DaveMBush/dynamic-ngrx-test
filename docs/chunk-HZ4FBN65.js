import{a as Y,b as W,c as z,d as q,e as w,f as K,g as G,h as j}from"./chunk-NRCV6OTN.js";import{a as V}from"./chunk-VQAAG7TH.js";import"./chunk-UT5FO2AU.js";import"./chunk-2WKCHPNY.js";import{A as U}from"./chunk-MNDOCPNM.js";import"./chunk-CMCZQJC5.js";import{Ga as l,J as lt,Oa as g,ab as J,b as ct,c as rt,db as Q,h as y,nb as h}from"./chunk-6UGKQUCS.js";import{h as R,j as H}from"./chunk-TWZW5B45.js";var Ht=R(ct(),1),Ut=R(rt(),1),Vt=R(lt(),1);var x="rect",N="rectWithTitle",at="start",dt="end",Et="divider",St="roundedWithTitle",pt="note",Tt="noteGroup",_="statediagram",_t="state",ut=`${_}-${_t}`,Z="transition",bt="note",ft="note-edge",Dt=`${Z} ${ft}`,ht=`${_}-${bt}`,At="cluster",yt=`${_}-${At}`,gt="cluster-alt",xt=`${_}-${gt}`,F="parent",I="note",$t="state",O="----",Ct=`${O}${I}`,X=`${O}${F}`,tt="fill:none",et="fill: #333",ot="c",st="text",nt="normal",$={},E=0,Rt=function(t){let n=Object.keys(t);for(let e of n)t[e]},wt=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function Gt(t){return t==null?"":t.classes?t.classes.join(" "):""}function L(t="",n=0,e="",i=O){let c=e!==null&&e.length>0?`${i}${e}`:"";return`${$t}-${t}${c}-${n}`}var A=(t,n,e,i,c,r)=>{let o=e.id,u=Gt(i[o]);if(o!=="root"){let p=x;e.start===!0&&(p=at),e.start===!1&&(p=dt),e.type!==w&&(p=e.type),$[o]||($[o]={id:o,shape:p,description:g.sanitizeText(o,h()),classes:`${u} ${ut}`});let s=$[o];e.description&&(Array.isArray(s.description)?(s.shape=N,s.description.push(e.description)):s.description.length>0?(s.shape=N,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=x,s.description=e.description),s.description=g.sanitizeTextOrArray(s.description,h())),s.description.length===1&&s.shape===N&&(s.shape=x),!s.type&&e.doc&&(l.info("Setting cluster for ",o,P(e)),s.type="group",s.dir=P(e),s.shape=e.type===K?Et:St,s.classes=s.classes+" "+yt+" "+(r?xt:""));let T={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:L(o,E),type:s.type,padding:15};if(T.centerLabel=!0,e.note){let a={labelStyle:"",shape:pt,labelText:e.note.text,classes:ht,style:"",id:o+Ct+"-"+E,domId:L(o,E,I),type:s.type,padding:15},d={labelStyle:"",shape:Tt,labelText:e.note.text,classes:s.classes,style:"",id:o+X,domId:L(o,E,F),type:"group",padding:0};E++;let b=o+X;t.setNode(b,d),t.setNode(a.id,a),t.setNode(o,T),t.setParent(o,b),t.setParent(a.id,b);let S=o,f=a.id;e.note.position==="left of"&&(S=a.id,f=o),t.setEdge(S,f,{arrowhead:"none",arrowType:"",style:tt,labelStyle:"",classes:Dt,arrowheadStyle:et,labelpos:ot,labelType:st,thickness:nt})}else t.setNode(o,T)}n&&n.id!=="root"&&(l.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(l.trace("Adding nodes children "),Nt(t,e,e.doc,i,c,!r))},Nt=(t,n,e,i,c,r)=>{l.trace("items",e),e.forEach(o=>{switch(o.stmt){case z:A(t,n,o,i,c,r);break;case w:A(t,n,o,i,c,r);break;case q:{A(t,n,o.state1,i,c,r),A(t,n,o.state2,i,c,r);let u={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:tt,labelStyle:"",label:g.sanitizeText(o.description,h()),arrowheadStyle:et,labelpos:ot,labelType:st,thickness:nt,classes:Z};t.setEdge(o.state1.id,o.state2.id,u,E),E++}break}})},P=(t,n=W)=>{let e=n;if(t.doc)for(let i=0;i<t.doc.length;i++){let c=t.doc[i];c.stmt==="dir"&&(e=c.value)}return e},Lt=function(t,n,e,i){return H(this,null,function*(){l.info("Drawing state diagram (v2)",n),$={},i.db.getDirection();let{securityLevel:c,state:r}=h(),o=r.nodeSpacing||50,u=r.rankSpacing||50;l.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),l.info(i.db.getRootDocV2());let p=i.db.getStates(),s=new U({multigraph:!0,compound:!0}).setGraph({rankdir:P(i.db.getRootDocV2()),nodesep:o,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,i.db.getRootDocV2(),p,i.db,!0);let T;c==="sandbox"&&(T=y("#i"+n));let a=c==="sandbox"?y(T.nodes()[0].contentDocument.body):y("body"),d=a.select(`[id="${n}"]`),b=a.select("#"+n+" g");yield V(b,s,["barb"],_,n);let S=8;J.insertTitle(d,"statediagramTitleText",r.titleTopMargin,i.db.getDiagramTitle());let f=d.node().getBBox(),k=f.width+S*2,v=f.height+S*2;d.attr("class",_);let m=d.node().getBBox();Q(d,v,k,r.useMaxWidth);let B=`${m.x-S} ${m.y-S} ${k} ${v}`;l.debug(`viewBox ${B}`),d.attr("viewBox",B);let it=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(let C of it){let M=C.getBBox(),D=document.createElementNS("http://www.w3.org/2000/svg",x);D.setAttribute("rx",0),D.setAttribute("ry",0),D.setAttribute("width",M.width),D.setAttribute("height",M.height),C.insertBefore(D,C.firstChild)}})},Pt={setConf:Rt,getClasses:wt,draw:Lt},zt={parser:Y,db:G,renderer:Pt,styles:j,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,G.clear()}};export{zt as diagram};
