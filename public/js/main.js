/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./module/footer.js */ \"./src/js/module/footer.js\")\r\n\r\nconsole.log (' Привет от JavaScript!');\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/footer.js":
/*!*********************************!*\
  !*** ./src/js/module/footer.js ***!
  \*********************************/
/***/ (function() {

eval("var check1 = null;\r\nvar check2 = 0;\r\nfunction radioClick(c) {\r\n    if (check1 != c) {\r\n        try {\r\n            document.getElementById('footer__headline-icon_' + check1.value).style.transform = \"rotate(0deg)\";\r\n        } catch {}\r\n        check2 = 0;\r\n        check1 = c\r\n    }\r\n    check2 ^= 1;\r\n    c.checked = check2\r\n    if(check2 ==1) {\r\n        document.getElementById('footer__headline-icon_'+c.value).style.transform = \"rotate(180deg)\";\r\n    }\r\n    else {\r\n        document.getElementById('footer__headline-icon_' + c.value).style.transform = \"rotate(0deg)\";\r\n    }\r\n}\r\nwindow.radioClick = radioClick;\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/footer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;