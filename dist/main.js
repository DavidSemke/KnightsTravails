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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow: auto;\r\n    background-color: rgb(253, 236, 225);\r\n    margin: 0;\r\n}\r\n\r\ntd, th {\r\n    text-align: center;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\ntd {\r\n    border: 1px solid black;\r\n}\r\n\r\nsvg {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.cellDark {\r\n    background-color: rgb(121, 68, 33);\r\n}\r\n\r\n.cellDark:hover, .cellDarkHover {\r\n    background-color: rgb(163, 106, 68);\r\n}\r\n\r\n.cellLight {\r\n    background-color: rgb(197, 149, 116);\r\n}\r\n\r\n.cellLight:hover, .cellLightHover {\r\n    background-color: rgb(230, 189, 161);\r\n}\r\n\r\n.line {\r\n    stroke: red;\r\n    stroke-width: 2px;\r\n}\r\n\r\n.textLarge {\r\n    font-size: x-large;\r\n}\r\n\r\n.textMedium {\r\n    font-size: large;\r\n}\r\n\r\n#knight, #x {\r\n    cursor: grab;\r\n    padding-top: 5px;\r\n}\r\n\r\n#x {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n#board {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#lineView {\r\n    position: fixed;\r\n    pointer-events: none;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: 1000;\r\n    margin: 0;\r\n}\r\n\r\n#pathText {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n}\r\n\r\n#pathView {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-bottom: 40px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knightstravails/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://knightstravails/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://knightstravails/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://knightstravails/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://knightstravails/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://knightstravails/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://knightstravails/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://knightstravails/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://knightstravails/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://knightstravails/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ \"./src/js/knight.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n\r\n\r\n\r\n\r\n\r\nconst controller = (() => {\r\n    \r\n    _view__WEBPACK_IMPORTED_MODULE_2__.view.initialSetup()\r\n    _view__WEBPACK_IMPORTED_MODULE_2__.view.showPath(_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves)\r\n    \r\n    /* Events fired on drag target */\r\n\r\n    document.addEventListener(\"dragstart\", function(event) {\r\n        event.dataTransfer.setData(\"dragTargetID\", event.target.id);\r\n    });\r\n    \r\n    /* Events fired on drop target */\r\n    \r\n    document.addEventListener(\"dragover\", function(event) {\r\n        event.preventDefault();\r\n    });\r\n\r\n    document.addEventListener(\"dragenter\", function(event) {\r\n        const target = event.target\r\n        const classes = target.className.split(' ')\r\n\r\n        // target should be drop target and have no children\r\n        // (if target has child, target already contains drag target)\r\n        if (classes.includes(\"dropTarget\") && !target.hasChildNodes()) {\r\n            \r\n            if (classes.includes(\"cellDark\")) {\r\n                target.classList.add('cellDarkHover')\r\n            }\r\n            else if (classes.includes(\"cellLight\")) {\r\n                target.classList.add('cellLightHover')\r\n            }  \r\n        }\r\n    })\r\n\r\n    document.addEventListener(\"dragleave\", function(event) {\r\n        const target = event.target\r\n        const classes = target.className.split(' ')\r\n\r\n        if (classes.includes(\"dropTarget\") && !target.hasChildNodes()) {\r\n            target.classList.remove('cellDarkHover')\r\n            target.classList.remove('cellLightHover')\r\n        }\r\n    })\r\n    \r\n    document.addEventListener(\"drop\", function(event) {\r\n        event.preventDefault()\r\n        const target = event.target\r\n        const classes = target.className.split(' ')\r\n\r\n        if (classes.includes(\"dropTarget\") && !target.hasChildNodes()) {\r\n            target.classList.remove('cellDarkHover')\r\n            target.classList.remove('cellLightHover')\r\n\r\n            const dragID = event.dataTransfer.getData(\"dragTargetID\")\r\n            const dragTarget = document.getElementById(dragID)\r\n            \r\n            // remove from old pos, add to new pos\r\n            dragTarget.parentElement.removeChild(dragTarget)\r\n            target.appendChild(dragTarget)\r\n\r\n            // update view module variables\r\n            if (dragID === 'knight') {\r\n                _view__WEBPACK_IMPORTED_MODULE_2__.view.setKnightCell(target)\r\n            }\r\n            else if (dragID === 'x') {\r\n                _view__WEBPACK_IMPORTED_MODULE_2__.view.setXCell(target)\r\n            }\r\n\r\n            _view__WEBPACK_IMPORTED_MODULE_2__.view.showPath(_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves)\r\n        }\r\n    })\r\n})()\n\n//# sourceURL=webpack://knightstravails/./src/js/index.js?");

/***/ }),

/***/ "./src/js/knight.js":
/*!**************************!*\
  !*** ./src/js/knight.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knight: () => (/* binding */ knight)\n/* harmony export */ });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/js/search.js\");\n\r\n\r\n\r\nconst knight = (() => {\r\n\r\n    function knightMoves(startPos, endPos) {\r\n\r\n        if (equalPositions(startPos, endPos)) {\r\n            return [startPos]\r\n        }\r\n\r\n        const tree = _search_js__WEBPACK_IMPORTED_MODULE_0__.search.Tree(startPos)\r\n        let endPosLeaf = null\r\n\r\n        while (!endPosLeaf) {\r\n            tree.insertLeafChildren(leafValue => {\r\n                return futurePositions(leafValue)\r\n            })\r\n\r\n            endPosLeaf = tree.findLeaf(endPos, equalPositions)\r\n        }\r\n\r\n        const moves = []\r\n        let next = endPosLeaf\r\n\r\n        while (next) {\r\n            moves.unshift(next.value)\r\n            next = next.parent\r\n        }\r\n\r\n        return moves\r\n    }\r\n\r\n    function equalPositions(pos1, pos2) {\r\n        return pos1[0] === pos2[0] && pos1[1] === pos2[1]\r\n    }\r\n\r\n    // a position has format [row, col]\r\n    function futurePositions(pos) {\r\n        const [currRow, currCol] = pos\r\n        const moves = [\r\n            [1, -2], [1, 2], [-1, -2], [-1, 2],\r\n            [-2, 1], [2, 1], [-2, -1], [2, -1]\r\n        ]\r\n        const positions = []\r\n\r\n        for (const move of moves) {\r\n            const newRow = currRow + move[0]\r\n            const newCol = currCol + move[1]\r\n\r\n            if (\r\n                -1 < newRow && newRow < 8\r\n                && -1 < newCol && newCol < 8\r\n            ) {\r\n                positions.push([newRow, newCol])\r\n            }\r\n        }\r\n\r\n        return positions\r\n    }\r\n\r\n    return { knightMoves }\r\n\r\n})()\r\n\r\n\r\n\n\n//# sourceURL=webpack://knightstravails/./src/js/knight.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: () => (/* binding */ search)\n/* harmony export */ });\nconst search = (() => {\r\n    function Node(value, parent=null, children=[]) {\r\n        return {value, parent, children}\r\n    }\r\n    \r\n    function Tree(rootValue) {\r\n        let root = Node(rootValue)\r\n        let leaves = [root]\r\n    \r\n        // Each leaf node gains whatever children the leafFunc\r\n        // returns; the leafFunc takes a leaf node value as a param\r\n        function insertLeafChildren(leafFunc) {\r\n            const newLeaves = []\r\n    \r\n            for (const leaf of leaves) {\r\n                const leafChildrenValues = leafFunc(leaf.value)\r\n                const children = []\r\n    \r\n                for (const value of leafChildrenValues) {\r\n                    children.push(Node(value, leaf))\r\n                }\r\n\r\n                leaf.children = children\r\n                newLeaves.push(children)\r\n            }\r\n    \r\n            leaves = newLeaves.flat()\r\n        }\r\n    \r\n        function findLeaf(value, compareFunc=null) {\r\n    \r\n            if (!compareFunc) {\r\n                compareFunc = (val1, val2) => val1 === val2 \r\n            }\r\n    \r\n            for (const leaf of leaves) {\r\n                if (compareFunc(leaf.value, value)) {\r\n                    return leaf\r\n                }\r\n            }\r\n    \r\n            return null\r\n        }\r\n    \r\n        return { insertLeafChildren, findLeaf }\r\n    }\r\n\r\n    return { Tree }\r\n\r\n})()\r\n\r\n\r\n\n\n//# sourceURL=webpack://knightstravails/./src/js/search.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   view: () => (/* binding */ view)\n/* harmony export */ });\n/* harmony import */ var _images_knight_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/knight.png */ \"./src/images/knight.png\");\n/* harmony import */ var _images_x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/x.png */ \"./src/images/x.png\");\n\r\n\r\n\r\n\r\nconst view = (() => {\r\n    let knightCell = null\r\n    let xCell = null\r\n\r\n\r\n    function initialSetup() {\r\n        createBoard(8, 8)\r\n        knightCell = insertKnight()\r\n        xCell = insertX()\r\n    }\r\n\r\n    function createBoard(rows, cols) {\r\n        const board = document.querySelector('#board')\r\n        const headRow = document.createElement('tr')\r\n\r\n        // add empty col cell\r\n        const emptyColHead = document.createElement('th')\r\n        emptyColHead.classList.add('textLarge')\r\n        headRow.appendChild(emptyColHead)\r\n        \r\n        // add col index cells\r\n        for (let i=0; i<cols; i++) {\r\n            const colHead = document.createElement('th')\r\n            colHead.classList.add('textLarge')\r\n            colHead.innerText = `${i}`\r\n            headRow.appendChild(colHead)\r\n        }\r\n    \r\n        board.appendChild(headRow)\r\n        let offset = 0\r\n    \r\n        for (let i=0; i<rows; i++) {\r\n            offset = offset ? 0 : 1\r\n            const row = document.createElement('tr')\r\n    \r\n            for (let j=0; j<cols+1; j++) {\r\n                let cell = null\r\n    \r\n                if (j === 0) {\r\n                    cell = document.createElement('th')\r\n                    cell.classList.add('textLarge')\r\n                    cell.innerText = `${i}`\r\n                }\r\n                else {\r\n                    cell = document.createElement('td')\r\n                    cell.id = `${i}:${j-1}`\r\n                    cell.classList.add('dropTarget')\r\n                    \r\n                    if ((j + offset) % 2) {\r\n                        cell.classList.add('cellDark')\r\n                    }\r\n                    else {\r\n                        cell.classList.add('cellLight')\r\n                    }\r\n                }\r\n    \r\n                row.appendChild(cell)\r\n            }\r\n    \r\n            board.appendChild(row)\r\n        }\r\n    }\r\n\r\n    function insertKnight() {\r\n        const knightImg = document.createElement('img')\r\n        knightImg.id = 'knight'\r\n        knightImg.src = _images_knight_png__WEBPACK_IMPORTED_MODULE_0__\r\n        knightImg.draggable = true\r\n\r\n        const cell = document.querySelector('#board td')\r\n        cell.appendChild(knightImg)\r\n\r\n        return cell\r\n    }\r\n\r\n    function insertX() {\r\n        const xImg = document.createElement('img')\r\n        xImg.id = 'x'\r\n        xImg.src = _images_x_png__WEBPACK_IMPORTED_MODULE_1__\r\n        xImg.draggable = true\r\n\r\n        const cell = document.querySelector('#board td:last-child')\r\n        cell.appendChild(xImg)\r\n\r\n        return cell\r\n    }\r\n\r\n    function showPath(movesFunc) {\r\n        const startPos = knightCell.id.split(':').map(str => parseInt(str))\r\n        const endPos = xCell.id.split(':').map(str => parseInt(str))\r\n        const moves = movesFunc(startPos, endPos)\r\n        \r\n        showPathText(moves)\r\n        showPathLines(moves)\r\n    }\r\n    \r\n    function showPathText(moves) {\r\n        const p = document.getElementById('pathLen')\r\n        p.textContent = `${moves.length-1} moves required:`\r\n\r\n        const pathDiv = document.getElementById('pathText')\r\n        pathDiv.innerHTML = ''\r\n    \r\n        for (const move of moves) {\r\n            const positionDiv = document.createElement('div')\r\n            positionDiv.textContent = `[${move[0]}, ${move[1]}]`\r\n\r\n            const arrowDiv = document.createElement('div')\r\n            arrowDiv.textContent = '=>'\r\n\r\n            for (const el of [positionDiv, arrowDiv]) {\r\n                pathDiv.appendChild(el)\r\n            }\r\n        }\r\n\r\n        pathDiv.removeChild(pathDiv.lastChild)\r\n    }\r\n\r\n    function showPathLines(moves) {\r\n        let svg = document.querySelector('svg')\r\n\r\n        // remove old lines\r\n        if (svg) {\r\n            document.body.removeChild(svg)\r\n        }\r\n\r\n        svg = document.createElementNS(\r\n            'http://www.w3.org/2000/svg', 'svg'\r\n        )\r\n\r\n        for (let i=0; i<moves.length-1; i++) {\r\n            const curr = moves[i]\r\n            const currCell = document.getElementById(\r\n                `${curr[0]}:${curr[1]}`\r\n            )\r\n            const currRect = currCell.getBoundingClientRect()\r\n\r\n            const next = moves[i+1]\r\n            const nextCell = document.getElementById(\r\n                `${next[0]}:${next[1]}`\r\n            )\r\n            const nextRect = nextCell.getBoundingClientRect()\r\n\r\n            const x1 = currRect.left + currRect.width/2 + window.scrollX\r\n            const y1 = currRect.top + currRect.height/2 + window.scrollY\r\n            const x2 = nextRect.left + nextRect.width/2 + window.scrollX\r\n            const y2 = nextRect.top + nextRect.height/2 + window.scrollY\r\n\r\n            const line = document.createElementNS(\r\n                'http://www.w3.org/2000/svg', 'line'\r\n            )\r\n            line.setAttribute('x1', x1);\r\n            line.setAttribute('y1', y1);\r\n            line.setAttribute('x2', x2);\r\n            line.setAttribute('y2', y2);\r\n            line.setAttribute('stroke', 'red');\r\n            line.setAttribute('stroke-width', 2);\r\n            \r\n            svg.appendChild(line)\r\n        }\r\n\r\n        document.body.appendChild(svg)\r\n    }\r\n\r\n    function setKnightCell(cell) {\r\n        knightCell = cell\r\n    }\r\n\r\n    function setXCell(cell) {\r\n        xCell = cell\r\n    }\r\n\r\n    return { initialSetup, showPath, setKnightCell, setXCell }\r\n\r\n})()\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://knightstravails/./src/js/view.js?");

/***/ }),

/***/ "./src/images/knight.png":
/*!*******************************!*\
  !*** ./src/images/knight.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/6f2f9110120ff649a389.png\";\n\n//# sourceURL=webpack://knightstravails/./src/images/knight.png?");

/***/ }),

/***/ "./src/images/x.png":
/*!**************************!*\
  !*** ./src/images/x.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/94a9393bd22f791dc284.png\";\n\n//# sourceURL=webpack://knightstravails/./src/images/x.png?");

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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;