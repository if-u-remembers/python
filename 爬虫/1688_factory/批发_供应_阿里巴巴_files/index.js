/*! 2020-02-20 20:59:43 v0.0.4 */
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";!function(){var e=window.goldlog||(window.goldlog={});e._aplus_plugin_xwj||(e._aplus_plugin_xwj={status:"init"},n(1).run())}()},function(e,t){"use strict";function n(){function e(){for(var e=E.split("&"),t={},n=0;n<e.length;n++){var o=e[n],r=o.split("=");t[r[0]]=r[1]}return t}function t(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function n(){return c=c||r.getElementsByTagName("head")[0],u||(c?u=c.getElementsByTagName("meta"):[])}function i(e){var o,r,i,a=n(),s=a.length;for(o=0;o<s;o++)if(r=a[o],t(r,"name")===e){i=t(r,"content");break}return i}function a(){return i("ahot-aplus")}function s(){return i("microscope-data")}var d=6;if(!(o._ap_xwj_heat&&d<=o._ap_xwj_heat.version)){var c,u,l=o.performance||o.mozPerformance||o.msPerformance||o.webkitPerformance||{_na:1},m=location,f=location.href,p=m.hostname,h=o.navigator,v=h.appVersion,g=h?h.userAgent:"",w=a(),b=s(),y=r.getElementById("tb-beacon-aplus"),E=t(y,"exparams"),T={layout:0,shouldBindMonitor:!1},x=function(e){return"number"==typeof e},S=function(e,t){return e.indexOf(t)>-1},_=function(){return S(E,"atp_isdpp")},P=function(){if(w)return!0;var e,t,n=["item.taobao.com","detail.tmall.com","s.taobao.com"];for(t=n.length,e=0;e<t;e++)if(S(p,n[e]))return!1;return!S(f,"/go/act/")&&!_()},M=o.addEventListener?function(e){o.addEventListener("load",e,!1)}:function(){},L=o.attachEvent?function(e){o.attachEvent("onload",e)}:M,B=function(){for(var e="",t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";e.length<16;)e+=t.substr(Math.floor(62*Math.random()),1);return e},N=function(e){var t,n,o,i,a,s,d=r.getElementsByTagName("*");for(t=[];e&&1===e.nodeType;e=e.parentNode)if(e.id){for(s=e.id,i=0,n=0;n<d.length;n++)if(a=d[n],a.id&&a.id===s){i++;break}if(t.unshift(e.tagName.toLowerCase()+"[@id='"+s+"']"),1===i)return t.unshift("/"),t.join("/")}else{for(n=1,o=e.previousSibling;o;o=o.previousSibling)o.tagName===e.tagName&&n++;t.unshift(e.tagName.toLowerCase()+"["+n+"]")}return t.length?"/"+t.join("/"):null},k=function(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join("&")},C=function(e,t,n){var o=Math.max(I.scrollWidth,I.clientWidth),r=I.scrollTop,i=I.scrollLeft,a=t.pageX,s=t.pageY;x(a)||(a=t.clientX+i,s=t.clientY+r);var d,c,u=-1;if(e&&e.getBoundingClientRect&&(c=e.getBoundingClientRect(),u=c.left+i,d=c.top+r),0===n||"0"===n){var l=o>>1;a-=l,u-=l}else 2===n&&(a-=o,u-=o);return{x:a,y:s,ex:u,ey:d}},j=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return 0===t++?".":""}))},O=function(e,t){var n,o;t[n="trident"]=.1,(o=e.match(/Trident\/([\d.]*)/))&&o[1]&&(t[n]=j(o[1])),t.core=n},A=function(e){var t,n;return(t=e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/))&&(n=t[1]||t[2])?j(n):0},W=function(e){return e||"other"},R=function(e){function t(){for(var t=[["Windows NT 5.1","winXP"],["Windows NT 6.1","win7"],["Windows NT 6.0","winVista"],["Windows NT 6.2","win8"],["iPad","ios"],["iPhone;","ios"],["iPod","ios"],["Macintosh","mac"],["Android","android"],["Ubuntu","ubuntu"],["Linux","linux"],["Windows NT 5.2","win2003"],["Windows NT 5.0","win2000"],["Windows","winOther"],["rhino","rhino"]],n=0,o=t.length;n<o;++n)if(e.indexOf(t[n][0])!==-1)return t[n][1];return"other"}function n(e,t,n,r){var i,a=o.navigator.mimeTypes;try{for(i in a)if(a.hasOwnProperty(i)&&a[i][e]===t){if(void 0!==n&&r.test(a[i][n]))return!0;if(void 0===n)return!0}return!1}catch(e){return!1}}var i,a,s,d,c,u,l,m,f="",p=f,h=f,g=[6,9],w="{{version}}",b="<!--[if IE "+w+"]><s></s><![endif]-->",y=r&&r.createElement("div"),E=[],T={webkit:void 0,trident:void 0,gecko:void 0,presto:void 0,chrome:void 0,safari:void 0,firefox:void 0,ie:void 0,ieMode:void 0,opera:void 0,mobile:void 0,core:void 0,shell:void 0,phantomjs:void 0,os:void 0,ipad:void 0,iphone:void 0,ipod:void 0,ios:void 0,android:void 0,nodejs:void 0,extraName:void 0,extraVersion:void 0};if(y&&y.getElementsByTagName&&(y.innerHTML=b.replace(w,""),E=y.getElementsByTagName("s")),E.length>0){for(O(e,T),d=g[0],c=g[1];d<=c;d++)if(y.innerHTML=b.replace(w,d),E.length>0){T[h="ie"]=d;break}!T.ie&&(s=A(e))&&(T[h="ie"]=s)}else(a=e.match(/AppleWebKit\/([\d.]*)/))&&a[1]?(T[p="webkit"]=j(a[1]),(a=e.match(/OPR\/(\d+\.\d+)/))&&a[1]?T[h="opera"]=j(a[1]):(a=e.match(/Chrome\/([\d.]*)/))&&a[1]?T[h="chrome"]=j(a[1]):(a=e.match(/\/([\d.]*) Safari/))&&a[1]&&(T[h="safari"]=j(a[1])),/ Mobile\//.test(e)&&e.match(/iPad|iPod|iPhone/)?(T.mobile="apple",a=e.match(/OS ([^\s]*)/),a&&a[1]&&(T.ios=j(a[1].replace("_","."))),i="ios",a=e.match(/iPad|iPod|iPhone/),a&&a[0]&&(T[a[0].toLowerCase()]=T.ios)):/ Android/i.test(e)?(/Mobile/.test(e)&&(i=T.mobile="android"),a=e.match(/Android ([^\s]*);/),a&&a[1]&&(T.android=j(a[1]))):(a=e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))&&(T.mobile=a[0].toLowerCase()),(a=e.match(/PhantomJS\/([^\s]*)/))&&a[1]&&(T.phantomjs=j(a[1]))):(a=e.match(/Presto\/([\d.]*)/))&&a[1]?(T[p="presto"]=j(a[1]),(a=e.match(/Opera\/([\d.]*)/))&&a[1]&&(T[h="opera"]=j(a[1]),(a=e.match(/Opera\/.* Version\/([\d.]*)/))&&a[1]&&(T[h]=j(a[1])),(a=e.match(/Opera Mini[^;]*/))&&a?T.mobile=a[0].toLowerCase():(a=e.match(/Opera Mobi[^;]*/))&&a&&(T.mobile=a[0]))):(s=A(e))?(T[h="ie"]=s,O(e,T)):(a=e.match(/Gecko/))&&(T[p="gecko"]=.1,(a=e.match(/rv:([\d.]*)/))&&a[1]&&(T[p]=j(a[1]),/Mobile|Tablet/.test(e)&&(T.mobile="firefox")),(a=e.match(/Firefox\/([\d.]*)/))&&a[1]&&(T[h="firefox"]=j(a[1])));i||(i=t());var x,S;if(!n("type","application/vnd.chromium.remoting-viewer")){x="scoped"in r.createElement("style"),S="v8Locale"in o;try{m=o.external||void 0}catch(e){}if(a=e.match(/360SE/))u="360";else if((a=e.match(/SE\s([\d.]*)/))||m&&"SEVersion"in m)u="sougou",l=j(a[1])||.1;else if((a=e.match(/Maxthon(?:\/)+([\d.]*)/))&&m){u="maxthon";try{l=j(m.max_version||a[1])}catch(e){l=.1}}else x&&S?u="360se":x||S||!/Gecko\)\s+Chrome/.test(v)||T.opera||T.trident||(u="360ee")}return(a=e.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/))?(u="tt",l=j(a[2])||.1):(a=e.match(/LBBROWSER/))||m&&"LiebaoGetVersion"in m?u="liebao":(a=e.match(/TheWorld/))?(u="theworld",l=3):(a=e.match(/TaoBrowser\/([\d.]*)/))&&(u="taobao",l=j(a[1])||.1),T.os=i,T.core=T.core||p,T.shell=h,T.ieMode=T.ie&&r.documentMode||T.ie,T.extraName=u,T.extraVersion=l,T.resolution=o.screen.width+"x"+o.screen.height,T},V=B(),I="BackCompat"===r.compatMode?r.body:r.documentElement,q=m.protocol,z=(new Date).getTime(),D=0,F=function(e){this.config=e};F.prototype={startup:function(){var e=this;this["spm-cnt"]=o.goldlog&&o.goldlog.spm_ab?o.goldlog.spm_ab:null,"complete"===document.readyState?(e.sendPV(),T.shouldBindMonitor&&e.bindMonitor()):L(function(){e.sendPV(),T.shouldBindMonitor&&e.bindMonitor()})},collectPerformanceTiming:function(){var e=l.timing,t={};if(!e)return t;var n,r,i,a={navigationStart:"ns",unloadEventStart:"ues",unloadEventEnd:"uee",redirectStart:"rds",redirectEnd:"rde",fetchStart:"fs",domainLookupStart:"dls",domainLookupEnd:"dle",connectStart:"cs",connectEnd:"ce",secureConnectionStart:"scs",requestStart:"rqs",responseStart:"rps",responseEnd:"rpe",domLoading:"dl",domInteractive:"di",domContentLoadedEventStart:"dcles",domContentLoadedEventEnd:"dclee",domComplete:"dc",loadEventStart:"les",loadEventEnd:"lee"},s=e.navigationStart;for(n in e)r=e[n],i=a[n],i&&(0===r||void 0===r?t[i]="na":"number"==typeof r&&(t[i]=r-s));var d,c;return"number"==typeof e.msFirstPaint?d=e.msFirstPaint:o.chrome&&o.chrome.loadTimes&&(c=o.chrome.loadTimes().firstPaintTime)&&(d=Math.ceil(1e3*c)),"number"==typeof d?d-=s:d="na",t.fp=d,t},collectResourceTiming:function(){if(!("performance"in o&&"getEntriesByType"in l&&l.getEntriesByType("resource")instanceof Array))return[];var e=[],t=l.getEntriesByType("resource"),n=function(e){return void 0===e||0===e?0:Math.floor(e)};for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];i.initiatorType&&e.push({rs:n(i.redirectStart),re:n(i.redirectEnd),fs:n(i.fetchStart),st:n(i.startTime),dls:n(i.domainLookupStart),dle:n(i.domainLookupEnd),cs:n(i.connectStart),ce:n(i.connectEnd),scs:n(i.secureConnectionStart),resqs:n(i.requestStart),resps:n(i.responseStart),respe:n(i.responseEnd),restype:i.initiatorType,n:i.name})}return e},sendPV:function(){var t=this;if(!this.initialized){var n,o,r,i,a,s,d,c,u,l,m,f,p,h=1;try{n=R(g),o=n.os,r=n.shell,i=n.core,a=n.resolution,s=n.extraName,d=n.extraVersion,c=o?o+(n[o]?n[o]:""):"",u=r?r+parseInt(n[r]):"",l=i,m=a,f=s?s+(d?parseInt(d):""):""}catch(e){}var v={p:h,o:W(c),b:W(u),w:W(l),s:m,mx:f};this["spm-cnt"]&&(v["spm-cnt"]=this["spm-cnt"].join(".")),goldlog&&goldlog.pvid&&(v["spm-cnt"]+="."+goldlog.pvid),"https:"===q&&(v.isps=1),(p=e().trid)&&(v.trid=p),setTimeout(function(){var e,n,o=t.collectPerformanceTiming();for(e in o)o.hasOwnProperty(e)&&(n=o[e],v[e]||(v[e]=n));t.initialized=!0,t.sendData(v)},0)}},bindMonitor:function(){var e=this,t=!!r.attachEvent,n=t?"attachEvent":"addEventListener";r[n]((t?"on":"")+"mousedown",function(t){t=t||o.event;var n=t.target||t.srcElement;n&&e.mousedown(n,t)},!1)},mousedown:function(e,t){var n,o=e.tagName,r={type:1,pvid:V};if(!o||"HTML"!==o){"A"!==o&&"AREA"!==o||(n=e.getAttribute("href",2)||"",r.href=n);var i=C(e,t,this.config.layout);r.xpath=N(e),r.x=i.x,r.y=i.y,r.ex=i.ex,r.ey=i.ey,r.ew=e.offsetWidth,r.eh=e.offsetHeight,r.t=(new Date).getTime()-z,r.n=++D,this["spm-cnt"]&&(r["spm-cnt"]=this["spm-cnt"].join(".")),w&&b&&(r.so=encodeURIComponent(b)),this.sendData(r)}},sendData:function(e){var t=w?"/ahot.1.2":"/ahot.1.1",n=window.goldlog_queue||(window.goldlog_queue=[]);n.push({action:"goldlog.record",arguments:[t,"CLK",k(e),"POST"]})}},P()&&(T.shouldBindMonitor=!0);var H=l.setResourceTimingBufferSize||l.webkitSetResourceTimingBufferSize;H&&H.call(l,200),o._ap_xwj_heat={version:d};var U=new F(T);U.startup()}}var o=window,r=document;t.run=function(){try{n()}catch(t){var e=window.goldlog_queue||(window.goldlog_queue=[]);e.push({action:"goldlog._aplus_cplugin_m.do_tracker_jserror",arguments:[{message:"xwjall",error:encodeURIComponent(t.stack),filename:"aplus_plugin_xwj"}]})}}}]);