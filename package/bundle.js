module.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./",i(i.s=0)}([function(t,e,i){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e),Date.prototype.formatting=function(t){var e=this.getFullYear().toString();t=t.replace(/yyyy/g,e);var i=(this.getMonth()+1).toString();t=t.replace(/mm/g,i[1]?i:"0"+i[0]);var n=this.getDate().toString();t=t.replace(/dd/g,n[1]?n:"0"+n[0]);var o=this.getHours().toString();t=t.replace(/hh/g,o[1]?o:"0"+o[0]);var l=this.getMinutes().toString();t=t.replace(/ii/g,l[1]?l:"0"+l[0]);var r=this.getSeconds().toString();return t=t.replace(/ss/g,r[1]?r:"0"+r[0])},CanvasRenderingContext2D.prototype.roundRect=function(t,e,i,n,o){return i<2*o&&(o=i/2),n<2*o&&(o=n/2),this.beginPath(),this.moveTo(t+o,e),this.arcTo(t+i,e,t+i,e+n,o),this.arcTo(t+i,e+n,t,e+n,o),this.arcTo(t,e+n,t,e,o),this.arcTo(t,e,t+i,e,o),this.closePath(),this};var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hh:ii:ss";return(t=new Date(t)).formatting(e)},f=function t(e,i){for(var n in i)try{i[n].constructor==Object?e[n]=t(e[n],i[n]):e[n]=i[n]}catch(t){e[n]=i[n]}return e},c=function(){function t(e){var i=e.canvas,n=void 0!==i&&i,o=e.data,r=void 0===o?[]:o,a=e.settings,s=void 0===a?{}:a,f=e.offset,c=void 0===f?{left:30,right:50,top:20,bottom:40}:f,h=e.actions,d=void 0===h?{}:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.actions=d,this.canvas={element:n,context:n.getContext("2d"),isCanvas:(n instanceof Element||n instanceof HTMLDocument)&&"canvas"===n.tagName.toLowerCase()},this.data=r,this.settings={data:{offset:0,limit:{value:100,min:10}},offset:l({},c),line:{styles:{color:"#ffffff",width:2,lineGradient:{points:[{color:"#954ce9"},{color:"#24c1ed"}],enable:!0},backgroundGradient:{points:[{color:"rgba(149, 76, 233, 0.17)"},{color:"rgba(149, 76, 233, 0)"}],enable:!0}},offset:l({},c)},view:{styles:{background:"#1a1e30"}},targetValue:{enable:!0,coords:{x:0,y:0},target:{enable:!0,styles:{points:[{width:10,background:"transparent",strokeColor:"#6f7dab",strokeWidth:1},{width:4,background:"#24c1ed",strokeColor:"transparent"}]}},horizontalLine:{enable:!0,styles:{line:{color:"#6f7dab",width:1},panel:{background:"#6f7dab",color:"#fff"}}},verticalLine:{enable:!0,styles:{line:{color:"#6f7dab",width:1},panel:{background:"#6f7dab",color:"#fff"}}},valueLabel:{enable:!0,styles:{color:"#fff",background:"#954ce9",borderRadius:2}}},grid:{enable:!0,styles:{background:"",color:"#2b2a49",width:1},horizontal:{step:4,enable:!0},vertical:{step:10,enable:!0}},timeLine:{enable:!0,resize:!0,mousewheel:{enable:!0,speed:1},count:5,styles:{color:"#6f7dab"}},valuesLine:{enable:!0,position:"right",resize:{enable:!0,topMin:80,bottomMin:80},count:10,digits:2,styles:{color:"#6f7dab"},overflowValues:!1},currentValue:{enable:!0,position:"right",digits:2,styles:{panel:{color:"#ffffff",background:"#954ce9",height:20},line:{color:"#954ce9",width:1,gradient:{enable:!0,points:[{color:"#24c1ed"},{color:"#954ce9"}]},dash:[10,5]}}},indicator:{enable:!0,styles:{color:"#27ca5d",width:3},animation:{time:1e3,scaleTo:5}},timeFormat:{line:"hh:ii:ss",current:"hh:ii:ss"},timeStamp:+new Date},this.setSettings(s),this.init()}var e,i,o;return e=t,(i=[{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.offset&&(t.line={},t.line.offset=t.offset),f(this.settings,t),this.setPointsLimit(!1,!1)}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=t}},{key:"getData",value:function(){return this.data}},{key:"getLast",value:function(){return this.getPoints("last")}},{key:"newPoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value,i=void 0!==e&&e,n=t.time,o=void 0!==n&&n,l=this.getPoints("all"),r=l.points,a=this.settings,s=a.data,f=r[r.length-1],c=f?f.value:0,h=Math.random()*(Math.random()>.5?-1:1),d=+new Date;o=o||d,i=parseFloat(i)||0===i?i:c+h,s.offset&&s.offset++,r.push({value:i,time:o})}},{key:"setPoint",value:function(t,e){var i=e.value,n=e.time,o=this.getPoints("all").points;o[t]&&(o[t].value=i||o[t].value,o[t].time=n||o[t].time)}},{key:"init",value:function(){this.listeners(),this.render()}},{key:"resize",value:function(){}},{key:"render",value:function(){this.drawBackground(),this.drawGrid(),this.drawLine(),this.drawValues(),this.drawTime(),this.drawCurrentValue(),this.drawTarget(),this.drawIndicator(),requestAnimationFrame(this.render.bind(this))}},{key:"getPoints",value:function(t){var e=this.settings.data,i=this.data,o=n(this.data);if(e.offset){var l=o.length-e.offset,r=l>e.limit.value;r||(e.offset=o.length-e.limit.value),o=o.slice(0,r?l:e.limit.value)}o.length>e.limit.value&&(o=o.slice(o.length-e.limit.value,o.length));for(var a=o.length?o[0].value:0,s=o.length?o[0].value:0,f=e.length?e[0].value:0,c=e.length?e[0].value:0,h=0;h<=i.length-1;h++){var d=i[h].value;d>f&&(f=d),d<c&&(c=d)}for(var u=0;u<=o.length-1;u++){var g=o[u].value;g>a&&(a=g),g<s&&(s=g)}var v={all:{points:i,max:f,min:c},draw:{points:o=this.calcPointsCoords(o,s,a),max:a,min:s},last:i[i.length-1],first:i[0]};return t&&v[t]?v[t]:v}},{key:"calcPointsCoords",value:function(t,e,i){for(var n=this.getLineDrawCoords(),o=n.lineStart,l=(n.lineEnd,n.lineView),r=n.lineTop,a=(n.lineBottom,n.lineHeight),s=o,f=t.length-1,c=f;c>=0;c--){var h=t[c],d=h.value,u=l/f;h.x=s,h.y=r+a-a*(100*(d-e)/(i-e)/100),h.y||(h.y=a/2+r),s-=u}return t}},{key:"getIndicatorCoords",value:function(){var t,e=this.canvas,i=this.settings,n=i.indicator,o=i.line.offset,l=e.element,r=(n.styles,n.animation,this.getPoints()),a=r.draw,s=r.last,f=this.getLineDrawCoords(),c=(f.lineStart,f.lineEnd,f.lineTop),h=f.lineBottom,d=f.lineHeight,u=l.clientWidth-(o.right||0),g=!1,v=!1;return s&&((t=c+d-d*(100*(s.value-a.min)/(a.max-a.min)/100))||(t=d/2+c),t>h&&(t=h,v=!0),t<c&&(t=c,g=!0)),{x:u,y:t,overflowUp:g,overflowDown:v}}},{key:"drawIndicator",value:function(){var t=this.getIndicatorCoords(),e=t.x,i=t.y,n=this.settings,o=this.canvas,l=n.indicator,r=l.styles,a=l.animation,s=l.enable,f=o.context;s&&(f.strokeStyle="transparent",f.save(),(!this.indicatorAnimatedState||this.indicatorAnimatedState>=1)&&(this.indicatorAnimatedState=0),f.globalAlpha=1-this.indicatorAnimatedState,f.beginPath(),f.arc(e,i,r.width*this.indicatorAnimatedState*a.scaleTo,0,2*Math.PI),f.fillStyle=r.color,f.fill(),f.stroke(),this.indicatorAnimatedState+=1/60/(a.time/1e3),f.restore(),f.beginPath(),f.arc(e,i,r.width,0,2*Math.PI),f.fillStyle=r.color,f.fill(),f.stroke())}},{key:"drawCurrentValue",value:function(){var t=this.settings,e=this.canvas,i=t.currentValue,n=t.offset,o=i.styles,l=i.enable,r=i.digits,a=i.position,s=e.context,f=e.element;if(l){var c=this.getPoints("last"),h=this.getIndicatorCoords(),d=h.y,u=h.overflowDown,g=h.overflowUp,v=d-o.panel.height/2,p="right"!==a?0:f.clientWidth-n.right,m="right"!==a?n.left:n.right,y=o.panel.height,b="right"!==a?n.left/2:f.clientWidth-n.right/2,w=d,x=d,k=n.left,P=f.clientWidth-n.right,S=o.line.color;if(!g&&!u){if(o.line.gradient&&o.line.gradient.enable){var L=o.line.gradient.points||[];S=s.createLinearGradient(k,0,P,0),1===L.length&&L.push(L[0]),L.forEach((function(t,e){var i=t.stop,n=t.color;i||0===i||(i=1/(L.length-1)*e),S.addColorStop(i,n)}))}s.save(),s.lineWidth=o.line.width,s.strokeStyle=s.fillStyle=S,s.beginPath(),o.line.dash&&s.setLineDash(o.line.dash),s.lineTo(k,x),s.lineTo(P,x),s.stroke(),s.restore()}s.strokeStyle=s.fillStyle=o.panel.background,s.beginPath(),s.rect(p,v,m,y),s.fill(),s.stroke(),s.font="100 12px arial",s.fillStyle=o.panel.color,s.textAlign="center",s.textBaseline="middle",s.fillText((c.value||0).toFixed(r),b,w)}}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,i=t.context,n=t.element,o=e.styles.background,l=window.devicePixelRatio||1;n.width=n.clientWidth*l,n.height=n.clientHeight*l,i.scale(l,l),i.fillStyle=o,i.fillRect(0,0,n.width,n.height)}},{key:"getLineDrawCoords",value:function(){var t=this.canvas,e=this.settings,i=e.line,n=(e.grid,i.offset),o=t.element,l=o.clientWidth-n.right,r=n.left,a=l-r,s=n.top+i.styles.width,f=o.clientHeight-n.bottom-i.styles.width;return{lineStart:l,lineEnd:r,lineView:a,lineTop:s,lineBottom:f,lineHeight:f-s}}},{key:"findPointByX",value:function(t){for(var e=n(this.getPoints("draw").points),i=!1,o=0;o<=e.length-1;o++){var l=e[o],r=e[o+1],a=Math.round(l.x),s=r?Math.round(r.x):0;(s||0===s)&&t>=a&&t<=s&&(i=(s+a)/2<=t?r:l)}return i}},{key:"drawTime",value:function(){var t=this.getLineDrawCoords(),e=t.lineStart,i=t.lineEnd,n=(t.lineView,t.lineTop,t.lineBottom,t.lineHeight,this.canvas),o=this.settings,l=o.timeLine,r=o.timeStamp,a=o.offset,f=o.timeFormat,c=l.enable,h=l.count,d=l.styles,u=n.element,g=n.context;if(c){var v=i,p=(e-v)/h;p+=p/(h-1);for(var m=0;m<h;m++){var y=v+p*m,b=this.findPointByX(y);g.font="100 12px arial",g.fillStyle=d.color,g.textAlign="center",g.textBaseline="middle",g.fillText(s(b&&b.time?b.time:r,f.line),y||0,u.clientHeight-a.bottom/2)}}}},{key:"drawValues",value:function(){var t=this.getPoints("draw"),e=t.max,i=t.min,n=this.getLineDrawCoords(),o=(n.lineStart,n.lineEnd,n.lineView,n.lineTop),l=n.lineBottom,r=n.lineHeight,a=this.canvas,s=this.settings,f=s.valuesLine,c=s.line,h=s.offset,d=s.view,u=f.count,g=f.enable,v=f.digits,p=f.styles,m=f.overflowValues,y=f.position,b=a.element,w=a.context,x=[];if(g){var k=r/(u-1),P=o+k,S=(b.clientHeight+c.offset.top-c.offset.bottom)/2;if(i===e){x.push({text:e,y:S});for(var L=(S-c.offset.top)/k,T=(S-c.offset.top)/k,W=1;W<=L;W++)x.push({text:e+e*W,y:S-k*W});for(var D=1;D<=T;D++)x.push({text:e-e*D,y:S+k*D})}else{x.push({text:e,y:o});for(var O=(e-i)/(u-1),C=1;C<=u-2;C++)x.push({text:e-O*C,y:P}),P+=k;x.push({text:i,y:l})}if(m&&(c.offset.top>h.top||c.offset.bottom<h.bottom)){var E=(e-i)/(u-1),H=Math.max.apply(null,x.map((function(t){return t.text}))),M=Math.min.apply(null,x.map((function(t){return t.y}))),X=Math.min.apply(null,x.map((function(t){return t.text}))),B=Math.max.apply(null,x.map((function(t){return t.y}))),Y=Math.round((c.offset.top-h.top)/k),j=Math.round((c.offset.bottom-h.bottom)/k);e===i&&(E=e);for(var A=1;A<=Y;A++)x.push({text:H+E*A,y:M-k*A});for(var z=1;z<=j;z++)x.push({text:X-E*z,y:B+k*z})}for(var V=0;V<=x.length-1;V++){var R=x[V];w.font="100 12px arial",w.fillStyle=p.color,w.textAlign="center",w.textBaseline="middle",w.fillText(R.text.toFixed(v),"left"===y?h.left/2:b.clientWidth-h.right/2,R.y)}m&&(w.fillStyle=d.styles.background,w.strokeStyle="transparent",w.beginPath(),w.rect(0,0,b.clientWidth,h.top-5),w.fill(),w.stroke(),w.fillStyle=d.styles.background,w.strokeStyle="transparent",w.beginPath(),w.rect(0,b.clientHeight-h.bottom+5,b.clientWidth,b.clientHeight),w.fill(),w.stroke())}}},{key:"drawLine",value:function(){var t=this.canvas,e=this.settings,i=e.line,n=e.grid,o=e.offset,l=e.view,r=i.styles,a=r.backgroundGradient,s=r.lineGradient,f=r.color,c=r.width,h=t.context,d=t.element,u=this.getLineDrawCoords(),g=u.lineStart,v=u.lineEnd,p=u.lineTop,m=u.lineBottom,y=this.getPoints("draw"),b=y.points;if(y.min,y.max,h.beginPath(),h.lineWidth=c,h.strokeStyle=f,h.lineJoin="round",s.enable){var w=h.createLinearGradient(v,0,g,0),x=s.points||[];1===x.length&&x.push(x[0]),x.forEach((function(t,e){var i=t.stop,n=t.color;i||0===i||(i=1/(x.length-1)*e),w.addColorStop(i,n)})),h.strokeStyle=w}for(var k=b.length-1;k>=0;k--){var P=b[k];h.lineTo(P.x,P.y)}if(h.stroke(),a.enable&&b.length>1){h.beginPath(),h.lineWidth=0,h.strokeStyle="transparent";var S=h.createLinearGradient(0,p,0,m),L=a.points||[];1===L.length&&L.push(b[0]),L.forEach((function(t,e){var i=t.stop,n=t.color;i||0===i||(i=1/(L.length-1)*e),S.addColorStop(i,n)})),h.fillStyle=S,h.lineTo(g,m);for(var T=b.length-1;T>=0;T--){var W=b[T];h.lineTo(W.x,W.y)}h.lineTo(v,m),h.fill(),h.stroke()}n.enable&&(h.save(),h.beginPath(),h.lineJoin="miter",h.lineWidth=c,h.strokeStyle=l.styles.background,h.lineTo(0+o.left-c/2,0+o.top-c/2),h.lineTo(0+o.left-c/2,d.clientHeight-o.bottom+c/2),h.lineTo(d.clientWidth-o.right+c/2,d.clientHeight-o.bottom+c/2),h.lineTo(d.clientWidth-o.right+c/2,0+o.top-c/2),h.closePath(),h.stroke(),h.beginPath(),h.lineJoin="miter",h.lineWidth=n.styles.width,h.strokeStyle=n.styles.color,n.styles.dash&&h.setLineDash(n.styles.dash),h.lineTo(0+o.left,0+o.top),h.lineTo(0+o.left,d.clientHeight-o.bottom),h.lineTo(d.clientWidth-o.right,d.clientHeight-o.bottom),h.lineTo(d.clientWidth-o.right,0+o.top),h.closePath(),h.stroke(),h.restore())}},{key:"drawTarget",value:function(){var t=this.canvas,e=this.settings,i=this.actions,n=e.targetValue,o=e.offset,l=e.valuesLine,r=e.timeStamp,a=e.timeFormat,f=n.enable,c=n.coords,h=n.target,d=n.horizontalLine,u=n.verticalLine,g=n.valueLabel,v=c.x,p=c.y,m=t.element,y=t.context;if(f&&v&&p){var b=this.findPointByX(v),w=0;if(b){i.mouseOverPoint&&i.mouseOverPoint(b),h&&h.enable&&h.styles.points.forEach((function(t){y.beginPath(),y.strokeStyle=t.strokeColor,y.lineWidth=t.strokeWidth,y.fillStyle=t.background,y.arc(b.x,b.y,t.width,0,2*Math.PI),y.fill(),y.stroke(),t.width&&t.width>w&&(w=t.width)})),d&&d.enable&&(y.save(),y.lineWidth=d.styles.line.width,y.strokeStyle=d.styles.line.color,b.x-w>o.left&&!d.leftLineHidden&&(y.beginPath(),y.moveTo(0+o.left,b.y),y.lineTo(b.x-w,b.y),y.stroke()),b.x+w<m.clientWidth-o.right&&!d.rightLineHidden&&(y.beginPath(),y.moveTo(b.x+w,b.y),y.lineTo(m.clientWidth-o.right,b.y),y.stroke()),y.restore()),u&&u.enable&&(y.save(),y.lineWidth=u.styles.line.width,y.strokeStyle=u.styles.line.color,b.y-w>o.top&&!u.topLineHidden&&(y.beginPath(),y.moveTo(b.x,0+o.top),y.lineTo(b.x,b.y-w),y.stroke()),b.y+w<m.clientHeight-o.bottom&&!u.bottomLineHidden&&(y.beginPath(),y.moveTo(b.x,b.y+w),y.lineTo(b.x,m.clientHeight-o.bottom),y.stroke(),y.restore()));var x={};if(d&&d.enable&&(x.right={background:d.styles.panel.background,color:d.styles.panel.color,width:"left"===l.position?o.left:o.right,height:20,x:"left"===l.position?0:m.clientWidth-o.right,y:b.y-10,text:b.value.toFixed(l.digits||2)}),u&&u.enable){var k=s(b&&b.time?b.time:r,a.current),P=6*k.length+20,S=b.x-P/2;S<0&&(S=0),S+P>m.clientWidth&&(S=m.clientWidth-P),x.bottom={background:u.styles.panel.background,color:u.styles.panel.color,width:P,height:o.bottom,x:S,y:m.clientHeight-o.bottom,text:k}}if(Object.values(x).forEach((function(t){y.strokeStyle=y.fillStyle=t.background,y.beginPath(),y.rect(t.x,t.y,t.width,t.height),y.fill(),y.stroke(),y.font="100 12px arial",y.fillStyle=t.color,y.textAlign=t.textAlign,y.textBaseline="middle",y.fillText(t.text,t.x+t.width/2,t.y+t.height/2)})),g&&g.enable){var L=b.value.toFixed(l.digits||2),T=10*L.length,W=b.x+.5,D=b.x-T/2,O=!1,C=b.y-25-w-10;C<0&&(O=!0,C=b.y+w+10),y.strokeStyle=y.fillStyle=g.styles.background,y.beginPath(),O?(y.moveTo(W,C-5),y.lineTo(W-5,C),y.lineTo(W+5,C)):(y.moveTo(W,C+25+5),y.lineTo(W-5,C+25),y.lineTo(W+5,C+25)),y.fill(),y.stroke(),y.beginPath(),y.roundRect(D,C,T,25,g.styles.borderRadius),y.fill(),y.stroke(),y.font="100 12px arial",y.fillStyle=g.styles.color,y.textAlign="center",y.textBaseline="middle",y.fillText(L,D+T/2,C+12.5)}}}}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,i=e.grid,n=e.offset,o=t.element,r=t.context,a=i.enable,s=i.horizontal,f=i.vertical,c=i.styles;if(a){var h=0+n.left,d=o.clientWidth-n.right-n.left,u=0+n.top,g=o.clientHeight-n.bottom-n.top;if(r.save(),r.lineWidth=c.width,r.strokeStyle=c.color,r.fillStyle=c.background,r.rect(h,u,d,g),r.fill(),r.restore(),s&&s.enable){r.save();var v=[],p=(o.clientHeight-n.top-n.bottom)/(s.step+1),m=(o.clientHeight-n.top-n.bottom)/s.step,y=n.top,b=l({},c,{},s.styles||{});if("px"===(s.type||i.type))for(var w=1;w<m;w++){var x=y+w*s.step;v.push(x)}else for(var k=1;k<s.step+1;k++){var P=y+k*p;v.push(P)}r.lineWidth=b.width,r.strokeStyle=b.color,b.dash&&r.setLineDash(b.dash);for(var S=0;S<=v.length-1;S++)r.beginPath(),r.lineTo(0+n.left,v[S]),r.lineTo(o.clientWidth-n.right,v[S]),r.stroke();r.restore()}if(f&&f.enable){r.save();var L=[],T=(o.clientWidth-n.right-n.left)/(f.step+1),W=(o.clientWidth-n.right-n.left)/f.step,D=n.left,O=l({},c,{},f.styles||{});if("px"===(f.type||i.type))for(var C=1;C<W;C++){var E=D+C*f.step;L.push(E)}else for(var H=1;H<f.step+1;H++){var M=D+H*T;L.push(M)}r.lineWidth=O.width,r.strokeStyle=O.color,O.dash&&r.setLineDash(O.dash);for(var X=0;X<=L.length-1;X++)r.beginPath(),r.lineTo(L[X],0+n.top),r.lineTo(L[X],o.clientHeight-n.bottom),r.stroke();r.restore()}}}},{key:"setPointsLimit",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.settings,n=i.data,o=this.getPoints("all"),l=o.points;t||(t=n.limit.value),n.limit.value=n.limit.min&&t<n.limit.min?n.limit.min:n.limit.max&&t>n.limit.max?n.limit.max:e&&l.length<t?l.length:t<=2?2:t}},{key:"listeners",value:function(){var t=this,e=this.canvas,i=this.settings,n=this.actions,o=i.targetValue,l=e.element,r=!1,a=0,s=0,f=function(){o.coords={x:!1,y:!1}},c=function(e){r=!1,a=0,s=0,delete t.prevPinchDistance},h="ontouchstart"in document.documentElement;document.addEventListener("gesturestart",(function(t){t.preventDefault()})),window.addEventListener("resize",(function(e){var i=t.settings,n=i.line,o=i.offset,r=i.valuesLine,a=l.getBoundingClientRect(),s=(a.height+o.top-o.bottom)/2-(r.resize.topMin||0),f=(a.height+o.bottom-o.top)/2-(r.resize.bottomMin||0);n.offset.top>s&&(n.offset.top=s),n.offset.top<o.top&&(n.offset.top=o.top),n.offset.bottom>f&&(n.offset.bottom=f),n.offset.bottom<o.bottom&&(n.offset.bottom=o.bottom),t.resize()})),h?(l.addEventListener("touchend",(function(){c(),f()})),l.addEventListener("touchstart",(function(t){var e=t.touches,i=l.getBoundingClientRect(),n=e[0];1===e.length&&(o.coords={x:n.clientX-i.left,y:n.clientY-i.top}),a=n.clientX,s=n.clientY,r={x:a,y:s}})),l.addEventListener("touchmove",(function(e){var i=t.settings,n=(i.valuesLine,i.timeLine,i.data),c=i.line,h=i.offset,d=t.getPoints("all").points,u=l.getBoundingClientRect(),g=e.touches,v=g[0];if(f(),1===g.length&&(v.clientX>=u.left+h.left+1&&v.clientX<=u.left+u.width-h.right&&v.clientY>=u.top+h.top&&v.clientY<=u.bottom-h.bottom&&(o.coords={x:v.clientX-u.left,y:v.clientY-u.top}),v.clientX>=u.left+c.offset.left&&v.clientX<=u.left+u.width-c.offset.right&&v.clientY>=u.top+h.top&&v.clientY<=u.bottom-h.bottom&&r)){var p=n.offset+v.clientX-a;p<0&&(p=0),p>d.length-n.limit.value&&(p=d.length-n.limit.value),n.offset=p}if(2===g.length){var m=g[0],y=g[1],b=Math.hypot(m.clientX-y.clientX,m.clientY-y.clientY);if(!t.prevPinchDistance)return void(t.prevPinchDistance=b);var w=t.prevPinchDistance-b;t.prevPinchDistance=b;var x=n.limit.value+w;t.setPointsLimit(x)}r&&(a=v.clientX,s=v.clientY)}))):(l.addEventListener("mouseup",(function(){c()})),l.addEventListener("mouseleave",(function(){c(),f()})),l.addEventListener("mousedown",(function(t){a=t.clientX,s=t.clientY,r={x:a,y:s}})),l.addEventListener("mousewheel",(function(e){var n=e.deltaY,o=i.data,l=i.timeLine.mousewheel,r=o.limit.value+n;if(!l.enable)return!1;l&&l.speed&&(r=o.limit.value+(n>0?l.speed:-1*l.speed)),t.setPointsLimit(r)})),l.addEventListener("mousemove",(function(e){var i=t.settings,c=i.valuesLine,h=i.timeLine,d=i.data,u=i.line,g=i.offset,v=t.getPoints("all").points,p=l.getBoundingClientRect();if(f(),l.style.cursor="default",e.clientX>=p.left+g.left+1&&e.clientX<=p.left+p.width-g.right&&e.clientY>=p.top+g.top&&e.clientY<=p.bottom-g.bottom&&(o.enable&&(l.style.cursor="crosshair"),o.coords={x:e.clientX-p.left,y:e.clientY-p.top}),e.clientX>=p.left+u.offset.left&&e.clientX<=p.left+p.width-u.offset.right&&e.clientY>=p.top+g.top&&e.clientY<=p.bottom-g.bottom){if(r){var m=d.offset+e.clientX-a;m<0&&(m=0),m>v.length-d.limit.value&&(m=v.length-d.limit.value),d.offset=m}n.mouseEnterLine&&!t.enterLineBool&&(t.leaveLineBool=!1,t.enterLineBool=!0,n.mouseEnterLine())}else n.mouseLeaveLine&&!t.leaveLineBool&&(t.enterLineBool=!1,t.leaveLineBool=!0,n.mouseLeaveLine());if(c.enable&&c.resize.enable&&("left"===c.position?e.clientX<g.left:e.clientX>=p.left+p.width-g.right)){if(l.style.cursor="row-resize",r){var y=s-e.clientY,b=e.clientY-s,w=e.clientY>s,x=e.clientY<s;if(w){var k=(p.height+g.top-g.bottom)/2-(c.resize.topMin||0),P=(p.height+g.bottom-g.top)/2-(c.resize.bottomMin||0);u.offset.top=u.offset.top-y<k?u.offset.top-y:k,u.offset.bottom=u.offset.bottom+b<P?u.offset.bottom+b:P}x&&(u.offset.top=u.offset.top-y>g.top?u.offset.top-y:g.top,u.offset.bottom=u.offset.bottom+b>g.bottom?u.offset.bottom+b:g.bottom)}u.offset.top<g.top&&(u.offset.top=g.top),u.offset.bottom<g.bottom&&(u.offset.bottom=g.bottom)}if(h.enable&&h.resize&&e.clientX>=p.left+u.offset.left&&e.clientX<=p.left+p.width-u.offset.right&&e.clientY>=p.bottom-g.bottom&&(l.style.cursor="col-resize",r)){var S=d.limit.value+e.clientX-a;t.setPointsLimit(S)}r&&(a=e.clientX,s=e.clientY)})))}}])&&a(e.prototype,i),o&&a(e,o),t}();e.default=c}]);