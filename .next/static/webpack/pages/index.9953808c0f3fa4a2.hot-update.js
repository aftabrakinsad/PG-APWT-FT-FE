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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import { Inter } from 'next/font/google'\n// import Link from 'next/link'\n// const inter = Inter({ subsets: ['latin'] })\n// export default function Home() {\n//   return (\n//     <div>\n//       <h1 className=\"text-4xl font-bold text-center\">Welcome to Home</h1>\n//       <p className=\"text-center\">\n//         <Link href={'/Login/login'}>Login</Link>\n//         <br></br>\n//         <Link href={'/Registration/registration'}>Registration</Link>\n//       </p>\n//     </div>\n//   )\n// }\n\nvar _s = $RefreshSig$();\n\nfunction ChatBox() {\n    _s();\n    const [user1, setUser1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user2, setUser2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user1Messages, setuser1messages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user2Messages, setuser2messages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const user1messages = (e)=>{\n        setuser1messages([\n            ...user1Messages,\n            user1\n        ]);\n        setUser1(\"\");\n    };\n    const user2messages = (e)=>{\n        setuser2messages([\n            ...user2Messages,\n            user2\n        ]);\n        setUser2(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"fm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"user1\",\n                        value: user1,\n                        onChange: (e)=>setUser1(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"btn\",\n                        onClick: user1messages,\n                        children: \"User1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 64\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 70\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 76\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"user2\",\n                        value: user2,\n                        onChange: (e)=>setUser2(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"btn\",\n                        onClick: user2messages,\n                        children: \"User2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Entered Values:\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"User1:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 10\n                    }, this),\n                    \" \",\n                    user1\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"User2:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 10\n                    }, this),\n                    \" \",\n                    user2\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sent Messages:\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"User1:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    user1Messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: message\n                        }, index, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 48\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"User2:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    user2Messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: message\n                        }, index, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 48\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBox, \"hBhuujfsJjfiejIija09800KFcg=\");\n_c = ChatBox;\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQywrQkFBK0I7QUFFL0IsOENBQThDO0FBRTlDLG1DQUFtQztBQUNuQyxhQUFhO0FBQ2IsWUFBWTtBQUNaLDRFQUE0RTtBQUM1RSxvQ0FBb0M7QUFDcEMsbURBQW1EO0FBQ25ELG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsYUFBYTtBQUNiLGFBQWE7QUFDYixNQUFNO0FBQ04sSUFBSTs7O0FBRTZCO0FBRWxCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUVyRCxNQUFNVSxnQkFBZ0IsQ0FBQ0M7UUFBT0osaUJBQWlCO2VBQUlEO1lBQWVKO1NBQU07UUFDdEVDLFNBQVM7SUFBSztJQUVoQixNQUFNUyxnQkFBZ0IsQ0FBQ0Q7UUFBT0YsaUJBQWlCO2VBQUlEO1lBQWVKO1NBQU07UUFDdEVDLFNBQVM7SUFBSTtJQUVmLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLElBQUc7d0JBQVFDLE9BQU9qQjt3QkFBT2tCLFVBQVUsQ0FBQ1QsSUFBTVIsU0FBU1EsRUFBRVUsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBQ3BGLDhEQUFDRzt3QkFBT0osSUFBRzt3QkFBTUssU0FBU2I7a0NBQWU7Ozs7OztrQ0FBYyw4REFBQ2M7Ozs7O2tDQUFLLDhEQUFDQTs7Ozs7a0NBQUssOERBQUNBOzs7OztrQ0FDcEUsOERBQUNSO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFRQyxPQUFPZjt3QkFBT2dCLFVBQVUsQ0FBQ1QsSUFBTU4sU0FBU00sRUFBRVUsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBQ3BGLDhEQUFDRzt3QkFBT0osSUFBRzt3QkFBTUssU0FBU1g7a0NBQWU7Ozs7Ozs7Ozs7OzswQkFFM0MsOERBQUNhOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FBRSw4REFBQ0M7a0NBQU87Ozs7OztvQkFBZTtvQkFBRXpCOzs7Ozs7OzBCQUM1Qiw4REFBQ3dCOztrQ0FBRSw4REFBQ0M7a0NBQU87Ozs7OztvQkFBZTtvQkFBRXZCOzs7Ozs7OzBCQUU1Qiw4REFBQ3FCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNaOztrQ0FDQyw4REFBQ2E7a0NBQUUsNEVBQUNDO3NDQUFPOzs7Ozs7Ozs7OztvQkFDVnJCLGNBQWNzQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQVUsOERBQUNKO3NDQUFlRzsyQkFBUkM7Ozs7Ozs7Ozs7OzBCQUVqRCw4REFBQ2pCOztrQ0FDQyw4REFBQ2E7a0NBQUUsNEVBQUNDO3NDQUFPOzs7Ozs7Ozs7OztvQkFDVm5CLGNBQWNvQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQVUsOERBQUNKO3NDQUFlRzsyQkFBUkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZEO0dBbkN3QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBjb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5XZWxjb21lIHRvIEhvbWU8L2gxPlxuLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbi8vICAgICAgICAgPExpbmsgaHJlZj17Jy9Mb2dpbi9sb2dpbid9PkxvZ2luPC9MaW5rPlxuLy8gICAgICAgICA8YnI+PC9icj5cbi8vICAgICAgICAgPExpbmsgaHJlZj17Jy9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uJ30+UmVnaXN0cmF0aW9uPC9MaW5rPlxuLy8gICAgICAgPC9wPlxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRCb3goKSB7XG4gIGNvbnN0IFt1c2VyMSwgc2V0VXNlcjFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcjIsIHNldFVzZXIyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXIxTWVzc2FnZXMsIHNldHVzZXIxbWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyBcbiAgY29uc3QgW3VzZXIyTWVzc2FnZXMsIHNldHVzZXIybWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyBcblxuICBjb25zdCB1c2VyMW1lc3NhZ2VzID0gKGUpID0+IHtzZXR1c2VyMW1lc3NhZ2VzKFsuLi51c2VyMU1lc3NhZ2VzLCB1c2VyMV0pOyBcbiAgICBzZXRVc2VyMSgnJyk7IH07XG5cbiAgY29uc3QgdXNlcjJtZXNzYWdlcyA9IChlKSA9PiB7c2V0dXNlcjJtZXNzYWdlcyhbLi4udXNlcjJNZXNzYWdlcywgdXNlcjJdKTsgXG4gICAgc2V0VXNlcjIoJycpO307XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZtXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcjFcIiB2YWx1ZT17dXNlcjF9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcjEoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG5cIiBvbkNsaWNrPXt1c2VyMW1lc3NhZ2VzfT5Vc2VyMTwvYnV0dG9uPjxiciAvPjxiciAvPjxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXIyXCIgdmFsdWU9e3VzZXIyfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIyKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuXCIgb25DbGljaz17dXNlcjJtZXNzYWdlc30+VXNlcjI8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxoMj5FbnRlcmVkIFZhbHVlczo8L2gyPlxuICAgICAgPHA+PHN0cm9uZz5Vc2VyMTo8L3N0cm9uZz4ge3VzZXIxfTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+VXNlcjI6PC9zdHJvbmc+IHt1c2VyMn08L3A+XG4gICAgICBcbiAgICAgIDxoMj5TZW50IE1lc3NhZ2VzOjwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD48c3Ryb25nPlVzZXIxOjwvc3Ryb25nPjwvcD5cbiAgICAgICAge3VzZXIxTWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gPHAga2V5PXtpbmRleH0+e21lc3NhZ2V9PC9wPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPjxzdHJvbmc+VXNlcjI6PC9zdHJvbmc+PC9wPlxuICAgICAgICB7dXNlcjJNZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiA8cCBrZXk9e2luZGV4fT57bWVzc2FnZX08L3A+KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2hhdEJveCIsInVzZXIxIiwic2V0VXNlcjEiLCJ1c2VyMiIsInNldFVzZXIyIiwidXNlcjFNZXNzYWdlcyIsInNldHVzZXIxbWVzc2FnZXMiLCJ1c2VyMk1lc3NhZ2VzIiwic2V0dXNlcjJtZXNzYWdlcyIsInVzZXIxbWVzc2FnZXMiLCJlIiwidXNlcjJtZXNzYWdlcyIsImRpdiIsImZvcm0iLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJoMiIsInAiLCJzdHJvbmciLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});