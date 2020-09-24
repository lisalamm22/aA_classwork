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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\n\nAsteroid.COLOR = 'grey';\nAsteroid.RADIUS = 50;  \n  \nfunction Asteroid(newObj) {\n    newObj.color = Asteroid.COLOR;\n    newObj.radius = Asteroid.RADIUS;\n    newObj.vel = Util.randomVec(5);\n\n    MovingObject.call(this,newObj)\n}\n\nUtil.inherits(Asteroid, MovingObject)\n\n// new Asteroid({ pos: [30, 30] });\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nGame.DIM_X = 900;\nGame.DIM_Y = 900;\nGame.NUM_ASTEROIDS = 101;\n\nfunction Game (){\n    this.asteroids = [];\n    while(this.asteroids.length < Game.NUM_ASTEROIDS){\n        this.addAsteroids();\n    }\n}\n\nGame.prototype.randomPosition = function(){\n    const pos_x =  Math.floor(Game.DIM_X * Math.random());\n    const pos_y =  Math.floor(Game.DIM_Y * Math.random());\n    return {pos: [pos_x, pos_y]}\n}\n\nGame.prototype.addAsteroids = function() {\n    let newObj = this.randomPosition();\n    newObj.game = this;\n    let babyAsteroid = new Asteroid(newObj);\n    this.asteroids.push(babyAsteroid);\n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = 'black';\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    \n    this.asteroids.forEach( function(asteroid) { asteroid.draw(ctx)} );\n}\n\nGame.prototype.moveObjects = function(){\n    this.asteroids.forEach(function (asteroid) { asteroid.move() });\n}\n\nGame.prototype.wrap = function(posObj){ \n    let pos = posObj.pos\n    \n    if (pos[0] === 0) {posObj.pos[0] = Game.DIM_X}\n    else if (pos[0] === Game.DIM_X) {posObj.pos[0] = 0}\n    else if (pos[1] === 0) {posObj.pos[1] = Game.DIM_Y}\n    else if (pos[1] === Game.DIM_Y) {posObj.pos[1] = 0}\n    \n    return posObj;\n}\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\n\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.ctx = ctx\n}\n\nGameView.prototype.start = function() {\n    let that = this;\n    setInterval(function() {\n        that.game.draw(that.ctx);\n        that.game.moveObjects();\n    }, 20)\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Hi\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasElement = document.getElementById(\"game-canvas\");\n    canvasElement.width = 900;\n    canvasElement.height = 900;\n    const ctx = canvasElement.getContext(\"2d\");\n    window.ctx = ctx;\n\n\n    // const mo = new MovingObject({\n    // pos: [30, 30],\n    // vel: [10, 10],\n    // radius: 5,\n    // color: \"red\"\n    // });\n\n    // mo.draw(ctx);\n\n    // const game1 = new Game();\n\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nfunction MovingObject (optionsHash) {\n    this.pos = optionsHash[\"pos\"];    \n    this.vel = optionsHash[\"vel\"];\n    this.radius = optionsHash[\"radius\"];\n    this.color = optionsHash[\"color\"];\n    this.game = optionsHash[\"game\"];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI );\n    ctx.closePath();\n    ctx.fill();\n}\n\n\n\nMovingObject.prototype.move = function() {\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]]\n    this.game.wrap(this.pos)\n}\n\n// MovingObject.prototype.isCollidedWith = function(otherMovingObject) {}\n\nmodule.exports = MovingObject;\n\n// const mo = new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// });\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });