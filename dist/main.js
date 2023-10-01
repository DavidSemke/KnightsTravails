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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\nhtml {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n  background-color: rgb(253, 236, 225);\n  margin: 0;\n}\n\ntd,\nth {\n  text-align: center;\n  width: 80px;\n  height: 80px;\n}\n\ntd {\n  border: 1px solid black;\n}\n\nsvg {\n  pointer-events: none;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.cellDark {\n  background-color: rgb(121, 68, 33);\n}\n\n.cellDark:hover,\n.cellDarkHover {\n  background-color: rgb(163, 106, 68);\n}\n\n.cellLight {\n  background-color: rgb(197, 149, 116);\n}\n\n.cellLight:hover,\n.cellLightHover {\n  background-color: rgb(230, 189, 161);\n}\n\n.line {\n  stroke: red;\n  stroke-width: 2px;\n}\n\n.textLarge {\n  font-size: x-large;\n}\n\n.textMedium {\n  font-size: large;\n}\n\n#knight,\n#x {\n  cursor: grab;\n  padding-top: 5px;\n}\n\n#x {\n  width: 60px;\n  height: 60px;\n}\n\n#board {\n  border-collapse: collapse;\n}\n\n#lineView {\n  position: fixed;\n  pointer-events: none;\n  left: 0px;\n  top: 0px;\n  z-index: 1000;\n  margin: 0;\n}\n\n#pathText {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n#pathView {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 40px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knightstravails/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ \"./src/js/knight.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n\n\n\n\n_view__WEBPACK_IMPORTED_MODULE_2__.view.initialSetup();\n_view__WEBPACK_IMPORTED_MODULE_2__.view.showPath(_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves);\n\n/* Events fired on drag target */\n\ndocument.addEventListener(\"dragstart\", function (event) {\n  event.dataTransfer.setData(\"dragTargetID\", event.target.id);\n});\n\n/* Events fired on drop target */\n\ndocument.addEventListener(\"dragover\", function (event) {\n  event.preventDefault();\n});\n\ndocument.addEventListener(\"dragenter\", function (event) {\n  const target = event.target;\n  const classes = target.className.split(\" \");\n\n  // target should be drop target and have no children\n  // (if target has child, target already contains drag target)\n  if (classes.includes(\"dropTarget\") && !target.hasChildNodes()) {\n    if (classes.includes(\"cellDark\")) {\n      target.classList.add(\"cellDarkHover\");\n    } else if (classes.includes(\"cellLight\")) {\n      target.classList.add(\"cellLightHover\");\n    }\n  }\n});\n\ndocument.addEventListener(\"dragleave\", function (event) {\n  const target = event.target;\n  const classes = target.className.split(\" \");\n\n  if (classes.includes(\"dropTarget\") && !target.hasChildNodes()) {\n    target.classList.remove(\"cellDarkHover\");\n    target.classList.remove(\"cellLightHover\");\n  }\n});\n\ndocument.addEventListener(\"drop\", function (event) {\n  event.preventDefault();\n  const target = event.target;\n  const classes = target.className.split(\" \");\n\n  if (classes.includes(\"dropTarget\") && !target.hasChildNodes()) {\n    target.classList.remove(\"cellDarkHover\");\n    target.classList.remove(\"cellLightHover\");\n\n    const dragID = event.dataTransfer.getData(\"dragTargetID\");\n    const dragTarget = document.getElementById(dragID);\n\n    // remove from old pos, add to new pos\n    dragTarget.parentElement.removeChild(dragTarget);\n    target.appendChild(dragTarget);\n\n    // update view module variables\n    if (dragID === \"knight\") {\n      _view__WEBPACK_IMPORTED_MODULE_2__.view.setKnightCell(target);\n    } else if (dragID === \"x\") {\n      _view__WEBPACK_IMPORTED_MODULE_2__.view.setXCell(target);\n    }\n\n    _view__WEBPACK_IMPORTED_MODULE_2__.view.showPath(_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves);\n  }\n});\n\nwindow.onresize = function () {\n  _view__WEBPACK_IMPORTED_MODULE_2__.view.showPath(_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves);\n}\n\n//# sourceURL=webpack://knightstravails/./src/js/index.js?");

/***/ }),

