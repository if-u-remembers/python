!function(){"use strict";var a=location,e=document,t=function(t,n,o){(void 0===n&&(n=1),void 0===o&&(o=1),0>=o||Math.random()<o)&&function(a,e){var t=[];for(var n in a)t.push(n+"="+encodeURIComponent(a[n]));(new Image).src=e+t.join("&")}({code:n,msg:t+"",pid:"baxia-fast",page:a.href.split(/[#?]/)[0],query:a.search.substr(1),hash:a.hash,referrer:e.referrer,title:e.title,ua:navigator.userAgent},"//gm.mmstat.com/fsp.1.1?")};var n,o=document,r=1,i=function(a,e,n){if(!a)return e();var s=o.getElementsByTagName("script")[0],d=o.createElement("script");if(d.async=!0,d.src=a,a.indexOf("alicdn")>-1&&(d.crossOrigin=!0),d.onerror=function(o){5>r?(r++,i(a,e,n)):(d.onerror=null,t("function:loadJS. msg:"+a+"load error。props："+JSON.stringify(n)))},e){var l=!1;d.onload=d.onreadystatechange=function(){l||d.readyState&&!/loaded|complete/.test(d.readyState)||(d.onload=d.onreadystatechange=null,l=!0,e())}}s.parentNode.insertBefore(d,s)},s=location.href||"";try{var d=!1;if(s.indexOf("loadbaxiajs")>-1||document.cookie.indexOf("loadbaxiajs")>-1){var l=null;if(s.indexOf("_set_bx_v_")>-1){var c=s.match(/_set_bx_v_=([^&]+)/);l=encodeURIComponent(c&&c[1])}_(1,l),d=!0}if(!self.baxiaCommon&&!d){t("init","aplus_js_load",.01);var f=[];f.push({path:"//pre-",ratio:1,jsv:"2.0.47"}),f.push({path:".",ratio:1});for(var u=0;f.length>u;u++)(n=s)&&n.indexOf(f[u].path)>-1&&_(f[u].ratio,f[u].jsv)}}catch(h){t("err"+h.message,"aplus_js_baxia_err",1)}var m=!1;function _(a,e){if(void 0===e&&(e="2.0.47"),a>=Math.random()&&!m){m=!0,t("baxiajs","aplus_js_load",.01);var n="//g.alicdn.com",o=self.goldlog;if(o&&o.getCdnPath&&(n=o.getCdnPath()),s.indexOf("_set_bx_v_")>-1){var r=s.match(/_set_bx_v_=([^&]+)/);e=encodeURIComponent(r&&r[1])}n=n+"/sd/baxia/"+e+"/baxiaCommon.js",s.indexOf("_set_bx_v_=debug")>-1&&(n="http://localhost:8064/build/baxiaCommon.js"),i(n,null,null)}}}();
