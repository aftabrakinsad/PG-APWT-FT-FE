/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Registration/registration",{

/***/ "./pages/Registration/registration.js":
/*!********************************************!*\
  !*** ./pages/Registration/registration.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import React, { useState } from 'react';\n// import axios from 'axios';\n// const RegistrationForm = () => {\n//   const [username, setUsername] = useState('');\n//   const [email, setEmail] = useState('');\n//   const [password, setPassword] = useState('');\n//   const [address, setAddress] = useState('');\n//   const handleSubmit = async (e) => {\n//     e.preventDefault();\n//     try {\n//       const response = await axios.post('http://localhost:3001/admin/signup', {\n//         username,\n//         email,\n//         password,\n//         address,\n//       });\n//       console.log('Registration response:', response.data);\n//       // Handle success, perhaps redirect to a success page\n//     } catch (error) {\n//       console.error('Registration error:', error);\n//       // Handle error, display a message to the user, etc.\n//     }\n//   };\n//   return (\n//     <div className=\"flex justify-center items-center h-screen\">\n//       <form className=\"w-full max-w-sm p-6 bg-white rounded-lg shadow-md\">\n//         <h2 className=\"text-2xl mb-4\">Register</h2>\n//         <div className=\"mb-4\">\n//           <label htmlFor=\"username\" className=\"block text-gray-700 font-medium mb-1\">\n//             Username\n//           </label>\n//           <input\n//             type=\"text\"\n//             id=\"username\"\n//             className=\"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\"\n//             value={username}\n//             onChange={(e) => setUsername(e.target.value)}\n//             required\n//           />\n//         </div>\n//         <div className=\"mb-4\">\n//           <label htmlFor=\"email\" className=\"block text-gray-700 font-medium mb-1\">\n//             Email\n//           </label>\n//           <input\n//             type=\"email\"\n//             id=\"email\"\n//             className=\"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\"\n//             value={email}\n//             onChange={(e) => setEmail(e.target.value)}\n//             required\n//           />\n//         </div>\n//         <div className=\"mb-4\">\n//           <label htmlFor=\"password\" className=\"block text-gray-700 font-medium mb-1\">\n//             Password\n//           </label>\n//           <input\n//             type=\"password\"\n//             id=\"password\"\n//             className=\"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\"\n//             value={password}\n//             onChange={(e) => setPassword(e.target.value)}\n//             required\n//           />\n//         </div>\n//         <div className=\"mb-4\">\n//           <label htmlFor=\"address\" className=\"block text-gray-700 font-medium mb-1\">\n//             Address\n//           </label>\n//           <textarea\n//             id=\"address\"\n//             className=\"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\"\n//             value={address}\n//             onChange={(e) => setAddress(e.target.value)}\n//             required\n//           />\n//         </div>\n//         <button\n//           type=\"submit\"\n//           className=\"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300\"\n//           onClick={handleSubmit}>Register\n//         </button>\n//       </form>\n//     </div>\n//   );\n// };\n// export default RegistrationForm;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQyw2QkFBNkI7QUFFN0IsbUNBQW1DO0FBQ25DLGtEQUFrRDtBQUNsRCw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBQ2xELGdEQUFnRDtBQUVoRCx3Q0FBd0M7QUFDeEMsMEJBQTBCO0FBQzFCLFlBQVk7QUFDWixrRkFBa0Y7QUFDbEYsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFFWiw4REFBOEQ7QUFDOUQsOERBQThEO0FBQzlELHdCQUF3QjtBQUN4QixxREFBcUQ7QUFDckQsNkRBQTZEO0FBQzdELFFBQVE7QUFDUixPQUFPO0FBRVAsYUFBYTtBQUNiLGtFQUFrRTtBQUNsRSw2RUFBNkU7QUFDN0Usc0RBQXNEO0FBQ3RELGlDQUFpQztBQUNqQyx3RkFBd0Y7QUFDeEYsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1QixzR0FBc0c7QUFDdEcsK0JBQStCO0FBQy9CLDREQUE0RDtBQUM1RCx1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixpQ0FBaUM7QUFDakMscUZBQXFGO0FBQ3JGLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIsc0dBQXNHO0FBQ3RHLDRCQUE0QjtBQUM1Qix5REFBeUQ7QUFDekQsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsaUNBQWlDO0FBQ2pDLHdGQUF3RjtBQUN4Rix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLHNHQUFzRztBQUN0RywrQkFBK0I7QUFDL0IsNERBQTREO0FBQzVELHVCQUF1QjtBQUN2QixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGlDQUFpQztBQUNqQyx1RkFBdUY7QUFDdkYsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsMkJBQTJCO0FBQzNCLHNHQUFzRztBQUN0Ryw4QkFBOEI7QUFDOUIsMkRBQTJEO0FBQzNELHVCQUF1QjtBQUN2QixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsK0lBQStJO0FBQy9JLDRDQUE0QztBQUM1QyxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUVMLG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzPzljN2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcbi8vICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4vLyAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuLy8gICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbi8vICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuXG4vLyAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi9zaWdudXAnLCB7XG4vLyAgICAgICAgIHVzZXJuYW1lLFxuLy8gICAgICAgICBlbWFpbCxcbi8vICAgICAgICAgcGFzc3dvcmQsXG4vLyAgICAgICAgIGFkZHJlc3MsXG4vLyAgICAgICB9KTtcblxuLy8gICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdHJhdGlvbiByZXNwb25zZTonLCByZXNwb25zZS5kYXRhKTtcbi8vICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzLCBwZXJoYXBzIHJlZGlyZWN0IHRvIGEgc3VjY2VzcyBwYWdlXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlZ2lzdHJhdGlvbiBlcnJvcjonLCBlcnJvcik7XG4vLyAgICAgICAvLyBIYW5kbGUgZXJyb3IsIGRpc3BsYXkgYSBtZXNzYWdlIHRvIHRoZSB1c2VyLCBldGMuXG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlblwiPlxuLy8gICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNtIHAtNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNFwiPlJlZ2lzdGVyPC9oMj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4vLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gbWItMVwiPlxuLy8gICAgICAgICAgICAgVXNlcm5hbWVcbi8vICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuLy8gICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4vLyAgICAgICAgICAgICByZXF1aXJlZFxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbi8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4vLyAgICAgICAgICAgICBFbWFpbFxuLy8gICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuLy8gICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuLy8gICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4vLyAgICAgICAgICAgICByZXF1aXJlZFxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbi8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4vLyAgICAgICAgICAgICBQYXNzd29yZFxuLy8gICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuLy8gICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuLy8gICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4vLyAgICAgICAgICAgICByZXF1aXJlZFxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbi8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbi8vICAgICAgICAgICAgIEFkZHJlc3Ncbi8vICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgIDx0ZXh0YXJlYVxuLy8gICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4vLyAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cbi8vICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XG4vLyAgICAgICAgICAgICByZXF1aXJlZFxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTMwMFwiXG4vLyAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fT5SZWdpc3RlclxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Registration/registration.js\n"));

/***/ })

});