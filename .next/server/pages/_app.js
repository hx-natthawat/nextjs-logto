"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./libraries/fetch-json.ts":
/*!*********************************!*\
  !*** ./libraries/fetch-json.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchJson)\n/* harmony export */ });\nasync function fetchJson(input, init) {\n    const response = await fetch(input, init);\n    const data = await response.json();\n    if (response.ok) {\n        return data;\n    }\n    throw new Error(response.statusText);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJyYXJpZXMvZmV0Y2gtanNvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsU0FBUyxDQUNyQ0MsS0FBa0IsRUFDbEJDLElBQWtCLEVBQ0g7SUFDZixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxLQUFLLEVBQUVDLElBQUksQ0FBQztJQUV6QyxNQUFNRyxJQUFJLEdBQUksTUFBTUYsUUFBUSxDQUFDRyxJQUFJLEVBQUU7SUFFbkMsSUFBSUgsUUFBUSxDQUFDSSxFQUFFLEVBQUU7UUFDZixPQUFPRixJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxJQUFJRyxLQUFLLENBQUNMLFFBQVEsQ0FBQ00sVUFBVSxDQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYnJhcmllcy9mZXRjaC1qc29uLnRzPzUzY2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hKc29uPEpTT04gPSB1bmtub3duPihcbiAgaW5wdXQ6IFJlcXVlc3RJbmZvLFxuICBpbml0PzogUmVxdWVzdEluaXRcbik6IFByb21pc2U8SlNPTj4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGlucHV0LCBpbml0KTtcblxuICBjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgSlNPTjtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaEpzb24iLCJpbnB1dCIsImluaXQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libraries/fetch-json.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _libraries_fetch_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libraries/fetch-json */ \"./libraries/fetch-json.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {\n        value: {\n            fetcher: _libraries_fetch_json__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            onError: (error)=>{\n                console.error(error);\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/natthawatboonchaiseree/Desktop/Labs/Auth/nextjs-idp/pages/_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/natthawatboonchaiseree/Desktop/Labs/Auth/nextjs-idp/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ2dDO0FBRWdCO0FBRWhELE1BQU1FLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEdBQUs7SUFDcEQscUJBQ0UsOERBQUNKLDBDQUFTO1FBQ1JLLEtBQUssRUFBRTtZQUNMQyxPQUFPLEVBQUVMLDZEQUFTO1lBQ2xCTSxPQUFPLEVBQUUsQ0FBQ0MsS0FBSyxHQUFLO2dCQUNsQkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7U0FDRjtrQkFFRCw0RUFBQ0wsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O3FCQUFJOzs7OztpQkFDbEIsQ0FDWjtBQUNKLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gJ3N3cic7XG5cbmltcG9ydCBmZXRjaEpzb24gZnJvbSAnLi4vbGlicmFyaWVzL2ZldGNoLWpzb24nO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNXUkNvbmZpZ1xuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZmV0Y2hlcjogZmV0Y2hKc29uLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU1dSQ29uZmlnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU1dSQ29uZmlnIiwiZmV0Y2hKc29uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsImZldGNoZXIiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();