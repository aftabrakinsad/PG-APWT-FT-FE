"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/axios",{

/***/ "./pages/axios.js":
/*!************************!*\
  !*** ./pages/axios.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction APP() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function fetcUser() {\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/admin/index\");\n            setData(response.data);\n        } catch (error) {\n            console.error(\"The Error is\", error);\n        }\n    }\n    fetcUser();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: data.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Name: \",\n                                user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/axios.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/axios.js\",\n                            lineNumber: 26,\n                            columnNumber: 59\n                        }, this),\n                        user.email,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/axios.js\",\n                            lineNumber: 27,\n                            columnNumber: 37\n                        }, this),\n                        user.address,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/axios.js\",\n                            lineNumber: 29,\n                            columnNumber: 39\n                        }, this)\n                    ]\n                }, user.id, true, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/axios.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/axios.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/PG-APWT-FT-FE/pages/axios.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(APP, \"ZhdFFZzxrIZ1AkLU34uuoZfaEnY=\");\n_c = APP;\n/* harmony default export */ __webpack_exports__[\"default\"] = (APP);\nvar _c;\n$RefreshReg$(_c, \"APP\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9heGlvcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNYO0FBRTFCLFNBQVNHOztJQUVMLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2xDLGVBQWVLO1FBRVgsSUFDQTtZQUNJLE1BQU1DLFdBQVcsTUFBTUwsaURBQVMsQ0FBQztZQUNqQ0csUUFBUUUsU0FBU0gsSUFBSTtRQUN6QixFQUNBLE9BQU1LLE9BQ047WUFDSUMsUUFBUUQsS0FBSyxDQUFDLGdCQUFlQTtRQUNqQztJQUNKO0lBQ0FIO0lBQ0EscUJBQ0ksOERBQUNLO2tCQUNHLDRFQUFDQztzQkFFT1IsS0FBS1MsR0FBRyxDQUFDQyxDQUFBQSxxQkFDVCw4REFBQ0M7O3NDQUNHLDhEQUFDQzs7Z0NBQUs7Z0NBQU9GLEtBQUtHLFFBQVE7Ozs7Ozs7c0NBQVEsOERBQUNDOzs7Ozt3QkFDbENKLEtBQUtLLEtBQUs7c0NBQUMsOERBQUNEOzs7Ozt3QkFFWkosS0FBS00sT0FBTztzQ0FBQyw4REFBQ0Y7Ozs7OzttQkFKVkosS0FBS08sRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBV3BDO0dBaENTbEI7S0FBQUE7QUFpQ1QsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXhpb3MuanM/YzFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBBUFAoKVxue1xuICAgIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNVc2VyKClcbiAgICB7XG4gICAgICAgIHRyeVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FkbWluL2luZGV4Jyk7XG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgRXJyb3IgaXMnLGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmZXRjVXNlcigpO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKHVzZXIgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmFtZToge3VzZXIudXNlcm5hbWV9PC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIuZW1haWx9PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3VzZXIucGFzc3dvcmR9PGJyPjwvYnI+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIuYWRkcmVzc308YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBBUFA7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkFQUCIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y1VzZXIiLCJyZXNwb25zZSIsImdldCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInVsIiwibWFwIiwidXNlciIsImxpIiwic3BhbiIsInVzZXJuYW1lIiwiYnIiLCJlbWFpbCIsImFkZHJlc3MiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/axios.js\n"));

/***/ })

});