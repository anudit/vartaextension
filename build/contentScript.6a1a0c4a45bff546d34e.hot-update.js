"use strict";
self["webpackHotUpdateconvoextension"]("contentScript",{

/***/ "./src/pages/Content/sections/personal.jsx":
/*!*************************************************!*\
  !*** ./src/pages/Content/sections/personal.jsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Base */ "./src/components/Base.jsx");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Icons */ "./src/components/Icons.jsx");
/* harmony import */ var _components_ThreadView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ThreadView */ "./src/components/ThreadView.jsx");
/* harmony import */ var _components_TabShell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/TabShell */ "./src/components/TabShell.jsx");
/* harmony import */ var _contexts_Web3Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../contexts/Web3Context */ "./src/contexts/Web3Context.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _templateObject,
    _templateObject2,
    _jsxFileName = "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\pages\\Content\\sections\\personal.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var Input = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].input(_templateObject || (_templateObject = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    width: 100%;\n    margin: 4px;\n    border-radius: 10px;\n    border: none;\n    height: 30px;\n"])));
var IconButton = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button(_templateObject2 || (_templateObject2 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    width: ", "px !important;\n    height: ", "px !important;\n    display:flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    border-radius: 100px;\n    border:none;\n    padding: ", "px !important;\n"])), function (props) {
  return props.size === "sm" ? "54" : "50";
}, function (props) {
  return props.size === "sm" ? "40" : "50";
}, function (props) {
  return props.size === "sm" ? "4" : "8";
});

