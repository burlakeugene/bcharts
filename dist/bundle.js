!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var r in o)("object"==typeof exports?exports:t)[r]=o[r]}}(window,(function(){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./",o(o.s=1)}([function(t,e){Date.prototype.formatting=function(t){var e=this.getFullYear().toString();t=t.replace(/yyyy/g,e);var o=(this.getMonth()+1).toString();t=t.replace(/mm/g,o[1]?o:"0"+o[0]);var r=this.getDate().toString();t=t.replace(/dd/g,r[1]?r:"0"+r[0]);var n=this.getHours().toString();t=t.replace(/hh/g,n[1]?n:"0"+n[0]);var i=this.getMinutes().toString();t=t.replace(/ii/g,i[1]?i:"0"+i[0]);var a=this.getSeconds().toString();return t=t.replace(/ss/g,a[1]?a:"0"+a[0])},CanvasRenderingContext2D.prototype.roundRect=function(t,e,o,r,n){return o<2*n&&(n=o/2),r<2*n&&(n=r/2),this.beginPath(),this.moveTo(t+n,e),this.arcTo(t+o,e,t+o,e+r,n),this.arcTo(t+o,e+r,t,e+r,n),this.arcTo(t,e+r,t,e,n),this.arcTo(t,e,t+o,e,n),this.closePath(),this}},function(t,e,o){"use strict";o.r(e);o(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function t(e,o){for(var r in o)try{o[r].constructor==Object?e[r]=t(e[r],o[r]):e[r]=o[r]}catch(t){e[r]=o[r]}return e},i=function t(e){if("object"!=r(e))return e;if(!e)return e;var o=e instanceof Array?[]:{};for(var n in e)e.hasOwnProperty(n)&&(o[n]=t(e[n]));return o},a=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},l=function(t,e,o,r){return{x:t+Math.cos(r)*o,y:e+Math.sin(r)*o}},s=function(t,e){return e=parseInt(e),"#"+t.replace(/^#/,"").replace(/../g,(function(t){return("0"+Math.min(255,Math.max(0,parseInt(t,16)+e)).toString(16)).substr(-2)}))},f=function(t){return"[object Function]"==={}.toString.call(t)},c=function(t){if(4===t.length){for(var e="#",o=1;o<=t.length-1;o++)e+=t[o]+t[o];t=e}return t},u=function(t){for(var e=t.x,o=t.y,r=t.polygon,n=!1,i=0,a=r.length-1;i<r.length;a=i++){var l=r[i].x,s=r[i].y,f=r[a].x,c=r[a].y;s>o!=c>o&&e<(f-l)*(o-s)/(c-s)+l&&(n=!n)}return n},h={offset:{top:20,right:20,bottom:40,left:60},grid:{enable:!0,offset:{top:20,right:0,bottom:20,left:0},styles:{background:"",borderColor:"#2b2a49",borderRadius:5,borderWidth:2},horizontal:{step:4,enable:!0},vertical:{step:10,enable:!0}},labels:{enable:!0,styles:{color:"#fff",fontSize:12}},values:{enable:!0,digits:2,styles:{color:"#fff",fontSize:12}},data:{enable:!0,offset:0,digits:2,line:{offset:{left:0,top:0,right:0,bottom:0},dots:{enable:!0,width:5,hover:{enable:!0,width:3}},styles:{lineWidth:2}},bar:{offset:10,hover:{enable:!0,value:50}}}},d={animated:!0,view:{styles:{background:"#1a1e30"}},data:{hover:{enable:!0}},tooltip:{enable:!0,styles:{color:"#ffffff",background:"#403f4c",borderColor:"#fff",borderWidth:0,borderRadius:3,fontSize:12,padding:{top:10,right:10,bottom:10,left:10}}}};function p(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=e.canvas,r=void 0!==o&&o,a=e.data,l=void 0===a?{}:a,s=e.defaultSettings,f=void 0===s?{}:s,c=e.settings,u=void 0===c?{}:c,h=e.actions,p=void 0===h?{}:h,y=e.type;this.type=y,this.actions=p,this.canvas={element:r,context:r.getContext("2d"),isCanvas:(r instanceof Element||r instanceof HTMLDocument)&&"canvas"===r.tagName.toLowerCase()},this.cursor={x:0,y:0},this.settings=n(i(d),i(f)),this.timeStamp=+new Date,this.setSettings(u),this.state={loading:this.settings.animated?0:1},this.data=this.prepareData(l),this.commonInit()}var e,o,r;return e=t,(o=[{key:"prepareData",value:function(t){return t}},{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this.settings,t),this.render({from:"setSettings"})}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=this.prepareData(t),this.render({from:"setData"})}},{key:"getData",value:function(){return this.data}},{key:"setRatio",value:function(){var t=this.canvas,e=t.context,o=t.element,r=window.devicePixelRatio||1;o.width=o.clientWidth*r,o.height=o.clientHeight*r,e.scale(r,r)}},{key:"clearCanvas",value:function(){var t=this.canvas,e=t.context;t.element,e.clearRect(0,0,t.width,t.height)}},{key:"loading",value:function(){var t=this;this.state.loading>=1||setTimeout((function(){t.state.loading+=.03,t.state.loading=t.state.loading>1?1:t.state.loading,t.render({from:"loading"}),t.loading()}),1e3/60)}},{key:"commonInit",value:function(){this.render({from:"commonInit"}),this.loading(),this.commonListeners()}},{key:"commonListeners",value:function(){var t=this,e=this.canvas,o=(e.context,e.element);window.addEventListener("resize",(function(){t.render({from:"resize"})})),o.addEventListener("mousemove",(function(e){t.settings;var r=o.getBoundingClientRect(),n=e.clientX-r.left,i=e.clientY-r.top;t.cursor={x:n,y:i},t.render({from:"mousemove"})})),o.addEventListener("mouseout",(function(e){t.cursor={x:0,y:0},t.render({from:"mouseout"})}))}},{key:"drawTooltip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,o=void 0===e?"":e,r=t.panels,n=void 0===r?[]:r,i=t.x,a=t.y,l=t.render,c=this.canvas,u=this.settings,h=(this.data,this.cursor),d=c.element,y=c.context,v=u.tooltip,g=v.styles;if(i||(i=h.x),a||(a=h.y),v&&v.enable){y.font="100 "+g.fontSize+"px arial",y.textAlign="left",y.textBaseline="middle";var b=function(){var t;o&&o.text?(o.width=y.measureText(o.text).width+g.padding.left+g.padding.right+g.borderWidth,o.height=2*g.padding.top+1.286*g.fontSize+g.borderWidth/2,o.x=g.padding.left+g.borderWidth/2,o.y=o.height/2+g.borderWidth/2):o={width:0,height:0},n.length&&n.forEach((function(t,e){if(t.width=0,t.height=0,t.x=function(){for(var t=0,o=e-1;o>=0;o--)t+=n[o].width;return t}(),t.y=o.height,t.colorPanel&&t.colorPanel.color&&(t.colorPanel.height=3,t.colorPanel.x=g.borderWidth/2,t.colorPanel.y=0,t.height+=t.colorPanel.height),t.texts&&t.texts.forEach((function(e,o){if(e.text){var r=y.measureText(e.text).width+g.borderWidth;t.width<r&&(t.width=r),e.height=1.286*g.fontSize,e.x=g.padding.left+g.borderWidth/2,e.y=t.height+e.height/2,o||(e.height+=g.padding.top,e.y+=g.padding.top),o===t.texts.length-1&&(e.height+=g.padding.bottom),t.height+=e.height}})),t.footer&&t.footer.text){var r=y.measureText(t.footer.text).width+g.borderWidth;t.width<r&&(t.width=r),t.footer.height=g.padding.bottom+1.286*g.fontSize,t.footer.x=g.padding.left+g.borderWidth/2,t.footer.y=t.height+t.footer.height/2-g.padding.bottom/2,t.height+=t.footer.height+g.borderWidth/2}t.width+=g.padding.left+g.padding.right}));var e=n.reduce((function(t,e){return t+e.width}),0);if(o.width>e){for(var r=o.width/n.length,i=0,a=0,l=0;l<=n.length-1;l++)n[l].width>=r?a+=n[l].width-r:i++;for(var s=function(t){n[t].width=n[t].width<r?r-a/i:n[t].width,n[t].x=function(){for(var e=0,o=t-1;o>=0;o--)e+=n[o].width;return e}()},f=0;f<=n.length-1;f++)s(f)}return t=o.height+(n.length?Math.max.apply(Math,p(n.map((function(t){return t.height})))):0),{width:Math.max(o.width,e),height:t}}(),m=b.width,x=b.height,w=i,P=10,S=i-m/2,O=!1,T=a-x-P;T<g.borderWidth&&(O=!0,T=a+P),S+m>d.clientWidth-g.borderWidth/2&&(S=d.clientWidth-m-g.borderWidth/2),S<g.borderWidth/2&&(S=g.borderWidth/2),y.fillStyle=g.background,y.strokeStyle=g.borderWidth>0?g.borderColor:"transparent",y.lineWidth=g.borderWidth,y.beginPath(),y.roundRect(S,T,m,x,g.borderRadius),y.closePath(),y.fill(),y.stroke(),O?(y.beginPath(),y.moveTo(w-5,T),y.lineTo(w,T-5),y.lineTo(w+5,T),y.fill(),y.stroke(),y.beginPath(),y.moveTo(w-5+g.borderWidth/4,T+g.borderWidth/2),y.lineTo(w,T-5+g.borderWidth/1.5),y.lineTo(w+5-g.borderWidth/4,T+g.borderWidth/2),y.fill()):(y.beginPath(),y.moveTo(w-5,T+x),y.lineTo(w,T+x+5),y.lineTo(w+5,T+x),y.fill(),y.stroke(),y.beginPath(),y.moveTo(w-5+g.borderWidth/4,T+x-g.borderWidth/2),y.lineTo(w,T+x+5-g.borderWidth/1.5),y.lineTo(w+5-g.borderWidth/4,T+x-g.borderWidth/2),y.fill()),y.fillStyle=g.color,o&&o.text&&y.fillText(o.text,S+o.x,T+o.y),n.forEach((function(t){y.fillStyle=g.color,t.colorPanel&&t.colorPanel.color&&(y.save(),y.fillStyle=t.colorPanel.color,y.beginPath(),y.rect(S+t.x+t.colorPanel.x,T+t.y+t.colorPanel.y,t.width-g.borderWidth,t.colorPanel.height),y.fill(),y.restore()),t.texts&&t.texts.forEach((function(e,o){e.text&&y.fillText(e.text,S+t.x+e.x,T+t.y+e.y)})),t.footer&&t.footer.text&&(y.fillStyle=s(g.color,-50),y.fillText(t.footer.text,S+t.x+t.footer.x,T+t.y+t.footer.y))})),l&&f(l)&&l({context:y,styles:g,box:{width:m,height:x,top:T,left:S,bottom:T+x,right:S+m}})}}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,o=t.context,r=t.element,n=e.styles.background;o.fillStyle=n,o.fillRect(0,0,r.width,r.height)}},{key:"hover",value:function(t){var e,o,r,n,i=t.item,a=t.isHovered,l=this.settings;a&&(null==l?void 0:null===(e=l.data)||void 0===e?void 0:null===(o=e.hover)||void 0===o?void 0:o.enable)?(i.hasOwnProperty("state")||(i.state=0),null==l||null===(r=l.data)||void 0===r||null===(n=r.hover)||void 0===n||n.value,l.animated?i.state<1&&(i.state+=.05,i.state>1&&(i.state=1),this.render({from:"Animated increase state"})):(i.state=1,this.render({from:"Increase state"}))):l.animated?i.state>0&&(i.state-=.05,i.state<0&&(i.state=0),this.render({from:"Animated decrease state"})):(i.state=0,this.render({from:"Decrease state"}))}},{key:"baseRender",value:function(){this.setRatio(),this.clearCanvas(),this.drawBackground()}}])&&y(e.prototype,o),r&&y(e,r),t}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function m(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?b(o,!0).forEach((function(e){x(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function x(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function w(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t,e,o){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(o):n.value}})(t,e,o||t)}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=h,S(this,T(e).call(this,t))}var o,r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,t),o=e,(r=[{key:"prepareData",value:function(t){var e=Math.max.apply(Math,w(t.datasets.map((function(t){return(t.values||[]).length}))));w(t.datasets.map((function(t){return t.values}))).map((function(t,o){if(t.length<e)for(var r=e-t.length-1,n=0;n<=r;n++)t.push(o?0:"")})),t.datasets.forEach((function(t){t.color||(t.color=a()),t.color=c(t.color),t.values.forEach((function(e,o){t.values[o]={name:t.name,color:c(t.color),index:o,value:e,state:0}}))})),t.labels.forEach((function(e,o){t.labels[o]={text:e}}));var o=t.datasets.filter((function(t){return"bar"===t.type}));if(o.forEach((function(t,e){t.count=o.length,t.index=e+1})),o.length){this.settings.data.initialValue=0;var r=this.getDrawRect("bar"),n=(r.left,r.width/e);this.settings.data.line.offset.left=n/2,this.settings.data.line.offset.right=n/2}return t}},{key:"getInterpolation",value:function(t,e){var o=this.canvas,r=this.settings,n=r.data,i=r.offset,a=r.grid,l=o.element,s=(o.context,n.line.styles.lineWidth,Math.max.apply(Math,w(e))),f=Math.min.apply(Math,w(e)),c=i.top+a.offset.top+a.styles.borderWidth,u=100*(t*this.state.loading-f*(f>0?this.state.loading:1))/(s-f)/100,h=l.clientHeight-i.top-a.offset.top-i.bottom-a.offset.bottom-2*a.styles.borderWidth;return c+h-h*u}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,o=e.grid,r=e.offset,n=t.element,i=t.context,a=o.enable,l=o.horizontal,s=o.vertical,f=o.styles;if(a){i.save();var c=0+r.left,u=n.clientWidth-r.right-r.left,h=0+r.top,d=n.clientHeight-r.bottom-r.top;if(i.lineWidth=f.borderWidth,i.strokeStyle=f.borderColor,i.fillStyle=f.background,f.dash&&i.setLineDash(f.dash),i.beginPath(),i.roundRect(c,h,u,d,f.borderRadius),i.fill(),i.closePath(),i.stroke(),i.restore(),l&&l.enable){i.save();var p=[],y=(n.clientHeight-r.top-r.bottom)/(l.step+1),v=(n.clientHeight-r.top-r.bottom)/l.step,g=r.top,b=m({},f,{},l.styles||{});if("px"===(l.type||o.type))for(var x=1;x<v;x++){var w=g+x*l.step;p.push(w)}else for(var P=1;P<l.step+1;P++){var S=g+P*y;p.push(S)}i.lineWidth=b.borderWidth,i.strokeStyle=b.borderColor,b.dash&&i.setLineDash(b.dash);for(var O=0;O<=p.length-1;O++)i.beginPath(),i.lineTo(0+r.left,p[O]),i.lineTo(n.clientWidth-r.right,p[O]),i.stroke();i.restore()}if(s&&s.enable){i.save();var T=[],k=(n.clientWidth-r.right-r.left)/(s.step+1),j=(n.clientWidth-r.right-r.left)/s.step,W=r.left,E=m({},f,{},s.styles||{});if("px"===(s.type||o.type))for(var _=1;_<j;_++){var D=W+_*s.step;T.push(D)}else for(var R=1;R<s.step+1;R++){var M=W+R*k;T.push(M)}i.lineWidth=E.borderWidth,i.strokeStyle=E.borderColor,E.dash&&i.setLineDash(E.dash);for(var A=0;A<=T.length-1;A++)i.beginPath(),i.lineTo(T[A],0+r.top),i.lineTo(T[A],n.clientHeight-r.bottom),i.stroke();i.restore()}i.restore()}}},{key:"drawLabels",value:function(){var t=this.canvas,e=this.settings,o=this.data,r=e.labels,n=e.offset,i=(e.grid,t.element),a=t.context,l=r.enable,s=r.styles;if(l){var f=this.getDrawRect("line"),c=f.left,u=f.width/(o.labels.length-1),h=i.clientHeight-n.bottom/2;o.labels.forEach((function(t,e){var o=c+(u?u*e:0);a.font="100 "+s.fontSize+"px arial",a.fillStyle=s.color,a.textAlign="center",a.textBaseline="middle",t.xStart=o-u/2,t.xEnd=o+u/2,a.fillText(t.text,o,h)}))}}},{key:"getDatasets",value:function(){return this.data.datasets}},{key:"getAllValues",value:function(){var t=this.settings.data,e=[];return(t.initialValue||0===t.initialValue)&&e.push(t.initialValue),this.getDatasets().reduce((function(t,e){return[].concat(w(t),w(e.values.map((function(t){return t.value}))))}),e)}},{key:"drawValues",value:function(){var t=this.canvas,e=this.settings,o=e.values,r=e.offset,n=(e.grid,t.element,t.context),i=o.enable,a=o.styles,l=o.digits;if(i){var s=r.left/2,f=this.getAllValues(),c=Math.max.apply(Math,w(f)),u=Math.min.apply(Math,w(f));n.font="100 "+a.fontSize+"px arial",n.fillStyle=a.color,n.textAlign="center",n.textBaseline="middle";for(var h=[],d=(c-u)/9,p=0;p<=9;p++){var y=c-d*p;h.push({value:0===p?c:9===p?u:y,x:s,y:this.getInterpolation(y,f)})}h.forEach((function(t){n.fillText(t.value.toFixed(l),t.x,t.y)}))}}},{key:"drawData",value:function(){var t=this,e=this.settings.data.enable,o=this.getDatasets();e&&(o.filter((function(t){return"bar"===t.type})).forEach((function(e){var o=e.type;o=o.toUpperCase(),t["draw"+o]&&t["draw"+o](e)})),o.filter((function(t){return"line"===t.type})).forEach((function(e){var o=e.type;o=o.toUpperCase(),t["draw"+o]&&t["draw"+o](e)})))}},{key:"getDrawRect",value:function(t){var e=this.canvas,o=this.settings,r=o.offset,n=o.grid,i=o.data,a=e.element,l=(e.context,{top:r.top+n.styles.borderWidth,left:r.left+n.styles.borderWidth,right:r.right+n.styles.borderWidth,bottom:r.bottom-n.styles.borderWidth,width:a.clientWidth-r.left-r.right-2*n.styles.borderWidth,height:a.clientHeight-r.top-r.bottom-2*n.styles.borderWidth}),s={top:l.top+n.offset.top,left:l.left+n.offset.left,right:l.right+n.offset.right,bottom:l.bottom-n.offset.bottom,width:l.width-n.offset.left-n.offset.right,height:l.height-n.offset.top-n.offset.bottom},f={view:l,grid:s,bar:s,line:m({},s,{left:s.left+i.line.offset.left,right:s.right+i.line.offset.right,width:s.width-i.line.offset.left-i.line.offset.right})};return t&&f[t]?f[t]:f}},{key:"drawLINE",value:function(t,e){var o,r=this,n=this.canvas,i=this.settings,a=i.data,l=(i.offset,i.grid,n.element),f=n.context,c=a.line,u=c.styles.lineWidth,h=t.values,d=(t.color,this.getDrawRect("line")),p=this.getDrawRect("view"),y=d.left,v=d.width/(1===h.length?1:h.length-1);f.strokeStyle=t.color,f.lineWidth=u,f.lineJoin="round",f.beginPath(),h.forEach((function(t,e){var o=y+v*e,n=r.getInterpolation(t.value,r.getAllValues());t.isFirst=!e,t.isLast=e===h.length-1,t.area={xStart:t.isFirst?p.left:o-v/2,yStart:d.top,xEnd:t.isLast?l.clientWidth-p.right:o+v/2,yEnd:d.top+d.height},r.checkIsHovered(t),e?f.lineTo(o,n):f.moveTo(o,n)})),f.stroke(),(null==c?void 0:null===(o=c.dots)||void 0===o?void 0:o.enable)&&(f.fillStyle=t.color,f.strokeStyle=s(t.color,-50),h.forEach((function(t,e){f.beginPath();var o=y+v*e,n=r.getInterpolation(t.value,r.getAllValues());f.arc(o,n,c.dots.width+(c.dots.hover.enable?c.dots.hover.width*t.state:0),0,2*Math.PI),f.fill(),f.closePath(),f.stroke()})))}},{key:"drawBAR",value:function(t,e){var o=this,r=this.canvas,n=this.settings,i=(this.cursor,n.data),a=r.element,l=r.context,f=i.bar,c=t.values,u=this.getDrawRect("bar"),h=this.getDrawRect("view"),d=u.left,p=u.width/c.length;i.line.offset.left=p/2,i.line.offset.right=p/2,c.forEach((function(e,r){var n;e.isFirst=!r,e.isLast=r===c.length-1,l.beginPath();var i=s(t.color,(null==f?void 0:null===(n=f.hover)||void 0===n?void 0:n.enable)?f.hover.value*e.state:1);l.strokeStyle=i,l.fillStyle=i;var y=p/t.count-f.offset/t.count,v=d+f.offset/2+p*r+y*(t.index-1),g=v,b=v+y,m=o.getInterpolation(e.value,o.getAllValues()),x=o.getInterpolation(0,o.getAllValues());e.area={xStart:e.isFirst?h.left:d+p*r,yStart:u.top,xEnd:e.isLast?a.clientWidth-h.right:d+p*r+y*t.count+f.offset,yEnd:u.top+u.height},o.checkIsHovered(e),l.moveTo(g,x),l.lineTo(g,m),l.lineTo(b,m),l.lineTo(b,x),l.fill()}))}},{key:"checkIsHovered",value:function(t){var o=this.cursor,r=t.area,n=o.x>=r.xStart&&o.x<r.xEnd&&o.y>=r.yStart&&o.y<r.yEnd;return t.isHovered=n,O(T(e.prototype),"hover",this).call(this,{item:t,isHovered:n}),n}},{key:"drawTooltip",value:function(){var t=this.settings,o=this.data,r=this.cursor,n=o.datasets.map((function(t){return t.values.filter((function(t){return t.isHovered}))}));if((n=n.reduce((function(t,e){return[].concat(w(t),w(e))}),[])).length){var i=o.labels.filter((function(t){return t.xStart<=r.x&&t.xEnd>=r.x})),a=i[i.length-1];O(T(e.prototype),"drawTooltip",this).call(this,{title:{text:(null==a?void 0:a.text)||""},panels:n.map((function(e){return{colorPanel:{color:e.color},texts:[{text:"Value: "+e.value.toFixed(t.data.digits)}],footer:{text:e.name}}})),render:function(t){}})}}},{key:"render",value:function(){var t=this,o=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){O(T(e.prototype),"baseRender",t).call(t),t.drawGrid(),t.drawLabels(),t.drawData(),t.drawValues(),t.drawTooltip()}),o/60)}}])&&P(o.prototype,r),n&&P(o,n),e}(v),W={offset:{top:30,right:30,bottom:30,left:30},data:{volumed:!0,hover:{value:20},styles:{width:80,color:"#fff"}},texts:{center:{enable:!1,text:"100%",styles:{color:"#ffffff",fontSize:30}},slicePercent:{enable:!1,styles:{color:"#ffffff",fontSize:10}}}};function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t,e,o){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(o):n.value}})(t,e,o||t)}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var H=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=W,D(this,M(e).call(this,t))}var o,r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,t),o=e,(r=[{key:"prepareData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=(t=t.filter((function(t){return t.value>0}))).reduce((function(t,e){return t+(parseFloat(e.value)||0)}),0);return t.forEach((function(t){t.percent=100/e*t.value,t.total=e,t.color=t.color||a(),t.state=t.state||0})),t}},{key:"generatePolygon",value:function(t){var e=t.count,o=void 0===e?20:e,r=t.x,n=t.y,i=t.radius,a=t.sliceWidth,s=t.startPi,f=t.endPi,c=[],u=(f-s)/o;u=isFinite(u)?u:0;for(var h=0;h<=o;h++)c.push(l(r,n,i+a/2,s+u*h));for(var d=0;d<=o;d++)c.push(l(r,n,i-a/2,f-u*d));return c}},{key:"drawSlices",value:function(){var t,o,r=this.canvas,n=this.settings,i=this.data,a=this.cursor,f=this.type,c=this.state,h=r.context,d=r.element,p=Math.min(d.clientHeight-n.offset.top-n.offset.bottom-("donut"===f?n.data.styles.width:0),d.clientWidth-n.offset.left-n.offset.right-("donut"===f?n.data.styles.width:0))*c.loading,y=d.clientWidth/2+n.offset.left-n.offset.right,v=d.clientHeight/2+n.offset.top-n.offset.bottom,g=n.data.volumed,b=-Math.PI/2;"pie"===f&&(t=p/2,o=p/4),"donut"===f&&(t=n.data.styles.width>=p?p:n.data.styles.width,o=p/2);for(var m=0;m<=i.length-1;m++){var x=b,w=2*Math.PI*c.loading*i[m].percent/100+b,P=n.data.hover.value*i[m].state;i[m].startPi=x,i[m].endPi=w,b=w;var S=this.generatePolygon({x:y,y:v,radius:o+P/2,sliceWidth:t+P,startPi:x,endPi:w}),O=u({x:a.x,y:a.y,polygon:S});i[m].polygon=S,i[m].hovered=O,R(M(e.prototype),"hover",this).call(this,{item:i[m],isHovered:i[m].hovered});var T=[];if(T.push({radius:o+P/2,width:t+P,color:s(i[m].color,P),x:y,y:v,startPi:x,endPi:w}),g){var k=void 0,j=void 0;"donut"===f&&(k=o-t/4+P/2,j=t/2+P),"pie"===f&&(j=2*(k=o-t/6+P/2)),T.push({radius:k,width:j,color:s(i[m].color,-50+P),x:y,y:v,startPi:x,endPi:w})}for(var W=0;W<=T.length-1;W++)h.save(),h.beginPath(),h.strokeStyle=T[W].color,h.lineWidth=T[W].width,h.fillStyle="transparent",h.arc(T[W].x,T[W].y,T[W].radius>0?T[W].radius:0,T[W].startPi,T[W].endPi),h.fill(),h.stroke(),h.restore()}if(n.texts.slicePercent.enable)for(var E=0;E<=i.length-1;E++){h.font="100 "+n.texts.slicePercent.styles.fontSize+"px arial",h.textAlign="center",h.textBaseline="middle",h.fillStyle=n.texts.slicePercent.styles.color;var _=o,D=n.data.hover.value*i[E].state;"donut"===f&&g&&(_+=t/4+D),"donut"!==f||g||(_+=D/2),"pie"===f&&g&&(_+=t/3+D),"pie"!==f||g||(_+=D/2);var A=parseFloat(i[E].percent.toFixed(2))+"%",H=l(y,v,_,(i[E].startPi+i[E].endPi)/2);h.fillText(A,H.x,H.y)}n.texts.center.enable&&(h.font="800 "+n.texts.center.styles.fontSize*c.loading+"px arial",h.textAlign="center",h.textBaseline="middle",h.fillStyle=n.texts.center.styles.color,h.fillText(n.texts.center.text,y,v))}},{key:"drawTooltip",value:function(){var t=this.data.find((function(t){return t.hovered}));t&&R(M(e.prototype),"drawTooltip",this).call(this,{title:{text:t.label},panels:[{colorPanel:{color:t.color},texts:[{text:"Value: "+t.value},{text:"Percent: "+t.percent.toFixed(2)+"%"}],footer:{text:"Total: "+t.total}}],render:function(t){}})}},{key:"render",value:function(){var t=this,o=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){R(M(e.prototype),"baseRender",t).call(t),t.drawSlices(),t.drawTooltip()}),o/60)}}])&&_(o.prototype,r),n&&_(o,n),e}(v);function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var V=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="donut",I(this,z(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(e,t),e}(H);function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="pie",B(this,G(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(e,t),e}(H),Y={offset:{top:40,right:40,bottom:40,left:40},scheme:{count:4,styles:{width:2,color:"#2b2a49"}},labels:{enable:!0,offset:15,styles:{fontSize:14,color:"#ffffff"}},data:{line:{styles:{width:2}},dots:{enable:!0,styles:{width:3,hover:{width:5}}}}};function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function X(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function q(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t,e){return!e||"object"!==J(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t,e,o){return(Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Z(t)););return t}(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(o):n.value}})(t,e,o||t)}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(t,e){return($=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var tt=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=Y,K(this,Z(e).call(this,t))}var o,r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}(e,t),o=e,(r=[{key:"prepareData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.labels;return t.datasets.forEach((function(t,o){if(t.color=t.color||a(),t.state=t.state||0,t.values.length>e.length&&(t.values.length=e.length),t.values.length<e.length)for(var r=t.values.length;r<e.length;r++)t.values.push(0);t.values=t.values.map((function(t,e){return{value:t,parentIndex:o,index:e}}))})),t}},{key:"getCoords",value:function(){var t=this.canvas,e=this.settings,o=this.data,r=(t.context,t.element),n=Math.min(r.clientHeight-e.offset.top-e.offset.bottom,r.clientWidth-e.offset.left-e.offset.right);return{width:n,widthHalf:n/2,x:r.clientWidth/2+e.offset.left-e.offset.right,y:r.clientHeight/2+e.offset.top-e.offset.bottom,piStart:-Math.PI/2,piPart:2*Math.PI/o.labels.length}}},{key:"drawTooltip",value:function(){var t=this,o=this.data.datasets.map((function(t){return t.values})).flat(),r=this.data.labels,n=o.filter((function(t){return t.hovered}));n.length&&Q(Z(e.prototype),"drawTooltip",this).call(this,{title:{text:r[n[0].index]},panels:n.map((function(e){return{colorPanel:{color:t.data.datasets[e.parentIndex].color},texts:[{text:"Value: "+e.value}],footer:{text:t.data.datasets[e.parentIndex].name}}})),render:function(t){}})}},{key:"drawScheme",value:function(){for(var t=this.canvas,e=this.settings,o=this.data,r=(this.cursor,this.type,this.state,t.context),n=(t.element,e.scheme),i=this.getCoords(),a=0;a<=o.labels.length-1;a++){var s=l(i.x,i.y,i.widthHalf,i.piStart+i.piPart*a);r.strokeStyle=n.styles.color,r.lineWidth=n.styles.width,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(s.x,s.y),r.fill(),r.stroke();for(var f=0;f<=n.count;f++){var c=i.widthHalf/n.count,u=l(i.x,i.y,i.widthHalf-c*f,i.piStart+i.piPart*a),h=l(i.x,i.y,i.widthHalf-c*f,i.piStart+i.piPart*(a-1));r.beginPath(),r.moveTo(u.x,u.y),r.lineTo(h.x,h.y),r.fill(),r.stroke()}}}},{key:"drawLabels",value:function(){for(var t=this.canvas,e=this.settings,o=this.data,r=(this.cursor,this.type,this.state),n=t.context,i=(t.element,e.labels),a=this.getCoords(),s=0;s<=o.labels.length-1;s++)i.enable&&function(){n.save();var t=l(a.x,a.y,a.widthHalf+i.offset,a.piStart+a.piPart*s),e=o.labels[s]||"";n.globalAlpha=1*r.loading,n.font="100 "+i.styles.fontSize*r.loading+"px arial",n.textAlign=t.x>a.x?"left":t.x<a.x?"right":"center",n.textBaseline="middle",n.fillStyle=i.styles.color,n.fillText(e,t.x,t.y),n.restore()}()}},{key:"drawData",value:function(){for(var t=this.canvas,o=this.settings,r=this.data,n=this.cursor,i=(this.type,this.state),a=t.context,s=(t.element,this.getCoords()),f=r.datasets.map((function(t){return t.values})).flat().map((function(t){return t.value})),c=Math.max.apply(Math,X(f)),h=0;h<=r.datasets.length-1;h++){var d=r.datasets[h];a.strokeStyle=d.color,a.fillStyle=d.color,a.lineWidth=o.data.line.styles.width,a.beginPath();for(var p=0;p<=d.values.length-1;p++){var y=d.values[p],v=y.value/c,g=l(s.x,s.y,s.widthHalf*v*i.loading,s.piStart+s.piPart*p);y.coords=g,0===p?a.moveTo(g.x,g.y):a.lineTo(g.x,g.y)}a.globalAlpha=.5,a.fill(),a.globalAlpha=1,a.closePath(),a.stroke();for(var b=0;b<=d.values.length-1;b++){var m=d.values[b],x=m.value/c,w=l(s.x,s.y,s.widthHalf*x*i.loading,s.piStart+s.piPart*b),P=[{x:s.x,y:s.y},l(s.x,s.y,s.widthHalf,s.piStart+s.piPart*b-s.piPart/2),l(s.x,s.y,s.widthHalf,s.piStart+s.piPart*b),l(s.x,s.y,s.widthHalf,s.piStart+s.piPart*b+s.piPart/2)];if(m.hovered=u({polygon:P,x:n.x,y:n.y}),Q(Z(e.prototype),"hover",this).call(this,{item:m,isHovered:m.hovered}),o.data.dots.enable){var S=o.data.dots.styles.width*i.loading;m.hasOwnProperty("state")&&(S+=(o.data.dots.styles.hover.width-o.data.dots.styles.width)*m.state),a.beginPath(),a.arc(w.x,w.y,S,0,2*Math.PI),a.fill(),a.closePath(),a.stroke()}}}}},{key:"render",value:function(){var t=this,o=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){Q(Z(e.prototype),"baseRender",t).call(t),t.drawScheme(),t.drawLabels(),t.drawData(),t.drawTooltip()}),o/60)}}])&&q(o.prototype,r),n&&q(o,n),e}(v);o.d(e,"Plot",(function(){return j})),o.d(e,"Donut",(function(){return V})),o.d(e,"Pie",(function(){return U})),o.d(e,"Radar",(function(){return tt}));e.default={Plot:j,Donut:V,Pie:U,Radar:tt};window.bChart={Plot:j,Donut:V,Pie:U,Radar:tt}}])}));