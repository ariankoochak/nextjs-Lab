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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _randomProducts_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/randomProducts/products */ \"./src/randomProducts/products.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ProductsPage() {\n    _s();\n    const router = useRouter();\n    const renderProducts = (products)=>{\n        return products.map((product)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: product.price\n                    }, void 0, false, {\n                        fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, product.name, true, {\n                fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n                lineNumber: 8,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    const handleClickProduct = (productId)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: renderProducts(_randomProducts_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    }, void 0, false, {\n        fileName: \"/Users/ariankoochak/Desktop/Code/nextjs-Lab/session-1/first-project/src/pages/products/index.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", true);\n_c = ProductsPage;\nvar _c;\n$RefreshReg$(_c, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3ZCO0FBRVYsU0FBU0U7O0lBQ3BCLE1BQU1DLFNBQVNDO0lBQ2YsTUFBTUMsaUJBQWlCLENBQUNMO1FBQ3BCLE9BQU9BLFNBQVNNLEdBQUcsQ0FBQyxDQUFDQztZQUNqQixxQkFBTyw4REFBQ0M7Z0JBQXVCQyxXQUFVOztrQ0FDckMsOERBQUNDO2tDQUFJSCxRQUFRSSxJQUFJOzs7Ozs7a0NBQ2pCLDhEQUFDQztrQ0FBSUwsUUFBUU0sS0FBSzs7Ozs7OztlQUZMTixRQUFRSSxJQUFJOzs7OztRQUlqQztJQUNKO0lBQ0EsTUFBTUcscUJBQXFCLENBQUNDLGFBRTVCO0lBQ0YscUJBQ0UsOERBQUNQO2tCQUFLSCxlQUFlTCxnRUFBUUE7Ozs7OztBQUVqQztHQWhCd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzeD8xNjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0cyBmcm9tICdAL3JhbmRvbVByb2R1Y3RzL3Byb2R1Y3RzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1BhZ2UoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcmVuZGVyUHJvZHVjdHMgPSAocHJvZHVjdHMpPT57XG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT57XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e3Byb2R1Y3QubmFtZX0gY2xhc3NOYW1lPSdwcm9kdWN0cy1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxoMj57cHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0LnByaWNlfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tQcm9kdWN0ID0gKHByb2R1Y3RJZCk9PntcblxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PntyZW5kZXJQcm9kdWN0cyhwcm9kdWN0cyl9PC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsIlJlYWN0IiwiUHJvZHVjdHNQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyUHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJuYW1lIiwiaDMiLCJwcmljZSIsImhhbmRsZUNsaWNrUHJvZHVjdCIsInByb2R1Y3RJZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/products/index.jsx\n"));

/***/ })

});