function Personal() {
  var _this = this;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_Web3Context__WEBPACK_IMPORTED_MODULE_9__.Web3Context),
      signerAddress = _useContext.signerAddress,
      convo = _useContext.convo,
      getAuthToken = _useContext.getAuthToken;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      _useState2 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      threads = _useState2[0],
      setThreads = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('home'),
      _useState4 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      activeScreen = _useState4[0],
      setActiveScreen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      _useState6 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      screenData = _useState6[0],
      setscreenData = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      _useState8 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      searchString = _useState8[0],
      setSearchString = _useState8[1];

  var searchInput = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var inputTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var inputDescriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var inputMembersRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var inputModeratorsRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var inputKeywordsRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var isReadPublicRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var isWritePublicRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    refreshThreads();
  }, []);

  function refreshThreads() {
    return _refreshThreads.apply(this, arguments);
  }

  function _refreshThreads() {
    _refreshThreads = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var threadsData, _threads;

      return D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return convo.threads.getUserThreads(signerAddress);

            case 2:
              threadsData = _context.sent;

              if (!((threadsData === null || threadsData === void 0 ? void 0 : threadsData.success) === true)) {
                _context.next = 12;
                break;
              }

              console.log(threadsData.member.toString());
              _context.next = 7;
              return convo.threads.getThreads(threadsData.member.toString());

            case 7:
              _threads = _context.sent;
              console.log(_threads.threads);
              setThreads(_threads.threads);
              _context.next = 13;
              break;

            case 12:
              setThreads([]);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _refreshThreads.apply(this, arguments);
  }

  function createThread() {
    return _createThread.apply(this, arguments);
  }

  function _createThread() {
    _createThread = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var token, url, resp;
      return D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getAuthToken();

            case 2:
              token = _context2.sent;
              url = window.location.origin + window.location.pathname;
              console.log({
                token: token,
                title: inputTitleRef.current.value,
                description: inputDescriptionRef.current.value,
                members: inputMembersRef.current.value.split(',').map(function (s) {
                  return s.trim();
                }),
                moderators: inputModeratorsRef.current.value.split(',').map(function (s) {
                  return s.trim();
                }),
                keywords: inputKeywordsRef.current.value.split(',').map(function (s) {
                  return s.trim();
                }),
                isReadPublic: isReadPublicRef.current.checked,
                isWritePublic: isWritePublicRef.current.checked
              });
              _context2.next = 7;
              return convo.threads.create(signerAddress, token, inputTitleRef.current.value, inputDescriptionRef.current.value, url, isReadPublicRef.current.checked, isWritePublicRef.current.checked, inputMembersRef.current.value.split(',').map(function (s) {
                return s.trim();
              }), inputModeratorsRef.current.value.split(',').map(function (s) {
                return s.trim();
              }), inputKeywordsRef.current.value.split(',').map(function (s) {
                return s.trim();
              }));

            case 7:
              resp = _context2.sent;
              console.log(resp);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _createThread.apply(this, arguments);
  }

  if (signerAddress === "") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_TabShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, "Login to view Private Threads.");
  } else if (activeScreen === 'home') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_TabShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      display: "flex",
      flexDirection: "row",
      marginTop: "5px",
      marginBottom: "5px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(IconButton, {
      onClick: function onClick() {
        setActiveScreen('create');
      },
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_6__.AddIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      ref: searchInput,
      onChange: function onChange() {
        setSearchString(searchInput.current.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(IconButton, {
      onClick: function onClick() {
        refreshThreads();
      },
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_6__.ReloadIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }))), Boolean(threads) === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }, "loading..."), Boolean(threads) === true && threads.length <= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, "No threads."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      display: "flex",
      flexDirection: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, "                    ", Boolean(threads) === true && threads.length > 0 && threads.map(function (t) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
        display: t.title.toLowerCase().includes(searchString.toLowerCase()) === true ? "flex" : "none",
        key: t._id,
        textAlign: "left",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingRight: "10px",
        paddingLeft: "10px",
        marginTop: "5px",
        marginBottom: "5px",
        marginRight: "5px",
        marginLeft: "5px",
        backgroundColor: "#ffffff42",
        borderRadius: "10px",
        cursor: "pointer",
        onClick: function onClick() {
          setActiveScreen('viewThread');
          setscreenData(t);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 29
        }
      }, decodeURIComponent(t.title));
    })));
  } else if (activeScreen === 'viewThread') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_TabShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      display: "flex",
      flexDirection: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      onClick: function onClick() {
        setActiveScreen('home');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 21
      }
    }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_ThreadView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      screenData: screenData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }));
  } else if (activeScreen === 'create') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_TabShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }, "title", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      defaultValue: "Title",
      ref: inputTitleRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }
    }), "description", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      defaultValue: "Desc",
      ref: inputDescriptionRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }), "members", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      defaultValue: "0x707aC3937A9B31C225D8C240F5917Be97cab9F20",
      ref: inputMembersRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    }), "moderators", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      defaultValue: "0x707aC3937A9B31C225D8C240F5917Be97cab9F20",
      ref: inputModeratorsRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }), "keywords", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      defaultValue: "one, two,3",
      ref: inputKeywordsRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }), "isReadPublic", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      type: "checkbox",
      ref: isReadPublicRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }), "isWritePublic", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      type: "checkbox",
      ref: isWritePublicRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Button, {
      onClick: createThread,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }, "CREATE"));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }
    }, "Personal Meesages");
  }
}

__signature__(Personal, "useContext{{ signerAddress, convo, getAuthToken }}\nuseState{[threads, setThreads](null)}\nuseState{[activeScreen, setActiveScreen]('home')}\nuseState{[screenData, setscreenData]({})}\nuseState{[searchString, setSearchString](\"\")}\nuseRef{searchInput}\nuseRef{inputTitleRef}\nuseRef{inputDescriptionRef}\nuseRef{inputMembersRef}\nuseRef{inputModeratorsRef}\nuseRef{inputKeywordsRef}\nuseRef{isReadPublicRef}\nuseRef{isWritePublicRef}\nuseEffect{}");

var _default = Personal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Input, "Input", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\pages\\Content\\sections\\personal.jsx");
  reactHotLoader.register(IconButton, "IconButton", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\pages\\Content\\sections\\personal.jsx");
  reactHotLoader.register(Personal, "Personal", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\pages\\Content\\sections\\personal.jsx");
  reactHotLoader.register(_default, "default", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\pages\\Content\\sections\\personal.jsx");
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
/******/ 	__webpack_require__.h = () => ("2aa5fe25099a61e090a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.6a1a0c4a45bff546d34e.hot-update.js.map