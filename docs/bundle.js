!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=5)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{margin:0 0;height:100%;width:100%;overflow:hidden}.container{height:100%;width:100%}.chart{width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chart canvas{height:100%;width:100%}.chart div{position:absolute;top:40px;left:0;font-size:20px;color:#fff}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(r).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i,o,r={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=l.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,f=0,u=[],h=n(4);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(y(i.parts[a],e))}else{var l=[];for(a=0;a<i.parts.length;a++)l.push(y(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:l}}}}function p(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],a=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(l):n.push(i[a]={id:a,parts:[l]})}return n}function v(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return b(e,t.attrs),v(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var a=f++;n=c||(c=m(e)),i=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),v(t,e),e}(e),i=P.bind(null,n,e),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=S.bind(null,n),o=function(){g(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o];(l=r[a.id]).refs--,i.push(l)}t&&d(p(t,e),e);for(o=0;o<i.length;o++){var l;if(0===(l=i[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete r[l.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function k(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function S(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function P(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=h(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var s=function(t){return((t=new Date(t)).getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},c=function t(e,n){for(var i in n)try{n[i].constructor==Object?e[i]=t(e[i],n[i]):e[i]=n[i]}catch(t){e[i]=n[i]}return e},f=function(){function t(e){var n=e.canvas,i=void 0!==n&&n,o=e.data,a=void 0===o?[]:o,l=e.settings,s=void 0===l?{}:l,c=e.offset,f=void 0===c?{left:30,right:50,top:20,bottom:40}:c,u=e.actions,h=void 0===u?{}:u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.actions=h,this.canvas={element:i,context:i.getContext("2d"),isCanvas:(i instanceof Element||i instanceof HTMLDocument)&&"canvas"===i.tagName.toLowerCase()},this.data=a,this.settings={data:{offset:0,limit:{value:100,min:10}},offset:r({},f),indicator:{enable:!0,styles:{color:"#27ca5d",width:3},animation:{time:1e3,scaleTo:5}},line:{styles:{color:"#ffffff",width:2,lineGradient:{points:[{color:"#954ce9"},{color:"#24c1ed"}],enable:!0},backgroundGradient:{points:[{color:"rgba(149, 76, 233, 0.17)"},{color:"rgba(149, 76, 233, 0)"}],enable:!0}},offset:r({},f)},view:{styles:{background:"#1a1e30"}},target:{enable:!0,coords:{x:0,y:0},styles:{line:{color:"#6f7dab",width:1,horizontal:{enable:!0},vertical:{enable:!0}},panel:{background:"#6f7dab",color:"#fff"},points:[{width:10,background:"transparent",strokeColor:"#6f7dab",strokeWidth:1},{width:4,background:"#24c1ed",strokeColor:"transparent"}]}},grid:{enable:!0,steps:{x:10,y:5},styles:{background:"",color:"#2b2a49",width:1}},timeLine:{enable:!0,resize:!0,mousewheel:{enable:!0,speed:1},count:5,styles:{color:"#6f7dab"}},valuesLine:{enable:!0,resize:{enable:!0,topMin:80,bottomMin:80},count:10,digits:2,styles:{color:"#6f7dab"},overflowValues:!1},timeStamp:+new Date},this.setSettings(s),this.init()}var e,n,o;return e=t,(n=[{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.offset&&(t.line={},t.line.offset=t.offset),c(this.settings,t),this.setPointsLimit(!1,!1)}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=t}},{key:"getData",value:function(){return this.data}},{key:"getLast",value:function(){return this.getPoints("last")}},{key:"newPoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value,n=void 0!==e&&e,i=t.time,o=void 0!==i&&i,r=this.getPoints("all"),a=r.points,l=this.settings,s=l.data,c=a[a.length-1],f=c?c.value:0,u=Math.random()*(Math.random()>.5?-1:1),h=+new Date;o=o||h,n=parseFloat(n)||0===n?n:f+u,s.offset&&s.offset++,a.push({value:n,time:o})}},{key:"setPoint",value:function(t,e){var n=e.value,i=e.time,o=this.getPoints("all").points;o[t]&&(o[t].value=n||o[t].value,o[t].time=i||o[t].time)}},{key:"init",value:function(){this.listeners(),this.render()}},{key:"resize",value:function(){}},{key:"render",value:function(){this.drawBackground(),this.drawGrid(),this.drawLine(),this.drawValues(),this.drawTime(),this.drawTarget(),this.drawIndicator(),requestAnimationFrame(this.render.bind(this))}},{key:"getPoints",value:function(t){var e=this.settings.data,n=this.data,o=i(this.data);if(e.offset){var r=o.length-e.offset,a=r>e.limit.value;a||(e.offset=o.length-e.limit.value),o=o.slice(0,a?r:e.limit.value)}o.length>e.limit.value&&(o=o.slice(o.length-e.limit.value,o.length));for(var l=o.length?o[0].value:0,s=o.length?o[0].value:0,c=e.length?e[0].value:0,f=e.length?e[0].value:0,u=0;u<=n.length-1;u++){var h=n[u].value;h>c&&(c=h),h<f&&(f=h)}for(var d=0;d<=o.length-1;d++){var p=o[d].value;p>l&&(l=p),p<s&&(s=p)}var v={all:{points:n,max:c,min:f},draw:{points:o=this.calcPointsCoords(o,s,l),max:l,min:s},last:n[n.length-1],first:n[0]};return t&&v[t]?v[t]:v}},{key:"calcPointsCoords",value:function(t,e,n){for(var i=this.getLineDrawCoords(),o=i.lineStart,r=(i.lineEnd,i.lineView),a=i.lineTop,l=(i.lineBottom,i.lineHeight),s=o,c=t.length-1,f=c;f>=0;f--){var u=t[f],h=u.value,d=r/c;u.x=s,u.y=a+l-l*(100*(h-e)/(n-e)/100),u.y||(u.y=l/2+a),s-=d}return t}},{key:"getIndicatorCoords",value:function(){var t,e=this.canvas,n=this.settings,i=n.indicator,o=n.line.offset,r=e.element,a=(i.styles,i.animation,this.getPoints()),l=a.draw,s=a.last,c=this.getLineDrawCoords(),f=(c.lineStart,c.lineEnd,c.lineTop),u=c.lineBottom,h=c.lineHeight,d=r.clientWidth-(o.right||0);return s&&((t=f+h-h*(100*(s.value-l.min)/(l.max-l.min)/100))||(t=h/2+f),t>u&&(t=u),t<f&&(t=f)),{x:d,y:t}}},{key:"drawIndicator",value:function(){var t=this.getIndicatorCoords(),e=t.x,n=t.y,i=this.settings,o=this.canvas,r=i.indicator,a=r.styles,l=r.animation,s=r.enable,c=o.context;s&&(c.strokeStyle="transparent",c.save(),(!this.indicatorAnimatedState||this.indicatorAnimatedState>=1)&&(this.indicatorAnimatedState=0),c.globalAlpha=1-this.indicatorAnimatedState,c.beginPath(),c.arc(e,n,a.width*this.indicatorAnimatedState*l.scaleTo,0,2*Math.PI),c.fillStyle=a.color,c.fill(),c.stroke(),this.indicatorAnimatedState+=1/60/(l.time/1e3),c.restore(),c.beginPath(),c.arc(e,n,a.width,0,2*Math.PI),c.fillStyle=a.color,c.fill(),c.stroke())}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,n=t.context,i=t.element,o=e.styles.background,r=window.devicePixelRatio||1;i.width=i.clientWidth*r,i.height=i.clientHeight*r,n.scale(r,r),n.fillStyle=o,n.fillRect(0,0,i.width,i.height)}},{key:"getLineDrawCoords",value:function(){var t=this.canvas,e=this.settings,n=e.line,i=(e.grid,n.offset),o=t.element,r=o.clientWidth-i.right,a=i.left,l=r-a,s=i.top+n.styles.width,c=o.clientHeight-i.bottom-n.styles.width;return{lineStart:r,lineEnd:a,lineView:l,lineTop:s,lineBottom:c,lineHeight:c-s}}},{key:"findPointByX",value:function(t){for(var e=i(this.getPoints("draw").points),n=!1,o=0;o<=e.length-1;o++){var r=e[o],a=e[o+1],l=Math.round(r.x),s=a?Math.round(a.x):0;(s||0===s)&&t>=l&&t<=s&&(n=(s+l)/2<=t?a:r)}return n}},{key:"drawTime",value:function(){var t=this.getLineDrawCoords(),e=t.lineStart,n=t.lineEnd,i=(t.lineView,t.lineTop,t.lineBottom,t.lineHeight,this.canvas),o=this.settings,r=o.timeLine,a=o.timeStamp,l=o.offset,c=r.enable,f=r.count,u=r.styles,h=i.element,d=i.context;if(c){var p=n,v=(e-p)/f;v+=v/(f-1);for(var g=0;g<f;g++){var m=p+v*g,b=this.findPointByX(m);d.font="100 12px arial",d.fillStyle=u.color,d.textAlign="center",d.textBaseline="middle",d.fillText(s(b&&b.time?b.time:a),m||0,h.clientHeight-l.bottom/2)}}}},{key:"drawValues",value:function(){var t=this.getPoints("draw"),e=t.max,n=t.min,i=this.getLineDrawCoords(),o=(i.lineStart,i.lineEnd,i.lineView,i.lineTop),r=i.lineBottom,a=i.lineHeight,l=this.canvas,s=this.settings,c=s.valuesLine,f=s.line,u=s.offset,h=s.view,d=c.count,p=c.enable,v=c.digits,g=c.styles,m=c.overflowValues,b=l.element,y=l.context,w=[];if(p){var x=a/(d-1),k=o+x,S=(b.clientHeight+f.offset.top-f.offset.bottom)/2;if(n===e){w.push({text:e,y:S});for(var P=(S-f.offset.top)/x,L=(S-f.offset.top)/x,T=1;T<=P;T++)w.push({text:e+e*T,y:S-x*T});for(var E=1;E<=L;E++)w.push({text:e-e*E,y:S+x*E})}else{w.push({text:e,y:o});for(var O=(e-n)/(d-1),j=1;j<=d-2;j++)w.push({text:e-O*j,y:k}),k+=x;w.push({text:n,y:r})}if(m&&(f.offset.top>u.top||f.offset.bottom<u.bottom)){var M=(e-n)/(d-1),C=Math.max.apply(null,w.map((function(t){return t.text}))),D=Math.min.apply(null,w.map((function(t){return t.y}))),A=Math.min.apply(null,w.map((function(t){return t.text}))),B=Math.max.apply(null,w.map((function(t){return t.y}))),R=Math.round((f.offset.top-u.top)/x),H=Math.round((f.offset.bottom-u.bottom)/x);e===n&&(M=e);for(var X=1;X<=R;X++)w.push({text:C+M*X,y:D-x*X});for(var U=1;U<=H;U++)w.push({text:A-M*U,y:B+x*U})}for(var I=0;I<=w.length-1;I++){var W=w[I];y.font="100 12px arial",y.fillStyle=g.color,y.textAlign="center",y.textBaseline="middle",y.fillText(W.text.toFixed(v),b.clientWidth-u.right/2,W.y)}m&&(y.fillStyle=h.styles.background,y.strokeStyle="transparent",y.beginPath(),y.rect(0,0,b.clientWidth,u.top-5),y.fill(),y.stroke(),y.fillStyle=h.styles.background,y.strokeStyle="transparent",y.beginPath(),y.rect(0,b.clientHeight-u.bottom+5,b.clientWidth,b.clientHeight),y.fill(),y.stroke())}}},{key:"drawLine",value:function(){var t=this.canvas,e=this.settings,n=e.line,i=e.grid,o=e.offset,r=e.view,a=n.styles,l=a.backgroundGradient,s=a.lineGradient,c=a.color,f=a.width,u=t.context,h=t.element,d=this.getLineDrawCoords(),p=d.lineStart,v=d.lineEnd,g=d.lineTop,m=d.lineBottom,b=this.getPoints("draw"),y=b.points;if(b.min,b.max,u.beginPath(),u.lineWidth=f,u.strokeStyle=c,u.lineJoin="round",s.enable){var w=u.createLinearGradient(v,0,p,0),x=s.points||[];1===x.length&&x.push(x[0]),x.forEach((function(t,e){var n=t.stop,i=t.color;n||0===n||(n=1/(x.length-1)*e),w.addColorStop(n,i)})),u.strokeStyle=w}for(var k=y.length-1;k>=0;k--){var S=y[k];u.lineTo(S.x,S.y)}if(u.stroke(),l.enable&&y.length>1){u.beginPath(),u.lineWidth=0,u.strokeStyle="transparent";var P=u.createLinearGradient(0,g,0,m),L=l.points||[];1===L.length&&L.push(y[0]),L.forEach((function(t,e){var n=t.stop,i=t.color;n||0===n||(n=1/(L.length-1)*e),P.addColorStop(n,i)})),u.fillStyle=P,u.lineTo(p,m);for(var T=y.length-1;T>=0;T--){var E=y[T];u.lineTo(E.x,E.y)}u.lineTo(v,m),u.fill(),u.stroke()}i.enable&&(u.beginPath(),u.lineJoin="miter",u.lineWidth=f,u.strokeStyle=r.styles.background,u.lineTo(0+o.left-f/2,0+o.top-f/2),u.lineTo(0+o.left-f/2,h.clientHeight-o.bottom+f/2),u.lineTo(h.clientWidth-o.right+f/2,h.clientHeight-o.bottom+f/2),u.lineTo(h.clientWidth-o.right+f/2,0+o.top-f/2),u.closePath(),u.stroke(),u.beginPath(),u.lineJoin="miter",u.lineWidth=i.styles.width,u.strokeStyle=i.styles.color,u.lineTo(0+o.left,0+o.top),u.lineTo(0+o.left,h.clientHeight-o.bottom),u.lineTo(h.clientWidth-o.right,h.clientHeight-o.bottom),u.lineTo(h.clientWidth-o.right,0+o.top),u.closePath(),u.stroke())}},{key:"drawTarget",value:function(){var t=this.canvas,e=this.settings,n=this.actions,i=e.target,o=e.offset,r=e.valuesLine,a=e.timeStamp,l=i.styles,c=i.coords,f=c.x,u=c.y,h=t.element,d=t.context;if(i.enable&&f&&u){var p=this.findPointByX(f),v=0;if(p){n.mouseOverPoint&&n.mouseOverPoint(p),l.points.forEach((function(t){d.beginPath(),d.strokeStyle=t.strokeColor,d.lineWidth=t.strokeWidth,d.fillStyle=t.background,d.arc(p.x,p.y,t.width,0,2*Math.PI),d.fill(),d.stroke(),t.width&&t.width>v&&(v=t.width)})),d.lineWidth=l.line.width,d.strokeStyle=l.line.color;var g=!l.line.horizontal||l.line.horizontal.enable,m=!l.line.vertical||l.line.vertical.enable;g&&(d.beginPath(),d.moveTo(0+o.left,p.y),d.lineTo(p.x-v,p.y),d.stroke(),d.beginPath(),d.moveTo(p.x+v,p.y),d.lineTo(h.clientWidth-o.right,p.y),d.stroke()),m&&(d.beginPath(),d.moveTo(p.x,0+o.top),d.lineTo(p.x,p.y-v),d.stroke(),d.beginPath(),d.moveTo(p.x,p.y+v),d.lineTo(p.x,h.clientHeight-o.bottom),d.stroke());var b={};g&&(b.right={background:l.panel.background,color:l.panel.color,width:o.right,height:20,x:h.clientWidth-o.right,y:p.y-10,text:p.value.toFixed(r.digits||2)}),m&&(b.bottom={background:l.panel.background,color:l.panel.color,width:80,height:o.bottom,x:p.x-40,y:h.clientHeight-o.bottom,text:s(p&&p.time?p.time:a)}),Object.values(b).forEach((function(t){d.strokeStyle=d.fillStyle=t.background,d.beginPath(),d.rect(t.x,t.y,t.width,t.height),d.fill(),d.stroke(),d.font="100 12px arial",d.fillStyle=t.color,d.textAlign=t.textAlign,d.textBaseline="middle",d.fillText(t.text,t.x+t.width/2,t.y+t.height/2)}))}}}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,n=e.grid,i=e.offset,o=t.element,r=t.context,a=n.enable,l=n.steps,s=n.styles,c=n.type;if(a){var f=0+i.left,u=o.clientWidth-i.right-i.left,h=0+i.top,d=o.clientHeight-i.bottom-i.top;r.lineWidth=s.width,r.strokeStyle=s.color,r.fillStyle=s.background,r.rect(f,h,u,d),r.fill();var p=[],v=[],g="px"===c,m=(o.clientWidth-i.right-i.left)/l.x,b=0+i.left,y=(o.clientHeight-i.top-i.bottom)/l.y,w=0+i.top;if(g){for(var x=1;x<m;x++){var k=b+x*l.x;p.push(k)}for(var S=1;S<y;S++){var P=w+S*l.y;v.push(P)}}else{for(var L=1;L<l.x;L++){var T=b+L*m;p.push(T)}for(var E=1;E<l.y;E++){var O=w+E*y;v.push(O)}}for(var j=0;j<=p.length-1;j++)r.beginPath(),r.lineTo(p[j],0+i.top),r.lineTo(p[j],o.clientHeight-i.bottom),r.stroke();for(var M=0;M<=v.length-1;M++)r.beginPath(),r.lineTo(0+i.left,v[M]),r.lineTo(o.clientWidth-i.right,v[M]),r.stroke()}}},{key:"setPointsLimit",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.settings,i=n.data,o=this.getPoints("all"),r=o.points;t||(t=i.limit.value),i.limit.value=i.limit.min&&t<i.limit.min?i.limit.min:i.limit.max&&t>i.limit.max?i.limit.max:e&&r.length<t?r.length:t<=2?2:t}},{key:"listeners",value:function(){var t=this,e=this.canvas,n=this.settings,i=this.actions,o=n.target,r=e.element,a=!1,l=0,s=0,c=function(){o.coords={x:!1,y:!1}},f=function(e){a=!1,l=0,s=0,delete t.prevPinchDistance},u="ontouchstart"in document.documentElement;document.addEventListener("gesturestart",(function(t){t.preventDefault()})),window.addEventListener("resize",(function(e){var n=t.settings,i=n.line,o=n.offset,a=n.valuesLine,l=r.getBoundingClientRect(),s=(l.height+o.top-o.bottom)/2-(a.resize.topMin||0),c=(l.height+o.bottom-o.top)/2-(a.resize.bottomMin||0);i.offset.top>s&&(i.offset.top=s),i.offset.top<o.top&&(i.offset.top=o.top),i.offset.bottom>c&&(i.offset.bottom=c),i.offset.bottom<o.bottom&&(i.offset.bottom=o.bottom),t.resize()})),u?(r.addEventListener("touchend",(function(){f(),c()})),r.addEventListener("touchstart",(function(t){var e=t.touches,n=r.getBoundingClientRect(),i=e[0];1===e.length&&(o.coords={x:i.clientX-n.left,y:i.clientY-n.top}),l=i.clientX,s=i.clientY,a={x:l,y:s}})),r.addEventListener("touchmove",(function(e){var n=t.settings,i=(n.valuesLine,n.timeLine,n.data),f=n.line,u=n.offset,h=t.getPoints("all").points,d=r.getBoundingClientRect(),p=e.touches,v=p[0];if(c(),1===p.length&&(v.clientX>=d.left+u.left+1&&v.clientX<=d.left+d.width-u.right&&v.clientY>=d.top+u.top&&v.clientY<=d.bottom-u.bottom&&(o.coords={x:v.clientX-d.left,y:v.clientY-d.top}),v.clientX>=d.left+f.offset.left&&v.clientX<=d.left+d.width-f.offset.right&&v.clientY>=d.top+u.top&&v.clientY<=d.bottom-u.bottom&&a)){var g=i.offset+v.clientX-l;g<0&&(g=0),g>h.length-i.limit.value&&(g=h.length-i.limit.value),i.offset=g}if(2===p.length){var m=p[0],b=p[1],y=Math.hypot(m.clientX-b.clientX,m.clientY-b.clientY);if(!t.prevPinchDistance)return void(t.prevPinchDistance=y);var w=t.prevPinchDistance-y;t.prevPinchDistance=y;var x=i.limit.value+w;t.setPointsLimit(x)}a&&(l=v.clientX,s=v.clientY)}))):(r.addEventListener("mouseup",(function(){f()})),r.addEventListener("mouseleave",(function(){f(),c()})),r.addEventListener("mousedown",(function(t){l=t.clientX,s=t.clientY,a={x:l,y:s}})),r.addEventListener("mousewheel",(function(e){var i=e.deltaY,o=n.data,r=n.timeLine.mousewheel,a=o.limit.value+i;if(!r.enable)return!1;r&&r.speed&&(a=o.limit.value+(i>0?r.speed:-1*r.speed)),t.setPointsLimit(a)})),r.addEventListener("mousemove",(function(e){var n=t.settings,f=n.valuesLine,u=n.timeLine,h=n.data,d=n.line,p=n.offset,v=t.getPoints("all").points,g=r.getBoundingClientRect();if(c(),r.style.cursor="default",e.clientX>=g.left+p.left+1&&e.clientX<=g.left+g.width-p.right&&e.clientY>=g.top+p.top&&e.clientY<=g.bottom-p.bottom&&(o.enable&&(r.style.cursor="crosshair"),o.coords={x:e.clientX-g.left,y:e.clientY-g.top}),e.clientX>=g.left+d.offset.left&&e.clientX<=g.left+g.width-d.offset.right&&e.clientY>=g.top+p.top&&e.clientY<=g.bottom-p.bottom){if(a){var m=h.offset+e.clientX-l;m<0&&(m=0),m>v.length-h.limit.value&&(m=v.length-h.limit.value),h.offset=m}i.mouseEnterLine&&!t.enterLineBool&&(t.leaveLineBool=!1,t.enterLineBool=!0,i.mouseEnterLine())}else i.mouseLeaveLine&&!t.leaveLineBool&&(t.enterLineBool=!1,t.leaveLineBool=!0,i.mouseLeaveLine());if(f.enable&&f.resize.enable&&e.clientX>=g.left+g.width-p.right){if(r.style.cursor="row-resize",a){var b=s-e.clientY,y=e.clientY-s,w=e.clientY>s,x=e.clientY<s;if(w){var k=(g.height+p.top-p.bottom)/2-(f.resize.topMin||0),S=(g.height+p.bottom-p.top)/2-(f.resize.bottomMin||0);d.offset.top=d.offset.top-b<k?d.offset.top-b:k,d.offset.bottom=d.offset.bottom+y<S?d.offset.bottom+y:S}x&&(d.offset.top=d.offset.top-b>p.top?d.offset.top-b:p.top,d.offset.bottom=d.offset.bottom+y>p.bottom?d.offset.bottom+y:p.bottom)}d.offset.top<p.top&&(d.offset.top=p.top),d.offset.bottom<p.bottom&&(d.offset.bottom=p.bottom)}if(u.enable&&u.resize&&e.clientX>=g.left+d.offset.left&&e.clientX<=g.left+g.width-d.offset.right&&e.clientY>=g.bottom-p.bottom&&(r.style.cursor="col-resize",a)){var P=h.limit.value+e.clientX-l;t.setPointsLimit(P)}a&&(l=e.clientX,s=e.clientY)})))}}])&&l(e.prototype,n),o&&l(e,o),t}();n(0);const u=function(t,e){return new Promise((function(n,i){e||i("Empty request"),e.start&&e.start();let o=new XMLHttpRequest,r=e.url?e.url:"",a=!e.async||e.async,l=e.data,s=!!e.clearData,c=!!e.responseHeaders,f=0;if("GET"===t)for(let t in l)r+=f?"&"+t+"="+l[t]:"?"+t+"="+l[t],f++;if(o.open(t,r,a),e.headers)for(let t in e.headers)o.setRequestHeader(t,e.headers[t]);o.send(JSON.stringify(l)),o.onreadystatechange=function(){if(c&&this.readyState==this.HEADERS_RECEIVED){c=o.getAllResponseHeaders().trim().split(/[\r\n]+/);let t={};c.forEach((function(e){let n=e.split(": "),i=n.shift(),o=n.join(": ");t[i]=o})),c=t}if(4==o.readyState)if(o.status<200||o.status>300){e.end&&e.end();let t=s?JSON.parse(o.response):o;i(t)}else{e.end&&e.end();let t=s?JSON.parse(o.response):o;c&&(t.headers=c),n(t)}}}))};const h=function(){this.getParams=()=>{let t=window.location.search;return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce((t,e)=>{let[n,i]=e.split("=");return t[n]=i?decodeURIComponent(i.replace(/\+/g," ")):"",t},{}):{}},this.getParam=t=>this.getParams()[t]||null,this.getParamSingle=function(t){return(t=new RegExp("[?&]"+encodeURIComponent(t)+"=([^&]*)").exec(location.search))?decodeURIComponent(t[1]):null},this.updateQueryString=(t,e,n=!1)=>{n||(n=window.location.href);var i,o=new RegExp("([?&])"+t+"=.*?(&|#|$)(.*)","gi");if(o.test(n))return null!=e?n.replace(o,"$1"+t+"="+e+"$2$3"):(i=n.split("#"),n=i[0].replace(o,"$1$3").replace(/(&|\?)$/,""),void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n);if(null!=e){var r=-1!==n.indexOf("?")?"&":"?";return i=n.split("#"),n=i[0]+r+t+"="+e,void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n}return n},this.setParam=(t,e)=>{let n=this.updateQueryString(t,e);window.history.pushState({path:n},"",n)}};new function(){this.post=function(t){return u("POST",t)},this.get=function(t){return u("GET",t)},this.put=function(t){return u("PUT",t)},this.delete=function(t){return u("DELETE",t)}},new h;window.addEventListener("load",(function(){document.querySelectorAll(".chart").forEach((function(t){t.querySelector("div");for(var e=t.querySelector("canvas"),n=new f({actions:{mouseOverPoint:function(t){},mouseEnterLine:function(){},mouseLeaveLine:function(){}},canvas:e,settings:{data:{limit:{value:200,min:50}}}}),i=0;i<=199;i++)n.newPoint();setInterval((function(){var t=n.getData().length-1,e=n.getData()[t];n.setPoint(t,{value:e.value+Math.random()*(Math.random()>.5?1:-1),time:+new Date})}),500),setInterval((function(){var t=n.getData().length-1,e=n.getData()[t];n.newPoint({value:e.value,time:+new Date})}),5e3)}))}))}])}));