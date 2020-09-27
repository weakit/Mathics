/*
 *  /MathJax/jax/output/HTML-CSS/autoload/multiline.js
 *  
 *  Copyright (c) 2012 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See https://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var d="2.0.1";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];var e={newline:0,nobreak:1000000,goodbreak:[-200],badbreak:[+200],auto:[0],toobig:500,nestfactor:400,spacefactor:-100,spaceoffset:2,spacelimit:1,fence:500,close:500};var c={linebreakstyle:"after"};a.mbase.Augment({HTMLlinebreakPenalty:e,HTMLmultiline:function(n){var o=this;while(o.inferred||(o.parent&&o.parent.type==="mrow"&&o.parent.data.length===1)){o=o.parent}var l=((o.type==="math"&&o.Get("display")==="block")||o.type==="mtd");o.isMultiline=true;var p=this.getValues("linebreak","linebreakstyle","lineleading","linebreakmultchar","indentalign","indentshift","indentalignfirst","indentshiftfirst","indentalignlast","indentshiftlast");if(p.linebreakstyle===a.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE){p.linebreakstyle=this.Get("infixlinebreakstyle")}p.lineleading=b.length2em(p.lineleading,1,0.5);this.HTMLremoveColor(n);var m=b.createStack(n);var f={n:0,Y:0,scale:this.HTMLgetScale(),isTop:l,values:{},VALUES:p},k=this.HTMLgetAlign(f,{}),h=this.HTMLgetShift(f,{},k),g=[],i={index:[],penalty:e.nobreak,w:0,W:h,shift:h,scanW:h,nest:0},j=false;while(this.HTMLbetterBreak(i,f)&&(i.scanW>=b.linebreakWidth||i.penalty==e.newline)){this.HTMLaddLine(m,g,i.index,f,i.values,j);g=i.index.slice(0);j=true;k=this.HTMLgetAlign(f,i.values);h=this.HTMLgetShift(f,i.values,k);if(k===a.INDENTALIGN.CENTER){h=0}i.W=i.shift=i.scanW=h;i.penalty=e.nobreak}f.isLast=true;this.HTMLaddLine(m,g,[],f,c,j);if(l){m.style.width="100%";if(o.type==="math"){n.bbox.width="100%"}}this.HTMLhandleSpace(n);this.HTMLhandleColor(n);n.bbox.isMultiline=true;return n},HTMLbetterBreak:function(h,f){if(this.isToken){return false}if(this.isEmbellished()){h.embellished=this;return this.CoreMO().HTMLbetterBreak(h,f)}if(this.linebreakContainer){return false}var p=h.index.slice(0),n=h.index.shift(),l=this.data.length,k,j=h.W,o=(h.index.length>0),g=false;if(n==null){n=-1}if(!o){n++;h.W+=h.w}h.w=0;h.nest++;h.scanW=j;while(n<l&&h.scanW<1.33*b.linebreakWidth){if(this.data[n]){if(this.data[n].HTMLbetterBreak(h,f)){g=true;p=[n].concat(h.index);k=h.W;if(h.penalty===e.newline){h.index=p;h.nest--;return true}}if(!o){var q=this.data[n].HTMLspanElement();j+=q.bbox.w;if(q.style.paddingLeft){j+=parseFloat(q.style.paddingLeft)}if(q.style.paddingRight){j+=parseFloat(q.style.paddingRight)}h.W=h.scanW=j}}h.index=[];n++;o=false}h.nest--;h.index=p;if(g){h.W=k}return g},HTMLaddLine:function(n,g,j,f,o,l){line=b.createBox(n);line.bbox=this.HTMLemptyBBox({});f.first=l;f.last=true;this.HTMLmoveLine(g,j,line,f,o);this.HTMLcleanBBox(line.bbox);var m=this.HTMLgetAlign(f,o),h=this.HTMLgetShift(f,o,m);if(h){b.createBlank(line,h,(m!==a.INDENTALIGN.RIGHT));line.bbox.w+=h;line.bbox.rw+=h}if(f.n>0){var k=b.FONTDATA.baselineskip*f.scale;var i=(f.values.lineleading==null?f.VALUES:f.values).lineleading;f.Y-=Math.max(k,f.d+line.bbox.h+i)}b.alignBox(line,m,f.Y);f.d=line.bbox.d;f.values=o;f.n++},HTMLgetAlign:function(i,f){var j=f,g=i.values,h=i.VALUES,k;if(i.n===0){k=j.indentalignfirst||g.indentalignfirst||h.indentalignfirst}else{if(i.isLast){k=g.indentalignlast||h.indentalignlast}else{k=g.indentalign||h.indentalign}}if(k===a.INDENTALIGN.INDENTALIGN){k=g.indentalign||h.indentalign}if(k===a.INDENTALIGN.AUTO){k=(i.isTop?this.displayAlign:a.INDENTALIGN.LEFT)}return k},HTMLgetShift:function(j,g,l){if(l===a.INDENTALIGN.CENTER){return 0}var k=g,h=j.values,i=j.VALUES,f;if(j.n===0){f=k.indentshiftfirst||h.indentshiftfirst||i.indentshiftfirst}else{if(j.isLast){f=h.indentshiftlast||i.indentshiftlast}else{f=h.indentshift||i.indentshift}}if(f===a.INDENTSHIFT.INDENTSHIFT){f=h.indentshift||i.indentshift}if(f==="auto"||f===""){f=(j.isTSop?this.displayIndent:"0")}return b.length2em(f,0)},HTMLmoveLine:function(o,f,l,n,g){var k=o[0],h=f[0];if(k==null){k=-1}if(h==null){h=this.data.length-1}if(k===h&&o.length>1){this.data[k].HTMLmoveSlice(o.slice(1),f.slice(1),l,n,g,"paddingLeft")}else{var m=n.last;n.last=false;while(k<h){if(this.data[k]){if(o.length<=1){this.data[k].HTMLmoveSpan(l,n,g)}else{this.data[k].HTMLmoveSlice(o.slice(1),[],l,n,g,"paddingLeft")}}k++;n.first=false;o=[]}n.last=m;if(this.data[k]){if(f.length<=1){this.data[k].HTMLmoveSpan(l,n,g)}else{this.data[k].HTMLmoveSlice([],f.slice(1),l,n,g,"paddingRight")}}}},HTMLmoveSlice:function(g,j,m,f,o,k){this.HTMLremoveColor();var l=this.HTMLcreateSliceSpan(m);this.HTMLmoveLine(g,j,l,f,o);l.style[k]="";this.HTMLcombineBBoxes(l,m.bbox);this.HTMLcleanBBox(l.bbox);if(j.length===0){m=this.HTMLspanElement();m.parentNode.removeChild(m);m.nextMathJaxSpan.id=m.id;var h=0;while(m=m.nextMathJaxSpan){var i=this.HTMLhandleColor(m);if(i){i.id+="-MathJax-Continue-"+h;h++}}}return l},HTMLcreateSliceSpan:function(g){var j=this.HTMLspanElement(),i=0;var f=j;while(f.nextMathJaxSpan){f=f.nextMathJaxSpan;i++}var h=j.cloneNode(false);f.nextMathJaxSpan=h;h.nextMathJaxSpan=null;h.id+="-MathJax-Continue-"+i;h.bbox=this.HTMLemptyBBox({});return g.appendChild(h)},HTMLmoveSpan:function(f,j,h){if(!(j.first||j.last)||(j.first&&j.values.linebreakstyle===a.LINEBREAKSTYLE.BEFORE)||(j.last&&h.linebreakstyle===a.LINEBREAKSTYLE.AFTER)){var g=document.getElementById("MathJax-Color-"+this.spanID+b.idPostfix);if(g){f.appendChild(g)}var i=this.HTMLspanElement();f.appendChild(i);if(j.last){i.style.paddingRight=""}if(j.first||j.nextIsFirst){delete j.nextIsFirst;i.style.paddingLeft="";if(g){this.HTMLremoveColor(i);this.HTMLhandleColor(i)}}this.HTMLcombineBBoxes(this,f.bbox)}else{if(j.first){j.nextIsFirst=true}else{delete j.nextIsFirst}}}});a.mo.Augment({HTMLbetterBreak:function(h,f){var p=this.getValues("linebreak","linebreakstyle","lineleading","linebreakmultchar","indentalign","indentshift","indentalignfirst","indentshiftfirst","indentalignlast","indentshiftlast","texClass","fence");if(p.linebreakstyle===a.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE){p.linebreakstyle=this.Get("infixlinebreakstyle")}if(p.texClass===a.TEXCLASS.OPEN){h.nest++}if(p.texClass===a.TEXCLASS.CLOSE){h.nest--}var i=h.scanW,j=(h.embellished||this);delete h.embellished;var n=j.HTMLspanElement(),o=n.bbox.w;if(n.style.paddingLeft){o+=parseFloat(n.style.paddingLeft)}if(p.linebreakstyle===a.LINEBREAKSTYLE.AFTER){i+=o;o=0}if(i-h.shift===0){return false}var k=b.linebreakWidth-i;if(f.n===0&&(p.indentshiftfirst!==f.VALUES.indentshiftfirst||p.indentalignfirst!==f.VALUES.indentalignfirst)){var l=this.HTMLgetAlign(f,p),g=this.HTMLgetShift(f,p,l);k+=(h.shift-g)}var m=Math.floor(k/b.linebreakWidth*1000);if(m<0){m=e.toobig-3*m}if(p.fence){m+=e.fence}if((p.linebreakstyle===a.LINEBREAKSTYLE.AFTER&&p.texClass===a.TEXCLASS.OPEN)||p.texClass===a.TEXCLASS.CLOSE){m+=e.close}m+=h.nest*e.nestfactor;var q=e[p.linebreak||a.LINEBREAK.AUTO];if(!(q instanceof Array)){if(k>=0){m=q*h.nest}}else{m=Math.max(1,m+q[0]*h.nest)}if(m>=h.penalty){return false}h.penalty=m;h.values=p;h.W=i;h.w=o;p.lineleading=b.length2em(p.lineleading,f.VALUES.lineleading);return true}});a.mspace.Augment({HTMLbetterBreak:function(g,f){var m=this.getValues("linebreak");var h=g.scanW,k=this.HTMLspanElement(),l=k.bbox.w;if(k.style.paddingLeft){l+=parseFloat(k.style.paddingLeft)}if(m.linebreakstyle===a.LINEBREAKSTYLE.AFTER){h+=l;l=0}if(h-g.shift===0){return false}var i=b.linebreakWidth-h;var j=Math.floor(i/b.linebreakWidth*1000);if(j<0){j=e.toobig-3*j}j+=g.nest*e.nestfactor;var n=e[m.linebreak||a.LINEBREAK.AUTO];if(m.linebreak===a.LINEBREAK.AUTO&&l>=e.spacelimit){n=[(l+e.spaceoffset)*e.spacefactor]}if(!(n instanceof Array)){if(i>=0){j=n*g.nest}}else{j=Math.max(1,j+n[0]*g.nest)}if(j>=g.penalty){return false}g.penalty=j;g.values=m;g.W=h;g.w=l;m.lineleading=f.VALUES.lineleading;m.linebreakstyle="before";return true}});MathJax.Hub.Register.StartupHook("TeX mathchoice Ready",function(){a.TeXmathchoice.Augment({HTMLbetterBreak:function(g,f){return this.Core().HTMLbetterBreak(g,f)},HTMLmoveLine:function(j,f,h,i,g){return this.Core().HTMLmoveSlice(j,f,h,i,g)}})});a.maction.Augment({HTMLbetterBreak:function(g,f){return this.Core().HTMLbetterBreak(g,f)},HTMLmoveLine:function(j,f,h,i,g){return this.Core().HTMLmoveSlice(j,f,h,i,g)},HTMLmoveSlice:function(g,i,l,f,m,j){var o=document.getElementById("MathJax-HitBox-"+this.spanID+b.idPostfix);if(o){o.parentNode.removeChild(o)}var k=this.SUPER(arguments).HTMLmoveSlice.apply(this,arguments);if(i.length===0){l=this.HTMLspanElement();var h=0;while(l){o=this.HTMLhandleHitBox(l,"-Continue-"+h);l=l.nextMathJaxSpan;h++}}return k}});a.semantics.Augment({HTMLbetterBreak:function(g,f){return(this.data[0]?this.data[0].HTMLbetterBreak(g,f):false)},HTMLmoveLine:function(j,f,h,i,g){return(this.data[0]?this.data[0].HTMLmoveSlice(j,f,h,i,g):null)}});MathJax.Hub.Startup.signal.Post("HTML-CSS multiline Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/multiline.js")});

