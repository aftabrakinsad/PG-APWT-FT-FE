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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import { Inter } from 'next/font/google'\n// import Link from 'next/link'\n// const inter = Inter({ subsets: ['latin'] })\n// export default function Home() {\n//   return (\n//     <div>\n//       <h1 className=\"text-4xl font-bold text-center\">Welcome to Home</h1>\n//       <p className=\"text-center\">\n//         <Link href={'/Login/login'}>Login</Link>\n//         <br></br>\n//         <Link href={'/Registration/registration'}>Registration</Link>\n//       </p>\n//     </div>\n//   )\n// }\n\nvar _s = $RefreshSig$();\n\nfunction ChatBox() {\n    _s();\n    const [user1, setUser1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user2, setUser2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user1Messages, setUser1Messages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user2Messages, setUser2Messages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const user1SendMessage = (e)=>{\n        e.preventDefault();\n        setUser1Messages([\n            ...user1Messages,\n            user1\n        ]);\n        setUser1(\"\");\n    };\n    const user2SendMessage = (e)=>{\n        e.preventDefault();\n        setUser2Messages([\n            ...user2Messages,\n            user2\n        ]);\n        setUser2(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"fm\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Aftab's Screen:\"\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"user1\",\n                    value: user1,\n                    onChange: (e)=>setUser1(e.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"btn-user1\",\n                    onClick: user1SendMessage,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 72\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Aftab:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 12\n                        }, this),\n                        \" \",\n                        user1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Sadia:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        user2Messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: message\n                            }, index, false, {\n                                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 50\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Sadia's Screen:\"\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"user2\",\n                    value: user2,\n                    onChange: (e)=>setUser2(e.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"btn-user2\",\n                    onClick: user2SendMessage,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Sadia:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 14\n                            }, this),\n                            \" \",\n                            user2\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Aftab:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 14\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        user1Messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: message\n                            }, index, false, {\n                                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 50\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBox, \"lvjjI46xdhAxYyp30TNS5P/WP0I=\");\n_c = ChatBox;\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQywrQkFBK0I7QUFFL0IsOENBQThDO0FBRTlDLG1DQUFtQztBQUNuQyxhQUFhO0FBQ2IsWUFBWTtBQUNaLDRFQUE0RTtBQUM1RSxvQ0FBb0M7QUFDcEMsbURBQW1EO0FBQ25ELG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsYUFBYTtBQUNiLGFBQWE7QUFDYixNQUFNO0FBQ04sSUFBSTs7O0FBRW9DO0FBRXpCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUVyRCxNQUFNVSxtQkFBbUIsQ0FBQ0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJMLGlCQUFpQjtlQUFJRDtZQUFlSjtTQUFNO1FBQzFDQyxTQUFTO0lBQ1g7SUFFQSxNQUFNVSxtQkFBbUIsQ0FBQ0Y7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJILGlCQUFpQjtlQUFJRDtZQUFlSjtTQUFNO1FBQzFDQyxTQUFTO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ1M7a0JBQ0MsNEVBQUNDO1lBQUtDLFdBQVU7OzhCQUNkLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQztvQkFBTUMsTUFBSztvQkFBT0MsSUFBRztvQkFBUUMsT0FBT25CO29CQUFPb0IsVUFBVSxDQUFDWCxJQUFNUixTQUFTUSxFQUFFWSxNQUFNLENBQUNGLEtBQUs7b0JBQUdHLFFBQVE7Ozs7Ozs4QkFDL0YsOERBQUNDO29CQUFPTCxJQUFHO29CQUFZTSxTQUFTaEI7OEJBQWtCOzs7Ozs7OEJBQWEsOERBQUNpQjs7Ozs7OEJBQ2hFLDhEQUFDQzs7c0NBQUUsOERBQUNDO3NDQUFPOzs7Ozs7d0JBQWU7d0JBQUUzQjs7Ozs7Ozs4QkFDNUIsOERBQUMwQjs7c0NBQ0MsOERBQUNDO3NDQUFPOzs7Ozs7d0JBQ1ByQixjQUFjc0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUFVLDhEQUFDSjswQ0FBZUc7K0JBQVJDOzs7Ozs7Ozs7Ozs4QkFHakQsOERBQUNmOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFNQyxNQUFLO29CQUFPQyxJQUFHO29CQUFRQyxPQUFPakI7b0JBQU9rQixVQUFVLENBQUNYLElBQU1OLFNBQVNNLEVBQUVZLE1BQU0sQ0FBQ0YsS0FBSztvQkFBR0csUUFBUTs7Ozs7OzhCQUMvRiw4REFBQ0M7b0JBQU9MLElBQUc7b0JBQVlNLFNBQVNiOzhCQUFrQjs7Ozs7OzhCQUNsRCw4REFBQ0M7OEJBQ0MsNEVBQUNjOzswQ0FBRSw4REFBQ0M7MENBQU87Ozs7Ozs0QkFBZTs0QkFBRXpCOzs7Ozs7Ozs7Ozs7OEJBRTlCLDhEQUFDVTs7c0NBQ0MsOERBQUNjO3NDQUFFLDRFQUFDQzswQ0FBTzs7Ozs7Ozs7Ozs7d0JBQ1Z2QixjQUFjd0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUFVLDhEQUFDSjswQ0FBZUc7K0JBQVJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pEO0dBM0N3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBjb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5XZWxjb21lIHRvIEhvbWU8L2gxPlxuLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbi8vICAgICAgICAgPExpbmsgaHJlZj17Jy9Mb2dpbi9sb2dpbid9PkxvZ2luPC9MaW5rPlxuLy8gICAgICAgICA8YnI+PC9icj5cbi8vICAgICAgICAgPExpbmsgaHJlZj17Jy9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uJ30+UmVnaXN0cmF0aW9uPC9MaW5rPlxuLy8gICAgICAgPC9wPlxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Qm94KCkge1xuICBjb25zdCBbdXNlcjEsIHNldFVzZXIxXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXIyLCBzZXRVc2VyMl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VyMU1lc3NhZ2VzLCBzZXRVc2VyMU1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTsgXG4gIGNvbnN0IFt1c2VyMk1lc3NhZ2VzLCBzZXRVc2VyMk1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTsgXG5cbiAgY29uc3QgdXNlcjFTZW5kTWVzc2FnZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFVzZXIxTWVzc2FnZXMoWy4uLnVzZXIxTWVzc2FnZXMsIHVzZXIxXSk7IFxuICAgIHNldFVzZXIxKCcnKTtcbiAgfTtcblxuICBjb25zdCB1c2VyMlNlbmRNZXNzYWdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VXNlcjJNZXNzYWdlcyhbLi4udXNlcjJNZXNzYWdlcywgdXNlcjJdKTsgXG4gICAgc2V0VXNlcjIoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZtXCI+XG4gICAgICAgIDxoMj5BZnRhYidzIFNjcmVlbjo8L2gyPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXIxXCIgdmFsdWU9e3VzZXIxfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIxKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi11c2VyMVwiIG9uQ2xpY2s9e3VzZXIxU2VuZE1lc3NhZ2V9PlNlbmQ8L2J1dHRvbj48YnIvPlxuICAgICAgICA8cD48c3Ryb25nPkFmdGFiOjwvc3Ryb25nPiB7dXNlcjF9PC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPlNhZGlhOjwvc3Ryb25nPlxuICAgICAgICAgIHt1c2VyMk1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IDxwIGtleT17aW5kZXh9PnttZXNzYWdlfTwvcD4pfVxuICAgICAgICA8L3A+XG4gICAgICBcbiAgICAgICAgPGgyPlNhZGlhJ3MgU2NyZWVuOjwvaDI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcjJcIiB2YWx1ZT17dXNlcjJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcjIoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXVzZXIyXCIgb25DbGljaz17dXNlcjJTZW5kTWVzc2FnZX0+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPjxzdHJvbmc+U2FkaWE6PC9zdHJvbmc+IHt1c2VyMn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPjxzdHJvbmc+QWZ0YWI6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgIHt1c2VyMU1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IDxwIGtleT17aW5kZXh9PnttZXNzYWdlfTwvcD4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGF0Qm94IiwidXNlcjEiLCJzZXRVc2VyMSIsInVzZXIyIiwic2V0VXNlcjIiLCJ1c2VyMU1lc3NhZ2VzIiwic2V0VXNlcjFNZXNzYWdlcyIsInVzZXIyTWVzc2FnZXMiLCJzZXRVc2VyMk1lc3NhZ2VzIiwidXNlcjFTZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIyU2VuZE1lc3NhZ2UiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsInAiLCJzdHJvbmciLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});