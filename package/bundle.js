!function(){"use strict";var t={d:function(e,o){for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Donut:function(){return x},Funnel:function(){return w},Pie:function(){return y},Plot:function(){return g},Radar:function(){return m},Spectr:function(){return P},default:function(){return T}});const o=t=>t.reduce((function(t,e){return e.replace(/^#/,"").match(/.{2}/g).map((function(e,o){return t[o]+parseInt(e,16)}))}),[0,0,0]).reduce((function(e,o){return e+((i=Math.floor(o/t.length).toString(16)).length<2&&(i="0"+i),i);var i}),"#"),i=(t,e)=>{for(var o in e)try{e[o].constructor==Object?t[o]=i(t[o],e[o]):t[o]=e[o]}catch(i){t[o]=e[o]}return t},r=t=>{if("object"!=typeof t)return t;if(!t)return t;var e=t instanceof Array?[]:{};for(var o in t)t.hasOwnProperty(o)&&(e[o]=r(t[o]));return e},l=()=>{for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},a=(t,e,o,i)=>({x:t+Math.cos(i)*o,y:e+Math.sin(i)*o}),s=(t,e)=>(e=parseInt(e),"#"+t.replace(/^#/,"").replace(/../g,(t=>("0"+Math.min(255,Math.max(0,parseInt(t,16)+e)).toString(16)).substr(-2)))),n=t=>{if(4===t.length){let e="#";for(let o=1;o<=t.length-1;o++)e+=t[o]+t[o];t=e}return t},h=({x:t,y:e,polygon:o})=>{for(var i=!1,r=0,l=o.length-1;r<o.length;l=r++){var a=o[r].x,s=o[r].y,n=o[l].x,h=o[l].y;s>e!=h>e&&t<(n-a)*(e-s)/(h-s)+a&&(i=!i)}return i};Date.prototype.formatting=function(t){var e=this.getFullYear().toString();t=t.replace(/yyyy/g,e);var o=(this.getMonth()+1).toString();t=t.replace(/mm/g,o[1]?o:"0"+o[0]);var i=this.getDate().toString();t=t.replace(/dd/g,i[1]?i:"0"+i[0]);var r=this.getHours().toString();t=t.replace(/hh/g,r[1]?r:"0"+r[0]);var l=this.getMinutes().toString();t=t.replace(/ii/g,l[1]?l:"0"+l[0]);var a=this.getSeconds().toString();return t.replace(/ss/g,a[1]?a:"0"+a[0])},CanvasRenderingContext2D.prototype.roundRect=function(t,e,o,i,r){return o<2*r&&(r=o/2),i<2*r&&(r=i/2),this.beginPath(),this.moveTo(t+r,e),this.arcTo(t+o,e,t+o,e+i,r),this.arcTo(t+o,e+i,t,e+i,r),this.arcTo(t,e+i,t,e,r),this.arcTo(t,e,t+o,e,r),this.closePath(),this},CanvasRenderingContext2D.prototype.drawCurve=function(t,e={}){t=r(t);const{closePath:o}=e;if(!t.length)return;let i,l;o&&(t[0]={x:(t[t.length-1].x+t[1].x)/2,y:(t[t.length-1].y+t[1].y)/2},t.push(t[0])),this.beginPath(),this.moveTo(t[0].x,t[0].y);for(let e=0;e<t.length-1;e++)i=(t[e].x+t[e+1].x)/2,l=(t[e].y+t[e+1].y)/2,this.quadraticCurveTo(t[e].x,t[e].y,i,l);const a=t[t.length-1];return this.quadraticCurveTo(a.x,a.y,a.x,a.y),this.stroke(),this},CanvasRenderingContext2D.prototype.drawLineCurve=function(t){let e,o,i,l,a;t=r(t),void 0===e&&(e=.3),void 0===o&&(o=.6),this.beginPath(),this.moveTo(t[0].x,t[0].y);for(var s,n,h=0,d=0,f=0,c=t[0],g=1;g<t.length;g++){var u=t[g];i=t[g+1],i?(s=c,h=((n=i).y-s.y)/(n.x-s.x),l=(i.x-u.x)*-e,a=l*h*o):(l=0,a=0),this.bezierCurveTo(c.x-d,c.y-f,u.x+l,u.y+a,u.x,u.y),d=l,f=a,c=u}return this.stroke(),this};var d={offset:{top:20,right:20,bottom:40,left:60},grid:{enable:!0,offset:{top:20,right:0,bottom:20,left:0},styles:{background:"",borderColor:"#2b2a49",borderRadius:5,borderWidth:2},horizontal:{step:4,enable:!0},vertical:{step:10,enable:!0}},labels:{enable:!0,styles:{color:"#fff",fontSize:12}},values:{enable:!0,digits:2,count:10,styles:{color:"#fff",fontSize:12}},data:{enable:!0,offset:0,digits:2,line:{offset:{left:0,top:0,right:0,bottom:0},dots:{enable:!0,width:5,hover:{enable:!0,width:3}},styles:{lineWidth:2}},bar:{offset:10,hover:{enable:!0,value:50}}}},f={animated:!0,view:{styles:{background:"#1a1e30"}},data:{hover:{enable:!0}},tooltip:{enable:!0,styles:{color:"#ffffff",background:"#403f4c",borderColor:"#fff",borderWidth:0,borderRadius:3,fontSize:12,padding:{top:10,right:10,bottom:10,left:10}}}};class c{constructor(t){let{canvas:e=!1,data:o={},defaultSettings:l={},settings:a={},actions:s={},type:n}=t;this.type=n,this.actions=s,this.canvas={element:e,context:e.getContext("2d"),isCanvas:(e instanceof Element||e instanceof HTMLDocument)&&"canvas"===e.tagName.toLowerCase()},this.cursor={x:0,y:0},this.settings=i(r(f),r(l)),this.timeStamp=+new Date,this.setSettings(a),this.state={loading:this.settings.animated?0:1},this.data=this.prepareData(o),this.commonInit()}prepareData(t){return t}setSettings(t={}){i(this.settings,t),this.render({from:"setSettings"})}getSettings(){return this.settings}setData(t){this.data=this.prepareData(t),this.render({from:"setData"})}getData(){return this.data}setRatio(){let{canvas:t}=this,{context:e,element:o}=t,i=window.devicePixelRatio||1;o.width=o.clientWidth*i,o.height=o.clientHeight*i,e.scale(i,i)}clearCanvas(){let{canvas:t}=this,{context:e,element:o}=t;e.clearRect(0,0,t.width,t.height)}loading(){this.state.loading>=1||setTimeout((()=>{this.state.loading+=.03,this.state.loading=this.state.loading>1?1:this.state.loading,this.render({from:"loading"}),this.loading()}),1e3/60)}commonInit(){this.render({from:"commonInit"}),this.loading(),this.commonListeners()}commonListeners(){let{canvas:t}=this,{context:e,element:o}=t;window.addEventListener("resize",(()=>{this.render({from:"resize"})})),o.addEventListener("mousemove",(t=>{let{settings:e}=this,i=o.getBoundingClientRect(),r=t.clientX-i.left,l=t.clientY-i.top;this.cursor={x:r,y:l},this.render({from:"mousemove"})})),o.addEventListener("mouseout",(t=>{this.cursor={x:0,y:0},this.render({from:"mouseout"})}))}drawTooltip({title:t="",panels:e=[],x:o,y:i,render:r}={}){let{canvas:l,settings:a,data:n=[],cursor:h}=this,{element:d,context:f}=l,{tooltip:c}=a,{styles:g}=c;if(o||(o=h.x),i||(i=h.y),c&&c.enable){f.font="100 "+g.fontSize+"px arial",f.textAlign="left",f.textBaseline="middle";let{width:l,height:a}=(()=>{let o=0,i=0;t&&t.text?(t.width=f.measureText(t.text).width+g.padding.left+g.padding.right+g.borderWidth,t.height=2*g.padding.top+1.286*g.fontSize+g.borderWidth/2,t.x=g.padding.left+g.borderWidth/2,t.y=t.height/2+g.borderWidth/2):t={width:0,height:0},e.length&&e.forEach(((o,i)=>{if(o.width=0,o.height=0,o.x=(()=>{let t=0;for(let o=i-1;o>=0;o--)t+=e[o].width;return t})(),o.y=t.height,o.colorPanel&&o.colorPanel.color&&(o.colorPanel.height=3,o.colorPanel.x=g.borderWidth/2,o.colorPanel.y=0,o.height+=o.colorPanel.height),o.texts&&o.texts.forEach(((t,e)=>{if(t.text){let i=f.measureText(t.text).width+g.borderWidth;o.width<i&&(o.width=i),t.height=1.286*g.fontSize,t.x=g.padding.left+g.borderWidth/2,t.y=o.height+t.height/2,e||(t.height+=g.padding.top,t.y+=g.padding.top),e===o.texts.length-1&&(t.height+=g.padding.bottom),o.height+=t.height}})),o.footer&&o.footer.text){let t=f.measureText(o.footer.text).width+g.borderWidth;o.width<t&&(o.width=t),o.footer.height=g.padding.bottom+1.286*g.fontSize,o.footer.x=g.padding.left+g.borderWidth/2,o.footer.y=o.height+o.footer.height/2-g.padding.bottom/2,o.height+=o.footer.height+g.borderWidth/2}o.width+=g.padding.left+g.padding.right}));let r=e.reduce(((t,e)=>t+e.width),0);if(t.width>r){let o=t.width/e.length,i=0,r=0;for(let t=0;t<=e.length-1;t++)e[t].width>=o?r+=e[t].width-o:i++;for(let t=0;t<=e.length-1;t++)e[t].width=e[t].width<o?o-r/i:e[t].width,e[t].x=(()=>{let o=0;for(let i=t-1;i>=0;i--)o+=e[i].width;return o})()}return i=t.height+(e.length?Math.max(...e.map((t=>t.height))):0),o=Math.max(t.width,r),{width:o,height:i}})(),n=o,h=10,c=o-l/2,p=!1,x=i-a-h;x<g.borderWidth&&(p=!0,x=i+h),c+l>d.clientWidth-g.borderWidth/2&&(c=d.clientWidth-l-g.borderWidth/2),c<g.borderWidth/2&&(c=g.borderWidth/2),f.fillStyle=g.background,f.strokeStyle=g.borderWidth>0?g.borderColor:"transparent",f.lineWidth=g.borderWidth,f.beginPath(),f.roundRect(c,x,l,a,g.borderRadius),f.closePath(),f.fill(),f.stroke(),p?(f.beginPath(),f.moveTo(n-5,x),f.lineTo(n,x-5),f.lineTo(n+5,x),f.fill(),f.stroke(),f.beginPath(),f.moveTo(n-5+g.borderWidth/4,x+g.borderWidth/2),f.lineTo(n,x-5+g.borderWidth/1.5),f.lineTo(n+5-g.borderWidth/4,x+g.borderWidth/2),f.fill()):(f.beginPath(),f.moveTo(n-5,x+a),f.lineTo(n,x+a+5),f.lineTo(n+5,x+a),f.fill(),f.stroke(),f.beginPath(),f.moveTo(n-5+g.borderWidth/4,x+a-g.borderWidth/2),f.lineTo(n,x+a+5-g.borderWidth/1.5),f.lineTo(n+5-g.borderWidth/4,x+a-g.borderWidth/2),f.fill()),f.fillStyle=g.color,t&&t.text&&f.fillText(t.text,c+t.x,x+t.y),e.forEach((t=>{f.fillStyle=g.color,t.colorPanel&&t.colorPanel.color&&(f.save(),f.fillStyle=t.colorPanel.color,f.beginPath(),f.rect(c+t.x+t.colorPanel.x,x+t.y+t.colorPanel.y,t.width-g.borderWidth,t.colorPanel.height),f.fill(),f.restore()),t.texts&&t.texts.forEach(((e,o)=>{e.text&&f.fillText(e.text,c+t.x+e.x,x+t.y+e.y)})),t.footer&&t.footer.text&&(f.fillStyle=s(g.color,-50),f.fillText(t.footer.text,c+t.x+t.footer.x,x+t.y+t.footer.y))})),r&&(u=r,"[object Function]"==={}.toString.call(u))&&r({context:f,styles:g,box:{width:l,height:a,top:x,left:c,bottom:x+a,right:c+l}})}var u}drawBackground(){let{canvas:t,settings:e}=this,{view:o}=e,{context:i,element:r}=t,{background:l}=o.styles;i.fillStyle=l,i.fillRect(0,0,r.width,r.height)}hover({item:t,isHovered:e}){let{settings:o}=this;e&&o?.data?.hover?.enable?(t.hasOwnProperty("state")||(t.state=0),o?.data?.hover?.value,o.animated?t.state<1&&(t.state+=.05,t.state>1&&(t.state=1),this.render({from:"Animated increase state"})):(t.state=1,this.render({from:"Increase state"}))):o.animated?t.state>0&&(t.state-=.05,t.state<0&&(t.state=0),this.render({from:"Animated decrease state"})):(t.state=0,this.render({from:"Decrease state"}))}baseRender(){this.setRatio(),this.clearCanvas(),this.drawBackground()}}class g extends c{constructor(t){t.defaultSettings=d,super(t)}prepareData(t){let e=Math.max(...t.datasets.map((t=>(t.values||[]).length)));[...t.datasets.map((t=>t.values))].map(((t,o)=>{if(t.length<e){let i=e-t.length-1;for(let e=0;e<=i;e++)t.push(o?0:"")}})),t.datasets.forEach((t=>{t.color||(t.color=l()),t.color=n(t.color),t.values.forEach(((e,o)=>{t.values[o]={name:t.name,color:n(t.color),index:o,value:e,state:0}}))})),t.labels.forEach(((e,o)=>{t.labels[o]={text:e}}));let o=t.datasets.filter((t=>"bar"===t.type));if(o.forEach(((t,e)=>{t.count=o.length,t.index=e+1})),o.length){this.settings.data.initialValue=0;let t=this.getDrawRect("bar"),o=(t.left,t.width/e);this.settings.data.line.offset.left=o/2,this.settings.data.line.offset.right=o/2}return t}getInterpolation(t,e){let{canvas:o,settings:i}=this,{data:r,offset:l,grid:a}=i,{element:s,context:n}=o,{line:h}=r,{lineWidth:d}=h.styles,f=Math.max(...e),c=Math.min(...e),g=l.top+a.offset.top+a.styles.borderWidth,u=100*(t*this.state.loading-c*(c>0?this.state.loading:1))/(f-c)/100,p=s.clientHeight-l.top-a.offset.top-l.bottom-a.offset.bottom-2*a.styles.borderWidth;return g+p-p*u}drawGrid(){let{canvas:t,settings:e}=this,{grid:o,offset:i}=e,{element:r,context:l}=t,{enable:a,horizontal:s,vertical:n,styles:h}=o;if(!a)return;l.save();let d=0+i.left,f=r.clientWidth-i.right-i.left,c=0+i.top,g=r.clientHeight-i.bottom-i.top;if(l.lineWidth=h.borderWidth,l.strokeStyle=h.borderColor,l.fillStyle=h.background,h.dash&&l.setLineDash(h.dash),l.beginPath(),l.roundRect(d,c,f,g,h.borderRadius),l.fill(),l.closePath(),l.stroke(),l.restore(),s&&s.enable){l.save();let t=[],e=(r.clientHeight-i.top-i.bottom)/(s.step+1),a=(r.clientHeight-i.top-i.bottom)/s.step,n=i.top,d={...h,...s.styles||{}};if("px"===(s.type||o.type))for(let e=1;e<a;e++){let o=n+e*s.step;t.push(o)}else for(let o=1;o<s.step+1;o++){let i=n+o*e;t.push(i)}l.lineWidth=d.borderWidth,l.strokeStyle=d.borderColor,d.dash&&l.setLineDash(d.dash);for(let e=0;e<=t.length-1;e++)l.beginPath(),l.lineTo(0+i.left,t[e]),l.lineTo(r.clientWidth-i.right,t[e]),l.stroke();l.restore()}if(n&&n.enable){l.save();let t=[],e=(r.clientWidth-i.right-i.left)/(n.step+1),a=(r.clientWidth-i.right-i.left)/n.step,s=i.left,d={...h,...n.styles||{}};if("px"===(n.type||o.type))for(let e=1;e<a;e++){let o=s+e*n.step;t.push(o)}else for(let o=1;o<n.step+1;o++){let i=s+o*e;t.push(i)}l.lineWidth=d.borderWidth,l.strokeStyle=d.borderColor,d.dash&&l.setLineDash(d.dash);for(let e=0;e<=t.length-1;e++)l.beginPath(),l.lineTo(t[e],0+i.top),l.lineTo(t[e],r.clientHeight-i.bottom),l.stroke();l.restore()}l.restore()}drawLabels(){let{canvas:t,settings:e,data:o}=this,{labels:i,offset:r,grid:l}=e,{element:a,context:s}=t,{enable:n,styles:h}=i;if(!n)return;let d=this.getDrawRect("line"),f=d.left,c=d.width/(o.labels.length-1),g=a.clientHeight-r.bottom/2;o.labels.forEach(((t,e)=>{let o=f+(c?c*e:0);s.font="100 "+h.fontSize+"px arial",s.fillStyle=h.color,s.textAlign="center",s.textBaseline="middle",t.xStart=o-c/2,t.xEnd=o+c/2,s.fillText(t.text,o,g)}))}getDatasets(){let{data:t}=this;return t.datasets}getAllValues(){let{data:t}=this.settings,e=[];return(t.initialValue||0===t.initialValue)&&e.push(t.initialValue),this.getDatasets().reduce(((t,e)=>[...t,...e.values.map((t=>t.value))]),e)}drawValues(){let{canvas:t,settings:e}=this,{values:o,offset:i,grid:r}=e,{element:l,context:a}=t,{enable:s,styles:n,digits:h}=o;if(!s)return;let d=i.left/2,f=this.getAllValues(),c=Math.max(...f),g=Math.min(...f);a.font="100 "+n.fontSize+"px arial",a.fillStyle=n.color,a.textAlign="center",a.textBaseline="middle";let{count:u}=o,p=[],x=(c-g)/(u-1);for(let t=0;t<=u-1;t++){let e=c-x*t;p.push({value:0===t?c:t===u-1?g:e,x:d,y:this.getInterpolation(e,f)})}p.forEach((t=>{a.fillText(t.value.toFixed(h),t.x,t.y)}))}drawData(){let{settings:t}=this,{data:e}=t,{enable:o}=e,i=this.getDatasets();o&&(i.filter((t=>"bar"===t.type)).forEach((t=>{let{type:e}=t;e=e.toUpperCase(),this["draw"+e]&&this["draw"+e](t)})),i.filter((t=>"line"===t.type||"dot"===t.type)).forEach((t=>{let{type:e}=t;e=e.toUpperCase(),this.drawLINE&&this.drawLINE(t)})))}getDrawRect(t){let{canvas:e,settings:o}=this,{offset:i,grid:r,data:l}=o,{element:a,context:s}=e,n={top:i.top+r.styles.borderWidth,left:i.left+r.styles.borderWidth,right:i.right+r.styles.borderWidth,bottom:i.bottom-r.styles.borderWidth,width:a.clientWidth-i.left-i.right-2*r.styles.borderWidth,height:a.clientHeight-i.top-i.bottom-2*r.styles.borderWidth},h={top:n.top+r.offset.top,left:n.left+r.offset.left,right:n.right+r.offset.right,bottom:n.bottom-r.offset.bottom,width:n.width-r.offset.left-r.offset.right,height:n.height-r.offset.top-r.offset.bottom},d={view:n,grid:h,bar:h,line:{...h,left:h.left+l.line.offset.left,right:h.right+l.line.offset.right,width:h.width-l.line.offset.left-l.line.offset.right}};return t&&d[t]?d[t]:d}drawLINE(t,e){let{canvas:o,settings:i}=this,{data:r,offset:l,grid:a}=i,{element:n,context:h}=o,{line:d}=r,{lineWidth:f}=d.styles,{values:c,color:g}=t,u=this.getDrawRect("line"),p=this.getDrawRect("view"),x=u.left,y=u.width/(1===c.length?1:c.length-1);c.forEach(((t,e)=>{let o=x+y*e,i=this.getInterpolation(t.value,this.getAllValues());t.x=o,t.y=i,t.isFirst=!e,t.isLast=e===c.length-1,t.area={xStart:t.isFirst?p.left:o-y/2,yStart:u.top,xEnd:t.isLast?n.clientWidth-p.right:o+y/2,yEnd:u.top+u.height},this.checkIsHovered(t)})),"line"===t.type&&(h.strokeStyle=t.color,h.lineWidth=f,h.lineJoin="round",t.smooth?h.drawLineCurve(c):(h.beginPath(),c.forEach(((t,e)=>{e?h.lineTo(t.x,t.y):h.moveTo(t.x,t.y)})),h.stroke())),("dot"===t.type||d?.dots?.enable)&&(h.fillStyle=t.color,h.strokeStyle=s(t.color,-50),c.forEach(((t,e)=>{h.beginPath(),h.arc(t.x,t.y,d.dots.width+(d.dots.hover.enable?d.dots.hover.width*t.state:0),0,2*Math.PI),h.fill(),h.closePath(),h.stroke()})))}drawBAR(t,e){let{canvas:o,settings:i,cursor:r}=this,{data:l}=i,{element:a,context:n}=o,{bar:h}=l,{values:d}=t,f=this.getDrawRect("bar"),c=this.getDrawRect("view"),g=f.left,u=f.width/d.length;l.line.offset.left=u/2,l.line.offset.right=u/2,d.forEach(((e,o)=>{e.isFirst=!o,e.isLast=o===d.length-1,n.beginPath();let i=s(t.color,h?.hover?.enable?h.hover.value*e.state:1);n.strokeStyle=i,n.fillStyle=i;let r=u/t.count-h.offset/t.count,l=g+h.offset/2+u*o+r*(t.index-1),p=l,x=l+r,y=this.getInterpolation(e.value,this.getAllValues()),b=this.getInterpolation(0,this.getAllValues());e.area={xStart:e.isFirst?c.left:g+u*o,yStart:f.top,xEnd:e.isLast?a.clientWidth-c.right:g+u*o+r*t.count+h.offset,yEnd:f.top+f.height},this.checkIsHovered(e),n.moveTo(p,b),n.lineTo(p,y),n.lineTo(x,y),n.lineTo(x,b),n.fill()}))}checkIsHovered(t){let{cursor:e}=this,{area:o}=t,i=e.x>=o.xStart&&e.x<o.xEnd&&e.y>=o.yStart&&e.y<o.yEnd;return t.isHovered=i,super.hover({item:t,isHovered:i}),i}drawTooltip(){let{settings:t,data:e,cursor:o}=this,i=e.datasets.map((t=>t.values.filter((t=>t.isHovered))));if(i=i.reduce(((t,e)=>[...t,...e]),[]),!i.length)return;let r=e.labels.filter((t=>t.xStart<=o.x&&t.xEnd>=o.x)),l=r[r.length-1];super.drawTooltip({title:{text:l?.text||""},panels:i.map((e=>({colorPanel:{color:e.color},texts:[{text:"Value: "+e.value.toFixed(t.data.digits)}],footer:{text:e.name}}))),render:t=>{}})}render(t={}){this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((()=>{super.baseRender(),this.drawGrid(),this.drawLabels(),this.drawData(),this.drawValues(),this.drawTooltip()}),5)}}var u={offset:{top:30,right:30,bottom:30,left:30},data:{volumed:!0,hover:{value:20},styles:{width:80,color:"#fff"}},texts:{center:{enable:!1,text:"100%",styles:{color:"#ffffff",fontSize:30}},slicePercent:{enable:!1,styles:{color:"#ffffff",fontSize:10}}}};class p extends c{constructor(t){t.defaultSettings=u,super(t)}prepareData(t=[]){let e=(t=t.filter((t=>t.value>0))).reduce(((t,e)=>t+(parseFloat(e.value)||0)),0);return t.forEach((t=>{t.percent=100/e*t.value,t.total=e,t.color=t.color||l(),t.state=t.state||0})),t}generatePolygon({count:t=20,x:e,y:o,radius:i,sliceWidth:r,startPi:l,endPi:s}){let n=[],h=(s-l)/t;h=isFinite(h)?h:0;for(let s=0;s<=t;s++)n.push(a(e,o,i+r/2,l+h*s));for(let l=0;l<=t;l++)n.push(a(e,o,i-r/2,s-h*l));return n}drawSlices(){let t,e,{canvas:o,settings:i,data:r,cursor:l,type:n,state:d}=this,{context:f,element:c}=o,g=Math.min(c.clientHeight-i.offset.top-i.offset.bottom-("donut"===n?i.data.styles.width:0),c.clientWidth-i.offset.left-i.offset.right-("donut"===n?i.data.styles.width:0))*d.loading,u=c.clientWidth/2+i.offset.left-i.offset.right,p=c.clientHeight/2+i.offset.top-i.offset.bottom,{volumed:x}=i.data,y=-Math.PI/2;"pie"===n&&(t=g/2,e=g/4),"donut"===n&&(t=i.data.styles.width>=g?g:i.data.styles.width,e=g/2);for(let o=0;o<=r.length-1;o++){let a=y,c=2*Math.PI*d.loading*r[o].percent/100+y,g=i.data.hover.value*r[o].state;r[o].startPi=a,r[o].endPi=c,y=c;let b=this.generatePolygon({x:u,y:p,radius:e+g/2,sliceWidth:t+g,startPi:a,endPi:c}),m=h({x:l.x,y:l.y,polygon:b});r[o].polygon=b,r[o].hovered=m,super.hover({item:r[o],isHovered:r[o].hovered});let v=[];if(v.push({radius:e+g/2,width:t+g,color:s(r[o].color,g),x:u,y:p,startPi:a,endPi:c}),x){let i,l;"donut"===n&&(i=e-t/4+g/2,l=t/2+g),"pie"===n&&(i=e-t/6+g/2,l=2*i),v.push({radius:i,width:l,color:s(r[o].color,-50+g),x:u,y:p,startPi:a,endPi:c})}for(let t=0;t<=v.length-1;t++)f.save(),f.beginPath(),f.strokeStyle=v[t].color,f.lineWidth=v[t].width,f.fillStyle="transparent",f.arc(v[t].x,v[t].y,v[t].radius>0?v[t].radius:0,v[t].startPi,v[t].endPi),f.fill(),f.stroke(),f.restore()}if(i.texts.slicePercent.enable)for(let o=0;o<=r.length-1;o++){f.font="100 "+i.texts.slicePercent.styles.fontSize+"px arial",f.textAlign="center",f.textBaseline="middle",f.fillStyle=i.texts.slicePercent.styles.color;let l=e,s=i.data.hover.value*r[o].state;"donut"===n&&x&&(l+=t/4+s),"donut"!==n||x||(l+=s/2),"pie"===n&&x&&(l+=t/3+s),"pie"!==n||x||(l+=s/2);let h=parseFloat(r[o].percent.toFixed(2))+"%",d=a(u,p,l,(r[o].startPi+r[o].endPi)/2);f.fillText(h,d.x,d.y)}i.texts.center.enable&&(f.font="800 "+i.texts.center.styles.fontSize*d.loading+"px arial",f.textAlign="center",f.textBaseline="middle",f.fillStyle=i.texts.center.styles.color,f.fillText(i.texts.center.text,u,p))}drawTooltip(){let t=this.data.find((t=>t.hovered));t&&super.drawTooltip({title:{text:t.label},panels:[{colorPanel:{color:t.color},texts:[{text:"Value: "+t.value},{text:"Percent: "+t.percent.toFixed(2)+"%"}],footer:{text:"Total: "+t.total}}],render:t=>{}})}render(t={}){this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((()=>{super.baseRender(),this.drawSlices(),this.drawTooltip()}),5)}}class x extends p{constructor(t){t.type="donut",super(t)}}class y extends p{constructor(t){t.type="pie",super(t)}}var b={offset:{top:40,right:40,bottom:40,left:40},scheme:{count:4,styles:{width:2,color:"#2b2a49"}},labels:{enable:!0,offset:15,styles:{fontSize:14,color:"#ffffff"}},data:{line:{styles:{width:2}},dots:{enable:!0,styles:{width:3,hover:{width:5}}}}};class m extends c{constructor(t){t.defaultSettings=b,super(t)}prepareData(t={}){let e=t.labels;return t.datasets.forEach(((t,o)=>{if(t.color=t.color||l(),t.state=t.state||0,t.values.length>e.length&&(t.values.length=e.length),t.values.length<e.length)for(let o=t.values.length;o<e.length;o++)t.values.push(0);t.values=t.values.map(((t,e)=>({value:t,parentIndex:o,index:e})))})),t}getCoords(){let{canvas:t,settings:e,data:o}=this,{context:i,element:r}=t,l=Math.min(r.clientHeight-e.offset.top-e.offset.bottom,r.clientWidth-e.offset.left-e.offset.right);return{width:l,widthHalf:l/2,x:r.clientWidth/2+e.offset.left-e.offset.right,y:r.clientHeight/2+e.offset.top-e.offset.bottom,piStart:-Math.PI/2,piPart:2*Math.PI/o.labels.length}}drawTooltip(){let t=this.data.datasets.map((t=>t.values)).flat(),{labels:e}=this.data,o=t.filter((t=>t.hovered));o.length&&super.drawTooltip({title:{text:e[o[0].index]},panels:o.map((t=>({colorPanel:{color:this.data.datasets[t.parentIndex].color},texts:[{text:"Value: "+t.value}],footer:{text:this.data.datasets[t.parentIndex].name}}))),render:t=>{}})}drawScheme(){let{canvas:t,settings:e,data:o,cursor:i,type:r,state:l}=this,{context:s,element:n}=t,{scheme:h}=e,d=this.getCoords();for(let t=0;t<=o.labels.length-1;t++){let e=a(d.x,d.y,d.widthHalf,d.piStart+d.piPart*t);s.strokeStyle=h.styles.color,s.lineWidth=h.styles.width,s.beginPath(),s.moveTo(d.x,d.y),s.lineTo(e.x,e.y),s.fill(),s.stroke();for(let e=0;e<=h.count;e++){let o=d.widthHalf/h.count,i=a(d.x,d.y,d.widthHalf-o*e,d.piStart+d.piPart*t),r=a(d.x,d.y,d.widthHalf-o*e,d.piStart+d.piPart*(t-1));s.beginPath(),s.moveTo(i.x,i.y),s.lineTo(r.x,r.y),s.fill(),s.stroke()}}}drawLabels(){let{canvas:t,settings:e,data:o,cursor:i,type:r,state:l}=this,{context:s,element:n}=t,{labels:h}=e,d=this.getCoords();for(let t=0;t<=o.labels.length-1;t++)if(h.enable){s.save();let e=a(d.x,d.y,d.widthHalf+h.offset,d.piStart+d.piPart*t),i=o.labels[t]||"";s.globalAlpha=1*l.loading,s.font="100 "+h.styles.fontSize*l.loading+"px arial",s.textAlign=e.x>d.x?"left":e.x<d.x?"right":"center",s.textBaseline="middle",s.fillStyle=h.styles.color,s.fillText(i,e.x,e.y),s.restore()}}drawData(){let{canvas:t,settings:e,data:o,cursor:i,type:r,state:l}=this,{context:s,element:n}=t,d=this.getCoords(),f=o.datasets.map((t=>t.values)).flat().map((t=>t.value)),c=Math.max(...f);for(let t=0;t<=o.datasets.length-1;t++){let r=o.datasets[t];s.strokeStyle=r.color,s.fillStyle=r.color,s.lineWidth=e.data.line.styles.width,s.beginPath();for(let t=0;t<=r.values.length-1;t++){let e=r.values[t],o=e.value/c,i=a(d.x,d.y,d.widthHalf*o*l.loading,d.piStart+d.piPart*t);e.coords=i,0===t?s.moveTo(i.x,i.y):s.lineTo(i.x,i.y)}s.globalAlpha=.5,s.fill(),s.globalAlpha=1,s.closePath(),s.stroke();for(let t=0;t<=r.values.length-1;t++){let o=r.values[t],n=o.value/c,f=a(d.x,d.y,d.widthHalf*n*l.loading,d.piStart+d.piPart*t),g=[{x:d.x,y:d.y},a(d.x,d.y,d.widthHalf,d.piStart+d.piPart*t-d.piPart/2),a(d.x,d.y,d.widthHalf,d.piStart+d.piPart*t),a(d.x,d.y,d.widthHalf,d.piStart+d.piPart*t+d.piPart/2)];if(o.hovered=h({polygon:g,x:i.x,y:i.y}),super.hover({item:o,isHovered:o.hovered}),e.data.dots.enable){let t=e.data.dots.styles.width*l.loading;o.hasOwnProperty("state")&&(t+=(e.data.dots.styles.hover.width-e.data.dots.styles.width)*o.state),s.beginPath(),s.arc(f.x,f.y,t,0,2*Math.PI),s.fill(),s.closePath(),s.stroke()}}}}render(t={}){this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((()=>{super.baseRender(),this.drawScheme(),this.drawLabels(),this.drawData(),this.drawTooltip()}),5)}}var v={offset:{top:30,right:30,bottom:30,left:30},label:{enable:!0,styles:{fontSize:14,color:"#fff"}},value:{enable:!0,styles:{fontSize:14,color:"#fff"}},area:{gradient:!1,smooth:!0},hover:{enable:!0,value:15}};class w extends c{constructor(t){t.defaultSettings=v,super(t)}prepareData(t=[]){return t.forEach((t=>{t.color=t.color||l(),t.state=t.state||0})),t}drawTooltip(){let{data:t}=this,e=t.find((t=>t.hovered));e&&super.drawTooltip({title:{text:e.label},panels:[{colorPanel:{color:e.color},texts:[{text:"Value: "+e.value}]}],render:t=>{}})}getDrawRect(){let{canvas:t,settings:e,data:o}=this,{element:i}=t,r={xStart:e.offset.left,xEnd:i.clientWidth-e.offset.right,yStart:e.offset.top,yEnd:i.clientHeight-e.offset.bottom};return r.width=r.xEnd-r.xStart,r.height=r.yEnd-r.yStart,r.center=r.xStart+r.width/2,r.partHeight=r.height/o.length,r}drawFunnel(){let{canvas:t,settings:e,data:i,cursor:r,type:l,state:a}=this,{context:n,element:d}=t,f=Math.max(...i.map((t=>t.value))),c=this.getDrawRect();i=this.prepareData(i);let g=[],u=[];for(let t=0;t<=i.length-1;t++){let l=i[t],d=i[t+1],p=i[t-1],x=c.yStart+c.partHeight*t,y=x+c.partHeight,b=l.value/f*c.width,m=d?d.value/f*c.width:b;b*=a.loading,m*=a.loading,n.beginPath(),n.strokeStyle="transparent";let v=s(l.color,e.hover.enable&&l.state?e.hover.value*l.state:1);if(e.area?.gradient){let t=d?s(d.color,e.hover.enable&&d.state?e.hover.value*d.state:1):v,i=p?s(p.color,e.hover.enable&&p.state?e.hover.value*p.state:1):v,r=n.createLinearGradient(0,x,0,y);r.addColorStop(0,o([i,v])),r.addColorStop(.3,v),r.addColorStop(.7,v),r.addColorStop(1,o([v,t])),v=r}n.fillStyle=n.strokeStyle=v;let w=[{x:c.center-b/2,y:x},{x:c.center-m/2,y:y},{x:c.center+m/2,y:y},{x:c.center+b/2,y:x}];t||(g.push([w[0].x,w[0].y]),u.push([w[3].x,w[3].y])),g.push([w[1].x,w[1].y]),u.push([w[2].x,w[2].y]);for(let t=0;t<=w.length-1;t++)0===t?n.moveTo(w[t].x,w[t].y):n.lineTo(w[t].x,w[t].y);n.fill(),n.closePath(),n.stroke(),l.hovered=h({polygon:w,x:r.x,y:r.y}),super.hover({item:l,isHovered:l.hovered}),n.save();let S=c.center,P=y-(y-x)/2;n.globalAlpha=1*a.loading,e.label?.enable&&(n.font="100 "+e.label.styles.fontSize*a.loading+"px arial",n.fillStyle=e.label.styles.color,n.textAlign="center",n.textBaseline="middle",n.fillText(l.label,S,x+e.label.styles.fontSize+5)),e.value?.enable&&(n.font="100 "+e.value.styles.fontSize*a.loading+"px arial",n.fillStyle=e.value.styles.color,n.textAlign="center",n.textBaseline="middle",n.fillText(l.value,S,P)),n.restore()}u.reverse()}render(t={}){this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((()=>{super.baseRender(),this.drawFunnel(),this.drawTooltip()}),5)}}var S={count:10,top:{count:10},styles:{width:2,color:"#2b2a49"},offset:{top:30,right:30,bottom:30,left:30}};class P extends c{constructor(t){t.defaultSettings=S,super(t),this.generateData()}getCoords(){let{canvas:t,settings:e}=this,{context:o,element:i}=t,r=Math.min(i.clientHeight-e.offset.top-e.offset.bottom,i.clientWidth-e.offset.left-e.offset.right);return{width:r,widthHalf:r/2,x:i.clientWidth/2+e.offset.left-e.offset.right,y:i.clientHeight/2+e.offset.top-e.offset.bottom,piStart:-Math.PI/2,piPart:2*Math.PI/e.top.count}}drawTooltip(){}draw(){const{canvas:t,settings:e,state:o}=this,{styles:i,count:r,top:l}=e,{context:s}=t,n=this.getCoords();s.strokeStyle=i.color,s.lineWidth=i.width;for(let t=0;t<=this.data.length-1;t++)s.drawCurve(this.data[t].map(((t,e)=>a(n.x,n.y,t*o.loading,n.piStart+n.piPart*e))),{closePath:!0})}generateData(){this.data=[];const{canvas:t,settings:e}=this,{styles:o,count:i,top:r}=e,l=this.getCoords(),a=new Array(r.count).fill(0).map((()=>l.widthHalf*Math.min(1,Math.random()+.5)));for(let t=0;t<=i-1;t++){const e=a.map((e=>e-10*t));this.data.push(e)}}morph(){this.data=this.data.map((t=>t.map((t=>t)))),this.render()}render(t={}){this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((()=>{super.baseRender(),this.draw(),this.drawTooltip()}),5)}}var T={Plot:g,Donut:x,Pie:y,Radar:m,Funnel:w,Spectr:P};window.bChart={Plot:g,Donut:x,Pie:y,Radar:m,Funnel:w,Spectr:P},module.exports=e}();
//# sourceMappingURL=bundle.js.map