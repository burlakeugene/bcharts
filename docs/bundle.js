!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=5)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0}body,html{height:100%}body{font-size:0}canvas{width:100%;height:100%;display:inline-block}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(o).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=l.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,f=0,u=[],d=n(4);function h(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(b(i.parts[a],e))}else{var l=[];for(a=0;a<i.parts.length;a++)l.push(b(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:l}}}}function p(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(l):n.push(i[a]={id:a,parts:[l]})}return n}function v(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertAt.before,n);n.insertBefore(e,r)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=f++;n=c||(c=m(e)),i=S.bind(null,n,a,!1),r=S.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),v(t,e),e}(e),i=T.bind(null,n,e),r=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=k.bind(null,n),r=function(){g(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return h(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var a=n[r];(l=o[a.id]).refs--,i.push(l)}t&&h(p(t,e),e);for(r=0;r<i.length;r++){var l;if(0===(l=i[r]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete o[l.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function k(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function T(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=d(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,e,n){"use strict";function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var l=function(t){return((t=new Date(t)).getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},s=function(){function t(e){var n=e.canvas,i=void 0!==n&&n,a=e.data,l=void 0===a?[]:a,s=e.limit,c=void 0===s?20:s,f=e.maxLimit,u=void 0!==f&&f,d=e.minLimit,h=void 0!==d&&d,p=e.offset,v=void 0===p?0:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state={canvas:{element:i,context:i.getContext("2d"),isCanvas:(i instanceof Element||i instanceof HTMLDocument)&&"canvas"===i.tagName.toLowerCase()},indicator:{styles:{color:"#27ca5d",width:2},animation:{time:1e3,scaleTo:5}},line:{styles:{color:"#ffffff",width:1,gradient:{from:"#ffffff",to:"#000000",enable:!1}}},view:{styles:{background:"#000000"}},offset:{left:30,right:50,top:20,bottom:40},data:{offset:v,limit:{value:c,max:u,min:h},array:l},target:{enable:!0,coords:{x:0,y:0},styles:{lineColor:"rgb(60,60,60)",lineWidth:1,dotColor:"#fff",dotWidth:4,panelBackground:"rgb(60, 60, 60)",panelColor:"#fff"}},grid:{enable:!0,steps:{x:10,y:5},styles:{color:"rgb(20, 20, 20)",width:1}},timeLine:{enable:!0,resize:!0,count:5},valuesLine:{enable:!0,resize:!0,count:10,digits:2},timeStamp:+new Date},this.state.initialOffset=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.state.offset),this.checkErrors(),this.init()}var e,n,s;return e=t,(n=[{key:"checkErrors",value:function(){var t=this.state.canvas;if(!t.isCanvas)throw new Error(t.element+" is not a canvas element")}},{key:"newDot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value,n=void 0!==e&&e,i=t.time,r=void 0!==i&&i,o=this.getDots("all"),a=o.dots,l=this.state.data,s=a[a.length-1],c=s?s.value:0,f=Math.random()*(Math.random()>.5?-1:1),u=+new Date;r=r||u,n=parseFloat(n)||0===n?n:c+f,l.offset&&l.offset++,a.push({value:n,time:r})}},{key:"clearCanvas",value:function(){var t=this.state.canvas,e=t.element.width;t.context.clearRect(0,0,t.width,t.height),t.element.width=1,t.element.width=e}},{key:"init",value:function(){this.listeners(),this.render()}},{key:"render",value:function(){this.clearCanvas(),this.drawBackground(),this.drawGrid(),this.drawLine(),this.drawTime(),this.drawValues(),this.drawTarget(),this.drawIndicator(),requestAnimationFrame(this.render.bind(this))}},{key:"getDots",value:function(t){var e=this.state.data,n=e.array,r=e.limit,o=e.offset,a=i(n);if(r=r.value,o){var l=a.length-o,s=l>r;s||(e.offset=a.length-r),a=a.slice(0,s?l:r)}a.length>r&&(a=a.slice(a.length-r,a.length));for(var c=a.length?a[0].value:0,f=a.length?a[0].value:0,u=n.length?n[0].value:0,d=n.length?n[0].value:0,h=0;h<=n.length-1;h++){var p=n[h].value;p>u&&(u=p),p<d&&(d=p)}for(var v=0;v<=a.length-1;v++){var g=a[v].value;g>c&&(c=g),g<f&&(f=g)}var m={all:{dots:n,max:u,min:d},draw:{dots:a,max:c,min:f},last:n[n.length-1],first:n[0]};return t&&m[t]?m[t]:m}},{key:"getIndicatorCoords",value:function(){var t,e=this.state,n=e.canvas,i=e.indicator,r=e.offset,o=n.element,a=(i.styles,i.animation,this.getDots()),l=a.draw,s=a.last,c=this.getLineDrawCoords(),f=(c.lineStart,c.lineEnd,c.lineTop),u=c.lineBottom,d=c.lineHeight;return s&&((t=f+d-d*(100*(s.value-l.min)/(l.max-l.min)/100))||(t=d/2+f),t>u&&(t=u),t<f&&(t=f)),{x:o.clientWidth-(r.right||0),y:t}}},{key:"drawIndicator",value:function(){var t=this.getIndicatorCoords(),e=t.x,n=t.y,i=this.state,r=i.indicator,o=i.canvas,a=r.styles,l=r.animation,s=o.context;s.strokeStyle="transparent",s.save(),(!this.indicatorAnimatedState||this.indicatorAnimatedState>=1)&&(this.indicatorAnimatedState=0),s.globalAlpha=1-this.indicatorAnimatedState,s.beginPath(),s.arc(e,n,a.width*this.indicatorAnimatedState*l.scaleTo,0,2*Math.PI),s.fillStyle=a.color,s.fill(),s.stroke(),this.indicatorAnimatedState+=1/60/(l.time/1e3),s.restore(),s.beginPath(),s.arc(e,n,a.width,0,2*Math.PI),s.fillStyle=a.color,s.fill(),s.stroke()}},{key:"drawBackground",value:function(){var t=this.state,e=t.canvas,n=t.view,i=e.context,r=e.element,o=n.styles.background;r.width=r.clientWidth,r.height=r.clientHeight,i.fillStyle=o,i.fillRect(0,0,r.width,r.height)}},{key:"getLineDrawCoords",value:function(){var t=this.state,e=t.canvas,n=t.offset,i=e.element,r=i.clientWidth-n.right,o=n.left,a=r-o,l=n.top,s=i.clientHeight-n.bottom;return{lineStart:r,lineEnd:o,lineView:a,lineTop:l,lineBottom:s,lineHeight:s-l}}},{key:"drawTime",value:function(){var t=this.getDots("draw"),e=this.getLineDrawCoords(),n=(e.lineStart,e.lineEnd,e.lineView,e.lineTop,e.lineBottom,e.lineHeight,this.state),r=n.canvas,o=n.timeLine,a=n.timeStamp,s=n.initialOffset,c=o.enable,f=o.count,u=r.element,d=r.context,h=i(t.dots),p=[];if(c){for(var v=Math.ceil(h.length/f),g=0,m=h.length-1;m>=0;m--)h.length<=f?p.push(h[m]):(g===v&&(g=0),g||p.push(h[m]),g++,0===m&&g/v>=1&&p.push(h[m]));for(var y=0;y<=p.length-1;y++){var b=p[y];d.font="100 12px sans-serif",d.fillStyle="#fff",d.textAlign="center",d.textBaseline="middle",d.fillText(l(b&&b.time?b.time:a),b?b.x:0,u.clientHeight-s.bottom/2+2)}}}},{key:"drawValues",value:function(){var t=this.getDots("draw"),e=t.max,n=t.min,i=this.getLineDrawCoords(),r=(i.lineStart,i.lineEnd,i.lineView,i.lineTop),o=i.lineBottom,a=i.lineHeight,l=this.state,s=l.canvas,c=l.valuesLine,f=l.offset,u=c.count,d=c.enable,h=c.digits,p=s.element,v=s.context,g=[];if(d){var m=a/(u-1),y=r+m,b=(p.clientHeight+f.top-f.bottom)/2;if(n===e){g.push({text:e,y:b});for(var w=(b-f.top)/m,x=(b-f.top)/m,S=1;S<=w;S++)g.push({text:e+e*S,y:b-m*S});for(var k=1;k<=x;k++)g.push({text:e-e*k,y:b+m*k})}else{g.push({text:e,y:r});for(var T=(e-n)/(u-1),O=1;O<=u-2;O++)g.push({text:e-T*O,y:y}),y+=m;g.push({text:n,y:o})}for(var E=0;E<=g.length-1;E++){var L=g[E];v.font="100 12px sans-serif",v.fillStyle="#fff",v.textAlign="center",v.textBaseline="middle",v.fillText(L.text.toFixed(h),p.clientWidth-f.right/2,L.y+2)}}}},{key:"drawLine",value:function(){for(var t=this.state,e=t.canvas,n=t.line,i=t.view,r=n.styles,o=r.gradient,a=r.color,l=r.width,s=i.styles.background,c=e.context,f=e.element,u=this.getLineDrawCoords(),d=u.lineStart,h=u.lineEnd,p=u.lineView,v=u.lineTop,g=u.lineBottom,m=u.lineHeight,y=this.getDots("draw"),b=y.dots,w=y.min,x=y.max,S=d,k=b.length-1,T=k;T>=0;T--){var O=b[T],E=O.value,L=p/k;O.x=S,O.y=v+m-m*(100*(E-w)/(x-w)/100),O.y||(O.y=m/2+v),S-=L}if(c.beginPath(),c.lineWidth=l,c.strokeStyle=a,c.lineJoin="round",o.enable){var j=c.createLinearGradient(0,v,0,m);j.addColorStop(0,o.from),j.addColorStop(1,o.to),c.fillStyle=j,c.lineTo(d,m)}for(var C=k;C>=0;C--){var P=b[C];c.lineTo(P.x,P.y)}o.enable&&(c.lineTo(h,g),c.fill()),c.stroke(),o.enable&&(c.beginPath(),c.lineWidth=l+1,c.strokeStyle=s,c.lineTo(h,0),c.lineTo(h,f.clientHeight),c.lineTo(d,f.clientHeight),c.lineTo(d,0),c.stroke())}},{key:"drawTarget",value:function(){var t=this.state,e=t.canvas,n=t.target,r=t.initialOffset,o=t.valuesLine,a=n.styles,s=n.coords,c=s.x,f=s.y,u=e.element,d=e.context,h=i(this.getDots("draw").dots),p=!1;if(n.enable&&c&&f){for(var v=0;v<=h.length-1;v++){var g=h[v],m=h[v+1];m&&c>=g.x&&c<=m.x&&(p=(m.x+g.x)/2<=c?m:g)}if(p){d.lineWidth=a.lineWidth,d.strokeStyle=a.lineColor,d.beginPath(),d.moveTo(0+r.left,p.y),d.lineTo(u.clientWidth-r.right,p.y),d.stroke(),d.beginPath(),d.moveTo(p.x,0+r.top),d.lineTo(p.x,u.clientHeight-r.bottom),d.stroke(),d.beginPath(),d.strokeStyle=d.fillStyle=a.dotColor,d.arc(p.x,p.y,a.dotWidth,0,2*Math.PI),d.fill(),d.stroke();var y={bottom:{background:a.panelBackground,color:a.panelColor,width:80,height:r.bottom,x:p.x-40,y:u.clientHeight-r.bottom,text:l(p.time)},right:{background:a.panelBackground,color:a.panelColor,width:r.right,height:20,x:u.clientWidth-r.right,y:p.y-10,text:p.value.toFixed(o.digits||2)}};Object.values(y).forEach((function(t){d.strokeStyle=d.fillStyle=t.background,d.beginPath(),d.rect(t.x,t.y,t.width,t.height),d.fill(),d.stroke(),d.font="100 12px sans-serif",d.fillStyle=t.color,d.textAlign=t.textAlign,d.textBaseline="center",d.fillText(t.text,t.x+t.width/2,t.y+t.height/2+2)}))}}}},{key:"drawGrid",value:function(){var t=this.state,e=t.canvas,n=t.grid,i=t.initialOffset,r=e.element,o=e.context,a=n.enable,l=n.steps,s=n.styles,c=n.type;if(a){o.lineWidth=s.width,o.strokeStyle=s.color,o.beginPath(),o.lineTo(0+i.left,0+i.top),o.lineTo(r.clientWidth-i.right,0+i.top),o.lineTo(r.clientWidth-i.right,r.clientHeight-i.bottom),o.lineTo(0+i.left,r.clientHeight-i.bottom),o.lineTo(0+i.left,0+i.top),o.stroke();var f=[],u=[],d="px"===c,h=(r.clientWidth-i.right-i.left)/l.x,p=0+i.left,v=(r.clientHeight-i.top-i.bottom)/l.y,g=0+i.top;if(d){for(var m=1;m<h;m++){var y=p+m*l.x;f.push(y)}for(var b=1;b<v;b++){var w=g+b*l.y;u.push(w)}}else{for(var x=1;x<l.x;x++){var S=p+x*h;f.push(S)}for(var k=1;k<l.y;k++){var T=g+k*v;u.push(T)}}for(var O=0;O<=f.length-1;O++)o.beginPath(),o.lineTo(f[O],0+i.top),o.lineTo(f[O],r.clientHeight-i.bottom),o.stroke();for(var E=0;E<=u.length-1;E++)o.beginPath(),o.lineTo(0+i.left,u[E]),o.lineTo(r.clientWidth-i.right,u[E]),o.stroke()}}},{key:"listeners",value:function(){var t=this,e=this.state,n=e.canvas,i=e.offset,r=(e.limit,e.target),o=e.initialOffset,a=n.element,l=!1,s=0,c=0,f=function(){r.coords={x:!1,y:!1}},u=function(t){l=!1,s=0,c=0};a.addEventListener("mouseup",(function(){u()})),a.addEventListener("mouseleave",(function(){u(),f()})),a.addEventListener("mousedown",(function(t){l={x:t.clientX,y:t.clientY},s=t.clientX,c=t.clientY})),a.addEventListener("mousemove",(function(e){var n=t.state,u=n.data,d=n.valuesLine,h=n.timeLine,p=t.getDots("all").dots,v=a.getBoundingClientRect();if(f(),a.style.cursor="default",e.clientX>=v.left+o.left+1&&e.clientX<=v.left+v.width-o.right&&e.clientY>=v.top+o.top&&e.clientY<=v.bottom-o.bottom&&(r.enable&&(a.style.cursor="crosshair"),r.coords={x:e.clientX-v.left,y:e.clientY-v.top}),e.clientX>=v.left+i.left&&e.clientX<=v.left+v.width-i.right&&e.clientY>=v.top+o.top&&e.clientY<=v.bottom-o.bottom&&l){var g=u.offset+e.clientX-s;u.offset=g<0?0:g}if(d.enable&&d.resize&&e.clientX>=v.left+v.width-i.right&&(a.style.cursor="row-resize",l)){var m=c-e.clientY,y=e.clientY-c,b=e.clientY>c,w=e.clientY<c;if(b){var x=(v.height+o.top-o.bottom)/2-60,S=(v.height+o.bottom-o.top)/2-60;i.top=i.top-m<x?i.top-m:x,i.bottom=i.bottom+y<S?i.bottom+y:S}w&&(i.top=i.top-m>o.top?i.top-m:o.top,i.bottom=i.bottom+y>o.bottom?i.bottom+y:o.bottom)}if(h.enable&&h.resize&&e.clientX>=v.left+i.left&&e.clientX<=v.left+v.width-i.right&&e.clientY>=v.bottom-o.bottom&&(a.style.cursor="col-resize",l)){var k=u.limit.value+e.clientX-s;u.limit.value=u.limit.min&&k<u.limit.min?u.limit.min:u.limit.max&&k>u.limit.max?u.limit.max:p.length<k?p.length:k<=2?2:k}l&&(s=e.clientX,c=e.clientY)}))}}])&&a(e.prototype,n),s&&a(e,s),t}();n(0);const c=function(t,e){return new Promise((function(n,i){e||i("Empty request"),e.start&&e.start();let r=new XMLHttpRequest,o=e.url?e.url:"",a=!e.async||e.async,l=e.data,s=!!e.clearData,c=!!e.responseHeaders,f=0;if("GET"===t)for(let t in l)o+=f?"&"+t+"="+l[t]:"?"+t+"="+l[t],f++;if(r.open(t,o,a),e.headers)for(let t in e.headers)r.setRequestHeader(t,e.headers[t]);r.send(JSON.stringify(l)),r.onreadystatechange=function(){if(c&&this.readyState==this.HEADERS_RECEIVED){c=r.getAllResponseHeaders().trim().split(/[\r\n]+/);let t={};c.forEach((function(e){let n=e.split(": "),i=n.shift(),r=n.join(": ");t[i]=r})),c=t}if(4==r.readyState)if(r.status<200||r.status>300){e.end&&e.end();let t=s?JSON.parse(r.response):r;i(t)}else{e.end&&e.end();let t=s?JSON.parse(r.response):r;c&&(t.headers=c),n(t)}}}))};const f=function(){this.getParams=()=>{let t=window.location.search;return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce((t,e)=>{let[n,i]=e.split("=");return t[n]=i?decodeURIComponent(i.replace(/\+/g," ")):"",t},{}):{}},this.getParam=t=>this.getParams()[t]||null,this.getParamSingle=function(t){return(t=new RegExp("[?&]"+encodeURIComponent(t)+"=([^&]*)").exec(location.search))?decodeURIComponent(t[1]):null},this.updateQueryString=(t,e,n=!1)=>{n||(n=window.location.href);var i,r=new RegExp("([?&])"+t+"=.*?(&|#|$)(.*)","gi");if(r.test(n))return null!=e?n.replace(r,"$1"+t+"="+e+"$2$3"):(i=n.split("#"),n=i[0].replace(r,"$1$3").replace(/(&|\?)$/,""),void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n);if(null!=e){var o=-1!==n.indexOf("?")?"&":"?";return i=n.split("#"),n=i[0]+o+t+"="+e,void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n}return n},this.setParam=(t,e)=>{let n=this.updateQueryString(t,e);window.history.pushState({path:n},"",n)}};var u=new function(){this.post=function(t){return c("POST",t)},this.get=function(t){return c("GET",t)},this.put=function(t){return c("PUT",t)},this.delete=function(t){return c("DELETE",t)}},d=new f;window.addEventListener("load",(function(){document.querySelectorAll("canvas").forEach((function(t){console.log(t);var e=new s({canvas:t,limit:50,offset:0}),n=d.getParam("symbol");setInterval((function(){n?u.get({url:"https://quotes.instaforex.com/api/quotesTick",clearData:!0,data:{q:n}}).then((function(t){t&&t[0]&&e.newDot({value:(t[0].ask+t[0].bid)/2})})):e.newDot()}),500)}))}))}])}));