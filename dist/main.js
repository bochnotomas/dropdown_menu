/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function showMenu(dropdownToggle, itemsId) {\r\n    const toggleBtn = document.getElementById(dropdownToggle);\r\n    const items = document.getElementById(itemsId);\r\n    const arrow = document.querySelector('.arrow');\r\n\r\n    if(dropdownToggle && itemsId){\r\n        toggleBtn.addEventListener('click', ()=>{\r\n            items.classList.toggle('hidden');\r\n            arrow.classList.toggle('rotate');\r\n        })\r\n    }\r\n}\r\n\r\n\r\nshowMenu('1','2')\n\n//# sourceURL=webpack://dropdown_menu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;