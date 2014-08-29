/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(e,t,i,n){if(3===e.nodeType){var o=e.data.match(t);if(o){var s=document.createElement(i||"span");s.className=n||"highlight";var r=e.splitText(o.index);r.splitText(o[0].length);var a=r.cloneNode(!0);return s.appendChild(a),r.parentNode.replaceChild(s,r),1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&(e.tagName!==i.toUpperCase()||e.className!==n))for(var l=0;l<e.childNodes.length;l++)l+=jQuery.highlight(e.childNodes[l],t,i,n);return 0}}),jQuery.fn.unhighlight=function(e){var t={className:"highlight",element:"span"};return jQuery.extend(t,e),this.find(t.element+"."+t.className).each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()},jQuery.fn.highlight=function(e,t){var i={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(i,t),e.constructor===String&&(e=[e]),e=jQuery.grep(e,function(e){return""!=e}),e=jQuery.map(e,function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==e.length)return this;var n=i.caseSensitive?"":"i",o="("+e.join("|")+")";i.wordsOnly&&(o="\\b"+o+"\\b");var s=new RegExp(o,n);return this.each(function(){jQuery.highlight(this,s,i.element,i.className)})},/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(e,t){var i=0,n=Array.prototype.slice,o=e.cleanData;e.cleanData=function(t){for(var i,n=0;null!=(i=t[n]);n++)try{e(i).triggerHandler("remove")}catch(s){}o(t)},e.widget=function(i,n,o){var s,r,a,l,h={},c=i.split(".")[0];i=i.split(".")[1],s=c+"-"+i,o||(o=n,n=e.Widget),e.expr[":"][s.toLowerCase()]=function(t){return!!e.data(t,s)},e[c]=e[c]||{},r=e[c][i],a=e[c][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new a(e,i)},e.extend(a,r,{version:o.version,_proto:e.extend({},o),_childConstructors:[]}),l=new n,l.options=e.widget.extend({},l.options),e.each(o,function(i,o){return e.isFunction(o)?(h[i]=function(){var e=function(){return n.prototype[i].apply(this,arguments)},t=function(e){return n.prototype[i].apply(this,e)};return function(){var i,n=this._super,s=this._superApply;return this._super=e,this._superApply=t,i=o.apply(this,arguments),this._super=n,this._superApply=s,i}}(),t):(h[i]=o,t)}),a.prototype=e.widget.extend(l,{widgetEventPrefix:r?l.widgetEventPrefix:i},h,{constructor:a,namespace:c,widgetName:i,widgetFullName:s}),r?(e.each(r._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete r._childConstructors):n._childConstructors.push(a),e.widget.bridge(i,a)},e.widget.extend=function(i){for(var o,s,r=n.call(arguments,1),a=0,l=r.length;l>a;a++)for(o in r[a])s=r[a][o],r[a].hasOwnProperty(o)&&s!==t&&(i[o]=e.isPlainObject(s)?e.isPlainObject(i[o])?e.widget.extend({},i[o],s):e.widget.extend({},s):s);return i},e.widget.bridge=function(i,o){var s=o.prototype.widgetFullName||i;e.fn[i]=function(r){var a="string"==typeof r,l=n.call(arguments,1),h=this;return r=!a&&l.length?e.widget.extend.apply(null,[r].concat(l)):r,this.each(a?function(){var n,o=e.data(this,s);return o?e.isFunction(o[r])&&"_"!==r.charAt(0)?(n=o[r].apply(o,l),n!==o&&n!==t?(h=n&&n.jquery?h.pushStack(n.get()):n,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}:function(){var t=e.data(this,s);t?t.option(r||{})._init():e.data(this,s,new o(r,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,n){var o,s,r,a=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){for(s=a[i]=e.widget.extend({},this.options[i]),r=0;o.length-1>r;r++)s[o[r]]=s[o[r]]||{},s=s[o[r]];if(i=o.pop(),n===t)return s[i]===t?null:s[i];s[i]=n}else{if(n===t)return this.options[i]===t?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var s,r=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=s=e(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,s=this.widget()),e.each(o,function(o,a){function l(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof a?r[a]:a).apply(r,arguments):t}"string"!=typeof a&&(l.guid=a.guid=a.guid||l.guid||e.guid++);var h=o.match(/^(\w+)\s*(.*)$/),c=h[1]+r.eventNamespace,u=h[2];u?s.delegate(u,c,l):n.bind(c,l)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var o,s,r=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:t;o=o||{},"number"==typeof o&&(o={duration:o}),r=!e.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&e.effects&&e.effects.effect[a]?n[t](o):a!==t&&n[a]?n[a](o.duration,o.easing,s):n.queue(function(i){e(this)[t](),s&&s.call(n[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(e){"use strict";e(window.jQuery,window,document)}(function(e,t,i){"use strict";var n="tocify",o="tocify-focus",s="tocify-hover",r="tocify-hide",a="tocify-header",l="."+a,h="tocify-subheader",c="."+h,u="tocify-item",d="."+u,f="tocify-extend-page",p="."+f;e.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=e(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),e(t).load(function(){i._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var t,i,o=this,s=o.options.ignoreSelector;return t=e(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),t.length?(o.element.addClass(n),void t.each(function(t){e(this).is(s)||(i=e("<ul/>",{id:a+t,"class":a}).append(o._nestElements(e(this),t)),o.element.append(i),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(o.options.selectors).length?e(this).filter(o.options.selectors).each(function(){e(this).is(s)||o._appendSubheaders.call(this,o,i)}):e(this).find(o.options.selectors).each(function(){e(this).is(s)||o._appendSubheaders.call(this,o,i)})}))})):void o.element.addClass(r)},_setActiveElement:function(e){var i=this,n=t.location.hash.substring(1),o=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),o.addClass(i.focusClass),i.options.showAndHide&&o.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&e&&i.options.highlightDefault&&i.element.find(d).first().addClass(i.focusClass)),i},_nestElements:function(t,i){var n,o,s;return n=e.grep(this.items,function(e){return e===t.text()}),this.items.push(n.length?t.text()+i:t.text()),s=this._generateHashValue(n,t,i),o=e("<li/>",{"class":u,"data-unique":s}).append(e("<a/>",{text:t.text()})),t.before(e("<div/>",{name:s,"data-unique":s})),o},_generateHashValue:function(e,t,i){var n="",o=this.options.hashGenerator;if("pretty"===o){for(n=t.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof o?o(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(n+=""+i),n},_appendSubheaders:function(t,i){var n=e(this).index(t.options.selectors),o=e(t.options.selectors).eq(n-1),s=+e(this).prop("tagName").charAt(1),r=+o.prop("tagName").charAt(1);r>s?t.element.find(c+"[data-tag="+s+"]").last().append(t._nestElements(e(this),n)):s===r?i.find(d).last().after(t._nestElements(e(this),n)):i.find(d).last().after(e("<ul/>",{"class":h,"data-tag":s})).next(c).append(t._nestElements(e(this),n))},_setEventHandlers:function(){var n=this;this.element.on("click.tocify","li",function(){if(n.options.history&&(t.location.hash=e(this).attr("data-unique")),n.element.find("."+n.focusClass).removeClass(n.focusClass),e(this).addClass(n.focusClass),n.options.showAndHide){var i=e('li[data-unique="'+e(this).attr("data-unique")+'"]');n._triggerShow(i)}n._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(n.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==n.options.theme&&e(this).removeClass(n.hoverClass)}}),e(t).on("resize",function(){n.calculateHeights()}),e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var o,s,r,a,l=e(t).scrollTop(),h=e(t).height(),c=e(i).height(),u=e("body")[0].scrollHeight;if(n.options.extendPage&&(n.webkit&&l>=u-h-n.options.extendPageOffset||!n.webkit&&h+l>c-n.options.extendPageOffset)&&!e(p).length){if(s=e('div[data-unique="'+e(d).last().attr("data-unique")+'"]'),!s.length)return;r=s.offset().top,e(n.options.context).append(e("<div />",{"class":f,height:Math.abs(r-l)+"px","data-unique":f})),n.extendPageScroll&&(a=n.element.find("li.active"),n._scrollTo(e("div[data-unique="+a.attr("data-unique")+"]")))}setTimeout(function(){var s,r=null;if(0==n.cachedHeights.length&&n.calculateHeights(),n.cachedAnchors.each(function(i){return n.cachedHeights[i]-e(t).scrollTop()<0?void(r=i):!1}),s=e(n.cachedAnchors[r]).attr("data-unique"),o=e('li[data-unique="'+s+'"]'),n.options.highlightOnScroll&&o.length){n.element.find("."+n.focusClass).removeClass(n.focusClass),o.addClass(n.focusClass);var a=n.tocifyWrapper,l=e(o).closest(".tocify-header"),h=l.offset().top,c=a.offset().top,u=a.scrollTop(),d=h-c;if(d>=e(t).height()){var f=d+u;a.scrollTop(f)}else 0>d&&a.scrollTop(0)}n.options.scrollHistory&&t.location.hash!=="#"+s&&(history.replaceState?history.replaceState({},"","#"+s):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+s,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),n.options.showAndHideOnScroll&&n.options.showAndHide&&n._triggerShow(o,!0)},0)})})},calculateHeights:function(){var t=this;t.cachedHeights=[],t.cachedAnchors=[];var i=e(t.options.context).find("div[data-unique]");i.each(function(i){var n=(e(this).next().length?e(this).next():e(this)).offset().top-t.options.highlightOffset;t.cachedHeights[i]=n}),t.cachedAnchors=i},show:function(t){var i=this;if(!t.is(":visible"))switch(t.find(c).length||t.parent().is(l)||t.parent().is(":visible")?t.children(c).length||t.parent().is(l)||(t=t.closest(c)):t=t.parents(c).add(t),i.options.showEffect){case"none":t.show();break;case"show":t.show(i.options.showEffectSpeed);break;case"slideDown":t.slideDown(i.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(i.options.showEffectSpeed);break;default:t.show()}return i.hide(e(c).not(t.parent().is(l)?t:t.closest(l).find(c).not(t.siblings()))),i},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var i=this;return e.parent().is(l)||e.next().is(c)?i.show(e.next(c),t):e.parent().is(c)&&i.show(e.parent(),t),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(l+","+c).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=s),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var i=this,n=i.options.smoothScroll||0,o=i.options.scrollTo;return e("html, body").promise().done(function(){e("html, body").animate({scrollTop:e('div[data-unique="'+t.attr("data-unique")+'"]').next().offset().top-(e.isFunction(o)?o.call():o)+"px"},{duration:n})}),i}})}),/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.2
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
function(){var e=function(t){var i=new e.Index;return i.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),t&&t.call(i,i),i};e.version="0.5.2",/*!
 * lunr.utils
 * Copyright (C) 2014 Oliver Nightingale
 */
e.utils={},e.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),/*!
 * lunr.EventEmitter
 * Copyright (C) 2014 Oliver Nightingale
 */
e.EventEmitter=function(){this.events={}},e.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),i=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");i.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},e.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var i=this.events[e].indexOf(t);this.events[e].splice(i,1),this.events[e].length||delete this.events[e]}},e.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach(function(e){e.apply(void 0,t)})}},e.EventEmitter.prototype.hasHandler=function(e){return e in this.events},/*!
 * lunr.tokenizer
 * Copyright (C) 2014 Oliver Nightingale
 */
e.tokenizer=function(e){if(!arguments.length||null==e||void 0==e)return[];if(Array.isArray(e))return e.map(function(e){return e.toLowerCase()});for(var t=e.toString().replace(/^\s+/,""),i=t.length-1;i>=0;i--)if(/\S/.test(t.charAt(i))){t=t.substring(0,i+1);break}return t.split(/\s+/).map(function(e){return e.toLowerCase()})},/*!
 * lunr.Pipeline
 * Copyright (C) 2014 Oliver Nightingale
 */
e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions={},e.Pipeline.registerFunction=function(t,i){i in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+i),t.label=i,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){var i=t.label&&t.label in this.registeredFunctions;i||e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",t)},e.Pipeline.load=function(t){var i=new e.Pipeline;return t.forEach(function(t){var n=e.Pipeline.registeredFunctions[t];if(!n)throw new Error("Cannot load un-registered function: "+t);i.add(n)}),i},e.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(t){e.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},e.Pipeline.prototype.after=function(t,i){e.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(t)+1;this._stack.splice(n,0,i)},e.Pipeline.prototype.before=function(t,i){e.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(t);this._stack.splice(n,0,i)},e.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);this._stack.splice(t,1)},e.Pipeline.prototype.run=function(e){for(var t=[],i=e.length,n=this._stack.length,o=0;i>o;o++){for(var s=e[o],r=0;n>r&&(s=this._stack[r](s,o,e),void 0!==s);r++);void 0!==s&&t.push(s)}return t},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})},/*!
 * lunr.Vector
 * Copyright (C) 2014 Oliver Nightingale
 */
e.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},e.Vector.Node=function(e,t,i){this.idx=e,this.val=t,this.next=i},e.Vector.prototype.insert=function(t,i){var n=this.list;if(!n)return this.list=new e.Vector.Node(t,i,n),this.length++;for(var o=n,s=n.next;void 0!=s;){if(t<s.idx)return o.next=new e.Vector.Node(t,i,s),this.length++;o=s,s=s.next}return o.next=new e.Vector.Node(t,i,s),this.length++},e.Vector.prototype.magnitude=function(){if(this._magniture)return this._magnitude;for(var e,t=this.list,i=0;t;)e=t.val,i+=e*e,t=t.next;return this._magnitude=Math.sqrt(i)},e.Vector.prototype.dot=function(e){for(var t=this.list,i=e.list,n=0;t&&i;)t.idx<i.idx?t=t.next:t.idx>i.idx?i=i.next:(n+=t.val*i.val,t=t.next,i=i.next);return n},e.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},/*!
 * lunr.SortedSet
 * Copyright (C) 2014 Oliver Nightingale
 */
e.SortedSet=function(){this.length=0,this.elements=[]},e.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},e.SortedSet.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){~this.indexOf(e)||this.elements.splice(this.locationFor(e),0,e)},this),this.length=this.elements.length},e.SortedSet.prototype.toArray=function(){return this.elements.slice()},e.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},e.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},e.SortedSet.prototype.indexOf=function(e,t,i){var t=t||0,i=i||this.elements.length,n=i-t,o=t+Math.floor(n/2),s=this.elements[o];return 1>=n?s===e?o:-1:e>s?this.indexOf(e,o,i):s>e?this.indexOf(e,t,o):s===e?o:void 0},e.SortedSet.prototype.locationFor=function(e,t,i){var t=t||0,i=i||this.elements.length,n=i-t,o=t+Math.floor(n/2),s=this.elements[o];if(1>=n){if(s>e)return o;if(e>s)return o+1}return e>s?this.locationFor(e,o,i):s>e?this.locationFor(e,t,o):void 0},e.SortedSet.prototype.intersect=function(t){for(var i=new e.SortedSet,n=0,o=0,s=this.length,r=t.length,a=this.elements,l=t.elements;;){if(n>s-1||o>r-1)break;a[n]!==l[o]?a[n]<l[o]?n++:a[n]>l[o]&&o++:(i.add(a[n]),n++,o++)}return i},e.SortedSet.prototype.clone=function(){var t=new e.SortedSet;return t.elements=this.toArray(),t.length=t.elements.length,t},e.SortedSet.prototype.union=function(e){var t,i,n;return this.length>=e.length?(t=this,i=e):(t=e,i=this),n=t.clone(),n.add.apply(n,i.toArray()),n},e.SortedSet.prototype.toJSON=function(){return this.toArray()},/*!
 * lunr.Index
 * Copyright (C) 2014 Oliver Nightingale
 */
