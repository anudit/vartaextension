"use strict";
self["webpackHotUpdateconvoextension"]("contentScript",{

/***/ "./src/components/Base.jsx":
/*!*********************************!*\
  !*** ./src/components/Base.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flex": () => (/* binding */ Flex),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "IconButton": () => (/* binding */ IconButton),
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2, _templateObject3, _templateObject4;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Flex = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  background-color: ", ";\n   ", "\n   ", "\n   ", "\n   ", "\n   ", "\n   ", "\n   ", "\n   display: ", ";\n   cursor: ", ";\n   padding-top: ", ";\n   padding-bottom: ", ";\n   backdrop-filter: ", ";\n   overflow: ", ";\n   overflow-x: ", ";\n   overflow-y: ", ";\n   margin-bottom: ", ";\n   margin-top: ", ";\n   margin-right: ", ";\n   margin-left: ", ";\n"])), styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.width, styled_system__WEBPACK_IMPORTED_MODULE_2__.fontSize, styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.alignItems, styled_system__WEBPACK_IMPORTED_MODULE_2__.justifyContent, styled_system__WEBPACK_IMPORTED_MODULE_2__.textAlign, styled_system__WEBPACK_IMPORTED_MODULE_2__.zIndex, function (props) {
  return props.backgroundColor;
}, styled_system__WEBPACK_IMPORTED_MODULE_2__.position, styled_system__WEBPACK_IMPORTED_MODULE_2__.bottom, styled_system__WEBPACK_IMPORTED_MODULE_2__.right, styled_system__WEBPACK_IMPORTED_MODULE_2__.flexDirection, styled_system__WEBPACK_IMPORTED_MODULE_2__.height, styled_system__WEBPACK_IMPORTED_MODULE_2__.width, styled_system__WEBPACK_IMPORTED_MODULE_2__.border, function (props) {
  return Boolean(props.display) === true ? props.display : "flex";
}, function (props) {
  return props.cursor;
}, function (props) {
  return props.paddingTop || props.pt;
}, function (props) {
  return props.paddingBottom || props.pb;
}, function (props) {
  return props.backdropFilter;
}, function (props) {
  return props.overflow;
}, function (props) {
  return props.overflowX;
}, function (props) {
  return props.overflowY;
}, function (props) {
  return props.marginBottom || props.mb;
}, function (props) {
  return props.marginTop || props.mt;
}, function (props) {
  return props.marginRight || props.mr;
}, function (props) {
  return props.marginLeft || props.ml;
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject2 || (_templateObject2 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  background-color: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.width, styled_system__WEBPACK_IMPORTED_MODULE_2__.fontSize, styled_system__WEBPACK_IMPORTED_MODULE_2__.color, function (props) {
  return props.backgroundColor;
}, styled_system__WEBPACK_IMPORTED_MODULE_2__.zIndex, styled_system__WEBPACK_IMPORTED_MODULE_2__.position, styled_system__WEBPACK_IMPORTED_MODULE_2__.borderRadius, styled_system__WEBPACK_IMPORTED_MODULE_2__.right, styled_system__WEBPACK_IMPORTED_MODULE_2__.bottom, styled_system__WEBPACK_IMPORTED_MODULE_2__.height, styled_system__WEBPACK_IMPORTED_MODULE_2__.padding, styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.display);
var IconButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject3 || (_templateObject3 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: ", "px !important;\n    height: ", "px !important;\n    display:flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    border-radius: 100px;\n    filter: ", ";\n    border:none;\n    padding: ", "px !important;\n"])), function (props) {
  return props.size === "sm" ? "54" : "50";
}, function (props) {
  return props.size === "sm" ? "40" : "50";
}, function (props) {
  return Boolean(props.filter) === true ? props.filter : "";
}, function (props) {
  return props.size === "sm" ? "4" : "8";
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input(_templateObject4 || (_templateObject4 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: ", ";\n    padding: 3px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    border-radius: 5px;\n    border: none;\n    height: 30px;\n"])), function (props) {
  return Boolean(props.width) === true ? props.width : "100%";
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Flex, "Flex", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\components\\Base.jsx");
  reactHotLoader.register(Button, "Button", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\components\\Base.jsx");
  reactHotLoader.register(IconButton, "IconButton", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\components\\Base.jsx");
  reactHotLoader.register(Input, "Input", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\components\\Base.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f373cee285c7a6ff812c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.74f7f8c5bb7c095a3549.hot-update.js.map