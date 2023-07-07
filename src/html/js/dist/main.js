/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./html/js/ts/index.ts":
/*!*****************************!*\
  !*** ./html/js/ts/index.ts ***!
  \*****************************/
/***/ (() => {

eval("\nwindow.addEventListener('load', (event) => {\n    let p = document.querySelector('#target');\n    p.textContent = row;\n});\nlet hisName;\nhisName = \"tanaka\";\nconsole.log(hisName);\nlet num1 = 2;\nlet num2 = 2;\nlet row = \"\";\nfor (let i = 0; i < 5; i++) {\n    for (let j = 0; j < 5; j++) {\n        let str = \"\";\n        if (num1 <= j && j <= num2) {\n            str += \"△\";\n        }\n        else {\n            str += \"\";\n        }\n        row += str;\n    }\n    if (i < 2) {\n        num1--;\n        num2++;\n    }\n    else {\n        num1++;\n        num2--;\n    }\n    row += \"\\r\\n\";\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./html/js/ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./html/js/ts/index.ts"]();
/******/ 	
/******/ })()
;