/***/ "./src/js/knight.js":
/*!**************************!*\
  !*** ./src/js/knight.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knight: () => (/* binding */ knight)\n/* harmony export */ });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/js/search.js\");\n\n\nconst knight = (() => {\n  function knightMoves(startPos, endPos) {\n    if (equalPositions(startPos, endPos)) {\n      return [startPos];\n    }\n\n    const tree = _search_js__WEBPACK_IMPORTED_MODULE_0__.search.Tree(startPos);\n    let endPosLeaf = null;\n\n    while (!endPosLeaf) {\n      tree.insertLeafChildren((leafValue) => {\n        return futurePositions(leafValue);\n      });\n\n      endPosLeaf = tree.findLeaf(endPos, equalPositions);\n    }\n\n    const moves = [];\n    let next = endPosLeaf;\n\n    while (next) {\n      moves.unshift(next.value);\n      next = next.parent;\n    }\n\n    return moves;\n  }\n\n  function equalPositions(pos1, pos2) {\n    return pos1[0] === pos2[0] && pos1[1] === pos2[1];\n  }\n\n  // a position has format [row, col]\n  function futurePositions(pos) {\n    const [currRow, currCol] = pos;\n    const moves = [\n      [1, -2],\n      [1, 2],\n      [-1, -2],\n      [-1, 2],\n      [-2, 1],\n      [2, 1],\n      [-2, -1],\n      [2, -1],\n    ];\n    const positions = [];\n\n    for (const move of moves) {\n      const newRow = currRow + move[0];\n      const newCol = currCol + move[1];\n\n      if (newRow > -1 && newRow < 8 && newCol > -1 && newCol < 8) {\n        positions.push([newRow, newCol]);\n      }\n    }\n\n    return positions;\n  }\n\n  return { knightMoves };\n})();\n\n\n\n\n//# sourceURL=webpack://knightstravails/./src/js/knight.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: () => (/* binding */ search)\n/* harmony export */ });\nconst search = (() => {\n  function Node(value, parent = null, children = []) {\n    return { value, parent, children };\n  }\n\n  function Tree(rootValue) {\n    const root = Node(rootValue);\n    let leaves = [root];\n\n    // Each leaf node gains whatever children the leafFunc\n    // returns; the leafFunc takes a leaf node value as a param\n    function insertLeafChildren(leafFunc) {\n      const newLeaves = [];\n\n      for (const leaf of leaves) {\n        const leafChildrenValues = leafFunc(leaf.value);\n        const children = [];\n\n        for (const value of leafChildrenValues) {\n          children.push(Node(value, leaf));\n        }\n\n        leaf.children = children;\n        newLeaves.push(children);\n      }\n\n      leaves = newLeaves.flat();\n    }\n\n    function findLeaf(value, compareFunc = null) {\n      if (!compareFunc) {\n        compareFunc = (val1, val2) => val1 === val2;\n      }\n\n      for (const leaf of leaves) {\n        if (compareFunc(leaf.value, value)) {\n          return leaf;\n        }\n      }\n\n      return null;\n    }\n\n    return { insertLeafChildren, findLeaf };\n  }\n\n  return { Tree };\n})();\n\n\n\n\n//# sourceURL=webpack://knightstravails/./src/js/search.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   view: () => (/* binding */ view)\n/* harmony export */ });\n/* harmony import */ var _images_knight_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/knight.png */ \"./src/images/knight.png\");\n/* harmony import */ var _images_x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/x.png */ \"./src/images/x.png\");\n\n\n\nconst view = (() => {\n  let knightCell = null;\n  let xCell = null;\n\n  function initialSetup() {\n    createBoard(8, 8);\n    knightCell = insertKnight();\n    xCell = insertX();\n  }\n\n  function createBoard(rows, cols) {\n    const board = document.querySelector(\"#board\");\n    const headRow = document.createElement(\"tr\");\n\n    // add empty col cell\n    const emptyColHead = document.createElement(\"th\");\n    emptyColHead.classList.add(\"textLarge\");\n    headRow.appendChild(emptyColHead);\n\n    // add col index cells\n    for (let i = 0; i < cols; i++) {\n      const colHead = document.createElement(\"th\");\n      colHead.classList.add(\"textLarge\");\n      colHead.innerText = `${i}`;\n      headRow.appendChild(colHead);\n    }\n\n    board.appendChild(headRow);\n    let offset = 0;\n\n    for (let i = 0; i < rows; i++) {\n      offset = offset ? 0 : 1;\n      const row = document.createElement(\"tr\");\n\n      for (let j = 0; j < cols + 1; j++) {\n        let cell = null;\n\n        if (j === 0) {\n          cell = document.createElement(\"th\");\n          cell.classList.add(\"textLarge\");\n          cell.innerText = `${i}`;\n        } else {\n          cell = document.createElement(\"td\");\n          cell.id = `${i}:${j - 1}`;\n          cell.classList.add(\"dropTarget\");\n\n          if ((j + offset) % 2) {\n            cell.classList.add(\"cellDark\");\n          } else {\n            cell.classList.add(\"cellLight\");\n          }\n        }\n\n        row.appendChild(cell);\n      }\n\n      board.appendChild(row);\n    }\n  }\n\n  function insertKnight() {\n    const knightImg = document.createElement(\"img\");\n    knightImg.id = \"knight\";\n    knightImg.src = _images_knight_png__WEBPACK_IMPORTED_MODULE_0__;\n    knightImg.draggable = true;\n\n    const cell = document.querySelector(\"#board td\");\n    cell.appendChild(knightImg);\n\n    return cell;\n  }\n\n  function insertX() {\n    const xImg = document.createElement(\"img\");\n    xImg.id = \"x\";\n    xImg.src = _images_x_png__WEBPACK_IMPORTED_MODULE_1__;\n    xImg.draggable = true;\n\n    const cell = document.querySelector(\"#board td:last-child\");\n    cell.appendChild(xImg);\n\n    return cell;\n  }\n\n  function showPath(movesFunc) {\n    const startPos = knightCell.id.split(\":\").map((str) => parseInt(str));\n    const endPos = xCell.id.split(\":\").map((str) => parseInt(str));\n    const moves = movesFunc(startPos, endPos);\n\n    showPathText(moves);\n    showPathLines(moves);\n  }\n\n  function showPathText(moves) {\n    const p = document.getElementById(\"pathLen\");\n    p.textContent = `${moves.length - 1} moves required:`;\n\n    const pathDiv = document.getElementById(\"pathText\");\n    pathDiv.innerHTML = \"\";\n\n    for (const move of moves) {\n      const positionDiv = document.createElement(\"div\");\n      positionDiv.textContent = `[${move[0]}, ${move[1]}]`;\n\n      const arrowDiv = document.createElement(\"div\");\n      arrowDiv.textContent = \"=>\";\n\n      for (const el of [positionDiv, arrowDiv]) {\n        pathDiv.appendChild(el);\n      }\n    }\n\n    pathDiv.removeChild(pathDiv.lastChild);\n  }\n\n  function showPathLines(moves) {\n    let svg = document.querySelector(\"svg\");\n\n    // remove old lines\n    if (svg) {\n      document.body.removeChild(svg);\n    }\n\n    svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n\n    for (let i = 0; i < moves.length - 1; i++) {\n      const curr = moves[i];\n      const currCell = document.getElementById(`${curr[0]}:${curr[1]}`);\n      const currRect = currCell.getBoundingClientRect();\n\n      const next = moves[i + 1];\n      const nextCell = document.getElementById(`${next[0]}:${next[1]}`);\n      const nextRect = nextCell.getBoundingClientRect();\n\n      const x1 = currRect.left + currRect.width / 2 + window.scrollX;\n      const y1 = currRect.top + currRect.height / 2 + window.scrollY;\n      const x2 = nextRect.left + nextRect.width / 2 + window.scrollX;\n      const y2 = nextRect.top + nextRect.height / 2 + window.scrollY;\n\n      const line = document.createElementNS(\n        \"http://www.w3.org/2000/svg\",\n        \"line\",\n      );\n      line.setAttribute(\"x1\", x1);\n      line.setAttribute(\"y1\", y1);\n      line.setAttribute(\"x2\", x2);\n      line.setAttribute(\"y2\", y2);\n      line.setAttribute(\"stroke\", \"red\");\n      line.setAttribute(\"stroke-width\", 2);\n\n      svg.appendChild(line);\n    }\n\n    document.body.appendChild(svg);\n  }\n\n  function setKnightCell(cell) {\n    knightCell = cell;\n  }\n\n  function setXCell(cell) {\n    xCell = cell;\n  }\n\n  return { initialSetup, showPath, setKnightCell, setXCell };\n})();\n\n\n\n\n//# sourceURL=webpack://knightstravails/./src/js/view.js?");

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