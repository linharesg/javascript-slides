(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function n(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,t(r.key),r)}}var o=function(){return e=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.slide=document.querySelector(t),this.wrapper=document.querySelector(n)},(t=[{key:"onStart",value:function(e){e.preventDefault(),this.wrapper.addEventListener("mousemove",this.onMove)}},{key:"onMove",value:function(e){}},{key:"onEnd",value:function(e){this.wrapper.removeEventListener("mousemove",this.onMove)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this)}},{key:"init",value:function(){return this.bindEvents(),this.addSlideEvents(),this}}])&&n(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();console.clear(),new o(".slide",".slide-wrapper").init()})();