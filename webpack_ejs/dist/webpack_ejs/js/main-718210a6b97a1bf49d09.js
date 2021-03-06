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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import html from './html.ejs';
// import index from './index.ejs';
var html = __webpack_require__(1);
var index = __webpack_require__(2);

/***
 * 语法说明：
 * 1 webpack html-webpack-plugin 插件讲本文输出的 对象index 转换为html代码，及html.js转换为 index.html
 * 2 专业页面是index.ejs 可以添加多个魔板文件例如 html.ejs ，添加到index()参数对象中去，格式（模板文件：模板方法/在主页面名称+（参数）
 *   如果没有参数可传递 直接写模板名称：在主页面名称
 * 3 模板中获取的参数： 在index.ejs中引入其他末班直接输入<%=模板名字%> 。如果没有参数传入需要加入();因为此时已经是方法
 */

module.exports = index({
  html: html({ name: 'ejs+node success!', arr: ['a', 'b', 'c'] })
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\r\n    <div>this is ' +
((__t = ( name )) == null ? '' : __t) +
'</div>\r\n    ';
 for(var i=0;i<arr.length;i++){ ;
__p += '\r\n\r\n    ' +
((__t = ( arr[i]  )) == null ? '' : __t) +
'\r\n\r\n    ';
 } ;
__p += '\r\n</div>';

}
return __p
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<html>\r\n<heade>\r\n\r\n</heade>\r\n<body>\r\n    ' +
((__t = (html )) == null ? '' : __t) +
'\r\n</body>\r\n</html>';

}
return __p
}

/***/ })
/******/ ]);