!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=6)}([function(t,e){Date.prototype.formatting=function(t){var e=this.getFullYear().toString();t=t.replace(/yyyy/g,e);var r=(this.getMonth()+1).toString();t=t.replace(/mm/g,r[1]?r:"0"+r[0]);var n=this.getDate().toString();t=t.replace(/dd/g,n[1]?n:"0"+n[0]);var o=this.getHours().toString();t=t.replace(/hh/g,o[1]?o:"0"+o[0]);var i=this.getMinutes().toString();t=t.replace(/ii/g,i[1]?i:"0"+i[0]);var a=this.getSeconds().toString();return t=t.replace(/ss/g,a[1]?a:"0"+a[0])},CanvasRenderingContext2D.prototype.roundRect=function(t,e,r,n,o){return r<2*o&&(o=r/2),n<2*o&&(o=n/2),this.beginPath(),this.moveTo(t+o,e),this.arcTo(t+r,e,t+r,e+n,o),this.arcTo(t+r,e+n,t,e+n,o),this.arcTo(t,e+n,t,e,o),this.arcTo(t,e,t+r,e,o),this.closePath(),this}},function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(4)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{margin:0 0;height:100%;width:100%;overflow:hidden}.container{height:100%;width:100%}.charts{height:100%;font-size:0}.chart{width:50%;height:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block}.chart canvas{height:100%;width:100%}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},s=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=l.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),f=null,c=0,u=[],h=r(5);function d(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(m(n.parts[a],e))}else{var l=[];for(a=0;a<n.parts.length;a++)l.push(m(n.parts[a],e));i[n.id]={id:n.id,refs:1,parts:l}}}}function p(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}function y(t,e){var r=s(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,r);r.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return g(e,t.attrs),y(t,e),e}function g(t,e){Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])}))}function m(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;r=f||(f=v(e)),n=S.bind(null,r,a,!1),o=S.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),y(t,e),e}(e),n=O.bind(null,r,e),o=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(e),n=P.bind(null,r),o=function(){b(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=p(t,e);return d(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o];(l=i[a.id]).refs--,n.push(l)}t&&d(p(t,e),e);for(o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function P(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function O(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=h(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,r){"use strict";r.r(e);r(0);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function t(e,r){for(var n in r)try{r[n].constructor==Object?e[n]=t(e[n],r[n]):e[n]=r[n]}catch(t){e[n]=r[n]}return e},i=function t(e){if("object"!=n(e))return e;if(!e)return e;var r=e instanceof Array?[]:{};for(var o in e)e.hasOwnProperty(o)&&(r[o]=t(e[o]));return r},a=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},l=function(t,e,r,n){return{x:t+Math.cos(n)*r,y:e+Math.sin(n)*r}},s=function(t,e){return"#"+t.replace(/^#/,"").replace(/../g,(function(t){return("0"+Math.min(255,Math.max(0,parseInt(t,16)+e)).toString(16)).substr(-2)}))},f=function(t){return"[object Function]"==={}.toString.call(t)},c={animated:!0,offset:{top:20,right:20,bottom:40,left:60},grid:{enable:!0,offset:{top:20,right:20,bottom:20,left:20},styles:{background:"",borderColor:"#2b2a49",borderRadius:5,borderWidth:2},horizontal:{step:4,enable:!0},vertical:{step:10,enable:!0}},labels:{enable:!0,styles:{color:"#fff",fontSize:12}},values:{enable:!0,digits:2,styles:{color:"#fff",fontSize:12}},data:{enable:!0,offset:0,line:{offset:{left:0,top:0,right:0,bottom:0},dots:{enable:!0},styles:{lineWidth:2}},bar:{offset:10}}},u={view:{styles:{background:"#1a1e30"}},tooltip:{enable:!0,styles:{color:"#ffffff",background:"#403f4c",borderColor:"#fff",borderWidth:0,borderRadius:3,fontSize:12,padding:{top:10,right:10,bottom:10,left:10}}}};function h(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=e.canvas,n=void 0!==r&&r,a=e.data,l=void 0===a?{}:a,s=e.defaultSettings,f=void 0===s?{}:s,c=e.settings,h=void 0===c?{}:c,d=e.actions,p=void 0===d?{}:d,y=e.type;this.type=y,this.actions=p,this.canvas={element:n,context:n.getContext("2d"),isCanvas:(n instanceof Element||n instanceof HTMLDocument)&&"canvas"===n.tagName.toLowerCase()},this.cursor={x:0,y:0},this.settings=o(i(u),i(f)),this.timeStamp=+new Date,this.setSettings(h),this.state={loading:this.settings.animated?0:1},this.data=this.prepareData(l),this.commonInit()}var e,r,n;return e=t,(r=[{key:"prepareData",value:function(t){return t}},{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this.settings,t),this.render({from:"setSettings"})}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=this.prepareData(t),this.render({from:"setData"})}},{key:"getData",value:function(){return this.data}},{key:"setRatio",value:function(){var t=this.canvas,e=t.context,r=t.element,n=window.devicePixelRatio||1;r.width=r.clientWidth*n,r.height=r.clientHeight*n,e.scale(n,n)}},{key:"clearCanvas",value:function(){var t=this.canvas,e=t.context;t.element,e.clearRect(0,0,t.width,t.height)}},{key:"loading",value:function(){var t=this;this.state.loading>=1||setTimeout((function(){t.state.loading+=.03,t.state.loading=t.state.loading>1?1:t.state.loading,t.render({from:"loading"}),t.loading()}),1e3/60)}},{key:"commonInit",value:function(){this.render({from:"commonInit"}),this.loading(),this.commonListeners()}},{key:"commonListeners",value:function(){var t=this,e=this.canvas,r=(e.context,e.element);window.addEventListener("resize",(function(){t.render({from:"resize"})})),r.addEventListener("mousemove",(function(e){t.settings;var n=r.getBoundingClientRect(),o=e.clientX-n.left,i=e.clientY-n.top;t.cursor={x:o,y:i},t.render({from:"mousemove"})})),r.addEventListener("mouseout",(function(e){t.cursor={x:0,y:0},t.render({from:"mouseout"})}))}},{key:"drawTooltip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"":e,n=t.panels,o=void 0===n?[]:n,i=t.x,a=t.y,l=t.render,c=this.canvas,u=this.settings,d=(this.data,this.cursor),p=c.element,y=c.context,b=u.tooltip,v=b.styles;if(i||(i=d.x),a||(a=d.y),b&&b.enable){y.font="100 "+v.fontSize+"px arial",y.textAlign="left",y.textBaseline="middle";var g=function(){var t;r&&r.text&&(r.width=y.measureText(r.text).width+v.padding.left+v.padding.right+v.borderWidth,r.height=2*v.padding.top+1.286*v.fontSize+v.borderWidth/2,r.x=v.padding.left+v.borderWidth/2,r.y=r.height/2+v.borderWidth/2),o.length&&o.forEach((function(t,e){if(t.width=0,t.height=0,t.x=function(){for(var t=0,r=e-1;r>=0;r--)t+=o[r].width;return t}(),t.y=r.height,t.colorPanel&&t.colorPanel.color&&(t.colorPanel.height=3,t.colorPanel.x=v.borderWidth/2,t.colorPanel.y=0,t.height+=t.colorPanel.height),t.texts&&t.texts.forEach((function(e,r){if(e.text){var n=y.measureText(e.text).width+v.borderWidth;t.width<n&&(t.width=n),e.height=1.286*v.fontSize,e.x=v.padding.left+v.borderWidth/2,e.y=t.height+e.height/2,r||(e.height+=v.padding.top,e.y+=v.padding.top),r===t.texts.length-1&&(e.height+=v.padding.bottom),t.height+=e.height}})),t.footer&&t.footer.text){var n=y.measureText(t.footer.text).width+v.borderWidth;t.width<n&&(t.width=n),t.footer.height=v.padding.bottom+1.286*v.fontSize,t.footer.x=v.padding.left+v.borderWidth/2,t.footer.y=t.height+t.footer.height/2-v.padding.bottom/2,t.height+=t.footer.height+v.borderWidth/2}t.width+=v.padding.left+v.padding.right}));var e=o.reduce((function(t,e){return t+e.width}),0);if(r.width>e){for(var n=r.width/o.length,i=0,a=0,l=0;l<=o.length-1;l++)o[l].width>=n?a+=o[l].width-n:i++;for(var s=function(t){o[t].width=o[t].width<n?n-a/i:o[t].width,o[t].x=function(){for(var e=0,r=t-1;r>=0;r--)e+=o[r].width;return e}()},f=0;f<=o.length-1;f++)s(f)}return t=r.height+Math.max.apply(Math,h(o.map((function(t){return t.height})))),{width:Math.max(r.width,e),height:t}}(),m=g.width,w=g.height,x=i,S=10,P=i-m/2,O=!1,T=a-w-S;T<v.borderWidth&&(O=!0,T=a+S),P+m>p.clientWidth-v.borderWidth/2&&(P=p.clientWidth-m-v.borderWidth/2),P<v.borderWidth/2&&(P=v.borderWidth/2),y.fillStyle=v.background,y.strokeStyle=v.borderWidth>0?v.borderColor:"transparent",y.lineWidth=v.borderWidth,y.beginPath(),y.roundRect(P,T,m,w,v.borderRadius),y.closePath(),y.fill(),y.stroke(),O?(y.beginPath(),y.moveTo(x-5,T),y.lineTo(x,T-5),y.lineTo(x+5,T),y.fill(),y.stroke(),y.beginPath(),y.moveTo(x-5+v.borderWidth/4,T+v.borderWidth/2),y.lineTo(x,T-5+v.borderWidth/1.5),y.lineTo(x+5-v.borderWidth/4,T+v.borderWidth/2),y.fill()):(y.beginPath(),y.moveTo(x-5,T+w),y.lineTo(x,T+w+5),y.lineTo(x+5,T+w),y.fill(),y.stroke(),y.beginPath(),y.moveTo(x-5+v.borderWidth/4,T+w-v.borderWidth/2),y.lineTo(x,T+w+5-v.borderWidth/1.5),y.lineTo(x+5-v.borderWidth/4,T+w-v.borderWidth/2),y.fill()),y.fillStyle=v.color,r&&r.text&&y.fillText(r.text,P+r.x,T+r.y),o.forEach((function(t){y.fillStyle=v.color,t.colorPanel&&t.colorPanel.color&&(y.save(),y.fillStyle=t.colorPanel.color,y.beginPath(),y.rect(P+t.x+t.colorPanel.x,T+t.y+t.colorPanel.y,t.width-v.borderWidth,t.colorPanel.height),y.fill(),y.restore()),t.texts&&t.texts.forEach((function(e,r){e.text&&y.fillText(e.text,P+t.x+e.x,T+t.y+e.y)})),t.footer&&t.footer.text&&(y.fillStyle=s(v.color,-50),y.fillText(t.footer.text,P+t.x+t.footer.x,T+t.y+t.footer.y))})),l&&f(l)&&l({context:y,styles:v,box:{width:m,height:w,top:T,left:P,bottom:T+w,right:P+m}})}}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,r=t.context,n=t.element,o=e.styles.background;r.fillStyle=o,r.fillRect(0,0,n.width,n.height)}},{key:"baseRender",value:function(){this.setRatio(),this.clearCanvas(),this.drawBackground()}}])&&d(e.prototype,r),n&&d(e,n),t}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(r,!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t,e,r){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=c,x(this,P(e).call(this,t))}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,t),r=e,(n=[{key:"prepareData",value:function(t){var e=Math.max.apply(Math,m(t.datasets.map((function(t){return(t.values||[]).length}))).concat([t.labels.length]));[t.labels].concat(m(t.datasets.map((function(t){return t.values})))).map((function(t,r){if(t.length<e)for(var n=e-t.length-1,o=0;o<=n;o++)t.push(r?0:"")})),t.datasets.forEach((function(t){t.color||(t.color=a())}));var r=t.datasets.filter((function(t){return"bar"===t.type}));if(r.forEach((function(t,e){t.count=r.length,t.index=e+1})),r.length){this.settings.data.initialValue=0;var n=this.getDrawRect("bar"),o=(n.left,n.width/e);this.settings.data.line.offset.left=o/2,this.settings.data.line.offset.right=o/2}return t}},{key:"getInterpolation",value:function(t,e){var r=this.canvas,n=this.settings,o=n.data,i=n.offset,a=n.grid,l=r.element,s=(r.context,o.line.styles.lineWidth,Math.max.apply(Math,m(e))),f=Math.min.apply(Math,m(e)),c=i.top+a.offset.top+a.styles.borderWidth,u=100*(t*this.state.loading-f*(f>0?this.state.loading:1))/(s-f)/100,h=l.clientHeight-i.top-a.offset.top-i.bottom-a.offset.bottom-2*a.styles.borderWidth;return c+h-h*u}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,r=e.grid,n=e.offset,o=t.element,i=t.context,a=r.enable,l=r.horizontal,s=r.vertical,f=r.styles;if(a){i.save();var c=0+n.left,u=o.clientWidth-n.right-n.left,h=0+n.top,d=o.clientHeight-n.bottom-n.top;if(i.lineWidth=f.borderWidth,i.strokeStyle=f.borderColor,i.fillStyle=f.background,f.dash&&i.setLineDash(f.dash),i.beginPath(),i.roundRect(c,h,u,d,f.borderRadius),i.fill(),i.closePath(),i.stroke(),i.restore(),l&&l.enable){i.save();var p=[],y=(o.clientHeight-n.top-n.bottom)/(l.step+1),b=(o.clientHeight-n.top-n.bottom)/l.step,g=n.top,m=v({},f,{},l.styles||{});if("px"===(l.type||r.type))for(var w=1;w<b;w++){var x=g+w*l.step;p.push(x)}else for(var S=1;S<l.step+1;S++){var P=g+S*y;p.push(P)}i.lineWidth=m.borderWidth,i.strokeStyle=m.borderColor,m.dash&&i.setLineDash(m.dash);for(var O=0;O<=p.length-1;O++)i.beginPath(),i.lineTo(0+n.left,p[O]),i.lineTo(o.clientWidth-n.right,p[O]),i.stroke();i.restore()}if(s&&s.enable){i.save();var T=[],j=(o.clientWidth-n.right-n.left)/(s.step+1),k=(o.clientWidth-n.right-n.left)/s.step,W=n.left,E=v({},f,{},s.styles||{});if("px"===(s.type||r.type))for(var M=1;M<k;M++){var R=W+M*s.step;T.push(R)}else for(var A=1;A<s.step+1;A++){var D=W+A*j;T.push(D)}i.lineWidth=E.borderWidth,i.strokeStyle=E.borderColor,E.dash&&i.setLineDash(E.dash);for(var _=0;_<=T.length-1;_++)i.beginPath(),i.lineTo(T[_],0+n.top),i.lineTo(T[_],o.clientHeight-n.bottom),i.stroke();i.restore()}i.restore()}}},{key:"drawLabels",value:function(){var t=this.canvas,e=this.settings,r=this.data,n=e.labels,o=e.offset,i=(e.grid,t.element),a=t.context,l=n.enable,s=n.styles;if(l){var f=this.getDrawRect("line"),c=f.left,u=f.width/(r.labels.length-1),h=i.clientHeight-o.bottom/2;r.labels.forEach((function(t,e){var r=c+u*e;a.font="100 "+s.fontSize+"px arial",a.fillStyle=s.color,a.textAlign="center",a.textBaseline="middle",a.fillText(t,r,h)}))}}},{key:"getDatasets",value:function(){return this.data.datasets}},{key:"getAllValues",value:function(){var t=this.settings.data,e=[];return(t.initialValue||0===t.initialValue)&&e.push(t.initialValue),this.getDatasets().reduce((function(t,e){return[].concat(m(t),m(e.values))}),e)}},{key:"drawValues",value:function(){var t=this.canvas,e=this.settings,r=e.values,n=e.offset,o=(e.grid,t.element,t.context),i=r.enable,a=r.styles,l=r.digits;if(i){var s=n.left/2,f=this.getAllValues(),c=Math.max.apply(Math,m(f)),u=Math.min.apply(Math,m(f));o.font="100 "+a.fontSize+"px arial",o.fillStyle=a.color,o.textAlign="center",o.textBaseline="middle";for(var h=[],d=(c-u)/9,p=0;p<=9;p++){var y=c-d*p;h.push({value:0===p?c:9===p?u:y,x:s,y:this.getInterpolation(y,f)})}h.forEach((function(t){o.fillText(t.value.toFixed(l),t.x,t.y)}))}}},{key:"drawData",value:function(){var t=this,e=this.settings.data.enable,r=this.getDatasets();e&&(r.filter((function(t){return"bar"===t.type})).forEach((function(e){var r=e.type;r=r.toUpperCase(),t["draw"+r]&&t["draw"+r](e)})),r.filter((function(t){return"line"===t.type})).forEach((function(e){var r=e.type;r=r.toUpperCase(),t["draw"+r]&&t["draw"+r](e)})))}},{key:"getDrawRect",value:function(t){var e=this.canvas,r=this.settings,n=r.offset,o=r.grid,i=r.data,a=e.element,l=(e.context,{top:n.top+o.styles.borderWidth,left:n.left+o.styles.borderWidth,right:n.right-o.styles.borderWidth,bottom:n.bottom-o.styles.borderWidth,width:a.clientWidth-n.left-n.right-2*o.styles.borderWidth,height:a.clientHeight-n.top-n.bottom-2*o.styles.borderWidth}),s={top:l.top+o.offset.top,left:l.left+o.offset.left,right:l.right+o.offset.right,bottom:l.bottom-o.offset.bottom,width:l.width-o.offset.left-o.offset.right,height:l.height-o.offset.top-o.offset.bottom},f={view:l,grid:s,bar:s,line:v({},s,{left:s.left+i.line.offset.left,right:s.right+i.line.offset.right,width:s.width-i.line.offset.left-i.line.offset.right})};return t&&f[t]?f[t]:f}},{key:"drawLINE",value:function(t,e){var r,n=this,o=this.canvas,i=this.settings,a=i.data,l=(i.offset,i.grid,o.element,o.context),f=a.line,c=f.styles.lineWidth,u=t.values,h=(t.color,this.getDrawRect("line")),d=h.left,p=h.width/(u.length-1);l.strokeStyle=t.color,l.lineWidth=c,l.lineJoin="round",l.beginPath(),u.forEach((function(t,e){var r=d+p*e,o=n.getInterpolation(t,n.getAllValues());e?l.lineTo(r,o):l.moveTo(r,o)})),l.stroke(),(null==f?void 0:null===(r=f.dots)||void 0===r?void 0:r.enable)&&(l.fillStyle=t.color,l.strokeStyle=s(t.color,-50),u.forEach((function(t,e){l.beginPath();var r=d+p*e,o=n.getInterpolation(t,n.getAllValues());l.arc(r,o,5,0,2*Math.PI),l.fill(),l.closePath(),l.stroke()})))}},{key:"drawBAR",value:function(t,e){var r=this,n=this.canvas,o=this.settings.data,i=(n.element,n.context),a=o.bar,l=t.values,s=(t.color,this.getDrawRect("bar")),f=s.left,c=s.width/l.length;i.strokeStyle=t.color,i.fillStyle=t.color,o.line.offset.left=c/2,o.line.offset.right=c/2,l.forEach((function(e,n){i.beginPath();var o=c/t.count-a.offset/t.count,l=f+a.offset/2+c*n+o*(t.index-1),s=l,u=l+o,h=r.getInterpolation(e,r.getAllValues()),d=r.getInterpolation(0,r.getAllValues());i.moveTo(s,d),i.lineTo(s,h),i.lineTo(u,h),i.lineTo(u,d),i.fill()}))}},{key:"render",value:function(){var t=this,r=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){S(P(e.prototype),"baseRender",t).call(t),t.drawGrid(),t.drawLabels(),t.drawData(),t.drawValues()}),r/60)}}])&&w(r.prototype,n),o&&w(r,o),e}(p),j={animated:!0,offset:{top:30,right:30,bottom:30,left:30},slice:{volumed:!0,styles:{width:80,color:"#fff"},hover:{enable:!0,value:20}},texts:{center:{enable:!1,text:"100%",styles:{color:"#ffffff",fontSize:30}},slicePercent:{enable:!1,styles:{color:"#ffffff",fontSize:10}}}};function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t,e,r){return(M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var D=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=j,E(this,R(e).call(this,t))}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,t),r=e,(n=[{key:"prepareData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.reduce((function(t,e){return t+(parseFloat(e.value)||0)}),0);return t.forEach((function(t){t.percent=100/e*t.value,t.total=e,t.color=t.color||a(),t.state=t.state||0})),t}},{key:"generatePolygon",value:function(t){var e=t.count,r=void 0===e?20:e,n=t.x,o=t.y,i=t.radius,a=t.sliceWidth,s=t.startPi,f=t.endPi,c=[],u=(f-s)/r;u=isFinite(u)?u:0;for(var h=0;h<=r;h++)c.push(l(n,o,i+a/2,s+u*h));for(var d=0;d<=r;d++)c.push(l(n,o,i-a/2,f-u*d));return c}},{key:"isPathHover",value:function(t){for(var e=t.x,r=t.y,n=t.polygon,o=!1,i=0,a=n.length-1;i<n.length;a=i++){var l=n[i].x,s=n[i].y,f=n[a].x,c=n[a].y;s>r!=c>r&&e<(f-l)*(r-s)/(c-s)+l&&(o=!o)}return o}},{key:"drawSlices",value:function(){var t,e,r,n=this.canvas,o=this.settings,i=this.data,a=this.cursor,f=this.type,c=this.state,u=o.offset,h=o.slice,d=o.texts,p=(o.tooltip,o.animated),y=n.context,b=n.element,v=Math.min(b.clientHeight-u.top-u.bottom-("donut"===f?h.styles.width:0),b.clientWidth-u.left-u.right-("donut"===f?h.styles.width:0))*c.loading,g=b.clientWidth/2+u.left-u.right,m=b.clientHeight/2+u.top-u.bottom,w=h.volumed,x=null==h?void 0:null===(t=h.hover)||void 0===t?void 0:t.value,S=-Math.PI/2;i=this.prepareData(i),"pie"===f&&(e=v/2,r=v/4),"donut"===f&&(e=h.styles.width>=v?v:h.styles.width,r=v/2);for(var P=0;P<=i.length-1;P++){var O,T=S,j=2*Math.PI*c.loading*i[P].percent/100+S;i[P].startPi=T,i[P].endPi=j,S=j;var k=this.generatePolygon({x:g,y:m,radius:r+i[P].state/2,sliceWidth:e+i[P].state,startPi:T,endPi:j}),W=this.isPathHover({x:a.x,y:a.y,polygon:k});i[P].polygon=k,i[P].hovered=W,i[P].hovered&&(null==h?void 0:null===(O=h.hover)||void 0===O?void 0:O.enable)?p?i[P].state<x&&(i[P].state+=1,this.render({from:"Animated increase state"})):(i[P].state=x,this.render({from:"Increase state"})):p?i[P].state>0&&(i[P].state-=1,this.render({from:"Animated decrease state"})):(i[P].state=0,this.render({from:"Decrease state"}));var E=[];if(E.push({radius:r+i[P].state/2,width:e+i[P].state,color:s(i[P].color,i[P].state),x:g,y:m,startPi:T,endPi:j}),w){var M=void 0,R=void 0;"donut"===f&&(M=r-e/4+i[P].state/2,R=e/2+i[P].state),"pie"===f&&(R=2*(M=r-e/6+i[P].state/2)),E.push({radius:M,width:R,color:s(i[P].color,-50+i[P].state),x:g,y:m,startPi:T,endPi:j})}for(var A=0;A<=E.length-1;A++)y.save(),y.beginPath(),y.strokeStyle=E[A].color,y.lineWidth=E[A].width,y.fillStyle="transparent",y.arc(E[A].x,E[A].y,E[A].radius>0?E[A].radius:0,E[A].startPi,E[A].endPi),y.fill(),y.stroke(),y.restore()}if(d.slicePercent.enable)for(var D=0;D<=i.length-1;D++){y.font="100 "+d.slicePercent.styles.fontSize+"px arial",y.textAlign="center",y.textBaseline="middle",y.fillStyle=d.slicePercent.styles.color;var _=r;"donut"===f&&w&&(_+=e/4+i[D].state),"donut"!==f||w||(_+=i[D].state/2),"pie"===f&&w&&(_+=e/3+i[D].state),"pie"!==f||w||(_+=i[D].state/2);var C=parseFloat(i[D].percent.toFixed(2))+"%",L=l(g,m,_,(i[D].startPi+i[D].endPi)/2);y.fillText(C,L.x,L.y)}d.center.enable&&(y.font="800 "+d.center.styles.fontSize*c.loading+"px arial",y.textAlign="center",y.textBaseline="middle",y.fillStyle=d.center.styles.color,y.fillText(d.center.text,g,m))}},{key:"drawTooltip",value:function(){var t=this.data.find((function(t){return t.hovered}));t&&M(R(e.prototype),"drawTooltip",this).call(this,{title:{text:t.label},panels:[{colorPanel:{color:t.color},texts:[{text:"Value: "+t.value},{text:"Percent: "+t.percent.toFixed(2)+"%"}],footer:{text:"Total: "+t.total}}],render:function(t){}})}},{key:"render",value:function(){var t=this,r=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){M(R(e.prototype),"baseRender",t).call(t),t.drawSlices(),t.drawTooltip()}),r/60)}}])&&W(r.prototype,n),o&&W(r,o),e}(p);function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="donut",C(this,L(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(e,t),e}(D);function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var V=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="pie",B(this,H(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(e,t),e}(D);window.bChart={Plot:T,Donut:U,Pie:V};r(1);window.addEventListener("load",(function(){document.querySelectorAll(".chart-line").forEach((function(t,e){var r=t.querySelector("canvas");new T({data:{labels:function(){for(var t=[],e=0;e<=10;e++)t.push("Label "+parseInt(e+1));return t}(),datasets:[{name:"Some bar data 1",type:"bar",values:function(){for(var t=[],e=0;e<=10;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()},{name:"Some bar data 2",type:"bar",values:function(){for(var t=[],e=0;e<=10;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()},{name:"Some bar data 2",type:"bar",values:function(){for(var t=[],e=0;e<=10;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()},{name:"Some line data",type:"line",values:function(){for(var t=[],e=0;e<=10;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()}]},canvas:r})})),document.querySelectorAll(".chart-donut").forEach((function(t,e){var r=t.querySelector("canvas");new U({canvas:r,data:function(){for(var t=[],e=0;e<=10*Math.random();e++)t.push({value:Math.random().toFixed(2),label:"Label "+e});return t}()})})),document.querySelectorAll(".chart-pie").forEach((function(t,e){var r=t.querySelector("canvas");new V({canvas:r,data:function(){for(var t=[],e=0;e<=10*Math.random();e++)t.push({value:Math.random().toFixed(2),label:"Label "+e});return t}()})}))}))}])}));