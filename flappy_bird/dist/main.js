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

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bird)\n/* harmony export */ });\nconst CONSTANTS = {\r\n  GRAVITY:  0.8,\r\n  FLAP_SPEED:  -8,\r\n  TERMINAL_VEL:  12,\r\n  BIRD_WIDTH:  40,\r\n  BIRD_HEIGHT:  30\r\n};\r\n\r\nclass Bird {\r\n  constructor (dimensions) {\r\n    this.velocity = 0;\r\n    this.dimensions = dimensions;\r\n    this.posX = dimensions['width'] / 3;\r\n    this.posY = dimensions['height'] / 2;\r\n  }\r\n\r\n  drawBird(ctx) {\r\n    let posX = this.posX\r\n    let posY = this.posY\r\n    ctx.fillStyle = \"yellow\";\r\n    ctx.fillRect(posX, posY, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\r\n  }\r\n\r\n  animate(ctx) {\r\n    this.move();\r\n    this.drawBird(ctx);\r\n  }\r\n\r\n  move () {\r\n    this.posY += this.velocity;\r\n    this.velocity += CONSTANTS.GRAVITY;\r\n    if (this.velocity > CONSTANTS.TERMINAL_VEL) {\r\n      this.velocity = CONSTANTS.TERMINAL_VEL;\r\n    }\r\n  }\r\n\r\n  flap () {\r\n    this.velocity = CONSTANTS.FLAP_SPEED;\r\n  }\r\n  \r\n}\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FlappyBird)\n/* harmony export */ });\n/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ \"./src/level.js\");\n/* harmony import */ var _bird_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird.js */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n  }\n\n  animate () {\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n  \n  restart () {\n    this.running = false;\n    this.level = new _level_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  play () {\n    console.log('in play')\n    this.running = true;\n    this.animate();\n  }\n\n  click () {\n    this.bird.flap();\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\ncanvas.addEventListener('click', (event) => {game.click()})\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.play();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe.js */ \"./src/pipe.js\");\n\n\nconst CONSTANTS = {\n  PIPE_DISTANCE:  220,\n  PIPE_GAP:  150,\n};\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [new _pipe_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dimensions)];\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx)\n    this.drawPipes(ctx)\n    this.movePipes()\n  }\n\n  drawPipes(ctx){\n    this.pipes.forEach(pipe => {\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(pipe.posX-100, 0, pipe.width, pipe.gapStartHeight)\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(pipe.posX-100, (pipe.gapStartHeight + CONSTANTS.PIPE_GAP), pipe.width, 10000)\n    })\n  }\n\n  movePipes () {\n    this.pipes.forEach(pipe => {\n      pipe.posX -= 3\n    })\n  }\n\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/pipe.js":
/*!*********************!*\
  !*** ./src/pipe.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pipe)\n/* harmony export */ });\nconst CONSTANTS = {\r\n  WIDTH:  50,\r\n};\r\n\r\n\r\nclass Pipe {\r\n  constructor (dimensions) {\r\n    this.dimensions = dimensions;\r\n    this.posX = dimensions['width']\r\n    this.gapStartHeight = Math.random() * (dimensions['height']-50 - 50) + 50\r\n    this.width = CONSTANTS.WIDTH;\r\n  } \r\n}\n\n//# sourceURL=webpack:///./src/pipe.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;