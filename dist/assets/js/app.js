/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
// import './assets/img/_sprite.svg';


global.$ = global.jQuery = $;

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(18));
requireAll(__webpack_require__(46));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(6)))

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(15);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bg-sale.svg": 19,
	"./bg-sticker.svg": 20,
	"./ic-arr-right.svg": 21,
	"./ic-arrow-down.svg": 22,
	"./ic-arrow-left.svg": 23,
	"./ic-arrow-right.svg": 24,
	"./ic-arrow-up.svg": 25,
	"./ic-call.svg": 26,
	"./ic-cart.svg": 27,
	"./ic-close.svg": 28,
	"./ic-delivery.svg": 29,
	"./ic-enter.svg": 30,
	"./ic-fb.svg": 31,
	"./ic-filter.svg": 32,
	"./ic-garantee.svg": 33,
	"./ic-heart.svg": 34,
	"./ic-instagram.svg": 35,
	"./ic-like.svg": 36,
	"./ic-person.svg": 37,
	"./ic-present-stroke.svg": 38,
	"./ic-present.svg": 39,
	"./ic-price-tag.svg": 40,
	"./ic-sale.svg": 41,
	"./ic-search.svg": 42,
	"./ic-star.svg": 43,
	"./ic-tick.svg": 44,
	"./ic-vk.svg": 45
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 18;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
      id: "bg-sale-usage",
      viewBox: "0 0 50 50",
      url: "assets/sprites/" + "sprite.svg#bg-sale",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
      id: "bg-sticker-usage",
      viewBox: "0 0 50 50",
      url: "assets/sprites/" + "sprite.svg#bg-sticker",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-arr-right-usage",
      viewBox: "0 0 13 11",
      url: "assets/sprites/" + "sprite.svg#ic-arr-right",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-arrow-down-usage",
      viewBox: "0 0 46 24",
      url: "assets/sprites/" + "sprite.svg#ic-arrow-down",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-arrow-left-usage",
      viewBox: "0 0 16 30",
      url: "assets/sprites/" + "sprite.svg#ic-arrow-left",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-arrow-right-usage",
      viewBox: "0 0 16 30",
      url: "assets/sprites/" + "sprite.svg#ic-arrow-right",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-arrow-up-usage",
      viewBox: "0 0 46 24",
      url: "assets/sprites/" + "sprite.svg#ic-arrow-up",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-call-usage",
      viewBox: "0 0 20 20",
      url: "assets/sprites/" + "sprite.svg#ic-call",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-cart-usage",
      viewBox: "0 0 20 18",
      url: "assets/sprites/" + "sprite.svg#ic-cart",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-close-usage",
      viewBox: "0 0 18 18",
      url: "assets/sprites/" + "sprite.svg#ic-close",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-delivery-usage",
      viewBox: "0 0 26 18",
      url: "assets/sprites/" + "sprite.svg#ic-delivery",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-enter-usage",
      viewBox: "0 0 512 512",
      url: "assets/sprites/" + "sprite.svg#ic-enter",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-fb-usage",
      viewBox: "0 0 12 20",
      url: "assets/sprites/" + "sprite.svg#ic-fb",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-filter-usage",
      viewBox: "0 0 511 512",
      url: "assets/sprites/" + "sprite.svg#ic-filter",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-garantee-usage",
      viewBox: "0 0 20 25",
      url: "assets/sprites/" + "sprite.svg#ic-garantee",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-heart-usage",
      viewBox: "0 0 22 19",
      url: "assets/sprites/" + "sprite.svg#ic-heart",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-instagram-usage",
      viewBox: "0 0 20 20",
      url: "assets/sprites/" + "sprite.svg#ic-instagram",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-like-usage",
      viewBox: "0 0 20 20",
      url: "assets/sprites/" + "sprite.svg#ic-like",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-person-usage",
      viewBox: "0 0 20 24",
      url: "assets/sprites/" + "sprite.svg#ic-person",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-present-stroke-usage",
      viewBox: "0 0 26 26",
      url: "assets/sprites/" + "sprite.svg#ic-present-stroke",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-present-usage",
      viewBox: "0 0 20 18",
      url: "assets/sprites/" + "sprite.svg#ic-present",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-price-tag-usage",
      viewBox: "0 0 512 512",
      url: "assets/sprites/" + "sprite.svg#ic-price-tag",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-sale-usage",
      viewBox: "0 0 23 18",
      url: "assets/sprites/" + "sprite.svg#ic-sale",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-search-usage",
      viewBox: "0 0 16 16",
      url: "assets/sprites/" + "sprite.svg#ic-search",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-star-usage",
      viewBox: "0 0 16 16",
      url: "assets/sprites/" + "sprite.svg#ic-star",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-tick-usage",
      viewBox: "0 0 10 8",
      url: "assets/sprites/" + "sprite.svg#ic-tick",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-vk-usage",
      viewBox: "0 0 20 12",
      url: "assets/sprites/" + "sprite.svg#ic-vk",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ic-youtube.svg": 47
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
      id: "ic-youtube-usage",
      viewBox: "0 0 52 36",
      url: "assets/sprites/" + "sprite.svg#ic-youtube",
      toString: function () {
        return this.url;
      }
    }

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js
var jquery_fancybox = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/slick-slider/slick/slick.min.js
var slick_min = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/select2/dist/js/select2.js
var select2 = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/inputmask/index.js
var inputmask = __webpack_require__(2);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);

