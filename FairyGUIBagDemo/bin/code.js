var Laya=window.Laya=function(t,e){var i={__internals:[],__packages:{},__classmap:{Object:Object,Function:Function,Array:Array,String:String},__sysClass:{object:"Object",array:"Array",string:"String",dictionary:"Dictionary"},__propun:{writable:!0,enumerable:!1,configurable:!0},__presubstr:String.prototype.substr,__substr:function(t,e){return 1==arguments.length?i.__presubstr.call(this,t):i.__presubstr.call(this,t,e>0?e:this.length+e)},__init:function(t){t.forEach(function(t){t.__init$&&t.__init$()})},__isClass:function(t){return t&&(t.__isclass||t==Object||t==String||t==Array)},__newvec:function(t,e){var i=[];i.length=t;for(var n=0;n<t;n++)i[n]=e;return i},__extend:function(t,e){function n(){i.un(this,"constructor",t)}for(var s in e)if(e.hasOwnProperty(s)){var r=Object.getOwnPropertyDescriptor(e,s),a=r.get,o=r.set;a||o?a&&o?Object.defineProperty(t,s,r):(a&&Object.defineProperty(t,s,a),o&&Object.defineProperty(t,s,o)):t[s]=e[s]}n.prototype=e.prototype,t.prototype=new n,i.un(t.prototype,"__imps",i.__copy({},e.prototype.__imps))},__copy:function(t,e){if(!e)return null;t=t||{};for(var i in e)t[i]=e[i];return t},__package:function(e,n){if(!i.__packages[e]){i.__packages[e]=!0;var s=t,r=e.split(".");if(r.length>1)for(var a=0,o=r.length-1;a<o;a++){var h=s[r[a]];s=h||(s[r[a]]={})}s[r[r.length-1]]||(s[r[r.length-1]]=n||{})}},__hasOwnProperty:function(t,e){function i(t,e){if(Object.hasOwnProperty.call(e.prototype,t))return!0;var n=e.prototype.__super;return null==n?null:i(t,n)}return e=e||this,Object.hasOwnProperty.call(e,t)||i(t,e.__class)},__typeof:function(t,e){if(!t||!e)return!1;if(e===String)return"string"==typeof t;if(e===Number)return"number"==typeof t;if(e.__interface__)e=e.__interface__;else if("string"!=typeof e)return t instanceof e;return t.__imps&&t.__imps[e]||t.__class==e},__as:function(t,e){return this.__typeof(t,e)?t:null},interface:function(e,n){i.__package(e,{});var s=i.__internals,r=s[e]=s[e]||{self:e};if(n){var a=n.split(",");r.extend=[];for(c=0;c<a.length;c++){var o=a[c];s[o]=s[o]||{self:o},r.extend.push(s[o])}}for(var h=t,l=e.split("."),c=0;c<l.length-1;c++)h=h[l[c]];h[l[l.length-1]]={__interface__:e}},class:function(e,n,s,r){if(s&&i.__extend(e,s),n)if(i.__package(n,e),i.__classmap[n]=e,n.indexOf(".")>0){if(0==n.indexOf("laya.")){var a=n.split(".");r=r||a[a.length-1],i[r]&&console.log("Warning!,this class["+r+"] already exist:",i[r]),i[r]=e}}else"Main"==n?t.Main=e:(i[n]&&console.log("Error!,this class["+n+"] already exist:",i[n]),i[n]=e);var o=i.un,h=e.prototype;o(h,"hasOwnProperty",i.__hasOwnProperty),o(h,"__class",e),o(h,"__super",s),o(h,"__className",n),o(e,"__super",s),o(e,"__className",n),o(e,"__isclass",!0),o(e,"super",function(t){this.__super.call(t)})},imps:function(t,e){function n(t){var e,r;if((e=i.__internals[t])&&(s[t]=!0,r=e.extend))for(var a=0;a<r.length;a++)n(r[a].self)}if(!e)return null;var s=t.__imps||i.un(t,"__imps",{});for(var r in e)n(r)},superSet:function(t,e,i,n){var s=t.prototype["_$set_"+i];s&&s.call(e,n)},superGet:function(t,e,i){var n=t.prototype["_$get_"+i];return n?n.call(e):null},getset:function(t,e,n,s,r){t?(s&&(e["_$GET_"+n]=s),r&&(e["_$SET_"+n]=r)):(s&&i.un(e,"_$get_"+n,s),r&&i.un(e,"_$set_"+n,r)),s&&r?Object.defineProperty(e,n,{get:s,set:r,enumerable:!1}):(s&&Object.defineProperty(e,n,{get:s,enumerable:!1}),r&&Object.defineProperty(e,n,{set:r,enumerable:!1}))},static:function(t,e){for(var i=0,n=e.length;i<n;i+=2)"length"==e[i]?t.length=e[i+1].call(t):function(){var n=e[i],s=e[i+1];Object.defineProperty(t,n,{get:function(){return delete this[n],this[n]=s.call(this)},set:function(t){delete this[n],this[n]=t},enumerable:!0,configurable:!0})}()},un:function(t,e,n){return n||(n=t[e]),i.__propun.value=n,Object.defineProperty(t,e,i.__propun),n},uns:function(t,e){e.forEach(function(e){i.un(t,e)})}};return t.console=t.console||{log:function(){}},t.trace=t.console.log,Error.prototype.throwError=function(){throw arguments},Object.defineProperty(Array.prototype,"fixed",{enumerable:!1}),i}(window,document);!function(t,e,i){i.un,i.uns,i.static,i.class,i.getset,i.__newvec}(window,document,Laya),function(window,document,Laya){var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;Laya.interface("laya.runtime.IMarket"),Laya.interface("laya.filters.IFilter"),Laya.interface("laya.display.ILayout"),Laya.interface("laya.resource.IDispose"),Laya.interface("laya.runtime.IPlatform"),Laya.interface("laya.resource.IDestroy"),Laya.interface("laya.runtime.IConchNode"),Laya.interface("laya.filters.IFilterAction"),Laya.interface("laya.runtime.ICPlatformClass"),Laya.interface("laya.resource.ICreateResource"),Laya.interface("laya.runtime.IConchRenderObject"),Laya.interface("laya.runtime.IPlatformClass","laya.runtime.IPlatform");var RunDriver=function(){function t(){}return __class(t,"laya.utils.RunDriver"),t.FILTER_ACTIONS=[],t.pixelRatio=-1,t._charSizeTestDiv=null,t.now=function(){return Date.now()},t.getWindow=function(){return window},t.getPixelRatio=function(){if(t.pixelRatio<0){var e=Browser.context,i=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;(t.pixelRatio=(Browser.window.devicePixelRatio||1)/i)<1&&(t.pixelRatio=1)}return t.pixelRatio},t.getIncludeStr=function(t){return null},t.createShaderCondition=function(t){var e="(function() {return "+t+";})";return Browser.window.eval(e)},t.fontMap=[],t.measureText=function(e,i){var n=t.hanzi.test(e);if(n&&t.fontMap[i])return t.fontMap[i];var s=Browser.context;s.font=i;var r=s.measureText(e);return n&&(t.fontMap[i]=r),r},t.getWebGLContext=function(t){},t.beginFlush=function(){},t.endFinish=function(){},t.addToAtlas=null,t.flashFlushImage=function(t){},t.drawToCanvas=function(t,e,i,n,s,r){var a=HTMLCanvas.create("2D"),o=new RenderContext(i,n,a);return RenderSprite.renders[e]._fun(t,o,s,r),a},t.createParticleTemplate2D=null,t.createGLTextur=null,t.createWebGLContext2D=null,t.changeWebGLSize=function(t,e){},t.createRenderSprite=function(t,e){return new RenderSprite(t,e)},t.createFilterAction=function(t){return new ColorFilterAction},t.createGraphics=function(){return new Graphics},t.clear=function(t){Render._context.ctx.clear()},t.clearAtlas=function(t){},t.isAtlas=function(t){return!1},t.addTextureToAtlas=function(t){},t.getTexturePixels=function(t,e,i,n,s){return null},t.skinAniSprite=function(){return null},t.update3DLoop=function(){},__static(t,["hanzi",function(){return this.hanzi=new RegExp("^[一-龥]$")}]),t}(),___Laya=(__getset(1,Laya,"alertGlobalError",null,function(t){var e=0;Browser.window.onerror=t?function(t,i,n,s,r){e++<5&&r&&alert("出错啦，请把此信息截图给研发商\n"+t+"\n"+r.stack||r)}:null}),Laya.init=function(t,e,i){for(var n=[],s=2,r=arguments.length;s<r;s++)n.push(arguments[s]);if(!Laya._isinit){ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=Laya._arrayBufferSlice),Laya._isinit=!0,Browser.__init__(),Context.__init__(),Graphics.__init__(),Laya.timer=new Timer,Laya.scaleTimer=new Timer,Laya.loader=new LoaderManager,WeakObject.__init__();for(var s=0,a=n.length;s<a;s++)n[s].enable&&n[s].enable();return Font.__init__(),Style.__init__(),ResourceManager.__init__(),CacheManager.beginCheck(),Laya._currentStage=Laya.stage=new Stage,Laya.stage.conchModel&&Laya.stage.conchModel.setRootNode(),Laya.getUrlPath(),Laya.render=new Render(0,0),Laya.stage.size(t,e),RenderSprite.__init__(),KeyBoardManager.__init__(),MouseManager.instance.__init__(Laya.stage,Render.canvas),Input.__init__(),SoundManager.autoStopMusic=!0,LocalStorage.__init__(),Render.canvas}},Laya.getUrlPath=function(){var t=Browser.window.location,e=t.pathname;e=":"==e.charAt(2)?e.substring(1):e,URL.rootPath=URL.basePath=URL.getPath("file:"==t.protocol?e:t.protocol+"//"+t.host+t.pathname)},Laya._arrayBufferSlice=function(t,e){var i=new Uint8Array(this,t,e-t),n=new Uint8Array(i.length);return n.set(i),n.buffer},Laya.stage=null,Laya.timer=null,Laya.scaleTimer=null,Laya.loader=null,Laya.version="1.7.16beta",Laya.render=null,Laya._currentStage=null,Laya._isinit=!1,__static(Laya,["conchMarket",function(){return this.conchMarket=window.conch?conchMarket:null},"PlatformClass",function(){return this.PlatformClass=window.PlatformClass},"MiniAdpter",function(){return this.MiniAdpter={init:function(){window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MiniGame")>-1&&console.error("请先引用小游戏适配库laya.wxmini.js,详细教程：https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0")}}}]),Laya),Config=function(){function t(){}return __class(t,"Config"),t.WebGLTextCacheCount=500,t.atlasEnable=!1,t.showCanvasMark=!1,t.animationInterval=50,t.isAntialias=!1,t.isAlpha=!1,t.premultipliedAlpha=!0,t.isStencil=!0,t.preserveDrawingBuffer=!1,t}(),EventDispatcher=function(){function t(){this._events=null}var e;__class(t,"laya.events.EventDispatcher");var i=t.prototype;return i.hasListener=function(t){return!!(this._events&&this._events[t])},i.event=function(t,e){if(!this._events||!this._events[t])return!1;var i=this._events[t];if(i.run)i.once&&delete this._events[t],null!=e?i.runWith(e):i.run();else{for(var n=0,s=i.length;n<s;n++){var r=i[n];r&&(null!=e?r.runWith(e):r.run()),r&&!r.once||(i.splice(n,1),n--,s--)}0===i.length&&this._events&&delete this._events[t]}return!0},i.on=function(t,e,i,n){return this._createListener(t,e,i,n,!1)},i.once=function(t,e,i,n){return this._createListener(t,e,i,n,!0)},i._createListener=function(t,i,n,s,r,a){void 0===a&&(a=!0),a&&this.off(t,i,n,r);var o=e.create(i||this,n,s,r);this._events||(this._events={});var h=this._events;return h[t]?h[t].run?h[t]=[h[t],o]:h[t].push(o):h[t]=o,this},i.off=function(t,e,i,n){if(void 0===n&&(n=!1),!this._events||!this._events[t])return this;var s=this._events[t];if(null!=i)if(s.run)e&&s.caller!==e||s.method!==i||n&&!s.once||(delete this._events[t],s.recover());else{for(var r=0,a=0,o=s.length;a<o;a++){var h=s[a];!h||e&&h.caller!==e||h.method!==i||n&&!h.once||(r++,s[a]=null,h.recover())}r===o&&delete this._events[t]}return this},i.offAll=function(t){var e=this._events;if(!e)return this;if(t)this._recoverHandlers(e[t]),delete e[t];else{for(var i in e)this._recoverHandlers(e[i]);this._events=null}return this},i._recoverHandlers=function(t){if(t)if(t.run)t.recover();else for(var e=t.length-1;e>-1;e--)t[e]&&(t[e].recover(),t[e]=null)},i.isMouseEvent=function(e){return t.MOUSE_EVENTS[e]},__static(t,["MOUSE_EVENTS",function(){return this.MOUSE_EVENTS={rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0}}]),t.__init$=function(){Object.defineProperty(laya.events.EventDispatcher.prototype,"_events",{enumerable:!1,writable:!0}),e=function(t){function e(t,i,n,s){e.__super.call(this,t,i,n,s)}__class(e,"",Handler);return e.prototype.recover=function(){this._id>0&&(this._id=0,e._pool.push(this.clear()))},e.create=function(t,i,n,s){return void 0===s&&(s=!0),e._pool.length?e._pool.pop().setTo(t,i,n,s):new e(t,i,n,s)},e._pool=[],e}()},t}(),Handler=function(){function t(t,e,i,n){this.once=!1,this._id=0,void 0===n&&(n=!1),this.setTo(t,e,i,n)}__class(t,"laya.utils.Handler");var e=t.prototype;return e.setTo=function(e,i,n,s){return this._id=t._gid++,this.caller=e,this.method=i,this.args=n,this.once=s,this},e.run=function(){if(null==this.method)return null;var t=this._id,e=this.method.apply(this.caller,this.args);return this._id===t&&this.once&&this.recover(),e},e.runWith=function(t){if(null==this.method)return null;var e=this._id;if(null==t)var i=this.method.apply(this.caller,this.args);else i=this.args||t.unshift?this.args?this.method.apply(this.caller,this.args.concat(t)):this.method.apply(this.caller,t):this.method.call(this.caller,t);return this._id===e&&this.once&&this.recover(),i},e.clear=function(){return this.caller=null,this.method=null,this.args=null,this},e.recover=function(){this._id>0&&(this._id=0,t._pool.push(this.clear()))},t.create=function(e,i,n,s){return void 0===s&&(s=!0),t._pool.length?t._pool.pop().setTo(e,i,n,s):new t(e,i,n,s)},t._pool=[],t._gid=1,t}(),BitmapFont=function(){function t(){this._texture=null,this._fontCharDic={},this._fontWidthMap={},this._complete=null,this._path=null,this._maxWidth=0,this._spaceWidth=10,this._padding=null,this.fontSize=12,this.autoScaleSize=!1,this.letterSpacing=0}__class(t,"laya.display.BitmapFont");var e=t.prototype;return e.loadFont=function(t,e){this._path=t,this._complete=e,Laya.loader.load([{url:this._path,type:"xml"},{url:this._path.replace(".fnt",".png"),type:"image"}],Handler.create(this,this.onLoaded))},e.onLoaded=function(){this.parseFont(Loader.getRes(this._path),Loader.getRes(this._path.replace(".fnt",".png"))),this._complete&&this._complete.runWith(this._texture?this:null)},e.parseFont=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");if(!i[0].getAttributeNode)return this.parseFont2(t,e);this.fontSize=parseInt(i[0].getAttributeNode("size").nodeValue);var n=i[0].getAttributeNode("padding").nodeValue.split(",");this._padding=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];var s;s=t.getElementsByTagName("char");var r=0;for(r=0;r<s.length;r++){var a=s[r],o=parseInt(a.getAttributeNode("id").nodeValue),h=parseInt(a.getAttributeNode("xoffset").nodeValue)/1,l=parseInt(a.getAttributeNode("yoffset").nodeValue)/1,c=parseInt(a.getAttributeNode("xadvance").nodeValue)/1,u=new Rectangle;u.x=parseInt(a.getAttributeNode("x").nodeValue),u.y=parseInt(a.getAttributeNode("y").nodeValue),u.width=parseInt(a.getAttributeNode("width").nodeValue),u.height=parseInt(a.getAttributeNode("height").nodeValue);var _=Texture.create(e,u.x,u.y,u.width,u.height,h,l);this._maxWidth=Math.max(this._maxWidth,c+this.letterSpacing),this._fontCharDic[o]=_,this._fontWidthMap[o]=c}}},e.parseFont2=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");this.fontSize=parseInt(i[0].attributes.size.nodeValue);var n=i[0].attributes.padding.nodeValue.split(",");this._padding=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];var s=t.getElementsByTagName("char"),r=0;for(r=0;r<s.length;r++){var a=s[r].attributes,o=parseInt(a.id.nodeValue),h=parseInt(a.xoffset.nodeValue)/1,l=parseInt(a.yoffset.nodeValue)/1,c=parseInt(a.xadvance.nodeValue)/1,u=new Rectangle;u.x=parseInt(a.x.nodeValue),u.y=parseInt(a.y.nodeValue),u.width=parseInt(a.width.nodeValue),u.height=parseInt(a.height.nodeValue);var _=Texture.create(e,u.x,u.y,u.width,u.height,h,l);this._maxWidth=Math.max(this._maxWidth,c+this.letterSpacing),this._fontCharDic[o]=_,this._fontWidthMap[o]=c}}},e.getCharTexture=function(t){return this._fontCharDic[t.charCodeAt(0)]},e.destroy=function(){if(this._texture){for(var t in this._fontCharDic){var e=this._fontCharDic[t];e&&e.destroy()}this._texture.destroy(),this._fontCharDic=null,this._fontWidthMap=null,this._texture=null}},e.setSpaceWidth=function(t){this._spaceWidth=t},e.getCharWidth=function(t){var e=t.charCodeAt(0);return this._fontWidthMap[e]?this._fontWidthMap[e]+this.letterSpacing:" "==t?this._spaceWidth+this.letterSpacing:0},e.getTextWidth=function(t){for(var e=0,i=0,n=t.length;i<n;i++)e+=this.getCharWidth(t.charAt(i));return e},e.getMaxWidth=function(){return this._maxWidth},e.getMaxHeight=function(){return this.fontSize},e.drawText=function(t,e,i,n,s,r){var a,o=this.getTextWidth(t),h=0;"center"===s&&(h=(r-o)/2),"right"===s&&(h=r-o);for(var l=0,c=0,u=t.length;c<u;c++)(a=this.getCharTexture(t.charAt(c)))&&(e.graphics.drawTexture(a,i+l+h,n),l+=this.getCharWidth(t.charAt(c)))},t}(),Style=function(){function t(){this.alpha=1,this.visible=!0,this.scrollRect=null,this.blendMode=null,this._type=0,this._tf=t._TF_EMPTY}__class(t,"laya.display.css.Style");var e=t.prototype;return e.getTransform=function(){return this._tf},e.setTransform=function(e){this._tf="none"!==e&&e?e:t._TF_EMPTY},e.setTranslateX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.translateX=e},e.setTranslateY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.translateY=e},e.setScaleX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.scaleX=e},e.setScale=function(e,i){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.scaleX=e,this._tf.scaleY=i},e.setScaleY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.scaleY=e},e.setRotate=function(e){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.rotate=e},e.setSkewX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.skewX=e},e.setSkewY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.skewY=e},e.destroy=function(){this.scrollRect=null},e.render=function(t,e,i,n){},e.getCSSStyle=function(){return CSSStyle.EMPTY},e._enableLayout=function(){return!1},__getset(0,e,"scaleX",function(){return this._tf.scaleX},function(t){this.setScaleX(t)}),__getset(0,e,"transform",function(){return this.getTransform()},function(t){this.setTransform(t)}),__getset(0,e,"translateX",function(){return this._tf.translateX},function(t){this.setTranslateX(t)}),__getset(0,e,"translateY",function(){return this._tf.translateY},function(t){this.setTranslateY(t)}),__getset(0,e,"scaleY",function(){return this._tf.scaleY},function(t){this.setScaleY(t)}),__getset(0,e,"block",function(){return 0!=(1&this._type)}),__getset(0,e,"skewY",function(){return this._tf.skewY},function(t){this.setSkewY(t)}),__getset(0,e,"rotate",function(){return this._tf.rotate},function(t){this.setRotate(t)}),__getset(0,e,"skewX",function(){return this._tf.skewX},function(t){this.setSkewX(t)}),__getset(0,e,"paddingLeft",function(){return 0}),__getset(0,e,"paddingTop",function(){return 0}),__getset(0,e,"absolute",function(){return!0}),t.__init__=function(){t._TF_EMPTY=new TransformInfo,t.EMPTY=new t},t.EMPTY=null,t._TF_EMPTY=null,t}(),Font=function(){function t(e){this._type=0,this._weight=0,this._decoration=null,this._text=null,this.indent=0,this._color=Color.create(t.defaultColor),this.family=t.defaultFamily,this.stroke=t._STROKE,this.size=t.defaultSize,e&&e!==t.EMPTY&&e.copyTo(this)}__class(t,"laya.display.css.Font");var e=t.prototype;return e.set=function(t){this._text=null;for(var e=t.split(" "),i=0,n=e.length;i<n;i++){var s=e[i];switch(s){case"italic":this.italic=!0;continue;case"bold":this.bold=!0;continue}s.indexOf("px")>0&&(this.size=parseInt(s),this.family=e[i+1],i++)}},e.toString=function(){return this._text="",this.italic&&(this._text+="italic "),this.bold&&(this._text+="bold "),this._text+=this.size+"px "+this.family},e.copyTo=function(e){e._type=this._type,e._text=this._text,e._weight=this._weight,e._color=this._color,e.family=this.family,e.stroke=this.stroke!=t._STROKE?this.stroke.slice():t._STROKE,e.indent=this.indent,e.size=this.size},__getset(0,e,"password",function(){return 0!=(1024&this._type)},function(t){t?this._type|=1024:this._type&=-1025}),__getset(0,e,"color",function(){return this._color.strColor},function(t){this._color=Color.create(t)}),__getset(0,e,"italic",function(){return 0!=(512&this._type)},function(t){t?this._type|=512:this._type&=-513}),__getset(0,e,"bold",function(){return 0!=(2048&this._type)},function(t){t?this._type|=2048:this._type&=-2049}),__getset(0,e,"weight",function(){return""+this._weight},function(t){var e=0;switch(t){case"normal":break;case"bold":this.bold=!0,e=700;break;case"bolder":e=800;break;case"lighter":e=100;break;default:e=parseInt(t)}this._weight=e,this._text=null}),__getset(0,e,"decoration",function(){return this._decoration?this._decoration.value:"none"},function(t){var e=t.split(" ");switch(this._decoration||(this._decoration={}),e[0]){case"_":this._decoration.type="underline";break;case"-":this._decoration.type="line-through";break;case"overline":this._decoration.type="overline";break;default:this._decoration.type=e[0]}e[1]&&(this._decoration.color=Color.create(e)),this._decoration.value=t}),t.__init__=function(){t.EMPTY=new t(null)},t.EMPTY=null,t.defaultColor="#000000",t.defaultSize=12,t.defaultFamily="Arial",t.defaultFont="12px Arial",t._ITALIC=512,t._PASSWORD=1024,t._BOLD=2048,__static(t,["_STROKE",function(){return this._STROKE=[0,"#000000"]}]),t}(),TransformInfo=function(){function t(){this.translateX=0,this.translateY=0,this.scaleX=1,this.scaleY=1,this.rotate=0,this.skewX=0,this.skewY=0}return __class(t,"laya.display.css.TransformInfo"),t}(),Graphics=function(){function t(){if(this._one=null,this._cmds=null,this._render=this._renderEmpty,Render.isConchNode){this._nativeObj=new window._conchGraphics,this.id=this._nativeObj.conchID}}__class(t,"laya.display.Graphics");var e=t.prototype;return e.destroy=function(){this.clear(),this._graphicBounds&&this._graphicBounds.destroy(),this._graphicBounds=null,this._vectorgraphArray=null,this._sp&&(this._sp._renderType=0),this._sp=null},e.clear=function(e){void 0===e&&(e=!1);var i=0,n=0;if(e){var s=this._one;if(this._cmds){for(n=this._cmds.length,i=0;i<n;i++)!(s=this._cmds[i])||s.callee!==Render._context._drawTexture&&s.callee!==Render._context._drawTextureWithTransform||(s[0]=null,t._cache.push(s));this._cmds.length=0}else s&&(!s||s.callee!==Render._context._drawTexture&&s.callee!==Render._context._drawTextureWithTransform||(s[0]=null,t._cache.push(s)))}else this._cmds=null;if(this._one=null,this._render=this._renderEmpty,this._sp&&(this._sp._renderType&=-514),this._repaint(),this._vectorgraphArray){for(i=0,n=this._vectorgraphArray.length;i<n;i++)VectorGraphManager.getInstance().deleteShape(this._vectorgraphArray[i]);this._vectorgraphArray.length=0}},e._clearBoundsCache=function(){this._graphicBounds&&this._graphicBounds.reset()},e._initGraphicBounds=function(){this._graphicBounds||(this._graphicBounds=new GraphicsBounds,this._graphicBounds._graphics=this)},e._repaint=function(){this._clearBoundsCache(),this._sp&&this._sp.repaint()},e._isOnlyOne=function(){return!this._cmds||0===this._cmds.length},e.getBounds=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBounds(t)},e.getBoundPoints=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBoundPoints(t)},e._addCmd=function(t){this._cmds=this._cmds||[],t.callee=t.shift(),this._cmds.push(t)},e.setFilters=function(t){this._saveToCmd(Render._context._setFilters,t)},e.drawTexture=function(e,i,n,s,r,a,o){if(void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0),void 0===o&&(o=1),!e||o<.01)return null;s||(s=e.sourceWidth),r||(r=e.sourceHeight),o=o<0?0:o>1?1:o;var h=!Render.isWebGL&&Browser.onFirefox||Browser.onEdge?.5:0,l=s/e.sourceWidth,c=r/e.sourceHeight;if(s=e.width*l,r=e.height*c,e.loaded&&(s<=0||r<=0))return null;i+=e.offsetX*l,n+=e.offsetY*c,this._sp&&(this._sp._renderType|=512);var u;return i-=h,n-=h,s+=2*h,r+=2*h,t._cache.length?((u=t._cache.pop())[0]=e,u[1]=i,u[2]=n,u[3]=s,u[4]=r,u[5]=a,u[6]=o):u=[e,i,n,s,r,a,o],u.callee=a||1!=o?Render._context._drawTextureWithTransform:Render._context._drawTexture,null!=this._one||a||1!=o?this._saveToCmd(u.callee,u):(this._one=u,this._render=this._renderOneImg),e.loaded||e.once("loaded",this,this._textureLoaded,[e,u]),this._repaint(),u},e.cleanByTexture=function(t,e,i,n,s){if(void 0===n&&(n=0),void 0===s&&(s=0),!t)return this.clear();if(this._one&&this._render===this._renderOneImg){n||(n=t.sourceWidth),s||(s=t.sourceHeight);var r=n/t.sourceWidth,a=s/t.sourceHeight;n=t.width*r,s=t.height*a,e+=t.offsetX*r,i+=t.offsetY*a,this._one[0]=t,this._one[1]=e,this._one[2]=i,this._one[3]=n,this._one[4]=s}else this.clear(),t&&this.drawTexture(t,e,i,n,s)},e.drawTextures=function(t,e){t&&this._saveToCmd(Render._context._drawTextures,[t,e])},e.fillTexture=function(t,e,i,n,s,r,a){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t){var o=[t,e,i,n,s,r,a||Point.EMPTY,{}];t.loaded||t.once("loaded",this,this._textureLoaded,[t,o]),this._saveToCmd(Render._context._fillTexture,o)}},e._textureLoaded=function(t,e){e[3]=e[3]||t.width,e[4]=e[4]||t.height,this._repaint()},e._saveToCmd=function(t,e){return this._sp&&(this._sp._renderType|=512),null==this._one?(this._one=e,this._render=this._renderOne):(this._sp&&(this._sp._renderType&=-2),this._render=this._renderAll,0===(this._cmds||(this._cmds=[])).length&&this._cmds.push(this._one),this._cmds.push(e)),e.callee=t,this._repaint(),e},e.clipRect=function(t,e,i,n){this._saveToCmd(Render._context._clipRect,[t,e,i,n])},e.fillText=function(t,e,i,n,s,r,a){void 0===a&&(a=0),this._saveToCmd(Render._context._fillText,[t,e,i,n||Font.defaultFont,s,r])},e.fillBorderText=function(t,e,i,n,s,r,a,o){this._saveToCmd(Render._context._fillBorderText,[t,e,i,n||Font.defaultFont,s,r,a,o])},e.strokeText=function(t,e,i,n,s,r,a){this._saveToCmd(Render._context._strokeText,[t,e,i,n||Font.defaultFont,s,r,a])},e.alpha=function(t){t=t<0?0:t>1?1:t,this._saveToCmd(Render._context._alpha,[t])},e.setAlpha=function(t){t=t<0?0:t>1?1:t,this._saveToCmd(Render._context._setAlpha,[t])},e.transform=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(Render._context._transform,[t,e,i])},e.rotate=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(Render._context._rotate,[t,e,i])},e.scale=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=0),this._saveToCmd(Render._context._scale,[t,e,i,n])},e.translate=function(t,e){this._saveToCmd(Render._context._translate,[t,e])},e.save=function(){this._saveToCmd(Render._context._save,[])},e.restore=function(){this._saveToCmd(Render._context._restore,[])},e.replaceText=function(t){this._repaint();var e=this._cmds;if(e){for(var i=e.length-1;i>-1;i--)if(this._isTextCmd(e[i].callee))return e[i][0].toUpperCase?e[i][0]=t:e[i][0].setText(t),!0}else if(this._one&&this._isTextCmd(this._one.callee))return this._one[0].toUpperCase?this._one[0]=t:this._one[0].setText(t),!0;return!1},e._isTextCmd=function(t){return t===Render._context._fillText||t===Render._context._fillBorderText||t===Render._context._strokeText},e.replaceTextColor=function(t){this._repaint();var e=this._cmds;if(e)for(var i=e.length-1;i>-1;i--)this._isTextCmd(e[i].callee)&&(e[i][4]=t,e[i][0].toUpperCase||(e[i][0].changed=!0));else this._one&&this._isTextCmd(this._one.callee)&&(this._one[4]=t,this._one[0].toUpperCase||(this._one[0].changed=!0))},e.loadImage=function(t,e,i,n,s,r){function a(t){t&&(o.drawTexture(t,e,i,n,s),null!=r&&r.call(o._sp,t))}var o=this;void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0);var h=Loader.getRes(t);h?a(h):Laya.loader.load(t,Handler.create(null,a),null,"image")},e._renderEmpty=function(t,e,i,n){},e._renderAll=function(t,e,i,n){for(var s,r=this._cmds,a=0,o=r.length;a<o;a++)(s=r[a]).callee.call(e,i,n,s)},e._renderOne=function(t,e,i,n){this._one.callee.call(e,i,n,this._one)},e._renderOneImg=function(t,e,i,n){this._one.callee.call(e,i,n,this._one),2305!==t._renderType&&(t._renderType|=1)},e.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var a=0;Render.isWebGL&&(a=VectorGraphManager.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(a));var o=r%2==0?0:.5,h=[t+o,e+o,i+o,n+o,s,r,a];this._saveToCmd(Render._context._drawLine,h)},e.drawLines=function(t,e,i,n,s){void 0===s&&(s=1);var r=0;if(i&&!(i.length<4)){Render.isWebGL&&(r=VectorGraphManager.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(r));var a=s%2==0?0:.5,o=[t+a,e+a,i,n,s,r];this._saveToCmd(Render._context._drawLines,o)}},e.drawCurves=function(t,e,i,n,s){void 0===s&&(s=1);var r=[t,e,i,n,s];this._saveToCmd(Render._context._drawCurves,r)},e.drawRect=function(t,e,i,n,s,r,a){void 0===a&&(a=1);var o=r?a/2:0,h=r?a:0,l=[t+o,e+o,i-h,n-h,s,r,a];this._saveToCmd(Render._context._drawRect,l)},e.drawCircle=function(t,e,i,n,s,r){void 0===r&&(r=1);var a=s?r/2:0,o=0;Render.isWebGL&&(o=VectorGraphManager.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(o));var h=[t,e,i-a,n,s,r,o];this._saveToCmd(Render._context._drawCircle,h)},e.drawPie=function(t,e,i,n,s,r,a,o){void 0===o&&(o=1);var h=a?o/2:0,l=a?o:0,c=0;Render.isWebGL&&(c=VectorGraphManager.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(c));var u=[t+h,e+h,i-l,n,s,r,a,o,c];u[3]=Utils.toRadian(n),u[4]=Utils.toRadian(s),this._saveToCmd(Render._context._drawPie,u)},e.drawPoly=function(t,e,i,n,s,r){void 0===r&&(r=1);var a=0,o=!1;Render.isWebGL&&(a=VectorGraphManager.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(a),o=!(i.length>6));var h=s?r%2==0?0:.5:0,l=[t+h,e+h,i,n,s,r,a,o];this._saveToCmd(Render._context._drawPoly,l)},e.drawPath=function(t,e,i,n,s){var r=[t,e,i,n,s];this._saveToCmd(Render._context._drawPath,r)},__getset(0,e,"cmds",function(){return this._cmds},function(t){this._sp&&(this._sp._renderType|=512),this._cmds=t,this._render=this._renderAll,this._repaint()}),t.__init__=function(){if(Render.isConchNode){for(var t=laya.display.Graphics.prototype,e=Browser.window.ConchGraphics.prototype,i=["clear","destroy","alpha","rotate","transform","scale","translate","save","restore","clipRect","blendMode","fillText","fillBorderText","_fands","drawRect","drawCircle","drawPie","drawPoly","drawPath","drawImageM","drawLine","drawLines","_drawPs","drawCurves","replaceText","replaceTextColor","_fillImage","fillTexture","setSkinMesh","drawParticle","drawImageS"],n=0,s=i.length;n<=s;n++){var r=i[n];t[r]=e[r]}t._saveToCmd=null,e.drawImageS&&(t.drawTextures=function(t,e){if(t&&t.loaded&&t.bitmap&&t.source){var i=t.uv,n=t.bitmap.width,s=t.bitmap.height;this.drawImageS(t.bitmap.source,i[0]*n,i[1]*s,(i[2]-i[0])*n,(i[5]-i[3])*s,t.offsetX,t.offsetY,t.width,t.height,e)}}),t.drawTexture=function(t,e,i,n,s,r,a){if(void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===a&&(a=1),t)if(t.loaded){if(t.loaded&&t.bitmap&&t.source&&(n||(n=t.sourceWidth),s||(s=t.sourceHeight),a=a<0?0:a>1?1:a,n=n-t.sourceWidth+t.width,s=s-t.sourceHeight+t.height,!(n<=0||s<=0))){e+=t.offsetX,i+=t.offsetY;var o=t.uv,h=t.bitmap.width,l=t.bitmap.height;this.drawImageM(t.bitmap.source,o[0]*h,o[1]*l,(o[2]-o[0])*h,(o[5]-o[3])*l,e,i,n,s,r,a),this._repaint()}}else t.once("loaded",this,function(){this.drawTexture(t,e,i,n,s,r)})},t.fillTexture=function(t,e,i,n,s,r,a){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t&&t.loaded){var o,h=Render._context.ctx,l=t.bitmap.width,c=t.bitmap.height,u=t.uv;o=t.uv!=Texture.DEF_UV?h.createPattern(t.bitmap.source,r,u[0]*l,u[1]*c,(u[2]-u[0])*l,(u[5]-u[3])*c):h.createPattern(t.bitmap.source,r);var _=0,d=0;a&&(e+=a.x%t.width,i+=a.y%t.height,_-=a.x%t.width,d-=a.y%t.height),this._fillImage(o,e,i,_,d,n,s)}}}},t._cache=[],t}(),GraphicsBounds=function(){function t(){this._cacheBoundsType=!1}__class(t,"laya.display.GraphicsBounds");var e=t.prototype;return e.destroy=function(){this._graphics=null,this._temp=null,this._rstBoundPoints=null,this._bounds=null},e.reset=function(){this._temp&&(this._temp.length=0)},e.getBounds=function(t){return void 0===t&&(t=!1),(!this._bounds||!this._temp||this._temp.length<1||t!=this._cacheBoundsType)&&(this._bounds=Rectangle._getWrapRec(this.getBoundPoints(t),this._bounds)),this._cacheBoundsType=t,this._bounds},e.getBoundPoints=function(t){return void 0===t&&(t=!1),(!this._temp||this._temp.length<1||t!=this._cacheBoundsType)&&(this._temp=this._getCmdPoints(t)),this._cacheBoundsType=t,this._rstBoundPoints=Utils.copyArray(this._rstBoundPoints,this._temp)},e._getCmdPoints=function(e){void 0===e&&(e=!1);var i,n=Render._context,s=this._graphics.cmds;if(i=this._temp||(this._temp=[]),i.length=0,s||null==this._graphics._one||(t._tempCmds.length=0,t._tempCmds.push(this._graphics._one),s=t._tempCmds),!s)return i;var r;(r=t._tempMatrixArrays).length=0;var a=t._initMatrix;a.identity();for(var o,h,l=t._tempMatrix,c=NaN,u=NaN,_=NaN,d=NaN,f=NaN,p=NaN,g=0,m=s.length;g<m;g++)if((o=s[g]).callee)switch(o.callee){case n._save:case 7:r.push(a),a=a.clone();break;case n._restore:case 8:a=r.pop();break;case n._scale:case 5:l.identity(),l.translate(-o[2],-o[3]),l.scale(o[0],o[1]),l.translate(o[2],o[3]),this._switchMatrix(a,l);break;case n._rotate:case 3:l.identity(),l.translate(-o[1],-o[2]),l.rotate(o[0]),l.translate(o[1],o[2]),this._switchMatrix(a,l);break;case n._translate:case 6:l.identity(),l.translate(o[0],o[1]),this._switchMatrix(a,l);break;case n._transform:case 4:l.identity(),l.translate(-o[1],-o[2]),l.concat(o[0]),l.translate(o[1],o[2]),this._switchMatrix(a,l);break;case 16:case 24:t._addPointArrToRst(i,Rectangle._getBoundPointS(o[0],o[1],o[2],o[3]),a);break;case 17:a.copyTo(l),l.concat(o[4]),t._addPointArrToRst(i,Rectangle._getBoundPointS(o[0],o[1],o[2],o[3]),l);break;case n._drawTexture:h=o[0],e?o[3]&&o[4]?t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1],o[2],o[3],o[4]),a):(h=o[0],t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1],o[2],h.width,h.height),a)):(c=(o[3]||h.sourceWidth)/h.width,u=(o[4]||h.sourceHeight)/h.height,_=c*h.sourceWidth,d=u*h.sourceHeight,f=h.offsetX>0?h.offsetX:0,p=h.offsetY>0?h.offsetY:0,f*=c,p*=u,t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1]-f,o[2]-p,_,d),a));break;case n._fillTexture:o[3]&&o[4]?t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1],o[2],o[3],o[4]),a):(h=o[0],t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1],o[2],h.width,h.height),a));break;case n._drawTextureWithTransform:var v;o[5]?(a.copyTo(l),l.concat(o[5]),v=l):v=a,e?o[3]&&o[4]?t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1],o[2],o[3],o[4]),v):(h=o[0],t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1],o[2],h.width,h.height),v)):(h=o[0],c=(o[3]||h.sourceWidth)/h.width,u=(o[4]||h.sourceHeight)/h.height,_=c*h.sourceWidth,d=u*h.sourceHeight,f=h.offsetX>0?h.offsetX:0,p=h.offsetY>0?h.offsetY:0,f*=c,p*=u,t._addPointArrToRst(i,Rectangle._getBoundPointS(o[1]-f,o[2]-p,_,d),v));break;case n._drawRect:case 13:t._addPointArrToRst(i,Rectangle._getBoundPointS(o[0],o[1],o[2],o[3]),a);break;case n._drawCircle:case n._fillCircle:case 14:t._addPointArrToRst(i,Rectangle._getBoundPointS(o[0]-o[2],o[1]-o[2],o[2]+o[2],o[2]+o[2]),a);break;case n._drawLine:case 20:t._tempPoints.length=0;var y=NaN;y=.5*o[5],o[0]==o[2]?t._tempPoints.push(o[0]+y,o[1],o[2]+y,o[3],o[0]-y,o[1],o[2]-y,o[3]):o[1]==o[3]?t._tempPoints.push(o[0],o[1]+y,o[2],o[3]+y,o[0],o[1]-y,o[2],o[3]-y):t._tempPoints.push(o[0],o[1],o[2],o[3]),t._addPointArrToRst(i,t._tempPoints,a);break;case n._drawCurves:case 22:t._addPointArrToRst(i,Bezier.I.getBezierPoints(o[2]),a,o[0],o[1]);break;case n._drawPoly:case n._drawLines:case 18:t._addPointArrToRst(i,o[2],a,o[0],o[1]);break;case n._drawPath:case 19:t._addPointArrToRst(i,this._getPathPoints(o[2]),a,o[0],o[1]);break;case n._drawPie:case 15:t._addPointArrToRst(i,this._getPiePoints(o[0],o[1],o[2],o[3],o[4]),a)}return i.length>200?i=Utils.copyArray(i,Rectangle._getWrapRec(i)._getBoundPoints()):i.length>8&&(i=GrahamScan.scanPList(i)),i},e._switchMatrix=function(t,e){e.concat(t),e.copyTo(t)},e._getPiePoints=function(e,i,n,s,r){var a=t._tempPoints;t._tempPoints.length=0,a.push(e,i);var o=(r-s)%(2*Math.PI)/10,h=NaN,l=s;for(h=0;h<=10;h++)a.push(e+n*Math.cos(l),i+n*Math.sin(l)),l+=o;return a},e._getPathPoints=function(e){var i=0,n=0,s=t._tempPoints;s.length=0,n=e.length;var r;for(i=0;i<n;i++)(r=e[i]).length>1&&(s.push(r[1],r[2]),r.length>3&&s.push(r[3],r[4]));return s},t._addPointArrToRst=function(e,i,n,s,r){void 0===s&&(s=0),void 0===r&&(r=0);var a=0,o=0;for(o=i.length,a=0;a<o;a+=2)t._addPointToRst(e,i[a]+s,i[a+1]+r,n)},t._addPointToRst=function(t,e,i,n){var s=Point.TEMP;s.setTo(e||0,i||0),n.transformPoint(s),t.push(s.x,s.y)},t._tempPoints=[],t._tempMatrixArrays=[],t._tempCmds=[],__static(t,["_tempMatrix",function(){return this._tempMatrix=new Matrix},"_initMatrix",function(){return this._initMatrix=new Matrix}]),t}(),Event=function(){function t(){}__class(t,"laya.events.Event");var e=t.prototype;return e.setTo=function(t,e,i){return this.type=t,this.currentTarget=e,this.target=i,this},e.stopPropagation=function(){this._stoped=!0},__getset(0,e,"stageY",function(){return Laya.stage.mouseY}),__getset(0,e,"charCode",function(){return this.nativeEvent.charCode}),__getset(0,e,"touches",function(){var t=this.nativeEvent.touches;if(t)for(var e=Laya.stage,i=0,n=t.length;i<n;i++){var s=t[i],r=Point.TEMP;r.setTo(s.clientX,s.clientY),e._canvasTransform.invertTransformPoint(r),e.transform.invertTransformPoint(r),s.stageX=r.x,s.stageY=r.y}return t}),__getset(0,e,"keyLocation",function(){return this.nativeEvent.keyLocation}),__getset(0,e,"ctrlKey",function(){return this.nativeEvent.ctrlKey}),__getset(0,e,"altKey",function(){return this.nativeEvent.altKey}),__getset(0,e,"shiftKey",function(){return this.nativeEvent.shiftKey}),__getset(0,e,"stageX",function(){return Laya.stage.mouseX}),t.MOUSE_DOWN="mousedown",t.MOUSE_UP="mouseup",t.CLICK="click",t.RIGHT_MOUSE_DOWN="rightmousedown",t.RIGHT_MOUSE_UP="rightmouseup",t.RIGHT_CLICK="rightclick",t.MOUSE_MOVE="mousemove",t.MOUSE_OVER="mouseover",t.MOUSE_OUT="mouseout",t.MOUSE_WHEEL="mousewheel",t.ROLL_OVER="mouseover",t.ROLL_OUT="mouseout",t.DOUBLE_CLICK="doubleclick",t.CHANGE="change",t.CHANGED="changed",t.RESIZE="resize",t.ADDED="added",t.REMOVED="removed",t.DISPLAY="display",t.UNDISPLAY="undisplay",t.ERROR="error",t.COMPLETE="complete",t.LOADED="loaded",t.PROGRESS="progress",t.INPUT="input",t.RENDER="render",t.OPEN="open",t.MESSAGE="message",t.CLOSE="close",t.KEY_DOWN="keydown",t.KEY_PRESS="keypress",t.KEY_UP="keyup",t.FRAME="enterframe",t.DRAG_START="dragstart",t.DRAG_MOVE="dragmove",t.DRAG_END="dragend",t.ENTER="enter",t.SELECT="select",t.BLUR="blur",t.FOCUS="focus",t.VISIBILITY_CHANGE="visibilitychange",t.FOCUS_CHANGE="focuschange",t.PLAYED="played",t.PAUSED="paused",t.STOPPED="stopped",t.START="start",t.END="end",t.ENABLE_CHANGED="enablechanged",t.ACTIVE_IN_HIERARCHY_CHANGED="activeinhierarchychanged",t.COMPONENT_ADDED="componentadded",t.COMPONENT_REMOVED="componentremoved",t.LAYER_CHANGED="layerchanged",t.HIERARCHY_LOADED="hierarchyloaded",t.RECOVERED="recovered",t.RELEASED="released",t.LINK="link",t.LABEL="label",t.FULL_SCREEN_CHANGE="fullscreenchange",t.DEVICE_LOST="devicelost",t.MESH_CHANGED="meshchanged",t.MATERIAL_CHANGED="materialchanged",t.WORLDMATRIX_NEEDCHANGE="worldmatrixneedchanged",t.ANIMATION_CHANGED="animationchanged",t.TRIGGER_ENTER="triggerenter",t.TRIGGER_STAY="triggerstay",t.TRIGGER_EXIT="triggerexit",t.TRAIL_Filter_CHANGE="trailfilterchange",__static(t,["EMPTY",function(){return this.EMPTY=new t}]),t}(),Keyboard=function(){function t(){}return __class(t,"laya.events.Keyboard"),t.NUMBER_0=48,t.NUMBER_1=49,t.NUMBER_2=50,t.NUMBER_3=51,t.NUMBER_4=52,t.NUMBER_5=53,t.NUMBER_6=54,t.NUMBER_7=55,t.NUMBER_8=56,t.NUMBER_9=57,t.A=65,t.B=66,t.C=67,t.D=68,t.E=69,t.F=70,t.G=71,t.H=72,t.I=73,t.J=74,t.K=75,t.L=76,t.M=77,t.N=78,t.O=79,t.P=80,t.Q=81,t.R=82,t.S=83,t.T=84,t.U=85,t.V=86,t.W=87,t.X=88,t.Y=89,t.Z=90,t.F1=112,t.F2=113,t.F3=114,t.F4=115,t.F5=116,t.F6=117,t.F7=118,t.F8=119,t.F9=120,t.F10=121,t.F11=122,t.F12=123,t.F13=124,t.F14=125,t.F15=126,t.NUMPAD=21,t.NUMPAD_0=96,t.NUMPAD_1=97,t.NUMPAD_2=98,t.NUMPAD_3=99,t.NUMPAD_4=100,t.NUMPAD_5=101,t.NUMPAD_6=102,t.NUMPAD_7=103,t.NUMPAD_8=104,t.NUMPAD_9=105,t.NUMPAD_ADD=107,t.NUMPAD_DECIMAL=110,t.NUMPAD_DIVIDE=111,t.NUMPAD_ENTER=108,t.NUMPAD_MULTIPLY=106,t.NUMPAD_SUBTRACT=109,t.SEMICOLON=186,t.EQUAL=187,t.COMMA=188,t.MINUS=189,t.PERIOD=190,t.SLASH=191,t.BACKQUOTE=192,t.LEFTBRACKET=219,t.BACKSLASH=220,t.RIGHTBRACKET=221,t.QUOTE=222,t.ALTERNATE=18,t.BACKSPACE=8,t.CAPS_LOCK=20,t.COMMAND=15,t.CONTROL=17,t.DELETE=46,t.ENTER=13,t.ESCAPE=27,t.PAGE_UP=33,t.PAGE_DOWN=34,t.END=35,t.HOME=36,t.LEFT=37,t.UP=38,t.RIGHT=39,t.DOWN=40,t.SHIFT=16,t.SPACE=32,t.TAB=9,t.INSERT=45,t}(),KeyBoardManager=function(){function t(){}return __class(t,"laya.events.KeyBoardManager"),t.__init__=function(){t._addEvent("keydown"),t._addEvent("keypress"),t._addEvent("keyup")},t._addEvent=function(t){Browser.document.addEventListener(t,function(e){laya.events.KeyBoardManager._dispatch(e,t)},!0)},t._dispatch=function(e,i){if(t.enabled){t._event._stoped=!1,t._event.nativeEvent=e,t._event.keyCode=e.keyCode||e.which||e.charCode,"keydown"===i?t._pressKeys[t._event.keyCode]=!0:"keyup"===i&&(t._pressKeys[t._event.keyCode]=null);for(var n=Laya.stage.focus&&null!=Laya.stage.focus.event&&Laya.stage.focus.displayedInStage?Laya.stage.focus:Laya.stage,s=n;s;)s.event(i,t._event.setTo(i,s,n)),s=s.parent}},t.hasKeyDown=function(e){return t._pressKeys[e]},t._pressKeys={},t.enabled=!0,__static(t,["_event",function(){return this._event=new Event}]),t}(),KeyLocation=function(){function t(){}return __class(t,"laya.events.KeyLocation"),t.STANDARD=0,t.LEFT=1,t.RIGHT=2,t.NUM_PAD=3,t}(),MouseManager=function(){function t(){this.mouseX=0,this.mouseY=0,this.disableMouseEvent=!1,this.mouseDownTime=0,this.mouseMoveAccuracy=2,this._stage=null,this._target=null,this._lastMoveTimer=0,this._isLeftMouse=!1,this._eventList=[],this._touchIDs={},this._id=1,this._tTouchID=0,this._event=new Event,this._matrix=new Matrix,this._point=new Point,this._rect=new Rectangle,this._prePoint=new Point,this._curTouchID=NaN}__class(t,"laya.events.MouseManager");var e=t.prototype;return e.__init__=function(e,i){var n=this;this._stage=e;var s=this,r=this._eventList;i.oncontextmenu=function(e){if(t.enabled)return!1},i.addEventListener("mousedown",function(e){t.enabled&&(Browser.onIE||e.preventDefault(),r.push(e),s.mouseDownTime=Browser.now())}),i.addEventListener("mouseup",function(e){t.enabled&&(e.preventDefault(),r.push(e),s.mouseDownTime=-Browser.now())},!0),i.addEventListener("mousemove",function(e){if(t.enabled){e.preventDefault();var i=Browser.now();if(i-s._lastMoveTimer<10)return;s._lastMoveTimer=i,r.push(e)}},!0),i.addEventListener("mouseout",function(e){t.enabled&&r.push(e)}),i.addEventListener("mouseover",function(e){t.enabled&&r.push(e)}),i.addEventListener("touchstart",function(e){t.enabled&&(r.push(e),t._isFirstTouch||Input.isInputting||e.preventDefault(),s.mouseDownTime=Browser.now())}),i.addEventListener("touchend",function(e){t.enabled?(t._isFirstTouch||Input.isInputting||e.preventDefault(),t._isFirstTouch=!1,r.push(e),s.mouseDownTime=-Browser.now()):n._curTouchID=NaN},!0),i.addEventListener("touchmove",function(e){t.enabled&&(e.preventDefault(),r.push(e))},!0),i.addEventListener("touchcancel",function(e){t.enabled?(e.preventDefault(),r.push(e)):n._curTouchID=NaN},!0),i.addEventListener("mousewheel",function(e){t.enabled&&r.push(e)}),i.addEventListener("DOMMouseScroll",function(e){t.enabled&&r.push(e)})},e.initEvent=function(t,e){this._event._stoped=!1,this._event.nativeEvent=e||t,this._target=null,this._point.setTo(t.pageX||t.clientX,t.pageY||t.clientY),this._stage._canvasTransform.invertTransformPoint(this._point),this.mouseX=this._point.x,this.mouseY=this._point.y,this._event.touchId=t.identifier||0,this._tTouchID=this._event.touchId;var i;(i=TouchManager.I._event)._stoped=!1,i.nativeEvent=this._event.nativeEvent,i.touchId=this._event.touchId},e.checkMouseWheel=function(t){this._event.delta=t.wheelDelta?.025*t.wheelDelta:-t.detail;for(var e=TouchManager.I.getLastOvers(),i=0,n=e.length;i<n;i++){var s=e[i];s.event("mousewheel",this._event.setTo("mousewheel",s,this._target))}},e.onMouseMove=function(t){TouchManager.I.onMouseMove(t,this._tTouchID)},e.onMouseDown=function(t){if(Input.isInputting&&Laya.stage.focus&&Laya.stage.focus.focus&&!Laya.stage.focus.contains(this._target)){var e=Laya.stage.focus._tf||Laya.stage.focus,i=t._tf||t;i instanceof laya.display.Input&&i.multiline==e.multiline?e._focusOut():e.focus=!1}TouchManager.I.onMouseDown(t,this._tTouchID,this._isLeftMouse)},e.onMouseUp=function(t){TouchManager.I.onMouseUp(t,this._tTouchID,this._isLeftMouse)},e.check=function(t,e,i,n){this._point.setTo(e,i),t.fromParentPoint(this._point),e=this._point.x,i=this._point.y;var s=t.scrollRect;if(s&&(this._rect.setTo(s.x,s.y,s.width,s.height),!this._rect.contains(e,i)))return!1;if(!this.disableMouseEvent){if(t.hitTestPrior&&!t.mouseThrough&&!this.hitTest(t,e,i))return!1;for(var r=t._childs.length-1;r>-1;r--){var a=t._childs[r];if(!a.destroyed&&a.mouseEnabled&&a.visible&&this.check(a,e,i,n))return!0}}var o=!(!t.hitTestPrior||t.mouseThrough||this.disableMouseEvent)||this.hitTest(t,e,i);return o?(this._target=t,n.call(this,t)):n===this.onMouseUp&&t===this._stage&&(this._target=this._stage,n.call(this,this._target)),o},e.hitTest=function(t,e,i){var n=!1;if(t.scrollRect&&(e-=t.scrollRect.x,i-=t.scrollRect.y),t.hitArea instanceof laya.utils.HitArea)return t.hitArea.isHit(e,i);if(t.width>0&&t.height>0||t.mouseThrough||t.hitArea)if(t.mouseThrough)n=t.getGraphicBounds().contains(e,i);else{var s=this._rect;t.hitArea?s=t.hitArea:s.setTo(0,0,t.width,t.height),n=s.contains(e,i)}return n},e.runEvent=function(){var e=this._eventList.length;if(e){for(var i,n=0,s=0,r=0;n<e;){var a=this._eventList[n];switch("mousemove"!==a.type&&(this._prePoint.x=this._prePoint.y=-1e6),a.type){case"mousedown":this._touchIDs[0]=this._id++,t._isTouchRespond?t._isTouchRespond=!1:(this._isLeftMouse=0===a.button,this.initEvent(a),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseDown));break;case"mouseup":this._isLeftMouse=0===a.button,this.initEvent(a),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseUp);break;case"mousemove":Math.abs(this._prePoint.x-a.clientX)+Math.abs(this._prePoint.y-a.clientY)>=this.mouseMoveAccuracy&&(this._prePoint.x=a.clientX,this._prePoint.y=a.clientY,this.initEvent(a),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseMove));break;case"touchstart":t._isTouchRespond=!0,this._isLeftMouse=!0;var o=a.changedTouches;for(s=0,r=o.length;s<r;s++)i=o[s],(t.multiTouchEnabled||isNaN(this._curTouchID))&&(this._curTouchID=i.identifier,this._id%200==0&&(this._touchIDs={}),this._touchIDs[i.identifier]=this._id++,this.initEvent(i,a),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseDown));break;case"touchend":case"touchcancel":t._isTouchRespond=!0,this._isLeftMouse=!0;var h=a.changedTouches;for(s=0,r=h.length;s<r;s++)if(i=h[s],t.multiTouchEnabled||i.identifier==this._curTouchID){this._curTouchID=NaN,this.initEvent(i,a);this.check(this._stage,this.mouseX,this.mouseY,this.onMouseUp)||this.onMouseUp(null)}break;case"touchmove":var l=a.changedTouches;for(s=0,r=l.length;s<r;s++)i=l[s],(t.multiTouchEnabled||i.identifier==this._curTouchID)&&(this.initEvent(i,a),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseMove));break;case"wheel":case"mousewheel":case"DOMMouseScroll":this.checkMouseWheel(a);break;case"mouseout":TouchManager.I.stageMouseOut();break;case"mouseover":this._stage.event("mouseover",this._event.setTo("mouseover",this._stage,this._stage))}n++}this._eventList.length=0}},t.enabled=!0,t.multiTouchEnabled=!0,t._isTouchRespond=!1,t._isFirstTouch=!0,__static(t,["instance",function(){return this.instance=new t}]),t}(),TouchManager=function(){function t(){this.preOvers=[],this.preDowns=[],this.preRightDowns=[],this.enable=!0,this._lastClickTime=0,this._event=new Event}__class(t,"laya.events.TouchManager");var e=t.prototype;return e._clearTempArrs=function(){t._oldArr.length=0,t._newArr.length=0,t._tEleArr.length=0},e.getTouchFromArr=function(t,e){var i=0,n=0;n=e.length;var s;for(i=0;i<n;i++)if((s=e[i]).id==t)return s;return null},e.removeTouchFromArr=function(t,e){var i=0;for(i=e.length-1;i>=0;i--)e[i].id==t&&e.splice(i,1)},e.createTouchO=function(t,e){var i;return i=Pool.getItem("TouchData")||{},i.id=e,i.tar=t,i},e.onMouseDown=function(e,i,n){if(void 0===n&&(n=!1),this.enable){var s,r,a;s=this.getTouchFromArr(i,this.preOvers),a=this.getEles(e,null,t._tEleArr),s?s.tar=e:(r=this.createTouchO(e,i),this.preOvers.push(r)),Browser.onMobile&&this.sendEvents(a,"mouseover",i);var o;o=n?this.preDowns:this.preRightDowns,(s=this.getTouchFromArr(i,o))?s.tar=e:(r=this.createTouchO(e,i),o.push(r)),this.sendEvents(a,n?"mousedown":"rightmousedown",i),this._clearTempArrs()}},e.sendEvents=function(t,e,i){void 0===i&&(i=0);var n=0,s=0;s=t.length,this._event._stoped=!1;var r;r=t[0];var a;for(n=0;n<s;n++){if((a=t[n]).destroyed)return;if(a.event(e,this._event.setTo(e,a,r)),this._event._stoped)break}},e.getEles=function(t,e,i){for(i?i.length=0:i=[];t&&t!=e;)i.push(t),t=t.parent;return i},e.checkMouseOutAndOverOfMove=function(e,i,n){if(void 0===n&&(n=0),i!=e){var s,r,a=0,o=0;if(i.contains(e))r=this.getEles(e,i,t._tEleArr),this.sendEvents(r,"mouseover",n);else if(e.contains(i))r=this.getEles(i,e,t._tEleArr),this.sendEvents(r,"mouseout",n);else{(r=t._tEleArr).length=0;var h;h=this.getEles(i,null,t._oldArr);var l;l=this.getEles(e,null,t._newArr),o=h.length;var c=0;for(a=0;a<o;a++){if(s=h[a],(c=l.indexOf(s))>=0){l.splice(c,l.length-c);break}r.push(s)}r.length>0&&this.sendEvents(r,"mouseout",n),l.length>0&&this.sendEvents(l,"mouseover",n)}}},e.onMouseMove=function(e,i){if(this.enable){var n,s;(n=this.getTouchFromArr(i,this.preOvers))?(this.checkMouseOutAndOverOfMove(e,n.tar),n.tar=e,s=this.getEles(e,null,t._tEleArr)):(s=this.getEles(e,null,t._tEleArr),this.sendEvents(s,"mouseover",i),this.preOvers.push(this.createTouchO(e,i))),this.sendEvents(s,"mousemove",i),this._clearTempArrs()}},e.getLastOvers=function(){return t._tEleArr.length=0,this.preOvers.length>0&&this.preOvers[0].tar?this.getEles(this.preOvers[0].tar,null,t._tEleArr):(t._tEleArr.push(Laya.stage),t._tEleArr)},e.stageMouseOut=function(){var t;t=this.getLastOvers(),this.preOvers.length=0,this.sendEvents(t,"mouseout",0)},e.onMouseUp=function(e,i,n){if(void 0===n&&(n=!1),this.enable){var s,r,a,o,h,l=0,c=0,u=Browser.onMobile;r=this.getEles(e,null,t._tEleArr),this.sendEvents(r,n?"mouseup":"rightmouseup",i);var _;if(_=n?this.preDowns:this.preRightDowns,s=this.getTouchFromArr(i,_)){var d=!1,f=Browser.now();if(d=f-this._lastClickTime<300,this._lastClickTime=f,e==s.tar)h=r;else for(a=this.getEles(s.tar,null,t._oldArr),(h=t._newArr).length=0,c=a.length,l=0;l<c;l++)o=a[l],r.indexOf(o)>=0&&h.push(o);h.length>0&&this.sendEvents(h,n?"click":"rightclick",i),n&&d&&this.sendEvents(h,"doubleclick",i),this.removeTouchFromArr(i,_),s.tar=null,Pool.recover("TouchData",s)}else;(s=this.getTouchFromArr(i,this.preOvers))&&u&&((h=this.getEles(s.tar,null,h))&&h.length>0&&this.sendEvents(h,"mouseout",i),this.removeTouchFromArr(i,this.preOvers),s.tar=null,Pool.recover("TouchData",s)),this._clearTempArrs()}},t._oldArr=[],t._newArr=[],t._tEleArr=[],__static(t,["I",function(){return this.I=new t}]),t}(),Filter=function(){function t(){this._action=null}__class(t,"laya.filters.Filter");var e=t.prototype;return Laya.imps(e,{"laya.filters.IFilter":!0}),e.callNative=function(t){},__getset(0,e,"type",function(){return-1}),__getset(0,e,"action",function(){return this._action}),t.BLUR=16,t.COLOR=32,t.GLOW=8,t._filterStart=null,t._filterEnd=null,t._EndTarget=null,t._recycleScope=null,t._filter=null,t._useSrc=null,t._endSrc=null,t._useOut=null,t._endOut=null,t}(),ColorFilterAction=function(){function t(){this.data=null}__class(t,"laya.filters.ColorFilterAction");var e=t.prototype;return Laya.imps(e,{"laya.filters.IFilterAction":!0}),e.apply=function(t){var e=t.ctx.ctx,i=t.ctx.ctx.canvas;if(0==i.width||0==i.height)return i;for(var n,s=e.getImageData(0,0,i.width,i.height),r=s.data,a=0,o=r.length;a<o;a+=4)n=this.getColor(r[a],r[a+1],r[a+2],r[a+3]),0!=r[a+3]&&(r[a]=n[0],r[a+1]=n[1],r[a+2]=n[2],r[a+3]=n[3]);return e.putImageData(s,0,0),t},e.getColor=function(t,e,i,n){var s=[];if(this.data._mat&&this.data._alpha){var r=this.data._mat,a=this.data._alpha;s[0]=r[0]*t+r[1]*e+r[2]*i+r[3]*n+a[0],s[1]=r[4]*t+r[5]*e+r[6]*i+r[7]*n+a[1],s[2]=r[8]*t+r[9]*e+r[10]*i+r[11]*n+a[2],s[3]=r[12]*t+r[13]*e+r[14]*i+r[15]*n+a[3]}return s},t}(),Arith=function(){function t(){}return __class(t,"laya.maths.Arith"),t.formatR=function(t){return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t},t.isPOT=function(t,e){return t>0&&0==(t&t-1)&&e>0&&0==(e&e-1)},t.setMatToArray=function(t,e){t.a,t.b,t.c,t.d,t.tx,t.ty,e[0]=t.a,e[1]=t.b,e[4]=t.c,e[5]=t.d,e[12]=t.tx,e[13]=t.ty},t}(),Bezier=function(){function t(){this._controlPoints=[new Point,new Point,new Point],this._calFun=this.getPoint2}__class(t,"laya.maths.Bezier");var e=t.prototype;return e._switchPoint=function(t,e){var i=this._controlPoints.shift();i.setTo(t,e),this._controlPoints.push(i)},e.getPoint2=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=Math.pow(1-t,2)*i.x+2*t*(1-t)*n.x+Math.pow(t,2)*s.x,a=Math.pow(1-t,2)*i.y+2*t*(1-t)*n.y+Math.pow(t,2)*s.y;e.push(r,a)},e.getPoint3=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=this._controlPoints[3],a=Math.pow(1-t,3)*i.x+3*n.x*t*(1-t)*(1-t)+3*s.x*t*t*(1-t)+r.x*Math.pow(t,3),o=Math.pow(1-t,3)*i.y+3*n.y*t*(1-t)*(1-t)+3*s.y*t*t*(1-t)+r.y*Math.pow(t,3);e.push(a,o)},e.insertPoints=function(t,e){var i=NaN,n=NaN;for(n=1/(t=t>0?t:5),i=0;i<=1;i+=n)this._calFun(i,e)},e.getBezierPoints=function(t,e,i){void 0===e&&(e=5),void 0===i&&(i=2);var n=0,s=0;if((s=t.length)<2*(i+1))return[];var r;switch(r=[],i){case 2:this._calFun=this.getPoint2;break;case 3:this._calFun=this.getPoint3;break;default:return[]}for(;this._controlPoints.length<=i;)this._controlPoints.push(new Point);for(n=0;n<2*i;n+=2)this._switchPoint(t[n],t[n+1]);for(n=2*i;n<s;n+=2)this._switchPoint(t[n],t[n+1]),n/2%i==0&&this.insertPoints(e,r);return r},__static(t,["I",function(){return this.I=new t}]),t}(),GrahamScan=function(){function t(){}return __class(t,"laya.maths.GrahamScan"),t.multiply=function(t,e,i){return(t.x-i.x)*(e.y-i.y)-(e.x-i.x)*(t.y-i.y)},t.dis=function(t,e){return(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)},t._getPoints=function(e,i,n){for(void 0===i&&(i=!1),t._mPointList||(t._mPointList=[]);t._mPointList.length<e;)t._mPointList.push(new Point);return n||(n=[]),n.length=0,i?t.getFrom(n,t._mPointList,e):t.getFromR(n,t._mPointList,e),n},t.getFrom=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e[n]);return t},t.getFromR=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e.pop());return t},t.pListToPointList=function(e,i){void 0===i&&(i=!1);var n=0,s=e.length/2,r=t._getPoints(s,i,t._tempPointList);for(n=0;n<s;n++)r[n].setTo(e[n+n],e[n+n+1]);return r},t.pointListToPlist=function(e){var i,n=0,s=e.length,r=t._temPList;for(r.length=0,n=0;n<s;n++)i=e[n],r.push(i.x,i.y);return r},t.scanPList=function(e){return Utils.copyArray(e,t.pointListToPlist(t.scan(t.pListToPointList(e,!0))))},t.scan=function(e){var i,n,s,r=0,a=0,o=0,h=e.length,l={};for((n=t._temArr).length=0,r=(h=e.length)-1;r>=0;r--)s=(i=e[r]).x+"_"+i.y,l.hasOwnProperty(s)||(l[s]=!0,n.push(i));for(h=n.length,Utils.copyArray(e,n),r=1;r<h;r++)(e[r].y<e[o].y||e[r].y==e[o].y&&e[r].x<e[o].x)&&(o=r);for(i=e[0],e[0]=e[o],e[o]=i,r=1;r<h-1;r++){for(o=r,a=r+1;a<h;a++)(t.multiply(e[a],e[o],e[0])>0||0==t.multiply(e[a],e[o],e[0])&&t.dis(e[0],e[a])<t.dis(e[0],e[o]))&&(o=a);i=e[r],e[r]=e[o],e[o]=i}if(n=t._temArr,n.length=0,e.length<3)return Utils.copyArray(n,e);for(n.push(e[0],e[1],e[2]),r=3;r<h;r++){for(;n.length>=2&&t.multiply(e[r],n[n.length-1],n[n.length-2])>=0;)n.pop();e[r]&&n.push(e[r])}return n},t._mPointList=null,t._tempPointList=[],t._temPList=[],t._temArr=[],t}(),MathUtil=function(){function t(){}return __class(t,"laya.maths.MathUtil"),t.subtractVector3=function(t,e,i){i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2]},t.lerp=function(t,e,i){return t*(1-i)+e*i},t.scaleVector3=function(t,e,i){i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e},t.lerpVector3=function(t,e,i,n){var s=t[0],r=t[1],a=t[2];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=a+i*(e[2]-a)},t.lerpVector4=function(t,e,i,n){var s=t[0],r=t[1],a=t[2],o=t[3];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=a+i*(e[2]-a),n[3]=o+i*(e[3]-o)},t.slerpQuaternionArray=function(t,e,i,n,s,r,a){var o,h,l,c,u,_=t[e+0],d=t[e+1],f=t[e+2],p=t[e+3],g=i[n+0],m=i[n+1],v=i[n+2],y=i[n+3];return(h=_*g+d*m+f*v+p*y)<0&&(h=-h,g=-g,m=-m,v=-v,y=-y),1-h>1e-6?(o=Math.acos(h),l=Math.sin(o),c=Math.sin((1-s)*o)/l,u=Math.sin(s*o)/l):(c=1-s,u=s),r[a+0]=c*_+u*g,r[a+1]=c*d+u*m,r[a+2]=c*f+u*v,r[a+3]=c*p+u*y,r},t.getRotation=function(t,e,i,n){return Math.atan2(n-e,i-t)/Math.PI*180},t.sortBigFirst=function(t,e){return t==e?0:e>t?1:-1},t.sortSmallFirst=function(t,e){return t==e?0:e>t?-1:1},t.sortNumBigFirst=function(t,e){return parseFloat(e)-parseFloat(t)},t.sortNumSmallFirst=function(t,e){return parseFloat(t)-parseFloat(e)},t.sortByKey=function(e,i,n){void 0===i&&(i=!1),void 0===n&&(n=!0);var s;return s=i?n?t.sortNumBigFirst:t.sortBigFirst:n?t.sortNumSmallFirst:t.sortSmallFirst,function(t,i){return s(t[e],i[e])}},t}(),Matrix=function(){function t(t,e,i,n,s,r){this.inPool=!1,this.bTransform=!1,void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===s&&(s=0),void 0===r&&(r=0),this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this._checkTransform()}__class(t,"laya.maths.Matrix");var e=t.prototype;return e.identity=function(){return this.a=this.d=1,this.b=this.tx=this.ty=this.c=0,this.bTransform=!1,this},e._checkTransform=function(){return this.bTransform=1!==this.a||0!==this.b||0!==this.c||1!==this.d},e.setTranslate=function(t,e){return this.tx=t,this.ty=e,this},e.translate=function(t,e){return this.tx+=t,this.ty+=e,this},e.scale=function(t,e){this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this.bTransform=!0},e.rotate=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.c,r=this.tx;this.a=n*e-this.b*i,this.b=n*i+this.b*e,this.c=s*e-this.d*i,this.d=s*i+this.d*e,this.tx=r*e-this.ty*i,this.ty=r*i+this.ty*e,this.bTransform=!0},e.skew=function(t,e){var i=Math.tan(t),n=Math.tan(e),s=this.a,r=this.b;return this.a+=n*this.c,this.b+=n*this.d,this.c+=i*s,this.d+=i*r,this},e.invertTransformPoint=function(t){var e=this.a,i=this.b,n=this.c,s=this.d,r=this.tx,a=e*s-i*n,o=s/a,h=-i/a,l=-n/a,c=e/a,u=(n*this.ty-s*r)/a,_=-(e*this.ty-i*r)/a;return t.setTo(o*t.x+l*t.y+u,h*t.x+c*t.y+_)},e.transformPoint=function(t){return t.setTo(this.a*t.x+this.c*t.y+this.tx,this.b*t.x+this.d*t.y+this.ty)},e.transformPointN=function(t){return t.setTo(this.a*t.x+this.c*t.y,this.b*t.x+this.d*t.y)},e.transformPointArray=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r+this.tx,e[n+1]=this.b*s+this.d*r+this.ty}return e},e.transformPointArrayScale=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r,e[n+1]=this.b*s+this.d*r}return e},e.getScaleX=function(){return 0===this.b?this.a:Math.sqrt(this.a*this.a+this.b*this.b)},e.getScaleY=function(){return 0===this.c?this.d:Math.sqrt(this.c*this.c+this.d*this.d)},e.invert=function(){var t=this.a,e=this.b,i=this.c,n=this.d,s=this.tx,r=t*n-e*i;return this.a=n/r,this.b=-e/r,this.c=-i/r,this.d=t/r,this.tx=(i*this.ty-n*s)/r,this.ty=-(t*this.ty-e*s)/r,this},e.setTo=function(t,e,i,n,s,r){return this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this},e.concat=function(t){var e=this.a,i=this.c,n=this.tx;return this.a=e*t.a+this.b*t.c,this.b=e*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d,this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this},e.scaleEx=function(t,e){var i=this.a,n=this.b,s=this.c,r=this.d;0!==n||0!==s?(this.a=t*i,this.b=t*n,this.c=e*s,this.d=e*r):(this.a=t*i,this.b=0*r,this.c=0*i,this.d=e*r),this.bTransform=!0},e.rotateEx=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.b,r=this.c,a=this.d;0!==s||0!==r?(this.a=e*n+i*r,this.b=e*s+i*a,this.c=-i*n+e*r,this.d=-i*s+e*a):(this.a=e*n,this.b=i*a,this.c=-i*n,this.d=e*a),this.bTransform=!0},e.clone=function(){var e=t.create();return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e.bTransform=this.bTransform,e},e.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t.bTransform=this.bTransform,t},e.toString=function(){return this.a+","+this.b+","+this.c+","+this.d+","+this.tx+","+this.ty},e.destroy=function(){if(!this.inPool){var e=t._cache;this.inPool=!0,e._length||(e._length=0),e[e._length++]=this,this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this.bTransform=!1}},t.mul=function(t,e,i){var n=t.a,s=t.b,r=t.c,a=t.d,o=t.tx,h=t.ty,l=e.a,c=e.b,u=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==c||0!==u?(i.a=n*l+s*u,i.b=n*c+s*_,i.c=r*l+a*u,i.d=r*c+a*_,i.tx=l*o+u*h+d,i.ty=c*o+_*h+f):(i.a=n*l,i.b=s*_,i.c=r*l,i.d=a*_,i.tx=l*o+d,i.ty=_*h+f),i},t.mul16=function(t,e,i){var n=t.a,s=t.b,r=t.c,a=t.d,o=t.tx,h=t.ty,l=e.a,c=e.b,u=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==c||0!==u?(i[0]=n*l+s*u,i[1]=n*c+s*_,i[4]=r*l+a*u,i[5]=r*c+a*_,i[12]=l*o+u*h+d,i[13]=c*o+_*h+f):(i[0]=n*l,i[1]=s*_,i[4]=r*l,i[5]=a*_,i[12]=l*o+d,i[13]=_*h+f),i},t.mulPre=function(t,e,i,n,s,r,a,o){var h=t.a,l=t.b,c=t.c,u=t.d,_=t.tx,d=t.ty;return 0!==i||0!==n?(o.a=h*e+l*n,o.b=h*i+l*s,o.c=c*e+u*n,o.d=c*i+u*s,o.tx=e*_+n*d+r,o.ty=i*_+s*d+a):(o.a=h*e,o.b=l*s,o.c=c*e,o.d=u*s,o.tx=e*_+r,o.ty=s*d+a),o},t.mulPos=function(t,e,i,n,s,r,a,o){var h=t.a,l=t.b,c=t.c,u=t.d,_=t.tx,d=t.ty;return 0!==l||0!==c?(o.a=e*h+i*c,o.b=e*l+i*u,o.c=n*h+s*c,o.d=n*l+s*u,o.tx=h*r+c*a+_,o.ty=l*r+u*a+d):(o.a=e*h,o.b=i*u,o.c=n*h,o.d=s*u,o.tx=h*r+_,o.ty=u*a+d),o},t.preMul=function(t,e,i){var n=t.a,s=t.b,r=t.c,a=t.d,o=e.a,h=e.b,l=e.c,c=e.d,u=e.tx,_=e.ty;return i.a=o*n,i.b=i.c=0,i.d=c*a,i.tx=u*n+t.tx,i.ty=_*a+t.ty,0===h&&0===l&&0===s&&0===r||(i.a+=h*r,i.d+=l*s,i.b+=o*s+h*a,i.c+=l*n+c*r,i.tx+=_*r,i.ty+=u*s),i},t.preMulXY=function(t,e,i,n){var s=t.a,r=t.b,a=t.c,o=t.d;return n.a=s,n.b=r,n.c=a,n.d=o,n.tx=e*s+t.tx+i*a,n.ty=i*o+t.ty+e*r,n},t.create=function(){var e=t._cache,i=e._length?e[--e._length]:new t;return i.inPool=!1,i},t._cache=[],__static(t,["EMPTY",function(){return this.EMPTY=new t},"TEMP",function(){return this.TEMP=new t}]),t}(),Point=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}__class(t,"laya.maths.Point");var e=t.prototype;return e.setTo=function(t,e){return this.x=t,this.y=e,this},e.distance=function(t,e){return Math.sqrt((this.x-t)*(this.x-t)+(this.y-e)*(this.y-e))},e.toString=function(){return this.x+","+this.y},e.normalize=function(){var t=Math.sqrt(this.x*this.x+this.y*this.y);if(t>0){var e=1/t;this.x*=e,this.y*=e}},__static(t,["TEMP",function(){return this.TEMP=new t},"EMPTY",function(){return this.EMPTY=new t}]),t}(),Rectangle=function(){function t(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n}__class(t,"laya.maths.Rectangle");var e=t.prototype;return e.setTo=function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},e.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},e.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.right&&e>=this.y&&e<this.bottom)},e.intersects=function(t){return!(t.x>this.x+this.width||t.x+t.width<this.x||t.y>this.y+this.height||t.y+t.height<this.y)},e.intersection=function(e,i){return this.intersects(e)?(i||(i=new t),i.x=Math.max(this.x,e.x),i.y=Math.max(this.y,e.y),i.width=Math.min(this.right,e.right)-i.x,i.height=Math.min(this.bottom,e.bottom)-i.y,i):null},e.union=function(e,i){return i||(i=new t),this.clone(i),e.width<=0||e.height<=0?i:(i.addPoint(e.x,e.y),i.addPoint(e.right,e.bottom),this)},e.clone=function(e){return e||(e=new t),e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},e.toString=function(){return this.x+","+this.y+","+this.width+","+this.height},e.equals=function(t){return!(!t||t.x!==this.x||t.y!==this.y||t.width!==this.width||t.height!==this.height)},e.addPoint=function(t,e){return this.x>t&&(this.width+=this.x-t,this.x=t),this.y>e&&(this.height+=this.y-e,this.y=e),this.width<t-this.x&&(this.width=t-this.x),this.height<e-this.y&&(this.height=e-this.y),this},e._getBoundPoints=function(){var e=t._temB;return e.length=0,0==this.width||0==this.height?e:(e.push(this.x,this.y,this.x+this.width,this.y,this.x,this.y+this.height,this.x+this.width,this.y+this.height),e)},e.isEmpty=function(){return this.width<=0||this.height<=0},__getset(0,e,"right",function(){return this.x+this.width}),__getset(0,e,"bottom",function(){return this.y+this.height}),t._getBoundPointS=function(e,i,n,s){var r=t._temA;return r.length=0,0==n||0==s?r:(r.push(e,i,e+n,i,e,i+s,e+n,i+s),r)},t._getWrapRec=function(e,i){if(!e||e.length<1)return i?i.setTo(0,0,0,0):t.TEMP.setTo(0,0,0,0);i=i||new t;var n,s,r,a,o,h=e.length,l=Point.TEMP;for(r=o=-(s=a=99999),n=0;n<h;n+=2)l.x=e[n],l.y=e[n+1],s=s<l.x?s:l.x,a=a<l.y?a:l.y,r=r>l.x?r:l.x,o=o>l.y?o:l.y;return i.setTo(s,a,r-s,o-a)},t._temB=[],t._temA=[],__static(t,["EMPTY",function(){return this.EMPTY=new t},"TEMP",function(){return this.TEMP=new t}]),t}(),SoundManager=function(){function t(){}return __class(t,"laya.media.SoundManager"),__getset(1,t,"useAudioMusic",function(){return t._useAudioMusic},function(e){t._useAudioMusic=e,e&&(t._musicClass=AudioSound)}),__getset(1,t,"autoStopMusic",function(){return t._autoStopMusic},function(e){Laya.stage.off("blur",null,t._stageOnBlur),Laya.stage.off("focus",null,t._stageOnFocus),Laya.stage.off("visibilitychange",null,t._visibilityChange),t._autoStopMusic=e,e&&(Laya.stage.on("blur",null,t._stageOnBlur),Laya.stage.on("focus",null,t._stageOnFocus),Laya.stage.on("visibilitychange",null,t._visibilityChange))}),__getset(1,t,"muted",function(){return t._muted},function(e){e!=t._muted&&(e&&t.stopAllSound(),t.musicMuted=e,t._muted=e)}),__getset(1,t,"musicMuted",function(){return t._musicMuted},function(e){e!=t._musicMuted&&(e?(t._tMusic&&t._musicChannel&&!t._musicChannel.isStopped?t._musicChannel.pause():t._musicChannel=null,t._musicMuted=e):(t._musicMuted=e,t._tMusic&&t._musicChannel&&t._musicChannel.resume()))}),__getset(1,t,"soundMuted",function(){return t._soundMuted},function(e){t._soundMuted=e}),t.addChannel=function(e){t._channels.indexOf(e)>=0||t._channels.push(e)},t.removeChannel=function(e){var i=0;for(i=t._channels.length-1;i>=0;i--)t._channels[i]==e&&t._channels.splice(i,1)},t.disposeSoundIfNotUsed=function(e){var i=0;for(i=t._channels.length-1;i>=0;i--)if(t._channels[i].url==e)return;t.destroySound(e)},t._visibilityChange=function(){Laya.stage.isVisibility?t._stageOnFocus():t._stageOnBlur()},t._stageOnBlur=function(){t._isActive=!1,t._musicChannel&&(t._musicChannel.isStopped||(t._blurPaused=!0,t._musicLoops=t._musicChannel.loops,t._musicCompleteHandler=t._musicChannel.completeHandler,t._musicPosition=t._musicChannel.position,t._musicChannel.stop(),Laya.stage.once("mousedown",null,t._stageOnFocus))),t.stopAllSound()},t._stageOnFocus=function(){t._isActive=!0,Laya.stage.off("mousedown",null,t._stageOnFocus),t._blurPaused&&(t._tMusic&&t.playMusic(t._tMusic,t._musicLoops,t._musicCompleteHandler,t._musicPosition),t._blurPaused=!1)},t.playSound=function(e,i,n,s,r){if(void 0===i&&(i=1),void 0===r&&(r=0),!t._isActive||!e)return null;if(t._muted)return null;if((e=URL.formatURL(e))==t._tMusic){if(t._musicMuted)return null}else{if(Render.isConchApp){var a=Utils.getFileExtension(e);if("wav"!=a&&"ogg"!=a)return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."),null}if(t._soundMuted)return null}var o;Browser.onMiniGame||(o=Laya.loader.getRes(e)),s||(s=t._soundClass),o||((o=new s).load(e),Loader.cacheRes(e,o));var h;return(h=o.play(r,i))?(h.url=e,h.volume=e==t._tMusic?t.musicVolume:t.soundVolume,h.completeHandler=n,h):null},t.destroySound=function(t){var e=Laya.loader.getRes(t);e&&(Loader.clearRes(t),e.dispose())},t.playMusic=function(e,i,n,s){return void 0===i&&(i=0),void 0===s&&(s=0),e=URL.formatURL(e),t._tMusic=e,t._musicChannel&&t._musicChannel.stop(),t._musicChannel=t.playSound(e,i,n,t._musicClass,s)},t.stopSound=function(e){e=URL.formatURL(e);var i,n=0;for(n=t._channels.length-1;n>=0;n--)(i=t._channels[n]).url==e&&i.stop()},t.stopAll=function(){t._tMusic=null;var e=0;for(e=t._channels.length-1;e>=0;e--)t._channels[e].stop()},t.stopAllSound=function(){var e,i=0;for(i=t._channels.length-1;i>=0;i--)(e=t._channels[i]).url!=t._tMusic&&e.stop()},t.stopMusic=function(){t._musicChannel&&t._musicChannel.stop(),t._tMusic=null},t.setSoundVolume=function(e,i){if(i)i=URL.formatURL(i),t._setVolume(i,e);else{t.soundVolume=e;var n,s=0;for(s=t._channels.length-1;s>=0;s--)(n=t._channels[s]).url!=t._tMusic&&(n.volume=e)}},t.setMusicVolume=function(e){t.musicVolume=e,t._setVolume(t._tMusic,e)},t._setVolume=function(e,i){e=URL.formatURL(e);var n,s=0;for(s=t._channels.length-1;s>=0;s--)(n=t._channels[s]).url==e&&(n.volume=i)},t.musicVolume=1,t.soundVolume=1,t.playbackRate=1,t._useAudioMusic=!0,t._muted=!1,t._soundMuted=!1,t._musicMuted=!1,t._tMusic=null,t._musicChannel=null,t._channels=[],t._autoStopMusic=!1,t._blurPaused=!1,t._isActive=!0,t._musicLoops=0,t._musicPosition=0,t._musicCompleteHandler=null,t._soundClass=null,t._musicClass=null,t.autoReleaseSound=!0,t}(),LocalStorage=function(){function t(){}var e;return __class(t,"laya.net.LocalStorage"),t.__init__=function(){t._baseClass||(t._baseClass=e,e.init()),t.items=t._baseClass.items,t.support=t._baseClass.support},t.setItem=function(e,i){t._baseClass.setItem(e,i)},t.getItem=function(e){return t._baseClass.getItem(e)},t.setJSON=function(e,i){t._baseClass.setJSON(e,i)},t.getJSON=function(e){return t._baseClass.getJSON(e)},t.removeItem=function(e){t._baseClass.removeItem(e)},t.clear=function(){t._baseClass.clear()},t._baseClass=null,t.items=null,t.support=!1,t.__init$=function(){e=function(){function t(){}return __class(t,""),t.init=function(){try{t.items=window.localStorage,t.setItem("laya","1"),t.removeItem("laya"),t.support=!0}catch(t){}t.support||console.log("LocalStorage is not supprot or browser is private mode.")},t.setItem=function(e,i){try{t.support&&t.items.setItem(e,i)}catch(t){console.warn("set localStorage failed",t)}},t.getItem=function(e){return t.support?t.items.getItem(e):null},t.setJSON=function(e,i){try{t.support&&t.items.setItem(e,JSON.stringify(i))}catch(t){console.warn("set localStorage failed",t)}},t.getJSON=function(e){return JSON.parse(t.support?t.items.getItem(e):null)},t.removeItem=function(e){t.support&&t.items.removeItem(e)},t.clear=function(){t.support&&t.items.clear()},t.items=null,t.support=!1,t}()},t}(),ResourceVersion=function(){function t(){}return __class(t,"laya.net.ResourceVersion"),t.enable=function(e,i,n){void 0===n&&(n=2),laya.net.ResourceVersion.type=n,Laya.loader.load(e,Handler.create(null,t.onManifestLoaded,[i]),null,"json"),URL.customFormat=t.addVersionPrefix},t.onManifestLoaded=function(e,i){t.manifest=i,e.run(),i||console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。")},t.addVersionPrefix=function(e){return t.manifest&&t.manifest[e]?2==t.type?t.manifest[e]:t.manifest[e]+"/"+e:e},t.FOLDER_VERSION=1,t.FILENAME_VERSION=2,t.manifest=null,t.type=1,t}(),TTFLoader=function(){function t(){this.fontName=null,this.complete=null,this.err=null,this._fontTxt=null,this._url=null,this._div=null,this._txtWidth=NaN,this._http=null}__class(t,"laya.net.TTFLoader");var e=t.prototype;return e.load=function(t){this._url=t;var e=t.split(".ttf")[0].split("/");this.fontName=e[e.length-1],Browser.window.conch?this._loadConch():Browser.window.FontFace?this._loadWithFontFace():this._loadWithCSS()},e._loadConch=function(){this._http=new HttpRequest,this._http.on("error",this,this._onErr),this._http.on("complete",this,this._onHttpLoaded),this._http.send(this._url,null,"get","arraybuffer")},e._onHttpLoaded=function(t){Browser.window.conch.setFontFaceFromBuffer(this.fontName,t),this._clearHttp(),this._complete()},e._clearHttp=function(){this._http&&(this._http.off("error",this,this._onErr),this._http.off("complete",this,this._onHttpLoaded),this._http=null)},e._onErr=function(){this._clearHttp(),this.err&&(this.err.runWith("fail:"+this._url),this.err=null)},e._complete=function(){Laya.timer.clear(this,this._complete),Laya.timer.clear(this,this._checkComplete),this._div&&this._div.parentNode&&(this._div.parentNode.removeChild(this._div),this._div=null),this.complete&&(this.complete.runWith(this),this.complete=null)},e._checkComplete=function(){RunDriver.measureText("LayaTTFFont",this._fontTxt).width!=this._txtWidth&&this._complete()},e._loadWithFontFace=function(){var t=new Browser.window.FontFace(this.fontName,"url('"+this._url+"')");Browser.window.document.fonts.add(t);var e=this;t.loaded.then(function(){e._complete()}),t.load()},e._createDiv=function(){this._div=Browser.createElement("div"),this._div.innerHTML="laya";var t=this._div.style;t.fontFamily=this.fontName,t.position="absolute",t.left="-100px",t.top="-100px",Browser.document.body.appendChild(this._div)},e._loadWithCSS=function(){var t=this,e=Browser.createElement("style");e.type="text/css",Browser.document.body.appendChild(e),e.textContent="@font-face { font-family:'"+this.fontName+"'; src:url('"+this._url+"');}",this._fontTxt="40px "+this.fontName,this._txtWidth=RunDriver.measureText("LayaTTFFont",this._fontTxt).width;var i=this;e.onload=function(){Laya.timer.once(1e4,i,t._complete)},Laya.timer.loop(20,this,this._checkComplete),this._createDiv()},t._testString="LayaTTFFont",t}(),URL=function(){function t(e){this._url=null,this._path=null,this._url=t.formatURL(e),this._path=t.getPath(e)}__class(t,"laya.net.URL");var e=t.prototype;return __getset(0,e,"path",function(){return this._path}),__getset(0,e,"url",function(){return this._url}),t.formatURL=function(e,i){if(!e)return"null path";if(e.indexOf(":")>0)return e;null!=t.customFormat&&(e=t.customFormat(e,i));var n=e.charAt(0);if("."===n)return t.formatRelativePath((i||t.basePath)+e);if("~"===n)return t.rootPath+e.substring(1);if("d"===n){if(0===e.indexOf("data:image"))return e}else if("/"===n)return e;return(i||t.basePath)+e},t.formatRelativePath=function(t){for(var e=t.split("/"),i=0,n=e.length;i<n;i++)".."==e[i]&&(e.splice(i-1,2),i-=2);return e.join("/")},t.isAbsolute=function(t){return t.indexOf(":")>0||"/"==t.charAt(0)},t.getPath=function(t){var e=t.lastIndexOf("/");return e>0?t.substr(0,e+1):""},t.getFileName=function(t){var e=t.lastIndexOf("/");return e>0?t.substr(e+1):t},t.version={},t.basePath="",t.rootPath="",t.customFormat=function(e){var i=t.version[e];return!Render.isConchApp&&i&&(e+="?v="+i),e},t}(),Render=function(){function t(e,i){function n(){Laya.stage._loop(),Browser.window.requestAnimationFrame(n)}this._timeId=0;var s=t._mainCanvas.source.style;s.position="absolute",s.top=s.left="0px",s.background="#000000",t._mainCanvas.source.id="layaCanvas";var r=laya.renders.Render.isWebGL;t._mainCanvas.source.width=e,t._mainCanvas.source.height=i,r&&t.WebGL.init(t._mainCanvas,e,i),Browser.container.appendChild(t._mainCanvas.source),(t._context=new RenderContext(e,i,r?null:t._mainCanvas)).ctx.setIsMainContext(),Browser.window.requestAnimationFrame(n),Laya.stage.on("visibilitychange",this,this._onVisibilitychange)}__class(t,"laya.renders.Render");var e=t.prototype;return e._onVisibilitychange=function(){Laya.stage.isVisibility?0!=this._timeId&&Browser.window.clearInterval(this._timeId):this._timeId=Browser.window.setInterval(this._enterFrame,1e3)},e._enterFrame=function(t){Laya.stage._loop()},__getset(1,t,"context",function(){return t._context}),__getset(1,t,"canvas",function(){return t._mainCanvas.source}),t._context=null,t._mainCanvas=null,t.WebGL=null,t.isConchNode=!1,t.isConchApp=!1,t.isConchWebGL=!1,t.isWebGL=!1,t.is3DMode=!1,t.optimizeTextureMemory=function(t,e){return!0},t.__init$=function(){window.ConchRenderType=window.ConchRenderType||1,window.ConchRenderType|=window.conch?4:0,t.isConchNode=5==(5&window.ConchRenderType),t.isConchApp=4==(4&window.ConchRenderType),t.isConchWebGL=6==window.ConchRenderType},t}(),RenderContext=function(){function t(e,i,n){this.x=0,this.y=0,this._drawTexture=function(t,e,i){i[0].loaded&&this.ctx.drawTexture(i[0],i[1],i[2],i[3],i[4],t,e)},this._fillTexture=function(t,e,i){i[0].loaded&&this.ctx.fillTexture(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._drawTextureWithTransform=function(t,e,i){i[0].loaded&&this.ctx.drawTextureWithTransform(i[0],i[1],i[2],i[3],i[4],i[5],t,e,i[6])},this._fillQuadrangle=function(t,e,i){this.ctx.fillQuadrangle(i[0],i[1],i[2],i[3],i[4])},this._drawRect=function(t,e,i){var n=this.ctx;null!=i[4]&&(n.fillStyle=i[4],n.fillRect(t+i[0],e+i[1],i[2],i[3],null)),null!=i[5]&&(n.strokeStyle=i[5],n.lineWidth=i[6],n.strokeRect(t+i[0],e+i[1],i[2],i[3],i[6]))},this._drawPie=function(t,e,i){var n=this.ctx;Render.isWebGL&&n.setPathId(i[8]),n.beginPath(),Render.isWebGL?(n.movePath(i[0]+t,i[1]+e),n.moveTo(0,0)):n.moveTo(t+i[0],e+i[1]),n.arc(t+i[0],e+i[1],i[2],i[3],i[4]),n.closePath(),this._fillAndStroke(i[5],i[6],i[7],!0)},this._clipRect=function(t,e,i){this.ctx.clipRect(t+i[0],e+i[1],i[2],i[3])},this._fillRect=function(t,e,i){this.ctx.fillRect(t+i[0],e+i[1],i[2],i[3],i[4])},this._drawCircle=function(e,i,n){var s=this.ctx;Render.isWebGL&&s.setPathId(n[6]),Stat.drawCall++,s.beginPath(),Render.isWebGL&&s.movePath(n[0]+e,n[1]+i),s.arc(n[0]+e,n[1]+i,n[2],0,t.PI2),s.closePath(),this._fillAndStroke(n[3],n[4],n[5],!0)},this._fillCircle=function(e,i,n){Stat.drawCall++;var s=this.ctx;s.beginPath(),s.fillStyle=n[3],s.arc(n[0]+e,n[1]+i,n[2],0,t.PI2),s.fill()},this._setShader=function(t,e,i){this.ctx.setShader(i[0])},this._drawLine=function(t,e,i){var n=this.ctx;Render.isWebGL&&n.setPathId(i[6]),n.beginPath(),n.strokeStyle=i[4],n.lineWidth=i[5],Render.isWebGL?(n.movePath(t,e),n.moveTo(i[0],i[1]),n.lineTo(i[2],i[3])):(n.moveTo(t+i[0],e+i[1]),n.lineTo(t+i[2],e+i[3])),n.stroke()},this._drawLines=function(t,e,i){var n=this.ctx;Render.isWebGL&&n.setPathId(i[5]),n.beginPath(),t+=i[0],e+=i[1],Render.isWebGL&&n.movePath(t,e),n.strokeStyle=i[3],n.lineWidth=i[4];var s=i[2],r=2,a=s.length;if(Render.isWebGL)for(n.moveTo(s[0],s[1]);r<a;)n.lineTo(s[r++],s[r++]);else for(n.moveTo(t+s[0],e+s[1]);r<a;)n.lineTo(t+s[r++],e+s[r++]);n.stroke()},this._drawLinesWebGL=function(t,e,i){this.ctx.drawLines(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4])},this._drawCurves=function(t,e,i){this.ctx.drawCurves(t,e,i)},this._draw=function(t,e,i){i[0].call(null,this,t,e)},this._transformByMatrix=function(t,e,i){this.ctx.transformByMatrix(i[0])},this._setTransform=function(t,e,i){this.ctx.setTransform(i[0],i[1],i[2],i[3],i[4],i[5])},this._setTransformByMatrix=function(t,e,i){this.ctx.setTransformByMatrix(i[0])},this._save=function(t,e,i){this.ctx.save()},this._restore=function(t,e,i){this.ctx.restore()},this._translate=function(t,e,i){this.ctx.translate(i[0],i[1])},this._transform=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e);var n=i[0];this.ctx.transform(n.a,n.b,n.c,n.d,n.tx,n.ty),this.ctx.translate(-t-i[1],-e-i[2])},this._rotate=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e),this.ctx.rotate(i[0]),this.ctx.translate(-t-i[1],-e-i[2])},this._scale=function(t,e,i){this.ctx.translate(i[2]+t,i[3]+e),this.ctx.scale(i[0],i[1]),this.ctx.translate(-t-i[2],-e-i[3])},this._alpha=function(t,e,i){this.ctx.globalAlpha*=i[0]},this._setAlpha=function(t,e,i){this.ctx.globalAlpha=i[0]},this._fillText=function(t,e,i){this.ctx.fillText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5])},this._strokeText=function(t,e,i){this.ctx.strokeText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6])},this._fillBorderText=function(t,e,i){this.ctx.fillBorderText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._blendMode=function(t,e,i){this.ctx.globalCompositeOperation=i[0]},this._beginClip=function(t,e,i){this.ctx.beginClip&&this.ctx.beginClip(t+i[0],e+i[1],i[2],i[3])},this._setIBVB=function(t,e,i){this.ctx.setIBVB(i[0]+t,i[1]+e,i[2],i[3],i[4],i[5],i[6],i[7])},this._fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1]+t,i[2]+e,i[3],i[4])},this._drawPath=function(t,e,i){var n=this.ctx;Render.isWebGL&&n.setPathId(-1),n.beginPath(),t+=i[0],e+=i[1],Render.isWebGL&&n.movePath(t,e);for(var s=i[2],r=0,a=s.length;r<a;r++){var o=s[r];switch(o[0]){case"moveTo":Render.isWebGL?n.moveTo(o[1],o[2]):n.moveTo(t+o[1],e+o[2]);break;case"lineTo":Render.isWebGL?n.lineTo(o[1],o[2]):n.lineTo(t+o[1],e+o[2]);break;case"arcTo":Render.isWebGL?n.arcTo(o[1],o[2],o[3],o[4],o[5]):n.arcTo(t+o[1],e+o[2],t+o[3],e+o[4],o[5]);break;case"closePath":n.closePath()}}var h=i[3];null!=h&&(n.fillStyle=h.fillStyle,n.fill());var l=i[4];null!=l&&(n.strokeStyle=l.strokeStyle,n.lineWidth=l.lineWidth||1,n.lineJoin=l.lineJoin,n.lineCap=l.lineCap,n.miterLimit=l.miterLimit,n.stroke())},this.drawPoly=function(t,e,i){this.ctx.drawPoly(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4],i[5],i[6])},this._drawPoly=function(t,e,i){var n=this.ctx,s=i[2],r=2,a=s.length;if(Render.isWebGL)for(n.setPathId(i[6]),n.beginPath(),t+=i[0],e+=i[1],n.movePath(t,e),n.moveTo(s[0],s[1]);r<a;)n.lineTo(s[r++],s[r++]);else for(n.beginPath(),t+=i[0],e+=i[1],n.moveTo(t+s[0],e+s[1]);r<a;)n.lineTo(t+s[r++],e+s[r++]);n.closePath(),this._fillAndStroke(i[3],i[4],i[5],i[7])},this._drawSkin=function(t,e,i){var n=i[0];if(n){var s=this.ctx;n.render(s,t,e)}},this._drawParticle=function(t,e,i){this.ctx.drawParticle(t+this.x,e+this.y,i[0])},this._setFilters=function(t,e,i){this.ctx.setFilters(i)},n?this.ctx=n.getContext("2d"):(n=HTMLCanvas.create("3D"),this.ctx=RunDriver.createWebGLContext2D(n),n._setContext(this.ctx)),n.size(e,i),this.canvas=n}__class(t,"laya.renders.RenderContext");var e=t.prototype;return e.destroy=function(){this.canvas&&(this.canvas.destroy(),this.canvas=null,this.ctx=null),this.ctx&&(this.ctx.destroy(),this.ctx=null)},e.drawTexture=function(t,e,i,n,s){t.loaded&&this.ctx.drawTexture(t,e,i,n,s,this.x,this.y)},e._drawTextures=function(t,e,i){i[0].loaded&&this.ctx.drawTextures(i[0],i[1],t+this.x,e+this.y)},e.drawTextureWithTransform=function(t,e,i,n,s,r,a){t.loaded&&this.ctx.drawTextureWithTransform(t,e,i,n,s,r,this.x,this.y,a)},e.fillQuadrangle=function(t,e,i,n,s){this.ctx.fillQuadrangle(t,e,i,n,s)},e.drawCanvas=function(t,e,i,n,s){this.ctx.drawCanvas(t,e+this.x,i+this.y,n,s)},e.drawRect=function(t,e,i,n,s,r){void 0===r&&(r=1);var a=this.ctx;a.strokeStyle=s,a.lineWidth=r,a.strokeRect(t+this.x,e+this.y,i,n,r)},e._fillAndStroke=function(t,e,i,n){void 0===n&&(n=!1);var s=this.ctx;null!=t&&(s.fillStyle=t,Render.isWebGL?s.fill(n):s.fill()),null!=e&&i>0&&(s.strokeStyle=e,s.lineWidth=i,s.stroke())},e.clipRect=function(t,e,i,n){this.ctx.clipRect(t+this.x,e+this.y,i,n)},e.fillRect=function(t,e,i,n,s){this.ctx.fillRect(t+this.x,e+this.y,i,n,s)},e.drawCircle=function(e,i,n,s,r){void 0===r&&(r=1),Stat.drawCall++;var a=this.ctx;a.beginPath(),a.strokeStyle=s,a.lineWidth=r,a.arc(e+this.x,i+this.y,n,0,t.PI2),a.stroke()},e.fillCircle=function(e,i,n,s){Stat.drawCall++;var r=this.ctx;r.beginPath(),r.fillStyle=s,r.arc(e+this.x,i+this.y,n,0,t.PI2),r.fill()},e.setShader=function(t){this.ctx.setShader(t)},e.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var a=this.ctx;a.beginPath(),a.strokeStyle=s,a.lineWidth=r,a.moveTo(this.x+t,this.y+e),a.lineTo(this.x+i,this.y+n),a.stroke()},e.clear=function(){this.ctx.clear()},e.transformByMatrix=function(t){this.ctx.transformByMatrix(t)},e.setTransform=function(t,e,i,n,s,r){this.ctx.setTransform(t,e,i,n,s,r)},e.setTransformByMatrix=function(t){this.ctx.setTransformByMatrix(t)},e.save=function(){this.ctx.save()},e.restore=function(){this.ctx.restore()},e.translate=function(t,e){this.ctx.translate(t,e)},e.transform=function(t,e,i,n,s,r){this.ctx.transform(t,e,i,n,s,r)},e.rotate=function(t){this.ctx.rotate(t)},e.scale=function(t,e){this.ctx.scale(t,e)},e.alpha=function(t){this.ctx.globalAlpha*=t},e.setAlpha=function(t){this.ctx.globalAlpha=t},e.fillWords=function(t,e,i,n,s,r){void 0===r&&(r=0),this.ctx.fillWords(t,e,i,n,s,r)},e.fillBorderWords=function(t,e,i,n,s,r,a){this.ctx.fillBorderWords(t,e,i,n,s,r,a)},e.fillText=function(t,e,i,n,s,r){this.ctx.fillText(t,e+this.x,i+this.y,n,s,r)},e.strokeText=function(t,e,i,n,s,r,a){this.ctx.strokeText(t,e+this.x,i+this.y,n,s,r,a)},e.blendMode=function(t){this.ctx.globalCompositeOperation=t},e.flush=function(){this.ctx.flush&&this.ctx.flush()},e.addRenderObject=function(t){this.ctx.addRenderObject(t)},e.beginClip=function(t,e,i,n){this.ctx.beginClip&&this.ctx.beginClip(t,e,i,n)},e.endClip=function(){this.ctx.endClip&&this.ctx.endClip()},e.fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1],i[2],i[3],i.length>4?i[4]:null)},__static(t,["PI2",function(){return this.PI2=2*Math.PI}]),t}(),RenderSprite=function(){function t(e,i){switch(this._next=i||t.NORENDER,e){case 0:return void(this._fun=this._no);case 1:return void(this._fun=this._image);case 2:return void(this._fun=this._alpha);case 4:return void(this._fun=this._transform);case 8:return void(this._fun=this._blend);case 16:return void(this._fun=this._canvas);case 64:return void(this._fun=this._mask);case 128:return void(this._fun=this._clip);case 256:return void(this._fun=this._style);case 512:return void(this._fun=this._graphics);case 2048:return void(this._fun=this._childs);case 1024:return void(this._fun=this._custom);case 513:case 517:return void(this._fun=this._image2);case 32:return void(this._fun=Filter._filter);case 69905:return void(this._fun=t._initRenderFun)}this.onCreate(e)}__class(t,"laya.renders.RenderSprite");var e=t.prototype;return e.onCreate=function(t){},e._style=function(t,e,i,n){t._style.render(t,e,i,n);var s=this._next;s._fun.call(s,t,e,i,n)},e._no=function(t,e,i,n){},e._custom=function(t,e,i,n){t.customRender(e,i,n);var s=t._style._tf;this._next._fun.call(this._next,t,e,i-s.translateX,n-s.translateY)},e._clip=function(e,i,n,s){var r=this._next;if(r!=t.NORENDER){var a=e._style.scrollRect;i.ctx.save(),i.ctx.clipRect(n,s,a.width,a.height),r._fun.call(r,e,i,n-a.x,s-a.y),i.ctx.restore()}},e._blend=function(t,e,i,n){var s=t._style;s.blendMode&&(e.ctx.globalCompositeOperation=s.blendMode);var r=this._next;r._fun.call(r,t,e,i,n),e.ctx.globalCompositeOperation="source-over"},e._mask=function(t,e,i,n){var s=this._next;s._fun.call(s,t,e,i,n);var r=t.mask;r&&(e.ctx.globalCompositeOperation="destination-in",(r.numChildren>0||!r.graphics._isOnlyOne())&&(r.cacheAsBitmap=!0),r.render(e,i-t.pivotX,n-t.pivotY)),e.ctx.globalCompositeOperation="source-over"},e._graphics=function(t,e,i,n){var s=t._style._tf;t._graphics&&t._graphics._render(t,e,i-s.translateX,n-s.translateY);var r=this._next;r._fun.call(r,t,e,i,n)},e._image=function(t,e,i,n){var s=t._style;e.ctx.drawTexture2(i,n,s._tf.translateX,s._tf.translateY,t.transform,s.alpha,s.blendMode,t._graphics._one)},e._image2=function(t,e,i,n){var s=t._style._tf;e.ctx.drawTexture2(i,n,s.translateX,s.translateY,t.transform,1,null,t._graphics._one)},e._alpha=function(t,e,i,n){var s;if((s=t._style.alpha)>.01||t._needRepaint()){var r=e.ctx.globalAlpha;e.ctx.globalAlpha*=s;var a=this._next;a._fun.call(a,t,e,i,n),e.ctx.globalAlpha=r}},e._transform=function(e,i,n,s){var r=e.transform,a=this._next;r&&a!=t.NORENDER?(i.save(),i.transform(r.a,r.b,r.c,r.d,r.tx+n,r.ty+s),a._fun.call(a,e,i,0,0),i.restore()):a._fun.call(a,e,i,n,s)},e._childs=function(t,e,i,n){var s=t._style,r=s._tf;if(i=i-r.translateX+s.paddingLeft,n=n-r.translateY+s.paddingTop,s._calculation){var a=t._getWords();if(a){var o=s;o&&(o.stroke?e.fillBorderWords(a,i,n,o.font,o.color,o.strokeColor,o.stroke):e.fillWords(a,i,n,o.font,o.color,o.underLine))}}var h,l=t._childs,c=l.length;if(t.viewport||t.optimizeScrollRect&&t._style.scrollRect){var u=t.viewport||t._style.scrollRect,_=u.x,d=u.y,f=u.right,p=u.bottom,g=NaN,m=NaN;for(v=0;v<c;++v)(h=l[v]).visible&&(g=h._x)<f&&g+h.width>_&&(m=h._y)<p&&m+h.height>d&&h.render(e,i,n)}else for(var v=0;v<c;++v)(h=l[v])._style.visible&&h.render(e,i,n)},e._canvas=function(t,e,i,n){var s=t._$P.cacheCanvas;if(s){"bitmap"===s.type?Stat.canvasBitmap++:Stat.canvasNormal++;var r=s.ctx;if(t._needRepaint()||!r)this._canvas_repaint(t,e,i,n);else{var a=s._cacheRec;e.drawCanvas(r.canvas,i+a.x,n+a.y,a.width,a.height)}}else this._next._fun.call(this._next,t,e,i,n)},e._canvas_repaint=function(t,e,i,n){var s=t._$P.cacheCanvas,r=this._next;if(s){var a,o,h,l,c=s.ctx,u=t._needRepaint()||!c,_=s.type;if("bitmap"===_?Stat.canvasBitmap++:Stat.canvasNormal++,u){s._cacheRec||(s._cacheRec=new Rectangle);var d,f;Render.isWebGL&&"bitmap"!==_?s._cacheRec.setTo(-t.pivotX,-t.pivotY,1,1):((l=t.getSelfBounds()).x=l.x-t.pivotX,l.y=l.y-t.pivotY,l.x=l.x-16,l.y=l.y-16,l.width=l.width+32,l.height=l.height+32,l.x=Math.floor(l.x+i)-i,l.y=Math.floor(l.y+n)-n,l.width=Math.floor(l.width),l.height=Math.floor(l.height),s._cacheRec.copyFrom(l)),l=s._cacheRec;var p=Render.isWebGL?1:Browser.pixelRatio*Laya.stage.clientScaleX,g=Render.isWebGL?1:Browser.pixelRatio*Laya.stage.clientScaleY;if(!Render.isWebGL){var m,v=1,y=1;for(m=t;m&&m!=Laya.stage;)v*=m.scaleX,y*=m.scaleY,m=m.parent;Render.isWebGL?(v<1&&(p*=v),y<1&&(g*=y)):(v>1&&(p*=v),y>1&&(g*=y))}if(t.scrollRect){var w=t.scrollRect;l.x-=w.x,l.y-=w.y}if(d=l.width*p,f=l.height*g,o=l.x,h=l.y,Render.isWebGL&&"bitmap"===_&&(d>2048||f>2048))return console.warn("cache bitmap size larger than 2048,cache ignored"),s.ctx&&(Pool.recover("RenderContext",s.ctx),s.ctx.canvas.size(0,0),s.ctx=null),void r._fun.call(r,t,e,i,n);c||(c=s.ctx=Pool.getItem("RenderContext")||new RenderContext(d,f,HTMLCanvas.create("AUTO"))),c.ctx.sprite=t,(a=c.canvas).clear(),(a.width!=d||a.height!=f)&&a.size(d,f),"bitmap"===_?a.context.asBitmap=!0:"normal"===_&&(a.context.asBitmap=!1);var x;if(1!=p||1!=g){var T=c.ctx;T.save(),T.scale(p,g),!Render.isConchWebGL&&Render.isConchApp&&(x=t._$P.cf)&&T.setFilterMatrix&&T.setFilterMatrix(x._mat,x._alpha),r._fun.call(r,t,c,-o,-h),T.restore(),Render.isConchApp&&!Render.isConchWebGL||t._applyFilters()}else T=c.ctx,!Render.isConchWebGL&&Render.isConchApp&&(x=t._$P.cf)&&T.setFilterMatrix&&T.setFilterMatrix(x._mat,x._alpha),r._fun.call(r,t,c,-o,-h),Render.isConchApp&&!Render.isConchWebGL||t._applyFilters();t._$P.staticCache&&(s.reCache=!1),Stat.canvasReCache++}else o=(l=s._cacheRec).x,h=l.y,a=c.canvas;e.drawCanvas(a,i+o,n+h,l.width,l.height)}else r._fun.call(r,t,c,i,n)},t.__init__=function(){var e,i=0,n=0;for(e=RunDriver.createRenderSprite(69905,null),n=t.renders.length=4096,i=0;i<n;i++)t.renders[i]=e;t.renders[0]=RunDriver.createRenderSprite(0,null),function(e,i){for(var n=0,s=0;s<e.length;s++)n|=e[s],t.renders[n]=i}([1,512,4,2],new t(1,null)),t.renders[513]=RunDriver.createRenderSprite(513,null),t.renders[517]=new t(517,null)},t._initRenderFun=function(e,i,n,s){var r=e._renderType;(t.renders[r]=t._getTypeRender(r))._fun(e,i,n,s)},t._getTypeRender=function(t){for(var e=null,i=2048;i>1;)i&t&&(e=RunDriver.createRenderSprite(i,e)),i>>=1;return e},t.IMAGE=1,t.ALPHA=2,t.TRANSFORM=4,t.BLEND=8,t.CANVAS=16,t.FILTERS=32,t.MASK=64,t.CLIP=128,t.STYLE=256,t.GRAPHICS=512,t.CUSTOM=1024,t.CHILDS=2048,t.INIT=69905,t.renders=[],__static(t,["NORENDER",function(){return this.NORENDER=new t(0,null)}]),t}(),Context=function(){function t(){this._repaint=!1}__class(t,"laya.resource.Context");var e=t.prototype;return e.replaceReset=function(){var e=0,i=0;i=t.replaceKeys.length;var n;for(e=0;e<i;e++)n=t.replaceKeys[e],this[t.newKeys[e]]=this[n]},e.replaceResotre=function(){this.__restore(),this.__reset()},e.setIsMainContext=function(){},e.drawTextures=function(t,e,i,n){Stat.drawCall+=e.length/2;for(var s=t.width,r=t.height,a=0,o=e.length;a<o;a+=2)this.drawTexture(t,e[a],e[a+1],s,r,i,n)},e.drawCanvas=function(t,e,i,n,s){Stat.drawCall++,this.drawImage(t.source,e,i,n,s)},e.fillRect=function(t,e,i,n,s){Stat.drawCall++,s&&(this.fillStyle=s),this.__fillRect(t,e,i,n)},e.fillText=function(t,e,i,n,s,r){Stat.drawCall++,arguments.length>3&&null!=n&&(this.font=n,this.fillStyle=s,this.textAlign=r,this.textBaseline="top"),this.__fillText(t,e,i)},e.fillBorderText=function(t,e,i,n,s,r,a,o){Stat.drawCall++,this.font=n,this.fillStyle=s,this.textBaseline="top",this.strokeStyle=r,this.lineWidth=a,this.textAlign=o,this.__strokeText(t,e,i),this.__fillText(t,e,i)},e.strokeText=function(t,e,i,n,s,r,a){Stat.drawCall++,arguments.length>3&&null!=n&&(this.font=n,this.strokeStyle=s,this.lineWidth=r,this.textAlign=a,this.textBaseline="top"),this.__strokeText(t,e,i)},e.transformByMatrix=function(t){this.transform(t.a,t.b,t.c,t.d,t.tx,t.ty)},e.setTransformByMatrix=function(t){this.setTransform(t.a,t.b,t.c,t.d,t.tx,t.ty)},e.clipRect=function(t,e,i,n){Stat.drawCall++,this.beginPath(),this.rect(t,e,i,n),this.clip()},e.drawTexture=function(t,e,i,n,s,r,a){Stat.drawCall++;var o=t.uv,h=t.bitmap.width,l=t.bitmap.height;this.drawImage(t.source,o[0]*h,o[1]*l,(o[2]-o[0])*h,(o[5]-o[3])*l,e+r,i+a,n,s)},e.drawTextureWithTransform=function(t,e,i,n,s,r,a,o,h){Stat.drawCall++;var l=t.uv,c=t.bitmap.width,u=t.bitmap.height;this.save(),1!=h&&(this.globalAlpha*=h),r?(this.transform(r.a,r.b,r.c,r.d,r.tx+a,r.ty+o),this.drawImage(t.source,l[0]*c,l[1]*u,(l[2]-l[0])*c,(l[5]-l[3])*u,e,i,n,s)):this.drawImage(t.source,l[0]*c,l[1]*u,(l[2]-l[0])*c,(l[5]-l[3])*u,e+a,i+o,n,s),this.restore()},e.drawTexture2=function(t,e,i,n,s,r,a,o){"use strict";var h=o[0];if(h.loaded&&h.bitmap&&h.source){Stat.drawCall++;var l=1!==r;if(l){var c=this.globalAlpha;this.globalAlpha*=r}var u=h.uv,_=h.bitmap.width,d=h.bitmap.height;s?(this.save(),this.transform(s.a,s.b,s.c,s.d,s.tx+t,s.ty+e),this.drawImage(h.source,u[0]*_,u[1]*d,(u[2]-u[0])*_,(u[5]-u[3])*d,o[1]-i,o[2]-n,o[3],o[4]),this.restore()):this.drawImage(h.source,u[0]*_,u[1]*d,(u[2]-u[0])*_,(u[5]-u[3])*d,o[1]-i+t,o[2]-n+e,o[3],o[4]),l&&(this.globalAlpha=c)}},e.fillTexture=function(t,e,i,n,s,r,a,o){if(!o.pat){if(t.uv!=Texture.DEF_UV){var h=new HTMLCanvas("2D");h.getContext("2d"),h.size(t.width,t.height),h.context.drawTexture(t,0,0,t.width,t.height,0,0),t=new Texture(h)}o.pat=this.createPattern(t.bitmap.source,r)}var l=e,c=i,u=0,_=0;a&&(l+=a.x%t.width,c+=a.y%t.height,u-=a.x%t.width,_-=a.y%t.height),this.translate(l,c),this.fillRect(u,_,n,s,o.pat),this.translate(-l,-c)},e.flush=function(){return 0},e.fillWords=function(t,e,i,n,s,r){n&&(this.font=n),s&&(this.fillStyle=s);this.textBaseline="top",this.textAlign="left";for(var a=0,o=t.length;a<o;a++){var h=t[a];if(this.__fillText(h.char,h.x+e,h.y+i),1===r){var l=h.height,c=.5*h.style.letterSpacing;c||(c=0),this.beginPath(),this.strokeStyle=s,this.lineWidth=1,this.moveTo(e+h.x-c+.5,i+h.y+l+.5),this.lineTo(e+h.x+h.width+c+.5,i+h.y+l+.5),this.stroke()}}},e.fillBorderWords=function(t,e,i,n,s,r,a){n&&(this.font=n),s&&(this.fillStyle=s),this.textBaseline="top",this.lineWidth=a,this.textAlign="left",this.strokeStyle=r;for(var o=0,h=t.length;o<h;o++){var l=t[o];this.__strokeText(l.char,l.x+e,l.y+i),this.__fillText(l.char,l.x+e,l.y+i)}},e.destroy=function(){this.canvas.width=this.canvas.height=0},e.clear=function(){this.clearRect(0,0,this._canvas.width,this._canvas.height),this._repaint=!1},e.drawCurves=function(t,e,i){this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var n=i[2];t+=i[0],e+=i[1],this.moveTo(t+n[0],e+n[1]);for(var s=2,r=n.length;s<r;)this.quadraticCurveTo(t+n[s++],e+n[s++],t+n[s++],e+n[s++]);this.stroke()},t.__init__=function(e){if(!t._inited){t._inited=!0;var i=laya.resource.Context.prototype;(e=e||CanvasRenderingContext2D.prototype).__fillText=e.fillText,e.__fillRect=e.fillRect,e.__strokeText=e.strokeText;["drawTextures","fillWords","fillBorderWords","setIsMainContext","fillRect","strokeText","fillTexture","fillText","transformByMatrix","setTransformByMatrix","clipRect","drawTexture","drawTexture2","drawTextureWithTransform","flush","clear","destroy","drawCanvas","fillBorderText","drawCurves"].forEach(function(t){e[t]=i[t]})}},t.replaceCanvasGetSet=function(t,e){var i=Object.getOwnPropertyDescriptor(t,e);if(!i||!i.configurable)return!1;var n,s={};for(n in i)"set"!=n&&(s[n]=i[n]);var r=i.set;return s.set=function(t){r.call(this,t);var e=this.getContext("2d");e&&"__reset"in e&&e.__reset()},Object.defineProperty(t,e,s),!0},t.replaceGetSet=function(e,i){var n=Object.getOwnPropertyDescriptor(e,i);if(!n||!n.configurable)return!1;var s,r={};for(s in n)"set"!=s&&(r[s]=n[s]);var a=n.set,o="___"+i+"__";return t.newKeys.push(o),r.set=function(t){t!=this[o]&&(this[o]=t,a.call(this,t))},Object.defineProperty(e,i,r),!0},t.newKeys=[],t._inited=!1,__static(t,["_default",function(){return this._default=new t},"replaceKeys",function(){return this.replaceKeys=["font","fillStyle","textBaseline"]}]),t}(),ResourceManager=function(){function t(e){this._id=0,this._name=null,this._resources=null,this._memorySize=0,this._garbageCollectionRate=NaN,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=0,this._id=++t._uniqueIDCounter,this._name=e||"Content Manager",t._isResourceManagersSorted=!1,this._memorySize=0,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=536870912,this._garbageCollectionRate=.2,t._resourceManagers.push(this),this._resources=[]}__class(t,"laya.resource.ResourceManager");var e=t.prototype;return Laya.imps(e,{"laya.resource.IDispose":!0}),e.getResourceByIndex=function(t){return this._resources[t]},e.getResourcesLength=function(){return this._resources.length},e.addResource=function(t){t.resourceManager&&t.resourceManager.removeResource(t);return-1===this._resources.indexOf(t)&&(t._resourceManager=this,this._resources.push(t),this.addSize(t.memorySize),!0)},e.removeResource=function(t){var e=this._resources.indexOf(t);return-1!==e&&(this._resources.splice(e,1),t._resourceManager=null,this._memorySize-=t.memorySize,!0)},e.unload=function(){for(var t=this._resources.slice(0,this._resources.length),e=0;e<t.length;e++){t[e].destroy()}t.length=0},e.dispose=function(){if(this===t._systemResourceManager)throw new Error("systemResourceManager不能被释放！");t._resourceManagers.splice(t._resourceManagers.indexOf(this),1),t._isResourceManagersSorted=!1;for(var e=this._resources.slice(0,this._resources.length),i=0;i<e.length;i++){var n=e[i];n.resourceManager.removeResource(n),n.destroy()}e.length=0},e.addSize=function(t){t&&(this.autoRelease&&t>0&&this._memorySize+t>this.autoReleaseMaxSize&&this.garbageCollection((1-this._garbageCollectionRate)*this.autoReleaseMaxSize),this._memorySize+=t)},e.garbageCollection=function(t){var e=this._resources;(e=e.slice()).sort(function(t,e){if(!t||!e)throw new Error("a或b不能为空！");return t.released&&e.released?0:t.released?1:e.released?-1:t._lastUseFrameCount-e._lastUseFrameCount});for(var i=Stat.loopCount,n=0,s=e.length;n<s;n++){var r=e[n];if(!(i-r._lastUseFrameCount>1))return void(this._memorySize>=t&&(this._isOverflow=!0));if(r.releaseResource(),this._memorySize<t)return void(this._isOverflow=!1)}},__getset(0,e,"id",function(){return this._id}),__getset(0,e,"name",function(){return this._name},function(e){!e&&""===e||this._name===e||(this._name=e,t._isResourceManagersSorted=!1)}),__getset(0,e,"memorySize",function(){return this._memorySize}),__getset(1,t,"systemResourceManager",function(){return t._systemResourceManager}),t.__init__=function(){t.currentResourceManager=t.systemResourceManager},t.getLoadedResourceManagerByIndex=function(e){return t._resourceManagers[e]},t.getLoadedResourceManagersCount=function(){return t._resourceManagers.length},t.recreateContentManagers=function(e){void 0===e&&(e=!1);for(var i=t.currentResourceManager,n=0;n<t._resourceManagers.length;n++){t.currentResourceManager=t._resourceManagers[n];for(var s=0;s<t.currentResourceManager._resources.length;s++)t.currentResourceManager._resources[s].releaseResource(e),t.currentResourceManager._resources[s].activeResource(e)}t.currentResourceManager=i},t.releaseContentManagers=function(e){void 0===e&&(e=!1);for(var i=t.currentResourceManager,n=0;n<t._resourceManagers.length;n++){t.currentResourceManager=t._resourceManagers[n];for(var s=0;s<t.currentResourceManager._resources.length;s++){var r=t.currentResourceManager._resources[s];!r.released&&r.releaseResource(e)}}t.currentResourceManager=i},t._uniqueIDCounter=0,t._isResourceManagersSorted=!1,t._resourceManagers=[],__static(t,["_systemResourceManager",function(){return this._systemResourceManager=new t("System Resource Manager")},"currentResourceManager",function(){return this.currentResourceManager=t._systemResourceManager}]),t}(),System=function(){function System(){}return __class(System,"laya.system.System"),System.changeDefinition=function(name,classObj){Laya[name]=classObj;var str=name+"=classObj";eval(str)},System.__init__=function(){Render.isConchApp&&(conch.disableConchResManager(),conch.disableConchAutoRestoreLostedDevice())},System}(),Browser=function(){function t(){}return __class(t,"laya.utils.Browser"),__getset(1,t,"pixelRatio",function(){return t.__init__(),t.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)")>-1?2:RunDriver.getPixelRatio()}),__getset(1,t,"height",function(){return t.__init__(),(Laya.stage&&Laya.stage.canvasRotation?t.clientWidth:t.clientHeight)*t.pixelRatio}),__getset(1,t,"clientWidth",function(){return t.__init__(),t.window.innerWidth||t.document.body.clientWidth}),__getset(1,t,"window",function(){return t.__init__(),t._window}),__getset(1,t,"clientHeight",function(){return t.__init__(),t.window.innerHeight||t.document.body.clientHeight||t.document.documentElement.clientHeight}),__getset(1,t,"width",function(){return t.__init__(),(Laya.stage&&Laya.stage.canvasRotation?t.clientHeight:t.clientWidth)*t.pixelRatio}),__getset(1,t,"container",function(){return t.__init__(),t._container||((t._container=t.createElement("div")).id="layaContainer",t.document.body.appendChild(t._container)),t._container},function(e){t._container=e}),__getset(1,t,"document",function(){return t.__init__(),t._document}),t.__init__=function(){t._window||(t._window=RunDriver.getWindow(),t._document=t.window.document,t._window.addEventListener("message",function(t){laya.utils.Browser._onMessage(t)},!1),t.document.__createElement=t.document.createElement,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},t.userAgent=t.window.navigator.userAgent,t.onIOS=!!(t.u=t.userAgent).match(/\(i[^;]+;(U;)? CPU.+Mac OS X/),t.onMobile=t.u.indexOf("Mobile")>-1,t.onIPhone=t.u.indexOf("iPhone")>-1,t.onMac=t.u.indexOf("Mac OS X")>-1,t.onIPad=t.u.indexOf("iPad")>-1,t.onAndriod=t.u.indexOf("Android")>-1||t.u.indexOf("Adr")>-1,t.onWP=t.u.indexOf("Windows Phone")>-1,t.onQQBrowser=t.u.indexOf("QQBrowser")>-1,t.onMQQBrowser=t.u.indexOf("MQQBrowser")>-1||t.u.indexOf("Mobile")>-1&&t.u.indexOf("QQ")>-1,t.onIE=!!t.window.ActiveXObject||"ActiveXObject"in t.window,t.onWeiXin=t.u.indexOf("MicroMessenger")>-1,t.onPC=!t.onMobile,t.onSafari=!!t.u.match(/Version\/\d+\.\d\x20Mobile\/\S+\x20Safari/),t.onFirefox=t.u.indexOf("Firefox")>-1,t.onEdge=t.u.indexOf("Edge")>-1,t.onMiniGame=t.u.indexOf("MiniGame")>-1,t.httpProtocol="http:"==t.window.location.protocol,t.onMiniGame&&null==t.window.focus&&console.error("请先初始化小游戏适配库，详细教程https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"),t.webAudioEnabled=!!(t.window.AudioContext||t.window.webkitAudioContext||t.window.mozAudioContext),t.soundType=t.webAudioEnabled?"WEBAUDIOSOUND":"AUDIOSOUND",Sound=t.webAudioEnabled?WebAudioSound:AudioSound,t.webAudioEnabled&&WebAudioSound.initWebAudio(),AudioSound._initMusicAudio(),t.enableTouch="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,window.focus(),SoundManager._soundClass=Sound,Render._mainCanvas=Render._mainCanvas||HTMLCanvas.create("2D"),t.canvas||(t.canvas=HTMLCanvas.create("2D"),t.context=t.canvas.getContext("2d")))},t._onMessage=function(e){if(e.data&&"size"==e.data.name){if(t.window.innerWidth=e.data.width,t.window.innerHeight=e.data.height,t.window.__innerHeight=e.data.clientHeight,!t.document.createEvent)return void console.warn("no document.createEvent");var i=t.document.createEvent("HTMLEvents");return i.initEvent("resize",!1,!1),void t.window.dispatchEvent(i)}},t.createElement=function(e){return t.__init__(),t.document.__createElement(e)},t.getElementById=function(e){return t.__init__(),t.document.getElementById(e)},t.removeElement=function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},t.now=function(){return RunDriver.now()},t._window=null,t._document=null,t._container=null,t.userAgent=null,t.u=null,t.onIOS=!1,t.onMac=!1,t.onMobile=!1,t.onIPhone=!1,t.onIPad=!1,t.onAndriod=!1,t.onAndroid=!1,t.onWP=!1,t.onQQBrowser=!1,t.onMQQBrowser=!1,t.onSafari=!1,t.onFirefox=!1,t.onEdge=!1,t.onIE=!1,t.onWeiXin=!1,t.onMiniGame=!1,t.onPC=!1,t.httpProtocol=!1,t.webAudioEnabled=!1,t.soundType=null,t.enableTouch=!1,t.canvas=null,t.context=null,t.__init$=function(){},t}(),Byte=function(){function t(t){this._xd_=!0,this._allocated_=8,this._pos_=0,this._length=0,t?(this._u8d_=new Uint8Array(t),this._d_=new DataView(this._u8d_.buffer),this._length=this._d_.byteLength):this.___resizeBuffer(this._allocated_)}__class(t,"laya.utils.Byte");var e=t.prototype;return e.___resizeBuffer=function(t){try{var e=new Uint8Array(t);null!=this._u8d_&&(this._u8d_.length<=t?e.set(this._u8d_):e.set(this._u8d_.subarray(0,t))),this._u8d_=e,this._d_=new DataView(e.buffer)}catch(e){throw"___resizeBuffer err:"+t}},e.getString=function(){return this.rUTF(this.getUint16())},e.getFloat32Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Float32Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getUint8Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Uint8Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getInt16Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Int16Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getFloat32=function(){if(this._pos_+4>this._length)throw"getFloat32 error - Out of bounds";var t=this._d_.getFloat32(this._pos_,this._xd_);return this._pos_+=4,t},e.getFloat64=function(){if(this._pos_+8>this._length)throw"getFloat64 error - Out of bounds";var t=this._d_.getFloat64(this._pos_,this._xd_);return this._pos_+=8,t},e.writeFloat32=function(t){this.ensureWrite(this._pos_+4),this._d_.setFloat32(this._pos_,t,this._xd_),this._pos_+=4},e.writeFloat64=function(t){this.ensureWrite(this._pos_+8),this._d_.setFloat64(this._pos_,t,this._xd_),this._pos_+=8},e.getInt32=function(){if(this._pos_+4>this._length)throw"getInt32 error - Out of bounds";var t=this._d_.getInt32(this._pos_,this._xd_);return this._pos_+=4,t},e.getUint32=function(){if(this._pos_+4>this._length)throw"getUint32 error - Out of bounds";var t=this._d_.getUint32(this._pos_,this._xd_);return this._pos_+=4,t},e.writeInt32=function(t){this.ensureWrite(this._pos_+4),this._d_.setInt32(this._pos_,t,this._xd_),this._pos_+=4},e.writeUint32=function(t){this.ensureWrite(this._pos_+4),this._d_.setUint32(this._pos_,t,this._xd_),this._pos_+=4},e.getInt16=function(){if(this._pos_+2>this._length)throw"getInt16 error - Out of bounds";var t=this._d_.getInt16(this._pos_,this._xd_);return this._pos_+=2,t},e.getUint16=function(){if(this._pos_+2>this._length)throw"getUint16 error - Out of bounds";var t=this._d_.getUint16(this._pos_,this._xd_);return this._pos_+=2,t},e.writeUint16=function(t){this.ensureWrite(this._pos_+2),this._d_.setUint16(this._pos_,t,this._xd_),this._pos_+=2},e.writeInt16=function(t){this.ensureWrite(this._pos_+2),this._d_.setInt16(this._pos_,t,this._xd_),this._pos_+=2},e.getUint8=function(){if(this._pos_+1>this._length)throw"getUint8 error - Out of bounds";return this._d_.getUint8(this._pos_++)},e.writeUint8=function(t){this.ensureWrite(this._pos_+1),this._d_.setUint8(this._pos_,t),this._pos_++},e._getUInt8=function(t){return this._d_.getUint8(t)},e._getUint16=function(t){return this._d_.getUint16(t,this._xd_)},e._getMatrix=function(){return new Matrix(this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32())},e.rUTF=function(t){for(var e="",i=this._pos_+t,n=0,s=String.fromCharCode,r=this._u8d_;this._pos_<i;)(n=r[this._pos_++])<128?0!=n&&(e+=s(n)):e+=s(n<224?(63&n)<<6|127&r[this._pos_++]:n<240?(31&n)<<12|(127&r[this._pos_++])<<6|127&r[this._pos_++]:(15&n)<<18|(127&r[this._pos_++])<<12|r[this._pos_++]<<6&127|127&r[this._pos_++]),0;return e},e.getCustomString=function(t){for(var e="",i=0,n=0,s=String.fromCharCode,r=this._u8d_;t>0;)if((n=r[this._pos_])<128)e+=s(n),this._pos_++,t--;else for(i=n-128,this._pos_++,t-=i;i>0;)n=r[this._pos_++],e+=s(r[this._pos_++]<<8|n),i--;return e},e.clear=function(){this._pos_=0,this.length=0},e.__getBuffer=function(){return this._d_.buffer},e.writeUTFBytes=function(t){for(var e=0,i=(t+="").length;e<i;e++){var n=t.charCodeAt(e);n<=127?this.writeByte(n):n<=2047?(this.ensureWrite(this._pos_+2),this._u8d_.set([192|n>>6,128|63&n],this._pos_),this._pos_+=2):n<=65535?(this.ensureWrite(this._pos_+3),this._u8d_.set([224|n>>12,128|n>>6&63,128|63&n],this._pos_),this._pos_+=3):(this.ensureWrite(this._pos_+4),this._u8d_.set([240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n],this._pos_),this._pos_+=4)}},e.writeUTFString=function(t){var e=this.pos;this.writeUint16(1),this.writeUTFBytes(t);var i=this.pos-e-2;if(i>=65536)throw"writeUTFString byte len more than 65536";this._d_.setUint16(e,i,this._xd_)},e.readUTFString=function(){return this.readUTFBytes(this.getUint16())},e.getUTFString=function(){return this.readUTFString()},e.readUTFBytes=function(t){if(void 0===t&&(t=-1),0==t)return"";var e=this.bytesAvailable;if(t>e)throw"readUTFBytes error - Out of bounds";return t=t>0?t:e,this.rUTF(t)},e.getUTFBytes=function(t){return void 0===t&&(t=-1),this.readUTFBytes(t)},e.writeByte=function(t){this.ensureWrite(this._pos_+1),this._d_.setInt8(this._pos_,t),this._pos_+=1},e.readByte=function(){if(this._pos_+1>this._length)throw"readByte error - Out of bounds";return this._d_.getInt8(this._pos_++)},e.getByte=function(){return this.readByte()},e.ensureWrite=function(t){this._length<t&&(this._length=t),this._allocated_<t&&(this.length=t)},e.writeArrayBuffer=function(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),e<0||i<0)throw"writeArrayBuffer error - Out of bounds";0==i&&(i=t.byteLength-e),this.ensureWrite(this._pos_+i);var n=new Uint8Array(t);this._u8d_.set(n.subarray(e,e+i),this._pos_),this._pos_+=i},__getset(0,e,"buffer",function(){var t=this._d_.buffer;return t.byteLength==this.length?t:t.slice(0,this.length)}),__getset(0,e,"endian",function(){return this._xd_?"littleEndian":"bigEndian"},function(t){this._xd_="littleEndian"==t}),__getset(0,e,"length",function(){return this._length},function(t){this._allocated_<t?this.___resizeBuffer(this._allocated_=Math.floor(Math.max(t,2*this._allocated_))):this._allocated_>t&&this.___resizeBuffer(this._allocated_=t),this._length=t}),__getset(0,e,"pos",function(){return this._pos_},function(t){this._pos_=t}),__getset(0,e,"bytesAvailable",function(){return this._length-this._pos_}),t.getSystemEndian=function(){if(!t._sysEndian){var e=new ArrayBuffer(2);new DataView(e).setInt16(0,256,!0),t._sysEndian=256===new Int16Array(e)[0]?"littleEndian":"bigEndian"}return t._sysEndian},t.BIG_ENDIAN="bigEndian",t.LITTLE_ENDIAN="littleEndian",t._sysEndian=null,t}(),CacheManager=function(){function t(){}return __class(t,"laya.utils.CacheManager"),t.regCacheByFunction=function(e,i){t.unRegCacheByFunction(e,i);var n;n={tryDispose:e,getCacheList:i},t._cacheList.push(n)},t.unRegCacheByFunction=function(e,i){var n=0,s=0;for(s=t._cacheList.length,n=0;n<s;n++)if(t._cacheList[n].tryDispose==e&&t._cacheList[n].getCacheList==i)return void t._cacheList.splice(n,1)},t.forceDispose=function(){var e=0,i=t._cacheList.length;for(e=0;e<i;e++)t._cacheList[e].tryDispose(!0)},t.beginCheck=function(e){void 0===e&&(e=15e3),Laya.timer.loop(e,null,t._checkLoop)},t.stopCheck=function(){Laya.timer.clear(null,t._checkLoop)},t._checkLoop=function(){var e=t._cacheList;if(!(e.length<1)){var i=Browser.now(),n=0,s=0;for(s=n=e.length;n>0&&(t._index++,t._index=t._index%s,e[t._index].tryDispose(!1),!(Browser.now()-i>t.loopTimeLimit));)n--}},t.loopTimeLimit=2,t._cacheList=[],t._index=0,t}(),ClassUtils=function(){function t(){}return __class(t,"laya.utils.ClassUtils"),t.regClass=function(e,i){t._classMap[e]=i},t.getRegClass=function(e){return t._classMap[e]},t.getInstance=function(e){var i=t.getClass(e);return i?new i:(console.warn("[error] Undefined class:",e),null)},t.createByJson=function(e,i,n,s,r){"string"==typeof e&&(e=JSON.parse(e));var a=e.props;if(!i&&!(i=r?r.runWith(e):t.getInstance(a.runtime||e.type)))return null;var o=e.child;if(o)for(var h=0,l=o.length;h<l;h++){var c=o[h];if("render"!==c.props.name&&"render"!==c.props.renderType||!i._$set_itemRender)if("Graphic"==c.type)t.addGraphicsToSprite(c,i);else if(t.isDrawType(c.type))t.addGraphicToSprite(c,i,!0);else{var u=t.createByJson(c,null,n,s,r);"Script"==c.type?u.hasOwnProperty("owner")?u.owner=i:u.hasOwnProperty("target")&&(u.target=i):"mask"==c.props.renderType?i.mask=u:i.addChild(u)}else i.itemRender=c}if(a)for(var _ in a){var d=a[_];"var"===_&&n?n[d]=i:d instanceof Array&&"function"==typeof i[_]?i[_].apply(i,d):i[_]=d}return s&&e.customProps&&s.runWith([i,e]),i.created&&i.created(),i},t.addGraphicsToSprite=function(e,i){var n;if((n=e.child)&&!(n.length<1)){var s;s=t._getGraphicsFromSprite(e,i);var r=0,a=0;e.props&&(r=t._getObjVar(e.props,"x",0),a=t._getObjVar(e.props,"y",0)),0!=r&&0!=a&&s.translate(r,a);var o=0,h=0;for(h=n.length,o=0;o<h;o++)t._addGraphicToGraphics(n[o],s);0!=r&&0!=a&&s.translate(-r,-a)}},t.addGraphicToSprite=function(e,i,n){void 0===n&&(n=!1);var s;s=n?t._getGraphicsFromSprite(e,i):i.graphics,t._addGraphicToGraphics(e,s)},t._getGraphicsFromSprite=function(t,e){var i;if(!t||!t.props)return e.graphics;var n;switch(n=t.props.renderType){case"hit":case"unHit":var s;e.hitArea||(e.hitArea=new HitArea),(s=e.hitArea)[n]||(s[n]=new Graphics),i=s[n]}return i||(i=e.graphics),i},t._getTransformData=function(e){var i;(e.hasOwnProperty("pivotX")||e.hasOwnProperty("pivotY"))&&(i=i||new Matrix).translate(-t._getObjVar(e,"pivotX",0),-t._getObjVar(e,"pivotY",0));var n=t._getObjVar(e,"scaleX",1),s=t._getObjVar(e,"scaleY",1),r=t._getObjVar(e,"rotation",0);t._getObjVar(e,"skewX",0),t._getObjVar(e,"skewY",0);return 1==n&&1==s&&0==r||((i=i||new Matrix).scale(n,s),i.rotate(.0174532922222222*r)),i},t._addGraphicToGraphics=function(e,i){var n;if(n=e.props){var s;if(s=t.DrawTypeDic[e.type]){var r;r=i;var a,o=t._getParams(n,s[1],s[2],s[3]);((a=t._tM)||1!=t._alpha)&&(r.save(),a&&r.transform(a),1!=t._alpha&&r.alpha(t._alpha)),r[s[0]].apply(r,o),(a||1!=t._alpha)&&r.restore()}}},t._adptLineData=function(t){return t[2]=parseFloat(t[0])+parseFloat(t[2]),t[3]=parseFloat(t[1])+parseFloat(t[3]),t},t._adptTextureData=function(t){return t[0]=Loader.getRes(t[0]),t},t._adptLinesData=function(e){return e[2]=t._getPointListByStr(e[2]),e},t.isDrawType=function(e){return"Image"!=e&&t.DrawTypeDic.hasOwnProperty(e)},t._getParams=function(e,i,n,s){void 0===n&&(n=0);var r;(r=t._temParam).length=i.length;var a=0,o=0;for(o=i.length,a=0;a<o;a++)r[a]=t._getObjVar(e,i[a][0],i[a][1]);t._alpha=t._getObjVar(e,"alpha",1);var h;return(h=t._getTransformData(e))?(n||(n=0),h.translate(r[n],r[n+1]),r[n]=r[n+1]=0,t._tM=h):t._tM=null,s&&t[s]&&(r=t[s](r)),r},t._getPointListByStr=function(t){var e,i=0,n=0;for(n=(e=t.split(",")).length,i=0;i<n;i++)e[i]=parseFloat(e[i]);return e},t._getObjVar=function(t,e,i){return t.hasOwnProperty(e)?t[e]:i},t._temParam=[],t.getClass=function(e){var i=t._classMap[e]||e;return"string"==typeof i?Laya.__classmap[i]:i},t._tM=null,t._alpha=NaN,__static(t,["DrawTypeDic",function(){return this.DrawTypeDic={Rect:["drawRect",[["x",0],["y",0],["width",0],["height",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Circle:["drawCircle",[["x",0],["y",0],["radius",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Pie:["drawPie",[["x",0],["y",0],["radius",0],["startAngle",0],["endAngle",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Image:["drawTexture",[["x",0],["y",0],["width",0],["height",0]]],Texture:["drawTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0]],1,"_adptTextureData"],FillTexture:["fillTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0],["repeat",null]],1,"_adptTextureData"],FillText:["fillText",[["text",""],["x",0],["y",0],["font",null],["color",null],["textAlign",null]],1],Line:["drawLine",[["x",0],["y",0],["toX",0],["toY",0],["lineColor",null],["lineWidth",0]],0,"_adptLineData"],Lines:["drawLines",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Curves:["drawCurves",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Poly:["drawPoly",[["x",0],["y",0],["points",""],["fillColor",null],["lineColor",null],["lineWidth",1]],0,"_adptLinesData"]}},"_classMap",function(){return this._classMap={Sprite:"laya.display.Sprite",Text:"laya.display.Text",Animation:"laya.display.Animation",Skeleton:"laya.ani.bone.Skeleton",Particle2D:"laya.particle.Particle2D",div:"laya.html.dom.HTMLDivElement",p:"laya.html.dom.HTMLElement",img:"laya.html.dom.HTMLImageElement",span:"laya.html.dom.HTMLElement",br:"laya.html.dom.HTMLBrElement",style:"laya.html.dom.HTMLStyleElement",font:"laya.html.dom.HTMLElement",a:"laya.html.dom.HTMLElement","#text":"laya.html.dom.HTMLElement"}}]),t}(),Color=function(){function t(e){if(this._color=[],"string"==typeof e){this.strColor=e,null===e&&(e="#000000"),"#"==e.charAt(0)&&(e=e.substr(1));var i=e.length;if(3==i||4==i){for(var n="",s=0;s<i;s++)n+=e[s]+e[s];e=n}var r=this.numColor=parseInt(e,16);if(8==e.length)return void(this._color=[parseInt(e.substr(0,2),16)/255,((16711680&r)>>16)/255,((65280&r)>>8)/255,(255&r)/255])}else r=this.numColor=e,this.strColor=Utils.toHexColor(r);this._color=[((16711680&r)>>16)/255,((65280&r)>>8)/255,(255&r)/255,1],this._color.__id=++t._COLODID}return __class(t,"laya.utils.Color"),t._initDefault=function(){t._DEFAULT={};for(var e in t._COLOR_MAP)t._SAVE[e]=t._DEFAULT[e]=new t(t._COLOR_MAP[e]);return t._DEFAULT},t._initSaveMap=function(){t._SAVE_SIZE=0,t._SAVE={};for(var e in t._DEFAULT)t._SAVE[e]=t._DEFAULT[e]},t.create=function(e){var i=t._SAVE[e+""];return null!=i?i:(t._SAVE_SIZE<1e3||t._initSaveMap(),t._SAVE[e+""]=new t(e))},t._SAVE={},t._SAVE_SIZE=0,t._COLODID=1,__static(t,["_COLOR_MAP",function(){return this._COLOR_MAP={white:"#FFFFFF",red:"#FF0000",green:"#00FF00",blue:"#0000FF",black:"#000000",yellow:"#FFFF00",gray:"#AAAAAA"}},"_DEFAULT",function(){return this._DEFAULT=t._initDefault()}]),t}(),Dictionary=function(){function t(){this._values=[],this._keys=[]}__class(t,"laya.utils.Dictionary");var e=t.prototype;return e.set=function(t,e){var i=this.indexOf(t);i>=0?this._values[i]=e:(this._keys.push(t),this._values.push(e))},e.indexOf=function(t){var e=this._keys.indexOf(t);return e>=0?e:(t="string"==typeof t?Number(t):"number"==typeof t?t.toString():t,this._keys.indexOf(t))},e.get=function(t){var e=this.indexOf(t);return e<0?null:this._values[e]},e.remove=function(t){var e=this.indexOf(t);return e>=0&&(this._keys.splice(e,1),this._values.splice(e,1),!0)},e.clear=function(){this._values.length=0,this._keys.length=0},__getset(0,e,"values",function(){return this._values}),__getset(0,e,"keys",function(){return this._keys}),t}(),Dragging=function(){function t(){this.ratio=.92,this.maxOffset=60,this._dragging=!1,this._clickOnly=!0}__class(t,"laya.utils.Dragging");var e=t.prototype;return e.start=function(t,e,i,n,s,r,a,o){void 0===o&&(o=.92),this.clearTimer(),this.target=t,this.area=e,this.hasInertia=i,this.elasticDistance=e?n:0,this.elasticBackTime=s,this.data=r,this._disableMouseEvent=a,this.ratio=o,1!=t.globalScaleX||1!=t.globalScaleY?this._parent=t.parent:this._parent=Laya.stage,this._clickOnly=!0,this._dragging=!0,this._elasticRateX=this._elasticRateY=1,this._lastX=this._parent.mouseX,this._lastY=this._parent.mouseY,Laya.stage.on("mouseup",this,this.onStageMouseUp),Laya.stage.on("mouseout",this,this.onStageMouseUp),Laya.timer.frameLoop(1,this,this.loop)},e.clearTimer=function(){Laya.timer.clear(this,this.loop),Laya.timer.clear(this,this.tweenMove),this._tween&&(this._tween.recover(),this._tween=null)},e.stop=function(){this._dragging&&(MouseManager.instance.disableMouseEvent=!1,Laya.stage.off("mouseup",this,this.onStageMouseUp),Laya.stage.off("mouseout",this,this.onStageMouseUp),this._dragging=!1,this.target&&this.area&&this.backToArea(),this.clear())},e.loop=function(){var t=this._parent.getMousePoint(),e=t.x,i=t.y,n=e-this._lastX,s=i-this._lastY;if(this._clickOnly){if(!(Math.abs(n*Laya.stage._canvasTransform.getScaleX())>1||Math.abs(s*Laya.stage._canvasTransform.getScaleY())>1))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this.target.event("dragstart",this.data),MouseManager.instance.disableMouseEvent=this._disableMouseEvent,this.target._set$P("$_MOUSEDOWN",!1)}else this._offsets.push(n,s);0===n&&0===s||(this._lastX=e,this._lastY=i,this.target.x+=n*this._elasticRateX,this.target.y+=s*this._elasticRateY,this.area&&this.checkArea(),this.target.event("dragmove",this.data))},e.checkArea=function(){if(this.elasticDistance<=0)this.backToArea();else{if(this.target.x<this.area.x)var t=this.area.x-this.target.x;else t=this.target.x>this.area.x+this.area.width?this.target.x-this.area.x-this.area.width:0;if(this._elasticRateX=Math.max(0,1-t/this.elasticDistance),this.target.y<this.area.y)var e=this.area.y-this.target.y;else e=this.target.y>this.area.y+this.area.height?this.target.y-this.area.y-this.area.height:0;this._elasticRateY=Math.max(0,1-e/this.elasticDistance)}},e.backToArea=function(){this.target.x=Math.min(Math.max(this.target.x,this.area.x),this.area.x+this.area.width),this.target.y=Math.min(Math.max(this.target.y,this.area.y),this.area.y+this.area.height)},e.onStageMouseUp=function(t){if(MouseManager.instance.disableMouseEvent=!1,Laya.stage.off("mouseup",this,this.onStageMouseUp),Laya.stage.off("mouseout",this,this.onStageMouseUp),Laya.timer.clear(this,this.loop),!this._clickOnly&&this.target)if(this.hasInertia){this._offsets.length<1&&this._offsets.push(this._parent.mouseX-this._lastX,this._parent.mouseY-this._lastY),this._offsetX=this._offsetY=0;for(var e=this._offsets.length,i=Math.min(e,6),n=this._offsets.length-i,s=e-1;s>n;s--)this._offsetY+=this._offsets[s--],this._offsetX+=this._offsets[s];this._offsetX=this._offsetX/i*2,this._offsetY=this._offsetY/i*2,Math.abs(this._offsetX)>this.maxOffset&&(this._offsetX=this._offsetX>0?this.maxOffset:-this.maxOffset),Math.abs(this._offsetY)>this.maxOffset&&(this._offsetY=this._offsetY>0?this.maxOffset:-this.maxOffset),Laya.timer.frameLoop(1,this,this.tweenMove)}else this.elasticDistance>0?this.checkElastic():this.clear()},e.checkElastic=function(){var t=NaN,e=NaN;if(this.target.x<this.area.x?t=this.area.x:this.target.x>this.area.x+this.area.width&&(t=this.area.x+this.area.width),this.target.y<this.area.y?e=this.area.y:this.target.y>this.area.y+this.area.height&&(e=this.area.y+this.area.height),isNaN(t)&&isNaN(e))this.clear();else{var i={};isNaN(t)||(i.x=t),isNaN(e)||(i.y=e),this._tween=Tween.to(this.target,i,this.elasticBackTime,Ease.sineOut,Handler.create(this,this.clear),0,!1,!1)}},e.tweenMove=function(){this._offsetX*=this.ratio*this._elasticRateX,this._offsetY*=this.ratio*this._elasticRateY,this.target.x+=this._offsetX,this.target.y+=this._offsetY,this.area&&this.checkArea(),this.target.event("dragmove",this.data),(Math.abs(this._offsetX)<1&&Math.abs(this._offsetY)<1||this._elasticRateX<.5||this._elasticRateY<.5)&&(Laya.timer.clear(this,this.tweenMove),this.elasticDistance>0?this.checkElastic():this.clear())},e.clear=function(){if(this.target){this.clearTimer();var t=this.target;this.target=null,this._parent=null,t.event("dragend",this.data)}},t}(),Ease=function(){function t(){}return __class(t,"laya.utils.Ease"),t.linearNone=function(t,e,i,n){return i*t/n+e},t.linearIn=function(t,e,i,n){return i*t/n+e},t.linearInOut=function(t,e,i,n){return i*t/n+e},t.linearOut=function(t,e,i,n){return i*t/n+e},t.bounceIn=function(e,i,n,s){return n-t.bounceOut(s-e,0,n,s)+i},t.bounceInOut=function(e,i,n,s){return e<.5*s?.5*t.bounceIn(2*e,0,n,s)+i:.5*t.bounceOut(2*e-s,0,n,s)+.5*n+i},t.bounceOut=function(t,e,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},t.backIn=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*(t/=n)*t*((s+1)*t-s)+e},t.backInOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),(t/=.5*n)<1?.5*i*(t*t*((1+(s*=1.525))*t-s))+e:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},t.backOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+e},t.elasticIn=function(e,i,n,s,r,a){void 0===r&&(r=0),void 0===a&&(a=0);var o;return 0==e?i:1==(e/=s)?i+n:(a||(a=.3*s),!r||n>0&&r<n||n<0&&r<-n?(r=n,o=a/4):o=a/t.PI2*Math.asin(n/r),-r*Math.pow(2,10*(e-=1))*Math.sin((e*s-o)*t.PI2/a)+i)},t.elasticInOut=function(e,i,n,s,r,a){void 0===r&&(r=0),void 0===a&&(a=0);var o;return 0==e?i:2==(e/=.5*s)?i+n:(a||(a=s*(.3*1.5)),!r||n>0&&r<n||n<0&&r<-n?(r=n,o=a/4):o=a/t.PI2*Math.asin(n/r),e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e*s-o)*t.PI2/a)*-.5+i:r*Math.pow(2,-10*(e-=1))*Math.sin((e*s-o)*t.PI2/a)*.5+n+i)},t.elasticOut=function(e,i,n,s,r,a){void 0===r&&(r=0),void 0===a&&(a=0);var o;return 0==e?i:1==(e/=s)?i+n:(a||(a=.3*s),!r||n>0&&r<n||n<0&&r<-n?(r=n,o=a/4):o=a/t.PI2*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin((e*s-o)*t.PI2/a)+n+i)},t.strongIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},t.strongInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},t.strongOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},t.sineInOut=function(t,e,i,n){return.5*-i*(Math.cos(Math.PI*t/n)-1)+e},t.sineIn=function(e,i,n,s){return-n*Math.cos(e/s*t.HALF_PI)+n+i},t.sineOut=function(e,i,n,s){return n*Math.sin(e/s*t.HALF_PI)+i},t.quintIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},t.quintInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},t.quintOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},t.quartIn=function(t,e,i,n){return i*(t/=n)*t*t*t+e},t.quartInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t+e:.5*-i*((t-=2)*t*t*t-2)+e},t.quartOut=function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e},t.cubicIn=function(t,e,i,n){return i*(t/=n)*t*t+e},t.cubicInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t+e:.5*i*((t-=2)*t*t+2)+e},t.cubicOut=function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},t.quadIn=function(t,e,i,n){return i*(t/=n)*t+e},t.quadInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t+e:.5*-i*(--t*(t-2)-1)+e},t.quadOut=function(t,e,i,n){return-i*(t/=n)*(t-2)+e},t.expoIn=function(t,e,i,n){return 0==t?e:i*Math.pow(2,10*(t/n-1))+e-.001*i},t.expoInOut=function(t,e,i,n){return 0==t?e:t==n?e+i:(t/=.5*n)<1?.5*i*Math.pow(2,10*(t-1))+e:.5*i*(2-Math.pow(2,-10*--t))+e},t.expoOut=function(t,e,i,n){return t==n?e+i:i*(1-Math.pow(2,-10*t/n))+e},t.circIn=function(t,e,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+e},t.circInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*-i*(Math.sqrt(1-t*t)-1)+e:.5*i*(Math.sqrt(1-(t-=2)*t)+1)+e},t.circOut=function(t,e,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+e},__static(t,["HALF_PI",function(){return this.HALF_PI=.5*Math.PI},"PI2",function(){return this.PI2=2*Math.PI}]),t}(),HitArea=function(){function t(){this._hit=null,this._unHit=null}__class(t,"laya.utils.HitArea");var e=t.prototype;return e.isHit=function(e,i){return!!t.isHitGraphic(e,i,this.hit)&&!t.isHitGraphic(e,i,this.unHit)},e.contains=function(t,e){return this.isHit(t,e)},__getset(0,e,"hit",function(){return this._hit||(this._hit=new Graphics),this._hit},function(t){this._hit=t}),__getset(0,e,"unHit",function(){return this._unHit||(this._unHit=new Graphics),this._unHit},function(t){this._unHit=t}),t.isHitGraphic=function(e,i,n){if(!n)return!1;var s;if(!(s=n.cmds)&&n._one&&((s=t._cmds).length=1,s[0]=n._one),!s)return!1;var r=0,a=0;a=s.length;var o;for(r=0;r<a;r++)if(o=s[r]){var h=Render._context;switch(o.callee){case h._translate:case 6:e-=o[0],i-=o[1]}if(t.isHitCmd(e,i,o))return!0}return!1},t.isHitCmd=function(e,i,n){if(!n)return!1;var s=Render._context,r=!1;switch(n.callee){case s._drawRect:case 13:t._rec.setTo(n[0],n[1],n[2],n[3]),r=t._rec.contains(e,i);break;case s._drawCircle:case s._fillCircle:case 14:r=(e-=n[0])*e+(i-=n[1])*i<n[2]*n[2];break;case s._drawPoly:case 18:e-=n[0],i-=n[1],r=t.ptInPolygon(e,i,n[2])}return r},t.ptInPolygon=function(e,i,n){var s;(s=t._ptPoint).setTo(e,i);var r=0,a=NaN,o=NaN,h=NaN,l=NaN,c=0;c=n.length;for(var u=0;u<c;u+=2)if(a=n[u],o=n[u+1],h=n[(u+2)%c],l=n[(u+3)%c],o!=l&&!(s.y<Math.min(o,l)||s.y>=Math.max(o,l))){(s.y-o)*(h-a)/(l-o)+a>s.x&&r++}return r%2==1},t._cmds=[],__static(t,["_rec",function(){return this._rec=new Rectangle},"_ptPoint",function(){return this._ptPoint=new Point}]),t}(),HTMLChar=function(){function t(e,i,n,s){this.char=e,this.charNum=e.charCodeAt(0),this._x=this._y=0,this.width=i,this.height=n,this.style=s,this.isWord=!t._isWordRegExp.test(e)}__class(t,"laya.utils.HTMLChar");var e=t.prototype;return Laya.imps(e,{"laya.display.ILayout":!0}),e.setSprite=function(t){this._sprite=t},e.getSprite=function(){return this._sprite},e._isChar=function(){return!0},e._getCSSStyle=function(){return this.style},__getset(0,e,"width",function(){return this._w},function(t){this._w=t}),__getset(0,e,"x",function(){return this._x},function(t){this._sprite&&(this._sprite.x=t),this._x=t}),__getset(0,e,"y",function(){return this._y},function(t){this._sprite&&(this._sprite.y=t),this._y=t}),__getset(0,e,"height",function(){return this._h},function(t){this._h=t}),__static(t,["_isWordRegExp",function(){return this._isWordRegExp=new RegExp("[\\w.]","")}]),t}(),Log=function(){function t(){}return __class(t,"laya.utils.Log"),t.enable=function(){t._logdiv||(t._logdiv=Browser.window.document.createElement("div"),Browser.window.document.body.appendChild(t._logdiv),t._logdiv.style.cssText="pointer-events:none;border:white;overflow:hidden;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;")},t.toggle=function(){var e=t._logdiv.style;"1px"==e.width?e.width=e.height="50%":e.width=e.height="1px"},t.print=function(e){t._logdiv&&(t._count>=t.maxCount&&t.clear(),t._count++,t._logdiv.innerText+=e+"\n",t._logdiv.scrollTop=t._logdiv.scrollHeight)},t.clear=function(){t._logdiv.innerText="",t._count=0},t._logdiv=null,t._count=0,t.maxCount=20,t}(),Mouse=function(){function t(){}return __class(t,"laya.utils.Mouse"),__getset(1,t,"cursor",function(){return t._style.cursor},function(e){t._style.cursor=e}),t.hide=function(){"none"!=t.cursor&&(t._preCursor=t.cursor,t.cursor="none")},t.show=function(){"none"==t.cursor&&(t.cursor=t._preCursor?t._preCursor:"auto")},t._preCursor=null,__static(t,["_style",function(){return this._style=Browser.document.body.style}]),t}(),Pool=function(){function t(){}return __class(t,"laya.utils.Pool"),t.getPoolBySign=function(e){return t._poolDic[e]||(t._poolDic[e]=[])},t.clearBySign=function(e){t._poolDic[e]&&(t._poolDic[e].length=0)},t.recover=function(e,i){i.__InPool||(i.__InPool=!0,t.getPoolBySign(e).push(i))},t.getItemByClass=function(e,i){var n=t.getPoolBySign(e),s=n.length?n.pop():new i;return s.__InPool=!1,s},t.getItemByCreateFun=function(e,i){var n=t.getPoolBySign(e),s=n.length?n.pop():i();return s.__InPool=!1,s},t.getItem=function(e){var i=t.getPoolBySign(e),n=i.length?i.pop():null;return n&&(n.__InPool=!1),n},t._poolDic={},t.InPoolSign="__InPool",t}(),PoolCache=function(){function t(){this.sign=null,this.maxCount=1e3}__class(t,"laya.utils.PoolCache");var e=t.prototype;return e.getCacheList=function(){return Pool.getPoolBySign(this.sign)},e.tryDispose=function(t){var e;(e=Pool.getPoolBySign(this.sign)).length>this.maxCount&&e.splice(this.maxCount,e.length-this.maxCount)},t.addPoolCacheManager=function(e,i){void 0===i&&(i=100);var n;(n=new t).sign=e,n.maxCount=i,CacheManager.regCacheByFunction(Utils.bind(n.tryDispose,n),Utils.bind(n.getCacheList,n))},t}(),Stat=function(){function t(){}return __class(t,"laya.utils.Stat"),__getset(1,t,"onclick",null,function(e){t._sp&&t._sp.on("click",t._sp,e),t._canvas&&(t._canvas.source.onclick=e,t._canvas.source.style.pointerEvents="")}),t.show=function(e,i){void 0===e&&(e=0),void 0===i&&(i=0),Render.isConchApp?Browser.window.conch.showFPS&&Browser.window.conch.showFPS(e,i):(Browser.onMiniGame||(t._useCanvas=!0),t._show=!0,t._fpsData.length=60,t._view[0]={title:"FPS(Canvas)",value:"_fpsStr",color:"yellow",units:"int"},t._view[1]={title:"Sprite",value:"_spriteStr",color:"white",units:"int"},t._view[2]={title:"DrawCall",value:"drawCall",color:"white",units:"int"},t._view[3]={title:"CurMem",value:"currentMemorySize",color:"yellow",units:"M"},Render.isWebGL?(t._view[4]={title:"Shader",value:"shaderCall",color:"white",units:"int"},Render.is3DMode?(t._view[0].title="FPS(3D)",t._view[5]={title:"TriFaces",value:"trianglesFaces",color:"white",units:"int"},t._view[6]={title:"treeNodeColl",value:"treeNodeCollision",color:"white",units:"int"},t._view[7]={title:"treeSpriteColl",value:"treeSpriteCollision",color:"white",units:"int"}):(t._view[0].title="FPS(WebGL)",t._view[5]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"})):t._view[4]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"},t._useCanvas?t.createUIPre(e,i):t.createUI(e,i),t.enable())},t.createUIPre=function(e,i){var n=Browser.pixelRatio;t._width=130*n,t._vx=75*n,t._height=n*(12*t._view.length+3*n)+4,t._fontSize=12*n;for(var s=0;s<t._view.length;s++)t._view[s].x=4,t._view[s].y=s*t._fontSize+2*n;t._canvas||((t._canvas=new HTMLCanvas("2D")).size(t._width,t._height),(t._ctx=t._canvas.getContext("2d")).textBaseline="top",t._ctx.font=t._fontSize+"px Sans-serif",t._canvas.source.style.cssText="pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:"+e+"px;top:"+i+"px;width:"+t._width/n+"px;height:"+t._height/n+"px;"),t._first=!0,t.loop(),t._first=!1,Browser.container.appendChild(t._canvas.source)},t.createUI=function(e,i){var n=t._sp,s=Browser.pixelRatio;n||(n=new Sprite,(t._leftText=new Text).pos(5,5),t._leftText.color="#ffffff",n.addChild(t._leftText),(t._txt=new Text).pos(80*s,5),t._txt.color="#ffffff",n.addChild(t._txt),t._sp=n),n.pos(e,i);for(var r="",a=0;a<t._view.length;a++){r+=t._view[a].title+"\n"}t._leftText.text=r;var o=138*s,h=s*(12*t._view.length+3*s)+4;t._txt.fontSize=t._fontSize*s,t._leftText.fontSize=t._fontSize*s,n.size(o,h),n.graphics.clear(),n.graphics.setAlpha(.5),n.graphics.drawRect(0,0,o,h,"#999999"),n.graphics.setAlpha(1),t.loop()},t.enable=function(){Laya.timer.frameLoop(1,t,t.loop)},t.hide=function(){t._show=!1,Laya.timer.clear(t,t.loop),t._canvas&&Browser.removeElement(t._canvas.source)},t.clear=function(){t.trianglesFaces=t.drawCall=t.shaderCall=t.spriteCount=t.spriteRenderUseCacheCount=t.treeNodeCollision=t.treeSpriteCollision=t.canvasNormal=t.canvasBitmap=t.canvasReCache=0},t.loop=function(){t._count++;var e=Browser.now();if(!(e-t._timer<1e3)){var i=t._count;if(t.FPS=Math.round(1e3*i/(e-t._timer)),t._show){t.trianglesFaces=Math.round(t.trianglesFaces/i),t._useCanvas?(t.drawCall=Math.round(t.drawCall/i)-2,t.shaderCall=Math.round(t.shaderCall/i),t.spriteCount=Math.round(t.spriteCount/i)-1):(t.drawCall=Math.round(t.drawCall/i)-2,t.shaderCall=Math.round(t.shaderCall/i)-4,t.spriteCount=Math.round(t.spriteCount/i)-4),t.spriteRenderUseCacheCount=Math.round(t.spriteRenderUseCacheCount/i),t.canvasNormal=Math.round(t.canvasNormal/i),t.canvasBitmap=Math.round(t.canvasBitmap/i),t.canvasReCache=Math.ceil(t.canvasReCache/i),t.treeNodeCollision=Math.round(t.treeNodeCollision/i),t.treeSpriteCollision=Math.round(t.treeSpriteCollision/i);var n=t.FPS>0?Math.floor(1e3/t.FPS).toString():" ";t._fpsStr=t.FPS+(t.renderSlow?" slow":"")+" "+n,t._spriteStr=t.spriteCount+(t.spriteRenderUseCacheCount?"/"+t.spriteRenderUseCacheCount:""),t._canvasStr=t.canvasReCache+"/"+t.canvasNormal+"/"+t.canvasBitmap,t.currentMemorySize=ResourceManager.systemResourceManager.memorySize,t._useCanvas?t.renderInfoPre():t.renderInfo(),t.clear()}t._count=0,t._timer=e}},t.renderInfoPre=function(){if(t._canvas){var e=t._ctx;e.clearRect(t._first?0:t._vx,0,t._width,t._height);for(var i=0;i<t._view.length;i++){var n=t._view[i];t._first&&(e.fillStyle="white",e.fillText(n.title,n.x,n.y,null,null,null)),e.fillStyle=n.color;var s=t[n.value];"M"==n.units&&(s=Math.floor(s/1048576*100)/100+" M"),e.fillText(s+"",n.x+t._vx,n.y,null,null,null)}}},t.renderInfo=function(){for(var e="",i=0;i<t._view.length;i++){var n=t._view[i],s=t[n.value];"M"==n.units&&(s=Math.floor(s/1048576*100)/100+" M"),"K"==n.units&&(s=Math.floor(s/1024*100)/100+" K"),e+=s+"\n"}t._txt.text=e},t.FPS=0,t.loopCount=0,t.shaderCall=0,t.drawCall=0,t.trianglesFaces=0,t.spriteCount=0,t.spriteRenderUseCacheCount=0,t.treeNodeCollision=0,t.treeSpriteCollision=0,t.canvasNormal=0,t.canvasBitmap=0,t.canvasReCache=0,t.renderSlow=!1,t.currentMemorySize=0,t._fpsStr=null,t._canvasStr=null,t._spriteStr=null,t._fpsData=[],t._timer=0,t._count=0,t._view=[],t._fontSize=12,t._txt=null,t._leftText=null,t._sp=null,t._show=!1,t._useCanvas=!1,t._canvas=null,t._ctx=null,t._first=!1,t._vx=NaN,t._width=0,t._height=100,t}(),StringKey=function(){function t(){this._strsToID={},this._idToStrs=[],this._length=0}__class(t,"laya.utils.StringKey");var e=t.prototype;return e.add=function(t){var e=this._strsToID[t];return null!=e?e:(this._idToStrs[this._length]=t,this._strsToID[t]=this._length++)},e.getID=function(t){var e=this._strsToID[t];return null==e?-1:e},e.getName=function(t){var e=this._idToStrs[t];return null==e?void 0:e},t}(),Timer=function(){function t(){this._delta=0,this.scale=1,this.currFrame=0,this._mid=1,this._map=[],this._laters=[],this._handlers=[],this._temp=[],this._count=0,this.currTimer=this._now(),this._lastTimer=this._now(),this._init()}var e;__class(t,"laya.utils.Timer");var i=t.prototype;return i._init=function(){Laya.timer&&Laya.timer.frameLoop(1,this,this._update)},i._now=function(){return Date.now()},i._update=function(){if(this.scale<=0)this._lastTimer=this._now();else{var t=this.currFrame=this.currFrame+this.scale,e=this._now();this._delta=(e-this._lastTimer)*this.scale;var i=this.currTimer=this.currTimer+this._delta;this._lastTimer=e;var n=this._handlers;for(this._count=0,a=0,o=n.length;a<o;a++)if(null!==(h=n[a]).method){var s=h.userFrame?t:i;if(s>=h.exeTime)if(h.repeat)if(h.jumpFrame)for(;s>=h.exeTime;)h.exeTime+=h.delay,h.run(!1);else h.exeTime+=h.delay,h.run(!1),s>h.exeTime&&(h.exeTime+=Math.ceil((s-h.exeTime)/h.delay)*h.delay);else h.run(!0)}else this._count++;(this._count>30||t%200==0)&&this._clearHandlers();for(var r=this._laters,a=0,o=r.length-1;a<=o;a++){var h=r[a];null!==h.method&&(this._map[h.key]=null,h.run(!1)),this._recoverHandler(h),a===o&&(o=r.length-1)}r.length=0}},i._clearHandlers=function(){for(var t=this._handlers,e=0,i=t.length;e<i;e++){var n=t[e];null!==n.method?this._temp.push(n):this._recoverHandler(n)}this._handlers=this._temp,this._temp=t,this._temp.length=0},i._recoverHandler=function(e){this._map[e.key]==e&&(this._map[e.key]=null),e.clear(),t._pool.push(e)},i._create=function(i,n,s,r,a,o,h){if(!s)return a.apply(r,o),null;if(h){var l=this._getHandler(r,a);if(l)return l.repeat=n,l.userFrame=i,l.delay=s,l.caller=r,l.method=a,l.args=o,l.exeTime=s+(i?this.currFrame:this.currTimer+this._now()-this._lastTimer),l}return l=t._pool.length>0?t._pool.pop():new e,l.repeat=n,l.userFrame=i,l.delay=s,l.caller=r,l.method=a,l.args=o,l.exeTime=s+(i?this.currFrame:this.currTimer+this._now()-this._lastTimer)+1,this._indexHandler(l),this._handlers.push(l),l},i._indexHandler=function(t){var e=t.caller,i=t.method,n=e?e.$_GID||(e.$_GID=Utils.getGID()):0,s=i.$_TID||(i.$_TID=1e5*this._mid++);t.key=n+s,this._map[t.key]=t},i.once=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!1,!1,t,e,i,n,s)},i.loop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1);var a=this._create(!1,!0,t,e,i,n,s);a&&(a.jumpFrame=r)},i.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!1,t,e,i,n,s)},i.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!0,t,e,i,n,s)},i.toString=function(){return"callLater:"+this._laters.length+" handlers:"+this._handlers.length+" pool:"+t._pool.length},i.clear=function(t,e){var i=this._getHandler(t,e);i&&(this._map[i.key]=null,i.key=0,i.clear())},i.clearAll=function(t){if(t)for(var e=0,i=this._handlers.length;e<i;e++){var n=this._handlers[e];n.caller===t&&(this._map[n.key]=null,n.key=0,n.clear())}},i._getHandler=function(t,e){var i=t?t.$_GID||(t.$_GID=Utils.getGID()):0,n=e.$_TID||(e.$_TID=1e5*this._mid++);return this._map[i+n]},i.callLater=function(i,n,s){if(null==this._getHandler(i,n)){if(t._pool.length)var r=t._pool.pop();else r=new e;r.caller=i,r.method=n,r.args=s,this._indexHandler(r),this._laters.push(r)}},i.runCallLater=function(t,e){var i=this._getHandler(t,e);i&&null!=i.method&&(this._map[i.key]=null,i.run(!0))},i.runTimer=function(t,e){this.runCallLater(t,e)},__getset(0,i,"delta",function(){return this._delta}),t._pool=[],t.__init$=function(){e=function(){function t(){this.key=0,this.repeat=!1,this.delay=0,this.userFrame=!1,this.exeTime=0,this.caller=null,this.method=null,this.args=null,this.jumpFrame=!1}__class(t,"");var e=t.prototype;return e.clear=function(){this.caller=null,this.method=null,this.args=null},e.run=function(t){var e=this.caller;if(e&&e.destroyed)return this.clear();var i=this.method,n=this.args;t&&this.clear(),null!=i&&(n?i.apply(e,n):i.call(e))},t}()},t}(),Tween=function(){function t(){this.gid=0}__class(t,"laya.utils.Tween");var e=t.prototype;return e.to=function(t,e,i,n,s,r,a){return void 0===r&&(r=0),void 0===a&&(a=!1),this._create(t,e,i,n,s,r,a,!0,!1,!0)},e.from=function(t,e,i,n,s,r,a){return void 0===r&&(r=0),void 0===a&&(a=!1),this._create(t,e,i,n,s,r,a,!1,!1,!0)},e._create=function(e,i,n,s,r,a,o,h,l,c){if(!e)throw new Error("Tween:target is null");this._target=e,this._duration=n,this._ease=s||i.ease||t.easeNone,this._complete=r||i.complete,this._delay=a,this._props=[],this._usedTimer=0,this._startTimer=Browser.now(),this._usedPool=l,this._delayParam=null,this.update=i.update;var u=e.$_GID||(e.$_GID=Utils.getGID());return t.tweenMap[u]?(o&&t.clearTween(e),t.tweenMap[u].push(this)):t.tweenMap[u]=[this],c?a<=0?this.firstStart(e,i,h):(this._delayParam=[e,i,h],Laya.scaleTimer.once(a,this,this.firstStart,this._delayParam)):this._initProps(e,i,h),this},e.firstStart=function(t,e,i){this._delayParam=null,t.destroyed?this.clear():(this._initProps(t,e,i),this._beginLoop())},e._initProps=function(t,e,i){for(var n in e)if("number"==typeof t[n]){var s=i?t[n]:e[n],r=i?e[n]:t[n];this._props.push([n,s,r-s]),i||(t[n]=s)}},e._beginLoop=function(){Laya.scaleTimer.frameLoop(1,this,this._doEase)},e._doEase=function(){this._updateEase(Browser.now())},e._updateEase=function(e){var i=this._target;if(i){if(i.destroyed)return t.clearTween(i);var n=this._usedTimer=e-this._startTimer-this._delay;if(!(n<0)){if(n>=this._duration)return this.complete();for(var s=n>0?this._ease(n,0,1,this._duration):0,r=this._props,a=0,o=r.length;a<o;a++){var h=r[a];i[h[0]]=h[1]+s*h[2]}this.update&&this.update.run()}}},e.complete=function(){if(this._target){Laya.scaleTimer.runTimer(this,this.firstStart);for(var t=this._target,e=this._props,i=this._complete,n=0,s=e.length;n<s;n++){var r=e[n];t[r[0]]=r[1]+r[2]}this.update&&this.update.run(),this.clear(),i&&i.run()}},e.pause=function(){Laya.scaleTimer.clear(this,this._beginLoop),Laya.scaleTimer.clear(this,this._doEase),Laya.scaleTimer.clear(this,this.firstStart);var t=NaN;(t=Browser.now()-this._startTimer-this._delay)<0&&(this._usedTimer=t)},e.setStartTime=function(t){this._startTimer=t},e.clear=function(){this._target&&(this._remove(),this._clear())},e._clear=function(){this.pause(),Laya.scaleTimer.clear(this,this.firstStart),this._complete=null,this._target=null,this._ease=null,this._props=null,this._delayParam=null,this._usedPool&&(this.update=null,Pool.recover("tween",this))},e.recover=function(){this._usedPool=!0,this._clear()},e._remove=function(){var e=t.tweenMap[this._target.$_GID];if(e)for(var i=0,n=e.length;i<n;i++)if(e[i]===this){e.splice(i,1);break}},e.restart=function(){if(this.pause(),this._usedTimer=0,this._startTimer=Browser.now(),this._delayParam)Laya.scaleTimer.once(this._delay,this,this.firstStart,this._delayParam);else{for(var t=this._props,e=0,i=t.length;e<i;e++){var n=t[e];this._target[n[0]]=n[1]}Laya.scaleTimer.once(this._delay,this,this._beginLoop)}},e.resume=function(){this._usedTimer>=this._duration||(this._startTimer=Browser.now()-this._usedTimer-this._delay,this._delayParam?this._usedTimer<0?Laya.scaleTimer.once(-this._usedTimer,this,this.firstStart,this._delayParam):this.firstStart.apply(this,this._delayParam):this._beginLoop())},__getset(0,e,"progress",null,function(t){var e=t*this._duration;this._startTimer=Browser.now()-this._delay-e}),t.to=function(e,i,n,s,r,a,o,h){return void 0===a&&(a=0),void 0===o&&(o=!1),void 0===h&&(h=!0),Pool.getItemByClass("tween",t)._create(e,i,n,s,r,a,o,!0,h,!0)},t.from=function(e,i,n,s,r,a,o,h){return void 0===a&&(a=0),void 0===o&&(o=!1),void 0===h&&(h=!0),Pool.getItemByClass("tween",t)._create(e,i,n,s,r,a,o,!1,h,!0)},t.clearAll=function(e){if(e&&e.$_GID){var i=t.tweenMap[e.$_GID];if(i){for(var n=0,s=i.length;n<s;n++)i[n]._clear();i.length=0}}},t.clear=function(t){t.clear()},t.clearTween=function(e){t.clearAll(e)},t.easeNone=function(t,e,i,n){return i*t/n+e},t.tweenMap={},t}(),Utils=function(){function t(){}return __class(t,"laya.utils.Utils"),t.toRadian=function(e){return e*t._pi2},t.toAngle=function(e){return e*t._pi},t.toHexColor=function(t){if(t<0||isNaN(t))return null;for(var e=t.toString(16);e.length<6;)e="0"+e;return"#"+e},t.getGID=function(){return t._gid++},t.concatArray=function(t,e){if(!e)return t;if(!t)return e;var i=0,n=e.length;for(i=0;i<n;i++)t.push(e[i]);return t},t.clearArray=function(t){return t?(t.length=0,t):t},t.copyArray=function(t,e){if(t||(t=[]),!e)return t;t.length=e.length;var i=0,n=e.length;for(i=0;i<n;i++)t[i]=e[i];return t},t.getGlobalRecByPoints=function(t,e,i,n,s){var r;r=new Point(e,i),r=t.localToGlobal(r);var a;return a=new Point(n,s),a=t.localToGlobal(a),Rectangle._getWrapRec([r.x,r.y,a.x,a.y])},t.getGlobalPosAndScale=function(e){return t.getGlobalRecByPoints(e,0,0,1,1)},t.bind=function(t,e){return t.bind(e)},t.measureText=function(t,e){return RunDriver.measureText(t,e)},t.updateOrder=function(t){if(!t||t.length<2)return!1;for(var e,i=1,n=0,s=t.length,r=NaN;i<s;){for(e=t[n=i],r=t[n]._zOrder;--n>-1&&t[n]._zOrder>r;)t[n+1]=t[n];t[n+1]=e,i++}var a=e.parent.conchModel;if(a)if(null!=a.updateZOrder)a.updateZOrder();else{for(i=0;i<s;i++)a.removeChild(t[i].conchModel);for(i=0;i<s;i++)a.addChildAt(t[i].conchModel,i)}return!0},t.transPointList=function(t,e,i){var n=0,s=t.length;for(n=0;n<s;n+=2)t[n]+=e,t[n+1]+=i},t.parseInt=function(t,e){void 0===e&&(e=0);var i=Browser.window.parseInt(t,e);return isNaN(i)?0:i},t.getFileExtension=function(e){t._extReg.lastIndex=e.lastIndexOf(".");var i=t._extReg.exec(e);return i&&i.length>1?i[1].toLowerCase():null},t.getTransformRelativeToWindow=function(t,e,i){var n=Laya.stage,s=laya.utils.Utils.getGlobalPosAndScale(t),r=n._canvasTransform.clone(),a=r.tx,o=r.ty;r.rotate(-Math.PI/180*Laya.stage.canvasDegree),r.scale(Laya.stage.clientScaleX,Laya.stage.clientScaleY);var h=Laya.stage.canvasDegree%180!=0,l=NaN,c=NaN;h?(l=i+s.y,c=e+s.x,l*=r.d,c*=r.a,90==Laya.stage.canvasDegree?(l=a-l,c+=o):(l+=a,c=o-c)):(l=e+s.x,c=i+s.y,l*=r.a,c*=r.d,l+=a,c+=o);var u=NaN,_=NaN;return h?(u=r.d*s.height,_=r.a*s.width):(u=r.a*s.width,_=r.d*s.height),{x:l,y:c,scaleX:u,scaleY:_}},t.fitDOMElementInArea=function(e,i,n,s,r,a){e._fitLayaAirInitialized||(e._fitLayaAirInitialized=!0,e.style.transformOrigin=e.style.webKittransformOrigin="left top",e.style.position="absolute");var o=t.getTransformRelativeToWindow(i,n,s);e.style.transform=e.style.webkitTransform="scale("+o.scaleX+","+o.scaleY+") rotate("+Laya.stage.canvasDegree+"deg)",e.style.width=r+"px",e.style.height=a+"px",e.style.left=o.x+"px",e.style.top=o.y+"px"},t.isOkTextureList=function(t){if(!t)return!1;var e,i=0,n=t.length;for(i=0;i<n;i++)if(!(e=t[i])||!e.source)return!1;return!0},t.isOKCmdList=function(t){if(!t)return!1;var e,i,n=0,s=t.length,r=Render._context;for(n=0;n<s;n++)switch((e=t[n]).callee){case r._drawTexture:case r._fillTexture:case r._drawTextureWithTransform:if(!(i=e[0])||!i.source)return!1}return!0},t._gid=1,t.parseXMLFromString=function(t){var e;if(t=t.replace(/>\s+</g,"><"),(e=(new DOMParser).parseFromString(t,"text/xml")).firstChild.textContent.indexOf("This page contains the following errors")>-1)throw new Error(e.firstChild.firstChild.textContent);return e},__static(t,["_pi",function(){return this._pi=180/Math.PI},"_pi2",function(){return this._pi2=Math.PI/180},"_extReg",function(){return this._extReg=/\.(\w+)\??/g}]),t}(),VectorGraphManager=function(){function t(){this.useDic={},this.shapeDic={},this.shapeLineDic={},this._id=0,this._checkKey=!1,this._freeIdArray=[],Render.isWebGL&&CacheManager.regCacheByFunction(Utils.bind(this.startDispose,this),Utils.bind(this.getCacheList,this))}__class(t,"laya.utils.VectorGraphManager");var e=t.prototype;return e.getId=function(){return this._id++},e.addShape=function(t,e){this.shapeDic[t]=e,this.useDic[t]||(this.useDic[t]=!0)},e.addLine=function(t,e){this.shapeLineDic[t]=e,this.shapeLineDic[t]||(this.shapeLineDic[t]=!0)},e.getShape=function(t){this._checkKey&&null!=this.useDic[t]&&(this.useDic[t]=!0)},e.deleteShape=function(t){this.shapeDic[t]&&(this.shapeDic[t]=null,delete this.shapeDic[t]),this.shapeLineDic[t]&&(this.shapeLineDic[t]=null,delete this.shapeLineDic[t]),null!=this.useDic[t]&&delete this.useDic[t]},e.getCacheList=function(){var t,e=[];for(t in this.shapeDic)e.push(this.shapeDic[t]);for(t in this.shapeLineDic)e.push(this.shapeLineDic[t]);return e},e.startDispose=function(t){var e;for(e in this.useDic)this.useDic[e]=!1;this._checkKey=!0},e.endDispose=function(){if(this._checkKey){var t;for(t in this.useDic)this.useDic[t]||this.deleteShape(t);this._checkKey=!1}},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),WeakObject=function(){function t(){this._obj=null,this._obj=t.supportWeakMap?new Browser.window.WeakMap:{},t.supportWeakMap||t._maps.push(this)}__class(t,"laya.utils.WeakObject");var e=t.prototype;return e.set=function(e,i){if(null!=e)if(t.supportWeakMap){var n=e;"string"!=typeof e&&"number"!=typeof e||(n=t._keys[e])||(n=t._keys[e]={k:e}),this._obj.set(n,i)}else"string"==typeof e||"number"==typeof e?this._obj[e]=i:(e.$_GID||(e.$_GID=Utils.getGID()),this._obj[e.$_GID]=i)},e.get=function(e){if(null==e)return null;if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;return i?this._obj.get(i):null}return"string"==typeof e||"number"==typeof e?this._obj[e]:this._obj[e.$_GID]},e.del=function(e){if(null!=e)if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;if(!i)return;this._obj.delete(i)}else"string"==typeof e||"number"==typeof e?delete this._obj[e]:delete this._obj[this._obj.$_GID]},e.has=function(e){if(null==e)return!1;if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;return this._obj.has(i)}return"string"==typeof e||"number"==typeof e?null!=this._obj[e]:null!=this._obj[this._obj.$_GID]},t.__init__=function(){(t.supportWeakMap=null!=Browser.window.WeakMap)||Laya.timer.loop(t.delInterval,null,t.clearCache)},t.clearCache=function(){for(var e=0,i=t._maps.length;e<i;e++){t._maps[e]._obj={}}},t.supportWeakMap=!1,t.delInterval=3e5,t._keys={},t._maps=[],__static(t,["I",function(){return this.I=new t}]),t}(),WordText=function(){function t(){this.id=NaN,this.save=[],this.toUpperCase=null,this.changed=!1,this._text=null}__class(t,"laya.utils.WordText");var e=t.prototype;return e.setText=function(t){this.changed=!0,this._text=t},e.toString=function(){return this._text},e.charCodeAt=function(t){return this._text?this._text.charCodeAt(t):NaN},e.charAt=function(t){return this._text?this._text.charAt(t):null},__getset(0,e,"length",function(){return this._text?this._text.length:0}),t}(),Node=function(t){function e(){this._bits=0,this._displayedInStage=!1,this._parent=null,this.conchModel=null,this.name="",this._destroyed=!1,e.__super.call(this),this._childs=e.ARRAY_EMPTY,this._$P=e.PROP_EMPTY,this.timer=Laya.scaleTimer,this.conchModel=Render.isConchNode?this.createConchModel():null}__class(e,"laya.display.Node",EventDispatcher);var i=e.prototype;return i._setBit=function(t,e){if(1==t){this._getBit(t)!=e&&this._updateDisplayedInstage()}e?this._bits|=t:this._bits&=~t},i._getBit=function(t){return 0!=(this._bits&t)},i._setUpNoticeChain=function(){this._getBit(1)&&this._setUpNoticeType(1)},i._setUpNoticeType=function(t){var e=this;for(e._setBit(t,!0),e=e.parent;e;){if(e._getBit(t))return;e._setBit(t,!0),e=e.parent}},i.on=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!1)},i.once=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!0)},i.createConchModel=function(){return null},i.destroy=function(t){void 0===t&&(t=!0),this._destroyed=!0,this._parent&&this._parent.removeChild(this),this._childs&&(t?this.destroyChildren():this.removeChildren()),this._childs=null,this._$P=null,this.offAll(),this.timer.clearAll(this)},i.destroyChildren=function(){if(this._childs)for(var t=this._childs.length-1;t>-1;t--)this._childs[t].destroy(!0)},i.addChild=function(t){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),t._parent===this){var i=this.getChildIndex(t);i!==this._childs.length-1&&(this._childs.splice(i,1),this._childs.push(t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,this._childs.length-1)),this._childChanged())}else t.parent&&t.parent.removeChild(t),this._childs===e.ARRAY_EMPTY&&(this._childs=[]),this._childs.push(t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,this._childs.length-1),t.parent=this,this._childChanged();return t},i.addChildren=function(t){for(var e=arguments,i=0,n=e.length;i<n;)this.addChild(e[i++])},i.addChildAt=function(t,i){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),i>=0&&i<=this._childs.length){if(t._parent===this){var n=this.getChildIndex(t);this._childs.splice(n,1),this._childs.splice(i,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,i)),this._childChanged()}else t.parent&&t.parent.removeChild(t),this._childs===e.ARRAY_EMPTY&&(this._childs=[]),this._childs.splice(i,0,t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,i),t.parent=this;return t}throw new Error("appendChildAt:The index is out of bounds")},i.getChildIndex=function(t){return this._childs.indexOf(t)},i.getChildByName=function(t){var e=this._childs;if(e)for(var i=0,n=e.length;i<n;i++){var s=e[i];if(s.name===t)return s}return null},i._get$P=function(t){return this._$P[t]},i._set$P=function(t,i){return this.destroyed||(this._$P===e.PROP_EMPTY&&(this._$P={}),this._$P[t]=i),i},i.getChildAt=function(t){return this._childs[t]},i.setChildIndex=function(t,e){var i=this._childs;if(e<0||e>=i.length)throw new Error("setChildIndex:The index is out of bounds.");var n=this.getChildIndex(t);if(n<0)throw new Error("setChildIndex:node is must child of this object.");return i.splice(n,1),i.splice(e,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,e)),this._childChanged(),t},i._childChanged=function(t){},i.removeChild=function(t){if(!this._childs)return t;var e=this._childs.indexOf(t);return this.removeChildAt(e)},i.removeSelf=function(){return this._parent&&this._parent.removeChild(this),this},i.removeChildByName=function(t){var e=this.getChildByName(t);return e&&this.removeChild(e),e},i.removeChildAt=function(t){var e=this.getChildAt(t);return e&&(this._childs.splice(t,1),this.conchModel&&this.conchModel.removeChild(e.conchModel),e.parent=null),e},i.removeChildren=function(t,i){if(void 0===t&&(t=0),void 0===i&&(i=2147483647),this._childs&&this._childs.length>0){var n=this._childs;if(0===t&&i>=a){var s=n;this._childs=e.ARRAY_EMPTY}else s=n.splice(t,i-t);for(var r=0,a=s.length;r<a;r++)s[r].parent=null,this.conchModel&&this.conchModel.removeChild(s[r].conchModel)}return this},i.replaceChild=function(t,e){var i=this._childs.indexOf(e);return i>-1?(this._childs.splice(i,1,t),this.conchModel&&(this.conchModel.removeChild(e.conchModel),this.conchModel.addChildAt(t.conchModel,i)),e.parent=null,t.parent=this,t):null},i._updateDisplayedInstage=function(){var t;t=this;var e=Laya.stage;for(this._displayedInStage=!1;t;){if(t._getBit(1)){this._displayedInStage=t._displayedInStage;break}if(t==e||t._displayedInStage){this._displayedInStage=!0;break}t=t.parent}},i._setDisplay=function(t){this._displayedInStage!==t&&(this._displayedInStage=t,t?this.event("display"):this.event("undisplay"))},i._displayChild=function(t,e){var i=t._childs;if(i)for(var n=0,s=i.length;n<s;n++){var r=i[n];r._getBit(1)&&(r._childs.length>0?this._displayChild(r,e):r._setDisplay(e))}t._setDisplay(e)},i.contains=function(t){if(t===this)return!0;for(;t;){if(t.parent===this)return!0;t=t.parent}return!1},i.timerLoop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1),this.timer.loop(t,e,i,n,s,r)},i.timerOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!1,!1,t,e,i,n,s)},i.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!0,t,e,i,n,s)},i.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!1,t,e,i,n,s)},i.clearTimer=function(t,e){this.timer.clear(t,e)},__getset(0,i,"numChildren",function(){return this._childs.length}),__getset(0,i,"destroyed",function(){return this._destroyed}),__getset(0,i,"parent",function(){return this._parent},function(t){this._parent!==t&&(t?(this._parent=t,this.event("added"),this._getBit(1)&&(this._setUpNoticeChain(),t.displayedInStage&&this._displayChild(this,!0)),t._childChanged(this)):(this.event("removed"),this._parent._childChanged(),this._getBit(1)&&this._displayChild(this,!1),this._parent=t))}),__getset(0,i,"displayedInStage",function(){return this._getBit(1)?this._displayedInStage:(this._setUpNoticeType(1),this._displayedInStage)}),e.ARRAY_EMPTY=[],e.PROP_EMPTY={},e.NOTICE_DISPLAY=1,e.MOUSEENABLE=2,e}(),CSSStyle=function(t){function e(t){this._bgground=null,this._border=null,this._rect=null,this.underLine=0,this.lineHeight=0,e.__super.call(this),this._padding=e._PADDING,this._spacing=e._SPACING,this._aligns=e._ALIGNS,this._font=Font.EMPTY,this._ower=t}__class(e,"laya.display.css.CSSStyle",t);var i=e.prototype;return i.destroy=function(){this._ower=null,this._font=null,this._rect=null},i.inherit=function(t){this._font=t._font,this._spacing=t._spacing===e._SPACING?e._SPACING:t._spacing.slice(),this.lineHeight=t.lineHeight},i._widthAuto=function(){return 0!=(262144&this._type)},i.widthed=function(t){return 0!=(8&this._type)},i._calculation=function(t,e){function i(t,e,i){return t*i[0]+e*i[1]+i[2]}function n(t){var e=r.width,n=s.width;a.width&&(s.width=i(e,n,a.width)),a.height&&(s.height=i(e,n,a.height)),a.left&&(s.x=i(e,n,a.left)),a.top&&(s.y=i(e,n,a.top))}if(e.indexOf("%")<0)return!1;var s=this._ower,r=s.parent,a=this._rect;null===a&&(r._getCSSStyle()._type|=524288,r.on("resize",this,n),this._rect=a={input:{}});var o=e.split(" ");return o[0]=parseFloat(o[0])/100,1==o.length?o[1]=o[2]=0:(o[1]=parseFloat(o[1])/100,o[2]=parseFloat(o[2])),a[t]=o,a.input[t]=e,n(),!0},i.heighted=function(t){return 0!=(8192&this._type)},i.size=function(t,e){var i=this._ower,n=!1;-1!==t&&t!=this._ower.width&&(this._type|=8,this._ower.width=t,n=!0),-1!==e&&e!=this._ower.height&&(this._type|=8192,this._ower.height=e,n=!0),n&&(i._layoutLater(),524288&this._type&&i.event("resize",this))},i._getAlign=function(){return this._aligns[0]},i._getValign=function(){return this._aligns[1]},i._getCssFloat=function(){return 0!=(32768&this._type)?32768:0},i._createFont=function(){return 4096&this._type?this._font:(this._type|=4096,this._font=new Font(this._font))},i.render=function(t,e,i,n){var s=t.width,r=t.height;i-=t.pivotX,n-=t.pivotY,this._bgground&&null!=this._bgground.color&&e.ctx.fillRect(i,n,s,r,this._bgground.color),this._border&&this._border.color&&e.drawRect(i,n,s,r,this._border.color.strColor,this._border.size)},i.getCSSStyle=function(){return this},i.cssText=function(t){this.attrs(e.parseOneCSS(t,";"))},i.attrs=function(t){if(t)for(var e=0,i=t.length;e<i;e++){var n=t[e];this[n[0]]=n[1]}},i.setTransform=function(t){"none"===t?this._tf=Style._TF_EMPTY:this.attrs(e.parseOneCSS(t,","))},i.translate=function(t,e){this._tf===Style._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.translateX=t,this._tf.translateY=e},i.scale=function(t,e){this._tf===Style._TF_EMPTY&&(this._tf=new TransformInfo),this._tf.scaleX=t,this._tf.scaleY=e},i._enableLayout=function(){return 0==(2&this._type)&&0==(4&this._type)},__getset(0,i,"block",t.prototype._$get_block,function(t){t?this._type|=1:this._type&=-2}),__getset(0,i,"valign",function(){return e._valigndef[this._aligns[1]]},function(t){this._aligns===e._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[1]=e._valigndef[t]}),__getset(0,i,"height",null,function(t){if(this._type|=8192,"string"==typeof t){if(this._calculation("height",t))return;t=parseInt(t)}this.size(-1,t)}),__getset(0,i,"width",null,function(t){if(this._type|=8,"string"==typeof t){var e=t.indexOf("auto");if(e>=0&&(this._type|=262144,t=t.substr(0,e)),this._calculation("width",t))return;t=parseInt(t)}this.size(t,-1)}),__getset(0,i,"fontWeight",function(){return this._font.weight},function(t){this._createFont().weight=t}),__getset(0,i,"left",null,function(t){var e=this._ower;if("string"==typeof t){if("center"===t?t="50% -50% 0":"right"===t&&(t="100% -100% 0"),this._calculation("left",t))return;t=parseInt(t)}e.x=t}),__getset(0,i,"_translate",null,function(t){this.translate(t[0],t[1])}),__getset(0,i,"absolute",function(){return 0!=(4&this._type)}),__getset(0,i,"top",null,function(t){var e=this._ower;if("string"==typeof t){if("middle"===t?t="50% -50% 0":"bottom"===t&&(t="100% -100% 0"),this._calculation("top",t))return;t=parseInt(t)}e.y=t}),__getset(0,i,"align",function(){return e._aligndef[this._aligns[0]]},function(t){this._aligns===e._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[0]=e._aligndef[t]}),__getset(0,i,"bold",function(){return this._font.bold},function(t){this._createFont().bold=t}),__getset(0,i,"padding",function(){return this._padding},function(t){this._padding=t}),__getset(0,i,"leading",function(){return this._spacing[1]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===e._SPACING&&(this._spacing=[0,0]),this._spacing[1]=t}),__getset(0,i,"lineElement",function(){return 0!=(65536&this._type)},function(t){t?this._type|=65536:this._type&=-65537}),__getset(0,i,"cssFloat",function(){return 0!=(32768&this._type)?"right":"left"},function(t){this.lineElement=!1,"right"===t?this._type|=32768:this._type&=-32769}),__getset(0,i,"textDecoration",function(){return this._font.decoration},function(t){this._createFont().decoration=t}),__getset(0,i,"whiteSpace",function(){return 131072&this._type?"nowrap":""},function(t){"nowrap"===t&&(this._type|=131072),"none"===t&&(this._type&=-131073)}),__getset(0,i,"background",null,function(t){t?(this._bgground||(this._bgground={}),this._bgground.color=t,this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._type|=16384,this._ower._renderType|=256):this._bgground=null}),__getset(0,i,"wordWrap",function(){return 0==(131072&this._type)},function(t){t?this._type&=-131073:this._type|=131072}),__getset(0,i,"color",function(){return this._font.color},function(t){this._createFont().color=t}),__getset(0,i,"password",function(){return this._font.password},function(t){this._createFont().password=t}),__getset(0,i,"backgroundColor",function(){return this._bgground?this._bgground.color:null},function(t){"none"===t?this._bgground=null:(this._bgground||(this._bgground={}),this._bgground.color=t),this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._ower._renderType|=256}),__getset(0,i,"font",function(){return this._font.toString()},function(t){this._createFont().set(t)}),__getset(0,i,"weight",null,function(t){this._createFont().weight=t}),__getset(0,i,"letterSpacing",function(){return this._spacing[0]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===e._SPACING&&(this._spacing=[0,0]),this._spacing[0]=t}),__getset(0,i,"fontSize",function(){return this._font.size},function(t){this._createFont().size=t}),__getset(0,i,"italic",function(){return this._font.italic},function(t){this._createFont().italic=t}),__getset(0,i,"fontFamily",function(){return this._font.family},function(t){this._createFont().family=t}),__getset(0,i,"stroke",function(){return this._font.stroke[0]},function(t){this._createFont().stroke===Font._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[0]=t}),__getset(0,i,"strokeColor",function(){return this._font.stroke[1]},function(t){this._createFont().stroke===Font._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[1]=t}),__getset(0,i,"border",function(){return this._border?this._border.value:""},function(t){if("none"!=t){this._border||(this._border={}),this._border.value=t;var e=t.split(" ");if(this._border.color=Color.create(e[e.length-1]),1==e.length)return this._border.size=1,void(this._border.type="solid");var i=0;e[0].indexOf("px")>0?(this._border.size=parseInt(e[0]),i++):this._border.size=1,this._border.type=e[i],this._ower._renderType|=256}else this._border=null}),__getset(0,i,"borderColor",function(){return this._border&&this._border.color?this._border.color.strColor:null},function(t){t?(this._border||(this._border={size:1,type:"solid"}),this._border.color=null==t?null:Color.create(t),this._ower.conchModel&&this._ower.conchModel.border(this._border.color.strColor),this._ower._renderType|=256):this._border=null}),__getset(0,i,"position",function(){return 4&this._type?"absolute":""},function(t){"absolute"==t?this._type|=4:this._type&=-5}),__getset(0,i,"display",null,function(t){switch(t){case"":this._type&=-3,this.visible=!0;break;case"none":this._type|=2,this.visible=!1,this._ower._layoutLater()}}),__getset(0,i,"paddingLeft",function(){return this.padding[3]}),__getset(0,i,"paddingTop",function(){return this.padding[0]}),__getset(0,i,"_scale",null,function(t){this._ower.scale(t[0],t[1])}),__getset(0,i,"_rotate",null,function(t){this._ower.rotation=t}),e.parseOneCSS=function(t,i){for(var n,s=[],r=t.split(i),a=0,o=r.length;a<o;a++){var h=r[a],l=h.indexOf(":"),c=h.substr(0,l).replace(/^\s+|\s+$/g,"");if(0!=c.length){var u=h.substr(l+1).replace(/^\s+|\s+$/g,""),_=[c,u];switch(c){case"italic":case"bold":_[1]="true"==u;break;case"line-height":_[0]="lineHeight",_[1]=parseInt(u);break;case"font-size":_[0]="fontSize",_[1]=parseInt(u);break;case"padding":(n=u.split(" ")).length>1||(n[1]=n[2]=n[3]=n[0]),_[1]=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];break;case"rotate":_[0]="_rotate",_[1]=parseFloat(u);break;case"scale":n=u.split(" "),_[0]="_scale",_[1]=[parseFloat(n[0]),parseFloat(n[1])];break;case"translate":n=u.split(" "),_[0]="_translate",_[1]=[parseInt(n[0]),parseInt(n[1])];break;default:(_[0]=e._CSSTOVALUE[c])||(_[0]=c)}s.push(_)}}return s},e.parseCSS=function(t,i){for(var n;null!=(n=e._parseCSSRegExp.exec(t));)e.styleSheets[n[1]]=e.parseOneCSS(n[2],";")},e.styleSheets={},e.ALIGN_CENTER=1,e.ALIGN_RIGHT=2,e.VALIGN_MIDDLE=1,e.VALIGN_BOTTOM=2,e._CSS_BLOCK=1,e._DISPLAY_NONE=2,e._ABSOLUTE=4,e._WIDTH_SET=8,e.ADDLAYOUTED=512,e._NEWFONT=4096,e._HEIGHT_SET=8192,e._BACKGROUND_SET=16384,e._FLOAT_RIGHT=32768,e._LINE_ELEMENT=65536,e._NOWARP=131072,e._WIDTHAUTO=262144,e._LISTERRESZIE=524288,__static(e,["EMPTY",function(){return this.EMPTY=new e(null)},"_CSSTOVALUE",function(){return this._CSSTOVALUE={"letter-spacing":"letterSpacing","line-spacing":"lineSpacing","white-space":"whiteSpace","line-height":"lineHeight","scale-x":"scaleX","scale-y":"scaleY","translate-x":"translateX","translate-y":"translateY","font-family":"fontFamily","font-weight":"fontWeight","vertical-align":"valign","text-decoration":"textDecoration","background-color":"backgroundColor","border-color":"borderColor",float:"cssFloat"}},"_parseCSSRegExp",function(){return this._parseCSSRegExp=new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}","g")},"_aligndef",function(){return this._aligndef={left:0,center:1,right:2,0:"left",1:"center",2:"right"}},"_valigndef",function(){return this._valigndef={top:0,middle:1,bottom:2,0:"top",1:"middle",2:"bottom"}},"_PADDING",function(){return this._PADDING=[0,0,0,0]},"_RECT",function(){return this._RECT=[-1,-1,-1,-1]},"_SPACING",function(){return this._SPACING=[0,0]},"_ALIGNS",function(){return this._ALIGNS=[0,0,0]}]),e}(Style),AudioSound=function(t){function e(){this.url=null,this.audio=null,this.loaded=!1,e.__super.call(this)}__class(e,"laya.media.h5audio.AudioSound",EventDispatcher);var i=e.prototype;return i.dispose=function(){var t=e._audioCache[this.url];t&&(t.src="",delete e._audioCache[this.url])},i.load=function(t){function i(){s(),a.loaded=!0,a.event("complete")}function n(){r.load=null,s(),a.event("error")}function s(){r.removeEventListener("canplaythrough",i),r.removeEventListener("error",n)}t=URL.formatURL(t),this.url=t;var r;if(t==SoundManager._tMusic?(e._initMusicAudio(),(r=e._musicAudio).src!=t&&(e._audioCache[r.src]=null,r=null)):r=e._audioCache[t],r&&r.readyState>=2)this.event("complete");else{r||(t==SoundManager._tMusic?(e._initMusicAudio(),r=e._musicAudio):r=Browser.createElement("audio"),e._audioCache[t]=r,r.src=t),r.addEventListener("canplaythrough",i),r.addEventListener("error",n);var a=this;this.audio=r,r.load?r.load():n()}},i.play=function(t,i){if(void 0===t&&(t=0),void 0===i&&(i=0),!this.url)return null;var n;if(!(n=this.url==SoundManager._tMusic?e._musicAudio:e._audioCache[this.url]))return null;var s;s=Pool.getItem("audio:"+this.url),Render.isConchApp?s||((s=Browser.createElement("audio")).src=this.url):this.url==SoundManager._tMusic?(e._initMusicAudio(),(s=e._musicAudio).src=this.url):s=s||n.cloneNode(!0);var r=new AudioSoundChannel(s);return r.url=this.url,r.loops=i,r.startTime=t,r.play(),SoundManager.addChannel(r),r},__getset(0,i,"duration",function(){var t;return(t=e._audioCache[this.url])?t.duration:0}),e._initMusicAudio=function(){e._musicAudio||(e._musicAudio||(e._musicAudio=Browser.createElement("audio")),Render.isConchApp||Browser.document.addEventListener("mousedown",e._makeMusicOK))},e._makeMusicOK=function(){Browser.document.removeEventListener("mousedown",e._makeMusicOK),e._musicAudio.src?e._musicAudio.play():(e._musicAudio.src="",e._musicAudio.load())},e._audioCache={},e._musicAudio=null,e}(),SoundChannel=function(t){function e(){this.url=null,this.loops=0,this.startTime=NaN,this.isStopped=!1,this.completeHandler=null,e.__super.call(this)}__class(e,"laya.media.SoundChannel",EventDispatcher);var i=e.prototype;return i.play=function(){},i.stop=function(){},i.pause=function(){},i.resume=function(){},i.__runComplete=function(t){t&&t.run()},__getset(0,i,"volume",function(){return 1},function(t){}),__getset(0,i,"position",function(){return 0}),__getset(0,i,"duration",function(){return 0}),e}(),Sound=function(t){function e(){e.__super.call(this)}__class(e,"laya.media.Sound",EventDispatcher);var i=e.prototype;return i.load=function(t){},i.play=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),null},i.dispose=function(){},__getset(0,i,"duration",function(){return 0}),e}(),WebAudioSound=function(t){function e(){this.url=null,this.loaded=!1,this.data=null,this.audioBuffer=null,this.__toPlays=null,e.__super.call(this)}__class(e,"laya.media.webaudio.WebAudioSound",EventDispatcher);var i=e.prototype;return i.load=function(t){var i=this;if(t=URL.formatURL(t),this.url=t,this.audioBuffer=e._dataCache[t],this.audioBuffer)this._loaded(this.audioBuffer);else if(e.e.on("loaded:"+t,this,this._loaded),e.e.on("err:"+t,this,this._err),!e.__loadingSound[t]){e.__loadingSound[t]=!0;var n=new Browser.window.XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){i.data=n.response,e.buffs.push({buffer:i.data,url:i.url}),e.decode()},n.onerror=function(t){i._err()},n.send()}},i._err=function(){this._removeLoadEvents(),e.__loadingSound[this.url]=!1,this.event("error")},i._loaded=function(t){this._removeLoadEvents(),this.audioBuffer=t,e._dataCache[this.url]=this.audioBuffer,this.loaded=!0,this.event("complete")},i._removeLoadEvents=function(){e.e.off("loaded:"+this.url,this,this._loaded),e.e.off("err:"+this.url,this,this._err)},i.__playAfterLoaded=function(){if(this.__toPlays){var t,e=0,i=0;i=(t=this.__toPlays).length;var n;for(e=0;e<i;e++)(n=t[e])[2]&&!n[2].isStopped&&this.play(n[0],n[1],n[2]);this.__toPlays.length=0}},i.play=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),i=i||new WebAudioSoundChannel,this.audioBuffer||this.url&&(this.__toPlays||(this.__toPlays=[]),this.__toPlays.push([t,e,i]),this.once("complete",this,this.__playAfterLoaded),this.load(this.url)),i.url=this.url,i.loops=e,i.audioBuffer=this.audioBuffer,i.startTime=t,i.play(),SoundManager.addChannel(i),i},i.dispose=function(){delete e._dataCache[this.url],delete e.__loadingSound[this.url]},__getset(0,i,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),e.decode=function(){e.buffs.length<=0||e.isDecoding||(e.isDecoding=!0,e.tInfo=e.buffs.shift(),e.ctx.decodeAudioData(e.tInfo.buffer,e._done,e._fail))},e._done=function(t){e.e.event("loaded:"+e.tInfo.url,t),e.isDecoding=!1,e.decode()},e._fail=function(){e.e.event("err:"+e.tInfo.url,null),e.isDecoding=!1,e.decode()},e._playEmptySound=function(){if(null!=e.ctx){var t=e.ctx.createBufferSource();t.buffer=e._miniBuffer,t.connect(e.ctx.destination),t.start(0,0,0)}},e._unlock=function(){e._unlocked||(e._playEmptySound(),"running"==e.ctx.state&&(Browser.document.removeEventListener("mousedown",e._unlock,!0),Browser.document.removeEventListener("touchend",e._unlock,!0),e._unlocked=!0))},e.initWebAudio=function(){"running"!=e.ctx.state&&(e._unlock(),Browser.document.addEventListener("mousedown",e._unlock,!0),Browser.document.addEventListener("touchend",e._unlock,!0))},e._dataCache={},e.buffs=[],e.isDecoding=!1,e._unlocked=!1,e.tInfo=null,e.__loadingSound={},__static(e,["window",function(){return this.window=Browser.window},"webAudioEnabled",function(){return this.webAudioEnabled=e.window.AudioContext||e.window.webkitAudioContext||e.window.mozAudioContext},"ctx",function(){return this.ctx=e.webAudioEnabled?new(e.window.AudioContext||e.window.webkitAudioContext||e.window.mozAudioContext):void 0},"_miniBuffer",function(){return this._miniBuffer=e.ctx.createBuffer(1,1,22050)},"e",function(){return this.e=new EventDispatcher}]),e}(),HttpRequest=function(t){function e(){this._responseType=null,this._data=null,e.__super.call(this),this._http=new Browser.window.XMLHttpRequest}__class(e,"laya.net.HttpRequest",EventDispatcher);var i=e.prototype;return i.send=function(t,e,i,n,s){void 0===i&&(i="get"),void 0===n&&(n="text"),this._responseType=n,this._data=null;var r=this,a=this._http;if(a.open(i,t,!0),s)for(var o=0;o<s.length;o++)a.setRequestHeader(s[o++],s[o]);else Render.isConchApp||(e&&"string"!=typeof e?a.setRequestHeader("Content-Type","application/json"):a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"));a.responseType="arraybuffer"!==n?"text":"arraybuffer",a.onerror=function(t){r._onError(t)},a.onabort=function(t){r._onAbort(t)},a.onprogress=function(t){r._onProgress(t)},a.onload=function(t){r._onLoad(t)},a.send(e)},i._onProgress=function(t){t&&t.lengthComputable&&this.event("progress",t.loaded/t.total)},i._onAbort=function(t){this.error("Request was aborted by user")},i._onError=function(t){this.error("Request failed Status:"+this._http.status+" text:"+this._http.statusText)},i._onLoad=function(t){var e=this._http,i=void 0!==e.status?e.status:200;200===i||204===i||0===i?this.complete():this.error("["+e.status+"]"+e.statusText+":"+e.responseURL)},i.error=function(t){this.clear(),this.event("error",t)},i.complete=function(){this.clear();var t=!0;try{"json"===this._responseType?this._data=JSON.parse(this._http.responseText):"xml"===this._responseType?this._data=Utils.parseXMLFromString(this._http.responseText):this._data=this._http.response||this._http.responseText}catch(e){t=!1,this.error(e.message)}t&&this.event("complete",this._data instanceof Array?[this._data]:this._data)},i.clear=function(){var t=this._http;t.onerror=t.onabort=t.onprogress=t.onload=null},__getset(0,i,"url",function(){return this._http.responseURL}),__getset(0,i,"http",function(){return this._http}),__getset(0,i,"data",function(){return this._data}),e}(),Loader=function(t){function e(){this._data=null,this._class=null,this._url=null,this._type=null,this._cache=!1,this._http=null,this._customParse=!1,e.__super.call(this)}__class(e,"laya.net.Loader",EventDispatcher);var i=e.prototype;return i.load=function(t,i,n,s,r){if(void 0===n&&(n=!0),void 0===r&&(r=!1),this._url=t,0===t.indexOf("data:image")?this._type=i="image":(this._type=i||(i=this.getTypeFromUrl(t)),t=URL.formatURL(t)),this._cache=n,this._data=null,!r&&e.loadedMap[t])return this._data=e.loadedMap[t],this.event("progress",1),void this.event("complete",this._data);if(s&&e.setGroup(t,s),null!=e.parserMap[i])return this._customParse=!0,void(e.parserMap[i]instanceof laya.utils.Handler?e.parserMap[i].runWith(this):e.parserMap[i].call(null,this));if("image"===i||"htmlimage"===i||"nativeimage"===i)return this._loadImage(t);if("sound"===i)return this._loadSound(t);if("ttf"===i)return this._loadTTF(t);if("atlas"==i&&e.preLoadedAtlasConfigMap[t])return this.onLoaded(e.preLoadedAtlasConfigMap[t]),void delete e.preLoadedAtlasConfigMap[t];this._http||(this._http=new HttpRequest,this._http.on("progress",this,this.onProgress),this._http.on("error",this,this.onError),this._http.on("complete",this,this.onLoaded));var a;switch(i){case"atlas":a="json";break;case"font":a="xml";break;case"pkm":a="arraybuffer";break;default:a=i}this._http.send(t,null,"get",a)},i.getTypeFromUrl=function(t){var i=Utils.getFileExtension(t);return i?e.typeMap[i]:(console.warn("Not recognize the resources suffix",t),"text")},i._loadTTF=function(t){t=URL.formatURL(t);var e=new TTFLoader;e.complete=Handler.create(this,this.onLoaded),e.load(t)},i._loadImage=function(t){function i(){n.onload=null,n.onerror=null,delete e.imgCache[t]}t=URL.formatURL(t);var n,s=this,r=function(){i(),s.onLoaded(n)},a=function(){i(),s.event("error","Load image failed")};"nativeimage"===this._type?((n=new Browser.window.Image).crossOrigin="",n.onload=r,n.onerror=a,n.src=t,e.imgCache[t]=n):new HTMLImage.create(t,{onload:r,onerror:a,onCreate:function(i){n=i,e.imgCache[t]=i}})},i._loadSound=function(t){function e(){i.offAll()}var i=new SoundManager._soundClass,n=this;i.on("complete",this,function(){e(),n.onLoaded(i)}),i.on("error",this,function(){e(),i.dispose(),n.event("error","Load sound failed")}),i.load(t)},i.onProgress=function(t){"atlas"===this._type?this.event("progress",.3*t):this.event("progress",t)},i.onError=function(t){this.event("error",t)},i.onLoaded=function(t){var i=this._type;if("image"===i){var n=new Texture(t);n.url=this._url,this.complete(n)}else if("sound"===i||"htmlimage"===i||"nativeimage"===i)this.complete(t);else if("atlas"===i){if(!t.src&&!t._setContext){if(!this._data){if(this._data=t,t.meta&&t.meta.image)for(var s=t.meta.image.split(","),r=this._url.indexOf("/")>=0?"/":"\\",a=this._url.lastIndexOf(r),o=a>=0?this._url.substr(0,a+1):"",h=0,l=s.length;h<l;h++)s[h]=o+s[h];else s=[this._url.replace(".json",".png")];s.reverse(),t.toLoads=s,t.pics=[]}return this.event("progress",.3+1/s.length*.6),this._loadImage(s.pop())}if(this._data.pics.push(t),this._data.toLoads.length>0)return this.event("progress",.3+1/this._data.toLoads.length*.6),this._loadImage(this._data.toLoads.pop());var c=this._data.frames,u=this._url.split("?")[0],_=this._data.meta&&this._data.meta.prefix?this._data.meta.prefix:u.substring(0,u.lastIndexOf("."))+"/",d=this._data.pics,f=URL.formatURL(this._url),p=e.atlasMap[f]||(e.atlasMap[f]=[]);p.dir=_;var g=1;if(this._data.meta&&this._data.meta.scale&&1!=this._data.meta.scale){g=parseFloat(this._data.meta.scale);for(var m in c){var v=c[m],y=d[v.frame.idx?v.frame.idx:0],w=URL.formatURL(_+m);y.scaleRate=g,e.cacheRes(w,Texture.create(y,v.frame.x,v.frame.y,v.frame.w,v.frame.h,v.spriteSourceSize.x,v.spriteSourceSize.y,v.sourceSize.w,v.sourceSize.h)),e.loadedMap[w].url=w,p.push(w)}}else for(m in c)y=d[(v=c[m]).frame.idx?v.frame.idx:0],w=URL.formatURL(_+m),e.cacheRes(w,Texture.create(y,v.frame.x,v.frame.y,v.frame.w,v.frame.h,v.spriteSourceSize.x,v.spriteSourceSize.y,v.sourceSize.w,v.sourceSize.h)),e.loadedMap[w].url=w,p.push(w);delete this._data.pics,this.complete(this._data)}else if("font"==i){if(!t.src)return this._data=t,this.event("progress",.5),this._loadImage(this._url.replace(".fnt",".png"));var x=new BitmapFont;x.parseFont(this._data,t);var T=this._url.split(".fnt")[0].split("/"),b=T[T.length-1];Text.registerBitmapFont(b,x),this._data=x,this.complete(this._data)}else if("pkm"==i){var C=HTMLImage.create(t,this._url),M=new Texture(C);M.url=this._url,this.complete(M)}else this.complete(t)},i.complete=function(t){this._data=t,this._customParse?this.event("loaded",t instanceof Array?[t]:t):(e._loaders.push(this),e._isWorking||e.checkNext())},i.endLoad=function(t){t&&(this._data=t),this._cache&&e.cacheRes(this._url,this._data),this._customParse=!1,this.event("progress",1),this.event("complete",this.data instanceof Array?[this.data]:this.data)},__getset(0,i,"url",function(){return this._url}),__getset(0,i,"data",function(){return this._data}),__getset(0,i,"cache",function(){return this._cache}),__getset(0,i,"type",function(){return this._type}),e.checkNext=function(){e._isWorking=!0;for(var t=Browser.now();e._startIndex<e._loaders.length;)if(Browser.now(),e._loaders[e._startIndex].endLoad(),e._startIndex++,Browser.now()-t>e.maxTimeOut)return console.warn("loader callback cost a long time:"+(Browser.now()-t)+" url="+e._loaders[e._startIndex-1].url),void Laya.timer.frameOnce(1,null,e.checkNext);e._loaders.length=0,e._startIndex=0,e._isWorking=!1},e.clearRes=function(t,i){void 0===i&&(i=!1),t=URL.formatURL(t);var n=e.getAtlas(t);if(n){for(var s=0,r=n.length;s<r;s++){var a=n[s],o=e.getRes(a);delete e.loadedMap[a],o&&o.destroy(i)}n.length=0,delete e.atlasMap[t],delete e.loadedMap[t]}else{var h=e.loadedMap[t];h&&(delete e.loadedMap[t],h instanceof laya.resource.Texture&&h.bitmap&&h.destroy(i))}},e.clearTextureRes=function(t){t=URL.formatURL(t);var e=laya.net.Loader.getAtlas(t),i=e&&e.length>0?laya.net.Loader.getRes(e[0]):laya.net.Loader.getRes(t);i&&i.bitmap&&(Render.isConchApp?i.bitmap.source.releaseTexture&&i.bitmap.source.releaseTexture():null==i.bitmap._atlaser&&i.bitmap.releaseResource(!0))},e.setAtlasConfigs=function(t,i){e.preLoadedAtlasConfigMap[URL.formatURL(t)]=i},e.getRes=function(t){return e.loadedMap[URL.formatURL(t)]},e.getAtlas=function(t){return e.atlasMap[URL.formatURL(t)]},e.cacheRes=function(t,i){t=URL.formatURL(t),null!=e.loadedMap[t]?console.warn("Resources already exist,is repeated loading:",t):e.loadedMap[t]=i},e.setGroup=function(t,i){e.groupMap[i]||(e.groupMap[i]=[]),e.groupMap[i].push(t)},e.clearResByGroup=function(t){if(e.groupMap[t]){var i=e.groupMap[t],n=0,s=i.length;for(n=0;n<s;n++)e.clearRes(i[n]);i.length=0}},e.TEXT="text",e.JSON="json",e.XML="xml",e.BUFFER="arraybuffer",e.IMAGE="image",e.SOUND="sound",e.ATLAS="atlas",e.FONT="font",e.TTF="ttf",e.PKM="pkm",e.parserMap={},e.groupMap={},e.maxTimeOut=100,e.loadedMap={},e.preLoadedAtlasConfigMap={},e.atlasMap={},e._loaders=[],e._isWorking=!1,e._startIndex=0,e.imgCache={},__static(e,["typeMap",function(){return this.typeMap={png:"image",jpg:"image",jpeg:"image",txt:"text",json:"json",xml:"xml",als:"atlas",atlas:"atlas",mp3:"sound",ogg:"sound",wav:"sound",part:"json",fnt:"font",pkm:"pkm",ttf:"ttf"}}]),e}(),LoaderManager=function(t){function e(){this.retryNum=1,this.retryDelay=0,this.maxLoader=5,this._loaders=[],this._loaderCount=0,this._resInfos=[],this._infoPool=[],this._maxPriority=5,this._failRes={},e.__super.call(this);for(var t=0;t<this._maxPriority;t++)this._resInfos[t]=[]}var i;__class(e,"laya.net.LoaderManager",EventDispatcher);var n=e.prototype;return n.create=function(t,e,i,n,s,r,a,o){if(void 0===r&&(r=1),void 0===a&&(a=!0),t instanceof Array){var h=t,l=h.length,c=0;if(i)var u=Handler.create(i.caller,i.method,i.args,!1);for(var _=0;_<l;_++){var d=h[_];"string"==typeof d&&(d=h[_]={url:d}),d.progress=0;var f=i?Handler.create(null,function(t,e){t.progress=e;for(var i=0,n=0;n<l;n++)i+=h[n].progress;var s=i/l;u.runWith(s)},[d],!1):null,p=i||e?Handler.create(null,function(t,i){c++,t.progress=1,c===l&&e&&e.run()},[d]):null;this._create(d.url,p,f,d.clas||n,d.params||s,d.priority||r,a,d.group||o)}return!0}return this._create(t,e,i,n,s,r,a,o)},n._create=function(t,i,n,s,r,a,o,h){void 0===a&&(a=1),void 0===o&&(o=!0),t=URL.formatURL(t);var l=this.getRes(t);if(l)!l.hasOwnProperty("loaded")||l.loaded?(n&&n.runWith(1),i&&i.run()):i&&Laya.loader._createListener(t,i.caller,i.method,i.args,!0,!1);else{var c=Utils.getFileExtension(t),u=e.createMap[c];if(!u)throw new Error("LoaderManager:unknown file("+t+") extension with: "+c+".");s||(s=u[0]);var _=u[1];"atlas"==c?this.load(t,i,n,_,a,o):(s===Texture&&(_="htmlimage"),(l=s?new s:null).hasOwnProperty("_loaded")&&(l._loaded=!1),l._setUrl(t),h&&l._setGroup(h),this._createLoad(l,t,Handler.create(null,function(e){l&&!l.destroyed&&e&&l.onAsynLoaded.call(l,t,e,r),i&&i.run(),Laya.loader.event(t)}),n,_,a,!1,h,!0),o&&this.cacheRes(t,l))}return l},n.load=function(t,n,s,r,a,o,h,l){var c=this;if(void 0===a&&(a=1),void 0===o&&(o=!0),void 0===l&&(l=!1),t instanceof Array)return this._loadAssets(t,n,s,r,a,o,h);var u=Loader.getRes(t);if(null!=u)Laya.timer.frameOnce(1,null,function(){s&&s.runWith(1),n&&n.runWith(u),c._loaderCount||c.event("complete")});else{var _=e._resMap[t];_?(n&&_._createListener("complete",n.caller,n.method,n.args,!1,!1),s&&_._createListener("progress",s.caller,s.method,s.args,!1,!1)):((_=this._infoPool.length?this._infoPool.pop():new i).url=t,_.type=r,_.cache=o,_.group=h,_.ignoreCache=l,n&&_.on("complete",n.caller,n.method,n.args),s&&_.on("progress",s.caller,s.method,s.args),e._resMap[t]=_,a=a<this._maxPriority?a:this._maxPriority-1,this._resInfos[a].push(_),this._next())}return this},n._createLoad=function(t,n,s,r,a,o,h,l,c){var u=this;if(void 0===o&&(o=1),void 0===h&&(h=!0),void 0===c&&(c=!1),n instanceof Array)return this._loadAssets(n,s,r,a,o,h,l);var _=Loader.getRes(n);if(null!=_)Laya.timer.frameOnce(1,null,function(){r&&r.runWith(1),s&&s.runWith(_),u._loaderCount||u.event("complete")});else{var d=e._resMap[n];d?(s&&d._createListener("complete",s.caller,s.method,s.args,!1,!1),r&&d._createListener("progress",r.caller,r.method,r.args,!1,!1)):((d=this._infoPool.length?this._infoPool.pop():new i).url=n,d.clas=t,d.type=a,d.cache=h,d.group=l,d.ignoreCache=c,s&&d.on("complete",s.caller,s.method,s.args),r&&d.on("progress",r.caller,r.method,r.args),e._resMap[n]=d,o=o<this._maxPriority?o:this._maxPriority-1,this._resInfos[o].push(d),this._next())}return this},n._next=function(){if(!(this._loaderCount>=this.maxLoader)){for(var t=0;t<this._maxPriority;t++)for(var e=this._resInfos[t];e.length>0;){var i=e.shift();if(i)return this._doLoad(i)}this._loaderCount||this.event("complete")}},n._doLoad=function(t){function e(e){i.offAll(),i._data=null,n._loaders.push(i),n._endLoad(t,e instanceof Array?[e]:e),n._loaderCount--,n._next()}this._loaderCount++;var i=this._loaders.length?this._loaders.pop():new Loader;i.on("complete",null,e),i.on("progress",null,function(e){t.event("progress",e)}),i.on("error",null,function(t){e(null)});var n=this;i._class=t.clas,i.load(t.url,t.type,t.cache,t.group,t.ignoreCache)},n._endLoad=function(t,i){var n=t.url;if(null==i){var s=this._failRes[n]||0;if(s<this.retryNum)return console.warn("[warn]Retry to load:",n),this._failRes[n]=s+1,void Laya.timer.once(this.retryDelay,this,this._addReTry,[t],!1);console.warn("[error]Failed to load:",n),this.event("error",n)}this._failRes[n]&&(this._failRes[n]=0),delete e._resMap[n],t.event("complete",i),t.offAll(),this._infoPool.push(t)},n._addReTry=function(t){this._resInfos[this._maxPriority-1].push(t),this._next()},n.clearRes=function(t,e){void 0===e&&(e=!1),Loader.clearRes(t,e)},n.getRes=function(t){return Loader.getRes(t)},n.cacheRes=function(t,e){Loader.cacheRes(t,e)},n.clearTextureRes=function(t){Loader.clearTextureRes(t)},n.setGroup=function(t,e){Loader.setGroup(t,e)},n.clearResByGroup=function(t){Loader.clearResByGroup(t)},n.clearUnLoaded=function(){for(var t=0;t<this._maxPriority;t++){for(var i=this._resInfos[t],n=i.length-1;n>-1;n--){var s=i[n];s&&(s.offAll(),this._infoPool.push(s))}i.length=0}this._loaderCount=0,e._resMap={}},n.cancelLoadByUrls=function(t){if(t)for(var e=0,i=t.length;e<i;e++)this.cancelLoadByUrl(t[e])},n.cancelLoadByUrl=function(t){for(var i=0;i<this._maxPriority;i++)for(var n=this._resInfos[i],s=n.length-1;s>-1;s--){var r=n[s];r&&r.url===t&&(n[s]=null,r.offAll(),this._infoPool.push(r))}e._resMap[t]&&delete e._resMap[t]},n._loadAssets=function(t,e,i,n,s,r,a){void 0===s&&(s=1),void 0===r&&(r=!0);for(var o=t.length,h=0,l=0,c=[],u=!0,_=0;_<o;_++){var d=t[_];"string"==typeof d&&(d={url:d,type:n,size:1,priority:s}),d.size||(d.size=1),d.progress=0,l+=d.size,c.push(d);var f=i?Handler.create(null,function(t,e){if(null!=i){t.progress=e;for(var n=0,s=0;s<c.length;s++){var r=c[s];n+=r.size*r.progress}var a=n/l;i.runWith(a)}},[d],!1):null,p=e||i?Handler.create(null,function(t,i){h++,t.progress=1,i||(u=!1),h===o&&e&&e.runWith(u)},[d]):null;this.load(d.url,p,f,d.type,d.priority||1,r,d.group||a)}return this},e.cacheRes=function(t,e){Loader.cacheRes(t,e)},e._resMap={},__static(e,["createMap",function(){return this.createMap={atlas:[null,"atlas"]}}]),e.__init$=function(){i=function(t){function e(){this.url=null,this.type=null,this.cache=!1,this.group=null,this.ignoreCache=!1,this.clas=null,e.__super.call(this)}return __class(e,"",EventDispatcher),e}()},e}(),ColorFilter=function(t){function e(t){e.__super.call(this),t||(t=[.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0]),this._mat=new Float32Array(16),this._alpha=new Float32Array(4);for(var i=0,n=0,s=0;s<20;s++)s%5!=4?this._mat[i++]=t[s]:this._alpha[n++]=t[s];this._action=RunDriver.createFilterAction(32),this._action.data=this}__class(e,"laya.filters.ColorFilter",Filter);var i=e.prototype;return Laya.imps(i,{"laya.filters.IFilter":!0}),i.callNative=function(t){t._$P.cf=this;t.conchModel&&t.conchModel.setFilterMatrix&&t.conchModel.setFilterMatrix(this._mat,this._alpha)},__getset(0,i,"type",function(){return 32}),__getset(0,i,"action",function(){return this._action}),e}(),Socket=function(t){function e(t,i,n){this._endian=null,this._stamp=NaN,this._socket=null,this._connected=!1,this._addInputPosition=0,this._input=null,this._output=null,this.timeout=0,this.objectEncoding=0,this.disableInput=!1,this._byteClass=null,this.protocols=[],void 0===i&&(i=0),e.__super.call(this),this._byteClass=n||Byte,this.endian="bigEndian",this.timeout=2e4,this._addInputPosition=0,t&&i>0&&i<65535&&this.connect(t,i)}__class(e,"laya.net.Socket",EventDispatcher);var i=e.prototype;return i.connect=function(t,e){var i="ws://"+t+":"+e;i="https:"==Browser.window.location.protocol?"wss://"+t+":"+e:"ws://"+t+":"+e,this.connectByUrl(i)},i.connectByUrl=function(t){var e=this;null!=this._socket&&this.close(),this._socket&&this.cleanSocket(),this.protocols&&0!=this.protocols.length?this._socket=new Browser.window.WebSocket(t,this.protocols):this._socket=new Browser.window.WebSocket(t),this._socket.binaryType="arraybuffer",this._output=new this._byteClass,this._output.endian=this.endian,this._input=new this._byteClass,this._input.endian=this.endian,this._addInputPosition=0,this._socket.onopen=function(t){e._onOpen(t)},this._socket.onmessage=function(t){e._onMessage(t)},this._socket.onclose=function(t){e._onClose(t)},this._socket.onerror=function(t){e._onError(t)}},i.cleanSocket=function(){try{this._socket.close()}catch(t){}this._connected=!1,this._socket.onopen=null,this._socket.onmessage=null,this._socket.onclose=null,this._socket.onerror=null,this._socket=null},i.close=function(){if(null!=this._socket)try{this._socket.close()}catch(t){}},i._onOpen=function(t){this._connected=!0,this.event("open",t)},i._onMessage=function(t){if(t&&t.data){var e=t.data;if(this.disableInput&&e)this.event("message",e);else{this._input.length>0&&this._input.bytesAvailable<1&&(this._input.clear(),this._addInputPosition=0);var i=this._input.pos;!this._addInputPosition&&(this._addInputPosition=0),this._input.pos=this._addInputPosition,e&&("string"==typeof e?this._input.writeUTFBytes(e):this._input.writeArrayBuffer(e),this._addInputPosition=this._input.pos,this._input.pos=i),this.event("message",e)}}},i._onClose=function(t){this._connected=!1,this.event("close",t)},i._onError=function(t){this.event("error",t)},i.send=function(t){this._socket.send(t)},i.flush=function(){if(this._output&&this._output.length>0){var t;try{this._socket&&this._socket.send(this._output.__getBuffer().slice(0,this._output.length))}catch(e){t=e}this._output.endian=this.endian,this._output.clear(),t&&this.event("error",t)}},__getset(0,i,"input",function(){return this._input}),__getset(0,i,"output",function(){return this._output}),__getset(0,i,"connected",function(){return this._connected}),__getset(0,i,"endian",function(){return this._endian},function(t){this._endian=t,null!=this._input&&(this._input.endian=t),null!=this._output&&(this._output.endian=t)}),e.LITTLE_ENDIAN="littleEndian",e.BIG_ENDIAN="bigEndian",e}(),WorkerLoader=function(t){function e(){this.worker=null,e.__super.call(this);var t=this;this.worker=new Browser.window.Worker(e.workerPath),this.worker.onmessage=function(e){t.workerMessage(e.data)}}__class(e,"laya.net.WorkerLoader",EventDispatcher);var i=e.prototype;return i.workerMessage=function(t){if(t)switch(t.type){case"Image":this.imageLoaded(t);break;case"Msg":this.event("image_msg",t.msg)}},i.imageLoaded=function(t){if(t&&t.buffer&&t.buffer.length<10)return e._enable=!1,this._myTrace("buffer lost when postmessage ,disable workerloader"),this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);if(!t.dataType)return this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);var i,n,s;switch(t.dataType){case"buffer":(s=(n=(i=new HTMLCanvas("2D")).source.getContext("2d")).createImageData(t.width,t.height)).data.set(t.buffer),i.size(s.width,s.height),n.putImageData(s,0,0),i.memorySize=0;break;case"imagedata":n=(i=new HTMLCanvas("2D")).source.getContext("2d"),s=t.imagedata,i.size(s.width,s.height),n.putImageData(s,0,0),s=t.imagedata,i.memorySize=0;break;case"imageBitmap":s=t.imageBitmap,Render.isWebGL?i=s:(n=(i=new HTMLCanvas("2D")).source.getContext("2d"),i.size(s.width,s.height),n.drawImage(s,0,0),i.src=t.url)}Render.isWebGL&&(i=new laya.webgl.resource.WebGLImage(i,t.url)),this.event(t.url,i)},i._myTrace=function(t){var e=arguments,i=[],n=0,s=e.length;for(n=0;n<s;n++)i.push(e[n]);this.event("image_msg",i.join(" "))},i.loadImage=function(t){var e;(e={}).type="load",e.url=t,this.worker.postMessage(e)},i._loadImage=function(t){var i=this;if(!e._enable||t.toLowerCase().indexOf(".png")<0)e._preLoadFun.call(i,t);else{t=URL.formatURL(t);var n=function(s){laya.net.WorkerLoader.I.off(t,i,n),s?i.onLoaded(s):e._preLoadFun.call(i,t)};laya.net.WorkerLoader.I.on(t,i,n),laya.net.WorkerLoader.I.loadImage(t)}},__getset(1,e,"enable",function(){return e._enable},function(t){e.disableJSDecode&&!Browser.window.createImageBitmap||(e._enable=t)&&null==e._preLoadFun&&(e._enable=e.__init__())}),e.__init__=function(){return null==e._preLoadFun&&(!!Browser.window.Worker&&(e._preLoadFun=Loader.prototype._loadImage,Loader.prototype._loadImage=e.prototype._loadImage,e.I||(e.I=new e),!0))},e.workerSupported=function(){return!!Browser.window.Worker},e.IMAGE_LOADED="image_loaded",e.IMAGE_ERR="image_err",e.IMAGE_MSG="image_msg",e.I=null,e._preLoadFun=null,e._enable=!1,e.workerPath="libs/worker.js",e.disableJSDecode=!0,e}(),Resource=function(t){function e(){e.__super.call(this),this._$1__id=++e._uniqueIDCounter,this.__loaded=!0,this._destroyed=!1,this._referenceCount=0,e._idResourcesMap[this.id]=this,this._released=!0,this.lock=!1,this._memorySize=0,this._lastUseFrameCount=-1,ResourceManager.currentResourceManager&&ResourceManager.currentResourceManager.addResource(this)}__class(e,"laya.resource.Resource",EventDispatcher);var i=e.prototype;return Laya.imps(i,{"laya.resource.ICreateResource":!0,"laya.resource.IDispose":!0}),i._setUrl=function(t){if(this._url!==t){var i;this._url&&((i=e._urlResourcesMap[this._url]).splice(i.indexOf(this),1),0===i.length&&delete e._urlResourcesMap[this._url]),t&&((i=e._urlResourcesMap[t])||(e._urlResourcesMap[t]=i=[]),i.push(this)),this._url=t}},i._getGroup=function(){return this._group},i._setGroup=function(t){if(this._group!==t){var i;this._group&&((i=e._groupResourcesMap[this._group]).splice(i.indexOf(this),1),0===i.length&&delete e._groupResourcesMap[this._group]),t&&((i=e._groupResourcesMap[t])||(e._groupResourcesMap[t]=i=[]),i.push(this)),this._group=t}},i._addReference=function(){this._referenceCount++},i._removeReference=function(){this._referenceCount--},i._clearReference=function(){this._referenceCount=0},i._endLoaded=function(){this.__loaded=!0,this.event("loaded",this)},i.recreateResource=function(){this.completeCreate()},i.disposeResource=function(){},i.activeResource=function(t){void 0===t&&(t=!1),this._lastUseFrameCount=Stat.loopCount,!this._destroyed&&this.__loaded&&(this._released||t)&&this.recreateResource()},i.releaseResource=function(t){return void 0===t&&(t=!1),!(!t&&this.lock)&&(!(this._released&&!t)&&(this.disposeResource(),this._released=!0,this._lastUseFrameCount=-1,this.event("released",this),!0))},i.onAsynLoaded=function(t,e,i){throw new Error("Resource: must override this function!")},i.destroy=function(){if(!this._destroyed){null!==this._resourceManager&&this._resourceManager.removeResource(this),this._destroyed=!0,this.lock=!1,this.releaseResource(),delete e._idResourcesMap[this.id];var t;this._url&&((t=e._urlResourcesMap[this._url])&&(t.splice(t.indexOf(this),1),0===t.length&&delete e._urlResourcesMap[this.url]),Loader.clearRes(this._url)),this._group&&((t=e._groupResourcesMap[this._group]).splice(t.indexOf(this),1),0===t.length&&delete e._groupResourcesMap[this.url])}},i.completeCreate=function(){this._released=!1,this.event("recovered",this)},i.dispose=function(){this.destroy()},__getset(0,i,"memorySize",function(){return this._memorySize},function(t){var e=t-this._memorySize;this._memorySize=t,this.resourceManager&&this.resourceManager.addSize(e)}),__getset(0,i,"_loaded",null,function(t){this.__loaded=t}),__getset(0,i,"loaded",function(){return this.__loaded}),__getset(0,i,"id",function(){return this._$1__id}),__getset(0,i,"destroyed",function(){return this._destroyed}),__getset(0,i,"group",function(){return this._getGroup()},function(t){this._setGroup(t)}),__getset(0,i,"resourceManager",function(){return this._resourceManager}),__getset(0,i,"url",function(){return this._url}),__getset(0,i,"released",function(){return this._released}),__getset(0,i,"referenceCount",function(){return this._referenceCount}),e.getResourceByID=function(t){return e._idResourcesMap[t]},e.getResourceByURL=function(t,i){return void 0===i&&(i=0),e._urlResourcesMap[t][i]},e.getResourceCountByURL=function(t){return e._urlResourcesMap[t].length},e.destroyUnusedResources=function(t){var i;if(t){var n=e._groupResourcesMap[t];if(n)for(var s=n.slice(),r=0,a=s.length;r<a;r++)(i=s[r]).lock||0!==i._referenceCount||i.destroy()}else for(var o in e._idResourcesMap)(i=e._idResourcesMap[o]).lock||0!==i._referenceCount||i.destroy()},e._uniqueIDCounter=0,e._idResourcesMap={},e._urlResourcesMap={},e._groupResourcesMap={},e}(),Texture=function(t){function e(t,i){this.offsetX=0,this.offsetY=0,this.sourceWidth=0,this.sourceHeight=0,this._w=0,this._h=0,this._uvID=0,this._atlasID=-1,this.scaleRate=1,e.__super.call(this),t&&t._addReference(),this.setTo(t,i)}__class(e,"laya.resource.Texture",EventDispatcher);var i=e.prototype;return i._setUrl=function(t){this.url=t},i.setTo=function(t,i){if(t instanceof window.HTMLElement){var n=HTMLCanvas.create("2D",t);this.bitmap=n}else this.bitmap=t;if(this.uv=i||e.DEF_UV,t){this._w=t.width,this._h=t.height,this.sourceWidth=this.sourceWidth||this._w,this.sourceHeight=this.sourceHeight||this._h,this._loaded=this._w>0;var s=this;if(this._loaded)RunDriver.addToAtlas&&RunDriver.addToAtlas(s);else{var r=t;r instanceof laya.resource.HTMLImage&&r.image&&r.image.addEventListener("load",function(t){RunDriver.addToAtlas&&RunDriver.addToAtlas(s)},!1)}}},i.active=function(){this.bitmap&&this.bitmap.activeResource()},i.destroy=function(t){if(void 0===t&&(t=!1),this.bitmap&&this.bitmap.referenceCount>0){var e=this.bitmap;t?(Render.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose(),e._clearReference()):(e._removeReference(),0==e.referenceCount&&(Render.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose())),this.url&&this===Laya.loader.getRes(this.url)&&Laya.loader.clearRes(this.url,t),this._loaded=!1}},i.load=function(t){var e=this;this._loaded=!1,t=URL.customFormat(t);var i=this.bitmap||(this.bitmap=HTMLImage.create(t));i&&i._addReference();var n=this;i.onload=function(){i.onload=null,n._loaded=!0,e.sourceWidth=e._w=i.width,e.sourceHeight=e._h=i.height,n.event("loaded",this),RunDriver.addToAtlas&&RunDriver.addToAtlas(n)}},i.addTextureToAtlas=function(t){RunDriver.addTextureToAtlas(this)},i.getPixels=function(t,e,i,n){if(Render.isConchApp){var s=this.bitmap;if(s.source&&s.source.getImageData){var r=s.source.getImageData(t,e,i,n),a=new Uint8Array(r);return Array.from(a)}return null}if(Render.isWebGL)return RunDriver.getTexturePixels(this,t,e,i,n);Browser.canvas.size(i,n),Browser.canvas.clear(),Browser.context.drawTexture(this,-t,-e,this.width,this.height,0,0);return Browser.context.getImageData(0,0,i,n).data},i.onAsynLoaded=function(t,e){e&&e._addReference(),this.setTo(e,this.uv)},__getset(0,i,"source",function(){return this.bitmap?(this.bitmap.activeResource(),this.bitmap.source):null}),__getset(0,i,"loaded",function(){return this._loaded}),__getset(0,i,"released",function(){return!this.bitmap||this.bitmap.released}),__getset(0,i,"width",function(){return this._w?this._w:this.uv&&this.uv!==e.DEF_UV?(this.uv[2]-this.uv[0])*this.bitmap.width:this.bitmap.width},function(t){this._w=t,this.sourceWidth||(this.sourceWidth=t)}),__getset(0,i,"repeat",function(){return!Render.isWebGL||!this.bitmap||this.bitmap.repeat},function(t){t&&Render.isWebGL&&this.bitmap&&(this.bitmap.repeat=t,t&&(this.bitmap.enableMerageInAtlas=!1))}),__getset(0,i,"height",function(){return this._h?this._h:this.uv&&this.uv!==e.DEF_UV?(this.uv[5]-this.uv[1])*this.bitmap.height:this.bitmap.height},function(t){this._h=t,this.sourceHeight||(this.sourceHeight=t)}),__getset(0,i,"isLinearSampling",function(){return!Render.isWebGL||9728!=this.bitmap.minFifter},function(t){!t&&Render.isWebGL&&(t||-1!=this.bitmap.minFifter||-1!=this.bitmap.magFifter||(this.bitmap.minFifter=9728,this.bitmap.magFifter=9728,this.bitmap.enableMerageInAtlas=!1))}),e.moveUV=function(t,e,i){for(var n=0;n<8;n+=2)i[n]+=t,i[n+1]+=e;return i},e.create=function(t,i,n,s,r,a,o,h,l){void 0===a&&(a=0),void 0===o&&(o=0),void 0===h&&(h=0),void 0===l&&(l=0);var c=t instanceof laya.resource.Texture,u=c?t.uv:e.DEF_UV,_=c?t.bitmap:t,d=RunDriver.isAtlas(_);if(d){var f=_._atlaser,p=t._atlasID;if(-1==p)throw new Error("create texture error");_=f._inAtlasTextureBitmapValue[p],u=f._inAtlasTextureOriUVValue[p]}var g=new e(_,null);_.width&&i+s>_.width&&(s=_.width-i),_.height&&n+r>_.height&&(r=_.height-n),g.width=s,g.height=r,g.offsetX=a,g.offsetY=o,g.sourceWidth=h||s,g.sourceHeight=l||r;var m=1/_.width,v=1/_.height;i*=m,n*=v,s*=m,r*=v;var y=g.uv[0],w=g.uv[1],x=g.uv[4],T=g.uv[5],b=x-y,C=T-w,M=e.moveUV(u[0],u[1],[i,n,i+s,n,i+s,n+r,i,n+r]);g.uv=[y+M[0]*b,w+M[1]*C,x-(1-M[2])*b,w+M[3]*C,x-(1-M[4])*b,T-(1-M[5])*C,y+M[6]*b,T-(1-M[7])*C],d&&g.addTextureToAtlas();var S=_.scaleRate;return S&&1!=S?(g.sourceWidth/=S,g.sourceHeight/=S,g.width/=S,g.height/=S,g.scaleRate=S,g.offsetX/=S,g.offsetY/=S):g.scaleRate=1,g},e.createFromTexture=function(t,i,n,s,r){var a=t.scaleRate;1!=a&&(i*=a,n*=a,s*=a,r*=a);var o=Rectangle.TEMP.setTo(i-t.offsetX,n-t.offsetY,s,r),h=o.intersection(e._rect1.setTo(0,0,t.width,t.height),e._rect2);if(!h)return null;var l=e.create(t,h.x,h.y,h.width,h.height,h.x-o.x,h.y-o.y,s,r);return l.bitmap._removeReference(),l},__static(e,["DEF_UV",function(){return this.DEF_UV=[0,0,1,0,1,1,0,1]},"INV_UV",function(){return this.INV_UV=[0,1,1,1,1,0,0,0]},"_rect1",function(){return this._rect1=new Rectangle},"_rect2",function(){return this._rect2=new Rectangle}]),e}(),TimeLine=function(t){function e(){this._labelDic=null,this._tweenDic={},this._tweenDataList=[],this._endTweenDataList=null,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this._firstTweenDic={},this._startTimeSort=!1,this._endTimeSort=!1,this._loopKey=!1,this.scale=1,this._frameRate=60,this._frameIndex=0,this._total=0,e.__super.call(this)}var i;__class(e,"laya.utils.TimeLine",EventDispatcher);var n=e.prototype;return n.to=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!0)},n.from=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!1)},n._create=function(t,e,n,s,r,a){var o=Pool.getItemByClass("tweenData",i);return o.isTo=a,o.type=0,o.target=t,o.duration=n,o.data=e,o.startTime=this._startTime+r,o.endTime=o.startTime+o.duration,o.ease=s,this._startTime=Math.max(o.endTime,this._startTime),this._tweenDataList.push(o),this._startTimeSort=!0,this._endTimeSort=!0,this},n.addLabel=function(t,e){var n=Pool.getItemByClass("tweenData",i);return n.type=1,n.data=t,n.endTime=n.startTime=this._startTime+e,this._labelDic||(this._labelDic={}),this._labelDic[t]=n,this._tweenDataList.push(n),this},n.removeLabel=function(t){if(this._labelDic&&this._labelDic[t]){var e=this._labelDic[t];if(e){var i=this._tweenDataList.indexOf(e);i>-1&&this._tweenDataList.splice(i,1)}delete this._labelDic[t]}},n.gotoTime=function(t){if(null!=this._tweenDataList&&0!=this._tweenDataList.length){var e,i;for(var n in this._firstTweenDic)if(i=this._firstTweenDic[n])for(var s in i)i.diyTarget.hasOwnProperty(s)&&(i.diyTarget[s]=i[s]);for(n in this._tweenDic)(e=this._tweenDic[n]).clear(),delete this._tweenDic[n];this._index=0,this._gidIndex=0,this._currTime=t,this._lastTime=Browser.now();var r;null==this._endTweenDataList||this._endTimeSort?(this._endTimeSort=!1,this._endTweenDataList=r=this._tweenDataList.concat(),r.sort(function(t,e){return t.endTime>e.endTime?1:t.endTime<e.endTime?-1:0})):r=this._endTweenDataList;for(var a,o=0,h=r.length;o<h;o++)if(0==(a=r[o]).type){if(!(t>=a.endTime))break;this._index=Math.max(this._index,o+1);var l=a.data;if(a.isTo)for(var c in l)a.target[c]=l[c]}for(o=0,h=this._tweenDataList.length;o<h;o++)0==(a=this._tweenDataList[o]).type&&t>=a.startTime&&t<a.endTime&&(this._index=Math.max(this._index,o+1),this._gidIndex++,(e=Pool.getItemByClass("tween",Tween))._create(a.target,a.data,a.duration,a.ease,Handler.create(this,this._animComplete,[this._gidIndex]),0,!1,a.isTo,!0,!1),e.setStartTime(this._currTime-(t-a.startTime)),e._updateEase(this._currTime),e.gid=this._gidIndex,this._tweenDic[this._gidIndex]=e)}},n.gotoLabel=function(t){if(null!=this._labelDic){var e=this._labelDic[t];e&&this.gotoTime(e.startTime)}},n.pause=function(){Laya.timer.clear(this,this._update)},n.resume=function(){this.play(this._currTime,this._loopKey)},n.play=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=!1),this._tweenDataList){if(this._startTimeSort){this._startTimeSort=!1,this._tweenDataList.sort(function(t,e){return t.startTime>e.startTime?1:t.startTime<e.startTime?-1:0});for(var i=0,n=this._tweenDataList.length;i<n;i++){var s=this._tweenDataList[i];if(null!=s&&0==s.type){var r=s.target,a=r.$_GID||(r.$_GID=Utils.getGID()),o=null;null==this._firstTweenDic[a]?((o={}).diyTarget=r,this._firstTweenDic[a]=o):o=this._firstTweenDic[a];for(var h in s.data)null==o[h]&&(o[h]=r[h])}}}"string"==typeof t?this.gotoLabel(t):this.gotoTime(t),this._loopKey=e,this._lastTime=Browser.now(),Laya.timer.frameLoop(1,this,this._update)}},n._update=function(){if(this._currTime>=this._startTime){if(!this._loopKey){for(var t in this._tweenDic)(s=this._tweenDic[t]).complete();return this._complete(),void this.pause()}if(this._complete(),!this._tweenDataList)return;this.gotoTime(0)}var e=Browser.now(),i=e-this._lastTime,n=this._currTime+=i*this.scale;this._lastTime=e;for(t in this._tweenDic)(s=this._tweenDic[t])._updateEase(n);var s;if(0!=this._tweenDataList.length&&this._index<this._tweenDataList.length){var r=this._tweenDataList[this._index];n>=r.startTime&&(this._index++,0==r.type?(this._gidIndex++,(s=Pool.getItemByClass("tween",Tween))._create(r.target,r.data,r.duration,r.ease,Handler.create(this,this._animComplete,[this._gidIndex]),0,!1,r.isTo,!0,!1),s.setStartTime(n),s.gid=this._gidIndex,this._tweenDic[this._gidIndex]=s,s._updateEase(n)):this.event("label",r.data))}},n._animComplete=function(t){this._tweenDic[t]&&delete this._tweenDic[t]},n._complete=function(){this.event("complete")},n.reset=function(){var t;if(this._labelDic)for(t in this._labelDic)delete this._labelDic[t];for(t in this._tweenDic)this._tweenDic[t].clear(),delete this._tweenDic[t];for(t in this._firstTweenDic)delete this._firstTweenDic[t];if(this._endTweenDataList=null,this._tweenDataList&&this._tweenDataList.length){var e=0,i=0;for(i=this._tweenDataList.length,e=0;e<i;e++)this._tweenDataList[e]&&this._tweenDataList[e].destroy()}this._tweenDataList.length=0,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this.scale=1,Laya.timer.clear(this,this._update)},n.destroy=function(){this.reset(),this._labelDic=null,this._tweenDic=null,this._tweenDataList=null,this._firstTweenDic=null},__getset(0,n,"index",function(){return this._frameIndex},function(t){this._frameIndex=t,this.gotoTime(this._frameIndex/this._frameRate*1e3)}),__getset(0,n,"total",function(){return this._total=Math.floor(this._startTime/1e3*this._frameRate),this._total}),e.to=function(t,i,n,s,r){return void 0===r&&(r=0),(new e).to(t,i,n,s,r)},e.from=function(t,i,n,s,r){return void 0===r&&(r=0),(new e).from(t,i,n,s,r)},e.__init$=function(){i=function(){function t(){this.type=0,this.isTo=!0,this.startTime=NaN,this.endTime=NaN,this.target=null,this.duration=NaN,this.ease=null,this.data=null}__class(t,"");return t.prototype.destroy=function(){this.target=null,this.ease=null,this.data=null,this.isTo=!0,this.type=0,Pool.recover("tweenData",this)},t}()},e}(),Sprite=function(t){function e(){this._transform=null,this._tfChanged=!1,this._x=0,this._y=0,this._width=0,this._height=0,this._repaint=1,this._mouseEnableState=0,this._zOrder=0,this._graphics=null,this._renderType=0,this._optimizeScrollRect=!1,this._texture=null,this.mouseThrough=!1,this.autoSize=!1,this.hitTestPrior=!1,this.viewport=null,e.__super.call(this),this._style=Style.EMPTY}__class(e,"laya.display.Sprite",t);var i=e.prototype;return Laya.imps(i,{"laya.display.ILayout":!0}),i.createConchModel=function(){return new ConchNode},i.destroy=function(e){void 0===e&&(e=!0),this._releaseMem(),t.prototype.destroy.call(this,e),this._style&&this._style.destroy(),this._transform&&this._transform.destroy(),this._transform=null,this._style=null,this._graphics=null},i.updateZOrder=function(){Utils.updateOrder(this._childs)&&this.repaint()},i.reCache=function(){this._$P.cacheCanvas&&(this._$P.cacheCanvas.reCache=!0),this._repaint=1},i.setBounds=function(t){this._set$P("uBounds",t)},i.getBounds=function(){return this._$P.mBounds||this._set$P("mBounds",new Rectangle),Rectangle._getWrapRec(this._boundPointsToParent(),this._$P.mBounds)},i.getSelfBounds=function(){return this._$P.uBounds?this._$P.uBounds:(this._$P.mBounds||this._set$P("mBounds",new Rectangle),Rectangle._getWrapRec(this._getBoundPointsM(!1),this._$P.mBounds))},i._boundPointsToParent=function(t){void 0===t&&(t=!1);var e=0,i=0;this._style&&(e=this._style._tf.translateX,i=this._style._tf.translateY,t=t||0!==this._style._tf.rotate,this._style.scrollRect&&(e+=this._style.scrollRect.x,i+=this._style.scrollRect.y));var n=this._getBoundPointsM(t);if(!n||n.length<1)return n;if(8!=n.length&&(n=t?GrahamScan.scanPList(n):Rectangle._getWrapRec(n,Rectangle.TEMP)._getBoundPoints()),!this.transform)return Utils.transPointList(n,this._x-e,this._y-i),n;var s=Point.TEMP,r=0,a=n.length;for(r=0;r<a;r+=2)s.x=n[r],s.y=n[r+1],this.toParentPoint(s),n[r]=s.x,n[r+1]=s.y;return n},i.getGraphicBounds=function(t){return void 0===t&&(t=!1),this._graphics?this._graphics.getBounds(t):Rectangle.TEMP.setTo(0,0,0,0)},i._getBoundPointsM=function(t){if(void 0===t&&(t=!1),this._$P.uBounds)return this._$P.uBounds._getBoundPoints();if(this._$P.temBM||this._set$P("temBM",[]),this.scrollRect){var e=Utils.clearArray(this._$P.temBM),i=Rectangle.TEMP;return i.copyFrom(this.scrollRect),Utils.concatArray(e,i._getBoundPoints()),e}for(var n,s,r,a=this._graphics?this._graphics.getBoundPoints():Utils.clearArray(this._$P.temBM),o=0,h=(r=this._childs).length;o<h;o++)(n=r[o])instanceof laya.display.Sprite&&1==n.visible&&(s=n._boundPointsToParent(t))&&(a=a?Utils.concatArray(a,s):s);return a},i.getStyle=function(){return this._style===Style.EMPTY&&(this._style=new Style),this._style},i.setStyle=function(t){this._style=t},i._adjustTransform=function(){"use strict";this._tfChanged=!1;var t,e=this._style._tf,i=e.scaleX,n=e.scaleY;if(e.rotate||1!==i||1!==n||e.skewX||e.skewY){(t=this._transform||(this._transform=Matrix.create())).bTransform=!0;var s=.0174532922222222*(e.rotate-e.skewX),r=.0174532922222222*(e.rotate+e.skewY),a=Math.cos(r),o=Math.sin(r),h=Math.sin(s),l=Math.cos(s);return t.a=i*a,t.b=i*o,t.c=-n*h,t.d=n*l,t.tx=t.ty=0,t}return this._transform&&this._transform.destroy(),this._transform=null,this._renderType&=-5,t},i.pos=function(t,e,i){if(void 0===i&&(i=!1),this._x!==t||this._y!==e){if(this.destroyed)return this;if(i){this._x=t,this._y=e,this.conchModel&&this.conchModel.pos(this._x,this._y);var n=this._parent;n&&0===n._repaint&&(n._repaint=1,n.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}else this.x=t,this.y=e}return this},i.pivot=function(t,e){return this.pivotX=t,this.pivotY=e,this},i.size=function(t,e){return this.width=t,this.height=e,this},i.scale=function(t,e,i){void 0===i&&(i=!1);var n=this.getStyle(),s=n._tf;if(s.scaleX!=t||s.scaleY!=e){if(this.destroyed)return this;if(i){n.setScale(t,e),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e),this._renderType|=4;var r=this._parent;r&&0===r._repaint&&(r._repaint=1,r.parentRepaint())}else this.scaleX=t,this.scaleY=e}return this},i.skew=function(t,e){return this.skewX=t,this.skewY=e,this},i.render=function(t,e,i){Stat.spriteCount++,RenderSprite.renders[this._renderType]._fun(this,t,e+this._x,i+this._y),this._repaint=0},i.drawToCanvas=function(t,e,i,n){if(Render.isConchNode){var s=HTMLCanvas.create("2D");return new RenderContext(t,e,s).ctx.setCanvasType(1),this.conchModel.drawToCanvas(s.source,i,n),s}return RunDriver.drawToCanvas(this,this._renderType,t,e,i,n)},i.customRender=function(t,e,i){this._renderType|=1024},i._applyFilters=function(){if(!Render.isWebGL){var t;if((t=this._$P.filters)&&!(t.length<1))for(var e=0,i=t.length;e<i;e++)t[e].action.apply(this._$P.cacheCanvas)}},i._isHaveGlowFilter=function(){var t=0,e=0;if(this.filters)for(t=0;t<this.filters.length;t++)if(8==this.filters[t].type)return!0;for(t=0,e=this._childs.length;t<e;t++)if(this._childs[t]._isHaveGlowFilter())return!0;return!1},i.localToGlobal=function(t,e){void 0===e&&(e=!1),!0===e&&(t=new Point(t.x,t.y));for(var i=this;i&&i!=Laya.stage;)t=i.toParentPoint(t),i=i.parent;return t},i.globalToLocal=function(t,e){void 0===e&&(e=!1),e&&(t=new Point(t.x,t.y));for(var i=this,n=[];i&&i!=Laya.stage;)n.push(i),i=i.parent;for(var s=n.length-1;s>=0;)t=(i=n[s]).fromParentPoint(t),s--;return t},i.toParentPoint=function(t){if(!t)return t;t.x-=this.pivotX,t.y-=this.pivotY,this.transform&&this._transform.transformPoint(t),t.x+=this._x,t.y+=this._y;var e=this._style.scrollRect;return e&&(t.x-=e.x,t.y-=e.y),t},i.fromParentPoint=function(t){if(!t)return t;t.x-=this._x,t.y-=this._y;var e=this._style.scrollRect;return e&&(t.x+=e.x,t.y+=e.y),this.transform&&this._transform.invertTransformPoint(t),t.x+=this.pivotX,t.y+=this.pivotY,t},i.on=function(e,i,n,s){return 1!==this._mouseEnableState&&this.isMouseEvent(e)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(e,i,n,s,!1)):t.prototype.on.call(this,e,i,n,s)},i.once=function(e,i,n,s){return 1!==this._mouseEnableState&&this.isMouseEvent(e)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(e,i,n,s,!0)):t.prototype.once.call(this,e,i,n,s)},i._$2__onDisplay=function(){if(1!==this._mouseEnableState){var t=this;for(t=t.parent;t&&1!==t._mouseEnableState&&!t._getBit(2);)t.mouseEnabled=!0,t._setBit(2,!0),t=t.parent}},i.loadImage=function(t,e,i,n,s,r){var a=this;return void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),this.graphics.loadImage(t,e,i,n,s,function(t){a.destroyed||(a.size(e+(n||t.width),i+(s||t.height)),a.repaint(),r&&r.runWith(t))}),this},i.repaint=function(){this.conchModel&&this.conchModel.repaint&&this.conchModel.repaint(),0===this._repaint&&(this._repaint=1,this.parentRepaint()),this._$P&&this._$P.maskParent&&this._$P.maskParent.repaint()},i._needRepaint=function(){return 0!==this._repaint&&this._$P.cacheCanvas&&this._$P.cacheCanvas.reCache},i._childChanged=function(t){this._childs.length?this._renderType|=2048:this._renderType&=-2049,t&&this._get$P("hasZorder")&&Laya.timer.callLater(this,this.updateZOrder),this.repaint()},i.parentRepaint=function(){var t=this._parent;t&&0===t._repaint&&(t._repaint=1,t.parentRepaint())},i.startDrag=function(t,e,i,n,s,r,a){void 0===e&&(e=!1),void 0===i&&(i=0),void 0===n&&(n=300),void 0===r&&(r=!1),void 0===a&&(a=.92),this._$P.dragging||this._set$P("dragging",new Dragging),this._$P.dragging.start(this,t,e,i,n,s,r,a)},i.stopDrag=function(){this._$P.dragging&&this._$P.dragging.stop()},i._releaseMem=function(){if(this._$P){var t=this._$P.cacheCanvas;t&&t.ctx&&(Pool.recover("RenderContext",t.ctx),t.ctx.canvas.size(0,0),t.ctx=null);var e=this._$P._filterCache;e&&(e.destroy(),e.recycle(),this._set$P("_filterCache",null)),this._$P._isHaveGlowFilter&&this._set$P("_isHaveGlowFilter",!1),this._$P._isHaveGlowFilter=null}},i._setDisplay=function(e){e||this._releaseMem(),t.prototype._setDisplay.call(this,e)},i.hitTestPoint=function(t,e){var i=this.globalToLocal(Point.TEMP.setTo(t,e));t=i.x,e=i.y;return(this._$P.hitArea?this._$P.hitArea:this._width>0&&this._height>0?Rectangle.TEMP.setTo(0,0,this._width,this._height):this.getSelfBounds()).contains(t,e)},i.getMousePoint=function(){return this.globalToLocal(Point.TEMP.setTo(Laya.stage.mouseX,Laya.stage.mouseY))},i._getWords=function(){return null},i._addChildsToLayout=function(t){var e=this._getWords();if(null==e&&0==this._childs.length)return!1;if(e)for(var i=0,n=e.length;i<n;i++)t.push(e[i]);return this._childs.forEach(function(e,i,n){e._style._enableLayout()&&e._addToLayout(t)}),!0},i._addToLayout=function(t){this._style.absolute||(this._style.block?t.push(this):this._addChildsToLayout(t)&&(this.x=this.y=0))},i._isChar=function(){return!1},i._getCSSStyle=function(){return this._style.getCSSStyle()},i._setAttributes=function(t,e){switch(t){case"x":this.x=parseFloat(e);break;case"y":this.y=parseFloat(e);break;case"width":this.width=parseFloat(e);break;case"height":this.height=parseFloat(e);break;default:this[t]=e}},i._layoutLater=function(){this.parent&&this.parent._layoutLater()},__getset(0,i,"optimizeScrollRect",function(){return this._optimizeScrollRect},function(t){this._optimizeScrollRect!=t&&(this._optimizeScrollRect=t,this.conchModel&&this.conchModel.optimizeScrollRect(t))}),__getset(0,i,"customRenderEnable",null,function(t){if(t&&(this._renderType|=1024,Render.isConchNode)){e.CustomList.push(this);var i=new HTMLCanvas("2d");i._setContext(new CanvasRenderingContext2D),this.customContext=new RenderContext(0,0,i),i.context.setCanvasType&&i.context.setCanvasType(2),this.conchModel.custom(i.context)}}),__getset(0,i,"cacheAsBitmap",function(){return"none"!==this.cacheAs},function(t){this.cacheAs=t?this._$P.hasFilter?"none":"normal":"none"}),__getset(0,i,"cacheAs",function(){return null==this._$P.cacheCanvas?"none":this._$P.cacheCanvas.type},function(t){var e=this._$P.cacheCanvas;if(t!==(e?e.type:"none")){if("none"!==t)this._getBit(1)||this._setUpNoticeType(1),e||(e=this._set$P("cacheCanvas",Pool.getItemByClass("cacheCanvas",Object))),e.type=t,e.reCache=!0,this._renderType|=16,"bitmap"==t&&this.conchModel&&this.conchModel.cacheAs(1),this._set$P("cacheForFilters",!1);else if(this._$P.hasFilter)this._set$P("cacheForFilters",!0);else{if(e){var i=e;i&&i.ctx&&(Pool.recover("RenderContext",i.ctx),i.ctx.canvas.size(0,0),i.ctx=null),Pool.recover("cacheCanvas",e)}this._$P.cacheCanvas=null,this._renderType&=-17,this.conchModel&&this.conchModel.cacheAs(0)}this.repaint()}}),__getset(0,i,"zOrder",function(){return this._zOrder},function(t){this._zOrder!=t&&(this._zOrder=t,this.conchModel&&this.conchModel.setZOrder&&this.conchModel.setZOrder(t),this._parent&&(t&&this._parent._set$P("hasZorder",!0),Laya.timer.callLater(this._parent,this.updateZOrder)))}),__getset(0,i,"rotation",function(){return this._style._tf.rotate},function(t){var e=this.getStyle();if(e._tf.rotate!==t){e.setRotate(t),this._tfChanged=!0,this.conchModel&&this.conchModel.rotate(t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),__getset(0,i,"width",function(){return this.autoSize?this.getSelfBounds().width:this._width},function(t){this._width!==t&&(this._width=t,this.conchModel&&this.conchModel.size(t,this._height),this.repaint())}),__getset(0,i,"x",function(){return this._x},function(t){if(this._x!==t){if(this.destroyed)return;this._x=t,this.conchModel&&this.conchModel.pos(t,this._y);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),__getset(0,i,"globalScaleY",function(){for(var t=1,e=this;e&&e!==Laya.stage;)t*=e.scaleY,e=e.parent;return t}),__getset(0,i,"hitArea",function(){return this._$P.hitArea},function(t){this._set$P("hitArea",t)}),__getset(0,i,"staticCache",function(){return this._$P.staticCache},function(t){this._set$P("staticCache",t),t||this.reCache()}),__getset(0,i,"texture",function(){return this._texture},function(t){this._texture!=t&&(this._texture=t,this.graphics.cleanByTexture(t,0,0))}),__getset(0,i,"y",function(){return this._y},function(t){if(this._y!==t){if(this.destroyed)return;this._y=t,this.conchModel&&this.conchModel.pos(this._x,t);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),__getset(0,i,"height",function(){return this.autoSize?this.getSelfBounds().height:this._height},function(t){this._height!==t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,t),this.repaint())}),__getset(0,i,"blendMode",function(){return this._style.blendMode},function(t){this.getStyle().blendMode=t,this.conchModel&&this.conchModel.blendMode(t),t&&"source-over"!=t?this._renderType|=8:this._renderType&=-9,this.parentRepaint()}),__getset(0,i,"scaleX",function(){return this._style._tf.scaleX},function(t){var e=this.getStyle();if(e._tf.scaleX!==t){e.setScaleX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e._tf.scaleY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),__getset(0,i,"scaleY",function(){return this._style._tf.scaleY},function(t){var e=this.getStyle();if(e._tf.scaleY!==t){e.setScaleY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(e._tf.scaleX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),__getset(0,i,"stage",function(){return Laya.stage}),__getset(0,i,"skewX",function(){return this._style._tf.skewX},function(t){var e=this.getStyle();if(e._tf.skewX!==t){e.setSkewX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(t,e._tf.skewY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),__getset(0,i,"scrollRect",function(){return this._style.scrollRect},function(t){this.getStyle().scrollRect=t,this.repaint(),t?(this._renderType|=128,this.conchModel&&this.conchModel.scrollRect(t.x,t.y,t.width,t.height)):(this._renderType&=-129,this.conchModel&&(e.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(64):this.conchModel.removeType(128)))}),__getset(0,i,"skewY",function(){return this._style._tf.skewY},function(t){var e=this.getStyle();if(e._tf.skewY!==t){e.setSkewY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(e._tf.skewX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),__getset(0,i,"transform",function(){return this._tfChanged?this._adjustTransform():this._transform},function(t){this._tfChanged=!1,this._transform=t,t&&(this._x=t.tx,this._y=t.ty,t.tx=t.ty=0,this.conchModel&&this.conchModel.transform(t.a,t.b,t.c,t.d,this._x,this._y)),t?this._renderType|=4:(this._renderType&=-5,this.conchModel&&this.conchModel.removeType(4)),this.parentRepaint()}),__getset(0,i,"pivotX",function(){return this._style._tf.translateX},function(t){this.getStyle().setTranslateX(t),this.conchModel&&this.conchModel.pivot(t,this._style._tf.translateY),this.repaint()}),__getset(0,i,"pivotY",function(){return this._style._tf.translateY},function(t){this.getStyle().setTranslateY(t),this.conchModel&&this.conchModel.pivot(this._style._tf.translateX,t),this.repaint()}),__getset(0,i,"alpha",function(){return this._style.alpha},function(t){this._style&&this._style.alpha!==t&&(t=t<0?0:t>1?1:t,this.getStyle().alpha=t,this.conchModel&&this.conchModel.alpha(t),1!==t?this._renderType|=2:this._renderType&=-3,this.parentRepaint())}),__getset(0,i,"visible",function(){return this._style.visible},function(t){this._style&&this._style.visible!==t&&(this.getStyle().visible=t,this.conchModel&&this.conchModel.visible(t),this.parentRepaint())}),__getset(0,i,"graphics",function(){return this._graphics||(this.graphics=RunDriver.createGraphics())},function(t){this._graphics&&(this._graphics._sp=null),this._graphics=t,t?(this._renderType&=-2,this._renderType|=512,t._sp=this,this.conchModel&&this.conchModel.graphics(this._graphics)):(this._renderType&=-513,this._renderType&=-2,this.conchModel&&(e.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(256):this.conchModel.removeType(512))),this.repaint()}),__getset(0,i,"filters",function(){return this._$P.filters},function(t){t&&0===t.length&&(t=null),this._$P.filters!=t&&(this._set$P("filters",t?t.slice():null),Render.isConchApp&&(this.conchModel&&(e.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(16):this.conchModel.removeType(32)),this._$P.filters&&1==this._$P.filters.length&&this._$P.filters[0].callNative(this)),Render.isWebGL&&(t&&t.length?this._renderType|=32:this._renderType&=-33),t&&t.length>0?(this._getBit(1)||this._setUpNoticeType(1),Render.isWebGL&&1==t.length&&t[0]instanceof laya.filters.ColorFilter||("bitmap"!=this.cacheAs&&(Render.isConchNode||(this.cacheAs="bitmap"),this._set$P("cacheForFilters",!0)),this._set$P("hasFilter",!0))):(this._set$P("hasFilter",!1),this._$P.cacheForFilters&&"bitmap"==this.cacheAs&&(this.cacheAs="none")),this.repaint())}),__getset(0,i,"parent",t.prototype._$get_parent,function(t){Laya.superSet(Node,this,"parent",t),t&&this._getBit(2)&&this._$2__onDisplay()}),__getset(0,i,"mask",function(){return this._$P._mask},function(t){t&&this.mask&&this.mask._$P.maskParent||(t?(this.cacheAs="bitmap",this._set$P("_mask",t),t._set$P("maskParent",this)):(this.cacheAs="none",this.mask&&this.mask._set$P("maskParent",null),this._set$P("_mask",t)),this.conchModel&&this.conchModel.mask(t?t.conchModel:null),this._renderType|=64,this.parentRepaint())}),__getset(0,i,"mouseEnabled",function(){return this._mouseEnableState>1},function(t){this._mouseEnableState=t?2:1}),__getset(0,i,"globalScaleX",function(){for(var t=1,e=this;e&&e!==Laya.stage;)t*=e.scaleX,e=e.parent;return t}),__getset(0,i,"mouseX",function(){return this.getMousePoint().x}),__getset(0,i,"mouseY",function(){return this.getMousePoint().y}),e.fromImage=function(t){return(new e).loadImage(t)},e.CustomList=[],__static(e,["RUNTIMEVERION",function(){return this.RUNTIMEVERION=window.conch?conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-")+1):""}]),e}(Node),AudioSoundChannel=function(t){function e(t){this._audio=null,this._onEnd=null,this._resumePlay=null,e.__super.call(this),this._onEnd=Utils.bind(this.__onEnd,this),this._resumePlay=Utils.bind(this.__resumePlay,this),t.addEventListener("ended",this._onEnd),this._audio=t}__class(e,"laya.media.h5audio.AudioSoundChannel",SoundChannel);var i=e.prototype;return i.__onEnd=function(){if(1==this.loops)return this.completeHandler&&(Laya.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},i.__resumePlay=function(){this._audio&&this._audio.removeEventListener("canplay",this._resumePlay);try{this._audio.currentTime=this.startTime,Browser.container.appendChild(this._audio),this._audio.play()}catch(t){this.event("error")}},i.play=function(){this.isStopped=!1;try{this._audio.playbackRate=SoundManager.playbackRate,this._audio.currentTime=this.startTime}catch(t){return void this._audio.addEventListener("canplay",this._resumePlay)}SoundManager.addChannel(this),Browser.container.appendChild(this._audio),"play"in this._audio&&this._audio.play()},i.stop=function(){this.isStopped=!0,SoundManager.removeChannel(this),this.completeHandler=null,this._audio&&("pause"in this._audio&&Render.isConchApp&&this._audio.stop(),this._audio.pause(),this._audio.removeEventListener("ended",this._onEnd),this._audio.removeEventListener("canplay",this._resumePlay),Browser.onIE||this._audio!=AudioSound._musicAudio&&Pool.recover("audio:"+this.url,this._audio),Browser.removeElement(this._audio),this._audio=null)},i.pause=function(){this.isStopped=!0,SoundManager.removeChannel(this),"pause"in this._audio&&this._audio.pause()},i.resume=function(){this._audio&&(this.isStopped=!1,SoundManager.addChannel(this),"play"in this._audio&&this._audio.play())},__getset(0,i,"position",function(){return this._audio?this._audio.currentTime:0}),__getset(0,i,"duration",function(){return this._audio?this._audio.duration:0}),__getset(0,i,"volume",function(){return this._audio?this._audio.volume:1},function(t){this._audio&&(this._audio.volume=t)}),e}(),WebAudioSoundChannel=function(t){function e(){this.audioBuffer=null,this.gain=null,this.bufferSource=null,this._currentTime=0,this._volume=1,this._startTime=0,this._pauseTime=0,this._onPlayEnd=null,this.context=WebAudioSound.ctx,e.__super.call(this),this._onPlayEnd=Utils.bind(this.__onPlayEnd,this),this.context.createGain?this.gain=this.context.createGain():this.gain=this.context.createGainNode()}__class(e,"laya.media.webaudio.WebAudioSoundChannel",SoundChannel);var i=e.prototype;return i.play=function(){if(SoundManager.addChannel(this),this.isStopped=!1,this._clearBufferSource(),this.audioBuffer){var t=this.context,e=this.gain,i=t.createBufferSource();this.bufferSource=i,i.buffer=this.audioBuffer,i.connect(e),e&&e.disconnect(),e.connect(t.destination),i.onended=this._onPlayEnd,this.startTime>=this.duration&&(this.startTime=0),this._startTime=Browser.now(),this.gain.gain.value=this._volume,0==this.loops&&(i.loop=!0),i.playbackRate.value=SoundManager.playbackRate,i.start(0,this.startTime),this._currentTime=0}},i.__onPlayEnd=function(){if(1==this.loops)return this.completeHandler&&(Laya.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},i._clearBufferSource=function(){if(this.bufferSource){var t=this.bufferSource;t.stop?t.stop(0):t.noteOff(0),t.disconnect(0),t.onended=null,e._tryCleanFailed||this._tryClearBuffer(t),this.bufferSource=null}},i._tryClearBuffer=function(t){if(Browser.onMac)try{t.buffer=WebAudioSound._miniBuffer}catch(t){e._tryCleanFailed=!0}else e._tryCleanFailed=!0},i.stop=function(){this._clearBufferSource(),this.audioBuffer=null,this.gain&&this.gain.disconnect(),this.isStopped=!0,SoundManager.removeChannel(this),this.completeHandler=null,SoundManager.autoReleaseSound&&Laya.timer.once(5e3,null,SoundManager.disposeSoundIfNotUsed,[this.url],!1)},i.pause=function(){this.isStopped||(this._pauseTime=this.position),this._clearBufferSource(),this.gain&&this.gain.disconnect(),this.isStopped=!0,SoundManager.removeChannel(this),SoundManager.autoReleaseSound&&Laya.timer.once(5e3,null,SoundManager.disposeSoundIfNotUsed,[this.url],!1)},i.resume=function(){this.startTime=this._pauseTime,this.play()},__getset(0,i,"position",function(){return this.bufferSource?(Browser.now()-this._startTime)/1e3+this.startTime:0}),__getset(0,i,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),__getset(0,i,"volume",function(){return this._volume},function(t){this.isStopped||(this._volume=t,this.gain.gain.value=t)}),e._tryCleanFailed=!1,e}(),Bitmap=function(t){function e(){e.__super.call(this),this._w=0,this._h=0}__class(e,"laya.resource.Bitmap",Resource);var i=e.prototype;return __getset(0,i,"width",function(){return this._w}),__getset(0,i,"height",function(){return this._h}),__getset(0,i,"source",function(){return this._source}),e}(),AnimationPlayerBase=function(t){function e(){this.loop=!1,this.wrapMode=0,this._index=0,this._count=0,this._isPlaying=!1,this._labels=null,this._isReverse=!1,this._frameRateChanged=!1,this._controlNode=null,this._actionName=null,e.__super.call(this),this._interval=Config.animationInterval,this._setUpNoticeType(1)}__class(e,"laya.display.AnimationPlayerBase",t);var i=e.prototype;return i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,this.interval>0&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},i._getFrameByLabel=function(t){var e=0;for(e=0;e<this._count;e++)if(this._labels[e]&&this._labels[e].indexOf(t)>=0)return e;return 0},i._frameLoop=function(){if(this._isReverse){if(this._index--,this._index<0){if(!this.loop)return this._index=0,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=this._count>0?1:0,this._isReverse=!1):this._index=this._count-1,this.event("complete")}}else if(this._index++,this._index>=this._count){if(!this.loop)return this._index--,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=this._count-2>=0?this._count-2:0,this._isReverse=!0):this._index=0,this.event("complete")}this.index=this._index},i._setControlNode=function(t){this._controlNode&&(this._controlNode.off("display",this,this._checkResumePlaying),this._controlNode.off("undisplay",this,this._checkResumePlaying)),this._controlNode=t,t&&t!=this&&(t.on("display",this,this._checkResumePlaying),t.on("undisplay",this,this._checkResumePlaying))},i._setDisplay=function(e){t.prototype._setDisplay.call(this,e),this._checkResumePlaying()},i._checkResumePlaying=function(){this._isPlaying&&(this._controlNode.displayedInStage?this.play(this._index,this.loop,this._actionName):this.clearTimer(this,this._frameLoop))},i.stop=function(){this._isPlaying=!1,this.clearTimer(this,this._frameLoop)},i.addLabel=function(t,e){this._labels||(this._labels={}),this._labels[e]||(this._labels[e]=[]),this._labels[e].push(t)},i.removeLabel=function(t){if(t){if(this._labels)for(var e in this._labels)this._removeLabelFromLabelList(this._labels[e],t)}else this._labels=null},i._removeLabelFromLabelList=function(t,e){if(t)for(var i=t.length-1;i>=0;i--)t[i]==e&&t.splice(i,1)},i.gotoAndStop=function(t){this.index="string"==typeof t?this._getFrameByLabel(t):t,this.stop()},i._displayToIndex=function(t){},i.clear=function(){this.stop(),this._labels=null},__getset(0,i,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._frameRateChanged=!0,this._interval=t,this._isPlaying&&t>0&&this.timerLoop(t,this,this._frameLoop,null,!0,!0))}),__getset(0,i,"isPlaying",function(){return this._isPlaying}),__getset(0,i,"index",function(){return this._index},function(t){if(this._index=t,this._displayToIndex(t),this._labels&&this._labels[t])for(var e=this._labels[t],i=0,n=e.length;i<n;i++)this.event("label",e[i])}),__getset(0,i,"count",function(){return this._count}),e.WRAP_POSITIVE=0,e.WRAP_REVERSE=1,e.WRAP_PINGPONG=2,e}(Sprite),Text=function(t){function e(){this._clipPoint=null,this._currBitmapFont=null,this._text=null,this._isChanged=!1,this._textWidth=0,this._textHeight=0,this._lines=[],this._lineWidths=[],this._startX=NaN,this._startY=NaN,this._lastVisibleLineIndex=-1,this._words=null,this._charSize={},this.underline=!1,this._underlineColor=null,e.__super.call(this),this.overflow=e.VISIBLE,this._style=new CSSStyle(this),this._style.wordWrap=!1}__class(e,"laya.display.Text",t);var i=e.prototype;return i.destroy=function(e){void 0===e&&(e=!0),t.prototype.destroy.call(this,e),this._lines=null,this._words&&(this._words.length=0,this._words=null)},i._getBoundPointsM=function(t){void 0===t&&(t=!1);var e=Rectangle.TEMP;return e.setTo(0,0,this.width,this.height),e._getBoundPoints()},i.getGraphicBounds=function(t){void 0===t&&(t=!1);var e=Rectangle.TEMP;return e.setTo(0,0,this.width,this.height),e},i._getCSSStyle=function(){return this._style},i.lang=function(t,i,n,s,r,a,o,h,l,c,u){if(t=e.langPacks&&e.langPacks[t]?e.langPacks[t]:t,arguments.length<2)this._text=t;else{for(var _=0,d=arguments.length;_<d;_++)t=t.replace("{"+_+"}",arguments[_+1]);this._text=t}},i._isPassWordMode=function(){var t=this._style.password;return"prompt"in this&&this.prompt==this._text&&(t=!1),t},i._getPassWordTxt=function(t){var e;e="";for(var i=t.length;i>0;i--)e+="●";return e},i.renderText=function(t,e){var i=this.graphics;i.clear(!0);var n=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+(Browser.onIPhone?laya.display.Text._fontFamilyMap[this.font]||this.font:this.font);Browser.context.font=n;var s=this.padding,r=s[3],a="left",o=this._lines,h=this.leading+this._charSize.height,l=this._currBitmapFont;l&&(h=this.leading+l.getMaxHeight());var c=s[0];if(!l&&this._width>0&&this._textWidth<=this._width&&("right"==this.align?(a="right",r=this._width-s[1]):"center"==this.align&&(a="center",r=.5*this._width+s[3]-s[1])),this._height>0){var u=this._textHeight>this._height?"top":this.valign;"middle"===u?c=.5*(this._height-e*h)+s[0]-s[2]:"bottom"===u&&(c=this._height-e*h-s[2])}var _=this._style;if(l&&l.autoScaleSize)var d=l.fontSize/this.fontSize;if(this._clipPoint)if(i.save(),l&&l.autoScaleSize){var f=0,p=0;f=this._width?this._width-s[3]-s[1]:this._textWidth,p=this._height?this._height-s[0]-s[2]:this._textHeight,f*=d,p*=d,i.clipRect(s[3],s[0],f,p)}else i.clipRect(s[3],s[0],this._width?this._width-s[3]-s[1]:this._textWidth,this._height?this._height-s[0]-s[2]:this._textHeight);var g=_.password;"prompt"in this&&this.prompt==this._text&&(g=!1);for(var m=0,v=0,y=Math.min(this._lines.length,e+t)||1,w=t;w<y;w++){var x,T=o[w];if(g){var b=T.length;T="";for(var C=b;C>0;C--)T+="●"}if(m=r-(this._clipPoint?this._clipPoint.x:0),v=c+h*w-(this._clipPoint?this._clipPoint.y:0),this.underline&&this.drawUnderline(a,m,v,w),l){var M=this.width;l.autoScaleSize&&(M=this.width*d),l.drawText(T,this,m,v,this.align,M)}else Render.isWebGL?(this._words||(this._words=[]),(x=this._words.length>w-t?this._words[w-t]:new WordText).setText(T)):x=T,_.stroke?i.fillBorderText(x,m,v,n,this.color,_.strokeColor,_.stroke,a):i.fillText(x,m,v,n,this.color,a)}if(l&&l.autoScaleSize){var S=1/d;this.scale(S,S)}this._clipPoint&&i.restore(),this._startX=r,this._startY=c},i.drawUnderline=function(t,e,i,n){var s=this._lineWidths[n];switch(t){case"center":e-=s/2;break;case"right":e-=s}i+=this._charSize.height,this._graphics.drawLine(e,i,e+s,i,this.underlineColor||this.color,1)},i.typeset=function(){if(this._isChanged=!1,!this._text)return this._clipPoint=null,this._textWidth=this._textHeight=0,void this.graphics.clear(!0);Browser.context.font=this._getCSSStyle().font,this._lines.length=0,this._lineWidths.length=0,this._isPassWordMode()?this.parseLines(this._getPassWordTxt(this._text)):this.parseLines(this._text),this.evalTextSize(),this.checkEnabledViewportOrNot()?this._clipPoint||(this._clipPoint=new Point(0,0)):this._clipPoint=null;var t=this._lines.length;if(this.overflow!=e.VISIBLE){var i=this.overflow==e.HIDDEN?Math.floor:Math.ceil;t=Math.min(t,i((this.height-this.padding[0]-this.padding[2])/(this.leading+this._charSize.height)))}var n=this.scrollY/(this._charSize.height+this.leading)|0;this.renderText(n,t),this.repaint()},i.evalTextSize=function(){var t=NaN,e=NaN;t=Math.max.apply(this,this._lineWidths),e=this._currBitmapFont?this._lines.length*(this._currBitmapFont.getMaxHeight()+this.leading)+this.padding[0]+this.padding[2]:this._lines.length*(this._charSize.height+this.leading)+this.padding[0]+this.padding[2],t==this._textWidth&&e==this._textHeight||(this._textWidth=t,this._textHeight=e,this._width&&this._height||this.conchModel&&this.conchModel.size(this._width||this._textWidth,this._height||this._textHeight))},i.checkEnabledViewportOrNot=function(){return this.overflow==e.SCROLL&&(this._width>0&&this._textWidth>this._width||this._height>0&&this._textHeight>this._height)},i.changeText=function(t){this._text!==t&&(this.lang(t+""),this._graphics&&this._graphics.replaceText(this._text)||this.typeset())},i.parseLines=function(t){var i=this.wordWrap||this.overflow==e.HIDDEN;if(i)var n=this.getWordWrapWidth();if(this._currBitmapFont)this._charSize.width=this._currBitmapFont.getMaxWidth(),this._charSize.height=this._currBitmapFont.getMaxHeight();else{var s=Browser.context.measureText(e._testWord);this._charSize.width=s.width,this._charSize.height=s.height||this.fontSize}for(var r=t.replace(/\r\n/g,"\n").split("\n"),a=0,o=r.length;a<o;a++){var h=r[a];i?this.parseLine(h,n):(this._lineWidths.push(this.getTextWidth(h)),this._lines.push(h))}},i.parseLine=function(t,i){Browser.context;var n,s=this._lines,r=0,a=NaN,o=NaN,h=0;if((a=this.getTextWidth(t))<=i)return s.push(t),void this._lineWidths.push(a);a=this._charSize.width,0==(r=Math.floor(i/a))&&(r=1),o=a=this.getTextWidth(t.substring(0,r));for(var l=r,c=t.length;l<c;l++)if(a=this.getTextWidth(t.charAt(l)),(o+=a)>i)if(this.wordWrap){var u=t.substring(h,l);if(u.charCodeAt(u.length-1)<255?(n=/(?:\w|-)+$/.exec(u))&&(l=n.index+h,0==n.index?l+=u.length:u=t.substring(h,l)):e.RightToLeft&&(n=/([\u0600-\u06FF])+$/.exec(u))&&(l=n.index+h,0==n.index?l+=u.length:u=t.substring(h,l)),s.push(u),this._lineWidths.push(o-a),h=l,!(l+r<c)){s.push(t.substring(h,c)),this._lineWidths.push(this.getTextWidth(s[s.length-1])),h=-1;break}l+=r,o=a=this.getTextWidth(t.substring(h,l)),l--}else if(this.overflow==e.HIDDEN)return s.push(t.substring(0,l)),void this._lineWidths.push(this.getTextWidth(s[s.length-1]));this.wordWrap&&-1!=h&&(s.push(t.substring(h,c)),this._lineWidths.push(this.getTextWidth(s[s.length-1])))},i.getTextWidth=function(t){return this._currBitmapFont?this._currBitmapFont.getTextWidth(t):Browser.context.measureText(t).width},i.getWordWrapWidth=function(){var t=this.padding,e=NaN;return(e=this._currBitmapFont&&this._currBitmapFont.autoScaleSize?this._width*(this._currBitmapFont.fontSize/this.fontSize):this._width)<=0&&(e=this.wordWrap?100:Browser.width),e<=0&&(e=100),e-t[3]-t[1]},i.getCharPoint=function(t,e){this._isChanged&&Laya.timer.runCallLater(this,this.typeset);for(var i=0,n=this._lines,s=0,r=0,a=n.length;r<a;r++){if(i+=n[r].length,t<i){var o=r;break}s=i}var h=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+this.font;Browser.context.font=h;var l=this.getTextWidth(this._text.substring(s,t));return(e||new Point).setTo(this._startX+l-(this._clipPoint?this._clipPoint.x:0),this._startY+o*(this._charSize.height+this.leading)-(this._clipPoint?this._clipPoint.y:0))},__getset(0,i,"width",function(){return this._width?this._width:this.textWidth+this.padding[1]+this.padding[3]},function(t){t!=this._width&&(Laya.superSet(Sprite,this,"width",t),this.isChanged=!0)}),__getset(0,i,"textWidth",function(){return this._isChanged&&Laya.timer.runCallLater(this,this.typeset),this._textWidth}),__getset(0,i,"height",function(){return this._height?this._height:this.textHeight+this.padding[0]+this.padding[2]},function(t){t!=this._height&&(Laya.superSet(Sprite,this,"height",t),this.isChanged=!0)}),__getset(0,i,"textHeight",function(){return this._isChanged&&Laya.timer.runCallLater(this,this.typeset),this._textHeight}),__getset(0,i,"padding",function(){return this._getCSSStyle().padding},function(t){this._getCSSStyle().padding=t,this.isChanged=!0}),__getset(0,i,"bold",function(){return this._getCSSStyle().bold},function(t){this._getCSSStyle().bold=t,this.isChanged=!0}),__getset(0,i,"text",function(){return this._text||""},function(t){this._text!==t&&(this.lang(t+""),this.isChanged=!0,this.event("change"))}),__getset(0,i,"color",function(){return this._getCSSStyle().color},function(t){this._getCSSStyle().color!=t&&(this._getCSSStyle().color=t,!this._isChanged&&this._graphics?this._graphics.replaceTextColor(this.color):this.isChanged=!0)}),__getset(0,i,"font",function(){return this._getCSSStyle().fontFamily},function(t){this._currBitmapFont&&(this._currBitmapFont=null,this.scale(1,1)),e._bitmapFonts&&e._bitmapFonts[t]&&(this._currBitmapFont=e._bitmapFonts[t]),this._getCSSStyle().fontFamily=t,this.isChanged=!0}),__getset(0,i,"fontSize",function(){return this._getCSSStyle().fontSize},function(t){this._getCSSStyle().fontSize=t,this.isChanged=!0}),__getset(0,i,"italic",function(){return this._getCSSStyle().italic},function(t){this._getCSSStyle().italic=t,this.isChanged=!0}),__getset(0,i,"align",function(){return this._getCSSStyle().align},function(t){this._getCSSStyle().align=t,this.isChanged=!0}),__getset(0,i,"valign",function(){return this._getCSSStyle().valign},function(t){this._getCSSStyle().valign=t,this.isChanged=!0}),__getset(0,i,"wordWrap",function(){return this._getCSSStyle().wordWrap},function(t){this._getCSSStyle().wordWrap=t,this.isChanged=!0}),__getset(0,i,"leading",function(){return this._getCSSStyle().leading},function(t){this._getCSSStyle().leading=t,this.isChanged=!0}),__getset(0,i,"bgColor",function(){return this._getCSSStyle().backgroundColor},function(t){this._getCSSStyle().backgroundColor=t,this.isChanged=!0}),__getset(0,i,"borderColor",function(){return this._getCSSStyle().borderColor},function(t){this._getCSSStyle().borderColor=t,this.isChanged=!0}),__getset(0,i,"stroke",function(){return this._getCSSStyle().stroke},function(t){this._getCSSStyle().stroke=t,this.isChanged=!0}),__getset(0,i,"strokeColor",function(){return this._getCSSStyle().strokeColor},function(t){this._getCSSStyle().strokeColor=t,this.isChanged=!0}),__getset(0,i,"isChanged",null,function(t){this._isChanged!==t&&(this._isChanged=t,t&&Laya.timer.callLater(this,this.typeset))}),__getset(0,i,"scrollX",function(){return this._clipPoint?this._clipPoint.x:0},function(t){if(!(this.overflow!=e.SCROLL||this.textWidth<this._width)&&this._clipPoint){t=t<this.padding[3]?this.padding[3]:t;var i=this._textWidth-this._width;t=t>i?i:t;var n=this._height/(this._charSize.height+this.leading)|1;this._clipPoint.x=t,this.renderText(this._lastVisibleLineIndex,n)}}),__getset(0,i,"scrollY",function(){return this._clipPoint?this._clipPoint.y:0},function(t){if(!(this.overflow!=e.SCROLL||this.textHeight<this._height)&&this._clipPoint){t=t<this.padding[0]?this.padding[0]:t;var i=this._textHeight-this._height,n=(t=t>i?i:t)/(this._charSize.height+this.leading)|0;this._lastVisibleLineIndex=n;var s=1+(this._height/(this._charSize.height+this.leading)|0);this._clipPoint.y=t,this.renderText(n,s)}}),__getset(0,i,"maxScrollX",function(){return this.textWidth<this._width?0:this._textWidth-this._width}),__getset(0,i,"maxScrollY",function(){return this.textHeight<this._height?0:this._textHeight-this._height}),__getset(0,i,"lines",function(){return this._isChanged&&this.typeset(),this._lines}),__getset(0,i,"underlineColor",function(){return this._underlineColor},function(t){this._underlineColor=t,this._isChanged=!0,this.typeset()}),e.registerBitmapFont=function(t,i){e._bitmapFonts||(e._bitmapFonts={}),e._bitmapFonts[t]=i},e.unregisterBitmapFont=function(t,i){if(void 0===i&&(i=!0),e._bitmapFonts&&e._bitmapFonts[t]){var n=e._bitmapFonts[t];i&&n.destroy(),delete e._bitmapFonts[t]}},e.setTextRightToLeft=function(){var t;(t=Browser.canvas.source.style).display="none",t.position="absolute",t.direction="rtl",Render._mainCanvas.source.style.direction="rtl",laya.display.Text.RightToLeft=!0,Browser.document.body.appendChild(Browser.canvas.source)},e.supportFont=function(t){Browser.context.font="10px sans-serif";var e=Browser.context.measureText("abcji").width;Browser.context.font="10px "+t;var i=Browser.context.measureText("abcji").width;return console.log(e,i),e!==i},e._testWord="游",e.langPacks=null,e.VISIBLE="visible",e.SCROLL="scroll",e.HIDDEN="hidden",e.CharacterCache=!0,e.RightToLeft=!1,e._bitmapFonts=null,__static(e,["_fontFamilyMap",function(){return this._fontFamilyMap={"报隶":"报隶-简","黑体":"黑体-简","楷体":"楷体-简","兰亭黑":"兰亭黑-简","隶变":"隶变-简","凌慧体":"凌慧体-简","翩翩体":"翩翩体-简","苹方":"苹方-简","手札体":"手札体-简","宋体":"宋体-简","娃娃体":"娃娃体-简","魏碑":"魏碑-简","行楷":"行楷-简","雅痞":"雅痞-简","圆体":"圆体-简"}}]),e}(Sprite),Stage=function(t){function e(){this.focus=null,this.designWidth=0,this.designHeight=0,this.canvasRotation=!1,this.canvasDegree=0,this.renderingEnabled=!0,this.screenAdaptationEnabled=!0,this._screenMode="none",this._scaleMode="noscale",this._alignV="top",this._alignH="left",this._bgColor="black",this._mouseMoveTime=0,this._renderCount=0,this._frameStartTime=NaN,this._isFocused=!1,this._isVisibility=!1,this._scenes=null,this._frameRate="fast",e.__super.call(this),this.offset=new Point,this._canvasTransform=new Matrix,this._previousOrientation=Browser.window.orientation;var t=this;this.transform=Matrix.create(),this._scenes=[],this.mouseEnabled=!0,this.hitTestPrior=!0,this.autoSize=!1,this._displayedInStage=!0,this._isFocused=!0,this._isVisibility=!0;var i=Browser.window,n=this;i.addEventListener("focus",function(){t._isFocused=!0,n.event("focus"),n.event("focuschange")}),i.addEventListener("blur",function(){t._isFocused=!1,n.event("blur"),n.event("focuschange"),n._isInputting()&&(Input.inputElement.target.focus=!1)});var s="visibilityState",r="visibilitychange",a=i.document;void 0!==a.hidden?(r="visibilitychange",s="visibilityState"):void 0!==a.mozHidden?(r="mozvisibilitychange",s="mozVisibilityState"):void 0!==a.msHidden?(r="msvisibilitychange",s="msVisibilityState"):void 0!==a.webkitHidden&&(r="webkitvisibilitychange",s="webkitVisibilityState"),i.document.addEventListener(r,function(){"hidden"==Browser.document[s]?n._setStageVisible(!1):n._setStageVisible(!0)}),i.document.addEventListener("qbrowserVisibilityChange",function(t){n._setStageVisible(!t.hidden)}),i.addEventListener("resize",function(){var e=Browser.window.orientation;null!=e&&e!=t._previousOrientation&&n._isInputting()&&(Input.inputElement.target.focus=!1),t._previousOrientation=e,n._isInputting()||n._resetCanvas()}),i.addEventListener("orientationchange",function(t){n._resetCanvas()}),this.on("mousemove",this,this._onmouseMove),Browser.onMobile&&this.on("mousedown",this,this._onmouseMove)}__class(e,"laya.display.Stage",t);var i=e.prototype;return i._setStageVisible=function(t){this._isVisibility!=t&&(this._isVisibility=t,this._isVisibility||this._isInputting()&&(Input.inputElement.target.focus=!1),this.event("visibilitychange"))},i._isInputting=function(){return Browser.onMobile&&Input.isInputting},i._changeCanvasSize=function(){this.setScreenSize(Browser.clientWidth*Browser.pixelRatio,Browser.clientHeight*Browser.pixelRatio)},i._resetCanvas=function(){if(this.screenAdaptationEnabled){var t=Render._mainCanvas;t.source.style;t.size(1,1),Laya.timer.once(100,this,this._changeCanvasSize)}},i.setScreenSize=function(t,e){var i=!1;if("none"!==this._screenMode){if(i=(t/e<1?"vertical":"horizontal")!==this._screenMode){var n=e;e=t,t=n}}this.canvasRotation=i;var s=Render._mainCanvas,r=s.source.style,a=this._canvasTransform.identity(),o=this._scaleMode,h=t/this.designWidth,l=e/this.designHeight,c=this.designWidth,u=this.designHeight,_=t,d=e,f=Browser.pixelRatio;switch(this._width=this.designWidth,this._height=this.designHeight,o){case"noscale":h=l=1,_=this.designWidth,d=this.designHeight;break;case"showall":h=l=Math.min(h,l),c=_=Math.round(this.designWidth*h),u=d=Math.round(this.designHeight*l);break;case"noborder":h=l=Math.max(h,l),_=Math.round(this.designWidth*h),d=Math.round(this.designHeight*l);break;case"full":h=l=1,this._width=c=t,this._height=u=e;break;case"fixedwidth":l=h,this._height=u=Math.round(e/h);break;case"fixedheight":h=l,this._width=c=Math.round(t/l);break;case"fixedauto":t/e<this.designWidth/this.designHeight?(l=h,this._height=u=Math.round(e/h)):(h=l,this._width=c=Math.round(t/l))}this.conchModel&&this.conchModel.size(this._width,this._height),h*=this.scaleX,l*=this.scaleY,1===h&&1===l?this.transform.identity():(this.transform.a=this._formatData(h/(_/c)),this.transform.d=this._formatData(l/(d/u)),this.conchModel&&this.conchModel.scale(this.transform.a,this.transform.d)),s.size(c,u),RunDriver.changeWebGLSize(c,u),a.scale(_/c/f,d/u/f),"left"===this._alignH?this.offset.x=0:"right"===this._alignH?this.offset.x=t-_:this.offset.x=.5*(t-_)/f,"top"===this._alignV?this.offset.y=0:"bottom"===this._alignV?this.offset.y=e-d:this.offset.y=.5*(e-d)/f,this.offset.x=Math.round(this.offset.x),this.offset.y=Math.round(this.offset.y),a.translate(this.offset.x,this.offset.y),this.canvasDegree=0,i&&("horizontal"===this._screenMode?(a.rotate(Math.PI/2),a.translate(e/f,0),this.canvasDegree=90):(a.rotate(-Math.PI/2),a.translate(0,t/f),this.canvasDegree=-90)),a.a=this._formatData(a.a),a.d=this._formatData(a.d),a.tx=this._formatData(a.tx),a.ty=this._formatData(a.ty),r.transformOrigin=r.webkitTransformOrigin=r.msTransformOrigin=r.mozTransformOrigin=r.oTransformOrigin="0px 0px 0px",r.transform=r.webkitTransform=r.msTransform=r.mozTransform=r.oTransform="matrix("+a.toString()+")",a.translate(parseInt(r.left)||0,parseInt(r.top)||0),this.visible=!0,this._repaint=1,this.event("resize")},i._formatData=function(t){return Math.abs(t)<1e-6?0:Math.abs(1-t)<.001?t>0?1:-1:t},i.getMousePoint=function(){return Point.TEMP.setTo(this.mouseX,this.mouseY)},i.repaint=function(){this._repaint=1},i.parentRepaint=function(){},i._loop=function(){return this.render(Render.context,0,0),!0},i._onmouseMove=function(t){this._mouseMoveTime=Browser.now()},i.getTimeFromFrameStart=function(){return Browser.now()-this._frameStartTime},i.render=function(e,i,n){if("sleep"===this._frameRate&&!Render.isConchApp){var s=Browser.now();if(!(s-this._frameStartTime>=1e3))return;this._frameStartTime=s}if(this._renderCount++,Render.isFlash&&this.repaint(),this._style.visible){this._frameStartTime=Browser.now();var r="slow"!==("mouse"===this._frameRate?this._frameStartTime-this._mouseMoveTime<2e3?"fast":"slow":this._frameRate),a=this._renderCount%2==0;if(Stat.renderSlow=!r,r||a||Render.isConchApp){Stat.loopCount++,MouseManager.instance.runEvent(),Laya.timer._update(),RunDriver.update3DLoop();var o,h=0,l=0;if(Render.isConchNode)for(h=0,l=this._scenes.length;h<l;h++)(o=this._scenes[h])&&o._updateSceneConch();else for(h=0,l=this._scenes.length;h<l;h++)(o=this._scenes[h])&&o._updateScene();if(Render.isConchNode){var c=Sprite.CustomList;for(h=0,l=c.length;h<l;h++){var u=c[h];u.customRender(u.customContext,0,0)}return}}Render.isConchNode||!this.renderingEnabled||!r&&a||(Render.isWebGL?(e.clear(),t.prototype.render.call(this,e,i,n),Stat._show&&Stat._sp&&Stat._sp.render(e,i,n),RunDriver.clear(this._bgColor),RunDriver.beginFlush(),e.flush(),RunDriver.endFinish(),VectorGraphManager.instance&&VectorGraphManager.getInstance().endDispose()):(RunDriver.clear(this._bgColor),t.prototype.render.call(this,e,i,n),Stat._show&&Stat._sp&&Stat._sp.render(e,i,n)))}else this._renderCount%5==0&&(Stat.loopCount++,MouseManager.instance.runEvent(),Laya.timer._update())},i._requestFullscreen=function(){var t=Browser.document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},i._fullScreenChanged=function(){Laya.stage.event("fullscreenchange")},i.exitFullscreen=function(){var t=Browser.document;t.exitFullscreen?t.exitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()},__getset(0,i,"clientScaleX",function(){return this._transform?this._transform.getScaleX():1}),__getset(0,i,"desginHeight",function(){return console.debug("desginHeight已经弃用，请使用designHeight代替"),this.designHeight}),__getset(0,i,"frameRate",function(){return this._frameRate},function(t){if(this._frameRate=t,Render.isConchApp)switch(this._frameRate){case"slow":Browser.window.conch&&Browser.window.conchConfig.setSlowFrame&&Browser.window.conchConfig.setSlowFrame(!0);break;case"fast":Browser.window.conch&&Browser.window.conchConfig.setSlowFrame&&Browser.window.conchConfig.setSlowFrame(!1);break;case"mouse":Browser.window.conch&&Browser.window.conchConfig.setMouseFrame&&Browser.window.conchConfig.setMouseFrame(2e3);break;case"sleep":Browser.window.conch&&Browser.window.conchConfig.setLimitFPS&&Browser.window.conchConfig.setLimitFPS(1);break;default:throw new Error("Stage:frameRate invalid.")}}),__getset(0,i,"clientScaleY",function(){return this._transform?this._transform.getScaleY():1}),__getset(0,i,"width",t.prototype._$get_width,function(t){this.designWidth=t,Laya.superSet(Sprite,this,"width",t),Laya.timer.callLater(this,this._changeCanvasSize)}),__getset(0,i,"alignH",function(){return this._alignH},function(t){this._alignH=t,Laya.timer.callLater(this,this._changeCanvasSize)}),__getset(0,i,"isFocused",function(){return this._isFocused}),__getset(0,i,"height",t.prototype._$get_height,function(t){this.designHeight=t,Laya.superSet(Sprite,this,"height",t),Laya.timer.callLater(this,this._changeCanvasSize)}),__getset(0,i,"transform",function(){return this._tfChanged&&this._adjustTransform(),this._transform=this._transform||Matrix.create()},t.prototype._$set_transform),__getset(0,i,"isVisibility",function(){return this._isVisibility}),__getset(0,i,"desginWidth",function(){return console.debug("desginWidth已经弃用，请使用designWidth代替"),this.designWidth}),__getset(0,i,"scaleMode",function(){return this._scaleMode},function(t){this._scaleMode=t,Laya.timer.callLater(this,this._changeCanvasSize)}),__getset(0,i,"alignV",function(){return this._alignV},function(t){this._alignV=t,Laya.timer.callLater(this,this._changeCanvasSize)}),__getset(0,i,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this.conchModel&&this.conchModel.bgColor(t),Render.isWebGL&&(t&&"black"!==t&&"#000000"!==t?e._wgColor=Color.create(t)._color:Browser.onMiniGame||(e._wgColor=null)),Render.canvas.style.background=t||"none"}),__getset(0,i,"mouseX",function(){return Math.round(MouseManager.instance.mouseX/this.clientScaleX)}),__getset(0,i,"mouseY",function(){return Math.round(MouseManager.instance.mouseY/this.clientScaleY)}),__getset(0,i,"screenMode",function(){return this._screenMode},function(t){this._screenMode=t}),__getset(0,i,"visible",t.prototype._$get_visible,function(t){if(this.visible!==t){Laya.superSet(Sprite,this,"visible",t);Render._mainCanvas.source.style.visibility=t?"visible":"hidden"}}),__getset(0,i,"fullScreenEnabled",null,function(t){var e=Browser.document,i=Render.canvas;t?(i.addEventListener("mousedown",this._requestFullscreen),i.addEventListener("touchstart",this._requestFullscreen),e.addEventListener("fullscreenchange",this._fullScreenChanged),e.addEventListener("mozfullscreenchange",this._fullScreenChanged),e.addEventListener("webkitfullscreenchange",this._fullScreenChanged),e.addEventListener("msfullscreenchange",this._fullScreenChanged)):(i.removeEventListener("mousedown",this._requestFullscreen),i.removeEventListener("touchstart",this._requestFullscreen),e.removeEventListener("fullscreenchange",this._fullScreenChanged),e.removeEventListener("mozfullscreenchange",this._fullScreenChanged),e.removeEventListener("webkitfullscreenchange",this._fullScreenChanged),e.removeEventListener("msfullscreenchange",this._fullScreenChanged))}),e.SCALE_NOSCALE="noscale",e.SCALE_EXACTFIT="exactfit",e.SCALE_SHOWALL="showall",e.SCALE_NOBORDER="noborder",e.SCALE_FULL="full",e.SCALE_FIXED_WIDTH="fixedwidth",e.SCALE_FIXED_HEIGHT="fixedheight",e.SCALE_FIXED_AUTO="fixedauto",e.ALIGN_LEFT="left",e.ALIGN_RIGHT="right",e.ALIGN_CENTER="center",e.ALIGN_TOP="top",e.ALIGN_MIDDLE="middle",e.ALIGN_BOTTOM="bottom",e.SCREEN_NONE="none",e.SCREEN_HORIZONTAL="horizontal",e.SCREEN_VERTICAL="vertical",e.FRAME_FAST="fast",e.FRAME_SLOW="slow",e.FRAME_MOUSE="mouse",e.FRAME_SLEEP="sleep",e._wgColor=null,e.FRAME_MOUSE_THREDHOLD=2e3,e}(Sprite),SoundNode=function(t){function e(){this.url=null,this._channel=null,this._tar=null,this._playEvents=null,this._stopEvents=null,e.__super.call(this),this.visible=!1,this.on("added",this,this._onParentChange),this.on("removed",this,this._onParentChange)}__class(e,"laya.media.SoundNode",Sprite);var i=e.prototype;return i._onParentChange=function(){this.target=this.parent},i.play=function(t,e){void 0===t&&(t=1),isNaN(t)&&(t=1),this.url&&(this.stop(),this._channel=SoundManager.playSound(this.url,t,e))},i.stop=function(){this._channel&&!this._channel.isStopped&&this._channel.stop(),this._channel=null},i._setPlayAction=function(t,e,i,n){void 0===n&&(n=!0),this[i]&&t&&(n?t.on(e,this,this[i]):t.off(e,this,this[i]))},i._setPlayActions=function(t,e,i,n){if(void 0===n&&(n=!0),t&&e){var s=e.split(","),r=0,a=0;for(a=s.length,r=0;r<a;r++)this._setPlayAction(t,s[r],i,n)}},__getset(0,i,"playEvent",null,function(t){this._playEvents=t,t&&this._tar&&this._setPlayActions(this._tar,t,"play")}),__getset(0,i,"target",null,function(t){this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!1),this._setPlayActions(this._tar,this._stopEvents,"stop",!1)),this._tar=t,this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!0),this._setPlayActions(this._tar,this._stopEvents,"stop",!0))}),__getset(0,i,"stopEvent",null,function(t){this._stopEvents=t,t&&this._tar&&this._setPlayActions(this._tar,t,"stop")}),e}(),FileBitmap=function(t){function e(){this._src=null,this._onload=null,this._onerror=null,e.__super.call(this)}__class(e,"laya.resource.FileBitmap",Bitmap);var i=e.prototype;return __getset(0,i,"src",function(){return this._src},function(t){this._src=t}),__getset(0,i,"onload",null,function(t){}),__getset(0,i,"onerror",null,function(t){}),e}(),HTMLCanvas=function(t){function e(t,i){this._is2D=!1,e.__super.call(this);var n=this;if(this._source=this,"2D"===t||"AUTO"===t&&!Render.isWebGL){this._is2D=!0,this._source=i||Browser.createElement("canvas"),this._w=this._source.width,this._h=this._source.height;var s=this;s.getContext=function(t,e){if(n._ctx)return n._ctx;var i=n._ctx=n._source.getContext(t,e);return i&&(i._canvas=s,Render.isFlash||(i.size=function(t,e){})),i}}this.lock=!0}__class(e,"laya.resource.HTMLCanvas",Bitmap);var i=e.prototype;return i.clear=function(){this._ctx&&this._ctx.clear()},i.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null,laya.resource.Resource.prototype.destroy.call(this)},i.release=function(){},i._setContext=function(t){this._ctx=t},i.getContext=function(t,i){return this._ctx?this._ctx:this._ctx=e._createContext(this)},i.getMemSize=function(){return 0},i.size=function(t,e){(this._w!=t||this._h!=e||this._source&&(this._source.width!=t||this._source.height!=e))&&(this._w=t,this._h=e,this.memorySize=this._w*this._h*4,this._ctx&&this._ctx.size(t,e),this._source&&(this._source.height=e,this._source.width=t))},i.getCanvas=function(){return this._source},i.toBase64=function(t,e,i){if(this._source)if(Render.isConchApp&&this._source.toBase64)this._source.toBase64(t,e,i);else{var n=this._source.toDataURL(t,e);i.call(this,n)}},__getset(0,i,"context",function(){return this._ctx}),__getset(0,i,"asBitmap",null,function(t){}),e.create=function(t,i){return new e(t,i)},e.TYPE2D="2D",e.TYPE3D="3D",e.TYPEAUTO="AUTO",e._createContext=null,e}(),HTMLSubImage=function(t){function e(t,i,n,s,r,a,o,h){throw e.__super.call(this),new Error("不允许new！")}return __class(e,"laya.resource.HTMLSubImage",Bitmap),e.create=function(t,i,n,s,r,a,o,h){return void 0===h&&(h=!1),new e(t,i,n,s,r,a,o,h)},e}(),Animation=function(t){function e(){this._frames=null,this._url=null,e.__super.call(this),this._setControlNode(this)}__class(e,"laya.display.Animation",t);var i=e.prototype;return i.destroy=function(t){void 0===t&&(t=!0),this.stop(),laya.display.Sprite.prototype.destroy.call(this,t),this._frames=null,this._labels=null},i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),i&&this._setFramesFromCache(i,n),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,this._frames&&this.interval>0&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},i._setFramesFromCache=function(t,i){if(void 0===i&&(i=!1),this._url&&(t=this._url+"#"+t),t&&e.framesMap[t]){var n;return(n=e.framesMap[t])instanceof Array?(this._frames=e.framesMap[t],this._count=this._frames.length):(n.nodeRoot&&(e.framesMap[t]=this._parseGraphicAnimationByData(n),n=e.framesMap[t]),this._frames=n.frames,this._count=this._frames.length,this._frameRateChanged||(this._interval=n.interval),this._labels=this._copyLabels(n.labels)),!0}return i&&console.log("ani not found:",t),!1},i._copyLabels=function(t){if(!t)return null;var e;e={};var i;for(i in t)e[i]=Utils.copyArray([],t[i]);return e},i._frameLoop=function(){this._style.visible&&this._style.alpha>.01&&t.prototype._frameLoop.call(this)},i._displayToIndex=function(t){this._frames&&(this.graphics=this._frames[t])},i.clear=function(){this.stop(),this.graphics=null,this._frames=null,this._labels=null},i.loadImages=function(t,i){return void 0===i&&(i=""),this._url="",this._setFramesFromCache(i)||(this.frames=e.framesMap[i]?e.framesMap[i]:e.createFrames(t,i)),this},i.loadAtlas=function(t,i,n){function s(s){t===s&&(r.frames=e.framesMap[n]?e.framesMap[n]:e.createFrames(t,n),i&&i.run())}void 0===n&&(n=""),this._url="";var r=this;return r._setFramesFromCache(n)||(Loader.getAtlas(t)?s(t):Laya.loader.load(t,Handler.create(null,s,[t]),null,"atlas")),this},i.loadAnimation=function(t,e,i){this._url=t;return this._actionName||(this._actionName=""),this._setFramesFromCache("")?(this._setFramesFromCache(this._actionName,!0),this.index=0,e&&e.run()):!i||Loader.getAtlas(i)?this._loadAnimationData(t,e,i):Laya.loader.load(i,Handler.create(this,this._loadAnimationData,[t,e,i]),null,"atlas"),this},i._loadAnimationData=function(t,i,n){function s(n){if(Loader.getRes(n)&&t===n){var s;if(e.framesMap[t+"#"])a._setFramesFromCache(r._actionName,!0),r.index=0,r._checkResumePlaying();else{var o=a._parseGraphicAnimation(Loader.getRes(t));if(!o)return;var h,l=o.animationList,c=0,u=l.length;for(c=0;c<u;c++)s=l[c],e.framesMap[t+"#"+s.name]=s,h||(h=s);h&&(e.framesMap[t+"#"]=h,a._setFramesFromCache(r._actionName,!0),r.index=0),r._checkResumePlaying()}i&&i.run()}}var r=this;if(!n||Loader.getAtlas(n)){var a=this;Loader.getRes(t)?s(t):Laya.loader.load(t,Handler.create(null,s,[t]),null,"json"),Loader.clearRes(t)}else console.warn("atlas load fail:"+n)},i._parseGraphicAnimation=function(t){return GraphicAnimation.parseAnimationData(t)},i._parseGraphicAnimationByData=function(t){return GraphicAnimation.parseAnimationByData(t)},__getset(0,i,"frames",function(){return this._frames},function(t){this._frames=t,t&&(this._count=t.length,this._isPlaying?this.play(this._index,this.loop,this._actionName):this.index=this._index)}),__getset(0,i,"autoPlay",null,function(t){t?this.play():this.stop()}),__getset(0,i,"source",null,function(t){t.indexOf(".ani")>-1?this.loadAnimation(t):t.indexOf(".json")>-1||t.indexOf("als")>-1||t.indexOf("atlas")>-1?this.loadAtlas(t):this.loadImages(t.split(","))}),__getset(0,i,"autoAnimation",null,function(t){this.play(0,!0,t,!1)}),e.createFrames=function(t,i){var n,s,r=0,a=0;if("string"==typeof t){var o=Loader.getAtlas(t);if(o&&o.length)for(n=[],r=0,a=o.length;r<a;r++)(s=new RunDriver.createGraphics).drawTexture(Loader.getRes(o[r]),0,0),n.push(s)}else if(t instanceof Array)for(n=[],r=0,a=t.length;r<a;r++)(s=new RunDriver.createGraphics).loadImage(t[r],0,0),n.push(s);return i&&(e.framesMap[i]=n),n},e.clearCache=function(t){var i,n=e.framesMap,s=t+"#";for(i in n)i!==t&&0!=i.indexOf(s)||delete e.framesMap[i]},e.framesMap={},e}(AnimationPlayerBase),FrameAnimation=function(t){function e(){this._targetDic=null,this._animationData=null,this._animationNewFrames=null,e.__super.call(this),null==e._sortIndexFun&&(e._sortIndexFun=MathUtil.sortByKey("index",!1,!0))}__class(e,"laya.display.FrameAnimation",t);var i=e.prototype;return i._setUp=function(t,e){this._labels=null,this._animationNewFrames=null,this._targetDic=t,this._animationData=e,this.interval=1e3/e.frameRate,e.parsed?(this._count=e.count,this._labels=e.labels,this._animationNewFrames=e.animationNewFrames):(this._animationNewFrames=[],this._calculateDatas()),e.parsed=!0,e.labels=this._labels,e.count=this._count,e.animationNewFrames=this._animationNewFrames},i.clear=function(){t.prototype.clear.call(this),this._targetDic=null,this._animationData=null},i._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},i._displayNodeToFrame=function(t,e,i){i||(i=this._targetDic);var n=i[t.target];if(n){var s,r,a,o=t.frames,h=t.keys,l=0,c=h.length;for(l=0;l<c;l++)a=(r=o[s=h[l]]).length>e?r[e]:r[r.length-1],n[s]=a}},i._calculateDatas=function(){if(this._animationData){var t,e=this._animationData.nodes,i=0,n=e.length;for(this._count=0,i=0;i<n;i++)t=e[i],this._calculateNodeKeyFrames(t);this._count+=1}},i._calculateNodeKeyFrames=function(t){var i,n,s=t.keyframes,r=t.target;t.frames||(t.frames={}),t.keys?t.keys.length=0:t.keys=[],t.initValues||(t.initValues={});for(i in s)n=s[i],t.frames[i]||(t.frames[i]=[]),this._targetDic&&this._targetDic[r]&&(t.initValues[i]=this._targetDic[r][i]),n.sort(e._sortIndexFun),t.keys.push(i),this._calculateNodePropFrames(n,t.frames[i],i,r)},i.resetToInitState=function(){if(this._targetDic&&this._animationData){var t,e,i=this._animationData.nodes,n=0,s=i.length;for(n=0;n<s;n++)if(t=i[n],e=t.initValues){var r=this._targetDic[t.target];if(r){var a;for(a in e)r[a]=e[a]}}}},i._calculateNodePropFrames=function(t,e,i,n){var s=0,r=t.length-1;for(e.length=t[r].index+1,s=0;s<r;s++)this._dealKeyFrame(t[s]),this._calculateFrameValues(t[s],t[s+1],e);0==r&&(e[0]=t[0].value,this._animationNewFrames&&(this._animationNewFrames[t[0].index]=!0)),this._dealKeyFrame(t[s])},i._dealKeyFrame=function(t){t.label&&""!=t.label&&this.addLabel(t.label,t.index)},i._calculateFrameValues=function(t,e,i){var n,s=0,r=t.index,a=e.index,o=t.value,h=e.value-t.value,l=a-r;if(a>this._count&&(this._count=a),t.tween)for(null==(n=Ease[t.tweenMethod])&&(n=Ease.linearNone),s=r;s<a;s++)i[s]=n(s-r,o,h,l),this._animationNewFrames&&(this._animationNewFrames[s]=!0);else for(s=r;s<a;s++)i[s]=o;this._animationNewFrames&&(this._animationNewFrames[t.index]=!0,this._animationNewFrames[e.index]=!0),i[e.index]=e.value},e._sortIndexFun=null,e}(AnimationPlayerBase),Input=function(t){function e(){if(this._focus=!1,this._multiline=!1,this._editable=!0,this._restrictPattern=null,this._type="text",this._prompt="",this._promptColor="#A9A9A9",this._originColor="#000000",this._content="",e.__super.call(this),this._maxChars=1e5,this._width=100,this._height=20,this.multiline=!1,this.overflow=Text.SCROLL,this.on("mousedown",this,this._onMouseDown),this.on("undisplay",this,this._onUnDisplay),Render.isConchApp){var t=this.nativeInput,i=this;t.setOnHideKeyboard&&t.setOnHideKeyboard(function(t){i.changeText(t)})}}__class(e,"laya.display.Input",t);var i=e.prototype;return i.setSelection=function(t,e){this.focus=!0,laya.display.Input.inputElement.selectionStart=t,laya.display.Input.inputElement.selectionEnd=e},i._onUnDisplay=function(t){this.focus=!1},i._onMouseDown=function(t){this.focus=!0},i._syncInputTransform=function(){var t=this.nativeInput,i=Utils.getTransformRelativeToWindow(this,this.padding[3],this.padding[0]),n=this._width-this.padding[1]-this.padding[3],s=this._height-this.padding[0]-this.padding[2];Render.isConchApp?(t.setScale(i.scaleX,i.scaleY),t.setSize(n,s),t.setPos(i.x,i.y)):(e.inputContainer.style.transform=e.inputContainer.style.webkitTransform="scale("+i.scaleX+","+i.scaleY+") rotate("+Laya.stage.canvasDegree+"deg)",t.style.width=n+"px",t.style.height=s+"px",e.inputContainer.style.left=i.x+"px",e.inputContainer.style.top=i.y+"px")},i.select=function(){this.nativeInput.select()},i._setInputMethod=function(){e.input.parentElement&&e.inputContainer.removeChild(e.input),e.area.parentElement&&e.inputContainer.removeChild(e.area),e.inputElement=this._multiline?e.area:e.input,e.inputContainer.appendChild(e.inputElement),Text.RightToLeft&&(e.inputElement.style.direction="rtl")},i._focusIn=function(){laya.display.Input.isInputting=!0;var t=this.nativeInput;this._focus=!0;var e=t.style;e.whiteSpace=this.wordWrap?"pre-wrap":"nowrap",this._setPromptColor(),t.readOnly=!this._editable,Render.isConchApp&&(t.setOnHideKeyboard&&t.setRegular(this.restrict),t.setType(this._type),t.setForbidEdit(!this._editable)),t.maxLength=this._maxChars;this.padding;if(t.type=this._type,t.value=this._content,t.placeholder=this._prompt,Laya.stage.off("keydown",this,this._onKeyDown),Laya.stage.on("keydown",this,this._onKeyDown),Laya.stage.focus=this,this.event("focus"),Browser.onPC&&t.focus(),!Browser.onMiniGame){this._text;this._text=null}this.typeset(),t.setColor(this._originColor),t.setFontSize(this.fontSize),t.setFontFace(Browser.onIPhone?Text._fontFamilyMap[this.font]||this.font:this.font),Render.isConchApp&&t.setMultiAble&&t.setMultiAble(this._multiline),e.lineHeight=this.leading+this.fontSize+"px",e.fontStyle=this.italic?"italic":"normal",e.fontWeight=this.bold?"bold":"normal",e.textAlign=this.align,e.padding="0 0",this._syncInputTransform(),!Render.isConchApp&&Browser.onPC&&Laya.timer.frameLoop(1,this,this._syncInputTransform)},i._setPromptColor=function(){(e.promptStyleDOM=Browser.getElementById("promptStyle"))||((e.promptStyleDOM=Browser.createElement("style")).setAttribute("id","promptStyle"),Browser.document.head.appendChild(e.promptStyleDOM)),e.promptStyleDOM.innerText="input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:"+this._promptColor+"}input:-moz-placeholder, textarea:-moz-placeholder {color:"+this._promptColor+"}input::-moz-placeholder, textarea::-moz-placeholder {color:"+this._promptColor+"}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:"+this._promptColor+"}"},i._focusOut=function(){laya.display.Input.isInputting=!1,this._focus=!1,this._text=null,this._content=this.nativeInput.value,this._content?(Laya.superSet(Text,this,"text",this._content),Laya.superSet(Text,this,"color",this._originColor)):(Laya.superSet(Text,this,"text",this._prompt),Laya.superSet(Text,this,"color",this._promptColor)),Laya.stage.off("keydown",this,this._onKeyDown),Laya.stage.focus=null,this.event("blur"),Render.isConchApp&&this.nativeInput.blur(),Browser.onPC&&Laya.timer.clear(this,this._syncInputTransform)},i._onKeyDown=function(t){13===t.keyCode&&(Browser.onMobile&&!this._multiline&&(this.focus=!1),this.event("enter"))},i.changeText=function(e){this._content=e,this._focus?(this.nativeInput.value=e||"",this.event("change")):t.prototype.changeText.call(this,e)},__getset(0,i,"color",t.prototype._$get_color,function(t){this._focus&&this.nativeInput.setColor(t),Laya.superSet(Text,this,"color",this._content?t:this._promptColor),this._originColor=t}),__getset(0,i,"inputElementYAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。")}),__getset(0,i,"multiline",function(){return this._multiline},function(t){this._multiline=t,this.valign=t?"top":"middle"}),__getset(0,i,"maxChars",function(){return this._maxChars},function(t){t<=0&&(t=1e5),this._maxChars=t}),__getset(0,i,"text",function(){return this._focus?this.nativeInput.value:this._content||""},function(t){Laya.superSet(Text,this,"color",this._originColor),t+="",this._focus?(this.nativeInput.value=t||"",this.event("change")):(this._multiline||(t=t.replace(/\r?\n/g,"")),this._content=t,t?Laya.superSet(Text,this,"text",t):(Laya.superSet(Text,this,"text",this._prompt),Laya.superSet(Text,this,"color",this.promptColor)))}),__getset(0,i,"nativeInput",function(){return this._multiline?e.area:e.input}),__getset(0,i,"prompt",function(){return this._prompt},function(t){!this._text&&t&&Laya.superSet(Text,this,"color",this._promptColor),this.promptColor=this._promptColor,this._text?Laya.superSet(Text,this,"text",this._text==this._prompt?t:this._text):Laya.superSet(Text,this,"text",t),this._prompt=Text.langPacks&&Text.langPacks[t]?Text.langPacks[t]:t}),__getset(0,i,"focus",function(){return this._focus},function(t){var i=this.nativeInput;this._focus!==t&&(t?(i.target?i.target._focusOut():this._setInputMethod(),i.target=this,this._focusIn()):(i.target=null,this._focusOut(),Browser.document.body.scrollTop=0,Render.isConchApp||i.blur(),Render.isConchApp?i.setPos(-1e4,-1e4):e.inputContainer.contains(i)&&e.inputContainer.removeChild(i)))}),__getset(0,i,"restrict",function(){return this._restrictPattern?this._restrictPattern.source:""},function(t){t?((t="[^"+t+"]").indexOf("^^")>-1&&(t=t.replace("^^","")),this._restrictPattern=new RegExp(t,"g")):this._restrictPattern=null}),__getset(0,i,"editable",function(){return this._editable},function(t){this._editable=t,Render.isConchApp&&e.input.setForbidEdit(!t)}),__getset(0,i,"promptColor",function(){return this._promptColor},function(t){this._promptColor=t,this._content||Laya.superSet(Text,this,"color",t)}),__getset(0,i,"type",function(){return this._type},function(t){this._getCSSStyle().password="password"==t,this._type=t,Render.isConchApp&&this.nativeInput.setType(t)}),__getset(0,i,"inputElementXAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。")}),__getset(0,i,"asPassword",function(){return this._getCSSStyle().password},function(t){this._getCSSStyle().password=t,this._type="password",console.warn('deprecated: 使用type="password"替代设置asPassword, asPassword将在下次重大更新时删去'),this.isChanged=!0}),e.__init__=function(){e._createInputElement(),Browser.onMobile&&Render.canvas.addEventListener(e.IOS_IFRAME?Browser.onMiniGame?"touchend":"click":"touchend",e._popupInputMethod)},e._popupInputMethod=function(t){if(laya.display.Input.isInputting){laya.display.Input.inputElement.focus()}},e._createInputElement=function(){e._initInput(e.area=Browser.createElement("textarea")),e._initInput(e.input=Browser.createElement("input")),(e.inputContainer=Browser.createElement("div")).style.position="absolute",e.inputContainer.style.zIndex=1e5,Browser.container.appendChild(e.inputContainer),e.inputContainer.setPos=function(t,i){e.inputContainer.style.left=t+"px",e.inputContainer.style.top=i+"px"}},e._initInput=function(t){var i=t.style;i.cssText="position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;",i.resize="none",i.backgroundColor="transparent",i.border="none",i.outline="none",i.zIndex=1,t.addEventListener("input",e._processInputting),t.addEventListener("mousemove",e._stopEvent),t.addEventListener("mousedown",e._stopEvent),t.addEventListener("touchmove",e._stopEvent),t.setFontFace=function(e){t.style.fontFamily=e},Render.isConchApp||(t.setColor=function(e){t.style.color=e},t.setFontSize=function(e){t.style.fontSize=e+"px"})},e._processInputting=function(t){var e=laya.display.Input.inputElement.target;if(e){if(!Render.isConchApp||Render.isConchApp&&!laya.display.Input.inputElement.setOnHideKeyboard){var i=laya.display.Input.inputElement.value;e._restrictPattern&&(i=i.replace(/\u2006|\x27/g,""),e._restrictPattern.test(i)&&(i=i.replace(e._restrictPattern,""),laya.display.Input.inputElement.value=i)),e._text=i}e.event("input")}},e._stopEvent=function(t){"touchmove"==t.type&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},e.TYPE_TEXT="text",e.TYPE_PASSWORD="password",e.TYPE_EMAIL="email",e.TYPE_URL="url",e.TYPE_NUMBER="number",e.TYPE_RANGE="range",e.TYPE_DATE="date",e.TYPE_MONTH="month",e.TYPE_WEEK="week",e.TYPE_TIME="time",e.TYPE_DATE_TIME="datetime",e.TYPE_DATE_TIME_LOCAL="datetime-local",e.TYPE_SEARCH="search",e.input=null,e.area=null,e.inputElement=null,e.inputContainer=null,e.confirmButton=null,e.promptStyleDOM=null,e.inputHeight=45,e.isInputting=!1,e.stageMatrix=null,__static(e,["IOS_IFRAME",function(){return this.IOS_IFRAME=Browser.onIOS&&Browser.window.top!=Browser.window.self}]),e}(Text),HTMLImage=function(t){function e(t,i){this._recreateLock=!1,this._needReleaseAgain=!1,this._enableMerageInAtlas=!0,e.__super.call(this),this._init_(t,i)}__class(e,"laya.resource.HTMLImage",FileBitmap);var i=e.prototype;return i._init_=function(t,e){this._src=t,this._source=new Browser.window.Image,e&&(e.onload&&(this.onload=e.onload),e.onerror&&(this.onerror=e.onerror),e.onCreate&&e.onCreate(this)),0!=t.indexOf("data:image")&&(this._source.crossOrigin=""),t&&(this._source.src=t)},i.recreateResource=function(){var t=this;if(""===this._src)throw new Error("src no null！");if(this._needReleaseAgain=!1,this._source){if(this._recreateLock)return;this.memorySize=this._w*this._h*4,this._recreateLock=!1,this.completeCreate()}else{this._recreateLock=!0;var e=this;this._source=new Browser.window.Image,this._source.crossOrigin="",this._source.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._source.onload=null,void(e._source=null);e._source.onload=null,e.memorySize=t._w*t._h*4,e._recreateLock=!1,e.completeCreate()},this._source.src=this._src}},i.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(this._source=null,this.memorySize=0)},i.onresize=function(){this._w=this._source.width,this._h=this._source.height},__getset(0,i,"onload",null,function(t){var e=this;this._onload=t,this._source&&(this._source.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),__getset(0,i,"onerror",null,function(t){var e=this;this._onerror=t,this._source&&(this._source.onerror=null!=this._onerror?function(){e._onerror()}:null)}),__getset(0,i,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t,Render.isConchApp&&this._source&&(this._source.enableMerageInAtlas=t)}),e.create=function(t,i){return new e(t,i)},e}(),EffectAnimation=function(t){function e(){this._target=null,this._playEvents=null,this._initData={},this._aniKeys=null,this._effectClass=null,e.__super.call(this)}__class(e,"laya.display.EffectAnimation",t);var i=e.prototype;return i._onOtherBegin=function(t){t!=this&&this.stop()},i.addEvent=function(){this._target&&this._playEvents&&(this._setControlNode(this._target),this._target.on(this._playEvents,this,this._onPlayAction))},i._onPlayAction=function(){this.play(0,!1)},i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._target&&(this._target.event("effectanimationbegin",[this]),this._recordInitData(),laya.display.AnimationPlayerBase.prototype.play.call(this,t,e,i,n))},i._recordInitData=function(){if(this._aniKeys){var t=0,e=0;e=this._aniKeys.length;var i;for(t=0;t<e;t++)i=this._aniKeys[t],this._initData[i]=this._target[i]}},i._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(n=n>1?1:n,i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},i._displayNodeToFrame=function(t,e,i){if(this._target){var n;n=this._target;var s,r,a,o,h=t.frames,l=t.keys,c=0,u=l.length;o=t.secondFrames;var _,d,f,p,g=0;for(c=0;c<u;c++)r=h[s=l[c]],-1==(g=o[s])?a=this._initData[s]:e<g?(f=(d=t.keyframes[s])[0]).tween?(null==(_=Ease[f.tweenMethod])&&(_=Ease.linearNone),p=d[1],a=_(e,this._initData[s],p.value-this._initData[s],p.index)):a=this._initData[s]:a=r.length>e?r[e]:r[r.length-1],n[s]=a}},i._calculateNodeKeyFrames=function(e){t.prototype._calculateNodeKeyFrames.call(this,e);var i,n,s,r=e.keyframes;e.target;s={},e.secondFrames=s;for(i in r)(n=r[i]).length<=1?s[i]=-1:s[i]=n[1].index},__getset(0,i,"target",function(){return this._target},function(t){this._target&&this._target.off("effectanimationbegin",this,this._onOtherBegin),this._target=t,this._target&&this._target.on("effectanimationbegin",this,this._onOtherBegin),this.addEvent()}),__getset(0,i,"playEvent",null,function(t){this._playEvents=t,t&&this.addEvent()}),__getset(0,i,"effectData",null,function(t){if(t){var e;(e=t.animations)&&e[0]&&(this._setUp({},e[0]),e[0].nodes&&e[0].nodes[0]&&(this._aniKeys=e[0].nodes[0].keys))}}),__getset(0,i,"effectClass",null,function(t){if(this._effectClass=ClassUtils.getClass(t),this._effectClass){var e;if(e=this._effectClass.uiView){var i;(i=e.animations)&&i[0]&&(this._setUp({},i[0]),i[0].nodes&&i[0].nodes[0]&&(this._aniKeys=i[0].nodes[0].keys))}}}),e.EffectAnimationBegin="effectanimationbegin",e}(FrameAnimation),GraphicAnimation=function(t){function e(){this.animationList=null,this.animationDic=null,this._nodeList=null,this._nodeDefaultProps=null,this._gList=null,this._nodeIDAniDic={},this._rootNode=null,this._nodeGDic=null,e.__super.call(this)}var i;__class(e,"laya.utils.GraphicAnimation",t);var n=e.prototype;return n._parseNodeList=function(t){this._nodeList||(this._nodeList=[]),this._nodeDefaultProps[t.compId]=t.props,t.compId&&this._nodeList.push(t.compId);var e=t.child;if(e){var i=0,n=e.length;for(i=0;i<n;i++)this._parseNodeList(e[i])}},n._calGraphicData=function(t){if(this._setUp(null,t),this._createGraphicData(),this._nodeIDAniDic){var e;for(e in this._nodeIDAniDic)this._nodeIDAniDic[e]=null}},n._createGraphicData=function(){var t=[],e=0,i=this.count,n=this._animationNewFrames;n||(n=[]);var s;for(e=0;e<i;e++)!n[e]&&s||(s=this._createFrameGraphic(e)),t.push(s);this._gList=t},n._createFrameGraphic=function(t){var i=RunDriver.createGraphics();return e._rootMatrix||(e._rootMatrix=new Matrix),this._updateNodeGraphic(this._rootNode,t,e._rootMatrix,i),i},n._updateNodeGraphic=function(t,e,i,n,s){void 0===s&&(s=1);var r,a=(r=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId])).alpha*s;if(!(a<.01)){r.resultTransform||(r.resultTransform=Matrix.create());var o;o=r.resultTransform,Matrix.mul(r.transform,i,o);var h;r.skin&&(h=this._getTextureByUrl(r.skin))&&(o._checkTransform()?(n.drawTexture(h,0,0,r.width,r.height,o,a),r.resultTransform=null):n.drawTexture(h,o.tx,o.ty,r.width,r.height,null,a));var l;if(l=t.child){var c=0,u=0;for(u=l.length,c=0;c<u;c++)this._updateNodeGraphic(l[c],e,o,n,a)}}},n._updateNoChilds=function(t,e){if(t.skin){var i=this._getTextureByUrl(t.skin);if(i){var n=t.transform;n._checkTransform();!n.bTransform?e.drawTexture(i,n.tx,n.ty,t.width,t.height,null,t.alpha):e.drawTexture(i,0,0,t.width,t.height,n.clone(),t.alpha)}}},n._updateNodeGraphic2=function(t,e,i){var n;if(n=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId]),t.child){var s=n.transform;s._checkTransform();var r=!1,a=!1;a=(r=!s.bTransform)&&(0!=s.tx||0!=s.ty);var o=!1;(o=s.bTransform||1!=n.alpha)&&i.save(),1!=n.alpha&&i.alpha(n.alpha),r?a&&i.translate(s.tx,s.ty):i.transform(s.clone());var h;h=t.child;var l;if(n.skin&&(l=this._getTextureByUrl(n.skin))&&i.drawTexture(l,0,0,n.width,n.height),h){var c=0,u=0;for(u=h.length,c=0;c<u;c++)this._updateNodeGraphic2(h[c],e,i)}o?i.restore():r?a&&i.translate(-s.tx,-s.ty):i.transform(s.clone().invert())}else this._updateNoChilds(n,i)},n._calculateNodeKeyFrames=function(e){t.prototype._calculateNodeKeyFrames.call(this,e),this._nodeIDAniDic[e.target]=e},n.getNodeDataByID=function(t){return this._nodeIDAniDic[t]},n._getParams=function(t,i,n,s){var r=e._temParam;r.length=i.length;var a=0,o=i.length;for(a=0;a<o;a++)r[a]=this._getObjVar(t,i[a][0],n,i[a][1],s);return r},n._getObjVar=function(t,e,i,n,s){if(t.hasOwnProperty(e)){var r=t[e];return i>=r.length&&(i=r.length-1),t[e][i]}return s.hasOwnProperty(e)?s[e]:n},n._getNodeGraphicData=function(t,n,s){s||(s=i.create()),s.transform?s.transform.identity():s.transform=Matrix.create();var r=this.getNodeDataByID(t);if(!r)return s;var a=r.frames,o=this._getParams(a,e._drawTextureCmd,n,this._nodeDefaultProps[t]),h=o[0],l=NaN,c=NaN,u=o[5],_=o[6],d=o[13],f=o[14],p=o[7],g=o[8],m=o[9],v=o[11],y=o[12];l=o[3],c=o[4],0!=l&&0!=c||(h=null),-1==l&&(l=0),-1==c&&(c=0);var w;s.skin=h,s.width=l,s.height=c,h&&((w=this._getTextureByUrl(h))?(l||(l=w.sourceWidth),c||(c=w.sourceHeight)):console.warn("lost skin:",h,",you may load pics first")),s.alpha=o[10];var x;x=s.transform,0!=d&&(u=d*l),0!=f&&(_=f*c),0==u&&0==_||x.translate(-u,-_);var T=null;if(m||1!==p||1!==g||v||y){(T=e._tempMt).identity(),T.bTransform=!0;var b=.0174532922222222*(m-v),C=.0174532922222222*(m+y),M=Math.cos(C),S=Math.sin(C),L=Math.sin(b),R=Math.cos(b);T.a=p*M,T.b=p*S,T.c=-g*L,T.d=g*R,T.tx=T.ty=0}return T&&(x=Matrix.mul(x,T,x)),x.translate(o[1],o[2]),s},n._getTextureByUrl=function(t){return Loader.getRes(t)},n.setAniData=function(t,i){if(t.animations){this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=t,this._parseNodeList(t);var n,s={},r=[],a=t.animations,o=0,h=a.length;for(o=0;o<h;o++)if(n=a[o],this._labels=null,(!i||i==n.name)&&n){try{this._calGraphicData(n)}catch(t){console.warn("parse animation fail:"+n.name+",empty animation created"),this._gList=[]}var l={};l.interval=1e3/n.frameRate,l.frames=this._gList,l.labels=this._labels,l.name=n.name,r.push(l),s[n.name]=l}this.animationList=r,this.animationDic=s}e._temParam.length=0},n.parseByData=function(t){var e,i;e=t.nodeRoot,i=t.aniO,delete t.nodeRoot,delete t.aniO,this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=e,this._parseNodeList(e),this._labels=null;try{this._calGraphicData(i)}catch(t){console.warn("parse animation fail:"+i.name+",empty animation created"),this._gList=[]}var n=t;return n.interval=1e3/i.frameRate,n.frames=this._gList,n.labels=this._labels,n.name=i.name,n},n.setUpAniData=function(t){if(t.animations){var e,i={},n=[],s=t.animations,r=0,a=s.length;for(r=0;r<a;r++)if(e=s[r]){var o={};o.name=e.name,o.aniO=e,o.nodeRoot=t,n.push(o),i[e.name]=o}this.animationList=n,this.animationDic=i}},n._clear=function(){if(this.animationList=null,this.animationDic=null,this._gList=null,this._nodeGDic){var t,e;for(t in this._nodeGDic)(e=this._nodeGDic[t])&&e.recover()}this._nodeGDic=null},e.parseAnimationByData=function(t){e._I||(e._I=new e);var i;return i=e._I.parseByData(t),e._I._clear(),i},e.parseAnimationData=function(t){e._I||(e._I=new e),e._I.setUpAniData(t);var i;return i={},i.animationList=e._I.animationList,i.animationDic=e._I.animationDic,e._I._clear(),i},e._temParam=[],e._I=null,e._rootMatrix=null,__static(e,["_drawTextureCmd",function(){return this._drawTextureCmd=[["skin",null],["x",0],["y",0],["width",-1],["height",-1],["pivotX",0],["pivotY",0],["scaleX",1],["scaleY",1],["rotation",0],["alpha",1],["skewX",0],["skewY",0],["anchorX",0],["anchorY",0]]},"_tempMt",function(){return this._tempMt=new Matrix}]),e.__init$=function(){i=function(){function t(){this.skin=null,this.transform=null,this.resultTransform=null,this.width=NaN,this.height=NaN,this.alpha=1}__class(t,"");return t.prototype.recover=function(){this.skin=null,this.width=0,this.height=0,this.alpha=1,this.transform&&(this.transform.destroy(),this.transform=null),this.resultTransform&&(this.resultTransform.destroy(),this.resultTransform=null),Pool.recover("GraphicNode",this)},t.create=function(){return Pool.getItemByClass("GraphicNode",t)},t}()},e}(FrameAnimation);Laya.__init([EventDispatcher,LoaderManager,Render,Browser,Timer,LocalStorage,TimeLine,GraphicAnimation])}(window,document,Laya),function(t,e,i){i.un,i.uns,i.static;var n=i.class;i.getset,i.__newvec;new(function(){function t(){}return n(t,"LayaMain"),t}())}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var n=Laya[i];n&&n.__isclass&&(e[i]=n)}});
!function(t,e,i){i.un,i.uns;var r=i.static,s=i.class,n=i.getset,a=i.__newvec,h=laya.maths.Arith,l=laya.maths.Bezier,o=laya.resource.Bitmap,u=laya.utils.Browser,_=laya.utils.Byte,c=laya.utils.Color,f=(laya.filters.ColorFilter,i.Config),d=laya.resource.Context,m=(laya.events.Event,laya.filters.Filter),p=laya.display.Graphics,g=laya.resource.HTMLCanvas,v=(laya.utils.HTMLChar,laya.resource.HTMLImage),x=laya.resource.HTMLSubImage,b=(laya.utils.Handler,laya.net.Loader,laya.maths.Matrix),T=laya.maths.Point,y=laya.maths.Rectangle,A=laya.renders.Render,E=(laya.renders.RenderContext,laya.renders.RenderSprite),S=laya.resource.Resource,w=laya.resource.ResourceManager,R=laya.utils.RunDriver,I=laya.display.Sprite,M=laya.display.Stage,C=laya.utils.Stat,L=laya.utils.StringKey,P=(laya.display.css.Style,laya.system.System),F=laya.display.Text,D=laya.resource.Texture,B=(laya.display.css.TransformInfo,laya.net.URL,laya.utils.Utils),N=laya.utils.VectorGraphManager;laya.utils.WordText;i.interface("laya.webgl.shapes.IShape"),i.interface("laya.webgl.submit.ISubmit"),i.interface("laya.webgl.text.ICharSegment"),i.interface("laya.webgl.canvas.save.ISaveData"),i.interface("laya.webgl.resource.IMergeAtlasBitmap"),i.interface("laya.filters.IFilterActionGL","laya.filters.IFilterAction");var O=function(){function t(){}s(t,"laya.filters.webgl.FilterActionGL");var e=t.prototype;return i.imps(e,{"laya.filters.IFilterActionGL":!0}),e.setValue=function(t){},e.setValueMix=function(t){},e.apply3d=function(t,e,i,r,s){return null},e.apply=function(t){return null},n(0,e,"typeMix",function(){return 0}),t}(),V=function(){function t(){}return s(t,"laya.webgl.shader.ShaderValue"),t}(),U=function(){function t(t,e,r){this._atlasID=0,this._width=0,this._height=0,this._texCount=0,this._rowInfo=null,this._cells=null,this._failSize=new i,void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),this._cells=null,this._rowInfo=null,this._init(t,e),this._atlasID=r}var e,i;s(t,"laya.webgl.atlas.AtlasGrid");var r=t.prototype;return r.getAltasID=function(){return this._atlasID},r.setAltasID=function(t){t>=0&&(this._atlasID=t)},r.addTex=function(t,e,i){var r=this._get(e,i);return 0==r.ret?r:(this._fill(r.x,r.y,e,i,t),this._texCount++,r)},r._release=function(){null!=this._cells&&(this._cells.length=0,this._cells=null),this._rowInfo&&(this._rowInfo.length=0,this._rowInfo=null)},r._init=function(t,i){if(this._width=t,this._height=i,this._release(),0==this._width)return!1;this._cells=new Uint8Array(this._width*this._height*3),this._rowInfo=a(this._height);for(var r=0;r<this._height;r++)this._rowInfo[r]=new e;return this._clear(),!0},r._get=function(t,e){var i=new H;if(t>=this._failSize.width&&e>=this._failSize.height)return i;for(var r=-1,s=-1,n=this._width,a=this._height,h=this._cells,l=0;l<a;l++)if(!(this._rowInfo[l].spaceCount<t))for(var o=0;o<n;){var u=3*(l*n+o);if(0!=h[u]||h[u+1]<t||h[u+2]<e)o+=h[u+1];else{r=o,s=l;for(var _=0;_<t;_++)if(h[3*_+u+2]<e){r=-1;break}if(!(r<0))return i.ret=!0,i.x=r,i.y=s,i;o+=h[u+1]}}return i},r._fill=function(t,e,i,r,s){var n=this._width,a=this._height;this._check(t+i<=n&&e+r<=a);for(var h=e;h<r+e;++h){this._check(this._rowInfo[h].spaceCount>=i),this._rowInfo[h].spaceCount-=i;for(var l=0;l<i;l++){var o=3*(t+h*n+l);this._check(0==this._cells[o]),this._cells[o]=s,this._cells[o+1]=i,this._cells[o+2]=r}}if(t>0)for(h=0;h<r;++h){var u=0;for(l=t-1;l>=0&&0==this._cells[3*((e+h)*n+l)];--l,++u);for(l=u;l>0;--l)this._cells[3*((e+h)*n+t-l)+1]=l,this._check(l>0)}if(e>0)for(l=t;l<t+i;++l){for(u=0,h=e-1;h>=0&&0==this._cells[3*(l+h*n)];--h,u++);for(h=u;h>0;--h)this._cells[3*(l+(e-h)*n)+2]=h,this._check(h>0)}},r._check=function(t){0==t&&console.log("xtexMerger 错误啦")},r._clear=function(){this._texCount=0;for(var t=0;t<this._height;t++)this._rowInfo[t].spaceCount=this._width;for(var e=0;e<this._height;e++)for(var i=0;i<this._width;i++){var r=3*(e*this._width+i);this._cells[r]=0,this._cells[r+1]=this._width-i,this._cells[r+2]=this._width-e}this._failSize.width=this._width+1,this._failSize.height=this._height+1},t.__init$=function(){e=function(){function t(){this.spaceCount=0}return s(t,""),t}(),i=function(){function t(){this.width=0,this.height=0}return s(t,""),t}()},t}(),k=function(){function t(t,e,i,r){this._currentAtlasCount=0,this._maxAtlaserCount=0,this._width=0,this._height=0,this._gridSize=0,this._gridNumX=0,this._gridNumY=0,this._init=!1,this._curAtlasIndex=0,this._setAtlasParam=!1,this._atlaserArray=null,this._needGC=!1,this._setAtlasParam=!0,this._width=t,this._height=e,this._gridSize=i,this._maxAtlaserCount=r,this._gridNumX=t/i,this._gridNumY=e/i,this._curAtlasIndex=0,this._atlaserArray=[]}s(t,"laya.webgl.atlas.AtlasResourceManager");var e=t.prototype;return e.setAtlasParam=function(e,i,r,s){if(1==this._setAtlasParam)return t._sid_=0,this._width=e,this._height=i,this._gridSize=r,this._maxAtlaserCount=s,this._gridNumX=e/r,this._gridNumY=i/r,this._curAtlasIndex=0,this.freeAll(),!0;throw console.log("设置大图合集参数错误，只能在开始页面设置各种参数"),-1},e.pushData=function(e){var i=e.bitmap,r=-1,s=null,n=0,a=0,h=0;for(n=0,a=this._atlaserArray.length;n<a&&(h=(this._curAtlasIndex+n)%a,s=this._atlaserArray[h],-1==(r=s.findBitmapIsExist(i)));n++);if(-1!=r){var l=s.InAtlasWebGLImagesOffsetValue[r];return m=l[0],p=l[1],s.addToAtlas(e,m,p),!0}this._setAtlasParam=!1;for(var o=Math.ceil((e.bitmap.width+2)/this._gridSize),u=Math.ceil((e.bitmap.height+2)/this._gridSize),_=!1,c=0;c<2;c++){var f=this._maxAtlaserCount;for(n=0;n<f;n++){h=(this._curAtlasIndex+n)%f,this._atlaserArray.length-1>=h||this._atlaserArray.push(new wt(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++));var d=this._atlaserArray[h],m=0,p=0,g=d.addTex(1,o,u);if(g.ret){m=g.x*this._gridSize+1,p=g.y*this._gridSize+1,i.lock=!0,d.addToAtlasTexture(i,m,p),d.addToAtlas(e,m,p),_=!0,this._curAtlasIndex=h;break}}if(_)break;this._atlaserArray.push(new wt(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++)),this._needGC=!0,this.garbageCollection(),this._curAtlasIndex=this._atlaserArray.length-1}return _||console.log(">>>AtlasManager pushData error"),_},e.addToAtlas=function(t){laya.webgl.atlas.AtlasResourceManager.instance.pushData(t)},e.garbageCollection=function(){if(!0===this._needGC){for(var t=this._atlaserArray.length-this._maxAtlaserCount,e=0;e<t;e++)this._atlaserArray[e].dispose(),console.log("AtlasResourceManager:Dispose the inner Atlas。");console.log(">>>>altas garbageCollection ="+t),this._atlaserArray.splice(0,t),this._needGC=!1}return!0},e.freeAll=function(){for(var t=0,e=this._atlaserArray.length;t<e;t++)this._atlaserArray[t].dispose();this._atlaserArray.length=0,this._curAtlasIndex=0},e.getAtlaserCount=function(){return this._atlaserArray.length},e.getAtlaserByIndex=function(t){return this._atlaserArray[t]},n(1,t,"instance",function(){return t._Instance||(t._Instance=new t(laya.webgl.atlas.AtlasResourceManager.atlasTextureWidth,laya.webgl.atlas.AtlasResourceManager.atlasTextureHeight,16,laya.webgl.atlas.AtlasResourceManager.maxTextureCount)),t._Instance}),n(1,t,"enabled",function(){return f.atlasEnable}),n(1,t,"atlasLimitWidth",function(){return t._atlasLimitWidth},function(e){t._atlasLimitWidth=e}),n(1,t,"atlasLimitHeight",function(){return t._atlasLimitHeight},function(e){t._atlasLimitHeight=e}),t._enable=function(){f.atlasEnable=!0},t._disable=function(){f.atlasEnable=!1},t.__init__=function(){t.atlasTextureWidth=2048,t.atlasTextureHeight=2048,t.maxTextureCount=6,t.atlasLimitWidth=512,t.atlasLimitHeight=512},t._atlasLimitWidth=0,t._atlasLimitHeight=0,t.gridSize=16,t.atlasTextureWidth=0,t.atlasTextureHeight=0,t.maxTextureCount=0,t._atlasRestore=0,t.BOARDER_TYPE_NO=0,t.BOARDER_TYPE_RIGHT=1,t.BOARDER_TYPE_LEFT=2,t.BOARDER_TYPE_BOTTOM=4,t.BOARDER_TYPE_TOP=8,t.BOARDER_TYPE_ALL=15,t._sid_=0,t._Instance=null,t}(),H=function(){function t(){this.x=0,this.y=0,this.ret=!1,this.ret=!1,this.x=0,this.y=0}return s(t,"laya.webgl.atlas.MergeFillInfo"),t}(),G=function(){function t(){}return s(t,"laya.webgl.canvas.BlendMode"),t._init_=function(e){t.fns=[t.BlendNormal,t.BlendAdd,t.BlendMultiply,t.BlendScreen,t.BlendOverlay,t.BlendLight,t.BlendMask,t.BlendDestinationOut],t.targetFns=[t.BlendNormalTarget,t.BlendAddTarget,t.BlendMultiplyTarget,t.BlendScreenTarget,t.BlendOverlayTarget,t.BlendLightTarget,t.BlendMask,t.BlendDestinationOut]},t.BlendNormal=function(t){t.blendFunc(1,771)},t.BlendAdd=function(t){t.blendFunc(1,772)},t.BlendMultiply=function(t){t.blendFunc(774,771)},t.BlendScreen=function(t){t.blendFunc(1,1)},t.BlendOverlay=function(t){t.blendFunc(1,769)},t.BlendLight=function(t){t.blendFunc(1,1)},t.BlendNormalTarget=function(t){t.blendFunc(1,771)},t.BlendAddTarget=function(t){t.blendFunc(1,772)},t.BlendMultiplyTarget=function(t){t.blendFunc(774,771)},t.BlendScreenTarget=function(t){t.blendFunc(1,1)},t.BlendOverlayTarget=function(t){t.blendFunc(1,769)},t.BlendLightTarget=function(t){t.blendFunc(1,1)},t.BlendMask=function(t){t.blendFunc(0,770)},t.BlendDestinationOut=function(t){t.blendFunc(0,0)},t.activeBlendFunction=null,t.NORMAL="normal",t.ADD="add",t.MULTIPLY="multiply",t.SCREEN="screen",t.LIGHT="light",t.OVERLAY="overlay",t.DESTINATIONOUT="destination-out",t.fns=[],t.targetFns=[],r(t,["NAMES",function(){return this.NAMES=["normal","add","multiply","screen","overlay","light","mask","destination-out"]},"TOINT",function(){return this.TOINT={normal:0,add:1,multiply:2,screen:3,lighter:1,overlay:4,light:5,mask:6,"destination-out":7}}]),t}(),z=function(){function t(t){this._color=c.create("black"),this.setValue(t)}s(t,"laya.webgl.canvas.DrawStyle");var e=t.prototype;return e.setValue=function(t){if(t){if("string"==typeof t)return void(this._color=c.create(t));if(t instanceof laya.utils.Color)return void(this._color=t)}},e.reset=function(){this._color=c.create("black")},e.equal=function(t){return"string"==typeof t?this._color.strColor===t:t instanceof laya.utils.Color&&this._color.numColor===t.numColor},e.toColorStr=function(){return this._color.strColor},t.create=function(e){if(e){var i;if("string"==typeof e?i=c.create(e):e instanceof laya.utils.Color&&(i=e),i)return i._drawStyle||(i._drawStyle=new t(e))}return laya.webgl.canvas.DrawStyle.DEFAULT},r(t,["DEFAULT",function(){return this.DEFAULT=new t("#000000")}]),t}(),W=function(){function t(){this._x=0,this._y=0,this.dirty=!1,this.offset=0,this.count=0,this.geoStart=0,this.tempArray=[],this.closePath=!1,this.geomatrys=[];xt.mainContext;this.ib=qt.create(35048),this.vb=jt.create(5)}s(t,"laya.webgl.canvas.Path");var e=t.prototype;return e.addPoint=function(t,e){this.tempArray.push(t,e)},e.getEndPointX=function(){return this.tempArray[this.tempArray.length-2]},e.getEndPointY=function(){return this.tempArray[this.tempArray.length-1]},e.polygon=function(t,e,i,r,s,n){var a;return this.geomatrys.push(this._curGeomatry=a=new Ct(t,e,i,r,s,n)),r||(a.fill=!1),void 0==n&&(a.borderWidth=0),a},e.setGeomtry=function(t){this.geomatrys.push(this._curGeomatry=t)},e.drawLine=function(t,e,i,r,s){var n;return this.closePath?this.geomatrys.push(this._curGeomatry=n=new Mt(t,e,i,r,s)):this.geomatrys.push(this._curGeomatry=n=new It(t,e,i,r,s)),n.fill=!1,n},e.update=function(){var t=this.ib._byteLength,e=this.geomatrys.length;this.offset=t;for(var i=this.geoStart;i<e;i++)this.geomatrys[i].getData(this.ib,this.vb,this.vb._byteLength/20);this.geoStart=e,this.count=(this.ib._byteLength-t)/mt.BYTES_PIDX},e.reset=function(){this.vb.clear(),this.ib.clear(),this.offset=this.count=this.geoStart=0,this.geomatrys.length=0},e.recover=function(){this._curGeomatry=null,this.vb.destory(),this.vb=null,this.ib.destory(),this.ib=null},t}(),Y=function(){function t(){}s(t,"laya.webgl.canvas.save.SaveBase");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){this._dataObj[this._valueName]=this._value,t._cache[t._cache._length++]=this,this._newSubmit&&(e._curSubmit=nt.RENDERBASE,e._renderKey=0)},t._createArray=function(){var t=[];return t._length=0,t},t._init=function(){var e=t._namemap={};return e[1]="ALPHA",e[2]="fillStyle",e[8]="font",e[256]="lineWidth",e[512]="strokeStyle",e[8192]="_mergeID",e[1024]=e[2048]=e[4096]=[],e[16384]="textBaseline",e[32768]="textAlign",e[65536]="_nBlendType",e[1048576]="shader",e[2097152]="filters",e},t.save=function(e,i,r,s){if((e._saveMark._saveuse&i)!==i){e._saveMark._saveuse|=i;var n=t._cache,a=n._length>0?n[--n._length]:new t;a._value=r[a._valueName=t._namemap[i]],a._dataObj=r,a._newSubmit=s;var h=e._save;h[h._length++]=a}},r(t,["_cache",function(){return this._cache=laya.webgl.canvas.save.SaveBase._createArray()},"_namemap",function(){return this._namemap=t._init()}]),t}(),X=function(){function t(){this._clipRect=new y}s(t,"laya.webgl.canvas.save.SaveClipRect");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._clipRect=this._clipSaveRect,t._cache[t._cache._length++]=this,this._submitScissor.submitLength=e._submits._length-this._submitScissor.submitIndex,e._curSubmit=nt.RENDERBASE,e._renderKey=0},t.save=function(e,i){if(131072!=(131072&e._saveMark._saveuse)){e._saveMark._saveuse|=131072;var r=t._cache,s=r._length>0?r[--r._length]:new t;s._clipSaveRect=e._clipRect,e._clipRect=s._clipRect.copyFrom(e._clipRect),s._submitScissor=i;var n=e._save;n[n._length++]=s}},r(t,["_cache",function(){return this._cache=Y._createArray()}]),t}(),K=function(){function t(){this._contextX=0,this._contextY=0,this._clipRect=new y,this._rect=new y,this._matrix=new b}s(t,"laya.webgl.canvas.save.SaveClipRectStencil");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){ut.restore(e,this._rect,this._saveMatrix,this._contextX,this._contextY),e._clipRect=this._clipSaveRect,e._curMat=this._saveMatrix,e._x=this._contextX,e._y=this._contextY,t._cache[t._cache._length++]=this,e._curSubmit=nt.RENDERBASE},t.save=function(e,i,r,s,n,a,h,l,o,u){if(262144!=(262144&e._saveMark._saveuse)){e._saveMark._saveuse|=262144;var _=t._cache,c=_._length>0?_[--_._length]:new t;c._clipSaveRect=e._clipRect,c._clipRect.setTo(h,l,o,u),e._clipRect=c._clipRect,c._rect.x=r,c._rect.y=s,c._rect.width=n,c._rect.height=a,c._contextX=e._x,c._contextY=e._y,c._saveMatrix=e._curMat,e._curMat.copyTo(c._matrix),e._curMat=c._matrix,c._submitStencil=i;var f=e._save;f[f._length++]=c}},r(t,["_cache",function(){return this._cache=Y._createArray()}]),t}(),Q=function(){function t(){this._saveuse=0}s(t,"laya.webgl.canvas.save.SaveMark");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!0},e.restore=function(e){e._saveMark=this._preSaveMark,t._no[t._no._length++]=this},t.Create=function(e){var i=t._no,r=i._length>0?i[--i._length]:new t;return r._saveuse=0,r._preSaveMark=e._saveMark,e._saveMark=r,r},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),Z=function(){function t(){this._matrix=new b}s(t,"laya.webgl.canvas.save.SaveTransform");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._curMat=this._savematrix,t._no[t._no._length++]=this},t.save=function(e){var i=e._saveMark;if(2048!=(2048&i._saveuse)){i._saveuse|=2048;var r=t._no,s=r._length>0?r[--r._length]:new t;s._savematrix=e._curMat,e._curMat=e._curMat.copyTo(s._matrix);var n=e._save;n[n._length++]=s}},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),q=function(){function t(){}s(t,"laya.webgl.canvas.save.SaveTranslate");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._curMat;e._x=this._x,e._y=this._y,t._no[t._no._length++]=this},t.save=function(e){var i=t._no,r=i._length>0?i[--i._length]:new t;r._x=e._x,r._y=e._y;var s=e._save;s[s._length++]=r},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),j=function(){function t(){this.target=null,this.repaint=!1,this._width=NaN,this._height=NaN,this._sp=null,this._clipRect=new y}s(t,"laya.webgl.resource.RenderTargetMAX");var e=t.prototype;return e.setSP=function(t){this._sp=t},e.size=function(t,e){var r=this;this._width!==t||this._height!==e?(this.repaint=!0,this._width=t,this._height=e,this.target?this.target.size(t,e):this.target=Dt.create(t,e),this.target.hasListener("recovered")||this.target.on("recovered",this,function(t){i.timer.callLater(r._sp,r._sp.repaint)})):this.target.size(t,e)},e._flushToTarget=function(t,e){if(!e._destroy){var i=gt.worldScissorTest,r=gt.worldClipRect;gt.worldClipRect=this._clipRect,this._clipRect.x=this._clipRect.y=0,this._clipRect.width=this._width,this._clipRect.height=this._height,gt.worldScissorTest=!1,xt.mainContext.disable(3089);var s=gt.worldAlpha,n=gt.worldMatrix4,a=gt.worldMatrix,h=gt.worldFilters,l=gt.worldShaderDefines;if(gt.worldMatrix=b.EMPTY,gt.restoreTempArray(),gt.worldMatrix4=gt.TEMPMAT4_ARRAY,gt.worldAlpha=1,gt.worldFilters=null,gt.worldShaderDefines=null,Ft.activeShader=null,e.start(),f.showCanvasMark?e.clear(0,1,0,.3):e.clear(0,0,0,0),t.flush(),e.end(),Ft.activeShader=null,gt.worldAlpha=s,gt.worldMatrix4=n,gt.worldMatrix=a,gt.worldFilters=h,gt.worldShaderDefines=l,gt.worldScissorTest=i,i){var o=gt.height-r.y-r.height;xt.mainContext.scissor(r.x,o,r.width,r.height),xt.mainContext.enable(3089)}gt.worldClipRect=r}},e.flush=function(t){this.repaint&&(this._flushToTarget(t,this.target),this.repaint=!1)},e.drawTo=function(t,e,i,r,s){t.drawTexture(this.target.getTexture(),e,i,r,s,0,0)},e.destroy=function(){this.target&&(this.target.destroy(),this.target=null,this._sp=null)},t}(),$=function(){function t(){this.ALPHA=1,this.shaderType=0,this.defines=new Rt}s(t,"laya.webgl.shader.d2.Shader2D");return t.prototype.destroy=function(){this.defines=null,this.filters=null,this.glTexture=null,this.strokeStyle=null,this.fillStyle=null},t.__init__=function(){Xt.addInclude("parts/ColorFilter_ps_uniform.glsl","uniform vec4 colorAlpha;\nuniform mat4 colorMat;"),Xt.addInclude("parts/ColorFilter_ps_logic.glsl","mat4 alphaMat =colorMat;\n\nalphaMat[0][3] *= gl_FragColor.a;\nalphaMat[1][3] *= gl_FragColor.a;\nalphaMat[2][3] *= gl_FragColor.a;\n\ngl_FragColor = gl_FragColor * alphaMat;\ngl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n"),Xt.addInclude("parts/GlowFilter_ps_uniform.glsl","uniform vec4 u_color;\nuniform float u_strength;\nuniform float u_blurX;\nuniform float u_blurY;\nuniform float u_offsetX;\nuniform float u_offsetY;\nuniform float u_textW;\nuniform float u_textH;"),Xt.addInclude("parts/GlowFilter_ps_logic.glsl","const float c_IterationTime = 10.0;\nfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\nvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\nvec2 vec2FilterDir = vec2(-(u_offsetX)/u_textW,-(u_offsetY)/u_textH);\nvec2 vec2FilterOff = vec2(u_blurX/u_textW/c_IterationTime * 2.0,u_blurY/u_textH/c_IterationTime * 2.0);\nfloat maxNum = u_blurX * u_blurY;\nvec2 vec2Off = vec2(0.0,0.0);\nfloat floatOff = c_IterationTime/2.0;\nfor(float i = 0.0;i<=c_IterationTime; ++i){\n\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\tvec4Color += texture2D(texture, v_texcoord + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t}\n}\ngl_FragColor = vec4(u_color.rgb,vec4Color.a * u_strength);\ngl_FragColor.rgb *= gl_FragColor.a;"),Xt.addInclude("parts/BlurFilter_ps_logic.glsl","gl_FragColor =   blur();\ngl_FragColor.w*=alpha;"),Xt.addInclude("parts/BlurFilter_ps_uniform.glsl","uniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\n//float sigma=strength/3.0;//3σ以外影响很小。即当σ=1的时候，半径为3\n//float sig2 = sigma*sigma;\n//float _2sig2 = 2.0*sig2;\n//return 1.0/(2*PI*sig2)*exp(-(x*x+y*y)/_2sig2)\n//float gauss1 = 1.0/(2.0*PI*sig2);\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoord-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}"),Xt.addInclude("parts/ColorAdd_ps_uniform.glsl","uniform vec4 colorAdd;\n"),Xt.addInclude("parts/ColorAdd_ps_logic.glsl","gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\ngl_FragColor.xyz *= colorAdd.a;");var t,e;t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='precision mediump float;\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec4 color= texture2D(texture, v_texcoord);\n   color.a*=alpha;\n   color.rgb*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',Xt.preCompile2D(0,1,t,e,null),t="attribute vec4 position;\nuniform vec2 size;\nuniform mat4 mmat;\nvoid main() {\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n}",e='precision mediump float;\nuniform vec4 color;\nuniform float alpha;\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\nvoid main() {\n\tvec4 a = vec4(color.r, color.g, color.b, color.a);\n\ta.w = alpha;\n\ta.xyz *= alpha;\n\tgl_FragColor = a;\n\t#include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n}',Xt.preCompile2D(0,2,t,e,null),t="attribute vec4 position;\nattribute vec3 a_color;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nuniform vec2 u_pos;\nuniform vec2 size;\nvarying vec3 color;\nvoid main(){\n  vec4 tPos = vec4(position.x + u_pos.x,position.y + u_pos.y,position.z,position.w);\n  vec4 pos=mmat*u_mmat2*tPos;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  color=a_color;\n}",e="precision mediump float;\n//precision mediump float;\nvarying vec3 color;\nuniform float alpha;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor=vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=alpha;\n}",Xt.preCompile2D(0,4,t,e,null),t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\nuniform vec4 u_TexRange;\nuniform vec2 u_offset;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec2 newTexCoord;\n   newTexCoord.x = mod(u_offset.x + v_texcoord.x,u_TexRange.y) + u_TexRange.x;\n   newTexCoord.y = mod(u_offset.y + v_texcoord.y,u_TexRange.w) + u_TexRange.z;\n   vec4 color= texture2D(texture, newTexCoord);\n   color.a*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',Xt.preCompile2D(0,256,t,e,null),t="attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}",e="precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}",Xt.preCompile2D(0,512,t,e,null)},t}(),J=function(){function t(t,e,i){this._value=0,this._name2int=t,this._int2name=e,this._int2nameMap=i}s(t,"laya.webgl.shader.ShaderDefines");var e=t.prototype;return e.add=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value|=t,this._value},e.addInt=function(t){return this._value|=t,this._value},e.remove=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value&=~t,this._value},e.isDefine=function(t){return(this._value&t)===t},e.getValue=function(){return this._value},e.setValue=function(t){this._value=t},e.toNameDic=function(){var e=this._int2nameMap[this._value];return e||t._toText(this._value,this._int2name,this._int2nameMap)},t._reg=function(t,e,i,r){i[t]=e,r[e]=t},t._toText=function(t,e,i){var r=i[t];if(r)return r;for(var s={},n=1,a=0;a<32&&!((n=1<<a)>t);a++)if(t&n){var h=e[n];h&&(s[h]="")}return i[t]=s,s},t._toInt=function(t,e){for(var i=t.split("."),r=0,s=0,n=i.length;s<n;s++){var a=e[i[s]];if(!a)throw new Error("Defines to int err:"+t+"/"+i[s]);r|=a}return r},t}(),tt=function(){function t(){this.mVBBuffer=null,this.mIBBuffer=null,this.mVBData=null,this.mIBData=null,this.mEleNum=0,this.mTexture=null,this.transform=null,this._vs=null,this._ps=null,this._indexStart=-1,this._verticles=null,this._uvs=null,this._tempMatrix=new b}s(t,"laya.webgl.shader.d2.skinAnishader.SkinMesh");var e=t.prototype;return e.init=function(e,i,r){if(i)this._vs=i;else{this._vs=[];var s=e.width,n=e.height;this._vs.push(0,0,0,0,1,1,1,1),this._vs.push(s,0,1,0,1,1,1,1),this._vs.push(s,n,1,1,1,1,1,1),this._vs.push(0,n,0,1,1,1,1,1)}r?this._ps=r:(t._defaultPS||(t._defaultPS=[]).push(0,1,3,3,1,2),this._ps=t._defaultPS),this.mVBData=new Float32Array(this._vs),this.mIBData=new Uint16Array(this._ps.length),this.mIBData.start=-1,this.mEleNum=this._ps.length,this.mTexture=e},e.init2=function(t,e,i,r,s){this.transform&&(this.transform=null),i?this._ps=i:(this._ps=[],this._ps.push(0,1,3,3,1,2)),this._verticles=r,this._uvs=s,this.mEleNum=this._ps.length,this.mTexture=t,(A.isConchNode||A.isConchApp)&&(this._initMyData(),this.mVBData=new Float32Array(this._vs))},e._initMyData=function(){var e=0,i=0,r=4*this._verticles.length;this._vs=t._tempVS;var s=!1;if(A.isConchNode||A.isConchApp?(this._vs.length=r,s=!0):this._vs.length<r&&(this._vs.length=r,s=!0),t._tVSLen=r,s)for(;e<r;)this._vs[e]=this._verticles[i],this._vs[e+1]=this._verticles[i+1],this._vs[e+2]=this._uvs[i],this._vs[e+3]=this._uvs[i+1],this._vs[e+4]=1,this._vs[e+5]=1,this._vs[e+6]=1,this._vs[e+7]=1,e+=8,i+=2;else for(;e<r;)this._vs[e]=this._verticles[i],this._vs[e+1]=this._verticles[i+1],this._vs[e+2]=this._uvs[i],this._vs[e+3]=this._uvs[i+1],e+=8,i+=2},e.getData2=function(e,i,r){this.mVBBuffer=e,this.mIBBuffer=i,this._initMyData(),e.appendEx2(this._vs,Float32Array,t._tVSLen,4),this._indexStart=i._byteLength;var s;(s=t._tempIB).length<this._ps.length&&(s.length=this._ps.length);for(var n=0,a=this._ps.length;n<a;n++)s[n]=this._ps[n]+r;i.appendEx2(s,Uint16Array,this._ps.length,2)},e.getData=function(t,e,i){if(this.mVBBuffer=t,this.mIBBuffer=e,t.append(this.mVBData),this._indexStart=e._byteLength,this.mIBData.start!=i){for(var r=0,s=this._ps.length;r<s;r++)this.mIBData[r]=this._ps[r]+i;this.mIBData.start=i}e.append(this.mIBData)},e.render=function(t,e,i){if(A.isWebGL&&this.mTexture){t._renderKey=0,t._shader2D.glTexture=null,et.getInstance().addSkinMesh(this);var r=nt.createShape(t,this.mIBBuffer,this.mVBBuffer,this.mEleNum,this._indexStart,At.create(512,0));this.transform||(this.transform=b.EMPTY),this.transform.translate(e,i),b.mul(this.transform,t._curMat,this._tempMatrix),this.transform.translate(-e,-i);var s=r.shaderValue,n=s.u_mmat2||gt.getMatrArray();gt.mat2MatArray(this._tempMatrix,n),s.textureHost=this.mTexture,s.offsetX=0,s.offsetY=0,s.u_mmat2=n,s.ALPHA=t._shader2D.ALPHA,t._submits[t._submits._length++]=r}else A.isConchApp&&this.mTexture&&(this.transform||(this.transform=b.EMPTY),t.setSkinMesh&&t.setSkinMesh(e,i,this._ps,this.mVBData,this.mEleNum,0,this.mTexture,this.transform))},t._tempVS=[],t._tempIB=[],t._defaultPS=null,t._tVSLen=0,t}(),et=function(){function t(){this.ib=null,this.vb=null;xt.mainContext;this.ib=qt.create(35048),this.vb=jt.create(8)}s(t,"laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");var e=t.prototype;return e.addSkinMesh=function(t){t.getData2(this.vb,this.ib,this.vb._byteLength/32)},e.reset=function(){this.vb.clear(),this.ib.clear()},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),it=function(){function t(t,e,i,r,s,n,a,h,l){this.r0=0,this.fill=!0,this.r1=Math.PI/2,void 0===l&&(l=0),this.x=t,this.y=e,this.width=i,this.height=r,this.edges=s,this.color=n,this.borderWidth=a,this.borderColor=h}s(t,"laya.webgl.shapes.BasePoly");var e=t.prototype;return i.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.rebuild=function(t){},e.setMatrix=function(t){},e.needUpdate=function(t){return!0},e.sector=function(t,e,i){var r=this.x,s=this.y,n=this.edges,a=(this.r1-this.r0)/n,h=this.width,l=this.height,o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;t.push(r,s,u,_,c);for(var f=0;f<n+1;f++)t.push(r+Math.sin(a*f+this.r0)*h,s+Math.cos(a*f+this.r0)*l),t.push(u,_,c);for(f=0;f<n;f++)e.push(i,i+f+1,i+f+2)},e.createLine2=function(t,e,i,r,s,n){var a,h,l,o,u,_,c,f,d,m,p,g,v,x,b,T,y,A,E,S,w=t.concat(),R=s,I=this.borderColor,M=(I>>16&255)/255,C=(I>>8&255)/255,L=(255&I)/255,P=w.length/2,F=r,D=i/2;l=w[0],o=w[1],m=l-(u=w[2]),d=(d=-(o-(_=w[3])))/(S=Math.sqrt(d*d+m*m))*D,m=m/S*D,R.push(l-d+this.x,o-m+this.y,M,C,L,l+d+this.x,o+m+this.y,M,C,L);for(var B=1;B<P-1;B++)l=w[2*(B-1)],o=w[2*(B-1)+1],u=w[2*B],_=w[2*B+1],c=w[2*(B+1)],f=w[2*(B+1)+1],m=l-u,g=u-c,b=(-(d=(d=-(o-_))/(S=Math.sqrt(d*d+m*m))*D)+l)*(-(m=m/S*D)+_)-(-d+u)*(-m+o),A=(-(p=(p=-(_-f))/(S=Math.sqrt(p*p+g*g))*D)+c)*(-(g=g/S*D)+_)-(-p+u)*(-g+f),E=(v=-m+o-(-m+_))*(y=-p+u-(-p+c))-(T=-g+f-(-g+_))*(x=-d+u-(-d+l)),Math.abs(E)<.1?(E+=10.1,R.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L)):(((a=(x*A-y*b)/E)-u)*(a-u)+((h=(T*b-v*A)/E)-_)+(h-_),R.push(a+this.x,h+this.y,M,C,L,u-(a-u)+this.x,_-(h-_)+this.y,M,C,L));l=w[w.length-4],o=w[w.length-3],m=l-(u=w[w.length-2]),d=(d=-(o-(_=w[w.length-1])))/(S=Math.sqrt(d*d+m*m))*D,m=m/S*D,R.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L);var N=n;for(B=1;B<N;B++)e.push(F+2*(B-1),F+2*(B-1)+1,F+2*B+1,F+2*B+1,F+2*B,F+2*(B-1));return R},e.createLine=function(t,e,i,r){var s=t.concat(),n=t,a=this.borderColor,h=(a>>16&255)/255,l=(a>>8&255)/255,o=(255&a)/255;s.splice(0,5);var u,_,c,f,d,m,p,g,v,x,b,T,y,A,E,S,w,R,I,M,C=s.length/5,L=r,P=i/2;c=s[0],f=s[1],x=c-(d=s[5]),v=(v=-(f-(m=s[6])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,n.push(c-v,f-x,h,l,o,c+v,f+x,h,l,o);for(var F=1;F<C-1;F++)c=s[5*(F-1)],f=s[5*(F-1)+1],d=s[5*F],m=s[5*F+1],p=s[5*(F+1)],g=s[5*(F+1)+1],x=c-d,T=d-p,E=(-(v=(v=-(f-m))/(M=Math.sqrt(v*v+x*x))*P)+c)*(-(x=x/M*P)+m)-(-v+d)*(-x+f),R=(-(b=(b=-(m-g))/(M=Math.sqrt(b*b+T*T))*P)+p)*(-(T=T/M*P)+m)-(-b+d)*(-T+g),I=(y=-x+f-(-x+m))*(w=-b+d-(-b+p))-(S=-T+g-(-T+m))*(A=-v+d-(-v+c)),Math.abs(I)<.1?(I+=10.1,n.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o)):(((u=(A*R-w*E)/I)-d)*(u-d)+((_=(S*E-y*R)/I)-m)+(_-m),n.push(u,_,h,l,o,d-(u-d),m-(_-m),h,l,o));c=s[s.length-10],f=s[s.length-9],x=c-(d=s[s.length-5]),v=(v=-(f-(m=s[s.length-4])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,n.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o);var D=this.edges+1;for(F=1;F<D;F++)e.push(L+2*(F-1),L+2*(F-1)+1,L+2*F+1,L+2*F+1,L+2*F,L+2*(F-1));return n},e.createLoopLine=function(t,e,i,r,s,n){var a=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255;a.splice(0,5);var c=[a[0],a[1]],f=[a[a.length-5],a[a.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);a.unshift(d,m,0,0,0),a.push(d,m,0,0,0);var p,g,v,x,b,T,y,A,E,S,w,R,I,M,C,L,P,F,D,B,N=a.length/5,O=r,V=i/2;v=a[0],x=a[1],S=v-(b=a[5]),E=(E=-(x-(T=a[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=a[5*(U-1)],x=a[5*(U-1)+1],b=a[5*U],T=a[5*U+1],y=a[5*(U+1)],A=a[5*(U+1)+1],S=v-b,R=b-y,C=(-(E=(E=-(x-T))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+T)-(-E+b)*(-S+x),F=(-(w=(w=-(T-A))/(B=Math.sqrt(w*w+R*R))*V)+y)*(-(R=R/B*V)+T)-(-w+b)*(-R+A),D=(I=-S+x-(-S+T))*(P=-w+b-(-w+y))-(L=-R+A-(-R+T))*(M=-E+b-(-E+v)),Math.abs(D)<.1?(D+=10.1,h.push(b-E,T-S,o,u,_,b+E,T+S,o,u,_)):(((p=(M*F-P*C)/D)-b)*(p-b)+((g=(L*C-I*F)/D)-T)+(g-T),h.push(p,g,o,u,_,b-(p-b),T-(g-T),o,u,_));n&&(e=n);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},t}(),rt=function(){function t(){}return s(t,"laya.webgl.shapes.Earcut"),t.earcut=function(e,i,r){r=r||2;var s=i&&i.length,n=s?i[0]*r:e.length,a=t.linkedList(e,0,n,r,!0),h=[];if(!a)return h;var l,o,u,_,c,f,d;if(s&&(a=t.eliminateHoles(e,i,a,r)),e.length>80*r){l=u=e[0],o=_=e[1];for(var m=r;m<n;m+=r)c=e[m],f=e[m+1],c<l&&(l=c),f<o&&(o=f),c>u&&(u=c),f>_&&(_=f);d=0!==(d=Math.max(u-l,_-o))?1/d:0}return t.earcutLinked(a,h,r,l,o,d),h},t.linkedList=function(e,i,r,s,n){var a,h;if(n===t.signedArea(e,i,r,s)>0)for(a=i;a<r;a+=s)h=t.insertNode(a,e[a],e[a+1],h);else for(a=r-s;a>=i;a-=s)h=t.insertNode(a,e[a],e[a+1],h);return h&&t.equals(h,h.next)&&(t.removeNode(h),h=h.next),h},t.filterPoints=function(e,i){if(!e)return e;i||(i=e);var r,s=e;do{if(r=!1,s.steiner||!t.equals(s,s.next)&&0!==t.area(s.prev,s,s.next))s=s.next;else{if(t.removeNode(s),(s=i=s.prev)===s.next)break;r=!0}}while(r||s!==i);return i},t.earcutLinked=function(e,i,r,s,n,a,h){if(e){!h&&a&&t.indexCurve(e,s,n,a);for(var l,o,u=e;e.prev!==e.next;)if(l=e.prev,o=e.next,a?t.isEarHashed(e,s,n,a):t.isEar(e))i.push(l.i/r),i.push(e.i/r),i.push(o.i/r),t.removeNode(e),e=o.next,u=o.next;else if((e=o)===u){h?1===h?(e=t.cureLocalIntersections(e,i,r),t.earcutLinked(e,i,r,s,n,a,2)):2===h&&t.splitEarcut(e,i,r,s,n,a):t.earcutLinked(t.filterPoints(e,null),i,r,s,n,a,1);break}}},t.isEar=function(e){var i=e.prev,r=e,s=e.next;if(t.area(i,r,s)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(t.pointInTriangle(i.x,i.y,r.x,r.y,s.x,s.y,n.x,n.y)&&t.area(n.prev,n,n.next)>=0)return!1;n=n.next}return!0},t.isEarHashed=function(e,i,r,s){var n=e.prev,a=e,h=e.next;if(t.area(n,a,h)>=0)return!1;for(var l=n.x<a.x?n.x<h.x?n.x:h.x:a.x<h.x?a.x:h.x,o=n.y<a.y?n.y<h.y?n.y:h.y:a.y<h.y?a.y:h.y,u=n.x>a.x?n.x>h.x?n.x:h.x:a.x>h.x?a.x:h.x,_=n.y>a.y?n.y>h.y?n.y:h.y:a.y>h.y?a.y:h.y,c=t.zOrder(l,o,i,r,s),f=t.zOrder(u,_,i,r,s),d=e.nextZ;d&&d.z<=f;){if(d!==e.prev&&d!==e.next&&t.pointInTriangle(n.x,n.y,a.x,a.y,h.x,h.y,d.x,d.y)&&t.area(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=c;){if(d!==e.prev&&d!==e.next&&t.pointInTriangle(n.x,n.y,a.x,a.y,h.x,h.y,d.x,d.y)&&t.area(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0},t.cureLocalIntersections=function(e,i,r){var s=e;do{var n=s.prev,a=s.next.next;!t.equals(n,a)&&t.intersects(n,s,s.next,a)&&t.locallyInside(n,a)&&t.locallyInside(a,n)&&(i.push(n.i/r),i.push(s.i/r),i.push(a.i/r),t.removeNode(s),t.removeNode(s.next),s=e=a),s=s.next}while(s!==e);return s},t.splitEarcut=function(e,i,r,s,n,a){var h=e;do{for(var l=h.next.next;l!==h.prev;){if(h.i!==l.i&&t.isValidDiagonal(h,l)){var o=t.splitPolygon(h,l);return h=t.filterPoints(h,h.next),o=t.filterPoints(o,o.next),t.earcutLinked(h,i,r,s,n,a),void t.earcutLinked(o,i,r,s,n,a)}l=l.next}h=h.next}while(h!==e)},t.eliminateHoles=function(e,i,r,s){var n,a,h,l,o,u=[];for(n=0,a=i.length;n<a;n++)h=i[n]*s,l=n<a-1?i[n+1]*s:e.length,(o=t.linkedList(e,h,l,s,!1))===o.next&&(o.steiner=!0),u.push(t.getLeftmost(o));for(u.sort(t.compareX),n=0;n<u.length;n++)t.eliminateHole(u[n],r),r=t.filterPoints(r,r.next);return r},t.compareX=function(t,e){return t.x-e.x},t.eliminateHole=function(e,i){if(i=t.findHoleBridge(e,i)){var r=t.splitPolygon(i,e);t.filterPoints(r,r.next)}},t.findHoleBridge=function(e,i){var r,s=i,n=e.x,a=e.y,h=-1/0;do{if(a<=s.y&&a>=s.next.y&&s.next.y!==s.y){var l=s.x+(a-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(l<=n&&l>h){if(h=l,l===n){if(a===s.y)return s;if(a===s.next.y)return s.next}r=s.x<s.next.x?s:s.next}}s=s.next}while(s!==i);if(!r)return null;if(n===h)return r.prev;var o,u=r,_=r.x,c=r.y,f=1/0;for(s=r.next;s!==u;)n>=s.x&&s.x>=_&&n!==s.x&&t.pointInTriangle(a<c?n:h,a,_,c,a<c?h:n,a,s.x,s.y)&&((o=Math.abs(a-s.y)/(n-s.x))<f||o===f&&s.x>r.x)&&t.locallyInside(s,e)&&(r=s,f=o),s=s.next;return r},t.indexCurve=function(e,i,r,s){var n=e;do{null===n.z&&(n.z=t.zOrder(n.x,n.y,i,r,s)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,t.sortLinked(n)},t.sortLinked=function(t){var e,i,r,s,n,a,h,l,o=1;do{for(i=t,t=null,n=null,a=0;i;){for(a++,r=i,h=0,e=0;e<o&&(h++,r=r.nextZ);e++);for(l=o;h>0||l>0&&r;)0!==h&&(0===l||!r||i.z<=r.z)?(s=i,i=i.nextZ,h--):(s=r,r=r.nextZ,l--),n?n.nextZ=s:t=s,s.prevZ=n,n=s;i=r}n.nextZ=null,o*=2}while(a>1);return t},t.zOrder=function(t,e,i,r,s){return t=32767*(t-i)*s,e=32767*(e-r)*s,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1},t.getLeftmost=function(t){var e=t,i=t;do{e.x<i.x&&(i=e),e=e.next}while(e!==t);return i},t.pointInTriangle=function(t,e,i,r,s,n,a,h){return(s-a)*(e-h)-(t-a)*(n-h)>=0&&(t-a)*(r-h)-(i-a)*(e-h)>=0&&(i-a)*(n-h)-(s-a)*(r-h)>=0},t.isValidDiagonal=function(e,i){return e.next.i!==i.i&&e.prev.i!==i.i&&!t.intersectsPolygon(e,i)&&t.locallyInside(e,i)&&t.locallyInside(i,e)&&t.middleInside(e,i)},t.area=function(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)},t.equals=function(t,e){return t.x===e.x&&t.y===e.y},t.intersects=function(e,i,r,s){return!!(t.equals(e,i)&&t.equals(r,s)||t.equals(e,s)&&t.equals(r,i))||t.area(e,i,r)>0!=t.area(e,i,s)>0&&t.area(r,s,e)>0!=t.area(r,s,i)>0},t.intersectsPolygon=function(e,i){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==i.i&&r.next.i!==i.i&&t.intersects(r,r.next,e,i))return!0;r=r.next}while(r!==e);return!1},t.locallyInside=function(e,i){return t.area(e.prev,e,e.next)<0?t.area(e,i,e.next)>=0&&t.area(e,e.prev,i)>=0:t.area(e,i,e.prev)<0||t.area(e,e.next,i)<0},t.middleInside=function(t,e){var i=t,r=!1,s=(t.x+e.x)/2,n=(t.y+e.y)/2;do{i.y>n!=i.next.y>n&&i.next.y!==i.y&&s<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==t);return r},t.splitPolygon=function(t,e){var i=new st(t.i,t.x,t.y),r=new st(e.i,e.x,e.y),s=t.next,n=e.prev;return t.next=e,e.prev=t,i.next=s,s.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r},t.insertNode=function(t,e,i,r){var s=new st(t,e,i);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s},t.removeNode=function(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)},t.signedArea=function(t,e,i,r){for(var s=0,n=e,a=i-r;n<i;n+=r)s+=(t[a]-t[n])*(t[n+1]+t[a+1]),a=n;return s},t}(),st=function(){function t(t,e,i){this.i=null,this.x=null,this.y=null,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=null,this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}return s(t,"laya.webgl.shapes.EarcutNode"),t}(),nt=(function(){function t(t,e,i,r,s,n,a){this.lineWidth=t,this.lineColor=e,this.lineAlpha=i,this.fillColor=r,this.fillAlpha=s,this.shape=a,this.fill=n}s(t,"laya.webgl.shapes.GeometryData");var e=t.prototype;e.clone=function(){return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},e.getIndexData=function(){return null},e.getVertexData=function(){return null},e.destroy=function(){this.shape=null}}(),function(){function t(t){if(t instanceof Float32Array)this.points=t;else if(t instanceof Array){t.length;this.points=new Float32Array(t)}}s(t,"laya.webgl.shapes.Vertex");var e=t.prototype;i.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.needUpdate=function(t){return!1},e.rebuild=function(t){},e.setMatrix=function(t){}}(),function(){function t(t){void 0===t&&(t=1e4),this._renderType=t}s(t,"laya.webgl.submit.Submit");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.releaseRender=function(){var e=t._cache;e[e._length++]=this,this.shaderValue.release(),this._vb=null},e.getRenderType=function(){return this._renderType},e.renderSubmit=function(){if(0===this._numEle)return 1;var t=this.shaderValue.textureHost;if(t){var e=t.source;if(!t.bitmap||!e)return 1;this.shaderValue.texture=e}this._vb.bind_upload(this._ib);var i=xt.mainContext;return this.shaderValue.upload(),G.activeBlendFunction!==this._blendFn&&(i.enable(3042),this._blendFn(i),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,i.drawElements(4,this._numEle,5123,this._startIdx),1},t.__init__=function(){var e=t.RENDERBASE=new t(-1);e.shaderValue=new At(0,0),e.shaderValue.ALPHA=-1234},t.createSubmit=function(e,i,r,s,n){var a=t._cache._length?t._cache[--t._cache._length]:new t;null==r&&((r=a._selfVb||(a._selfVb=jt.create(-1))).clear(),s=0),a._ib=i,a._vb=r,a._startIdx=s*mt.BYTES_PIDX,a._numEle=0;var h=e._nBlendType;a._blendFn=e._targets?G.targetFns[h]:G.fns[h],a.shaderValue=n,a.shaderValue.setValue(e._shader2D);var l=e._shader2D.filters;return l&&a.shaderValue.setFilters(l),a},t.createShape=function(e,i,r,s,n,a){var h=t._cache._length?t._cache[--t._cache._length]:new t;h._ib=i,h._vb=r,h._numEle=s,h._startIdx=n,h.shaderValue=a,h.shaderValue.setValue(e._shader2D);var l=e._nBlendType;return h._blendFn=e._targets?G.targetFns[l]:G.fns[l],h},t.TYPE_2D=1e4,t.TYPE_CANVAS=10003,t.TYPE_CMDSETRT=10004,t.TYPE_CUSTOM=10005,t.TYPE_BLURRT=10006,t.TYPE_CMDDESTORYPRERT=10007,t.TYPE_DISABLESTENCIL=10008,t.TYPE_OTHERIBVB=10009,t.TYPE_PRIMITIVE=10010,t.TYPE_RT=10011,t.TYPE_BLUR_RT=10012,t.TYPE_TARGET=10013,t.TYPE_CHANGE_VALUE=10014,t.TYPE_SHAPE=10015,t.TYPE_TEXTURE=10016,t.TYPE_FILLTEXTURE=10017,t.RENDERBASE=null,r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}()),at=function(){function t(){this.fun=null,this.args=null}s(t,"laya.webgl.submit.SubmitCMD");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){return this.fun.apply(null,this.args),1},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},t.create=function(e,i){var r=t._cache._length?t._cache[--t._cache._length]:new t;return r.fun=i,r.args=e,r},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),ht=function(){function t(){this.variables={}}s(t,"laya.webgl.submit.SubmitCMDScope");var e=t.prototype;return e.getValue=function(t){return this.variables[t]},e.addValue=function(t,e){return this.variables[t]=e},e.setValue=function(t,e){return this.variables.hasOwnProperty(t)?this.variables[t]=e:null},e.clear=function(){for(var t in this.variables)delete this.variables[t]},e.recycle=function(){this.clear(),t.POOL.push(this)},t.create=function(){var e=t.POOL.pop();return e||(e=new t),e},t.POOL=[],t}(),lt=function(){function t(){this.offset=0,this.startIndex=0,this._mat=b.create()}s(t,"laya.webgl.submit.SubmitOtherIBVB");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.releaseRender=function(){var e=t._cache;e[e._length++]=this},e.getRenderType=function(){return 10009},e.renderSubmit=function(){var e=this._shaderValue.textureHost;if(e){var i=e.source;if(!e.bitmap||!i)return 1;this._shaderValue.texture=i}this._vb.bind_upload(this._ib);var r=gt.worldMatrix4,s=b.TEMP;b.mulPre(this._mat,r[0],r[1],r[4],r[5],r[12],r[13],s);var n=gt.worldMatrix4=t.tempMatrix4;n[0]=s.a,n[1]=s.b,n[4]=s.c,n[5]=s.d,n[12]=s.tx,n[13]=s.ty,this._shader._offset=this.offset,this._shaderValue.refresh(),this._shader.upload(this._shaderValue),this._shader._offset=0;var a=xt.mainContext;return G.activeBlendFunction!==this._blendFn&&(a.enable(3042),this._blendFn(a),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,a.drawElements(4,this._numEle,5123,this.startIndex),gt.worldMatrix4=r,Ft.activeShader=null,1},t.create=function(e,i,r,s,n,a,h,l,o){void 0===o&&(o=0);var u=t._cache._length?t._cache[--t._cache._length]:new t;u._ib=r,u._vb=i,u._numEle=s,u._shader=n,u._shaderValue=a;var _=e._nBlendType;switch(u._blendFn=e._targets?G.targetFns[_]:G.fns[_],o){case 0:u.offset=0,u.startIndex=l/(mt.BYTES_PE*i.vertexStride)*1.5,u.startIndex*=mt.BYTES_PIDX;break;case 1:u.startIndex=h,u.offset=l}return u},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)},"tempMatrix4",function(){return this.tempMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}]),t}(),ot=function(){function t(){this.submitIndex=0,this.submitLength=0,this.context=null,this.clipRect=new y,this.screenRect=new y}s(t,"laya.webgl.submit.SubmitScissor");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e._scissor=function(t,e,i,r){var s=gt.worldMatrix4,n=s[0],a=s[5];if(t=t*n+s[12],e=e*a+s[13],i*=n,r*=a,i<1||r<1)return!1;var h=t+i,l=e+r;t<0&&(t=0,i=h-t),e<0&&(e=0,r=l-e);var o=gt.worldClipRect;if(t=Math.max(t,o.x),e=Math.max(e,o.y),i=Math.min(h,o.right)-t,r=Math.min(l,o.bottom)-e,i<1||r<1)return!1;var u=gt.worldScissorTest;return this.screenRect.copyFrom(o),o.x=t,o.y=e,o.width=i,o.height=r,gt.worldScissorTest=!0,e=gt.height-e-r,xt.mainContext.scissor(t,e,i,r),xt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),u?(e=gt.height-this.screenRect.y-this.screenRect.height,xt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),xt.mainContext.enable(3089)):(xt.mainContext.disable(3089),gt.worldScissorTest=!1),o.copyFrom(this.screenRect),!0},e._scissorWithTagart=function(t,e,i,r){if(i<1||r<1)return!1;var s=t+i,n=e+r;t<0&&(t=0,i=s-t),e<0&&(e=0,r=n-e);var a=gt.worldClipRect;if(t=Math.max(t,a.x),e=Math.max(e,a.y),i=Math.min(s,a.right)-t,r=Math.min(n,a.bottom)-e,i<1||r<1)return!1;var h=gt.worldScissorTest;return this.screenRect.copyFrom(a),gt.worldScissorTest=!0,a.x=t,a.y=e,a.width=i,a.height=r,e=gt.height-e-r,xt.mainContext.scissor(t,e,i,r),xt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),h?(e=gt.height-this.screenRect.y-this.screenRect.height,xt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),xt.mainContext.enable(3089)):(xt.mainContext.disable(3089),gt.worldScissorTest=!1),a.copyFrom(this.screenRect),!0},e.renderSubmit=function(){return this.submitLength=Math.min(this.context._submits._length-1,this.submitLength),this.submitLength<1||this.clipRect.width<1||this.clipRect.height<1?this.submitLength+1:(this.context._targets?this._scissorWithTagart(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height):this._scissor(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height),this.submitLength+1)},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this,this.context=null},t.create=function(e){var i=t._cache._length?t._cache[--t._cache._length]:new t;return i.context=e,i},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),ut=function(){function t(){this.step=0,this.blendMode=null,this.level=0}s(t,"laya.webgl.submit.SubmitStencil");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){switch(this.step){case 1:this.do1();break;case 2:this.do2();break;case 3:this.do3();break;case 4:this.do4();break;case 5:this.do5();break;case 6:this.do6();break;case 7:this.do7();break;case 8:this.do8()}return 1},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},e.do1=function(){var t=xt.mainContext;t.enable(2960),t.clear(1024),t.colorMask(!1,!1,!1,!1),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7682)},e.do2=function(){var t=xt.mainContext;t.stencilFunc(514,this.level+1,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},e.do3=function(){var t=xt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680),t.clear(1024),t.disable(2960)},e.do4=function(){var t=xt.mainContext;0==this.level&&(t.enable(2960),t.clear(1024)),t.colorMask(!1,!1,!1,!1),t.stencilFunc(519,0,255),t.stencilOp(7680,7680,7682)},e.do5=function(){var t=xt.mainContext;t.stencilFunc(514,this.level,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},e.do6=function(){var t=xt.mainContext;G.targetFns[G.TOINT[this.blendMode]](t)},e.do7=function(){var t=xt.mainContext;t.colorMask(!1,!1,!1,!1),t.stencilOp(7680,7680,7683)},e.do8=function(){var t=xt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7680)},t.restore=function(e,i,r,s,n){var a;if(e._renderKey=0,t._mask>0&&t._mask--,0==t._mask)a=laya.webgl.submit.SubmitStencil.create(3),e.addRenderObject(a),e._curSubmit=nt.RENDERBASE;else{a=laya.webgl.submit.SubmitStencil.create(7),e.addRenderObject(a);var h=e._vb;h._byteLength;if(pt.fillRectImgVb(h,null,i.x,i.y,i.width,i.height,D.DEF_UV,r,s,n,0,0)){e._shader2D.glTexture=null;var l=e._curSubmit=nt.createSubmit(e,e._ib,h,(h._byteLength-64)/32*3,At.create(2,0));l.shaderValue.ALPHA=1,e._submits[e._submits._length++]=l,e._curSubmit._numEle+=6,e._curSubmit=nt.RENDERBASE}else alert("clipRect calc stencil rect error");a=laya.webgl.submit.SubmitStencil.create(8),e.addRenderObject(a)}},t.restore2=function(e,i){var r;e._renderKey=0,t._mask>0&&t._mask--,0==t._mask?(r=laya.webgl.submit.SubmitStencil.create(3),e.addRenderObject(r),e._curSubmit=nt.RENDERBASE):(r=laya.webgl.submit.SubmitStencil.create(7),e.addRenderObject(r),e._submits[e._submits._length++]=i,r=laya.webgl.submit.SubmitStencil.create(8),e.addRenderObject(r))},t.create=function(e){var i=t._cache._length?t._cache[--t._cache._length]:new t;return i.step=e,5==e&&++t._mask,i.level=t._mask,i},t._mask=0,r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),_t=function(){function t(){this._renderType=0,this._vb=null,this._ib=null,this._startIdx=0,this._numEle=0,this.shaderValue=null,this.blendType=0,this.proName=null,this.scope=null}s(t,"laya.webgl.submit.SubmitTarget");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){this._vb.bind_upload(this._ib);var t=this.scope.getValue(this.proName);return t&&(this.shaderValue.texture=t.source,this.shaderValue.strength&&!this.shaderValue.blurInfo&&(this.shaderValue.blurInfo=[t.width,t.height]),this.shaderValue.upload(),this.blend(),C.drawCall++,C.trianglesFaces+=this._numEle/3,xt.mainContext.drawElements(4,this._numEle,5123,this._startIdx)),1},e.blend=function(){if(G.activeBlendFunction!==G.fns[this.blendType]){var t=xt.mainContext;t.enable(3042),G.fns[this.blendType](t),G.activeBlendFunction=G.fns[this.blendType]}},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},t.create=function(e,i,r,s,n,a){var h=t._cache._length?t._cache[--t._cache._length]:new t;return h._ib=i,h._vb=r,h.proName=a,h._startIdx=s*mt.BYTES_PIDX,h._numEle=0,h.blendType=e._nBlendType,h.shaderValue=n,h.shaderValue.setValue(e._shader2D),h},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),ct=function(){function t(){this._sourceStr=null}s(t,"laya.webgl.text.CharSegment");var e=t.prototype;return i.imps(e,{"laya.webgl.text.ICharSegment":!0}),e.textToSpit=function(t){this._sourceStr=t},e.getChar=function(t){return this._sourceStr.charAt(t)},e.getCharCode=function(t){return this._sourceStr.charCodeAt(t)},e.length=function(){return this._sourceStr.length},t}(),ft=function(){function t(){}var e;return s(t,"laya.webgl.text.DrawText"),t.__init__=function(){t._charsTemp=new Array,t._drawValue=new e,t._charSeg=new ct},t.customCharSeg=function(e){t._charSeg=e},t.getChar=function(e,i,r){var s=zt.createOneChar(e,r);return-1!=i&&(t._charsCache[i]=s),s},t._drawSlow=function(e,i,r,s,n,a,h,l,o,u,_,c,f,d,m){var p,g,v=t._drawValue.value(a,l,o,u,f,d,m),x=0,b=0,T=t._charsTemp,y=0,A=NaN;if(s)for(T.length=s.length,x=0,b=s.length;x<b;x++)A=(g=s[x]).charNum+v.txtID,T[x]=p=t._charsCache[A]||t.getChar(g.char,A,v),p.active();else{var E=r instanceof laya.utils.WordText?r.toString():r;if(F.CharacterCache){t._charSeg.textToSpit(E);var S=t._charSeg.length();for(T.length=S,x=0,b=S;x<b;x++)A=t._charSeg.getCharCode(x)+v.txtID,T[x]=p=t._charsCache[A]||t.getChar(t._charSeg.getChar(x),A,v),p.active(),y+=p.cw}else T.length=0,(p=t.getChar(E,-1,v)).active(),y+=p.cw,T[0]=p}var w=0;null!==h&&"left"!==h&&(w=-("center"==h?y/2:y));var R,I,M=NaN,C=0;if(s)for(x=0,b=T.length;x<b;x++)(p=T[x]).isSpace||(g=s[x],M=p.borderSize,R=p.texture,i._drawText(R,_+w+g.x*f-M,c+g.y*d-M,R.width,R.height,n,0,0,0,0));else{for(x=0,b=T.length;x<b;x++)(p=T[x]).isSpace||(M=p.borderSize,R=p.texture,i._drawText(R,_+w-M,c-M,R.width,R.height,n,0,0,0,0),e&&((I=e[C++])||(I=e[C-1]=[]),I[0]=R,I[1]=w-M,I[2]=-M)),w+=p.cw;e&&(e.length=C)}},t._drawFast=function(t,e,i,r,s){for(var n,a,h=0,l=t.length;h<l;h++)(n=(a=t[h])[0]).active(),e._drawText(n,r+a[1],s+a[2],n.width,n.height,i,0,0,0,0)},t.drawText=function(e,r,s,n,a,h,l,o,u,_,c,d){if(void 0===d&&(d=0),!(r&&0===r.length||s&&0===s.length)){var m=n.a,p=n.d;(0!==n.b||0!==n.c)&&(m=p=1);var g=1!==m||1!==p;if(g&&i.stage.transform){var v=i.stage.transform;g=v.a===m&&v.d===p}else g=!1;if(g){var x=(n=n.copyTo(yt._tmpMatrix)).tx,b=n.ty;n.scale(1/m,1/p),n._checkTransform(),_*=m,c*=p,_+=x-n.tx,c+=b-n.ty}else m=p=1;if(s)t._drawSlow(null,e,r,s,n,a,h,l,o,u,_,c,m,p,d);else{if(null===r.toUpperCase){var T=m+1e5*p,y=r;return void(y.changed||y.id!==T?(y.id=T,y.changed=!1,t._drawSlow(y.save,e,r,s,n,a,h,l,o,u,_,c,m,p,d)):t._drawFast(y.save,e,n,_,c))}var A=r+a.toString()+l+o+u+m+p+h,E=t._textsCache[A];F.CharacterCache?E?t._drawFast(E,e,n,_,c):(t._textsCache.__length||(t._textsCache.__length=0),t._textsCache.__length>f.WebGLTextCacheCount&&((t._textsCache={}).__length=0,t._curPoolIndex=0),t._textCachesPool[t._curPoolIndex]?(E=t._textsCache[A]=t._textCachesPool[t._curPoolIndex],E.length=0):t._textCachesPool[t._curPoolIndex]=E=t._textsCache[A]=[],t._textsCache.__length++,t._curPoolIndex++,t._drawSlow(E,e,r,s,n,a,h,l,o,u,_,c,m,p,d)):t._drawSlow(E,e,r,s,n,a,h,l,o,u,_,c,m,p,d)}}},t._charsTemp=null,t._textCachesPool=[],t._curPoolIndex=0,t._charsCache={},t._textsCache={},t._drawValue=null,t.d=[],t._charSeg=null,t.__init$=function(){e=function(){function t(){}s(t,"");return t.prototype.value=function(e,i,r,s,n,a,h){this.font=e,this.fillColor=i,this.borderColor=r,this.lineWidth=s,this.scaleX=n,this.scaleY=a,this.underLine=h;var l=e.toString()+n+a+s+i+r+h;return this.txtID=t._keymap[l],this.txtID||(this.txtID=1e-7*++t._keymapCount,t._keymap[l]=this.txtID),this},t.clear=function(){t._keymap={},t._keymapCount=1},t._keymap={},t._keymapCount=1,t}()},t}(),dt=function(){function t(e){this._index=0,this._size=14,this._italic=-2,t._cache2=t._cache2||[],this.setFont(e||"14px Arial")}s(t,"laya.webgl.text.FontInContext");var e=t.prototype;return e.setFont=function(e){var i=t._cache2[e];if(i)this._words=i[0],this._size=i[1];else{this._words=e.split(" ");for(var r=0,s=this._words.length;r<s;r++)if(this._words[r].indexOf("px")>0){this._index=r;break}this._size=parseInt(this._words[this._index]),t._cache2[e]=[this._words,this._size]}this._text=null,this._italic=-2},e.getItalic=function(){return-2===this._italic&&(this._italic=this.hasType("italic")),this._italic},e.hasType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t)return e;return-1},e.removeType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t){this._words.splice(e,1),this._index>e&&this._index--;break}this._text=null,this._italic=-2},e.copyTo=function(t){return t._text=this._text,t._size=this._size,t._index=this._index,t._words=this._words.slice(),t._italic=-2,t},e.toString=function(){return this._text?this._text:this._text=this._words.join(" ")},n(0,e,"size",function(){return this._size},function(t){this._size=t,this._words[this._index]=t+"px",this._text=null}),t.create=function(e){var i=t._cache[e];return i||(i=t._cache[e]=new t(e))},t._cache={},t._cache2=null,r(t,["EMPTY",function(){return this.EMPTY=new t}]),t}(),mt=function(){function t(){}return s(t,"laya.webgl.utils.CONST3D2D"),t._TMPARRAY=[],t._OFFSETX=0,t._OFFSETY=0,r(t,["BYTES_PE",function(){return this.BYTES_PE=Float32Array.BYTES_PER_ELEMENT},"BYTES_PIDX",function(){return this.BYTES_PIDX=Uint16Array.BYTES_PER_ELEMENT},"defaultMatrix4",function(){return this.defaultMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},"defaultMinusYMatrix4",function(){return this.defaultMinusYMatrix4=[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1]},"uniformMatrix3",function(){return this.uniformMatrix3=[1,0,0,0,0,1,0,0,0,0,1,0]}]),t}(),pt=function(){function t(){}return s(t,"laya.webgl.utils.GlUtils"),t.make2DProjection=function(t,e,i){return[2/t,0,0,0,0,-2/e,0,0,0,0,2/i,0,-1,1,0,1]},t.fillIBQuadrangle=function(t,e){if(e>65535/4)throw Error("IBQuadrangle count:"+e+" must<:"+Math.floor(65535/4));e=Math.floor(e),t._resizeBuffer(6*(e+1)*2,!1),t.byteLength=t.bufferLength;for(var i=t.getUint16Array(),r=0,s=0;s<e;s++)i[r++]=4*s,i[r++]=4*s+2,i[r++]=4*s+1,i[r++]=4*s,i[r++]=4*s+3,i[r++]=4*s+2;return t.setNeedUpload(),!0},t.expandIBQuadrangle=function(e,i){e.bufferLength>=6*i*2||t.fillIBQuadrangle(e,i)},t.mathCeilPowerOfTwo=function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},t.fillQuadrangleImgVb=function(t,e,i,r,s,n,a,h){"use strict";var l=16+(t._byteLength>>2);t.byteLength=l<<2;var o=t.getFloat32Array();o[(l-=16)+2]=s[0],o[l+3]=s[1],o[l+6]=s[2],o[l+7]=s[3],o[l+10]=s[4],o[l+11]=s[5],o[l+14]=s[6],o[l+15]=s[7];var u=n.a,_=n.b,c=n.c,f=n.d;if(1!==u||0!==_||0!==c||1!==f){n.bTransform=!0;var d=n.tx+a,m=n.ty+h;o[l]=(r[0]+e)*u+(r[1]+i)*c+d,o[l+1]=(r[0]+e)*_+(r[1]+i)*f+m,o[l+4]=(r[2]+e)*u+(r[3]+i)*c+d,o[l+5]=(r[2]+e)*_+(r[3]+i)*f+m,o[l+8]=(r[4]+e)*u+(r[5]+i)*c+d,o[l+9]=(r[4]+e)*_+(r[5]+i)*f+m,o[l+12]=(r[6]+e)*u+(r[7]+i)*c+d,o[l+13]=(r[6]+e)*_+(r[7]+i)*f+m}else n.bTransform=!1,e+=n.tx+a,i+=n.ty+h,o[l]=e+r[0],o[l+1]=i+r[1],o[l+4]=e+r[2],o[l+5]=i+r[3],o[l+8]=e+r[4],o[l+9]=i+r[5],o[l+12]=e+r[6],o[l+13]=i+r[7];return t._upload=!0,!0},t.fillTranglesVB=function(t,e,i,r,s,n,a){var h=(t._byteLength>>2)+r.length;t.byteLength=h<<2;var l=t.getFloat32Array();h-=r.length;for(var o=r.length,u=s.a,_=s.b,c=s.c,f=s.d,d=0;d<o;d+=4)if(l[h+d+2]=r[d+2],l[h+d+3]=r[d+3],1!==u||0!==_||0!==c||1!==f){s.bTransform=!0;var m=s.tx+n,p=s.ty+a;l[h+d]=(r[d]+e)*u+(r[d+1]+i)*c+m,l[h+d+1]=(r[d]+e)*_+(r[d+1]+i)*f+p}else s.bTransform=!1,e+=s.tx+n,i+=s.ty+a,l[h+d]=e+r[d],l[h+d+1]=i+r[d+1];return t._upload=!0,!0},t.copyPreImgVb=function(t,e,i){var r=t._byteLength>>2;t.byteLength=r+16<<2;for(var s=t.getFloat32Array(),n=0,a=r-16;n<4;n++)s[r]=s[a]+e,++a,s[++r]=s[a]+i,++a,s[++r]=s[a],++a,s[++r]=s[a],++r,++a;t._upload=!0},t.fillRectImgVb=function(t,e,i,r,s,n,a,h,l,o,u,_,c){void 0===c&&(c=!1);var f,d,m,p,g,v,x,b,T,y,A,E,S,w,R,I,M=1,C=h.a,L=h.b,P=h.c,F=h.d,D=e&&e.width<99999999;if(1!==C||0!==L||0!==P||1!==F?(h.bTransform=!0,0===L&&0===P&&(M=23,T=s+i,y=n+r,f=C*i+(A=h.tx+l),m=C*T+A,d=F*r+(E=h.ty+o),p=F*y+E)):(M=23,h.bTransform=!1,m=(f=i+h.tx+l)+s,p=(d=r+h.ty+o)+n),D&&(g=e.x,v=e.y,x=e.width+g,b=e.height+v),1!==M){if(Math.min(f,m)>=x)return!1;if(Math.min(d,p)>=b)return!1;if(Math.max(m,f)<=g)return!1;if(Math.max(p,d)<=v)return!1}var B=t._byteLength>>2;t.byteLength=B+16<<2;var N=t.getFloat32Array();switch(N[B+2]=a[0],N[B+3]=a[1],N[B+6]=a[2],N[B+7]=a[3],N[B+10]=a[4],N[B+11]=a[5],N[B+14]=a[6],N[B+15]=a[7],M){case 1:A=h.tx+l,E=h.ty+o;var O=i,V=r,U=C*O,k=P*V,H=F*V,G=L*O,z=C*(T=s+i),W=P*(y=n+r),Y=F*y,X=L*T;c?(S=U+k+A,R=Math.round(S)-S,w=H+G+E,I=Math.round(w)-w,N[B]=S+R,N[B+1]=w+I,N[B+4]=z+k+A+R,N[B+5]=H+X+E+I,N[B+8]=z+W+A+R,N[B+9]=Y+X+E+I,N[B+12]=U+W+A+R,N[B+13]=Y+G+E+I):(N[B]=U+k+A,N[B+1]=H+G+E,N[B+4]=z+k+A,N[B+5]=H+X+E,N[B+8]=z+W+A,N[B+9]=Y+X+E,N[B+12]=U+W+A,N[B+13]=Y+G+E);break;case 23:c?(S=f+u,R=Math.round(S)-S,w=d,I=Math.round(w)-w,N[B]=S+R,N[B+1]=w+I,N[B+4]=m+u+R,N[B+5]=d+I,N[B+8]=m+R,N[B+9]=p+I,N[B+12]=f+R,N[B+13]=p+I):(N[B]=f+u,N[B+1]=d,N[B+4]=m+u,N[B+5]=d,N[B+8]=m,N[B+9]=p,N[B+12]=f,N[B+13]=p)}return t._upload=!0,!0},t.fillLineVb=function(e,i,r,s,n,a,h,l){"use strict";var o=.5*h,u=t._fillLineArray,_=-(s-a),c=r-n,f=Math.sqrt(_*_+c*c);_/=f,c/=f,_*=o,c*=o,u[0]=r-_,u[1]=s-c,u[4]=r+_,u[5]=s+c,u[8]=n+_,u[9]=a+c,u[12]=n-_,u[13]=a-c,l&&l.transformPointArray(u,u);var d=16+(e._byteLength>>2);return e.byteLength=d<<2,e.insertData(u,d-16),!0},r(t,["_fillLineArray",function(){return this._fillLineArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]),t}(),gt=(function(){function t(){}s(t,"laya.webgl.utils.MatirxArray"),t.ArrayMul=function(e,i,r){if(e)if(i)for(var s=NaN,n=NaN,a=NaN,h=NaN,l=0;l<4;l++)s=e[l],n=e[l+4],a=e[l+8],h=e[l+12],r[l]=s*i[0]+n*i[1]+a*i[2]+h*i[3],r[l+4]=s*i[4]+n*i[5]+a*i[6]+h*i[7],r[l+8]=s*i[8]+n*i[9]+a*i[10]+h*i[11],r[l+12]=s*i[12]+n*i[13]+a*i[14]+h*i[15];else t.copyArray(e,r);else t.copyArray(i,r)},t.copyArray=function(t,e){if(t&&e)for(var i=0;i<t.length;i++)e[i]=t[i]}}(),function(){function t(){}return s(t,"laya.webgl.utils.RenderState2D"),t.getMatrArray=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},t.mat2MatArray=function(e,i){var r=e,s=i;return s[0]=r.a,s[1]=r.b,s[2]=t.EMPTYMAT4_ARRAY[2],s[3]=t.EMPTYMAT4_ARRAY[3],s[4]=r.c,s[5]=r.d,s[6]=t.EMPTYMAT4_ARRAY[6],s[7]=t.EMPTYMAT4_ARRAY[7],s[8]=t.EMPTYMAT4_ARRAY[8],s[9]=t.EMPTYMAT4_ARRAY[9],s[10]=t.EMPTYMAT4_ARRAY[10],s[11]=t.EMPTYMAT4_ARRAY[11],s[12]=r.tx,s[13]=r.ty,s[14]=t.EMPTYMAT4_ARRAY[14],s[15]=t.EMPTYMAT4_ARRAY[15],i},t.restoreTempArray=function(){t.TEMPMAT4_ARRAY[0]=1,t.TEMPMAT4_ARRAY[1]=0,t.TEMPMAT4_ARRAY[4]=0,t.TEMPMAT4_ARRAY[5]=1,t.TEMPMAT4_ARRAY[12]=0,t.TEMPMAT4_ARRAY[13]=0},t.clear=function(){t.worldScissorTest=!1,t.worldShaderDefines=null,t.worldFilters=null,t.worldAlpha=1,t.worldClipRect.x=t.worldClipRect.y=0,t.worldClipRect.width=t.width,t.worldClipRect.height=t.height,t.curRenderTarget=null},t._MAXSIZE=99999999,t.worldAlpha=1,t.worldScissorTest=!1,t.worldFilters=null,t.worldShaderDefines=null,t.curRenderTarget=null,t.width=0,t.height=0,r(t,["EMPTYMAT4_ARRAY",function(){return this.EMPTYMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},"TEMPMAT4_ARRAY",function(){return this.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},"worldMatrix4",function(){return this.worldMatrix4=t.TEMPMAT4_ARRAY},"worldMatrix",function(){return this.worldMatrix=new b},"worldClipRect",function(){return this.worldClipRect=new y(0,0,99999999,99999999)}]),t}()),vt=function(){function t(t,i,r,s,n){function a(t){var i=[],r=new e(i);return h._compileToTree(r,t.split("\n"),0,i,n),r}var h=this,l=u.now();this._VS=a(i),this._PS=a(r),this._nameMap=s,u.now()-l>2&&console.log("ShaderCompile use time:"+(u.now()-l)+"  size:"+i.length+"/"+r.length)}var e,i;s(t,"laya.webgl.utils.ShaderCompile");var n=t.prototype;return n._compileToTree=function(i,r,s,n,a){var h,l,o,u,_,c,f,d=0,m=0,p=0,g=0;for(m=s;m<r.length;m++)if(!((o=r[m]).length<1)&&0!==(d=o.indexOf("//"))){if(d>=0&&(o=o.substr(0,d)),h=f||new e(n),f=null,h.text=o,h.noCompile=!0,(d=o.indexOf("#"))>=0){for(u="#",g=d+1,p=o.length;g<p;g++){var v=o.charAt(g);if(" "===v||"\t"===v||"?"===v)break;u+=v}switch(h.name=u,u){case"#ifdef":case"#ifndef":if(h.src=o,h.noCompile=null!=o.match(/[!&|()=<>]/),h.noCompile?console.log("function():Boolean{return "+o.substr(d+h.name.length)+"}"):(c=o.replace(/^\s*/,"").split(/\s+/),h.setCondition(c[1],"#ifdef"===u?1:2),h.text="//"+h.text),h.setParent(i),i=h,a)for(c=o.substr(g).split(t._splitToWordExps3),g=0;g<c.length;g++)(o=c[g]).length&&(a[o]=!0);continue;case"#if":if(h.src=o,h.noCompile=!0,h.setParent(i),i=h,a)for(c=o.substr(g).split(t._splitToWordExps3),g=0;g<c.length;g++)(o=c[g]).length&&"defined"!=o&&(a[o]=!0);continue;case"#else":h.src=o,l=(i=i.parent).childs[i.childs.length-1],h.noCompile=l.noCompile,h.noCompile||(h.condition=l.condition,h.conditionType=1==l.conditionType?2:1,h.text="//"+h.text+" "+l.text+" "+h.conditionType),h.setParent(i),i=h;continue;case"#endif":l=(i=i.parent).childs[i.childs.length-1],h.noCompile=l.noCompile,h.noCompile||(h.text="//"+h.text),h.setParent(i);continue;case"#include":c=t.splitToWords(o,null);var x=t.includes[c[1]];if(!x)throw"ShaderCompile error no this include file:"+c[1];if((d=c[0].indexOf("?"))<0){h.setParent(i),o=x.getWith("with"==c[2]?c[3]:null),this._compileToTree(h,o.split("\n"),0,n,a),h.text="";continue}h.setCondition(c[0].substr(d+1),1),h.text=x.getWith("with"==c[2]?c[3]:null);break;case"#import":_=(c=t.splitToWords(o,null))[1],n.push({node:h,file:t.includes[_],ofs:h.text.length});continue}}else{if((l=i.childs[i.childs.length-1])&&!l.name){n.length>0&&t.splitToWords(o,l),f=h,l.text+="\n"+o;continue}n.length>0&&t.splitToWords(o,h)}h.setParent(i)}},n.createShader=function(t,e,i){var r={},s="";if(t)for(var n in t)s+="#define "+n+"\n",r[n]=!0;var a=this._VS.toscript(r,[]),h=this._PS.toscript(r,[]);return(i||Xt.create)(s+a.join("\n"),s+h.join("\n"),e,this._nameMap)},t._parseOne=function(e,i,r,s,n,a){var h={type:t.shaderParamsMap[r[s+1]],name:r[s+2],size:isNaN(parseInt(r[s+3]))?1:parseInt(r[s+3])};return a&&("attribute"==n?e.push(h):i.push(h)),":"==r[s+3]&&(h.type=r[s+4],s+=2),s+=2},t.addInclude=function(e,r){if(!r||0===r.length)throw new Error("add shader include file err:"+e);if(t.includes[e])throw new Error("add shader include file err, has add:"+e);t.includes[e]=new i(r)},t.preGetParams=function(e,i){var r=[e,i],s={},n=[],a=[],h={},l=[];s.attributes=n,s.uniforms=a,s.defines=h;for(var o=0,u=0,_=0;_<2;_++){r[_]=r[_].replace(t._removeAnnotation,"");var c,f=r[_].match(t._reg);for(o=0,u=f.length;o<u;o++){var d=f[o];if("attribute"==d||"uniform"==d)o=t._parseOne(n,a,f,o,d,!0);else{if("#define"==d){l[d=f[++o]]=1;continue}if("#ifdef"==d){h[c=f[++o]]=h[c]||[];for(o++;o<u;o++)if("attribute"==(d=f[o])||"uniform"==d)o=t._parseOne(n,a,f,o,d,l[c]);else if("#else"==d)for(o++;o<u;o++)if("attribute"==(d=f[o])||"uniform"==d)o=t._parseOne(n,a,f,o,d,!l[c]);else if("#endif"==d)break}}}}return s},t.splitToWords=function(t,e){for(var i,r,s=[],n=-1,a=0,h=t.length;a<h;a++)if(i=t.charAt(a)," \t=+-*/&%!<>()'\",;".indexOf(i)>=0){if(n>=0&&a-n>1&&(r=t.substr(n,a-n),s.push(r)),'"'==i||"'"==i){var l=t.indexOf(i,a+1);if(l<0)throw"Sharder err:"+t;s.push(t.substr(a+1,l-a-1)),a=l,n=-1;continue}"("==i&&e&&s.length>0&&(r=s[s.length-1]+";","vec4;main;".indexOf(r)<0&&(e.useFuns+=r)),n=-1}else n<0&&(n=a);return n<h&&h-n>1&&(r=t.substr(n,h-n),s.push(r)),s},t.IFDEF_NO=0,t.IFDEF_YES=1,t.IFDEF_ELSE=2,t.IFDEF_PARENT=3,t.includes={},r(t,["_removeAnnotation",function(){return this._removeAnnotation=new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)","g")},"_reg",function(){return this._reg=new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])","g")},"_splitToWordExps",function(){return this._splitToWordExps=new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])","g")},"shaderParamsMap",function(){return this.shaderParamsMap={float:5126,int:5124,bool:35670,vec2:35664,vec3:35665,vec4:35666,ivec2:35667,ivec3:35668,ivec4:35669,bvec2:35671,bvec3:35672,bvec4:35673,mat2:35674,mat3:35675,mat4:35676,sampler2D:35678,samplerCube:35680}},"_splitToWordExps3",function(){return this._splitToWordExps3=new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]","g")}]),t.__init$=function(){e=function(){function t(t){this.childs=[],this.text="",this.parent=null,this.name=null,this.noCompile=!1,this.includefiles=null,this.condition=null,this.conditionType=0,this.useFuns="",this.z=0,this.src=null,this.includefiles=t}s(t,"");var e=t.prototype;return e.setParent=function(t){t.childs.push(this),this.z=t.z+1,this.parent=t},e.setCondition=function(t,e){t&&(this.conditionType=e,t=t.replace(/(\s*$)/g,""),this.condition=function(){return this[t]},this.condition.__condition=t)},e.toscript=function(e,i){return this._toscript(e,i,++t.__id)},e._toscript=function(t,e,i){if(this.childs.length<1&&!this.text)return e;e.length;if(this.condition){var r=!!this.condition.call(t);if(2===this.conditionType&&(r=!r),!r)return e}if(this.text&&e.push(this.text),this.childs.length>0&&this.childs.forEach(function(r,s,n){r._toscript(t,e,i)}),this.includefiles.length>0&&this.useFuns.length>0)for(var s,n=0,a=this.includefiles.length;n<a;n++)this.includefiles[n].curUseID!=i&&(s=this.includefiles[n].file.getFunsScript(this.useFuns)).length>0&&(this.includefiles[n].curUseID=i,e[0]=s+e[0]);return e},t.__id=1,t}(),i=function(){function e(e){this.script=null,this.codes={},this.funs={},this.curUseID=-1,this.funnames="",this.script=e;for(var i=0,r=0,s=0;;){if((i=e.indexOf("#begin",i))<0)break;for(s=i+5;;){if((s=e.indexOf("#end",s))<0)break;if("i"!==e.charAt(s+4))break;s+=5}if(s<0)throw"add include err,no #end:"+e;r=e.indexOf("\n",i);var n=t.splitToWords(e.substr(i,r-i),null);"code"==n[1]?this.codes[n[2]]=e.substr(r+1,s-r-1):"function"==n[1]&&(r=e.indexOf("function",i),r+="function".length,this.funs[n[3]]=e.substr(r+1,s-r-1),this.funnames+=n[3]+";"),i=s+1}}s(e,"");var i=e.prototype;return i.getWith=function(t){var e=t?this.codes[t]:this.script;if(!e)throw"get with error:"+t;return e},i.getFunsScript=function(t){var e="";for(var i in this.funs)t.indexOf(i+";")>=0&&(e+=this.funs[i]);return e},e}()},t}(),xt=function(){function t(){}return s(t,"laya.webgl.WebGL"),t._uint8ArraySlice=function(){for(var t=this.length,e=new Uint8Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},t._float32ArraySlice=function(){for(var t=this.length,e=new Float32Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},t._uint16ArraySlice=function(t){var e,i=arguments,r=0,s=0;if(0===i.length)for(r=this.length,e=new Uint16Array(r),s=0;s<r;s++)e[s]=this[s];else if(2===i.length){var n=i[0],a=i[1];if(a>n)for(r=a-n,e=new Uint16Array(r),s=n;s<a;s++)e[s-n]=this[s];else e=new Uint16Array(0)}return e},t.expandContext=function(){var t=d.prototype,e=CanvasRenderingContext2D.prototype;e.fillTrangles=t.fillTrangles,Kt.__int__(null),e.setIBVB=function(t,e,i,r,s,n,a,h,l,o){void 0===l&&(l=0),void 0===o&&(o=0),null===i&&(this._ib=this._ib||qt.QuadrangleIB,i=this._ib,pt.expandIBQuadrangle(i,r._byteLength/64+8)),this._setIBVB(t,e,i,r,s,n,a,h,l,o)},e.fillTrangles=function(t,e,i,r,s){this._curMat=this._curMat||b.create(),this._vb=this._vb||jt.create(),this._ib||(this._ib=qt.create(),pt.fillIBQuadrangle(this._ib,a/4));var n=this._vb,a=r.length>>4;pt.fillTranglesVB(n,e,i,r,s||this._curMat,0,0),pt.expandIBQuadrangle(this._ib,n._byteLength/64+8);var h=new At(1,0);h.textureHost=t;var l=new Zt("attribute vec2 position; attribute vec2 texcoord; uniform vec2 size; uniform mat4 mmat; varying vec2 v_texcoord; void main() { vec4 p=vec4(position.xy,0.0,1.0);vec4 pos=mmat*p; gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0); v_texcoord = texcoord; }","precision mediump float; varying vec2 v_texcoord; uniform sampler2D texture; void main() {vec4 color= texture2D(texture, v_texcoord); color.a*=1.0; gl_FragColor= color;}");n._vertType=3,this._setIBVB(e,i,this._ib,n,6*a,s,l,h,0,0)}},t.enable=function(){if(u.__init__(),A.isConchApp&&!A.isConchWebGL)return R.skinAniSprite=function(){return new tt},t.expandContext(),!1;if(R.getWebGLContext=function(t){for(var e,i=["webgl","experimental-webgl","webkit-3d","moz-webgl"],r=0;r<i.length;r++){try{e=t.getContext(i[r],{stencil:f.isStencil,alpha:f.isAlpha,antialias:f.isAntialias,premultipliedAlpha:f.premultipliedAlpha,preserveDrawingBuffer:f.preserveDrawingBuffer})}catch(t){}if(e)return e}return null},null==(t.mainContext=R.getWebGLContext(A._mainCanvas)))return!1;if(A.isWebGL)return!0;v.create=function(t,e){return new $t(t,e)},x.create=function(t,e,i,r,s,n,a){return new Yt(t,e,i,r,s,n,a)},A.WebGL=t,A.isWebGL=!0,ft.__init__(),R.createRenderSprite=function(t,e){return new Et(t,e)},R.createWebGLContext2D=function(t){return new yt(t)},R.changeWebGLSize=function(t,e){laya.webgl.WebGL.onStageResize(t,e)},R.createGraphics=function(){return new Tt};var e=R.createFilterAction;return R.createFilterAction=e||function(t){return new St},R.clear=function(t){gt.worldScissorTest&&laya.webgl.WebGL.mainContext.disable(3089);var e=A.context.ctx,i=0==e._submits._length||f.preserveDrawingBuffer?c.create(t)._color:M._wgColor;i&&e.clearBG(i[0],i[1],i[2],i[3]),gt.clear()},R.addToAtlas=function(t,e){void 0===e&&(e=!1);var r=t.bitmap;A.optimizeTextureMemory(t.url,t)?i.__typeof(r,"laya.webgl.resource.IMergeAtlasBitmap")&&r.allowMerageInAtlas&&r.on("recovered",t,t.addTextureToAtlas):r.enableMerageInAtlas=!1},R.isAtlas=function(t){return t instanceof laya.webgl.atlas.AtlasWebGLCanvas},k._enable(),R.beginFlush=function(){for(var t=k.instance,e=t.getAtlaserCount(),i=0;i<e;i++){var r=t.getAtlaserByIndex(i).texture;r._flashCacheImageNeedFlush&&R.flashFlushImage(r)}},R.drawToCanvas=function(t,e,i,r,s,n){(i<=0||r<=0)&&console.log("[error] canvasWidth and canvasHeight should greater than zero"),s-=t.x,n-=t.y;var a=Dt.create(i,r,6408,5121,0,!1);a.start(),a.clear(0,0,0,0),A.context.clear(),E.renders[e]._fun(t,A.context,s,gt.height-r+n),A.context.flush(),a.end();var h=a.getData(0,0,a.width,a.height);a.recycle();var l=new Gt;l._canvas=u.createElement("canvas"),l.size(i,r);var o=l._canvas.getContext("2d");u.canvas.size(i,r);var _=u.context,c=_.createImageData(i,r);return c.data.set(new Uint8ClampedArray(h.buffer)),l._imgData=c,_.putImageData(c,0,0),o.save(),o.translate(0,r),o.scale(1,-1),o.drawImage(u.canvas.source,0,0),o.restore(),l},R.createFilterAction=function(t){var e;switch(t){case 32:e=new St}return e},R.addTextureToAtlas=function(t){t._uvID++,k._atlasRestore++,t.bitmap.enableMerageInAtlas&&k.instance.addToAtlas(t)},R.getTexturePixels=function(t,e,i,r,s){A.context.ctx.clear();var n=new I;n.graphics.drawTexture(t,-e,-i);var a=Dt.create(r,s);a.start(),a.clear(0,0,0,0),n.render(A.context,0,0),A.context.ctx.flush(),a.end();for(var h=a.getData(0,0,r,s),l=[],o=0,u=s-1;u>=0;u--)for(var _=0;_<r;_++)o=4*(u*r+_),l.push(h[o]),l.push(h[o+1]),l.push(h[o+2]),l.push(h[o+3]);return l},R.skinAniSprite=function(){return new tt},g.create=function(t,e){var i=new Gt;return i._imgData=e,i.flipY=!1,i},m._filterStart=function(t,e,i,r,s){var n=t.getValue("bounds"),a=Dt.create(n.width,n.height);if(a.start(),a.clear(0,0,0,0),t.addValue("src",a),t.addValue("ScissorTest",gt.worldScissorTest),gt.worldScissorTest){var h=new y;h.copyFrom(i.ctx._clipRect),t.addValue("clipRect",h),gt.worldScissorTest=!1,laya.webgl.WebGL.mainContext.disable(3089)}},m._filterEnd=function(t,e,i,r,s){var n=t.getValue("bounds");t.getValue("src").end();var a=Dt.create(n.width,n.height);a.start(),a.clear(0,0,0,0),t.addValue("out",a),e._set$P("_filterCache",a),e._set$P("_isHaveGlowFilter",t.getValue("_isHaveGlowFilter"))},m._EndTarget=function(t,e){t.getValue("src").recycle();t.getValue("out").end();if(t.getValue("ScissorTest")){gt.worldScissorTest=!0,laya.webgl.WebGL.mainContext.enable(3089),e.ctx.save();var i=t.getValue("clipRect");e.ctx.clipRect(i.x,i.y,i.width,i.height)}},m._useSrc=function(t){var e=t.getValue("out");e.end(),(e=t.getValue("src")).start(),e.clear(0,0,0,0)},m._endSrc=function(t){t.getValue("src").end()},m._useOut=function(t){var e=t.getValue("src");e.end(),(e=t.getValue("out")).start(),e.clear(0,0,0,0)},m._endOut=function(t){t.getValue("out").end()},m._recycleScope=function(t){t.recycle()},m._filter=function(t,e,i,r){var s=this._next;if(s){var n=t.filters,a=n.length;if(1==a&&32==n[0].type)return e.ctx.save(),e.ctx.setFilters([n[0]]),s._fun.call(s,t,e,i,r),void e.ctx.restore();var h,l,o=ht.create(),u=T.TEMP,_=e.ctx._getTransformMatrix(),c=b.create();_.copyTo(c);var f=0,d=0,p=!1,g=t._$P._filterCache?t._$P._filterCache:null;if(!g||t._repaint){p=t._isHaveGlowFilter(),o.addValue("_isHaveGlowFilter",p),p&&(f=50,d=25),(l=new y).copyFrom(t.getSelfBounds()),l.x+=t.x,l.y+=t.y,l.x-=t.pivotX+4,l.y-=t.pivotY+4;var v=l.x,x=l.y;if(l.width+=f+8,l.height+=f+8,u.x=l.x*c.a+l.y*c.c,u.y=l.y*c.d+l.x*c.b,l.x=u.x,l.y=u.y,u.x=l.width*c.a+l.height*c.c,u.y=l.height*c.d+l.width*c.b,l.width=u.x,l.height=u.y,l.width<=0||l.height<=0)return;g&&g.recycle(),o.addValue("bounds",l);var A=at.create([o,t,e,0,0],m._filterStart);e.addRenderObject(A),e.ctx._renderKey=0,e.ctx._shader2D.glTexture=null;var E=t.x-v+d,S=t.y-x+d;s._fun.call(s,t,e,E,S),A=at.create([o,t,e,0,0],m._filterEnd),e.addRenderObject(A);for(var w=0;w<a;w++){0!=w&&(A=at.create([o],m._useSrc),e.addRenderObject(A),h=At.create(1,0),b.TEMP.identity(),e.ctx.drawTarget(o,0,0,l.width,l.height,b.TEMP,"out",h,null,G.TOINT.overlay),A=at.create([o],m._useOut),e.addRenderObject(A));n[w].action.apply3d(o,t,e,0,0)}A=at.create([o,e],m._EndTarget),e.addRenderObject(A)}else{if((p=!!t._$P._isHaveGlowFilter&&t._$P._isHaveGlowFilter)&&(f=50,d=25),(l=t.getBounds()).width<=0||l.height<=0)return;l.width+=f,l.height+=f,u.x=l.x*c.a+l.y*c.c,u.y=l.y*c.d+l.x*c.b,l.x=u.x,l.y=u.y,u.x=l.width*c.a+l.height*c.c,u.y=l.height*c.d+l.width*c.b,l.width=u.x,l.height=u.y,o.addValue("out",g)}i=i-d-t.x,r=r-d-t.y,u.setTo(i,r),c.transformPoint(u),i=u.x+l.x,r=u.y+l.y,h=At.create(1,0),b.TEMP.identity(),e.ctx.drawTarget(o,i,r,l.width,l.height,b.TEMP,"out",h,null,G.TOINT.overlay),A=at.create([o],m._recycleScope),e.addRenderObject(A),c.destroy()}},Float32Array.prototype.slice||(Float32Array.prototype.slice=t._float32ArraySlice),Uint16Array.prototype.slice||(Uint16Array.prototype.slice=t._uint16ArraySlice),Uint8Array.prototype.slice||(Uint8Array.prototype.slice=t._uint8ArraySlice),!0},t.onStageResize=function(e,i){null!=t.mainContext&&(t.mainContext.viewport(0,0,e,i),gt.width=e,gt.height=i)},t.onInvalidGLRes=function(){k.instance.freeAll(),w.releaseContentManagers(!0),t.doNodeRepaint(i.stage),t.mainContext.viewport(0,0,gt.width,gt.height),i.stage.event("devicelost")},t.doNodeRepaint=function(e){0==e.numChildren&&e.repaint();for(var i=0;i<e.numChildren;i++)t.doNodeRepaint(e.getChildAt(i))},t.init=function(e,i,r){t.mainCanvas=e,g._createContext=function(t){return new yt(t)},Gt._createContext=function(t){return new yt(t)};var s=laya.webgl.WebGL.mainContext;if(null!=s.getShaderPrecisionFormat){var n=s.getShaderPrecisionFormat(35633,36338),a=s.getShaderPrecisionFormat(35632,36338);t.shaderHighPrecision=!(!n.precision||!a.precision)}else t.shaderHighPrecision=!1;if(t.compressAstc=s.getExtension("WEBGL_compressed_texture_astc"),t.compressAtc=s.getExtension("WEBGL_compressed_texture_atc"),t.compressEtc=s.getExtension("WEBGL_compressed_texture_etc"),t.compressEtc1=s.getExtension("WEBGL_compressed_texture_etc1"),t.compressPvrtc=s.getExtension("WEBGL_compressed_texture_pvrtc"),t.compressS3tc=s.getExtension("WEBGL_compressed_texture_s3tc"),t.compressS3tc_srgb=s.getExtension("WEBGL_compressed_texture_s3tc_srgb"),s.deleteTexture1=s.deleteTexture,s.deleteTexture=function(t){t==bt.curBindTexValue&&(bt.curBindTexValue=null),s.deleteTexture1(t)},t.onStageResize(i,r),null==t.mainContext)throw new Error("webGL getContext err!");P.__init__(),k.__init__(),Rt.__init__(),nt.__init__(),yt.__init__(),At.__init__(),$.__init__(),Kt.__int__(s),G._init_(s),A.isConchApp&&conch.setOnInvalidGLRes(t.onInvalidGLRes)},t.compressAstc=null,t.compressAtc=null,t.compressEtc=null,t.compressEtc1=null,t.compressPvrtc=null,t.compressS3tc=null,t.compressS3tc_srgb=null,t.mainCanvas=null,t.mainContext=null,t.antialias=!0,t.shaderHighPrecision=!1,r(t,["_bg_null",function(){return this._bg_null=[0,0,0,0]}]),t}(),bt=function(){function t(){}return s(t,"laya.webgl.WebGLContext"),t.UseProgram=function(e){return t._useProgram!==e&&(xt.mainContext.useProgram(e),t._useProgram=e,!0)},t.setDepthTest=function(e,i){i!==t._depthTest&&(t._depthTest=i,i?e.enable(2929):e.disable(2929))},t.setDepthMask=function(e,i){i!==t._depthMask&&(t._depthMask=i,e.depthMask(i))},t.setDepthFunc=function(e,i){i!==t._depthFunc&&(t._depthFunc=i,e.depthFunc(i))},t.setBlend=function(e,i){i!==t._blend&&(t._blend=i,i?e.enable(3042):e.disable(3042))},t.setBlendFunc=function(e,i,r){(i!==t._sFactor||r!==t._dFactor)&&(t._sFactor=i,t._dFactor=r,e.blendFunc(i,r))},t.setCullFace=function(e,i){i!==t._cullFace&&(t._cullFace=i,i?e.enable(2884):e.disable(2884))},t.setFrontFace=function(e,i){i!==t._frontFace&&(t._frontFace=i,e.frontFace(i))},t.bindTexture=function(e,i,r){e.bindTexture(i,r),t.curBindTexTarget=i,t.curBindTexValue=r},t.DEPTH_BUFFER_BIT=256,t.STENCIL_BUFFER_BIT=1024,t.COLOR_BUFFER_BIT=16384,t.POINTS=0,t.LINES=1,t.LINE_LOOP=2,t.LINE_STRIP=3,t.TRIANGLES=4,t.TRIANGLE_STRIP=5,t.TRIANGLE_FAN=6,t.ZERO=0,t.ONE=1,t.SRC_COLOR=768,t.ONE_MINUS_SRC_COLOR=769,t.SRC_ALPHA=770,t.ONE_MINUS_SRC_ALPHA=771,t.DST_ALPHA=772,t.ONE_MINUS_DST_ALPHA=773,t.DST_COLOR=774,t.ONE_MINUS_DST_COLOR=775,t.SRC_ALPHA_SATURATE=776,t.FUNC_ADD=32774,t.BLEND_EQUATION=32777,t.BLEND_EQUATION_RGB=32777,t.BLEND_EQUATION_ALPHA=34877,t.FUNC_SUBTRACT=32778,t.FUNC_REVERSE_SUBTRACT=32779,t.BLEND_DST_RGB=32968,t.BLEND_SRC_RGB=32969,t.BLEND_DST_ALPHA=32970,t.BLEND_SRC_ALPHA=32971,t.CONSTANT_COLOR=32769,t.ONE_MINUS_CONSTANT_COLOR=32770,t.CONSTANT_ALPHA=32771,t.ONE_MINUS_CONSTANT_ALPHA=32772,t.BLEND_COLOR=32773,t.ARRAY_BUFFER=34962,t.ELEMENT_ARRAY_BUFFER=34963,t.ARRAY_BUFFER_BINDING=34964,t.ELEMENT_ARRAY_BUFFER_BINDING=34965,t.STREAM_DRAW=35040,t.STATIC_DRAW=35044,t.DYNAMIC_DRAW=35048,t.BUFFER_SIZE=34660,t.BUFFER_USAGE=34661,t.CURRENT_VERTEX_ATTRIB=34342,t.FRONT=1028,t.BACK=1029,t.CULL_FACE=2884,t.FRONT_AND_BACK=1032,t.BLEND=3042,t.DITHER=3024,t.STENCIL_TEST=2960,t.DEPTH_TEST=2929,t.SCISSOR_TEST=3089,t.POLYGON_OFFSET_FILL=32823,t.SAMPLE_ALPHA_TO_COVERAGE=32926,t.SAMPLE_COVERAGE=32928,t.NO_ERROR=0,t.INVALID_ENUM=1280,t.INVALID_VALUE=1281,t.INVALID_OPERATION=1282,t.OUT_OF_MEMORY=1285,t.CW=2304,t.CCW=2305,t.LINE_WIDTH=2849,t.ALIASED_POINT_SIZE_RANGE=33901,t.ALIASED_LINE_WIDTH_RANGE=33902,t.CULL_FACE_MODE=2885,t.FRONT_FACE=2886,t.DEPTH_RANGE=2928,t.DEPTH_WRITEMASK=2930,t.DEPTH_CLEAR_VALUE=2931,t.DEPTH_FUNC=2932,t.STENCIL_CLEAR_VALUE=2961,t.STENCIL_FUNC=2962,t.STENCIL_FAIL=2964,t.STENCIL_PASS_DEPTH_FAIL=2965,t.STENCIL_PASS_DEPTH_PASS=2966,t.STENCIL_REF=2967,t.STENCIL_VALUE_MASK=2963,t.STENCIL_WRITEMASK=2968,t.STENCIL_BACK_FUNC=34816,t.STENCIL_BACK_FAIL=34817,t.STENCIL_BACK_PASS_DEPTH_FAIL=34818,t.STENCIL_BACK_PASS_DEPTH_PASS=34819,t.STENCIL_BACK_REF=36003,t.STENCIL_BACK_VALUE_MASK=36004,t.STENCIL_BACK_WRITEMASK=36005,t.VIEWPORT=2978,t.SCISSOR_BOX=3088,t.COLOR_CLEAR_VALUE=3106,t.COLOR_WRITEMASK=3107,t.UNPACK_ALIGNMENT=3317,t.PACK_ALIGNMENT=3333,t.MAX_TEXTURE_SIZE=3379,t.MAX_VIEWPORT_DIMS=3386,t.SUBPIXEL_BITS=3408,t.RED_BITS=3410,t.GREEN_BITS=3411,t.BLUE_BITS=3412,t.ALPHA_BITS=3413,t.DEPTH_BITS=3414,t.STENCIL_BITS=3415,t.POLYGON_OFFSET_UNITS=10752,t.POLYGON_OFFSET_FACTOR=32824,t.TEXTURE_BINDING_2D=32873,t.SAMPLE_BUFFERS=32936,t.SAMPLES=32937,t.SAMPLE_COVERAGE_VALUE=32938,t.SAMPLE_COVERAGE_INVERT=32939,t.NUM_COMPRESSED_TEXTURE_FORMATS=34466,t.COMPRESSED_TEXTURE_FORMATS=34467,t.DONT_CARE=4352,t.FASTEST=4353,t.NICEST=4354,t.GENERATE_MIPMAP_HINT=33170,t.BYTE=5120,t.UNSIGNED_BYTE=5121,t.SHORT=5122,t.UNSIGNED_SHORT=5123,t.INT=5124,t.UNSIGNED_INT=5125,t.FLOAT=5126,t.DEPTH_COMPONENT=6402,t.ALPHA=6406,t.RGB=6407,t.RGBA=6408,t.LUMINANCE=6409,t.LUMINANCE_ALPHA=6410,t.UNSIGNED_SHORT_4_4_4_4=32819,t.UNSIGNED_SHORT_5_5_5_1=32820,t.UNSIGNED_SHORT_5_6_5=33635,t.FRAGMENT_SHADER=35632,t.VERTEX_SHADER=35633,t.MAX_VERTEX_ATTRIBS=34921,t.MAX_VERTEX_UNIFORM_VECTORS=36347,t.MAX_VARYING_VECTORS=36348,t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661,t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660,t.MAX_TEXTURE_IMAGE_UNITS=34930,t.MAX_FRAGMENT_UNIFORM_VECTORS=36349,t.SHADER_TYPE=35663,t.DELETE_STATUS=35712,t.LINK_STATUS=35714,t.VALIDATE_STATUS=35715,t.ATTACHED_SHADERS=35717,t.ACTIVE_UNIFORMS=35718,t.ACTIVE_ATTRIBUTES=35721,t.SHADING_LANGUAGE_VERSION=35724,t.CURRENT_PROGRAM=35725,t.NEVER=512,t.LESS=513,t.EQUAL=514,t.LEQUAL=515,t.GREATER=516,t.NOTEQUAL=517,t.GEQUAL=518,t.ALWAYS=519,t.KEEP=7680,t.REPLACE=7681,t.INCR=7682,t.DECR=7683,t.INVERT=5386,t.INCR_WRAP=34055,t.DECR_WRAP=34056,t.VENDOR=7936,t.RENDERER=7937,t.VERSION=7938,t.NEAREST=9728,t.LINEAR=9729,t.NEAREST_MIPMAP_NEAREST=9984,t.LINEAR_MIPMAP_NEAREST=9985,t.NEAREST_MIPMAP_LINEAR=9986,t.LINEAR_MIPMAP_LINEAR=9987,t.TEXTURE_MAG_FILTER=10240,t.TEXTURE_MIN_FILTER=10241,t.TEXTURE_WRAP_S=10242,t.TEXTURE_WRAP_T=10243,t.TEXTURE_2D=3553,t.TEXTURE=5890,t.TEXTURE_CUBE_MAP=34067,t.TEXTURE_BINDING_CUBE_MAP=34068,t.TEXTURE_CUBE_MAP_POSITIVE_X=34069,t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070,t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071,t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072,t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073,t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074,t.MAX_CUBE_MAP_TEXTURE_SIZE=34076,t.TEXTURE0=33984,t.TEXTURE1=33985,t.TEXTURE2=33986,t.TEXTURE3=33987,t.TEXTURE4=33988,t.TEXTURE5=33989,t.TEXTURE6=33990,t.TEXTURE7=33991,t.TEXTURE8=33992,t.TEXTURE9=33993,t.TEXTURE10=33994,t.TEXTURE11=33995,t.TEXTURE12=33996,t.TEXTURE13=33997,t.TEXTURE14=33998,t.TEXTURE15=33999,t.TEXTURE16=34e3,t.TEXTURE17=34001,t.TEXTURE18=34002,t.TEXTURE19=34003,t.TEXTURE20=34004,t.TEXTURE21=34005,t.TEXTURE22=34006,t.TEXTURE23=34007,t.TEXTURE24=34008,t.TEXTURE25=34009,t.TEXTURE26=34010,t.TEXTURE27=34011,t.TEXTURE28=34012,t.TEXTURE29=34013,t.TEXTURE30=34014,t.TEXTURE31=34015,t.ACTIVE_TEXTURE=34016,t.REPEAT=10497,t.CLAMP_TO_EDGE=33071,t.MIRRORED_REPEAT=33648,t.FLOAT_VEC2=35664,t.FLOAT_VEC3=35665,t.FLOAT_VEC4=35666,t.INT_VEC2=35667,t.INT_VEC3=35668,t.INT_VEC4=35669,t.BOOL=35670,t.BOOL_VEC2=35671,t.BOOL_VEC3=35672,t.BOOL_VEC4=35673,t.FLOAT_MAT2=35674,t.FLOAT_MAT3=35675,t.FLOAT_MAT4=35676,t.SAMPLER_2D=35678,t.SAMPLER_CUBE=35680,t.VERTEX_ATTRIB_ARRAY_ENABLED=34338,t.VERTEX_ATTRIB_ARRAY_SIZE=34339,t.VERTEX_ATTRIB_ARRAY_STRIDE=34340,t.VERTEX_ATTRIB_ARRAY_TYPE=34341,t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922,t.VERTEX_ATTRIB_ARRAY_POINTER=34373,t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975,t.COMPILE_STATUS=35713,t.LOW_FLOAT=36336,t.MEDIUM_FLOAT=36337,t.HIGH_FLOAT=36338,t.LOW_INT=36339,t.MEDIUM_INT=36340,t.HIGH_INT=36341,t.FRAMEBUFFER=36160,t.RENDERBUFFER=36161,t.RGBA4=32854,t.RGB5_A1=32855,t.RGB565=36194,t.DEPTH_COMPONENT16=33189,t.STENCIL_INDEX=6401,t.STENCIL_INDEX8=36168,t.DEPTH_STENCIL=34041,t.RENDERBUFFER_WIDTH=36162,t.RENDERBUFFER_HEIGHT=36163,t.RENDERBUFFER_INTERNAL_FORMAT=36164,t.RENDERBUFFER_RED_SIZE=36176,t.RENDERBUFFER_GREEN_SIZE=36177,t.RENDERBUFFER_BLUE_SIZE=36178,t.RENDERBUFFER_ALPHA_SIZE=36179,t.RENDERBUFFER_DEPTH_SIZE=36180,t.RENDERBUFFER_STENCIL_SIZE=36181,t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048,t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049,t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050,t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051,t.COLOR_ATTACHMENT0=36064,t.DEPTH_ATTACHMENT=36096,t.STENCIL_ATTACHMENT=36128,t.DEPTH_STENCIL_ATTACHMENT=33306,t.NONE=0,t.FRAMEBUFFER_COMPLETE=36053,t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054,t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055,t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057,t.FRAMEBUFFER_UNSUPPORTED=36061,t.FRAMEBUFFER_BINDING=36006,t.RENDERBUFFER_BINDING=36007,t.MAX_RENDERBUFFER_SIZE=34024,t.INVALID_FRAMEBUFFER_OPERATION=1286,t.UNPACK_FLIP_Y_WEBGL=37440,t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441,t.CONTEXT_LOST_WEBGL=37442,t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443,t.BROWSER_DEFAULT_WEBGL=37444,t._useProgram=null,t._depthTest=!0,t._depthMask=!0,t._blend=!1,t._cullFace=!1,t.curBindTexTarget=null,t.curBindTexValue=null,r(t,["_depthFunc",function(){return this._depthFunc=513},"_sFactor",function(){return this._sFactor=1},"_dFactor",function(){return this._dFactor=0},"_frontFace",function(){return this._frontFace=2305}]),t}(),Tt=function(t){function e(){e.__super.call(this)}s(e,"laya.webgl.display.GraphicsGL",p);var i=e.prototype;return i.setShader=function(t){this._saveToCmd(A.context._setShader,[t])},i.setIBVB=function(t,e,i,r,s,n){this._saveToCmd(A.context._setIBVB,[t,e,i,r,s,n])},i.drawParticle=function(t,e,i){var r=R.createParticleTemplate2D(i);r.x=t,r.y=e,this._saveToCmd(A.context._drawParticle,[r])},e}(),yt=function(t){function e(t){this._x=0,this._y=0,this._id=++e._COUNT,this._path=null,this._drawCount=1,this._maxNumEle=0,this._clear=!1,this._isMain=!1,this._atlasResourceChange=0,this._submits=null,this._curSubmit=null,this._ib=null,this._vb=null,this._nBlendType=0,this._saveMark=null,this._shader2D=null,this.mId=-1,this.mHaveKey=!1,this.mHaveLineKey=!1,this.mX=0,this.mY=0,e.__super.call(this),this._width=99999999,this._height=99999999,this._clipRect=e.MAXCLIPRECT,this.mOutPoint,this._canvas=t,e._contextcount++,A.isFlash?(this._ib=qt.create(35044),pt.fillIBQuadrangle(this._ib,16)):this._ib=qt.QuadrangleIB,this.clear()}var a;s(e,"laya.webgl.canvas.WebGLContext2D",d);var h=e.prototype;return h.setIsMainContext=function(){this._isMain=!0},h.clearBG=function(t,e,i,r){var s=xt.mainContext;s.clearColor(t,e,i,r),s.clear(16384)},h._getSubmits=function(){return this._submits},h._releaseMem=function(){if(this._submits){this._curMat.destroy(),this._curMat=null,this._shader2D.destroy(),this._shader2D=null;for(var t=0,e=this._submits._length;t<e;t++)this._submits[t].releaseRender();this._submits.length=0,this._submits._length=0,this._submits=null,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this._other&&(this._other.font=null),this._save=null,this._vb&&(this._vb.releaseResource(),this._vb.destroy(),this._vb.destory(),this._vb=null)}},h.destroy=function(){--e._contextcount,this.sprite=null,this._releaseMem(),this._targets&&this._targets.destroy(),this._targets=null,this._canvas=null,this._ib&&this._ib!=qt.QuadrangleIB&&this._ib.releaseResource()},h.clear=function(){this._submits||(this._other=a.DEFAULT,this._curMat=b.create(),this._vb=jt.create(-1),this._submits=[],this._save=[Q.Create(this)],this._save.length=10,this._shader2D=new $),this._vb.clear(),this._targets&&(this._targets.repaint=!0),this._other=a.DEFAULT,this._clear=!0,this._repaint=!1,this._drawCount=1,this._renderKey=0,this._other.lineWidth=this._shader2D.ALPHA=1,this._nBlendType=0,this._clipRect=e.MAXCLIPRECT,this._curSubmit=nt.RENDERBASE,this._shader2D.glTexture=null,this._shader2D.fillStyle=this._shader2D.strokeStyle=z.DEFAULT;for(var t=0,i=this._submits._length;t<i;t++)this._submits[t].releaseRender();this._submits._length=0,this._curMat.identity(),this._other.clear(),this._saveMark=this._save[0],this._save._length=1},h.size=function(t,e){if(this._width!=t||this._height!=e)if(0==t||0==e){0!=this._vb._byteLength&&(this._width=t,this._height=e,this._vb.clear(),this._vb.upload());for(var i=0,r=this._submits._length;i<r;i++)this._submits[i].releaseRender();this._submits.length=0,this._submits._length=0,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this.sprite=null,this._targets&&this._targets.destroy(),this._targets=null}else this._width=t,this._height=e,this._targets&&this._targets.size(t,e),this._canvas.memorySize-=this._canvas.memorySize;0===t&&0===e&&this._releaseMem()},h._getTransformMatrix=function(){return this._curMat},h.translate=function(t,e){0===t&&0===e||(q.save(this),this._curMat.bTransform&&(Z.save(this),this._curMat.transformPointN(T.TEMP.setTo(t,e)),t=T.TEMP.x,e=T.TEMP.y),this._x+=t,this._y+=e)},h.save=function(){this._save[this._save._length++]=Q.Create(this)},h.restore=function(){var t=this._save._length;if(!(t<1))for(var e=t-1;e>=0;e--){var i=this._save[e];if(i.restore(this),i.isSaveMark())return void(this._save._length=e)}},h._fillText=function(t,e,i,r,s,n,a,h,l,o){void 0===o&&(o=0);var u=this._shader2D,_=this._curSubmit.shaderValue,f=s?dt.create(s):this._other.font;if(k.enabled)u.ALPHA!==_.ALPHA&&(u.glTexture=null),ft.drawText(this,t,e,this._curMat,f,l||this._other.textAlign,n,a,h,i,r,o);else{this._shader2D.defines.getValue();var d=n?c.create(n)._color:u.colorAdd;u.ALPHA===_.ALPHA&&d===u.colorAdd&&_.colorAdd===u.colorAdd||(u.glTexture=null,u.colorAdd=d),ft.drawText(this,t,e,this._curMat,f,l||this._other.textAlign,n,a,h,i,r,o)}},h.fillWords=function(t,e,i,r,s,n){this._fillText(null,t,e,i,r,s,null,-1,null,n)},h.fillBorderWords=function(t,e,i,r,s,n,a){this._fillBorderText(null,t,e,i,r,s,n,a,null)},h.fillText=function(t,e,i,r,s,n){this._fillText(t,null,e,i,r,s,null,-1,n)},h.strokeText=function(t,e,i,r,s,n,a){this._fillText(t,null,e,i,r,null,s,n||1,a)},h.fillBorderText=function(t,e,i,r,s,n,a,h){this._fillBorderText(t,null,e,i,r,s,n,a,h)},h._fillBorderText=function(t,i,r,s,n,a,h,l,o){if(!k.enabled)return this._fillText(t,i,r,s,n,null,h,l||1,o),void this._fillText(t,i,r,s,n,a,null,-1,o);var u=this._shader2D,_=this._curSubmit.shaderValue;u.ALPHA!==_.ALPHA&&(u.glTexture=null);var c=n?(e._fontTemp.setFont(n),e._fontTemp):this._other.font;ft.drawText(this,t,i,this._curMat,c,o||this._other.textAlign,a,h,l||1,r,s,0)},h.fillRect=function(t,e,i,r,s){var n=this._vb;if(pt.fillRectImgVb(n,this._clipRect,t,e,i,r,D.DEF_UV,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var a=this._shader2D.fillStyle;s&&(this._shader2D.fillStyle=z.create(s));var h=this._shader2D,l=this._curSubmit.shaderValue;if(h.fillStyle!==l.fillStyle||h.ALPHA!==l.ALPHA){h.glTexture=null;var o=this._curSubmit=nt.createSubmit(this,this._ib,n,(n._byteLength-64)/32*3,At.create(2,0));o.shaderValue.color=h.fillStyle._color._color,o.shaderValue.ALPHA=h.ALPHA,this._submits[this._submits._length++]=o}this._curSubmit._numEle+=6,this._shader2D.fillStyle=a}},h.fillTexture=function(t,e,r,s,n,a,h,l){if(t.loaded&&t.bitmap&&t.source){var o=this._vb,u=t.bitmap.width,_=t.bitmap.height,c=t.uv,f=h.x%t.width,d=h.y%t.height;if(u!=l.w||_!=l.h){if(!l.w&&!l.h)switch(l.oy=l.ox=0,a){case"repeat":l.width=s,l.height=n;break;case"repeat-x":l.width=s,d<0?t.height+d>n?l.height=n:l.height=t.height+d:(l.oy=d,t.height+d>n?l.height=n-d:l.height=t.height);break;case"repeat-y":f<0?t.width+f>s?l.width=s:l.width=t.width+f:(l.ox=f,t.width+f>s?l.width=s-f:l.width=t.width),l.height=n;break;default:l.width=s,l.height=n}l.w=u,l.h=_,l.uv=[0,0,l.width/u,0,l.width/u,l.height/_,0,l.height/_]}if(e+=l.ox,r+=l.oy,f-=l.ox,d-=l.oy,pt.fillRectImgVb(o,this._clipRect,e,r,l.width,l.height,l.uv,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var m=Pt.create(this,this._ib,o,(o._byteLength-64)/32*3,At.create(256,0));this._submits[this._submits._length++]=m;var p=m.shaderValue;p.textureHost=t;var g=c[0]*u,v=c[1]*_,x=(c[2]-c[0])*u,b=(c[5]-c[3])*_,T=-f/u,y=-d/_;p.u_TexRange[0]=g/u,p.u_TexRange[1]=x/u,p.u_TexRange[2]=v/_,p.u_TexRange[3]=b/_,p.u_offset[0]=T,p.u_offset[1]=y,k.enabled&&!this._isMain&&m.addTexture(t,(o._byteLength>>2)-16),this._curSubmit=m,m._renderType=10017,m._numEle+=6}}else this.sprite&&i.timer.callLater(this,this._repaintSprite)},h.setShader=function(t){Y.save(this,1048576,this._shader2D,!0),this._shader2D.shader=t},h.setFilters=function(t){Y.save(this,2097152,this._shader2D,!0),this._shader2D.filters=t,this._curSubmit=nt.RENDERBASE,this._renderKey=0,this._drawCount++},h.drawTexture=function(t,e,i,r,s,n,a){this._drawTextureM(t,e,i,r,s,n,a,null,1)},h.addTextureVb=function(t,e,i){var r=this._curSubmit._vb||this._vb,s=r._byteLength>>2;r.byteLength=s+16<<2;for(var n=r.getFloat32Array(),a=0;a<16;a+=4)n[s++]=t[a]+e,n[s++]=t[a+1]+i,n[s++]=t[a+2],n[s++]=t[a+3];this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),r._upload=!0},h.willDrawTexture=function(t,e){if(!(t.loaded&&t.bitmap&&t.source))return this.sprite&&i.timer.callLater(this,this._repaintSprite),0;var r=t.bitmap,s=r.id+this._shader2D.ALPHA*e+10016;if(s==this._renderKey)return s;var n=this._shader2D,a=n.ALPHA,h=this._curSubmit.shaderValue;n.ALPHA*=e,this._renderKey=s,this._drawCount++,n.glTexture=r;var l=this._vb,o=null,u=l._byteLength/32*3;return o=Pt.create(this,this._ib,l,u,At.create(1,0)),this._submits[this._submits._length++]=o,o.shaderValue.textureHost=t,o._renderType=10016,o._preIsSameTextureShader=10016===this._curSubmit._renderType&&n.ALPHA===h.ALPHA,this._curSubmit=o,n.ALPHA=a,s},h.drawTextures=function(t,r,s,n){if(t.loaded&&t.bitmap&&t.source){var a=this._clipRect;if(this._clipRect=e.MAXCLIPRECT,this._drawTextureM(t,r[0],r[1],t.width,t.height,s,n,null,1)){if(this._clipRect=a,C.drawCall++,!(r.length<4)){for(var h=this._curSubmit._vb||this._vb,l=this._curMat.a,o=this._curMat.d,u=2,_=r.length;u<_;u+=2)pt.copyPreImgVb(h,(r[u]-r[u-2])*l,(r[u+1]-r[u-1])*o),this._curSubmit._numEle+=6;this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle)}}else alert("drawTextures err")}else this.sprite&&i.timer.callLater(this,this._repaintSprite)},h._drawTextureM=function(t,e,r,s,n,a,h,l,o){if(!t.loaded||!t.source)return this.sprite&&i.timer.callLater(this,this._repaintSprite),!1;var u=this._curSubmit._vb||this._vb,_=t.bitmap;e+=a,r+=h,this._drawCount++;var c=_.id+this._shader2D.ALPHA*o+10016;if(c!=this._renderKey){this._renderKey=c;var f=this._curSubmit.shaderValue,d=this._shader2D,m=d.ALPHA;d.ALPHA*=o,d.glTexture=_;var p=this._vb,g=null,v=p._byteLength/32*3;g=Pt.create(this,this._ib,p,v,At.create(1,0)),this._submits[this._submits._length++]=g,g.shaderValue.textureHost=t,g._renderType=10016,g._preIsSameTextureShader=10016===this._curSubmit._renderType&&d.ALPHA===f.ALPHA,this._curSubmit=g,u=this._curSubmit._vb||this._vb,d.ALPHA=m}return!!pt.fillRectImgVb(u,this._clipRect,e,r,s||t.width,n||t.height,t.uv,l||this._curMat,this._x,this._y,0,0)&&(k.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(u._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),!0)},h._repaintSprite=function(){this.sprite&&this.sprite.repaint()},h._drawText=function(t,e,i,r,s,n,a,h,l,o){var u=t.bitmap;this._drawCount++;var _=u.id+this._shader2D.ALPHA+10016;if(_!=this._renderKey){this._renderKey=_;var c=this._curSubmit.shaderValue,f=this._shader2D;f.glTexture=u;var d=this._vb,m=null,p=d._byteLength/32*3;(m=k.enabled?Pt.create(this,this._ib,d,p,At.create(1,0)):Pt.create(this,this._ib,d,p,Qt.create()))._preIsSameTextureShader=10016===this._curSubmit._renderType&&f.ALPHA===c.ALPHA,this._submits[this._submits._length++]=m,m.shaderValue.textureHost=t,m._renderType=10016,this._curSubmit=m}t.active();var g=this._curSubmit._vb||this._vb;pt.fillRectImgVb(g,this._clipRect,e+a,i+h,r||t.width,s||t.height,t.uv,n||this._curMat,this._x,this._y,l,o,!0)&&(k.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(g._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle))},h.drawTextureWithTransform=function(t,i,r,s,n,a,h,l,o){if(a){var u=this._curMat,_=this._x,c=this._y;(0!==h||0!==l)&&(this._x=h*u.a+l*u.c,this._y=l*u.d+h*u.b),a&&u.bTransform?(b.mul(a,u,e._tmpMatrix),(a=e._tmpMatrix)._checkTransform()):(this._x+=u.tx,this._y+=u.ty),this._drawTextureM(t,i,r,s,n,0,0,a,o),this._x=_,this._y=c}else this._drawTextureM(t,i,r,s,n,h,l,null,o)},h.fillQuadrangle=function(t,e,i,r,s){var n=this._curSubmit,a=this._vb,h=this._shader2D,l=n.shaderValue;if(this._renderKey=0,t.bitmap){var o=t.bitmap;h.glTexture==o&&h.ALPHA===l.ALPHA||(h.glTexture=o,(n=this._curSubmit=nt.createSubmit(this,this._ib,a,a._byteLength/32*3,At.create(1,0))).shaderValue.glTexture=o,this._submits[this._submits._length++]=n),pt.fillQuadrangleImgVb(a,e,i,r,t.uv,s||this._curMat,this._x,this._y)}else n.shaderValue.fillStyle&&n.shaderValue.fillStyle.equal(t)&&h.ALPHA===l.ALPHA||(h.glTexture=null,(n=this._curSubmit=nt.createSubmit(this,this._ib,a,a._byteLength/32*3,At.create(2,0))).shaderValue.defines.add(2),n.shaderValue.fillStyle=z.create(t),this._submits[this._submits._length++]=n),pt.fillQuadrangleImgVb(a,e,i,r,D.DEF_UV,s||this._curMat,this._x,this._y);n._numEle+=6},h.drawTexture2=function(t,i,r,s,n,a,h,l){if(0!=a){var o=this._curMat;if(this._x=t*o.a+i*o.c,this._y=i*o.d+t*o.b,n&&(o.bTransform||n.bTransform?(b.mul(n,o,e._tmpMatrix),n=e._tmpMatrix):(this._x+=n.tx+o.tx,this._y+=n.ty+o.ty,n=b.EMPTY)),1!==a||h){var u=this._shader2D.ALPHA,_=this._nBlendType;this._shader2D.ALPHA=a,h&&(this._nBlendType=G.TOINT(h)),this._drawTextureM(l[0],l[1]-r,l[2]-s,l[3],l[4],0,0,n,1),this._shader2D.ALPHA=u,this._nBlendType=_}else this._drawTextureM(l[0],l[1]-r,l[2]-s,l[3],l[4],0,0,n,1);this._x=this._y=0}},h.drawCanvas=function(t,e,i,r,s){var n=t.context;if(this._renderKey=0,n._targets)this._submits[this._submits._length++]=Lt.create(n,0,null),this._curSubmit=nt.RENDERBASE,n._targets.drawTo(this,e,i,r,s);else{var a=this._submits[this._submits._length++]=Lt.create(n,this._shader2D.ALPHA,this._shader2D.filters),h=r/t.width,l=s/t.height,o=a._matrix;this._curMat.copyTo(o),1!=h&&1!=l&&o.scale(h,l);var u=o.tx,_=o.ty;o.tx=o.ty=0,o.transformPoint(T.TEMP.setTo(e,i)),o.translate(T.TEMP.x+u,T.TEMP.y+_),this._curSubmit=nt.RENDERBASE}f.showCanvasMark&&(this.save(),this.lineWidth=4,this.strokeStyle=n._targets?"yellow":"green",this.strokeRect(e-1,i-1,r+2,s+2,1),this.strokeRect(e,i,r,s,1),this.restore())},h.drawTarget=function(t,e,i,r,s,n,a,h,l,o){void 0===o&&(o=-1);var u=this._vb;if(pt.fillRectImgVb(u,this._clipRect,e,i,r,s,l||D.DEF_UV,n||this._curMat,this._x,this._y,0,0)){this._renderKey=0;this._shader2D.glTexture=null;this._curSubmit.shaderValue;var _=this._curSubmit=_t.create(this,this._ib,u,(u._byteLength-64)/32*3,h,a);_.blendType=-1==o?this._nBlendType:o,_.scope=t,this._submits[this._submits._length++]=_,this._curSubmit._numEle+=6}},h.transform=function(t,e,i,r,s,n){Z.save(this),b.mul(b.TEMP.setTo(t,e,i,r,s,n),this._curMat,this._curMat),this._curMat._checkTransform()},h.setTransformByMatrix=function(t){t.copyTo(this._curMat)},h.transformByMatrix=function(t){Z.save(this),b.mul(t,this._curMat,this._curMat),this._curMat._checkTransform()},h.rotate=function(t){Z.save(this),this._curMat.rotateEx(t)},h.scale=function(t,e){Z.save(this),this._curMat.scaleEx(t,e)},h.clipRect=function(t,e,i,r){if(0!=this._curMat.b||0!=this._curMat.c){this._renderKey=0;var s=ut.create(4);this.addRenderObject(s);var n=this._vb,a=n._byteLength>>2;if(pt.fillRectImgVb(n,null,t,e,i,r,D.DEF_UV,this._curMat,this._x,this._y,0,0)){this._shader2D.glTexture=null;var h=this._curSubmit=nt.createSubmit(this,this._ib,n,(n._byteLength-64)/32*3,At.create(2,0));h.shaderValue.ALPHA=1,this._submits[this._submits._length++]=h,this._curSubmit._numEle+=6}else alert("clipRect calc stencil rect error");var l=ut.create(5);this.addRenderObject(l);var o=n.getFloat32Array(),u=Math.min(Math.min(Math.min(o[a+0],o[a+4]),o[a+8]),o[a+12]),_=Math.max(Math.max(Math.max(o[a+0],o[a+4]),o[a+8]),o[a+12]),c=Math.min(Math.min(Math.min(o[a+1],o[a+5]),o[a+9]),o[a+13]),f=Math.max(Math.max(Math.max(o[a+1],o[a+5]),o[a+9]),o[a+13]);K.save(this,l,t,e,i,r,u,c,_-u,f-c),this._curSubmit=nt.RENDERBASE}else{i*=this._curMat.a,r*=this._curMat.d;var d=T.TEMP;this._curMat.transformPoint(d.setTo(t,e)),i<0&&(d.x=d.x+i,i=-i),r<0&&(d.y=d.y+r,r=-r),this._renderKey=0;var m=this._curSubmit=ot.create(this);this._submits[this._submits._length++]=m,m.submitIndex=this._submits._length,m.submitLength=9999999,X.save(this,m);var p=this._clipRect,g=p.x,v=p.y,x=d.x+i,b=d.y+r;g<d.x&&(p.x=d.x),v<d.y&&(p.y=d.y),p.width=Math.min(x,g+p.width)-p.x,p.height=Math.min(b,v+p.height)-p.y,this._shader2D.glTexture=null,m.clipRect.copyFrom(p),this._curSubmit=nt.RENDERBASE}},h.setIBVB=function(t,e,i,r,s,n,a,h,l,o,u){if(void 0===l&&(l=0),void 0===o&&(o=0),void 0===u&&(u=0),null===i){if(A.isFlash){var _=r;_._selfIB||(_._selfIB=qt.create(35044)),_._selfIB.clear(),i=_._selfIB}else i=this._ib;pt.expandIBQuadrangle(i,r._byteLength/(4*r.vertexStride*4))}if(!h||!a)throw Error("setIBVB must input:shader shaderValues");var c=lt.create(this,r,i,s,a,h,l,o,u);n||(n=b.EMPTY),n.translate(t,e),b.mul(n,this._curMat,c._mat),n.translate(-t,-e),this._submits[this._submits._length++]=c,this._curSubmit=nt.RENDERBASE,this._renderKey=0},h.addRenderObject=function(t){this._submits[this._submits._length++]=t},h.fillTrangles=function(t,e,i,r,s){var n=this._curSubmit,a=this._vb,h=this._shader2D,l=n.shaderValue,o=r.length>>4,u=t.bitmap;this._renderKey=0,h.glTexture==u&&h.ALPHA===l.ALPHA||((n=this._curSubmit=nt.createSubmit(this,this._ib,a,a._byteLength/32*3,At.create(1,0))).shaderValue.textureHost=t,this._submits[this._submits._length++]=n),pt.fillTranglesVB(a,e,i,r,s||this._curMat,this._x,this._y),n._numEle+=6*o},h.submitElement=function(t,e){var i=this._submits;for(e<0&&(e=i._length);t<e;)t+=i[t].renderSubmit()},h.finish=function(){xt.mainContext.finish()},h.flush=function(){var t=Math.max(this._vb._byteLength/64,this._maxNumEle/6)+8;if(t>this._ib.bufferLength/12&&pt.expandIBQuadrangle(this._ib,t),!this._isMain&&k.enabled&&k._atlasRestore>this._atlasResourceChange){this._atlasResourceChange=k._atlasRestore;for(var e=this._submits,i=0,r=e._length;i<r;i++){var s=e[i];10016===s.getRenderType()&&s.checkTexture()}}return this.submitElement(0,this._submits._length),this._path&&this._path.reset(),et.instance&&et.getInstance().reset(),this._curSubmit=nt.RENDERBASE,this._renderKey=0,this._submits._length},h.setPathId=function(t){if(this.mId=t,-1!=this.mId){this.mHaveKey=!1;var e=N.getInstance();e.shapeDic[this.mId]&&(this.mHaveKey=!0),this.mHaveLineKey=!1,e.shapeLineDic[this.mId]&&(this.mHaveLineKey=!0)}},h.movePath=function(t,e){var i=t,r=e;t=this._curMat.a*i+this._curMat.c*r+this._curMat.tx,e=this._curMat.b*i+this._curMat.d*r+this._curMat.ty,this.mX+=t,this.mY+=e},h.beginPath=function(){var t=this._getPath();t.tempArray.length=0,t.closePath=!1,this.mX=0,this.mY=0},h.closePath=function(){this._path.closePath=!0},h.fill=function(t){void 0===t&&(t=!1);var e=this._getPath();this.drawPoly(0,0,e.tempArray,this.fillStyle._color.numColor,0,0,t)},h.stroke=function(){var t=this._getPath();if(this.lineWidth>0){if(-1==this.mId)t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor);else if(this.mHaveLineKey){var e=N.getInstance().shapeLineDic[this.mId];e.rebuild(t.tempArray),t.setGeomtry(e)}else N.getInstance().addLine(this.mId,t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor));t.update();var i=[this.mX,this.mY],r=nt.createShape(this,t.ib,t.vb,t.count,t.offset,At.create(4,0));r.shaderValue.ALPHA=this._shader2D.ALPHA,r.shaderValue.u_pos=i,r.shaderValue.u_mmat2=gt.TEMPMAT4_ARRAY,this._submits[this._submits._length++]=r}},h.line=function(t,e,i,r,s,n){var a=this._curSubmit,h=this._vb;if(pt.fillLineVb(h,this._clipRect,t,e,i,r,s,n)){this._renderKey=0;var l=this._shader2D,o=a.shaderValue;l.strokeStyle===o.strokeStyle&&l.ALPHA===o.ALPHA||(l.glTexture=null,(a=this._curSubmit=nt.createSubmit(this,this._ib,h,(h._byteLength-64)/32*3,At.create(2,0))).shaderValue.strokeStyle=l.strokeStyle,a.shaderValue.mainID=2,a.shaderValue.ALPHA=l.ALPHA,this._submits[this._submits._length++]=a),a._numEle+=6}},h.moveTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,n=e;t=this._curMat.a*s+this._curMat.c*n,e=this._curMat.b*s+this._curMat.d*n}r.addPoint(t,e)},h.lineTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,n=e;t=this._curMat.a*s+this._curMat.c*n,e=this._curMat.b*s+this._curMat.d*n}r.addPoint(t,e)},h.drawCurves=function(t,e,i){this.setPathId(-1),this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var r=i[2];t+=i[0],e+=i[1],this.movePath(t,e),this.moveTo(r[0],r[1]);for(var s=2,n=r.length;s<n;)this.quadraticCurveTo(r[s++],r[s++],r[s++],r[s++]);this.stroke()},h.arcTo=function(t,i,r,s,n){if(-1==this.mId||!this.mHaveKey){var a=0,h=0,l=0,o=this._getPath();this._curMat.copyTo(e._tmpMatrix),e._tmpMatrix.tx=e._tmpMatrix.ty=0,e._tempPoint.setTo(o.getEndPointX(),o.getEndPointY()),e._tmpMatrix.invertTransformPoint(e._tempPoint);var u=e._tempPoint.x-t,_=e._tempPoint.y-i,c=Math.sqrt(u*u+_*_);if(!(c<=1e-6)){var f=u/c,d=_/c,m=r-t,p=s-i,g=m*m+p*p,v=Math.sqrt(g);if(!(v<=1e-6)){var x=m/v,b=p/v,T=f+x,y=d+b,A=Math.sqrt(T*T+y*y);if(!(A<=1e-6)){var E=T/A,S=y/A,w=Math.acos(E*f+S*d),R=Math.PI/2-w,I=(c=n/Math.tan(R))*f+t,M=c*d+i,C=Math.sqrt(c*c+n*n),L=t+E*C,P=i+S*C,F=0,D=0,B=0;if(f*b-d*x>=0){var N=(F=2*R)/e.SEGNUM;D=Math.sin(N),B=Math.cos(N)}else N=(F=2*-R)/e.SEGNUM,D=Math.sin(N),B=Math.cos(N);h=this._curMat.a*I+this._curMat.c*M,l=this._curMat.b*I+this._curMat.d*M,h==this._path.getEndPointX()&&l==this._path.getEndPointY()||o.addPoint(h,l);var O=I-L,V=M-P;for(a=0;a<e.SEGNUM;a++){var U=O*B+V*D,k=-O*D+V*B;h=U+L,l=k+P,t=this._curMat.a*h+this._curMat.c*l,l=i=this._curMat.b*h+this._curMat.d*l,(h=t)==this._path.getEndPointX()&&l==this._path.getEndPointY()||o.addPoint(h,l),O=U,V=k}}}}}},h.arc=function(t,e,i,r,s,n,a){if(void 0===n&&(n=!1),void 0===a&&(a=!0),-1!=this.mId){var h=N.getInstance().shapeDic[this.mId];if(h&&this.mHaveKey&&!h.needUpdate(this._curMat))return;t=0,e=0}var l=0,o=0,u=0,_=0,c=0,f=0,d=0,m=0;if(o=s-r,n)if(Math.abs(o)>=2*Math.PI)o=2*-Math.PI;else for(;o>0;)o-=2*Math.PI;else if(Math.abs(o)>=2*Math.PI)o=2*Math.PI;else for(;o<0;)o+=2*Math.PI;u=o/(m=i<101?Math.max(10,o*i/5):i<201?Math.max(10,o*i/20):Math.max(10,o*i/40))/2,_=Math.abs(4/3*(1-Math.cos(u))/Math.sin(u)),n&&(_=-_);var p=this._getPath(),g=NaN,v=NaN;for(d=0;d<=m;d++)l=r+o*(d/m),c=t+Math.cos(l)*i,f=e+Math.sin(l)*i,a&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f);c=t+Math.cos(s)*i,f=e+Math.sin(s)*i,a&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f)},h.quadraticCurveTo=function(t,e,i,r){var s=l.I,n=i,a=r;i=this._curMat.a*n+this._curMat.c*a,r=this._curMat.b*n+this._curMat.d*a,n=t,a=e,t=this._curMat.a*n+this._curMat.c*a,e=this._curMat.b*n+this._curMat.d*a;for(var h=s.getBezierPoints([this._path.getEndPointX(),this._path.getEndPointY(),t,e,i,r],30,2),o=0,u=h.length/2;o<u;o++)this.lineTo(h[2*o],h[2*o+1],!1);this.lineTo(i,r,!1)},h.rect=function(t,e,i,r){this._other=this._other.make(),this._other.path||(this._other.path=new W),this._other.path.rect(t,e,i,r)},h.strokeRect=function(t,e,i,r,s){var n=.5*s;this.line(t-n,e,t+i+n,e,s,this._curMat),this.line(t+i,e,t+i,e+r,s,this._curMat),this.line(t,e,t,e+r,s,this._curMat),this.line(t-n,e+r,t+i+n,e+r,s,this._curMat)},h.clip=function(){},h.drawPoly=function(t,e,i,r,s,n,a){void 0===a&&(a=!1),this._renderKey=0,this._shader2D.glTexture=null;var h=this._getPath();if(-1==this.mId)h.polygon(t,e,i,r,s||1,n);else if(this.mHaveKey){var l=N.getInstance().shapeDic[this.mId];l.setMatrix(this._curMat),l.rebuild(h.tempArray),h.setGeomtry(l)}else{var o=h.polygon(t,e,i,r,s||1,n);N.getInstance().addShape(this.mId,o),o.setMatrix(this._curMat)}h.update();var u,_=[this.mX,this.mY];if(u=nt.createShape(this,h.ib,h.vb,h.count,h.offset,At.create(4,0)),u.shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_pos=_,u.shaderValue.u_mmat2=gt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u,s>0){if(this.mHaveLineKey){var c=N.getInstance().shapeLineDic[this.mId];c.rebuild(h.tempArray),h.setGeomtry(c)}else N.getInstance().addShape(this.mId,h.drawLine(t,e,i,s,n));h.update(),(u=nt.createShape(this,h.ib,h.vb,h.count,h.offset,At.create(4,0))).shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_mmat2=gt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u}},h.drawParticle=function(t,e,i){i.x=t,i.y=e,this._submits[this._submits._length++]=i},h._getPath=function(){return this._path||(this._path=new W)},n(0,h,"globalCompositeOperation",function(){return G.NAMES[this._nBlendType]},function(t){var e=G.TOINT[t];null==e||this._nBlendType===e||(Y.save(this,65536,this,!0),this._curSubmit=nt.RENDERBASE,this._renderKey=0,this._nBlendType=e)}),n(0,h,"strokeStyle",function(){return this._shader2D.strokeStyle},function(t){this._shader2D.strokeStyle.equal(t)||(Y.save(this,512,this._shader2D,!1),this._shader2D.strokeStyle=z.create(t))}),n(0,h,"globalAlpha",function(){return this._shader2D.ALPHA},function(t){(t=Math.floor(1e3*t)/1e3)!=this._shader2D.ALPHA&&(Y.save(this,1,this._shader2D,!0),this._shader2D.ALPHA=t)}),n(0,h,"asBitmap",null,function(t){if(t){if(this._targets||(this._targets=new j),this._targets.repaint=!0,!this._width||!this._height)throw Error("asBitmap no size!");this._targets.setSP(this.sprite),this._targets.size(this._width,this._height)}else this._targets=null}),n(0,h,"fillStyle",function(){return this._shader2D.fillStyle},function(t){this._shader2D.fillStyle.equal(t)||(Y.save(this,2,this._shader2D,!1),this._shader2D.fillStyle=z.create(t))}),n(0,h,"textAlign",function(){return this._other.textAlign},function(t){this._other.textAlign===t||(this._other=this._other.make(),Y.save(this,32768,this._other,!1),this._other.textAlign=t)}),n(0,h,"lineWidth",function(){return this._other.lineWidth},function(t){this._other.lineWidth===t||(this._other=this._other.make(),Y.save(this,256,this._other,!1),this._other.lineWidth=t)}),n(0,h,"textBaseline",function(){return this._other.textBaseline},function(t){this._other.textBaseline===t||(this._other=this._other.make(),Y.save(this,16384,this._other,!1),this._other.textBaseline=t)}),n(0,h,"font",null,function(t){t!=this._other.font.toString()&&(this._other=this._other.make(),Y.save(this,8,this._other,!1),this._other.font===dt.EMPTY?this._other.font=new dt(t):this._other.font.setFont(t))}),e.__init__=function(){a.DEFAULT=new a},e._SUBMITVBSIZE=32e3,e._MAXSIZE=99999999,e._RECTVBSIZE=16,e._COUNT=0,e.SEGNUM=32,e._contextcount=0,r(e,["_tempPoint",function(){return this._tempPoint=new T},"MAXCLIPRECT",function(){return this.MAXCLIPRECT=new y(0,0,99999999,99999999)},"_tmpMatrix",function(){return this._tmpMatrix=new b},"_fontTemp",function(){return this._fontTemp=new dt},"_drawStyleTemp",function(){return this._drawStyleTemp=new z(null)}]),e.__init$=function(){a=function(){function t(){this.lineWidth=1,this.path=null,this.textAlign=null,this.textBaseline=null,this.font=dt.EMPTY}s(t,"");var e=t.prototype;return e.clear=function(){this.lineWidth=1,this.path&&this.path.clear(),this.textAlign=this.textBaseline=null,this.font=dt.EMPTY},e.make=function(){return this===t.DEFAULT?new t:this},t.DEFAULT=null,t}()},e}(),At=function(t){function e(t,i){this.size=[0,0],this.alpha=1,this.ALPHA=1,this.subID=0,this._cacheID=0,e.__super.call(this),this.defines=new Rt,this.position=e._POSITION,this.mainID=t,this.subID=i,this.textureHost=null,this.texture=null,this.fillStyle=null,this.color=null,this.strokeStyle=null,this.colorAdd=null,this.glTexture=null,this.u_mmat2=null,this._cacheID=t|i,this._inClassCache=e._cache[this._cacheID],t>0&&!this._inClassCache&&(this._inClassCache=e._cache[this._cacheID]=[],this._inClassCache._length=0),this.clear()}s(e,"laya.webgl.shader.d2.value.Value2D",V);var i=e.prototype;return i.setValue=function(t){},i.refresh=function(){var t=this.size;return t[0]=gt.width,t[1]=gt.height,this.alpha=this.ALPHA*gt.worldAlpha,this.mmat=gt.worldMatrix4,this},i._ShaderWithCompile=function(){return Xt.withCompile2D(0,this.mainID,this.defines.toNameDic(),this.mainID|this.defines._value,Zt.create)},i._withWorldShaderDefines=function(){var t=gt.worldShaderDefines,e=Xt.sharders[this.mainID|this.defines._value|t.getValue()];if(!e){var i,r,s={};i=this.defines.toNameDic();for(r in i)s[r]="";i=t.toNameDic();for(r in i)s[r]="";e=Xt.withCompile2D(0,this.mainID,s,this.mainID|this.defines._value|t.getValue(),Zt.create)}var n=gt.worldFilters;if(!n)return e;for(var a,h=n.length,l=0;l<h;l++)(a=n[l])&&a.action.setValue(this);return e},i.upload=function(){var t=gt;this.alpha=this.ALPHA*t.worldAlpha,gt.worldMatrix4!==gt.TEMPMAT4_ARRAY&&this.defines.add(128),xt.shaderHighPrecision&&this.defines.add(1024);var e,i=t.worldShaderDefines?this._withWorldShaderDefines():Xt.sharders[this.mainID|this.defines._value]||this._ShaderWithCompile();this.size[0]=t.width,this.size[1]=t.height,this.mmat=t.worldMatrix4,Ft.activeShader!==i?(i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick2||i._make2dQuick2(),i.upload(this,e)):(i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick1||i._make2dQuick1(),i.upload(this,e))},i.setFilters=function(t){if(this.filters=t,t)for(var e,i=t.length,r=0;r<i;r++)(e=t[r])&&(this.defines.add(e.type),e.action.setValue(this))},i.clear=function(){this.defines.setValue(this.subID)},i.release=function(){this._inClassCache[this._inClassCache._length++]=this,this.fillStyle=null,this.strokeStyle=null,this.clear()},e._initone=function(t,i){e._typeClass[t]=i,e._cache[t]=[],e._cache[t]._length=0},e.__init__=function(){e._POSITION=[2,5126,!1,4*mt.BYTES_PE,0],e._TEXCOORD=[2,5126,!1,4*mt.BYTES_PE,2*mt.BYTES_PE],e._initone(2,Ot),e._initone(4,kt),e._initone(256,Vt),e._initone(512,Nt),e._initone(1,Ut),e._initone(65,Qt),e._initone(9,Ut)},e.create=function(t,i){var r=e._cache[t|i];return r._length?r[--r._length]:new e._typeClass[t|i](i)},e._POSITION=null,e._TEXCOORD=null,e._cache=[],e._typeClass=[],r(e,["TEMPMAT4_ARRAY",function(){return this.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}]),e}(),Et=function(t){function e(t,i){e.__super.call(this,t,i)}s(e,"laya.webgl.utils.RenderSprite3D",E);var i=e.prototype;return i.onCreate=function(t){switch(t){case 8:return void(this._fun=this._blend);case 4:return void(this._fun=this._transform)}},i._mask=function(t,i,r,s){var n,a,h=this._next,l=t.mask;if(l){i.ctx.save();var o=i.ctx.globalCompositeOperation,u=new y;if(u.copyFrom(l.getBounds()),u.width=Math.round(u.width),u.height=Math.round(u.height),u.x=Math.round(u.x),u.y=Math.round(u.y),u.width>0&&u.height>0){var _=t._style._tf,c=ht.create();c.addValue("bounds",u),n=at.create([c,i],laya.webgl.utils.RenderSprite3D.tmpTarget),i.addRenderObject(n),l.render(i,-u.x,-u.y),n=at.create([c],laya.webgl.utils.RenderSprite3D.endTmpTarget),i.addRenderObject(n),i.ctx.save(),i.clipRect(r-_.translateX+u.x,s-_.translateY+u.y,u.width,u.height),h._fun.call(h,t,i,r,s),i.ctx.restore(),a=ut.create(6),o=i.ctx.globalCompositeOperation,a.blendMode="mask",i.addRenderObject(a),b.TEMP.identity();var f=At.create(1,0),d=D.INV_UV,m=u.width,p=u.height;(u.width<32||u.height<32)&&((d=e.tempUV)[0]=0,d[1]=0,d[2]=u.width>=32?1:u.width/32,d[3]=0,d[4]=u.width>=32?1:u.width/32,d[5]=u.height>=32?1:u.height/32,d[6]=0,d[7]=u.height>=32?1:u.height/32,u.width=u.width>=32?u.width:32,u.height=u.height>=32?u.height:32,d[1]*=-1,d[3]*=-1,d[5]*=-1,d[7]*=-1,d[1]+=1,d[3]+=1,d[5]+=1,d[7]+=1),i.ctx.drawTarget(c,r+u.x-_.translateX,s+u.y-_.translateY,m,p,b.TEMP,"tmpTarget",f,d,6),n=at.create([c],laya.webgl.utils.RenderSprite3D.recycleTarget),i.addRenderObject(n),(a=ut.create(6)).blendMode=o,i.addRenderObject(a)}i.ctx.restore()}else h._fun.call(h,t,i,r,s)},i._blend=function(t,e,i,r){var s=t._style,n=this._next;s.blendMode?(e.ctx.save(),e.ctx.globalCompositeOperation=s.blendMode,n._fun.call(n,t,e,i,r),e.ctx.restore()):n._fun.call(n,t,e,i,r)},i._transform=function(t,e,i,r){"use strict";var s=t.transform,n=this._next;if(s&&n!=E.NORENDER){var a=e.ctx;t._style;s.tx=i,s.ty=r;var h=a._getTransformMatrix(),l=h.clone();b.mul(s,h,h),h._checkTransform(),s.tx=s.ty=0,n._fun.call(n,t,e,0,0),l.copyTo(h),l.destroy()}else n._fun.call(n,t,e,i,r)},e.tmpTarget=function(t,e){var i=t.getValue("bounds"),r=Dt.create(i.width,i.height);r.start(),r.clear(0,0,0,0),t.addValue("tmpTarget",r)},e.endTmpTarget=function(t){t.getValue("tmpTarget").end()},e.recycleTarget=function(t){t.getValue("tmpTarget").recycle(),t.recycle()},r(e,["tempUV",function(){return this.tempUV=new Array(8)}]),e}(),St=function(t){function e(){this.data=null,e.__super.call(this)}s(e,"laya.filters.webgl.ColorFilterActionGL",O);var r=e.prototype;return i.imps(r,{"laya.filters.IFilterActionGL":!0}),r.setValue=function(t){t.colorMat=this.data._mat,t.colorAlpha=this.data._alpha},r.apply3d=function(t,e,i,r,s){var n=t.getValue("bounds"),a=At.create(1,0);a.setFilters([this.data]);var h=b.TEMP;h.identity(),i.ctx.drawTarget(t,0,0,n.width,n.height,h,"src",a)},e}(),wt=function(t){function e(t,i,r,s,n){this._atlasCanvas=null,this._inAtlasTextureKey=null,this._inAtlasTextureBitmapValue=null,this._inAtlasTextureOriUVValue=null,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue=null,e.__super.call(this,t,i,n),this._inAtlasTextureKey=[],this._inAtlasTextureBitmapValue=[],this._inAtlasTextureOriUVValue=[],this._InAtlasWebGLImagesKey={},this._InAtlasWebGLImagesOffsetValue=[],this._atlasCanvas=new Ht,this._atlasCanvas._atlaser=this,this._atlasCanvas.width=r,this._atlasCanvas.height=s,this._atlasCanvas.activeResource(),this._atlasCanvas.lock=!0}s(e,"laya.webgl.atlas.Atlaser",U);var i=e.prototype;return i.computeUVinAtlasTexture=function(t,e,i,r){var s=k.atlasTextureWidth,n=k.atlasTextureHeight,a=i/s,h=r/n,l=(i+t.bitmap.width)/s,o=(r+t.bitmap.height)/n,u=t.bitmap.width/s,_=t.bitmap.height/n;t.uv=[a+e[0]*u,h+e[1]*_,l-(1-e[2])*u,h+e[3]*_,l-(1-e[4])*u,o-(1-e[5])*_,a+e[6]*u,o-(1-e[7])*_]},i.findBitmapIsExist=function(t){if(t instanceof laya.webgl.resource.WebGLImage){var e=t,i=e.url,r=this._InAtlasWebGLImagesKey[i||e.id];if(r)return r.offsetInfoID}return-1},i.addToAtlasTexture=function(t,e,i){if(t instanceof laya.webgl.resource.WebGLImage){var r=t,s=r.url;this._InAtlasWebGLImagesKey[s||r.id]={bitmap:t,offsetInfoID:this._InAtlasWebGLImagesOffsetValue.length},this._InAtlasWebGLImagesOffsetValue.push([e,i])}this._atlasCanvas.texSubImage2D(e,i,t.atlasSource),t.clearAtlasSource()},i.addToAtlas=function(t,e,i){t._atlasID=this._inAtlasTextureKey.length;var r=t.uv.slice(),s=t.bitmap;this._inAtlasTextureKey.push(t),this._inAtlasTextureOriUVValue.push(r),this._inAtlasTextureBitmapValue.push(s),this.computeUVinAtlasTexture(t,r,e,i),t.bitmap=this._atlasCanvas},i.clear=function(){for(var t=0,e=this._inAtlasTextureKey.length;t<e;t++)this._inAtlasTextureKey[t].bitmap=this._inAtlasTextureBitmapValue[t],this._inAtlasTextureKey[t].uv=this._inAtlasTextureOriUVValue[t],this._inAtlasTextureKey[t]._atlasID=-1,this._inAtlasTextureKey[t].bitmap.lock=!1,this._inAtlasTextureKey[t].bitmap.releaseResource();this._inAtlasTextureKey.length=0,this._inAtlasTextureBitmapValue.length=0,this._inAtlasTextureOriUVValue.length=0,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue.length=0},i.dispose=function(){this.clear(),this._atlasCanvas.destroy()},n(0,i,"InAtlasWebGLImagesOffsetValue",function(){return this._InAtlasWebGLImagesOffsetValue}),n(0,i,"texture",function(){return this._atlasCanvas}),n(0,i,"inAtlasWebGLImagesKey",function(){return this._InAtlasWebGLImagesKey}),e}(),Rt=function(t){function e(){e.__super.call(this,e.__name2int,e.__int2name,e.__int2nameMap)}return s(e,"laya.webgl.shader.d2.ShaderDefines2D",J),e.__init__=function(){e.reg("TEXTURE2D",1),e.reg("COLOR2D",2),e.reg("PRIMITIVE",4),e.reg("GLOW_FILTER",8),e.reg("BLUR_FILTER",16),e.reg("COLOR_FILTER",32),e.reg("COLOR_ADD",64),e.reg("WORLDMAT",128),e.reg("FILLTEXTURE",256),e.reg("FSHIGHPRECISION",1024)},e.reg=function(t,i){J._reg(t,i,e.__name2int,e.__int2name)},e.toText=function(t,e,i){return J._toText(t,e,i)},e.toInt=function(t){return J._toInt(t,e.__name2int)},e.TEXTURE2D=1,e.COLOR2D=2,e.PRIMITIVE=4,e.FILTERGLOW=8,e.FILTERBLUR=16,e.FILTERCOLOR=32,e.COLORADD=64,e.WORLDMAT=128,e.FILLTEXTURE=256,e.SKINMESH=512,e.SHADERDEFINE_FSHIGHPRECISION=1024,e.__name2int={},e.__int2name=[],e.__int2nameMap=[],e}(),It=(function(t){function e(t,i,r,s,n,a,h){e.__super.call(this,t,i,r,s,40,n,a,h)}s(e,"laya.webgl.shapes.Ellipse",it)}(),function(t){function e(t,i,r,s,n){this._points=[],this.rebuild(r),e.__super.call(this,t,i,0,0,0,n,s,n,0)}s(e,"laya.webgl.shapes.Line",it);var i=e.prototype;return i.rebuild=function(t){var e=t.length;e!=this._points.length&&(this.mUint16Array=new Uint16Array(6*(e/2-1)),this.mFloat32Array=new Float32Array(5*e)),this._points.length=0;for(var i=NaN,r=NaN,s=-1,n=-1,a=t.length/2,h=0;h<a;h++)i=t[2*h],r=t[2*h+1],(Math.abs(s-i)>.01||Math.abs(n-r)>.01)&&this._points.push(i,r),s=i,n=r},i.getData=function(t,e,i){var r=[],s=[];this.borderWidth>0&&this.createLine2(this._points,r,this.borderWidth,i,s,this._points.length/2),this.mUint16Array.set(r,0),this.mFloat32Array.set(s,0),t.append(this.mUint16Array),e.append(this.mFloat32Array)},e}()),Mt=function(t){function e(t,i,r,s,n){this._points=[];for(var a=NaN,h=NaN,l=-1,o=-1,u=r.length/2-1,_=0;_<u;_++)a=r[2*_],h=r[2*_+1],(Math.abs(l-a)>.01||Math.abs(o-h)>.01)&&this._points.push(a,h),l=a,o=h;a=r[2*u],h=r[2*u+1],l=this._points[0],o=this._points[1],(Math.abs(l-a)>.01||Math.abs(o-h)>.01)&&this._points.push(a,h),e.__super.call(this,t,i,0,0,this._points.length/2,0,s,n)}s(e,"laya.webgl.shapes.LoopLine",it);var i=e.prototype;return i.getData=function(t,e,i){if(this.borderWidth>0){for(var r=this.color,s=(r>>16&255)/255,n=(r>>8&255)/255,a=(255&r)/255,h=[],l=0,o=0,u=[],_=Math.floor(this._points.length/2),c=0;c<_;c++)l=this._points[2*c],o=this._points[2*c+1],h.push(this.x+l,this.y+o,s,n,a);this.createLoopLine(h,u,this.borderWidth,i+h.length/5),t.append(new Uint16Array(u)),e.append(new Float32Array(h))}},i.createLoopLine=function(t,e,i,r,s,n){t.length;var a=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255,c=[a[0],a[1]],f=[a[a.length-5],a[a.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);a.unshift(d,m,0,0,0),a.push(d,m,0,0,0);var p,g,v,x,b,T,y,A,E,S,w,R,I,M,C,L,P,F,D,B,N=a.length/5,O=r,V=i/2;v=a[0],x=a[1],S=v-(b=a[5]),E=(E=-(x-(T=a[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=a[5*(U-1)],x=a[5*(U-1)+1],b=a[5*U],T=a[5*U+1],y=a[5*(U+1)],A=a[5*(U+1)+1],S=v-b,R=b-y,C=(-(E=(E=-(x-T))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+T)-(-E+b)*(-S+x),F=(-(w=(w=-(T-A))/(B=Math.sqrt(w*w+R*R))*V)+y)*(-(R=R/B*V)+T)-(-w+b)*(-R+A),D=(I=-S+x-(-S+T))*(P=-w+b-(-w+y))-(L=-R+A-(-R+T))*(M=-E+b-(-E+v)),Math.abs(D)<.1?(D+=10.1,h.push(b-E,T-S,o,u,_,b+E,T+S,o,u,_)):(((p=(M*F-P*C)/D)-b)*(p-b)+((g=(L*C-I*F)/D)-T)+(g-T),h.push(p,g,o,u,_,b-(p-b),T-(g-T),o,u,_));n&&(e=n);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},e}(),Ct=function(t){function e(t,i,r,s,n,a){this._points=null,this._start=-1,this._repaint=!1,this.earcutTriangles=null,this._mat=b.create(),this._points=r.slice(0,r.length),e.__super.call(this,t,i,0,0,this._points.length/2,s,n,a)}s(e,"laya.webgl.shapes.Polygon",it);var i=e.prototype;return i.rebuild=function(t){this._repaint||(this._points.length=0,this._points=this._points.concat(t))},i.setMatrix=function(t){t.copyTo(this._mat)},i.needUpdate=function(t){return this._repaint=this._mat.a==t.a&&this._mat.b==t.b&&this._mat.c==t.c&&this._mat.d==t.d&&this._mat.tx==t.tx&&this._mat.ty==t.ty,!this._repaint},i.getData=function(t,e,i){var r,s=0,n=this._points,a=0;if(this.mUint16Array&&this.mFloat32Array&&this._repaint){if(this._start!=i){for(this._start=i,r=[],a=this.earcutTriangles.length,s=0;s<a;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r)}}else{this._start=i,r=[];var h=[],l=[],o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;for(a=Math.floor(n.length/2),s=0;s<a;s++)h.push(this.x+n[2*s],this.y+n[2*s+1],u,_,c),l.push(this.x+n[2*s],this.y+n[2*s+1]);for(this.earcutTriangles=rt.earcut(l,null,2),a=this.earcutTriangles.length,s=0;s<a;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r),this.mFloat32Array=new Float32Array(h)}t.append(this.mUint16Array),e.append(this.mFloat32Array)},e}(),Lt=function(t){function e(){this._matrix=new b,this._matrix4=mt.defaultMatrix4.concat(),e.__super.call(this,1e4),this.shaderValue=new At(0,0)}s(e,"laya.webgl.submit.SubmitCanvas",nt);var i=e.prototype;return i.renderSubmit=function(){if(this._ctx_src._targets)return this._ctx_src._targets.flush(this._ctx_src),1;var t=gt.worldAlpha,e=gt.worldMatrix4,i=gt.worldMatrix,r=gt.worldFilters,s=gt.worldShaderDefines,n=this.shaderValue,a=this._matrix,h=this._matrix4,l=b.TEMP;return b.mul(a,i,l),h[0]=l.a,h[1]=l.b,h[4]=l.c,h[5]=l.d,h[12]=l.tx,h[13]=l.ty,gt.worldMatrix=l.clone(),gt.worldMatrix4=h,gt.worldAlpha=gt.worldAlpha*n.alpha,n.filters&&n.filters.length&&(gt.worldFilters=n.filters,gt.worldShaderDefines=n.defines),this._ctx_src.flush(),gt.worldAlpha=t,gt.worldMatrix4=e,gt.worldMatrix.destroy(),gt.worldMatrix=i,gt.worldFilters=r,gt.worldShaderDefines=s,1},i.releaseRender=function(){var t=e._cache;this._ctx_src=null,t[t._length++]=this},i.getRenderType=function(){return 10003},e.create=function(t,i,r){var s=e._cache._length?e._cache[--e._cache._length]:new e;s._ctx_src=t;var n=s.shaderValue;return n.alpha=i,n.defines.setValue(0),r&&r.length&&n.setFilters(r),s},r(e,["_cache",function(){return this._cache=(e._cache=[],e._cache._length=0,e._cache)}]),e}(),Pt=function(t){function e(t){this._preIsSameTextureShader=!1,this._isSameTexture=!0,this._texs=new Array,this._texsID=new Array,this._vbPos=new Array,void 0===t&&(t=1e4),e.__super.call(this,t)}s(e,"laya.webgl.submit.SubmitTexture",nt);var i=e.prototype;return i.releaseRender=function(){var t=e._cache;t[t._length++]=this,this.shaderValue.release(),this._preIsSameTextureShader=!1,this._vb=null,this._texs.length=0,this._vbPos.length=0,this._isSameTexture=!0},i.addTexture=function(t,e){this._texsID[this._texs.length]=t._uvID,this._texs.push(t),this._vbPos.push(e)},i.checkTexture=function(){if(this._texs.length<1)this._isSameTexture=!0;else{var t=this.shaderValue.textureHost.bitmap;if(null!==t)for(var e=this._vb.getFloat32Array(),i=0,r=this._texs.length;i<r;i++){var s=this._texs[i];s.active();var n=s.uv;if(this._texsID[i]!==s._uvID){this._texsID[i]=s._uvID;var a=this._vbPos[i];e[a+2]=n[0],e[a+3]=n[1],e[a+6]=n[2],e[a+7]=n[3],e[a+10]=n[4],e[a+11]=n[5],e[a+14]=n[6],e[a+15]=n[7],this._vb.setNeedUpload()}s.bitmap!==t&&(this._isSameTexture=!1)}}},i.renderSubmit=function(){if(0===this._numEle)return e._shaderSet=!1,1;var t=this.shaderValue.textureHost;if(t){var i=t.source;if(!t.bitmap||!i)return e._shaderSet=!1,1;this.shaderValue.texture=i}this._vb.bind_upload(this._ib);var r=xt.mainContext;if(G.activeBlendFunction!==this._blendFn&&(r.enable(3042),this._blendFn(r),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,this._preIsSameTextureShader&&Ft.activeShader&&e._shaderSet?Ft.activeShader.uploadTexture2D(this.shaderValue.texture):this.shaderValue.upload(),e._shaderSet=!0,this._texs.length>1&&!this._isSameTexture)for(var s=t.bitmap,n=0,a=Ft.activeShader,h=0,l=this._texs.length;h<l;h++){var o=this._texs[h];o.bitmap===s&&h+1!==l||(a.uploadTexture2D(o.source),r.drawElements(4,6*(h-n+1),5123,this._startIdx+6*n*mt.BYTES_PIDX),s=o.bitmap,n=h)}else r.drawElements(4,this._numEle,5123,this._startIdx);return 1},e.create=function(t,i,r,s,n){var a=e._cache._length?e._cache[--e._cache._length]:new e;null==r&&((r=a._selfVb||(a._selfVb=jt.create(-1))).clear(),s=0),a._ib=i,a._vb=r,a._startIdx=s*mt.BYTES_PIDX,a._numEle=0;var h=t._nBlendType;a._blendFn=t._targets?G.targetFns[h]:G.fns[h],a.shaderValue=n,a.shaderValue.setValue(t._shader2D);var l=t._shader2D.filters;return l&&a.shaderValue.setFilters(l),a},e._shaderSet=!0,r(e,["_cache",function(){return this._cache=(e._cache=[],e._cache._length=0,e._cache)}]),e}(),Ft=function(t){function e(){e.__super.call(this),this.lock=!0}return s(e,"laya.webgl.shader.BaseShader",S),e.activeShader=null,e.bindShader=null,e}(),Dt=function(t){function e(t,i,r,s,n,a,h,l,o){this._type=0,this._svWidth=NaN,this._svHeight=NaN,this._preRenderTarget=null,this._alreadyResolved=!1,this._looked=!1,this._surfaceFormat=0,this._surfaceType=0,this._depthStencilFormat=0,this._mipMap=!1,this._repeat=!1,this._minFifter=0,this._magFifter=0,this._destroy=!1,void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===n&&(n=34041),void 0===a&&(a=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=-1),this._type=1,this._w=t,this._h=i,this._surfaceFormat=r,this._surfaceType=s,this._depthStencilFormat=n,this._mipMap=a,this._repeat=h,this._minFifter=l,this._magFifter=o,this._createWebGLRenderTarget(),this.bitmap.lock=!0,e.__super.call(this,this.bitmap,D.INV_UV)}s(e,"laya.webgl.resource.RenderTarget2D",t);var r=e.prototype;return i.imps(r,{"laya.resource.IDispose":!0}),r.getType=function(){return this._type},r.getTexture=function(){return this},r.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this.release(),0!=this._w&&0!=this._h&&this._createWebGLRenderTarget())},r.release=function(){this.destroy()},r.recycle=function(){e.POOL.push(this)},r.start=function(){var t=xt.mainContext;return this._preRenderTarget=gt.curRenderTarget,gt.curRenderTarget=this,t.bindFramebuffer(36160,this.bitmap.frameBuffer),this._alreadyResolved=!1,1==this._type&&(t.viewport(0,0,this._w,this._h),this._svWidth=gt.width,this._svHeight=gt.height,gt.width=this._w,gt.height=this._h,Ft.activeShader=null),this},r.clear=function(t,e,i,r){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===r&&(r=1);var s=xt.mainContext;s.clearColor(t,e,i,r);var n=16384;switch(this._depthStencilFormat){case 33189:n|=256;break;case 36168:n|=1024;break;case 34041:n|=256,n|=1024}s.clear(n)},r.end=function(){var t=xt.mainContext;t.bindFramebuffer(36160,this._preRenderTarget?this._preRenderTarget.bitmap.frameBuffer:null),this._alreadyResolved=!0,gt.curRenderTarget=this._preRenderTarget,1==this._type?(t.viewport(0,0,this._svWidth,this._svHeight),gt.width=this._svWidth,gt.height=this._svHeight,Ft.activeShader=null):t.viewport(0,0,i.stage.width,i.stage.height)},r.getData=function(t,e,i,r){var s=xt.mainContext;s.bindFramebuffer(36160,this.bitmap.frameBuffer);if(!(36053===s.checkFramebufferStatus(36160)))return s.bindFramebuffer(36160,null),null;var n=new Uint8Array(this._w*this._h*4);return s.readPixels(t,e,i,r,this._surfaceFormat,this._surfaceType,n),s.bindFramebuffer(36160,null),n},r.destroy=function(e){void 0===e&&(e=!1),this._destroy||(this._loaded=!1,this.bitmap.offAll(),this.bitmap.disposeResource(),this.bitmap.dispose(),this.offAll(),this.bitmap=null,this._alreadyResolved=!1,this._destroy=!0,t.prototype.destroy.call(this))},r.dispose=function(){},r._createWebGLRenderTarget=function(){this.bitmap=new Wt(this.width,this.height,this._surfaceFormat,this._surfaceType,this._depthStencilFormat,this._mipMap,this._repeat,this._minFifter,this._magFifter),this.bitmap.activeResource(),this._alreadyResolved=!0,this._destroy=!1,this._loaded=!0,this.bitmap.on("recovered",this,function(t){this.event("recovered")})},n(0,r,"surfaceFormat",function(){return this._surfaceFormat}),n(0,r,"magFifter",function(){return this._magFifter}),n(0,r,"surfaceType",function(){return this._surfaceType}),n(0,r,"mipMap",function(){return this._mipMap}),n(0,r,"depthStencilFormat",function(){return this._depthStencilFormat}),n(0,r,"minFifter",function(){return this._minFifter}),n(0,r,"source",function(){return this._alreadyResolved?i.superGet(D,this,"source"):null}),e.create=function(t,i,r,s,n,a,h,l,o){void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===n&&(n=34041),void 0===a&&(a=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=-1);var u=e.POOL.pop();return u||(u=new e(t,i)),u.bitmap&&u._w==t&&u._h==i&&u._surfaceFormat==r&&u._surfaceType==s&&u._depthStencilFormat==n&&u._mipMap==a&&u._repeat==h&&u._minFifter==l&&u._magFifter==o||(u._w=t,u._h=i,u._surfaceFormat=r,u._surfaceType=s,u._depthStencilFormat=n,u._mipMap=a,u._repeat=h,u._minFifter=l,u._magFifter=o,u.release(),u._createWebGLRenderTarget()),u},e.TYPE2D=1,e.TYPE3D=2,e.POOL=[],e}(D),Bt=function(t){function e(){this._glBuffer=null,this._buffer=null,this._bufferType=0,this._bufferUsage=0,this._byteLength=0,e.__super.call(this),e._gl=xt.mainContext}s(e,"laya.webgl.utils.Buffer",S);var i=e.prototype;return i._bind=function(){this.activeResource(),e._bindActive[this._bufferType]!==this._glBuffer&&(34962===this._bufferType&&(e._bindVertexBuffer=this._glBuffer),e._gl.bindBuffer(this._bufferType,e._bindActive[this._bufferType]=this._glBuffer),Ft.activeShader=null)},i.recreateResource=function(){this._glBuffer||(this._glBuffer=e._gl.createBuffer()),this.completeCreate()},i.disposeResource=function(){this._glBuffer&&(xt.mainContext.deleteBuffer(this._glBuffer),this._glBuffer=null),this.memorySize=0},n(0,i,"bufferUsage",function(){return this._bufferUsage}),e._gl=null,e._bindActive={},e._bindVertexBuffer=null,e._enableAtributes=[],e}(),Nt=function(t){function e(t){this.texcoord=null,this.offsetX=300,this.offsetY=0,e.__super.call(this,512,0);var i=8*mt.BYTES_PE;this.position=[2,5126,!1,i,0],this.texcoord=[2,5126,!1,i,2*mt.BYTES_PE],this.color=[4,5126,!1,i,4*mt.BYTES_PE]}return s(e,"laya.webgl.shader.d2.skinAnishader.SkinSV",At),e}(),Ot=function(t){function e(t){e.__super.call(this,2,0),this.color=[]}s(e,"laya.webgl.shader.d2.value.Color2dSV",At);return e.prototype.setValue=function(t){t.fillStyle&&(this.color=t.fillStyle._color._color),t.strokeStyle&&(this.color=t.strokeStyle._color._color)},e}(),Vt=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.colorMat=null,this.colorAlpha=null,this.u_TexRange=[0,1,0,1],this.u_offset=[0,0],this.texcoord=At._TEXCOORD,e.__super.call(this,256,0)}s(e,"laya.webgl.shader.d2.value.FillTextureSV",At);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),Ut=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.blurInfo=null,this.colorMat=null,this.colorAlpha=null,this.texcoord=At._TEXCOORD,void 0===t&&(t=0),e.__super.call(this,1,t)}s(e,"laya.webgl.shader.d2.value.TextureSV",At);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),kt=function(t){function e(t){this.a_color=null,this.u_pos=[0,0],e.__super.call(this,4,0),this.position=[2,5126,!1,5*mt.BYTES_PE,0],this.a_color=[3,5126,!1,5*mt.BYTES_PE,2*mt.BYTES_PE]}return s(e,"laya.webgl.shader.d2.value.PrimitiveSV",At),e}(),Ht=function(t){function e(){this._atlaser=null,this._flashCacheImage=null,this._flashCacheImageNeedFlush=!1,e.__super.call(this)}s(e,"laya.webgl.atlas.AtlasWebGLCanvas",t);var i=e.prototype;return i.recreateResource=function(){var t=xt.mainContext,e=this._source=t.createTexture(),i=bt.curBindTexTarget,r=bt.curBindTexValue;bt.bindTexture(t,3553,e),t.texImage2D(3553,0,6408,this._w,this._h,0,6408,5121,null),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),i&&r&&bt.bindTexture(t,i,r),this.memorySize=this._w*this._h*4,this.completeCreate()},i.disposeResource=function(){this._source&&(xt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},i.texSubImage2D=function(t,e,i){if(A.isFlash){this._flashCacheImage||(this._flashCacheImage=v.create(""),this._flashCacheImage._image.createCanvas(this._w,this._h));var r=i.bitmapdata;this._flashCacheImage._image.copyPixels(r,0,0,r.width,r.height,t,e),this._flashCacheImageNeedFlush||(this._flashCacheImageNeedFlush=!0)}else{var s=xt.mainContext,n=bt.curBindTexTarget,a=bt.curBindTexValue;bt.bindTexture(s,3553,this._source),s.pixelStorei(37441,!0),t-1>=0&&s.texSubImage2D(3553,0,t-1,e,6408,5121,i),t+1<=this._w&&s.texSubImage2D(3553,0,t+1,e,6408,5121,i),e-1>=0&&s.texSubImage2D(3553,0,t,e-1,6408,5121,i),e+1<=this._h&&s.texSubImage2D(3553,0,t,e+1,6408,5121,i),s.texSubImage2D(3553,0,t,e,6408,5121,i),s.pixelStorei(37441,!1),n&&a&&bt.bindTexture(s,n,a)}},i.texSubImage2DPixel=function(t,e,i,r,s){var n=xt.mainContext,a=bt.curBindTexTarget,h=bt.curBindTexValue;bt.bindTexture(n,3553,this._source);var l=new Uint8Array(s.data);n.pixelStorei(37441,!0),n.texSubImage2D(3553,0,t,e,i,r,6408,5121,l),n.pixelStorei(37441,!1),a&&h&&bt.bindTexture(n,a,h)},n(0,i,"width",t.prototype._$get_width,function(t){this._w=t}),n(0,i,"height",t.prototype._$get_height,function(t){this._h=t}),e}(o),Gt=function(t){function e(){this.flipY=!0,this.premulAlpha=!1,this.alwaysChange=!1,e.__super.call(this)}s(e,"laya.webgl.resource.WebGLCanvas",o);var i=e.prototype;return i.getCanvas=function(){return this._canvas},i.clear=function(){this._ctx&&this._ctx.clear()},i.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null},i._setContext=function(t){this._ctx=t},i.getContext=function(t,i){return this._ctx?this._ctx:this._ctx=e._createContext(this)},i.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this._canvas&&(this._canvas.height=e,this._canvas.width=t))},i.activeResource=function(t){void 0===t&&(t=!1),this._source||this.recreateResource()},i.recreateResource=function(){this.createWebGlTexture(),this.completeCreate()},i.disposeResource=function(){this._source&&!this.iscpuSource&&(xt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},i.createWebGlTexture=function(){var t=xt.mainContext;this._canvas;var e=this._source=t.createTexture();this.iscpuSource=!1;var i=bt.curBindTexTarget,r=bt.curBindTexValue;bt.bindTexture(t,3553,e),t.pixelStorei(37440,this.flipY?1:0),this.premulAlpha&&t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this._imgData),this.premulAlpha&&t.pixelStorei(37441,!1),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),t.pixelStorei(37440,0),this.memorySize=this._w*this._h*4,i&&r&&bt.bindTexture(t,i,r)},i.reloadCanvasData=function(){var t=xt.mainContext;if(!this._source)throw"reloadCanvasData error, gl texture not created!";var e=bt.curBindTexTarget,i=bt.curBindTexValue;bt.bindTexture(t,3553,this._source),this.premulAlpha&&t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this._imgData),this.premulAlpha&&t.pixelStorei(37441,!1),t.pixelStorei(37440,0),e&&i&&bt.bindTexture(t,e,i)},i.texSubImage2D=function(t,e,i){var r=xt.mainContext,s=bt.curBindTexTarget,n=bt.curBindTexValue;bt.bindTexture(r,3553,this._source),r.pixelStorei(37441,!0),r.texSubImage2D(3553,0,e,i,6408,5121,t._source),r.pixelStorei(37441,!1),s&&n&&bt.bindTexture(r,s,n)},i.toBase64=function(t,e,i){var r=null;this._canvas&&(r=this._canvas.toDataURL(t,e)),i.call(this,r)},n(0,i,"context",function(){return this._ctx}),n(0,i,"source",function(){return this.alwaysChange&&this.reloadCanvasData(),this._source}),n(0,i,"asBitmap",null,function(t){this._ctx&&(this._ctx.asBitmap=t)}),e._createContext=null,e}(),zt=function(t){function e(t,i){this.CborderSize=12,e.__super.call(this),this.char=t,this.isSpace=" "===t,this.xs=i.scaleX,this.ys=i.scaleY,this.font=i.font.toString(),this.fontSize=i.font.size,this.fillColor=i.fillColor,this.borderColor=i.borderColor,this.lineWidth=i.lineWidth,this.underLine=i.underLine;var r,s=A.isConchApp;s?((r=ConchTextCanvas)._source=ConchTextCanvas,r._source.canvas=ConchTextCanvas):r=u.canvas.source,this.canvas=r,this._enableMerageInAtlas=!0,this._ctx=s?r:this.canvas.getContext("2d",void 0);var n=B.measureText(this.char,this.font);this.cw=n.width*this.xs,this.ch=(n.height||this.fontSize)*this.ys,this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.texture=new D(this)}s(e,"laya.webgl.resource.WebGLCharImage",o);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r.active=function(){this.texture.active()},r.recreateResource=function(){var t=A.isConchApp;if(this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.canvas&&(this.canvas.height=this._h,this.canvas.width=this._w),t){var e=this.fontSize;1==this.xs&&1==this.ys||(e=parseInt(e*(this.xs>this.ys?this.xs:this.ys)+""));var i="normal 100 "+e+"px Arial";this.borderColor&&(i+=" 1 "+this.borderColor),this._ctx.font=i,this._ctx.textBaseline="top",this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,this.CborderSize,this.CborderSize,null,null,null)}else{if(this._ctx.save(),this._ctx.clearRect(0,0,this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this._ctx.font=this.font,F.RightToLeft&&(this._ctx.textAlign="end"),this._ctx.textBaseline="top",this._ctx.translate(this.CborderSize,this.CborderSize),1==this.xs&&1==this.ys||this._ctx.scale(this.xs,this.ys),this.fillColor&&this.borderColor?(this._ctx.strokeStyle=this.borderColor,this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null),this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,0,0,null,null,null)):-1===this.lineWidth?(this._ctx.fillStyle=this.fillColor?this.fillColor:"white",this._ctx.fillText(this.char,0,0,null,null,null)):(this._ctx.strokeStyle=this.borderColor?this.borderColor:"white",this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null)),this.underLine){this._ctx.lineWidth=1,this._ctx.strokeStyle=this.fillColor,this._ctx.beginPath(),this._ctx.moveTo(0,this.fontSize+1);var r=this._ctx.measureText(this.char).width+1;this._ctx.lineTo(r,this.fontSize+1),this._ctx.stroke()}this._ctx.restore()}this.borderSize=this.CborderSize,this.completeCreate()},r.onresize=function(t,e){this._w=t,this._h=e,this._allowMerageInAtlas=!0},r.clearAtlasSource=function(){},n(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),n(0,r,"atlasSource",function(){return this.canvas}),n(0,r,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t}),e.createOneChar=function(t,i){return new e(t,i)},e}(),Wt=function(t){function e(t,i,r,s,n,a,h,l,o){void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===n&&(n=34041),void 0===a&&(a=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=1),e.__super.call(this),this._w=t,this._h=i,this._surfaceFormat=r,this._surfaceType=s,this._depthStencilFormat=n,this._mipMap=a,this._repeat=h,this._minFifter=l,this._magFifter=o}s(e,"laya.webgl.resource.WebGLRenderTarget",o);var i=e.prototype;return i.recreateResource=function(){var t=xt.mainContext;this._frameBuffer||(this._frameBuffer=t.createFramebuffer()),this._source||(this._source=t.createTexture());var e=bt.curBindTexTarget,i=bt.curBindTexValue;bt.bindTexture(t,3553,this._source),t.texImage2D(3553,0,6408,this._w,this._h,0,this._surfaceFormat,this._surfaceType,null);var r=this._minFifter,s=this._magFifter,n=this._repeat?10497:33071,a=h.isPOT(this._w,this._h);if(a?(this._mipMap?-1!==r||(r=9987):-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,n),t.texParameteri(3553,10243,n),this._mipMap&&t.generateMipmap(3553)):(-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),t.bindFramebuffer(36160,this._frameBuffer),t.framebufferTexture2D(36160,36064,3553,this._source,0),this._depthStencilFormat)switch(this._depthStencilBuffer||(this._depthStencilBuffer=t.createRenderbuffer()),t.bindRenderbuffer(36161,this._depthStencilBuffer),t.renderbufferStorage(36161,this._depthStencilFormat,this._w,this._h),this._depthStencilFormat){case 33189:t.framebufferRenderbuffer(36160,36096,36161,this._depthStencilBuffer);break;case 36168:t.framebufferRenderbuffer(36160,36128,36161,this._depthStencilBuffer);break;case 34041:t.framebufferRenderbuffer(36160,33306,36161,this._depthStencilBuffer)}t.bindFramebuffer(36160,null),e&&i&&bt.bindTexture(t,e,i),t.bindRenderbuffer(36161,null),a&&this._mipMap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4,this.completeCreate()},i.disposeResource=function(){this._frameBuffer&&(xt.mainContext.deleteTexture(this._source),xt.mainContext.deleteFramebuffer(this._frameBuffer),xt.mainContext.deleteRenderbuffer(this._depthStencilBuffer),this._source=null,this._frameBuffer=null,this._depthStencilBuffer=null,this.memorySize=0)},n(0,i,"depthStencilBuffer",function(){return this._depthStencilBuffer}),n(0,i,"frameBuffer",function(){return this._frameBuffer}),e}(),Yt=function(t){function e(t,i,r,s,n,a,h){this.offsetX=0,this.offsetY=0,e.__super.call(this),this.repeat=!0,this.mipmap=!1,this.minFifter=-1,this.magFifter=-1,this.atlasImage=a,this.canvas=t,this._ctx=t.getContext("2d",void 0),this._w=s,this._h=n,this.offsetX=i,this.offsetY=r,this.src=h,this._enableMerageInAtlas=!0,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}s(e,"laya.webgl.resource.WebGLSubImage",o);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r.size=function(t,e){this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this.canvas&&(this.canvas.height=e,this.canvas.width=t)},r.recreateResource=function(){this.size(this._w,this._h),this._ctx.drawImage(this.atlasImage,this.offsetX,this.offsetY,this._w,this._h,0,0,this._w,this._h),this._allowMerageInAtlas&&this._enableMerageInAtlas?this.memorySize=0:this.createWebGlTexture(),this.completeCreate()},r.createWebGlTexture=function(){var t=xt.mainContext;if(!this.canvas)throw"create GLTextur err:no data:"+this.canvas;var e=this._source=t.createTexture(),i=bt.curBindTexTarget,r=bt.curBindTexValue;bt.bindTexture(t,3553,e),t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this.canvas),t.pixelStorei(37441,!1);var s=this.minFifter,n=this.magFifter,a=this.repeat?10497:33071,l=h.isPOT(this.width,this.height);l?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10240,n),t.texParameteri(3553,10241,s),t.texParameteri(3553,10242,a),t.texParameteri(3553,10243,a),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,n),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&bt.bindTexture(t,i,r),this.canvas=null,l&&this.mipmap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4},r.disposeResource=function(){k.enabled&&this._allowMerageInAtlas||!this._source||(xt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},r.clearAtlasSource=function(){},n(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),n(0,r,"atlasSource",function(){return this.canvas}),n(0,r,"enableMerageInAtlas",function(){return this._allowMerageInAtlas},function(t){this._allowMerageInAtlas=t}),e}(),Xt=function(t){function e(t,i,r,s){if(this.customCompile=!1,this._curActTexIndex=0,this.tag={},this._program=null,this._params=null,this._paramsMap={},this._offset=0,e.__super.call(this),!t||!i)throw"Shader Error";(A.isConchApp||A.isFlash)&&(this.customCompile=!0),this._id=++e._count,this._vs=t,this._ps=i,this._nameMap=s||{},null!=r&&(e.sharders[r]=this)}s(e,"laya.webgl.shader.Shader",Ft);var i=e.prototype;return i.recreateResource=function(){this._compile(),this.completeCreate(),this.memorySize=0},i.disposeResource=function(){xt.mainContext.deleteShader(this._vshader),xt.mainContext.deleteShader(this._pshader),xt.mainContext.deleteProgram(this._program),this._vshader=this._pshader=this._program=null,this._params=null,this._paramsMap={},this.memorySize=0,this._curActTexIndex=0},i._compile=function(){if(this._vs&&this._ps&&!this._params){this._reCompile=!0,this._params=[];var t,i=[this._vs,this._ps];this.customCompile&&(t=vt.preGetParams(this._vs,this._ps));var r=xt.mainContext;if(this._program=r.createProgram(),this._vshader=e._createShader(r,i[0],35633),this._pshader=e._createShader(r,i[1],35632),r.attachShader(this._program,this._vshader),r.attachShader(this._program,this._pshader),r.linkProgram(this._program),!this.customCompile&&!r.getProgramParameter(this._program,35714))throw r.getProgramInfoLog(this._program);var s,n=0,a=0,h=this.customCompile?t.attributes.length:r.getProgramParameter(this._program,35721);for(n=0;n<h;n++){var l=this.customCompile?t.attributes[n]:r.getActiveAttrib(this._program,n);s={vartype:"attribute",glfun:null,ivartype:0,attrib:l,location:r.getAttribLocation(this._program,l.name),name:l.name,type:l.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0},this._params.push(s)}var o=this.customCompile?t.uniforms.length:r.getProgramParameter(this._program,35718);for(n=0;n<o;n++){var u=this.customCompile?t.uniforms[n]:r.getActiveUniform(this._program,n);(s={vartype:"uniform",glfun:null,ivartype:1,attrib:l,location:r.getUniformLocation(this._program,u.name),name:u.name,type:u.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0}).name.indexOf("[0]")>0&&(s.name=s.name.substr(0,s.name.length-3),s.isArray=!0,s.location=r.getUniformLocation(this._program,s.name)),this._params.push(s)}for(n=0,a=this._params.length;n<a;n++)if(s=this._params[n],s.indexOfParams=n,s.index=1,s.value=[s.location,null],s.codename=s.name,s.name=this._nameMap[s.codename]?this._nameMap[s.codename]:s.codename,this._paramsMap[s.name]=s,s._this=this,s.uploadedValue=[],"attribute"!==s.vartype)switch(s.type){case 5124:s.fun=s.isArray?this._uniform1iv:this._uniform1i;break;case 5126:s.fun=s.isArray?this._uniform1fv:this._uniform1f;break;case 35664:s.fun=s.isArray?this._uniform_vec2v:this._uniform_vec2;break;case 35665:s.fun=s.isArray?this._uniform_vec3v:this._uniform_vec3;break;case 35666:s.fun=s.isArray?this._uniform_vec4v:this._uniform_vec4;break;case 35678:s.fun=this._uniform_sampler2D;break;case 35680:s.fun=this._uniform_samplerCube;break;case 35676:s.glfun=r.uniformMatrix4fv,s.fun=this._uniformMatrix4fv;break;case 35670:s.fun=this._uniform1i;break;case 35674:case 35675:default:throw new Error("compile shader err!")}else s.fun=this._attribute}},i.getUniform=function(t){return this._paramsMap[t]},i._attribute=function(t,e){var i=xt.mainContext,r=Bt._enableAtributes,s=t.location;return r[s]||i.enableVertexAttribArray(s),i.vertexAttribPointer(s,e[0],e[1],e[2],e[3],e[4]+this._offset),r[s]=Bt._bindVertexBuffer,1},i._uniform1f=function(t,e){var i=t.uploadedValue;return i[0]!==e?(xt.mainContext.uniform1f(t.location,i[0]=e),1):0},i._uniform1fv=function(t,e){if(e.length<4){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform1fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return xt.mainContext.uniform1fv(t.location,e),1},i._uniform_vec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(xt.mainContext.uniform2f(t.location,i[0]=e[0],i[1]=e[1]),1):0},i._uniform_vec2v=function(t,e){if(e.length<2){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform2fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return xt.mainContext.uniform2fv(t.location,e),1},i._uniform_vec3=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(xt.mainContext.uniform3f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},i._uniform_vec3v=function(t,e){return xt.mainContext.uniform3fv(t.location,e),1},i._uniform_vec4=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform4f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},i._uniform_vec4v=function(t,e){return xt.mainContext.uniform4fv(t.location,e),1},i._uniformMatrix2fv=function(t,e){return xt.mainContext.uniformMatrix2fv(t.location,!1,e),1},i._uniformMatrix3fv=function(t,e){return xt.mainContext.uniformMatrix3fv(t.location,!1,e),1},i._uniformMatrix4fv=function(t,e){return xt.mainContext.uniformMatrix4fv(t.location,!1,e),1},i._uniform1i=function(t,e){var i=t.uploadedValue;return i[0]!==e?(xt.mainContext.uniform1i(t.location,i[0]=e),1):0},i._uniform1iv=function(t,e){return xt.mainContext.uniform1iv(t.location,e),1},i._uniform_ivec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(xt.mainContext.uniform2i(t.location,i[0]=e[0],i[1]=e[1]),1):0},i._uniform_ivec2v=function(t,e){return xt.mainContext.uniform2iv(t.location,e),1},i._uniform_vec3i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(xt.mainContext.uniform3i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},i._uniform_vec3vi=function(t,e){return xt.mainContext.uniform3iv(t.location,e),1},i._uniform_vec4i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform4i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},i._uniform_vec4vi=function(t,e){return xt.mainContext.uniform4iv(t.location,e),1},i._uniform_sampler2D=function(t,i){var r=xt.mainContext,s=t.uploadedValue;return null==s[0]?(s[0]=this._curActTexIndex,r.uniform1i(t.location,this._curActTexIndex),r.activeTexture(e._TEXTURES[this._curActTexIndex]),bt.bindTexture(r,3553,i),this._curActTexIndex++,1):(r.activeTexture(e._TEXTURES[s[0]]),bt.bindTexture(r,3553,i),0)},i._uniform_samplerCube=function(t,i){var r=xt.mainContext,s=t.uploadedValue;return null==s[0]?(s[0]=this._curActTexIndex,r.uniform1i(t.location,this._curActTexIndex),r.activeTexture(e._TEXTURES[this._curActTexIndex]),bt.bindTexture(r,34067,i),this._curActTexIndex++,1):(r.activeTexture(e._TEXTURES[s[0]]),bt.bindTexture(r,34067,i),0)},i._noSetValue=function(t){console.log("no....:"+t.name)},i.uploadOne=function(t,e){this.activeResource(),bt.UseProgram(this._program);var i=this._paramsMap[t];i.fun.call(this,i,e)},i.uploadTexture2D=function(t){C.shaderCall++;var e=xt.mainContext;e.activeTexture(33984),bt.bindTexture(e,3553,t)},i.upload=function(t,e){Ft.activeShader=Ft.bindShader=this,this._lastUseFrameCount===C.loopCount||this.activeResource(),bt.UseProgram(this._program),this._reCompile?(e=this._params,this._reCompile=!1):e=e||this._params;xt.mainContext;for(var i,r,s=e.length,n=0,a=0;a<s;a++)null!==(r=t[(i=e[a]).name])&&(n+=i.fun.call(this,i,r));C.shaderCall+=n},i.uploadArray=function(t,e,i){Ft.activeShader=this,Ft.bindShader=this,this.activeResource(),bt.UseProgram(this._program);this._params;for(var r,s,n=0,a=e-2;a>=0;a-=2)(s=this._paramsMap[t[a]])&&null!=(r=t[a+1])&&(i&&i[s.name]&&i[s.name].bind(),n+=s.fun.call(this,s,r));C.shaderCall+=n},i.getParams=function(){return this._params},e.getShader=function(t){return e.sharders[t]},e.create=function(t,i,r,s){return new e(t,i,r,s)},e.withCompile=function(t,i,r,s){if(r&&e.sharders[r])return e.sharders[r];var n=e._preCompileShader[2e-4*t];if(!n)throw new Error("withCompile shader err!"+t);return n.createShader(i,r,s)},e.withCompile2D=function(t,i,r,s,n){if(s&&e.sharders[s])return e.sharders[s];var a=e._preCompileShader[2e-4*t+i];if(!a)throw new Error("withCompile shader err!"+t+" "+i);return a.createShader(r,s,n)},e.addInclude=function(t,e){vt.addInclude(t,e)},e.preCompile=function(t,i,r,s){var n=2e-4*t;e._preCompileShader[n]=new vt(n,i,r,s)},e.preCompile2D=function(t,i,r,s,n){var a=2e-4*t+i;e._preCompileShader[a]=new vt(a,r,s,n)},e._createShader=function(t,e,i){var r=t.createShader(i);return t.shaderSource(r,e),t.compileShader(r),r},e._count=0,e._preCompileShader={},e.SHADERNAME2ID=2e-4,r(e,["_TEXTURES",function(){return this._TEXTURES=[33984,33985,33986,33987,33988,33989,33990,,33991,33992]},"nameKey",function(){return this.nameKey=new L},"sharders",function(){return this.sharders=(e.sharders=[],e.sharders.length=32,e.sharders)}]),e}(),Kt=function(t){function e(){this._maxsize=0,this._upload=!0,this._uploadSize=0,e.__super.call(this),this.lock=!0}s(e,"laya.webgl.utils.Buffer2D",t);var i=e.prototype;return i._bufferData=function(){this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,Bt._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),Bt._gl.bufferSubData(this._bufferType,0,this._buffer)},i._bufferSubData=function(t,e,i){if(void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,Bt._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),e||i){var r=this._buffer.slice(e,i);Bt._gl.bufferSubData(this._bufferType,t,r)}else Bt._gl.bufferSubData(this._bufferType,t,this._buffer)},i._checkArrayUse=function(){},i._bind_upload=function(){return!!this._upload&&(this._upload=!1,this._bind(),this._bufferData(),!0)},i._bind_subUpload=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),!!this._upload&&(this._upload=!1,this._bind(),this._bufferSubData(t,e,i),!0)},i._resizeBuffer=function(t,e){if(t<this._buffer.byteLength)return this;if(this.memorySize=t,e&&this._buffer&&this._buffer.byteLength>0){var i=new ArrayBuffer(t);new Uint8Array(i).set(new Uint8Array(this._buffer),0),this._buffer=i}else this._buffer=new ArrayBuffer(t);return this._checkArrayUse(),this._upload=!0,this},i.append=function(t){this._upload=!0;var e,i=0;i=t.byteLength,t instanceof Uint8Array?(this._resizeBuffer(this._byteLength+i,!0),e=new Uint8Array(this._buffer,this._byteLength)):t instanceof Uint16Array?(this._resizeBuffer(this._byteLength+i,!0),e=new Uint16Array(this._buffer,this._byteLength)):t instanceof Float32Array&&(this._resizeBuffer(this._byteLength+i,!0),e=new Float32Array(this._buffer,this._byteLength)),e.set(t,0),this._byteLength+=i,this._checkArrayUse()},i.appendEx=function(t,e){this._upload=!0;var i=0;i=t.byteLength,this._resizeBuffer(this._byteLength+i,!0),new e(this._buffer,this._byteLength).set(t,0),this._byteLength+=i,this._checkArrayUse()},i.appendEx2=function(t,e,i,r){void 0===r&&(r=1),this._upload=!0;var s,n=0;n=i*r,this._resizeBuffer(this._byteLength+n,!0),s=new e(this._buffer,this._byteLength);var a=0;for(a=0;a<i;a++)s[a]=t[a];this._byteLength+=n,this._checkArrayUse()},i.getBuffer=function(){return this._buffer},i.setNeedUpload=function(){this._upload=!0},i.getNeedUpload=function(){return this._upload},i.upload=function(){var t=this._bind_upload();return Bt._gl.bindBuffer(this._bufferType,null),Bt._bindActive[this._bufferType]=null,Ft.activeShader=null,t},i.subUpload=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0);var r=this._bind_subUpload();return Bt._gl.bindBuffer(this._bufferType,null),Bt._bindActive[this._bufferType]=null,Ft.activeShader=null,r},i.disposeResource=function(){t.prototype.disposeResource.call(this),this._upload=!0,this._uploadSize=0},i.clear=function(){this._byteLength=0,this._upload=!0},n(0,i,"bufferLength",function(){return this._buffer.byteLength}),n(0,i,"byteLength",null,function(t){this._byteLength!==t&&(t<=this._buffer.byteLength||this._resizeBuffer(2*t+256,!0),this._byteLength=t)}),e.__int__=function(t){qt.QuadrangleIB=qt.create(35044),pt.fillIBQuadrangle(qt.QuadrangleIB,16)},e.FLOAT32=4,e.SHORT=2,e}(Bt),Qt=(function(t){function e(t){this.u_blurX=!1,this.u_color=null,this.u_offset=null,this.u_strength=NaN,this.u_texW=0,this.u_texH=0,e.__super.call(this,9)}s(e,"laya.webgl.shader.d2.value.GlowSV",t);var i=e.prototype;i.setValue=function(e){t.prototype.setValue.call(this,e)},i.clear=function(){t.prototype.clear.call(this)}}(Ut),function(t){function e(t){e.__super.call(this,64),this.defines.add(64)}s(e,"laya.webgl.shader.d2.value.TextSV",t);var i=e.prototype;return i.release=function(){e.pool[e._length++]=this,this.clear()},i.clear=function(){t.prototype.clear.call(this)},e.create=function(){return e._length?e.pool[--e._length]:new e(null)},e.pool=[],e._length=0,e}(Ut)),Zt=function(t){function e(t,i,r,s){this._params2dQuick1=null,this._params2dQuick2=null,this._shaderValueWidth=NaN,this._shaderValueHeight=NaN,e.__super.call(this,t,i,r,s)}s(e,"laya.webgl.shader.d2.Shader2X",t);var i=e.prototype;return i.upload2dQuick1=function(t){this.upload(t,this._params2dQuick1||this._make2dQuick1())},i._make2dQuick1=function(){if(!this._params2dQuick1){this.activeResource(),this._params2dQuick1=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],(A.isFlash||"size"!==t.name&&"position"!==t.name&&"texcoord"!==t.name)&&this._params2dQuick1.push(t)}return this._params2dQuick1},i.disposeResource=function(){t.prototype.disposeResource.call(this),this._params2dQuick1=null,this._params2dQuick2=null},i.upload2dQuick2=function(t){this.upload(t,this._params2dQuick2||this._make2dQuick2())},i._make2dQuick2=function(){if(!this._params2dQuick2){this.activeResource(),this._params2dQuick2=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],(A.isFlash||"size"!==t.name)&&this._params2dQuick2.push(t)}return this._params2dQuick2},e.create=function(t,i,r,s){return new e(t,i,r,s)},e}(Xt),qt=function(t){function e(t){this._uint8Array=null,this._uint16Array=null,void 0===t&&(t=35044),e.__super.call(this),this._bufferUsage=t,this._bufferType=34963,A.isFlash||(this._buffer=new ArrayBuffer(8))}s(e,"laya.webgl.utils.IndexBuffer2D",Kt);var i=e.prototype;return i._checkArrayUse=function(){this._uint8Array&&(this._uint8Array=new Uint8Array(this._buffer)),this._uint16Array&&(this._uint16Array=new Uint16Array(this._buffer))},i.getUint8Array=function(){return this._uint8Array||(this._uint8Array=new Uint8Array(this._buffer))},i.getUint16Array=function(){return this._uint16Array||(this._uint16Array=new Uint16Array(this._buffer))},i.destory=function(){this._uint16Array=null,this._uint8Array=null,this._buffer=null},e.QuadrangleIB=null,e.create=function(t){return void 0===t&&(t=35044),new e(t)},e}(),jt=function(t){function e(t,i){this._floatArray32=null,this._vertexStride=0,e.__super.call(this),this._vertexStride=t,this._bufferUsage=i,this._bufferType=34962,A.isFlash||(this._buffer=new ArrayBuffer(8)),this.getFloat32Array()}s(e,"laya.webgl.utils.VertexBuffer2D",t);var i=e.prototype;return i.getFloat32Array=function(){return this._floatArray32||(this._floatArray32=new Float32Array(this._buffer))},i.bind=function(t){t&&t._bind(),this._bind()},i.insertData=function(t,e){this.getFloat32Array().set(t,e),this._upload=!0},i.bind_upload=function(t){t._bind_upload()||t._bind(),this._bind_upload()||this._bind()},i._checkArrayUse=function(){this._floatArray32&&(this._floatArray32=new Float32Array(this._buffer))},i.disposeResource=function(){t.prototype.disposeResource.call(this);for(var e=Bt._enableAtributes,i=0;i<10;i++)xt.mainContext.disableVertexAttribArray(i),e[i]=null},i.destory=function(){this._byteLength=0,this._upload=!0,this._buffer=null,this._floatArray32=null},n(0,i,"vertexStride",function(){return this._vertexStride}),e.create=function(t,i){return void 0===i&&(i=35048),new e(t,i)},e}(Kt),$t=function(t){function e(t,i,r,s){if(this._format=0,this._mipmap=!1,this._allowMerageInAtlas=!1,this._enableMerageInAtlas=!1,this.repeat=!1,this._image=null,this.minFifter=0,this.magFifter=0,void 0===r&&(r=6408),void 0===s&&(s=!0),e.__super.call(this,t,i),this._format=r,this._mipmap=s,this.repeat=!1,this.minFifter=-1,this.magFifter=-1,"string"==typeof t)this._url=t,this._src=t,this._image=new u.window.Image,i&&(i.onload&&(this.onload=i.onload),i.onerror&&(this.onerror=i.onerror),i.onCreate&&i.onCreate(this)),this._image.crossOrigin=t&&0==t.indexOf("data:")?null:"",t&&(this._image.src=t);else if(t instanceof ArrayBuffer){this._src=i,this._url=this._src;var n=new _(t);n.readUTFBytes(4),n.readUTFBytes(2),n.getInt16();n.endian="bigEndian",this._w=n.getInt16(),this._h=n.getInt16();n.getInt16(),n.getInt16();this._image=new Uint8Array(t,n.pos),this._format=xt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}else this._src=i,this._url=this._src,this._image=t.source||t,this.onresize();this._$5__enableMerageInAtlas=!0}s(e,"laya.webgl.resource.WebGLImage",v);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r._init_=function(t,e){},r._createWebGlTexture=function(){if(!this._image)throw"create GLTextur err:no data:"+this._image;var t=xt.mainContext,e=this._source=t.createTexture(),i=bt.curBindTexTarget,r=bt.curBindTexValue;switch(bt.bindTexture(t,3553,e),t.pixelStorei(37441,!0),this._format){case 6408:t.texImage2D(3553,0,this._format,6408,5121,this._image);break;case xt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:t.compressedTexImage2D(3553,0,this._format,this._w,this._h,0,this._image)}t.pixelStorei(37441,!1);var s=this.minFifter,n=this.magFifter,a=this.repeat?10497:33071,l=h.isPOT(this._w,this._h);l?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,n),t.texParameteri(3553,10242,a),t.texParameteri(3553,10243,a),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,n),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&bt.bindTexture(t,i,r),this._image.onload=null,this._image=null,l&&this.mipmap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4,this._recreateLock=!1},r.recreateResource=function(){var t=this;if(null!=this._src&&""!==this._src)if(this._needReleaseAgain=!1,this._image){if(this._recreateLock)return;this._allowMerageInAtlas&&this._$5__enableMerageInAtlas?(this.memorySize=0,this._recreateLock=!1):this._createWebGlTexture(),this.completeCreate()}else{this._recreateLock=!0;var e=this;this._image=new u.window.Image,this._image.crossOrigin=0==this._src.indexOf("data:")?null:"",this._image.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._image.onload=null,void(e._image=null);e._allowMerageInAtlas&&e._enableMerageInAtlas?(t.memorySize=0,t._recreateLock=!1):e._createWebGlTexture(),e.completeCreate()},this._image.src=this._src}},r.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(xt.mainContext.deleteTexture(this._source),this._source=null,this._image=null,this.memorySize=0)},r.onresize=function(){this._w=this._image.width,this._h=this._image.height,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1},r.clearAtlasSource=function(){this._image=null},n(0,r,"format",function(){return this._format}),n(0,r,"enableMerageInAtlas",function(){return this._$5__enableMerageInAtlas},function(t){this._$5__enableMerageInAtlas=t}),n(0,r,"mipmap",function(){return this._mipmap}),n(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),n(0,r,"atlasSource",function(){return this._image}),n(0,r,"onload",null,function(t){var e=this;this._onload=t,this._image&&(this._image.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),n(0,r,"onerror",null,function(t){var e=this;this._onerror=t,this._image&&(this._image.onerror=null!=this._onerror?function(){e._onerror()}:null)}),e}();i.__init([ft,U,yt,vt])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var r=Laya[i];r&&r.__isclass&&(e[i]=r)}});
!function(window,document,Laya){var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec,Browser=laya.utils.Browser,CSSStyle=laya.display.css.CSSStyle,ClassUtils=laya.utils.ClassUtils,Event=laya.events.Event,HTMLChar=laya.utils.HTMLChar,Loader=laya.net.Loader,Node=laya.display.Node,Rectangle=laya.maths.Rectangle,Render=laya.renders.Render,RenderContext=laya.renders.RenderContext,RenderSprite=laya.renders.RenderSprite,Sprite=laya.display.Sprite,Stat=laya.utils.Stat,Text=laya.display.Text,Texture=laya.resource.Texture,URL=laya.net.URL,Utils=laya.utils.Utils,HTMLParse=function(){function t(){}return __class(t,"laya.html.utils.HTMLParse"),t.parse=function(e,i,n){i=(i="<root>"+(i=i.replace(/<br>/g,"<br/>"))+"</root>").replace(t.spacePattern,t.char255);var s=Utils.parseXMLFromString(i);t._parseXML(e,s.childNodes[0].childNodes,n)},t._parseXML=function(e,i,n,s){var r=0,l=0;if(i.join||i.item)for(r=0,l=i.length;r<l;++r)t._parseXML(e,i[r],n,s);else{var a,h;if(3==i.nodeType){var o;return void(e instanceof laya.html.dom.HTMLDivElement?(null==i.nodeName&&(i.nodeName="#text"),h=i.nodeName.toLowerCase(),(o=i.textContent.replace(/^\s+|\s+$/g,"")).length>0&&(a=ClassUtils.getInstance(h))&&(e.addChild(a),a.innerTEXT=o.replace(t.char255AndOneSpacePattern," "))):(o=i.textContent.replace(/^\s+|\s+$/g,"")).length>0&&(e.innerTEXT=o.replace(t.char255AndOneSpacePattern," ")))}if("#comment"==(h=i.nodeName.toLowerCase()))return;if(a=ClassUtils.getInstance(h)){(a=e.addChild(a)).URI=n,a.href=s;var _=i.attributes;if(_&&_.length>0)for(r=0,l=_.length;r<l;++r){var u=_[r],d=u.nodeName,c=u.value;a._setAttributes(d,c)}t._parseXML(a,i.childNodes,n,a.href)}else t._parseXML(e,i.childNodes,n,s)}},__static(t,["char255",function(){return this.char255=String.fromCharCode(255)},"spacePattern",function(){return this.spacePattern=/&nbsp;|&#160;/g},"char255AndOneSpacePattern",function(){return this.char255AndOneSpacePattern=new RegExp(String.fromCharCode(255)+"|(\\s+)","g")}]),t}(),Layout=function(){function t(){}return __class(t,"laya.html.utils.Layout"),t.later=function(e){null==t._will&&(t._will=[],Laya.stage.frameLoop(1,null,function(){if(!(t._will.length<1)){for(var e=0;e<t._will.length;e++)laya.html.utils.Layout.layout(t._will[e]);t._will.length=0}})),t._will.push(e)},t.layout=function(e){if(!e||!e._style)return null;if(0==(512&e._style._type))return null;e.getStyle()._type&=-513;var i=t._multiLineLayout(e);return Render.isConchApp&&e.layaoutCallNative&&e.layaoutCallNative(),i},t._multiLineLayout=function(e){function i(){H.y=T,T+=H.h+c,0==H.h&&(T+=f),H.mWidth=I,I=0,H=new LayoutLine,E.push(H),H.h=0,v=0,A=!0,C=!1}if(Text.RightToLeft)return t._multiLineLayout2(e);var n=new Array;e._addChildsToLayout(n);var s,r,l,a,h,o=0,_=n.length,u=e._getCSSStyle(),d=u.letterSpacing,c=u.leading,f=u.lineHeight,y=u._widthAuto()||!u.wordWrap,g=y?999999:e.width,p=(e.height,0),m=u.italic?u.fontSize/3:0,L=u._getAlign(),w=u._getValign(),x=0!==w||0!==L||0!=f,v=0,T=0,S=0,M=0,E=new Array,H=E[0]=new LayoutLine,C=!1,R=!1;H.h=0,u.italic&&(g-=u.fontSize/3);var I=0,A=!0;for(o=0;o<_;o++)if(null!=(s=n[o]))if(A=!1,s instanceof laya.html.dom.HTMLBrElement)i(),H.y=T;else{if(s._isChar()){if((a=s).isWord)C=R||"\n"===a.char,H.wordStartIndex=H.elements.length;else{if(E.length>0&&v+S>g&&H.wordStartIndex>0){var N=0;N=H.elements.length-H.wordStartIndex+1,H.elements.length=H.wordStartIndex,o-=N,i();continue}C=!1,I+=a.width}S=a.width+d,M=a.height,R=!1,(C=C||v+S>g)&&i(),H.minTextHeight=Math.min(H.minTextHeight,s.height)}else h=s,l=(r=s._getCSSStyle()).padding,0===r._getCssFloat()||(x=!0),C=R||r.lineElement,S=h.width*h._style._tf.scaleX+l[1]+l[3]+d,M=h.height*h._style._tf.scaleY+l[0]+l[2],R=r.lineElement,(C=C||v+S>g&&r.wordWrap)&&i();H.elements.push(s),H.h=Math.max(H.h,M),s.x=v,s.y=T,v+=S,H.w=v-d,H.y=T,p=Math.max(v+m,p)}else A||(v+=t.DIV_ELEMENT_PADDING),H.wordStartIndex=H.elements.length;if(T=H.y+H.h,x){var U=0,P=g;for(y&&e.width>0&&(P=e.width),o=0,_=E.length;o<_;o++)E[o].updatePos(0,P,o,U,L,w,f),U+=Math.max(f,E[o].h+c);T=U}return y&&(e.width=p),T>e.height&&(e.height=T),[p,T]},t._multiLineLayout2=function(e){function i(){H.y=T,T+=H.h+c,0==H.h&&(T+=f),H.mWidth=I,I=0,H=new LayoutLine,E.push(H),H.h=0,v=0,A=!0,C=!1}var n=new Array;e._addChildsToLayout(n);var s,r,l,a,h,o=0,_=n.length,u=e._getCSSStyle(),d=u.letterSpacing,c=u.leading,f=u.lineHeight,y=u._widthAuto()||!u.wordWrap,g=y?999999:e.width,p=(e.height,0),m=u.italic?u.fontSize/3:0,L=2-u._getAlign(),w=u._getValign(),x=0!==w||0!==L||0!=f,v=0,T=0,S=0,M=0,E=new Array,H=E[0]=new LayoutLine,C=!1,R=!1;H.h=0,u.italic&&(g-=u.fontSize/3);var I=0,A=!0;for(o=0;o<_;o++)if(null!=(s=n[o]))if(A=!1,s instanceof laya.html.dom.HTMLBrElement)i(),H.y=T;else{if(s._isChar()){if((a=s).isWord)C=R||"\n"===a.char,H.wordStartIndex=H.elements.length;else{if(E.length>0&&v+S>g&&H.wordStartIndex>0){var N=0;N=H.elements.length-H.wordStartIndex+1,H.elements.length=H.wordStartIndex,o-=N,i();continue}C=!1,I+=a.width}S=a.width+d,M=a.height,R=!1,(C=C||v+S>g)&&i(),H.minTextHeight=Math.min(H.minTextHeight,s.height)}else h=s,l=(r=s._getCSSStyle()).padding,0===r._getCssFloat()||(x=!0),C=R||r.lineElement,S=h.width*h._style._tf.scaleX+l[1]+l[3]+d,M=h.height*h._style._tf.scaleY+l[0]+l[2],R=r.lineElement,(C=C||v+S>g&&r.wordWrap)&&i();H.elements.push(s),H.h=Math.max(H.h,M),s.x=v,s.y=T,v+=S,H.w=v-d,H.y=T,p=Math.max(v+m,p)}else A||(v+=t.DIV_ELEMENT_PADDING),H.wordStartIndex=H.elements.length;if(T=H.y+H.h,x){var U=0,P=g;for(o=0,_=E.length;o<_;o++)E[o].updatePos(0,P,o,U,L,w,f),U+=Math.max(f,E[o].h+c);T=U}for(y&&(e.width=p),T>e.height&&(e.height=T),o=0,_=E.length;o<_;o++)E[o].revertOrder(g);return[p,T]},t._will=null,t.DIV_ELEMENT_PADDING=0,t}(),LayoutLine=function(){function t(){this.x=0,this.y=0,this.w=0,this.h=0,this.wordStartIndex=0,this.minTextHeight=99999,this.mWidth=0,this.elements=new Array}__class(t,"laya.html.utils.LayoutLine");var e=t.prototype;return e.updatePos=function(t,e,i,n,s,r,l){var a,h=0;this.elements.length>0&&(h=(a=this.elements[this.elements.length-1]).x+a.width-this.elements[0].x);var o=0,_=NaN;1===s&&(o=(e-h)/2),2===s&&(o=e-h),0===l||0!=r||(r=1);for(var u=0,d=this.elements.length;u<d;u++){var c=(a=this.elements[u])._getCSSStyle();switch(0!==o&&(a.x+=o),c._getValign()){case 0:a.y=n;break;case 1:var f=0;99999!=this.minTextHeight&&(f=this.minTextHeight);var y=(f+l)/2;y=Math.max(y,this.h),_=(laya.html.dom.HTMLImageElement,n+y-a.height),a.y=_;break;case 2:a.y=n+(l-a.height)}}},e.revertOrder=function(t){var e;if(this.elements.length>0){var i=0,n=0;for(n=this.elements.length,i=0;i<n;i++)(e=this.elements[i]).x=t-e.x-e.width}},t}(),HTMLElement=function(_super){function HTMLElement(){this.URI=null,this._href=null,HTMLElement.__super.call(this),this._text=HTMLElement._EMPTYTEXT,this.setStyle(new CSSStyle(this)),this._getCSSStyle().valign="middle",this.mouseEnabled=!0}__class(HTMLElement,"laya.html.dom.HTMLElement",_super);var __proto=HTMLElement.prototype;return __proto.layaoutCallNative=function(){var t=0;if(this._childs&&(t=this._childs.length)>0)for(var e=0;e<t;e++)this._childs[e].layaoutCallNative&&this._childs[e].layaoutCallNative();var i=this._getWords();i?laya.html.dom.HTMLElement.fillWords(this,i,0,0,this.style.font,this.style.color,this.style.underLine):this.graphics.clear()},__proto.appendChild=function(t){return this.addChild(t)},__proto._getWords2=function(){var t=this._text.text;if(!t||0===t.length)return null;var e,i,n=0,s=0;if(this._text.drawWords)i=this._text.drawWords;else{for(s=(e=t.split(" ")).length-1,i=[],n=0;n<s;n++)i.push(e[n]," ");s>=0&&i.push(e[s]),this._text.drawWords=i}var r=this._text.words;if(r&&r.length===i.length)return r;null===r&&(this._text.words=r=[]),r.length=i.length;var l,a=this.style,h=a.font;for(n=0,s=i.length;n<s;n++){l=Utils.measureText(i[n],h);var o=r[n]=new HTMLChar(i[n],l.width,l.height||a.fontSize,a);if(o.char.length>1&&(o.charNum=o.char),this.href){var _=new Sprite;this.addChild(_),o.setSprite(_)}}return r},__proto._getWords=function(){if(!Text.CharacterCache)return this._getWords2();var t=this._text.text;if(!t||0===t.length)return null;var e=this._text.words;if(e&&e.length===t.length)return e;null===e&&(this._text.words=e=[]),e.length=t.length;for(var i,n=this.style,s=n.font,r=0,l=t.length;r<l;r++){i=Utils.measureText(t.charAt(r),s);var a=e[r]=new HTMLChar(t.charAt(r),i.width,i.height||n.fontSize,n);if(this.href){var h=new Sprite;this.addChild(h),a.setSprite(h)}}return e},__proto.showLinkSprite=function(){var t=this._text.words;if(t)for(var e,i,n=[],s=0;s<t.length;s++)i=t[s],(e=new Sprite).graphics.drawRect(0,0,i.width,i.height,"#ff0000"),e.width=i.width,e.height=i.height,this.addChild(e),n.push(e)},__proto._layoutLater=function(){var t=this.style;512&t._type||(t.widthed(this)&&(this._childs.length>0||null!=this._getWords())&&t.block?(Layout.later(this),t._type|=512):this.parent&&this.parent._layoutLater())},__proto._setAttributes=function(t,e){switch(t){case"style":return void this.style.cssText(e);case"class":return void(this.className=e)}_super.prototype._setAttributes.call(this,t,e)},__proto.updateHref=function(){if(null!=this._href){var t=this._getWords();if(t)for(var e,i,n=0;n<t.length;n++)(i=(e=t[n]).getSprite())&&(i.size(e.width,e.height),i.on("click",this,this.onLinkHandler))}},__proto.onLinkHandler=function(t){switch(t.type){case"click":for(var e=this;e;)e.event("link",[this.href]),e=e.parent}},__proto.formatURL=function(t){return this.URI?URL.formatURL(t,this.URI?this.URI.path:null):t},__getset(0,__proto,"href",function(){return this._href},function(t){this._href=t,null!=t&&(this._getCSSStyle().underLine=1,this.updateHref())}),__getset(0,__proto,"color",null,function(t){this.style.color=t}),__getset(0,__proto,"onClick",null,function(value){var fn;eval("fn=function(event){"+value+";}"),this.on("click",this,fn)}),__getset(0,__proto,"id",null,function(t){HTMLDocument.document.setElementById(t,this)}),__getset(0,__proto,"innerTEXT",function(){return this._text.text},function(t){this.text=t}),__getset(0,__proto,"style",function(){return this._style}),__getset(0,__proto,"text",function(){return this._text.text},function(t){this._text==HTMLElement._EMPTYTEXT?this._text={text:t,words:null}:(this._text.text=t,this._text.words&&(this._text.words.length=0)),Render.isConchApp&&this.layaoutCallNative(),this._renderType|=2048,this.repaint(),this.updateHref()}),__getset(0,__proto,"parent",_super.prototype._$get_parent,function(t){if(t instanceof laya.html.dom.HTMLElement){var e=t;this.URI||(this.URI=e.URI),this.style.inherit(e.style)}Laya.superSet(Sprite,this,"parent",t)}),__getset(0,__proto,"className",null,function(t){this.style.attrs(HTMLDocument.document.styleSheets["."+t])}),HTMLElement.fillWords=function(t,e,i,n,s,r,l){t.graphics.clear();for(var a=0,h=e.length;a<h;a++){var o=e[a];t.graphics.fillText(o.char,o.x+i,o.y+n,s,r,"left",l)}},__static(HTMLElement,["_EMPTYTEXT",function(){return this._EMPTYTEXT={text:null,words:null}}]),HTMLElement}(Sprite),HTMLBrElement=function(t){function e(){e.__super.call(this),this.style.lineElement=!0,this.style.block=!0}return __class(e,"laya.html.dom.HTMLBrElement",HTMLElement),e}(),HTMLDivElement=function(t){function e(){this.contextHeight=NaN,this.contextWidth=NaN,e.__super.call(this),this.style.block=!0,this.style.lineElement=!0,this.style.width=200,this.style.height=200}__class(e,"laya.html.dom.HTMLDivElement",t);var i=e.prototype;return i.appendHTML=function(t){HTMLParse.parse(this,t,this.URI),this.layout()},i._addChildsToLayout=function(t){var e=this._getWords();if(null==e&&0==this._childs.length)return!1;e&&e.forEach(function(e){t.push(e)});for(var i=!0,n=0,s=this._childs.length;n<s;n++){var r=this._childs[n];i?i=!1:t.push(null),r._addToLayout(t)}return!0},i._addToLayout=function(t){this.layout()},i.layout=function(){if(this.style){this.style._type|=512;var t=Layout.layout(this);if(t){this._$P.mHtmlBounds||this._set$P("mHtmlBounds",new Rectangle);var e=this._$P.mHtmlBounds;e.x=e.y=0,e.width=this.contextWidth=t[0],e.height=this.contextHeight=t[1],this.setBounds(e)}}},__getset(0,i,"height",function(){return this._height?this._height:this.contextHeight},t.prototype._$set_height),__getset(0,i,"innerHTML",null,function(t){this.destroyChildren(),this.appendHTML(t)}),__getset(0,i,"width",function(){return this._width?this._width:this.contextWidth},function(t){var e=!1;e=0===t?t!=this._width:t!=this.width,Laya.superSet(HTMLElement,this,"width",t),e&&this.layout()}),e}(HTMLElement),HTMLDocument=function(t){function e(){this.all=new Array,this.styleSheets=CSSStyle.styleSheets,e.__super.call(this)}__class(e,"laya.html.dom.HTMLDocument",HTMLElement);var i=e.prototype;return i.getElementById=function(t){return this.all[t]},i.setElementById=function(t,e){this.all[t]=e},__static(e,["document",function(){return this.document=new e}]),e}(),HTMLImageElement=function(t){function e(){this._tex=null,this._url=null,this._renderArgs=[],e.__super.call(this),this.style.block=!0}__class(e,"laya.html.dom.HTMLImageElement",HTMLElement);var i=e.prototype;return i._addToLayout=function(t){!this._style.absolute&&t.push(this)},i.render=function(t,e,i){!this._tex||!this._tex.loaded||!this._tex.loaded||this._width<1||this._height<1||(Stat.spriteCount++,this._renderArgs[0]=this._tex,this._renderArgs[1]=this.x,this._renderArgs[2]=this.y,this._renderArgs[3]=this.width||this._tex.width,this._renderArgs[4]=this.height||this._tex.height,t.ctx.drawTexture2(e,i,this.style.translateX,this.style.translateY,this.transform,this.style.alpha,this.style.blendMode,this._renderArgs))},i.layaoutCallNative=function(){var t=0;if(this._childs&&(t=this._childs.length)>0)for(var e=0;e<t;e++)this._childs[e].layaoutCallNative&&this._childs[e].layaoutCallNative()},__getset(0,i,"src",null,function(t){function e(){var t=i._style;t.widthed(i)||i._tex.width,t.heighted(i)||i._tex.height;t.widthed(i)||i._width==i._tex.width||(i.width=i._tex.width,i.parent&&i.parent._layoutLater()),t.heighted(i)||i._height==i._tex.height||(i.height=i._tex.height,i.parent&&i.parent._layoutLater()),Render.isConchApp&&(i._renderArgs[0]=i._tex,i._renderArgs[1]=i.x,i._renderArgs[2]=i.y,i._renderArgs[3]=i.width||i._tex.width,i._renderArgs[4]=i.height||i._tex.height,i.graphics.drawTexture(i._tex,0,0,i._renderArgs[3],i._renderArgs[4])),i.repaint(),i.parentRepaint()}var i=this;if(t=this.formatURL(t),this._url!=t){this._url=t;var n=this._tex=Loader.getRes(t);n||(this._tex=n=new Texture,n.load(t),Loader.cacheRes(t,n)),n.loaded?e():n.on("loaded",null,e)}}),e}(),HTMLLinkElement=function(t){function e(){this.type=null,e.__super.call(this),this.visible=!1}__class(e,"laya.html.dom.HTMLLinkElement",t);var i=e.prototype;return i._onload=function(t){switch(this.type){case"text/css":CSSStyle.parseCSS(t,this.URI)}},__getset(0,i,"href",t.prototype._$get_href,function(t){var e=this;t=this.formatURL(t),this.URI=new URL(t);var i=new Loader;i.once("complete",null,function(t){e._onload(t)}),i.load(t,"text")}),__static(e,["_cuttingStyle",function(){return this._cuttingStyle=new RegExp("((@keyframes[\\s\\t]+|)(.+))[\\t\\n\\r\\s]*{","g")}]),e}(HTMLElement),HTMLStyleElement=function(t){function e(){e.__super.call(this),this.visible=!1}__class(e,"laya.html.dom.HTMLStyleElement",t);return __getset(0,e.prototype,"text",t.prototype._$get_text,function(t){CSSStyle.parseCSS(t,null)}),e}(HTMLElement),HTMLIframeElement=function(t){function e(){e.__super.call(this),this._getCSSStyle().valign="middle"}__class(e,"laya.html.dom.HTMLIframeElement",t);return __getset(0,e.prototype,"href",t.prototype._$get_href,function(t){var e=this;t=this.formatURL(t);var i=new Loader;i.once("complete",null,function(i){var n=e.URI;e.URI=new URL(t),e.innerHTML=i,!n||(e.URI=n)}),i.load(t,"text")}),e}(HTMLDivElement)}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var n=Laya[i];n&&n.__isclass&&(e[i]=n)}});

(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Browser=laya.utils.Browser,Event=laya.events.Event,EventDispatcher=laya.events.EventDispatcher;
	var HTMLImage=laya.resource.HTMLImage,Handler=laya.utils.Handler,Input=laya.display.Input,Loader=laya.net.Loader;
	var Matrix=laya.maths.Matrix,Render=laya.renders.Render,RunDriver=laya.utils.RunDriver,SoundChannel=laya.media.SoundChannel;
	var SoundManager=laya.media.SoundManager,Texture=laya.resource.Texture,URL=laya.net.URL,Utils=laya.utils.Utils;
//class laya.wx.mini.MiniAdpter
var MiniAdpter=(function(){
	function MiniAdpter(){}
	__class(MiniAdpter,'laya.wx.mini.MiniAdpter');
	MiniAdpter.getJson=function(data){
		return JSON.parse(data);
	}

	MiniAdpter.init=function(isPosMsg,isSon){
		(isPosMsg===void 0)&& (isPosMsg=false);
		(isSon===void 0)&& (isSon=false);
		if (MiniAdpter._inited)return;
		MiniAdpter._inited=true;
		MiniAdpter.window=/*__JS__ */window;
		if(MiniAdpter.window.navigator.userAgent.indexOf('MiniGame')<0)return;
		MiniAdpter.isZiYu=isSon;
		MiniAdpter.isPosMsgYu=isPosMsg;
		MiniAdpter.EnvConfig={};
		if(!MiniAdpter.isZiYu){
			MiniFileMgr.setNativeFileDir("/layaairGame");
			MiniFileMgr.existDir(MiniFileMgr.fileNativeDir,Handler.create(MiniAdpter,MiniAdpter.onMkdirCallBack));
		}
		MiniAdpter.systemInfo=/*__JS__ */wx.getSystemInfoSync();
		MiniAdpter.window.focus=function (){
		};
		Laya['getUrlPath']=function (){
		};
		MiniAdpter.window.logtime=function (str){
		};
		MiniAdpter.window.alertTimeLog=function (str){
		};
		MiniAdpter.window.resetShareInfo=function (){
		};
		MiniAdpter.window.CanvasRenderingContext2D=function (){
		};
		MiniAdpter.window.CanvasRenderingContext2D.prototype=MiniAdpter.window.wx.createCanvas().getContext('2d').__proto__;
		MiniAdpter.window.document.body.appendChild=function (){
		};
		MiniAdpter.EnvConfig.pixelRatioInt=0;
		RunDriver.getPixelRatio=MiniAdpter.pixelRatio;
		MiniAdpter._preCreateElement=Browser.createElement;
		Browser["createElement"]=MiniAdpter.createElement;
		RunDriver.createShaderCondition=MiniAdpter.createShaderCondition;
		Utils.parseXMLFromString=MiniAdpter.parseXMLFromString;
		Input['_createInputElement']=MiniInput['_createInputElement'];
		MiniAdpter.EnvConfig.load=Loader.prototype.load;
		Loader.prototype.load=MiniLoader.prototype.load;
		Loader['clearRes']=MiniAdpter.clearRes;
		Loader.prototype._loadImage=MiniImage.prototype._loadImage;
		if(MiniAdpter.isZiYu && isPosMsg){
			/*__JS__ */wx.onMessage(function(message){
				if(message['isLoad']){
					MiniFileMgr.ziyuFileData[message.url]=message.data;
				}
			});
		}
	}

	MiniAdpter.clearRes=function(url,forceDispose){
		(forceDispose===void 0)&& (forceDispose=false);
		url=URL.formatURL(url);
		var arr=Loader.getAtlas(url);
		if (arr){
			for (var i=0,n=arr.length;i < n;i++){
				var resUrl=arr[i];
				var tex=Loader.getRes(resUrl);
				delete Loader.loadedMap[resUrl];
				if (tex)tex.destroy(forceDispose);
			}
			arr.length=0;
			delete Loader['atlasMap'][url];
			delete Loader.loadedMap[url];
			MiniFileMgr.remove("",url);
			}else {
			var res=Loader.loadedMap[url];
			if (res){
				delete Loader.loadedMap[url];
				if ((res instanceof laya.resource.Texture )&& res.bitmap)(res).destroy(forceDispose);
			}
		}
	}

	MiniAdpter.onMkdirCallBack=function(errorCode,data){
		if (!errorCode)
			MiniFileMgr.filesListObj=JSON.parse(data.data);
	}

	MiniAdpter.pixelRatio=function(){
		if (!MiniAdpter.EnvConfig.pixelRatioInt){
			try {
				console.log(MiniAdpter.systemInfo);
				MiniAdpter.EnvConfig.pixelRatioInt=MiniAdpter.systemInfo.pixelRatio;
				return MiniAdpter.systemInfo.pixelRatio;
			}catch (error){}
		}
		return MiniAdpter.EnvConfig.pixelRatioInt;
	}

	MiniAdpter.createElement=function(type){
		if (type=="canvas"){
			var _source;
			if (MiniAdpter.idx==1){
				if(MiniAdpter.isZiYu){
					_source=/*__JS__ */sharedCanvas;
					_source.style={};
					}else{
					_source=/*__JS__ */window.canvas;
				}
				}else {
				_source=/*__JS__ */window.wx.createCanvas();
			}
			MiniAdpter.idx++;
			return _source;
			}else if (type=="textarea" || type=="input"){
			return MiniAdpter.onCreateInput(type);
			}else if (type=="div"){
			var node=MiniAdpter._preCreateElement(type);
			node.contains=function (value){
				return null
			};
			node.removeChild=function (value){
			};
			return node;
			}else {
			return MiniAdpter._preCreateElement(type);
		}
	}

	MiniAdpter.onCreateInput=function(type){
		var node=MiniAdpter._preCreateElement(type);
		node.focus=MiniInput.wxinputFocus;
		node.blur=MiniInput.wxinputblur;
		node.style={};
		node.value=0;
		node.parentElement={};
		node.placeholder={};
		node.type={};
		node.setColor=function (value){
		};
		node.setType=function (value){
		};
		node.setFontFace=function (value){
		};
		node.addEventListener=function (value){
		};
		node.contains=function (value){
			return null
		};
		node.removeChild=function (value){
		};
		return node;
	}

	MiniAdpter.createShaderCondition=function(conditionScript){
		var _$this=this;
		var func=function (){
			var abc=conditionScript;
			return _$this[conditionScript.replace("this.","")];
		}
		return func;
	}

	MiniAdpter.EnvConfig=null;
	MiniAdpter.window=null;
	MiniAdpter._preCreateElement=null;
	MiniAdpter._inited=false;
	MiniAdpter.wxRequest=null;
	MiniAdpter.systemInfo=null;
	MiniAdpter.version="0.0.1";
	MiniAdpter.isZiYu=false;
	MiniAdpter.isPosMsgYu=false;
	MiniAdpter.parseXMLFromString=function(value){
		var rst;
		var Parser;
		value=value.replace(/>\s+</g,'><');
		try {
			/*__JS__ */rst=(new window.Parser.DOMParser()).parseFromString(value,'text/xml');
			}catch (error){
			throw "需要引入xml解析库文件";
		}
		return rst;
	}

	MiniAdpter.idx=1;
	return MiniAdpter;
})()


//class laya.wx.mini.MiniImage
var MiniImage=(function(){
	function MiniImage(){}
	__class(MiniImage,'laya.wx.mini.MiniImage');
	var __proto=MiniImage.prototype;
	__proto._loadImage=function(url){
		var thisLoader=this;
		var isTransformUrl=false;
		if (url.indexOf("layaNativeDir/")==-1){
			isTransformUrl=true;
			url=URL.formatURL(url);
		}
		if (!MiniFileMgr.getFileInfo(url)){
			if (url.indexOf("http://")!=-1 || url.indexOf("https://")!=-1)
				MiniFileMgr.downImg(url,new Handler(MiniImage,MiniImage.onDownImgCallBack,[url,thisLoader]),url);
			else
			MiniImage.onCreateImage(url,thisLoader,true);
			}else {
			MiniImage.onCreateImage(url,thisLoader,!isTransformUrl);
		}
	}

	MiniImage.onDownImgCallBack=function(sourceUrl,thisLoader,errorCode){
		if (!errorCode)
			MiniImage.onCreateImage(sourceUrl,thisLoader);
		else {
			thisLoader.onError(null);
		}
	}

	MiniImage.onCreateImage=function(sourceUrl,thisLoader,isLocal){
		(isLocal===void 0)&& (isLocal=false);
		var fileNativeUrl;
		if (!isLocal){
			var fileObj=MiniFileMgr.getFileInfo(sourceUrl);
			var fileMd5Name=fileObj.md5;
			fileNativeUrl=MiniFileMgr.getFileNativePath(fileMd5Name);
			}else {
			fileNativeUrl=sourceUrl;
		}
		if (thisLoader.imgCache==null)
			thisLoader.imgCache={};
		var image;
		function clear (){
			image.onload=null;
			image.onerror=null;
			delete thisLoader.imgCache[sourceUrl]
		};
		var onload=function (){
			clear();
			thisLoader.onLoaded(image);
		};
		var onerror=function (){
			clear();
			thisLoader.event(/*laya.events.Event.ERROR*/"error","Load image failed");
		}
		if (thisLoader._type=="nativeimage"){
			image=new Browser.window.Image();
			image.crossOrigin="";
			image.onload=onload;
			image.onerror=onerror;
			image.src=fileNativeUrl;
			thisLoader.imgCache[sourceUrl]=image;
			}else {
			new HTMLImage.create(fileNativeUrl,{onload:onload,onerror:onerror,onCreate:function (img){
					image=img;
					thisLoader.imgCache[sourceUrl]=img;
			}});
		}
	}

	return MiniImage;
})()


//class laya.wx.mini.MiniInput
var MiniInput=(function(){
	function MiniInput(){}
	__class(MiniInput,'laya.wx.mini.MiniInput');
	MiniInput._createInputElement=function(){
		Input['_initInput'](Input['area']=Browser.createElement("textarea"));
		Input['_initInput'](Input['input']=Browser.createElement("input"));
		Input['inputContainer']=Browser.createElement("div");
		Input['inputContainer'].style.position="absolute";
		Input['inputContainer'].style.zIndex=1E5;
		Browser.container.appendChild(Input['inputContainer']);
		Input['inputContainer'].setPos=function (x,y){Input['inputContainer'].style.left=x+'px';Input['inputContainer'].style.top=y+'px';};
		Laya.stage.on("resize",null,MiniInput._onStageResize);
		/*__JS__ */wx.onWindowResize && /*__JS__ */wx.onWindowResize(function(res){
			/*__JS__ */window.dispatchEvent && /*__JS__ */window.dispatchEvent("resize");
		});
		SoundManager._soundClass=MiniSound;
		SoundManager._musicClass=MiniSound;
		var model=MiniAdpter.systemInfo.model;
		var system=MiniAdpter.systemInfo.system;
		if(model.indexOf("iPhone")!=-1){
			Browser.onIPhone=true;
		}
		if(system.indexOf("Android")!=-1 || system.indexOf("Adr")!=-1){
			Browser.onAndriod=true;
		}
	}

	MiniInput._onStageResize=function(){
		var ts=Laya.stage._canvasTransform.identity();
		ts.scale((Browser.width / Render.canvas.width / RunDriver.getPixelRatio()),Browser.height / Render.canvas.height / RunDriver.getPixelRatio());
	}

	MiniInput.wxinputFocus=function(e){
		var _inputTarget=Input['inputElement'].target;
		if (_inputTarget && !_inputTarget.editable){
			return;
		}
		MiniAdpter.window.wx.offKeyboardConfirm();
		MiniAdpter.window.wx.offKeyboardInput();
		MiniAdpter.window.wx.showKeyboard({defaultValue:_inputTarget.text,maxLength:_inputTarget.maxChars,multiple:_inputTarget.multiline,confirmHold:true,confirmType:'done',success:function (res){
				},fail:function (res){
		}});
		MiniAdpter.window.wx.onKeyboardConfirm(function(res){
			var str=res ? res.value :"";
			_inputTarget.text=str;
			_inputTarget.event(/*laya.events.Event.INPUT*/"input");
			laya.wx.mini.MiniInput.inputEnter();
		})
		MiniAdpter.window.wx.onKeyboardInput(function(res){
			var str=res ? res.value :"";
			if (!_inputTarget.multiline){
				if (str.indexOf("\n")!=-1){
					laya.wx.mini.MiniInput.inputEnter();
					return;
				}
			}
			_inputTarget.text=str;
			_inputTarget.event(/*laya.events.Event.INPUT*/"input");
		});
	}

	MiniInput.inputEnter=function(){
		Input['inputElement'].target.focus=false;
	}

	MiniInput.wxinputblur=function(){
		MiniInput.hideKeyboard();
	}

	MiniInput.hideKeyboard=function(){
		MiniAdpter.window.wx.offKeyboardConfirm();
		MiniAdpter.window.wx.offKeyboardInput();
		MiniAdpter.window.wx.hideKeyboard({success:function (res){
				console.log('隐藏键盘')
				},fail:function (res){
				console.log("隐藏键盘出错:"+(res ? res.errMsg :""));
		}});
	}

	return MiniInput;
})()


//class laya.wx.mini.MiniLoader
var MiniLoader=(function(){
	function MiniLoader(){}
	__class(MiniLoader,'laya.wx.mini.MiniLoader');
	var __proto=MiniLoader.prototype;
	/**
	*
	*@param url
	*@param type
	*@param cache
	*@param group
	*@param ignoreCache
	*/
	__proto.load=function(url,type,cache,group,ignoreCache){
		(cache===void 0)&& (cache=true);
		(ignoreCache===void 0)&& (ignoreCache=false);
		var thisLoader=this;
		thisLoader._url=url;
		if (url.indexOf("data:image")===0)thisLoader._type=type=/*laya.net.Loader.IMAGE*/"image";
		else {
			thisLoader._type=type || (type=thisLoader.getTypeFromUrl(url));
		}
		thisLoader._cache=cache;
		thisLoader._data=null;
		var encoding="ascii";
		if (url.indexOf(".fnt")!=-1){
			encoding="utf8";
			}else if (type=="arraybuffer"){
			encoding="";
		};
		var urlType=Utils.getFileExtension(url);
		if ((MiniLoader._fileTypeArr.indexOf(urlType)!=-1)){
			MiniAdpter.EnvConfig.load.call(this,url,type,cache,group,ignoreCache);
			}else {
			if (!MiniFileMgr.getFileInfo(url)){
				if (url.indexOf("layaNativeDir/")!=-1){
					if(MiniAdpter.isZiYu){
						var fileData=MiniFileMgr.ziyuFileData[url];
						thisLoader.onLoaded(fileData);
						return;
						}else{
						MiniFileMgr.read(url,encoding,new Handler(MiniLoader,MiniLoader.onReadNativeCallBack,[encoding,url,type,cache,group,ignoreCache,thisLoader]));
						return;
					}
				}
				url=URL.formatURL(url);
				if (url.indexOf("http://")!=-1 || url.indexOf("https://")!=-1){
					MiniAdpter.EnvConfig.load.call(thisLoader,url,type,cache,group,ignoreCache);
					}else {
					MiniFileMgr.readFile(url,encoding,new Handler(MiniLoader,MiniLoader.onReadNativeCallBack,[encoding,url,type,cache,group,ignoreCache,thisLoader]),url);
				}
				}else {
				MiniAdpter.EnvConfig.load.call(this,url,type,cache,group,ignoreCache);
			}
		}
	}

	MiniLoader.onReadNativeCallBack=function(encoding,url,type,cache,group,ignoreCache,thisLoader,errorCode,data){
		(cache===void 0)&& (cache=true);
		(ignoreCache===void 0)&& (ignoreCache=false);
		(errorCode===void 0)&& (errorCode=0);
		if (!errorCode){
			var tempData;
			if (type==/*laya.net.Loader.JSON*/"json" || type==/*laya.net.Loader.ATLAS*/"atlas"){
				tempData=MiniAdpter.getJson(data.data);
				}else if (type==/*laya.net.Loader.XML*/"xml"){
				tempData=Utils.parseXMLFromString(data.data);
				}else {
				tempData=data.data;
			}
			thisLoader.onLoaded(tempData);
			if(!MiniAdpter.isZiYu &&MiniAdpter.isPosMsgYu && type !=/*laya.net.Loader.BUFFER*/"arraybuffer"){
				/*__JS__ */wx.postMessage({url:url,data:tempData,isLoad:true});
			}
			}else if (errorCode==1){
			MiniAdpter.EnvConfig.load.call(thisLoader,url,type,cache,group,ignoreCache);
		}
	}

	__static(MiniLoader,
	['_fileTypeArr',function(){return this._fileTypeArr=['png','jpg','bmp','jpeg','gif'];}
	]);
	return MiniLoader;
})()


/**
*...
*@author ww
*/
//class laya.wx.mini.MiniLocation
var MiniLocation=(function(){
	function MiniLocation(){}
	__class(MiniLocation,'laya.wx.mini.MiniLocation');
	MiniLocation.__init__=function(){
		MiniAdpter.window.navigator.geolocation.getCurrentPosition=MiniLocation.getCurrentPosition;
		MiniAdpter.window.navigator.geolocation.watchPosition=MiniLocation.watchPosition;
		MiniAdpter.window.navigator.geolocation.clearWatch=MiniLocation.clearWatch;
	}

	MiniLocation.getCurrentPosition=function(success,error,options){
		MiniAdpter.window.wx.getLocation(getSuccess=function(res){
			var rst={};
			rst.coords=res;
			rst.timestamp=Browser.now();
			if (success !=null){
				success(rst);
			}
		},error);
	}

	MiniLocation.watchPosition=function(success,error,options){
		MiniLocation._curID++;
		var curWatchO;
		curWatchO={};
		curWatchO.success=success;
		curWatchO.error=error;
		MiniLocation._watchDic[MiniLocation._curID]=curWatchO;
		Laya.timer.loop(1000,null,MiniLocation._myLoop);
		return MiniLocation._curID;
	}

	MiniLocation.clearWatch=function(id){
		delete MiniLocation._watchDic[id];
		if (!MiniLocation._hasWatch()){
			Laya.timer.clear(null,MiniLocation._myLoop);
		}
	}

	MiniLocation._hasWatch=function(){
		var key;
		for (key in MiniLocation._watchDic){
			if (MiniLocation._watchDic[key])return true;
		}
		return false;
	}

	MiniLocation._myLoop=function(){
		MiniLocation.getCurrentPosition(MiniLocation._mySuccess,MiniLocation._myError);
	}

	MiniLocation._mySuccess=function(res){
		var rst={};
		rst.coords=res;
		rst.timestamp=Browser.now();
		var key;
		for (key in MiniLocation._watchDic){
			if (MiniLocation._watchDic[key].success){
				MiniLocation._watchDic[key].success(rst);
			}
		}
	}

	MiniLocation._myError=function(res){
		var key;
		for (key in MiniLocation._watchDic){
			if (MiniLocation._watchDic[key].error){
				MiniLocation._watchDic[key].error(res);
			}
		}
	}

	MiniLocation._watchDic={};
	MiniLocation._curID=0;
	return MiniLocation;
})()


//class laya.wx.mini.MiniFileMgr extends laya.events.EventDispatcher
var MiniFileMgr=(function(_super){
	function MiniFileMgr(){
		MiniFileMgr.__super.call(this);;
	}

	__class(MiniFileMgr,'laya.wx.mini.MiniFileMgr',_super);
	MiniFileMgr.isLoadFile=function(type){
		return MiniFileMgr._fileTypeArr.indexOf(type)!=-1 ? true :false;
	}

	MiniFileMgr.getFileInfo=function(fileUrl){
		var fileNativePath=fileUrl.split("?")[0];
		var fileObj=MiniFileMgr.filesListObj[fileNativePath];
		if (fileObj==null)
			return null;
		else
		return fileObj;
		return null;
	}

	MiniFileMgr.onFileUpdate=function(tempFilePath,readyUrl){
		var temp=tempFilePath.split("/");
		var tempFileName=temp[temp.length-1];
		var fileObj=MiniFileMgr.getFileInfo(readyUrl);
		if (fileObj==null)
			MiniFileMgr.onSaveFile(readyUrl,tempFileName);
		else {
			if (fileObj.readyUrl !=readyUrl)
				MiniFileMgr.remove(tempFileName,readyUrl);
		}
	}

	MiniFileMgr.exits=function(fileName,callBack){
		var nativeFileName=MiniFileMgr.getFileNativePath(fileName);
		MiniFileMgr.fs.getFileInfo({filePath:nativeFileName,success:function (data){
				callBack !=null && callBack.runWith([0,data]);
				},fail:function (data){
				callBack !=null && callBack.runWith([1,data]);
		}});
	}

	MiniFileMgr.read=function(filePath,encoding,callBack,readyUrl){
		(encoding===void 0)&& (encoding="ascill");
		(readyUrl===void 0)&& (readyUrl="");
		var fileUrl;
		if(readyUrl!=""){
			fileUrl=MiniFileMgr.getFileNativePath(filePath)
			}else{
			fileUrl=filePath;
		}
		MiniFileMgr.fs.readFile({filePath:fileUrl,encoding:encoding,success:function (data){
				callBack !=null && callBack.runWith([0,data]);
				},fail:function (data){
				if (data && readyUrl !="")
					MiniFileMgr.down(readyUrl,encoding,callBack,readyUrl);
				else
				callBack !=null && callBack.runWith([1]);
		}});
	}

	MiniFileMgr.readNativeFile=function(filePath,callBack){
		MiniFileMgr.fs.readFile({filePath:filePath,encoding:"",success:function (data){
				callBack !=null && callBack.runWith([0]);
				},fail:function (data){
				callBack !=null && callBack.runWith([1]);
		}});
	}

	MiniFileMgr.down=function(fileUrl,encoding,callBack,readyUrl){
		(encoding===void 0)&& (encoding="ascill");
		(readyUrl===void 0)&& (readyUrl="");
		var savePath=MiniFileMgr.getFileNativePath(readyUrl);
		var downloadTask=MiniFileMgr.wxdown({url:fileUrl,filePath:savePath,success:function (data){
				if (data.statusCode===200)
					MiniFileMgr.readFile(data.filePath,encoding,callBack,readyUrl);
				},fail:function (data){
				callBack !=null && callBack.runWith([1,data]);
		}});
		downloadTask.onProgressUpdate(function(data){
			callBack !=null && callBack.runWith([2,data.progress]);
		});
	}

	MiniFileMgr.readFile=function(filePath,encoding,callBack,readyUrl){
		(encoding===void 0)&& (encoding="ascill");
		(readyUrl===void 0)&& (readyUrl="");
		MiniFileMgr.fs.readFile({filePath:filePath,encoding:encoding,success:function (data){
				if (filePath.indexOf("http://")!=-1 || filePath.indexOf("https://")!=-1)
					MiniFileMgr.onFileUpdate(filePath,readyUrl);
				callBack !=null && callBack.runWith([0,data]);
				},fail:function (data){
				if (data)
					callBack !=null && callBack.runWith([1,data]);
		}});
	}

	MiniFileMgr.downImg=function(fileUrl,callBack,readyUrl){
		(readyUrl===void 0)&& (readyUrl="");
		var downloadTask=MiniFileMgr.wxdown({url:fileUrl,success:function (data){
				if (data.statusCode===200){
					MiniFileMgr.copyFile(data.tempFilePath,readyUrl,callBack);
				}
				},fail:function (data){
				callBack !=null && callBack.runWith([1,data]);
		}});
	}

	MiniFileMgr.copyFile=function(tempFilePath,readyUrl,callBack){
		var temp=tempFilePath.split("/");
		var tempFileName=temp[temp.length-1];
		var fileurlkey=readyUrl.split("?")[0];
		var fileObj=MiniFileMgr.getFileInfo(readyUrl);
		var saveFilePath=MiniFileMgr.getFileNativePath(tempFileName);
		var totalSize=50 *1024 *1024;
		var chaSize=5 *1024 *1024;
		var fileUseSize=MiniFileMgr.getCacheUseSize();
		if((fileUseSize+chaSize)>=totalSize)
			MiniFileMgr.onClearCacheRes(5 *1024 *1024);
		MiniFileMgr.fs.copyFile({srcPath:tempFilePath,destPath:saveFilePath,success:function (data){
				if (!fileObj){
					MiniFileMgr.onSaveFile(readyUrl,tempFileName);
					callBack !=null && callBack.runWith([0]);
					}else {
					if (fileObj.readyUrl !=readyUrl)
						MiniFileMgr.remove(tempFileName,readyUrl,callBack);
					else
					callBack !=null && callBack.runWith([0]);
				}
				},fail:function (data){
				callBack !=null && callBack.runWith([1,data]);
		}});
	}

	MiniFileMgr.onClearCacheRes=function(memSize){
		var clearFileSize=0;
		for(var key in MiniFileMgr.filesListObj){
			var fileObj=MiniFileMgr.filesListObj[key];
			if(key !="fileUsedSize"){
				if(clearFileSize >=memSize)
					break ;
				var texture=Loader.getRes(fileObj.readyUrl);
				if(texture && texture.bitmap.useNum==0){
					clearFileSize+=fileObj.size;
					MiniFileMgr.remove("",fileObj.readyUrl);
					}else if(texture==null){
					clearFileSize+=fileObj.size;
					MiniFileMgr.remove("",fileObj.readyUrl);
				}
			}
		}
	}

	MiniFileMgr.getFileNativePath=function(fileName){
		return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+fileName;
	}

	MiniFileMgr.remove=function(tempFileName,readyUrl,callBack){
		(readyUrl===void 0)&& (readyUrl="");
		var fileObj=MiniFileMgr.getFileInfo(readyUrl);
		var deleteFileUrl=MiniFileMgr.getFileNativePath(fileObj.md5);
		MiniFileMgr.fs.unlink({filePath:deleteFileUrl,success:function (data){
				var isAdd=tempFileName !="" ? true :false;
				MiniFileMgr.onSaveFile(readyUrl,tempFileName,isAdd);
				callBack !=null && callBack.runWith([0]);
				},fail:function (data){
		}});
	}

	MiniFileMgr.onSaveFile=function(readyUrl,md5Name,isAdd){
		(isAdd===void 0)&& (isAdd=true);
		var fileurlkey=readyUrl.split("?")[0];
		if(MiniFileMgr.filesListObj['fileUsedSize']==null)
			MiniFileMgr.filesListObj['fileUsedSize']=0;
		if(isAdd){
			MiniFileMgr.filesListObj[fileurlkey]={md5:md5Name,readyUrl:readyUrl};
			var fileNativeName=MiniFileMgr.getFileNativePath(md5Name);
			MiniFileMgr.fs.getFileInfo({
				filePath:fileNativeName,
				success:function (data){
					MiniFileMgr.filesListObj[fileurlkey]={md5:md5Name,readyUrl:readyUrl,size:data.size};
					MiniFileMgr.filesListObj['fileUsedSize']=parseInt(MiniFileMgr.filesListObj['fileUsedSize'])+data.size;
					MiniFileMgr.fs.writeFile({filePath:MiniFileMgr.fileNativeDir+"/"+MiniFileMgr.fileListName,encoding:'utf8',data:JSON.stringify(MiniFileMgr.filesListObj),success:function (data){
							},fail:function (data){
					}});
				},
				fail:function (data){
					console.log("fail");
					console.log(data);
				},
				complete:function (data){}
			});
			}else{
			var fileSize=parseInt(MiniFileMgr.filesListObj[fileurlkey].size);
			MiniFileMgr.filesListObj['fileUsedSize']=parseInt(MiniFileMgr.filesListObj['fileUsedSize'])-fileSize;
			delete MiniFileMgr.filesListObj[fileurlkey];
			MiniFileMgr.fs.writeFile({filePath:MiniFileMgr.fileNativeDir+"/"+MiniFileMgr.fileListName,encoding:'utf8',data:JSON.stringify(MiniFileMgr.filesListObj),success:function (data){
					},fail:function (data){
			}});
		}
	}

	MiniFileMgr.getCacheUseSize=function(){
		if(MiniFileMgr.filesListObj && MiniFileMgr.filesListObj['fileUsedSize'])
			return MiniFileMgr.filesListObj['fileUsedSize'];
		return 0;
	}

	MiniFileMgr.existDir=function(dirPath,callBack){
		MiniFileMgr.fs.mkdir({dirPath:dirPath,success:function (data){
				callBack !=null && callBack.runWith([0,{data:JSON.stringify({})}]);
				},fail:function (data){
				if (data.errMsg.indexOf("file already exists")!=-1)
					MiniFileMgr.readSync(MiniFileMgr.fileListName,"utf8",callBack);
				else
				callBack !=null && callBack.runWith([1,data]);
		}});
	}

	MiniFileMgr.readSync=function(filePath,encoding,callBack,readyUrl){
		(encoding===void 0)&& (encoding="ascill");
		(readyUrl===void 0)&& (readyUrl="");
		var fileUrl=MiniFileMgr.getFileNativePath(filePath);
		var filesListStr
		try{
			filesListStr=MiniFileMgr.fs.readFileSync(fileUrl,encoding);
			callBack !=null && callBack.runWith([0,{data:filesListStr}]);
		}
		catch(error){
			callBack !=null && callBack.runWith([1]);
		}
	}

	MiniFileMgr.setNativeFileDir=function(value){
		MiniFileMgr.fileNativeDir=/*__JS__ */wx.env.USER_DATA_PATH+value;
	}

	MiniFileMgr.filesListObj={};
	MiniFileMgr.fileNativeDir=null;
	MiniFileMgr.fileListName="layaairfiles.txt";
	MiniFileMgr.ziyuFileData={};
	__static(MiniFileMgr,
	['_fileTypeArr',function(){return this._fileTypeArr=['json','ani','xml','sk','txt','atlas','swf','part','fnt','proto','lh','lav','lani','lmat','lm','ltc'];},'fs',function(){return this.fs=/*__JS__ */wx.getFileSystemManager();},'wxdown',function(){return this.wxdown=/*__JS__ */wx.downloadFile;}
	]);
	return MiniFileMgr;
})(EventDispatcher)


//class laya.wx.mini.MiniSound extends laya.events.EventDispatcher
var MiniSound=(function(_super){
	function MiniSound(){
		this._sound=null;
		/**
		*声音URL
		*/
		this.url=null;
		/**
		*是否已加载完成
		*/
		this.loaded=false;
		MiniSound.__super.call(this);
		this._sound=MiniSound._createSound();
	}

	__class(MiniSound,'laya.wx.mini.MiniSound',_super);
	var __proto=MiniSound.prototype;
	/**
	*加载声音。
	*@param url 地址。
	*
	*/
	__proto.load=function(url){
		var _$this=this;
		url=URL.formatURL(url);
		this.url=url;
		if (MiniSound._audioCache[url]){
			this.event(/*laya.events.Event.COMPLETE*/"complete");
			return;
		}
		this._sound.src=url;
		this._sound.onCanplay(onCanPlay);
		var me=this;
		function onCanPlay (){
			_clearSound();
			me.loaded=true;
			me.event(/*laya.events.Event.COMPLETE*/"complete");
			MiniSound._audioCache[me.url]=me;
		}
		this._sound.onError(onError);
		function onError (){
			_clearSound();
			me.event(/*laya.events.Event.ERROR*/"error");
		}
		function _clearSound (){
			_$this._sound.onCanplay(MiniSound.bindToThis(_$this.onCanPlayCallBack,_$this));
			_$this._sound.onError(MiniSound.bindToThis(_$this.onCanPlayCallBack,_$this));
		}
	}

	__proto.onCanPlayCallBack=function(){}
	/**
	*播放声音。
	*@param startTime 开始时间,单位秒
	*@param loops 循环次数,0表示一直循环
	*@return 声道 SoundChannel 对象。
	*
	*/
	__proto.play=function(startTime,loops){
		(startTime===void 0)&& (startTime=0);
		(loops===void 0)&& (loops=0);
		var tSound;
		if (this.url==SoundManager._tMusic){
			if (!MiniSound._musicAudio)MiniSound._musicAudio=MiniSound._createSound();
			tSound=MiniSound._musicAudio;
			}else {
			tSound=MiniSound._createSound();
		}
		tSound.src=this.url;
		var channel=new MiniSoundChannel(tSound);
		channel.url=this.url;
		channel.loops=loops;
		channel.startTime=startTime;
		channel.play();
		SoundManager.addChannel(channel);
		return channel;
	}

	/**
	*释放声音资源。
	*
	*/
	__proto.dispose=function(){
		var ad=MiniSound._audioCache[this.url];
		if (ad){
			ad.src="";
			delete MiniSound._audioCache[this.url];
		}
	}

	/**
	*获取总时间。
	*/
	__getset(0,__proto,'duration',function(){
		return this._sound.duration;
	});

	MiniSound._createSound=function(){
		MiniSound._id++;
		return MiniAdpter.window.wx.createInnerAudioContext();
	}

	MiniSound.bindToThis=function(fun,scope){
		var rst=fun;
		/*__JS__ */rst=fun.bind(scope);;
		return rst;
	}

	MiniSound._musicAudio=null;
	MiniSound._id=0;
	MiniSound._audioCache={};
	return MiniSound;
})(EventDispatcher)


/**
*@private
*wxaudio 方式播放声音的音轨控制
*/
//class laya.wx.mini.MiniSoundChannel extends laya.media.SoundChannel
var MiniSoundChannel=(function(_super){
	function MiniSoundChannel(audio){
		this._audio=null;
		this._onEnd=null;
		MiniSoundChannel.__super.call(this);
		this._audio=audio;
		this._onEnd=MiniSoundChannel.bindToThis(this.__onEnd,this);
		audio.onEnded(this._onEnd);
	}

	__class(MiniSoundChannel,'laya.wx.mini.MiniSoundChannel',_super);
	var __proto=MiniSoundChannel.prototype;
	__proto.__onEnd=function(){
		if (this.loops==1){
			if (this.completeHandler){
				Laya.timer.once(10,this,this.__runComplete,[this.completeHandler],false);
				this.completeHandler=null;
			}
			this.stop();
			this.event(/*laya.events.Event.COMPLETE*/"complete");
			return;
		}
		if (this.loops > 0){
			this.loops--;
		}
		this.startTime=0;
		this.play();
	}

	/**
	*播放
	*/
	__proto.play=function(){
		this.isStopped=false;
		SoundManager.addChannel(this);
		this._audio.play();
	}

	/**
	*停止播放
	*
	*/
	__proto.stop=function(){
		this.isStopped=true;
		SoundManager.removeChannel(this);
		this.completeHandler=null;
		if (!this._audio)
			return;
		this._audio.pause();
		this._audio.onStop(MiniSoundChannel.bindToThis(this.onStopEndEd,this));
		this._audio.onEnded(MiniSoundChannel.bindToThis(this.onStopEndEd,this));
		this._audio=null;
	}

	//xiaosong
	__proto.onStopEndEd=function(){}
	__proto.pause=function(){
		this.isStopped=true;
		this._audio.pause();
	}

	__proto.resume=function(){
		if (!this._audio)
			return;
		this.isStopped=false;
		SoundManager.addChannel(this);
		this._audio.play();
	}

	/**
	*当前播放到的位置
	*@return
	*
	*/
	__getset(0,__proto,'position',function(){
		if (!this._audio)
			return 0;
		return this._audio.currentTime;
	});

	/**
	*获取总时间。
	*/
	__getset(0,__proto,'duration',function(){
		if (!this._audio)
			return 0;
		return this._audio.duration;
	});

	/**
	*设置音量
	*@param v
	*
	*/
	/**
	*获取音量
	*@return
	*/
	__getset(0,__proto,'volume',function(){
		return 1;
		},function(v){
	});

	MiniSoundChannel.bindToThis=function(fun,scope){
		var rst=fun;
		/*__JS__ */rst=fun.bind(scope);;
		return rst;
	}

	return MiniSoundChannel;
})(SoundChannel)



})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';var l=this;function p(b,e){var a=b.split("."),c=l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&void 0!==e?c[d]=e:c=c[d]?c[d]:c[d]={}};var q="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function t(b){var e=b.length,a=0,c=Number.POSITIVE_INFINITY,d,f,g,h,k,m,r,n,s,J;for(n=0;n<e;++n)b[n]>a&&(a=b[n]),b[n]<c&&(c=b[n]);d=1<<a;f=new (q?Uint32Array:Array)(d);g=1;h=0;for(k=2;g<=a;){for(n=0;n<e;++n)if(b[n]===g){m=0;r=h;for(s=0;s<g;++s)m=m<<1|r&1,r>>=1;J=g<<16|n;for(s=m;s<d;s+=k)f[s]=J;++h}++g;h<<=1;k<<=1}return[f,a,c]};function u(b,e){this.g=[];this.h=32768;this.c=this.f=this.d=this.k=0;this.input=q?new Uint8Array(b):b;this.l=!1;this.i=v;this.q=!1;if(e||!(e={}))e.index&&(this.d=e.index),e.bufferSize&&(this.h=e.bufferSize),e.bufferType&&(this.i=e.bufferType),e.resize&&(this.q=e.resize);switch(this.i){case w:this.a=32768;this.b=new (q?Uint8Array:Array)(32768+this.h+258);break;case v:this.a=0;this.b=new (q?Uint8Array:Array)(this.h);this.e=this.v;this.m=this.s;this.j=this.t;break;default:throw Error("invalid inflate mode");
}}var w=0,v=1;
u.prototype.u=function(){for(;!this.l;){var b=x(this,3);b&1&&(this.l=!0);b>>>=1;switch(b){case 0:var e=this.input,a=this.d,c=this.b,d=this.a,f=e.length,g=void 0,h=void 0,k=c.length,m=void 0;this.c=this.f=0;if(a+1>=f)throw Error("invalid uncompressed block header: LEN");g=e[a++]|e[a++]<<8;if(a+1>=f)throw Error("invalid uncompressed block header: NLEN");h=e[a++]|e[a++]<<8;if(g===~h)throw Error("invalid uncompressed block header: length verify");if(a+g>e.length)throw Error("input buffer is broken");switch(this.i){case w:for(;d+
g>c.length;){m=k-d;g-=m;if(q)c.set(e.subarray(a,a+m),d),d+=m,a+=m;else for(;m--;)c[d++]=e[a++];this.a=d;c=this.e();d=this.a}break;case v:for(;d+g>c.length;)c=this.e({o:2});break;default:throw Error("invalid inflate mode");}if(q)c.set(e.subarray(a,a+g),d),d+=g,a+=g;else for(;g--;)c[d++]=e[a++];this.d=a;this.a=d;this.b=c;break;case 1:this.j(y,z);break;case 2:A(this);break;default:throw Error("unknown BTYPE: "+b);}}return this.m()};
var B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],C=q?new Uint16Array(B):B,D=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],E=q?new Uint16Array(D):D,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],G=q?new Uint8Array(F):F,H=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],I=q?new Uint16Array(H):H,K=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,
13],L=q?new Uint8Array(K):K,M=new (q?Uint8Array:Array)(288),N,O;N=0;for(O=M.length;N<O;++N)M[N]=143>=N?8:255>=N?9:279>=N?7:8;var y=t(M),P=new (q?Uint8Array:Array)(30),Q,R;Q=0;for(R=P.length;Q<R;++Q)P[Q]=5;var z=t(P);function x(b,e){for(var a=b.f,c=b.c,d=b.input,f=b.d,g=d.length,h;c<e;){if(f>=g)throw Error("input buffer is broken");a|=d[f++]<<c;c+=8}h=a&(1<<e)-1;b.f=a>>>e;b.c=c-e;b.d=f;return h}
function S(b,e){for(var a=b.f,c=b.c,d=b.input,f=b.d,g=d.length,h=e[0],k=e[1],m,r;c<k&&!(f>=g);)a|=d[f++]<<c,c+=8;m=h[a&(1<<k)-1];r=m>>>16;b.f=a>>r;b.c=c-r;b.d=f;return m&65535}
function A(b){function e(a,b,c){var e,d=this.p,f,g;for(g=0;g<a;)switch(e=S(this,b),e){case 16:for(f=3+x(this,2);f--;)c[g++]=d;break;case 17:for(f=3+x(this,3);f--;)c[g++]=0;d=0;break;case 18:for(f=11+x(this,7);f--;)c[g++]=0;d=0;break;default:d=c[g++]=e}this.p=d;return c}var a=x(b,5)+257,c=x(b,5)+1,d=x(b,4)+4,f=new (q?Uint8Array:Array)(C.length),g,h,k,m;for(m=0;m<d;++m)f[C[m]]=x(b,3);if(!q){m=d;for(d=f.length;m<d;++m)f[C[m]]=0}g=t(f);h=new (q?Uint8Array:Array)(a);k=new (q?Uint8Array:Array)(c);b.p=0;
b.j(t(e.call(b,a,g,h)),t(e.call(b,c,g,k)))}u.prototype.j=function(b,e){var a=this.b,c=this.a;this.n=b;for(var d=a.length-258,f,g,h,k;256!==(f=S(this,b));)if(256>f)c>=d&&(this.a=c,a=this.e(),c=this.a),a[c++]=f;else{g=f-257;k=E[g];0<G[g]&&(k+=x(this,G[g]));f=S(this,e);h=I[f];0<L[f]&&(h+=x(this,L[f]));c>=d&&(this.a=c,a=this.e(),c=this.a);for(;k--;)a[c]=a[c++-h]}for(;8<=this.c;)this.c-=8,this.d--;this.a=c};
u.prototype.t=function(b,e){var a=this.b,c=this.a;this.n=b;for(var d=a.length,f,g,h,k;256!==(f=S(this,b));)if(256>f)c>=d&&(a=this.e(),d=a.length),a[c++]=f;else{g=f-257;k=E[g];0<G[g]&&(k+=x(this,G[g]));f=S(this,e);h=I[f];0<L[f]&&(h+=x(this,L[f]));c+k>d&&(a=this.e(),d=a.length);for(;k--;)a[c]=a[c++-h]}for(;8<=this.c;)this.c-=8,this.d--;this.a=c};
u.prototype.e=function(){var b=new (q?Uint8Array:Array)(this.a-32768),e=this.a-32768,a,c,d=this.b;if(q)b.set(d.subarray(32768,b.length));else{a=0;for(c=b.length;a<c;++a)b[a]=d[a+32768]}this.g.push(b);this.k+=b.length;if(q)d.set(d.subarray(e,e+32768));else for(a=0;32768>a;++a)d[a]=d[e+a];this.a=32768;return d};
u.prototype.v=function(b){var e,a=this.input.length/this.d+1|0,c,d,f,g=this.input,h=this.b;b&&("number"===typeof b.o&&(a=b.o),"number"===typeof b.r&&(a+=b.r));2>a?(c=(g.length-this.d)/this.n[2],f=258*(c/2)|0,d=f<h.length?h.length+f:h.length<<1):d=h.length*a;q?(e=new Uint8Array(d),e.set(h)):e=h;return this.b=e};
u.prototype.m=function(){var b=0,e=this.b,a=this.g,c,d=new (q?Uint8Array:Array)(this.k+(this.a-32768)),f,g,h,k;if(0===a.length)return q?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(g=a.length;f<g;++f){c=a[f];h=0;for(k=c.length;h<k;++h)d[b++]=c[h]}f=32768;for(g=this.a;f<g;++f)d[b++]=e[f];this.g=[];return this.buffer=d};
u.prototype.s=function(){var b,e=this.a;q?this.q?(b=new Uint8Array(e),b.set(this.b.subarray(0,e))):b=this.b.subarray(0,e):(this.b.length>e&&(this.b.length=e),b=this.b);return this.buffer=b};p("Zlib.RawInflate",u);p("Zlib.RawInflate.prototype.decompress",u.prototype.u);var T={ADAPTIVE:v,BLOCK:w},U,V,W,X;if(Object.keys)U=Object.keys(T);else for(V in U=[],W=0,T)U[W++]=V;W=0;for(X=U.length;W<X;++W)V=U[W],p("Zlib.RawInflate.BufferType."+V,T[V]);}).call(this); //@ sourceMappingURL=rawinflate.min.js.map


(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Browser=laya.utils.Browser,Byte=laya.utils.Byte,ColorFilter=laya.filters.ColorFilter,Ease=laya.utils.Ease;
	var Event=laya.events.Event,EventDispatcher=laya.events.EventDispatcher,Graphics=laya.display.Graphics,HTMLDivElement=laya.html.dom.HTMLDivElement;
	var Handler=laya.utils.Handler,HitArea=laya.utils.HitArea,Input=laya.display.Input,Log=laya.utils.Log,Node=laya.display.Node;
	var Point=laya.maths.Point,Rectangle=laya.maths.Rectangle,Render=laya.renders.Render,Sound=laya.media.Sound;
	var SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite,Stage=laya.display.Stage,Text=laya.display.Text;
	var Texture=laya.resource.Texture,Tween=laya.utils.Tween,Utils=laya.utils.Utils;
Laya.interface('fairygui.IUISource');
Laya.interface('fairygui.IColorGear');
Laya.interface('fairygui.IAnimationGear');
//class fairygui.action.ControllerAction
var ControllerAction=(function(){
	function ControllerAction(){
		this.fromPage=null;
		this.toPage=null;
	}

	__class(ControllerAction,'fairygui.action.ControllerAction');
	var __proto=ControllerAction.prototype;
	__proto.run=function(controller,prevPage,curPage){
		if((this.fromPage==null || this.fromPage.length==0 || this.fromPage.indexOf(prevPage)!=-1)
			&& (this.toPage==null || this.toPage.length==0 || this.toPage.indexOf(curPage)!=-1))
		this.enter(controller);
		else
		this.leave(controller);
	}

	__proto.enter=function(controller){}
	__proto.leave=function(controller){}
	__proto.setup=function(xml){
		var str;
		str=xml.getAttribute("fromPage");
		if(str)
			this.fromPage=str.split(",");
		str=xml.getAttribute("toPage");
		if(str)
			this.toPage=str.split(",");
	}

	ControllerAction.createAction=function(type){
		switch(type){
			case "play_transition":
				return new PlayTransitionAction();
			case "change_page":
				return new ChangePageAction();
			}
		return null;
	}

	return ControllerAction;
})()


//class fairygui.AssetProxy
var AssetProxy=(function(){
	function AssetProxy(){
		this._asset=null;
		this._asset=Laya.loader;
	}

	__class(AssetProxy,'fairygui.AssetProxy');
	var __proto=AssetProxy.prototype;
	__proto.getRes=function(url){
		return this._asset.getRes(url);
	}

	__proto.load=function(url,complete,progress,type,priority,cache){
		(priority===void 0)&& (priority=1);
		(cache===void 0)&& (cache=true);
		this._asset.load(url,complete,progress,type,priority,cache);
	}

	__proto.setAsset=function(asset){
		this._asset=asset;
	}

	__getset(1,AssetProxy,'inst',function(){
		if(fairygui.AssetProxy._inst==null)
			AssetProxy._inst=new AssetProxy();
		return fairygui.AssetProxy._inst;
	});

	AssetProxy._inst=null;
	return AssetProxy;
})()


//class fairygui.AsyncOperation
var AsyncOperation=(function(){
	function AsyncOperation(){
		/**
		*callback(obj:GObject)
		*/
		this.callback=null;
		this._itemList=null;
		this._objectPool=null;
		this._index=0;
		this._itemList=[];
		this._objectPool=[];
	}

	__class(AsyncOperation,'fairygui.AsyncOperation');
	var __proto=AsyncOperation.prototype;
	__proto.createObject=function(pkgName,resName){
		var pkg=UIPackage.getByName(pkgName);
		if(pkg){
			var pi=pkg.getItemByName(resName);
			if(!pi)
				throw new Error("resource not found: "+resName);
			this.internalCreateObject(pi);
		}
		else
		throw new Error("package not found: "+pkgName);
	}

	__proto.createObjectFromURL=function(url){
		var pi=UIPackage.getItemByURL(url);
		if(pi)
			this.internalCreateObject(pi);
		else
		throw new Error("resource not found: "+url);
	}

	__proto.cancel=function(){
		Laya.timer.clear(this,this.run);
		this._itemList.length=0;
		if(this._objectPool.length>0){
			var obj;
			for(var $each_obj in this._objectPool){
				obj=this._objectPool[$each_obj];
				obj.dispose();
			}
			this._objectPool.length=0;
		}
	}

	__proto.internalCreateObject=function(item){
		this._itemList.length=0;
		this._objectPool.length=0;
		this.collectComponentChildren(item);
		this._itemList.push(new DisplayListItem(item,null));
		this._index=0;
		Laya.timer.frameLoop(1,this,this.run);
	}

	__proto.collectComponentChildren=function(item){
		item.owner.getItemAsset(item);
		var cnt=item.displayList.length;
		for (var i=0;i < cnt;i++){
			var di=item.displayList[i];
			if (di.packageItem !=null && di.packageItem.type==4)
				this.collectComponentChildren(di.packageItem);
			else if (di.type=="list"){
				var defaultItem=null;
				di.listItemCount=0;
				var col=di.desc.childNodes;
				var length=col.length;
				for (var j=0;j < length;j++){
					var cxml=col[j];
					if(cxml.nodeName !="item")
						continue ;
					var url=cxml.getAttribute("url");
					if (!url){
						if (defaultItem==null)
							defaultItem=di.desc.getAttribute("defaultItem");
						url=defaultItem;
						if (!url)
							continue ;
					};
					var pi=UIPackage.getItemByURL(url);
					if (pi){
						if (pi.type==4)
							this.collectComponentChildren(pi);
						this._itemList.push(new DisplayListItem(pi,null));
						di.listItemCount++;
					}
				}
			}
			this._itemList.push(di);
		}
	}

	__proto.run=function(){
		var obj;
		var di;
		var poolStart=0;
		var k=0;
		var t=Browser.now();
		var frameTime=UIConfig$1.frameTimeForAsyncUIConstruction;
		var totalItems=this._itemList.length;
		while(this._index<totalItems){
			di=this._itemList[this._index];
			if (di.packageItem !=null){
				obj=UIObjectFactory.newObject(di.packageItem);
				obj.packageItem=di.packageItem;
				this._objectPool.push(obj);
				UIPackage._constructing++;
				if (di.packageItem.type==4){
					poolStart=this._objectPool.length-di.packageItem.displayList.length-1;
					(obj).constructFromResource2(this._objectPool,poolStart);
					this._objectPool.splice(poolStart,di.packageItem.displayList.length);
				}
				else{
					obj.constructFromResource();
				}
				UIPackage._constructing--;
			}
			else{
				obj=UIObjectFactory.newObject2(di.type);
				this._objectPool.push(obj);
				if (di.type=="list" && di.listItemCount > 0){
					poolStart=this._objectPool.length-di.listItemCount-1;
					for (k=0;k < di.listItemCount;k++)
					(obj).itemPool.returnObject(this._objectPool[k+poolStart]);
					this._objectPool.splice(poolStart,di.listItemCount);
				}
			}
			this._index++;
			if ((this._index % 5==0)&& Browser.now()-t >=frameTime)
				return;
		}
		Laya.timer.clear(this,this.run);
		var result=this._objectPool[0];
		this._itemList.length=0;
		this._objectPool.length=0;
		if(this.callback!=null)
			this.callback.runWith(result);
	}

	return AsyncOperation;
})()


//class fairygui.AutoSizeType
var AutoSizeType=(function(){
	function AutoSizeType(){}
	__class(AutoSizeType,'fairygui.AutoSizeType');
	AutoSizeType.parse=function(value){
		switch (value){
			case "none":
				return 0;
			case "both":
				return 1;
			case "height":
				return 2;
			default :
				return 0;
			}
	}

	AutoSizeType.None=0;
	AutoSizeType.Both=1;
	AutoSizeType.Height=2;
	return AutoSizeType;
})()


//class fairygui.ButtonMode
var ButtonMode=(function(){
	function ButtonMode(){}
	__class(ButtonMode,'fairygui.ButtonMode');
	ButtonMode.parse=function(value){
		switch (value){
			case "Common":
				return 0;
			case "Check":
				return 1;
			case "Radio":
				return 2;
			default :
				return 0;
			}
	}

	ButtonMode.Common=0;
	ButtonMode.Check=1;
	ButtonMode.Radio=2;
	return ButtonMode;
})()


//class fairygui.ChildrenRenderOrder
var ChildrenRenderOrder=(function(){
	function ChildrenRenderOrder(){}
	__class(ChildrenRenderOrder,'fairygui.ChildrenRenderOrder');
	ChildrenRenderOrder.parse=function(value){
		switch (value){
			case "ascent":
				return 0;
			case "descent":
				return 1;
			case "arch":
				return 2;
			default :
				return 0;
			}
	}

	ChildrenRenderOrder.Ascent=0;
	ChildrenRenderOrder.Descent=1;
	ChildrenRenderOrder.Arch=2;
	return ChildrenRenderOrder;
})()


//class fairygui.display.BitmapFont
var BitmapFont$1=(function(){
	function BitmapFont(){
		this.id=null;
		this.size=0;
		this.ttf=false;
		this.glyphs=null;
		this.resizable=false;
		this.glyphs={};
	}

	__class(BitmapFont,'fairygui.display.BitmapFont',null,'BitmapFont$1');
	return BitmapFont;
})()


//class fairygui.display.BMGlyph
var BMGlyph=(function(){
	function BMGlyph(){
		this.x=0;
		this.y=0;
		this.offsetX=0;
		this.offsetY=0;
		this.width=0;
		this.height=0;
		this.advance=0;
		this.lineHeight=0;
		this.channel=0;
		this.texture=null;
	}

	__class(BMGlyph,'fairygui.display.BMGlyph');
	return BMGlyph;
})()


//class fairygui.display.Frame
var Frame=(function(){
	function Frame(){
		this.rect=null;
		this.addDelay=0;
		this.texture=null;
		this.rect=new Rectangle();
	}

	__class(Frame,'fairygui.display.Frame');
	return Frame;
})()


//class fairygui.display.PlayState
var PlayState=(function(){
	function PlayState(){
		this.reachEnding=false;
		this.reversed=false;
		this.repeatedCount=0;
		this._curFrame=0;
		this._curFrameDelay=0;
		this._lastUpdateSeq=0;
	}

	__class(PlayState,'fairygui.display.PlayState');
	var __proto=PlayState.prototype;
	__proto.update=function(mc){
		var elapsed=NaN;
		var frameId=Laya.timer.currFrame;
		if (frameId-this._lastUpdateSeq !=1)
			elapsed=0;
		else
		elapsed=Laya.timer.delta;
		this._lastUpdateSeq=frameId;
		this.reachEnding=false;
		this._curFrameDelay+=elapsed;
		var interval=mc.interval+mc.frames[this._curFrame].addDelay+((this._curFrame==0 && this.repeatedCount > 0)? mc.repeatDelay :0);
		if (this._curFrameDelay < interval)
			return;
		this._curFrameDelay-=interval;
		if(this._curFrameDelay>mc.interval)
			this._curFrameDelay=mc.interval;
		if (mc.swing){
			if(this.reversed){
				this._curFrame--;
				if(this._curFrame<=0){
					this._curFrame=0;
					this.repeatedCount++;
					this.reversed=!this.reversed;
				}
			}
			else{
				this._curFrame++;
				if (this._curFrame > mc.frameCount-1){
					this._curFrame=Math.max(0,mc.frameCount-2);
					this.repeatedCount++;
					this.reachEnding=true;
					this.reversed=!this.reversed;
				}
			}
		}
		else{
			this._curFrame++;
			if (this._curFrame > mc.frameCount-1){
				this._curFrame=0;
				this.repeatedCount++;
				this.reachEnding=true;
			}
		}
	}

	__proto.rewind=function(){
		this._curFrame=0;
		this._curFrameDelay=0;
		this.reversed=false;
		this.reachEnding=false;
	}

	__proto.reset=function(){
		this._curFrame=0;
		this._curFrameDelay=0;
		this.repeatedCount=0;
		this.reachEnding=false;
		this.reversed=false;
	}

	__proto.copy=function(src){
		this._curFrame=src._curFrame;
		this._curFrameDelay=src._curFrameDelay;
		this.repeatedCount=src.repeatedCount;
		this.reachEnding=src.reachEnding;
		this.reversed=src.reversed;
	}

	__getset(0,__proto,'currentFrame',function(){
		return this._curFrame;
		},function(value){
		this._curFrame=value;
		this._curFrameDelay=0;
	});

	return PlayState;
})()


//class fairygui.DisplayListItem
var DisplayListItem=(function(){
	function DisplayListItem(packageItem,type){
		this.packageItem=null;
		this.type=null;
		this.desc=null;
		this.listItemCount=0;
		this.packageItem=packageItem;
		this.type=type;
	}

	__class(DisplayListItem,'fairygui.DisplayListItem');
	return DisplayListItem;
})()


//class fairygui.DragDropManager
var DragDropManager=(function(){
	function DragDropManager(){
		this._agent=null;
		this._sourceData=null;
		this._agent=new GLoader();
		this._agent.draggable=true;
		this._agent.touchable=false;
		this._agent.setSize(100,100);
		this._agent.setPivot(0.5,0.5,true);
		this._agent.align="center";
		this._agent.verticalAlign="middle";
		this._agent.sortingOrder=1000000;
		this._agent.on("fui_drag_end",this,this.__dragEnd);
	}

	__class(DragDropManager,'fairygui.DragDropManager');
	var __proto=DragDropManager.prototype;
	__proto.startDrag=function(source,icon,sourceData,touchPointID){
		(touchPointID===void 0)&& (touchPointID=-1);
		if(this._agent.parent !=null)
			return;
		this._sourceData=sourceData;
		this._agent.url=icon;
		GRoot.inst.addChild(this._agent);
		var pt=GRoot.inst.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY);
		this._agent.setXY(pt.x,pt.y);
		this._agent.startDrag(touchPointID);
	}

	__proto.cancel=function(){
		if(this._agent.parent !=null){
			this._agent.stopDrag();
			GRoot.inst.removeChild(this._agent);
			this._sourceData=null;
		}
	}

	__proto.__dragEnd=function(evt){
		if(this._agent.parent==null)
			return;
		GRoot.inst.removeChild(this._agent);
		var sourceData=this._sourceData;
		this._sourceData=null;
		var obj=GObject.cast(evt.target);
		while(obj !=null){
			if(obj.displayObject.hasListener("fui_drop")){
				obj.requestFocus();
				obj.displayObject.event("fui_drop",[sourceData,Events.createEvent("fui_drop",obj.displayObject,evt)]);
				return;
			}
			obj=obj.parent;
		}
	}

	__getset(0,__proto,'dragAgent',function(){
		return this._agent;
	});

	__getset(0,__proto,'dragging',function(){
		return this._agent.parent !=null;
	});

	__getset(1,DragDropManager,'inst',function(){
		if(fairygui.DragDropManager._inst==null)
			fairygui.DragDropManager._inst=new DragDropManager();
		return fairygui.DragDropManager._inst;
	});

	DragDropManager._inst=null;
	return DragDropManager;
})()


//class fairygui.Events
var Events=(function(){
	function Events(){}
	__class(Events,'fairygui.Events');
	Events.createEvent=function(type,target,source){
		fairygui.Events.$event.setTo(type,target,source?source.target:target);
		if(source){
			fairygui.Events.$event.touchId=source.touchId;
			fairygui.Events.$event.nativeEvent=source.nativeEvent;
		}
		else{
			fairygui.Events.$event.nativeEvent=null;
		}
		fairygui.Events.$event._stoped=false;
		return fairygui.Events.$event;
	}

	Events.dispatch=function(type,target,source){
		target.event(type,fairygui.Events.createEvent(type,target,source));
	}

	Events.STATE_CHANGED="fui_state_changed";
	Events.XY_CHANGED="fui_xy_changed";
	Events.SIZE_CHANGED="fui_size_changed";
	Events.SIZE_DELAY_CHANGE="fui_size_delay_change";
	Events.CLICK_ITEM="fui_click_item";
	Events.SCROLL="fui_scroll";
	Events.SCROLL_END="fui_scroll_end";
	Events.DROP="fui_drop";
	Events.FOCUS_CHANGED="fui_focus_changed";
	Events.DRAG_START="fui_drag_start";
	Events.DRAG_MOVE="fui_drag_move";
	Events.DRAG_END="fui_drag_end";
	Events.PULL_DOWN_RELEASE="fui_pull_down_release";
	Events.PULL_UP_RELEASE="fui_pull_up_release";
	Events.GEAR_STOP="fui_gear_stop";
	__static(Events,
	['$event',function(){return this.$event=new Event();}
	]);
	return Events;
})()


//class fairygui.FlipType
var FlipType=(function(){
	function FlipType(){}
	__class(FlipType,'fairygui.FlipType');
	FlipType.parse=function(value){
		switch (value){
			case "hz":
				return 1;
			case "vt":
				return 2;
			case "both":
				return 3;
			default :
				return 0;
			}
	}

	FlipType.None=0;
	FlipType.Horizontal=1;
	FlipType.Vertical=2;
	FlipType.Both=3;
	return FlipType;
})()


//class fairygui.GObject
var GObject=(function(){
	function GObject(){
		this.data=null;
		this.packageItem=null;
		this._x=0;
		this._y=0;
		this._alpha=1;
		this._rotation=0;
		this._visible=true;
		this._touchable=true;
		this._grayed=false;
		this._draggable=false;
		this._scaleX=1;
		this._scaleY=1;
		this._skewX=0;
		this._skewY=0;
		this._pivotX=0;
		this._pivotY=0;
		this._pivotAsAnchor=false;
		this._pivotOffsetX=0;
		this._pivotOffsetY=0;
		this._sortingOrder=0;
		this._internalVisible=true;
		this._handlingController=false;
		this._focusable=false;
		this._tooltips=null;
		this._pixelSnapping=false;
		this._relations=null;
		this._group=null;
		this._gears=null;
		this._dragBounds=null;
		this._displayObject=null;
		this._yOffset=0;
		//Size的实现方式，有两种，0-GObject的w/h等于DisplayObject的w/h。1-GObject的sourceWidth/sourceHeight等于DisplayObject的w/h，剩余部分由scale实现
		this._sizeImplType=0;
		this.minWidth=0;
		this.minHeight=0;
		this.maxWidth=0;
		this.maxHeight=0;
		this.sourceWidth=0;
		this.sourceHeight=0;
		this.initWidth=0;
		this.initHeight=0;
		this._parent=null;
		this._width=0;
		this._height=0;
		this._rawWidth=0;
		this._rawHeight=0;
		this._id=null;
		this._name=null;
		this._underConstruct=false;
		this._gearLocked=false;
		this._sizePercentInGroup=0;
		this._touchDownPoint=null;
		;
		this._id=""+fairygui.GObject._gInstanceCounter++;
		this._name="";
		this.createDisplayObject();
		this._relations=new Relations(this);
		this._gears=__newvec(8,null);
	}

	__class(GObject,'fairygui.GObject');
	var __proto=GObject.prototype;
	__proto.setXY=function(xv,yv){
		if(this._x !=xv || this._y !=yv){
			var dx=xv-this._x;
			var dy=yv-this._y;
			this._x=xv;
			this._y=yv;
			this.handleXYChanged();
			if((this instanceof fairygui.GGroup ))
				(this).moveChildren(dx,dy);
			this.updateGear(1);
			if(this._parent && !((this._parent instanceof fairygui.GList ))){
				this._parent.setBoundsChangedFlag();
				if (this._group !=null)
					this._group.setBoundsChangedFlag();
				this.displayObject.event("fui_xy_changed");
			}
			if (GObject.draggingObject==this && !GObject.sUpdateInDragging)
				this.localToGlobalRect(0,0,this.width,this.height,GObject.sGlobalRect);
		}
	}

	__proto.center=function(restraint){
		(restraint===void 0)&& (restraint=false);
		var r;
		if(this._parent !=null)
			r=this.parent;
		else
		r=this.root;
		this.setXY((r.width-this.width)/ 2,(r.height-this.height)/ 2);
		if(restraint){
			this.addRelation(r,3);
			this.addRelation(r,10);
		}
	}

	__proto.setSize=function(wv,hv,ignorePivot){
		(ignorePivot===void 0)&& (ignorePivot=false);
		if(this._rawWidth !=wv || this._rawHeight !=hv){
			this._rawWidth=wv;
			this._rawHeight=hv;
			if(wv<this.minWidth)
				wv=this.minWidth;
			if(hv<this.minHeight)
				hv=this.minHeight;
			if(this.maxWidth>0 && wv>this.maxWidth)
				wv=this.maxWidth;
			if(this.maxHeight>0 && hv>this.maxHeight)
				hv=this.maxHeight;
			var dWidth=wv-this._width;
			var dHeight=hv-this._height;
			this._width=wv;
			this._height=hv;
			this.handleSizeChanged();
			if(this._pivotX !=0 || this._pivotY !=0){
				if(!this._pivotAsAnchor){
					if(!ignorePivot)
						this.setXY(this.x-this._pivotX *dWidth,this.y-this._pivotY *dHeight);
					this.updatePivotOffset();
				}
				else
				this.applyPivot();
			}
			if ((this instanceof fairygui.GGroup ))
				(this).resizeChildren(dWidth,dHeight);
			this.updateGear(2);
			if(this._parent){
				this._relations.onOwnerSizeChanged(dWidth,dHeight,this._pivotAsAnchor || !ignorePivot);
				this._parent.setBoundsChangedFlag();
				if (this._group !=null)
					this._group.setBoundsChangedFlag(true);
			}
			this.displayObject.event("fui_size_changed");
		}
	}

	__proto.ensureSizeCorrect=function(){}
	__proto.setScale=function(sx,sy){
		if(this._scaleX !=sx || this._scaleY !=sy){
			this._scaleX=sx;
			this._scaleY=sy;
			this.handleScaleChanged();
			this.applyPivot();
			this.updateGear(2);
		}
	}

	__proto.setSkew=function(sx,sy){
		if(this._skewX !=sx || this._skewY !=sy){
			this._skewX=sx;
			this._skewY=sy;
			if(this._displayObject!=null){
				this._displayObject.skew(-sx,sy);
				this.applyPivot();
			}
		}
	}

	__proto.setPivot=function(xv,yv,asAnchor){
		(yv===void 0)&& (yv=0);
		(asAnchor===void 0)&& (asAnchor=false);
		if(this._pivotX !=xv || this._pivotY !=yv || this._pivotAsAnchor!=asAnchor){
			this._pivotX=xv;
			this._pivotY=yv;
			this._pivotAsAnchor=asAnchor;
			this.updatePivotOffset();
			this.handleXYChanged();
		}
	}

	__proto.internalSetPivot=function(xv,yv,asAnchor){
		this._pivotX=xv;
		this._pivotY=yv;
		this._pivotAsAnchor=asAnchor;
		if(this._pivotAsAnchor)
			this.handleXYChanged();
	}

	__proto.updatePivotOffset=function(){
		if(this._displayObject!=null){
			if(this._displayObject.transform && (this._pivotX!=0 || this._pivotY!=0)){
				if(this._sizeImplType==0){
					fairygui.GObject.sHelperPoint.x=this._pivotX*this._width;
					fairygui.GObject.sHelperPoint.y=this._pivotY*this._height;
				}
				else {
					fairygui.GObject.sHelperPoint.x=this._pivotX*this.sourceWidth;
					fairygui.GObject.sHelperPoint.y=this._pivotY*this.sourceHeight;
				};
				var pt=this._displayObject.transform.transformPoint(fairygui.GObject.sHelperPoint);
				this._pivotOffsetX=this._pivotX*this._width-pt.x;
				this._pivotOffsetY=this._pivotY*this._height-pt.y;
			}
			else{
				this._pivotOffsetX=0;
				this._pivotOffsetY=0;
			}
		}
	}

	__proto.applyPivot=function(){
		if(this._pivotX !=0 || this._pivotY !=0){
			this.updatePivotOffset();
			this.handleXYChanged();
		}
	}

	__proto.requestFocus=function(){
		var p=this;
		while (p && !p._focusable)
		p=p.parent;
		if (p !=null)
			this.root.focus=p;
	}

	__proto.__rollOver=function(evt){
		Laya.timer.once(100,this,this.__doShowTooltips);
	}

	__proto.__doShowTooltips=function(){
		var r=this.root;
		if(r)
			this.root.showTooltips(this._tooltips);
	}

	__proto.__rollOut=function(evt){
		Laya.timer.clear(this,this.__doShowTooltips);
		this.root.hideTooltips();
	}

	__proto.getGear=function(index){
		var gear=this._gears[index];
		if (gear==null){
			switch (index){
				case 0:
					gear=new GearDisplay(this);
					break ;
				case 1:
					gear=new GearXY(this);
					break ;
				case 2:
					gear=new GearSize(this);
					break ;
				case 3:
					gear=new GearLook(this);
					break ;
				case 4:
					gear=new GearColor(this);
					break ;
				case 5:
					gear=new GearAnimation(this);
					break ;
				case 6:
					gear=new GearText(this);
					break ;
				case 7:
					gear=new GearIcon(this);
					break ;
				default :
					throw new Error("FairyGUI: invalid gear index!");
				}
			this._gears[index]=gear;
		}
		return gear;
	}

	__proto.updateGear=function(index){
		if(this._underConstruct || this._gearLocked)
			return;
		var gear=this._gears[index];
		if (gear!=null && gear.controller!=null)
			gear.updateState();
	}

	__proto.checkGearController=function(index,c){
		return this._gears[index] !=null && this._gears[index].controller==c;
	}

	__proto.updateGearFromRelations=function(index,dx,dy){
		if (this._gears[index] !=null)
			this._gears[index].updateFromRelations(dx,dy);
	}

	__proto.addDisplayLock=function(){
		var gearDisplay=(this._gears[0]);
		if(gearDisplay && gearDisplay.controller){
			var ret=gearDisplay.addLock();
			this.checkGearDisplay();
			return ret;
		}
		else
		return 0;
	}

	__proto.releaseDisplayLock=function(token){
		var gearDisplay=(this._gears[0]);
		if(gearDisplay && gearDisplay.controller){
			gearDisplay.releaseLock(token);
			this.checkGearDisplay();
		}
	}

	__proto.checkGearDisplay=function(){
		if(this._handlingController)
			return;
		var connected=this._gears[0]==null || (this._gears[0]).connected;
		if(connected!=this._internalVisible){
			this._internalVisible=connected;
			if(this._parent)
				this._parent.childStateChanged(this);
		}
	}

	__proto.addRelation=function(target,relationType,usePercent){
		(usePercent===void 0)&& (usePercent=false);
		this._relations.add(target,relationType,usePercent);
	}

	__proto.removeRelation=function(target,relationType){
		(relationType===void 0)&& (relationType=0);
		this._relations.remove(target,relationType);
	}

	__proto.removeFromParent=function(){
		if (this._parent)
			this._parent.removeChild(this);
	}

	__proto.dispose=function(){
		this.removeFromParent();
		this._relations.dispose();
		this._displayObject.destroy();
	}

	__proto.onClick=function(thisObj,listener,args){
		this.on("click",thisObj,listener,args);
	}

	__proto.offClick=function(thisObj,listener){
		this.off("click",thisObj,listener);
	}

	__proto.hasClickListener=function(){
		return this._displayObject.hasListener("click");
	}

	__proto.on=function(type,thisObject,listener,args){
		this._displayObject.on(type,thisObject,listener,args);
	}

	__proto.off=function(type,thisObject,listener){
		this._displayObject.off(type,thisObject,listener);
	}

	__proto.startDrag=function(touchPointID){
		(touchPointID===void 0)&& (touchPointID=-1);
		if (this._displayObject.stage==null)
			return;
		this.dragBegin();
	}

	__proto.stopDrag=function(){
		this.dragEnd();
	}

	__proto.localToGlobal=function(ax,ay,resultPoint){
		(ax===void 0)&& (ax=0);
		(ay===void 0)&& (ay=0);
		if(this._pivotAsAnchor){
			ax+=this._pivotX*this._width;
			ay+=this._pivotY*this._height;
		}
		if(!resultPoint){
			resultPoint=fairygui.GObject.sHelperPoint;
			resultPoint.x=ax;
			resultPoint.y=ay;
			return this._displayObject.localToGlobal(resultPoint,true);
		}
		else{
			resultPoint.x=ax;
			resultPoint.y=ay;
			return this._displayObject.localToGlobal(resultPoint,false);
		}
	}

	__proto.globalToLocal=function(ax,ay,resultPoint){
		(ax===void 0)&& (ax=0);
		(ay===void 0)&& (ay=0);
		if(!resultPoint){
			resultPoint=fairygui.GObject.sHelperPoint;
			resultPoint.x=ax;
			resultPoint.y=ay;
			resultPoint=this._displayObject.globalToLocal(resultPoint,true);
		}
		else{
			resultPoint.x=ax;
			resultPoint.y=ay;
			this._displayObject.globalToLocal(resultPoint,false);
		}
		if(this._pivotAsAnchor){
			resultPoint.x-=this._pivotX*this._width;
			resultPoint.y-=this._pivotY*this._height;
		}
		return resultPoint;
	}

	__proto.localToGlobalRect=function(ax,ay,aWidth,aHeight,resultRect){
		(ax===void 0)&& (ax=0);
		(ay===void 0)&& (ay=0);
		(aWidth===void 0)&& (aWidth=0);
		(aHeight===void 0)&& (aHeight=0);
		if(resultRect==null)
			resultRect=new Rectangle();
		var pt=this.localToGlobal(ax,ay);
		resultRect.x=pt.x;
		resultRect.y=pt.y;
		pt=this.localToGlobal(ax+aWidth,ay+aHeight);
		resultRect.width=pt.x-resultRect.x;
		resultRect.height=pt.y-resultRect.y;
		return resultRect;
	}

	__proto.globalToLocalRect=function(ax,ay,aWidth,aHeight,resultRect){
		(ax===void 0)&& (ax=0);
		(ay===void 0)&& (ay=0);
		(aWidth===void 0)&& (aWidth=0);
		(aHeight===void 0)&& (aHeight=0);
		if(resultRect==null)
			resultRect=new Rectangle();
		var pt=this.globalToLocal(ax,ay);
		resultRect.x=pt.x;
		resultRect.y=pt.y;
		pt=this.globalToLocal(ax+aWidth,ay+aHeight);
		resultRect.width=pt.x-resultRect.x;
		resultRect.height=pt.y-resultRect.y;
		return resultRect;
	}

	__proto.handleControllerChanged=function(c){
		this._handlingController=true;
		for (var i=0;i < 8;i++){
			var gear=this._gears[i];
			if (gear !=null && gear.controller==c)
				gear.apply();
		}
		this._handlingController=false;
		this.checkGearDisplay();
	}

	__proto.createDisplayObject=function(){
		this._displayObject=new Sprite();
		this._displayObject["$owner"]=this;
	}

	__proto.handleXYChanged=function(){
		var xv=this._x;
		var yv=this._y+this._yOffset;
		if(this._pivotAsAnchor){
			xv-=this._pivotX*this._width;
			yv-=this._pivotY*this._height;
		}
		if(this._pixelSnapping){
			xv=Math.round(xv);
			yv=Math.round(yv);
		}
		this._displayObject.pos(xv+this._pivotOffsetX,yv+this._pivotOffsetY);
	}

	__proto.handleSizeChanged=function(){
		if(this._displayObject!=null){
			if(this._sizeImplType==0 || this.sourceWidth==0 || this.sourceHeight==0)
				this._displayObject.size(this._width,this._height);
			else
			this._displayObject.scale(this._width/this.sourceWidth*this._scaleX,
			this._height/this.sourceHeight*this._scaleY);
		}
	}

	__proto.handleScaleChanged=function(){
		if(this._displayObject!=null){
			if(this._sizeImplType==0 || this.sourceWidth==0 || this.sourceHeight==0)
				this._displayObject.scale(this._scaleX,this._scaleY);
			else
			this._displayObject.scale(this._width/this.sourceWidth*this._scaleX,
			this._height/this.sourceHeight*this._scaleY);
		}
	}

	__proto.handleGrayedChanged=function(){
		if(this._displayObject){
			if(this._grayed){
				if(GObject.grayFilter==null)
					GObject.grayFilter=new ColorFilter([0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0,0,0,1,0]);
				this._displayObject.filters=[GObject.grayFilter];
			}
			else
			this._displayObject.filters=null;
		}
	}

	__proto.handleAlphaChanged=function(){
		if(this._displayObject)
			this._displayObject.alpha=this._alpha;
	}

	__proto.handleVisibleChanged=function(){
		if(this._displayObject)
			this._displayObject.visible=this.internalVisible2;
	}

	__proto.constructFromResource=function(){}
	__proto.setup_beforeAdd=function(xml){
		var str;
		var arr;
		this._id=xml.getAttribute("id");
		this._name=xml.getAttribute("name");
		str=xml.getAttribute("xy");
		arr=str.split(",");
		this.setXY(parseInt(arr[0]),parseInt(arr[1]));
		str=xml.getAttribute("size");
		if (str){
			arr=str.split(",");
			this.initWidth=parseInt(arr[0]);
			this.initHeight=parseInt(arr[1]);
			this.setSize(this.initWidth,this.initHeight,true);
		}
		str=xml.getAttribute("restrictSize");
		if(str){
			arr=str.split(",");
			this.minWidth=parseInt(arr[0]);
			this.maxWidth=parseInt(arr[1]);
			this.minHeight=parseInt(arr[2]);
			this.maxHeight=parseInt(arr[3]);
		}
		str=xml.getAttribute("scale");
		if(str){
			arr=str.split(",");
			this.setScale(parseFloat(arr[0]),parseFloat(arr[1]));
		}
		str=xml.getAttribute("skew");
		if(str){
			arr=str.split(",");
			this.setSkew(parseFloat(arr[0]),parseFloat(arr[1]));
		}
		str=xml.getAttribute("rotation");
		if (str)
			this.rotation=parseInt(str);
		str=xml.getAttribute("pivot");
		if (str){
			arr=str.split(",");
			str=xml.getAttribute("anchor");
			this.setPivot(parseFloat(arr[0]),parseFloat(arr[1]),str=="true");
		}
		str=xml.getAttribute("alpha");
		if (str)
			this.alpha=parseFloat(str);
		if(xml.getAttribute("touchable")=="false")
			this.touchable=false;
		if(xml.getAttribute("visible")=="false")
			this.visible=false;
		if(xml.getAttribute("grayed")=="true")
			this.grayed=true;
		this.tooltips=xml.getAttribute("tooltips");
		str=xml.getAttribute("blend");
		if (str)
			this.blendMode=str;
		str=xml.getAttribute("filter");
		if (str){
			switch (str){
				case "color":
					str=xml.getAttribute("filterData");
					arr=str.split(",");
					var cm=new ColorMatrix();
					cm.adjustBrightness(parseFloat(arr[0]));
					cm.adjustContrast(parseFloat(arr[1]));
					cm.adjustSaturation(parseFloat(arr[2]));
					cm.adjustHue(parseFloat(arr[3]));
					var cf=new ColorFilter(cm);
					this.filters=[cf];
					break ;
				}
		}
		str=xml.getAttribute("customData");
		if (str)
			this.data=str;
	}

	__proto.setup_afterAdd=function(xml){
		var str=xml.getAttribute("group");
		if (str)
			this._group=this._parent.getChildById(str);
		var col=xml.childNodes;
		var length1=col.length;
		for (var i1=0;i1 < length1;i1++){
			var cxml=col[i1];
			if(cxml.nodeType!=1)
				continue ;
			var index=fairygui.GObject.GearXMLKeys[cxml.nodeName];
			if(index!=undefined)
				this.getGear(index).setup(cxml);
		}
	}

	__proto.initDrag=function(){
		if (this._draggable)
			this.on("mousedown",this,this.__begin);
		else
		this.off("mousedown",this,this.__begin);
	}

	__proto.dragBegin=function(){
		if (fairygui.GObject.draggingObject !=null)
			fairygui.GObject.draggingObject.stopDrag();
		fairygui.GObject.sGlobalDragStart.x=Laya.stage.mouseX;
		fairygui.GObject.sGlobalDragStart.y=Laya.stage.mouseY;
		this.localToGlobalRect(0,0,this.width,this.height,fairygui.GObject.sGlobalRect);
		fairygui.GObject.draggingObject=this;
		Laya.stage.on("mousemove",this,this.__moving2);
		Laya.stage.on("mouseup",this,this.__end2);
	}

	__proto.dragEnd=function(){
		if (fairygui.GObject.draggingObject==this){
			Laya.stage.off("mousemove",this,this.__moving2);
			Laya.stage.off("mouseup",this,this.__end2);
			fairygui.GObject.draggingObject=null;
		}
		fairygui.GObject.sDraggingQuery=false;
	}

	__proto.reset=function(){
		Laya.stage.off("mousemove",this,this.__moving);
		Laya.stage.off("mouseup",this,this.__end);
	}

	__proto.__begin=function(){
		if(this._touchDownPoint==null)
			this._touchDownPoint=new Point();
		this._touchDownPoint.x=Laya.stage.mouseX;
		this._touchDownPoint.y=Laya.stage.mouseY;
		Laya.stage.on("mousemove",this,this.__moving);
		Laya.stage.on("mouseup",this,this.__end);
	}

	__proto.__end=function(){
		this.reset();
	}

	__proto.__moving=function(evt){
		var sensitivity=UIConfig$1.touchDragSensitivity;
		if(this._touchDownPoint !=null
			&& Math.abs(this._touchDownPoint.x-Laya.stage.mouseX)< sensitivity
		&& Math.abs(this._touchDownPoint.y-Laya.stage.mouseY)< sensitivity)
		return;
		this.reset();
		fairygui.GObject.sDraggingQuery=true;
		Events.dispatch("fui_drag_start",this._displayObject,evt);
		if (fairygui.GObject.sDraggingQuery)
			this.dragBegin();
	}

	__proto.__moving2=function(evt){
		var xx=Laya.stage.mouseX-fairygui.GObject.sGlobalDragStart.x+fairygui.GObject.sGlobalRect.x;
		var yy=Laya.stage.mouseY-fairygui.GObject.sGlobalDragStart.y+fairygui.GObject.sGlobalRect.y;
		if(this._dragBounds !=null){
			var rect=GRoot.inst.localToGlobalRect(this._dragBounds.x,this._dragBounds.y,
			this._dragBounds.width,this._dragBounds.height,fairygui.GObject.sDragHelperRect);
			if(xx < rect.x)
				xx=rect.x;
			else if(xx+fairygui.GObject.sGlobalRect.width > rect.right){
				xx=rect.right-fairygui.GObject.sGlobalRect.width;
				if(xx < rect.x)
					xx=rect.x;
			}
			if(yy < rect.y)
				yy=rect.y;
			else if(yy+fairygui.GObject.sGlobalRect.height > rect.bottom){
				yy=rect.bottom-fairygui.GObject.sGlobalRect.height;
				if(yy < rect.y)
					yy=rect.y;
			}
		}
		GObject.sUpdateInDragging=true;
		var pt=this.parent.globalToLocal(xx,yy,fairygui.GObject.sHelperPoint);
		this.setXY(Math.round(pt.x),Math.round(pt.y));
		GObject.sUpdateInDragging=false;
		Events.dispatch("fui_drag_move",this._displayObject,evt);
	}

	__proto.__end2=function(evt){
		if (fairygui.GObject.draggingObject==this){
			this.stopDrag();
			Events.dispatch("fui_drag_end",this._displayObject,evt);
		}
	}

	__getset(0,__proto,'yMin',function(){
		return this._pivotAsAnchor ? (this._y-this._height *this._pivotY):this._y;
		},function(value){
		if (this._pivotAsAnchor)
			this.setXY(this._x,value+this._height *this._pivotY);
		else
		this.setXY(this._x,value);
	});

	__getset(0,__proto,'id',function(){
		return this._id;
	});

	__getset(0,__proto,'name',function(){
		return this._name;
		},function(value){
		this._name=value;
	});

	__getset(0,__proto,'rotation',function(){
		return this._rotation;
		},function(value){
		if(this._rotation !=value){
			this._rotation=value;
			if(this._displayObject!=null){
				this._displayObject.rotation=this.normalizeRotation;
				this.applyPivot();
			}
			this.updateGear(3);
		}
	});

	__getset(0,__proto,'width',function(){
		this.ensureSizeCorrect();
		if(this._relations.sizeDirty)
			this._relations.ensureRelationsSizeCorrect();
		return this._width;
		},function(value){
		this.setSize(value,this._rawHeight);
	});

	__getset(0,__proto,'x',function(){
		return this._x;
		},function(value){
		this.setXY(value,this._y);
	});

	__getset(0,__proto,'draggable',function(){
		return this._draggable;
		},function(value){
		if (this._draggable !=value){
			this._draggable=value;
			this.initDrag();
		}
	});

	__getset(0,__proto,'y',function(){
		return this._y;
		},function(value){
		this.setXY(this._x,value);
	});

	__getset(0,__proto,'gearXY',function(){
		return (this.getGear(1));
	});

	__getset(0,__proto,'xMin',function(){
		return this._pivotAsAnchor ? (this._x-this._width *this._pivotX):this._x;
		},function(value){
		if (this._pivotAsAnchor)
			this.setXY(value+this._width *this._pivotX,this._y);
		else
		this.setXY(value,this._y);
	});

	__getset(0,__proto,'pixelSnapping',function(){
		return this._pixelSnapping;
		},function(value){
		if(this._pixelSnapping!=value){
			this._pixelSnapping=value;
			this.handleXYChanged();
		}
	});

	__getset(0,__proto,'height',function(){
		this.ensureSizeCorrect();
		if(this._relations.sizeDirty)
			this._relations.ensureRelationsSizeCorrect();
		return this._height;
		},function(value){
		this.setSize(this._rawWidth,value);
	});

	__getset(0,__proto,'asButton',function(){
		return this;
	});

	__getset(0,__proto,'actualWidth',function(){
		return this.width *Math.abs(this._scaleX);
	});

	__getset(0,__proto,'actualHeight',function(){
		return this.height *Math.abs(this._scaleY);
	});

	__getset(0,__proto,'blendMode',function(){
		return this._displayObject.blendMode;
		},function(value){
		this._displayObject.blendMode=value;
	});

	__getset(0,__proto,'scaleX',function(){
		return this._scaleX;
		},function(value){
		this.setScale(value,this._scaleY);
	});

	__getset(0,__proto,'scaleY',function(){
		return this._scaleY;
		},function(value){
		this.setScale(this._scaleX,value);
	});

	__getset(0,__proto,'skewX',function(){
		return this._skewX;
		},function(value){
		this.setScale(value,this._skewY);
	});

	__getset(0,__proto,'pivotAsAnchor',function(){
		return this._pivotAsAnchor;
	});

	__getset(0,__proto,'skewY',function(){
		return this._skewY;
		},function(value){
		this.setSkew(this._skewX,value);
	});

	__getset(0,__proto,'pivotX',function(){
		return this._pivotX;
		},function(value){
		this.setPivot(value,this._pivotY);
	});

	__getset(0,__proto,'asLoader',function(){
		return this;
	});

	__getset(0,__proto,'asTextInput',function(){
		return this;
	});

	__getset(0,__proto,'displayObject',function(){
		return this._displayObject;
	});

	__getset(0,__proto,'normalizeRotation',function(){
		var rot=this._rotation % 360;
		if(rot > 180)
			rot=rot-360;
		else if(rot <-180)
		rot=360+rot;
		return rot;
	});

	__getset(0,__proto,'pivotY',function(){
		return this._pivotY;
		},function(value){
		this.setPivot(this._pivotX,value);
	});

	__getset(0,__proto,'touchable',function(){
		return this._touchable;
		},function(value){
		if(this._touchable!=value){
			this._touchable=value;
			this.updateGear(3);
			if(((this instanceof fairygui.GImage ))|| ((this instanceof fairygui.GMovieClip ))
				|| ((this instanceof fairygui.GTextField ))&& !((this instanceof fairygui.GTextInput ))&& !((this instanceof fairygui.GRichTextField )))
			return;
			if(this._displayObject !=null)
				this._displayObject.mouseEnabled=this._touchable;
		}
	});

	__getset(0,__proto,'alpha',function(){
		return this._alpha;
		},function(value){
		if(this._alpha!=value){
			this._alpha=value;
			this.handleAlphaChanged();
			this.updateGear(3);
		}
	});

	__getset(0,__proto,'grayed',function(){
		return this._grayed;
		},function(value){
		if(this._grayed !=value){
			this._grayed=value;
			this.handleGrayedChanged();
			this.updateGear(3);
		}
	});

	__getset(0,__proto,'dragBounds',function(){
		return this._dragBounds;
		},function(value){
		this._dragBounds=value;
	});

	__getset(0,__proto,'asProgress',function(){
		return this;
	});

	__getset(0,__proto,'enabled',function(){
		return !this._grayed && this._touchable;
		},function(value){
		this.grayed=!value;
		this.touchable=value;
	});

	__getset(0,__proto,'sortingOrder',function(){
		return this._sortingOrder;
		},function(value){
		if (value < 0)
			value=0;
		if (this._sortingOrder !=value){
			var old=this._sortingOrder;
			this._sortingOrder=value;
			if (this._parent !=null)
				this._parent.childSortingOrderChanged(this,old,this._sortingOrder);
		}
	});

	__getset(0,__proto,'visible',function(){
		return this._visible;
		},function(value){
		if (this._visible !=value){
			this._visible=value;
			this.handleVisibleChanged();
			if (this._parent)
				this._parent.setBoundsChangedFlag();
		}
	});

	__getset(0,__proto,'internalVisible',function(){
		return this._internalVisible && (!this._group || this._group.internalVisible)
		&& !this._displayObject._$P["maskParent"];
	});

	__getset(0,__proto,'icon',function(){
		return null;
		},function(value){
	});

	__getset(0,__proto,'internalVisible2',function(){
		return this._visible && (!this._group || this._group.internalVisible2);
	});

	__getset(0,__proto,'asGraph',function(){
		return this;
	});

	__getset(0,__proto,'gearSize',function(){
		return (this.getGear(2));
	});

	__getset(0,__proto,'focusable',function(){
		return this._focusable;
		},function(value){
		this._focusable=value;
	});

	__getset(0,__proto,'focused',function(){
		return this.root.focus==this;
	});

	__getset(0,__proto,'tooltips',function(){
		return this._tooltips;
		},function(value){
		if(this._tooltips){
			this.off("mouseover",this,this.__rollOver);
			this.off("mouseout",this,this.__rollOut);
		}
		this._tooltips=value;
		if(this._tooltips){
			this.on("mouseover",this,this.__rollOver);
			this.on("mouseout",this,this.__rollOut);
		}
	});

	__getset(0,__proto,'dragging',function(){
		return fairygui.GObject.draggingObject==this;
	});

	__getset(0,__proto,'group',function(){
		return this._group;
		},function(value){
		if (this._group !=value){
			if (this._group !=null)
				this._group.setBoundsChangedFlag(true);
			this._group=value;
			if (this._group !=null)
				this._group.setBoundsChangedFlag(true);
		}
	});

	__getset(0,__proto,'filters',function(){
		return this._displayObject.filters;
		},function(value){
		this._displayObject.filters=value;
	});

	__getset(0,__proto,'inContainer',function(){
		return this._displayObject !=null && this._displayObject.parent !=null;
	});

	__getset(0,__proto,'resourceURL',function(){
		if (this.packageItem !=null)
			return "ui://"+this.packageItem.owner.id+this.packageItem.id;
		else
		return null;
	});

	__getset(0,__proto,'onStage',function(){
		return this._displayObject !=null && this._displayObject.stage !=null;
	});

	__getset(0,__proto,'root',function(){
		if((this instanceof fairygui.GRoot ))
			return (this);
		var p=this._parent;
		while (p){
			if ((p instanceof fairygui.GRoot ))
				return (p);
			p=p.parent;
		}
		return GRoot.inst;
	});

	__getset(0,__proto,'gearLook',function(){
		return (this.getGear(3));
	});

	__getset(0,__proto,'asCom',function(){
		return this;
	});

	__getset(0,__proto,'relations',function(){
		return this._relations;
	});

	__getset(0,__proto,'parent',function(){
		return this._parent;
		},function(val){
		this._parent=val;
	});

	__getset(0,__proto,'asLabel',function(){
		return this;
	});

	__getset(0,__proto,'asImage',function(){
		return this;
	});

	__getset(0,__proto,'asTextField',function(){
		return this;
	});

	__getset(0,__proto,'asGroup',function(){
		return this;
	});

	__getset(0,__proto,'asRichTextField',function(){
		return this;
	});

	__getset(0,__proto,'asList',function(){
		return this;
	});

	__getset(0,__proto,'asSlider',function(){
		return this;
	});

	__getset(0,__proto,'asComboBox',function(){
		return this;
	});

	__getset(0,__proto,'asMovieClip',function(){
		return this;
	});

	__getset(0,__proto,'text',function(){
		return null;
		},function(value){
	});

	GObject.cast=function(sprite){
		return (sprite["$owner"]);
	}

	GObject.draggingObject=null;
	GObject._gInstanceCounter=0;
	GObject.grayFilter=null;
	GObject.sDraggingQuery=false;
	GObject.sUpdateInDragging=false;
	__static(GObject,
	['GearXMLKeys',function(){return this.GearXMLKeys={
			"gearDisplay":0,
			"gearXY":1,
			"gearSize":2,
			"gearLook":3,
			"gearColor":4,
			"gearAni":5,
			"gearText":6,
			"gearIcon":7
	};},'sGlobalDragStart',function(){return this.sGlobalDragStart=new Point();},'sGlobalRect',function(){return this.sGlobalRect=new Rectangle();},'sHelperPoint',function(){return this.sHelperPoint=new Point();},'sDragHelperRect',function(){return this.sDragHelperRect=new Rectangle();}

	]);
	return GObject;
})()


//class fairygui.GearBase
var GearBase=(function(){
	function GearBase(owner){
		this._tween=false;
		this._easeType=null;
		this._tweenTime=0.3;
		this._delay=0;
		this._displayLockToken=0;
		this._owner=null;
		this._controller=null;
		this._owner=owner;
		this._easeType=Ease.quadOut;
	}

	__class(GearBase,'fairygui.GearBase');
	var __proto=GearBase.prototype;
	__proto.setup=function(xml){
		this._controller=this._owner.parent.getController(xml.getAttribute("controller"));
		if(this._controller==null)
			return;
		this.init();
		var str;
		str=xml.getAttribute("tween");
		if (str)
			this._tween=true;
		str=xml.getAttribute("ease");
		if (str)
			this._easeType=ToolSet.parseEaseType(str);
		str=xml.getAttribute("duration");
		if (str)
			this._tweenTime=parseFloat(str);
		str=xml.getAttribute("delay");
		if (str)
			this._delay=parseFloat(str);
		if((this instanceof fairygui.GearDisplay )){
			str=xml.getAttribute("pages");
			if(str){
				var arr=str.split(",");
				(this).pages=arr;
			}
		}
		else{
			var pages;
			var values;
			str=xml.getAttribute("pages");
			if(str)
				pages=str.split(",");
			if(pages){
				str=xml.getAttribute("values");
				if(str!=null)
					values=str.split("|");
				else
				values=[];
				for(var i=0;i<pages.length;i++){
					str=values[i];
					if(str==null)
						str="";
					this.addStatus(pages[i],str);
				}
			}
			str=xml.getAttribute("default");
			if(str)
				this.addStatus(null,str);
		}
	}

	__proto.updateFromRelations=function(dx,dy){}
	__proto.addStatus=function(pageId,value){}
	__proto.init=function(){}
	__proto.apply=function(){}
	__proto.updateState=function(){}
	__getset(0,__proto,'controller',function(){
		return this._controller;
		},function(val){
		if (val !=this._controller){
			this._controller=val;
			if(this._controller)
				this.init();
		}
	});

	__getset(0,__proto,'tween',function(){
		return this._tween;
		},function(val){
		this._tween=val;
	});

	__getset(0,__proto,'delay',function(){
		return this._delay;
		},function(val){
		this._delay=val;
	});

	__getset(0,__proto,'tweenTime',function(){
		return this._tweenTime;
		},function(value){
		this._tweenTime=value;
	});

	__getset(0,__proto,'easeType',function(){
		return this._easeType;
		},function(value){
		this._easeType=value;
	});

	GearBase.disableAllTweenEffect=false;
	return GearBase;
})()


//class fairygui.GObjectPool
var GObjectPool=(function(){
	function GObjectPool(){
		this._pool=null;
		this._count=0;
		this._pool={};
	}

	__class(GObjectPool,'fairygui.GObjectPool');
	var __proto=GObjectPool.prototype;
	__proto.clear=function(){
		for (var i1 in this._pool){
			var arr=this._pool[i1];
			var cnt=arr.length;
			for (var i=0;i < cnt;i++)
			arr[i].dispose();
		}
		this._pool={};
		this._count=0;
	}

	__proto.getObject=function(url){
		url=UIPackage.normalizeURL(url);
		if(url==null)
			return null;
		var arr=this._pool[url];
		if (arr !=null && arr.length>0){
			this._count--;
			return arr.shift();
		};
		var child=UIPackage.createObjectFromURL(url);
		return child;
	}

	__proto.returnObject=function(obj){
		var url=obj.resourceURL;
		if (!url)
			return;
		var arr=this._pool[url];
		if (arr==null){
			arr=[];
			this._pool[url]=arr;
		}
		this._count++;
		arr.push(obj);
	}

	__getset(0,__proto,'count',function(){
		return this._count;
	});

	return GObjectPool;
})()


//class fairygui.GroupLayoutType
var GroupLayoutType=(function(){
	function GroupLayoutType(){}
	__class(GroupLayoutType,'fairygui.GroupLayoutType');
	GroupLayoutType.parse=function(value){
		switch (value){
			case "none":
				return 0;
			case "hz":
				return 1;
			case "vt":
				return 2;
			default :
				return 0;
			}
	}

	GroupLayoutType.None=0;
	GroupLayoutType.Horizontal=1;
	GroupLayoutType.Vertical=2;
	return GroupLayoutType;
})()


//class fairygui.ListLayoutType
var ListLayoutType=(function(){
	function ListLayoutType(){}
	__class(ListLayoutType,'fairygui.ListLayoutType');
	ListLayoutType.parse=function(value){
		switch (value){
			case "column":
				return 0;
			case "row":
				return 1;
			case "flow_hz":
				return 2;
			case "flow_vt":
				return 3;
			case "pagination":
				return 4;
			default :
				return 0;
			}
	}

	ListLayoutType.SingleColumn=0;
	ListLayoutType.SingleRow=1;
	ListLayoutType.FlowHorizontal=2;
	ListLayoutType.FlowVertical=3;
	ListLayoutType.Pagination=4;
	return ListLayoutType;
})()


//class fairygui.ListSelectionMode
var ListSelectionMode=(function(){
	function ListSelectionMode(){}
	__class(ListSelectionMode,'fairygui.ListSelectionMode');
	ListSelectionMode.parse=function(value){
		switch (value){
			case "single":
				return 0;
			case "multiple":
				return 1;
			case "multipleSingleClick":
				return 2;
			case "none":
				return 3;
			default :
				return 0;
			}
	}

	ListSelectionMode.Single=0;
	ListSelectionMode.Multiple=1;
	ListSelectionMode.Multiple_SingleClick=2;
	ListSelectionMode.None=3;
	return ListSelectionMode;
})()


//class fairygui.LoaderFillType
var LoaderFillType=(function(){
	function LoaderFillType(){}
	__class(LoaderFillType,'fairygui.LoaderFillType');
	LoaderFillType.parse=function(value){
		switch (value){
			case "none":
				return 0;
			case "scale":
				return 1;
			case "scaleMatchHeight":
				return 2;
			case "scaleMatchWidth":
				return 3;
			case "scaleFree":
				return 4;
			case "scaleNoBorder":
				return 5;
			default :
				return 0;
			}
	}

	LoaderFillType.None=0;
	LoaderFillType.Scale=1;
	LoaderFillType.ScaleMatchHeight=2;
	LoaderFillType.ScaleMatchWidth=3;
	LoaderFillType.ScaleFree=4;
	LoaderFillType.ScaleNoBorder=5;
	return LoaderFillType;
})()


//class fairygui.Margin
var Margin=(function(){
	function Margin(){
		this.left=0;
		this.right=0;
		this.top=0;
		this.bottom=0;
	}

	__class(Margin,'fairygui.Margin');
	var __proto=Margin.prototype;
	__proto.parse=function(str){
		if (!str){
			this.left=0;
			this.right=0;
			this.top=0;
			this.bottom=0;
			return;
		};
		var arr=str.split(",");
		if (arr.length==1){
			var k=parseInt(arr[0]);
			this.top=k;
			this.bottom=k;
			this.left=k;
			this.right=k;
		}
		else {
			this.top=parseInt(arr[0]);
			this.bottom=parseInt(arr[1]);
			this.left=parseInt(arr[2]);
			this.right=parseInt(arr[3]);
		}
	}

	__proto.copy=function(source){
		this.top=source.top;
		this.bottom=source.bottom;
		this.left=source.left;
		this.right=source.right;
	}

	return Margin;
})()


//class fairygui.OverflowType
var OverflowType=(function(){
	function OverflowType(){}
	__class(OverflowType,'fairygui.OverflowType');
	OverflowType.parse=function(value){
		switch (value){
			case "visible":
				return 0;
			case "hidden":
				return 1;
			case "scroll":
				return 2;
			case "scale":
				return 3;
			case "scaleFree":
				return 4;
			default :
				return 0;
			}
	}

	OverflowType.Visible=0;
	OverflowType.Hidden=1;
	OverflowType.Scroll=2;
	OverflowType.Scale=3;
	OverflowType.ScaleFree=4;
	return OverflowType;
})()


//class fairygui.PackageItem
var PackageItem=(function(){
	function PackageItem(){
		this.owner=null;
		this.type=0;
		this.id=null;
		this.name=null;
		this.width=0;
		this.height=0;
		this.file=null;
		this.decoded=false;
		//image
		this.scale9Grid=null;
		this.scaleByTile=false;
		this.tileGridIndice=0;
		this.smoothing=false;
		this.texture=null;
		//movieclip
		this.interval=0;
		this.repeatDelay=0;
		this.swing=false;
		this.frames=null;
		//componenet
		this.componentData=null;
		this.displayList=null;
		this.extensionType=null;
		//sound
		this.sound=null;
		//font
		this.bitmapFont=null;
	}

	__class(PackageItem,'fairygui.PackageItem');
	var __proto=PackageItem.prototype;
	__proto.load=function(){
		return this.owner.getItemAsset(this);
	}

	__proto.toString=function(){
		return this.name;
	}

	return PackageItem;
})()


//class fairygui.PackageItemType
var PackageItemType=(function(){
	function PackageItemType(){}
	__class(PackageItemType,'fairygui.PackageItemType');
	PackageItemType.parse=function(value){
		switch(value){
			case "image":
				return 0;
			case "movieclip":
				return 2;
			case "sound":
				return 3;
			case "component":
				return 4;
			case "swf":
				return 1;
			case "font":
				return 6;
			case "atlas":
				return 7;
			}
		return 0;
	}

	PackageItemType.Image=0;
	PackageItemType.Swf=1;
	PackageItemType.MovieClip=2;
	PackageItemType.Sound=3;
	PackageItemType.Component=4;
	PackageItemType.Misc=5;
	PackageItemType.Font=6;
	PackageItemType.Atlas=7;
	return PackageItemType;
})()


//class fairygui.PageOption
var PageOption=(function(){
	function PageOption(){
		this._controller=null;
		this._id=null;
	}

	__class(PageOption,'fairygui.PageOption');
	var __proto=PageOption.prototype;
	__proto.clear=function(){
		this._id=null;
	}

	__getset(0,__proto,'controller',null,function(val){
		this._controller=val;
	});

	__getset(0,__proto,'index',function(){
		if (this._id)
			return this._controller.getPageIndexById(this._id);
		else
		return-1;
		},function(pageIndex){
		this._id=this._controller.getPageId(pageIndex);
	});

	__getset(0,__proto,'name',function(){
		if (this._id)
			return this._controller.getPageNameById(this._id);
		else
		return null;
		},function(pageName){
		this._id=this._controller.getPageIdByName(pageName);
	});

	__getset(0,__proto,'id',function(){
		return this._id;
		},function(id){
		this._id=id;
	});

	return PageOption;
})()


//class fairygui.PopupMenu
var PopupMenu=(function(){
	function PopupMenu(resourceURL){
		this._contentPane=null;
		this._list=null;
		if(!resourceURL){
			resourceURL=UIConfig$1.popupMenu;
			if(!resourceURL)
				throw "UIConfig.popupMenu not defined";
		}
		this._contentPane=UIPackage.createObjectFromURL(resourceURL).asCom;
		this._contentPane.on("display",this,this.__addedToStage);
		this._list=(this._contentPane.getChild("list"));
		this._list.removeChildrenToPool();
		this._list.addRelation(this._contentPane,14);
		this._list.removeRelation(this._contentPane,15);
		this._contentPane.addRelation(this._list,15);
		this._list.on("fui_click_item",this,this.__clickItem);
	}

	__class(PopupMenu,'fairygui.PopupMenu');
	var __proto=PopupMenu.prototype;
	__proto.dispose=function(){
		this._contentPane.dispose();
	}

	__proto.addItem=function(caption,handler){
		var item=this._list.addItemFromPool().asButton;
		item.title=caption;
		item.data=handler;
		item.grayed=false;
		var c=item.getController("checked");
		if(c !=null)
			c.selectedIndex=0;
		return item;
	}

	__proto.addItemAt=function(caption,index,handler){
		var item=this._list.getFromPool().asButton;
		this._list.addChildAt(item,index);
		item.title=caption;
		item.data=handler;
		item.grayed=false;
		var c=item.getController("checked");
		if(c !=null)
			c.selectedIndex=0;
		return item;
	}

	__proto.addSeperator=function(){
		if(UIConfig$1.popupMenu_seperator==null)
			throw "UIConfig.popupMenu_seperator not defined";
		this.list.addItemFromPool(UIConfig$1.popupMenu_seperator);
	}

	__proto.getItemName=function(index){
		var item=this._list.getChildAt(index);
		return item.name;
	}

	__proto.setItemText=function(name,caption){
		var item=this._list.getChild(name).asButton;
		item.title=caption;
	}

	__proto.setItemVisible=function(name,visible){
		var item=this._list.getChild(name).asButton;
		if(item.visible !=visible){
			item.visible=visible;
			this._list.setBoundsChangedFlag();
		}
	}

	__proto.setItemGrayed=function(name,grayed){
		var item=this._list.getChild(name).asButton;
		item.grayed=grayed;
	}

	__proto.setItemCheckable=function(name,checkable){
		var item=this._list.getChild(name).asButton;
		var c=item.getController("checked");
		if(c !=null){
			if(checkable){
				if(c.selectedIndex==0)
					c.selectedIndex=1;
			}
			else
			c.selectedIndex=0;
		}
	}

	__proto.setItemChecked=function(name,checked){
		var item=this._list.getChild(name).asButton;
		var c=item.getController("checked");
		if(c !=null)
			c.selectedIndex=checked?2:1;
	}

	__proto.isItemChecked=function(name){
		var item=this._list.getChild(name).asButton;
		var c=item.getController("checked");
		if(c !=null)
			return c.selectedIndex==2;
		else
		return false;
	}

	__proto.removeItem=function(name){
		var item=this._list.getChild(name);
		if(item !=null){
			var index=this._list.getChildIndex(item);
			this._list.removeChildToPoolAt(index);
			return true;
		}
		else
		return false;
	}

	__proto.clearItems=function(){
		this._list.removeChildrenToPool();
	}

	__proto.show=function(target,downward){
		var r=target !=null?target.root:GRoot.inst;
		r.showPopup(this.contentPane,((target instanceof fairygui.GRoot ))?null:target,downward);
	}

	__proto.__clickItem=function(itemObject){
		Laya.timer.once(100,this,this.__clickItem2,[itemObject]);
	}

	__proto.__clickItem2=function(itemObject){
		if(!((itemObject instanceof fairygui.GButton )))
			return;
		if(itemObject.grayed){
			this._list.selectedIndex=-1;
			return;
		};
		var c=itemObject.asCom.getController("checked");
		if(c !=null && c.selectedIndex !=0){
			if(c.selectedIndex==1)
				c.selectedIndex=2;
			else
			c.selectedIndex=1;
		};
		var r=(this._contentPane.parent);
		r.hidePopup(this.contentPane);
		if(itemObject.data !=null){
			(itemObject.data).run();
		}
	}

	__proto.__addedToStage=function(){
		this._list.selectedIndex=-1;
		this._list.resizeToFit(100000,10);
	}

	__getset(0,__proto,'itemCount',function(){
		return this._list.numChildren;
	});

	__getset(0,__proto,'contentPane',function(){
		return this._contentPane;
	});

	__getset(0,__proto,'list',function(){
		return this._list;
	});

	return PopupMenu;
})()


//class fairygui.ProgressTitleType
var ProgressTitleType=(function(){
	function ProgressTitleType(){}
	__class(ProgressTitleType,'fairygui.ProgressTitleType');
	ProgressTitleType.parse=function(value){
		switch (value){
			case "percent":
				return 0;
			case "valueAndmax":
				return 1;
			case "value":
				return 2;
			case "max":
				return 3;
			default :
				return 0;
			}
	}

	ProgressTitleType.Percent=0;
	ProgressTitleType.ValueAndMax=1;
	ProgressTitleType.Value=2;
	ProgressTitleType.Max=3;
	return ProgressTitleType;
})()


//class fairygui.RelationItem
var RelationItem=(function(){
	var RelationDef;
	function RelationItem(owner){
		this._owner=null;
		this._target=null;
		this._defs=null;
		this._targetX=NaN;
		this._targetY=NaN;
		this._targetWidth=NaN;
		this._targetHeight=NaN;
		this._owner=owner;
		this._defs=[];
	}

	__class(RelationItem,'fairygui.RelationItem');
	var __proto=RelationItem.prototype;
	__proto.add=function(relationType,usePercent){
		if (relationType==24){
			this.add(14,usePercent);
			this.add(15,usePercent);
			return;
		}
		var def;
		for(var $each_def in this._defs){
			def=this._defs[$each_def];
			if (def.type==relationType)
				return;
		}
		this.internalAdd(relationType,usePercent);
	}

	__proto.internalAdd=function(relationType,usePercent){
		if (relationType==24){
			this.internalAdd(14,usePercent);
			this.internalAdd(15,usePercent);
			return;
		};
		var info=new RelationDef();
		info.percent=usePercent;
		info.type=relationType;
		info.axis=(relationType <=6 || relationType==14 || relationType >=16 && relationType <=19)? 0 :1;
		this._defs.push(info);
		if (usePercent || relationType==1 || relationType==3 || relationType==5
			|| relationType==8 || relationType==10 || relationType==12)
		this._owner.pixelSnapping=true;
	}

	__proto.remove=function(relationType){
		if (relationType==24){
			this.remove(14);
			this.remove(15);
			return;
		};
		var dc=this._defs.length;
		for (var k=0;k < dc;k++){
			if (this._defs[k].type==relationType){
				this._defs.splice(k,1);
				break ;
			}
		}
	}

	__proto.copyFrom=function(source){
		this.target=source.target;
		this._defs.length=0;
		var info;
		for(var $each_info in source._defs){
			info=source._defs[$each_info];
			var info2=new RelationDef();
			info2.copyFrom(info);
			this._defs.push(info2);
		}
	}

	__proto.dispose=function(){
		if (this._target !=null){
			this.releaseRefTarget(this._target);
			this._target=null;
		}
	}

	__proto.applyOnSelfResized=function(dWidth,dHeight,applyPivot){
		var cnt=this._defs.length;
		if(cnt==0)
			return;
		var ox=this._owner.x;
		var oy=this._owner.y;
		for (var i=0;i < cnt;i++){
			var info=this._defs[i];
			switch (info.type){
				case 3:
					this._owner.x-=(0.5-(applyPivot ? this._owner.pivotX :0))*dWidth;
					break ;
				case 5:
				case 4:
				case 6:
					this._owner.x-=(1-(applyPivot ? this._owner.pivotX :0))*dWidth;
					break ;
				case 10:
					this._owner.y-=(0.5-(applyPivot ? this._owner.pivotY :0))*dHeight;
					break ;
				case 12:
				case 11:
				case 13:
					this._owner.y-=(1-(applyPivot ? this._owner.pivotY :0))*dHeight;
					break ;
				}
		}
		if (ox!=this._owner.x || oy!=this._owner.y){
			ox=this._owner.x-ox;
			oy=this._owner.y-oy;
			this._owner.updateGearFromRelations(1,ox,oy);
			if (this._owner.parent !=null && this._owner.parent._transitions.length > 0){
				var trans;
				for(var $each_trans in this._owner.parent._transitions){
					trans=this._owner.parent._transitions[$each_trans];
					trans.updateFromRelations(this._owner.id,ox,oy);
				}
			}
		}
	}

	__proto.applyOnXYChanged=function(info,dx,dy){
		var tmp=NaN;
		switch (info.type){
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				this._owner.x+=dx;
				break ;
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
				this._owner.y+=dy;
				break ;
			case 14:
			case 15:
				break ;
			case 16:
			case 17:
				tmp=this._owner.xMin;
				this._owner.width=this._owner._rawWidth-dx;
				this._owner.xMin=tmp+dx;
				break ;
			case 18:
			case 19:
				tmp=this._owner.xMin;
				this._owner.width=this._owner._rawWidth+dx;
				this._owner.xMin=tmp;
				break ;
			case 20:
			case 21:
				tmp=this._owner.yMin;
				this._owner.height=this._owner._rawHeight-dy;
				this._owner.yMin=tmp+dy;
				break ;
			case 22:
			case 23:
				tmp=this._owner.yMin;
				this._owner.height=this._owner._rawHeight+dy;
				this._owner.yMin=tmp;
				break ;
			}
	}

	__proto.applyOnSizeChanged=function(info){
		var pos=0,pivot=0,delta=0;
		var v=NaN,tmp=NaN;
		if (info.axis==0){
			if (this._target !=this._owner.parent){
				pos=this._target.x;
				if (this._target.pivotAsAnchor)
					pivot=this._target.pivotX;
			}
			if (info.percent){
				if (this._targetWidth !=0)
					delta=this._target._width / this._targetWidth;
			}
			else
			delta=this._target._width-this._targetWidth;
		}
		else{
			if (this._target !=this._owner.parent){
				pos=this._target.y;
				if (this._target.pivotAsAnchor)
					pivot=this._target.pivotY;
			}
			if (info.percent){
				if (this._targetHeight !=0)
					delta=this._target._height / this._targetHeight;
			}
			else
			delta=this._target._height-this._targetHeight;
		}
		switch (info.type){
			case 0:
				if (info.percent)
					this._owner.xMin=pos+(this._owner.xMin-pos)*delta;
				else if (pivot !=0)
				this._owner.x+=delta *(-pivot);
				break ;
			case 1:
				if (info.percent)
					this._owner.xMin=pos+(this._owner.xMin-pos)*delta;
				else
				this._owner.x+=delta *(0.5-pivot);
				break ;
			case 2:
				if (info.percent)
					this._owner.xMin=pos+(this._owner.xMin-pos)*delta;
				else
				this._owner.x+=delta *(1-pivot);
				break ;
			case 3:
				if (info.percent)
					this._owner.xMin=pos+(this._owner.xMin+this._owner._rawWidth *0.5-pos)*delta-this._owner._rawWidth *0.5;
				else
				this._owner.x+=delta *(0.5-pivot);
				break ;
			case 4:
				if (info.percent)
					this._owner.xMin=pos+(this._owner.xMin+this._owner._rawWidth-pos)*delta-this._owner._rawWidth;
				else if (pivot !=0)
				this._owner.x+=delta *(-pivot);
				break ;
			case 5:
				if (info.percent)
					this._owner.xMin=pos+(this._owner.xMin+this._owner._rawWidth-pos)*delta-this._owner._rawWidth;
				else
				this._owner.x+=delta *(0.5-pivot);
				break ;
			case 6:
				if (info.percent)
					this._owner.xMin=pos+(this._owner.xMin+this._owner._rawWidth-pos)*delta-this._owner._rawWidth;
				else
				this._owner.x+=delta *(1-pivot);
				break ;
			case 7:
				if (info.percent)
					this._owner.yMin=pos+(this._owner.yMin-pos)*delta;
				else if (pivot !=0)
				this._owner.y+=delta *(-pivot);
				break ;
			case 8:
				if (info.percent)
					this._owner.yMin=pos+(this._owner.yMin-pos)*delta;
				else
				this._owner.y+=delta *(0.5-pivot);
				break ;
			case 9:
				if (info.percent)
					this._owner.yMin=pos+(this._owner.yMin-pos)*delta;
				else
				this._owner.y+=delta *(1-pivot);
				break ;
			case 10:
				if (info.percent)
					this._owner.yMin=pos+(this._owner.yMin+this._owner._rawHeight *0.5-pos)*delta-this._owner._rawHeight *0.5;
				else
				this._owner.y+=delta *(0.5-pivot);
				break ;
			case 11:
				if (info.percent)
					this._owner.yMin=pos+(this._owner.yMin+this._owner._rawHeight-pos)*delta-this._owner._rawHeight;
				else if (pivot !=0)
				this._owner.y+=delta *(-pivot);
				break ;
			case 12:
				if (info.percent)
					this._owner.yMin=pos+(this._owner.yMin+this._owner._rawHeight-pos)*delta-this._owner._rawHeight;
				else
				this._owner.y+=delta *(0.5-pivot);
				break ;
			case 13:
				if (info.percent)
					this._owner.yMin=pos+(this._owner.yMin+this._owner._rawHeight-pos)*delta-this._owner._rawHeight;
				else
				this._owner.y+=delta *(1-pivot);
				break ;
			case 14:
				if (this._owner._underConstruct && this._owner==this._target.parent)
					v=this._owner.sourceWidth-this._target.initWidth;
				else
				v=this._owner._rawWidth-this._targetWidth;
				if (info.percent)
					v=v *delta;
				if (this._target==this._owner.parent){
					if (this._owner.pivotAsAnchor){
						tmp=this._owner.xMin;
						this._owner.setSize(this._target._width+v,this._owner._rawHeight,true);
						this._owner.xMin=tmp;
					}
					else
					this._owner.setSize(this._target._width+v,this._owner._rawHeight,true);
				}
				else
				this._owner.width=this._target._width+v;
				break ;
			case 15:
				if (this._owner._underConstruct && this._owner==this._target.parent)
					v=this._owner.sourceHeight-this._target.initHeight;
				else
				v=this._owner._rawHeight-this._targetHeight;
				if (info.percent)
					v=v *delta;
				if (this._target==this._owner.parent){
					if (this._owner.pivotAsAnchor){
						tmp=this._owner.yMin;
						this._owner.setSize(this._owner._rawWidth,this._target._height+v,true);
						this._owner.yMin=tmp;
					}
					else
					this._owner.setSize(this._owner._rawWidth,this._target._height+v,true);
				}
				else
				this._owner.height=this._target._height+v;
				break ;
			case 16:
				tmp=this._owner.xMin;
				if (info.percent)
					v=pos+(tmp-pos)*delta-tmp;
				else
				v=delta *(-pivot);
				this._owner.width=this._owner._rawWidth-v;
				this._owner.xMin=tmp+v;
				break ;
			case 17:
				tmp=this._owner.xMin;
				if (info.percent)
					v=pos+(tmp-pos)*delta-tmp;
				else
				v=delta *(1-pivot);
				this._owner.width=this._owner._rawWidth-v;
				this._owner.xMin=tmp+v;
				break ;
			case 18:
				tmp=this._owner.xMin;
				if (info.percent)
					v=pos+(tmp+this._owner._rawWidth-pos)*delta-(tmp+this._owner._rawWidth);
				else
				v=delta *(-pivot);
				this._owner.width=this._owner._rawWidth+v;
				this._owner.xMin=tmp;
				break ;
			case 19:
				tmp=this._owner.xMin;
				if (info.percent){
					if (this._owner==this._target.parent){
						if (this._owner._underConstruct)
							this._owner.width=pos+this._target._width-this._target._width *pivot+
						(this._owner.sourceWidth-pos-this._target.initWidth+this._target.initWidth *pivot)*delta;
						else
						this._owner.width=pos+(this._owner._rawWidth-pos)*delta;
					}
					else{
						v=pos+(tmp+this._owner._rawWidth-pos)*delta-(tmp+this._owner._rawWidth);
						this._owner.width=this._owner._rawWidth+v;
						this._owner.xMin=tmp;
					}
				}
				else{
					if (this._owner==this._target.parent){
						if (this._owner._underConstruct)
							this._owner.width=this._owner.sourceWidth+(this._target._width-this._target.initWidth)*(1-pivot);
						else
						this._owner.width=this._owner._rawWidth+delta *(1-pivot);
					}
					else{
						v=delta *(1-pivot);
						this._owner.width=this._owner._rawWidth+v;
						this._owner.xMin=tmp;
					}
				}
				break ;
			case 20:
				tmp=this._owner.yMin;
				if (info.percent)
					v=pos+(tmp-pos)*delta-tmp;
				else
				v=delta *(-pivot);
				this._owner.height=this._owner._rawHeight-v;
				this._owner.yMin=tmp+v;
				break ;
			case 21:
				tmp=this._owner.yMin;
				if (info.percent)
					v=pos+(tmp-pos)*delta-tmp;
				else
				v=delta *(1-pivot);
				this._owner.height=this._owner._rawHeight-v;
				this._owner.yMin=tmp+v;
				break ;
			case 22:
				tmp=this._owner.yMin;
				if (info.percent)
					v=pos+(tmp+this._owner._rawHeight-pos)*delta-(tmp+this._owner._rawHeight);
				else
				v=delta *(-pivot);
				this._owner.height=this._owner._rawHeight+v;
				this._owner.yMin=tmp;
				break ;
			case 23:
				tmp=this._owner.yMin;
				if (info.percent){
					if (this._owner==this._target.parent){
						if (this._owner._underConstruct)
							this._owner.height=pos+this._target._height-this._target._height *pivot+
						(this._owner.sourceHeight-pos-this._target.initHeight+this._target.initHeight *pivot)*delta;
						else
						this._owner.height=pos+(this._owner._rawHeight-pos)*delta;
					}
					else{
						v=pos+(tmp+this._owner._rawHeight-pos)*delta-(tmp+this._owner._rawHeight);
						this._owner.height=this._owner._rawHeight+v;
						this._owner.yMin=tmp;
					}
				}
				else{
					if (this._owner==this._target.parent){
						if (this._owner._underConstruct)
							this._owner.height=this._owner.sourceHeight+(this._target._height-this._target.initHeight)*(1-pivot);
						else
						this._owner.height=this._owner._rawHeight+delta *(1-pivot);
					}
					else{
						v=delta *(1-pivot);
						this._owner.height=this._owner._rawHeight+v;
						this._owner.yMin=tmp;
					}
				}
				break ;
			}
	}

	__proto.addRefTarget=function(target){
		if (target !=this._owner.parent)
			target.on("fui_xy_changed",this,this.__targetXYChanged);
		target.on("fui_size_changed",this,this.__targetSizeChanged);
		target.on("fui_size_delay_change",this,this.__targetSizeWillChange);
		this._targetX=this._target.x;
		this._targetY=this._target.y;
		this._targetWidth=this._target._width;
		this._targetHeight=this._target._height;
	}

	__proto.releaseRefTarget=function(target){
		target.off("fui_xy_changed",this,this.__targetXYChanged);
		target.off("fui_size_changed",this,this.__targetSizeChanged);
		target.off("fui_size_delay_change",this,this.__targetSizeWillChange);
	}

	__proto.__targetXYChanged=function(target){
		if (this._owner.relations.handling!=null || this._owner.group!=null && this._owner.group._updating){
			this._targetX=this._target.x;
			this._targetY=this._target.y;
			return;
		}
		this._owner.relations.handling=target;
		var ox=this._owner.x;
		var oy=this._owner.y;
		var dx=this._target.x-this._targetX;
		var dy=this._target.y-this._targetY;
		var info;
		for(var $each_info in this._defs){
			info=this._defs[$each_info];
			this.applyOnXYChanged(info,dx,dy);
		}
		this._targetX=this._target.x;
		this._targetY=this._target.y;
		if (ox!=this._owner.x || oy!=this._owner.y){
			ox=this._owner.x-ox;
			oy=this._owner.y-oy;
			this._owner.updateGearFromRelations(1,ox,oy);
			if (this._owner.parent !=null && this._owner.parent._transitions.length > 0){
				var trans;
				for(var $each_trans in this._owner.parent._transitions){
					trans=this._owner.parent._transitions[$each_trans];
					trans.updateFromRelations(this._owner.id,ox,oy);
				}
			}
		}
		this._owner.relations.handling=null;
	}

	__proto.__targetSizeChanged=function(target){
		if (this._owner.relations.handling!=null){
			this._targetWidth=this._target._width;
			this._targetHeight=this._target._height;
			return;
		}
		this._owner.relations.handling=target;
		var ox=this._owner.x;
		var oy=this._owner.y;
		var ow=this._owner._rawWidth;
		var oh=this._owner._rawHeight;
		var info;
		for(var $each_info in this._defs){
			info=this._defs[$each_info];
			this.applyOnSizeChanged(info);
		}
		this._targetWidth=this._target._width;
		this._targetHeight=this._target._height;
		if (ox!=this._owner.x || oy!=this._owner.y){
			ox=this._owner.x-ox;
			oy=this._owner.y-oy;
			this._owner.updateGearFromRelations(1,ox,oy);
			if (this._owner.parent !=null && this._owner.parent._transitions.length > 0){
				var trans;
				for(var $each_trans in this._owner.parent._transitions){
					trans=this._owner.parent._transitions[$each_trans];
					trans.updateFromRelations(this._owner.id,ox,oy);
				}
			}
		}
		if (ow!=this._owner._rawWidth || oh!=this._owner._rawHeight){
			ow=this._owner._rawWidth-ow;
			oh=this._owner._rawHeight-oh;
			this._owner.updateGearFromRelations(2,ow,oh);
		}
		this._owner.relations.handling=null;
	}

	__proto.__targetSizeWillChange=function(target){
		this._owner.relations.sizeDirty=true;
	}

	__getset(0,__proto,'owner',function(){
		return this._owner;
	});

	__getset(0,__proto,'target',function(){
		return this._target;
		},function(value){
		if(this._target!=value){
			if(this._target)
				this.releaseRefTarget(this._target);
			this._target=value;
			if(this._target)
				this.addRefTarget(this._target);
		}
	});

	__getset(0,__proto,'isEmpty',function(){
		return this._defs.length==0;
	});

	RelationItem.__init$=function(){
		//class RelationDef
		RelationDef=(function(){
			function RelationDef(){
				this.percent=false;
				this.type=0;
				this.axis=0;
			}
			__class(RelationDef,'');
			var __proto=RelationDef.prototype;
			__proto.copyFrom=function(source){
				this.percent=source.percent;
				this.type=source.type;
				this.axis=source.axis;
			}
			return RelationDef;
		})()
	}

	return RelationItem;
})()


//class fairygui.Relations
var Relations=(function(){
	function Relations(owner){
		this._owner=null;
		this._items=null;
		this.handling=null;
		this.sizeDirty=false;
		this._owner=owner;
		this._items=[];
	}

	__class(Relations,'fairygui.Relations');
	var __proto=Relations.prototype;
	__proto.add=function(target,relationType,usePercent){
		(usePercent===void 0)&& (usePercent=false);
		var length=this._items.length;
		for (var i=0;i < length;i++){
			var item=this._items[i];
			if (item.target==target){
				item.add(relationType,usePercent);
				return;
			}
		};
		var newItem=new RelationItem(this._owner);
		newItem.target=target;
		newItem.add(relationType,usePercent);
		this._items.push(newItem);
	}

	__proto.addItems=function(target,sidePairs){
		var arr=sidePairs.split(",");
		var s;
		var usePercent=false;
		var i=NaN;
		var newItem=new RelationItem(this._owner);
		newItem.target=target;
		for (i=0;i < 2;i++){
			s=arr[i];
			if (!s)
				continue ;
			if (s.charAt(s.length-1)=="%"){
				s=s.substr(0,s.length-1);
				usePercent=true;
			}
			else
			usePercent=false;
			var j=s.indexOf("-");
			if (j==-1)
				s=s+"-"+s;
			var t=fairygui.Relations.RELATION_NAMES.indexOf(s);
			if (t==-1)
				throw "invalid relation type";
			newItem.internalAdd(t,usePercent);
		}
		this._items.push(newItem);
	}

	__proto.remove=function(target,relationType){
		(relationType===void 0)&& (relationType=0);
		var cnt=this._items.length;
		var i=0;
		while (i < cnt){
			var item=this._items[i];
			if (item.target==target){
				item.remove(relationType);
				if (item.isEmpty){
					item.dispose();
					this._items.splice(i,1);
					cnt--;
				}
				else
				i++;
			}
			else
			i++;
		}
	}

	__proto.contains=function(target){
		var length=this._items.length;
		for (var i=0;i < length;i++){
			var item=this._items[i];
			if (item.target==target)
				return true;
		}
		return false;
	}

	__proto.clearFor=function(target){
		var cnt=this._items.length;
		var i=0;
		while (i < cnt){
			var item=this._items[i];
			if (item.target==target){
				item.dispose();
				this._items.splice(i,1);
				cnt--;
			}
			else
			i++;
		}
	}

	__proto.clearAll=function(){
		var length=this._items.length;
		for (var i=0;i < length;i++){
			var item=this._items[i];
			item.dispose();
		}
		this._items.length=0;
	}

	__proto.copyFrom=function(source){
		this.clearAll();
		var arr=source._items;
		var length=arr.length;
		for (var i=0;i < length;i++){
			var ri=arr[i];
			var item=new RelationItem(this._owner);
			item.copyFrom(ri);
			this._items.push(item);
		}
	}

	__proto.dispose=function(){
		this.clearAll();
	}

	__proto.onOwnerSizeChanged=function(dWidth,dHeight,applyPivot){
		if (this._items.length==0)
			return;
		var length=this._items.length;
		for (var i=0;i < length;i++){
			var item=this._items[i];
			item.applyOnSelfResized(dWidth,dHeight,applyPivot);
		}
	}

	__proto.ensureRelationsSizeCorrect=function(){
		if (this._items.length==0)
			return;
		this.sizeDirty=false;
		var length=this._items.length;
		for (var i=0;i < length;i++){
			var item=this._items[i];
			item.target.ensureSizeCorrect();
		}
	}

	__proto.setup=function(xml){
		var col=xml.childNodes;
		var length=col.length;
		var targetId;
		var target;
		for (var i=0;i < length;i++){
			var cxml=col[i];
			if(cxml.nodeName!="relation")
				continue ;
			targetId=cxml.getAttribute("target");
			if (this._owner.parent){
				if (targetId)
					target=this._owner.parent.getChildById(targetId);
				else
				target=this._owner.parent;
			}
			else {
				target=(this._owner).getChildById(targetId);
			}
			if (target)
				this.addItems(target,cxml.getAttribute("sidePair"));
		}
	}

	__getset(0,__proto,'empty',function(){
		return this._items.length==0;
	});

	__static(Relations,
	['RELATION_NAMES',function(){return this.RELATION_NAMES=
		[
		"left-left",
		"left-center",
		"left-right",
		"center-center",
		"right-left",
		"right-center",
		"right-right",
		"top-top",
		"top-middle",
		"top-bottom",
		"middle-middle",
		"bottom-top",
		"bottom-middle",
		"bottom-bottom",
		"width-width",
		"height-height",
		"leftext-left",
		"leftext-right",
		"rightext-left",
		"rightext-right",
		"topext-top",
		"topext-bottom",
		"bottomext-top",
		"bottomext-bottom"];}
	]);
	return Relations;
})()


//class fairygui.RelationType
var RelationType=(function(){
	function RelationType(){}
	__class(RelationType,'fairygui.RelationType');
	RelationType.Left_Left=0;
	RelationType.Left_Center=1;
	RelationType.Left_Right=2;
	RelationType.Center_Center=3;
	RelationType.Right_Left=4;
	RelationType.Right_Center=5;
	RelationType.Right_Right=6;
	RelationType.Top_Top=7;
	RelationType.Top_Middle=8;
	RelationType.Top_Bottom=9;
	RelationType.Middle_Middle=10;
	RelationType.Bottom_Top=11;
	RelationType.Bottom_Middle=12;
	RelationType.Bottom_Bottom=13;
	RelationType.Width=14;
	RelationType.Height=15;
	RelationType.LeftExt_Left=16;
	RelationType.LeftExt_Right=17;
	RelationType.RightExt_Left=18;
	RelationType.RightExt_Right=19;
	RelationType.TopExt_Top=20;
	RelationType.TopExt_Bottom=21;
	RelationType.BottomExt_Top=22;
	RelationType.BottomExt_Bottom=23;
	RelationType.Size=24;
	return RelationType;
})()


//class fairygui.ScrollBarDisplayType
var ScrollBarDisplayType=(function(){
	function ScrollBarDisplayType(){}
	__class(ScrollBarDisplayType,'fairygui.ScrollBarDisplayType');
	ScrollBarDisplayType.parse=function(value){
		switch (value){
			case "default":
				return 0;
			case "visible":
				return 1;
			case "auto":
				return 2;
			case "hidden":
				return 3;
			default :
				return 0;
			}
	}

	ScrollBarDisplayType.Default=0;
	ScrollBarDisplayType.Visible=1;
	ScrollBarDisplayType.Auto=2;
	ScrollBarDisplayType.Hidden=3;
	return ScrollBarDisplayType;
})()


//class fairygui.ScrollPane
var ScrollPane=(function(){
	function ScrollPane(owner,scrollType,scrollBarMargin,scrollBarDisplay,flags,vtScrollBarRes,hzScrollBarRes,headerRes,footerRes){
		this._owner=null;
		this._container=null;
		this._maskContainer=null;
		this._alignContainer=null;
		this._scrollType=0;
		this._scrollStep=0;
		this._mouseWheelStep=0;
		this._decelerationRate=NaN;
		this._scrollBarMargin=null;
		this._bouncebackEffect=false;
		this._touchEffect=false;
		this._scrollBarDisplayAuto=false;
		this._vScrollNone=false;
		this._hScrollNone=false;
		this._needRefresh=false;
		this._refreshBarAxis=null;
		this._displayOnLeft=false;
		this._snapToItem=false;
		this._displayInDemand=false;
		this._mouseWheelEnabled=false;
		this._pageMode=false;
		this._inertiaDisabled=false;
		this._xPos=NaN;
		this._yPos=NaN;
		this._viewSize=null;
		this._contentSize=null;
		this._overlapSize=null;
		this._pageSize=null;
		this._containerPos=null;
		this._beginTouchPos=null;
		this._lastTouchPos=null;
		this._lastTouchGlobalPos=null;
		this._velocity=null;
		this._velocityScale=NaN;
		this._lastMoveTime=NaN;
		this._isHoldAreaDone=false;
		this._aniFlag=0;
		this._scrollBarVisible=false;
		this._loop=0;
		this._headerLockedSize=0;
		this._footerLockedSize=0;
		this._refreshEventDispatching=false;
		this._tweening=0;
		this._tweenTime=null;
		this._tweenDuration=null;
		this._tweenStart=null;
		this._tweenChange=null;
		this._pageController=null;
		this._hzScrollBar=null;
		this._vtScrollBar=null;
		this._header=null;
		this._footer=null;
		this.isDragged=false;
		;
		this._owner=owner;
		this._maskContainer=new Sprite();
		this._owner.displayObject.addChild(this._maskContainer);
		this._container=this._owner._container;
		this._container.pos(0,0);
		this._maskContainer.addChild(this._container);
		this._scrollBarMargin=scrollBarMargin;
		this._scrollType=scrollType;
		this._scrollStep=UIConfig$1.defaultScrollStep;
		this._mouseWheelStep=this._scrollStep*2;
		this._decelerationRate=UIConfig$1.defaultScrollDecelerationRate;
		this._displayOnLeft=(flags & 1)!=0;
		this._snapToItem=(flags & 2)!=0;
		this._displayInDemand=(flags & 4)!=0;
		this._pageMode=(flags & 8)!=0;
		if(flags & 16)
			this._touchEffect=true;
		else if(flags & 32)
		this._touchEffect=false;
		else
		this._touchEffect=UIConfig$1.defaultScrollTouchEffect;
		if(flags & 64)
			this._bouncebackEffect=true;
		else if(flags & 128)
		this._bouncebackEffect=false;
		else
		this._bouncebackEffect=UIConfig$1.defaultScrollBounceEffect;
		this._inertiaDisabled=(flags & 256)!=0;
		if((flags & 512)==0)
			this._maskContainer.scrollRect=new Rectangle();
		this._scrollBarVisible=true;
		this._mouseWheelEnabled=true;
		this._xPos=0;
		this._yPos=0;
		this._aniFlag=0;
		this._footerLockedSize=0;
		this._headerLockedSize=0;
		if(scrollBarDisplay==0)
			scrollBarDisplay=UIConfig$1.defaultScrollBarDisplay;
		this._viewSize=new Point();
		this._contentSize=new Point();
		this._pageSize=new Point(1,1);
		this._overlapSize=new Point();
		this._tweenTime=new Point();
		this._tweenStart=new Point();
		this._tweenDuration=new Point();
		this._tweenChange=new Point();
		this._velocity=new Point();
		this._containerPos=new Point();
		this._beginTouchPos=new Point();
		this._lastTouchPos=new Point();
		this._lastTouchGlobalPos=new Point();
		if(scrollBarDisplay !=3){
			if(this._scrollType==2 || this._scrollType==1){
				var res=vtScrollBarRes ? vtScrollBarRes :UIConfig$1.verticalScrollBar;
				if(res){
					this._vtScrollBar=(UIPackage.createObjectFromURL(res));
					if(!this._vtScrollBar)
						throw "cannot create scrollbar from "+res;
					this._vtScrollBar.setScrollPane(this,true);
					this._owner.displayObject.addChild(this._vtScrollBar.displayObject);
				}
			}
			if(this._scrollType==2 || this._scrollType==0){
				res=hzScrollBarRes ? hzScrollBarRes :UIConfig$1.horizontalScrollBar;
				if(res){
					this._hzScrollBar=(UIPackage.createObjectFromURL(res));
					if(!this._hzScrollBar)
						throw "cannot create scrollbar from "+res;
					this._hzScrollBar.setScrollPane(this,false);
					this._owner.displayObject.addChild(this._hzScrollBar.displayObject);
				}
			}
			this._scrollBarDisplayAuto=scrollBarDisplay==2;
			if(this._scrollBarDisplayAuto){
				this._scrollBarVisible=false;
				if(this._vtScrollBar)
					this._vtScrollBar.displayObject.visible=false;
				if(this._hzScrollBar)
					this._hzScrollBar.displayObject.visible=false;
			}
		}
		else
		this._mouseWheelEnabled=false;
		if (headerRes){
			this._header=UIPackage.createObjectFromURL(headerRes);
			if (this._header==null)
				throw new Error("FairyGUI: cannot create scrollPane header from "+headerRes);
		}
		if (footerRes){
			this._footer=UIPackage.createObjectFromURL(footerRes);
			if (this._footer==null)
				throw new Error("FairyGUI: cannot create scrollPane footer from "+footerRes);
		}
		if (this._header !=null || this._footer !=null)
			this._refreshBarAxis=(this._scrollType==2 || this._scrollType==1)? "y" :"x";
		this.setSize(owner.width,owner.height);
		this._owner.on("mousedown",this,this.__mouseDown);
		this._owner.on("mousewheel",this,this.__mouseWheel);
	}

	__class(ScrollPane,'fairygui.ScrollPane');
	var __proto=ScrollPane.prototype;
	__proto.dispose=function(){
		if (this._tweening !=0)
			Laya.timer.clear(this,this.tweenUpdate);
		this._pageController=null;
		if (this._hzScrollBar !=null)
			this._hzScrollBar.dispose();
		if (this._vtScrollBar !=null)
			this._vtScrollBar.dispose();
		if (this._header !=null)
			this._header.dispose();
		if (this._footer !=null)
			this._footer.dispose();
	}

	__proto.setPercX=function(value,ani){
		(ani===void 0)&& (ani=false);
		this._owner.ensureBoundsCorrect();
		this.setPosX(this._overlapSize.x *ToolSet.clamp01(value),ani);
	}

	__proto.setPercY=function(value,ani){
		(ani===void 0)&& (ani=false);
		this._owner.ensureBoundsCorrect();
		this.setPosY(this._overlapSize.y *ToolSet.clamp01(value),ani);
	}

	__proto.setPosX=function(value,ani){
		(ani===void 0)&& (ani=false);
		this._owner.ensureBoundsCorrect();
		if (this._loop==1)
			value=this.loopCheckingNewPos(value,"x");
		value=ToolSet.clamp(value,0,this._overlapSize.x);
		if (value !=this._xPos){
			this._xPos=value;
			this.posChanged(ani);
		}
	}

	__proto.setPosY=function(value,ani){
		(ani===void 0)&& (ani=false);
		this._owner.ensureBoundsCorrect();
		if (this._loop==1)
			value=this.loopCheckingNewPos(value,"y");
		value=ToolSet.clamp(value,0,this._overlapSize.y);
		if (value !=this._yPos){
			this._yPos=value;
			this.posChanged(ani);
		}
	}

	__proto.scrollTop=function(ani){
		(ani===void 0)&& (ani=false);
		this.setPercY(0,ani);
	}

	__proto.scrollBottom=function(ani){
		(ani===void 0)&& (ani=false);
		this.setPercY(1,ani);
	}

	__proto.scrollUp=function(ratio,ani){
		(ratio===void 0)&& (ratio=1);
		(ani===void 0)&& (ani=false);
		if (this._pageMode)
			this.setPosY(this._yPos-this._pageSize.y *ratio,ani);
		else
		this.setPosY(this._yPos-this._scrollStep *ratio,ani);;
	}

	__proto.scrollDown=function(ratio,ani){
		(ratio===void 0)&& (ratio=1);
		(ani===void 0)&& (ani=false);
		if (this._pageMode)
			this.setPosY(this._yPos+this._pageSize.y *ratio,ani);
		else
		this.setPosY(this._yPos+this._scrollStep *ratio,ani);
	}

	__proto.scrollLeft=function(ratio,ani){
		(ratio===void 0)&& (ratio=1);
		(ani===void 0)&& (ani=false);
		if (this._pageMode)
			this.setPosX(this._xPos-this._pageSize.x *ratio,ani);
		else
		this.setPosX(this._xPos-this._scrollStep *ratio,ani);
	}

	__proto.scrollRight=function(ratio,ani){
		(ratio===void 0)&& (ratio=1);
		(ani===void 0)&& (ani=false);
		if (this._pageMode)
			this.setPosX(this._xPos+this._pageSize.x *ratio,ani);
		else
		this.setPosX(this._xPos+this._scrollStep *ratio,ani);
	}

	__proto.scrollToView=function(target,ani,setFirst){
		(ani===void 0)&& (ani=false);
		(setFirst===void 0)&& (setFirst=false);
		this._owner.ensureBoundsCorrect();
		if(this._needRefresh)
			this.refresh();
		var rect;
		if((target instanceof fairygui.GObject )){
			if(target.parent !=this._owner){
				target.parent.localToGlobalRect(target.x,target.y,
				target.width,target.height,fairygui.ScrollPane.sHelperRect);
				rect=this._owner.globalToLocalRect(fairygui.ScrollPane.sHelperRect.x,fairygui.ScrollPane.sHelperRect.y,
				fairygui.ScrollPane.sHelperRect.width,fairygui.ScrollPane.sHelperRect.height,fairygui.ScrollPane.sHelperRect);
			}
			else {
				rect=fairygui.ScrollPane.sHelperRect;
				rect.setTo(target.x,target.y,target.width,target.height);
			}
		}
		else
		rect=(target);
		if(this._overlapSize.y>0){
			var bottom=this._yPos+this._viewSize.y;
			if(setFirst || rect.y<=this._yPos || rect.height>=this._viewSize.y){
				if(this._pageMode)
					this.setPosY(Math.floor(rect.y/this._pageSize.y)*this._pageSize.y,ani);
				else
				this.setPosY(rect.y,ani);
			}
			else if(rect.y+rect.height>bottom){
				if(this._pageMode)
					this.setPosY(Math.floor(rect.y/this._pageSize.y)*this._pageSize.y,ani);
				else if (rect.height <=this._viewSize.y/2)
				this.setPosY(rect.y+rect.height*2-this._viewSize.y,ani);
				else
				this.setPosY(rect.y+rect.height-this._viewSize.y,ani);
			}
		}
		if(this._overlapSize.x>0){
			var right=this._xPos+this._viewSize.x;
			if(setFirst || rect.x<=this._xPos || rect.width>=this._viewSize.x){
				if(this._pageMode)
					this.setPosX(Math.floor(rect.x/this._pageSize.x)*this._pageSize.x,ani);
				else
				this.setPosX(rect.x,ani);
			}
			else if(rect.x+rect.width>right){
				if(this._pageMode)
					this.setPosX(Math.floor(rect.x/this._pageSize.x)*this._pageSize.x,ani);
				else if (rect.width <=this._viewSize.x/2)
				this.setPosX(rect.x+rect.width*2-this._viewSize.x,ani);
				else
				this.setPosX(rect.x+rect.width-this._viewSize.x,ani);
			}
		}
		if(!ani && this._needRefresh)
			this.refresh();
	}

	__proto.isChildInView=function(obj){
		if(this._overlapSize.y>0){
			var dist=obj.y+this._container.y;
			if(dist<-obj.height || dist>this._viewSize.y)
				return false;
		}
		if(this._overlapSize.x>0){
			dist=obj.x+this._container.x;
			if(dist<-obj.width || dist>this._viewSize.x)
				return false;
		}
		return true;
	}

	__proto.cancelDragging=function(){
		this._owner.displayObject.stage.off("mousemove",this,this.__mouseMove);
		this._owner.displayObject.stage.off("mouseup",this,this.__mouseUp);
		this._owner.displayObject.stage.off("click",this,this.__click);
		if (ScrollPane.draggingPane==this)
			ScrollPane.draggingPane=null;
		ScrollPane._gestureFlag=0;
		this.isDragged=false;
		this._maskContainer.mouseEnabled=true;
	}

	__proto.lockHeader=function(size){
		if (this._headerLockedSize==size)
			return;
		this._headerLockedSize=size;
		if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] >=0){
			this._tweenStart.setTo(this._container.x,this._container.y);
			this._tweenChange.setTo(0,0);
			this._tweenChange[this._refreshBarAxis]=this._headerLockedSize-this._tweenStart[this._refreshBarAxis];
			this._tweenDuration.setTo(0.3,0.3);
			this._tweenTime.setTo(0,0);
			this._tweening=2;
			Laya.timer.frameLoop(1,this,this.tweenUpdate);
		}
	}

	__proto.lockFooter=function(size){
		if (this._footerLockedSize==size)
			return;
		this._footerLockedSize=size;
		if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] <=-this._overlapSize[this._refreshBarAxis]){
			this._tweenStart.setTo(this._container.x,this._container.y);
			this._tweenChange.setTo(0,0);
			var max=this._overlapSize[this._refreshBarAxis];
			if (max==0)
				max=Math.max(this._contentSize[this._refreshBarAxis]+this._footerLockedSize-this._viewSize[this._refreshBarAxis],0);
			else
			max+=this._footerLockedSize;
			this._tweenChange[this._refreshBarAxis]=-max-this._tweenStart[this._refreshBarAxis];
			this._tweenDuration.setTo(0.3,0.3);
			this._tweenTime.setTo(0,0);
			this._tweening=2;
			Laya.timer.frameLoop(1,this,this.tweenUpdate);
		}
	}

	__proto.onOwnerSizeChanged=function(){
		this.setSize(this._owner.width,this._owner.height);
		this.posChanged(false);
	}

	__proto.handleControllerChanged=function(c){
		if (this._pageController==c){
			if (this._scrollType==0)
				this.currentPageX=c.selectedIndex;
			else
			this.currentPageY=c.selectedIndex;
		}
	}

	__proto.updatePageController=function(){
		if (this._pageController !=null && !this._pageController.changing){
			var index=0;
			if (this._scrollType==0)
				index=this.currentPageX;
			else
			index=this.currentPageY;
			if (index < this._pageController.pageCount){
				var c=this._pageController;
				this._pageController=null;
				c.selectedIndex=index;
				this._pageController=c;
			}
		}
	}

	__proto.adjustMaskContainer=function(){
		var mx=NaN,my=NaN;
		if (this._displayOnLeft && this._vtScrollBar !=null)
			mx=Math.floor(this._owner.margin.left+this._vtScrollBar.width);
		else
		mx=Math.floor(this._owner.margin.left);
		my=Math.floor(this._owner.margin.top);
		this._maskContainer.pos(mx,my);
		if(this._owner._alignOffset.x!=0 || this._owner._alignOffset.y!=0){
			if(this._alignContainer==null){
				this._alignContainer=new Sprite();
				this._maskContainer.addChild(this._alignContainer);
				this._alignContainer.addChild(this._container);
			}
			this._alignContainer.pos(this._owner._alignOffset.x,this._owner._alignOffset.y);
		}
		else if(this._alignContainer){
			this._alignContainer.pos(0,0);
		}
	}

	__proto.setSize=function(aWidth,aHeight){
		this.adjustMaskContainer();
		if (this._hzScrollBar){
			this._hzScrollBar.y=aHeight-this._hzScrollBar.height;
			if(this._vtScrollBar && !this._vScrollNone){
				this._hzScrollBar.width=aWidth-this._vtScrollBar.width-this._scrollBarMargin.left-this._scrollBarMargin.right;
				if(this._displayOnLeft)
					this._hzScrollBar.x=this._scrollBarMargin.left+this._vtScrollBar.width;
				else
				this._hzScrollBar.x=this._scrollBarMargin.left;
			}
			else {
				this._hzScrollBar.width=aWidth-this._scrollBarMargin.left-this._scrollBarMargin.right;
				this._hzScrollBar.x=this._scrollBarMargin.left;
			}
		}
		if (this._vtScrollBar){
			if (!this._displayOnLeft)
				this._vtScrollBar.x=aWidth-this._vtScrollBar.width;
			if(this._hzScrollBar)
				this._vtScrollBar.height=aHeight-this._hzScrollBar.height-this._scrollBarMargin.top-this._scrollBarMargin.bottom;
			else
			this._vtScrollBar.height=aHeight-this._scrollBarMargin.top-this._scrollBarMargin.bottom;
			this._vtScrollBar.y=this._scrollBarMargin.top;
		}
		this._viewSize.x=aWidth;
		this._viewSize.y=aHeight;
		if(this._hzScrollBar && !this._hScrollNone)
			this._viewSize.y-=this._hzScrollBar.height;
		if(this._vtScrollBar && !this._vScrollNone)
			this._viewSize.x-=this._vtScrollBar.width;
		this._viewSize.x-=(this._owner.margin.left+this._owner.margin.right);
		this._viewSize.y-=(this._owner.margin.top+this._owner.margin.bottom);
		this._viewSize.x=Math.max(1,this._viewSize.x);
		this._viewSize.y=Math.max(1,this._viewSize.y);
		this._pageSize.x=this._viewSize.x;
		this._pageSize.y=this._viewSize.y;
		this.handleSizeChanged();
	}

	__proto.setContentSize=function(aWidth,aHeight){
		if(this._contentSize.x==aWidth && this._contentSize.y==aHeight)
			return;
		this._contentSize.x=aWidth;
		this._contentSize.y=aHeight;
		this.handleSizeChanged();
	}

	__proto.changeContentSizeOnScrolling=function(deltaWidth,deltaHeight,deltaPosX,deltaPosY){
		var isRightmost=this._xPos==this._overlapSize.x;
		var isBottom=this._yPos==this._overlapSize.y;
		this._contentSize.x+=deltaWidth;
		this._contentSize.y+=deltaHeight;
		this.handleSizeChanged();
		if (this._tweening==1){
			if (deltaWidth !=0 && isRightmost && this._tweenChange.x < 0){
				this._xPos=this._overlapSize.x;
				this._tweenChange.x=-this._xPos-this._tweenStart.x;
			}
			if (deltaHeight !=0 && isBottom && this._tweenChange.y < 0){
				this._yPos=this._overlapSize.y;
				this._tweenChange.y=-this._yPos-this._tweenStart.y;
			}
		}
		else if (this._tweening==2){
			if (deltaPosX !=0){
				this._container.x-=deltaPosX;
				this._tweenStart.x-=deltaPosX;
				this._xPos=-this._container.x;
			}
			if (deltaPosY !=0){
				this._container.y-=deltaPosY;
				this._tweenStart.y-=deltaPosY;
				this._yPos=-this._container.y;
			}
		}
		else if (this.isDragged){
			if (deltaPosX !=0){
				this._container.x-=deltaPosX;
				this._containerPos.x-=deltaPosX;
				this._xPos=-this._container.x;
			}
			if (deltaPosY !=0){
				this._container.y-=deltaPosY;
				this._containerPos.y-=deltaPosY;
				this._yPos=-this._container.y;
			}
		}
		else{
			if (deltaWidth !=0 && isRightmost){
				this._xPos=this._overlapSize.x;
				this._container.x=-this._xPos;
			}
			if (deltaHeight !=0 && isBottom){
				this._yPos=this._overlapSize.y;
				this._container.y=-this._yPos;
			}
		}
		if (this._pageMode)
			this.updatePageController();
	}

	__proto.handleSizeChanged=function(onScrolling){
		(onScrolling===void 0)&& (onScrolling=false);
		if(this._displayInDemand){
			if(this._vtScrollBar){
				if(this._contentSize.y<=this._viewSize.y){
					if(!this._vScrollNone){
						this._vScrollNone=true;
						this._viewSize.x+=this._vtScrollBar.width;
					}
				}
				else{
					if(this._vScrollNone){
						this._vScrollNone=false;
						this._viewSize.x-=this._vtScrollBar.width;
					}
				}
			}
			if(this._hzScrollBar){
				if(this._contentSize.x<=this._viewSize.x){
					if(!this._hScrollNone){
						this._hScrollNone=true;
						this._viewSize.y+=this._hzScrollBar.height;
					}
				}
				else{
					if(this._hScrollNone){
						this._hScrollNone=false;
						this._viewSize.y-=this._hzScrollBar.height;
					}
				}
			}
		}
		if(this._vtScrollBar){
			if(this._viewSize.y<this._vtScrollBar.minSize)
				this._vtScrollBar.displayObject.visible=false;
			else{
				this._vtScrollBar.displayObject.visible=this._scrollBarVisible && !this._vScrollNone;
				if(this._contentSize.y==0)
					this._vtScrollBar.displayPerc=0;
				else
				this._vtScrollBar.displayPerc=Math.min(1,this._viewSize.y/this._contentSize.y);
			}
		}
		if(this._hzScrollBar){
			if(this._viewSize.x<this._hzScrollBar.minSize)
				this._hzScrollBar.displayObject.visible=false;
			else{
				this._hzScrollBar.displayObject.visible=this._scrollBarVisible && !this._hScrollNone;
				if(this._contentSize.x==0)
					this._hzScrollBar.displayPerc=0;
				else
				this._hzScrollBar.displayPerc=Math.min(1,this._viewSize.x/this._contentSize.x);
			}
		};
		var rect=this._maskContainer.scrollRect;
		if (rect){
			rect.width=this._viewSize.x;
			rect.height=this._viewSize.y;
			this._maskContainer.scrollRect=rect;
		}
		if (this._scrollType==0 || this._scrollType==2)
			this._overlapSize.x=Math.ceil(Math.max(0,this._contentSize.x-this._viewSize.x));
		else
		this._overlapSize.x=0;
		if (this._scrollType==1 || this._scrollType==2)
			this._overlapSize.y=Math.ceil(Math.max(0,this._contentSize.y-this._viewSize.y));
		else
		this._overlapSize.y=0;
		this._xPos=ToolSet.clamp(this._xPos,0,this._overlapSize.x);
		this._yPos=ToolSet.clamp(this._yPos,0,this._overlapSize.y);
		if(this._refreshBarAxis!=null){
			var max=this._overlapSize[this._refreshBarAxis];
			if (max==0)
				max=Math.max(this._contentSize[this._refreshBarAxis]+this._footerLockedSize-this._viewSize[this._refreshBarAxis],0);
			else
			max+=this._footerLockedSize;
			if (this._refreshBarAxis=="x"){
				this._container.pos(ToolSet.clamp(this._container.x,-max,this._headerLockedSize),
				ToolSet.clamp(this._container.y,-this._overlapSize.y,0));
			}
			else{
				this._container.pos(ToolSet.clamp(this._container.x,-this._overlapSize.x,0),
				ToolSet.clamp(this._container.y,-max,this._headerLockedSize));
			}
			if (this._header !=null){
				if (this._refreshBarAxis=="x")
					this._header.height=this._viewSize.y;
				else
				this._header.width=this._viewSize.x;
			}
			if (this._footer !=null){
				if (this._refreshBarAxis=="y")
					this._footer.height=this._viewSize.y;
				else
				this._footer.width=this._viewSize.x;
			}
		}
		else{
			this._container.pos(ToolSet.clamp(this._container.x,-this._overlapSize.x,0),
			ToolSet.clamp(this._container.y,-this._overlapSize.y,0));
		}
		this.syncScrollBar();
		this.checkRefreshBar();
		if (this._pageMode)
			this.updatePageController();
	}

	__proto.posChanged=function(ani){
		if (this._aniFlag==0)
			this._aniFlag=ani ? 1 :-1;
		else if (this._aniFlag==1 && !ani)
		this._aniFlag=-1;
		this._needRefresh=true;
		Laya.timer.callLater(this,this.refresh);
	}

	__proto.refresh=function(){
		this._needRefresh=false;
		Laya.timer.clear(this,this.refresh);
		if (this._pageMode || this._snapToItem){
			ScrollPane.sEndPos.setTo(-this._xPos,-this._yPos);
			this.alignPosition(ScrollPane.sEndPos,false);
			this._xPos=-ScrollPane.sEndPos.x;
			this._yPos=-ScrollPane.sEndPos.y;
		}
		this.refresh2();
		Events.dispatch("fui_scroll",this._owner.displayObject);
		if (this._needRefresh){
			this._needRefresh=false;
			Laya.timer.clear(this,this.refresh);
			this.refresh2();
		}
		this.syncScrollBar();
		this._aniFlag=0;
	}

	__proto.refresh2=function(){
		if (this._aniFlag==1 && !this.isDragged){
			var posX=NaN;
			var posY=NaN;
			if (this._overlapSize.x > 0)
				posX=-Math.floor(this._xPos);
			else{
				if (this._container.x !=0)
					this._container.x=0;
				posX=0;
			}
			if (this._overlapSize.y > 0)
				posY=-Math.floor(this._yPos);
			else{
				if (this._container.y !=0)
					this._container.y=0;
				posY=0;
			}
			if (posX !=this._container.x || posY !=this._container.y){
				this._tweening=1;
				this._tweenTime.setTo(0,0);
				this._tweenDuration.setTo(0.5,0.5);
				this._tweenStart.setTo(this._container.x,this._container.y);
				this._tweenChange.setTo(posX-this._tweenStart.x,posY-this._tweenStart.y);
				Laya.timer.frameLoop(1,this,this.tweenUpdate);
			}
			else if (this._tweening !=0)
			this.killTween();
		}
		else{
			if (this._tweening !=0)
				this.killTween();
			this._container.pos(Math.floor(-this._xPos),Math.floor(-this._yPos));
			this.loopCheckingCurrent();
		}
		if (this._pageMode)
			this.updatePageController();
	}

	__proto.syncScrollBar=function(end){
		(end===void 0)&& (end=false);
		if (this._vtScrollBar !=null){
			this._vtScrollBar.scrollPerc=this._overlapSize.y==0 ? 0 :ToolSet.clamp(-this._container.y,0,this._overlapSize.y)/ this._overlapSize.y;
			if (this._scrollBarDisplayAuto)
				this.showScrollBar(!end);
		}
		if (this._hzScrollBar !=null){
			this._hzScrollBar.scrollPerc=this._overlapSize.x==0 ? 0 :ToolSet.clamp(-this._container.x,0,this._overlapSize.x)/ this._overlapSize.x;
			if (this._scrollBarDisplayAuto)
				this.showScrollBar(!end);
		}
		if(end)
			this._maskContainer.mouseEnabled=true;
	}

	__proto.__mouseDown=function(){
		if(!this._touchEffect)
			return;
		if(this._tweening!=0){
			this.killTween();
			this.isDragged=true;
		}
		else
		this.isDragged=false;
		var pt=this._owner.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.ScrollPane.sHelperPoint);
		this._containerPos.setTo(this._container.x,this._container.y);
		this._beginTouchPos.setTo(pt.x,pt.y);
		this._lastTouchPos.setTo(pt.x,pt.y);
		this._lastTouchGlobalPos.setTo(Laya.stage.mouseX,Laya.stage.mouseY);
		this._isHoldAreaDone=false;
		this._velocity.setTo(0,0);
		this._velocityScale=1;
		this._lastMoveTime=Laya.timer.currTimer/1000;
		this._owner.displayObject.stage.on("mousemove",this,this.__mouseMove);
		this._owner.displayObject.stage.on("mouseup",this,this.__mouseUp);
		this._owner.displayObject.stage.on("click",this,this.__click);
	}

	__proto.__mouseMove=function(){
		if(!this._touchEffect)
			return;
		if (ScrollPane.draggingPane !=null && ScrollPane.draggingPane !=this || GObject.draggingObject !=null)
			return;
		var sensitivity=UIConfig$1.touchScrollSensitivity;
		var pt=this._owner.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.ScrollPane.sHelperPoint);
		var diff=NaN,diff2=NaN;
		var sv=false,sh=false,st=false;
		if (this._scrollType==1){
			if (!this._isHoldAreaDone){
				ScrollPane._gestureFlag |=1;
				diff=Math.abs(this._beginTouchPos.y-pt.y);
				if (diff < sensitivity)
					return;
				if ((ScrollPane._gestureFlag & 2)!=0){
					diff2=Math.abs(this._beginTouchPos.x-pt.x);
					if (diff < diff2)
						return;
				}
			}
			sv=true;
		}
		else if (this._scrollType==0){
			if (!this._isHoldAreaDone){
				ScrollPane._gestureFlag |=2;
				diff=Math.abs(this._beginTouchPos.x-pt.x);
				if (diff < sensitivity)
					return;
				if ((ScrollPane._gestureFlag & 1)!=0){
					diff2=Math.abs(this._beginTouchPos.y-pt.y);
					if (diff < diff2)
						return;
				}
			}
			sh=true;
		}
		else{
			ScrollPane._gestureFlag=3;
			if (!this._isHoldAreaDone){
				diff=Math.abs(this._beginTouchPos.y-pt.y);
				if (diff < sensitivity){
					diff=Math.abs(this._beginTouchPos.x-pt.x);
					if (diff < sensitivity)
						return;
				}
			}
			sv=sh=true;
		};
		var newPosX=Math.floor(this._containerPos.x+pt.x-this._beginTouchPos.x);
		var newPosY=Math.floor(this._containerPos.y+pt.y-this._beginTouchPos.y);
		if (sv){
			if (newPosY > 0){
				if (!this._bouncebackEffect)
					this._container.y=0;
				else if (this._header !=null && this._header.maxHeight !=0)
				this._container.y=Math.floor(Math.min(newPosY *0.5,this._header.maxHeight));
				else
				this._container.y=Math.floor(Math.min(newPosY *0.5,this._viewSize.y *0.5));
			}
			else if (newPosY <-this._overlapSize.y){
				if (!this._bouncebackEffect)
					this._container.y=-this._overlapSize.y;
				else if (this._footer !=null && this._footer.maxHeight > 0)
				this._container.y=Math.floor(Math.max((newPosY+this._overlapSize.y)*0.5,-this._footer.maxHeight)-this._overlapSize.y);
				else
				this._container.y=Math.floor(Math.max((newPosY+this._overlapSize.y)*0.5,-this._viewSize.y *0.5)-this._overlapSize.y);
			}
			else
			this._container.y=newPosY;
		}
		if (sh){
			if (newPosX > 0){
				if (!this._bouncebackEffect)
					this._container.x=0;
				else if (this._header !=null && this._header.maxWidth !=0)
				this._container.x=Math.floor(Math.min(newPosX *0.5,this._header.maxWidth));
				else
				this._container.x=Math.floor(Math.min(newPosX *0.5,this._viewSize.x *0.5));
			}
			else if (newPosX < 0-this._overlapSize.x){
				if (!this._bouncebackEffect)
					this._container.x=-this._overlapSize.x;
				else if (this._footer !=null && this._footer.maxWidth > 0)
				this._container.x=Math.floor(Math.max((newPosX+this._overlapSize.x)*0.5,-this._footer.maxWidth)-this._overlapSize.x);
				else
				this._container.x=Math.floor(Math.max((newPosX+this._overlapSize.x)*0.5,-this._viewSize.x *0.5)-this._overlapSize.x);
			}
			else
			this._container.x=newPosX;
		};
		var frameRate=Laya.stage.frameRate=="slow"?30:60;
		var now=Laya.timer.currTimer/1000;
		var deltaTime=Math.max(now-this._lastMoveTime,1/frameRate);
		var deltaPositionX=pt.x-this._lastTouchPos.x;
		var deltaPositionY=pt.y-this._lastTouchPos.y;
		if (!sh)
			deltaPositionX=0;
		if (!sv)
			deltaPositionY=0;
		if(deltaTime!=0){
			var elapsed=deltaTime *frameRate-1;
			if (elapsed > 1){
				var factor=Math.pow(0.833,elapsed);
				this._velocity.x=this._velocity.x *factor;
				this._velocity.y=this._velocity.y *factor;
			}
			this._velocity.x=ToolSet.lerp(this._velocity.x,deltaPositionX *60 / frameRate / deltaTime,deltaTime *10);
			this._velocity.y=ToolSet.lerp(this._velocity.y,deltaPositionY *60 / frameRate / deltaTime,deltaTime *10);
		};
		var deltaGlobalPositionX=this._lastTouchGlobalPos.x-Laya.stage.mouseX;
		var deltaGlobalPositionY=this._lastTouchGlobalPos.y-Laya.stage.mouseY;
		if (deltaPositionX !=0)
			this._velocityScale=Math.abs(deltaGlobalPositionX / deltaPositionX);
		else if (deltaPositionY !=0)
		this._velocityScale=Math.abs(deltaGlobalPositionY / deltaPositionY);
		this._lastTouchPos.setTo(pt.x,pt.y);
		this._lastTouchGlobalPos.setTo(Laya.stage.mouseX,Laya.stage.mouseY);
		this._lastMoveTime=now;
		if (this._overlapSize.x > 0)
			this._xPos=ToolSet.clamp(-this._container.x,0,this._overlapSize.x);
		if (this._overlapSize.y > 0)
			this._yPos=ToolSet.clamp(-this._container.y,0,this._overlapSize.y);
		if (this._loop !=0){
			newPosX=this._container.x;
			newPosY=this._container.y;
			if (this.loopCheckingCurrent()){
				this._containerPos.x+=this._container.x-newPosX;
				this._containerPos.y+=this._container.y-newPosY;
			}
		}
		ScrollPane.draggingPane=this;
		this._isHoldAreaDone=true;
		this.isDragged=true;
		this._maskContainer.mouseEnabled=false;
		this.syncScrollBar();
		this.checkRefreshBar();
		if (this._pageMode)
			this.updatePageController();
		Events.dispatch("fui_scroll",this._owner.displayObject);
	}

	__proto.__mouseUp=function(){
		this._owner.displayObject.stage.off("mousemove",this,this.__mouseMove);
		this._owner.displayObject.stage.off("mouseup",this,this.__mouseUp);
		this._owner.displayObject.stage.off("click",this,this.__click);
		if (ScrollPane.draggingPane==this)
			ScrollPane.draggingPane=null;
		ScrollPane._gestureFlag=0;
		if (!this.isDragged || !this._touchEffect){
			this.isDragged=false;
			this._maskContainer.mouseEnabled=true;
			return;
		}
		this.isDragged=false;
		this._maskContainer.mouseEnabled=true;
		this._tweenStart.setTo(this._container.x,this._container.y);
		ScrollPane.sEndPos.setTo(this._tweenStart.x,this._tweenStart.y);
		var flag=false;
		if (this._container.x > 0){
			ScrollPane.sEndPos.x=0;
			flag=true;
		}
		else if (this._container.x <-this._overlapSize.x){
			ScrollPane.sEndPos.x=-this._overlapSize.x;
			flag=true;
		}
		if (this._container.y > 0){
			ScrollPane.sEndPos.y=0;
			flag=true;
		}
		else if (this._container.y <-this._overlapSize.y){
			ScrollPane.sEndPos.y=-this._overlapSize.y;
			flag=true;
		}
		if (flag){
			this._tweenChange.setTo(ScrollPane.sEndPos.x-this._tweenStart.x,ScrollPane.sEndPos.y-this._tweenStart.y);
			if (this._tweenChange.x <-UIConfig$1.touchDragSensitivity || this._tweenChange.y <-UIConfig$1.touchDragSensitivity){
				this._refreshEventDispatching=true;
				Events.dispatch("fui_pull_down_release",this._owner.displayObject);
				this._refreshEventDispatching=false;
			}
			else if (this._tweenChange.x > UIConfig$1.touchDragSensitivity || this._tweenChange.y > UIConfig$1.touchDragSensitivity){
				this._refreshEventDispatching=true;
				Events.dispatch("fui_pull_up_release",this._owner.displayObject);
				this._refreshEventDispatching=false;
			}
			if (this._headerLockedSize > 0 && ScrollPane.sEndPos[this._refreshBarAxis]==0){
				ScrollPane.sEndPos[this._refreshBarAxis]=this._headerLockedSize;
				this._tweenChange.x=ScrollPane.sEndPos.x-this._tweenStart.x;
				this._tweenChange.y=ScrollPane.sEndPos.y-this._tweenStart.y;
			}
			else if (this._footerLockedSize > 0 && ScrollPane.sEndPos[this._refreshBarAxis]==-this._overlapSize[this._refreshBarAxis]){
				var max=this._overlapSize[this._refreshBarAxis];
				if (max==0)
					max=Math.max(this._contentSize[this._refreshBarAxis]+this._footerLockedSize-this._viewSize[this._refreshBarAxis],0);
				else
				max+=this._footerLockedSize;
				ScrollPane.sEndPos[this._refreshBarAxis]=-max;
				this._tweenChange.x=ScrollPane.sEndPos.x-this._tweenStart.x;
				this._tweenChange.y=ScrollPane.sEndPos.y-this._tweenStart.y;
			}
			this._tweenDuration.setTo(0.3,0.3);
		}
		else{
			if (!this._inertiaDisabled){
				var frameRate=Laya.stage.frameRate=="slow"?30:60;
				var elapsed=(Laya.timer.currTimer/1000-this._lastMoveTime)*frameRate-1;
				if (elapsed > 1){
					var factor=Math.pow(0.833,elapsed);
					this._velocity.x=this._velocity.x *factor;
					this._velocity.y=this._velocity.y *factor;
				}
				this.updateTargetAndDuration(this._tweenStart,ScrollPane.sEndPos);
			}
			else
			this._tweenDuration.setTo(0.3,0.3);
			ScrollPane.sOldChange.setTo(ScrollPane.sEndPos.x-this._tweenStart.x,ScrollPane.sEndPos.y-this._tweenStart.y);
			this.loopCheckingTarget(ScrollPane.sEndPos);
			if (this._pageMode || this._snapToItem)
				this.alignPosition(ScrollPane.sEndPos,true);
			this._tweenChange.x=ScrollPane.sEndPos.x-this._tweenStart.x;
			this._tweenChange.y=ScrollPane.sEndPos.y-this._tweenStart.y;
			if (this._tweenChange.x==0 && this._tweenChange.y==0){
				if (this._scrollBarDisplayAuto)
					this.showScrollBar(false);
				return;
			}
			if (this._pageMode || this._snapToItem){
				this.fixDuration("x",ScrollPane.sOldChange.x);
				this.fixDuration("y",ScrollPane.sOldChange.y);
			}
		}
		this._tweening=2;
		this._tweenTime.setTo(0,0);
		Laya.timer.frameLoop(1,this,this.tweenUpdate);
	}

	__proto.__click=function(){
		this.isDragged=false;
	}

	__proto.__mouseWheel=function(evt){
		if(!this._mouseWheelEnabled)
			return;
		var pt=this._owner.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.ScrollPane.sHelperPoint);
		var delta=evt["delta"];
		delta=delta>0?-1:(delta<0?1:0);
		if (this._overlapSize.x > 0 && this._overlapSize.y==0){
			if (this._pageMode)
				this.setPosX(this._xPos+this._pageSize.x *delta,false);
			else
			this.setPosX(this._xPos+this._mouseWheelStep *delta,false);
		}
		else {
			if (this._pageMode)
				this.setPosY(this._yPos+this._pageSize.y *delta,false);
			else
			this.setPosY(this._yPos+this._mouseWheelStep *delta,false);
		}
	}

	__proto.__rollOver=function(){
		this.showScrollBar(true);
	}

	__proto.__rollOut=function(){
		this.showScrollBar(false);
	}

	__proto.showScrollBar=function(val){
		if (val){
			this.__showScrollBar(true);
			Laya.timer.clear(this,this.__showScrollBar);
		}
		else
		Laya.timer.once(500,this,this.__showScrollBar,[val]);
	}

	__proto.__showScrollBar=function(val){
		this._scrollBarVisible=val && this._viewSize.x>0 && this._viewSize.y>0;
		if (this._vtScrollBar)
			this._vtScrollBar.displayObject.visible=this._scrollBarVisible && !this._vScrollNone;
		if (this._hzScrollBar)
			this._hzScrollBar.displayObject.visible=this._scrollBarVisible && !this._hScrollNone;
	}

	__proto.getLoopPartSize=function(division,axis){
		return (this._contentSize[axis]+(axis=="x" ? (this._owner).columnGap :(this._owner).lineGap))/ division;
	}

	__proto.loopCheckingCurrent=function(){
		var changed=false;
		if (this._loop==1 && this._overlapSize.x > 0){
			if (this._xPos < 0.001){
				this._xPos+=this.getLoopPartSize(2,"x");
				changed=true;
			}
			else if (this._xPos >=this._overlapSize.x){
				this._xPos-=this.getLoopPartSize(2,"x");
				changed=true;
			}
		}
		else if (this._loop==2 && this._overlapSize.y > 0){
			if (this._yPos < 0.001){
				this._yPos+=this.getLoopPartSize(2,"y");
				changed=true;
			}
			else if (this._yPos >=this._overlapSize.y){
				this._yPos-=this.getLoopPartSize(2,"y");
				changed=true;
			}
		}
		if (changed)
			this._container.pos(Math.floor(-this._xPos),Math.floor(-this._yPos));
		return changed;
	}

	__proto.loopCheckingTarget=function(endPos){
		if (this._loop==1)
			this.loopCheckingTarget2(endPos,"x");
		if (this._loop==2)
			this.loopCheckingTarget2(endPos,"y");
	}

	__proto.loopCheckingTarget2=function(endPos,axis){
		var halfSize=NaN;
		var tmp=NaN;
		if (endPos[axis] > 0){
			halfSize=this.getLoopPartSize(2,axis);
			tmp=this._tweenStart[axis]-halfSize;
			if (tmp <=0 && tmp >=-this._overlapSize[axis]){
				endPos[axis]-=halfSize;
				this._tweenStart[axis]=tmp;
			}
		}
		else if (endPos[axis] <-this._overlapSize[axis]){
			halfSize=this.getLoopPartSize(2,axis);
			tmp=this._tweenStart[axis]+halfSize;
			if (tmp <=0 && tmp >=-this._overlapSize[axis]){
				endPos[axis]+=halfSize;
				this._tweenStart[axis]=tmp;
			}
		}
	}

	__proto.loopCheckingNewPos=function(value,axis){
		if (this._overlapSize[axis]==0)
			return value;
		var pos=axis=="x" ? this._xPos :this._yPos;
		var changed=false;
		var v=NaN;
		if (value < 0.001){
			value+=this.getLoopPartSize(2,axis);
			if (value > pos){
				v=this.getLoopPartSize(6,axis);
				v=Math.ceil((value-pos)/ v)*v;
				pos=ToolSet.clamp(pos+v,0,this._overlapSize[axis]);
				changed=true;
			}
		}
		else if (value >=this._overlapSize[axis]){
			value-=this.getLoopPartSize(2,axis);
			if (value < pos){
				v=this.getLoopPartSize(6,axis);
				v=Math.ceil((pos-value)/ v)*v;
				pos=ToolSet.clamp(pos-v,0,this._overlapSize[axis]);
				changed=true;
			}
		}
		if (changed){
			if (axis=="x")
				this._container.x=-Math.floor(pos);
			else
			this._container.y=-Math.floor(pos);
		}
		return value;
	}

	__proto.alignPosition=function(pos,inertialScrolling){
		if (this._pageMode){
			pos.x=this.alignByPage(pos.x,"x",inertialScrolling);
			pos.y=this.alignByPage(pos.y,"y",inertialScrolling);
		}
		else if (this._snapToItem){
			var pt=this._owner.getSnappingPosition(-pos.x,-pos.y,ScrollPane.sHelperPoint);
			if (pos.x < 0 && pos.x >-this._overlapSize.x)
				pos.x=-pt.x;
			if (pos.y < 0 && pos.y >-this._overlapSize.y)
				pos.y=-pt.y;
		}
	}

	__proto.alignByPage=function(pos,axis,inertialScrolling){
		var page=0;
		if (pos > 0)
			page=0;
		else if (pos <-this._overlapSize[axis])
		page=Math.ceil(this._contentSize[axis] / this._pageSize[axis])-1;
		else{
			page=Math.floor(-pos / this._pageSize[axis]);
			var change=inertialScrolling ? (pos-this._containerPos[axis]):(pos-this._container[axis]);
			var testPageSize=Math.min(this._pageSize[axis],this._contentSize[axis]-(page+1)*this._pageSize[axis]);
			var delta=-pos-page *this._pageSize[axis];
			if (Math.abs(change)> this._pageSize[axis]){
				if (delta > testPageSize *0.5)
					page++;
			}
			else{
				if (delta > testPageSize *(change < 0 ? 0.3 :0.7))
					page++;
			}
			pos=-page *this._pageSize[axis];
			if (pos <-this._overlapSize[axis])
				pos=-this._overlapSize[axis];
		}
		if (inertialScrolling){
			var oldPos=this._tweenStart[axis];
			var oldPage=0;
			if (oldPos > 0)
				oldPage=0;
			else if (oldPos <-this._overlapSize[axis])
			oldPage=Math.ceil(this._contentSize[axis] / this._pageSize[axis])-1;
			else
			oldPage=Math.floor(-oldPos / this._pageSize[axis]);
			var startPage=Math.floor(-this._containerPos[axis] / this._pageSize[axis]);
			if (Math.abs(page-startPage)> 1 && Math.abs(oldPage-startPage)<=1){
				if (page > startPage)
					page=startPage+1;
				else
				page=startPage-1;
				pos=-page *this._pageSize[axis];
			}
		}
		return pos;
	}

	__proto.updateTargetAndDuration=function(orignPos,resultPos){
		resultPos.x=this.updateTargetAndDuration2(orignPos.x,"x");
		resultPos.y=this.updateTargetAndDuration2(orignPos.y,"y");
	}

	__proto.updateTargetAndDuration2=function(pos,axis){
		var v=this._velocity[axis];
		var duration=0;
		if (pos > 0)
			pos=0;
		else if (pos <-this._overlapSize[axis])
		pos=-this._overlapSize[axis];
		else{
			var v2=Math.abs(v)*this._velocityScale;
			if(Browser.onMobile)
				v2 *=1136 / Math.max(Laya.stage.width,Laya.stage.height);
			var ratio=0;
			if (this._pageMode || !Browser.onMobile){
				if (v2 > 500)
					ratio=Math.pow((v2-500)/ 500,2);
			}
			else{
				if (v2 > 1000)
					ratio=Math.pow((v2-1000)/ 1000,2);
			}
			if (ratio !=0){
				if (ratio > 1)
					ratio=1;
				v2 *=ratio;
				v *=ratio;
				this._velocity[axis]=v;
				duration=Math.log(60 / v2)/Math.log(this._decelerationRate)/ 60;
				var change=Math.floor(v *duration *0.4);
				pos+=change;
			}
		}
		if (duration < 0.3)
			duration=0.3;
		this._tweenDuration[axis]=duration;
		return pos;
	}

	__proto.fixDuration=function(axis,oldChange){
		if (this._tweenChange[axis]==0 || Math.abs(this._tweenChange[axis])>=Math.abs(oldChange))
			return;
		var newDuration=Math.abs(this._tweenChange[axis] / oldChange)*this._tweenDuration[axis];
		if (newDuration < 0.3)
			newDuration=0.3;
		this._tweenDuration[axis]=newDuration;
	}

	__proto.killTween=function(){
		if (this._tweening==1){
			this._container.pos(this._tweenStart.x+this._tweenChange.x,this._tweenStart.y+this._tweenChange.y);
			Events.dispatch("fui_scroll",this._owner.displayObject);
		}
		this._tweening=0;
		Laya.timer.clear(this,this.tweenUpdate);
		Events.dispatch("fui_scroll_end",this._owner.displayObject);
	}

	__proto.checkRefreshBar=function(){
		if (this._header==null && this._footer==null)
			return;
		var pos=this._container[this._refreshBarAxis];
		if (this._header !=null){
			if (pos > 0){
				if (this._header.displayObject.parent==null)
					this._maskContainer.addChildAt(this._header.displayObject,0);
				var pt=ScrollPane.sHelperPoint;
				pt.setTo(this._header.width,this._header.height);
				pt[this._refreshBarAxis]=pos;
				this._header.setSize(pt.x,pt.y);
			}
			else{
				if (this._header.displayObject.parent !=null)
					this._maskContainer.removeChild(this._header.displayObject);
			}
		}
		if (this._footer !=null){
			var max=this._overlapSize[this._refreshBarAxis];
			if (pos <-max || max==0 && this._footerLockedSize > 0){
				if (this._footer.displayObject.parent==null)
					this._maskContainer.addChildAt(this._footer.displayObject,0);
				pt=ScrollPane.sHelperPoint;
				pt.setTo(this._footer.x,this._footer.y);
				if (max > 0)
					pt[this._refreshBarAxis]=pos+this._contentSize[this._refreshBarAxis];
				else
				pt[this._refreshBarAxis]=Math.max(Math.min(pos+this._viewSize[this._refreshBarAxis],this._viewSize[this._refreshBarAxis]-this._footerLockedSize),
				this._viewSize[this._refreshBarAxis]-this._contentSize[this._refreshBarAxis]);
				this._footer.setXY(pt.x,pt.y);
				pt.setTo(this._footer.width,this._footer.height);
				if (max > 0)
					pt[this._refreshBarAxis]=-max-pos;
				else
				pt[this._refreshBarAxis]=this._viewSize[this._refreshBarAxis]-this._footer[this._refreshBarAxis];
				this._footer.setSize(pt.x,pt.y);
			}
			else{
				if (this._footer.displayObject.parent !=null)
					this._maskContainer.removeChild(this._footer.displayObject);
			}
		}
	}

	__proto.tweenUpdate=function(){
		var nx=this.runTween("x");
		var ny=this.runTween("y");
		this._container.pos(nx,ny);
		if (this._tweening==2){
			if (this._overlapSize.x > 0)
				this._xPos=ToolSet.clamp(-nx,0,this._overlapSize.x);
			if (this._overlapSize.y > 0)
				this._yPos=ToolSet.clamp(-ny,0,this._overlapSize.y);
			if (this._pageMode)
				this.updatePageController();
		}
		if (this._tweenChange.x==0 && this._tweenChange.y==0){
			this._tweening=0;
			Laya.timer.clear(this,this.tweenUpdate);
			this.loopCheckingCurrent();
			this.syncScrollBar(true);
			this.checkRefreshBar();
			Events.dispatch("fui_scroll",this._owner.displayObject);
			Events.dispatch("fui_scroll_end",this._owner.displayObject);
		}
		else{
			this.syncScrollBar(false);
			this.checkRefreshBar();
			Events.dispatch("fui_scroll",this._owner.displayObject);
		}
	}

	__proto.runTween=function(axis){
		var newValue=NaN;
		if (this._tweenChange[axis] !=0){
			this._tweenTime[axis]+=Laya.timer.delta/1000;
			if (this._tweenTime[axis] >=this._tweenDuration[axis]){
				newValue=this._tweenStart[axis]+this._tweenChange[axis];
				this._tweenChange[axis]=0;
			}
			else{
				var ratio=ScrollPane.easeFunc(this._tweenTime[axis],this._tweenDuration[axis]);
				newValue=this._tweenStart[axis]+Math.floor(this._tweenChange[axis] *ratio);
			};
			var threshold1=0;
			var threshold2=-this._overlapSize[axis];
			if (this._headerLockedSize > 0 && this._refreshBarAxis==axis)
				threshold1=this._headerLockedSize;
			if (this._footerLockedSize > 0 && this._refreshBarAxis==axis){
				var max=this._overlapSize[this._refreshBarAxis];
				if (max==0)
					max=Math.max(this._contentSize[this._refreshBarAxis]+this._footerLockedSize-this._viewSize[this._refreshBarAxis],0);
				else
				max+=this._footerLockedSize;
				threshold2=-max;
			}
			if (this._tweening==2 && this._bouncebackEffect){
				if (newValue > 20+threshold1 && this._tweenChange[axis] > 0
					|| newValue > threshold1 && this._tweenChange[axis]==0){
					this._tweenTime[axis]=0;
					this._tweenDuration[axis]=0.3;
					this._tweenChange[axis]=-newValue+threshold1;
					this._tweenStart[axis]=newValue;
				}
				else if (newValue < threshold2-20 && this._tweenChange[axis] < 0
				|| newValue < threshold2 && this._tweenChange[axis]==0){
					this._tweenTime[axis]=0;
					this._tweenDuration[axis]=0.3;
					this._tweenChange[axis]=threshold2-newValue;
					this._tweenStart[axis]=newValue;
				}
			}
			else{
				if (newValue > threshold1){
					newValue=threshold1;
					this._tweenChange[axis]=0;
				}
				else if (newValue < threshold2){
					newValue=threshold2;
					this._tweenChange[axis]=0;
				}
			}
		}
		else
		newValue=this._container[axis];
		return newValue;
	}

	__getset(0,__proto,'viewWidth',function(){
		return this._viewSize.x;
		},function(value){
		value=value+this._owner.margin.left+this._owner.margin.right;
		if (this._vtScrollBar !=null)
			value+=this._vtScrollBar.width;
		this._owner.width=value;
	});

	__getset(0,__proto,'percY',function(){
		return this._overlapSize.y==0 ? 0 :this._yPos / this._overlapSize.y;
		},function(value){
		this.setPercY(value,false);
	});

	__getset(0,__proto,'owner',function(){
		return this._owner;
	});

	__getset(0,__proto,'bouncebackEffect',function(){
		return this._bouncebackEffect;
		},function(sc){
		this._bouncebackEffect=sc;
	});

	__getset(0,__proto,'vtScrollBar',function(){
		return this._vtScrollBar;
	});

	__getset(0,__proto,'hzScrollBar',function(){
		return this._hzScrollBar;
	});

	__getset(0,__proto,'header',function(){
		return this._header;
	});

	__getset(0,__proto,'footer',function(){
		return this._footer;
	});

	__getset(0,__proto,'isBottomMost',function(){
		return this._yPos==this._overlapSize.y || this._overlapSize.y==0;
	});

	__getset(0,__proto,'touchEffect',function(){
		return this._touchEffect;
		},function(sc){
		this._touchEffect=sc;
	});

	__getset(0,__proto,'contentWidth',function(){
		return this._contentSize.x;
	});

	__getset(0,__proto,'scrollStep',function(){
		return this._scrollStep;
		},function(val){
		this._scrollStep=val;
		if(this._scrollStep==0)
			this._scrollStep=UIConfig$1.defaultScrollStep;
		this._mouseWheelStep=this._scrollStep*2;
	});

	__getset(0,__proto,'viewHeight',function(){
		return this._viewSize.y;
		},function(value){
		value=value+this._owner.margin.top+this._owner.margin.bottom;
		if (this._hzScrollBar !=null)
			value+=this._hzScrollBar.height;
		this._owner.height=value;
	});

	__getset(0,__proto,'posX',function(){
		return this._xPos;
		},function(value){
		this.setPosX(value,false);
	});

	__getset(0,__proto,'snapToItem',function(){
		return this._snapToItem;
		},function(value){
		this._snapToItem=value;
	});

	__getset(0,__proto,'mouseWheelEnabled',function(){
		return this._mouseWheelEnabled;
		},function(value){
		this._mouseWheelEnabled=value;
	});

	__getset(0,__proto,'decelerationRate',function(){
		return this._decelerationRate;
		},function(value){
		this._decelerationRate=value;
	});

	__getset(0,__proto,'percX',function(){
		return this._overlapSize.x==0 ? 0 :this._xPos / this._overlapSize.x;
		},function(value){
		this.setPercX(value,false);
	});

	__getset(0,__proto,'posY',function(){
		return this._yPos;
		},function(value){
		this.setPosY(value,false);
	});

	__getset(0,__proto,'contentHeight',function(){
		return this._contentSize.y;
	});

	__getset(0,__proto,'currentPageX',function(){
		if (!this._pageMode)
			return 0;
		var page=Math.floor(this._xPos / this._pageSize.x);
		if (this._xPos-page *this._pageSize.x > this._pageSize.x *0.5)
			page++;
		return page;
		},function(value){
		if (this._pageMode && this._overlapSize.x>0)
			this.setPosX(value *this._pageSize.x,false);
	});

	__getset(0,__proto,'currentPageY',function(){
		if (!this._pageMode)
			return 0;
		var page=Math.floor(this._yPos / this._pageSize.y);
		if (this._yPos-page *this._pageSize.y > this._pageSize.y *0.5)
			page++;
		return page;
		},function(value){
		if (this._pageMode && this._overlapSize.y>0)
			this.setPosY(value *this._pageSize.y,false);
	});

	__getset(0,__proto,'isRightMost',function(){
		return this._xPos==this._overlapSize.x || this._overlapSize.x==0;
	});

	__getset(0,__proto,'pageController',function(){
		return this._pageController;
		},function(value){
		this._pageController=value;
	});

	__getset(0,__proto,'scrollingPosX',function(){
		return ToolSet.clamp(-this._container.x,0,this._overlapSize.x);
	});

	__getset(0,__proto,'scrollingPosY',function(){
		return ToolSet.clamp(-this._container.y,0,this._overlapSize.y);
	});

	ScrollPane.easeFunc=function(t,d){
		return (t=t / d-1)*t *t+1;
	}

	ScrollPane.draggingPane=null;
	ScrollPane._gestureFlag=0;
	ScrollPane.TWEEN_TIME_GO=0.5;
	ScrollPane.TWEEN_TIME_DEFAULT=0.3;
	ScrollPane.PULL_RATIO=0.5;
	__static(ScrollPane,
	['sHelperPoint',function(){return this.sHelperPoint=new Point();},'sHelperRect',function(){return this.sHelperRect=new Rectangle();},'sEndPos',function(){return this.sEndPos=new Point();},'sOldChange',function(){return this.sOldChange=new Point();}
	]);
	return ScrollPane;
})()


//class fairygui.ScrollType
var ScrollType=(function(){
	function ScrollType(){}
	__class(ScrollType,'fairygui.ScrollType');
	ScrollType.parse=function(value){
		switch (value){
			case "horizontal":
				return 0;
			case "vertical":
				return 1;
			case "both":
				return 2;
			default :
				return 1;
			}
	}

	ScrollType.Horizontal=0;
	ScrollType.Vertical=1;
	ScrollType.Both=2;
	return ScrollType;
})()


//class fairygui.Transition
var Transition=(function(){
	var TransitionActionType,TransitionItem,TransitionValue;
	function Transition(owner){
		this.name=null;
		this.autoPlayRepeat=1;
		this.autoPlayDelay=0;
		this._owner=null;
		this._ownerBaseX=0;
		this._ownerBaseY=0;
		this._items=null;
		this._totalTimes=0;
		this._totalTasks=0;
		this._playing=false;
		this._onComplete=null;
		this._options=0;
		this._reversed=false;
		this._maxTime=0;
		this._autoPlay=false;
		this.OPTION_IGNORE_DISPLAY_CONTROLLER=1;
		this.OPTION_AUTO_STOP_DISABLED=2;
		this.OPTION_AUTO_STOP_AT_END=4;
		this.FRAME_RATE=24;
		this._owner=owner;
		this._items=[];
	}

	__class(Transition,'fairygui.Transition');
	var __proto=Transition.prototype;
	__proto.play=function(onComplete,times,delay){
		(times===void 0)&& (times=1);
		(delay===void 0)&& (delay=0);
		this._play(onComplete,times,delay,false);
	}

	__proto.playReverse=function(onComplete,times,delay){
		(times===void 0)&& (times=1);
		(delay===void 0)&& (delay=0);
		this._play(onComplete,times,delay,true);
	}

	__proto.changeRepeat=function(value){
		this._totalTimes=value;
	}

	__proto._play=function(onComplete,times,delay,reversed){
		(times===void 0)&& (times=1);
		(delay===void 0)&& (delay=0);
		(reversed===void 0)&& (reversed=false);
		this.stop();
		this._totalTimes=times;
		this._reversed=reversed;
		this.internalPlay(delay);
		this._playing=this._totalTasks > 0;
		if(this._playing){
			this._onComplete=onComplete;
			if((this._options & this.OPTION_IGNORE_DISPLAY_CONTROLLER)!=0){
				var cnt=this._items.length;
				for(var i=0;i < cnt;i++){
					var item=this._items[i];
					if(item.target !=null && item.target !=this._owner)
						item.displayLockToken=item.target.addDisplayLock();
				}
			}
		}
		else if(onComplete !=null){
			onComplete.run();
		}
	}

	__proto.stop=function(setToComplete,processCallback){
		(setToComplete===void 0)&& (setToComplete=true);
		(processCallback===void 0)&& (processCallback=false);
		if(this._playing){
			this._playing=false;
			this._totalTasks=0;
			this._totalTimes=0;
			var handler=this._onComplete;
			this._onComplete=null;
			var cnt=this._items.length;
			var i=NaN;
			var item;
			if(this._reversed){
				for(i=cnt-1;i>=0;i--){
					item=this._items[i];
					if(item.target==null)
						continue ;
					this.stopItem(item,setToComplete);
				}
			}
			else {
				for(i=0;i < cnt;i++){
					item=this._items[i];
					if(item.target==null)
						continue ;
					this.stopItem(item,setToComplete);
				}
			}
			if(processCallback && handler !=null){
				handler.run();
			}
		}
	}

	__proto.stopItem=function(item,setToComplete){
		if (item.displayLockToken!=0){
			item.target.releaseDisplayLock(item.displayLockToken);
			item.displayLockToken=0;
		}
		if (item.type==12 && item.filterCreated)
			item.target.filters=null;
		if(item.completed)
			return;
		if(item.tweener !=null){
			item.tweener.clear();
			item.tweener=null;
		}
		if(item.type==10){
			var trans=(item.target).getTransition(item.value.s);
			if(trans !=null)
				trans.stop(setToComplete,false);
		}
		else if(item.type==11){
			Laya.timer.clear(item,item.__shake);
			item.target._gearLocked=true;
			item.target.setXY(item.target.x-item.startValue.f1,item.target.y-item.startValue.f2);
			item.target._gearLocked=false;
		}
		else {
			if(setToComplete){
				if(item.tween){
					if(!item.yoyo || item.repeat % 2==0)
						this.applyValue(item,this._reversed?item.startValue:item.endValue);
					else
					this.applyValue(item,this._reversed?item.endValue:item.startValue);
				}
				else if(item.type !=9)
				this.applyValue(item,item.value);
			}
		}
	}

	__proto.dispose=function(){
		if (!this._playing)
			return;
		this._playing=false;
		var cnt=this._items.length;
		for (var i=0;i < cnt;i++){
			var item=this._items[i];
			if (item.target==null || item.completed)
				continue ;
			if (item.tweener !=null){
				item.tweener.clear();
				item.tweener=null;
			}
			if (item.type==10){
				var trans=(item.target).getTransition(item.value.s);
				if (trans !=null)
					trans.dispose();
			}
			else if (item.type==11){
				Laya.timer.clear(item,item.__shake);
			}
		}
	}

	__proto.setValue=function(label,__args){
		var args=[];for(var i=1,sz=arguments.length;i<sz;i++)args.push(arguments[i]);
		var cnt=this._items.length;
		var value;
		for(var i=0;i < cnt;i++){
			var item=this._items[i];
			if(item.label==null && item.label2==null)
				continue ;
			if(item.label==label){
				if(item.tween)
					value=item.startValue;
				else
				value=item.value;
			}
			else if(item.label2==label){
				value=item.endValue;
			}
			else
			continue ;
			switch(item.type){
				case 0:
				case 1:
				case 3:
				case 2:
				case 13:
					value.b1=true;
					value.b2=true;
					value.f1=parseFloat(args[0]);
					value.f2=parseFloat(args[1]);
					break ;
				case 4:
					value.f1=parseFloat(args[0]);
					break ;
				case 5:
					value.i=parseInt(args[0]);
					break ;
				case 6:
					value.s=args[0];
					break ;
				case 7:
					value.i=parseInt(args[0]);
					if(args.length > 1)
						value.b=args[1];
					break ;
				case 8:
					value.b=args[0];
					break ;
				case 9:
					value.s=args[0];
					if(args.length > 1)
						value.f1=parseFloat(args[1]);
					break ;
				case 10:
					value.s=args[0];
					if(args.length > 1)
						value.i=parseInt(args[1]);
					break ;
				case 11:
					value.f1=parseFloat(args[0]);
					if(args.length > 1)
						value.f2=parseFloat(args[1]);
					break ;
				case 12:
					value.f1=parseFloat(args[0]);
					value.f2=parseFloat(args[1]);
					value.f3=parseFloat(args[2]);
					value.f4=parseFloat(args[3]);
					break ;
				}
		}
	}

	__proto.setHook=function(label,callback){
		var cnt=this._items.length;
		for(var i=0;i < cnt;i++){
			var item=this._items[i];
			if(item.label==label){
				item.hook=callback;
				break ;
			}
			else if(item.label2==label){
				item.hook2=callback;
				break ;
			}
		}
	}

	__proto.clearHooks=function(){
		var cnt=this._items.length;
		for(var i=0;i < cnt;i++){
			var item=this._items[i];
			item.hook=null;
			item.hook2=null;
		}
	}

	__proto.setTarget=function(label,newTarget){
		var cnt=this._items.length;
		for (var i=0;i < cnt;i++){
			var item=this._items[i];
			if (item.label==label)
				item.targetId=newTarget.id;
		}
	}

	__proto.setDuration=function(label,value){
		var cnt=this._items.length;
		for (var i=0;i < cnt;i++){
			var item=this._items[i];
			if (item.tween && item.label==label)
				item.duration=value;
		}
	}

	__proto.updateFromRelations=function(targetId,dx,dy){
		var cnt=this._items.length;
		if(cnt==0)
			return;
		for(var i=0;i < cnt;i++){
			var item=this._items[i];
			if(item.type==0 && item.targetId==targetId){
				if(item.tween){
					item.startValue.f1+=dx;
					item.startValue.f2+=dy;
					item.endValue.f1+=dx;
					item.endValue.f2+=dy;
				}
				else {
					item.value.f1+=dx;
					item.value.f2+=dy;
				}
			}
		}
	}

	__proto.OnOwnerRemovedFromStage=function(){
		if ((this._options & this.OPTION_AUTO_STOP_DISABLED)==0)
			this.stop((this._options & this.OPTION_AUTO_STOP_AT_END)!=0 ? true :false,false);
	}

	__proto.internalPlay=function(delay){
		(delay===void 0)&& (delay=0);
		this._ownerBaseX=this._owner.x;
		this._ownerBaseY=this._owner.y;
		this._totalTasks=0;
		var cnt=this._items.length;
		var startTime=NaN;
		var item;
		for(var i=0;i < cnt;i++){
			item=this._items[i];
			if(item.targetId)
				item.target=this._owner.getChildById(item.targetId);
			else
			item.target=this._owner;
			if(item.target==null)
				continue ;
			if(item.tween){
				if(this._reversed)
					startTime=delay+this._maxTime-item.time-item.duration;
				else
				startTime=delay+item.time;
				if(startTime>0){
					this._totalTasks++;
					item.completed=false;
					item.tweener=Tween.to(item.value,{},startTime*1000,null,Handler.create(this,this.__delayCall,[item]));
					item.tweener.update=null;
				}
				else
				this.startTween(item);
			}
			else {
				if(this._reversed)
					startTime=delay+this._maxTime-item.time;
				else
				startTime=delay+item.time;
				if(startTime==0)
					this.applyValue(item,item.value);
				else {
					item.completed=false;
					this._totalTasks++;
					item.tweener=Tween.to(item.value,{},startTime*1000,null,Handler.create(this,this.__delayCall2,[item]));
					item.tweener.update=null;
				}
			}
		}
	}

	__proto.prepareValue=function(item,toProps,reversed){
		(reversed===void 0)&& (reversed=false);
		var startValue;
		var endValue;
		if(reversed){
			startValue=item.endValue;
			endValue=item.startValue;
		}
		else{
			startValue=item.startValue;
			endValue=item.endValue;
		}
		switch(item.type){
			case 0:
			case 1:
				if(item.type==0){
					if (item.target==this._owner){
						if(!startValue.b1)
							startValue.f1=0;
						if(!startValue.b2)
							startValue.f2=0;
					}
					else{
						if(!startValue.b1)
							startValue.f1=item.target.x;
						if(!startValue.b2)
							startValue.f2=item.target.y;
					}
				}
				else{
					if(!startValue.b1)
						startValue.f1=item.target.width;
					if(!startValue.b2)
						startValue.f2=item.target.height;
				}
				item.value.f1=startValue.f1;
				item.value.f2=startValue.f2;
				if(!endValue.b1)
					endValue.f1=item.value.f1;
				if(!endValue.b2)
					endValue.f2=item.value.f2;
				item.value.b1=startValue.b1 || endValue.b1;
				item.value.b2=startValue.b2 || endValue.b2;
				toProps.f1=endValue.f1;
				toProps.f2=endValue.f2;
				break ;
			case 2:
			case 13:
				item.value.f1=startValue.f1;
				item.value.f2=startValue.f2;
				toProps.f1=endValue.f1;
				toProps.f2=endValue.f2;
				break ;
			case 4:
				item.value.f1=startValue.f1;
				toProps.f1=endValue.f1;
				break ;
			case 5:
				item.value.i=startValue.i;
				toProps.i=endValue.i;
				break ;
			case 12:
				item.value.f1=startValue.f1;
				item.value.f2=startValue.f2;
				item.value.f3=startValue.f3;
				item.value.f4=startValue.f4;
				toProps.f1=endValue.f1;
				toProps.f2=endValue.f2;
				toProps.f3=endValue.f3;
				toProps.f4=endValue.f4;
				break ;
			}
		toProps.dummy=0;
	}

	__proto.startTween=function(item){
		var toProps={};
		this.prepareValue(item,toProps,this._reversed);
		this.applyValue(item,item.value);
		var completeHandler;
		if(item.repeat!=0){
			item.tweenTimes=0;
			completeHandler=Handler.create(this,this.__tweenRepeatComplete,[item]);
		}
		else
		completeHandler=Handler.create(this,this.__tweenComplete,[item]);
		this._totalTasks++;
		item.completed=false;
		item.tweener=Tween.to(item.value,
		toProps,
		item.duration*1000,
		item.easeType,
		completeHandler);
		item.tweener.update=Handler.create(this,this.__tweenUpdate,[item],false);
		if(item.hook !=null)
			item.hook.run();
	}

	__proto.__delayCall=function(item){
		item.tweener=null;
		this._totalTasks--;
		this.startTween(item);
	}

	__proto.__delayCall2=function(item){
		item.tweener=null;
		this._totalTasks--;
		item.completed=true;
		this.applyValue(item,item.value);
		if(item.hook !=null)
			item.hook.run();
		this.checkAllComplete();
	}

	__proto.__tweenUpdate=function(item){
		this.applyValue(item,item.value);
	}

	__proto.__tweenComplete=function(item){
		item.tweener=null;
		this._totalTasks--;
		item.completed=true;
		if(item.hook2 !=null)
			item.hook2.run();
		this.checkAllComplete();
	}

	__proto.__tweenRepeatComplete=function(item){
		item.tweenTimes++;
		if(item.repeat==-1 || item.tweenTimes < item.repeat+1){
			var toProps={};
			var reversed=false;
			if(item.yoyo){
				if(this._reversed)
					reversed=item.tweenTimes % 2==0;
				else
				reversed=item.tweenTimes % 2==1;
			}
			else
			reversed=this._reversed;
			this.prepareValue(item,toProps,reversed);
			item.tweener=Tween.to(item.value,
			toProps,
			item.duration *1000,
			item.easeType,
			Handler.create(this,this.__tweenRepeatComplete,[item]));
			item.tweener.update=Handler.create(this,this.__tweenUpdate,[item],false);
		}
		else
		this.__tweenComplete(item);
	}

	__proto.__playTransComplete=function(item){
		this._totalTasks--;
		item.completed=true;
		this.checkAllComplete();
	}

	__proto.checkAllComplete=function(){
		if(this._playing && this._totalTasks==0){
			if(this._totalTimes < 0){
				Laya.timer.callLater(this,this.internalPlay);
			}
			else {
				this._totalTimes--;
				if(this._totalTimes > 0)
					Laya.timer.callLater(this,this.internalPlay);
				else {
					this._playing=false;
					var cnt=this._items.length;
					for (var i=0;i < cnt;i++){
						var item=this._items[i];
						if (item.target !=null){
							if (item.displayLockToken!=0){
								item.target.releaseDisplayLock(item.displayLockToken);
								item.displayLockToken=0;
							}
							if (item.filterCreated){
								item.filterCreated=false;
								item.target.filters=null;
							}
						}
					}
					if(this._onComplete !=null){
						var handler=this._onComplete;
						this._onComplete=null;
						handler.run();
					}
				}
			}
		}
	}

	__proto.applyValue=function(item,value){
		item.target._gearLocked=true;
		switch(item.type){
			case 0:
				if(item.target==this._owner){
					var f1=0,f2=0;
					if(!value.b1)
						f1=item.target.x;
					else
					f1=value.f1+this._ownerBaseX;
					if(!value.b2)
						f2=item.target.y;
					else
					f2=value.f2+this._ownerBaseY;
					item.target.setXY(f1,f2);
				}
				else {
					if(!value.b1)
						value.f1=item.target.x;
					if(!value.b2)
						value.f2=item.target.y;
					item.target.setXY(value.f1,value.f2);
				}
				break ;
			case 1:
				if(!value.b1)
					value.f1=item.target.width;
				if(!value.b2)
					value.f2=item.target.height;
				item.target.setSize(value.f1,value.f2);
				break ;
			case 3:
				item.target.setPivot(value.f1,value.f2);
				break ;
			case 4:
				item.target.alpha=value.f1;
				break ;
			case 5:
				item.target.rotation=value.i;
				break ;
			case 2:
				item.target.setScale(value.f1,value.f2);
				break ;
			case 13:
				item.target.setSkew(value.f1,value.f2);
				break ;
			case 6:
				(item.target).color=value.s;
				break ;
			case 7:
				if(!value.b1)
					value.i=(item.target).frame;
				(item.target).frame=value.i;
				(item.target).playing=value.b;
				break ;
			case 8:
				item.target.visible=value.b;
				break ;
			case 10:;
				var trans=(item.target).getTransition(value.s);
				if(trans !=null){
					if(value.i==0)
						trans.stop(false,true);
					else if(trans.playing)
					trans._totalTimes=value.i;
					else {
						item.completed=false;
						this._totalTasks++;
						if(this._reversed)
							trans.playReverse(Handler.create(this,this.__playTransComplete,[item]),item.value.i);
						else
						trans.play(Handler.create(this,this.__playTransComplete,[item]),item.value.i);
					}
				}
				break ;
			case 9:;
				var pi=UIPackage.getItemByURL(value.s);
				if(pi)
					GRoot.inst.playOneShotSound(pi.owner.getItemAssetURL(pi));
				else
				GRoot.inst.playOneShotSound(value.s);
				break ;
			case 11:
				item.startValue.f1=0;
				item.startValue.f2=0;
				item.startValue.f3=item.value.f2;
				item.startValue.i=Laya.timer.currTimer;
				Laya.timer.frameLoop(1,item,item.__shake,[this]);
				this._totalTasks++;
				item.completed=false;
				break ;
			case 12:;
				var arr=item.target.filters;
				if(!arr || !(((arr[0])instanceof laya.filters.ColorFilter )))
					item.filterCreated=true;
				var cm=new ColorMatrix();
				cm.adjustBrightness(value.f1);
				cm.adjustContrast(value.f2);
				cm.adjustSaturation(value.f3);
				cm.adjustHue(value.f4);
				arr=[new ColorFilter(cm)];
				item.target.filters=arr;
				break ;
			}
		item.target._gearLocked=false;
	}

	__proto.__shakeItem=function(item){
		var r=Math.ceil(item.value.f1 *item.startValue.f3 / item.value.f2);
		var rx=(Math.random()*2-1)*r;
		var ry=(Math.random()*2-1)*r;
		rx=rx > 0 ? Math.ceil(rx):Math.floor(rx);
		ry=ry > 0 ? Math.ceil(ry):Math.floor(ry);
		item.target._gearLocked=true;
		item.target.setXY(item.target.x-item.startValue.f1+rx,item.target.y-item.startValue.f2+ry);
		item.target._gearLocked=false;
		item.startValue.f1=rx;
		item.startValue.f2=ry;
		var t=Laya.timer.currTimer;
		item.startValue.f3-=(t-item.startValue.i)/ 1000;
		item.startValue.i=t;
		if(item.startValue.f3 <=0){
			item.target._gearLocked=true;
			item.target.setXY(item.target.x-item.startValue.f1,item.target.y-item.startValue.f2);
			item.target._gearLocked=false;
			item.completed=true;
			this._totalTasks--;
			Laya.timer.clear(item,item.__shake);
			this.checkAllComplete();
		}
	}

	__proto.setup=function(xml){
		this.name=xml.getAttribute("name");
		var str=xml.getAttribute("options");
		if(str)
			this._options=parseInt(str);
		str=xml.getAttribute("autoPlay");
		if(str)
			this._autoPlay=str=="true";
		if(this._autoPlay){
			str=xml.getAttribute("autoPlayRepeat");
			if(str)
				this.autoPlayRepeat=parseInt(str);
			str=xml.getAttribute("autoPlayDelay");
			if(str)
				this.autoPlayDelay=parseFloat(str);
		};
		var col=xml.childNodes;
		var length1=col.length;
		for(var i1=0;i1 < length1;i1++){
			var cxml=col[i1];
			if(cxml.nodeName!="item")
				continue ;
			var item=new TransitionItem();
			this._items.push(item);
			item.time=parseInt(cxml.getAttribute("time"))/ this.FRAME_RATE;
			item.targetId=cxml.getAttribute("target");
			str=cxml.getAttribute("type");
			switch(str){
				case "XY":
					item.type=0;
					break ;
				case "Size":
					item.type=1;
					break ;
				case "Scale":
					item.type=2;
					break ;
				case "Pivot":
					item.type=3;
					break ;
				case "Alpha":
					item.type=4;
					break ;
				case "Rotation":
					item.type=5;
					break ;
				case "Color":
					item.type=6;
					break ;
				case "Animation":
					item.type=7;
					break ;
				case "Visible":
					item.type=8;
					break ;
				case "Sound":
					item.type=9;
					break ;
				case "Transition":
					item.type=10;
					break ;
				case "Shake":
					item.type=11;
					break ;
				case "ColorFilter":
					item.type=12;
					break ;
				case "Skew":
					item.type=13;
					break ;
				default :
					item.type=14;
					break ;
				}
			item.tween=cxml.getAttribute("tween")=="true";
			item.label=cxml.getAttribute("label");
			if(item.tween){
				item.duration=parseInt(cxml.getAttribute("duration"))/ this.FRAME_RATE;
				if(item.time+item.duration > this._maxTime)
					this._maxTime=item.time+item.duration;
				str=cxml.getAttribute("ease");
				if(str)
					item.easeType=ToolSet.parseEaseType(str);
				str=cxml.getAttribute("repeat");
				if(str)
					item.repeat=parseInt(str);
				item.yoyo=cxml.getAttribute("yoyo")=="true";
				item.label2=cxml.getAttribute("label2");
				var v=cxml.getAttribute("endValue");
				if(v){
					this.decodeValue(item.type,cxml.getAttribute("startValue"),item.startValue);
					this.decodeValue(item.type,v,item.endValue);
				}
				else {
					item.tween=false;
					this.decodeValue(item.type,cxml.getAttribute("startValue"),item.value);
				}
			}
			else {
				if(item.time > this._maxTime)
					this._maxTime=item.time;
				this.decodeValue(item.type,cxml.getAttribute("value"),item.value);
			}
		}
	}

	__proto.decodeValue=function(type,str,value){
		var arr;
		switch(type){
			case 0:
			case 1:
			case 3:
			case 13:
				arr=str.split(",");
				if(arr[0]=="-"){
					value.b1=false;
				}
				else {
					value.f1=parseFloat(arr[0]);
					value.b1=true;
				}
				if(arr[1]=="-"){
					value.b2=false;
				}
				else {
					value.f2=parseFloat(arr[1]);
					value.b2=true;
				}
				break ;
			case 4:
				value.f1=parseFloat(str);
				break ;
			case 5:
				value.i=parseInt(str);
				break ;
			case 2:
				arr=str.split(",");
				value.f1=parseFloat(arr[0]);
				value.f2=parseFloat(arr[1]);
				break ;
			case 6:
				value.s=str;
				break ;
			case 7:
				arr=str.split(",");
				if(arr[0]=="-"){
					value.b1=false;
				}
				else {
					value.i=parseInt(arr[0]);
					value.b1=true;
				}
				value.b=arr[1]=="p";
				break ;
			case 8:
				value.b=str=="true";
				break ;
			case 9:
				arr=str.split(",");
				value.s=arr[0];
				if(arr.length > 1){
					var intv=parseInt(arr[1]);
					if(intv==0 || intv==100)
						value.f1=1;
					else
					value.f1=intv / 100;
				}
				else
				value.f1=1;
				break ;
			case 10:
				arr=str.split(",");
				value.s=arr[0];
				if(arr.length > 1)
					value.i=parseInt(arr[1]);
				else
				value.i=1;
				break ;
			case 11:
				arr=str.split(",");
				value.f1=parseFloat(arr[0]);
				value.f2=parseFloat(arr[1]);
				break ;
			case 12:
				arr=str.split(",");
				value.f1=parseFloat(arr[0]);
				value.f2=parseFloat(arr[1]);
				value.f3=parseFloat(arr[2]);
				value.f4=parseFloat(arr[3]);
				break ;
			}
	}

	__getset(0,__proto,'autoPlay',function(){
		return this._autoPlay;
		},function(value){
		if (this._autoPlay !=value){
			this._autoPlay=value;
			if (this._autoPlay){
				if (this._owner.onStage)
					this.play(null,this.autoPlayRepeat,this.autoPlayDelay);
			}
			else{
				if (!this._owner.onStage)
					this.stop(false,true);
			}
		}
	});

	__getset(0,__proto,'playing',function(){
		return this._playing;
	});

	Transition.__init$=function(){
		//class TransitionActionType
		TransitionActionType=(function(){
			function TransitionActionType(){}
			__class(TransitionActionType,'');
			TransitionActionType.XY=0;
			TransitionActionType.Size=1;
			TransitionActionType.Scale=2;
			TransitionActionType.Pivot=3;
			TransitionActionType.Alpha=4;
			TransitionActionType.Rotation=5;
			TransitionActionType.Color=6;
			TransitionActionType.Animation=7;
			TransitionActionType.Visible=8;
			TransitionActionType.Sound=9;
			TransitionActionType.Transition=10;
			TransitionActionType.Shake=11;
			TransitionActionType.ColorFilter=12;
			TransitionActionType.Skew=13;
			TransitionActionType.Unknown=14;
			return TransitionActionType;
		})()
		//class TransitionItem
		TransitionItem=(function(){
			function TransitionItem(){
				this.time=0;
				this.targetId=null;
				this.type=0;
				this.duration=0;
				this.value=null;
				this.startValue=null;
				this.endValue=null;
				this.easeType=null;
				this.repeat=0;
				this.yoyo=false;
				this.tween=false;
				this.label=null;
				this.label2=null;
				this.hook=null;
				this.hook2=null;
				this.tweenTimes=0;
				this.tweener=null;
				this.completed=false;
				this.target=null;
				this.filterCreated=false;
				this.displayLockToken=0;
				this.easeType=Ease.quadOut;
				this.value=new TransitionValue();
				this.startValue=new TransitionValue();
				this.endValue=new TransitionValue();
			}
			__class(TransitionItem,'');
			var __proto=TransitionItem.prototype;
			__proto.__shake=function(trans){
				trans.__shakeItem(this);
			}
			return TransitionItem;
		})()
		//class TransitionValue
		TransitionValue=(function(){
			function TransitionValue(){
				this.f1=0;
				this.f2=0;
				this.f3=0;
				this.f4=NaN;
				this.i=0;
				this.b=false;
				this.s=null;
				this.b1=true;
				this.b2=true;
			}
			__class(TransitionValue,'');
			return TransitionValue;
		})()
	}

	return Transition;
})()


//class fairygui.tree.TreeNode
var TreeNode=(function(){
	function TreeNode(hasChild){
		this._data=null;
		this._parent=null;
		this._children=null;
		this._expanded=false;
		this._tree=null;
		this._cell=null;
		this._level=0;
		if(hasChild)
			this._children=[];
	}

	__class(TreeNode,'fairygui.tree.TreeNode');
	var __proto=TreeNode.prototype;
	__proto.setCell=function(value){
		this._cell=value;
	}

	__proto.setLevel=function(value){
		this._level=value;
	}

	__proto.addChild=function(child){
		this.addChildAt(child,this._children.length);
		return child;
	}

	__proto.addChildAt=function(child,index){
		if(!child)
			throw new Error("child is null");
		var numChildren=this._children.length;
		if (index >=0 && index <=numChildren){
			if (child._parent==this){
				this.setChildIndex(child,index);
			}
			else{
				if(child._parent)
					child._parent.removeChild(child);
				var cnt=this._children.length;
				if (index==cnt)
					this._children.push(child);
				else
				this._children.splice(index,0,child);
				child._parent=this;
				child._level=this._level+1;
				child.setTree(this._tree);
				if(this._cell!=null && this._cell.parent!=null && this._expanded)
					this._tree.afterInserted(child);
			}
			return child;
		}
		else{
			throw new Error("Invalid child index");
		}
	}

	__proto.removeChild=function(child){
		var childIndex=this._children.indexOf(child);
		if (childIndex !=-1){
			this.removeChildAt(childIndex);
		}
		return child;
	}

	__proto.removeChildAt=function(index){
		if (index >=0 && index < this.numChildren){
			var child=this._children[index];
			this._children.splice(index,1);
			child._parent=null;
			if(this._tree!=null){
				child.setTree(null);
				this._tree.afterRemoved(child);
			}
			return child;
		}
		else{
			throw new Error("Invalid child index");
		}
	}

	__proto.removeChildren=function(beginIndex,endIndex){
		(beginIndex===void 0)&& (beginIndex=0);
		(endIndex===void 0)&& (endIndex=-1);
		if (endIndex < 0 || endIndex >=this.numChildren)
			endIndex=this.numChildren-1;
		for (var i=beginIndex;i<=endIndex;++i)
		this.removeChildAt(beginIndex);
	}

	__proto.getChildAt=function(index){
		if (index >=0 && index < this.numChildren)
			return this._children[index];
		else
		throw new Error("Invalid child index");
	}

	__proto.getChildIndex=function(child){
		return this._children.indexOf(child);
	}

	__proto.getPrevSibling=function(){
		if(this._parent==null)
			return null;
		var i=this._parent._children.indexOf(this);
		if(i<=0)
			return null;
		return this._parent._children[i-1];
	}

	__proto.getNextSibling=function(){
		if(this._parent==null)
			return null;
		var i=this._parent._children.indexOf(this);
		if(i<0 || i>=this._parent._children.length-1)
			return null;
		return this._parent._children[i+1];
	}

	__proto.setChildIndex=function(child,index){
		var oldIndex=this._children.indexOf(child);
		if (oldIndex==-1)
			throw new Error("Not a child of this container");
		var cnt=this._children.length;
		if(index<0)
			index=0;
		else if(index>cnt)
		index=cnt;
		if(oldIndex==index)
			return;
		this._children.splice(oldIndex,1);
		this._children.splice(index,0,child);
		if(this._cell!=null && this._cell.parent!=null && this._expanded)
			this._tree.afterMoved(child);
	}

	__proto.swapChildren=function(child1,child2){
		var index1=this._children.indexOf(child1);
		var index2=this._children.indexOf(child2);
		if (index1==-1 || index2==-1)
			throw new Error("Not a child of this container");
		this.swapChildrenAt(index1,index2);
	}

	__proto.swapChildrenAt=function(index1,index2){
		var child1=this._children[index1];
		var child2=this._children[index2];
		this.setChildIndex(child1,index2);
		this.setChildIndex(child2,index1);
	}

	__proto.setTree=function(value){
		this._tree=value;
		if(this._tree!=null && this._tree.treeNodeWillExpand && this._expanded)
			this._tree.treeNodeWillExpand.runWith(this);
		if(this._children!=null){
			var cnt=this._children.length;
			for(var i=0;i<cnt;i++){
				var node=this._children[i];
				node._level=this._level+1;
				node.setTree(value);
			}
		}
	}

	__getset(0,__proto,'expanded',function(){
		return this._expanded;
		},function(value){
		if(this._children==null)
			return;
		if(this._expanded!=value){
			this._expanded=value;
			if(this._tree!=null){
				if(this._expanded)
					this._tree.afterExpanded(this);
				else
				this._tree.afterCollapsed(this);
			}
		}
	});

	__getset(0,__proto,'tree',function(){
		return this._tree;
	});

	__getset(0,__proto,'level',function(){
		return this._level;
	});

	__getset(0,__proto,'cell',function(){
		return this._cell;
	});

	__getset(0,__proto,'data',function(){
		return this._data;
		},function(value){
		this._data=value;
	});

	__getset(0,__proto,'parent',function(){
		return this._parent;
	});

	__getset(0,__proto,'isFolder',function(){
		return this._children!=null;
	});

	__getset(0,__proto,'text',function(){
		if(this._cell!=null)
			return this._cell.text;
		else
		return null;
	});

	__getset(0,__proto,'numChildren',function(){
		return this._children.length;
	});

	return TreeNode;
})()


//class fairygui.tree.TreeView
var TreeView=(function(){
	function TreeView(list){
		this._list=null;
		this._root=null;
		this._indent=0;
		/**
		*当需要为节点创建一个显示对象时调用这个Handler。参数为节点对象（TreeNode）。应该返回一个GObject。
		*/
		this.treeNodeCreateCell=null;
		/**
		*当节点需要渲染时调用这个Handler。参数为节点对象（TreeNode）。
		*/
		this.treeNodeRender=null;
		/**
		*当目录节点展开或者收缩时调用这个Handler。参数为节点对象（TreeNode）。可以用节点的expanded属性判断目标状态。
		*/
		this.treeNodeWillExpand=null;
		/**
		*当节点被点击时调用这个Handler。参数有两个，第一个为节点对象（TreeNode），第二个为事件对象(Event)。
		*/
		this.treeNodeClick=null;
		this._list=list;
		this._list.removeChildrenToPool();
		this._list.on("fui_click_item",this,this.__clickItem);
		this._root=new TreeNode(true);
		this._root.setTree(this);
		this._root.setCell(this._list);
		this._root.expanded=true;
		this._indent=15;
	}

	__class(TreeView,'fairygui.tree.TreeView');
	var __proto=TreeView.prototype;
	__proto.getSelectedNode=function(){
		if(this._list.selectedIndex!=-1)
			return (this._list.getChildAt(this._list.selectedIndex).data);
		else
		return null;
	}

	__proto.getSelection=function(){
		var sels=this._list.getSelection();
		var cnt=sels.length;
		var ret=[];
		for(var i=0;i<cnt;i++){
			var node=(this._list.getChildAt(sels[i]).data);
			ret.push(node);
		}
		return ret;
	}

	__proto.addSelection=function(node,scrollItToView){
		(scrollItToView===void 0)&& (scrollItToView=false);
		var parentNode=node.parent;
		while(parentNode!=null && parentNode!=this._root){
			parentNode.expanded=true;
			parentNode=parentNode.parent;
		}
		if(!node.cell)
			return;
		this._list.addSelection(this._list.getChildIndex(node.cell),scrollItToView);
	}

	__proto.removeSelection=function(node){
		if(!node.cell)
			return;
		this._list.removeSelection(this._list.getChildIndex(node.cell));
	}

	__proto.clearSelection=function(){
		this._list.clearSelection();
	}

	__proto.getNodeIndex=function(node){
		return this._list.getChildIndex(node.cell);
	}

	__proto.updateNode=function(node){
		if(node.cell==null)
			return;
		if(this.treeNodeRender)
			this.treeNodeRender.runWith(node);
	}

	__proto.updateNodes=function(nodes){
		var cnt=nodes.length;
		for(var i=0;i<cnt;i++){
			var node=nodes[i];
			if(node.cell==null)
				return;
			if(this.treeNodeRender)
				this.treeNodeRender.runWith(node);
		}
	}

	__proto.expandAll=function(folderNode){
		folderNode.expanded=true;
		var cnt=folderNode.numChildren;
		for(var i=0;i<cnt;i++){
			var node=folderNode.getChildAt(i);
			if(node.isFolder)
				this.expandAll(node);
		}
	}

	__proto.collapseAll=function(folderNode){
		if(folderNode!=this._root)
			folderNode.expanded=false;
		var cnt=folderNode.numChildren;
		for(var i=0;i<cnt;i++){
			var node=folderNode.getChildAt(i);
			if(node.isFolder)
				this.collapseAll(node);
		}
	}

	__proto.createCell=function(node){
		if(this.treeNodeCreateCell)
			node.setCell(this.treeNodeCreateCell.runWith(node));
		else
		node.setCell((this._list.itemPool.getObject(this._list.defaultItem)));
		node.cell.data=node;
		var indentObj=node.cell.getChild("indent");
		if(indentObj!=null)
			indentObj.width=(node.level-1)*this._indent;
		var expandButton=(node.cell.getChild("expandButton"));
		if(expandButton){
			if(node.isFolder){
				expandButton.visible=true;
				expandButton.onClick(this,this.__clickExpandButton);
				expandButton.data=node;
				expandButton.selected=node.expanded;
			}
			else
			expandButton.visible=false;
		}
		if(this.treeNodeRender)
			this.treeNodeRender.runWith(node);
	}

	__proto.afterInserted=function(node){
		this.createCell(node);
		var index=this.getInsertIndexForNode(node);
		this._list.addChildAt(node.cell,index);
		if(this.treeNodeRender)
			this.treeNodeRender.runWith(node);
		if(node.isFolder && node.expanded)
			this.checkChildren(node,index);
	}

	__proto.getInsertIndexForNode=function(node){
		var prevNode=node.getPrevSibling();
		if(prevNode==null)
			prevNode=node.parent;
		var insertIndex=this._list.getChildIndex(prevNode.cell)+1;
		var myLevel=node.level;
		var cnt=this._list.numChildren;
		for(var i=insertIndex;i<cnt;i++){
			var testNode=(this._list.getChildAt(i).data);
			if(testNode.level<=myLevel)
				break ;
			insertIndex++;
		}
		return insertIndex;
	}

	__proto.afterRemoved=function(node){
		this.removeNode(node);
	}

	__proto.afterExpanded=function(node){
		if(node!=this._root && this.treeNodeWillExpand)
			this.treeNodeWillExpand(node);
		if(node.cell==null)
			return;
		if(node!=this._root){
			if(this.treeNodeRender)
				this.treeNodeRender.runWith(node);
			var expandButton=(node.cell.getChild("expandButton"));
			if(expandButton)
				expandButton.selected=true;
		}
		if(node.cell.parent!=null)
			this.checkChildren(node,this._list.getChildIndex(node.cell));
	}

	__proto.afterCollapsed=function(node){
		if(node!=this._root && this.treeNodeWillExpand)
			this.treeNodeWillExpand(node);
		if(node.cell==null)
			return;
		if(node!=this._root){
			if(this.treeNodeRender)
				this.treeNodeRender.runWith(node);
			var expandButton=(node.cell.getChild("expandButton"));
			if(expandButton)
				expandButton.selected=false;
		}
		if(node.cell.parent!=null)
			this.hideFolderNode(node);
	}

	__proto.afterMoved=function(node){
		if(!node.isFolder)
			this._list.removeChild(node.cell);
		else
		this.hideFolderNode(node);
		var index=this.getInsertIndexForNode(node);
		this._list.addChildAt(node.cell,index);
		if(node.isFolder && node.expanded)
			this.checkChildren(node,index);
	}

	__proto.checkChildren=function(folderNode,index){
		var cnt=folderNode.numChildren;
		for(var i=0;i<cnt;i++){
			index++;
			var node=folderNode.getChildAt(i);
			if(node.cell==null)
				this.createCell(node);
			if(!node.cell.parent)
				this._list.addChildAt(node.cell,index);
			if(node.isFolder && node.expanded)
				index=this.checkChildren(node,index);
		}
		return index;
	}

	__proto.hideFolderNode=function(folderNode){
		var cnt=folderNode.numChildren;
		for(var i=0;i<cnt;i++){
			var node=folderNode.getChildAt(i);
			if(node.cell && node.cell.parent!=null)
				this._list.removeChild(node.cell);
			if(node.isFolder && node.expanded)
				this.hideFolderNode(node);
		}
	}

	__proto.removeNode=function(node){
		if(node.cell!=null){
			if(node.cell.parent!=null)
				this._list.removeChild(node.cell);
			this._list.returnToPool(node.cell);
			node.cell.data=null;
			node.setCell(null);
		}
		if(node.isFolder){
			var cnt=node.numChildren;
			for(var i=0;i<cnt;i++){
				var node2=node.getChildAt(i);
				this.removeNode(node2);
			}
		}
	}

	__proto.__clickExpandButton=function(evt){
		evt.stopPropagation();
		var expandButton=(GObject.cast(evt.currentTarget));
		var node=(expandButton.parent.data);
		if(this._list.scrollPane!=null){
			var posY=this._list.scrollPane.posY;
			if(expandButton.selected)
				node.expanded=true;
			else
			node.expanded=false;
			this._list.scrollPane.posY=posY;
			this._list.scrollPane.scrollToView(node.cell);
		}
		else{
			if(expandButton.selected)
				node.expanded=true;
			else
			node.expanded=false;
		}
	}

	__proto.__clickItem=function(item,evt){
		if(this._list.scrollPane!=null)
			var posY=this._list.scrollPane.posY;
		var node=(item.data);
		if(this.treeNodeClick)
			this.treeNodeClick.runWith([node,evt]);
		if(this._list.scrollPane!=null){
			this._list.scrollPane.posY=posY;
			if(node.cell)
				this._list.scrollPane.scrollToView(node.cell);
		}
	}

	__getset(0,__proto,'list',function(){
		return this._list;
	});

	__getset(0,__proto,'root',function(){
		return this._root;
	});

	__getset(0,__proto,'indent',function(){
		return this._indent;
		},function(value){
		this._indent=value;
	});

	return TreeView;
})()


//class fairygui.UIConfig
var UIConfig$1=(function(){
	function UIConfig(){}
	__class(UIConfig,'fairygui.UIConfig',null,'UIConfig$1');
	UIConfig.defaultFont="SimSun";
	UIConfig.windowModalWaiting=null;
	UIConfig.globalModalWaiting=null;
	UIConfig.modalLayerColor="rgba(33,33,33,0.2)";
	UIConfig.buttonSound=null;
	UIConfig.buttonSoundVolumeScale=1;
	UIConfig.horizontalScrollBar=null;
	UIConfig.verticalScrollBar=null;
	UIConfig.defaultScrollStep=25;
	UIConfig.defaultScrollDecelerationRate=0.967;
	UIConfig.defaultScrollBarDisplay=1;
	UIConfig.defaultScrollTouchEffect=true;
	UIConfig.defaultScrollBounceEffect=true;
	UIConfig.popupMenu=null;
	UIConfig.popupMenu_seperator=null;
	UIConfig.loaderErrorSign=null;
	UIConfig.tooltipsWin=null;
	UIConfig.defaultComboBoxVisibleItemCount=10;
	UIConfig.touchScrollSensitivity=20;
	UIConfig.touchDragSensitivity=10;
	UIConfig.clickDragSensitivity=2;
	UIConfig.bringWindowToFrontOnClick=true;
	UIConfig.frameTimeForAsyncUIConstruction=2;
	UIConfig.textureLinearSampling=true;
	UIConfig.packageFileExtension="bin";
	return UIConfig;
})()


//class fairygui.UIObjectFactory
var UIObjectFactory=(function(){
	function UIObjectFactory(){}
	__class(UIObjectFactory,'fairygui.UIObjectFactory');
	UIObjectFactory.setPackageItemExtension=function(url,type){
		if (url==null)
			throw new Error("Invaild url: "+url);
		var pi=UIPackage.getItemByURL(url);
		if (pi !=null)
			pi.extensionType=type;
		UIObjectFactory.packageItemExtensions[url]=type;
	}

	UIObjectFactory.setLoaderExtension=function(type){
		fairygui.UIObjectFactory.loaderType=type;
	}

	UIObjectFactory.resolvePackageItemExtension=function(pi){
		pi.extensionType=UIObjectFactory.packageItemExtensions["ui://"+pi.owner.id+pi.id];
		if(!pi.extensionType)
			pi.extensionType=UIObjectFactory.packageItemExtensions["ui://"+pi.owner.name+"/"+pi.name];
	}

	UIObjectFactory.newObject=function(pi){
		switch (pi.type){
			case 0:
				return new GImage();
			case 2:
				return new GMovieClip();
			case 4:{
					var cls=pi.extensionType;
					if (cls)
						return new cls();
					var xml=pi.owner.getItemAsset(pi);
					var extention=xml.getAttribute("extention");
					if(extention !=null){
					switch(extention){
						case "Button":
							return new GButton();
						case "Label":
							return new GLabel();
						case "ProgressBar":
							return new GProgressBar();
						case "Slider":
							return new GSlider();
						case "ScrollBar":
							return new GScrollBar();
						case "ComboBox":
							return new GComboBox();
						default :
							return new GComponent();
						}
				}
				else
				return new GComponent();
			}
		}
		return null;
	}

	UIObjectFactory.newObject2=function(type){
		switch (type){
			case "image":
				return new GImage();
			case "movieclip":
				return new GMovieClip();
			case "component":
				return new GComponent();
			case "text":
				return new GBasicTextField();
			case "richtext":
				return new GRichTextField();
			case "inputtext":
				return new GTextInput();
			case "group":
				return new GGroup();
			case "list":
				return new GList();
			case "graph":
				return new GGraph();
			case "loader":
				if (fairygui.UIObjectFactory.loaderType !=null)
					return new fairygui.UIObjectFactory.loaderType();
				else
				return new GLoader();
			}
		return null;
	}

	UIObjectFactory.packageItemExtensions={};
	UIObjectFactory.loaderType=null;
	return UIObjectFactory;
})()


//class fairygui.UIPackage
var UIPackage=(function(){
	var AtlasSprite;
	function UIPackage(){
		this._id=null;
		this._name=null;
		this._basePath=null;
		this._items=null;
		this._itemsById=null;
		this._itemsByName=null;
		this._resKey=null;
		this._resData=null;
		this._customId=null;
		this._sprites=null;
		this._hitTestDatas=null;
		this._items=[];
		this._sprites={};
		this._hitTestDatas={};
	}

	__class(UIPackage,'fairygui.UIPackage');
	var __proto=UIPackage.prototype;
	__proto.create=function(resKey,descData){
		this._resKey=resKey;
		this.loadPackage(descData);
	}

	__proto.loadPackage=function(descData){
		var str;
		var arr;
		if(!descData){
			descData=AssetProxy.inst.getRes(this._resKey+"."+UIConfig$1.packageFileExtension);
			if(!descData)
				throw new Error("package resource not ready: "+this._resKey);
		}
		this.decompressPackage(descData);
		str=this.getDesc("sprites.bytes");
		arr=str.split("\n");
		var cnt=arr.length;
		for(var i=1;i < cnt;i++){
			str=arr[i];
			if(!str)
				continue ;
			var arr2=str.split(" ");
			var sprite=new AtlasSprite();
			var itemId=arr2[0];
			var binIndex=parseInt(arr2[1]);
			if(binIndex >=0)
				sprite.atlas="atlas"+binIndex;
			else {
				var pos=itemId.indexOf("_");
				if(pos==-1)
					sprite.atlas="atlas_"+itemId;
				else
				sprite.atlas="atlas_"+itemId.substr(0,pos);
			}
			sprite.rect.x=parseInt(arr2[2]);
			sprite.rect.y=parseInt(arr2[3]);
			sprite.rect.width=parseInt(arr2[4]);
			sprite.rect.height=parseInt(arr2[5]);
			sprite.rotated=arr2[6]=="1";
			this._sprites[itemId]=sprite;
		}
		str=this.getDesc("hittest.bytes");
		if(str!=null){
			var ba=ToolSet.base64Decode(str);
			ba.endian="bigEndian";
			while(ba.bytesAvailable){
				var hitTestData=new PixelHitTestData();
				this._hitTestDatas[ba.readUTFString()]=hitTestData;
				hitTestData.load(ba);
			}
		}
		str=this.getDesc("package.xml");
		var xml=Utils.parseXMLFromString(str);
		var rootNode=xml.firstChild;
		this._id=rootNode.getAttribute("id");
		this._name=rootNode.getAttribute("name");
		var resources=ToolSet.findChildNode(rootNode,"resources").childNodes;
		this._itemsById={};
		this._itemsByName={};
		var pi;
		var cxml;
		var length1=resources.length;
		for(var i1=0;i1 < length1;i1++){
			cxml=resources[i1];
			if(cxml.nodeType!=1)
				continue ;
			pi=new PackageItem();
			pi.owner=this;
			pi.type=PackageItemType.parse(cxml.nodeName);
			pi.id=cxml.getAttribute("id");
			pi.name=cxml.getAttribute("name");
			pi.file=cxml.getAttribute("file");
			str=cxml.getAttribute("size");
			if(str){
				arr=str.split(",");
				pi.width=parseInt(arr[0]);
				pi.height=parseInt(arr[1]);
			}
			switch(pi.type){
				case 0:{
						str=cxml.getAttribute("scale");
						if(str=="9grid"){
							pi.scale9Grid=new laya.maths.Rectangle();
							str=cxml.getAttribute("scale9grid");
							if(str){
								arr=str.split(",");
								pi.scale9Grid.x=parseInt(arr[0]);
								pi.scale9Grid.y=parseInt(arr[1]);
								pi.scale9Grid.width=parseInt(arr[2]);
								pi.scale9Grid.height=parseInt(arr[3]);
								str=cxml.getAttribute("gridTile");
								if(str)
									pi.tileGridIndice=parseInt(str);
							}
						}
						else if(str=="tile"){
							pi.scaleByTile=true;
						}
						str=cxml.getAttribute("smoothing");
						pi.smoothing=str !="false";
						break ;
					}
				case 4:
					UIObjectFactory.resolvePackageItemExtension(pi);
					break ;
				}
			this._items.push(pi);
			this._itemsById[pi.id]=pi;
			if(pi.name !=null)
				this._itemsByName[pi.name]=pi;
		}
		cnt=this._items.length;
		for(i=0;i < cnt;i++){
			pi=this._items[i];
			if(pi.type==6){
				this.loadFont(pi);
				fairygui.UIPackage._bitmapFonts[pi.bitmapFont.id]=pi.bitmapFont;
			}
		}
	}

	__proto.decompressPackage=function(buf){
		this._resData={};
		var mark=new Uint8Array(buf.slice(0,2));
		if(mark[0]==0x50 && mark[1]==0x4b){
			buf.position=0;
			this.decodeUncompressed(buf);
		}
		else{
			var data;
			var inflater=new Zlib.RawInflate(buf);data=inflater.decompress();;
			var source=new Byte(data).readUTFBytes();
			var curr=0;
			var fn;
			var size=NaN;
			while(true){
				var pos=source.indexOf("|",curr);
				if(pos==-1)
					break ;
				fn=source.substring(curr,pos);
				curr=pos+1;
				pos=source.indexOf("|",curr);
				size=parseInt(source.substring(curr,pos));
				curr=pos+1;
				this._resData[fn]=source.substr(curr,size);
				curr+=size;
			}
		}
	}

	__proto.decodeUncompressed=function(buf){
		var ba=new Byte(buf);
		var pos=ba.length-22;
		ba.pos=pos+10;
		var entryCount=ba.getUint16();
		ba.pos=pos+16;
		pos=ba.getInt32();
		for (var i=0;i < entryCount;i++){
			ba.pos=pos+28;
			var len=ba.getUint16();
			var len2=ba.getUint16()+ba.getUint16();
			ba.pos=pos+46;
			var entryName=ba.getUTFBytes(len);
			if (entryName[entryName.length-1] !='/' && entryName[entryName.length-1] !='\\'){
				ba.pos=pos+20;
				var size=ba.getInt32();
				ba.pos=pos+42;
				var offset=ba.getInt32()+30+len;
				if (size > 0){
					ba.pos=offset;
					this._resData[entryName]=ba.readUTFBytes(size);
				}
			}
			pos+=46+len+len2;
		}
	}

	__proto.dispose=function(){
		var cnt=this._items.length;
		for(var i=0;i < cnt;i++){
			var pi=this._items[i];
			if(pi.type==7){
				var texture=pi.texture;
				if(texture !=null)
					texture.destroy(true);
			}
			if(pi.bitmapFont !=null){
				delete fairygui.UIPackage._bitmapFonts[pi.bitmapFont.id];
			}
		}
	}

	__proto.createObject=function(resName,userClass){
		var pi=this._itemsByName[resName];
		if (pi)
			return this.internalCreateObject(pi,userClass);
		else
		return null;
	}

	__proto.internalCreateObject=function(item,userClass){
		var g;
		if (item.type==4){
			if (userClass !=null)
				g=new userClass();
			else
			g=UIObjectFactory.newObject(item);
		}
		else
		g=UIObjectFactory.newObject(item);
		if (g==null)
			return null;
		fairygui.UIPackage._constructing++;
		g.packageItem=item;
		g.constructFromResource();
		fairygui.UIPackage._constructing--;
		return g;
	}

	__proto.getItemById=function(itemId){
		return this._itemsById[itemId];
	}

	__proto.getItemByName=function(resName){
		return this._itemsByName[resName];
	}

	__proto.getItemAssetByName=function(resName){
		var pi=this._itemsByName[resName];
		if (pi==null){
			throw "Resource not found -"+resName;
		}
		return this.getItemAsset(pi);
	}

	__proto.getItemAssetURL=function(item){
		return this._resKey+"@"+item.file;;
	}

	__proto.getItemAsset=function(item){
		switch (item.type){
			case 0:
				if (!item.decoded){
					item.decoded=true;
					var sprite=this._sprites[item.id];
					if (sprite !=null)
						item.texture=this.createSpriteTexture(sprite);
				}
				return item.texture;
			case 7:
				if (!item.decoded){
					item.decoded=true;
					var fileName=(item.file !=null && item.file.length > 0)? item.file :(item.id+".png");
					item.texture=AssetProxy.inst.getRes(this._resKey+"@"+fileName);
					if(!UIConfig$1.textureLinearSampling)
						item.texture.isLinearSampling=false;
				}
				return item.texture;
			case 3:
				if (!item.decoded){
					item.decoded=true;
					item.sound=AssetProxy.inst.getRes(this._resKey+"@"+item.file);
				}
				return item.sound;
			case 6:
				if (!item.decoded){
					item.decoded=true;
					this.loadFont(item);
				}
				return item.bitmapFont;
			case 2:
				if (!item.decoded){
					item.decoded=true;
					this.loadMovieClip(item);
				}
				return item.frames;
			case 4:
				if (!item.decoded){
					item.decoded=true;
					var str=this.getDesc(item.id+".xml");
					var xml=Utils.parseXMLFromString(str);
					item.componentData=xml.firstChild;
					this.loadComponentChildren(item);
					this.translateComponent(item);
				}
				return item.componentData;
			default :
				return AssetProxy.inst.getRes(this._resKey+"@"+item.id);
			}
	}

	__proto.getDesc=function(fn){
		return this._resData[fn];
	}

	__proto.getPixelHitTestData=function(itemId){
		return this._hitTestDatas[itemId];
	}

	__proto.loadComponentChildren=function(item){
		var listNode=ToolSet.findChildNode(item.componentData,"displayList");
		if (listNode !=null){
			var col=listNode.childNodes;
			var dcnt=col.length;
			item.displayList=__newvec(dcnt);
			var di;
			for (var i=0;i < dcnt;i++){
				var cxml=col[i];
				var tagName=cxml.nodeName;
				var src=cxml.getAttribute("src");
				if (src){
					var pkgId=cxml.getAttribute("pkg");
					var pkg;
					if (pkgId && pkgId !=item.owner.id)
						pkg=fairygui.UIPackage.getById(pkgId);
					else
					pkg=item.owner;
					var pi=pkg !=null ? pkg.getItemById(src):null;
					if (pi !=null)
						di=new DisplayListItem(pi,null);
					else
					di=new DisplayListItem(null,tagName);
				}
				else{
					if (tagName=="text" && cxml.getAttribute("input")=="true")
						di=new DisplayListItem(null,"inputtext");
					else
					di=new DisplayListItem(null,tagName);
				}
				di.desc=cxml;
				item.displayList[i]=di;
			}
		}
		else
		item.displayList=__newvec(0,null);
	}

	__proto.translateComponent=function(item){
		if(fairygui.UIPackage._stringsSource==null)
			return;
		var strings=fairygui.UIPackage._stringsSource[this.id+item.id];
		if(strings==null)
			return;
		var length1=item.displayList.length;
		var length2=NaN;
		var value;
		var cxml,dxml,exml;
		var ename;
		var elementId;
		var items;
		var i1=NaN,i2=NaN,j=NaN;
		var str;
		for (i1=0;i1 < length1;i1++){
			cxml=item.displayList[i1].desc;
			ename=cxml.nodeName;
			elementId=cxml.getAttribute("id");
			str=cxml.getAttribute("tooltips");
			if(str){
				value=strings[elementId+"-tips"];
				if(value!=undefined)
					cxml.setAttribute("tooltips",value);
			}
			dxml=ToolSet.findChildNode(cxml,"gearText");
			if(dxml){
				value=strings[elementId+"-texts"];
				if(value!=undefined)
					dxml.setAttribute("values",value);
				value=strings[elementId+"-texts_def"];
				if(value!=undefined)
					dxml.setAttribute("default",value);
			}
			if(ename=="text" || ename=="richtext"){
				value=strings[elementId];
				if(value!=undefined)
					cxml.setAttribute("text",value);
				value=strings[elementId+"-prompt"];
				if(value!=undefined)
					cxml.setAttribute("prompt",value);
			}
			else if(ename=="list"){
				items=cxml.childNodes;
				length2=items.length;
				j=0;
				for (i2=0;i2 < length2;i2++){
					exml=items[i2];
					if(exml.nodeName!="item")
						continue ;
					value=strings[elementId+"-"+j];
					if(value!=undefined)
						exml.setAttribute("title",value);
					j++;
				}
			}
			else if(ename=="component"){
				dxml=ToolSet.findChildNode(cxml,"Button");
				if(dxml){
					value=strings[elementId];
					if(value!=undefined)
						dxml.setAttribute("title",value);
					value=strings[elementId+"-0"];
					if(value!=undefined)
						dxml.setAttribute("selectedTitle",value);
					continue ;
				}
				dxml=ToolSet.findChildNode(cxml,"Label");
				if(dxml){
					value=strings[elementId];
					if(value!=undefined)
						dxml.setAttribute("title",value);
					value=strings[elementId+"-prompt"];
					if(value!=undefined)
						dxml.setAttribute("prompt",value);
					continue ;
				}
				dxml=ToolSet.findChildNode(cxml,"ComboBox");
				if(dxml){
					value=strings[elementId];
					if(value!=undefined)
						dxml.setAttribute("title",value);
					items=dxml.childNodes;
					length2=items.length;
					j=0;
					for (i2=0;i2 < length2;i2++){
						exml=items[i2];
						if(exml.nodeName!="item")
							continue ;
						value=strings[elementId+"-"+j];
						if(value!=undefined)
							exml.setAttribute("title",value);
						j++;
					}
					continue ;
				}
			}
		}
	}

	__proto.createSpriteTexture=function(sprite){
		var atlasItem=this._itemsById[sprite.atlas];
		if (atlasItem !=null){
			var atlasTexture=(this.getItemAsset(atlasItem));
			if(atlasTexture==null)
				return null;
			else
			return this.createSubTexture(atlasTexture,sprite.rect);
		}
		else
		return null;
	}

	__proto.createSubTexture=function(atlasTexture,clipRect){
		var texture=Texture.createFromTexture(atlasTexture,
		clipRect.x,clipRect.y,clipRect.width,clipRect.height);
		return texture;
	}

	__proto.loadMovieClip=function(item){
		var xml=Utils.parseXMLFromString(this.getDesc(item.id+".xml")).firstChild;
		var str;
		var arr;
		str=xml.getAttribute("interval");
		if (str)
			item.interval=parseInt(str);
		str=xml.getAttribute("swing");
		if (str)
			item.swing=str=="true";
		str=xml.getAttribute("repeatDelay");
		if (str)
			item.repeatDelay=parseInt(str);
		var frameCount=parseInt(xml.getAttribute("frameCount"));
		item.frames=[];
		var frameNodes=ToolSet.findChildNode(xml,"frames").childNodes;
		var i=0;
		var len=frameNodes.length;
		for(var k=0;k < len;k++){
			var frameNode=frameNodes[k];
			if(frameNode.nodeName!="frame")
				continue ;
			var frame=new Frame();
			str=frameNode.getAttribute("rect");
			arr=str.split(",");
			frame.rect=new Rectangle(parseInt(arr[0]),parseInt(arr[1]),parseInt(arr[2]),parseInt(arr[3]));
			str=frameNode.getAttribute("addDelay");
			if(str)
				frame.addDelay=parseInt(str);
			item.frames[i]=frame;
			if (frame.rect.width==0)
				continue ;
			str=frameNode.getAttribute("sprite");
			if (str)
				str=item.id+"_"+str;
			else
			str=item.id+"_"+i;
			var sprite=this._sprites[str];
			if(sprite !=null)
				frame.texture=this.createSpriteTexture(sprite);
			i++;
		}
	}

	__proto.loadFont=function(item){
		var font=new BitmapFont$1();
		font.id="ui://"+this.id+item.id;
		var str=this.getDesc(item.id+".fnt");
		var lines=str.split("\n");
		var lineCount=lines.length;
		var i=0;
		var kv={};
		var ttf=false;
		var size=0;
		var xadvance=0;
		var resizable=false;
		var atlasOffsetX=0,atlasOffsetY=0;
		var charImg;
		var mainTexture;
		var lineHeight=0;
		for (i=0;i < lineCount;i++){
			str=lines[i];
			if (str.length==0)
				continue ;
			str=ToolSet.trim(str);
			var arr=str.split(" ");
			for (var j=1;j < arr.length;j++){
				var arr2=arr[j].split("=");
				kv[arr2[0]]=arr2[1];
			}
			str=arr[0];
			if (str=="char"){
				var bg=new BMGlyph();
				bg.x=isNaN(kv.x)? 0 :parseInt(kv.x);
				bg.y=isNaN(kv.y)? 0 :parseInt(kv.y);
				bg.offsetX=isNaN(kv.xoffset)? 0 :parseInt(kv.xoffset);
				bg.offsetY=isNaN(kv.yoffset)? 0 :parseInt(kv.yoffset);
				bg.width=isNaN(kv.width)? 0 :parseInt(kv.width);
				bg.height=isNaN(kv.height)? 0 :parseInt(kv.height);
				bg.advance=isNaN(kv.xadvance)? 0 :parseInt(kv.xadvance);
				if (kv.chnl !=undefined){
					bg.channel=parseInt(kv.chnl);
					if (bg.channel==15)
						bg.channel=4;
					else if (bg.channel==1)
					bg.channel=3;
					else if (bg.channel==2)
					bg.channel=2;
					else
					bg.channel=1;
				}
				if (!ttf){
					if (kv.img){
						charImg=this._itemsById[kv.img];
						if (charImg !=null){
							charImg.load();
							bg.width=charImg.width;
							bg.height=charImg.height;
							bg.texture=charImg.texture;
						}
					}
				}
				else if (mainTexture !=null){
					bg.texture=this.createSubTexture(mainTexture,new Rectangle(bg.x+atlasOffsetX,bg.y+atlasOffsetY,bg.width,bg.height));
				}
				if (ttf)
					bg.lineHeight=lineHeight;
				else {
					if(bg.advance==0){
						if(xadvance==0)
							bg.advance=bg.offsetX+bg.width;
						else
						bg.advance=xadvance;
					}
					bg.lineHeight=bg.offsetY < 0 ? bg.height :(bg.offsetY+bg.height);
					if(size>0 && bg.lineHeight<size)
						bg.lineHeight=size;
				}
				font.glyphs[String.fromCharCode(kv.id)]=bg;
			}
			else if (str=="info"){
				ttf=kv.face !=null;
				if(!isNaN(kv.size))
					size=parseInt(kv.size);
				resizable=kv.resizable=="true";
				if (ttf){
					var sprite=this._sprites[item.id];
					if (sprite !=null){
						atlasOffsetX=sprite.rect.x;
						atlasOffsetY=sprite.rect.y;
						var atlasItem=this._itemsById[sprite.atlas];
						if(atlasItem !=null)
							mainTexture=(this.getItemAsset(atlasItem));
					}
				}
			}
			else if (str=="common"){
				if(!isNaN(kv.lineHeight))
					lineHeight=parseInt(kv.lineHeight);
				if(size==0)
					size=lineHeight;
				else if(lineHeight==0)
				lineHeight=size;
				if(!isNaN(kv.xadvance))
					xadvance=parseInt(kv.xadvance);
			}
		}
		if (size==0 && bg)
			size=bg.height;
		font.ttf=ttf;
		font.size=size;
		font.resizable=resizable;
		item.bitmapFont=font;
	}

	__getset(0,__proto,'id',function(){
		return this._id;
	});

	__getset(0,__proto,'name',function(){
		return this._name;
	});

	__getset(0,__proto,'customId',function(){
		return this._customId;
		},function(value){
		if (this._customId !=null)
			delete fairygui.UIPackage._packageInstById[this._customId];
		this._customId=value;
		if (this._customId !=null)
			fairygui.UIPackage._packageInstById[this._customId]=this;
	});

	UIPackage.getById=function(id){
		return fairygui.UIPackage._packageInstById[id];
	}

	UIPackage.getByName=function(name){
		return fairygui.UIPackage._packageInstByName[name];
	}

	UIPackage.addPackage=function(resKey,descData){
		var pkg=new UIPackage();
		pkg.create(resKey,descData);
		fairygui.UIPackage._packageInstById[pkg.id]=pkg;
		fairygui.UIPackage._packageInstByName[pkg.name]=pkg;
		pkg.customId=resKey;
		return pkg;
	}

	UIPackage.removePackage=function(packageIdOrName){
		var pkg=fairygui.UIPackage._packageInstById[packageIdOrName];
		if(!pkg)
			pkg=fairygui.UIPackage._packageInstByName[packageIdOrName];
		if(!pkg)
			throw new Error("unknown package: "+packageIdOrName);
		pkg.dispose();
		delete fairygui.UIPackage._packageInstById[pkg.id];
		if(pkg._customId !=null)
			delete fairygui.UIPackage._packageInstById[pkg._customId];
		delete fairygui.UIPackage._packageInstByName[pkg.name];
	}

	UIPackage.createObject=function(pkgName,resName,userClass){
		var pkg=fairygui.UIPackage.getByName(pkgName);
		if(pkg)
			return pkg.createObject(resName,userClass);
		else
		return null;
	}

	UIPackage.createObjectFromURL=function(url,userClass){
		var pi=fairygui.UIPackage.getItemByURL(url);
		if(pi)
			return pi.owner.internalCreateObject(pi,userClass);
		else
		return null;
	}

	UIPackage.getItemURL=function(pkgName,resName){
		var pkg=fairygui.UIPackage.getByName(pkgName);
		if(!pkg)
			return null;
		var pi=pkg._itemsByName[resName];
		if(!pi)
			return null;
		return "ui://"+pkg.id+pi.id;
	}

	UIPackage.getItemByURL=function(url){
		var pos1=url.indexOf("//");
		if (pos1==-1)
			return null;
		var pos2=url.indexOf("/",pos1+2);
		if (pos2==-1){
			if (url.length > 13){
				var pkgId=url.substr(5,8);
				var pkg=UIPackage.getById(pkgId);
				if (pkg !=null){
					var srcId=url.substr(13);
					return pkg.getItemById(srcId);
				}
			}
		}
		else{
			var pkgName=url.substr(pos1+2,pos2-pos1-2);
			pkg=UIPackage.getByName(pkgName);
			if (pkg !=null){
				var srcName=url.substr(pos2+1);
				return pkg.getItemByName(srcName);
			}
		}
		return null;
	}

	UIPackage.normalizeURL=function(url){
		if(url==null)
			return null;
		var pos1=url.indexOf("//");
		if (pos1==-1)
			return null;
		var pos2=url.indexOf("/",pos1+2);
		if (pos2==-1)
			return url;
		var pkgName=url.substr(pos1+2,pos2-pos1-2);
		var srcName=url.substr(pos2+1);
		return UIPackage.getItemURL(pkgName,srcName);
	}

	UIPackage.getBitmapFontByURL=function(url){
		return fairygui.UIPackage._bitmapFonts[url];
	}

	UIPackage.setStringsSource=function(source){
		fairygui.UIPackage._stringsSource={};
		var xml=Utils.parseXMLFromString(source);
		var resNode=ToolSet.findChildNode(xml,"resources");
		var nodes=resNode.childNodes;
		var length1=nodes.length;
		for (var i1=0;i1 < length1;i1++){
			var cxml=nodes[i1];
			if (cxml.nodeName=="string"){
				var key=cxml.getAttribute("name");
				var text=cxml.textContent;
				var i=key.indexOf("-");
				if(i==-1)
					continue ;
				var key2=key.substr(0,i);
				var key3=key.substr(i+1);
				var col=fairygui.UIPackage._stringsSource[key2];
				if(!col){
					col={};
					fairygui.UIPackage._stringsSource[key2]=col;
				}
				col[key3]=text;
			}
		}
	}

	UIPackage._constructing=0;
	UIPackage._packageInstById={};
	UIPackage._packageInstByName={};
	UIPackage._bitmapFonts={};
	UIPackage._stringsSource=null;
	UIPackage.sep0=",";
	UIPackage.sep1="\n";
	UIPackage.sep2=" ";
	UIPackage.sep3="=";
	UIPackage.__init$=function(){
		//class AtlasSprite
		AtlasSprite=(function(){
			function AtlasSprite(){
				this.atlas=null;
				this.rect=null;
				this.rotated=false;
				this.rect=new Rectangle();
			}
			__class(AtlasSprite,'');
			return AtlasSprite;
		})()
	}

	return UIPackage;
})()


//class fairygui.utils.PixelHitTestData
var PixelHitTestData=(function(){
	function PixelHitTestData(){
		this.pixelWidth=0;
		this.scale=NaN;
		this.pixels=null;
	}

	__class(PixelHitTestData,'fairygui.utils.PixelHitTestData');
	var __proto=PixelHitTestData.prototype;
	__proto.load=function(ba){
		ba.getInt32();
		this.pixelWidth=ba.getInt32();
		this.scale=1/ba.readByte();
		var len=ba.getInt32();
		this.pixels=__newvec(len);
		for(var i=0;i<len;i++){
			var j=ba.readByte();
			if(j<0)
				j+=256;
			this.pixels[i]=j;
		}
	}

	return PixelHitTestData;
})()


//class fairygui.utils.ToolSet
var ToolSet=(function(){
	function ToolSet(){}
	__class(ToolSet,'fairygui.utils.ToolSet');
	ToolSet.getFileName=function(source){
		var i=source.lastIndexOf("/");
		if (i !=-1)
			source=source.substr(i+1);
		i=source.lastIndexOf("\\");
		if (i !=-1)
			source=source.substr(i+1);
		i=source.lastIndexOf(".");
		if (i !=-1)
			return source.substring(0,i);
		else
		return source;
	}

	ToolSet.startsWith=function(source,str,ignoreCase){
		(ignoreCase===void 0)&& (ignoreCase=false);
		if (!source)
			return false;
		else if (source.length < str.length)
		return false;
		else {
			source=source.substring(0,str.length);
			if (!ignoreCase)
				return source==str;
			else
			return source.toLowerCase()==str.toLowerCase();
		}
	}

	ToolSet.endsWith=function(source,str,ignoreCase){
		(ignoreCase===void 0)&& (ignoreCase=false);
		if (!source)
			return false;
		else if (source.length < str.length)
		return false;
		else {
			source=source.substring(source.length-str.length);
			if (!ignoreCase)
				return source==str;
			else
			return source.toLowerCase()==str.toLowerCase();
		}
	}

	ToolSet.trim=function(targetString){
		return fairygui.utils.ToolSet.trimLeft(fairygui.utils.ToolSet.trimRight(targetString));
	}

	ToolSet.trimLeft=function(targetString){
		var tempChar="";
		for (var i=0;i < targetString.length;i++){
			tempChar=targetString.charAt(i);
			if (tempChar !=" " && tempChar !="\n" && tempChar !="\r"){
				break ;
			}
		}
		return targetString.substr(i);
	}

	ToolSet.trimRight=function(targetString){
		var tempChar="";
		for (var i=targetString.length-1;i >=0;i--){
			tempChar=targetString.charAt(i);
			if (tempChar !=" " && tempChar !="\n" && tempChar !="\r"){
				break ;
			}
		}
		return targetString.substring(0,i+1);
	}

	ToolSet.convertToHtmlColor=function(argb,hasAlpha){
		(hasAlpha===void 0)&& (hasAlpha=false);
		var alpha;
		if (hasAlpha)
			alpha=(argb >> 24 & 0xFF).toString(16);
		else
		alpha="";
		var red=(argb >> 16 & 0xFF).toString(16);
		var green=(argb >> 8 & 0xFF).toString(16);
		var blue=(argb & 0xFF).toString(16);
		if (alpha.length==1)
			alpha="0"+alpha;
		if (red.length==1)
			red="0"+red;
		if (green.length==1)
			green="0"+green;
		if (blue.length==1)
			blue="0"+blue;
		return "#"+alpha+red+green+blue;
	}

	ToolSet.convertFromHtmlColor=function(str,hasAlpha){
		(hasAlpha===void 0)&& (hasAlpha=false);
		if (str.length < 1)
			return 0;
		if (str.charAt(0)=="#")
			str=str.substr(1);
		if (str.length==8)
			return (parseInt(str.substr(0,2),16)<< 24)+parseInt(str.substr(2),16);
		else if (hasAlpha)
		return 0xFF000000+parseInt(str,16);
		else
		return parseInt(str,16);
	}

	ToolSet.displayObjectToGObject=function(obj){
		while (obj !=null && !((obj instanceof laya.display.Stage ))){
			if (obj["$owner"])
				return obj["$owner"];
			obj=obj.parent;
		}
		return null;
	}

	ToolSet.findChildNode=function(xml,name){
		var col=xml.childNodes;
		var length1=col.length;
		if (length1>0){
			for (var i1=0;i1 < length1;i1++){
				var cxml=col[i1];
				if (cxml.nodeName==name){
					return cxml;
				}
			}
		}
		return null;
	}

	ToolSet.encodeHTML=function(str){
		if (!str)
			return "";
		else
		return str.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace("'","&apos;");
	}

	ToolSet.parseUBB=function(text){
		return fairygui.utils.ToolSet.defaultUBBParser.parse(text);
	}

	ToolSet.removeUBB=function(text){
		return fairygui.utils.ToolSet.defaultUBBParser.parse(text,true);
	}

	ToolSet.parseEaseType=function(value){
		var ret=ToolSet.EaseMap[value];
		if (!ret)
			ret=Ease.quartOut;
		return ret;
	}

	ToolSet.clamp=function(value,min,max){
		if(value<min)
			value=min;
		else if(value>max)
		value=max;
		return value;
	}

	ToolSet.clamp01=function(value){
		if(value>1)
			value=1;
		else if(value<0)
		value=0;
		return value;
	}

	ToolSet.base64Decode=function(bstr){
		var ba=new Byte();
		var code=0;
		var len=bstr.length;
		for (var i=0;i < len;i+=4){
			code=(ToolSet.BASE64_CHARS.indexOf(bstr.charAt(i))& 0x3F)<< 18;
			code+=(ToolSet.BASE64_CHARS.indexOf(bstr.charAt(i+1))& 0x3F)<< 12;
			code+=(ToolSet.BASE64_CHARS.indexOf(bstr.charAt(i+2))& 0x3F)<< 6;
			code+=(ToolSet.BASE64_CHARS.indexOf(bstr.charAt(i+3))& 0x3F);
			ba.writeByte((code >> 16)& 0xFF);
			ba.writeByte((code >> 8)& 0xFF);
			ba.writeByte(code & 0xFF);
		}
		if(len>0 && bstr.charAt(len-1)=="=")
			ba.length-=1;
		if(len>1 && bstr.charAt(len-2)=="=")
			ba.length-=1;
		ba.pos=0;
		return ba;
	}

	ToolSet.lerp=function(start,end,percent){
		return (start+percent*(end-start));
	}

	ToolSet.BASE64_CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	__static(ToolSet,
	['defaultUBBParser',function(){return this.defaultUBBParser=new UBBParser();},'EaseMap',function(){return this.EaseMap={
			"Linear":Ease.linearNone,
			"Elastic.In":Ease.elasticIn,
			"Elastic.Out":Ease.elasticOut,
			"Elastic.InOut":Ease.elasticInOut,
			"Quad.In":Ease.quadIn,
			"Quad.Out":Ease.quadOut,
			"Quad.InOut":Ease.quadInOut,
			"Cube.In":Ease.cubicIn,
			"Cube.Out":Ease.cubicOut,
			"Cube.InOut":Ease.cubicInOut,
			"Quart.In":Ease.quartIn,
			"Quart.Out":Ease.quartOut,
			"Quart.InOut":Ease.quartInOut,
			"Quint.In":Ease.quintIn,
			"Quint.Out":Ease.quintOut,
			"Quint.InOut":Ease.quintInOut,
			"Sine.In":Ease.sineIn,
			"Sine.Out":Ease.sineOut,
			"Sine.InOut":Ease.sineInOut,
			"Bounce.In":Ease.bounceIn,
			"Bounce.Out":Ease.bounceOut,
			"Bounce.InOut":Ease.bounceInOut,
			"Circ.In":Ease.circIn,
			"Circ.Out":Ease.circOut,
			"Circ.InOut":Ease.circInOut,
			"Expo.In":Ease.quartIn,
			"Expo.Out":Ease.quartOut,
			"Expo.InOut":Ease.quartInOut,
			"Back.In":Ease.backIn,
			"Back.Out":Ease.backOut,
			"Back.InOut":Ease.backInOut
	};}

	]);
	return ToolSet;
})()


//class fairygui.utils.UBBParser
var UBBParser=(function(){
	function UBBParser(){
		this._text=null;
		this._readPos=0;
		this._handlers=null;
		this.smallFontSize=12;
		this.normalFontSize=14;
		this.largeFontSize=16;
		this.defaultImgWidth=0;
		this.defaultImgHeight=0;
		this._handlers={};
		this._handlers["url"]=this.onTag_URL;
		this._handlers["img"]=this.onTag_IMG;
		this._handlers["b"]=this.onTag_Simple;
		this._handlers["i"]=this.onTag_Simple;
		this._handlers["u"]=this.onTag_Simple;
		this._handlers["sup"]=this.onTag_Simple;
		this._handlers["sub"]=this.onTag_Simple;
		this._handlers["color"]=this.onTag_COLOR;
		this._handlers["font"]=this.onTag_FONT;
		this._handlers["size"]=this.onTag_SIZE;
	}

	__class(UBBParser,'fairygui.utils.UBBParser');
	var __proto=UBBParser.prototype;
	__proto.onTag_URL=function(tagName,end,attr){
		if (!end){
			if (attr !=null)
				return "<a href=\""+attr+"\" target=\"_blank\">";
			else {
				var href=this.getTagText();
				return "<a href=\""+href+"\" target=\"_blank\">";
			}
		}
		else
		return "</a>";
	}

	__proto.onTag_IMG=function(tagName,end,attr){
		if (!end){
			var src=this.getTagText(true);
			if (!src)
				return null;
			if (this.defaultImgWidth)
				return "<img src=\""+src+"\" width=\""+this.defaultImgWidth+"\" height=\""+this.defaultImgHeight+"\"/>";
			else
			return "<img src=\""+src+"\"/>";
		}
		else
		return null;
	}

	__proto.onTag_Simple=function(tagName,end,attr){
		return end ? ("</"+tagName+">"):("<"+tagName+">");
	}

	__proto.onTag_COLOR=function(tagName,end,attr){
		if (!end)
			return "<font color=\""+attr+"\">";
		else
		return "</font>";
	}

	__proto.onTag_FONT=function(tagName,end,attr){
		if (!end)
			return "<font face=\""+attr+"\">";
		else
		return "</font>";
	}

	__proto.onTag_SIZE=function(tagName,end,attr){
		if (!end){
			if (attr=="normal")
				attr=""+this.normalFontSize;
			else if (attr=="small")
			attr=""+this.smallFontSize;
			else if (attr=="large")
			attr=""+this.largeFontSize;
			else if (attr.length && attr.charAt(0)=="+")
			attr=""+(this.smallFontSize+parseInt(attr.substr(1)));
			else if (attr.length && attr.charAt(0)=="-")
			attr=""+(this.smallFontSize-parseInt(attr.substr(1)));
			return "<font size=\""+attr+"\">";
		}
		else
		return "</font>";
	}

	__proto.getTagText=function(remove){
		(remove===void 0)&& (remove=false);
		var pos=this._text.indexOf("[",this._readPos);
		if (pos==-1)
			return null;
		var ret=this._text.substring(this._readPos,pos);
		if (remove)
			this._readPos=pos;
		return ret;
	}

	__proto.parse=function(text,remove){
		(remove===void 0)&& (remove=false);
		this._text=text;
		var pos1=0,pos2=NaN,pos3=0;
		var end=false;
		var tag,attr;
		var repl;
		var func;
		while ((pos2=this._text.indexOf("[",pos1))!=-1){
			pos1=pos2;
			pos2=this._text.indexOf("]",pos1);
			if (pos2==-1)
				break ;
			end=this._text.charAt(pos1+1)=='/';
			tag=this._text.substring(end ? pos1+2 :pos1+1,pos2);
			pos2++;
			this._readPos=pos2;
			attr=null;
			repl=null;
			pos3=tag.indexOf("=");
			if (pos3 !=-1){
				attr=tag.substring(pos3+1);
				tag=tag.substring(0,pos3);
			}
			tag=tag.toLowerCase();
			func=this._handlers[tag];
			if (func !=null){
				if(!remove){
					repl=func.call(this,tag,end,attr);
					if (repl==null)
						repl="";
				}
				else
				repl="";
			}
			else {
				pos1=pos2;
				continue ;
			}
			this._text=this._text.substring(0,pos1)+repl+this._text.substring(this._readPos);
		}
		return this._text;
	}

	__static(UBBParser,
	['inst',function(){return this.inst=new UBBParser();}
	]);
	return UBBParser;
})()


//class fairygui.utils.ColorMatrix extends Array
var ColorMatrix=(function(_super){
	// initialization:
	function ColorMatrix(){
		ColorMatrix.__super.call(this);
		this.reset();
	}

	__class(ColorMatrix,'fairygui.utils.ColorMatrix',Array);
	var __proto=ColorMatrix.prototype;
	// public methods:
	__proto.reset=function(){
		for (var i=0;i<ColorMatrix.LENGTH;i++){
			this[i]=ColorMatrix.IDENTITY_MATRIX[i];
		}
	}

	__proto.invert=function(){
		this.multiplyMatrix([-1,0,0,0,255,
		0,-1,0,0,255,
		0,0,-1,0,255,
		0,0,0,1,0]);
	}

	__proto.adjustColor=function(p_brightness,p_contrast,p_saturation,p_hue){
		this.adjustHue(p_hue);
		this.adjustContrast(p_contrast);
		this.adjustBrightness(p_brightness);
		this.adjustSaturation(p_saturation);
	}

	__proto.adjustBrightness=function(p_val){
		p_val=this.cleanValue(p_val,1)*255;
		this.multiplyMatrix([
		1,0,0,0,p_val,
		0,1,0,0,p_val,
		0,0,1,0,p_val,
		0,0,0,1,0]);
	}

	__proto.adjustContrast=function(p_val){
		p_val=this.cleanValue(p_val,1);
		var s=p_val+1;
		var o=128 *(1-s);
		this.multiplyMatrix([
		s,0,0,0,o,
		0,s,0,0,o,
		0,0,s,0,o,
		0,0,0,1,0]);
	}

	__proto.adjustSaturation=function(p_val){
		p_val=this.cleanValue(p_val,1);
		p_val+=1;
		var invSat=1-p_val;
		var invLumR=invSat *0.299;
		var invLumG=invSat *0.587;
		var invLumB=invSat *0.114;
		this.multiplyMatrix([
		(invLumR+p_val),invLumG,invLumB,0,0,
		invLumR,(invLumG+p_val),invLumB,0,0,
		invLumR,invLumG,(invLumB+p_val),0,0,
		0,0,0,1,0]);
	}

	__proto.adjustHue=function(p_val){
		p_val=this.cleanValue(p_val,1);
		p_val *=Math.PI;
		var cos=Math.cos(p_val);
		var sin=Math.sin(p_val);
		this.multiplyMatrix([
		((0.299+(cos *(1-0.299)))+(sin *-(0.299))),((0.587+(cos *-(0.587)))+(sin *-(0.587))),((0.114+(cos *-(0.114)))+(sin *(1-0.114))),0,0,
		((0.299+(cos *-(0.299)))+(sin *0.143)),((0.587+(cos *(1-0.587)))+(sin *0.14)),((0.114+(cos *-(0.114)))+(sin *-0.283)),0,0,
		((0.299+(cos *-(0.299)))+(sin *-((1-0.299)))),((0.587+(cos *-(0.587)))+(sin *0.587)),((0.114+(cos *(1-0.114)))+(sin *0.114)),0,0,
		0,0,0,1,0]);
	}

	__proto.concat=function(p_matrix){
		if (p_matrix.length !=ColorMatrix.LENGTH){return;}
			this.multiplyMatrix(p_matrix);
	}

	__proto.clone=function(){
		var result=new ColorMatrix();
		result.copyMatrix(this);
		return result;
	}

	__proto.copyMatrix=function(p_matrix){
		var l=ColorMatrix.LENGTH;
		for (var i=0;i<l;i++){
			this[i]=p_matrix[i];
		}
	}

	__proto.multiplyMatrix=function(p_matrix){
		var col=[];
		var i=0;
		for (var y=0;y<4;++y){
			for (var x=0;x<5;++x){
				col[i+x]=p_matrix[i] *this[x]+
				p_matrix[i+1] *this[x+5]+
				p_matrix[i+2] *this[x+10]+
				p_matrix[i+3] *this[x+15]+
				(x==4 ? p_matrix[i+4] :0);
			}
			i+=5;
		}
		this.copyMatrix(col);
	}

	__proto.cleanValue=function(p_val,p_limit){
		return Math.min(p_limit,Math.max(-p_limit,p_val));
	}

	ColorMatrix.create=function(p_brightness,p_contrast,p_saturation,p_hue){
		var ret=new ColorMatrix();
		ret.adjustColor(p_brightness,p_contrast,p_saturation,p_hue);
		return ret;
	}

	ColorMatrix.LUMA_R=0.299;
	ColorMatrix.LUMA_G=0.587;
	ColorMatrix.LUMA_B=0.114;
	__static(ColorMatrix,
	['IDENTITY_MATRIX',function(){return this.IDENTITY_MATRIX=[
		1,0,0,0,0,
		0,1,0,0,0,
		0,0,1,0,0,
		0,0,0,1,0];},'LENGTH',function(){return this.LENGTH=ColorMatrix.IDENTITY_MATRIX.length;}
	]);
	return ColorMatrix;
})(Array)


//class fairygui.Controller extends laya.events.EventDispatcher
var Controller=(function(_super){
	function Controller(){
		this._name=null;
		this._selectedIndex=0;
		this._previousIndex=0;
		this._pageIds=null;
		this._pageNames=null;
		this._actions=null;
		this._parent=null;
		this._autoRadioGroupDepth=false;
		this.changing=false;
		Controller.__super.call(this);
		this._pageIds=[];
		this._pageNames=[];
		this._selectedIndex=-1;
		this._previousIndex=-1;
	}

	__class(Controller,'fairygui.Controller',_super);
	var __proto=Controller.prototype;
	__proto.dispose=function(){
		this.offAll();
	}

	//功能和设置selectedIndex一样，但不会触发事件
	__proto.setSelectedIndex=function(value){
		(value===void 0)&& (value=0);
		if (this._selectedIndex !=value){
			if(value > this._pageIds.length-1)
				throw "index out of bounds: "+value;
			this.changing=true;
			this._previousIndex=this._selectedIndex;
			this._selectedIndex=value;
			this._parent.applyController(this);
			this.changing=false;
		}
	}

	//功能和设置selectedPage一样，但不会触发事件
	__proto.setSelectedPage=function(value){
		var i=this._pageNames.indexOf(value);
		if (i==-1)
			i=0;
		this.setSelectedIndex(i);
	}

	__proto.getPageName=function(index){
		(index===void 0)&& (index=0);
		return this._pageNames[index];
	}

	__proto.addPage=function(name){
		(name===void 0)&& (name="");
		this.addPageAt(name,this._pageIds.length);
	}

	__proto.addPageAt=function(name,index){
		(index===void 0)&& (index=0);
		var nid=""+(fairygui.Controller._nextPageId++);
		if (index==this._pageIds.length){
			this._pageIds.push(nid);
			this._pageNames.push(name);
		}
		else {
			this._pageIds.splice(index,0,nid);
			this._pageNames.splice(index,0,name);
		}
	}

	__proto.removePage=function(name){
		var i=this._pageNames.indexOf(name);
		if (i !=-1){
			this._pageIds.splice(i,1);
			this._pageNames.splice(i,1);
			if (this._selectedIndex >=this._pageIds.length)
				this.selectedIndex=this._selectedIndex-1;
			else
			this._parent.applyController(this);
		}
	}

	__proto.removePageAt=function(index){
		(index===void 0)&& (index=0);
		this._pageIds.splice(index,1);
		this._pageNames.splice(index,1);
		if (this._selectedIndex >=this._pageIds.length)
			this.selectedIndex=this._selectedIndex-1;
		else
		this._parent.applyController(this);
	}

	__proto.clearPages=function(){
		this._pageIds.length=0;
		this._pageNames.length=0;
		if (this._selectedIndex !=-1)
			this.selectedIndex=-1;
		else
		this._parent.applyController(this);
	}

	__proto.hasPage=function(aName){
		return this._pageNames.indexOf(aName)!=-1;
	}

	__proto.getPageIndexById=function(aId){
		return this._pageIds.indexOf(aId);
	}

	__proto.getPageIdByName=function(aName){
		var i=this._pageNames.indexOf(aName);
		if(i !=-1)
			return this._pageIds[i];
		else
		return null;
	}

	__proto.getPageNameById=function(aId){
		var i=this._pageIds.indexOf(aId);
		if(i !=-1)
			return this._pageNames[i];
		else
		return null;
	}

	__proto.getPageId=function(index){
		(index===void 0)&& (index=0);
		return this._pageIds[index];
	}

	__proto.runActions=function(){
		if(this._actions){
			var cnt=this._actions.length;
			for(var i=0;i<cnt;i++){
				this._actions[i].run(this,this.previousPageId,this.selectedPageId);
			}
		}
	}

	__proto.setup=function(xml){
		this._name=xml.getAttribute("name");
		this._autoRadioGroupDepth=xml.getAttribute("autoRadioGroupDepth")=="true";
		var i=0;
		var k=0;
		var str=xml.getAttribute("pages");
		if (str){
			var arr=str.split(",");
			var cnt=arr.length;
			for (i=0;i < cnt;i+=2){
				this._pageIds.push(arr[i]);
				this._pageNames.push(arr[i+1]);
			}
		};
		var col=xml.childNodes;
		var length1=col.length;
		if(length1>0){
			if(!this._actions)
				this._actions=[];
			for(var i1=0;i1 < length1;i1++){
				var cxml=col[i1];
				var action=ControllerAction.createAction(cxml.getAttribute("type"));
				action.setup(cxml);
				this._actions.push(action);
			}
		}
		str=xml.getAttribute("transitions");
		if(str){
			if(!this._actions)
				this._actions=[];
			arr=str.split(",");
			cnt=arr.length;
			var ii=0;
			for(i=0;i < cnt;i++){
				str=arr[i];
				if(!str)
					continue ;
				var taction=new PlayTransitionAction();
				k=str.indexOf("=");
				taction.transitionName=str.substr(k+1);
				str=str.substring(0,k);
				k=str.indexOf("-");
				ii=parseInt(str.substring(k+1));
				if(ii<this._pageIds.length)
					taction.toPage=[this._pageIds[ii]];
				str=str.substring(0,k);
				if(str !="*"){
					ii=parseInt(str);
					if(ii<this._pageIds.length)
						taction.fromPage=[this._pageIds[ii]];
				}
				taction.stopOnExit=true;
				this._actions.push(taction);
			}
		}
		if (this._parent && this._pageIds.length > 0)
			this._selectedIndex=0;
		else
		this._selectedIndex=-1;
	}

	__getset(0,__proto,'oppositePageId',null,function(val){
		var i=this._pageIds.indexOf(val);
		if(i > 0)
			this.selectedIndex=0;
		else if(this._pageIds.length > 1)
		this.selectedIndex=1;
	});

	__getset(0,__proto,'name',function(){
		return this._name;
		},function(value){
		this._name=value;
	});

	__getset(0,__proto,'pageCount',function(){
		return this._pageIds.length;
	});

	__getset(0,__proto,'parent',function(){
		return this._parent;
	});

	__getset(0,__proto,'selectedIndex',function(){
		return this._selectedIndex;
		},function(value){
		if(this._selectedIndex !=value){
			if(value > this._pageIds.length-1)
				throw "index out of bounds: "+value;
			this.changing=true;
			this._previousIndex=this._selectedIndex;
			this._selectedIndex=value;
			this._parent.applyController(this);
			this.event("fui_state_changed");
			this.changing=false;
		}
	});

	__getset(0,__proto,'selectedPage',function(){
		if (this._selectedIndex==-1)
			return null;
		else
		return this._pageNames[this._selectedIndex];
		},function(val){
		var i=this._pageNames.indexOf(val);
		if (i==-1)
			i=0;
		this.selectedIndex=i;
	});

	__getset(0,__proto,'previsousIndex',function(){
		return this._previousIndex;
	});

	__getset(0,__proto,'previousPage',function(){
		if (this._previousIndex==-1)
			return null;
		else
		return this._pageNames[this._previousIndex];
	});

	__getset(0,__proto,'selectedPageId',function(){
		if (this._selectedIndex==-1)
			return null;
		else
		return this._pageIds[this._selectedIndex];
		},function(val){
		var i=this._pageIds.indexOf(val);
		this.selectedIndex=i;
	});

	__getset(0,__proto,'previousPageId',function(){
		if(this._previousIndex==-1)
			return null;
		else
		return this._pageIds[this._previousIndex];
	});

	Controller._nextPageId=0;
	return Controller;
})(EventDispatcher)


//class fairygui.utils.PixelHitTest extends laya.utils.HitArea
var PixelHitTest=(function(_super){
	function PixelHitTest(data,offsetX,offsetY){
		this._data=null;
		this.offsetX=0;
		this.offsetY=0;
		this.scaleX=NaN;
		this.scaleY=NaN;
		PixelHitTest.__super.call(this);
		(offsetX===void 0)&& (offsetX=0);
		(offsetY===void 0)&& (offsetY=0);
		this._data=data;
		this.offsetX=offsetX;
		this.offsetY=offsetY;
		this.scaleX=1;
		this.scaleY=1;
	}

	__class(PixelHitTest,'fairygui.utils.PixelHitTest',_super);
	var __proto=PixelHitTest.prototype;
	__proto.isHit=function(x,y){
		x=Math.floor((x / this.scaleX-this.offsetX)*this._data.scale);
		y=Math.floor((y / this.scaleY-this.offsetY)*this._data.scale);
		if (x < 0 || y < 0 || x >=this._data.pixelWidth)
			return false;
		var pos=y *this._data.pixelWidth+x;
		var pos2=Math.floor(pos / 8);
		var pos3=pos % 8;
		if (pos2 >=0 && pos2 < this._data.pixels.length)
			return ((this._data.pixels[pos2] >> pos3)& 0x1)==1;
		else
		return false;
	}

	return PixelHitTest;
})(HitArea)


//class fairygui.action.ChangePageAction extends fairygui.action.ControllerAction
var ChangePageAction=(function(_super){
	function ChangePageAction(){
		this.objectId=null;
		this.controllerName=null;
		this.targetPage=null;
		ChangePageAction.__super.call(this);
	}

	__class(ChangePageAction,'fairygui.action.ChangePageAction',_super);
	var __proto=ChangePageAction.prototype;
	__proto.enter=function(controller){
		if(!this.controllerName)
			return;
		var gcom;
		if(this.objectId)
			gcom=controller.parent.getChildById(this.objectId);
		else
		gcom=controller.parent;
		if(gcom){
			var cc=gcom.getController(this.controllerName);
			if(cc && cc!=controller && !cc.changing)
				cc.selectedPageId=this.targetPage;
		}
	}

	__proto.setup=function(xml){
		_super.prototype.setup.call(this,xml);
		this.objectId=xml.getAttribute("objectId");
		this.controllerName=xml.getAttribute("controller");
		this.targetPage=xml.getAttribute("targetPage");
	}

	return ChangePageAction;
})(ControllerAction)


//class fairygui.action.PlayTransitionAction extends fairygui.action.ControllerAction
var PlayTransitionAction=(function(_super){
	function PlayTransitionAction(){
		this.transitionName=null;
		this.repeat=1;
		this.delay=0;
		this.stopOnExit=false;
		this._currentTransition=null;
		PlayTransitionAction.__super.call(this);
	}

	__class(PlayTransitionAction,'fairygui.action.PlayTransitionAction',_super);
	var __proto=PlayTransitionAction.prototype;
	__proto.enter=function(controller){
		var trans=controller.parent.getTransition(this.transitionName);
		if(trans){
			if(this._currentTransition && this._currentTransition.playing)
				trans.changeRepeat(this.repeat);
			else
			trans.play(null,this.repeat,this.delay);
			this._currentTransition=trans;
		}
	}

	__proto.leave=function(controller){
		if(this.stopOnExit && this._currentTransition){
			this._currentTransition.stop();
			this._currentTransition=null;
		}
	}

	__proto.setup=function(xml){
		_super.prototype.setup.call(this,xml);
		this.transitionName=xml.getAttribute("transition");
		var str;
		str=xml.getAttribute("repeat");
		if(str)
			this.repeat=parseInt(str);
		str=xml.getAttribute("delay");
		if(str)
			this.delay=parseFloat(str);
		this.stopOnExit=xml.getAttribute("stopOnExit")=="true";
	}

	return PlayTransitionAction;
})(ControllerAction)


//class fairygui.GTextField extends fairygui.GObject
var GTextField=(function(_super){
	function GTextField(){
		this._gearColor=null;
		GTextField.__super.call(this);
		this._gearColor=new GearColor(this);
	}

	__class(GTextField,'fairygui.GTextField',_super);
	var __proto=GTextField.prototype;
	Laya.imps(__proto,{"fairygui.IColorGear":true})
	__proto.handleControllerChanged=function(c){
		_super.prototype.handleControllerChanged.call(this,c);
		if(this._gearColor.controller==c)
			this._gearColor.apply();
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var str;
		str=xml.getAttribute("font");
		if (str)
			this.font=str;
		str=xml.getAttribute("fontSize");
		if (str)
			this.fontSize=parseInt(str);
		str=xml.getAttribute("color");
		if (str)
			this.color=str;
		str=xml.getAttribute("align");
		if (str)
			this.align=str;
		str=xml.getAttribute("vAlign");
		if (str)
			this.valign=str;
		str=xml.getAttribute("leading");
		if (str)
			this.leading=parseInt(str);
		else
		this.leading=3;
		str=xml.getAttribute("letterSpacing");
		if (str)
			this.letterSpacing=parseInt(str);
		this.ubbEnabled=xml.getAttribute("ubb")=="true";
		this.italic=xml.getAttribute("italic")=="true";
		this.bold=xml.getAttribute("bold")=="true";
		this.underline=xml.getAttribute("underline")=="true";
		this.singleLine=xml.getAttribute("singleLine")=="true";
		str=xml.getAttribute("strokeColor");
		if (str){
			this.strokeColor=str;
			str=xml.getAttribute("strokeSize");
			if(str)
				this.stroke=parseInt(str)+1;
			else
			this.stroke=2;
		}
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		var str=xml.getAttribute("text");
		if(str !=null && str.length > 0)
			this.text=str;
	}

	__getset(0,__proto,'color',function(){
		return null;
		},function(value){
	});

	__getset(0,__proto,'font',function(){
		return null;
		},function(value){
	});

	__getset(0,__proto,'leading',function(){
		return 0;
		},function(value){
	});

	__getset(0,__proto,'fontSize',function(){
		return 0;
		},function(value){
	});

	__getset(0,__proto,'bold',function(){
		return false;
		},function(value){
	});

	__getset(0,__proto,'letterSpacing',function(){
		return 0;
		},function(value){
	});

	__getset(0,__proto,'align',function(){
		return null;
		},function(value){
	});

	__getset(0,__proto,'valign',function(){
		return null;
		},function(value){
	});

	__getset(0,__proto,'italic',function(){
		return false;
		},function(value){
	});

	__getset(0,__proto,'underline',function(){
		return false;
		},function(value){
	});

	__getset(0,__proto,'singleLine',function(){
		return false;
		},function(value){
	});

	__getset(0,__proto,'stroke',function(){
		return 0;
		},function(value){
	});

	__getset(0,__proto,'strokeColor',function(){
		return null;
		},function(value){
	});

	__getset(0,__proto,'ubbEnabled',function(){
		return false;
		},function(value){
	});

	__getset(0,__proto,'textWidth',function(){
		return 0;
	});

	__getset(0,__proto,'gearColor',function(){
		return this._gearColor;
	});

	return GTextField;
})(GObject)


//class fairygui.GComponent extends fairygui.GObject
var GComponent=(function(_super){
	function GComponent(){
		this._sortingChildCount=0;
		this._opaque=false;
		this._applyingController=null;
		this._margin=null;
		this._trackBounds=false;
		this._boundsChanged=false;
		this._childrenRenderOrder=0;
		this._apexIndex=0;
		this._buildingDisplayList=false;
		this._children=null;
		this._controllers=null;
		this._transitions=null;
		this._container=null;
		this._scrollPane=null;
		this._alignOffset=null;
		GComponent.__super.call(this);
		this._children=[];
		this._controllers=[];
		this._transitions=[];
		this._margin=new Margin();
		this._alignOffset=new Point();
	}

	__class(GComponent,'fairygui.GComponent',_super);
	var __proto=GComponent.prototype;
	__proto.createDisplayObject=function(){
		_super.prototype.createDisplayObject.call(this);
		this._displayObject.mouseEnabled=true;
		this._displayObject.mouseThrough=true;
		this._container=this._displayObject;
	}

	__proto.dispose=function(){
		var i=0;
		var cnt=0;
		cnt=this._transitions.length;
		for (i=0;i < cnt;++i){
			var trans=this._transitions[i];
			trans.dispose();
		}
		cnt=this._controllers.length;
		for (i=0;i < cnt;++i){
			var cc=this._controllers[i];
			cc.dispose();
		}
		if (this.scrollPane !=null)
			this.scrollPane.dispose();
		cnt=this._children.length;
		for(i=cnt-1;i >=0;--i){
			var obj=this._children[i];
			obj.parent=null;
			obj.dispose();
		}
		this._boundsChanged=false;
		_super.prototype.dispose.call(this);
	}

	__proto.addChild=function(child){
		this.addChildAt(child,this._children.length);
		return child;
	}

	__proto.addChildAt=function(child,index){
		(index===void 0)&& (index=0);
		if(!child)
			throw "child is null";
		var numChildren=this._children.length;
		if(index >=0 && index <=numChildren){
			if(child.parent==this){
				this.setChildIndex(child,index);
			}
			else {
				child.removeFromParent();
				child.parent=this;
				var cnt=this._children.length;
				if(child.sortingOrder !=0){
					this._sortingChildCount++;
					index=this.getInsertPosForSortingChild(child);
				}
				else if(this._sortingChildCount > 0){
					if(index > (cnt-this._sortingChildCount))
						index=cnt-this._sortingChildCount;
				}
				if(index==cnt)
					this._children.push(child);
				else
				this._children.splice(index,0,child);
				this.childStateChanged(child);
				this.setBoundsChangedFlag();
			}
			return child;
		}
		else {
			throw "Invalid child index";
		}
	}

	__proto.getInsertPosForSortingChild=function(target){
		var cnt=this._children.length;
		var i=0;
		for(i=0;i < cnt;i++){
			var child=this._children[i];
			if(child==target)
				continue ;
			if(target.sortingOrder < child.sortingOrder)
				break ;
		}
		return i;
	}

	__proto.removeChild=function(child,dispose){
		(dispose===void 0)&& (dispose=false);
		var childIndex=this._children.indexOf(child);
		if(childIndex !=-1){
			this.removeChildAt(childIndex,dispose);
		}
		return child;
	}

	__proto.removeChildAt=function(index,dispose){
		(dispose===void 0)&& (dispose=false);
		if(index >=0 && index < this.numChildren){
			var child=this._children[index];
			child.parent=null;
			if(child.sortingOrder !=0)
				this._sortingChildCount--;
			this._children.splice(index,1);
			child.group=null;
			if(child.inContainer){
				this._container.removeChild(child.displayObject);
				if (this._childrenRenderOrder==2)
					Laya.timer.callLater(this,this.buildNativeDisplayList);
			}
			if(dispose)
				child.dispose();
			this.setBoundsChangedFlag();
			return child;
		}
		else {
			throw "Invalid child index";
		}
	}

	__proto.removeChildren=function(beginIndex,endIndex,dispose){
		(beginIndex===void 0)&& (beginIndex=0);
		(endIndex===void 0)&& (endIndex=-1);
		(dispose===void 0)&& (dispose=false);
		if(endIndex < 0 || endIndex >=this.numChildren)
			endIndex=this.numChildren-1;
		for(var i=beginIndex;i <=endIndex;++i)
		this.removeChildAt(beginIndex,dispose);
	}

	__proto.getChildAt=function(index){
		(index===void 0)&& (index=0);
		if(index >=0 && index < this.numChildren)
			return this._children[index];
		else
		throw "Invalid child index";
	}

	__proto.getChild=function(name){
		var cnt=this._children.length;
		for(var i=0;i < cnt;++i){
			if(this._children[i].name==name)
				return this._children[i];
		}
		return null;
	}

	__proto.getVisibleChild=function(name){
		var cnt=this._children.length;
		for(var i=0;i < cnt;++i){
			var child=this._children[i];
			if(child.internalVisible && child.internalVisible2 && child.name==name)
				return child;
		}
		return null;
	}

	__proto.getChildInGroup=function(name,group){
		var cnt=this._children.length;
		for(var i=0;i < cnt;++i){
			var child=this._children[i];
			if(child.group==group && child.name==name)
				return child;
		}
		return null;
	}

	__proto.getChildById=function(id){
		var cnt=this._children.length;
		for(var i=0;i < cnt;++i){
			if(this._children[i]._id==id)
				return this._children[i];
		}
		return null;
	}

	__proto.getChildIndex=function(child){
		return this._children.indexOf(child);
	}

	__proto.setChildIndex=function(child,index){
		(index===void 0)&& (index=0);
		var oldIndex=this._children.indexOf(child);
		if(oldIndex==-1)
			throw "Not a child of this container";
		if(child.sortingOrder !=0)
			return;
		var cnt=this._children.length;
		if(this._sortingChildCount > 0){
			if(index > (cnt-this._sortingChildCount-1))
				index=cnt-this._sortingChildCount-1;
		}
		this._setChildIndex(child,oldIndex,index);
	}

	__proto.setChildIndexBefore=function(child,index){
		var oldIndex=this._children.indexOf(child);
		if (oldIndex==-1)
			throw "Not a child of this container";
		if(child.sortingOrder!=0)
			return oldIndex;
		var cnt=this._children.length;
		if(this._sortingChildCount>0){
			if (index > (cnt-this._sortingChildCount-1))
				index=cnt-this._sortingChildCount-1;
		}
		if (oldIndex < index)
			return this._setChildIndex(child,oldIndex,index-1);
		else
		return this._setChildIndex(child,oldIndex,index);
	}

	__proto._setChildIndex=function(child,oldIndex,index){
		var cnt=this._children.length;
		if(index > cnt)
			index=cnt;
		if(oldIndex==index)
			return oldIndex;
		this._children.splice(oldIndex,1);
		this._children.splice(index,0,child);
		if(child.inContainer){
			var displayIndex=0;
			var g;
			var i=0;
			if (this._childrenRenderOrder==0){
				for(i=0;i<index;i++){
					g=this._children[i];
					if(g.inContainer)
						displayIndex++;
				}
				if(displayIndex==this._container.numChildren)
					displayIndex--;
				this._container.setChildIndex(child.displayObject,displayIndex);
			}
			else if (this._childrenRenderOrder==1){
				for (i=cnt-1;i > index;i--){
					g=this._children[i];
					if (g.inContainer)
						displayIndex++;
				}
				if(displayIndex==this._container.numChildren)
					displayIndex--;
				this._container.setChildIndex(child.displayObject,displayIndex);
			}
			else{
				Laya.timer.callLater(this,this.buildNativeDisplayList);
			}
			this.setBoundsChangedFlag();
		}
		return index;
	}

	__proto.swapChildren=function(child1,child2){
		var index1=this._children.indexOf(child1);
		var index2=this._children.indexOf(child2);
		if(index1==-1 || index2==-1)
			throw "Not a child of this container";
		this.swapChildrenAt(index1,index2);
	}

	__proto.swapChildrenAt=function(index1,index2){
		(index2===void 0)&& (index2=0);
		var child1=this._children[index1];
		var child2=this._children[index2];
		this.setChildIndex(child1,index2);
		this.setChildIndex(child2,index1);
	}

	__proto.isAncestorOf=function(child){
		if (child==null)
			return false;
		var p=child.parent;
		while(p){
			if(p==this)
				return true;
			p=p.parent;
		}
		return false;
	}

	__proto.addController=function(controller){
		this._controllers.push(controller);
		controller._parent=this;
		this.applyController(controller);
	}

	__proto.getControllerAt=function(index){
		return this._controllers[index];
	}

	__proto.getController=function(name){
		var cnt=this._controllers.length;
		for(var i=0;i < cnt;++i){
			var c=this._controllers[i];
			if(c.name==name)
				return c;
		}
		return null;
	}

	__proto.removeController=function(c){
		var index=this._controllers.indexOf(c);
		if(index==-1)
			throw new Error("controller not exists");
		c._parent=null;
		this._controllers.splice(index,1);
		var length=this._children.length;
		for(var i=0;i < length;i++){
			var child=this._children[i];
			child.handleControllerChanged(c);
		}
	}

	__proto.childStateChanged=function(child){
		if(this._buildingDisplayList)
			return;
		var cnt=this._children.length;
		if((child instanceof fairygui.GGroup )){
			for(var i=0;i < cnt;i++){
				var g=this._children[i];
				if(g.group==child)
					this.childStateChanged(g);
			}
			return;
		}
		if(!child.displayObject)
			return;
		if(child.internalVisible && child.displayObject!=this._displayObject.mask){
			if(!child.displayObject.parent){
				var index=0
				if (this._childrenRenderOrder==0){
					for (i=0;i < cnt;i++){
						g=this._children[i];
						if (g==child)
							break ;
						if (g.displayObject !=null && g.displayObject.parent !=null)
							index++;
					}
					this._container.addChildAt(child.displayObject,index);
				}
				else if (this._childrenRenderOrder==1){
					for (i=cnt-1;i >=0;i--){
						g=this._children[i];
						if (g==child)
							break ;
						if (g.displayObject !=null && g.displayObject.parent !=null)
							index++;
					}
					this._container.addChildAt(child.displayObject,index);
				}
				else{
					this._container.addChild(child.displayObject);
					Laya.timer.callLater(this,this.buildNativeDisplayList);
				}
			}
		}
		else {
			if(child.displayObject.parent){
				this._container.removeChild(child.displayObject);
				if (this._childrenRenderOrder==2)
					Laya.timer.callLater(this,this.buildNativeDisplayList);
			}
		}
	}

	__proto.buildNativeDisplayList=function(){
		var cnt=this._children.length;
		if (cnt==0)
			return;
		var i=0;
		var child;
		switch (this._childrenRenderOrder){
			case 0:{
					for (i=0;i < cnt;i++){
						child=this._children[i];
						if (child.displayObject !=null && child.internalVisible)
							this._container.addChild(child.displayObject);
					}
				}
				break ;
			case 1:{
					for (i=cnt-1;i >=0;i--){
						child=this._children[i];
						if (child.displayObject !=null && child.internalVisible)
							this._container.addChild(child.displayObject);
					}
				}
				break ;
			case 2:{
					for (i=0;i < this._apexIndex;i++){
						child=this._children[i];
						if (child.displayObject !=null && child.internalVisible)
							this._container.addChild(child.displayObject);
					}
					for (i=cnt-1;i >=this._apexIndex;i--){
						child=this._children[i];
						if (child.displayObject !=null && child.internalVisible)
							this._container.addChild(child.displayObject);
					}
				}
				break ;
			}
	}

	__proto.applyController=function(c){
		this._applyingController=c;
		var child;
		var length=this._children.length;
		for(var i=0;i < length;i++){
			child=this._children[i];
			child.handleControllerChanged(c);
		}
		this._applyingController=null;
		c.runActions();
	}

	__proto.applyAllControllers=function(){
		var cnt=this._controllers.length;
		for(var i=0;i < cnt;++i){
			this.applyController(this._controllers[i]);
		}
	}

	__proto.adjustRadioGroupDepth=function(obj,c){
		var cnt=this._children.length;
		var i=NaN;
		var child;
		var myIndex=-1,maxIndex=-1;
		for(i=0;i < cnt;i++){
			child=this._children[i];
			if(child==obj){
				myIndex=i;
			}
			else if(((child instanceof fairygui.GButton ))
			&& (child).relatedController==c){
				if(i > maxIndex)
					maxIndex=i;
			}
		}
		if(myIndex < maxIndex){
			if(this._applyingController!=null)
				this._children[maxIndex].handleControllerChanged(this._applyingController);
			this.swapChildrenAt(myIndex,maxIndex);
		}
	}

	__proto.getTransitionAt=function(index){
		return this._transitions[index];
	}

	__proto.getTransition=function(transName){
		var cnt=this._transitions.length;
		for(var i=0;i < cnt;++i){
			var trans=this._transitions[i];
			if(trans.name==transName)
				return trans;
		}
		return null;
	}

	__proto.isChildInView=function(child){
		if(this._displayObject.scrollRect !=null){
			return child.x+child.width >=0 && child.x <=this.width
			&& child.y+child.height >=0 && child.y <=this.height;
		}
		else if(this._scrollPane !=null){
			return this._scrollPane.isChildInView(child);
		}
		else
		return true;
	}

	__proto.getFirstChildInView=function(){
		var cnt=this._children.length;
		for(var i=0;i < cnt;++i){
			var child=this._children[i];
			if(this.isChildInView(child))
				return i;
		}
		return-1;
	}

	__proto.updateHitArea=function(){
		if((this._displayObject.hitArea instanceof fairygui.utils.PixelHitTest )){
			var hitTest=(this._displayObject.hitArea);
			if(this.sourceWidth!=0)
				hitTest.scaleX=this.width/this.sourceWidth;
			if(this.sourceHeight!=0)
				hitTest.scaleY=this.height/this.sourceHeight;
		}
		else{
			if(this._displayObject.hitArea==null)
				this._displayObject.hitArea=new Rectangle();
			this._displayObject.hitArea.setTo(0,0,this.width,this.height);
		}
	}

	__proto.updateMask=function(){
		var rect=this._displayObject.scrollRect;
		if(rect==null)
			rect=new Rectangle();
		rect.x=this._margin.left;
		rect.y=this._margin.top;
		rect.width=this.width-this._margin.right;
		rect.height=this.height-this._margin.bottom;
		this._displayObject.scrollRect=rect;
	}

	__proto.setupScroll=function(scrollBarMargin,scroll,scrollBarDisplay,flags,vtScrollBarRes,hzScrollBarRes,headerRes,footerRes){
		if (this._displayObject==this._container){
			this._container=new Sprite();
			this._displayObject.addChild(this._container);
		}
		this._scrollPane=new ScrollPane(this,scroll,scrollBarMargin,scrollBarDisplay,flags,
		vtScrollBarRes,hzScrollBarRes,headerRes,footerRes);
	}

	__proto.setupOverflow=function(overflow){
		if(overflow==1){
			if (this._displayObject==this._container){
				this._container=new Sprite();
				this._displayObject.addChild(this._container);
			}
			this.updateMask();
			this._container.pos(this._margin.left,this._margin.top);
		}
		else if(this._margin.left !=0 || this._margin.top !=0){
			if (this._displayObject==this._container){
				this._container=new Sprite();
				this._displayObject.addChild(this._container);
			}
			this._container.pos(this._margin.left,this._margin.top);
		}
	}

	__proto.handleSizeChanged=function(){
		_super.prototype.handleSizeChanged.call(this);
		if(this._scrollPane)
			this._scrollPane.onOwnerSizeChanged();
		else if(this._displayObject.scrollRect !=null)
		this.updateMask();
		if(this._displayObject.hitArea!=null)
			this.updateHitArea();
	}

	__proto.handleGrayedChanged=function(){
		var c=this.getController("grayed");
		if(c !=null){
			c.selectedIndex=this.grayed ? 1 :0;
			return;
		};
		var v=this.grayed;
		var cnt=this._children.length;
		for(var i=0;i < cnt;++i){
			this._children[i].grayed=v;
		}
	}

	__proto.handleControllerChanged=function(c){
		_super.prototype.handleControllerChanged.call(this,c);
		if (this._scrollPane !=null)
			this._scrollPane.handleControllerChanged(c);
	}

	__proto.setBoundsChangedFlag=function(){
		if (!this._scrollPane && !this._trackBounds)
			return;
		if (!this._boundsChanged){
			this._boundsChanged=true;
			Laya.timer.callLater(this,this.__render);
		}
	}

	__proto.__render=function(){
		if (this._boundsChanged){
			var i1=0;
			var len=this._children.length;
			var child
			for(i1=0;i1 < len;i1++){
				child=this._children[i1];
				child.ensureSizeCorrect();
			}
			this.updateBounds();
		}
	}

	__proto.ensureBoundsCorrect=function(){
		var i1=0;
		var len=this._children.length;
		var child
		for(i1=0;i1 < len;i1++){
			child=this._children[i1];
			child.ensureSizeCorrect();
		}
		if (this._boundsChanged)
			this.updateBounds();
	}

	__proto.updateBounds=function(){
		var ax=0,ay=0,aw=0,ah=0;
		var len=this._children.length;
		if(len > 0){
			ax=Number.POSITIVE_INFINITY,ay=Number.POSITIVE_INFINITY;
			var ar=Number.NEGATIVE_INFINITY,ab=Number.NEGATIVE_INFINITY;
			var tmp=0;
			var i1=0;
			for(i1=0;i1 < len;i1++){
				var child=this._children[i1];
				tmp=child.x;
				if(tmp < ax)
					ax=tmp;
				tmp=child.y;
				if(tmp < ay)
					ay=tmp;
				tmp=child.x+child.actualWidth;
				if(tmp > ar)
					ar=tmp;
				tmp=child.y+child.actualHeight;
				if(tmp > ab)
					ab=tmp;
			}
			aw=ar-ax;
			ah=ab-ay;
		}
		this.setBounds(ax,ay,aw,ah);
	}

	__proto.setBounds=function(ax,ay,aw,ah){
		this._boundsChanged=false;
		if (this._scrollPane)
			this._scrollPane.setContentSize(Math.round(ax+aw),Math.round(ay+ah));
	}

	__proto.getSnappingPosition=function(xValue,yValue,resultPoint){
		if(!resultPoint)
			resultPoint=new Point();
		var cnt=this._children.length;
		if(cnt==0){
			resultPoint.x=0;
			resultPoint.y=0;
			return resultPoint;
		}
		this.ensureBoundsCorrect();
		var obj=null;
		var prev=null;
		var i=0;
		if(yValue !=0){
			for(;i < cnt;i++){
				obj=this._children[i];
				if(yValue < obj.y){
					if(i==0){
						yValue=0;
						break ;
					}
					else {
						prev=this._children[i-1];
						if(yValue < prev.y+prev.actualHeight / 2)
							yValue=prev.y;
						else
						yValue=obj.y;
						break ;
					}
				}
			}
			if(i==cnt)
				yValue=obj.y;
		}
		if(xValue !=0){
			if(i > 0)
				i--;
			for(;i < cnt;i++){
				obj=this._children[i];
				if(xValue < obj.x){
					if(i==0){
						xValue=0;
						break ;
					}
					else {
						prev=this._children[i-1];
						if(xValue < prev.x+prev.actualWidth / 2)
							xValue=prev.x;
						else
						xValue=obj.x;
						break ;
					}
				}
			}
			if(i==cnt)
				xValue=obj.x;
		}
		resultPoint.x=xValue;
		resultPoint.y=yValue;
		return resultPoint;
	}

	__proto.childSortingOrderChanged=function(child,oldValue,newValue){
		(newValue===void 0)&& (newValue=0);
		if (newValue==0){
			this._sortingChildCount--;
			this.setChildIndex(child,this._children.length);
		}
		else {
			if (oldValue==0)
				this._sortingChildCount++;
			var oldIndex=this._children.indexOf(child);
			var index=this.getInsertPosForSortingChild(child);
			if (oldIndex < index)
				this._setChildIndex(child,oldIndex,index-1);
			else
			this._setChildIndex(child,oldIndex,index);
		}
	}

	__proto.constructFromResource=function(){
		this.constructFromResource2(null,0);
	}

	__proto.constructFromResource2=function(objectPool,poolIndex){
		var xml=this.packageItem.owner.getItemAsset(this.packageItem);
		this._underConstruct=true;
		var str;
		var arr;
		str=xml.getAttribute("size");
		arr=str.split(",");
		this.sourceWidth=parseInt(arr[0]);
		this.sourceHeight=parseInt(arr[1]);
		this.initWidth=this.sourceWidth;
		this.initHeight=this.sourceHeight;
		this.setSize(this.sourceWidth,this.sourceHeight);
		str=xml.getAttribute("restrictSize");
		if(str){
			arr=str.split(",");
			this.minWidth=parseInt(arr[0]);
			this.maxWidth=parseInt(arr[1]);
			this.minHeight=parseInt(arr[2]);
			this.maxHeight=parseInt(arr[3]);
		}
		str=xml.getAttribute("pivot");
		if(str){
			arr=str.split(",");
			str=xml.getAttribute("anchor");
			this.internalSetPivot(parseFloat(arr[0]),parseFloat(arr[1]),str=="true");
		}
		str=xml.getAttribute("opaque");
		this.opaque=str !="false";
		str=xml.getAttribute("hitTest");
		if(str){
			arr=str.split(",");
			var hitTestData=this.packageItem.owner.getPixelHitTestData(arr[0]);
			if (hitTestData !=null){
				this._displayObject.hitArea=new PixelHitTest(hitTestData,parseInt(arr[1]),parseInt(arr[2]));
				this._displayObject.mouseThrough=false;
				this._displayObject.hitTestPrior=true;
			}
		};
		var overflow=0;
		str=xml.getAttribute("overflow");
		if (str)
			overflow=OverflowType.parse(str);
		else
		overflow=0;
		str=xml.getAttribute("margin");
		if(str)
			this._margin.parse(str);
		if(overflow==2){
			var scroll=0;
			str=xml.getAttribute("scroll");
			if (str)
				scroll=ScrollType.parse(str);
			else
			scroll=1;
			var scrollBarDisplay=0;
			str=xml.getAttribute("scrollBar");
			if (str)
				scrollBarDisplay=ScrollBarDisplayType.parse(str);
			else
			scrollBarDisplay=0;
			var scrollBarFlags=NaN;
			str=xml.getAttribute("scrollBarFlags");
			if(str)
				scrollBarFlags=parseInt(str);
			else
			scrollBarFlags=0;
			var scrollBarMargin=new Margin();
			str=xml.getAttribute("scrollBarMargin");
			if(str)
				scrollBarMargin.parse(str);
			var vtScrollBarRes;
			var hzScrollBarRes;
			str=xml.getAttribute("scrollBarRes");
			if(str){
				arr=str.split(",");
				vtScrollBarRes=arr[0];
				hzScrollBarRes=arr[1];
			};
			var headerRes;
			var footerRes;
			str=xml.getAttribute('ptrRes');
			if(str){
				arr=str.split(",");
				headerRes=arr[0];
				footerRes=arr[1];
			}
			this.setupScroll(scrollBarMargin,scroll,scrollBarDisplay,scrollBarFlags,
			vtScrollBarRes,hzScrollBarRes,headerRes,footerRes);
		}
		else
		this.setupOverflow(overflow);
		this._buildingDisplayList=true;
		var col=xml.childNodes;
		var length1=0;
		if(col)
			length1=col.length;
		var i=0;
		var controller;
		for(i=0;i < length1;i++){
			var cxml=col[i];
			if(cxml.nodeName=="controller"){
				controller=new Controller();
				this._controllers.push(controller);
				controller._parent=this;
				controller.setup(cxml);
			}
		};
		var child;
		var displayList=this.packageItem.displayList;
		var childCount=displayList.length;
		for (i=0;i < childCount;i++){
			var di=displayList[i];
			if (objectPool !=null){
				child=objectPool[poolIndex+i];
			}
			else if (di.packageItem){
				child=UIObjectFactory.newObject(di.packageItem);
				child.packageItem=di.packageItem;
				child.constructFromResource();
			}
			else
			child=UIObjectFactory.newObject2(di.type);
			child._underConstruct=true;
			child.setup_beforeAdd(di.desc);
			child.parent=this;
			this._children.push(child);
		}
		this.relations.setup(xml);
		for (i=0;i < childCount;i++)
		this._children[i].relations.setup(displayList[i].desc);
		for (i=0;i < childCount;i++){
			child=this._children[i];
			child.setup_afterAdd(displayList[i].desc);
			child._underConstruct=false;
		}
		str=xml.getAttribute("mask");
		if(str)
			this.mask=this.getChildById(str).displayObject;
		var trans;
		for(i=0;i < length1;i++){
			cxml=col[i];
			if(cxml.nodeName=="transition"){
				trans=new Transition(this);
				this._transitions.push(trans);
				trans.setup(cxml);
			}
		}
		if(this._transitions.length>0){
			this.displayObject.on("display",this,this.___added);
			this.displayObject.on("undisplay",this,this.___removed);
		}
		this.applyAllControllers();
		this._buildingDisplayList=false;
		this._underConstruct=false;
		this.buildNativeDisplayList();
		this.setBoundsChangedFlag();
		this.constructFromXML(xml);
	}

	__proto.constructFromXML=function(xml){}
	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		var str;
		if(this.scrollPane){
			str=xml.getAttribute("pageController");
			if(str)
				this.scrollPane.pageController=this.parent.getController(str);
		}
		str=xml.getAttribute("controller");
		if(str){
			var arr=str.split(",");
			for(var i=0;i<arr.length;i+=2){
				var cc=this.getController(arr[i]);
				if(cc)
					cc.selectedPageId=arr[i+1];
			}
		}
	}

	__proto.___added=function(){
		var cnt=this._transitions.length;
		for(var i=0;i < cnt;++i){
			var trans=this._transitions[i];
			if(trans.autoPlay)
				trans.play(null,trans.autoPlayRepeat,trans.autoPlayDelay);
		}
	}

	__proto.___removed=function(){
		var cnt=this._transitions.length;
		for(var i=0;i < cnt;++i){
			this._transitions[i].OnOwnerRemovedFromStage();
		}
	}

	__getset(0,__proto,'numChildren',function(){
		return this._children.length;
	});

	__getset(0,__proto,'displayListContainer',function(){
		return this._container;
	});

	__getset(0,__proto,'childrenRenderOrder',function(){
		return this._childrenRenderOrder;
		},function(value){
		if (this._childrenRenderOrder !=value){
			this._childrenRenderOrder=value;
			this.buildNativeDisplayList();
		}
	});

	__getset(0,__proto,'opaque',function(){
		return this._displayObject.hitArea!=null;
		},function(value){
		if (value){
			this.updateHitArea();
			this._displayObject.mouseThrough=false;
		}
		else{
			this._displayObject.hitArea=null;
			this._displayObject.mouseThrough=true;
		}
	});

	__getset(0,__proto,'controllers',function(){
		return this._controllers;
	});

	__getset(0,__proto,'scrollPane',function(){
		return this._scrollPane;
	});

	__getset(0,__proto,'margin',function(){
		return this._margin;
		},function(value){
		this._margin.copy(value);
		if(this._displayObject.scrollRect!=null){
			this._container.pos(this._margin.left+this._alignOffset.x,this._margin.top+this._alignOffset.y);
		}
		this.handleSizeChanged();
	});

	__getset(0,__proto,'apexIndex',function(){
		return this._apexIndex;
		},function(value){
		if (this._apexIndex !=value){
			this._apexIndex=value;
			if (this._childrenRenderOrder==2)
				this.buildNativeDisplayList();
		}
	});

	__getset(0,__proto,'mask',function(){
		return this._displayObject.mask;
		},function(value){
		this._displayObject.mask=value;
	});

	__getset(0,__proto,'viewWidth',function(){
		if (this._scrollPane !=null)
			return this._scrollPane.viewWidth;
		else
		return this.width-this._margin.left-this._margin.right;
		},function(value){
		if (this._scrollPane !=null)
			this._scrollPane.viewWidth=value;
		else
		this.width=value+this._margin.left+this._margin.right;
	});

	__getset(0,__proto,'viewHeight',function(){
		if (this._scrollPane !=null)
			return this._scrollPane.viewHeight;
		else
		return this.height-this._margin.top-this._margin.bottom;
		},function(value){
		if (this._scrollPane !=null)
			this._scrollPane.viewHeight=value;
		else
		this.height=value+this._margin.top+this._margin.bottom;
	});

	return GComponent;
})(GObject)


//class fairygui.GearAnimation extends fairygui.GearBase
var GearAnimation=(function(_super){
	var GearAnimationValue;
	function GearAnimation(owner){
		this._storage=null;
		this._default=null;
		GearAnimation.__super.call(this,owner);
	}

	__class(GearAnimation,'fairygui.GearAnimation',_super);
	var __proto=GearAnimation.prototype;
	__proto.init=function(){
		this._default=new GearAnimationValue((this._owner).playing,
		(this._owner).frame);
		this._storage={};
	}

	__proto.addStatus=function(pageId,value){
		if(value=="-" || value.length==0)
			return;
		var gv;
		if (pageId==null)
			gv=this._default;
		else {
			gv=new GearAnimationValue();
			this._storage[pageId]=gv;
		};
		var arr=value.split(",");
		gv.frame=parseInt(arr[0]);
		gv.playing=arr[1]=="p";
	}

	__proto.apply=function(){
		this._owner._gearLocked=true;
		var gv=this._storage[this._controller.selectedPageId];
		if (!gv)
			gv=this._default;
		(this._owner).frame=gv.frame;
		(this._owner).playing=gv.playing;
		this._owner._gearLocked=false;
	}

	__proto.updateState=function(){
		var mc=(this._owner);
		var gv=this._storage[this._controller.selectedPageId];
		if(!gv){
			gv=new GearAnimationValue();
			this._storage[this._controller.selectedPageId]=gv;
		}
		gv.frame=mc.frame;
		gv.playing=mc.playing;
	}

	GearAnimation.__init$=function(){
		//class GearAnimationValue
		GearAnimationValue=(function(){
			function GearAnimationValue(playing,frame){
				this.playing=false;
				this.frame=NaN;
				(playing===void 0)&& (playing=true);
				(frame===void 0)&& (frame=0);
				this.playing=playing;
				this.frame=frame;
			}
			__class(GearAnimationValue,'');
			return GearAnimationValue;
		})()
	}

	return GearAnimation;
})(GearBase)


//class fairygui.GearColor extends fairygui.GearBase
var GearColor=(function(_super){
	var GearColorValue;
	function GearColor(owner){
		this._storage=null;
		this._default=null;
		GearColor.__super.call(this,owner);
	}

	__class(GearColor,'fairygui.GearColor',_super);
	var __proto=GearColor.prototype;
	__proto.init=function(){
		if(this._owner["strokeColor"]!=undefined)
			this._default=new GearColorValue(this._owner["color"],this._owner["strokeColor"]);
		else
		this._default=new GearColorValue(this._owner["color"],null);
		this._storage={};
	}

	__proto.addStatus=function(pageId,value){
		if(value=="-"|| value.length==0)
			return;
		var pos=value.indexOf(",");
		var col1;
		var col2;
		if(pos==-1){
			col1=value;
			col2=null;
		}
		else{
			col1=value.substr(0,pos);
			col2=value.substr(pos+1);
		}
		if(pageId==null){
			this._default.color=col1;
			this._default.strokeColor=col2;
		}
		else
		this._storage[pageId]=new GearColorValue(col1,col2);
	}

	__proto.apply=function(){
		this._owner._gearLocked=true;
		var gv=this._storage[this._controller.selectedPageId];
		if(!gv)
			gv=this._default;
		(this._owner).color=gv.color;
		if(this._owner["strokeColor"]!=undefined && gv.strokeColor!=null)
			this._owner["strokeColor"]=gv.strokeColor;
		this._owner._gearLocked=false;
	}

	__proto.updateState=function(){
		var gv=this._storage[this._controller.selectedPageId];
		if(!gv){
			gv=new GearColorValue(null,null);
			this._storage[this._controller.selectedPageId]=gv;
		}
		gv.color=(this._owner).color;
		if(this._owner["strokeColor"]!=undefined)
			gv.strokeColor=this._owner["strokeColor"];
	}

	GearColor.__init$=function(){
		//class GearColorValue
		GearColorValue=(function(){
			function GearColorValue(color,strokeColor){
				this.color=null;
				this.strokeColor=null;
				this.color=color;
				this.strokeColor=strokeColor;
			}
			__class(GearColorValue,'');
			return GearColorValue;
		})()
	}

	return GearColor;
})(GearBase)


//class fairygui.GearDisplay extends fairygui.GearBase
var GearDisplay=(function(_super){
	function GearDisplay(owner){
		this.pages=null;
		this._visible=0;
		GearDisplay.__super.call(this,owner);
		this._displayLockToken=1;
	}

	__class(GearDisplay,'fairygui.GearDisplay',_super);
	var __proto=GearDisplay.prototype;
	__proto.init=function(){
		this.pages=null;
	}

	__proto.addLock=function(){
		this._visible++;
		return this._displayLockToken;
	}

	__proto.releaseLock=function(token){
		if(token==this._displayLockToken)
			this._visible--;
	}

	__proto.apply=function(){
		this._displayLockToken++;
		if(this._displayLockToken<=0)
			this._displayLockToken=1;
		if(this.pages==null || this.pages.length==0
			|| this.pages.indexOf(this._controller.selectedPageId)!=-1)
		this._visible=1;
		else
		this._visible=0;
	}

	__getset(0,__proto,'connected',function(){
		return this._controller==null || this._visible>0;
	});

	return GearDisplay;
})(GearBase)


//class fairygui.GearIcon extends fairygui.GearBase
var GearIcon=(function(_super){
	function GearIcon(owner){
		this._storage=null;
		this._default=null;
		GearIcon.__super.call(this,owner);
	}

	__class(GearIcon,'fairygui.GearIcon',_super);
	var __proto=GearIcon.prototype;
	__proto.init=function(){
		this._default=this._owner.icon;
		this._storage={};
	}

	__proto.addStatus=function(pageId,value){
		if(pageId==null)
			this._default=value;
		else
		this._storage[pageId]=value;
	}

	__proto.apply=function(){
		this._owner._gearLocked=true;
		var data=this._storage[this._controller.selectedPageId];
		if(data!=undefined)
			this._owner.icon=String(data);
		else
		this._owner.icon=this._default;
		this._owner._gearLocked=false;
	}

	__proto.updateState=function(){
		this._storage[this._controller.selectedPageId]=this._owner.icon;
	}

	return GearIcon;
})(GearBase)


//class fairygui.GearLook extends fairygui.GearBase
var GearLook=(function(_super){
	var GearLookValue;
	function GearLook(owner){
		this.tweener=null;
		this._storage=null;
		this._default=null;
		this._tweenValue=null;
		this._tweenTarget=null;
		GearLook.__super.call(this,owner);
	}

	__class(GearLook,'fairygui.GearLook',_super);
	var __proto=GearLook.prototype;
	__proto.init=function(){
		this._default=new GearLookValue(this._owner.alpha,this._owner.rotation,this._owner.grayed,this._owner.touchable);
		this._storage={};
	}

	__proto.addStatus=function(pageId,value){
		if(value=="-"|| value.length==0)
			return;
		var arr=value.split(",");
		var gv;
		if(pageId==null)
			gv=this._default;
		else {
			gv=new GearLookValue();
			this._storage[pageId]=gv;
		}
		gv.alpha=parseFloat(arr[0]);
		gv.rotation=parseInt(arr[1]);
		gv.grayed=arr[2]=="1" ? true :false;
		if(arr.length<4)
			gv.touchable=this._owner.touchable;
		else
		gv.touchable=arr[3]=="1"?true:false;
	}

	__proto.apply=function(){
		var gv=this._storage[this._controller.selectedPageId];
		if(!gv)
			gv=this._default;
		if(this._tween && !UIPackage._constructing && !GearBase.disableAllTweenEffect){
			this._owner._gearLocked=true;
			this._owner.grayed=gv.grayed;
			this._owner.touchable=gv.touchable;
			this._owner._gearLocked=false;
			if (this.tweener !=null){
				if (this._tweenTarget.alpha !=gv.alpha || this._tweenTarget.rotation !=gv.rotation){
					this.tweener.complete();
					this.tweener=null;
				}
				else
				return;
			};
			var a=gv.alpha !=this._owner.alpha;
			var b=gv.rotation !=this._owner.rotation;
			if(a || b){
				if(this._owner.checkGearController(0,this._controller))
					this._displayLockToken=this._owner.addDisplayLock();
				this._tweenTarget=gv;
				if(this._tweenValue==null)
					this._tweenValue=new Point();
				this._tweenValue.x=this._owner.alpha;
				this._tweenValue.y=this._owner.rotation;
				this.tweener=Tween.to(this._tweenValue,
				{x:gv.alpha,y:gv.rotation },
				this._tweenTime*1000,
				this._easeType,
				Handler.create(this,this.__tweenComplete),
				this._delay*1000);
				this.tweener.update=Handler.create(this,this.__tweenUpdate,[a,b],false);
			}
		}
		else {
			this._owner._gearLocked=true;
			this._owner.grayed=gv.grayed;
			this._owner.alpha=gv.alpha;
			this._owner.rotation=gv.rotation;
			this._owner.touchable=gv.touchable;
			this._owner._gearLocked=false;
		}
	}

	__proto.__tweenUpdate=function(a,b){
		this._owner._gearLocked=true;
		if(a)
			this._owner.alpha=this._tweenValue.x;
		if(b)
			this._owner.rotation=this._tweenValue.y;
		this._owner._gearLocked=false;
	}

	__proto.__tweenComplete=function(){
		if(this._displayLockToken!=0){
			this._owner.releaseDisplayLock(this._displayLockToken);
			this._displayLockToken=0;
		}
		this.tweener=null;
		this._owner.displayObject.event("fui_gear_stop");
	}

	__proto.updateState=function(){
		var gv=this._storage[this._controller.selectedPageId];
		if(!gv){
			gv=new GearLookValue();
			this._storage[this._controller.selectedPageId]=gv;
		}
		gv.alpha=this._owner.alpha;
		gv.rotation=this._owner.rotation;
		gv.grayed=this._owner.grayed;
		gv.touchable=this._owner.touchable;
	}

	GearLook.__init$=function(){
		//class GearLookValue
		GearLookValue=(function(){
			function GearLookValue(alpha,rotation,grayed,touchable){
				this.alpha=NaN;
				this.rotation=NaN;
				this.grayed=false;
				this.touchable=false;
				(alpha===void 0)&& (alpha=0);
				(rotation===void 0)&& (rotation=0);
				(grayed===void 0)&& (grayed=false);
				(touchable===void 0)&& (touchable=true);
				this.alpha=alpha;
				this.rotation=rotation;
				this.grayed=grayed;
				this.touchable=touchable;
			}
			__class(GearLookValue,'');
			return GearLookValue;
		})()
	}

	return GearLook;
})(GearBase)


//class fairygui.GGraph extends fairygui.GObject
var GGraph=(function(_super){
	function GGraph(){
		this._type=NaN;
		this._lineSize=NaN;
		this._lineColor=null;
		this._fillColor=null;
		this._corner=0;
		GGraph.__super.call(this);
		this._type=0;
		this._lineSize=1;
		this._lineColor="#000000"
		this._fillColor="#FFFFFF";
		this._corner=0;
	}

	__class(GGraph,'fairygui.GGraph',_super);
	var __proto=GGraph.prototype;
	Laya.imps(__proto,{"fairygui.IColorGear":true})
	__proto.drawRect=function(lineSize,lineColor,fillColor){
		this._type=1;
		this._lineSize=lineSize;
		this._lineColor=lineColor;
		this._fillColor=fillColor;
		this.drawCommon();
	}

	__proto.drawEllipse=function(lineSize,lineColor,fillColor){
		this._type=2;
		this._lineSize=lineSize;
		this._lineColor=lineColor;
		this._fillColor=fillColor;
		this.drawCommon();
	}

	__proto.drawCommon=function(){
		this._displayObject.mouseEnabled=this.touchable;
		var gr=this._displayObject.graphics;
		gr.clear();
		var w=this.width;
		var h=this.height;
		if(w==0 || h==0)
			return;
		var fillColor=this._fillColor;
		var lineColor=this._lineColor;
		if(Render.isWebGL && ToolSet.startsWith(fillColor,"rgba")){
			var arr=fillColor.substring(5,fillColor.lastIndexOf(")")).split(",");
			var a=parseFloat(arr[3]);
			if(a==0)
				fillColor=null;
			else {
				fillColor=Utils.toHexColor((parseInt(arr[0])<<16)+(parseInt(arr[1])<<8)+parseInt(arr[2]));
				this.alpha=a;
			}
		}
		if (this._type==1){
			if(this._corner > 0){
				var fixCorner=w<h?w:h;
				if(2*this._corner > fixCorner)
					fixCorner=parseInt(fixCorner/2+"");
				var path=[
				["moveTo",fixCorner,0],
				["arcTo",w,0,w,h,fixCorner],
				["arcTo",w,h,0,h,fixCorner],
				["arcTo",0,h,0,0,fixCorner],
				["arcTo",0,0,w,0,fixCorner],
				["closePath"]];
				gr.drawPath(0,0,path,{fillStyle:fillColor},this._lineSize>0?{strokeStyle:lineColor,lineWidth:this._lineSize}:null);
			}else
			gr.drawRect(0,0,w,h,fillColor,this._lineSize>0?lineColor:null,this._lineSize);
		}else
		gr.drawCircle(w/2,h/2,w/2,fillColor,this._lineSize>0?lineColor:null,this._lineSize);
		this._displayObject.repaint();
	}

	__proto.replaceMe=function(target){
		if (!this._parent)
			throw "parent not set";
		target.name=this.name;
		target.alpha=this.alpha;
		target.rotation=this.rotation;
		target.visible=this.visible;
		target.touchable=this.touchable;
		target.grayed=this.grayed;
		target.setXY(this.x,this.y);
		target.setSize(this.width,this.height);
		var index=this._parent.getChildIndex(this);
		this._parent.addChildAt(target,index);
		target.relations.copyFrom(this.relations);
		this._parent.removeChild(this,true);
	}

	__proto.addBeforeMe=function(target){
		if (this._parent==null)
			throw "parent not set";
		var index=this._parent.getChildIndex(this);
		this._parent.addChildAt(target,index);
	}

	__proto.addAfterMe=function(target){
		if (this._parent==null)
			throw "parent not set";
		var index=this._parent.getChildIndex(this);
		index++;
		this._parent.addChildAt(target,index);
	}

	__proto.setNativeObject=function(obj){
		this._type=0;
		this._displayObject.mouseEnabled=this.touchable;
		this._displayObject.graphics.clear();
		this._displayObject.addChild(obj);
	}

	__proto.createDisplayObject=function(){
		_super.prototype.createDisplayObject.call(this);
		this._displayObject.mouseEnabled=false;
	}

	__proto.handleSizeChanged=function(){
		_super.prototype.handleSizeChanged.call(this);
		if(this._type !=0)
			this.drawCommon();
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var type=xml.getAttribute("type");
		if (type && type!="empty"){
			var str;
			str=xml.getAttribute("lineSize");
			if (str)
				this._lineSize=parseInt(str);
			str=xml.getAttribute("lineColor");
			if (str){
				var c=ToolSet.convertFromHtmlColor(str,true);
				var a=((c >> 24)& 0xFF)/ 0xFF;
				if(a!=1)
					this._lineColor="rgba("+((c>>16)& 0xFF)+","+((c>>8)& 0xFF)+","+(c & 0xFF)+","+a+")";
				else
				this._lineColor=Utils.toHexColor(c & 0xFFFFFF);
			}
			str=xml.getAttribute("fillColor");
			if (str){
				c=ToolSet.convertFromHtmlColor(str,true);
				a=((c >> 24)& 0xFF)/ 0xFF;
				if(a!=1)
					this._fillColor="rgba("+((c>>16)& 0xFF)+","+((c>>8)& 0xFF)+","+(c & 0xFF)+","+a+")";
				else
				this._fillColor=Utils.toHexColor(c & 0xFFFFFF);
			}
			str=xml.getAttribute("corner");
			if (str){
				this._corner=parseInt(str);
			}
			if (type=="rect")
				this._type=1;
			else
			this._type=2;
			this.drawCommon();
		}
	}

	__getset(0,__proto,'color',function(){
		return this._fillColor;
		},function(value){
		this._fillColor=value;
		if(this._type!=0)
			this.drawCommon();
	});

	return GGraph;
})(GObject)


//class fairygui.GGroup extends fairygui.GObject
var GGroup=(function(_super){
	function GGroup(){
		this._layout=0;
		this._lineGap=0;
		this._columnGap=0;
		this._percentReady=false;
		this._boundsChanged=false;
		this._updating=0;
		GGroup.__super.call(this);
	}

	__class(GGroup,'fairygui.GGroup',_super);
	var __proto=GGroup.prototype;
	__proto.setBoundsChangedFlag=function(childSizeChanged){
		(childSizeChanged===void 0)&& (childSizeChanged=false);
		if (this._updating==0 && this.parent !=null){
			if (childSizeChanged)
				this._percentReady=false;
			if(!this._boundsChanged){
				this._boundsChanged=true;
				if(this._layout!=0)
					Laya.timer.callLater(this,this.ensureBoundsCorrect);
			}
		}
	}

	__proto.ensureBoundsCorrect=function(){
		if (this._boundsChanged)
			this.updateBounds();
	}

	__proto.updateBounds=function(){
		Laya.timer.clear(this,this.ensureBoundsCorrect);
		this._boundsChanged=false;
		if (this.parent==null)
			return;
		this.handleLayout();
		var cnt=this._parent.numChildren;
		var i=0;
		var child;
		var ax=Number.MAX_VALUE,ay=Number.MAX_VALUE;
		var ar=Number.MIN_VALUE,ab=Number.MIN_VALUE;
		var tmp=0;
		var empty=true;
		for(i=0;i<cnt;i++){
			child=this._parent.getChildAt(i);
			if(child.group==this){
				tmp=child.x;
				if(tmp<ax)
					ax=tmp;
				tmp=child.y;
				if(tmp<ay)
					ay=tmp;
				tmp=child.x+child.width;
				if(tmp>ar)
					ar=tmp;
				tmp=child.y+child.height;
				if(tmp>ab)
					ab=tmp;
				empty=false;
			}
		}
		if (!empty){
			this._updating=1;
			this.setXY(ax,ay);
			this._updating=2;
			this.setSize(ar-ax,ab-ay);
		}
		else{
			this._updating=2;
			this.setSize(0,0);
		}
		this._updating=0;
	}

	__proto.handleLayout=function(){
		this._updating |=1;
		var child;
		var i=0;
		var cnt=0;
		if (this._layout==1){
			var curX=NaN;
			cnt=this.parent.numChildren;
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				if (isNaN(curX))
					curX=Math.floor(child.x);
				else
				child.x=curX;
				if (child.width !=0)
					curX+=Math.floor(child.width+this._columnGap);
			}
			if (!this._percentReady)
				this.updatePercent();
		}
		else if (this._layout==2){
			var curY=NaN;
			cnt=this.parent.numChildren;
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				if (isNaN(curY))
					curY=Math.floor(child.y);
				else
				child.y=curY;
				if (child.height !=0)
					curY+=Math.floor(child.height+this._lineGap);
			}
			if (!this._percentReady)
				this.updatePercent();
		}
		this._updating &=2;
	}

	__proto.updatePercent=function(){
		this._percentReady=true;
		var cnt=this.parent.numChildren;
		var i=0;
		var child;
		var size=0;
		if (this._layout==1){
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				size+=child.width;
			}
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				if (size > 0)
					child._sizePercentInGroup=child.width / size;
				else
				child._sizePercentInGroup=0;
			}
		}
		else{
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				size+=child.height;
			}
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				if (size > 0)
					child._sizePercentInGroup=child.height / size;
				else
				child._sizePercentInGroup=0;
			}
		}
	}

	__proto.moveChildren=function(dx,dy){
		if ((this._updating & 1)!=0 || this.parent==null)
			return;
		this._updating |=1;
		var cnt=this.parent.numChildren;
		var i=0;
		var child;
		for (i=0;i < cnt;i++){
			child=this.parent.getChildAt(i);
			if (child.group==this){
				child.setXY(child.x+dx,child.y+dy);
			}
		}
		this._updating &=2;
	}

	__proto.resizeChildren=function(dw,dh){
		if (this._layout==0 || (this._updating & 2)!=0 || this.parent==null)
			return;
		this._updating |=2;
		if (!this._percentReady)
			this.updatePercent();
		var cnt=this.parent.numChildren;
		var i=0;
		var j=0;
		var child;
		var last=-1;
		var numChildren=0;
		var lineSize=0;
		var remainSize=0;
		var found=false;
		for (i=0;i < cnt;i++){
			child=this.parent.getChildAt(i);
			if (child.group !=this)
				continue ;
			last=i;
			numChildren++;
		}
		if (this._layout==1){
			remainSize=lineSize=this.width-(numChildren-1)*this._columnGap;
			var curX=NaN;
			var nw=NaN;
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				if (isNaN(curX))
					curX=Math.floor(child.x);
				else
				child.x=curX;
				if (last==i)
					nw=remainSize;
				else
				nw=Math.round(child._sizePercentInGroup *lineSize);
				child.setSize(nw,child._rawHeight+dh,true);
				remainSize-=child.width;
				if (last==i){
					if (remainSize >=1){
						for (j=0;j <=i;j++){
							child=this.parent.getChildAt(j);
							if (child.group !=this)
								continue ;
							if (!found){
								nw=child.width+remainSize;
								if ((child.maxWidth==0 || nw < child.maxWidth)
									&& (child.minWidth==0 || nw > child.minWidth)){
									child.setSize(nw,child.height,true);
									found=true;
								}
							}
							else
							child.x+=remainSize;
						}
					}
				}
				else
				curX+=(child.width+this._columnGap);
			}
		}
		else if (this._layout==2){
			remainSize=lineSize=this.height-(numChildren-1)*this._lineGap;
			var curY=NaN;
			var nh=NaN;
			for (i=0;i < cnt;i++){
				child=this.parent.getChildAt(i);
				if (child.group !=this)
					continue ;
				if (isNaN(curY))
					curY=Math.floor(child.y);
				else
				child.y=curY;
				if (last==i)
					nh=remainSize;
				else
				nh=Math.round(child._sizePercentInGroup *lineSize);
				child.setSize(child._rawWidth+dw,nh,true);
				remainSize-=child.height;
				if (last==i){
					if (remainSize >=1){
						for (j=0;j <=i;j++){
							child=this.parent.getChildAt(j);
							if (child.group !=this)
								continue ;
							if (!found){
								nh=child.height+remainSize;
								if ((child.maxHeight==0 || nh < child.maxHeight)
									&& (child.minHeight==0 || nh > child.minHeight)){
									child.setSize(child.width,nh,true);
									found=true;
								}
							}
							else
							child.y+=remainSize;
						}
					}
				}
				else
				curY+=(child.height+this._lineGap);
			}
		}
		this._updating &=1;
	}

	__proto.handleAlphaChanged=function(){
		if(this._underConstruct)
			return;
		var cnt=this._parent.numChildren;
		for(var i=0;i<cnt;i++){
			var child=this._parent.getChildAt(i);
			if(child.group==this)
				child.alpha=this.alpha;
		}
	}

	__proto.handleVisibleChanged=function(){
		if(!this._parent)
			return;
		var cnt=this._parent.numChildren;
		for(var i=0;i<cnt;i++){
			var child=this._parent.getChildAt(i);
			if(child.group==this)
				child.handleVisibleChanged();
		}
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var str;
		str=xml.getAttribute("layout");
		if (str !=null){
			this._layout=GroupLayoutType.parse(str);
			str=xml.getAttribute("lineGap");
			if(str)
				this._lineGap=parseInt(str);
			str=xml.getAttribute("colGap");
			if(str)
				this._columnGap=parseInt(str);
		}
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		if(!this.visible)
			this.handleVisibleChanged();
	}

	__getset(0,__proto,'layout',function(){
		return this._layout;
		},function(value){
		if(this._layout !=value){
			this._layout=value;
			this.setBoundsChangedFlag(true);
		}
	});

	__getset(0,__proto,'columnGap',function(){
		return this._columnGap;
		},function(value){
		if(this._columnGap !=value){
			this._columnGap=value;
			this.setBoundsChangedFlag();
		}
	});

	__getset(0,__proto,'lineGap',function(){
		return this._lineGap;
		},function(value){
		if(this._lineGap !=value){
			this._lineGap=value;
			this.setBoundsChangedFlag();
		}
	});

	return GGroup;
})(GObject)


//class fairygui.GearSize extends fairygui.GearBase
var GearSize=(function(_super){
	var GearSizeValue;
	function GearSize(owner){
		this.tweener=null;
		this._storage=null;
		this._default=null;
		this._tweenValue=null;
		this._tweenTarget=null;
		GearSize.__super.call(this,owner);
	}

	__class(GearSize,'fairygui.GearSize',_super);
	var __proto=GearSize.prototype;
	__proto.init=function(){
		this._default=new GearSizeValue(this._owner.width,this._owner.height,
		this._owner.scaleX,this._owner.scaleY);
		this._storage={};
	}

	__proto.addStatus=function(pageId,value){
		if(value=="-"|| value.length==0)
			return;
		var arr=value.split(",");
		var gv;
		if (pageId==null)
			gv=this._default;
		else {
			gv=new GearSizeValue();
			this._storage[pageId]=gv;
		}
		gv.width=parseInt(arr[0]);
		gv.height=parseInt(arr[1]);
		if(arr.length>2){
			gv.scaleX=parseFloat(arr[2]);
			gv.scaleY=parseFloat(arr[3]);
		}
	}

	__proto.apply=function(){
		var gv=this._storage[this._controller.selectedPageId];
		if (!gv)
			gv=this._default;
		if(this._tween && !UIPackage._constructing && !GearBase.disableAllTweenEffect){
			if(this.tweener!=null){
				if (this._tweenTarget.width !=gv.width || this._tweenTarget.height !=gv.height
					|| this._tweenTarget.scaleX !=gv.scaleX || this._tweenTarget.scaleY !=gv.scaleY){
					this.tweener.complete();
					this.tweener=null;
				}
				else
				return;
			};
			var a=gv.width !=this._owner.width || gv.height !=this._owner.height;
			var b=gv.scaleX !=this._owner.scaleX || gv.scaleY !=this._owner.scaleY;
			if(a || b){
				if(this._owner.checkGearController(0,this._controller))
					this._displayLockToken=this._owner.addDisplayLock();
				this._tweenTarget=gv;
				if(this._tweenValue==null)
					this._tweenValue=new GearSizeValue();
				this._tweenValue.width=this._owner.width;
				this._tweenValue.height=this._owner.height;
				this._tweenValue.scaleX=this._owner.scaleX;
				this._tweenValue.scaleY=this._owner.scaleY;
				this.tweener=Tween.to(this._tweenValue,
				{width:gv.width,height:gv.height,scaleX:gv.scaleX,scaleY:gv.scaleY },
				this._tweenTime*1000,
				this._easeType,
				Handler.create(this,this.__tweenComplete),
				this._delay*1000);
				this.tweener.update=Handler.create(this,this.__tweenUpdate,[a,b],false);
			}
		}
		else {
			this._owner._gearLocked=true;
			this._owner.setSize(gv.width,gv.height,this._owner.checkGearController(1,this._controller));
			this._owner.setScale(gv.scaleX,gv.scaleY);
			this._owner._gearLocked=false;
		}
	}

	__proto.__tweenUpdate=function(a,b){
		this._owner._gearLocked=true;
		if(a)
			this._owner.setSize(this._tweenValue.width,this._tweenValue.height,this._owner.checkGearController(1,this._controller));
		if(b)
			this._owner.setScale(this._tweenValue.scaleX,this._tweenValue.scaleY);
		this._owner._gearLocked=false;
	}

	__proto.__tweenComplete=function(){
		if(this._displayLockToken!=0){
			this._owner.releaseDisplayLock(this._displayLockToken);
			this._displayLockToken=0;
		}
		this.tweener=null;
		this._owner.displayObject.event("fui_gear_stop");
	}

	__proto.updateState=function(){
		var gv=this._storage[this._controller.selectedPageId];
		if(!gv){
			gv=new GearSizeValue();
			this._storage[this._controller.selectedPageId]=gv;
		}
		gv.width=this._owner.width;
		gv.height=this._owner.height;
		gv.scaleX=this._owner.scaleX;
		gv.scaleY=this._owner.scaleY;
	}

	__proto.updateFromRelations=function(dx,dy){
		if(this._controller==null || this._storage==null)
			return;
		for(var key in this._storage){
			var gv=this._storage[key];
			gv.width+=dx;
			gv.height+=dy;
		}
		this._default.width+=dx;
		this._default.height+=dy;
		this.updateState();
	}

	GearSize.__init$=function(){
		//class GearSizeValue
		GearSizeValue=(function(){
			function GearSizeValue(width,height,scaleX,scaleY){
				this.width=NaN;
				this.height=NaN;
				this.scaleX=NaN;
				this.scaleY=NaN;
				(width===void 0)&& (width=0);
				(height===void 0)&& (height=0);
				(scaleX===void 0)&& (scaleX=0);
				(scaleY===void 0)&& (scaleY=0);
				this.width=width;
				this.height=height;
				this.scaleX=scaleX;
				this.scaleY=scaleY;
			}
			__class(GearSizeValue,'');
			return GearSizeValue;
		})()
	}

	return GearSize;
})(GearBase)


//class fairygui.GImage extends fairygui.GObject
var GImage=(function(_super){
	function GImage(){
		this.image=null;
		this._color=null;
		this._flip=0;
		GImage.__super.call(this);
		this._color="#FFFFFF";
	}

	__class(GImage,'fairygui.GImage',_super);
	var __proto=GImage.prototype;
	Laya.imps(__proto,{"fairygui.IColorGear":true})
	__proto.applyColor=function(){}
	__proto.createDisplayObject=function(){
		this._displayObject=this.image=new Image$1();
		this.image.mouseEnabled=false;
		this._displayObject["$owner"]=this;
	}

	__proto.constructFromResource=function(){
		this.packageItem.load();
		this.sourceWidth=this.packageItem.width;
		this.sourceHeight=this.packageItem.height;
		this.initWidth=this.sourceWidth;
		this.initHeight=this.sourceHeight;
		this.image.scale9Grid=this.packageItem.scale9Grid;
		this.image.scaleByTile=this.packageItem.scaleByTile;
		this.image.tileGridIndice=this.packageItem.tileGridIndice;
		this.image.tex=this.packageItem.texture;
		this.setSize(this.sourceWidth,this.sourceHeight);
	}

	__proto.handleXYChanged=function(){
		_super.prototype.handleXYChanged.call(this);
		if(this._flip !=0){
			if(this.scaleX==-1)
				this.image.x+=this.width;
			if(this.scaleY==-1)
				this.image.y+=this.height;
		}
	}

	__proto.handleSizeChanged=function(){
		if(this.image.tex!=null){
			this.image.scaleTexture(this.width/this.sourceWidth,this.height/this.sourceHeight);
		}
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var str;
		str=xml.getAttribute("color");
		if(str)
			this.color=str;
		str=xml.getAttribute("flip");
		if(str)
			this.flip=FlipType.parse(str);
	}

	__getset(0,__proto,'color',function(){
		return this._color;
		},function(value){
		if(this._color !=value){
			this._color=value;
			this.updateGear(4);
			this.applyColor();
		}
	});

	//not supported yet
	__getset(0,__proto,'flip',function(){
		return this._flip;
		},function(value){
		if(this._flip!=value){
			this._flip=value;
			var sx=1,sy=1;
			if(this._flip==1 || this._flip==3)
				sx=-1;
			if(this._flip==2 || this._flip==3)
				sy=-1;
			this.setScale(sx,sy);
			this.handleXYChanged();
		}
	});

	return GImage;
})(GObject)


//class fairygui.GearText extends fairygui.GearBase
var GearText=(function(_super){
	function GearText(owner){
		this._storage=null;
		this._default=null;
		GearText.__super.call(this,owner);
	}

	__class(GearText,'fairygui.GearText',_super);
	var __proto=GearText.prototype;
	__proto.init=function(){
		this._default=this._owner.text;
		this._storage={};
	}

	__proto.addStatus=function(pageId,value){
		if(pageId==null)
			this._default=value;
		else
		this._storage[pageId]=value;
	}

	__proto.apply=function(){
		this._owner._gearLocked=true;
		var data=this._storage[this._controller.selectedPageId];
		if(data!=undefined)
			this._owner.text=String(data);
		else
		this._owner.text=this._default;
		this._owner._gearLocked=false;
	}

	__proto.updateState=function(){
		this._storage[this._controller.selectedPageId]=this._owner.text;
	}

	return GearText;
})(GearBase)


//class fairygui.GearXY extends fairygui.GearBase
var GearXY=(function(_super){
	function GearXY(owner){
		this.tweener=null;
		this._storage=null;
		this._default=null;
		this._tweenValue=null;
		this._tweenTarget=null;
		GearXY.__super.call(this,owner);
	}

	__class(GearXY,'fairygui.GearXY',_super);
	var __proto=GearXY.prototype;
	__proto.init=function(){
		this._default=new Point(this._owner.x,this._owner.y);
		this._storage={};
	}

	__proto.addStatus=function(pageId,value){
		if(value=="-"|| value.length==0)
			return;
		var arr=value.split(",");
		var pt;
		if (pageId==null)
			pt=this._default;
		else {
			pt=new Point();
			this._storage[pageId]=pt;
		}
		pt.x=parseInt(arr[0]);
		pt.y=parseInt(arr[1]);
	}

	__proto.apply=function(){
		var pt=this._storage[this._controller.selectedPageId];
		if (!pt)
			pt=this._default;
		if(this._tween && !UIPackage._constructing && !GearBase.disableAllTweenEffect){
			if(this.tweener){
				if(this._tweenTarget.x!=pt.x || this._tweenTarget.y!=pt.y){
					this.tweener.complete();
					this.tweener=null;
				}
				else
				return;
			}
			if(this._owner.x !=pt.x || this._owner.y !=pt.y){
				if(this._owner.checkGearController(0,this._controller))
					this._displayLockToken=this._owner.addDisplayLock();
				this._tweenTarget=pt;
				if(this._tweenValue==null)
					this._tweenValue=new Point();
				this._tweenValue.x=this._owner.x;
				this._tweenValue.y=this._owner.y;
				this.tweener=Tween.to(this._tweenValue,
				{x:pt.x,y:pt.y },
				this._tweenTime*1000,
				this._easeType,
				Handler.create(this,this.__tweenComplete),
				this._delay*1000);
				this.tweener.update=Handler.create(this,this.__tweenUpdate,null,false);
			}
		}
		else {
			this._owner._gearLocked=true;
			this._owner.setXY(pt.x,pt.y);
			this._owner._gearLocked=false;
		}
	}

	__proto.__tweenUpdate=function(){
		this._owner._gearLocked=true;
		this._owner.setXY(this._tweenValue.x,this._tweenValue.y);
		this._owner._gearLocked=false;
	}

	__proto.__tweenComplete=function(){
		if(this._displayLockToken!=0){
			this._owner.releaseDisplayLock(this._displayLockToken);
			this._displayLockToken=0;
		}
		this.tweener=null;
		this._owner.displayObject.event("fui_gear_stop");
	}

	__proto.updateState=function(){
		var pt=this._storage[this._controller.selectedPageId];
		if(!pt){
			pt=new Point();
			this._storage[this._controller.selectedPageId]=pt;
		}
		pt.x=this._owner.x;
		pt.y=this._owner.y;
	}

	__proto.updateFromRelations=function(dx,dy){
		if(this._controller==null || this._storage==null)
			return;
		for (var key in this._storage){
			var pt=this._storage[key];
			pt.x+=dx;
			pt.y+=dy;
		}
		this._default.x+=dx;
		this._default.y+=dy;
		this.updateState();
	}

	return GearXY;
})(GearBase)


//class fairygui.GLoader extends fairygui.GObject
var GLoader=(function(_super){
	function GLoader(){
		this._url=null;
		this._align=null;
		this._valign=null;
		this._autoSize=false;
		this._fill=0;
		this._showErrorSign=false;
		this._playing=false;
		this._frame=0;
		this._color=null;
		this._contentItem=null;
		this._contentSourceWidth=0;
		this._contentSourceHeight=0;
		this._contentWidth=0;
		this._contentHeight=0;
		this._content=null;
		this._errorSign=null;
		this._updatingLayout=false;
		GLoader.__super.call(this);
		this._playing=true;
		this._url="";
		this._fill=0;
		this._align="left";
		this._valign="top";
		this._showErrorSign=true;
		this._color="#FFFFFF";
	}

	__class(GLoader,'fairygui.GLoader',_super);
	var __proto=GLoader.prototype;
	Laya.imps(__proto,{"fairygui.IAnimationGear":true,"fairygui.IColorGear":true})
	__proto.createDisplayObject=function(){
		_super.prototype.createDisplayObject.call(this);
		this._displayObject.mouseEnabled=true;
	}

	__proto.dispose=function(){
		if(this._contentItem==null && ((this._content instanceof fairygui.display.Image ))){
			var texture=(this._content).tex;
			if(texture !=null)
				this.freeExternal(texture);
		}
		_super.prototype.dispose.call(this);
	}

	__proto.applyColor=function(){}
	__proto.loadContent=function(){
		this.clearContent();
		if (!this._url)
			return;
		if(ToolSet.startsWith(this._url,"ui://"))
			this.loadFromPackage(this._url);
		else
		this.loadExternal();
	}

	__proto.loadFromPackage=function(itemURL){
		this._contentItem=UIPackage.getItemByURL(itemURL);
		if(this._contentItem !=null){
			this._contentItem.load();
			if(this._autoSize)
				this.setSize(this._contentItem.width,this._contentItem.height);
			if(this._contentItem.type==0){
				if(this._contentItem.texture==null){
					this.setErrorState();
				}
				else {
					if(!((this._content instanceof fairygui.display.Image ))){
						this._content=new Image$1();
						this._displayObject.addChild(this._content);
					}
					else
					this._displayObject.addChild(this._content);
					(this._content).tex=this._contentItem.texture;
					(this._content).scale9Grid=this._contentItem.scale9Grid;
					(this._content).scaleByTile=this._contentItem.scaleByTile;
					(this._content).tileGridIndice=this._contentItem.tileGridIndice;
					this._contentSourceWidth=this._contentItem.width;
					this._contentSourceHeight=this._contentItem.height;
					this.updateLayout();
				}
			}
			else if(this._contentItem.type==2){
				if(!((this._content instanceof fairygui.display.MovieClip ))){
					this._content=new MovieClip$1();
					this._displayObject.addChild(this._content);
				}
				else
				this._displayObject.addChild(this._content);
				this._contentSourceWidth=this._contentItem.width;
				this._contentSourceHeight=this._contentItem.height;
				(this._content).interval=this._contentItem.interval;
				(this._content).swing=this._contentItem.swing;
				(this._content).repeatDelay=this._contentItem.repeatDelay;
				(this._content).frames=this._contentItem.frames;
				(this._content).boundsRect=new Rectangle(0,0,this._contentSourceWidth,this._contentSourceHeight);
				this.updateLayout();
			}
			else
			this.setErrorState();
		}
		else
		this.setErrorState();
	}

	__proto.loadExternal=function(){
		AssetProxy.inst.load(this._url,Handler.create(this,this.__getResCompleted));
	}

	__proto.freeExternal=function(texture){}
	__proto.onExternalLoadSuccess=function(texture){
		if(!((this._content instanceof fairygui.display.Image ))){
			this._content=new Image$1();
			this._displayObject.addChild(this._content);
		}
		else
		this._displayObject.addChild(this._content);
		(this._content).tex=texture;
		(this._content).scale9Grid=null;
		(this._content).scaleByTile=false;
		this._contentSourceWidth=texture.width;
		this._contentSourceHeight=texture.height;
		this.updateLayout();
	}

	__proto.onExternalLoadFailed=function(){
		this.setErrorState();
	}

	__proto.__getResCompleted=function(tex){
		if(tex!=null)
			this.onExternalLoadSuccess(tex);
		else
		this.onExternalLoadFailed();
	}

	__proto.setErrorState=function(){
		if (!this._showErrorSign)
			return;
		if (this._errorSign==null){
			if (UIConfig$1.loaderErrorSign !=null){
				this._errorSign=fairygui.GLoader._errorSignPool.getObject(UIConfig$1.loaderErrorSign);
			}
		}
		if (this._errorSign !=null){
			this._errorSign.setSize(this.width,this.height);
			this._displayObject.addChild(this._errorSign.displayObject);
		}
	}

	__proto.clearErrorState=function(){
		if (this._errorSign !=null){
			this._displayObject.removeChild(this._errorSign.displayObject);
			fairygui.GLoader._errorSignPool.returnObject(this._errorSign);
			this._errorSign=null;
		}
	}

	__proto.updateLayout=function(){
		if (this._content==null){
			if (this._autoSize){
				this._updatingLayout=true;
				this.setSize(50,30);
				this._updatingLayout=false;
			}
			return;
		}
		this._content.x=0;
		this._content.y=0;
		this._content.scaleX=1;
		this._content.scaleY=1;
		this._contentWidth=this._contentSourceWidth;
		this._contentHeight=this._contentSourceHeight;
		if (this._autoSize){
			this._updatingLayout=true;
			if (this._contentWidth==0)
				this._contentWidth=50;
			if (this._contentHeight==0)
				this._contentHeight=30;
			this.setSize(this._contentWidth,this._contentHeight);
			this._updatingLayout=false;
			if(this._contentWidth==this._width && this._contentHeight==this._height)
				return;
		};
		var sx=1,sy=1;
		if(this._fill!=0){
			sx=this.width/this._contentSourceWidth;
			sy=this.height/this._contentSourceHeight;
			if(sx!=1 || sy!=1){
				if (this._fill==2)
					sx=sy;
				else if (this._fill==3)
				sy=sx;
				else if (this._fill==1){
					if (sx > sy)
						sx=sy;
					else
					sy=sx;
				}
				else if (this._fill==5){
					if (sx > sy)
						sy=sx;
					else
					sx=sy;
				}
				this._contentWidth=this._contentSourceWidth *sx;
				this._contentHeight=this._contentSourceHeight *sy;
			}
		}
		if ((this._content instanceof fairygui.display.Image ))
			(this._content).scaleTexture(sx,sy);
		else
		this._content.scale(sx,sy);
		if (this._align=="center")
			this._content.x=Math.floor((this.width-this._contentWidth)/ 2);
		else if (this._align=="right")
		this._content.x=this.width-this._contentWidth;
		if (this._valign=="middle")
			this._content.y=Math.floor((this.height-this._contentHeight)/ 2);
		else if (this._valign=="bottom")
		this._content.y=this.height-this._contentHeight;
	}

	__proto.clearContent=function(){
		this.clearErrorState();
		if (this._content !=null && this._content.parent !=null)
			this._displayObject.removeChild(this._content);
		if(this._contentItem==null && ((this._content instanceof fairygui.display.Image ))){
			var texture=(this._content).tex;
			if(texture !=null)
				this.freeExternal(texture);
		}
		this._contentItem=null;
	}

	__proto.handleSizeChanged=function(){
		_super.prototype.handleSizeChanged.call(this);
		if(!this._updatingLayout)
			this.updateLayout();
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var str;
		str=xml.getAttribute("url");
		if (str)
			this._url=str;
		str=xml.getAttribute("align");
		if (str)
			this._align=str;
		str=xml.getAttribute("vAlign");
		if (str)
			this._valign=str;
		str=xml.getAttribute("fill");
		if (str)
			this._fill=LoaderFillType.parse(str);
		this._autoSize=xml.getAttribute("autoSize")=="true";
		str=xml.getAttribute("errorSign");
		if (str)
			this._showErrorSign=str=="true";
		this._playing=xml.getAttribute("playing")!="false";
		str=xml.getAttribute("color");
		if(str)
			this.color=str;
		if (this._url)
			this.loadContent();
	}

	__getset(0,__proto,'frame',function(){
		return this._frame;
		},function(value){
		if (this._frame !=value){
			this._frame=value;
			if ((this._content instanceof fairygui.display.MovieClip ))
				(this._content).currentFrame=value;
			this.updateGear(5);
		}
	});

	__getset(0,__proto,'url',function(){
		return this._url;
		},function(value){
		if (this._url==value)
			return;
		this._url=value;
		this.loadContent();
		this.updateGear(7);
	});

	__getset(0,__proto,'align',function(){
		return this._align;
		},function(value){
		if (this._align !=value){
			this._align=value;
			this.updateLayout();
		}
	});

	__getset(0,__proto,'color',function(){
		return this._color;
		},function(value){
		if(this._color !=value){
			this._color=value;
			this.updateGear(4);
			this.applyColor();
		}
	});

	__getset(0,__proto,'fill',function(){
		return this._fill;
		},function(value){
		if (this._fill !=value){
			this._fill=value;
			this.updateLayout();
		}
	});

	__getset(0,__proto,'verticalAlign',function(){
		return this._valign;
		},function(value){
		if (this._valign !=value){
			this._valign=value;
			this.updateLayout();
		}
	});

	__getset(0,__proto,'icon',function(){
		return this._url;
		},function(value){
		this.url=value;
	});

	//todo:
	__getset(0,__proto,'showErrorSign',function(){
		return this._showErrorSign;
		},function(value){
		this._showErrorSign=value;
	});

	__getset(0,__proto,'autoSize',function(){
		return this._autoSize;
		},function(value){
		if (this._autoSize !=value){
			this._autoSize=value;
			this.updateLayout();
		}
	});

	__getset(0,__proto,'playing',function(){
		return this._playing;
		},function(value){
		if (this._playing !=value){
			this._playing=value;
			if ((this._content instanceof fairygui.display.MovieClip ))
				(this._content).playing=value;
			this.updateGear(5);
		}
	});

	__getset(0,__proto,'content',function(){
		return this._content;
	});

	__static(GLoader,
	['_errorSignPool',function(){return this._errorSignPool=new GObjectPool();}
	]);
	return GLoader;
})(GObject)


//class fairygui.GMovieClip extends fairygui.GObject
var GMovieClip=(function(_super){
	function GMovieClip(){
		this.movieClip=null;
		GMovieClip.__super.call(this);
		this._sizeImplType=1;
	}

	__class(GMovieClip,'fairygui.GMovieClip',_super);
	var __proto=GMovieClip.prototype;
	Laya.imps(__proto,{"fairygui.IAnimationGear":true,"fairygui.IColorGear":true})
	__proto.createDisplayObject=function(){
		this._displayObject=this.movieClip=new MovieClip$1();
		this.movieClip.mouseEnabled=false;
		this._displayObject["$owner"]=this;
	}

	//从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
	__proto.setPlaySettings=function(start,end,times,endAt,endHandler){
		(start===void 0)&& (start=0);
		(end===void 0)&& (end=-1);
		(times===void 0)&& (times=0);
		(endAt===void 0)&& (endAt=-1);
		this.movieClip.setPlaySettings(start,end,times,endAt,endHandler);
	}

	__proto.constructFromResource=function(){
		this.sourceWidth=this.packageItem.width;
		this.sourceHeight=this.packageItem.height;
		this.initWidth=this.sourceWidth;
		this.initHeight=this.sourceHeight;
		this.setSize(this.sourceWidth,this.sourceHeight);
		this.packageItem.load();
		this.movieClip.interval=this.packageItem.interval;
		this.movieClip.swing=this.packageItem.swing;
		this.movieClip.repeatDelay=this.packageItem.repeatDelay;
		this.movieClip.frames=this.packageItem.frames;
		this.movieClip.boundsRect=new Rectangle(0,0,this.sourceWidth,this.sourceHeight);
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var str;
		str=xml.getAttribute("frame");
		if (str)
			this.movieClip.currentFrame=parseInt(str);
		str=xml.getAttribute("playing");
		this.movieClip.playing=str !="false";
		str=xml.getAttribute("color");
		if(str)
			this.color=str;
	}

	__getset(0,__proto,'color',function(){
		return "#FFFFFF";
		},function(value){
	});

	__getset(0,__proto,'playing',function(){
		return this.movieClip.playing;
		},function(value){
		if (this.movieClip.playing !=value){
			this.movieClip.playing=value;
			this.updateGear(5);
		}
	});

	__getset(0,__proto,'frame',function(){
		return this.movieClip.currentFrame;
		},function(value){
		if (this.movieClip.currentFrame !=value){
			this.movieClip.currentFrame=value;
			this.updateGear(5);
		}
	});

	return GMovieClip;
})(GObject)


//class fairygui.GBasicTextField extends fairygui.GTextField
var GBasicTextField=(function(_super){
	var LineInfo,TextExt;
	function GBasicTextField(){
		this.textField=null;
		this._font=null;
		this._color=null;
		this._text=null;
		this._ubbEnabled=false;
		this._singleLine=false;
		this._letterSpacing=0;
		this._autoSize=0;
		this._widthAutoSize=false;
		this._heightAutoSize=false;
		this._updatingSize=false;
		this._textWidth=0;
		this._textHeight=0;
		this._bitmapFont=null;
		this._lines=null;
		GBasicTextField.__super.call(this);
		this._text="";
		this._color="#000000";
		this.textField.align="left";
		this.textField.font=UIConfig$1.defaultFont;
		this._autoSize=1;
		this._widthAutoSize=this._heightAutoSize=true;
		this.textField["_sizeDirty"]=false;
	}

	__class(GBasicTextField,'fairygui.GBasicTextField',_super);
	var __proto=GBasicTextField.prototype;
	__proto.createDisplayObject=function(){
		this._displayObject=this.textField=new TextExt(this);
		this._displayObject["$owner"]=this;
		this._displayObject.mouseEnabled=false;
	}

	__proto.setAutoSize=function(value){
		this._autoSize=value;
		this._widthAutoSize=value==1;
		this._heightAutoSize=value==1 || value==2;
		this.textField.wordWrap=!this._widthAutoSize && !this._singleLine;
		if(!this._underConstruct){
			if(!this._heightAutoSize)
				this.textField.size(this.width,this.height);
			else if(!this._widthAutoSize)
			this.textField.width=this.width;
		}
	}

	__proto.ensureSizeCorrect=function(){
		if (!this._underConstruct && this.textField["_isChanged"])
			this.textField.typeset();
	}

	__proto.typeset=function(){
		if(this._bitmapFont!=null)
			this.renderWithBitmapFont();
		else if(this._widthAutoSize || this._heightAutoSize)
		this.updateSize();
	}

	__proto.updateSize=function(){
		this._textWidth=Math.ceil(this.textField.textWidth);
		this._textHeight=Math.ceil(this.textField.textHeight);
		var w=NaN,h=0;
		if(this._widthAutoSize){
			w=this._textWidth;
			if(this.textField.width!=w){
				this.textField.width=w;
				if(this.textField.align!="left")
					this.textField["baseTypeset"]();
			}
		}
		else
		w=this.width;
		if(this._heightAutoSize){
			h=this._textHeight;
			if(!this._widthAutoSize){
				if(this.textField.height!=this._textHeight)
					this.textField.height=this._textHeight;
			}
		}
		else {
			h=this.height;
			if(this._textHeight > h)
				this._textHeight=h;
			if(this.textField.height!=this._textHeight)
				this.textField.height=this._textHeight;
		}
		this._updatingSize=true;
		this.setSize(w,h);
		this._updatingSize=false;
	}

	__proto.renderWithBitmapFont=function(){
		var gr=this._displayObject.graphics;
		gr.clear();
		if (!this._lines)
			this._lines=[];
		else
		LineInfo.returnList(this._lines);
		var letterSpacing=this.letterSpacing;
		var lineSpacing=this.leading-1;
		var rectWidth=this.width-2 *2;
		var lineWidth=0,lineHeight=0,lineTextHeight=0;
		var glyphWidth=0,glyphHeight=0;
		var wordChars=0,wordStart=0,wordEnd=0;
		var lastLineHeight=0;
		var lineBuffer="";
		var lineY=2;
		var line;
		var wordWrap=!this._widthAutoSize && !this._singleLine;
		var fontSize=this.fontSize;
		var fontScale=this._bitmapFont.resizable?fontSize/this._bitmapFont.size:1;
		this._textWidth=0;
		this._textHeight=0;
		var textLength=this._text.length;
		for (var offset=0;offset < textLength;++offset){
			var ch=this._text.charAt(offset);
			var cc=ch.charCodeAt(0);
			if (cc==10){
				lineBuffer+=ch;
				line=LineInfo.borrow();
				line.width=lineWidth;
				if (lineTextHeight==0){
					if (lastLineHeight==0)
						lastLineHeight=fontSize;
					if (lineHeight==0)
						lineHeight=lastLineHeight;
					lineTextHeight=lineHeight;
				}
				line.height=lineHeight;
				lastLineHeight=lineHeight;
				line.textHeight=lineTextHeight;
				line.text=lineBuffer;
				line.y=lineY;
				lineY+=(line.height+lineSpacing);
				if (line.width > this._textWidth)
					this._textWidth=line.width;
				this._lines.push(line);
				lineBuffer="";
				lineWidth=0;
				lineHeight=0;
				lineTextHeight=0;
				wordChars=0;
				wordStart=0;
				wordEnd=0;
				continue ;
			}
			if (cc>=65 && cc<=90 || cc>=97 && cc<=122){
				if (wordChars==0)
					wordStart=lineWidth;
				wordChars++;
			}
			else{
				if (wordChars > 0)
					wordEnd=lineWidth;
				wordChars=0;
			}
			if (cc==32){
				glyphWidth=Math.ceil(fontSize / 2);
				glyphHeight=fontSize;
			}
			else {
				var glyph=this._bitmapFont.glyphs[ch];
				if (glyph){
					glyphWidth=Math.ceil(glyph.advance*fontScale);
					glyphHeight=Math.ceil(glyph.lineHeight*fontScale);
				}
				else {
					glyphWidth=0;
					glyphHeight=0;
				}
			}
			if (glyphHeight > lineTextHeight)
				lineTextHeight=glyphHeight;
			if (glyphHeight > lineHeight)
				lineHeight=glyphHeight;
			if (lineWidth !=0)
				lineWidth+=letterSpacing;
			lineWidth+=glyphWidth;
			if (!wordWrap || lineWidth <=rectWidth){
				lineBuffer+=ch;
			}
			else {
				line=LineInfo.borrow();
				line.height=lineHeight;
				line.textHeight=lineTextHeight;
				if (lineBuffer.length==0){
					line.text=ch;
				}
				else if (wordChars > 0 && wordEnd > 0){
					lineBuffer+=ch;
					var len=lineBuffer.length-wordChars;
					line.text=ToolSet.trimRight(lineBuffer.substr(0,len));
					line.width=wordEnd;
					lineBuffer=lineBuffer.substr(len);
					lineWidth-=wordStart;
				}
				else {
					line.text=lineBuffer;
					line.width=lineWidth-(glyphWidth+letterSpacing);
					lineBuffer=ch;
					lineWidth=glyphWidth;
					lineHeight=glyphHeight;
					lineTextHeight=glyphHeight;
				}
				line.y=lineY;
				lineY+=(line.height+lineSpacing);
				if (line.width > this._textWidth)
					this._textWidth=line.width;
				wordChars=0;
				wordStart=0;
				wordEnd=0;
				this._lines.push(line);
			}
		}
		if (lineBuffer.length > 0){
			line=LineInfo.borrow();
			line.width=lineWidth;
			if (lineHeight==0)
				lineHeight=lastLineHeight;
			if (lineTextHeight==0)
				lineTextHeight=lineHeight;
			line.height=lineHeight;
			line.textHeight=lineTextHeight;
			line.text=lineBuffer;
			line.y=lineY;
			if (line.width > this._textWidth)
				this._textWidth=line.width;
			this._lines.push(line);
		}
		if (this._textWidth > 0)
			this._textWidth+=2 *2;
		var count=this._lines.length;
		if (count==0){
			this._textHeight=0;
		}
		else {
			line=this._lines[this._lines.length-1];
			this._textHeight=line.y+line.height+2;
		};
		var w=NaN,h=0;
		if (this._widthAutoSize){
			if (this._textWidth==0)
				w=0;
			else
			w=this._textWidth;
		}
		else
		w=this.width;
		if (this._heightAutoSize){
			if (this._textHeight==0)
				h=0;
			else
			h=this._textHeight;
		}
		else
		h=this.height;
		this._updatingSize=true;
		this.setSize(w,h);
		this._updatingSize=false;
		this.doAlign();
		if (w==0 || h==0)
			return;
		var charX=2;
		var lineIndent=0;
		var charIndent=0;
		rectWidth=this.width-2 *2;
		var lineCount=this._lines.length;
		for (var i=0;i < lineCount;i++){
			line=this._lines[i];
			charX=2;
			if (this.align=="center")
				lineIndent=(rectWidth-line.width)/ 2;
			else if (this.align=="right")
			lineIndent=rectWidth-line.width;
			else
			lineIndent=0;
			textLength=line.text.length;
			for (var j=0;j < textLength;j++){
				ch=line.text.charAt(j);
				cc=ch.charCodeAt(0);
				if(cc==10)
					continue ;
				if(cc==32){
					charX+=this._letterSpacing+Math.ceil(fontSize/2);
					continue ;
				}
				glyph=this._bitmapFont.glyphs[ch];
				if (glyph !=null){
					charIndent=(line.height+line.textHeight)/ 2-Math.ceil(glyph.lineHeight*fontScale);
					gr.drawTexture(glyph.texture,
					charX+lineIndent+Math.ceil(glyph.offsetX*fontScale),
					line.y+charIndent+Math.ceil(glyph.offsetY*fontScale),
					glyph.texture.width *fontScale,
					glyph.texture.height *fontScale);
					charX+=letterSpacing+Math.ceil(glyph.advance*fontScale);
				}
				else {
					charX+=letterSpacing;
				}
			}
		}
	}

	//line loop
	__proto.handleSizeChanged=function(){
		if(this._updatingSize)
			return;
		if(this._underConstruct)
			this.textField.size(this.width,this.height);
		else{
			if(this._bitmapFont!=null){
				if(!this._widthAutoSize)
					this.textField["setChanged"]();
				else
				this.doAlign();
			}
			else {
				if(!this._widthAutoSize){
					if(!this._heightAutoSize)
						this.textField.size(this.width,this.height);
					else
					this.textField.width=this.width;
				}
			}
		}
	}

	__proto.handleGrayedChanged=function(){
		fairygui.GObject.prototype.handleGrayedChanged.call(this);
		if(this.grayed)
			this.textField.color="#AAAAAA";
		else
		this.textField.color=this._color;
	}

	__proto.doAlign=function(){
		if(this.valign=="top" || this._textHeight==0)
			this._yOffset=2;
		else {
			var dh=this.height-this._textHeight;
			if(dh < 0)
				dh=0;
			if(this.valign=="middle")
				this._yOffset=Math.floor(dh / 2);
			else
			this._yOffset=Math.floor(dh);
		}
		this.handleXYChanged();
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var str;
		str=xml.getAttribute("autoSize");
		if (str)
			this.setAutoSize(AutoSizeType.parse(str));
	}

	__getset(0,__proto,'bold',function(){
		return this.textField.bold;
		},function(value){
		this.textField.bold=value;
	});

	__getset(0,__proto,'letterSpacing',function(){
		return this._letterSpacing;
		},function(value){
		this._letterSpacing=value;
	});

	__getset(0,__proto,'align',function(){
		return this.textField.align;
		},function(value){
		this.textField.align=value;
	});

	__getset(0,__proto,'text',function(){
		return this._text;
		},function(value){
		this._text=value;
		if(this._text==null)
			this._text="";
		if(this._bitmapFont==null){
			if(this._widthAutoSize)
				this.textField.width=10000;
			if(this._ubbEnabled)
				this.textField.text=ToolSet.removeUBB(ToolSet.encodeHTML(this._text));
			else
			this.textField.text=this._text;
		}
		else{
			this.textField.text="";
			this.textField["setChanged"]();
		}
		if(this.parent && this.parent._underConstruct)
			this.textField.typeset();
	});

	__getset(0,__proto,'color',function(){
		return this._color;
		},function(value){
		if (this._color !=value){
			this._color=value;
			if (this._gearColor.controller)
				this._gearColor.updateState();
			if(this.grayed)
				this.textField.color="#AAAAAA";
			else
			this.textField.color=this._color;
		}
	});

	__getset(0,__proto,'font',function(){
		return this.textField.font;
		},function(value){
		this._font=value;
		if(ToolSet.startsWith(this._font,"ui://")){
			this._bitmapFont=UIPackage.getBitmapFontByURL(this._font);
			this.textField["setChanged"]();
		}
		else {
			this._bitmapFont=null;
			if(this._font)
				this.textField.font=this._font;
			else
			this.textField.font=UIConfig$1.defaultFont;
		}
	});

	__getset(0,__proto,'leading',function(){
		return this.textField.leading;
		},function(value){
		this.textField.leading=value;
	});

	__getset(0,__proto,'fontSize',function(){
		return this.textField.fontSize;
		},function(value){
		this.textField.fontSize=value;
	});

	__getset(0,__proto,'valign',function(){
		return this.textField.valign;
		},function(value){
		this.textField.valign=value;
	});

	__getset(0,__proto,'italic',function(){
		return this.textField.italic;
		},function(value){
		this.textField.italic=value;
	});

	__getset(0,__proto,'underline',function(){
		return this.textField.underline;
		},function(value){
		this.textField.underline=value;
	});

	__getset(0,__proto,'singleLine',function(){
		return this._singleLine;
		},function(value){
		this._singleLine=value;
		this.textField.wordWrap=!this._widthAutoSize && !this._singleLine;
	});

	__getset(0,__proto,'stroke',function(){
		return this.textField.stroke;
		},function(value){
		this.textField.stroke=value;
	});

	__getset(0,__proto,'strokeColor',function(){
		return this.textField.strokeColor;
		},function(value){
		this.textField.strokeColor=value;
		this.updateGear(4);
	});

	__getset(0,__proto,'ubbEnabled',function(){
		return this._ubbEnabled;
		},function(value){
		this._ubbEnabled=value;
	});

	__getset(0,__proto,'autoSize',function(){
		return this._autoSize;
		},function(value){
		if (this._autoSize !=value){
			this.setAutoSize(value);
		}
	});

	__getset(0,__proto,'textWidth',function(){
		if (this.textField["_isChanged"])
			this.textField.typeset();
		return this._textWidth;
	});

	GBasicTextField.GUTTER_X=2;
	GBasicTextField.GUTTER_Y=2;
	GBasicTextField.__init$=function(){
		//class LineInfo
		LineInfo=(function(){
			function LineInfo(){
				this.width=0;
				this.height=0;
				this.textHeight=0;
				this.text=null;
				this.y=0;
			}
			__class(LineInfo,'');
			LineInfo.borrow=function(){
				if (LineInfo.pool.length){
					var ret=LineInfo.pool.pop();
					ret.width=0;
					ret.height=0;
					ret.textHeight=0;
					ret.text=null;
					ret.y=0;
					return ret;
				}
				else
				return new LineInfo();
			}
			LineInfo.returns=function(value){
				LineInfo.pool.push(value);
			}
			LineInfo.returnList=function(value){
				var length=value.length;
				for (var i=0;i < length;i++){
					var li=value[i];
					LineInfo.pool.push(li);
				}
				value.length=0;
			}
			LineInfo.pool=[];
			return LineInfo;
		})()
		//class TextExt extends laya.display.Text
		TextExt=(function(_super){
			function TextExt(owner){
				this._owner=null;
				this._lock=false;
				this._sizeDirty=false;
				TextExt.__super.call(this);
				this._owner=owner;
			}
			__class(TextExt,'',_super);
			var __proto=TextExt.prototype;
			__proto.baseTypeset=function(){
				this._lock=true;
				this.typeset();
				this._lock=false;
			}
			__proto.typeset=function(){
				this._sizeDirty=true;
				_super.prototype.typeset.call(this);
				if(!this._lock)
					this._owner.typeset();
				if(this._isChanged){
					Laya.timer.clear(this,this.typeset);
					this._isChanged=false;
				}
				this._sizeDirty=false;
			}
			__proto.setChanged=function(){
				this.isChanged=true;
			}
			__getset(0,__proto,'isChanged',null,function(value){
				if (value && !this._sizeDirty){
					if(this._owner.autoSize!=0 && this._owner.parent){
						this._sizeDirty=true;
						this.event("fui_size_delay_change");
					}
				}
				Laya.superSet(Text,this,'isChanged',value);
			});
			return TextExt;
		})(Text)
	}

	return GBasicTextField;
})(GTextField)


//class fairygui.GButton extends fairygui.GComponent
var GButton=(function(_super){
	function GButton(){
		this._titleObject=null;
		this._iconObject=null;
		this._relatedController=null;
		this._mode=0;
		this._selected=false;
		this._title=null;
		this._selectedTitle=null;
		this._icon=null;
		this._selectedIcon=null;
		this._sound=null;
		this._soundVolumeScale=0;
		this._pageOption=null;
		this._buttonController=null;
		this._changeStateOnClick=false;
		this._linkedPopup=null;
		this._downEffect=0;
		this._downEffectValue=0;
		this._downScaled=false;
		this._down=false;
		this._over=false;
		GButton.__super.call(this);
		this._mode=0;
		this._title="";
		this._icon="";
		this._sound=UIConfig$1.buttonSound;
		this._soundVolumeScale=UIConfig$1.buttonSoundVolumeScale;
		this._pageOption=new PageOption();
		this._changeStateOnClick=true;
		this._downEffectValue=0.8;
	}

	__class(GButton,'fairygui.GButton',_super);
	var __proto=GButton.prototype;
	__proto.fireClick=function(downEffect){
		(downEffect===void 0)&& (downEffect=true);
		if (downEffect && this._mode==0){
			this.setState("over");
			Laya.timer.once(100,this,this.setState,["down"]);
			Laya.timer.once(200,this,this.setState,["up"]);
		}
		this.__click(Events.createEvent("click",this.displayObject));
	}

	__proto.setState=function(val){
		if (this._buttonController)
			this._buttonController.selectedPage=val;
		if(this._downEffect==1){
			var cnt=this.numChildren;
			if(val=="down" || val=="selectedOver" || val=="selectedDisabled"){
				var r=this._downEffectValue *255;
				var color=Utils.toHexColor((r << 16)+(r << 8)+r);
				for(var i=0;i < cnt;i++){
					var obj=this.getChildAt(i);
					if(((obj instanceof fairygui.GImage ))|| ((obj instanceof fairygui.GLoader ))
						|| ((obj instanceof fairygui.GMovieClip )))
					(obj).color=color;
				}
			}
			else {
				for(i=0;i < cnt;i++){
					obj=this.getChildAt(i);
					if(((obj instanceof fairygui.GImage ))|| ((obj instanceof fairygui.GLoader ))
						|| ((obj instanceof fairygui.GMovieClip )))
					(obj).color="#FFFFFF";
				}
			}
		}
		else if(this._downEffect==2){
			if(val=="down" || val=="selectedOver" || val=="selectedDisabled"){
				if(!this._downScaled){
					this.setScale(this.scaleX*this._downEffectValue,this.scaleY*this._downEffectValue);
					this._downScaled=true;
				}
			}
			else{
				if(this._downScaled){
					this.setScale(this.scaleX/this._downEffectValue,this.scaleY/this._downEffectValue);
					this._downScaled=false;
				}
			}
		}
	}

	__proto.handleControllerChanged=function(c){
		_super.prototype.handleControllerChanged.call(this,c);
		if (this._relatedController==c)
			this.selected=this._pageOption.id==c.selectedPageId;
	}

	__proto.handleGrayedChanged=function(){
		if(this._buttonController && this._buttonController.hasPage("disabled")){
			if(this.grayed){
				if(this._selected && this._buttonController.hasPage("selectedDisabled"))
					this.setState("selectedDisabled");
				else
				this.setState("disabled");
			}
			else if(this._selected)
			this.setState("down");
			else
			this.setState("up");
		}
		else
		_super.prototype.handleGrayedChanged.call(this);
	}

	__proto.constructFromXML=function(xml){
		_super.prototype.constructFromXML.call(this,xml);
		xml=ToolSet.findChildNode(xml,"Button");
		var str;
		str=xml.getAttribute("mode");
		if (str)
			this._mode=ButtonMode.parse(str);
		str=xml.getAttribute("sound");
		if(str)
			this._sound=str;
		str=xml.getAttribute("volume");
		if(str)
			this._soundVolumeScale=parseInt(str)/ 100;
		str=xml.getAttribute("downEffect");
		if(str){
			this._downEffect=str=="dark"?1:(str=="scale"?2:0);
			str=xml.getAttribute("downEffectValue");
			this._downEffectValue=parseFloat(str);
			if(this._downEffect==2)
				this.setPivot(0.5,0.5);
		}
		this._buttonController=this.getController("button");
		this._titleObject=this.getChild("title");
		this._iconObject=this.getChild("icon");
		if (this._titleObject !=null)
			this._title=this._titleObject.text;
		if (this._iconObject !=null)
			this._icon=this._iconObject.icon;
		if (this._mode==0)
			this.setState("up");
		this.on("mouseover",this,this.__rollover);
		this.on("mouseout",this,this.__rollout);
		this.on("mousedown",this,this.__mousedown);
		this.on("click",this,this.__click);
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		xml=ToolSet.findChildNode(xml,"Button");
		if (xml){
			var str;
			str=xml.getAttribute("title");
			if (str)
				this.title=str;
			str=xml.getAttribute("icon");
			if (str)
				this.icon=str;
			str=xml.getAttribute("selectedTitle");
			if (str)
				this.selectedTitle=str;
			str=xml.getAttribute("selectedIcon");
			if (str)
				this.selectedIcon=str;
			str=xml.getAttribute("titleColor");
			if (str)
				this.titleColor=str;
			str=xml.getAttribute("titleFontSize");
			if(str)
				this.titleFontSize=parseInt(str);
			str=xml.getAttribute("sound");
			if (str!=null)
				this._sound=str;
			str=xml.getAttribute("volume");
			if(str)
				this._soundVolumeScale=parseInt(str)/100;
			str=xml.getAttribute("controller");
			if (str)
				this._relatedController=this._parent.getController(str);
			else
			this._relatedController=null;
			this._pageOption.id=xml.getAttribute("page");
			this.selected=xml.getAttribute("checked")=="true";
		}
	}

	__proto.__rollover=function(){
		if(!this._buttonController || !this._buttonController.hasPage("over"))
			return;
		this._over=true;
		if (this._down)
			return;
		if(this.grayed && this._buttonController.hasPage("disabled"))
			return;
		this.setState(this._selected ? "selectedOver" :"over");
	}

	__proto.__rollout=function(){
		if(!this._buttonController || !this._buttonController.hasPage("over"))
			return;
		this._over=false;
		if (this._down)
			return;
		if(this.grayed && this._buttonController.hasPage("disabled"))
			return;
		this.setState(this._selected ? "down" :"up");
	}

	__proto.__mousedown=function(evt){
		this._down=true;
		GRoot.inst.checkPopups(evt.target);
		Laya.stage.on("mouseup",this,this.__mouseup);
		if(this._mode==0){
			if(this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
				this.setState("selectedDisabled");
			else
			this.setState("down");
		}
		if (this._linkedPopup !=null){
			if ((this._linkedPopup instanceof fairygui.Window ))
				(this._linkedPopup).toggleStatus();
			else
			this.root.togglePopup(this._linkedPopup,this);
		}
	}

	__proto.__mouseup=function(){
		if (this._down){
			Laya.stage.off("mouseup",this,this.__mouseup);
			this._down=false;
			if(this._mode==0){
				if(this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
					this.setState("disabled");
				else if(this._over)
				this.setState("over");
				else
				this.setState("up");
			}
		}
	}

	__proto.__click=function(evt){
		if(this._sound){
			var pi=UIPackage.getItemByURL(this._sound);
			if (pi)
				GRoot.inst.playOneShotSound(pi.owner.getItemAssetURL(pi));
			else
			GRoot.inst.playOneShotSound(this._sound);
		}
		if (this._mode==1){
			if(this._changeStateOnClick){
				this.selected=!this._selected;
				Events.dispatch("fui_state_changed",this.displayObject,evt);
			}
		}
		else if (this._mode==2){
			if (this._changeStateOnClick && !this._selected){
				this.selected=true;
				Events.dispatch("fui_state_changed",this.displayObject,evt);
			}
		}
		else{
			if(this._relatedController)
				this._relatedController.selectedPageId=this._pageOption.id;
		}
	}

	__getset(0,__proto,'relatedController',function(){
		return this._relatedController;
		},function(val){
		if (val !=this._relatedController){
			this._relatedController=val;
			this._pageOption.controller=val;
			this._pageOption.clear();
		}
	});

	__getset(0,__proto,'icon',function(){
		return this._icon;
		},function(value){
		this._icon=value;
		value=(this._selected && this._selectedIcon)? this._selectedIcon :this._icon;
		if(this._iconObject!=null)
			this._iconObject.icon=value;
		this.updateGear(7);
	});

	__getset(0,__proto,'titleFontSize',function(){
		if((this._titleObject instanceof fairygui.GTextField ))
			return (this._titleObject).fontSize;
		else if((this._titleObject instanceof fairygui.GLabel ))
		return (this._titleObject).titleFontSize;
		else if((this._titleObject instanceof fairygui.GButton ))
		return (this._titleObject).titleFontSize;
		else
		return 0;
		},function(value){
		if((this._titleObject instanceof fairygui.GTextField ))
			(this._titleObject).fontSize=value;
		else if((this._titleObject instanceof fairygui.GLabel ))
		(this._titleObject).titleFontSize=value;
		else if((this._titleObject instanceof fairygui.GButton ))
		(this._titleObject).titleFontSize=value;
	});

	__getset(0,__proto,'selectedIcon',function(){
		return this._selectedIcon;
		},function(value){
		this._selectedIcon=value;
		value=(this._selected && this._selectedIcon)? this._selectedIcon :this._icon;
		if(this._iconObject!=null)
			this._iconObject.icon=value;
	});

	__getset(0,__proto,'title',function(){
		return this._title;
		},function(value){
		this._title=value;
		if (this._titleObject)
			this._titleObject.text=(this._selected && this._selectedTitle)? this._selectedTitle :this._title;
		this.updateGear(6);
	});

	__getset(0,__proto,'text',function(){
		return this.title;
		},function(value){
		this.title=value;
	});

	__getset(0,__proto,'selectedTitle',function(){
		return this._selectedTitle;
		},function(value){
		this._selectedTitle=value;
		if (this._titleObject)
			this._titleObject.text=(this._selected && this._selectedTitle)? this._selectedTitle :this._title;
	});

	__getset(0,__proto,'soundVolumeScale',function(){
		return this._soundVolumeScale;
		},function(value){
		this._soundVolumeScale=value;
	});

	__getset(0,__proto,'sound',function(){
		return this._sound;
		},function(val){
		this._sound=val;
	});

	__getset(0,__proto,'titleColor',function(){
		if((this._titleObject instanceof fairygui.GTextField ))
			return (this._titleObject).color;
		else if((this._titleObject instanceof fairygui.GLabel ))
		return (this._titleObject).titleColor;
		else if((this._titleObject instanceof fairygui.GButton ))
		return (this._titleObject).titleColor;
		else
		return "#000000";
		},function(value){
		if((this._titleObject instanceof fairygui.GTextField ))
			(this._titleObject).color=value;
		else if((this._titleObject instanceof fairygui.GLabel ))
		(this._titleObject).titleColor=value;
		else if((this._titleObject instanceof fairygui.GButton ))
		(this._titleObject).titleColor=value;
	});

	__getset(0,__proto,'selected',function(){
		return this._selected;
		},function(val){
		if (this._mode==0)
			return;
		if (this._selected !=val){
			this._selected=val;
			if(this.grayed && this._buttonController && this._buttonController.hasPage("disabled")){
				if(this._selected)
					this.setState("selectedDisabled");
				else
				this.setState("disabled");
			}
			else {
				if(this._selected)
					this.setState(this._over ? "selectedOver" :"down");
				else
				this.setState(this._over ? "over" :"up");
			}
			if(this._selectedTitle && this._titleObject)
				this._titleObject.text=this._selected ? this._selectedTitle :this._title;
			if(this._selectedIcon){
				var str=this._selected ? this._selectedIcon :this._icon;
				if(this._iconObject!=null)
					this._iconObject.icon=str;
			}
			if(this._relatedController
				&& this._parent
			&& !this._parent._buildingDisplayList){
				if(this._selected){
					this._relatedController.selectedPageId=this._pageOption.id;
					if(this._relatedController._autoRadioGroupDepth)
						this._parent.adjustRadioGroupDepth(this,this._relatedController);
				}
				else if(this._mode==1 && this._relatedController.selectedPageId==this._pageOption.id)
				this._relatedController.oppositePageId=this._pageOption.id;
			}
		}
	});

	__getset(0,__proto,'mode',function(){
		return this._mode;
		},function(value){
		if (this._mode !=value){
			if (value==0)
				this.selected=false;
			this._mode=value;
		}
	});

	__getset(0,__proto,'pageOption',function(){
		return this._pageOption;
	});

	__getset(0,__proto,'changeStateOnClick',function(){
		return this._changeStateOnClick;
		},function(value){
		this._changeStateOnClick=value;
	});

	__getset(0,__proto,'linkedPopup',function(){
		return this._linkedPopup;
		},function(value){
		this._linkedPopup=value;
	});

	GButton.UP="up";
	GButton.DOWN="down";
	GButton.OVER="over";
	GButton.SELECTED_OVER="selectedOver";
	GButton.DISABLED="disabled";
	GButton.SELECTED_DISABLED="selectedDisabled";
	return GButton;
})(GComponent)


//class fairygui.GComboBox extends fairygui.GComponent
var GComboBox=(function(_super){
	function GComboBox(){
		this.dropdown=null;
		this._titleObject=null;
		this._iconObject=null;
		this._list=null;
		this._items=null;
		this._icons=null;
		this._values=null;
		this._popupDownward=null;
		this._visibleItemCount=0;
		this._itemsUpdated=false;
		this._selectedIndex=0;
		this._buttonController=null;
		this._selectionController=null;
		this._down=false;
		this._over=false;
		GComboBox.__super.call(this);
		this._visibleItemCount=UIConfig$1.defaultComboBoxVisibleItemCount;
		this._itemsUpdated=true;
		this._selectedIndex=-1;
		this._items=[];
		this._values=[];
	}

	__class(GComboBox,'fairygui.GComboBox',_super);
	var __proto=GComboBox.prototype;
	__proto.setState=function(val){
		if (this._buttonController)
			this._buttonController.selectedPage=val;
	}

	__proto.handleControllerChanged=function(c){
		_super.prototype.handleControllerChanged.call(this,c);
		if (this._selectionController==c)
			this.selectedIndex=c.selectedIndex;
	}

	__proto.updateSelectionController=function(){
		if (this._selectionController !=null && !this._selectionController.changing
			&& this._selectedIndex < this._selectionController.pageCount){
			var c=this._selectionController;
			this._selectionController=null;
			c.selectedIndex=this._selectedIndex;
			this._selectionController=c;
		}
	}

	__proto.dispose=function(){
		if(this.dropdown){
			this.dropdown.dispose();
			this.dropdown=null;
		}
		this._selectionController=null;
		_super.prototype.dispose.call(this);
	}

	__proto.constructFromXML=function(xml){
		_super.prototype.constructFromXML.call(this,xml);
		xml=ToolSet.findChildNode(xml,"ComboBox");
		var str;
		this._buttonController=this.getController("button");
		this._titleObject=this.getChild("title");
		this._iconObject=this.getChild("icon");
		str=xml.getAttribute("dropdown");
		if (str){
			this.dropdown=(UIPackage.createObjectFromURL(str));
			if (!this.dropdown){
				Log.print("下拉框必须为元件");
				return;
			}
			this.dropdown.name="this._dropdownObject";
			this._list=this.dropdown.getChild("list").asList;
			if (this._list==null){
				Log.print(this.resourceURL+": 下拉框的弹出元件里必须包含名为list的列表");
				return;
			}
			this._list.on("fui_click_item",this,this.__clickItem);
			this._list.addRelation(this.dropdown,14);
			this._list.removeRelation(this.dropdown,15);
			this.dropdown.addRelation(this._list,15);
			this.dropdown.removeRelation(this._list,14);
			this.dropdown.displayObject.on("undisplay",this,this.__popupWinClosed);
		}
		this.on("mouseover",this,this.__rollover);
		this.on("mouseout",this,this.__rollout);
		this.on("mousedown",this,this.__mousedown);
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		xml=ToolSet.findChildNode(xml,"ComboBox");
		if (xml){
			var str;
			str=xml.getAttribute("titleColor");
			if (str)
				this.titleColor=str;
			str=xml.getAttribute("visibleItemCount");
			if (str)
				this._visibleItemCount=parseInt(str);
			var col=xml.childNodes;
			var length=col.length;
			for (var i=0;i < length;i++){
				var cxml=col[i];
				if(cxml.nodeName=="item"){
					this._items.push(cxml.getAttribute("title"));
					this._values.push(cxml.getAttribute("value"));
					str=cxml.getAttribute("icon");
					if (str){
						if(!this._icons)
							this._icons=new Array(length);
						this._icons[i]=str;
					}
				}
			}
			str=xml.getAttribute("title");
			if(str){
				this.text=str;
				this._selectedIndex=this._items.indexOf(str);
			}
			else if(this._items.length>0){
				this._selectedIndex=0;
				this.text=this._items[0];
			}
			else
			this._selectedIndex=-1;
			str=xml.getAttribute("icon");
			if(str)
				this.icon=str;
			str=xml.getAttribute("direction");
			if(str){
				if(str=="up")
					this._popupDownward=false;
				else if(str=="auto")
				this._popupDownward=null;
			}
			str=xml.getAttribute("selectionController");
			if (str)
				this._selectionController=this.parent.getController(str);
		}
	}

	__proto.showDropdown=function(){
		if (this._itemsUpdated){
			this._itemsUpdated=false;
			this._list.removeChildrenToPool();
			var cnt=this._items.length;
			for (var i=0;i < cnt;i++){
				var item=this._list.addItemFromPool();
				item.name=i < this._values.length ? this._values[i] :"";
				item.text=this._items[i];
				item.icon=(this._icons !=null && i < this._icons.length)? this._icons[i] :null;
			}
			this._list.resizeToFit(this._visibleItemCount);
		}
		this._list.selectedIndex=-1;
		this.dropdown.width=this.width;
		this.root.togglePopup(this.dropdown,this,this._popupDownward);
		if (this.dropdown.parent)
			this.setState("down");
	}

	__proto.__popupWinClosed=function(){
		if(this._over)
			this.setState("over");
		else
		this.setState("up");
	}

	__proto.__clickItem=function(itemObject,evt){
		Laya.timer.callLater(this,this.__clickItem2,[this._list.getChildIndex(itemObject),evt])
	}

	__proto.__clickItem2=function(index,evt){
		if ((this.dropdown.parent instanceof fairygui.GRoot ))
			(this.dropdown.parent).hidePopup();
		this._selectedIndex=-1;
		this.selectedIndex=index;
		Events.dispatch("fui_state_changed",this.displayObject,evt);
	}

	__proto.__rollover=function(){
		this._over=true;
		if (this._down || this.dropdown && this.dropdown.parent)
			return;
		this.setState("over");
	}

	__proto.__rollout=function(){
		this._over=false;
		if (this._down || this.dropdown && this.dropdown.parent)
			return;
		this.setState("up");
	}

	__proto.__mousedown=function(evt){
		if((evt.target instanceof laya.display.Input ))
			return;
		this._down=true;
		GRoot.inst.checkPopups(evt.target);
		Laya.stage.on("mouseup",this,this.__mouseup);
		if (this.dropdown)
			this.showDropdown();
	}

	__proto.__mouseup=function(){
		if(this._down){
			this._down=false;
			Laya.stage.off("mouseup",this,this.__mouseup);
			if(this.dropdown && !this.dropdown.parent){
				if(this._over)
					this.setState("over");
				else
				this.setState("up");
			}
		}
	}

	__getset(0,__proto,'text',function(){
		if (this._titleObject)
			return this._titleObject.text;
		else
		return null;
		},function(value){
		if (this._titleObject)
			this._titleObject.text=value;
		this.updateGear(6);
	});

	__getset(0,__proto,'titleColor',function(){
		if((this._titleObject instanceof fairygui.GTextField ))
			return (this._titleObject).color;
		else if((this._titleObject instanceof fairygui.GLabel ))
		return (this._titleObject).titleColor;
		else if((this._titleObject instanceof fairygui.GButton ))
		return (this._titleObject).titleColor;
		else
		return "#000000";
		},function(value){
		if((this._titleObject instanceof fairygui.GTextField ))
			(this._titleObject).color=value;
		else if((this._titleObject instanceof fairygui.GLabel ))
		(this._titleObject).titleColor=value;
		else if((this._titleObject instanceof fairygui.GButton ))
		(this._titleObject).titleColor=value;
	});

	__getset(0,__proto,'selectedIndex',function(){
		return this._selectedIndex;
		},function(val){
		if(this._selectedIndex==val)
			return;
		this._selectedIndex=val;
		if(this._selectedIndex>=0 && this._selectedIndex<this._items.length){
			this.text=this._items[this._selectedIndex];
			if (this._icons !=null && this._selectedIndex < this._icons.length)
				this.icon=this._icons[this._selectedIndex];
		}
		else{
			this.text="";
			if (this._icons !=null)
				this.icon=null;
		}
		this.updateSelectionController();
	});

	__getset(0,__proto,'icon',function(){
		if(this._iconObject)
			return this._iconObject.icon;
		else
		return null;
		},function(value){
		if(this._iconObject)
			this._iconObject.icon=value;
		this.updateGear(7);
	});

	__getset(0,__proto,'icons',function(){
		return this._icons;
		},function(value){
		this._icons=value;
		if (this._icons !=null && this._selectedIndex !=-1 && this._selectedIndex < this._icons.length)
			this.icon=this._icons[this._selectedIndex];
	});

	__getset(0,__proto,'selectionController',function(){
		return this._selectionController;
		},function(value){
		this._selectionController=value;
	});

	__getset(0,__proto,'visibleItemCount',function(){
		return this._visibleItemCount;
		},function(value){
		this._visibleItemCount=value;
	});

	__getset(0,__proto,'popupDownward',function(){
		return this._popupDownward;
		},function(value){
		this._popupDownward=value;
	});

	__getset(0,__proto,'values',function(){
		return this._values;
		},function(value){
		if (!value)
			this._values.length=0;
		else
		this._values=value.concat();
	});

	__getset(0,__proto,'items',function(){
		return this._items;
		},function(value){
		if(!value)
			this._items.length=0;
		else
		this._items=value.concat();
		if(this._items.length>0){
			if(this._selectedIndex>=this._items.length)
				this._selectedIndex=this._items.length-1;
			else if(this._selectedIndex==-1)
			this._selectedIndex=0;
			this.text=this._items[this._selectedIndex];
			if (this._icons !=null && this._selectedIndex < this._icons.length)
				this.icon=this._icons[this._selectedIndex];
		}
		else{
			this.text="";
			if (this._icons !=null)
				this.icon=null;
			this._selectedIndex=-1;
		}
		this._itemsUpdated=true;
	});

	__getset(0,__proto,'value',function(){
		return this._values[this._selectedIndex];
		},function(val){
		this.selectedIndex=this._values.indexOf(val);
	});

	return GComboBox;
})(GComponent)


//class fairygui.GLabel extends fairygui.GComponent
var GLabel=(function(_super){
	function GLabel(){
		this._titleObject=null;
		this._iconObject=null;
		GLabel.__super.call(this);
	}

	__class(GLabel,'fairygui.GLabel',_super);
	var __proto=GLabel.prototype;
	Laya.imps(__proto,{"fairygui.IColorGear":true})
	__proto.constructFromXML=function(xml){
		_super.prototype.constructFromXML.call(this,xml);
		this._titleObject=this.getChild("title");
		this._iconObject=this.getChild("icon");
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		xml=ToolSet.findChildNode(xml,"Label");
		if (xml){
			var str;
			str=xml.getAttribute("title");
			if(str)
				this.text=str;
			str=xml.getAttribute("icon");
			if(str)
				this.icon=str;
			str=xml.getAttribute("titleColor");
			if (str)
				this.titleColor=str;
			str=xml.getAttribute("titleFontSize");
			if(str)
				this.titleFontSize=parseInt(str);
			if((this._titleObject instanceof fairygui.GTextInput )){
				str=xml.getAttribute("prompt");
				if(str)
					(this._titleObject).promptText=str;
				str=xml.getAttribute("maxLength");
				if(str)
					(this._titleObject).maxLength=parseInt(str);
				str=xml.getAttribute("restrict");
				if(str)
					(this._titleObject).restrict=str;
				str=xml.getAttribute("password");
				if(str)
					(this._titleObject).password=str=="true";
				str=xml.getAttribute("keyboardType");
				if(str=="4")
					(this._titleObject).keyboardType="number";
				else if(str=="3")
				(this._titleObject).keyboardType="url";
			}
		}
	}

	__getset(0,__proto,'color',function(){
		return this.titleColor;
		},function(value){
		this.titleColor=value;
	});

	__getset(0,__proto,'icon',function(){
		if(this._iconObject!=null)
			return this._iconObject.icon;
		else
		return null;
		},function(value){
		if(this._iconObject!=null)
			this._iconObject.icon=value;
		this.updateGear(7);
	});

	__getset(0,__proto,'editable',function(){
		if (this._titleObject && ((this._titleObject instanceof fairygui.GTextInput )))
			return this._titleObject.asTextInput.editable;
		else
		return false;
		},function(val){
		if (this._titleObject)
			this._titleObject.asTextInput.editable=val;
	});

	__getset(0,__proto,'title',function(){
		if (this._titleObject)
			return this._titleObject.text;
		else
		return null;
		},function(value){
		if (this._titleObject)
			this._titleObject.text=value;
		this.updateGear(6);
	});

	__getset(0,__proto,'text',function(){
		return this.title;
		},function(value){
		this.title=value;
	});

	__getset(0,__proto,'titleColor',function(){
		if((this._titleObject instanceof fairygui.GTextField ))
			return (this._titleObject).color;
		else if((this._titleObject instanceof fairygui.GLabel ))
		return (this._titleObject).titleColor;
		else if((this._titleObject instanceof fairygui.GButton ))
		return (this._titleObject).titleColor;
		else
		return "#000000";
		},function(value){
		if((this._titleObject instanceof fairygui.GTextField ))
			(this._titleObject).color=value;
		else if((this._titleObject instanceof fairygui.GLabel ))
		(this._titleObject).titleColor=value;
		else if((this._titleObject instanceof fairygui.GButton ))
		(this._titleObject).titleColor=value;
		this.updateGear(4);
	});

	__getset(0,__proto,'titleFontSize',function(){
		if((this._titleObject instanceof fairygui.GTextField ))
			return (this._titleObject).fontSize;
		else if((this._titleObject instanceof fairygui.GLabel ))
		return (this._titleObject).titleFontSize;
		else if((this._titleObject instanceof fairygui.GButton ))
		return (this._titleObject).titleFontSize;
		else
		return 0;
		},function(value){
		if((this._titleObject instanceof fairygui.GTextField ))
			(this._titleObject).fontSize=value;
		else if((this._titleObject instanceof fairygui.GLabel ))
		(this._titleObject).titleFontSize=value;
		else if((this._titleObject instanceof fairygui.GButton ))
		(this._titleObject).titleFontSize=value;
	});

	return GLabel;
})(GComponent)


//class fairygui.GList extends fairygui.GComponent
var GList=(function(_super){
	var ItemInfo;
	function GList(){
		/**
		*itemRenderer(int index,GObject item);
		*/
		this.itemRenderer=null;
		/**
		*itemProvider(index:int):String;
		*/
		this.itemProvider=null;
		this.scrollItemToViewOnClick=false;
		this.foldInvisibleItems=false;
		this._layout=0;
		this._lineCount=0;
		this._columnCount=0;
		this._lineGap=0;
		this._columnGap=0;
		this._defaultItem=null;
		this._autoResizeItem=false;
		this._selectionMode=0;
		this._align=null;
		this._verticalAlign=null;
		this._selectionController=null;
		this._lastSelectedIndex=0;
		this._pool=null;
		//Virtual List support
		this._virtual=false;
		this._loop=false;
		this._numItems=0;
		this._realNumItems=0;
		this._firstIndex=0;
		//the top left index
		this._curLineItemCount=0;
		//item count in one line
		this._curLineItemCount2=0;
		//只用在页面模式，表示垂直方向的项目数
		this._itemSize=null;
		this._virtualListChanged=0;
		//1-content changed,2-size changed
		this._virtualItems=null;
		this._eventLocked=false;
		this.itemInfoVer=0;
		//用来标志item是否在本次处理中已经被重用了
		this.enterCounter=0;
		GList.__super.call(this);
		this._trackBounds=true;
		this._pool=new GObjectPool();
		this._layout=0;
		this._autoResizeItem=true;
		this._lastSelectedIndex=-1;
		this._selectionMode=0;
		this.opaque=true;
		this.scrollItemToViewOnClick=true;
		this._align="left";
		this._verticalAlign="top";
		this._container=new Sprite();
		this._displayObject.addChild(this._container);
	}

	__class(GList,'fairygui.GList',_super);
	var __proto=GList.prototype;
	__proto.dispose=function(){
		this._pool.clear();
		_super.prototype.dispose.call(this);
	}

	__proto.getFromPool=function(url){
		if (!url)
			url=this._defaultItem;
		var obj=this._pool.getObject(url);
		if(obj!=null)
			obj.visible=true;
		return obj;
	}

	__proto.returnToPool=function(obj){
		obj.displayObject.cacheAsBitmap=false;
		this._pool.returnObject(obj);
	}

	__proto.addChildAt=function(child,index){
		(index===void 0)&& (index=0);
		_super.prototype.addChildAt.call(this,child,index);
		if ((child instanceof fairygui.GButton )){
			var button=(child);
			button.selected=false;
			button.changeStateOnClick=false;
		}
		child.on("click",this,this.__clickItem);
		return child;
	}

	__proto.addItem=function(url){
		if (!url)
			url=this._defaultItem;
		return this.addChild(UIPackage.createObjectFromURL(url));
	}

	__proto.addItemFromPool=function(url){
		return this.addChild(this.getFromPool(url));
	}

	__proto.removeChildAt=function(index,dispose){
		(dispose===void 0)&& (dispose=false);
		var child=_super.prototype.removeChildAt.call(this,index,dispose);
		child.off("click",this,this.__clickItem);
		return child;
	}

	__proto.removeChildToPoolAt=function(index){
		(index===void 0)&& (index=0);
		var child=_super.prototype.removeChildAt.call(this,index);
		this.returnToPool(child);
	}

	__proto.removeChildToPool=function(child){
		this.removeChild(child);
		this.returnToPool(child);
	}

	__proto.removeChildrenToPool=function(beginIndex,endIndex){
		(beginIndex===void 0)&& (beginIndex=0);
		(endIndex===void 0)&& (endIndex=-1);
		if (endIndex < 0 || endIndex >=this._children.length)
			endIndex=this._children.length-1;
		for (var i=beginIndex;i <=endIndex;++i)
		this.removeChildToPoolAt(beginIndex);
	}

	__proto.getSelection=function(){
		var ret=[];
		var i=0;
		if (this._virtual){
			for (i=0;i < this._realNumItems;i++){
				var ii=this._virtualItems[i];
				if (((ii.obj instanceof fairygui.GButton ))&& (ii.obj).selected
					|| ii.obj==null && ii.selected){
					var j=i;
					if (this._loop){
						j=i % this._numItems;
						if (ret.indexOf(j)!=-1)
							continue ;
					}
					ret.push(j);
				}
			}
		}
		else{
			var cnt=this._children.length;
			for (i=0;i < cnt;i++){
				var obj=this._children[i].asButton;
				if (obj !=null && obj.selected)
					ret.push(i);
			}
		}
		return ret;
	}

	__proto.addSelection=function(index,scrollItToView){
		(scrollItToView===void 0)&& (scrollItToView=false);
		if(this._selectionMode==3)
			return;
		this.checkVirtualList();
		if(this._selectionMode==0)
			this.clearSelection();
		if (scrollItToView)
			this.scrollToView(index);
		this._lastSelectedIndex=index;
		var obj=null;
		if (this._virtual){
			var ii=this._virtualItems[index];
			if (ii.obj !=null)
				obj=ii.obj.asButton;
			ii.selected=true;
		}
		else
		obj=this.getChildAt(index).asButton;
		if (obj !=null && !obj.selected){
			obj.selected=true;
			this.updateSelectionController(index);
		}
	}

	__proto.removeSelection=function(index){
		if(this._selectionMode==3)
			return;
		var obj=null;
		if (this._virtual){
			var ii=this._virtualItems[index];
			if (ii.obj !=null)
				obj=ii.obj.asButton;
			ii.selected=false;
		}
		else
		obj=this.getChildAt(index).asButton;
		if (obj !=null)
			obj.selected=false;
	}

	__proto.clearSelection=function(){
		var i=0;
		if (this._virtual){
			for (i=0;i < this._realNumItems;i++){
				var ii=this._virtualItems[i];
				if ((ii.obj instanceof fairygui.GButton ))
					(ii.obj).selected=false;
				ii.selected=false;
			}
		}
		else{
			var cnt=this._children.length;
			for (i=0;i < cnt;i++){
				var obj=this._children[i].asButton;
				if (obj !=null)
					obj.selected=false;
			}
		}
	}

	__proto.clearSelectionExcept=function(g){
		var i=0;
		if (this._virtual){
			for (i=0;i < this._realNumItems;i++){
				var ii=this._virtualItems[i];
				if (ii.obj !=g){
					if (((ii.obj instanceof fairygui.GButton )))
						(ii.obj).selected=false;
					ii.selected=false;
				}
			}
		}
		else{
			var cnt=this._children.length;
			for (i=0;i < cnt;i++){
				var obj=this._children[i].asButton;
				if (obj !=null && obj !=g)
					obj.selected=false;
			}
		}
	}

	__proto.selectAll=function(){
		this.checkVirtualList();
		var last=-1;
		var i=0;
		if (this._virtual){
			for (i=0;i < this._realNumItems;i++){
				var ii=this._virtualItems[i];
				if (((ii.obj instanceof fairygui.GButton ))&& !(ii.obj).selected){
					(ii.obj).selected=true;
					last=i;
				}
				ii.selected=true;
			}
		}
		else{
			var cnt=this._children.length;
			for (i=0;i < cnt;i++){
				var obj=this._children[i].asButton;
				if (obj !=null && !obj.selected){
					obj.selected=true;
					last=i;
				}
			}
		}
		if(last!=-1)
			this.updateSelectionController(last);
	}

	__proto.selectNone=function(){
		this.clearSelection();
	}

	__proto.selectReverse=function(){
		this.checkVirtualList();
		var last=-1;
		var i=0;
		if (this._virtual){
			for (i=0;i < this._realNumItems;i++){
				var ii=this._virtualItems[i];
				if ((ii.obj instanceof fairygui.GButton )){
					(ii.obj).selected=!(ii.obj).selected;
					if ((ii.obj).selected)
						last=i;
				}
				ii.selected=!ii.selected;
			}
		}
		else{
			var cnt=this._children.length;
			for (i=0;i < cnt;i++){
				var obj=this._children[i].asButton;
				if (obj !=null){
					obj.selected=!obj.selected;
					if (obj.selected)
						last=i;
				}
			}
		}
		if(last!=-1)
			this.updateSelectionController(last);
	}

	__proto.handleArrowKey=function(dir){
		(dir===void 0)&& (dir=0);
		var index=this.selectedIndex;
		if (index==-1)
			return;
		switch (dir){
			case 1:
				if (this._layout==0 || this._layout==3){
					index--;
					if (index >=0){
						this.clearSelection();
						this.addSelection(index,true);
					}
				}
				else if (this._layout==2 || this._layout==4){
					var current=this._children[index];
					var k=0;
					for (var i=index-1;i >=0;i--){
						var obj=this._children[i];
						if (obj.y !=current.y){
							current=obj;
							break ;
						}
						k++;
					}
					for (;i >=0;i--){
						obj=this._children[i];
						if (obj.y !=current.y){
							this.clearSelection();
							this.addSelection(i+k+1,true);
							break ;
						}
					}
				}
				break ;
			case 3:
				if (this._layout==1 || this._layout==2 || this._layout==4){
					index++;
					if (index < this._children.length){
						this.clearSelection();
						this.addSelection(index,true);
					}
				}
				else if (this._layout==3){
					current=this._children[index];
					k=0;
					var cnt=this._children.length;
					for (i=index+1;i < cnt;i++){
						obj=this._children[i];
						if (obj.x !=current.x){
							current=obj;
							break ;
						}
						k++;
					}
					for (;i < cnt;i++){
						obj=this._children[i];
						if (obj.x !=current.x){
							this.clearSelection();
							this.addSelection(i-k-1,true);
							break ;
						}
					}
				}
				break ;
			case 5:
				if (this._layout==0 || this._layout==3){
					index++;
					if (index < this._children.length){
						this.clearSelection();
						this.addSelection(index,true);
					}
				}
				else if (this._layout==2 || this._layout==4){
					current=this._children[index];
					k=0;
					cnt=this._children.length;
					for (i=index+1;i < cnt;i++){
						obj=this._children[i];
						if (obj.y !=current.y){
							current=obj;
							break ;
						}
						k++;
					}
					for (;i < cnt;i++){
						obj=this._children[i];
						if (obj.y !=current.y){
							this.clearSelection();
							this.addSelection(i-k-1,true);
							break ;
						}
					}
				}
				break ;
			case 7:
				if (this._layout==1 || this._layout==2 || this._layout==4){
					index--;
					if (index >=0){
						this.clearSelection();
						this.addSelection(index,true);
					}
				}
				else if (this._layout==3){
					current=this._children[index];
					k=0;
					for (i=index-1;i >=0;i--){
						obj=this._children[i];
						if (obj.x !=current.x){
							current=obj;
							break ;
						}
						k++;
					}
					for (;i >=0;i--){
						obj=this._children[i];
						if (obj.x !=current.x){
							this.clearSelection();
							this.addSelection(i+k+1,true);
							break ;
						}
					}
				}
				break ;
			}
	}

	__proto.__clickItem=function(evt){
		if (this._scrollPane !=null && this._scrollPane.isDragged)
			return;
		var item=GObject.cast(evt.currentTarget);
		this.setSelectionOnEvent(item,evt);
		if(this._scrollPane && this.scrollItemToViewOnClick)
			this._scrollPane.scrollToView(item,true);
		this.displayObject.event("fui_click_item",[item,Events.createEvent("fui_click_item",this.displayObject,evt)]);
	}

	__proto.setSelectionOnEvent=function(item,evt){
		if (!((item instanceof fairygui.GButton ))|| this._selectionMode==3)
			return;
		var dontChangeLastIndex=false;
		var button=(item);
		var index=this.childIndexToItemIndex(this.getChildIndex(item));
		if (this._selectionMode==0){
			if (!button.selected){
				this.clearSelectionExcept(button);
				button.selected=true;
			}
		}
		else {
			if (evt.shiftKey){
				if (!button.selected){
					if (this._lastSelectedIndex !=-1){
						var min=Math.min(this._lastSelectedIndex,index);
						var max=Math.max(this._lastSelectedIndex,index);
						max=Math.min(max,this.numItems-1);
						var i=0;
						if (this._virtual){
							for (i=min;i <=max;i++){
								var ii=this._virtualItems[i];
								if ((ii.obj instanceof fairygui.GButton ))
									(ii.obj).selected=true;
								ii.selected=true;
							}
						}
						else{
							for(i=min;i<=max;i++){
								var obj=this.getChildAt(i).asButton;
								if(obj!=null)
									obj.selected=true;
							}
						}
						dontChangeLastIndex=true;
					}
					else {
						button.selected=true;
					}
				}
			}
			else if (evt.ctrlKey || this._selectionMode==2){
				button.selected=!button.selected;
			}
			else {
				if (!button.selected){
					this.clearSelectionExcept(button);
					button.selected=true;
				}
				else
				this.clearSelectionExcept(button);
			}
		}
		if (!dontChangeLastIndex)
			this._lastSelectedIndex=index;
		if(button.selected)
			this.updateSelectionController(index);
	}

	__proto.resizeToFit=function(itemCount,minSize){
		(itemCount===void 0)&& (itemCount=1000000);
		(minSize===void 0)&& (minSize=0);
		this.ensureBoundsCorrect();
		var curCount=this.numItems;
		if (itemCount > curCount)
			itemCount=curCount;
		if(this._virtual){
			var lineCount=Math.ceil(itemCount / this._curLineItemCount);
			if(this._layout==0 || this._layout==2)
				this.viewHeight=lineCount *this._itemSize.y+Math.max(0,lineCount-1)*this._lineGap;
			else
			this.viewWidth=lineCount *this._itemSize.x+Math.max(0,lineCount-1)*this._columnGap;
		}
		else if(itemCount==0){
			if (this._layout==0 || this._layout==2)
				this.viewHeight=minSize;
			else
			this.viewWidth=minSize;
		}
		else {
			var i=itemCount-1;
			var obj=null;
			while (i >=0){
				obj=this.getChildAt(i);
				if (!this.foldInvisibleItems || obj.visible)
					break ;
				i--;
			}
			if (i < 0){
				if (this._layout==0 || this._layout==2)
					this.viewHeight=minSize;
				else
				this.viewWidth=minSize;
			}
			else {
				var size=0;
				if (this._layout==0 || this._layout==2){
					size=obj.y+obj.height;
					if (size < minSize)
						size=minSize;
					this.viewHeight=size;
				}
				else {
					size=obj.x+obj.width;
					if (size < minSize)
						size=minSize;
					this.viewWidth=size;
				}
			}
		}
	}

	__proto.getMaxItemWidth=function(){
		var cnt=this._children.length;
		var max=0;
		for (var i=0;i < cnt;i++){
			var child=this.getChildAt(i);
			if (child.width > max)
				max=child.width;
		}
		return max;
	}

	__proto.handleSizeChanged=function(){
		_super.prototype.handleSizeChanged.call(this);
		this.setBoundsChangedFlag();
		if (this._virtual)
			this.setVirtualListChangedFlag(true);
	}

	__proto.handleControllerChanged=function(c){
		_super.prototype.handleControllerChanged.call(this,c);
		if (this._selectionController==c)
			this.selectedIndex=c.selectedIndex;
	}

	__proto.updateSelectionController=function(index){
		if (this._selectionController !=null && !this._selectionController.changing
			&& index < this._selectionController.pageCount){
			var c=this._selectionController;
			this._selectionController=null;
			c.selectedIndex=index;
			this._selectionController=c;
		}
	}

	__proto.getSnappingPosition=function(xValue,yValue,resultPoint){
		if (this._virtual){
			if(!resultPoint)
				resultPoint=new Point();
			var saved=NaN;
			var index=0;
			if (this._layout==0 || this._layout==2){
				saved=yValue;
				fairygui.GList.pos_param=yValue;
				index=this.getIndexOnPos1(false);
				yValue=fairygui.GList.pos_param;
				if (index < this._virtualItems.length && saved-yValue > this._virtualItems[index].height / 2 && index < this._realNumItems)
					yValue+=this._virtualItems[index].height+this._lineGap;
			}
			else if (this._layout==1 || this._layout==3){
				saved=xValue;
				fairygui.GList.pos_param=xValue;
				index=this.getIndexOnPos2(false);
				xValue=fairygui.GList.pos_param;
				if (index < this._virtualItems.length && saved-xValue > this._virtualItems[index].width / 2 && index < this._realNumItems)
					xValue+=this._virtualItems[index].width+this._columnGap;
			}
			else{
				saved=xValue;
				fairygui.GList.pos_param=xValue;
				index=this.getIndexOnPos3(false);
				xValue=fairygui.GList.pos_param;
				if (index < this._virtualItems.length && saved-xValue > this._virtualItems[index].width / 2 && index < this._realNumItems)
					xValue+=this._virtualItems[index].width+this._columnGap;
			}
			resultPoint.x=xValue;
			resultPoint.y=yValue;
			return resultPoint;
		}
		else
		return _super.prototype.getSnappingPosition.call(this,xValue,yValue,resultPoint);
	}

	__proto.scrollToView=function(index,ani,setFirst){
		(ani===void 0)&& (ani=false);
		(setFirst===void 0)&& (setFirst=false);
		if (this._virtual){
			if(this._numItems==0)
				return;
			this.checkVirtualList();
			if (index >=this._virtualItems.length)
				throw new Error("Invalid child index: "+index+">"+this._virtualItems.length);
			if(this._loop)
				index=Math.floor(this._firstIndex/this._numItems)*this._numItems+index;
			var rect;
			var ii=this._virtualItems[index];
			var pos=0;
			var i=0;
			if (this._layout==0 || this._layout==2){
				for (i=0;i < index;i+=this._curLineItemCount)
				pos+=this._virtualItems[i].height+this._lineGap;
				rect=new Rectangle(0,pos,this._itemSize.x,ii.height);
			}
			else if (this._layout==1 || this._layout==3){
				for (i=0;i < index;i+=this._curLineItemCount)
				pos+=this._virtualItems[i].width+this._columnGap;
				rect=new Rectangle(pos,0,ii.width,this._itemSize.y);
			}
			else{
				var page=index / (this._curLineItemCount *this._curLineItemCount2);
				rect=new Rectangle(page *this.viewWidth+(index % this._curLineItemCount)*(ii.width+this._columnGap),
				(index / this._curLineItemCount)% this._curLineItemCount2 *(ii.height+this._lineGap),
				ii.width,ii.height);
			}
			setFirst=true;
			if (this._scrollPane !=null)
				this._scrollPane.scrollToView(rect,ani,setFirst);
		}
		else{
			var obj=this.getChildAt(index);
			if (this._scrollPane !=null)
				this._scrollPane.scrollToView(obj,ani,setFirst);
			else if (this.parent !=null && this.parent.scrollPane !=null)
			this.parent.scrollPane.scrollToView(obj,ani,setFirst);
		}
	}

	__proto.getFirstChildInView=function(){
		return this.childIndexToItemIndex(_super.prototype.getFirstChildInView.call(this));
	}

	__proto.childIndexToItemIndex=function(index){
		if (!this._virtual)
			return index;
		if (this._layout==4){
			for (var i=this._firstIndex;i < this._realNumItems;i++){
				if (this._virtualItems[i].obj !=null){
					index--;
					if (index < 0)
						return i;
				}
			}
			return index;
		}
		else{
			index+=this._firstIndex;
			if (this._loop && this._numItems > 0)
				index=index % this._numItems;
			return index;
		}
	}

	__proto.itemIndexToChildIndex=function(index){
		if (!this._virtual)
			return index;
		if (this._layout==4){
			return this.getChildIndex(this._virtualItems[index].obj);
		}
		else{
			if (this._loop && this._numItems > 0){
				var j=this._firstIndex % this._numItems;
				if (index >=j)
					index=this._firstIndex+(index-j);
				else
				index=this._firstIndex+this._numItems+(j-index);
			}
			else
			index-=this._firstIndex;
			return index;
		}
	}

	__proto.setVirtual=function(){
		this._setVirtual(false);
	}

	/// </summary>
	__proto.setVirtualAndLoop=function(){
		this._setVirtual(true);
	}

	/// </summary>
	__proto._setVirtual=function(loop){
		if(!this._virtual){
			if(this._scrollPane==null)
				throw new Error("Virtual list must be scrollable!");
			if(loop){
				if(this._layout==2 || this._layout==3)
					throw new Error("Loop list is not supported for FlowHorizontal or FlowVertical layout!");
				this._scrollPane.bouncebackEffect=false;
			}
			this._virtual=true;
			this._loop=loop;
			this._virtualItems=[];
			this.removeChildrenToPool();
			if(this._itemSize==null){
				this._itemSize=new Point();
				var obj=this.getFromPool(null);
				if (obj==null){
					throw new Error("Virtual List must have a default list item resource.");
				}
				else{
					this._itemSize.x=obj.width;
					this._itemSize.y=obj.height;
				}
				this.returnToPool(obj);
			}
			if(this._layout==0 || this._layout==2){
				this._scrollPane.scrollStep=this._itemSize.y;
				if(this._loop)
					this._scrollPane._loop=2;
			}
			else{
				this._scrollPane.scrollStep=this._itemSize.x;
				if(this._loop)
					this._scrollPane._loop=1;
			}
			this.on("fui_scroll",this,this.__scrolled);
			this.setVirtualListChangedFlag(true);
		}
	}

	__proto.refreshVirtualList=function(){
		this.setVirtualListChangedFlag(false);
	}

	__proto.checkVirtualList=function(){
		if(this._virtualListChanged!=0){
			this._refreshVirtualList();
			Laya.timer.clear(this,this._refreshVirtualList);
		}
	}

	__proto.setVirtualListChangedFlag=function(layoutChanged){
		(layoutChanged===void 0)&& (layoutChanged=false);
		if(layoutChanged)
			this._virtualListChanged=2;
		else if(this._virtualListChanged==0)
		this._virtualListChanged=1;
		Laya.timer.callLater(this,this._refreshVirtualList);
	}

	__proto._refreshVirtualList=function(){
		var layoutChanged=this._virtualListChanged==2;
		this._virtualListChanged=0;
		this._eventLocked=true;
		if (layoutChanged){
			if (this._layout==0 || this._layout==1)
				this._curLineItemCount=1;
			else if (this._layout==2){
				if (this._columnCount > 0)
					this._curLineItemCount=this._columnCount;
				else{
					this._curLineItemCount=Math.floor((this._scrollPane.viewWidth+this._columnGap)/ (this._itemSize.x+this._columnGap));
					if (this._curLineItemCount <=0)
						this._curLineItemCount=1;
				}
			}
			else if (this._layout==3){
				if (this._lineCount > 0)
					this._curLineItemCount=this._lineCount;
				else{
					this._curLineItemCount=Math.floor((this._scrollPane.viewHeight+this._lineGap)/ (this._itemSize.y+this._lineGap));
					if (this._curLineItemCount <=0)
						this._curLineItemCount=1;
				}
			}
			else{
				if (this._columnCount > 0)
					this._curLineItemCount=this._columnCount;
				else{
					this._curLineItemCount=Math.floor((this._scrollPane.viewWidth+this._columnGap)/ (this._itemSize.x+this._columnGap));
					if (this._curLineItemCount <=0)
						this._curLineItemCount=1;
				}
				if (this._lineCount > 0)
					this._curLineItemCount2=this._lineCount;
				else{
					this._curLineItemCount2=Math.floor((this._scrollPane.viewHeight+this._lineGap)/ (this._itemSize.y+this._lineGap));
					if (this._curLineItemCount2 <=0)
						this._curLineItemCount2=1;
				}
			}
		};
		var ch=0,cw=0;
		if (this._realNumItems > 0){
			var i=0;
			var len=Math.ceil(this._realNumItems / this._curLineItemCount)*this._curLineItemCount;
			var len2=Math.min(this._curLineItemCount,this._realNumItems);
			if (this._layout==0 || this._layout==2){
				for (i=0;i < len;i+=this._curLineItemCount)
				ch+=this._virtualItems[i].height+this._lineGap;
				if (ch > 0)
					ch-=this._lineGap;
				if (this._autoResizeItem)
					cw=this._scrollPane.viewWidth;
				else{
					for (i=0;i < len2;i++)
					cw+=this._virtualItems[i].width+this._columnGap;
					if (cw > 0)
						cw-=this._columnGap;
				}
			}
			else if (this._layout==1 || this._layout==3){
				for (i=0;i < len;i+=this._curLineItemCount)
				cw+=this._virtualItems[i].width+this._columnGap;
				if (cw > 0)
					cw-=this._columnGap;
				if (this._autoResizeItem)
					ch=this._scrollPane.viewHeight;
				else{
					for (i=0;i < len2;i++)
					ch+=this._virtualItems[i].height+this._lineGap;
					if (ch > 0)
						ch-=this._lineGap;
				}
			}
			else{
				var pageCount=Math.ceil(len / (this._curLineItemCount *this._curLineItemCount2));
				cw=pageCount *this.viewWidth;
				ch=this.viewHeight;
			}
		}
		this.handleAlign(cw,ch);
		this._scrollPane.setContentSize(cw,ch);
		this._eventLocked=false;
		this.handleScroll(true);
	}

	__proto.__scrolled=function(evt){
		this.handleScroll(false);
	}

	__proto.getIndexOnPos1=function(forceUpdate){
		if (this._realNumItems < this._curLineItemCount){
			GList.pos_param=0;
			return 0;
		};
		var i=0;
		var pos2=NaN;
		var pos3=NaN;
		if (this.numChildren > 0 && !forceUpdate){
			pos2=this.getChildAt(0).y;
			if (pos2 > GList.pos_param){
				for (i=this._firstIndex-this._curLineItemCount;i >=0;i-=this._curLineItemCount){
					pos2-=(this._virtualItems[i].height+this._lineGap);
					if (pos2 <=GList.pos_param){
						GList.pos_param=pos2;
						return i;
					}
				}
				GList.pos_param=0;
				return 0;
			}
			else{
				for (i=this._firstIndex;i < this._realNumItems;i+=this._curLineItemCount){
					pos3=pos2+this._virtualItems[i].height+this._lineGap;
					if (pos3 > GList.pos_param){
						GList.pos_param=pos2;
						return i;
					}
					pos2=pos3;
				}
				GList.pos_param=pos2;
				return this._realNumItems-this._curLineItemCount;
			}
		}
		else{
			pos2=0;
			for (i=0;i < this._realNumItems;i+=this._curLineItemCount){
				pos3=pos2+this._virtualItems[i].height+this._lineGap;
				if (pos3 > GList.pos_param){
					GList.pos_param=pos2;
					return i;
				}
				pos2=pos3;
			}
			GList.pos_param=pos2;
			return this._realNumItems-this._curLineItemCount;
		}
	}

	__proto.getIndexOnPos2=function(forceUpdate){
		if (this._realNumItems < this._curLineItemCount){
			GList.pos_param=0;
			return 0;
		};
		var i=0;
		var pos2=NaN;
		var pos3=NaN;
		if (this.numChildren > 0 && !forceUpdate){
			pos2=this.getChildAt(0).x;
			if (pos2 > GList.pos_param){
				for (i=this._firstIndex-this._curLineItemCount;i >=0;i-=this._curLineItemCount){
					pos2-=(this._virtualItems[i].width+this._columnGap);
					if (pos2 <=GList.pos_param){
						GList.pos_param=pos2;
						return i;
					}
				}
				GList.pos_param=0;
				return 0;
			}
			else{
				for (i=this._firstIndex;i < this._realNumItems;i+=this._curLineItemCount){
					pos3=pos2+this._virtualItems[i].width+this._columnGap;
					if (pos3 > GList.pos_param){
						GList.pos_param=pos2;
						return i;
					}
					pos2=pos3;
				}
				GList.pos_param=pos2;
				return this._realNumItems-this._curLineItemCount;
			}
		}
		else{
			pos2=0;
			for (i=0;i < this._realNumItems;i+=this._curLineItemCount){
				pos3=pos2+this._virtualItems[i].width+this._columnGap;
				if (pos3 > GList.pos_param){
					GList.pos_param=pos2;
					return i;
				}
				pos2=pos3;
			}
			GList.pos_param=pos2;
			return this._realNumItems-this._curLineItemCount;
		}
	}

	__proto.getIndexOnPos3=function(forceUpdate){
		if (this._realNumItems < this._curLineItemCount){
			GList.pos_param=0;
			return 0;
		};
		var viewWidth=this.viewWidth;
		var page=Math.floor(GList.pos_param / viewWidth);
		var startIndex=page *(this._curLineItemCount *this._curLineItemCount2);
		var pos2=page *viewWidth;
		var i=0;
		var pos3=NaN;
		for (i=0;i < this._curLineItemCount;i++){
			pos3=pos2+this._virtualItems[startIndex+i].width+this._columnGap;
			if (pos3 > GList.pos_param){
				GList.pos_param=pos2;
				return startIndex+i;
			}
			pos2=pos3;
		}
		GList.pos_param=pos2;
		return startIndex+this._curLineItemCount-1;
	}

	__proto.handleScroll=function(forceUpdate){
		if (this._eventLocked)
			return;
		this.enterCounter=0;
		if (this._layout==0 || this._layout==2){
			this.handleScroll1(forceUpdate);
			this.handleArchOrder1();
		}
		else if (this._layout==1 || this._layout==3){
			this.handleScroll2(forceUpdate);
			this.handleArchOrder2();
		}
		else{
			this.handleScroll3(forceUpdate);
		}
		this._boundsChanged=false;
	}

	__proto.handleScroll1=function(forceUpdate){
		this.enterCounter++;
		if (this.enterCounter > 3){
			console.log("FairyGUI: list will never be filled as the item renderer function always returns a different size.");
			return;
		};
		var pos=this._scrollPane.scrollingPosY;
		var max=pos+this._scrollPane.viewHeight;
		var end=max==this._scrollPane.contentHeight;
		fairygui.GList.pos_param=pos;
		var newFirstIndex=this.getIndexOnPos1(forceUpdate);
		pos=fairygui.GList.pos_param;
		if (newFirstIndex==this._firstIndex && !forceUpdate)
			return;
		var oldFirstIndex=this._firstIndex;
		this._firstIndex=newFirstIndex;
		var curIndex=newFirstIndex;
		var forward=oldFirstIndex > newFirstIndex;
		var oldCount=this.numChildren;
		var lastIndex=oldFirstIndex+oldCount-1;
		var reuseIndex=forward ? lastIndex :oldFirstIndex;
		var curX=0,curY=pos;
		var needRender=false;
		var deltaSize=0;
		var firstItemDeltaSize=0;
		var url=this.defaultItem;
		var ii,ii2;
		var i=0,j=0;
		var partSize=(this._scrollPane.viewWidth-this._columnGap *(this._curLineItemCount-1))/ this._curLineItemCount;
		this.itemInfoVer++;
		while (curIndex < this._realNumItems && (end || curY < max)){
			ii=this._virtualItems[curIndex];
			if (ii.obj==null || forceUpdate){
				if (this.itemProvider !=null){
					url=this.itemProvider.runWith(curIndex % this._numItems);
					if (url==null)
						url=this._defaultItem;
					url=UIPackage.normalizeURL(url);
				}
				if (ii.obj !=null && ii.obj.resourceURL !=url){
					if ((ii.obj instanceof fairygui.GButton ))
						ii.selected=(ii.obj).selected;
					this.removeChildToPool(ii.obj);
					ii.obj=null;
				}
			}
			if (ii.obj==null){
				if (forward){
					for (j=reuseIndex;j >=oldFirstIndex;j--){
						ii2=this._virtualItems[j];
						if (ii2.obj !=null && ii2.updateFlag !=this.itemInfoVer && ii2.obj.resourceURL==url){
							if ((ii2.obj instanceof fairygui.GButton ))
								ii2.selected=(ii2.obj).selected;
							ii.obj=ii2.obj;
							ii2.obj=null;
							if (j==reuseIndex)
								reuseIndex--;
							break ;
						}
					}
				}
				else{
					for (j=reuseIndex;j <=lastIndex;j++){
						ii2=this._virtualItems[j];
						if (ii2.obj !=null && ii2.updateFlag !=this.itemInfoVer && ii2.obj.resourceURL==url){
							if ((ii2.obj instanceof fairygui.GButton ))
								ii2.selected=(ii2.obj).selected;
							ii.obj=ii2.obj;
							ii2.obj=null;
							if (j==reuseIndex)
								reuseIndex++;
							break ;
						}
					}
				}
				if (ii.obj !=null){
					this.setChildIndex(ii.obj,forward ? curIndex-newFirstIndex :this.numChildren);
				}
				else{
					ii.obj=this._pool.getObject(url);
					if (forward)
						this.addChildAt(ii.obj,curIndex-newFirstIndex);
					else
					this.addChild(ii.obj);
				}
				if ((ii.obj instanceof fairygui.GButton ))
					(ii.obj).selected=ii.selected;
				needRender=true;
			}
			else
			needRender=forceUpdate;
			if (needRender){
				if (this._autoResizeItem && (this._layout==0 || this._columnCount > 0))
					ii.obj.setSize(partSize,ii.obj.height,true);
				this.itemRenderer.runWith([curIndex % this._numItems,ii.obj]);
				if (curIndex % this._curLineItemCount==0){
					deltaSize+=Math.ceil(ii.obj.height)-ii.height;
					if (curIndex==newFirstIndex && oldFirstIndex > newFirstIndex){
						firstItemDeltaSize=Math.ceil(ii.obj.height)-ii.height;
					}
				}
				ii.width=Math.ceil(ii.obj.width);
				ii.height=Math.ceil(ii.obj.height);
			}
			ii.updateFlag=this.itemInfoVer;
			ii.obj.setXY(curX,curY);
			if (curIndex==newFirstIndex)
				max+=ii.height;
			curX+=ii.width+this._columnGap;
			if (curIndex % this._curLineItemCount==this._curLineItemCount-1){
				curX=0;
				curY+=ii.height+this._lineGap;
			}
			curIndex++;
		}
		for (i=0;i < oldCount;i++){
			ii=this._virtualItems[oldFirstIndex+i];
			if (ii.updateFlag !=this.itemInfoVer && ii.obj !=null){
				if ((ii.obj instanceof fairygui.GButton ))
					ii.selected=(ii.obj).selected;
				this.removeChildToPool(ii.obj);
				ii.obj=null;
			}
		}
		if (deltaSize !=0 || firstItemDeltaSize !=0)
			this._scrollPane.changeContentSizeOnScrolling(0,deltaSize,0,firstItemDeltaSize);
		if (curIndex > 0 && this.numChildren > 0 && this._container.y < 0 && this.getChildAt(0).y >-this._container.y)
			this.handleScroll1(false);
	}

	__proto.handleScroll2=function(forceUpdate){
		this.enterCounter++;
		if (this.enterCounter > 3){
			console.log("FairyGUI: list will never be filled as the item renderer function always returns a different size.");
			return;
		};
		var pos=this._scrollPane.scrollingPosX;
		var max=pos+this._scrollPane.viewWidth;
		var end=pos==this._scrollPane.contentWidth;
		fairygui.GList.pos_param=pos;
		var newFirstIndex=this.getIndexOnPos2(forceUpdate);
		pos=fairygui.GList.pos_param;
		if (newFirstIndex==this._firstIndex && !forceUpdate)
			return;
		var oldFirstIndex=this._firstIndex;
		this._firstIndex=newFirstIndex;
		var curIndex=newFirstIndex;
		var forward=oldFirstIndex > newFirstIndex;
		var oldCount=this.numChildren;
		var lastIndex=oldFirstIndex+oldCount-1;
		var reuseIndex=forward ? lastIndex :oldFirstIndex;
		var curX=pos,curY=0;
		var needRender=false;
		var deltaSize=0;
		var firstItemDeltaSize=0;
		var url=this.defaultItem;
		var ii,ii2;
		var i=0,j=0;
		var partSize=(this._scrollPane.viewHeight-this._lineGap *(this._curLineItemCount-1))/ this._curLineItemCount;
		this.itemInfoVer++;
		while (curIndex < this._realNumItems && (end || curX < max)){
			ii=this._virtualItems[curIndex];
			if (ii.obj==null || forceUpdate){
				if (this.itemProvider !=null){
					url=this.itemProvider.runWith(curIndex % this._numItems);
					if (url==null)
						url=this._defaultItem;
					url=UIPackage.normalizeURL(url);
				}
				if (ii.obj !=null && ii.obj.resourceURL !=url){
					if ((ii.obj instanceof fairygui.GButton ))
						ii.selected=(ii.obj).selected;
					this.removeChildToPool(ii.obj);
					ii.obj=null;
				}
			}
			if (ii.obj==null){
				if (forward){
					for (j=reuseIndex;j >=oldFirstIndex;j--){
						ii2=this._virtualItems[j];
						if (ii2.obj !=null && ii2.updateFlag !=this.itemInfoVer && ii2.obj.resourceURL==url){
							if ((ii2.obj instanceof fairygui.GButton ))
								ii2.selected=(ii2.obj).selected;
							ii.obj=ii2.obj;
							ii2.obj=null;
							if (j==reuseIndex)
								reuseIndex--;
							break ;
						}
					}
				}
				else{
					for (j=reuseIndex;j <=lastIndex;j++){
						ii2=this._virtualItems[j];
						if (ii2.obj !=null && ii2.updateFlag !=this.itemInfoVer && ii2.obj.resourceURL==url){
							if ((ii2.obj instanceof fairygui.GButton ))
								ii2.selected=(ii2.obj).selected;
							ii.obj=ii2.obj;
							ii2.obj=null;
							if (j==reuseIndex)
								reuseIndex++;
							break ;
						}
					}
				}
				if (ii.obj !=null){
					this.setChildIndex(ii.obj,forward ? curIndex-newFirstIndex :this.numChildren);
				}
				else{
					ii.obj=this._pool.getObject(url);
					if (forward)
						this.addChildAt(ii.obj,curIndex-newFirstIndex);
					else
					this.addChild(ii.obj);
				}
				if ((ii.obj instanceof fairygui.GButton ))
					(ii.obj).selected=ii.selected;
				needRender=true;
			}
			else
			needRender=forceUpdate;
			if (needRender){
				if (this._autoResizeItem && (this._layout==1 || this._lineCount > 0))
					ii.obj.setSize(ii.obj.width,partSize,true);
				this.itemRenderer.runWith([curIndex % this._numItems,ii.obj]);
				if (curIndex % this._curLineItemCount==0){
					deltaSize+=Math.ceil(ii.obj.width)-ii.width;
					if (curIndex==newFirstIndex && oldFirstIndex > newFirstIndex){
						firstItemDeltaSize=Math.ceil(ii.obj.width)-ii.width;
					}
				}
				ii.width=Math.ceil(ii.obj.width);
				ii.height=Math.ceil(ii.obj.height);
			}
			ii.updateFlag=this.itemInfoVer;
			ii.obj.setXY(curX,curY);
			if (curIndex==newFirstIndex)
				max+=ii.width;
			curY+=ii.height+this._lineGap;
			if (curIndex % this._curLineItemCount==this._curLineItemCount-1){
				curY=0;
				curX+=ii.width+this._columnGap;
			}
			curIndex++;
		}
		for (i=0;i < oldCount;i++){
			ii=this._virtualItems[oldFirstIndex+i];
			if (ii.updateFlag !=this.itemInfoVer && ii.obj !=null){
				if ((ii.obj instanceof fairygui.GButton ))
					ii.selected=(ii.obj).selected;
				this.removeChildToPool(ii.obj);
				ii.obj=null;
			}
		}
		if (deltaSize !=0 || firstItemDeltaSize !=0)
			this._scrollPane.changeContentSizeOnScrolling(deltaSize,0,firstItemDeltaSize,0);
		if (curIndex > 0 && this.numChildren > 0 && this._container.x < 0 && this.getChildAt(0).x >-this._container.x)
			this.handleScroll2(false);
	}

	__proto.handleScroll3=function(forceUpdate){
		var pos=this._scrollPane.scrollingPosX;
		fairygui.GList.pos_param=pos;
		var newFirstIndex=this.getIndexOnPos3(forceUpdate);
		pos=fairygui.GList.pos_param;
		if (newFirstIndex==this._firstIndex && !forceUpdate)
			return;
		var oldFirstIndex=this._firstIndex;
		this._firstIndex=newFirstIndex;
		var reuseIndex=oldFirstIndex;
		var virtualItemCount=this._virtualItems.length;
		var pageSize=this._curLineItemCount *this._curLineItemCount2;
		var startCol=newFirstIndex % this._curLineItemCount;
		var viewWidth=this.viewWidth;
		var page=Math.floor(newFirstIndex / pageSize);
		var startIndex=page *pageSize;
		var lastIndex=startIndex+pageSize *2;
		var needRender=false;
		var i=0;
		var ii,ii2;
		var col=0;
		var url=this._defaultItem;
		var partWidth=(this._scrollPane.viewWidth-this._columnGap *(this._curLineItemCount-1))/ this._curLineItemCount;
		var partHeight=(this._scrollPane.viewHeight-this._lineGap *(this._curLineItemCount2-1))/ this._curLineItemCount2;
		this.itemInfoVer++;
		for (i=startIndex;i < lastIndex;i++){
			if (i >=this._realNumItems)
				continue ;
			col=i % this._curLineItemCount;
			if (i-startIndex < pageSize){
				if (col < startCol)
					continue ;
			}
			else{
				if (col > startCol)
					continue ;
			}
			ii=this._virtualItems[i];
			ii.updateFlag=this.itemInfoVer;
		};
		var lastObj=null;
		var insertIndex=0;
		for (i=startIndex;i < lastIndex;i++){
			if (i >=this._realNumItems)
				continue ;
			ii=this._virtualItems[i];
			if (ii.updateFlag !=this.itemInfoVer)
				continue ;
			if (ii.obj==null){
				while (reuseIndex < virtualItemCount){
					ii2=this._virtualItems[reuseIndex];
					if (ii2.obj !=null && ii2.updateFlag !=this.itemInfoVer){
						if ((ii2.obj instanceof fairygui.GButton ))
							ii2.selected=(ii2.obj).selected;
						ii.obj=ii2.obj;
						ii2.obj=null;
						break ;
					}
					reuseIndex++;
				}
				if (insertIndex==-1)
					insertIndex=this.getChildIndex(lastObj)+1;
				if (ii.obj==null){
					if (this.itemProvider !=null){
						url=this.itemProvider.runWith(i % this._numItems);
						if (url==null)
							url=this._defaultItem;
						url=UIPackage.normalizeURL(url);
					}
					ii.obj=this._pool.getObject(url);
					this.addChildAt(ii.obj,insertIndex);
				}
				else{
					insertIndex=this.setChildIndexBefore(ii.obj,insertIndex);
				}
				insertIndex++;
				if ((ii.obj instanceof fairygui.GButton ))
					(ii.obj).selected=ii.selected;
				needRender=true;
			}
			else{
				needRender=forceUpdate;
				insertIndex=-1;
				lastObj=ii.obj;
			}
			if (needRender){
				if (this._autoResizeItem){
					if (this._curLineItemCount==this._columnCount && this._curLineItemCount2==this._lineCount)
						ii.obj.setSize(partWidth,partHeight,true);
					else if (this._curLineItemCount==this._columnCount)
					ii.obj.setSize(partWidth,ii.obj.height,true);
					else if (this._curLineItemCount2==this._lineCount)
					ii.obj.setSize(ii.obj.width,partHeight,true);
				}
				this.itemRenderer.runWith([i % this._numItems,ii.obj]);
				ii.width=Math.ceil(ii.obj.width);
				ii.height=Math.ceil(ii.obj.height);
			}
		};
		var borderX=(startIndex / pageSize)*viewWidth;
		var xx=borderX;
		var yy=0;
		var lineHeight=0;
		for (i=startIndex;i < lastIndex;i++){
			if (i >=this._realNumItems)
				continue ;
			ii=this._virtualItems[i];
			if (ii.updateFlag==this.itemInfoVer)
				ii.obj.setXY(xx,yy);
			if (ii.height > lineHeight)
				lineHeight=ii.height;
			if (i % this._curLineItemCount==this._curLineItemCount-1){
				xx=borderX;
				yy+=lineHeight+this._lineGap;
				lineHeight=0;
				if (i==startIndex+pageSize-1){
					borderX+=viewWidth;
					xx=borderX;
					yy=0;
				}
			}
			else
			xx+=ii.width+this._columnGap;
		}
		for (i=reuseIndex;i < virtualItemCount;i++){
			ii=this._virtualItems[i];
			if (ii.updateFlag !=this.itemInfoVer && ii.obj !=null){
				if ((ii.obj instanceof fairygui.GButton ))
					ii.selected=(ii.obj).selected;
				this.removeChildToPool(ii.obj);
				ii.obj=null;
			}
		}
	}

	__proto.handleArchOrder1=function(){
		if (this.childrenRenderOrder==2){
			var mid=this._scrollPane.posY+this.viewHeight / 2;
			var minDist=Number.POSITIVE_INFINITY;
			var dist=0;
			var apexIndex=0;
			var cnt=this.numChildren;
			for (var i=0;i < cnt;i++){
				var obj=this.getChildAt(i);
				if (!this.foldInvisibleItems || obj.visible){
					dist=Math.abs(mid-obj.y-obj.height / 2);
					if (dist < minDist){
						minDist=dist;
						apexIndex=i;
					}
				}
			}
			this.apexIndex=apexIndex;
		}
	}

	__proto.handleArchOrder2=function(){
		if (this.childrenRenderOrder==2){
			var mid=this._scrollPane.posX+this.viewWidth / 2;
			var minDist=Number.POSITIVE_INFINITY;
			var dist=0;
			var apexIndex=0;
			var cnt=this.numChildren;
			for (var i=0;i < cnt;i++){
				var obj=this.getChildAt(i);
				if (!this.foldInvisibleItems || obj.visible){
					dist=Math.abs(mid-obj.x-obj.width / 2);
					if (dist < minDist){
						minDist=dist;
						apexIndex=i;
					}
				}
			}
			this.apexIndex=apexIndex;
		}
	}

	__proto.handleAlign=function(contentWidth,contentHeight){
		var newOffsetX=0;
		var newOffsetY=0;
		if (contentHeight < this.viewHeight){
			if (this._verticalAlign=="middle")
				newOffsetY=Math.floor((this.viewHeight-contentHeight)/ 2);
			else if (this._verticalAlign=="bottom")
			newOffsetY=this.viewHeight-contentHeight;
		}
		if (contentWidth < this.viewWidth){
			if (this._align=="center")
				newOffsetX=Math.floor((this.viewWidth-contentWidth)/ 2);
			else if (this._align=="right")
			newOffsetX=this.viewWidth-contentWidth;
		}
		if (newOffsetX!=this._alignOffset.x || newOffsetY!=this._alignOffset.y){
			this._alignOffset.setTo(newOffsetX,newOffsetY);
			if (this._scrollPane !=null)
				this._scrollPane.adjustMaskContainer();
			else
			this._container.pos(this._margin.left+this._alignOffset.x,this._margin.top+this._alignOffset.y);
		}
	}

	__proto.updateBounds=function(){
		if(this._virtual)
			return;
		var i=0;
		var child;
		var curX=0;
		var curY=0;
		var maxWidth=0;
		var maxHeight=0;
		var cw=0,ch=0;
		var j=0;
		var page=0;
		var k=0;
		var cnt=this._children.length;
		var viewWidth=this.viewWidth;
		var viewHeight=this.viewHeight;
		var lineSize=0;
		var lineStart=0;
		var ratio=NaN;
		if(this._layout==0){
			for(i=0;i<cnt;i++){
				child=this.getChildAt(i);
				if (this.foldInvisibleItems && !child.visible)
					continue ;
				if (curY !=0)
					curY+=this._lineGap;
				child.y=curY;
				if (this._autoResizeItem)
					child.setSize(viewWidth,child.height,true);
				curY+=Math.ceil(child.height);
				if(child.width>maxWidth)
					maxWidth=child.width;
			}
			cw=Math.ceil(maxWidth);
			ch=curY;
		}
		else if(this._layout==1){
			for(i=0;i<cnt;i++){
				child=this.getChildAt(i);
				if (this.foldInvisibleItems && !child.visible)
					continue ;
				if(curX!=0)
					curX+=this._columnGap;
				child.x=curX;
				if (this._autoResizeItem)
					child.setSize(child.width,viewHeight,true);
				curX+=Math.ceil(child.width);
				if(child.height>maxHeight)
					maxHeight=child.height;
			}
			cw=curX;
			ch=Math.ceil(maxHeight);
		}
		else if(this._layout==2){
			if (this._autoResizeItem && this._columnCount > 0){
				for (i=0;i < cnt;i++){
					child=this.getChildAt(i);
					if (this.foldInvisibleItems && !child.visible)
						continue ;
					lineSize+=child.sourceWidth;
					j++;
					if (j==this._columnCount || i==cnt-1){
						ratio=(viewWidth-lineSize-(j-1)*this._columnGap)/ lineSize;
						curX=0;
						for (j=lineStart;j <=i;j++){
							child=this.getChildAt(j);
							if (this.foldInvisibleItems && !child.visible)
								continue ;
							child.setXY(curX,curY);
							if (j < i){
								child.setSize(child.sourceWidth+Math.round(child.sourceWidth *ratio),child.height,true);
								curX+=Math.ceil(child.width)+this._columnGap;
							}
							else{
								child.setSize(viewWidth-curX,child.height,true);
							}
							if (child.height > maxHeight)
								maxHeight=child.height;
						}
						curY+=Math.ceil(maxHeight)+this._lineGap;
						maxHeight=0;
						j=0;
						lineStart=i+1;
						lineSize=0;
					}
				}
				ch=curY+Math.ceil(maxHeight);
				cw=viewWidth;
			}
			else{
				for(i=0;i<cnt;i++){
					child=this.getChildAt(i);
					if (this.foldInvisibleItems && !child.visible)
						continue ;
					if(curX!=0)
						curX+=this._columnGap;
					if (this._columnCount !=0 && j >=this._columnCount
						|| this._columnCount==0 && curX+child.width > viewWidth && maxHeight !=0){
						curX=0;
						curY+=Math.ceil(maxHeight)+this._lineGap;
						maxHeight=0;
						j=0;
					}
					child.setXY(curX,curY);
					curX+=Math.ceil(child.width);
					if (curX > maxWidth)
						maxWidth=curX;
					if (child.height > maxHeight)
						maxHeight=child.height;
					j++;
				}
				ch=curY+Math.ceil(maxHeight);
				cw=Math.ceil(maxWidth);
			}
		}
		else if (this._layout==3){
			if (this._autoResizeItem && this._lineCount > 0){
				for (i=0;i < cnt;i++){
					child=this.getChildAt(i);
					if (this.foldInvisibleItems && !child.visible)
						continue ;
					lineSize+=child.sourceHeight;
					j++;
					if (j==this._lineCount || i==cnt-1){
						ratio=(viewHeight-lineSize-(j-1)*this._lineGap)/ lineSize;
						curY=0;
						for (j=lineStart;j <=i;j++){
							child=this.getChildAt(j);
							if (this.foldInvisibleItems && !child.visible)
								continue ;
							child.setXY(curX,curY);
							if (j < i){
								child.setSize(child.width,child.sourceHeight+Math.round(child.sourceHeight *ratio),true);
								curY+=Math.ceil(child.height)+this._lineGap;
							}
							else{
								child.setSize(child.width,viewHeight-curY,true);
							}
							if (child.width > maxWidth)
								maxWidth=child.width;
						}
						curX+=Math.ceil(maxWidth)+this._columnGap;
						maxWidth=0;
						j=0;
						lineStart=i+1;
						lineSize=0;
					}
				}
				cw=curX+Math.ceil(maxWidth);
				ch=viewHeight;
			}
			else{
				for(i=0;i<cnt;i++){
					child=this.getChildAt(i);
					if (this.foldInvisibleItems && !child.visible)
						continue ;
					if(curY!=0)
						curY+=this._lineGap;
					if (this._lineCount !=0 && j >=this._lineCount
						|| this._lineCount==0 && curY+child.height > viewHeight && maxWidth !=0){
						curY=0;
						curX+=Math.ceil(maxWidth)+this._columnGap;
						maxWidth=0;
						j=0;
					}
					child.setXY(curX,curY);
					curY+=Math.ceil(child.height);
					if (curY > maxHeight)
						maxHeight=curY;
					if (child.width > maxWidth)
						maxWidth=child.width;
					j++;
				}
				cw=curX+Math.ceil(maxWidth);
				ch=Math.ceil(maxHeight);
			}
		}
		else{
			var eachHeight=0;
			if(this._autoResizeItem && this._lineCount>0)
				eachHeight=Math.floor((viewHeight-(this._lineCount-1)*this._lineGap)/this._lineCount);
			if (this._autoResizeItem && this._columnCount > 0){
				for (i=0;i < cnt;i++){
					child=this.getChildAt(i);
					if (this.foldInvisibleItems && !child.visible)
						continue ;
					lineSize+=child.sourceWidth;
					j++;
					if (j==this._columnCount || i==cnt-1){
						ratio=(viewWidth-lineSize-(j-1)*this._columnGap)/ lineSize;
						curX=0;
						for (j=lineStart;j <=i;j++){
							child=this.getChildAt(j);
							if (this.foldInvisibleItems && !child.visible)
								continue ;
							child.setXY(page *viewWidth+curX,curY);
							if (j < i){
								child.setSize(child.sourceWidth+Math.round(child.sourceWidth *ratio),
								this._lineCount>0?eachHeight:child.height,true);
								curX+=Math.ceil(child.width)+this._columnGap;
							}
							else{
								child.setSize(viewWidth-curX,this._lineCount>0?eachHeight:child.height,true);
							}
							if (child.height > maxHeight)
								maxHeight=child.height;
						}
						curY+=Math.ceil(maxHeight)+this._lineGap;
						maxHeight=0;
						j=0;
						lineStart=i+1;
						lineSize=0;
						k++;
						if (this._lineCount !=0 && k >=this._lineCount
							|| this._lineCount==0 && curY+child.height > viewHeight){
							page++;
							curY=0;
							k=0;
						}
					}
				}
			}
			else{
				for (i=0;i < cnt;i++){
					child=this.getChildAt(i);
					if (this.foldInvisibleItems && !child.visible)
						continue ;
					if (curX !=0)
						curX+=this._columnGap;
					if (this._autoResizeItem && this._lineCount > 0)
						child.setSize(child.width,eachHeight,true);
					if (this._columnCount !=0 && j >=this._columnCount
						|| this._columnCount==0 && curX+child.width > viewWidth && maxHeight !=0){
						curX=0;
						curY+=Math.ceil(maxHeight)+this._lineGap;
						maxHeight=0;
						j=0;
						k++;
						if (this._lineCount !=0 && k >=this._lineCount
							|| this._lineCount==0 && curY+child.height > viewHeight && maxWidth !=0){
							page++;
							curY=0;
							k=0;
						}
					}
					child.setXY(page *viewWidth+curX,curY);
					curX+=Math.ceil(child.width);
					if (curX > maxWidth)
						maxWidth=curX;
					if (child.height > maxHeight)
						maxHeight=child.height;
					j++;
				}
			}
			ch=page > 0 ? viewHeight :curY+Math.ceil(maxHeight);
			cw=(page+1)*viewWidth;
		}
		this.handleAlign(cw,ch);
		this.setBounds(0,0,cw,ch);
	}

	__proto.setup_beforeAdd=function(xml){
		fairygui.GObject.prototype.setup_beforeAdd.call(this,xml);
		var str;
		var arr;
		str=xml.getAttribute("layout");
		if (str)
			this._layout=ListLayoutType.parse(str);
		var overflow=0;
		str=xml.getAttribute("overflow");
		if (str)
			overflow=OverflowType.parse(str);
		else
		overflow=0;
		str=xml.getAttribute("margin");
		if(str)
			this._margin.parse(str);
		str=xml.getAttribute("align");
		if(str)
			this._align=str;
		str=xml.getAttribute("vAlign");
		if(str)
			this._verticalAlign=str;
		if(overflow==2){
			var scroll=0;
			str=xml.getAttribute("scroll");
			if (str)
				scroll=ScrollType.parse(str);
			else
			scroll=1;
			var scrollBarDisplay=0;
			str=xml.getAttribute("scrollBar");
			if (str)
				scrollBarDisplay=ScrollBarDisplayType.parse(str);
			else
			scrollBarDisplay=0;
			var scrollBarFlags=NaN;
			str=xml.getAttribute("scrollBarFlags");
			if(str)
				scrollBarFlags=parseInt(str);
			else
			scrollBarFlags=0;
			var scrollBarMargin=new Margin();
			str=xml.getAttribute("scrollBarMargin");
			if(str)
				scrollBarMargin.parse(str);
			var vtScrollBarRes;
			var hzScrollBarRes;
			str=xml.getAttribute("scrollBarRes");
			if(str){
				arr=str.split(",");
				vtScrollBarRes=arr[0];
				hzScrollBarRes=arr[1];
			};
			var headerRes;
			var footerRes;
			str=xml.getAttribute('ptrRes');
			if(str){
				arr=str.split(",");
				headerRes=arr[0];
				footerRes=arr[1];
			}
			this.setupScroll(scrollBarMargin,scroll,scrollBarDisplay,scrollBarFlags,
			vtScrollBarRes,hzScrollBarRes,headerRes,footerRes);
		}
		else
		this.setupOverflow(overflow);
		str=xml.getAttribute("lineGap");
		if (str)
			this._lineGap=parseInt(str);
		str=xml.getAttribute("colGap");
		if (str)
			this._columnGap=parseInt(str);
		str=xml.getAttribute("lineItemCount");
		if(str){
			if (this._layout==2 || this._layout==4)
				this._columnCount=parseInt(str);
			else if (this._layout==3)
			this._lineCount=parseInt(str);
		}
		str=xml.getAttribute("lineItemCount2");
		if(str)
			this._lineCount=parseInt(str);
		str=xml.getAttribute("selectionMode");
		if (str)
			this._selectionMode=ListSelectionMode.parse(str);
		str=xml.getAttribute("defaultItem");
		if (str)
			this._defaultItem=str;
		str=xml.getAttribute("autoItemSize");
		if (this._layout==1 || this._layout==0)
			this._autoResizeItem=str!="false";
		else
		this._autoResizeItem=str=="true";
		str=xml.getAttribute("renderOrder");
		if(str){
			this._childrenRenderOrder=ChildrenRenderOrder.parse(str);
			if(this._childrenRenderOrder==2){
				str=xml.getAttribute("apex");
				if(str)
					this._apexIndex=parseInt(str);
			}
		};
		var col=xml.childNodes;
		var length=col.length;
		for (var i=0;i < length;i++){
			var cxml=col[i];
			if(cxml.nodeName !="item")
				continue ;
			var url=cxml.getAttribute("url");
			if (!url)
				url=this._defaultItem;
			if (!url)
				continue ;
			var obj=this.getFromPool(url);
			if(obj !=null){
				this.addChild(obj);
				str=cxml.getAttribute("title");
				if(str)
					obj.text=str;
				str=cxml.getAttribute("icon");
				if(str)
					obj.icon=str;
				str=cxml.getAttribute("name");
				if(str)
					obj.name=str;
				str=cxml.getAttribute("selectedIcon");
				if(str && ((obj instanceof fairygui.GButton )))
					(obj).selectedIcon=str;
			}
		}
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		var str;
		str=xml.getAttribute("selectionController");
		if(str)
			this._selectionController=this.parent.getController(str);
	}

	__getset(0,__proto,'layout',function(){
		return this._layout;
		},function(value){
		if (this._layout !=value){
			this._layout=value;
			this.setBoundsChangedFlag();
			if(this._virtual)
				this.setVirtualListChangedFlag(true);
		}
	});

	__getset(0,__proto,'align',function(){
		return this._align;
		},function(value){
		if(this._align!=value){
			this._align=value;
			this.setBoundsChangedFlag();
			if (this._virtual)
				this.setVirtualListChangedFlag(true);
		}
	});

	__getset(0,__proto,'lineCount',function(){
		return this._lineCount;
		},function(value){
		if (this._lineCount !=value){
			this._lineCount=value;
			if (this._layout==3 || this._layout==4){
				this.setBoundsChangedFlag();
				if (this._virtual)
					this.setVirtualListChangedFlag(true);
			}
		}
	});

	__getset(0,__proto,'columnCount',function(){
		return this._columnCount;
		},function(value){
		if (this._columnCount !=value){
			this._columnCount=value;
			if (this._layout==2 || this._layout==4){
				this.setBoundsChangedFlag();
				if (this._virtual)
					this.setVirtualListChangedFlag(true);
			}
		}
	});

	__getset(0,__proto,'lineGap',function(){
		return this._lineGap;
		},function(value){
		if (this._lineGap !=value){
			this._lineGap=value;
			this.setBoundsChangedFlag();
			if(this._virtual)
				this.setVirtualListChangedFlag(true);
		}
	});

	__getset(0,__proto,'columnGap',function(){
		return this._columnGap;
		},function(value){
		if(this._columnGap !=value){
			this._columnGap=value;
			this.setBoundsChangedFlag();
			if (this._virtual)
				this.setVirtualListChangedFlag(true);
		}
	});

	__getset(0,__proto,'verticalAlign',function(){
		return this._verticalAlign;
		},function(value){
		if(this._verticalAlign!=value){
			this._verticalAlign=value;
			this.setBoundsChangedFlag();
			if (this._virtual)
				this.setVirtualListChangedFlag(true);
		}
	});

	__getset(0,__proto,'virtualItemSize',function(){
		return this._itemSize;
		},function(value){
		if(this._virtual){
			if(this._itemSize==null)
				this._itemSize=new Point();
			this._itemSize.setTo(value.x,value.y);
			this.setVirtualListChangedFlag(true);
		}
	});

	__getset(0,__proto,'defaultItem',function(){
		return this._defaultItem;
		},function(val){
		this._defaultItem=val;
	});

	__getset(0,__proto,'autoResizeItem',function(){
		return this._autoResizeItem;
		},function(value){
		if(this._autoResizeItem !=value){
			this._autoResizeItem=value;
			this.setBoundsChangedFlag();
			if (this._virtual)
				this.setVirtualListChangedFlag(true);
		}
	});

	__getset(0,__proto,'selectionMode',function(){
		return this._selectionMode;
		},function(value){
		this._selectionMode=value;
	});

	__getset(0,__proto,'selectionController',function(){
		return this._selectionController;
		},function(value){
		this._selectionController=value;
	});

	__getset(0,__proto,'itemPool',function(){
		return this._pool;
	});

	__getset(0,__proto,'selectedIndex',function(){
		var i=0;
		if (this._virtual){
			for (i=0;i < this._realNumItems;i++){
				var ii=this._virtualItems[i];
				if (((ii.obj instanceof fairygui.GButton ))&& (ii.obj).selected
					|| ii.obj==null && ii.selected){
					if (this._loop)
						return i % this._numItems;
					else
					return i;
				}
			}
		}
		else{
			var cnt=this._children.length;
			for (i=0;i < cnt;i++){
				var obj=this._children[i].asButton;
				if (obj !=null && obj.selected)
					return i;
			}
		}
		return-1;
		},function(value){
		if (value >=0 && value < this.numItems){
			if(this._selectionMode!=0)
				this.clearSelection();
			this.addSelection(value);
		}
		else
		this.clearSelection();
	});

	/// </summary>
	__getset(0,__proto,'numItems',function(){
		if(this._virtual)
			return this._numItems;
		else
		return this._children.length;
		},function(value){
		var i=0;
		if (this._virtual){
			if (this.itemRenderer==null)
				throw new Error("Set itemRenderer first!");
			this._numItems=value;
			if (this._loop)
				this._realNumItems=this._numItems *6;
			else
			this._realNumItems=this._numItems;
			var oldCount=this._virtualItems.length;
			if (this._realNumItems > oldCount){
				for (i=oldCount;i < this._realNumItems;i++){
					var ii=new ItemInfo();
					ii.width=this._itemSize.x;
					ii.height=this._itemSize.y;
					this._virtualItems.push(ii);
				}
			}
			else{
				for (i=this._realNumItems;i < oldCount;i++)
				this._virtualItems[i].selected=false;
			}
			if (this._virtualListChanged !=0)
				Laya.timer.clear(this,this._refreshVirtualList);
			this._refreshVirtualList();
		}
		else{
			var cnt=this._children.length;
			if (value > cnt){
				for (i=cnt;i < value;i++){
					if (this.itemProvider==null)
						this.addItemFromPool();
					else
					this.addItemFromPool(this.itemProvider.runWith(i));
				}
			}
			else{
				this.removeChildrenToPool(value,cnt);
			}
			if (this.itemRenderer !=null){
				for (i=0;i < value;i++)
				this.itemRenderer.runWith([i,this.getChildAt(i)]);
			}
		}
	});

	GList.pos_param=NaN;
	GList.__init$=function(){
		//class ItemInfo
		ItemInfo=(function(){
			function ItemInfo(){
				this.width=0;
				this.height=0;
				this.obj=null;
				this.updateFlag=0;
				this.selected=false;
			}
			__class(ItemInfo,'');
			return ItemInfo;
		})()
	}

	return GList;
})(GComponent)


//class fairygui.GRichTextField extends fairygui.GTextField
var GRichTextField=(function(_super){
	function GRichTextField(){
		this.div=null;
		this._text=null;
		this._ubbEnabled=false;
		this._color=null;
		GRichTextField.__super.call(this);
		this._text="";
	}

	__class(GRichTextField,'fairygui.GRichTextField',_super);
	var __proto=GRichTextField.prototype;
	__proto.createDisplayObject=function(){
		this._displayObject=this.div=new HTMLDivElement();
		this._displayObject.mouseEnabled=true;
		this._displayObject["$owner"]=this;
	}

	__proto.handleSizeChanged=function(){
		this.div.size(this.width,this.height);
	}

	__getset(0,__proto,'bold',function(){
		return this.div.style.bold;
		},function(value){
		this.div.style.bold=value;
	});

	__getset(0,__proto,'align',function(){
		return this.div.style.align;
		},function(value){
		this.div.style.align=value;
	});

	__getset(0,__proto,'text',function(){
		return this._text;
		},function(value){
		this._text=value;
		if(this._ubbEnabled)
			this.div.innerHTML=ToolSet.parseUBB(this._text);
		else
		this.div.innerHTML=this._text;
	});

	__getset(0,__proto,'color',function(){
		return this._color;
		},function(value){
		if (this._color !=value){
			this._color=value;
			this.div.color=value;
			if (this._gearColor.controller)
				this._gearColor.updateState();
		}
	});

	__getset(0,__proto,'font',function(){
		return this.div.style.fontFamily;
		},function(value){
		this.div.style.fontFamily=value;
	});

	__getset(0,__proto,'leading',function(){
		return this.div.style.leading;
		},function(value){
		this.div.style.leading=value;
	});

	__getset(0,__proto,'fontSize',function(){
		return this.div.style.fontSize;
		},function(value){
		this.div.style.fontSize=value;
	});

	__getset(0,__proto,'valign',function(){
		return this.div.style.valign;
		},function(value){
		this.div.style.valign=value;
	});

	__getset(0,__proto,'italic',function(){
		return this.div.style.italic;
		},function(value){
		this.div.style.italic=value;
	});

	__getset(0,__proto,'stroke',function(){
		return this.div.style.stroke;
		},function(value){
		this.div.style.stroke=value;
	});

	__getset(0,__proto,'strokeColor',function(){
		return this.div.style.strokeColor;
		},function(value){
		this.div.style.strokeColor=value;
		this.updateGear(4);
	});

	__getset(0,__proto,'ubbEnabled',function(){
		return this._ubbEnabled;
		},function(value){
		this._ubbEnabled=value;
	});

	return GRichTextField;
})(GTextField)


//class fairygui.GProgressBar extends fairygui.GComponent
var GProgressBar=(function(_super){
	function GProgressBar(){
		this._max=0;
		this._value=0;
		this._titleType=0;
		this._reverse=false;
		this._titleObject=null;
		this._aniObject=null;
		this._barObjectH=null;
		this._barObjectV=null;
		this._barMaxWidth=0;
		this._barMaxHeight=0;
		this._barMaxWidthDelta=0;
		this._barMaxHeightDelta=0;
		this._barStartX=0;
		this._barStartY=0;
		this._tweener=null;
		this._tweenValue=0;
		GProgressBar.__super.call(this);
		this._titleType=0;
		this._value=50;
		this._max=100;
	}

	__class(GProgressBar,'fairygui.GProgressBar',_super);
	var __proto=GProgressBar.prototype;
	__proto.tweenValue=function(value,duration){
		if(this._value !=value){
			if(this._tweener)
				this._tweener.clear();
			this._tweenValue=this._value;
			this._value=value;
			this._tweener=Tween.to(this,{_tweenValue:value },duration *1000,fairygui.GProgressBar.easeLinear,
			Handler.create(this,this.onTweenComplete,null,true));
			this._tweener.update=Handler.create(this,this.onUpdateTween,null,false);
			return this._tweener;
		}
		else
		return null;
	}

	__proto.onUpdateTween=function(){
		this.update(this._tweenValue);
	}

	__proto.onTweenComplete=function(){
		this._tweener=null;
	}

	__proto.update=function(newValue){
		var percent=Math.min(newValue / this._max,1);
		if(this._titleObject){
			switch(this._titleType){
				case 0:
					this._titleObject.text=Math.round(percent *100)+"%";
					break ;
				case 1:
					this._titleObject.text=Math.round(newValue)+"/"+Math.round(this._max);
					break ;
				case 2:
					this._titleObject.text=""+Math.round(newValue);
					break ;
				case 3:
					this._titleObject.text=""+Math.round(this._max);
					break ;
				}
		};
		var fullWidth=this.width-this._barMaxWidthDelta;
		var fullHeight=this.height-this._barMaxHeightDelta;
		if(!this._reverse){
			if(this._barObjectH)
				this._barObjectH.width=Math.round(fullWidth *percent);
			if(this._barObjectV)
				this._barObjectV.height=Math.round(fullHeight *percent);
		}
		else {
			if(this._barObjectH){
				this._barObjectH.width=Math.round(fullWidth *percent);
				this._barObjectH.x=this._barStartX+(fullWidth-this._barObjectH.width);
			}
			if(this._barObjectV){
				this._barObjectV.height=Math.round(fullHeight *percent);
				this._barObjectV.y=this._barStartY+(fullHeight-this._barObjectV.height);
			}
		}
		if((this._aniObject instanceof fairygui.GMovieClip ))
			(this._aniObject).frame=Math.round(percent *100);
	}

	__proto.constructFromXML=function(xml){
		_super.prototype.constructFromXML.call(this,xml);
		xml=ToolSet.findChildNode(xml,"ProgressBar");
		var str;
		str=xml.getAttribute("titleType");
		if(str)
			this._titleType=ProgressTitleType.parse(str);
		this._reverse=xml.getAttribute("reverse")=="true";
		this._titleObject=(this.getChild("title"));
		this._barObjectH=this.getChild("bar");
		this._barObjectV=this.getChild("bar_v");
		this._aniObject=this.getChild("ani");
		if(this._barObjectH){
			this._barMaxWidth=this._barObjectH.width;
			this._barMaxWidthDelta=this.width-this._barMaxWidth;
			this._barStartX=this._barObjectH.x;
		}
		if(this._barObjectV){
			this._barMaxHeight=this._barObjectV.height;
			this._barMaxHeightDelta=this.height-this._barMaxHeight;
			this._barStartY=this._barObjectV.y;
		}
	}

	__proto.handleSizeChanged=function(){
		_super.prototype.handleSizeChanged.call(this);
		if(this._barObjectH)
			this._barMaxWidth=this.width-this._barMaxWidthDelta;
		if(this._barObjectV)
			this._barMaxHeight=this.height-this._barMaxHeightDelta;
		if(!this._underConstruct)
			this.update(this._value);
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		xml=ToolSet.findChildNode(xml,"ProgressBar");
		if (xml){
			this._value=parseInt(xml.getAttribute("value"));
			this._max=parseInt(xml.getAttribute("max"));
		}
		this.update(this._value);
	}

	__proto.dispose=function(){
		if(this._tweener)
			this._tweener.clear();
		_super.prototype.dispose.call(this);
	}

	__getset(0,__proto,'max',function(){
		return this._max;
		},function(value){
		if(this._max !=value){
			this._max=value;
			this.update(this._value);
		}
	});

	__getset(0,__proto,'titleType',function(){
		return this._titleType;
		},function(value){
		if(this._titleType !=value){
			this._titleType=value;
			this.update(this._value);
		}
	});

	__getset(0,__proto,'value',function(){
		return this._value;
		},function(value){
		if(this._tweener !=null){
			this._tweener.clear();
			this._tweener=null;
		}
		if(this._value !=value){
			this._value=value;
			this.update(this._value);
		}
	});

	__static(GProgressBar,
	['easeLinear',function(){return this.easeLinear=Ease.linearNone;}
	]);
	return GProgressBar;
})(GComponent)


//class fairygui.GRoot extends fairygui.GComponent
var GRoot=(function(_super){
	function GRoot(){
		this._modalLayer=null;
		this._popupStack=null;
		this._justClosedPopups=null;
		this._modalWaitPane=null;
		this._focusedObject=null;
		this._tooltipWin=null;
		this._defaultTooltipWin=null;
		this._checkPopups=false;
		GRoot.__super.call(this);
		if(fairygui.GRoot._inst==null)
			fairygui.GRoot._inst=this;
		this.opaque=false;
		this._popupStack=[];
		this._justClosedPopups=[];
		this.displayObject.once("display",this,this.__addedToStage);
	}

	__class(GRoot,'fairygui.GRoot',_super);
	var __proto=GRoot.prototype;
	__proto.showWindow=function(win){
		this.addChild(win);
		win.requestFocus();
		if(win.x > this.width)
			win.x=this.width-win.width;
		else if(win.x+win.width < 0)
		win.x=0;
		if(win.y > this.height)
			win.y=this.height-win.height;
		else if(win.y+win.height < 0)
		win.y=0;
		this.adjustModalLayer();
	}

	__proto.hideWindow=function(win){
		win.hide();
	}

	__proto.hideWindowImmediately=function(win){
		if(win.parent==this)
			this.removeChild(win);
		this.adjustModalLayer();
	}

	__proto.bringToFront=function(win){
		var cnt=this.numChildren;
		var i=NaN;
		if(this._modalLayer.parent!=null && !win.modal)
			i=this.getChildIndex(this._modalLayer)-1;
		else
		i=cnt-1;
		for(;i >=0;i--){
			var g=this.getChildAt(i);
			if(g==win)
				return;
			if((g instanceof fairygui.Window ))
				break ;
		}
		if(i>=0)
			this.setChildIndex(win,i);
	}

	__proto.showModalWait=function(msg){
		if(UIConfig$1.globalModalWaiting !=null){
			if(this._modalWaitPane==null)
				this._modalWaitPane=UIPackage.createObjectFromURL(UIConfig$1.globalModalWaiting);
			this._modalWaitPane.setSize(this.width,this.height);
			this._modalWaitPane.addRelation(this,24);
			this.addChild(this._modalWaitPane);
			this._modalWaitPane.text=msg;
		}
	}

	__proto.closeModalWait=function(){
		if(this._modalWaitPane !=null && this._modalWaitPane.parent !=null)
			this.removeChild(this._modalWaitPane);
	}

	__proto.closeAllExceptModals=function(){
		var arr=this._children.slice();
		var cnt=arr.length;
		for(var i=0;i < cnt;i++){
			var g=arr[i];
			if(((g instanceof fairygui.Window ))&& !(g).modal)
				(g).hide();
		}
	}

	__proto.closeAllWindows=function(){
		var arr=this._children.slice();
		var cnt=arr.length;
		for(var i=0;i < cnt;i++){
			var g=arr[i];
			if((g instanceof fairygui.Window ))
				(g).hide();
		}
	}

	__proto.getTopWindow=function(){
		var cnt=this.numChildren;
		for(var i=cnt-1;i >=0;i--){
			var g=this.getChildAt(i);
			if((g instanceof fairygui.Window )){
				return (g);
			}
		}
		return null;
	}

	__proto.showPopup=function(popup,target,downward){
		if(this._popupStack.length > 0){
			var k=this._popupStack.indexOf(popup);
			if(k !=-1){
				for(var i=this._popupStack.length-1;i >=k;i--)
				this.removeChild(this._popupStack.pop());
			}
		}
		this._popupStack.push(popup);
		if (target !=null){
			var p=target;
			while (p !=null){
				if (p.parent==this){
					if (popup.sortingOrder < p.sortingOrder){
						popup.sortingOrder=p.sortingOrder;
					}
					break ;
				}
				p=p.parent;
			}
		}
		this.addChild(popup);
		this.adjustModalLayer();
		var pos;
		var sizeW=0,sizeH=0;
		if(target){
			pos=target.localToGlobal();
			sizeW=target.width;
			sizeH=target.height;
		}
		else {
			pos=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY);
		};
		var xx=NaN,yy=NaN;
		xx=pos.x;
		if(xx+popup.width > this.width)
			xx=xx+sizeW-popup.width;
		yy=pos.y+sizeH;
		if((downward==null && yy+popup.height > this.height)
			|| downward==false){
			yy=pos.y-popup.height-1;
			if(yy < 0){
				yy=0;
				xx+=sizeW / 2;
			}
		}
		popup.x=xx;
		popup.y=yy;
	}

	__proto.togglePopup=function(popup,target,downward){
		if(this._justClosedPopups.indexOf(popup)!=-1)
			return;
		this.showPopup(popup,target,downward);
	}

	__proto.hidePopup=function(popup){
		if(popup !=null){
			var k=this._popupStack.indexOf(popup);
			if(k !=-1){
				for(var i=this._popupStack.length-1;i >=k;i--)
				this.closePopup(this._popupStack.pop());
			}
		}
		else {
			var cnt=this._popupStack.length;
			for(i=cnt-1;i >=0;i--)
			this.closePopup(this._popupStack[i]);
			this._popupStack.length=0;
		}
	}

	__proto.closePopup=function(target){
		if(target.parent !=null){
			if((target instanceof fairygui.Window ))
				(target).hide();
			else
			this.removeChild(target);
		}
	}

	__proto.showTooltips=function(msg){
		if (this._defaultTooltipWin==null){
			var resourceURL=UIConfig$1.tooltipsWin;
			if (!resourceURL){
				Log.print("UIConfig.tooltipsWin not defined");
				return;
			}
			this._defaultTooltipWin=UIPackage.createObjectFromURL(resourceURL);
		}
		this._defaultTooltipWin.text=msg;
		this.showTooltipsWin(this._defaultTooltipWin);
	}

	__proto.showTooltipsWin=function(tooltipWin,position){
		this.hideTooltips();
		this._tooltipWin=tooltipWin;
		var xx=0;
		var yy=0;
		if (position==null){
			xx=Laya.stage.mouseX+10;
			yy=Laya.stage.mouseY+20;
		}
		else {
			xx=position.x;
			yy=position.y;
		};
		var pt=this.globalToLocal(xx,yy);
		xx=pt.x;
		yy=pt.y;
		if (xx+this._tooltipWin.width > this.width){
			xx=xx-this._tooltipWin.width-1;
			if (xx < 0)
				xx=10;
		}
		if (yy+this._tooltipWin.height > this.height){
			yy=yy-this._tooltipWin.height-1;
			if (xx-this._tooltipWin.width-1 > 0)
				xx=xx-this._tooltipWin.width-1;
			if (yy < 0)
				yy=10;
		}
		this._tooltipWin.x=xx;
		this._tooltipWin.y=yy;
		this.addChild(this._tooltipWin);
	}

	__proto.hideTooltips=function(){
		if (this._tooltipWin !=null){
			if (this._tooltipWin.parent)
				this.removeChild(this._tooltipWin);
			this._tooltipWin=null;
		}
	}

	__proto.getObjectUnderPoint=function(globalX,globalY){
		return null;
	}

	__proto.setFocus=function(value){
		if(this._focusedObject!=value){
			this._focusedObject=value;
			this.displayObject.event("fui_focus_changed");
		}
	}

	__proto.playOneShotSound=function(url,volumeScale){
		(volumeScale===void 0)&& (volumeScale=1);
		if(ToolSet.startsWith(url,"ui://"))
			return;
		SoundManager.playSound(url);
	}

	__proto.adjustModalLayer=function(){
		var cnt=this.numChildren;
		if (this._modalWaitPane !=null && this._modalWaitPane.parent !=null)
			this.setChildIndex(this._modalWaitPane,cnt-1);
		for(var i=cnt-1;i >=0;i--){
			var g=this.getChildAt(i);
			if(((g instanceof fairygui.Window ))&& (g).modal){
				if(this._modalLayer.parent==null)
					this.addChildAt(this._modalLayer,i);
				else
				this.setChildIndexBefore(this._modalLayer,i);
				return;
			}
		}
		if (this._modalLayer.parent !=null)
			this.removeChild(this._modalLayer);
	}

	__proto.__addedToStage=function(){
		Laya.stage.on("mousedown",this,this.__stageMouseDown);
		Laya.stage.on("mouseup",this,this.__stageMouseUp);
		this._modalLayer=new GGraph();
		this._modalLayer.setSize(this.width,this.height);
		this._modalLayer.drawRect(0,null,UIConfig$1.modalLayerColor);
		this._modalLayer.addRelation(this,24);
		this.displayObject.stage.on("resize",this,this.__winResize);
		this.__winResize();
	}

	__proto.checkPopups=function(clickTarget){
		if(this._checkPopups)
			return;
		this._checkPopups=true;
		this._justClosedPopups.length=0;
		if (this._popupStack.length > 0){
			var mc=clickTarget;
			while (mc !=this.displayObject.stage && mc !=null){
				if (mc["$owner"]){
					var pindex=this._popupStack.indexOf(mc["$owner"]);
					if (pindex !=-1){
						for(var i=this._popupStack.length-1;i > pindex;i--){
							var popup=this._popupStack.pop();
							this.closePopup(popup);
							this._justClosedPopups.push(popup);
						}
						return;
					}
				}
				mc=mc.parent;
			};
			var cnt=this._popupStack.length;
			for(i=cnt-1;i >=0;i--){
				popup=this._popupStack[i];
				this.closePopup(popup);
				this._justClosedPopups.push(popup);
			}
			this._popupStack.length=0;
		}
	}

	__proto.__stageMouseDown=function(evt){
		var mc=evt.target;
		while (mc !=this.displayObject.stage && mc !=null){
			if (mc["$owner"]){
				var gg=mc["$owner"];
				if (gg.touchable && gg.focusable){
					this.setFocus(gg);
					break ;
				}
			}
			mc=mc.parent;
		}
		if (this._tooltipWin !=null)
			this.hideTooltips();
		this.checkPopups(evt.target);
	}

	__proto.__stageMouseUp=function(){
		this._checkPopups=false;
	}

	__proto.__winResize=function(){
		this.setSize(Laya.stage.width,Laya.stage.height);
	}

	__getset(0,__proto,'focus',function(){
		if (this._focusedObject && !this._focusedObject.onStage)
			this._focusedObject=null;
		return this._focusedObject;
		},function(value){
		if (value && (!value.focusable || !value.onStage))
			throw "invalid focus target";
		this.setFocus(value);
	});

	__getset(0,__proto,'hasAnyPopup',function(){
		return this._popupStack.length !=0;
	});

	__getset(0,__proto,'modalLayer',function(){
		return this._modalLayer;
	});

	__getset(0,__proto,'hasModalWindow',function(){
		return this._modalLayer.parent !=null;
	});

	__getset(0,__proto,'modalWaiting',function(){
		return this._modalWaitPane && this._modalWaitPane.inContainer;
	});

	__getset(0,__proto,'volumeScale',function(){
		return SoundManager.soundVolume;
		},function(value){
		SoundManager.soundVolume=value;
	});

	__getset(1,GRoot,'inst',function(){
		if(fairygui.GRoot._inst==null)
			new GRoot();
		return fairygui.GRoot._inst;
	},fairygui.GComponent._$SET_inst);

	GRoot._inst=null;
	return GRoot;
})(GComponent)


//class fairygui.GTextInput extends fairygui.GTextField
var GTextInput=(function(_super){
	function GTextInput(){
		this.input=null;
		GTextInput.__super.call(this);
	}

	__class(GTextInput,'fairygui.GTextInput',_super);
	var __proto=GTextInput.prototype;
	__proto.createDisplayObject=function(){
		this._displayObject=this.input=new Input();
		this._displayObject.mouseEnabled=true;
		this._displayObject["$owner"]=this;
	}

	__proto.handleSizeChanged=function(){
		this.input.size(this.width,this.height);
	}

	__proto.setup_beforeAdd=function(xml){
		_super.prototype.setup_beforeAdd.call(this,xml);
		var str=xml.getAttribute("prompt");
		if(str)
			this.promptText=str;
		str=xml.getAttribute("maxLength");
		if(str)
			this.input.maxChars=parseInt(str);
		str=xml.getAttribute("restrict");
		if(str)
			this.input.restrict=str;
		if(xml.getAttribute("password")=="true")
			this.password=true;
		else{
			str=xml.getAttribute("keyboardType");
			if(str=="4")
				this.keyboardType="number";
			else if(str=="3")
			this.keyboardType="url";
		}
	}

	__getset(0,__proto,'bold',function(){
		return this.input.bold;
		},function(value){
		this.input.bold=value;
	});

	__getset(0,__proto,'align',function(){
		return this.input.align;
		},function(value){
		this.input.align=value;
	});

	__getset(0,__proto,'text',function(){
		return this.input.text;
		},function(value){
		this.input.text=value;
	});

	__getset(0,__proto,'password',function(){
		return this.input.type=="password";
		},function(value){
		if (value)
			this.input.type="password";
		else
		this.input.type="text";
	});

	__getset(0,__proto,'color',function(){
		return this.input.color;
		},function(value){
		this.input.color=value;
	});

	__getset(0,__proto,'font',function(){
		return this.input.font;
		},function(value){
		this.input.font=value;
	});

	__getset(0,__proto,'leading',function(){
		return this.input.leading;
		},function(value){
		this.input.leading=value;
	});

	__getset(0,__proto,'maxLength',function(){
		return this.input.maxChars;
		},function(value){
		this.input.maxChars=value;
	});

	__getset(0,__proto,'fontSize',function(){
		return this.input.fontSize;
		},function(value){
		this.input.fontSize=value;
	});

	__getset(0,__proto,'valign',function(){
		return this.input.valign;
		},function(value){
		this.input.valign=value;
	});

	__getset(0,__proto,'italic',function(){
		return this.input.italic;
		},function(value){
		this.input.italic=value;
	});

	__getset(0,__proto,'singleLine',function(){
		return !this.input.multiline;
		},function(value){
		this.input.multiline=!value;
	});

	__getset(0,__proto,'stroke',function(){
		return this.input.stroke;
		},function(value){
		this.input.stroke=value;
	});

	__getset(0,__proto,'strokeColor',function(){
		return this.input.strokeColor;
		},function(value){
		this.input.strokeColor=value;
		this.updateGear(4);
	});

	__getset(0,__proto,'keyboardType',function(){
		return this.input.type;
		},function(value){
		this.input.type=value;
	});

	__getset(0,__proto,'editable',function(){
		return this.input.editable;
		},function(value){
		this.input.editable=value;
	});

	__getset(0,__proto,'promptText',function(){
		return this.input.prompt;
		},function(value){
		this.input.prompt=value;
	});

	__getset(0,__proto,'restrict',function(){
		return this.input.restrict;
		},function(value){
		this.input.restrict=value;
	});

	__getset(0,__proto,'textWidth',function(){
		return this.input.textWidth;
	});

	return GTextInput;
})(GTextField)


//class fairygui.GScrollBar extends fairygui.GComponent
var GScrollBar=(function(_super){
	function GScrollBar(){
		this._grip=null;
		this._arrowButton1=null;
		this._arrowButton2=null;
		this._bar=null;
		this._target=null;
		this._vertical=false;
		this._scrollPerc=0;
		this._fixedGripSize=false;
		this._dragOffset=null;
		GScrollBar.__super.call(this);
		this._dragOffset=new laya.maths.Point();
		this._scrollPerc=0;
	}

	__class(GScrollBar,'fairygui.GScrollBar',_super);
	var __proto=GScrollBar.prototype;
	__proto.setScrollPane=function(target,vertical){
		this._target=target;
		this._vertical=vertical;
	}

	__proto.constructFromXML=function(xml){
		_super.prototype.constructFromXML.call(this,xml);
		xml=ToolSet.findChildNode(xml,"ScrollBar");
		if (xml){
			this._fixedGripSize=xml.getAttribute("fixedGripSize")=="true";
		}
		this._grip=this.getChild("grip");
		if(!this._grip){
			Log.print("需要定义grip");
			return;
		}
		this._bar=this.getChild("bar");
		if(!this._bar){
			Log.print("需要定义bar");
			return;
		}
		this._arrowButton1=this.getChild("arrow1");
		this._arrowButton2=this.getChild("arrow2");
		this._grip.on("mousedown",this,this.__gripMouseDown);
		if(this._arrowButton1)
			this._arrowButton1.on("mousedown",this,this.__arrowButton1Click);
		if(this._arrowButton2)
			this._arrowButton2.on("mousedown",this,this.__arrowButton2Click);
		this.on("mousedown",this,this.__barMouseDown);
	}

	__proto.__gripMouseDown=function(evt){
		if (!this._bar)
			return;
		evt.stopPropagation();
		Laya.stage.on("mousemove",this,this.__gripMouseMove);
		Laya.stage.on("mouseup",this,this.__gripMouseUp);
		this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,this._dragOffset);
		this._dragOffset.x-=this._grip.x;
		this._dragOffset.y-=this._grip.y;
	}

	__proto.__gripMouseMove=function(){
		var pt=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.GScrollBar.sScrollbarHelperPoint);
		if (this._vertical){
			var curY=pt.y-this._dragOffset.y;
			this._target.setPercY((curY-this._bar.y)/ (this._bar.height-this._grip.height),false);
		}
		else {
			var curX=pt.x-this._dragOffset.x;
			this._target.setPercX((curX-this._bar.x)/ (this._bar.width-this._grip.width),false);
		}
	}

	__proto.__gripMouseUp=function(evt){
		if (!this._bar)
			return;
		Laya.stage.off("mousemove",this,this.__gripMouseMove);
		Laya.stage.off("mouseup",this,this.__gripMouseUp);
	}

	__proto.__arrowButton1Click=function(evt){
		evt.stopPropagation();
		if (this._vertical)
			this._target.scrollUp();
		else
		this._target.scrollLeft();
	}

	__proto.__arrowButton2Click=function(evt){
		evt.stopPropagation();
		if (this._vertical)
			this._target.scrollDown();
		else
		this._target.scrollRight();
	}

	__proto.__barMouseDown=function(evt){
		var pt=this._grip.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.GScrollBar.sScrollbarHelperPoint);
		if (this._vertical){
			if (pt.y < 0)
				this._target.scrollUp(4);
			else
			this._target.scrollDown(4);
		}
		else {
			if (pt.x < 0)
				this._target.scrollLeft(4);
			else
			this._target.scrollRight(4);
		}
	}

	__getset(0,__proto,'displayPerc',null,function(val){
		if (this._vertical){
			if(!this._fixedGripSize)
				this._grip.height=val *this._bar.height;
			this._grip.y=this._bar.y+(this._bar.height-this._grip.height)*this._scrollPerc;
		}
		else {
			if(!this._fixedGripSize)
				this._grip.width=val *this._bar.width;
			this._grip.x=this._bar.x+(this._bar.width-this._grip.width)*this._scrollPerc;
		}
	});

	__getset(0,__proto,'scrollPerc',null,function(val){
		this._scrollPerc=val;
		if (this._vertical)
			this._grip.y=this._bar.y+(this._bar.height-this._grip.height)*this._scrollPerc;
		else
		this._grip.x=this._bar.x+(this._bar.width-this._grip.width)*this._scrollPerc;
	});

	__getset(0,__proto,'minSize',function(){
		if (this._vertical)
			return (this._arrowButton1 !=null ? this._arrowButton1.height :0)+(this._arrowButton2 !=null ? this._arrowButton2.height :0);
		else
		return (this._arrowButton1 !=null ? this._arrowButton1.width :0)+(this._arrowButton2 !=null ? this._arrowButton2.width :0);
	});

	__static(GScrollBar,
	['sScrollbarHelperPoint',function(){return this.sScrollbarHelperPoint=new Point();}
	]);
	return GScrollBar;
})(GComponent)


//class fairygui.GSlider extends fairygui.GComponent
var GSlider=(function(_super){
	function GSlider(){
		this._max=0;
		this._value=0;
		this._titleType=0;
		this._reverse=false;
		this._titleObject=null;
		this._barObjectH=null;
		this._barObjectV=null;
		this._barMaxWidth=0;
		this._barMaxHeight=0;
		this._barMaxWidthDelta=0;
		this._barMaxHeightDelta=0;
		this._gripObject=null;
		this._clickPos=null;
		this._clickPercent=0;
		this._barStartX=0;
		this._barStartY=0;
		this.changeOnClick=true;
		/**是否可拖动开关**/
		this.canDrag=true;
		GSlider.__super.call(this);
		this._titleType=0;
		this._value=50;
		this._max=100;
		this._clickPos=new laya.maths.Point();
	}

	__class(GSlider,'fairygui.GSlider',_super);
	var __proto=GSlider.prototype;
	__proto.update=function(){
		var percent=Math.min(this._value / this._max,1);
		this.updateWidthPercent(percent);
	}

	__proto.updateWidthPercent=function(percent){
		if (this._titleObject){
			switch (this._titleType){
				case 0:
					this._titleObject.text=Math.round(percent *100)+"%";
					break ;
				case 1:
					this._titleObject.text=this._value+"/"+this._max;
					break ;
				case 2:
					this._titleObject.text=""+this._value;
					break ;
				case 3:
					this._titleObject.text=""+this._max;
					break ;
				}
		};
		var fullWidth=this.width-this._barMaxWidthDelta;
		var fullHeight=this.height-this._barMaxHeightDelta;
		if(!this._reverse){
			if(this._barObjectH)
				this._barObjectH.width=Math.round(fullWidth*percent);
			if(this._barObjectV)
				this._barObjectV.height=Math.round(fullHeight*percent);
		}
		else{
			if(this._barObjectH){
				this._barObjectH.width=Math.round(fullWidth*percent);
				this._barObjectH.x=this._barStartX+(fullWidth-this._barObjectH.width);
			}
			if(this._barObjectV){
				this._barObjectV.height=Math.round(fullHeight*percent);
				this._barObjectV.y=this._barStartY+(fullHeight-this._barObjectV.height);
			}
		}
	}

	__proto.constructFromXML=function(xml){
		_super.prototype.constructFromXML.call(this,xml);
		xml=ToolSet.findChildNode(xml,"Slider");
		var str;
		str=xml.getAttribute("titleType");
		if(str)
			this._titleType=ProgressTitleType.parse(str);
		this._reverse=xml.getAttribute("reverse")=="true";
		this._titleObject=(this.getChild("title"));
		this._barObjectH=this.getChild("bar");
		this._barObjectV=this.getChild("bar_v");
		this._gripObject=this.getChild("grip");
		if(this._barObjectH){
			this._barMaxWidth=this._barObjectH.width;
			this._barMaxWidthDelta=this.width-this._barMaxWidth;
			this._barStartX=this._barObjectH.x;
		}
		if(this._barObjectV){
			this._barMaxHeight=this._barObjectV.height;
			this._barMaxHeightDelta=this.height-this._barMaxHeight;
			this._barStartY=this._barObjectV.y;
		}
		if(this._gripObject){
			this._gripObject.on("mousedown",this,this.__gripMouseDown);
		}
		this.displayObject.on("mousedown",this,this.__barMouseDown);
	}

	__proto.handleSizeChanged=function(){
		_super.prototype.handleSizeChanged.call(this);
		if(this._barObjectH)
			this._barMaxWidth=this.width-this._barMaxWidthDelta;
		if(this._barObjectV)
			this._barMaxHeight=this.height-this._barMaxHeightDelta;
		if(!this._underConstruct)
			this.update();
	}

	__proto.setup_afterAdd=function(xml){
		_super.prototype.setup_afterAdd.call(this,xml);
		xml=ToolSet.findChildNode(xml,"Slider");
		if (xml){
			this._value=parseInt(xml.getAttribute("value"));
			this._max=parseInt(xml.getAttribute("max"));
		}
		this.update();
	}

	__proto.__gripMouseDown=function(evt){
		this.canDrag=true;
		evt.stopPropagation();
		this._clickPos=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY);
		this._clickPercent=this._value / this._max;
		Laya.stage.on("mousemove",this,this.__gripMouseMove);
		Laya.stage.on("mouseup",this,this.__gripMouseUp);
	}

	__proto.__gripMouseMove=function(evt){
		if(!this.canDrag){
			return;
		};
		var pt=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.GSlider.sSilderHelperPoint);
		var deltaX=pt.x-this._clickPos.x;
		var deltaY=pt.y-this._clickPos.y;
		if(this._reverse){
			deltaX=-deltaX;
			deltaY=-deltaY;
		};
		var percent=NaN;
		if (this._barObjectH)
			percent=this._clickPercent+deltaX / this._barMaxWidth;
		else
		percent=this._clickPercent+deltaY / this._barMaxHeight;
		if (percent > 1)
			percent=1;
		else if (percent < 0)
		percent=0;
		var newValue=Math.round(this._max *percent);
		if (newValue !=this._value){
			this._value=newValue;
			Events.dispatch("fui_state_changed",this.displayObject,evt);
		}
		this.updateWidthPercent(percent);
	}

	__proto.__gripMouseUp=function(evt){
		Laya.stage.off("mousemove",this,this.__gripMouseMove);
		Laya.stage.off("mouseup",this,this.__gripMouseUp);
	}

	__proto.__barMouseDown=function(evt){
		if(!this.changeOnClick)
			return;
		var pt=this._gripObject.globalToLocal(evt.stageX,evt.stageY,fairygui.GSlider.sSilderHelperPoint);
		var percent=this._value/this._max;
		var delta=NaN;
		if(this._barObjectH)
			delta=(pt.x-this._gripObject.width/2)/this._barMaxWidth;
		if(this._barObjectV)
			delta=(pt.y-this._gripObject.height/2)/this._barMaxHeight;
		if(this._reverse)
			percent-=delta;
		else
		percent+=delta;
		if(percent>1)
			percent=1;
		else if(percent<0)
		percent=0;
		var newValue=Math.round(this._max*percent);
		if(newValue!=this._value){
			this._value=newValue;
			Events.dispatch("fui_state_changed",this.displayObject,evt);
		}
		this.updateWidthPercent(percent);
	}

	__getset(0,__proto,'max',function(){
		return this._max;
		},function(value){
		if (this._max !=value){
			this._max=value;
			this.update();
		}
	});

	__getset(0,__proto,'titleType',function(){
		return this._titleType;
		},function(value){
		this._titleType=value;
	});

	__getset(0,__proto,'value',function(){
		return this._value;
		},function(value){
		if (this._value !=value){
			this._value=value;
			this.update();
		}
	});

	__static(GSlider,
	['sSilderHelperPoint',function(){return this.sSilderHelperPoint=new Point();}
	]);
	return GSlider;
})(GComponent)


//class fairygui.Window extends fairygui.GComponent
var Window$2=(function(_super){
	function Window(){
		this._contentPane=null;
		this._modalWaitPane=null;
		this._closeButton=null;
		this._dragArea=null;
		this._contentArea=null;
		this._frame=null;
		this._modal=false;
		this._uiSources=null;
		this._inited=false;
		this._loading=false;
		this._requestingCmd=0;
		this.bringToFontOnClick=false;
		Window.__super.call(this);
		this.focusable=true;
		this._uiSources=[];
		this.bringToFontOnClick=UIConfig$1.bringWindowToFrontOnClick;
		this.displayObject.on("display",this,this.__onShown);
		this.displayObject.on("undisplay",this,this.__onHidden);
		this.displayObject.on("mousedown",this,this.__mouseDown);
	}

	__class(Window,'fairygui.Window',_super,'Window$2');
	var __proto=Window.prototype;
	__proto.addUISource=function(source){
		this._uiSources.push(source);
	}

	__proto.show=function(){
		GRoot.inst.showWindow(this);
	}

	__proto.showOn=function(root){
		root.showWindow(this);
	}

	__proto.hide=function(){
		if(this.isShowing)
			this.doHideAnimation();
	}

	__proto.hideImmediately=function(){
		var r=((this.parent instanceof fairygui.GRoot ))? (this.parent):null;
		if(!r)
			r=GRoot.inst;
		r.hideWindowImmediately(this);
	}

	__proto.centerOn=function(r,restraint){
		(restraint===void 0)&& (restraint=false);
		this.setXY(Math.round((r.width-this.width)/ 2),Math.round((r.height-this.height)/ 2));
		if(restraint){
			this.addRelation(r,3);
			this.addRelation(r,10);
		}
	}

	__proto.toggleStatus=function(){
		if(this.isTop)
			this.hide();
		else
		this.show();
	}

	__proto.bringToFront=function(){
		this.root.bringToFront(this);
	}

	__proto.showModalWait=function(requestingCmd){
		(requestingCmd===void 0)&& (requestingCmd=0);
		if(requestingCmd !=0)
			this._requestingCmd=requestingCmd;
		if(UIConfig$1.windowModalWaiting){
			if(!this._modalWaitPane)
				this._modalWaitPane=UIPackage.createObjectFromURL(UIConfig$1.windowModalWaiting);
			this.layoutModalWaitPane();
			this.addChild(this._modalWaitPane);
		}
	}

	__proto.layoutModalWaitPane=function(){
		if(this._contentArea !=null){
			var pt=this._frame.localToGlobal();
			pt=this.globalToLocal(pt.x,pt.y,pt);
			this._modalWaitPane.setXY(pt.x+this._contentArea.x,pt.y+this._contentArea.y);
			this._modalWaitPane.setSize(this._contentArea.width,this._contentArea.height);
		}
		else
		this._modalWaitPane.setSize(this.width,this.height);
	}

	__proto.closeModalWait=function(requestingCmd){
		(requestingCmd===void 0)&& (requestingCmd=0);
		if(requestingCmd !=0){
			if(this._requestingCmd !=requestingCmd)
				return false;
		}
		this._requestingCmd=0;
		if(this._modalWaitPane && this._modalWaitPane.parent !=null)
			this.removeChild(this._modalWaitPane);
		return true;
	}

	__proto.init=function(){
		if(this._inited || this._loading)
			return;
		if(this._uiSources.length > 0){
			this._loading=false;
			var cnt=this._uiSources.length;
			for(var i=0;i < cnt;i++){
				var lib=this._uiSources[i];
				if(!lib.loaded){
					lib.load(this.__uiLoadComplete,this);
					this._loading=true;
				}
			}
			if(!this._loading)
				this._init();
		}
		else
		this._init();
	}

	__proto.onInit=function(){}
	__proto.onShown=function(){}
	__proto.onHide=function(){}
	__proto.doShowAnimation=function(){
		this.onShown();
	}

	__proto.doHideAnimation=function(){
		this.hideImmediately();
	}

	__proto.__uiLoadComplete=function(){
		var cnt=this._uiSources.length;
		for(var i=0;i < cnt;i++){
			var lib=this._uiSources[i];
			if(!lib.loaded)
				return;
		}
		this._loading=false;
		this._init();
	}

	__proto._init=function(){
		this._inited=true;
		this.onInit();
		if(this.isShowing)
			this.doShowAnimation();
	}

	__proto.dispose=function(){
		if(this.parent !=null)
			this.hideImmediately();
		_super.prototype.dispose.call(this);
	}

	__proto.closeEventHandler=function(){
		this.hide();
	}

	__proto.__onShown=function(){
		if(!this._inited)
			this.init();
		else
		this.doShowAnimation();
	}

	__proto.__onHidden=function(){
		this.closeModalWait();
		this.onHide();
	}

	__proto.__mouseDown=function(){
		if(this.isShowing && this.bringToFontOnClick)
			this.bringToFront();
	}

	__proto.__dragStart=function(evt){
		GObject.cast(evt.currentTarget).stopDrag();
		this.startDrag();
	}

	__getset(0,__proto,'contentPane',function(){
		return this._contentPane;
		},function(val){
		if(this._contentPane !=val){
			if(this._contentPane !=null)
				this.removeChild(this._contentPane);
			this._contentPane=val;
			if(this._contentPane !=null){
				this.addChild(this._contentPane);
				this.setSize(this._contentPane.width,this._contentPane.height);
				this._contentPane.addRelation(this,24);
				this._frame=(this._contentPane.getChild("frame"));
				if(this._frame !=null){
					this.closeButton=this._frame.getChild("closeButton");
					this.dragArea=this._frame.getChild("dragArea");
					this.contentArea=this._frame.getChild("contentArea");
				}
			}
		}
	});

	__getset(0,__proto,'isShowing',function(){
		return this.parent !=null;
	});

	__getset(0,__proto,'isTop',function(){
		return this.parent !=null && this.parent.getChildIndex(this)==this.parent.numChildren-1;
	});

	__getset(0,__proto,'modal',function(){
		return this._modal;
		},function(val){
		this._modal=val;
	});

	__getset(0,__proto,'dragArea',function(){
		return this._dragArea;
		},function(value){
		if(this._dragArea !=value){
			if(this._dragArea !=null){
				this._dragArea.draggable=false;
				this._dragArea.off("fui_drag_start",this,this.__dragStart);
			}
			this._dragArea=value;
			if(this._dragArea !=null){
				if((this._dragArea instanceof fairygui.GGraph ))
					this._dragArea.asGraph.drawRect(0,null,null);
				this._dragArea.draggable=true;
				this._dragArea.on("fui_drag_start",this,this.__dragStart);
			}
		}
	});

	__getset(0,__proto,'frame',function(){
		return this._frame;
	});

	__getset(0,__proto,'closeButton',function(){
		return this._closeButton;
		},function(value){
		if(this._closeButton !=null)
			this._closeButton.offClick(this,this.closeEventHandler);
		this._closeButton=value;
		if(this._closeButton !=null)
			this._closeButton.onClick(this,this.closeEventHandler);
	});

	__getset(0,__proto,'contentArea',function(){
		return this._contentArea;
		},function(value){
		this._contentArea=value;
	});

	__getset(0,__proto,'modalWaiting',function(){
		return this._modalWaitPane && this._modalWaitPane.parent !=null;
	});

	return Window;
})(GComponent)


//class fairygui.display.Image extends laya.display.Sprite
var Image$1=(function(_super){
	function Image(){
		this._tex=null;
		this._scaleByTile=false;
		this._scale9Grid=null;
		this._tileGridIndice=0;
		this._textureScaleX=0;
		this._textureScaleY=0;
		this._needRebuild=false;
		Image.__super.call(this);
		this.mouseEnabled=false;
		this._textureScaleX=1;
		this._textureScaleY=1;
	}

	__class(Image,'fairygui.display.Image',_super,'Image$1');
	var __proto=Image.prototype;
	__proto.scaleTexture=function(sx,sy){
		if(this._textureScaleX!=sx || this._textureScaleY!=sy){
			this._textureScaleX=sx;
			this._textureScaleY=sy;
			if(this._tex)
				this.size(this._tex.width*sx,this._tex.height*sy);
			this.markChanged();
		}
	}

	__proto.markChanged=function(){
		if(!this._needRebuild){
			this._needRebuild=true;
			Laya.timer.callLater(this,this.rebuild);
		}
	}

	__proto.rebuild=function(){
		this._needRebuild=false;
		var g=this.graphics;
		g.clear();
		if(this._tex==null){
			this.repaint();
			return;
		};
		var width=this.width;
		var height=this.height;
		var sw=this._tex.width;
		var sh=this._tex.height;
		if(width==0 || height==0){
			this.repaint();
			return;
		}
		if(this._scaleByTile){
			g.fillTexture(this._tex,0,0,width,height);
		}
		else if(this._scale9Grid!=null){
			var left=this._scale9Grid.x;
			var right=Math.max(sw-this._scale9Grid.right,0);
			var top=this._scale9Grid.y;
			var bottom=Math.max(sh-this._scale9Grid.bottom,0);
			var tmp=NaN;
			if (height >=(sh-this._scale9Grid.height)){
				top=this._scale9Grid.y;
				bottom=sh-this._scale9Grid.bottom;
			}
			else{
				tmp=this._scale9Grid.y / (sh-this._scale9Grid.bottom);
				tmp=height *tmp / (1+tmp);
				top=Math.round(tmp);
				bottom=height-tmp;
			}
			if (width >=(sw-this._scale9Grid.width)){
				left=this._scale9Grid.x;
				right=sw-this._scale9Grid.right;
			}
			else{
				tmp=this._scale9Grid.x / (sw-this._scale9Grid.right);
				tmp=width *tmp / (1+tmp);
				left=Math.round(tmp);
				right=width-tmp;
			};
			var centerWidth=Math.max(width-left-right,0);
			var centerHeight=Math.max(height-top-bottom,0);
			left && top && g.drawTexture(fairygui.display.Image.getTexture(this._tex,0,0,left,top),0,0,left,top);
			right && top && g.drawTexture(fairygui.display.Image.getTexture(this._tex,sw-right,0,right,top),width-right,0,right,top);
			left && bottom && g.drawTexture(fairygui.display.Image.getTexture(this._tex,0,sh-bottom,left,bottom),0,height-bottom,left,bottom);
			right && bottom && g.drawTexture(fairygui.display.Image.getTexture(this._tex,sw-right,sh-bottom,right,bottom),width-right,height-bottom,right,bottom);
			centerWidth && top && this.drawTexture(0,fairygui.display.Image.getTexture(this._tex,left,0,sw-left-right,top),left,0,centerWidth,top);
			centerWidth && bottom && this.drawTexture(1,fairygui.display.Image.getTexture(this._tex,left,sh-bottom,sw-left-right,bottom),left,height-bottom,centerWidth,bottom);
			centerHeight && left && this.drawTexture(2,fairygui.display.Image.getTexture(this._tex,0,top,left,sh-top-bottom),0,top,left,centerHeight);
			centerHeight && right && this.drawTexture(3,fairygui.display.Image.getTexture(this._tex,sw-right,top,right,sh-top-bottom),width-right,top,right,centerHeight);
			centerWidth && centerHeight && this.drawTexture(4,fairygui.display.Image.getTexture(this._tex,left,top,sw-left-right,sh-top-bottom),left,top,centerWidth,centerHeight);
		}
		else {
			g.drawTexture(this._tex,0,0,width,height);
		}
		this.repaint();
	}

	__proto.drawTexture=function(part,tex,x,y,width,height){
		(width===void 0)&& (width=0);
		(height===void 0)&& (height=0);
		if(part==-1 || (this._tileGridIndice & (1<<part))==0)
			this.graphics.drawTexture(tex,x,y,width,height);
		else
		this.graphics.fillTexture(tex,x,y,width,height);
	}

	__getset(0,__proto,'tex',function(){
		return this._tex;
		},function(value){
		if(this._tex!=value){
			this._tex=value;
			if(this._tex)
				this.size(this._tex.width*this._textureScaleX,this._tex.height*this._textureScaleY);
			else
			this.size(0,0);
			this.markChanged();
		}
	});

	__getset(0,__proto,'scale9Grid',function(){
		return this._scale9Grid;
		},function(value){
		this._scale9Grid=value;
		this.markChanged();
	});

	__getset(0,__proto,'scaleByTile',function(){
		return this._scaleByTile;
		},function(value){
		if(this._scaleByTile!=value){
			this._scaleByTile=value;
			this.markChanged();
		}
	});

	__getset(0,__proto,'tileGridIndice',function(){
		return this._tileGridIndice;
		},function(value){
		if(this._tileGridIndice!=value){
			this._tileGridIndice=value;
			this.markChanged();
		}
	});

	Image.getTexture=function(source,x,y,width,height){
		source.$GID || (source.$GID=Utils.getGID());
		var key=source.$GID+"."+x+"."+y+"."+width+"."+height;
		var texture=fairygui.display.Image._textureCache[key];
		if (!texture){
			texture=fairygui.display.Image._textureCache[key]=Texture.create(source,x,y,width,height);
		}
		return texture;
	}

	Image.clearCache=function(){
		fairygui.display.Image._textureCache={};
	}

	Image._textureCache={};
	return Image;
})(Sprite)


//class fairygui.display.MovieClip extends laya.display.Sprite
var MovieClip$1=(function(_super){
	function MovieClip(){
		this.interval=0;
		this.swing=false;
		this.repeatDelay=0;
		this.playState=null;
		this._$3__texture=null;
		this._needRebuild=false;
		this._playing=false;
		this._frameCount=0;
		this._frames=null;
		this._currentFrame=0;
		this._boundsRect=null;
		this._start=0;
		this._end=0;
		this._times=0;
		this._endAt=0;
		this._status=0;
		//0-none,1-next loop,2-ending,3-ended
		this._endHandler=null;
		MovieClip.__super.call(this);
		this.playState=new PlayState();
		this._playing=true;
		this.mouseEnabled=false;
		this.setPlaySettings();
		this.on("display",this,this.__addToStage);
		this.on("undisplay",this,this.__removeFromStage);
	}

	__class(MovieClip,'fairygui.display.MovieClip',_super,'MovieClip$1');
	var __proto=MovieClip.prototype;
	//从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
	__proto.setPlaySettings=function(start,end,times,endAt,endHandler){
		(start===void 0)&& (start=0);
		(end===void 0)&& (end=-1);
		(times===void 0)&& (times=0);
		(endAt===void 0)&& (endAt=-1);
		this._start=start;
		this._end=end;
		if(this._end==-1 || this._end > this._frameCount-1)
			this._end=this._frameCount-1;
		this._times=times;
		this._endAt=endAt;
		if(this._endAt==-1)
			this._endAt=this._end;
		this._status=0;
		this._endHandler=endHandler;
		this.currentFrame=start;
	}

	__proto.update=function(){
		if (this._playing && this._frameCount !=0 && this._status !=3){
			this.playState.update(this);
			if (this._currentFrame !=this.playState.currentFrame){
				if (this._status==1){
					this._currentFrame=this._start;
					this.playState.currentFrame=this._currentFrame;
					this._status=0;
				}
				else if (this._status==2){
					this._currentFrame=this._endAt;
					this.playState.currentFrame=this._currentFrame;
					this._status=3;
					if (this._endHandler !=null){
						this._endHandler.run();
					}
				}
				else {
					this._currentFrame=this.playState.currentFrame;
					if (this._currentFrame==this._end){
						if (this._times > 0){
							this._times--;
							if (this._times==0)
								this._status=2;
							else
							this._status=1;
						}
						else if(this._start!=0)
						this._status=1;
					}
				}
				this.setFrame(this._frames[this._currentFrame]);
			}
		}
	}

	__proto.setFrame=function(frame){
		this.graphics.clear();
		if (frame !=null)
			this.graphics.drawTexture(frame.texture,frame.rect.x,frame.rect.y);
	}

	__proto.__addToStage=function(){
		if(this._playing)
			Laya.timer.frameLoop(1,this,this.update);
	}

	__proto.__removeFromStage=function(){
		if(this._playing)
			Laya.timer.clear(this,this.update);
	}

	__getset(0,__proto,'frames',function(){
		return this._frames;
		},function(value){
		this._frames=value;
		if (this._frames !=null)
			this._frameCount=this._frames.length;
		else
		this._frameCount=0;
		if(this._end==-1 || this._end > this._frameCount-1)
			this._end=this._frameCount-1;
		if(this._endAt==-1 || this._endAt > this._frameCount-1)
			this._endAt=this._frameCount-1;
		if(this._currentFrame < 0 || this._currentFrame > this._frameCount-1)
			this._currentFrame=this._frameCount-1;
		if(this._frameCount > 0)
			this.setFrame(this._frames[this._currentFrame]);
		else
		this.setFrame(null);
		this.playState.rewind();
	});

	__getset(0,__proto,'playing',function(){
		return this._playing;
		},function(value){
		this._playing=value;
		if(value && this.stage!=null){
			Laya.timer.frameLoop(1,this,this.update);
			}else {
			Laya.timer.clear(this,this.update);
		}
	});

	__getset(0,__proto,'frameCount',function(){
		return this._frameCount;
	});

	__getset(0,__proto,'boundsRect',function(){
		return this._boundsRect;
		},function(value){
		this._boundsRect=value;
	});

	__getset(0,__proto,'currentFrame',function(){
		return this._currentFrame;
		},function(value){
		if (this._currentFrame !=value){
			this._currentFrame=value;
			this.playState.currentFrame=value;
			this.setFrame(this._currentFrame < this._frameCount ? this._frames[this._currentFrame] :null);
		}
	});

	return MovieClip;
})(Sprite)


	Laya.__init([GList,GearColor,GearAnimation,Transition,UIPackage,RelationItem,GBasicTextField,GearLook,GearSize]);
})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}
var MainPanel = /** @class */ (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("Bag", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._list = this._view.getChild("list").asList;
        this._list.on(fairygui.Events.CLICK_ITEM, this, this.__clickItem);
        for (var i = 0; i < 10; i++) {
            var button = this._list.getChildAt(i).asButton;
            button.icon = "res/i" + Math.floor(Math.random() * 10) + ".png";
            button.title = "" + Math.floor(Math.random() * 100);
        }
    }
    MainPanel.prototype.__clickItem = function (itemObject) {
        var item = itemObject;
        this._view.getChild("n3").asLoader.url = item.icon;
        this._view.getChild("n5").text = item.icon;
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        Laya.init(1136, 640, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        Laya.loader.load([
            { url: "res/Bag@atlas0.png", type: Loader.IMAGE },
            { url: "res/Bag.bin", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.UIPackage.addPackage("res/Bag");
        new MainPanel();
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map