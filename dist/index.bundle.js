"use strict";
(self["webpackChunkjs_battleship"] = self["webpackChunkjs_battleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dosis&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: 'Dosis', sans-serif;
  --detail-color: #f408a3;
  --background-color: #001474;
  --text-color: #fabdd7;
  color: var(--text-color);
  font-size: 24px;
}

body {
  background-color: var(--background-color);
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

#container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 350px));
  row-gap: 40px;
  column-gap: 80px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "setup setup"
    "computer player";
}

#setup-area {
  margin-top: 30px;
  width: 80%;
  height: 150px;
  border: 6px var(--detail-color) double;
  border-radius: 30px;
  grid-area: setup;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#setup-area p {
  margin: 0px;
  padding-bottom: 10px;
}

#setup-area input[type=text] {
  background-color: var(--background-color);
  box-shadow: none;
  border-radius: 20px;
  border: var(--detail-color) solid 4px;
  padding: 3px 13px;
}

#setup-area input[type=text]:focus {
  border: var(--detail-color) solid 4px;
  background-color: var(--background-color);
  outline: none;
}

#setup-area button {
  margin-left: 10px;

  background-color: var(--background-color);
  box-shadow: none;
  border-radius: 20px;
  border: var(--background-color) solid 4px;
  padding: 3px 10px;
  cursor: pointer;
  color: var(--detail-color);
}

#setup-area button:hover {
  border: var(--detail-color) solid 4px;
}

#setup-area button:active {
  background-color: var(--detail-color);
  color: var(--text-color);
}

#board-player {
  grid-area: player;
}

#board-computer {
  grid-area: computer;
}

.board-square {
  width: 30px;
  height: 30px;
  border: 2px solid var(--detail-color);
  margin: 2px;
}

.board-row {
  display: flex;
  flex-direction: row;
}

.board {
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: 2px solid var(--detail-color);
  padding: 1px;
}

.ship {
  background-color: var(--background-color);
}

.ship::after {
  content: "◼";
  color: var(--detail-color);
  font-size: 28px;
  position: relative;
  left: 3px;
  bottom: 7px;
}

.miss::after {
  content: "🞪";
  color: var(--detail-color);
  font-size: 28px;
  position: relative;
  left: 5px;
  bottom: 5px;
}

.hit {
  background-color: var(--detail-color);
}

.hit::after {
  content: "◼";
  color: var(--detail-color);
  font-size: 28px;
  position: relative;
  left: 3px;
  bottom: 7px;
}

.miss {
  background-color: var(--background-color);
}

.place-ship-highlight {
  background-color: var(--detail-color);
}

.attack-highlight {
  border-color: var(--text-color);
}

@media screen and (max-width: 800px) {
  #container {
    grid-template-areas:
      "setup"
      "computer"
      "player";
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,uBAAuB;EACvB,2BAA2B;EAC3B,qBAAqB;EACrB,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,yCAAyC;EACzC,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6DAA6D;EAC7D,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB;EACnB;;qBAEmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,mBAAmB;EACnB,qCAAqC;EACrC,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,aAAa;AACf;;AAEA;EACE,iBAAiB;;EAEjB,yCAAyC;EACzC,gBAAgB;EAChB,mBAAmB;EACnB,yCAAyC;EACzC,iBAAiB;EACjB,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE;IACE;;;cAGU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');\n\n* {\n  font-family: 'Dosis', sans-serif;\n  --detail-color: #f408a3;\n  --background-color: #001474;\n  --text-color: #fabdd7;\n  color: var(--text-color);\n  font-size: 24px;\n}\n\nbody {\n  background-color: var(--background-color);\n  height: 100%;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 350px));\n  row-gap: 40px;\n  column-gap: 80px;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n  grid-template-areas:\n    \"setup setup\"\n    \"computer player\";\n}\n\n#setup-area {\n  margin-top: 30px;\n  width: 80%;\n  height: 150px;\n  border: 6px var(--detail-color) double;\n  border-radius: 30px;\n  grid-area: setup;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#setup-area p {\n  margin: 0px;\n  padding-bottom: 10px;\n}\n\n#setup-area input[type=text] {\n  background-color: var(--background-color);\n  box-shadow: none;\n  border-radius: 20px;\n  border: var(--detail-color) solid 4px;\n  padding: 3px 13px;\n}\n\n#setup-area input[type=text]:focus {\n  border: var(--detail-color) solid 4px;\n  background-color: var(--background-color);\n  outline: none;\n}\n\n#setup-area button {\n  margin-left: 10px;\n\n  background-color: var(--background-color);\n  box-shadow: none;\n  border-radius: 20px;\n  border: var(--background-color) solid 4px;\n  padding: 3px 10px;\n  cursor: pointer;\n  color: var(--detail-color);\n}\n\n#setup-area button:hover {\n  border: var(--detail-color) solid 4px;\n}\n\n#setup-area button:active {\n  background-color: var(--detail-color);\n  color: var(--text-color);\n}\n\n#board-player {\n  grid-area: player;\n}\n\n#board-computer {\n  grid-area: computer;\n}\n\n.board-square {\n  width: 30px;\n  height: 30px;\n  border: 2px solid var(--detail-color);\n  margin: 2px;\n}\n\n.board-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  border: 2px solid var(--detail-color);\n  padding: 1px;\n}\n\n.ship {\n  background-color: var(--background-color);\n}\n\n.ship::after {\n  content: \"◼\";\n  color: var(--detail-color);\n  font-size: 28px;\n  position: relative;\n  left: 3px;\n  bottom: 7px;\n}\n\n.miss::after {\n  content: \"🞪\";\n  color: var(--detail-color);\n  font-size: 28px;\n  position: relative;\n  left: 5px;\n  bottom: 5px;\n}\n\n.hit {\n  background-color: var(--detail-color);\n}\n\n.hit::after {\n  content: \"◼\";\n  color: var(--detail-color);\n  font-size: 28px;\n  position: relative;\n  left: 3px;\n  bottom: 7px;\n}\n\n.miss {\n  background-color: var(--background-color);\n}\n\n.place-ship-highlight {\n  background-color: var(--detail-color);\n}\n\n.attack-highlight {\n  border-color: var(--text-color);\n}\n\n@media screen and (max-width: 800px) {\n  #container {\n    grid-template-areas:\n      \"setup\"\n      \"computer\"\n      \"player\";\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayBoards: () => (/* binding */ displayBoards),
/* harmony export */   displayPlayerShips: () => (/* binding */ displayPlayerShips),
/* harmony export */   displaySetupInfo: () => (/* binding */ displaySetupInfo),
/* harmony export */   displayTurnInfo: () => (/* binding */ displayTurnInfo),
/* harmony export */   displayWinInfo: () => (/* binding */ displayWinInfo),
/* harmony export */   getSquare: () => (/* binding */ getSquare),
/* harmony export */   updateSquare: () => (/* binding */ updateSquare)
/* harmony export */ });
function makeBoardDiv(isComputer, size = 10) {
  const divBoard = document.createElement("div");
  divBoard.classList.add("board");
  const user = isComputer ? "computer" : "player";
  divBoard.setAttribute("id", `board-${  user}`);

  for (let i = 0; i < size; i += 1) {
    const divRow = document.createElement("div");
    divRow.classList.add("board-row");

    for (let j = 0; j < size; j += 1) {
      const div = document.createElement ("div");
      div.setAttribute("coordinates", `${j}-${i}`);
      div.classList.add(user);
      div.classList.add("board-square");
      divRow.appendChild(div);
    }
    divBoard.appendChild(divRow);
  }
  
  return divBoard;
}

