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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/pablo/Repositorios/site1/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Contador, {}, void 0, false, {\n                fileName: \"/home/pablo/Repositorios/site1/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pablo/Repositorios/site1/pages/index.js\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this);\n}\n_c = Home;\nfunction Contador() {\n    _s();\n    const [contador, setcontador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    function adicionarContador() {\n        setcontador(contador + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: contador\n            }, void 0, false, {\n                fileName: \"/home/pablo/Repositorios/site1/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onclick: adicionarContador,\n                children: \"Adicionar\"\n            }, void 0, false, {\n                fileName: \"/home/pablo/Repositorios/site1/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pablo/Repositorios/site1/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Contador, \"qichxDd/6IXrsBe6+aL65EB9S2I=\");\n_c1 = Contador;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Contador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFpQztBQUVqQyxTQUFTQyxPQUFPO0lBQ1oscUJBQU8sOERBQUNDOzswQkFDQSw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Ozs7Ozs7Ozs7O0FBRWI7S0FMU0g7QUFPVCxTQUFTRyxXQUFVOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6QyxTQUFTTyxvQkFBb0I7UUFDekJELFlBQVlELFdBQVc7SUFDM0I7SUFFQSxxQkFDSSw4REFBQ0g7OzBCQUNHLDhEQUFDQTswQkFBS0c7Ozs7OzswQkFDTiw4REFBQ0c7Z0JBQU9DLFNBQVNGOzBCQUFtQjs7Ozs7Ozs7Ozs7O0FBSWhEO0dBZFNIO01BQUFBO0FBbUJULCtEQUFlSCxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgICAgICA8Q29udGFkb3IgLz5cbiAgICAgICAgPC9kaXY+XG59XG5cbmZ1bmN0aW9uIENvbnRhZG9yKCl7XG4gICAgY29uc3QgW2NvbnRhZG9yLCBzZXRjb250YWRvcl0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGZ1bmN0aW9uIGFkaWNpb25hckNvbnRhZG9yKCkge1xuICAgICAgICBzZXRjb250YWRvcihjb250YWRvciArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2Pntjb250YWRvcn08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz17YWRpY2lvbmFyQ29udGFkb3J9PkFkaWNpb25hcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiZGl2IiwiaDEiLCJDb250YWRvciIsImNvbnRhZG9yIiwic2V0Y29udGFkb3IiLCJhZGljaW9uYXJDb250YWRvciIsImJ1dHRvbiIsIm9uY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});