// EXTERNAL MODULE: ./node_modules/nouislider/dist/nouislider.js
var nouislider = __webpack_require__(4);
var nouislider_default = /*#__PURE__*/__webpack_require__.n(nouislider);

// CONCATENATED MODULE: ./src/js/common.js

 // import 'bootstrap/js/dist/modal';






// CONCATENATED MODULE: ./src/js/index.js

var widthWindow = jquery_default()(window).width();
jquery_default()(window).on('resize', function () {
  widthWindow = jquery_default()(window).width();
}); // Маска для телефона

inputmask_default()('+7 (999) 999-9999').mask('.js-phone'); // move-up

jquery_default()(window).on('scroll', function () {
  if (jquery_default()(this).scrollTop() > 300) {
    jquery_default()('.js-move-up').addClass('visible');
  } else {
    jquery_default()('.js-move-up').removeClass('visible');
  }
});
jquery_default()('.js-move-up').on('click', function () {
  jquery_default()('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
}); // show/hide form search

if (jquery_default()('.js-search-form').length) {
  jquery_default()('.js-search-form-btn').on('click', function () {
    jquery_default()(this).closest('.js-search-form').toggleClass('active');

    if (widthWindow < 992) {
      jquery_default()('.js-search-form-content').slideToggle(300);
    }
  });
  jquery_default()(document).on('click', function (event) {
    if (jquery_default()(event.target).closest(".js-search-form").length) return;
    jquery_default()('.js-search-form').removeClass('active');

    if (widthWindow < 992) {
      jquery_default()('.js-search-form-content').slideUp(300);
    }

    event.stopPropagation();
  });
} // top slider


if (jquery_default()('.js-top-slider').length) {
  jquery_default()('.js-top-slider-list').slick({
    infinite: true,
    vertical: true,
    appendArrows: jquery_default()('.js-top-slider-arr'),
    prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_up"><svg class="icon ic-arrow-up" width="46" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-up"></use></svg></button>',
    nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_down"><svg class="icon ic-arrow-down" width="46" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-down"></use></svg></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        vertical: false,
        arrows: false
      }
    }]
  });
} // catalog slider


if (jquery_default()('.js-cat-list-slider').length) {
  jquery_default()('.js-cat-list-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
    nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
} // catalog popular slider


if (jquery_default()('.js-popular-slider').length) {
  jquery_default()('.js-popular-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
    nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
} // open/close header contacts


if (jquery_default()('.js-btn-contacts').length) {
  jquery_default()('.js-btn-contacts').on('click', function () {
    jquery_default()(this).toggleClass('active');
    jquery_default()('.js-contacts').slideToggle(300);
  });
}

jquery_default()(document).on('click', function (event) {
  if (widthWindow < 992) {
    if (jquery_default()(event.target).closest(".js-btn-contacts").length) return;
    jquery_default()('.js-btn-contacts').removeClass('active');
    jquery_default()('.js-contacts').slideUp(300);
    event.stopPropagation();
  }
}); // open/close main menu

if (jquery_default()('.js-btn-menu').length) {
  jquery_default()('.js-btn-menu').on('click', function () {
    jquery_default()(this).toggleClass('active');
    jquery_default()('.js-header-nav').slideToggle(300);
    jquery_default()('.js-body').toggleClass('no-scroll');
  });
}

if (jquery_default()('.js-main-menu-arr').length) {
  jquery_default()('.js-main-menu-arr').on('click', function (e) {
    e.preventDefault();
    jquery_default()(this).toggleClass('active');
    jquery_default()(this).closest('.js-main-menu-link').siblings('.js-main-menu-sub').slideToggle(300);
  });
} // open/close left menu


if (jquery_default()('.js-left-menu-arr').length) {
  jquery_default()('.js-left-menu-arr').on('click', function (e) {
    e.preventDefault();
    jquery_default()(this).toggleClass('active');
    jquery_default()(this).closest('.js-left-menu-link').siblings('.js-left-menu-sub').slideToggle(300);
  });
} // open/close item filter


if (jquery_default()('.js-filter-head').length) {
  jquery_default()('.js-filter-head').on('click', function () {
    jquery_default()(this).closest('.js-filter-item').toggleClass('active');
    jquery_default()(this).siblings('.js-filter-content').slideToggle(300);
  });
}

if (jquery_default()('.js-filter-btn').length) {
  jquery_default()('.js-filter-btn').on('click', function () {
    jquery_default()(this).siblings('.js-filter').slideToggle(300);
    jquery_default()(this).toggleClass('active');
  });
} // range-slider


if (jquery_default()('.js-slider-range').length) {
  var slider = document.getElementById('slider-range');
  var minRange = Number(slider.getAttribute('data-min'));
  var maxRange = Number(slider.getAttribute('data-max'));
  var start = Number(slider.getAttribute('data-cur-min'));
  var finish = Number(slider.getAttribute('data-cur-max'));
  nouislider_default.a.create(slider, {
    start: [start, finish],
    step: 5,
    connect: true,
    range: {
      'min': minRange,
      'max': maxRange
    }
  });
  var snapValues = [document.getElementById('slider-range-min'), document.getElementById('slider-range-max')];
  slider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].value = Math.round(values[handle]);
  });
  snapValues.forEach(function (input, handle) {
    input.addEventListener('change', function () {
      var valItem = this.value;
      var minValItem = Number(snapValues[0].value);
      var maxValItem = Number(snapValues[1].value);

      if (handle == 0) {
        if (valItem < minRange || valItem > maxRange || valItem >= maxValItem) {
          valItem = minRange;
        }
      } else {
        if (valItem < minRange || valItem > maxRange || valItem <= minValItem) {
          valItem = maxRange;
        }
      }

      slider.noUiSlider.setHandle(handle, valItem);
    });
  }); // Valid inputs

  jquery_default()('.js-slider-range-min').on("change keyup input click", function () {
    if (this.value.match(/[^0-9 ]/g)) {
      this.value = this.value.replace(/[^0-9 ]/g, '');
    }
  });
  jquery_default()('.js-slider-range-max').on("change keyup input click", function () {
    if (this.value.match(/[^0-9 ]/g)) {
      this.value = this.value.replace(/[^0-9 ]/g, '');
    }
  });
} // unwrap block


