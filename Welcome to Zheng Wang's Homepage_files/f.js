function ETFreeGetStyle(c,a){return c.currentStyle?c.currentStyle[a]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(c,"")[a]:c.style[a]}
function ETFreetrackercode(){var c=0;"undefined"!==typeof stopeXTReMeTracking&&1===stopeXTReMeTracking&&(c=1);if(!c){c=document;for(var a=c.getElementsByTagName("script"),e,f,g,b=0;b<a.length;b++)a[b].src&&-1<a[b].src.indexOf("t1.extreme-dm.com/f.js")&&(f=a[b].id.split("-"),g=a[b].id,e=f[1],f=f[2]);if(e&&(a="","0"===f?a=9:"1"===f?a=10:"2"===f&&(a=11),a)){var d=document.createElement("a");d.href="//extremetracking.com/free?login="+e;d.target="_blank";d.id="eXTReMe-Free-"+e;if(!document.getElementById(d.id)){d.title=
"eXTReMe Tracker - Free Website Statistics";d.innerHTML='<img src="data:image/gif;base64,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" style="border:0;border-radius:4px;height:38px;width:41px;" alt="'+
d.title+'">';b=c.getElementById(g).parentNode;"ajilore"!==e&&("HEAD"===b.tagName?window.addEventListener&&window.addEventListener("load",function(a){document.body.appendChild(d)},!1):b.insertBefore(d,c.getElementById(g).nextSibling),b.style.visibility="visible","none"===ETFreeGetStyle(b,"display")&&(b.style.display="block"));g=c.referrer;try{g=top.document.referrer}catch(h){}e="login="+e+"&srw="+screen.width+"&srh="+screen.height+"&jv="+navigator.javaEnabled()+"&j=y&srb="+screen.colorDepth+"&l="+
escape(g);b=new Image;b.src="//e"+f+".extreme-dm.com/s"+a+".g?"+e}}}}ETFreetrackercode();