e.Index=function(){this._fields=[],this._ref="id",this.pipeline=new e.Pipeline,this.documentStore=new e.Store,this.tokenStore=new e.TokenStore,this.corpusTokens=new e.SortedSet,this.eventEmitter=new e.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},e.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},e.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},e.Index.load=function(t){t.version!==e.version&&e.utils.warn("version mismatch: current "+e.version+" importing "+t.version);var i=new this;return i._fields=t.fields,i._ref=t.ref,i.documentStore=e.Store.load(t.documentStore),i.tokenStore=e.TokenStore.load(t.tokenStore),i.corpusTokens=e.SortedSet.load(t.corpusTokens),i.pipeline=e.Pipeline.load(t.pipeline),i},e.Index.prototype.field=function(e,t){var t=t||{},i={name:e,boost:t.boost||1};return this._fields.push(i),this},e.Index.prototype.ref=function(e){return this._ref=e,this},e.Index.prototype.add=function(t,i){var n={},o=new e.SortedSet,s=t[this._ref],i=void 0===i?!0:i;this._fields.forEach(function(i){var s=this.pipeline.run(e.tokenizer(t[i.name]));n[i.name]=s,e.SortedSet.prototype.add.apply(o,s)},this),this.documentStore.set(s,o),e.SortedSet.prototype.add.apply(this.corpusTokens,o.toArray());for(var r=0;r<o.length;r++){var a=o.elements[r],l=this._fields.reduce(function(e,t){var i=n[t.name].length;if(!i)return e;var o=n[t.name].filter(function(e){return e===a}).length;return e+o/i*t.boost},0);this.tokenStore.add(a,{ref:s,tf:l})}i&&this.eventEmitter.emit("add",t,this)},e.Index.prototype.remove=function(e,t){var i=e[this._ref],t=void 0===t?!0:t;if(this.documentStore.has(i)){var n=this.documentStore.get(i);this.documentStore.remove(i),n.forEach(function(e){this.tokenStore.remove(e,i)},this),t&&this.eventEmitter.emit("remove",e,this)}},e.Index.prototype.update=function(e,t){var t=void 0===t?!0:t;this.remove(e,!1),this.add(e,!1),t&&this.eventEmitter.emit("update",e,this)},e.Index.prototype.idf=function(e){var t="@"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,t))return this._idfCache[t];var i=this.tokenStore.count(e),n=1;return i>0&&(n=1+Math.log(this.tokenStore.length/i)),this._idfCache[t]=n},e.Index.prototype.search=function(t){var i=this.pipeline.run(e.tokenizer(t)),n=new e.Vector,o=[],s=this._fields.reduce(function(e,t){return e+t.boost},0),r=i.some(function(e){return this.tokenStore.has(e)},this);if(!r)return[];i.forEach(function(t,i,r){var a=1/r.length*this._fields.length*s,l=this,h=this.tokenStore.expand(t).reduce(function(i,o){var s=l.corpusTokens.indexOf(o),r=l.idf(o),h=1,c=new e.SortedSet;if(o!==t){var u=Math.max(3,o.length-t.length);h=1/Math.log(u)}return s>-1&&n.insert(s,a*r*h),Object.keys(l.tokenStore.get(o)).forEach(function(e){c.add(e)}),i.union(c)},new e.SortedSet);o.push(h)},this);var a=o.reduce(function(e,t){return e.intersect(t)});return a.map(function(e){return{ref:e,score:n.similarity(this.documentVector(e))}},this).sort(function(e,t){return t.score-e.score})},e.Index.prototype.documentVector=function(t){for(var i=this.documentStore.get(t),n=i.length,o=new e.Vector,s=0;n>s;s++){var r=i.elements[s],a=this.tokenStore.get(r)[t].tf,l=this.idf(r);o.insert(this.corpusTokens.indexOf(r),a*l)}return o},e.Index.prototype.toJSON=function(){return{version:e.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},e.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},/*!
 * lunr.Store
 * Copyright (C) 2014 Oliver Nightingale
 */