if (jquery_default()('.js-unwrap-block').length) {
  jquery_default()('.js-unwrap-head').on('click', function (event) {
    event.preventDefault();
    var $parent = jquery_default()(this).parents('.js-unwrap-block');
    $parent.toggleClass('opened');

    if ($parent.hasClass('opened')) {
      $parent.children('.js-unwrap-content').slideDown(400);
    } else {
      $parent.children('.js-unwrap-content').slideUp(400);
    }
  });
} // Слайдер продукта на детальной каталога


if (jquery_default()('.js-product-slider').length) {
  jquery_default()('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-product-thumb-slider',
    prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
    nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        fade: false
      }
    }]
  });
  jquery_default()('.js-product-thumb-slider').slick({
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-product-slider',
    focusOnSelect: true,
    prevArrow: '<button id="prev" type="button" class="product-arr product-arr_up"><svg class="icon ic-arrow-up" width="20" height="11"><use xlink:href="/assets/sprites/sprite.svg#ic-arrow-up"></use></svg></button>',
    nextArrow: '<button id="next" type="button" class="product-arr product-arr_down"><svg class="icon ic-arrow-down" width="20" height="11"><use xlink:href="/assets/sprites/sprite.svg#ic-arrow-down"></use></svg></button>',
    responsive: [{
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        vertical: true,
        arrows: true
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        vertical: true,
        arrows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        vertical: false,
        arrows: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        vertical: false,
        arrows: false
      }
    }]
  });
  jquery_default()('.js-product-slider').on("afterChange", function (event, slick, currentSlide, nextSlide) {
    document.querySelector('.js-product-slider-video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  });
} // Yandex карта на странице обучения


if (jquery_default()('.js-map').length) {
  var js_init = function init() {
    var myMap;
    jquery_default()('.js-map').each(function () {
      var coordx = jquery_default()(this).data('coordx');
      var coordy = jquery_default()(this).data('coordy');
      var idElem = jquery_default()(this).data('id');
      myMap = new ymaps.Map("map" + idElem, {
        center: [coordx, coordy],
        zoom: 15,
        controls: []
      });
      var myPlacemark = new ymaps.Placemark([coordx, coordy], {}, {
        iconLayout: 'default#image' // iconImageHref: 'assets/img/mark-map.png',
        // iconImageSize: [50, 65],
        // iconImageOffset: [-25, -65] 

      });
      myMap.geoObjects.add(myPlacemark);
    });
  };

  // Иницилизация карты
  ymaps.ready(js_init);
} // Плавный переход к блоку


if (jquery_default()('.js-link-move').length) {
  jquery_default()('.js-link-move').on('click', function () {
    var posBlock = jquery_default()('.js-to-move[data-move=' + jquery_default()(this).data('move') + ']').offset().top;
    jquery_default()(window).on('resize', function () {
      posBlock = jquery_default()('.js-to-move[data-move=' + jquery_default()(this).data('move') + ']').offset().top;
    });
    jquery_default()('html, body').animate({
      scrollTop: posBlock
    }, 600);
  });
} // Нестандартный select


if (jquery_default()('.js-select').length) {
  jquery_default()('.js-select').select2({
    width: '100%',
    minimumResultsForSearch: Infinity,
    placeholder: function placeholder() {
      jquery_default()(this).attr('data-placeholder');
    }
  });
}

/***/ })
/******/ ]);