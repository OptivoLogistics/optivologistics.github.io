/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/background.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/background.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    position: relative;\n    background: var(--color-background);\n    color: var(--color-text);\n    font-family: var(--font-family);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 5px;\n\n    overflow-x: hidden;\n}\n\nbody > *:last-child{\n    margin-bottom: 100px;\n}\n\n.lines-accents{\n    position: absolute;\n    width: 4000px;\n    height: 460px;\n    top: -100px;\n    color: var(--color-theme-quiet);\n    opacity: .4;\n    z-index: -1;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/background.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,wBAAwB;IACxB,+BAA+B;;IAE/B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;;IAEjB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,WAAW;IACX,+BAA+B;IAC/B,WAAW;IACX,WAAW;AACf","sourcesContent":["body {\n    position: relative;\n    background: var(--color-background);\n    color: var(--color-text);\n    font-family: var(--font-family);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 5px;\n\n    overflow-x: hidden;\n}\n\nbody > *:last-child{\n    margin-bottom: 100px;\n}\n\n.lines-accents{\n    position: absolute;\n    width: 4000px;\n    height: 460px;\n    top: -100px;\n    color: var(--color-theme-quiet);\n    opacity: .4;\n    z-index: -1;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/button.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/button.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n    border: none;\n    font-family: inherit;\n    font-size: var(--font-size);\n    outline: none;\n    cursor: pointer;\n}\n\n.button-cta {\n    --color-hover: var(--color-text);\n    display: flex;\n    padding: 10px 40px;\n    box-shadow: var(--shadow-out);\n    border: 1px transparent solid;\n    background: var(--color-text);\n    color: var(--color-theme);\n\n    transition-property: background-color, color, border-color;\n    transition-timing-function: ease-in-out;\n    transition-duration: .1s;\n}\n\n.button-cta:hover{\n    background: none;\n    color: var(--color-hover);\n    border-color: var(--color-hover);\n}\n\n.button-cta:active{\n    --color-hover: var(--color-theme-quiet);\n}", "",{"version":3,"sources":["webpack://./src/css/button.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,oBAAoB;IACpB,2BAA2B;IAC3B,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,6BAA6B;IAC7B,6BAA6B;IAC7B,yBAAyB;;IAEzB,0DAA0D;IAC1D,uCAAuC;IACvC,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,gCAAgC;AACpC;;AAEA;IACI,uCAAuC;AAC3C","sourcesContent":["button {\n    border: none;\n    font-family: inherit;\n    font-size: var(--font-size);\n    outline: none;\n    cursor: pointer;\n}\n\n.button-cta {\n    --color-hover: var(--color-text);\n    display: flex;\n    padding: 10px 40px;\n    box-shadow: var(--shadow-out);\n    border: 1px transparent solid;\n    background: var(--color-text);\n    color: var(--color-theme);\n\n    transition-property: background-color, color, border-color;\n    transition-timing-function: ease-in-out;\n    transition-duration: .1s;\n}\n\n.button-cta:hover{\n    background: none;\n    color: var(--color-hover);\n    border-color: var(--color-hover);\n}\n\n.button-cta:active{\n    --color-hover: var(--color-theme-quiet);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/input.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/input.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input-field{\n    box-shadow: var(--shadow-in);\n    padding: 20px;\n    /*width: 100%;*/\n    width: var(--default-max-width);\n\n    display: flex;\n    align-items: center;\n}\n\ninput{\n    outline: none;\n    border: none;\n    font-family: inherit;\n    font-size: var(--font-size);\n}\n\ninput::placeholder{\n    font-style: italic;\n}", "",{"version":3,"sources":["webpack://./src/css/input.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,aAAa;IACb,eAAe;IACf,+BAA+B;;IAE/B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[".input-field{\n    box-shadow: var(--shadow-in);\n    padding: 20px;\n    /*width: 100%;*/\n    width: var(--default-max-width);\n\n    display: flex;\n    align-items: center;\n}\n\ninput{\n    outline: none;\n    border: none;\n    font-family: inherit;\n    font-size: var(--font-size);\n}\n\ninput::placeholder{\n    font-style: italic;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/structure.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/structure.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#page-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    height: 40px;\n    width: 100%;\n    max-width: var(--default-max-width);\n}\n\n.description{\n    max-width: var(--default-max-width);\n}\n\n.description > *:not(:first-child) {\n    margin-top: var(--default-section-margin);\n}\n\n.icon {\n    width: 30px;\n}\n\n#main-logo {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 200px;\n}\n\n#main-logo > .icon {\n    width: 100px;\n}\n\n#main-logo > p {\n    margin-top: 17px;\n\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 39px;\n    letter-spacing: .4em;\n\n}\n\n.title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title > hr {\n    margin: 20px 0 0 0;\n    width: calc(100% + 20px);\n    border: 1px solid var(--color-text);\n}\n\n.description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content > *:not(:first-child) {\n    margin-top: calc(var(--default-section-margin) / 2);\n}\n\n.content > .content-text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.content.--vertical > .content-text {\n    flex-direction: column;\n}\n\n.content.--vertical > .content-text > *:not(:first-child) {\n    margin-top: var(--default-section-margin);\n}\n\n.content:not(.--vertical) > .content-text > *:not(:first-child) {\n    margin-left: var(--default-section-margin);\n}\n\n.content-text > p {\n    max-width: 410px;\n}\n\n.content-text > p:first-child {\n    text-align: right;\n}\n\n.content.--vertical > .content-text > p {\n    text-align: center;\n}\n\n#main-in-circle {\n    position: relative;\n    --circle-accent-top: -200px;\n    margin-top: calc(200px - var(--circle-accent-top));\n}\n\n#circle-accent {\n    border-radius: 50%;\n    position: absolute;\n    width: 3000px;\n    height: 3000px;\n    left: calc(50% - 3000px / 2 + 1px);\n    top: var(--circle-accent-top);\n\n\n    z-index: -1;\n\n    border: 25px solid var(--color-text);\n    box-sizing: border-box;\n\n    background: none;\n}\n\n#get-to-know-us {\n    margin-top: 600px;\n}\n\n#page-footer{\n    margin: 100px 0 0 0;\n\n    position: relative;\n    width: calc(100% + 100px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    box-sizing: border-box;\n    border: 5px solid var(--color-text);\n}\n\n#footer-content{\n    padding: 20px 100px;\n\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n#footer-menu{\n    display: flex;\n}\n\n#footer-menu > .footer-menu-list{\n    display: flex;\n    flex-direction: column;\n}\n\n.footer-menu-list > *:not(:first-child){\n    margin-top: 6px;\n}", "",{"version":3,"sources":["webpack://./src/css/structure.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,YAAY;IACZ,WAAW;IACX,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;;IAEhB,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;;AAExB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,mDAAmD;AACvD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,kDAAkD;AACtD;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,kCAAkC;IAClC,6BAA6B;;;IAG7B,WAAW;;IAEX,oCAAoC;IACpC,sBAAsB;;IAEtB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;;IAEnB,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,mBAAmB;;IAEnB,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB","sourcesContent":["#page-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    height: 40px;\n    width: 100%;\n    max-width: var(--default-max-width);\n}\n\n.description{\n    max-width: var(--default-max-width);\n}\n\n.description > *:not(:first-child) {\n    margin-top: var(--default-section-margin);\n}\n\n.icon {\n    width: 30px;\n}\n\n#main-logo {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 200px;\n}\n\n#main-logo > .icon {\n    width: 100px;\n}\n\n#main-logo > p {\n    margin-top: 17px;\n\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 39px;\n    letter-spacing: .4em;\n\n}\n\n.title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title > hr {\n    margin: 20px 0 0 0;\n    width: calc(100% + 20px);\n    border: 1px solid var(--color-text);\n}\n\n.description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content > *:not(:first-child) {\n    margin-top: calc(var(--default-section-margin) / 2);\n}\n\n.content > .content-text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.content.--vertical > .content-text {\n    flex-direction: column;\n}\n\n.content.--vertical > .content-text > *:not(:first-child) {\n    margin-top: var(--default-section-margin);\n}\n\n.content:not(.--vertical) > .content-text > *:not(:first-child) {\n    margin-left: var(--default-section-margin);\n}\n\n.content-text > p {\n    max-width: 410px;\n}\n\n.content-text > p:first-child {\n    text-align: right;\n}\n\n.content.--vertical > .content-text > p {\n    text-align: center;\n}\n\n#main-in-circle {\n    position: relative;\n    --circle-accent-top: -200px;\n    margin-top: calc(200px - var(--circle-accent-top));\n}\n\n#circle-accent {\n    border-radius: 50%;\n    position: absolute;\n    width: 3000px;\n    height: 3000px;\n    left: calc(50% - 3000px / 2 + 1px);\n    top: var(--circle-accent-top);\n\n\n    z-index: -1;\n\n    border: 25px solid var(--color-text);\n    box-sizing: border-box;\n\n    background: none;\n}\n\n#get-to-know-us {\n    margin-top: 600px;\n}\n\n#page-footer{\n    margin: 100px 0 0 0;\n\n    position: relative;\n    width: calc(100% + 100px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    box-sizing: border-box;\n    border: 5px solid var(--color-text);\n}\n\n#footer-content{\n    padding: 20px 100px;\n\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n#footer-menu{\n    display: flex;\n}\n\n#footer-menu > .footer-menu-list{\n    display: flex;\n    flex-direction: column;\n}\n\n.footer-menu-list > *:not(:first-child){\n    margin-top: 6px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/text.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/text.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h4 {\n    color: var(--color-theme-quiet);\n    font-size: var(--font-size-medium);\n    text-transform: uppercase;\n    margin: 0;\n}\n\nh3 {\n    font-size: var(--font-size-big);\n    margin: 0;\n}\n\na {\n    color: var(--color-text);\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/css/text.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,kCAAkC;IAClC,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;AACrB","sourcesContent":["h4 {\n    color: var(--color-theme-quiet);\n    font-size: var(--font-size-medium);\n    text-transform: uppercase;\n    margin: 0;\n}\n\nh3 {\n    font-size: var(--font-size-big);\n    margin: 0;\n}\n\na {\n    color: var(--color-text);\n    font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/vars.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/vars.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --font-family: \"Lato\", sans-serif;\n    --font-size: 18px;\n    --font-size-medium: 24px;\n    --font-size-big: 32px;\n    --letter-spacing: 0;\n\n    --color-text: white;\n    --color-theme: #01091E;\n    --color-background: linear-gradient(323.79deg, rgba(255, 255, 255, 0) 21.13%, rgba(255, 255, 255, 0.06) 49.1%, rgba(255, 255, 255, 0) 78.87%),\n    var(--color-theme);\n    --color-theme-quiet: #3E5B88;\n\n    --default-section-margin: 100px;\n    --shadow-out: 1px 3px 4px rgba(0, 0, 0, 0.25);\n\n    --shadow-in: inset var(--shadow-out);\n\n    --default-max-width: 900px;\n}", "",{"version":3,"sources":["webpack://./src/css/vars.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,wBAAwB;IACxB,qBAAqB;IACrB,mBAAmB;;IAEnB,mBAAmB;IACnB,sBAAsB;IACtB;sBACkB;IAClB,4BAA4B;;IAE5B,+BAA+B;IAC/B,6CAA6C;;IAE7C,oCAAoC;;IAEpC,0BAA0B;AAC9B","sourcesContent":[":root {\n    --font-family: \"Lato\", sans-serif;\n    --font-size: 18px;\n    --font-size-medium: 24px;\n    --font-size-big: 32px;\n    --letter-spacing: 0;\n\n    --color-text: white;\n    --color-theme: #01091E;\n    --color-background: linear-gradient(323.79deg, rgba(255, 255, 255, 0) 21.13%, rgba(255, 255, 255, 0.06) 49.1%, rgba(255, 255, 255, 0) 78.87%),\n    var(--color-theme);\n    --color-theme-quiet: #3E5B88;\n\n    --default-section-margin: 100px;\n    --shadow-out: 1px 3px 4px rgba(0, 0, 0, 0.25);\n\n    --shadow-in: inset var(--shadow-out);\n\n    --default-max-width: 900px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/css/background.css":
/*!********************************!*\
  !*** ./src/css/background.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./background.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/background.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/button.css":
/*!****************************!*\
  !*** ./src/css/button.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/button.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/input.css":
/*!***************************!*\
  !*** ./src/css/input.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./input.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/input.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/structure.css":
/*!*******************************!*\
  !*** ./src/css/structure.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_structure_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./structure.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/structure.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_structure_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_structure_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/text.css":
/*!**************************!*\
  !*** ./src/css/text.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./text.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/text.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/vars.css":
/*!**************************!*\
  !*** ./src/css/vars.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vars_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./vars.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/vars.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_vars_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_vars_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ts/initUI.ts":
/*!**************************!*\
  !*** ./src/ts/initUI.ts ***!
  \**************************/
/***/ (() => {

console.log('init');


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_vars_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/vars.css */ "./src/css/vars.css");
/* harmony import */ var _css_text_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/text.css */ "./src/css/text.css");
/* harmony import */ var _css_background_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/background.css */ "./src/css/background.css");
/* harmony import */ var _css_structure_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/structure.css */ "./src/css/structure.css");
/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/button.css */ "./src/css/button.css");
/* harmony import */ var _css_input_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/input.css */ "./src/css/input.css");
/* harmony import */ var _ts_initUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ts/initUI */ "./src/ts/initUI.ts");
/* harmony import */ var _ts_initUI__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ts_initUI__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Load all the required resources
 */









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL2JhY2tncm91bmQuY3NzIiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3MvYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL2lucHV0LmNzcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3N0cnVjdHVyZS5jc3MiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL2Nzcy90ZXh0LmNzcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3ZhcnMuY3NzIiwid2VicGFjazovL29wdGl2by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL2Nzcy9iYWNrZ3JvdW5kLmNzcz85OTcyIiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3MvYnV0dG9uLmNzcz83MmE5Iiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3MvaW5wdXQuY3NzPzE0M2UiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL2Nzcy9zdHJ1Y3R1cmUuY3NzP2NjNjIiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL2Nzcy90ZXh0LmNzcz9kNzA5Iiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3MvdmFycy5jc3M/ZWM3MyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL3RzL2luaXRVSS50cyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3B0aXZvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wdGl2by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vcHRpdm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29wdGl2by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29wdGl2by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29wdGl2by93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGdEQUFnRCx5QkFBeUIsMENBQTBDLCtCQUErQixzQ0FBc0Msc0JBQXNCLDZCQUE2QiwwQkFBMEIsd0JBQXdCLDJCQUEyQixHQUFHLHdCQUF3QiwyQkFBMkIsR0FBRyxtQkFBbUIseUJBQXlCLG9CQUFvQixvQkFBb0Isa0JBQWtCLHNDQUFzQyxrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyx5RkFBeUYsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsK0JBQStCLHlCQUF5QiwwQ0FBMEMsK0JBQStCLHNDQUFzQyxzQkFBc0IsNkJBQTZCLDBCQUEwQix3QkFBd0IsMkJBQTJCLEdBQUcsd0JBQXdCLDJCQUEyQixHQUFHLG1CQUFtQix5QkFBeUIsb0JBQW9CLG9CQUFvQixrQkFBa0Isc0NBQXNDLGtCQUFrQixrQkFBa0IsR0FBRyx1QkFBdUI7QUFDcjVDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFD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QSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5ID4gKjpsYXN0LWNoaWxke1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLmxpbmVzLWFjY2VudHN7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQwMDBweDtcXG4gICAgaGVpZ2h0OiA0NjBweDtcXG4gICAgdG9wOiAtMTAwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aGVtZS1xdWlldCk7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9iYWNrZ3JvdW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLCtCQUErQjs7SUFFL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxuXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSA+ICo6bGFzdC1jaGlsZHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5saW5lcy1hY2NlbnRze1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA0MDAwcHg7XFxuICAgIGhlaWdodDogNDYwcHg7XFxuICAgIHRvcDogLTEwMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhlbWUtcXVpZXQpO1xcbiAgICBvcGFjaXR5OiAuNDtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uLWN0YSB7XFxuICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1vdXQpO1xcbiAgICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGV4dCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aGVtZSk7XFxuXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCBib3JkZXItY29sb3I7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzO1xcbn1cXG5cXG4uYnV0dG9uLWN0YTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5idXR0b24tY3RhOmFjdGl2ZXtcXG4gICAgLS1jb2xvci1ob3ZlcjogdmFyKC0tY29sb3ItdGhlbWUtcXVpZXQpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLHlCQUF5Qjs7SUFFekIsMERBQTBEO0lBQzFELHVDQUF1QztJQUN2Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1jdGEge1xcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctb3V0KTtcXG4gICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhlbWUpO1xcblxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgYm9yZGVyLWNvbG9yO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcXG59XFxuXFxuLmJ1dHRvbi1jdGE6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlcik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uLWN0YTphY3RpdmV7XFxuICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yLXRoZW1lLXF1aWV0KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmlucHV0LWZpZWxke1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctaW4pO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAvKndpZHRoOiAxMDAlOyovXFxuICAgIHdpZHRoOiB2YXIoLS1kZWZhdWx0LW1heC13aWR0aCk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0e1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2lucHV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsZUFBZTtJQUNmLCtCQUErQjs7SUFFL0IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5wdXQtZmllbGR7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1pbik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIC8qd2lkdGg6IDEwMCU7Ki9cXG4gICAgd2lkdGg6IHZhcigtLWRlZmF1bHQtbWF4LXdpZHRoKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXR7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNwYWdlLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1kZWZhdWx0LW1heC13aWR0aCk7XFxufVxcblxcbi5kZXNjcmlwdGlvbntcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1kZWZhdWx0LW1heC13aWR0aCk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI21haW4tbG9nbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxufVxcblxcbiNtYWluLWxvZ28gPiAuaWNvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuI21haW4tbG9nbyA+IHAge1xcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xcblxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzOXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjRlbTtcXG5cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlID4gaHIge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGV4dCk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKSAvIDIpO1xcbn1cXG5cXG4uY29udGVudCA+IC5jb250ZW50LXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQuLS12ZXJ0aWNhbCA+IC5jb250ZW50LXRleHQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGVudC4tLXZlcnRpY2FsID4gLmNvbnRlbnQtdGV4dCA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxuLmNvbnRlbnQ6bm90KC4tLXZlcnRpY2FsKSA+IC5jb250ZW50LXRleHQgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWRlZmF1bHQtc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4uY29udGVudC10ZXh0ID4gcCB7XFxuICAgIG1heC13aWR0aDogNDEwcHg7XFxufVxcblxcbi5jb250ZW50LXRleHQgPiBwOmZpcnN0LWNoaWxkIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jb250ZW50Li0tdmVydGljYWwgPiAuY29udGVudC10ZXh0ID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21haW4taW4tY2lyY2xlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAtLWNpcmNsZS1hY2NlbnQtdG9wOiAtMjAwcHg7XFxuICAgIG1hcmdpbi10b3A6IGNhbGMoMjAwcHggLSB2YXIoLS1jaXJjbGUtYWNjZW50LXRvcCkpO1xcbn1cXG5cXG4jY2lyY2xlLWFjY2VudCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzAwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMDBweDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAzMDAwcHggLyAyICsgMXB4KTtcXG4gICAgdG9wOiB2YXIoLS1jaXJjbGUtYWNjZW50LXRvcCk7XFxuXFxuXFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICBib3JkZXI6IDI1cHggc29saWQgdmFyKC0tY29sb3ItdGV4dCk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbiNnZXQtdG8ta25vdy11cyB7XFxuICAgIG1hcmdpbi10b3A6IDYwMHB4O1xcbn1cXG5cXG4jcGFnZS1mb290ZXJ7XFxuICAgIG1hcmdpbjogMTAwcHggMCAwIDA7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDEwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4jZm9vdGVyLWNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDIwcHggMTAwcHg7XFxuXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZm9vdGVyLW1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNmb290ZXItbWVudSA+IC5mb290ZXItbWVudS1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9vdGVyLW1lbnUtbGlzdCA+ICo6bm90KDpmaXJzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHJ1Y3R1cmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCOztJQUVoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLGtDQUFrQztJQUNsQyw2QkFBNkI7OztJQUc3QixXQUFXOztJQUVYLG9DQUFvQztJQUNwQyxzQkFBc0I7O0lBRXRCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1CQUFtQjs7SUFFbkIsY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGFnZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogdmFyKC0tZGVmYXVsdC1tYXgtd2lkdGgpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb257XFxuICAgIG1heC13aWR0aDogdmFyKC0tZGVmYXVsdC1tYXgtd2lkdGgpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNtYWluLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbn1cXG5cXG4jbWFpbi1sb2dvID4gLmljb24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbiNtYWluLWxvZ28gPiBwIHtcXG4gICAgbWFyZ2luLXRvcDogMTdweDtcXG5cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMzlweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC40ZW07XFxuXFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSA+IGhyIHtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50ID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbikgLyAyKTtcXG59XFxuXFxuLmNvbnRlbnQgPiAuY29udGVudC10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50Li0tdmVydGljYWwgPiAuY29udGVudC10ZXh0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQuLS12ZXJ0aWNhbCA+IC5jb250ZW50LXRleHQgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbi5jb250ZW50Om5vdCguLS12ZXJ0aWNhbCkgPiAuY29udGVudC10ZXh0ID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxuLmNvbnRlbnQtdGV4dCA+IHAge1xcbiAgICBtYXgtd2lkdGg6IDQxMHB4O1xcbn1cXG5cXG4uY29udGVudC10ZXh0ID4gcDpmaXJzdC1jaGlsZCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudC4tLXZlcnRpY2FsID4gLmNvbnRlbnQtdGV4dCA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLWluLWNpcmNsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLS1jaXJjbGUtYWNjZW50LXRvcDogLTIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDIwMHB4IC0gdmFyKC0tY2lyY2xlLWFjY2VudC10b3ApKTtcXG59XFxuXFxuI2NpcmNsZS1hY2NlbnQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwMDBweDtcXG4gICAgaGVpZ2h0OiAzMDAwcHg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzAwMHB4IC8gMiArIDFweCk7XFxuICAgIHRvcDogdmFyKC0tY2lyY2xlLWFjY2VudC10b3ApO1xcblxcblxcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgYm9yZGVyOiAyNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4jZ2V0LXRvLWtub3ctdXMge1xcbiAgICBtYXJnaW4tdG9wOiA2MDBweDtcXG59XFxuXFxuI3BhZ2UtZm9vdGVye1xcbiAgICBtYXJnaW46IDEwMHB4IDAgMCAwO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci10ZXh0KTtcXG59XFxuXFxuI2Zvb3Rlci1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwMHB4O1xcblxcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvb3Rlci1tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jZm9vdGVyLW1lbnUgPiAuZm9vdGVyLW1lbnUtbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvb3Rlci1tZW51LWxpc3QgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImg0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lLXF1aWV0KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJpZyk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGV4dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoNCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aGVtZS1xdWlldCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1lZGl1bSk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iaWcpO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1mb250LXNpemU6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLW1lZGl1bTogMjRweDtcXG4gICAgLS1mb250LXNpemUtYmlnOiAzMnB4O1xcbiAgICAtLWxldHRlci1zcGFjaW5nOiAwO1xcblxcbiAgICAtLWNvbG9yLXRleHQ6IHdoaXRlO1xcbiAgICAtLWNvbG9yLXRoZW1lOiAjMDEwOTFFO1xcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMjMuNzlkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjEuMTMlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpIDQ5LjElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDc4Ljg3JSksXFxuICAgIHZhcigtLWNvbG9yLXRoZW1lKTtcXG4gICAgLS1jb2xvci10aGVtZS1xdWlldDogIzNFNUI4ODtcXG5cXG4gICAgLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luOiAxMDBweDtcXG4gICAgLS1zaGFkb3ctb3V0OiAxcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcbiAgICAtLXNoYWRvdy1pbjogaW5zZXQgdmFyKC0tc2hhZG93LW91dCk7XFxuXFxuICAgIC0tZGVmYXVsdC1tYXgtd2lkdGg6IDkwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3ZhcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QjtzQkFDa0I7SUFDbEIsNEJBQTRCOztJQUU1QiwrQkFBK0I7SUFDL0IsNkNBQTZDOztJQUU3QyxvQ0FBb0M7O0lBRXBDLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1mb250LXNpemU6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLW1lZGl1bTogMjRweDtcXG4gICAgLS1mb250LXNpemUtYmlnOiAzMnB4O1xcbiAgICAtLWxldHRlci1zcGFjaW5nOiAwO1xcblxcbiAgICAtLWNvbG9yLXRleHQ6IHdoaXRlO1xcbiAgICAtLWNvbG9yLXRoZW1lOiAjMDEwOTFFO1xcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMjMuNzlkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjEuMTMlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpIDQ5LjElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDc4Ljg3JSksXFxuICAgIHZhcigtLWNvbG9yLXRoZW1lKTtcXG4gICAgLS1jb2xvci10aGVtZS1xdWlldDogIzNFNUI4ODtcXG5cXG4gICAgLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luOiAxMDBweDtcXG4gICAgLS1zaGFkb3ctb3V0OiAxcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcbiAgICAtLXNoYWRvdy1pbjogaW5zZXQgdmFyKC0tc2hhZG93LW91dCk7XFxuXFxuICAgIC0tZGVmYXVsdC1tYXgtd2lkdGg6IDkwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFja2dyb3VuZC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RydWN0dXJlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGV4dC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zb2xlLmxvZygnaW5pdCcpO1xuIiwiLyoqXG4gKiBMb2FkIGFsbCB0aGUgcmVxdWlyZWQgcmVzb3VyY2VzXG4gKi9cblxuaW1wb3J0ICcuL2Nzcy92YXJzLmNzcydcbmltcG9ydCAnLi9jc3MvdGV4dC5jc3MnXG5pbXBvcnQgJy4vY3NzL2JhY2tncm91bmQuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9zdHJ1Y3R1cmUuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9idXR0b24uY3NzJ1xuaW1wb3J0ICcuL2Nzcy9pbnB1dC5jc3MnXG5pbXBvcnQgJy4vdHMvaW5pdFVJJyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=