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
exports.id = "pages/api/logto/[action]";
exports.ids = ["pages/api/logto/[action]"];
exports.modules = {

/***/ "@logto/next":
/*!******************************!*\
  !*** external "@logto/next" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@logto/next");;

/***/ }),

/***/ "(api)/./libraries/logto.ts":
/*!****************************!*\
  !*** ./libraries/logto.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logtoClient\": () => (/* binding */ logtoClient)\n/* harmony export */ });\n/* harmony import */ var _logto_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logto/next */ \"@logto/next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_logto_next__WEBPACK_IMPORTED_MODULE_0__]);\n_logto_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// libraries/logto.js\n\nconst logtoClient = new _logto_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    endpoint: \"http://localhost:3001/\",\n    appId: \"eb02slyii22pds2lam1tk\",\n    appSecret: \"1alooxeh28ykt349e2r28\",\n    baseUrl: \"http://localhost:3000\",\n    cookieSecret: \"nbsoh460xyj1zsl78ttf2zihovblx6iw\",\n    cookieSecure: \"development\" === \"production\"\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJyYXJpZXMvbG9ndG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDaUI7QUFFL0IsTUFBTUMsV0FBVyxHQUFHLElBQUlELG1EQUFXLENBQUM7SUFDekNFLFFBQVEsRUFBRSx3QkFBd0I7SUFDbENDLEtBQUssRUFBRSx1QkFBdUI7SUFDOUJDLFNBQVMsRUFBRSx1QkFBdUI7SUFDbENDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLFlBQVksRUFBRSxrQ0FBa0M7SUFDaERDLFlBQVksRUFBRUMsYUFUSCxLQVM0QixZQUFZO0NBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYnJhcmllcy9sb2d0by50cz82OTJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnJhcmllcy9sb2d0by5qc1xuaW1wb3J0IExvZ3RvQ2xpZW50IGZyb20gXCJAbG9ndG8vbmV4dFwiO1xuXG5leHBvcnQgY29uc3QgbG9ndG9DbGllbnQgPSBuZXcgTG9ndG9DbGllbnQoe1xuICBlbmRwb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvXCIsXG4gIGFwcElkOiBcImViMDJzbHlpaTIycGRzMmxhbTF0a1wiLFxuICBhcHBTZWNyZXQ6IFwiMWFsb294ZWgyOHlrdDM0OWUycjI4XCIsXG4gIGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIC8vIENoYW5nZSB0byB5b3VyIG93biBiYXNlIFVSTFxuICBjb29raWVTZWNyZXQ6IFwibmJzb2g0NjB4eWoxenNsNzh0dGYyemlob3ZibHg2aXdcIiwgLy8gQXV0by1nZW5lcmF0ZWQgMzIgZGlnaXQgc2VjcmV0XG4gIGNvb2tpZVNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufSk7XG4iXSwibmFtZXMiOlsiTG9ndG9DbGllbnQiLCJsb2d0b0NsaWVudCIsImVuZHBvaW50IiwiYXBwSWQiLCJhcHBTZWNyZXQiLCJiYXNlVXJsIiwiY29va2llU2VjcmV0IiwiY29va2llU2VjdXJlIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libraries/logto.ts\n");

/***/ }),

/***/ "(api)/./pages/api/logto/[action].ts":
/*!*************************************!*\
  !*** ./pages/api/logto/[action].ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libraries_logto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libraries/logto */ \"(api)/./libraries/logto.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libraries_logto__WEBPACK_IMPORTED_MODULE_0__]);\n_libraries_logto__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_libraries_logto__WEBPACK_IMPORTED_MODULE_0__.logtoClient.handleAuthRoutes());\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9ndG8vW2FjdGlvbl0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFFdkQsaUVBQWVBLDBFQUE0QixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9ndG8vW2FjdGlvbl0udHM/NDE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2d0b0NsaWVudCB9IGZyb20gJy4uLy4uLy4uL2xpYnJhcmllcy9sb2d0byc7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ3RvQ2xpZW50LmhhbmRsZUF1dGhSb3V0ZXMoKTtcbiJdLCJuYW1lcyI6WyJsb2d0b0NsaWVudCIsImhhbmRsZUF1dGhSb3V0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/logto/[action].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logto/[action].ts"));
module.exports = __webpack_exports__;

})();