function getSquare([a, b], isComputer = true, playerBoardID = "board-player", computerBoardID = "board-computer") {
  const boardID = isComputer ? computerBoardID : playerBoardID;
  const divBoard = document.getElementById(boardID);
  return divBoard.querySelector(`[coordinates="${a}-${b}"]`);
}

function displayPlayerShips(ships, playerBoardID = "board-player") {
  for (let index = 0; index < ships.length; index += 1) {
    const currentShip = ships[index];
    const [currentShipX, currentShipY] = currentShip.coordinates;
    for (let j = 0; j < currentShip.ship.length; j += 1) {
      const [a, b] = currentShip.isVertical ? [currentShipX, currentShipY + j] : [currentShipX + j, currentShipY];
      const square = getSquare([a, b], false, playerBoardID); 
      square.classList.add('ship');
    }
  }
}

function makeSetupArea() {
  const container = document.createElement("div");
  container.id = ("setup-area");
  return container;
}

function displayBoards() {
  const container = document.createElement("div"); 
  container.setAttribute("id", "container");
  container.appendChild(makeBoardDiv(true));
  container.appendChild(makeBoardDiv(false));
  container.appendChild(makeSetupArea());
  document.body.appendChild(container);
}

function updateSquare(isHit, target) {
  if (isHit) {
    target.classList.add('hit');
  } else {
    target.classList.add('miss');
  }
}

function getSetupText(index) {
  switch (index) {
    case 0:
      return "Place your carrier!"
    case 1:
      return "Place your battleship!"
    case 2:
      return "Place your cruiser!"
    case 3:
      return "Place your first destroyer!"
    case 4:
      return "Place your second destroyer!"
    case 5:
      return "Place your first submarine!"
    case 6:
      return "Place your second submarine!"
    default:
      return "Enter your name 😈";
  }
}

function displaySetupInfo(index) {
  const container = document.getElementById("setup-area");
  container.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = getSetupText(index);
  container.appendChild(text);

  if (index >= 0 || index <= 6) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "Rotate Ship";
    container.appendChild(button);
  } else {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "player-name");
    input.setAttribute("name", "player-name");
    input.setAttribute("placeholder", "Your name");
    form.appendChild(input);
    const button = document.createElement("button");
    button.innerHTML = "Submit";
    form.appendChild(button);
    container.appendChild(form);
  }
}

function displayTurnInfo(name) {
  const container = document.getElementById("setup-area");
  container.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = `${name}'s turn!`;
  container.appendChild(text);
}

function displayWinInfo(name) {
  const container = document.getElementById("setup-area");
  container.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = `${name} wins! ✨`;
  container.appendChild(text);
}



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _includesArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./includesArray */ "./src/includesArray.js");






function addClickHandler(player, computer, divBoard, size = 10) {
  const clickHandler = (event) => {
    playerTurn(event, player, computer, divBoard, clickHandler);
  }

  const markedSquares = computer.gameboard.marked;
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (!(0,_includesArray__WEBPACK_IMPORTED_MODULE_4__.includesArray)(markedSquares, [i, j])) {
        const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)([i, j], true);
        square.addEventListener("click", clickHandler);
      }
    }
  }
}

function addComputerMouseoverHandler(computer, size = 10) {
  const mouseoverHandler = (event) => {
    event.target.classList.add("attack-highlight");
  }

  const mouseoutHandler = (event) => {
    event.target.classList.remove("attack-highlight");
  }

  const markedSquares = computer.gameboard.marked;
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (!(0,_includesArray__WEBPACK_IMPORTED_MODULE_4__.includesArray)(markedSquares, [i, j])) {
        const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)([i, j], true);
        square.addEventListener("mouseover", mouseoverHandler);
        square.addEventListener("mouseout", mouseoutHandler);
      }
    }
  }
}

function startTurn({ player, computer }) {
  (0,_display__WEBPACK_IMPORTED_MODULE_3__.displayTurnInfo)(player.name);
  const divBoard = document.getElementById("board-computer");

  addClickHandler(player, computer, divBoard);
  addComputerMouseoverHandler(computer);
}

function endGame(name) {
  (0,_display__WEBPACK_IMPORTED_MODULE_3__.displayWinInfo)(name);
}

function computerTurn(player, computer) {
  const computerMove = computer.makeMove();
  const isHit = player.gameboard.receiveAttack(computerMove);
  (0,_display__WEBPACK_IMPORTED_MODULE_3__.updateSquare)(isHit, (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)(computerMove, false));
  if (player.gameboard.areAllShipsSunk()) {
    endGame(computer.name);
  } else {
    setTimeout(() => { startTurn({ player, computer }) }, 500);
  }
}

function removeClickHandler(clickHandler, size = 10) {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)([i, j], true);
      square.removeEventListener("click", clickHandler);
    }
  }
}

function removeMouseoverHandler(size = 10) {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const oldSq = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)([i, j], true);
      const newSq = oldSq.cloneNode(true);
      newSq.classList.remove("attack-highlight");
      oldSq.parentNode.replaceChild(newSq, oldSq);
    }
  }
}

function playerTurn(event, player, computer, divBoard, clickHandler) {
  const str = event.target.getAttribute("coordinates");
  const coordinates = str.split("-").map(Number);
  const isHit = computer.gameboard.receiveAttack(coordinates);
  (0,_display__WEBPACK_IMPORTED_MODULE_3__.updateSquare)(isHit, event.target);

  removeClickHandler(clickHandler);
  removeMouseoverHandler();

  if (computer.gameboard.areAllShipsSunk()) {
    endGame(player.name);
  } else {
    (0,_display__WEBPACK_IMPORTED_MODULE_3__.displayTurnInfo)(computer.name);
    setTimeout(() => { computerTurn(player, computer) }, 1000);
  }
}

function getShipLength(index) {
  switch (index) {
    case 0:
      return 5;
    case 1:
      return 4;
    case 2:
      return 3;
    case 3:
    case 4:
      return 2;
    case 5:
    case 6:
      return 1;
    default:
      return 2;
  }
}

function displayShip(event, length, isVertical, size = 10) {
  const str = event.target.getAttribute("coordinates");
  const [x, y] = str.split("-").map(Number);
  const shipEnd = isVertical ? y + length : x + length;
  if (shipEnd <= size) {
    for (let i = 0; i < length; i += 1) {
      const coordinates = isVertical ? [x, y + i] : [x + i, y];
      const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)(coordinates, false);
      square.classList.add("place-ship-highlight");
    }
  }
}

