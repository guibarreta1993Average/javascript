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
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\33-EcmaScript-Import_Export\\\\main.js: Unexpected token (1:20)\\n\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 1 | \\u001b[39m\\u001b[36mimport\\u001b[39m somaFunction {sub as subtracao\\u001b[33m,\\u001b[39m mul} from \\u001b[32m\\\"./math\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33m*\\u001b[39m as mensagens from \\u001b[32m\\\"./mensagens\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39mconsole\\u001b[33m.\\u001b[39mlog(somaFunction(\\u001b[35m3\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[35m4\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6325:17)\\n    at Parser.unexpected (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7642:16)\\n    at Parser.expectContextual (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7608:41)\\n    at Parser.parseImport (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11168:12)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9927:27)\\n    at Parser.parseStatement (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10392:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9758:10)\\n    at Parser.parse (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11270:17)\\n    at parse (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11306:38)\\n    at parser (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\Users\\\\guilherme.barreta\\\\Documents\\\\Rocketseat\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./33-EcmaScript-Import_Export/main.js?");

/***/ })

/******/ });