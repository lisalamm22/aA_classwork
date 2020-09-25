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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const FollowToggle = {
    constructor(button){
        this.userId = button.dataset.userId;
        this.followState = button.dataset.initialFollowState; 
        // can be changed to followed/unfollowed strings if needed
        this.$el = $(button);
        this.render();
        console.log("Hey we ran");

        // put in event listener here!
        this.$el.on("click",(e) => this.handleClick(e));
    },

    render() {
        if (this.followState === true ){
            this.$el.text('Unfollow!');
        }
        else{
            this.$el.text('Follow!');
        }
    },

    handleClick(e) {

        e.preventDefault();
        console.log("click handled");


        if (this.followState === true) {
            console.log("first here");
            $.ajax({
                url: '/users/' + this.userId + '/follow', method: 'DELETE', datatype: 'JSON'})
                .then(() => {
                this.followState = !this.followState;
                this.render();
            });
        } else {
            console.log("second here");

            $.ajax({url: '/users/' + this.userId + '/follow', method: 'POST', datatype: 'JSON'}).
                then(() => {
                this.followState = !this.followState;
                this.render();
            });
            
        }
 
        //$.ajax({ url: ‘/squirrels’, method: ‘POST’, data: …}, datatype: ‘JSON’, }).then(res => console.log(res)).fail(err => console.log(err));

        // (1) set up event listener in case someone clicks = put in constructor

        // (2) be the actual set of steps that happen if someone clicks  // we do (2) here?

        // prevent default action = don't take to new page
        // make ajax request
        // on success (= promise), toggle followState and re-render

 
        //


    } 
}





module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");


$(function () {
    console.log("ready!");
    const $followToggleButtons = $(".follow-toggle");
    console.log($followToggleButtons);
    console.log($followToggleButtons.length);
    let followToggleInstances = [];
    for(let k=0; k<$followToggleButtons.length; k++){
        console.log("in this loop");
        let instance = FollowToggle.constructor($followToggleButtons[k]);
        followToggleInstances.push(instance);
    }
});


// User.all();
// FollowToggle.all();

// get all the buttons : use class .follow_toggle
// call constructor for each
// 

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map