function clearShip(event, length, isVertical, size = 10) {
  const str = event.target.getAttribute("coordinates");
  const [x, y] = str.split("-").map(Number);
  const shipEnd = isVertical ? y + length : x + length;
  if (shipEnd <= size) {
    for (let i = 0; i < length; i += 1) {
      const coordinates = isVertical ? [x, y + i] : [x + i, y];
      const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)(coordinates, false);
      square.classList.remove("place-ship-highlight");
    }
  }
}

function placeShip(event, player, computer, index, length, isVertical, mouseoverHandler, mouseoutHandler, clickHandler, size = 10) {
  removeShipPlacementListeners(mouseoverHandler, mouseoutHandler, clickHandler);

  const str = event.target.getAttribute("coordinates");
  const [x, y] = str.split("-").map(Number);
  const shipEnd = isVertical ? y + length : x + length;
  if (shipEnd <= size) {
    for (let i = 0; i < length; i += 1) {
      const coordinates = isVertical ? [x, y + i] : [x + i, y];
      const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)(coordinates, false);
      square.classList.remove("place-ship-highlight");
    }
  }
  const result = player.gameboard.place(_ship__WEBPACK_IMPORTED_MODULE_0__["default"], length, [x, y], isVertical);
  (0,_display__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(player.gameboard.ships);
  if (result) {
    setupLoop(player, computer, index + 1);
  } else {
    setupLoop(player, computer, index);
  }
}

function removeShipPlacementListeners(mouseoverHandler, mouseoutHandler, clickHandler, size = 10) {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)([i, j], false);
        square.removeEventListener("mouseover", mouseoverHandler);
        square.removeEventListener("mouseout", mouseoutHandler);
        square.removeEventListener("click", clickHandler);
    }
  }
}

function addShipPlacementListeners(mouseoverHandler, mouseoutHandler, clickHandler, size = 10) {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const square = (0,_display__WEBPACK_IMPORTED_MODULE_3__.getSquare)([i, j], false);
        square.addEventListener("mouseover", mouseoverHandler);
        square.addEventListener("mouseout", mouseoutHandler);
        square.addEventListener("click", clickHandler);
    }
  }
}

function setupLoop(player, computer, index) {
  const length = getShipLength(index);
  let isVertical = true;

  const mouseoverHandler = (event) => {
    displayShip(event, length, isVertical);
  }

  const mouseoutHandler = (event) => {
    clearShip(event, length, isVertical);
  }

  const clickHandler = (event) => {
    placeShip(event, player, computer, index, length, isVertical, mouseoverHandler, mouseoutHandler, clickHandler);
  }

  // continue/exit setup
  if (index < 7) {
    // setup area text & ship rotation
    (0,_display__WEBPACK_IMPORTED_MODULE_3__.displaySetupInfo)(index);
    const rotateShip = () => {
      isVertical = !isVertical;
      removeShipPlacementListeners(mouseoverHandler, mouseoutHandler, clickHandler);
      addShipPlacementListeners(mouseoverHandler, mouseoutHandler, clickHandler);
    }
    const setupArea = document.getElementById("setup-area");
    const btn = setupArea.querySelector("button");
    btn.addEventListener("click", rotateShip);
    // square event listeners
    addShipPlacementListeners(mouseoverHandler, mouseoutHandler, clickHandler);
  } else {
    removeShipPlacementListeners(mouseoverHandler, mouseoutHandler, clickHandler);
    startTurn({ player, computer });
  }
}

function placeComputerShips(computer, size = 10) {
  for (let index = 0; index < 7; index += 1) {
    let result = null;
    do {
      const coordinates = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)]
      const isVertical = (Math.random() > 0.5);
      result = computer.gameboard.place(_ship__WEBPACK_IMPORTED_MODULE_0__["default"], getShipLength(index), coordinates, isVertical);
    } while (!result);
  }
}

function setupPlayer() {
  (0,_display__WEBPACK_IMPORTED_MODULE_3__.displaySetupInfo)();
  const setupArea = document.getElementById("setup-area");
  const nameForm = setupArea.querySelector("form");

  nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameForm.elements["player-name"].value;
    const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(playerGameboard, name);

    const computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(computerGameboard);
    placeComputerShips(computer);

    setupLoop(player, computer, 0);
  });
}

function startGame() {
  (0,_display__WEBPACK_IMPORTED_MODULE_3__.displayBoards)();
  setupPlayer()
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createGameboard)
/* harmony export */ });
/* harmony import */ var _includesArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includesArray */ "./src/includesArray.js");


function createGameboard(size = 10, ships = [], misses = [], marked = []) {

  function isOutsideBoard([x, y], length = 1, isVertical = true) {
    for (let index = 0; index < length; index += 1) {
      const [a, b] = isVertical ? [x, y + index] : [x + index, y];

      if (a < 0 || a > size - 1 || b < 0 || b > size - 1) {
        return true;
      }
    }
    return false;
  }

  function isOverOtherShips([x, y], length, isVertical) {
    // make coordinate array of new ship
    const shipCoordArr = [];
    for (let index = 0; index < length; index += 1) {
      const [a, b] = isVertical ? [x, y + index] : [x + index, y];
      shipCoordArr.push([a, b]);
    }

    // go through all existing ships
    for (let i = 0; i < ships.length; i += 1) {
      const currentShip = ships[i];
      const [currentShipX, currentShipY] = currentShip.coordinates;

      // go through coordinate array of current ship
      for (let j = 0; j < currentShip.ship.length; j += 1) {
        const [a, b] = currentShip.isVertical ? [currentShipX, currentShipY + j] : [currentShipX + j, currentShipY];

        // check if any coordinates of the new ship overlap with the current ship
        if ((0,_includesArray__WEBPACK_IMPORTED_MODULE_0__.includesArray)(shipCoordArr, [a, b])) return true;
      }
    }
    return false;
  }

  function place(createShip, length, coordinates, isVertical) {
    if (isOutsideBoard(coordinates, length, isVertical)) return null;
    if (isOverOtherShips(coordinates, length, isVertical)) return null;

    const ship = createShip(length);
    const shipObj = {
      ship,
      coordinates,
      isVertical
    };
    ships.push(shipObj);
    return shipObj;
  }

  function receiveAttack(attack) {
    if (isOutsideBoard(attack)) return false;

    marked.push(attack);

    // go through all existing ships
    for (let i = 0; i < ships.length; i += 1) {
      const currentShip = ships[i];
      const [currentShipX, currentShipY] = currentShip.coordinates;

      // go through coordinate array of current ship
      for (let j = 0; j < currentShip.ship.length; j += 1) {
        const coordinates = currentShip.isVertical ? [currentShipX, currentShipY + j] : [currentShipX + j, currentShipY];

        if ((0,_includesArray__WEBPACK_IMPORTED_MODULE_0__.compare)(coordinates, attack)) { 
          currentShip.ship.hit();
          return true;
        }
      }
    }

    misses.push(attack);
    return false;
  }

  function areAllShipsSunk() {
    let result = true;
    for (let i = 0; i < ships.length; i += 1) {
      const currentShip = ships[i];
      result = result && currentShip.ship.isSunk();
    }
    return result;
  }

  return { ships, place, receiveAttack, misses, areAllShipsSunk, marked }
}

