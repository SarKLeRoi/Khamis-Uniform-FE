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

/***/ "(pages-dir-node)/./context/LanguageContext.js":
/*!************************************!*\
  !*** ./context/LanguageContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: () => (/* binding */ LanguageProvider),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// context/LanguageContext.js\n\n\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LanguageProvider = ({ children })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { locale, pathname, asPath, query } = router;\n    const toggleLanguage = ()=>{\n        let newLocale;\n        if (locale === \"he\") {\n            newLocale = \"ar\";\n        } else if (locale === \"ar\") {\n            newLocale = \"en\";\n        } else {\n            newLocale = \"he\";\n        }\n        // Normalize current path by removing existing locale prefix\n        const basePath = asPath.replace(/^\\/(en|he|ar)/, \"\");\n        if (newLocale === \"he\") {\n            // Go to root path with no locale prefix\n            window.location.href = basePath === \"\" ? \"/\" : basePath;\n        } else {\n            // Add locale prefix\n            window.location.href = `/${newLocale}${basePath.startsWith(\"/\") ? basePath : \"/\" + basePath}`;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            lang: locale,\n            toggleLanguage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/sarikhamis/Websites/Khamis Uniform 25/context/LanguageContext.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\nconst useLanguage = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvTGFuZ3VhZ2VDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkJBQTZCOztBQUNxQjtBQUNWO0FBRXhDLE1BQU1HLGdDQUFrQkgsb0RBQWFBO0FBRTlCLE1BQU1JLG1CQUFtQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUMzQyxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0o7SUFFNUMsTUFBTUssaUJBQWlCO1FBQ3JCLElBQUlDO1FBQ0osSUFBSUwsV0FBVyxNQUFNO1lBQ25CSyxZQUFZO1FBQ2QsT0FBTyxJQUFJTCxXQUFXLE1BQU07WUFDMUJLLFlBQVk7UUFDZCxPQUFPO1lBQ0xBLFlBQVk7UUFDZDtRQUVBLDREQUE0RDtRQUM1RCxNQUFNQyxXQUFXSixPQUFPSyxPQUFPLENBQUMsaUJBQWlCO1FBRWpELElBQUlGLGNBQWMsTUFBTTtZQUN0Qix3Q0FBd0M7WUFDeENHLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHSixhQUFhLEtBQUssTUFBTUE7UUFDakQsT0FBTztZQUNMLG9CQUFvQjtZQUNwQkUsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUVMLFlBQ3pCQyxTQUFTSyxVQUFVLENBQUMsT0FBT0wsV0FBVyxNQUFNQSxVQUM1QztRQUNKO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1YsZ0JBQWdCZ0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVDLE1BQU1kO1lBQVFJO1FBQWU7a0JBQzdETjs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1pQixjQUFjLElBQU1yQixpREFBVUEsQ0FBQ0UsaUJBQWlCIiwic291cmNlcyI6WyIvVXNlcnMvc2FyaWtoYW1pcy9XZWJzaXRlcy9LaGFtaXMgVW5pZm9ybSAyNS9jb250ZXh0L0xhbmd1YWdlQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb250ZXh0L0xhbmd1YWdlQ29udGV4dC5qc1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IExhbmd1YWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IExhbmd1YWdlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxvY2FsZSwgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlcjtcblxuICBjb25zdCB0b2dnbGVMYW5ndWFnZSA9ICgpID0+IHtcbiAgICBsZXQgbmV3TG9jYWxlO1xuICAgIGlmIChsb2NhbGUgPT09IFwiaGVcIikge1xuICAgICAgbmV3TG9jYWxlID0gXCJhclwiO1xuICAgIH0gZWxzZSBpZiAobG9jYWxlID09PSBcImFyXCIpIHtcbiAgICAgIG5ld0xvY2FsZSA9IFwiZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TG9jYWxlID0gXCJoZVwiO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBjdXJyZW50IHBhdGggYnkgcmVtb3ZpbmcgZXhpc3RpbmcgbG9jYWxlIHByZWZpeFxuICAgIGNvbnN0IGJhc2VQYXRoID0gYXNQYXRoLnJlcGxhY2UoL15cXC8oZW58aGV8YXIpLywgXCJcIik7XG5cbiAgICBpZiAobmV3TG9jYWxlID09PSBcImhlXCIpIHtcbiAgICAgIC8vIEdvIHRvIHJvb3QgcGF0aCB3aXRoIG5vIGxvY2FsZSBwcmVmaXhcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFzZVBhdGggPT09IFwiXCIgPyBcIi9cIiA6IGJhc2VQYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGQgbG9jYWxlIHByZWZpeFxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgLyR7bmV3TG9jYWxlfSR7XG4gICAgICAgIGJhc2VQYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gYmFzZVBhdGggOiBcIi9cIiArIGJhc2VQYXRoXG4gICAgICB9YDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxhbmc6IGxvY2FsZSwgdG9nZ2xlTGFuZ3VhZ2UgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTGFuZ3VhZ2UgPSAoKSA9PiB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJMYW5ndWFnZUNvbnRleHQiLCJMYW5ndWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJsb2NhbGUiLCJwYXRobmFtZSIsImFzUGF0aCIsInF1ZXJ5IiwidG9nZ2xlTGFuZ3VhZ2UiLCJuZXdMb2NhbGUiLCJiYXNlUGF0aCIsInJlcGxhY2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImxhbmciLCJ1c2VMYW5ndWFnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/LanguageContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LanguageContext */ \"(pages-dir-node)/./context/LanguageContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_customization_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/customization.css */ \"(pages-dir-node)/./styles/customization.css\");\n/* harmony import */ var _styles_customization_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_customization_css__WEBPACK_IMPORTED_MODULE_4__);\n// pages/_app.js\n\n\n\n // You can import global styles here\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_1__.LanguageProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/sarikhamis/Websites/Khamis Uniform 25/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sarikhamis/Websites/Khamis Uniform 25/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7QUFDOEM7QUFDcEM7QUFDSSxDQUFDLG9DQUFvQztBQUM5QjtBQUNyQyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSixzRUFBZ0JBO2tCQUNmLDRFQUFDRztZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJpa2hhbWlzL1dlYnNpdGVzL0toYW1pcyBVbmlmb3JtIDI1L3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xuaW1wb3J0IHsgTGFuZ3VhZ2VQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0xhbmd1YWdlQ29udGV4dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjsgLy8gWW91IGNhbiBpbXBvcnQgZ2xvYmFsIHN0eWxlcyBoZXJlXG5pbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9taXphdGlvbi5jc3NcIjtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGFuZ3VhZ2VQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTGFuZ3VhZ2VQcm92aWRlciIsIlJlYWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/customization.css":
/*!**********************************!*\
  !*** ./styles/customization.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();