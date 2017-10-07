/*! ver. 1507391717589 - SolidZORO <solidzoro@live.com> */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://solidzoro.xxx/_statics";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = bundle_5e40794c63791c037a30;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(3);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = _jquery2.default;
window.jquery = _jquery2.default;
window.jQuery = _jquery2.default;

document.addEventListener('DOMContentLoaded', function () {
    if (/solidzoro\.com/.test(window.location.origin) === false) {
        var re = new RegExp('http://solidzoro.com/DayOnePhotos', 'g');
        document.body.innerHTML = document.body.innerHTML.replace(re, 'http://img.nt.xxx/DayOnePhotos');
    }
}, false);

console.log(333);

(0, _jquery2.default)(function () {
    if ((0, _jquery2.default)('.layout-body--book').length) {
        console.log('is-layout-body--book');

        _jquery2.default.ajax({
            type: 'get',
            async: false,
            url: 'https://api.douban.com/v2/book/user/SolidZORO/collections',
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'bookList',
            success: function success(jsonp) {
                var bookListEl = (0, _jquery2.default)('.book-list');
                bookListEl.html('');

                _jquery2.default.each(jsonp.collections, function (index, value) {
                    console.log(value);
                    bookListEl.append('\n                        <li class="book-list__item">\n                            <div class="image">\n                                <a href="' + value.book.alt + '" target=_blank><img src="' + value.book.images.large + '" alt="' + value.book.title + '"></a>\n                            </div>\n                            <div class="info">\n                                <h2 class="title">\n                                    <a href="' + value.book.alt + '" target=_blank>' + value.book.title + '</a>\n                                </h2>\n                                <h3 class="author">' + value.book.author + '</h3>\n                                <p class="comment">' + (value.comment ? value.comment : 'N/A') + '</p>\n                            </div>\n                        </li>\n                    ');
                });
            },
            error: function error() {
                console.log('fail');
            }
        });
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);