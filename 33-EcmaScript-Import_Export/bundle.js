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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./33-EcmaScript-Import_Export/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./33-EcmaScript-Import_Export/main.js":
/*!*********************************************!*\
  !*** ./33-EcmaScript-Import_Export/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./33-EcmaScript-Import_Export/math.js\");\n/* harmony import */ var _mensagens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagens */ \"./33-EcmaScript-Import_Export/mensagens.js\");\n//função padrão 'soma' renomeada para somaFunction\n // importar todas as mensagens\n\n\nconsole.log(Object(_math__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3, 4));\nconsole.log(Object(_math__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(19, 7));\nconsole.log(Object(_math__WEBPACK_IMPORTED_MODULE_0__[\"mul\"])(10, 5));\nconsole.log(_mensagens__WEBPACK_IMPORTED_MODULE_1__[\"ola\"]());\nconsole.log(_mensagens__WEBPACK_IMPORTED_MODULE_1__[\"vaiDormir\"]());\n\n//# sourceURL=webpack:///./33-EcmaScript-Import_Export/main.js?");

/***/ }),

/***/ "./33-EcmaScript-Import_Export/math.js":
/*!*********************************************!*\
  !*** ./33-EcmaScript-Import_Export/math.js ***!
  \*********************************************/
/*! exports provided: default, sub, mul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mul\", function() { return mul; });\nfunction soma(a, b) {\n  return a + b;\n}\nfunction sub(a, b) {\n  return a - b;\n}\nfunction mul(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack:///./33-EcmaScript-Import_Export/math.js?");

/***/ }),

/***/ "./33-EcmaScript-Import_Export/mensagens.js":
/*!**************************************************!*\
  !*** ./33-EcmaScript-Import_Export/mensagens.js ***!
  \**************************************************/
/*! exports provided: ola, vaiDormir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ola\", function() { return ola; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vaiDormir\", function() { return vaiDormir; });\nfunction ola() {\n  return \"Hello, World!!\";\n}\nfunction vaiDormir() {\n  return \"vai Dormir!!\";\n}\n\n//# sourceURL=webpack:///./33-EcmaScript-Import_Export/mensagens.js?");

/***/ })

/******/ });