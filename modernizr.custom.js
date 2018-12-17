/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssgradients-geolocation-input-inputtypes-prefixes-setclasses-teststyles !*/
!function(e,t,n){function a(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,l;for(var r in f)if(f.hasOwnProperty(r)){if(e=[],t=f[r],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],l=s.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),d.push((i?"":"no-")+l.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(m&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?u.className.baseVal=t:u.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):m?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=s(m?"svg":"body"),e.fake=!0),e}function r(e,n,a,i){var o,r,d,f,c="modernizr",p=s("div"),m=l();if(parseInt(a,10))for(;a--;)d=s("div"),d.id=i?i[a]:c+(a+1),p.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+c,(m.fake?m:p).appendChild(o),m.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,m.fake&&(m.style.background="",m.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),r=n(p,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=f,u.offsetHeight):p.parentNode.removeChild(p),!!r}var d=[],f=[],c={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){f.push({name:e,fn:t,options:n})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator);var p=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];c._prefixes=p;var u=t.documentElement,m="svg"===u.nodeName.toLowerCase();Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",a="",i=0,o=p.length-1;o>i;i++)e=0===i?"to ":"",a+=t+p[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(a+=t+"-webkit-"+n);var l=s("a"),r=l.style;return r.cssText=a,(""+r.backgroundImage).indexOf("gradient")>-1});var g=s("input"),h="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),v={};Modernizr.input=function(t){for(var n=0,a=t.length;a>n;n++)v[t[n]]=!!(t[n]in g);return v.list&&(v.list=!(!s("datalist")||!e.HTMLDataListElement)),v}(h);var y="search tel url email datetime date month week time datetime-local number range color".split(" "),w={};Modernizr.inputtypes=function(e){for(var a,i,o,s=e.length,l="1)",r=0;s>r;r++)g.setAttribute("type",a=e[r]),o="text"!==g.type&&"style"in g,o&&(g.value=l,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&g.style.WebkitAppearance!==n?(u.appendChild(g),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,u.removeChild(g)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?g.checkValidity&&g.checkValidity()===!1:g.value!=l)),w[e[r]]=!!o;return w}(y);c.testStyles=r;i(),o(d),delete c.addTest,delete c.addAsyncTest;for(var b=0;b<Modernizr._q.length;b++)Modernizr._q[b]();e.Modernizr=Modernizr}(window,document);