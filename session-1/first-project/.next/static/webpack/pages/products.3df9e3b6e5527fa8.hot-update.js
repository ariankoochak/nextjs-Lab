"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/pages/products/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/products/index.jsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _randomProducts_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/randomProducts/products */ \"./src/randomProducts/products.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProductsPage() {\n    const renderProducts = (products)=>{\n        return products.map((product)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: product.price\n                    }, void 0, false, {\n                        fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, product.name, true, {\n                fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n                lineNumber: 7,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: renderProducts(_randomProducts_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    }, void 0, false, {\n        fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductsPage;\nvar _c;\n$RefreshReg$(_c, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDdkI7QUFFVixTQUFTRTtJQUNwQixNQUFNQyxpQkFBaUIsQ0FBQ0g7UUFDcEIsT0FBT0EsU0FBU0ksR0FBRyxDQUFDLENBQUNDO1lBQ2pCLHFCQUFPLDhEQUFDQztnQkFBdUJDLFdBQVU7O2tDQUNyQyw4REFBQ0M7a0NBQUlILFFBQVFJLElBQUk7Ozs7OztrQ0FDakIsOERBQUNDO2tDQUFJTCxRQUFRTSxLQUFLOzs7Ozs7O2VBRkxOLFFBQVFJLElBQUk7Ozs7O1FBSWpDO0lBQ0o7SUFDRixxQkFDRSw4REFBQ0g7a0JBQUtILGVBQWVILGdFQUFRQTs7Ozs7O0FBRWpDO0tBWndCRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9pbmRleC5qc3g/MTYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnQC9yYW5kb21Qcm9kdWN0cy9wcm9kdWN0cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKCkge1xuICAgIGNvbnN0IHJlbmRlclByb2R1Y3RzID0gKHByb2R1Y3RzKT0+e1xuICAgICAgICByZXR1cm4gcHJvZHVjdHMubWFwKChwcm9kdWN0KT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT0ncHJvZHVjdHMtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8aDI+e3Byb2R1Y3QubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz57cHJvZHVjdC5wcmljZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH0pXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+e3JlbmRlclByb2R1Y3RzKHByb2R1Y3RzKX08L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiUmVhY3QiLCJQcm9kdWN0c1BhZ2UiLCJyZW5kZXJQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm5hbWUiLCJoMyIsInByaWNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products/index.jsx\n"));

/***/ })

});