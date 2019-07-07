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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\_react_prac\\dumb-router\\node_modules\\react\\react.js'");

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(50);
module.exports = class Router extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hash: window.location.hash //Assigns initial URL hash value.
		};this.updateHash = this.updateHash.bind(this);
	}
	updateHash(event) {
		this.setState({ hash: window.location.hash });
	}
	componentDidMount() {
		window.addEventListener("hashchange", this.updateHash, false); //Feeds new URL hash values.
	}
	componentWillUnmount() {
		window.removeEventListener("hashchange", this.updateHash, false);
	}
	render() {
		if (this.props.mapping[this.state.hash]) return this.props.mapping[this.state.hash];else return this.props.mapping["*"];
	}
};

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\_react_prac\\dumb-router\\node_modules\\react-dom\\index.js'");

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(50);
const ReactDOM = __webpack_require__(82);
const Router = __webpack_require__(81);

const mapping = {
	"#profile": React.createElement(
		"div",
		null,
		"Profile (",
		React.createElement(
			"a",
			{ href: "#" },
			"Home"
		),
		")"
	),
	"#accounts": React.createElement(
		"div",
		null,
		"Accounts (",
		React.createElement(
			"a",
			{ href: "#" },
			"Home"
		),
		")"
	),
	"*": React.createElement(
		"div",
		null,
		"Dashboard",
		React.createElement("br", null),
		React.createElement(
			"a",
			{ href: "#profile" },
			"Profile"
		),
		React.createElement("br", null),
		React.createElement(
			"a",
			{ href: "#accounts" },
			"Accounts"
		)
	)
};

ReactDOM.render(React.createElement(Router, { mapping: mapping }), document.getElementById("content"));

/***/ })

/******/ });