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
    _templateObject3,
    _jsxFileName = "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\pages\\Content\\sections\\personal.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var Input = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].input(_templateObject || (_templateObject = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    width: ", ";\n    margin-top: 4px;\n    margin-bottom: 4px;\n    border-radius: 5px;\n    border: none;\n    height: 30px;\n"])), function (props) {
  return Boolean(props.width) === true ? props.width : "100%";
});
var IconButton = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button(_templateObject2 || (_templateObject2 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    width: ", "px !important;\n    height: ", "px !important;\n    display:flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    border-radius: 100px;\n    border:none;\n    padding: ", "px !important;\n"])), function (props) {
  return props.size === "sm" ? "54" : "50";
}, function (props) {
  return props.size === "sm" ? "40" : "50";
}, function (props) {
  return props.size === "sm" ? "4" : "8";
});
var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button(_templateObject3 || (_templateObject3 = (0,D_Users_anudit_Documents_Github_convoextension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    border-radius: 10px;\n    width: ", ";\n    border: none;\n    margin-bottom:10px;\n    padding: 8px;\n    background-image: ", ";\n    background: ", ";\n    flex-direction:row;\n    min-height: ", ";\n    font-weight: 700;\n    display: flex;\n    justify-content: space-evenly;\n    align-items:center;\n    cursor:pointer;\n"])), function (props) {
  return Boolean(props.width) === true ? props.width : "";
}, function (props) {
  return Boolean(props.backgroundImage) === true ? props.backgroundImage : "";
}, function (props) {
  return Boolean(props.background) === true ? props.background : "";
}, function (props) {
  return Boolean(props.minH) === true ? props.minH : "50px";
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
        lineNumber: 111,
        columnNumber: 17
      }
    }, "Login to view Private Threads.");
  } else if (activeScreen === 'home') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_TabShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "row",
      marginTop: "5px",
      marginBottom: "5px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 121,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_6__.AddIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 124,
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
        lineNumber: 127,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_6__.ReloadIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }))), Boolean(threads) === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      "class": "loader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    })), Boolean(threads) === true && threads.length <= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, "No threads."), Boolean(threads) === true && threads.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
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
          lineNumber: 148,
          columnNumber: 37
        }
      }, decodeURIComponent(t.title));
    })));
  } else if (activeScreen === 'viewThread') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_TabShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      onClick: function onClick() {
        setActiveScreen('home');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }
    }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_ThreadView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      screenData: screenData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }));
  } else if (activeScreen === 'create') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_TabShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      margin: "10px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "row",
      textAlign: "center",
      marginBottom: "4px",
      justifyContent: "space-between",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      onClick: function onClick() {
        setActiveScreen('home');
      },
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 25
      }
    }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 25
      }
    }, "Create a New Thread"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      style: {
        margin: "0px",
        visibility: "hidden"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }, "Nodisp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      textAlign: "left",
      marginBottom: "4px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "97%",
      defaultValue: "Title",
      ref: inputTitleRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      textAlign: "left",
      marginBottom: "4px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "97%",
      defaultValue: "Desc",
      ref: inputDescriptionRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      textAlign: "left",
      marginBottom: "4px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, "Members"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "97%",
      defaultValue: "0x707aC3937A9B31C225D8C240F5917Be97cab9F20",
      ref: inputMembersRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      textAlign: "left",
      marginBottom: "4px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 25
      }
    }, "Moderators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "97%",
      defaultValue: "0x707aC3937A9B31C225D8C240F5917Be97cab9F20",
      ref: inputModeratorsRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      textAlign: "left",
      marginBottom: "4px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 25
      }
    }, "Keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "97%",
      defaultValue: "one, two,3",
      ref: inputKeywordsRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "row",
      alignItems: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      width: "50%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      type: "checkbox",
      ref: isReadPublicRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 29
      }
    }, "Read Public")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      flexDirection: "column",
      width: "50%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
      width: "100%",
      type: "checkbox",
      ref: isWritePublicRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 29
      }
    }, "Write Public"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ButtonStyled, {
      onClick: createThread,
      width: "97%",
      minH: "40px",
      background: "linear-gradient(163deg,rgb(0 255 72) -258.34%,rgb(133 231 137 / 47%) 100.95%);",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 21
      }
    }, "Create")));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
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
  reactHotLoader.register(ButtonStyled, "ButtonStyled", "D:\\Users\\anudit\\Documents\\Github\\convoextension\\src\\pages\\Content\\sections\\personal.jsx");
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
/******/ 	__webpack_require__.h = () => ("a09d70036629a5a656b0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.b405f98db84c2c2fa0f4.hot-update.js.map