/***/ }),

/***/ "./src/includesArray.js":
/*!******************************!*\
  !*** ./src/includesArray.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compare: () => (/* binding */ compare),
/* harmony export */   includesArray: () => (/* binding */ includesArray)
/* harmony export */ });
function compare(arr1, arr2) {
  // assumes same number of elements
  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}

function includesArray(sourceArray, searchElement) {
  // assumes same number of elements
  for (let index = 0; index < sourceArray.length; index += 1) {
    if (compare(sourceArray[index], searchElement)) return true;
  }
  return false;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



window.onload = () => {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.appendChild(meta);
  
  (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _includesArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includesArray */ "./src/includesArray.js");


function createPlayer(gameboard, name = "Chuu") {
  const moves = [];

  function makeMove(size = 10) {
    let move = [];
    do {
      move = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
      if (!(0,_includesArray__WEBPACK_IMPORTED_MODULE_0__.includesArray)(moves, move)) {
        moves.push(move);
        break;
      }
    } while (moves.length < size * size); // infinite loop failsafe? idk
    return move;
  }

  return { name, gameboard, makeMove }
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShip)
/* harmony export */ });
function createShip(length, startingHits = 0) {
  let hits = startingHits;

  const isSunk = () => length === hits;

  const hit = () => { 
    if (hits < length) hits += 1;
  }

  return { length, get hitTotal() { return hits; }, isSunk, hit }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFQUFFLGlEQUFTO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZ0Q7O0FBRWpDO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZEQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0NBQW9DO0FBQzFDO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHlCQUF5QixjQUFjO0FBQ2xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vanMtYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2pzLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2pzLWJhdHRsZXNoaXAvLi9zcmMvaW5jbHVkZXNBcnJheS5qcyIsIndlYnBhY2s6Ly9qcy1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2pzLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2pzLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xuICAtLWRldGFpbC1jb2xvcjogI2Y0MDhhMztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNDc0O1xuICAtLXRleHQtY29sb3I6ICNmYWJkZDc7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAzNTBweCkpO1xuICByb3ctZ2FwOiA0MHB4O1xuICBjb2x1bW4tZ2FwOiA4MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwic2V0dXAgc2V0dXBcIlxuICAgIFwiY29tcHV0ZXIgcGxheWVyXCI7XG59XG5cbiNzZXR1cC1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiA2cHggdmFyKC0tZGV0YWlsLWNvbG9yKSBkb3VibGU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGdyaWQtYXJlYTogc2V0dXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2V0dXAtYXJlYSBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4jc2V0dXAtYXJlYSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogdmFyKC0tZGV0YWlsLWNvbG9yKSBzb2xpZCA0cHg7XG4gIHBhZGRpbmc6IDNweCAxM3B4O1xufVxuXG4jc2V0dXAtYXJlYSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYm9yZGVyOiB2YXIoLS1kZXRhaWwtY29sb3IpIHNvbGlkIDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNzZXR1cC1hcmVhIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQtY29sb3IpIHNvbGlkIDRweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XG59XG5cbiNzZXR1cC1hcmVhIGJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogdmFyKC0tZGV0YWlsLWNvbG9yKSBzb2xpZCA0cHg7XG59XG5cbiNzZXR1cC1hcmVhIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbiNib2FyZC1wbGF5ZXIge1xuICBncmlkLWFyZWE6IHBsYXllcjtcbn1cblxuI2JvYXJkLWNvbXB1dGVyIHtcbiAgZ3JpZC1hcmVhOiBjb21wdXRlcjtcbn1cblxuLmJvYXJkLXNxdWFyZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRldGFpbC1jb2xvcik7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uYm9hcmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZXRhaWwtY29sb3IpO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5zaGlwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pe8XCI7XG4gIGNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogM3B4O1xuICBib3R0b206IDdweDtcbn1cblxuLm1pc3M6OmFmdGVyIHtcbiAgY29udGVudDogXCLwn56qXCI7XG4gIGNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICBib3R0b206IDVweDtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XG59XG5cbi5oaXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLil7xcIjtcbiAgY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzcHg7XG4gIGJvdHRvbTogN3B4O1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGxhY2Utc2hpcC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xufVxuXG4uYXR0YWNrLWhpZ2hsaWdodCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcInNldHVwXCJcbiAgICAgIFwiY29tcHV0ZXJcIlxuICAgICAgXCJwbGF5ZXJcIjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkRBQTZEO0VBQzdELGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkI7O3FCQUVtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0lBQ0U7OztjQUdVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Eb3NpcyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xcbiAgLS1kZXRhaWwtY29sb3I6ICNmNDA4YTM7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMwMDE0NzQ7XFxuICAtLXRleHQtY29sb3I6ICNmYWJkZDc7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAzNTBweCkpO1xcbiAgcm93LWdhcDogNDBweDtcXG4gIGNvbHVtbi1nYXA6IDgwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwic2V0dXAgc2V0dXBcXFwiXFxuICAgIFxcXCJjb21wdXRlciBwbGF5ZXJcXFwiO1xcbn1cXG5cXG4jc2V0dXAtYXJlYSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IDZweCB2YXIoLS1kZXRhaWwtY29sb3IpIGRvdWJsZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBncmlkLWFyZWE6IHNldHVwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXR1cC1hcmVhIHAge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3NldHVwLWFyZWEgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiB2YXIoLS1kZXRhaWwtY29sb3IpIHNvbGlkIDRweDtcXG4gIHBhZGRpbmc6IDNweCAxM3B4O1xcbn1cXG5cXG4jc2V0dXAtYXJlYSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gIGJvcmRlcjogdmFyKC0tZGV0YWlsLWNvbG9yKSBzb2xpZCA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZXR1cC1hcmVhIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQtY29sb3IpIHNvbGlkIDRweDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XFxufVxcblxcbiNzZXR1cC1hcmVhIGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IHZhcigtLWRldGFpbC1jb2xvcikgc29saWQgNHB4O1xcbn1cXG5cXG4jc2V0dXAtYXJlYSBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbiNib2FyZC1wbGF5ZXIge1xcbiAgZ3JpZC1hcmVhOiBwbGF5ZXI7XFxufVxcblxcbiNib2FyZC1jb21wdXRlciB7XFxuICBncmlkLWFyZWE6IGNvbXB1dGVyO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGV0YWlsLWNvbG9yKTtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4uYm9hcmQtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZXRhaWwtY29sb3IpO1xcbiAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLnNoaXA6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLil7xcXFwiO1xcbiAgY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzcHg7XFxuICBib3R0b206IDdweDtcXG59XFxuXFxuLm1pc3M6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn56qXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiA1cHg7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlsLWNvbG9yKTtcXG59XFxuXFxuLmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKXvFxcXCI7XFxuICBjb2xvcjogdmFyKC0tZGV0YWlsLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDNweDtcXG4gIGJvdHRvbTogN3B4O1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLnBsYWNlLXNoaXAtaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XFxufVxcblxcbi5hdHRhY2staGlnaGxpZ2h0IHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAjY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwic2V0dXBcXFwiXFxuICAgICAgXFxcImNvbXB1dGVyXFxcIlxcbiAgICAgIFxcXCJwbGF5ZXJcXFwiO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbWFrZUJvYXJkRGl2KGlzQ29tcHV0ZXIsIHNpemUgPSAxMCkge1xuICBjb25zdCBkaXZCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdkJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgY29uc3QgdXNlciA9IGlzQ29tcHV0ZXIgPyBcImNvbXB1dGVyXCIgOiBcInBsYXllclwiO1xuICBkaXZCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgYm9hcmQtJHsgIHVzZXJ9YCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICBjb25zdCBkaXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlJvdy5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtcm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwiZGl2XCIpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNvb3JkaW5hdGVzXCIsIGAke2p9LSR7aX1gKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHVzZXIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJib2FyZC1zcXVhcmVcIik7XG4gICAgICBkaXZSb3cuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgZGl2Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2Um93KTtcbiAgfVxuICBcbiAgcmV0dXJuIGRpdkJvYXJkO1xufVxuXG5mdW5jdGlvbiBnZXRTcXVhcmUoW2EsIGJdLCBpc0NvbXB1dGVyID0gdHJ1ZSwgcGxheWVyQm9hcmRJRCA9IFwiYm9hcmQtcGxheWVyXCIsIGNvbXB1dGVyQm9hcmRJRCA9IFwiYm9hcmQtY29tcHV0ZXJcIikge1xuICBjb25zdCBib2FyZElEID0gaXNDb21wdXRlciA/IGNvbXB1dGVyQm9hcmRJRCA6IHBsYXllckJvYXJkSUQ7XG4gIGNvbnN0IGRpdkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9hcmRJRCk7XG4gIHJldHVybiBkaXZCb2FyZC5xdWVyeVNlbGVjdG9yKGBbY29vcmRpbmF0ZXM9XCIke2F9LSR7Yn1cIl1gKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllclNoaXBzKHNoaXBzLCBwbGF5ZXJCb2FyZElEID0gXCJib2FyZC1wbGF5ZXJcIikge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwc1tpbmRleF07XG4gICAgY29uc3QgW2N1cnJlbnRTaGlwWCwgY3VycmVudFNoaXBZXSA9IGN1cnJlbnRTaGlwLmNvb3JkaW5hdGVzO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXAuc2hpcC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gY3VycmVudFNoaXAuaXNWZXJ0aWNhbCA/IFtjdXJyZW50U2hpcFgsIGN1cnJlbnRTaGlwWSArIGpdIDogW2N1cnJlbnRTaGlwWCArIGosIGN1cnJlbnRTaGlwWV07XG4gICAgICBjb25zdCBzcXVhcmUgPSBnZXRTcXVhcmUoW2EsIGJdLCBmYWxzZSwgcGxheWVyQm9hcmRJRCk7IFxuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVNldHVwQXJlYSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gKFwic2V0dXAtYXJlYVwiKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUJvYXJkcygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VCb2FyZERpdih0cnVlKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlQm9hcmREaXYoZmFsc2UpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VTZXR1cEFyZWEoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3F1YXJlKGlzSGl0LCB0YXJnZXQpIHtcbiAgaWYgKGlzSGl0KSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2V0dXBUZXh0KGluZGV4KSB7XG4gIHN3aXRjaCAoaW5kZXgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gXCJQbGFjZSB5b3VyIGNhcnJpZXIhXCJcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gXCJQbGFjZSB5b3VyIGJhdHRsZXNoaXAhXCJcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gXCJQbGFjZSB5b3VyIGNydWlzZXIhXCJcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gXCJQbGFjZSB5b3VyIGZpcnN0IGRlc3Ryb3llciFcIlxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBcIlBsYWNlIHlvdXIgc2Vjb25kIGRlc3Ryb3llciFcIlxuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBcIlBsYWNlIHlvdXIgZmlyc3Qgc3VibWFyaW5lIVwiXG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIFwiUGxhY2UgeW91ciBzZWNvbmQgc3VibWFyaW5lIVwiXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIkVudGVyIHlvdXIgbmFtZSDwn5iIXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNldHVwSW5mbyhpbmRleCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHVwLWFyZWFcIik7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGV4dC5pbm5lckhUTUwgPSBnZXRTZXR1cFRleHQoaW5kZXgpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgaWYgKGluZGV4ID49IDAgfHwgaW5kZXggPD0gNikge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiUm90YXRlIFNoaXBcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItbmFtZVwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicGxheWVyLW5hbWVcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJZb3VyIG5hbWVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTdWJtaXRcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUdXJuSW5mbyhuYW1lKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dXAtYXJlYVwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LmlubmVySFRNTCA9IGAke25hbWV9J3MgdHVybiFgO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXaW5JbmZvKG5hbWUpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR1cC1hcmVhXCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHQuaW5uZXJIVE1MID0gYCR7bmFtZX0gd2lucyEg4pyoYDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5Qm9hcmRzLCB1cGRhdGVTcXVhcmUsIGdldFNxdWFyZSwgZGlzcGxheVBsYXllclNoaXBzLCBkaXNwbGF5U2V0dXBJbmZvLCBkaXNwbGF5VHVybkluZm8sIGRpc3BsYXlXaW5JbmZvIH07IiwiaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBjcmVhdGVHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBkaXNwbGF5Qm9hcmRzLCB1cGRhdGVTcXVhcmUsIGdldFNxdWFyZSwgZGlzcGxheVBsYXllclNoaXBzLCBkaXNwbGF5U2V0dXBJbmZvLCBkaXNwbGF5VHVybkluZm8sIGRpc3BsYXlXaW5JbmZvIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgaW5jbHVkZXNBcnJheSB9IGZyb20gXCIuL2luY2x1ZGVzQXJyYXlcIjtcblxuZnVuY3Rpb24gYWRkQ2xpY2tIYW5kbGVyKHBsYXllciwgY29tcHV0ZXIsIGRpdkJvYXJkLCBzaXplID0gMTApIHtcbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgcGxheWVyVHVybihldmVudCwgcGxheWVyLCBjb21wdXRlciwgZGl2Qm9hcmQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjb25zdCBtYXJrZWRTcXVhcmVzID0gY29tcHV0ZXIuZ2FtZWJvYXJkLm1hcmtlZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgaWYgKCFpbmNsdWRlc0FycmF5KG1hcmtlZFNxdWFyZXMsIFtpLCBqXSkpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZ2V0U3F1YXJlKFtpLCBqXSwgdHJ1ZSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ29tcHV0ZXJNb3VzZW92ZXJIYW5kbGVyKGNvbXB1dGVyLCBzaXplID0gMTApIHtcbiAgY29uc3QgbW91c2VvdmVySGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrLWhpZ2hsaWdodFwiKTtcbiAgfVxuXG4gIGNvbnN0IG1vdXNlb3V0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrLWhpZ2hsaWdodFwiKTtcbiAgfVxuXG4gIGNvbnN0IG1hcmtlZFNxdWFyZXMgPSBjb21wdXRlci5nYW1lYm9hcmQubWFya2VkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBpZiAoIWluY2x1ZGVzQXJyYXkobWFya2VkU3F1YXJlcywgW2ksIGpdKSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBnZXRTcXVhcmUoW2ksIGpdLCB0cnVlKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VvdmVySGFuZGxlcik7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbW91c2VvdXRIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRUdXJuKHsgcGxheWVyLCBjb21wdXRlciB9KSB7XG4gIGRpc3BsYXlUdXJuSW5mbyhwbGF5ZXIubmFtZSk7XG4gIGNvbnN0IGRpdkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZC1jb21wdXRlclwiKTtcblxuICBhZGRDbGlja0hhbmRsZXIocGxheWVyLCBjb21wdXRlciwgZGl2Qm9hcmQpO1xuICBhZGRDb21wdXRlck1vdXNlb3ZlckhhbmRsZXIoY29tcHV0ZXIpO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKG5hbWUpIHtcbiAgZGlzcGxheVdpbkluZm8obmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyVHVybihwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gIGNvbnN0IGNvbXB1dGVyTW92ZSA9IGNvbXB1dGVyLm1ha2VNb3ZlKCk7XG4gIGNvbnN0IGlzSGl0ID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvbXB1dGVyTW92ZSk7XG4gIHVwZGF0ZVNxdWFyZShpc0hpdCwgZ2V0U3F1YXJlKGNvbXB1dGVyTW92ZSwgZmFsc2UpKTtcbiAgaWYgKHBsYXllci5nYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBlbmRHYW1lKGNvbXB1dGVyLm5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBzdGFydFR1cm4oeyBwbGF5ZXIsIGNvbXB1dGVyIH0pIH0sIDUwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlciwgc2l6ZSA9IDEwKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGdldFNxdWFyZShbaSwgal0sIHRydWUpO1xuICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVNb3VzZW92ZXJIYW5kbGVyKHNpemUgPSAxMCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBjb25zdCBvbGRTcSA9IGdldFNxdWFyZShbaSwgal0sIHRydWUpO1xuICAgICAgY29uc3QgbmV3U3EgPSBvbGRTcS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBuZXdTcS5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrLWhpZ2hsaWdodFwiKTtcbiAgICAgIG9sZFNxLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxLCBvbGRTcSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBsYXllclR1cm4oZXZlbnQsIHBsYXllciwgY29tcHV0ZXIsIGRpdkJvYXJkLCBjbGlja0hhbmRsZXIpIHtcbiAgY29uc3Qgc3RyID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvb3JkaW5hdGVzXCIpO1xuICBjb25zdCBjb29yZGluYXRlcyA9IHN0ci5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gIGNvbnN0IGlzSGl0ID0gY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICB1cGRhdGVTcXVhcmUoaXNIaXQsIGV2ZW50LnRhcmdldCk7XG5cbiAgcmVtb3ZlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlcik7XG4gIHJlbW92ZU1vdXNlb3ZlckhhbmRsZXIoKTtcblxuICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgZW5kR2FtZShwbGF5ZXIubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheVR1cm5JbmZvKGNvbXB1dGVyLm5hbWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb21wdXRlclR1cm4ocGxheWVyLCBjb21wdXRlcikgfSwgMTAwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2hpcExlbmd0aChpbmRleCkge1xuICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIDU7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIDQ7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIDM7XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiAyO1xuICAgIGNhc2UgNTpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gMTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXAoZXZlbnQsIGxlbmd0aCwgaXNWZXJ0aWNhbCwgc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IHN0ciA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb29yZGluYXRlc1wiKTtcbiAgY29uc3QgW3gsIHldID0gc3RyLnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgY29uc3Qgc2hpcEVuZCA9IGlzVmVydGljYWwgPyB5ICsgbGVuZ3RoIDogeCArIGxlbmd0aDtcbiAgaWYgKHNoaXBFbmQgPD0gc2l6ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gaXNWZXJ0aWNhbCA/IFt4LCB5ICsgaV0gOiBbeCArIGksIHldO1xuICAgICAgY29uc3Qgc3F1YXJlID0gZ2V0U3F1YXJlKGNvb3JkaW5hdGVzLCBmYWxzZSk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYWNlLXNoaXAtaGlnaGxpZ2h0XCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclNoaXAoZXZlbnQsIGxlbmd0aCwgaXNWZXJ0aWNhbCwgc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IHN0ciA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb29yZGluYXRlc1wiKTtcbiAgY29uc3QgW3gsIHldID0gc3RyLnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgY29uc3Qgc2hpcEVuZCA9IGlzVmVydGljYWwgPyB5ICsgbGVuZ3RoIDogeCArIGxlbmd0aDtcbiAgaWYgKHNoaXBFbmQgPD0gc2l6ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gaXNWZXJ0aWNhbCA/IFt4LCB5ICsgaV0gOiBbeCArIGksIHldO1xuICAgICAgY29uc3Qgc3F1YXJlID0gZ2V0U3F1YXJlKGNvb3JkaW5hdGVzLCBmYWxzZSk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNlLXNoaXAtaGlnaGxpZ2h0XCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXAoZXZlbnQsIHBsYXllciwgY29tcHV0ZXIsIGluZGV4LCBsZW5ndGgsIGlzVmVydGljYWwsIG1vdXNlb3ZlckhhbmRsZXIsIG1vdXNlb3V0SGFuZGxlciwgY2xpY2tIYW5kbGVyLCBzaXplID0gMTApIHtcbiAgcmVtb3ZlU2hpcFBsYWNlbWVudExpc3RlbmVycyhtb3VzZW92ZXJIYW5kbGVyLCBtb3VzZW91dEhhbmRsZXIsIGNsaWNrSGFuZGxlcik7XG5cbiAgY29uc3Qgc3RyID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvb3JkaW5hdGVzXCIpO1xuICBjb25zdCBbeCwgeV0gPSBzdHIuc3BsaXQoXCItXCIpLm1hcChOdW1iZXIpO1xuICBjb25zdCBzaGlwRW5kID0gaXNWZXJ0aWNhbCA/IHkgKyBsZW5ndGggOiB4ICsgbGVuZ3RoO1xuICBpZiAoc2hpcEVuZCA8PSBzaXplKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBpc1ZlcnRpY2FsID8gW3gsIHkgKyBpXSA6IFt4ICsgaSwgeV07XG4gICAgICBjb25zdCBzcXVhcmUgPSBnZXRTcXVhcmUoY29vcmRpbmF0ZXMsIGZhbHNlKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2Utc2hpcC1oaWdobGlnaHRcIik7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJlc3VsdCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2UoY3JlYXRlU2hpcCwgbGVuZ3RoLCBbeCwgeV0sIGlzVmVydGljYWwpO1xuICBkaXNwbGF5UGxheWVyU2hpcHMocGxheWVyLmdhbWVib2FyZC5zaGlwcyk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICBzZXR1cExvb3AocGxheWVyLCBjb21wdXRlciwgaW5kZXggKyAxKTtcbiAgfSBlbHNlIHtcbiAgICBzZXR1cExvb3AocGxheWVyLCBjb21wdXRlciwgaW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNoaXBQbGFjZW1lbnRMaXN0ZW5lcnMobW91c2VvdmVySGFuZGxlciwgbW91c2VvdXRIYW5kbGVyLCBjbGlja0hhbmRsZXIsIHNpemUgPSAxMCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBnZXRTcXVhcmUoW2ksIGpdLCBmYWxzZSk7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1vdXNlb3ZlckhhbmRsZXIpO1xuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdXNlb3V0SGFuZGxlcik7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU2hpcFBsYWNlbWVudExpc3RlbmVycyhtb3VzZW92ZXJIYW5kbGVyLCBtb3VzZW91dEhhbmRsZXIsIGNsaWNrSGFuZGxlciwgc2l6ZSA9IDEwKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGdldFNxdWFyZShbaSwgal0sIGZhbHNlKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VvdmVySGFuZGxlcik7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbW91c2VvdXRIYW5kbGVyKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cExvb3AocGxheWVyLCBjb21wdXRlciwgaW5kZXgpIHtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0U2hpcExlbmd0aChpbmRleCk7XG4gIGxldCBpc1ZlcnRpY2FsID0gdHJ1ZTtcblxuICBjb25zdCBtb3VzZW92ZXJIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgZGlzcGxheVNoaXAoZXZlbnQsIGxlbmd0aCwgaXNWZXJ0aWNhbCk7XG4gIH1cblxuICBjb25zdCBtb3VzZW91dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjbGVhclNoaXAoZXZlbnQsIGxlbmd0aCwgaXNWZXJ0aWNhbCk7XG4gIH1cblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBwbGFjZVNoaXAoZXZlbnQsIHBsYXllciwgY29tcHV0ZXIsIGluZGV4LCBsZW5ndGgsIGlzVmVydGljYWwsIG1vdXNlb3ZlckhhbmRsZXIsIG1vdXNlb3V0SGFuZGxlciwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIC8vIGNvbnRpbnVlL2V4aXQgc2V0dXBcbiAgaWYgKGluZGV4IDwgNykge1xuICAgIC8vIHNldHVwIGFyZWEgdGV4dCAmIHNoaXAgcm90YXRpb25cbiAgICBkaXNwbGF5U2V0dXBJbmZvKGluZGV4KTtcbiAgICBjb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICAgICAgaXNWZXJ0aWNhbCA9ICFpc1ZlcnRpY2FsO1xuICAgICAgcmVtb3ZlU2hpcFBsYWNlbWVudExpc3RlbmVycyhtb3VzZW92ZXJIYW5kbGVyLCBtb3VzZW91dEhhbmRsZXIsIGNsaWNrSGFuZGxlcik7XG4gICAgICBhZGRTaGlwUGxhY2VtZW50TGlzdGVuZXJzKG1vdXNlb3ZlckhhbmRsZXIsIG1vdXNlb3V0SGFuZGxlciwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgY29uc3Qgc2V0dXBBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR1cC1hcmVhXCIpO1xuICAgIGNvbnN0IGJ0biA9IHNldHVwQXJlYS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlU2hpcCk7XG4gICAgLy8gc3F1YXJlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGFkZFNoaXBQbGFjZW1lbnRMaXN0ZW5lcnMobW91c2VvdmVySGFuZGxlciwgbW91c2VvdXRIYW5kbGVyLCBjbGlja0hhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZVNoaXBQbGFjZW1lbnRMaXN0ZW5lcnMobW91c2VvdmVySGFuZGxlciwgbW91c2VvdXRIYW5kbGVyLCBjbGlja0hhbmRsZXIpO1xuICAgIHN0YXJ0VHVybih7IHBsYXllciwgY29tcHV0ZXIgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VDb21wdXRlclNoaXBzKGNvbXB1dGVyLCBzaXplID0gMTApIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4ICs9IDEpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBkbyB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSldXG4gICAgICBjb25zdCBpc1ZlcnRpY2FsID0gKE1hdGgucmFuZG9tKCkgPiAwLjUpO1xuICAgICAgcmVzdWx0ID0gY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlKGNyZWF0ZVNoaXAsIGdldFNoaXBMZW5ndGgoaW5kZXgpLCBjb29yZGluYXRlcywgaXNWZXJ0aWNhbCk7XG4gICAgfSB3aGlsZSAoIXJlc3VsdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBQbGF5ZXIoKSB7XG4gIGRpc3BsYXlTZXR1cEluZm8oKTtcbiAgY29uc3Qgc2V0dXBBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR1cC1hcmVhXCIpO1xuICBjb25zdCBuYW1lRm9ybSA9IHNldHVwQXJlYS5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuICBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGb3JtLmVsZW1lbnRzW1wicGxheWVyLW5hbWVcIl0udmFsdWU7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgcGxheWVyID0gY3JlYXRlUGxheWVyKHBsYXllckdhbWVib2FyZCwgbmFtZSk7XG5cbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKGNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpO1xuXG4gICAgc2V0dXBMb29wKHBsYXllciwgY29tcHV0ZXIsIDApO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBkaXNwbGF5Qm9hcmRzKCk7XG4gIHNldHVwUGxheWVyKClcbn0iLCJpbXBvcnQgeyBjb21wYXJlLCBpbmNsdWRlc0FycmF5IH0gZnJvbSBcIi4vaW5jbHVkZXNBcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoc2l6ZSA9IDEwLCBzaGlwcyA9IFtdLCBtaXNzZXMgPSBbXSwgbWFya2VkID0gW10pIHtcblxuICBmdW5jdGlvbiBpc091dHNpZGVCb2FyZChbeCwgeV0sIGxlbmd0aCA9IDEsIGlzVmVydGljYWwgPSB0cnVlKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gaXNWZXJ0aWNhbCA/IFt4LCB5ICsgaW5kZXhdIDogW3ggKyBpbmRleCwgeV07XG5cbiAgICAgIGlmIChhIDwgMCB8fCBhID4gc2l6ZSAtIDEgfHwgYiA8IDAgfHwgYiA+IHNpemUgLSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBpc092ZXJPdGhlclNoaXBzKFt4LCB5XSwgbGVuZ3RoLCBpc1ZlcnRpY2FsKSB7XG4gICAgLy8gbWFrZSBjb29yZGluYXRlIGFycmF5IG9mIG5ldyBzaGlwXG4gICAgY29uc3Qgc2hpcENvb3JkQXJyID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gaXNWZXJ0aWNhbCA/IFt4LCB5ICsgaW5kZXhdIDogW3ggKyBpbmRleCwgeV07XG4gICAgICBzaGlwQ29vcmRBcnIucHVzaChbYSwgYl0pO1xuICAgIH1cblxuICAgIC8vIGdvIHRocm91Z2ggYWxsIGV4aXN0aW5nIHNoaXBzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwc1tpXTtcbiAgICAgIGNvbnN0IFtjdXJyZW50U2hpcFgsIGN1cnJlbnRTaGlwWV0gPSBjdXJyZW50U2hpcC5jb29yZGluYXRlcztcblxuICAgICAgLy8gZ28gdGhyb3VnaCBjb29yZGluYXRlIGFycmF5IG9mIGN1cnJlbnQgc2hpcFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcC5zaGlwLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IGN1cnJlbnRTaGlwLmlzVmVydGljYWwgPyBbY3VycmVudFNoaXBYLCBjdXJyZW50U2hpcFkgKyBqXSA6IFtjdXJyZW50U2hpcFggKyBqLCBjdXJyZW50U2hpcFldO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGFueSBjb29yZGluYXRlcyBvZiB0aGUgbmV3IHNoaXAgb3ZlcmxhcCB3aXRoIHRoZSBjdXJyZW50IHNoaXBcbiAgICAgICAgaWYgKGluY2x1ZGVzQXJyYXkoc2hpcENvb3JkQXJyLCBbYSwgYl0pKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2UoY3JlYXRlU2hpcCwgbGVuZ3RoLCBjb29yZGluYXRlcywgaXNWZXJ0aWNhbCkge1xuICAgIGlmIChpc091dHNpZGVCb2FyZChjb29yZGluYXRlcywgbGVuZ3RoLCBpc1ZlcnRpY2FsKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGlzT3Zlck90aGVyU2hpcHMoY29vcmRpbmF0ZXMsIGxlbmd0aCwgaXNWZXJ0aWNhbCkpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoKTtcbiAgICBjb25zdCBzaGlwT2JqID0ge1xuICAgICAgc2hpcCxcbiAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgaXNWZXJ0aWNhbFxuICAgIH07XG4gICAgc2hpcHMucHVzaChzaGlwT2JqKTtcbiAgICByZXR1cm4gc2hpcE9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soYXR0YWNrKSB7XG4gICAgaWYgKGlzT3V0c2lkZUJvYXJkKGF0dGFjaykpIHJldHVybiBmYWxzZTtcblxuICAgIG1hcmtlZC5wdXNoKGF0dGFjayk7XG5cbiAgICAvLyBnbyB0aHJvdWdoIGFsbCBleGlzdGluZyBzaGlwc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcHNbaV07XG4gICAgICBjb25zdCBbY3VycmVudFNoaXBYLCBjdXJyZW50U2hpcFldID0gY3VycmVudFNoaXAuY29vcmRpbmF0ZXM7XG5cbiAgICAgIC8vIGdvIHRocm91Z2ggY29vcmRpbmF0ZSBhcnJheSBvZiBjdXJyZW50IHNoaXBcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXAuc2hpcC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGN1cnJlbnRTaGlwLmlzVmVydGljYWwgPyBbY3VycmVudFNoaXBYLCBjdXJyZW50U2hpcFkgKyBqXSA6IFtjdXJyZW50U2hpcFggKyBqLCBjdXJyZW50U2hpcFldO1xuXG4gICAgICAgIGlmIChjb21wYXJlKGNvb3JkaW5hdGVzLCBhdHRhY2spKSB7IFxuICAgICAgICAgIGN1cnJlbnRTaGlwLnNoaXAuaGl0KCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtaXNzZXMucHVzaChhdHRhY2spO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzW2ldO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGN1cnJlbnRTaGlwLnNoaXAuaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4geyBzaGlwcywgcGxhY2UsIHJlY2VpdmVBdHRhY2ssIG1pc3NlcywgYXJlQWxsU2hpcHNTdW5rLCBtYXJrZWQgfVxufSIsImZ1bmN0aW9uIGNvbXBhcmUoYXJyMSwgYXJyMikge1xuICAvLyBhc3N1bWVzIHNhbWUgbnVtYmVyIG9mIGVsZW1lbnRzXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIxLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGlmIChhcnIxW2luZGV4XSAhPT0gYXJyMltpbmRleF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGluY2x1ZGVzQXJyYXkoc291cmNlQXJyYXksIHNlYXJjaEVsZW1lbnQpIHtcbiAgLy8gYXNzdW1lcyBzYW1lIG51bWJlciBvZiBlbGVtZW50c1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc291cmNlQXJyYXkubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgaWYgKGNvbXBhcmUoc291cmNlQXJyYXlbaW5kZXhdLCBzZWFyY2hFbGVtZW50KSkgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBjb21wYXJlLCBpbmNsdWRlc0FycmF5IH0iLCJpbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICBtZXRhLnNldEF0dHJpYnV0ZSgnbmFtZScsICd2aWV3cG9ydCcpO1xuICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YSk7XG4gIFxuICBzdGFydEdhbWUoKTtcbn1cbiIsImltcG9ydCB7IGluY2x1ZGVzQXJyYXkgfSBmcm9tIFwiLi9pbmNsdWRlc0FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcihnYW1lYm9hcmQsIG5hbWUgPSBcIkNodXVcIikge1xuICBjb25zdCBtb3ZlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG1ha2VNb3ZlKHNpemUgPSAxMCkge1xuICAgIGxldCBtb3ZlID0gW107XG4gICAgZG8ge1xuICAgICAgbW92ZSA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSldO1xuICAgICAgaWYgKCFpbmNsdWRlc0FycmF5KG1vdmVzLCBtb3ZlKSkge1xuICAgICAgICBtb3Zlcy5wdXNoKG1vdmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IHdoaWxlIChtb3Zlcy5sZW5ndGggPCBzaXplICogc2l6ZSk7IC8vIGluZmluaXRlIGxvb3AgZmFpbHNhZmU/IGlka1xuICAgIHJldHVybiBtb3ZlO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgZ2FtZWJvYXJkLCBtYWtlTW92ZSB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5ndGgsIHN0YXJ0aW5nSGl0cyA9IDApIHtcbiAgbGV0IGhpdHMgPSBzdGFydGluZ0hpdHM7XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gbGVuZ3RoID09PSBoaXRzO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHsgXG4gICAgaWYgKGhpdHMgPCBsZW5ndGgpIGhpdHMgKz0gMTtcbiAgfVxuXG4gIHJldHVybiB7IGxlbmd0aCwgZ2V0IGhpdFRvdGFsKCkgeyByZXR1cm4gaGl0czsgfSwgaXNTdW5rLCBoaXQgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==