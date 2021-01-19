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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    position: relative;\n    background: var(--color-background);\n    color: var(--color-text);\n    font-family: var(--font-family);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 5px 0 5px;\n    margin: 0;\n\n    overflow-x: hidden;\n}\n\nbody > *:last-child {\n    margin-bottom: 100px;\n}\n\n.lines-accents {\n    position: absolute;\n    width: 4000px;\n    height: 460px;\n    top: -100px;\n    color: var(--color-theme-quiet);\n    opacity: .4;\n    z-index: -1;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/background.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,wBAAwB;IACxB,+BAA+B;;IAE/B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;IAET,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,WAAW;IACX,+BAA+B;IAC/B,WAAW;IACX,WAAW;AACf","sourcesContent":["body {\n    position: relative;\n    background: var(--color-background);\n    color: var(--color-text);\n    font-family: var(--font-family);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 5px 0 5px;\n    margin: 0;\n\n    overflow-x: hidden;\n}\n\nbody > *:last-child {\n    margin-bottom: 100px;\n}\n\n.lines-accents {\n    position: absolute;\n    width: 4000px;\n    height: 460px;\n    top: -100px;\n    color: var(--color-theme-quiet);\n    opacity: .4;\n    z-index: -1;\n}\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".input-field{\n    box-shadow: var(--shadow-in);\n    padding: 20px;\n    width: calc(100vw - 200px);\n    max-width: var(--default-max-width);\n\n    display: flex;\n    align-items: center;\n}\n\n.input-field-label{\n    font-style: italic;\n}\n\ninput{\n    outline: none;\n    border: none;\n    font-family: inherit;\n    font-size: var(--font-size);\n}\n\ninput::placeholder{\n    font-style: italic;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/input.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,aAAa;IACb,0BAA0B;IAC1B,mCAAmC;;IAEnC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[".input-field{\n    box-shadow: var(--shadow-in);\n    padding: 20px;\n    width: calc(100vw - 200px);\n    max-width: var(--default-max-width);\n\n    display: flex;\n    align-items: center;\n}\n\n.input-field-label{\n    font-style: italic;\n}\n\ninput{\n    outline: none;\n    border: none;\n    font-family: inherit;\n    font-size: var(--font-size);\n}\n\ninput::placeholder{\n    font-style: italic;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popup.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "#contact-popup {\n    visibility: hidden;\n    opacity: 0;\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.4);\n    color: var(--color-text);\n\n    transition: opacity 0.2s ease, visibility 0.2s ease;\n    z-index: 1;\n}\n\n#contact-popup.toggled {\n    visibility: visible;\n    opacity: 1;\n}\n\n.popup-content {\n    display: flex;\n\n    flex-direction: column;\n\n    background-color: var(--color-theme);\n    padding: 30px;\n\n    box-shadow: var(--shadow-out);\n}\n", "",{"version":3,"sources":["webpack://./src/css/popup.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,0CAA0C;IAC1C,wBAAwB;;IAExB,mDAAmD;IACnD,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;;IAEb,sBAAsB;;IAEtB,oCAAoC;IACpC,aAAa;;IAEb,6BAA6B;AACjC","sourcesContent":["#contact-popup {\n    visibility: hidden;\n    opacity: 0;\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.4);\n    color: var(--color-text);\n\n    transition: opacity 0.2s ease, visibility 0.2s ease;\n    z-index: 1;\n}\n\n#contact-popup.toggled {\n    visibility: visible;\n    opacity: 1;\n}\n\n.popup-content {\n    display: flex;\n\n    flex-direction: column;\n\n    background-color: var(--color-theme);\n    padding: 30px;\n\n    box-shadow: var(--shadow-out);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 1100px) {\n    .container{\n        flex-direction: column;\n        --container-margin: var(--default-section-margin) 0 0 0 !important;\n    }\n\n    .content-text {\n        flex-direction: column;\n        --element-margin: var(--default-section-margin) 0 0 0 !important;\n    }\n\n    .content-text > p {\n        text-align: center !important;\n    }\n\n    #secondary{\n        margin-top: 100px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/responsive.css"],"names":[],"mappings":"AAAA;IACI;QACI,sBAAsB;QACtB,kEAAkE;IACtE;;IAEA;QACI,sBAAsB;QACtB,gEAAgE;IACpE;;IAEA;QACI,6BAA6B;IACjC;;IAEA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["@media (max-width: 1100px) {\n    .container{\n        flex-direction: column;\n        --container-margin: var(--default-section-margin) 0 0 0 !important;\n    }\n\n    .content-text {\n        flex-direction: column;\n        --element-margin: var(--default-section-margin) 0 0 0 !important;\n    }\n\n    .content-text > p {\n        text-align: center !important;\n    }\n\n    #secondary{\n        margin-top: 100px;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#page-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    height: 40px;\n    width: 100%;\n    max-width: var(--default-max-width);\n}\n\n.description {\n    max-width: var(--default-max-width);\n}\n\n.description > *:not(:first-child) {\n    margin-top: var(--default-section-margin);\n}\n\n.container {\n    display: flex;\n    --container-margin: 0 0 0 var(--default-section-margin);\n}\n\n.container.--vertical{\n    flex-direction: column;\n    --container-margin: var(--default-section-margin) 0 0 0;\n}\n\n.container > *:not(:first-child) {\n    margin: var(--container-margin);\n}\n\n.icon {\n    width: 30px;\n}\n\n#main-logo {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 200px;\n}\n\n#main-logo > .icon {\n    width: 100px;\n}\n\n.title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title > hr {\n    margin: 20px 0 0 0;\n    width: calc(100% + 20px);\n    border: 1px solid var(--color-text);\n}\n\n.description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content > *:not(:first-child) {\n    margin-top: calc(var(--default-section-margin) / 2);\n}\n\n.content > .content-text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    --element-margin: 0 0 0 var(--default-section-margin);\n}\n\n.content.--vertical > .content-text {\n    flex-direction: column;\n    --element-margin: var(--default-section-margin) 0 0 0;\n}\n\n.content > .content-text > *:not(:first-child) {\n    margin: var(--element-margin);\n}\n\n.content-text > p {\n    max-width: 410px;\n}\n\n.content-text > p:first-child {\n    text-align: right;\n}\n\n.content.--vertical > .content-text > p {\n    text-align: center;\n}\n\n#main-in-circle {\n    position: relative;\n    --circle-accent-top: -100px;\n    margin-top: calc(200px - var(--circle-accent-top));\n    --circle-accent-fill: none;\n\n    color: var(--color-text);\n}\n\n#circle-accent {\n    border-radius: 50%;\n    position: absolute;\n    width: 3000px;\n    height: 3000px;\n    left: calc(50% - 3000px / 2 + 1px);\n    top: var(--circle-accent-top);\n\n    background-color: var(--circle-accent-fill);\n\n    z-index: -1;\n\n    border: 25px solid var(--color-text);\n    box-sizing: border-box;\n}\n\n#secondary {\n    margin: 600px 0 300px 0;\n}\n\n#secondary .--horizontal > *:not(:first-child) {\n    margin-left: 50px;\n}\n\n#page-footer {\n    position: absolute;\n    bottom: 0;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 5px solid var(--color-text);\n\n    overflow: hidden;\n}\n\n#footer-logo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#footer-logo *:not(:first-child) {\n    margin-top: 10px;\n}\n\n#footer-content {\n    padding: 30px 150px;\n\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n#footer-menu {\n    display: flex;\n}\n\n#footer-menu > *:not(:first-child){\n    margin-left: 60px;\n}\n\n#footer-menu > .footer-menu-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.footer-menu-list > *:not(:first-child) {\n    margin-top: 6px;\n}\n\n.hoverable{\n    transition-property: box-shadow, transform;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n}\n\n.hoverable:hover{\n    box-shadow: var(--shadow-out);\n    transform: scale(1.05);\n}", "",{"version":3,"sources":["webpack://./src/css/structure.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,YAAY;IACZ,WAAW;IACX,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,uDAAuD;AAC3D;;AAEA;IACI,sBAAsB;IACtB,uDAAuD;AAC3D;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,mDAAmD;AACvD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,qDAAqD;AACzD;;AAEA;IACI,sBAAsB;IACtB,qDAAqD;AACzD;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,kDAAkD;IAClD,0BAA0B;;IAE1B,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,kCAAkC;IAClC,6BAA6B;;IAE7B,2CAA2C;;IAE3C,WAAW;;IAEX,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;;IAEnC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;;IAEnB,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0CAA0C;IAC1C,yBAAyB;IACzB,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;IAC7B,sBAAsB;AAC1B","sourcesContent":["#page-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    height: 40px;\n    width: 100%;\n    max-width: var(--default-max-width);\n}\n\n.description {\n    max-width: var(--default-max-width);\n}\n\n.description > *:not(:first-child) {\n    margin-top: var(--default-section-margin);\n}\n\n.container {\n    display: flex;\n    --container-margin: 0 0 0 var(--default-section-margin);\n}\n\n.container.--vertical{\n    flex-direction: column;\n    --container-margin: var(--default-section-margin) 0 0 0;\n}\n\n.container > *:not(:first-child) {\n    margin: var(--container-margin);\n}\n\n.icon {\n    width: 30px;\n}\n\n#main-logo {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 200px;\n}\n\n#main-logo > .icon {\n    width: 100px;\n}\n\n.title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title > hr {\n    margin: 20px 0 0 0;\n    width: calc(100% + 20px);\n    border: 1px solid var(--color-text);\n}\n\n.description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content > *:not(:first-child) {\n    margin-top: calc(var(--default-section-margin) / 2);\n}\n\n.content > .content-text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    --element-margin: 0 0 0 var(--default-section-margin);\n}\n\n.content.--vertical > .content-text {\n    flex-direction: column;\n    --element-margin: var(--default-section-margin) 0 0 0;\n}\n\n.content > .content-text > *:not(:first-child) {\n    margin: var(--element-margin);\n}\n\n.content-text > p {\n    max-width: 410px;\n}\n\n.content-text > p:first-child {\n    text-align: right;\n}\n\n.content.--vertical > .content-text > p {\n    text-align: center;\n}\n\n#main-in-circle {\n    position: relative;\n    --circle-accent-top: -100px;\n    margin-top: calc(200px - var(--circle-accent-top));\n    --circle-accent-fill: none;\n\n    color: var(--color-text);\n}\n\n#circle-accent {\n    border-radius: 50%;\n    position: absolute;\n    width: 3000px;\n    height: 3000px;\n    left: calc(50% - 3000px / 2 + 1px);\n    top: var(--circle-accent-top);\n\n    background-color: var(--circle-accent-fill);\n\n    z-index: -1;\n\n    border: 25px solid var(--color-text);\n    box-sizing: border-box;\n}\n\n#secondary {\n    margin: 600px 0 300px 0;\n}\n\n#secondary .--horizontal > *:not(:first-child) {\n    margin-left: 50px;\n}\n\n#page-footer {\n    position: absolute;\n    bottom: 0;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 5px solid var(--color-text);\n\n    overflow: hidden;\n}\n\n#footer-logo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#footer-logo *:not(:first-child) {\n    margin-top: 10px;\n}\n\n#footer-content {\n    padding: 30px 150px;\n\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n#footer-menu {\n    display: flex;\n}\n\n#footer-menu > *:not(:first-child){\n    margin-left: 60px;\n}\n\n#footer-menu > .footer-menu-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.footer-menu-list > *:not(:first-child) {\n    margin-top: 6px;\n}\n\n.hoverable{\n    transition-property: box-shadow, transform;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n}\n\n.hoverable:hover{\n    box-shadow: var(--shadow-out);\n    transform: scale(1.05);\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "h3 {\n    color: inherit;\n    font-size: var(--font-size-big);\n    margin: 0;\n}\n\nh4 {\n    color: var(--color-theme-quiet);\n    font-size: var(--font-size-medium);\n    text-transform: uppercase;\n    margin: 0;\n}\n\nh5 {\n    margin: 0;\n    font-size: var(--font-size-medium);\n}\n\na {\n    color: inherit;\n    font-weight: bold;\n}\n\np {\n    color: inherit;\n}\n\n.logo-title {\n    --letter-spacing: .4em;\n\n    margin-top: 17px;\n\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 39px;\n    letter-spacing: var(--letter-spacing);\n    margin-right: calc(-1 * var(--letter-spacing));\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/css/text.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,+BAA+B;IAC/B,kCAAkC;IAClC,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,SAAS;IACT,kCAAkC;AACtC;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,sBAAsB;;IAEtB,gBAAgB;;IAEhB,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,qCAAqC;IACrC,8CAA8C;IAC9C,kBAAkB;AACtB","sourcesContent":["h3 {\n    color: inherit;\n    font-size: var(--font-size-big);\n    margin: 0;\n}\n\nh4 {\n    color: var(--color-theme-quiet);\n    font-size: var(--font-size-medium);\n    text-transform: uppercase;\n    margin: 0;\n}\n\nh5 {\n    margin: 0;\n    font-size: var(--font-size-medium);\n}\n\na {\n    color: inherit;\n    font-weight: bold;\n}\n\np {\n    color: inherit;\n}\n\n.logo-title {\n    --letter-spacing: .4em;\n\n    margin-top: 17px;\n\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 39px;\n    letter-spacing: var(--letter-spacing);\n    margin-right: calc(-1 * var(--letter-spacing));\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/popup.css":
/*!***************************!*\
  !*** ./src/css/popup.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/responsive.css":
/*!********************************!*\
  !*** ./src/css/responsive.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

const buttons = document.getElementsByClassName('start-free-trial');
const popup = document.getElementById('contact-popup');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        popup.classList.add('toggled');
    });
}
popup.addEventListener('click', event => {
    // @ts-ignore
    const target = event.target;
    const close = target.closest('.popup-content');
    if (!close) {
        popup.classList.remove('toggled');
    }
});


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
/* harmony import */ var _css_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/responsive.css */ "./src/css/responsive.css");
/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/popup.css */ "./src/css/popup.css");
/* harmony import */ var _ts_initUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts/initUI */ "./src/ts/initUI.ts");
/* harmony import */ var _ts_initUI__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ts_initUI__WEBPACK_IMPORTED_MODULE_8__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL2JhY2tncm91bmQuY3NzIiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3MvYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL2lucHV0LmNzcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3Jlc3BvbnNpdmUuY3NzIiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3Mvc3RydWN0dXJlLmNzcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3RleHQuY3NzIiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3MvdmFycy5jc3MiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL2JhY2tncm91bmQuY3NzPzk5NzIiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL2Nzcy9idXR0b24uY3NzPzcyYTkiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL2Nzcy9pbnB1dC5jc3M/MTQzZSIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3BvcHVwLmNzcz8wMjczIiwid2VicGFjazovL29wdGl2by8uL3NyYy9jc3MvcmVzcG9uc2l2ZS5jc3M/MGJiNSIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3N0cnVjdHVyZS5jc3M/Y2M2MiIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvY3NzL3RleHQuY3NzP2Q3MDkiLCJ3ZWJwYWNrOi8vb3B0aXZvLy4vc3JjL2Nzcy92YXJzLmNzcz9lYzczIiwid2VicGFjazovL29wdGl2by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vcHRpdm8vLi9zcmMvdHMvaW5pdFVJLnRzIiwid2VicGFjazovL29wdGl2by8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcHRpdm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3B0aXZvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29wdGl2by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3B0aXZvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3B0aXZvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3B0aXZvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHlCQUF5QiwwQ0FBMEMsK0JBQStCLHNDQUFzQyxzQkFBc0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLDJCQUEyQixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxvQkFBb0IseUJBQXlCLG9CQUFvQixvQkFBb0Isa0JBQWtCLHNDQUFzQyxrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyx5RkFBeUYsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSwrQkFBK0IseUJBQXlCLDBDQUEwQywrQkFBK0Isc0NBQXNDLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixnQkFBZ0IsMkJBQTJCLEdBQUcs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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUNBOztBQUV1QjtBQUNBO0FBQ007QUFDRDtBQUNIO0FBQ0Q7QUFDSztBQUNMOzs7Ozs7O1VDWHhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweCA1cHggMCA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5ID4gKjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5saW5lcy1hY2NlbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNDAwMHB4O1xcbiAgICBoZWlnaHQ6IDQ2MHB4O1xcbiAgICB0b3A6IC0xMDBweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lLXF1aWV0KTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2JhY2tncm91bmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsK0JBQStCOztJQUUvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweCA1cHggMCA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5ID4gKjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5saW5lcy1hY2NlbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNDAwMHB4O1xcbiAgICBoZWlnaHQ6IDQ2MHB4O1xcbiAgICB0b3A6IC0xMDBweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lLXF1aWV0KTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1jdGEge1xcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctb3V0KTtcXG4gICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhlbWUpO1xcblxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgYm9yZGVyLWNvbG9yO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcXG59XFxuXFxuLmJ1dHRvbi1jdGE6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlcik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uLWN0YTphY3RpdmV7XFxuICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yLXRoZW1lLXF1aWV0KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qix5QkFBeUI7O0lBRXpCLDBEQUEwRDtJQUMxRCx1Q0FBdUM7SUFDdkMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24tY3RhIHtcXG4gICAgLS1jb2xvci1ob3ZlcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW91dCk7XFxuICAgIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lKTtcXG5cXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIGJvcmRlci1jb2xvcjtcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMXM7XFxufVxcblxcbi5idXR0b24tY3RhOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaG92ZXIpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJ1dHRvbi1jdGE6YWN0aXZle1xcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1jb2xvci10aGVtZS1xdWlldCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC1maWVsZHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWluKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XFxuICAgIG1heC13aWR0aDogdmFyKC0tZGVmYXVsdC1tYXgtd2lkdGgpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQtbGFiZWx7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuaW5wdXR7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5wdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUNBQW1DOztJQUVuQyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbnB1dC1maWVsZHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWluKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XFxuICAgIG1heC13aWR0aDogdmFyKC0tZGVmYXVsdC1tYXgtd2lkdGgpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQtbGFiZWx7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuaW5wdXR7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250YWN0LXBvcHVwIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZSwgdmlzaWJpbGl0eSAwLjJzIGVhc2U7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNjb250YWN0LXBvcHVwLnRvZ2dsZWQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdXAtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG5cXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW91dCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULDBDQUEwQztJQUMxQyx3QkFBd0I7O0lBRXhCLG1EQUFtRDtJQUNuRCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixzQkFBc0I7O0lBRXRCLG9DQUFvQztJQUNwQyxhQUFhOztJQUViLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGFjdC1wb3B1cCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIHZpc2liaWxpdHkgMC4ycyBlYXNlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jY29udGFjdC1wb3B1cC50b2dnbGVkIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvcHVwLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aGVtZSk7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1vdXQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLS1jb250YWluZXItbWFyZ2luOiB2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKSAwIDAgMCAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LXRleHQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC0tZWxlbWVudC1tYXJnaW46IHZhcigtLWRlZmF1bHQtc2VjdGlvbi1tYXJnaW4pIDAgMCAwICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtdGV4dCA+IHAge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgI3NlY29uZGFyeXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzcG9uc2l2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixrRUFBa0U7SUFDdEU7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsZ0VBQWdFO0lBQ3BFOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC0tY29udGFpbmVyLW1hcmdpbjogdmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbikgMCAwIDAgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC10ZXh0IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAtLWVsZW1lbnQtbWFyZ2luOiB2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKSAwIDAgMCAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LXRleHQgPiBwIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgICNzZWNvbmRhcnl7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcGFnZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogdmFyKC0tZGVmYXVsdC1tYXgtd2lkdGgpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLWRlZmF1bHQtbWF4LXdpZHRoKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi10b3A6IHZhcigtLWRlZmF1bHQtc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLS1jb250YWluZXItbWFyZ2luOiAwIDAgMCB2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxuLmNvbnRhaW5lci4tLXZlcnRpY2Fse1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAtLWNvbnRhaW5lci1tYXJnaW46IHZhcigtLWRlZmF1bHQtc2VjdGlvbi1tYXJnaW4pIDAgMCAwO1xcbn1cXG5cXG4uY29udGFpbmVyID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbjogdmFyKC0tY29udGFpbmVyLW1hcmdpbik7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNtYWluLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbn1cXG5cXG4jbWFpbi1sb2dvID4gLmljb24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSA+IGhyIHtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50ID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbikgLyAyKTtcXG59XFxuXFxuLmNvbnRlbnQgPiAuY29udGVudC10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIC0tZWxlbWVudC1tYXJnaW46IDAgMCAwIHZhcigtLWRlZmF1bHQtc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4uY29udGVudC4tLXZlcnRpY2FsID4gLmNvbnRlbnQtdGV4dCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC0tZWxlbWVudC1tYXJnaW46IHZhcigtLWRlZmF1bHQtc2VjdGlvbi1tYXJnaW4pIDAgMCAwO1xcbn1cXG5cXG4uY29udGVudCA+IC5jb250ZW50LXRleHQgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1lbGVtZW50LW1hcmdpbik7XFxufVxcblxcbi5jb250ZW50LXRleHQgPiBwIHtcXG4gICAgbWF4LXdpZHRoOiA0MTBweDtcXG59XFxuXFxuLmNvbnRlbnQtdGV4dCA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRlbnQuLS12ZXJ0aWNhbCA+IC5jb250ZW50LXRleHQgPiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbWFpbi1pbi1jaXJjbGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC0tY2lyY2xlLWFjY2VudC10b3A6IC0xMDBweDtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygyMDBweCAtIHZhcigtLWNpcmNsZS1hY2NlbnQtdG9wKSk7XFxuICAgIC0tY2lyY2xlLWFjY2VudC1maWxsOiBub25lO1xcblxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxufVxcblxcbiNjaXJjbGUtYWNjZW50IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMDAwcHg7XFxuICAgIGhlaWdodDogMzAwMHB4O1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDMwMDBweCAvIDIgKyAxcHgpO1xcbiAgICB0b3A6IHZhcigtLWNpcmNsZS1hY2NlbnQtdG9wKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2lyY2xlLWFjY2VudC1maWxsKTtcXG5cXG4gICAgei1pbmRleDogLTE7XFxuXFxuICAgIGJvcmRlcjogMjVweCBzb2xpZCB2YXIoLS1jb2xvci10ZXh0KTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3NlY29uZGFyeSB7XFxuICAgIG1hcmdpbjogNjAwcHggMCAzMDBweCAwO1xcbn1cXG5cXG4jc2Vjb25kYXJ5IC4tLWhvcml6b250YWwgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci10ZXh0KTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jZm9vdGVyLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4IDE1MHB4O1xcblxcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvb3Rlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2Zvb3Rlci1tZW51ID4gKjpub3QoOmZpcnN0LWNoaWxkKXtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbiNmb290ZXItbWVudSA+IC5mb290ZXItbWVudS1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvb3Rlci1tZW51LWxpc3QgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbn1cXG5cXG4uaG92ZXJhYmxle1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCB0cmFuc2Zvcm07XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctb3V0KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHJ1Y3R1cmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixrREFBa0Q7SUFDbEQsMEJBQTBCOztJQUUxQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLDZCQUE2Qjs7SUFFN0IsMkNBQTJDOztJQUUzQyxXQUFXOztJQUVYLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQ0FBbUM7O0lBRW5DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1COztJQUVuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwYWdlLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1kZWZhdWx0LW1heC13aWR0aCk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIG1heC13aWR0aDogdmFyKC0tZGVmYXVsdC1tYXgtd2lkdGgpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtLWNvbnRhaW5lci1tYXJnaW46IDAgMCAwIHZhcigtLWRlZmF1bHQtc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4uY29udGFpbmVyLi0tdmVydGljYWx7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC0tY29udGFpbmVyLW1hcmdpbjogdmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbikgMCAwIDA7XFxufVxcblxcbi5jb250YWluZXIgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1jb250YWluZXItbWFyZ2luKTtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI21haW4tbG9nbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxufVxcblxcbiNtYWluLWxvZ28gPiAuaWNvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlID4gaHIge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGV4dCk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luKSAvIDIpO1xcbn1cXG5cXG4uY29udGVudCA+IC5jb250ZW50LXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLS1lbGVtZW50LW1hcmdpbjogMCAwIDAgdmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbi5jb250ZW50Li0tdmVydGljYWwgPiAuY29udGVudC10ZXh0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLS1lbGVtZW50LW1hcmdpbjogdmFyKC0tZGVmYXVsdC1zZWN0aW9uLW1hcmdpbikgMCAwIDA7XFxufVxcblxcbi5jb250ZW50ID4gLmNvbnRlbnQtdGV4dCA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW46IHZhcigtLWVsZW1lbnQtbWFyZ2luKTtcXG59XFxuXFxuLmNvbnRlbnQtdGV4dCA+IHAge1xcbiAgICBtYXgtd2lkdGg6IDQxMHB4O1xcbn1cXG5cXG4uY29udGVudC10ZXh0ID4gcDpmaXJzdC1jaGlsZCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudC4tLXZlcnRpY2FsID4gLmNvbnRlbnQtdGV4dCA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLWluLWNpcmNsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLS1jaXJjbGUtYWNjZW50LXRvcDogLTEwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDIwMHB4IC0gdmFyKC0tY2lyY2xlLWFjY2VudC10b3ApKTtcXG4gICAgLS1jaXJjbGUtYWNjZW50LWZpbGw6IG5vbmU7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG59XFxuXFxuI2NpcmNsZS1hY2NlbnQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwMDBweDtcXG4gICAgaGVpZ2h0OiAzMDAwcHg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzAwMHB4IC8gMiArIDFweCk7XFxuICAgIHRvcDogdmFyKC0tY2lyY2xlLWFjY2VudC10b3ApO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaXJjbGUtYWNjZW50LWZpbGwpO1xcblxcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgYm9yZGVyOiAyNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jc2Vjb25kYXJ5IHtcXG4gICAgbWFyZ2luOiA2MDBweCAwIDMwMHB4IDA7XFxufVxcblxcbiNzZWNvbmRhcnkgLi0taG9yaXpvbnRhbCA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQpO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jZm9vdGVyLWxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyLWxvZ28gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNmb290ZXItY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDMwcHggMTUwcHg7XFxuXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZm9vdGVyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jZm9vdGVyLW1lbnUgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuI2Zvb3Rlci1tZW51ID4gLmZvb3Rlci1tZW51LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9vdGVyLW1lbnUtbGlzdCA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxufVxcblxcbi5ob3ZlcmFibGV7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxufVxcblxcbi5ob3ZlcmFibGU6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1vdXQpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMyB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iaWcpO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmg0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lLXF1aWV0KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oNSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxucCB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubG9nby10aXRsZSB7XFxuICAgIC0tbGV0dGVyLXNwYWNpbmc6IC40ZW07XFxuXFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XFxuXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDM5cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1sZXR0ZXItc3BhY2luZyk7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYygtMSAqIHZhcigtLWxldHRlci1zcGFjaW5nKSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90ZXh0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCOztJQUV0QixnQkFBZ0I7O0lBRWhCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyw4Q0FBOEM7SUFDOUMsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgzIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJpZyk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhlbWUtcXVpZXQpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmg1IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5wIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5sb2dvLXRpdGxlIHtcXG4gICAgLS1sZXR0ZXItc3BhY2luZzogLjRlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTdweDtcXG5cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMzlweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWxldHRlci1zcGFjaW5nKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKC0xICogdmFyKC0tbGV0dGVyLXNwYWNpbmcpKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1mb250LXNpemU6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLW1lZGl1bTogMjRweDtcXG4gICAgLS1mb250LXNpemUtYmlnOiAzMnB4O1xcbiAgICAtLWxldHRlci1zcGFjaW5nOiAwO1xcblxcbiAgICAtLWNvbG9yLXRleHQ6IHdoaXRlO1xcbiAgICAtLWNvbG9yLXRoZW1lOiAjMDEwOTFFO1xcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMjMuNzlkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjEuMTMlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpIDQ5LjElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDc4Ljg3JSksXFxuICAgIHZhcigtLWNvbG9yLXRoZW1lKTtcXG4gICAgLS1jb2xvci10aGVtZS1xdWlldDogIzNFNUI4ODtcXG5cXG4gICAgLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luOiAxMDBweDtcXG4gICAgLS1zaGFkb3ctb3V0OiAxcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcbiAgICAtLXNoYWRvdy1pbjogaW5zZXQgdmFyKC0tc2hhZG93LW91dCk7XFxuXFxuICAgIC0tZGVmYXVsdC1tYXgtd2lkdGg6IDkwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3ZhcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QjtzQkFDa0I7SUFDbEIsNEJBQTRCOztJQUU1QiwrQkFBK0I7SUFDL0IsNkNBQTZDOztJQUU3QyxvQ0FBb0M7O0lBRXBDLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1mb250LXNpemU6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLW1lZGl1bTogMjRweDtcXG4gICAgLS1mb250LXNpemUtYmlnOiAzMnB4O1xcbiAgICAtLWxldHRlci1zcGFjaW5nOiAwO1xcblxcbiAgICAtLWNvbG9yLXRleHQ6IHdoaXRlO1xcbiAgICAtLWNvbG9yLXRoZW1lOiAjMDEwOTFFO1xcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMjMuNzlkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjEuMTMlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpIDQ5LjElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDc4Ljg3JSksXFxuICAgIHZhcigtLWNvbG9yLXRoZW1lKTtcXG4gICAgLS1jb2xvci10aGVtZS1xdWlldDogIzNFNUI4ODtcXG5cXG4gICAgLS1kZWZhdWx0LXNlY3Rpb24tbWFyZ2luOiAxMDBweDtcXG4gICAgLS1zaGFkb3ctb3V0OiAxcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcbiAgICAtLXNoYWRvdy1pbjogaW5zZXQgdmFyKC0tc2hhZG93LW91dCk7XFxuXFxuICAgIC0tZGVmYXVsdC1tYXgtd2lkdGg6IDkwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFja2dyb3VuZC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNwb25zaXZlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RydWN0dXJlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGV4dC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnQtZnJlZS10cmlhbCcpO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wb3B1cCcpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xuICAgIH0pO1xufVxucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBjbG9zZSA9IHRhcmdldC5jbG9zZXN0KCcucG9wdXAtY29udGVudCcpO1xuICAgIGlmICghY2xvc2UpIHtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICAgIH1cbn0pO1xuIiwiLyoqXG4gKiBMb2FkIGFsbCB0aGUgcmVxdWlyZWQgcmVzb3VyY2VzXG4gKi9cblxuaW1wb3J0ICcuL2Nzcy92YXJzLmNzcydcbmltcG9ydCAnLi9jc3MvdGV4dC5jc3MnXG5pbXBvcnQgJy4vY3NzL2JhY2tncm91bmQuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9zdHJ1Y3R1cmUuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9idXR0b24uY3NzJ1xuaW1wb3J0ICcuL2Nzcy9pbnB1dC5jc3MnXG5pbXBvcnQgJy4vY3NzL3Jlc3BvbnNpdmUuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9wb3B1cC5jc3MnXG5pbXBvcnQgJy4vdHMvaW5pdFVJJyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=