e.Store=function(){this.store={},this.length=0},e.Store.load=function(t){var i=new this;return i.length=t.length,i.store=Object.keys(t.store).reduce(function(i,n){return i[n]=e.SortedSet.load(t.store[n]),i},{}),i},e.Store.prototype.set=function(e,t){this.store[e]=t,this.length=Object.keys(this.store).length},e.Store.prototype.get=function(e){return this.store[e]},e.Store.prototype.has=function(e){return e in this.store},e.Store.prototype.remove=function(e){this.has(e)&&(delete this.store[e],this.length--)},e.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},/*!
 * lunr.stemmer
 * Copyright (C) 2014 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
e.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[^aeiou]",n="[aeiouy]",o=i+"[^aeiouy]*",s=n+"[aeiou]*",r="^("+o+")?"+s+o,a="^("+o+")?"+s+o+"("+s+")?$",l="^("+o+")?"+s+o+s+o,h="^("+o+")?"+n;return function(i){var s,c,u,d,f,p,g;if(i.length<3)return i;if(u=i.substr(0,1),"y"==u&&(i=u.toUpperCase()+i.substr(1)),d=/^(.+?)(ss|i)es$/,f=/^(.+?)([^s])s$/,d.test(i)?i=i.replace(d,"$1$2"):f.test(i)&&(i=i.replace(f,"$1$2")),d=/^(.+?)eed$/,f=/^(.+?)(ed|ing)$/,d.test(i)){var m=d.exec(i);d=new RegExp(r),d.test(m[1])&&(d=/.$/,i=i.replace(d,""))}else if(f.test(i)){var m=f.exec(i);s=m[1],f=new RegExp(h),f.test(s)&&(i=s,f=/(at|bl|iz)$/,p=new RegExp("([^aeiouylsz])\\1$"),g=new RegExp("^"+o+n+"[^aeiouwxy]$"),f.test(i)?i+="e":p.test(i)?(d=/.$/,i=i.replace(d,"")):g.test(i)&&(i+="e"))}if(d=/^(.+?)y$/,d.test(i)){var m=d.exec(i);s=m[1],d=new RegExp(h),d.test(s)&&(i=s+"i")}if(d=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,d.test(i)){var m=d.exec(i);s=m[1],c=m[2],d=new RegExp(r),d.test(s)&&(i=s+e[c])}if(d=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,d.test(i)){var m=d.exec(i);s=m[1],c=m[2],d=new RegExp(r),d.test(s)&&(i=s+t[c])}if(d=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,f=/^(.+?)(s|t)(ion)$/,d.test(i)){var m=d.exec(i);s=m[1],d=new RegExp(l),d.test(s)&&(i=s)}else if(f.test(i)){var m=f.exec(i);s=m[1]+m[2],f=new RegExp(l),f.test(s)&&(i=s)}if(d=/^(.+?)e$/,d.test(i)){var m=d.exec(i);s=m[1],d=new RegExp(l),f=new RegExp(a),p=new RegExp("^"+o+n+"[^aeiouwxy]$"),(d.test(s)||f.test(s)&&!p.test(s))&&(i=s)}return d=/ll$/,f=new RegExp(l),d.test(i)&&f.test(i)&&(d=/.$/,i=i.replace(d,"")),"y"==u&&(i=u.toLowerCase()+i.substr(1)),i}}(),e.Pipeline.registerFunction(e.stemmer,"stemmer"),/*!
 * lunr.stopWordFilter
 * Copyright (C) 2014 Oliver Nightingale
 */
