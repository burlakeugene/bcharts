!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=5)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{margin:0 0;height:100%;width:100%;overflow:hidden}.container{height:100%}canvas{width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span{position:absolute;top:0;left:0;font-size:20px;color:#fff}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(r).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i,o,r={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=l.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,f=0,u=[],d=n(4);function h(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(b(i.parts[a],e))}else{var l=[];for(a=0;a<i.parts.length;a++)l.push(b(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:l}}}}function p(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],a=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(l):n.push(i[a]={id:a,parts:[l]})}return n}function g(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return y(e,t.attrs),g(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var a=f++;n=c||(c=m(e)),i=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),g(t,e),e}(e),i=T.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=S.bind(null,n),o=function(){v(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return h(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o];(l=r[a.id]).refs--,i.push(l)}t&&h(p(t,e),e);for(o=0;o<i.length;o++){var l;if(0===(l=i[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete r[l.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function k(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function S(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function T(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=d(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var s=function(t){return((t=new Date(t)).getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},c=function t(e,n){for(var i in n)try{n[i].constructor==Object?e[i]=t(e[i],n[i]):e[i]=n[i]}catch(t){e[i]=n[i]}return e},f=function(){function t(e){var n=e.canvas,i=void 0!==n&&n,o=e.data,a=void 0===o?[]:o,l=e.settings,s=void 0===l?{}:l,c=e.offset,f=void 0===c?{left:30,right:50,top:20,bottom:40}:c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas={element:i,context:i.getContext("2d"),isCanvas:(i instanceof Element||i instanceof HTMLDocument)&&"canvas"===i.tagName.toLowerCase()},this.data=a,this.settings={data:{offset:0,limit:{value:100}},offset:r({},f),indicator:{enable:!0,styles:{color:"#27ca5d",width:3},animation:{time:1e3,scaleTo:5}},line:{styles:{color:"#ffffff",width:2,lineGradient:{from:"#954ce9",to:"#24c1ed",enable:!0},backgroundGradient:{from:"rgba(149, 76, 233, 0.17)",to:"rgba(149, 76, 233, 0)",enable:!0}},offset:r({},f)},view:{styles:{background:"#1a1e30"}},target:{enable:!0,coords:{x:0,y:0},styles:{line:{color:"#6f7dab",width:1},panel:{background:"#6f7dab",color:"#fff"},dots:[{width:10,background:"transparent",strokeColor:"#6f7dab",strokeWidth:1},{width:4,background:"#24c1ed",strokeColor:"transparent"}]}},grid:{enable:!0,steps:{x:10,y:5},styles:{background:"",color:"#2b2a49",width:1}},timeLine:{enable:!0,resize:!0,count:5,styles:{color:"#6f7dab"}},valuesLine:{enable:!0,resize:!0,count:10,digits:2,styles:{color:"#6f7dab"}},timeStamp:+new Date},this.setSettings(s),this.init()}var e,n,o;return e=t,(n=[{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.offset&&(t.line={},t.line.offset=t.offset),c(this.settings,t)}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=t}},{key:"getData",value:function(){return this.data}},{key:"getLast",value:function(){return this.getDots("last")}},{key:"newDot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value,n=void 0!==e&&e,i=t.time,o=void 0!==i&&i,r=this.getDots("all"),a=r.dots,l=this.settings,s=l.data,c=a[a.length-1],f=c?c.value:0,u=Math.random()*(Math.random()>.5?-1:1),d=+new Date;o=o||d,n=parseFloat(n)||0===n?n:f+u,s.offset&&s.offset++,a.push({value:n,time:o})}},{key:"init",value:function(){this.listeners(),this.render()}},{key:"render",value:function(){this.drawBackground(),this.drawGrid(),this.drawLine(),this.drawTime(),this.drawValues(),this.drawTarget(),this.drawIndicator(),requestAnimationFrame(this.render.bind(this))}},{key:"getDots",value:function(t){var e=this.settings.data,n=this.data,o=i(this.data);if(e.offset){var r=o.length-e.offset,a=r>e.limit.value;a||(e.offset=o.length-e.limit.value),o=o.slice(0,a?r:e.limit.value)}o.length>e.limit.value&&(o=o.slice(o.length-e.limit.value,o.length));for(var l=o.length?o[0].value:0,s=o.length?o[0].value:0,c=e.length?e[0].value:0,f=e.length?e[0].value:0,u=0;u<=n.length-1;u++){var d=n[u].value;d>c&&(c=d),d<f&&(f=d)}for(var h=0;h<=o.length-1;h++){var p=o[h].value;p>l&&(l=p),p<s&&(s=p)}var g={all:{dots:n,max:c,min:f},draw:{dots:o=this.calcDotsCoords(o,s,l),max:l,min:s},last:n[n.length-1],first:n[0]};return t&&g[t]?g[t]:g}},{key:"calcDotsCoords",value:function(t,e,n){for(var i=this.getLineDrawCoords(),o=i.lineStart,r=(i.lineEnd,i.lineView),a=i.lineTop,l=(i.lineBottom,i.lineHeight),s=o,c=t.length-1,f=c;f>=0;f--){var u=t[f],d=u.value,h=r/c;u.x=s,u.y=a+l-l*(100*(d-e)/(n-e)/100),u.y||(u.y=l/2+a),s-=h}return t}},{key:"getIndicatorCoords",value:function(){var t,e=this.canvas,n=this.settings,i=n.indicator,o=n.line.offset,r=e.element,a=(i.styles,i.animation,this.getDots()),l=a.draw,s=a.last,c=this.getLineDrawCoords(),f=(c.lineStart,c.lineEnd,c.lineTop),u=c.lineBottom,d=c.lineHeight,h=r.clientWidth-(o.right||0);return s&&((t=f+d-d*(100*(s.value-l.min)/(l.max-l.min)/100))||(t=d/2+f),t>u&&(t=u),t<f&&(t=f)),{x:h,y:t}}},{key:"drawIndicator",value:function(){var t=this.getIndicatorCoords(),e=t.x,n=t.y,i=this.settings,o=this.canvas,r=i.indicator,a=r.styles,l=r.animation,s=r.enable,c=o.context;s&&(c.strokeStyle="transparent",c.save(),(!this.indicatorAnimatedState||this.indicatorAnimatedState>=1)&&(this.indicatorAnimatedState=0),c.globalAlpha=1-this.indicatorAnimatedState,c.beginPath(),c.arc(e,n,a.width*this.indicatorAnimatedState*l.scaleTo,0,2*Math.PI),c.fillStyle=a.color,c.fill(),c.stroke(),this.indicatorAnimatedState+=1/60/(l.time/1e3),c.restore(),c.beginPath(),c.arc(e,n,a.width,0,2*Math.PI),c.fillStyle=a.color,c.fill(),c.stroke())}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,n=t.context,i=t.element,o=e.styles.background,r=window.devicePixelRatio||1;i.width=i.clientWidth*r,i.height=i.clientHeight*r,n.scale(r,r),n.fillStyle=o,n.fillRect(0,0,i.width,i.height)}},{key:"getLineDrawCoords",value:function(){var t=this.canvas,e=this.settings,n=e.line,i=(e.grid,n.offset),o=t.element,r=o.clientWidth-i.right,a=i.left,l=r-a,s=i.top+n.styles.width,c=o.clientHeight-i.bottom-n.styles.width;return{lineStart:r,lineEnd:a,lineView:l,lineTop:s,lineBottom:c,lineHeight:c-s}}},{key:"drawTime",value:function(){var t=this.getDots("draw"),e=this.getLineDrawCoords(),n=(e.lineStart,e.lineEnd,e.lineView,e.lineTop,e.lineBottom,e.lineHeight,this.canvas),o=this.settings,r=o.timeLine,a=o.timeStamp,l=o.offset,c=r.enable,f=r.count,u=r.styles,d=n.element,h=n.context,p=i(t.dots),g=[];if(c){for(var v=Math.ceil(p.length/f),m=0,y=p.length-1;y>=0;y--)p.length<=f?g.push(p[y]):(m===v&&(m=0),m||g.push(p[y]),m++,0===y&&m/v>=1&&g.push(p[y]));for(var b=0;b<=g.length-1;b++){var w=g[b];h.font="100 12px arial",h.fillStyle=u.color,h.textAlign="center",h.textBaseline="middle",h.fillText(s(w&&w.time?w.time:a),w?w.x:0,d.clientHeight-l.bottom/2)}}}},{key:"drawValues",value:function(){var t=this.getDots("draw"),e=t.max,n=t.min,i=this.getLineDrawCoords(),o=(i.lineStart,i.lineEnd,i.lineView,i.lineTop),r=i.lineBottom,a=i.lineHeight,l=this.canvas,s=this.settings,c=s.valuesLine,f=s.offset,u=c.count,d=c.enable,h=c.digits,p=c.styles,g=l.element,v=l.context,m=[];if(d){var y=a/(u-1),b=o+y,w=(g.clientHeight+f.top-f.bottom)/2;if(n===e){m.push({text:e,y:w});for(var x=(w-f.top)/y,k=(w-f.top)/y,S=1;S<=x;S++)m.push({text:e+e*S,y:w-y*S});for(var T=1;T<=k;T++)m.push({text:e-e*T,y:w+y*T})}else{m.push({text:e,y:o});for(var L=(e-n)/(u-1),E=1;E<=u-2;E++)m.push({text:e-L*E,y:b}),b+=y;m.push({text:n,y:r})}for(var P=0;P<=m.length-1;P++){var O=m[P];v.font="100 12px arial",v.fillStyle=p.color,v.textAlign="center",v.textBaseline="middle",v.fillText(O.text.toFixed(h),g.clientWidth-f.right/2,O.y)}}}},{key:"drawLine",value:function(){var t=this.canvas,e=this.settings,n=e.line,i=e.grid,o=e.offset,r=e.view,a=n.styles,l=a.backgroundGradient,s=a.lineGradient,c=a.color,f=a.width,u=t.context,d=t.element,h=this.getLineDrawCoords(),p=h.lineStart,g=h.lineEnd,v=h.lineTop,m=h.lineBottom,y=this.getDots("draw"),b=y.dots;if(y.min,y.max,u.beginPath(),u.lineWidth=f,u.strokeStyle=c,u.lineJoin="round",s.enable){var w=u.createLinearGradient(g,0,p,0);w.addColorStop(0,s.from),w.addColorStop(1,s.to),u.strokeStyle=w}for(var x=b.length-1;x>=0;x--){var k=b[x];u.lineTo(k.x,k.y)}if(u.stroke(),l.enable&&b.length>1){if(u.beginPath(),u.lineWidth=0,u.strokeStyle="transparent",s.enable){var S=u.createLinearGradient(0,v,0,m);S.addColorStop(0,l.from),S.addColorStop(1,l.to),u.fillStyle=S}u.lineTo(p,m);for(var T=b.length-1;T>=0;T--){var L=b[T];u.lineTo(L.x,L.y)}u.lineTo(g,m),u.fill(),u.stroke()}i.enable&&(u.beginPath(),u.lineJoin="miter",u.lineWidth=f,u.strokeStyle=r.styles.background,u.lineTo(0+o.left-f/2,0+o.top-f/2),u.lineTo(0+o.left-f/2,d.clientHeight-o.bottom+f/2),u.lineTo(d.clientWidth-o.right+f/2,d.clientHeight-o.bottom+f/2),u.lineTo(d.clientWidth-o.right+f/2,0+o.top-f/2),u.closePath(),u.stroke(),u.beginPath(),u.lineJoin="miter",u.lineWidth=i.styles.width,u.strokeStyle=i.styles.color,u.lineTo(0+o.left,0+o.top),u.lineTo(0+o.left,d.clientHeight-o.bottom),u.lineTo(d.clientWidth-o.right,d.clientHeight-o.bottom),u.lineTo(d.clientWidth-o.right,0+o.top),u.closePath(),u.stroke())}},{key:"drawTarget",value:function(){var t=this.canvas,e=this.settings,n=e.target,o=e.offset,r=e.valuesLine,a=e.timeStamp,l=n.styles,c=n.coords,f=c.x,u=c.y,d=t.element,h=t.context,p=i(this.getDots("draw").dots),g=!1;if(n.enable&&f&&u){for(var v=0;v<=p.length-1;v++){var m=p[v],y=p[v+1];y&&f>=m.x&&f<=y.x&&(g=(y.x+m.x)/2<=f?y:m)}if(g){var b=0;l.dots.forEach((function(t){h.beginPath(),h.strokeStyle=t.strokeColor,h.lineWidth=t.strokeWidth,h.fillStyle=t.background,h.arc(g.x,g.y,t.width,0,2*Math.PI),h.fill(),h.stroke(),t.width&&t.width>b&&(b=t.width)})),h.lineWidth=l.line.width,h.strokeStyle=l.line.color,h.beginPath(),h.moveTo(0+o.left,g.y),h.lineTo(g.x-b,g.y),h.stroke(),h.beginPath(),h.moveTo(g.x+b,g.y),h.lineTo(d.clientWidth-o.right,g.y),h.stroke(),h.beginPath(),h.moveTo(g.x,0+o.top),h.lineTo(g.x,g.y-b),h.stroke(),h.beginPath(),h.moveTo(g.x,g.y+b),h.lineTo(g.x,d.clientHeight-o.bottom),h.stroke();var w={bottom:{background:l.panel.background,color:l.panel.color,width:80,height:o.bottom,x:g.x-40,y:d.clientHeight-o.bottom,text:s(g&&g.time?g.time:a)},right:{background:l.panel.background,color:l.panel.color,width:o.right,height:20,x:d.clientWidth-o.right,y:g.y-10,text:g.value.toFixed(r.digits||2)}};Object.values(w).forEach((function(t){h.strokeStyle=h.fillStyle=t.background,h.beginPath(),h.rect(t.x,t.y,t.width,t.height),h.fill(),h.stroke(),h.font="100 12px arial",h.fillStyle=t.color,h.textAlign=t.textAlign,h.textBaseline="middle",h.fillText(t.text,t.x+t.width/2,t.y+t.height/2)}))}}}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,n=e.grid,i=e.offset,o=t.element,r=t.context,a=n.enable,l=n.steps,s=n.styles,c=n.type;if(a){var f=0+i.left,u=o.clientWidth-i.right-i.left,d=0+i.top,h=o.clientHeight-i.bottom-i.top;r.lineWidth=s.width,r.strokeStyle=s.color,r.fillStyle=s.background,r.rect(f,d,u,h),r.fill();var p=[],g=[],v="px"===c,m=(o.clientWidth-i.right-i.left)/l.x,y=0+i.left,b=(o.clientHeight-i.top-i.bottom)/l.y,w=0+i.top;if(v){for(var x=1;x<m;x++){var k=y+x*l.x;p.push(k)}for(var S=1;S<b;S++){var T=w+S*l.y;g.push(T)}}else{for(var L=1;L<l.x;L++){var E=y+L*m;p.push(E)}for(var P=1;P<l.y;P++){var O=w+P*b;g.push(O)}}for(var D=0;D<=p.length-1;D++)r.beginPath(),r.lineTo(p[D],0+i.top),r.lineTo(p[D],o.clientHeight-i.bottom),r.stroke();for(var j=0;j<=g.length-1;j++)r.beginPath(),r.lineTo(0+i.left,g[j]),r.lineTo(o.clientWidth-i.right,g[j]),r.stroke()}}},{key:"listeners",value:function(){var t=this,e=this.canvas,n=this.settings.target,i=e.element,o=!1,r=0,a=0,l=function(){n.coords={x:!1,y:!1}},s=function(e){o=!1,r=0,a=0,delete t.prevPinchDistance},c="ontouchstart"in document.documentElement;document.addEventListener("gesturestart",(function(t){t.preventDefault()})),c?(i.addEventListener("touchend",(function(){s(),l()})),i.addEventListener("touchstart",(function(t){var e=t.touches,l=i.getBoundingClientRect(),s=e[0];1===e.length&&(n.coords={x:s.clientX-l.left,y:s.clientY-l.top}),r=s.clientX,a=s.clientY,o={x:r,y:a}})),i.addEventListener("touchmove",(function(e){var s=t.settings,c=(s.valuesLine,s.timeLine,s.data),f=s.line,u=s.offset,d=t.getDots("all").dots,h=i.getBoundingClientRect(),p=e.touches,g=p[0];if(l(),1===p.length&&(g.clientX>=h.left+u.left+1&&g.clientX<=h.left+h.width-u.right&&g.clientY>=h.top+u.top&&g.clientY<=h.bottom-u.bottom&&(n.coords={x:g.clientX-h.left,y:g.clientY-h.top}),g.clientX>=h.left+f.offset.left&&g.clientX<=h.left+h.width-f.offset.right&&g.clientY>=h.top+u.top&&g.clientY<=h.bottom-u.bottom&&o)){var v=c.offset+g.clientX-r;v<0&&(v=0),v>d.length-c.limit.value&&(v=d.length-c.limit.value),c.offset=v}if(2===p.length){var m=p[0],y=p[1],b=Math.hypot(m.clientX-y.clientX,m.clientY-y.clientY);if(!t.prevPinchDistance)return void(t.prevPinchDistance=b);var w=t.prevPinchDistance-b;t.prevPinchDistance=b;var x=c.limit.value+w;c.limit.value=c.limit.min&&x<c.limit.min?c.limit.min:c.limit.max&&x>c.limit.max?c.limit.max:d.length<x?d.length:x<=2?2:x}o&&(r=g.clientX,a=g.clientY)}))):(i.addEventListener("mouseup",(function(){s()})),i.addEventListener("mouseleave",(function(){s(),l()})),i.addEventListener("mousedown",(function(t){r=t.clientX,a=t.clientY,o={x:r,y:a}})),i.addEventListener("mousemove",(function(e){var s=t.settings,c=s.valuesLine,f=s.timeLine,u=s.data,d=s.line,h=s.offset,p=t.getDots("all").dots,g=i.getBoundingClientRect();if(l(),i.style.cursor="default",e.clientX>=g.left+h.left+1&&e.clientX<=g.left+g.width-h.right&&e.clientY>=g.top+h.top&&e.clientY<=g.bottom-h.bottom&&(n.enable&&(i.style.cursor="crosshair"),n.coords={x:e.clientX-g.left,y:e.clientY-g.top}),e.clientX>=g.left+d.offset.left&&e.clientX<=g.left+g.width-d.offset.right&&e.clientY>=g.top+h.top&&e.clientY<=g.bottom-h.bottom&&o){var v=u.offset+e.clientX-r;v<0&&(v=0),v>p.length-u.limit.value&&(v=p.length-u.limit.value),u.offset=v}if(c.enable&&c.resize&&e.clientX>=g.left+g.width-h.right&&(i.style.cursor="row-resize",o)){var m=a-e.clientY,y=e.clientY-a,b=e.clientY>a,w=e.clientY<a;if(b){var x=(g.height+h.top-h.bottom)/2-60,k=(g.height+h.bottom-h.top)/2-60;d.offset.top=d.offset.top-m<x?d.offset.top-m:x,d.offset.bottom=d.offset.bottom+y<k?d.offset.bottom+y:k}w&&(d.offset.top=d.offset.top-m>h.top?d.offset.top-m:h.top,d.offset.bottom=d.offset.bottom+y>h.bottom?d.offset.bottom+y:h.bottom)}if(f.enable&&f.resize&&e.clientX>=g.left+d.offset.left&&e.clientX<=g.left+g.width-d.offset.right&&e.clientY>=g.bottom-h.bottom&&(i.style.cursor="col-resize",o)){var S=u.limit.value+e.clientX-r;u.limit.value=u.limit.min&&S<u.limit.min?u.limit.min:u.limit.max&&S>u.limit.max?u.limit.max:p.length<S?p.length:S<=2?2:S}o&&(r=e.clientX,a=e.clientY)})))}}])&&l(e.prototype,n),o&&l(e,o),t}();n(0);const u=function(t,e){return new Promise((function(n,i){e||i("Empty request"),e.start&&e.start();let o=new XMLHttpRequest,r=e.url?e.url:"",a=!e.async||e.async,l=e.data,s=!!e.clearData,c=!!e.responseHeaders,f=0;if("GET"===t)for(let t in l)r+=f?"&"+t+"="+l[t]:"?"+t+"="+l[t],f++;if(o.open(t,r,a),e.headers)for(let t in e.headers)o.setRequestHeader(t,e.headers[t]);o.send(JSON.stringify(l)),o.onreadystatechange=function(){if(c&&this.readyState==this.HEADERS_RECEIVED){c=o.getAllResponseHeaders().trim().split(/[\r\n]+/);let t={};c.forEach((function(e){let n=e.split(": "),i=n.shift(),o=n.join(": ");t[i]=o})),c=t}if(4==o.readyState)if(o.status<200||o.status>300){e.end&&e.end();let t=s?JSON.parse(o.response):o;i(t)}else{e.end&&e.end();let t=s?JSON.parse(o.response):o;c&&(t.headers=c),n(t)}}}))};const d=function(){this.getParams=()=>{let t=window.location.search;return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce((t,e)=>{let[n,i]=e.split("=");return t[n]=i?decodeURIComponent(i.replace(/\+/g," ")):"",t},{}):{}},this.getParam=t=>this.getParams()[t]||null,this.getParamSingle=function(t){return(t=new RegExp("[?&]"+encodeURIComponent(t)+"=([^&]*)").exec(location.search))?decodeURIComponent(t[1]):null},this.updateQueryString=(t,e,n=!1)=>{n||(n=window.location.href);var i,o=new RegExp("([?&])"+t+"=.*?(&|#|$)(.*)","gi");if(o.test(n))return null!=e?n.replace(o,"$1"+t+"="+e+"$2$3"):(i=n.split("#"),n=i[0].replace(o,"$1$3").replace(/(&|\?)$/,""),void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n);if(null!=e){var r=-1!==n.indexOf("?")?"&":"?";return i=n.split("#"),n=i[0]+r+t+"="+e,void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n}return n},this.setParam=(t,e)=>{let n=this.updateQueryString(t,e);window.history.pushState({path:n},"",n)}};var h=new function(){this.post=function(t){return u("POST",t)},this.get=function(t){return u("GET",t)},this.put=function(t){return u("PUT",t)},this.delete=function(t){return u("DELETE",t)}},p=new d;window.addEventListener("load",(function(){document.querySelectorAll("canvas").forEach((function(t){var e=new f({canvas:t,settings:{data:{limit:{}}}}),n=p.getParam("symbol");setInterval((function(){n?h.get({url:"https://quotes.instaforex.com/api/quotesTick",clearData:!0,data:{q:n}}).then((function(t){t&&t[0]&&e.newDot({value:(t[0].ask+t[0].bid)/2})})):e.newDot()}),100)}))}))}])}));