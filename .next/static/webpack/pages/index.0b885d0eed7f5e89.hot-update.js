"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import { Inter } from 'next/font/google'\n// import Link from 'next/link'\n// const inter = Inter({ subsets: ['latin'] })\n// export default function Home() {\n//   return (\n//     <div>\n//       <h1 className=\"text-4xl font-bold text-center\">Welcome to Home</h1>\n//       <p className=\"text-center\">\n//         <Link href={'/Login/login'}>Login</Link>\n//         <br></br>\n//         <Link href={'/Registration/registration'}>Registration</Link>\n//       </p>\n//     </div>\n//   )\n// }\n\nvar _s = $RefreshSig$();\n\nfunction ChatBox() {\n    _s();\n    const [user1, setUser1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user2, setUser2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user1Messages, setUser1Messages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user2Messages, setUser2Messages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const user1SendMessage = (e)=>{\n        e.preventDefault();\n        setUser1Messages([\n            ...user1Messages,\n            user1\n        ]);\n        setUser1(\"\");\n    };\n    const user2SendMessage = (e)=>{\n        e.preventDefault();\n        setUser2Messages([\n            ...user2Messages,\n            user2\n        ]);\n        setUser2(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"fm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"user1\",\n                        value: user1,\n                        onChange: (e)=>setUser1(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"btn-user1\",\n                        onClick: user1SendMessage,\n                        children: \"User1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 73\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 79\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 85\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"user2\",\n                        value: user2,\n                        onChange: (e)=>setUser2(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"btn-user2\",\n                        onClick: user2SendMessage,\n                        children: \"User2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Entered Values:\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Aftab:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 10\n                    }, this),\n                    \" \",\n                    user1\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \":\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 10\n                    }, this),\n                    \" \",\n                    user2\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sent Messages:\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"User1:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    user1Messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: message\n                        }, index, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 48\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"User2:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    user2Messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: message\n                        }, index, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 48\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBox, \"lvjjI46xdhAxYyp30TNS5P/WP0I=\");\n_c = ChatBox;\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQywrQkFBK0I7QUFFL0IsOENBQThDO0FBRTlDLG1DQUFtQztBQUNuQyxhQUFhO0FBQ2IsWUFBWTtBQUNaLDRFQUE0RTtBQUM1RSxvQ0FBb0M7QUFDcEMsbURBQW1EO0FBQ25ELG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsYUFBYTtBQUNiLGFBQWE7QUFDYixNQUFNO0FBQ04sSUFBSTs7O0FBRW9DO0FBRXpCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUVyRCxNQUFNVSxtQkFBbUIsQ0FBQ0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJMLGlCQUFpQjtlQUFJRDtZQUFlSjtTQUFNO1FBQzFDQyxTQUFTO0lBQ1g7SUFFQSxNQUFNVSxtQkFBbUIsQ0FBQ0Y7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJILGlCQUFpQjtlQUFJRDtZQUFlSjtTQUFNO1FBQzFDQyxTQUFTO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ1M7OzBCQUNDLDhEQUFDQztnQkFBS0MsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFRQyxPQUFPbEI7d0JBQU9tQixVQUFVLENBQUNWLElBQU1SLFNBQVNRLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBR0csUUFBUTs7Ozs7O2tDQUMvRiw4REFBQ0M7d0JBQU9MLElBQUc7d0JBQVlNLFNBQVNmO2tDQUFrQjs7Ozs7O2tDQUFjLDhEQUFDZ0I7Ozs7O2tDQUFLLDhEQUFDQTs7Ozs7a0NBQUssOERBQUNBOzs7OztrQ0FDN0UsOERBQUNUO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFRQyxPQUFPaEI7d0JBQU9pQixVQUFVLENBQUNWLElBQU1OLFNBQVNNLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBR0csUUFBUTs7Ozs7O2tDQUMvRiw4REFBQ0M7d0JBQU9MLElBQUc7d0JBQVlNLFNBQVNaO2tDQUFrQjs7Ozs7Ozs7Ozs7OzBCQUVwRCw4REFBQ2M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O2tDQUFFLDhEQUFDQztrQ0FBTzs7Ozs7O29CQUFlO29CQUFFM0I7Ozs7Ozs7MEJBQzVCLDhEQUFDMEI7O2tDQUFFLDhEQUFDQztrQ0FBTzs7Ozs7O29CQUFVO29CQUFFekI7Ozs7Ozs7MEJBRXZCLDhEQUFDdUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2I7O2tDQUNDLDhEQUFDYztrQ0FBRSw0RUFBQ0M7c0NBQU87Ozs7Ozs7Ozs7O29CQUNWdkIsY0FBY3dCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFBVSw4REFBQ0o7c0NBQWVHOzJCQUFSQzs7Ozs7Ozs7Ozs7MEJBRWpELDhEQUFDbEI7O2tDQUNDLDhEQUFDYztrQ0FBRSw0RUFBQ0M7c0NBQU87Ozs7Ozs7Ozs7O29CQUNWckIsY0FBY3NCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFBVSw4REFBQ0o7c0NBQWVHOzJCQUFSQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkQ7R0F6Q3dCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIGNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gSG9tZTwvaDE+XG4vLyAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuLy8gICAgICAgICA8TGluayBocmVmPXsnL0xvZ2luL2xvZ2luJ30+TG9naW48L0xpbms+XG4vLyAgICAgICAgIDxicj48L2JyPlxuLy8gICAgICAgICA8TGluayBocmVmPXsnL1JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24nfT5SZWdpc3RyYXRpb248L0xpbms+XG4vLyAgICAgICA8L3A+XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcbi8vIH1cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRCb3goKSB7XG4gIGNvbnN0IFt1c2VyMSwgc2V0VXNlcjFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcjIsIHNldFVzZXIyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXIxTWVzc2FnZXMsIHNldFVzZXIxTWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyBcbiAgY29uc3QgW3VzZXIyTWVzc2FnZXMsIHNldFVzZXIyTWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyBcblxuICBjb25zdCB1c2VyMVNlbmRNZXNzYWdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VXNlcjFNZXNzYWdlcyhbLi4udXNlcjFNZXNzYWdlcywgdXNlcjFdKTsgXG4gICAgc2V0VXNlcjEoJycpO1xuICB9O1xuXG4gIGNvbnN0IHVzZXIyU2VuZE1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRVc2VyMk1lc3NhZ2VzKFsuLi51c2VyMk1lc3NhZ2VzLCB1c2VyMl0pOyBcbiAgICBzZXRVc2VyMignJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyMVwiIHZhbHVlPXt1c2VyMX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyMShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tdXNlcjFcIiBvbkNsaWNrPXt1c2VyMVNlbmRNZXNzYWdlfT5Vc2VyMTwvYnV0dG9uPjxiciAvPjxiciAvPjxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXIyXCIgdmFsdWU9e3VzZXIyfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIyKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi11c2VyMlwiIG9uQ2xpY2s9e3VzZXIyU2VuZE1lc3NhZ2V9PlVzZXIyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8aDI+RW50ZXJlZCBWYWx1ZXM6PC9oMj5cbiAgICAgIDxwPjxzdHJvbmc+QWZ0YWI6PC9zdHJvbmc+IHt1c2VyMX08L3A+XG4gICAgICA8cD48c3Ryb25nPjo8L3N0cm9uZz4ge3VzZXIyfTwvcD5cbiAgICAgIFxuICAgICAgPGgyPlNlbnQgTWVzc2FnZXM6PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPjxzdHJvbmc+VXNlcjE6PC9zdHJvbmc+PC9wPlxuICAgICAgICB7dXNlcjFNZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiA8cCBrZXk9e2luZGV4fT57bWVzc2FnZX08L3A+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+PHN0cm9uZz5Vc2VyMjo8L3N0cm9uZz48L3A+XG4gICAgICAgIHt1c2VyMk1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IDxwIGtleT17aW5kZXh9PnttZXNzYWdlfTwvcD4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hhdEJveCIsInVzZXIxIiwic2V0VXNlcjEiLCJ1c2VyMiIsInNldFVzZXIyIiwidXNlcjFNZXNzYWdlcyIsInNldFVzZXIxTWVzc2FnZXMiLCJ1c2VyMk1lc3NhZ2VzIiwic2V0VXNlcjJNZXNzYWdlcyIsInVzZXIxU2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyMlNlbmRNZXNzYWdlIiwiZGl2IiwiZm9ybSIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsImJyIiwiaDIiLCJwIiwic3Ryb25nIiwibWFwIiwibWVzc2FnZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});