e.stopWordFilter=function(t){return-1===e.stopWordFilter.stopWords.indexOf(t)?t:void 0},e.stopWordFilter.stopWords=new e.SortedSet,e.stopWordFilter.stopWords.length=119,e.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter"),/*!
 * lunr.trimmer
 * Copyright (C) 2014 Oliver Nightingale
 */
e.trimmer=function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")},e.Pipeline.registerFunction(e.trimmer,"trimmer"),/*!
 * lunr.stemmer
 * Copyright (C) 2014 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
e.TokenStore=function(){this.root={docs:{}},this.length=0},e.TokenStore.load=function(e){var t=new this;return t.root=e.root,t.length=e.length,t},e.TokenStore.prototype.add=function(e,t,i){var i=i||this.root,n=e[0],o=e.slice(1);return n in i||(i[n]={docs:{}}),0===o.length?(i[n].docs[t.ref]=t,void(this.length+=1)):this.add(o,t,i[n])},e.TokenStore.prototype.has=function(e){if(!e)return!1;for(var t=this.root,i=0;i<e.length;i++){if(!t[e[i]])return!1;t=t[e[i]]}return!0},e.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var t=this.root,i=0;i<e.length;i++){if(!t[e[i]])return{};t=t[e[i]]}return t},e.TokenStore.prototype.get=function(e,t){return this.getNode(e,t).docs||{}},e.TokenStore.prototype.count=function(e,t){return Object.keys(this.get(e,t)).length},e.TokenStore.prototype.remove=function(e,t){if(e){for(var i=this.root,n=0;n<e.length;n++){if(!(e[n]in i))return;i=i[e[n]]}delete i.docs[t]}},e.TokenStore.prototype.expand=function(e,t){var i=this.getNode(e),n=i.docs||{},t=t||[];return Object.keys(n).length&&t.push(e),Object.keys(i).forEach(function(i){"docs"!==i&&t.concat(this.expand(e+i,t))},this),t},e.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.lunr=t()}(this,function(){return e})}(),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(e){function t(e){if(e){var t=window.location.hash;t&&(t=t.replace(/^#+/,"")),history&&history.pushState({},"","?"+e+"#"+t),$("#lang-selector a").removeClass("active"),$("#lang-selector a[data-language-name='"+e+"']").addClass("active");for(var i=0;i<n.length;i++)$(".highlight."+n[i]).hide(),$(".desc."+n[i]).hide();$(".highlight."+e).show(),$(".desc."+e).show()}}function i(e){var i=(e[0],localStorage.getItem("language"));n=e,""!=location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),n)?(t(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):t(null!==i&&-1!=jQuery.inArray(i,n)?i:n[0])}var n=[];e.setupLanguages=i,e.activateLanguage=t,$(function(){$("#lang-selector a").on("click",function(){var e=$(this).data("language-name");return t(e),!1}),window.onpopstate=function(){t(window.location.search.substr(1))}})}(window),function(e){function t(){$("h1").each(function(){var e=$(this),t=e.nextUntil("h1"),i=$('<section id="section-'+e.prop("id")+'"></section>');e.after(i.append(t)),i.prepend(e),m.add({id:e.prop("id"),title:e.text(),body:t.text()})})}function i(){u=$(".content"),d=$(".dark-box"),f=$(".search-info"),$("#input-search").on("keyup",r).on("focus",a).on("blur",l)}function n(e){return $(".tocify-item[data-unique="+e+"]").closest(".tocify-header")}function o(e,t){var i=parseInt(t.id.replace(/[^\d]/g,""),10),n=parseInt(e.id.replace(/[^\d]/g,""),10);return i===n?0:n>i?-1:1}function s(){var e=$(".tocify-header").sort(o);$.each(e,function(e,t){$(t).insertBefore($("#toc ul:first-child"))})}function r(e){var t=$("section, #toc .tocify-header");if(f.hide(),c(),27===e.keyCode&&(this.value=""),this.value){t.hide();var i=m.search(this.value),o=[];if($.each(i,function(e,t){t.score>=1e-4&&o.push(t)}),o.length){if(lastRef=null,s(),$.each(o,function(e,t){var i=t.ref;$("#section-"+i).show();var o=n(i);lastRef&&n(lastRef).insertBefore(o),o.show(),lastRef=i}),o.length>1){var r=o[0].ref,a=o[1].ref;n(r).insertBefore(n(a))}h.call(this)}else t.show(),f.text('No Results Found for "'+this.value+'"').show()}else t.show();p.triggerHandler("scroll.tocify"),p.triggerHandler("resize")}function a(){r.call(this,{})}function l(){c(),f.hide()}function h(){this.value&&u.highlight(this.value,g)}function c(){u.unhighlight(g)}var u,d,f,p=$(e),g={element:"span",className:"search-highlight"},m=new lunr.Index;m.ref("id"),m.field("title",{boost:10}),m.field("body"),m.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(t),$(i)}(window),function(e){function t(){t=$("#toc").tocify({selectors:"h1, h2, h3",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-2,scrollHistory:!0,hashGenerator:function(e,t){return t.prop("id")}}).data("toc-tocify")}function i(){setTimeout(function(){t.setOption("showEffectSpeed",180)},50)}var t;e.toc=t,$(t),$(i)}(window);