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
exports.id = "pages/post/[id]";
exports.ids = ["pages/post/[id]"];
exports.modules = {

/***/ "./src/styles/dPost.module.scss":
/*!**************************************!*\
  !*** ./src/styles/dPost.module.scss ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2RQb3N0Lm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2cvLi9zcmMvc3R5bGVzL2RQb3N0Lm1vZHVsZS5zY3NzP2Y2ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/dPost.module.scss\n");

/***/ }),

/***/ "./src/pages/post/[id].jsx":
/*!*********************************!*\
  !*** ./src/pages/post/[id].jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _styles_dPost_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/dPost.module.scss */ \"./src/styles/dPost.module.scss\");\n/* harmony import */ var _styles_dPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_dPost_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let { id  } = router.query;\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.isReady) {\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.GET)(`posts/${id}`).then((data)=>setPostData(data));\n        }\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_dPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dPost),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: postData.image,\n                alt: postData.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anast\\\\Documents\\\\esercitazioni-CB5\\\\next-blog-main\\\\next-blog-main\\\\src\\\\pages\\\\post\\\\[id].jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: postData.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anast\\\\Documents\\\\esercitazioni-CB5\\\\next-blog-main\\\\next-blog-main\\\\src\\\\pages\\\\post\\\\[id].jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: postData.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anast\\\\Documents\\\\esercitazioni-CB5\\\\next-blog-main\\\\next-blog-main\\\\src\\\\pages\\\\post\\\\[id].jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anast\\\\Documents\\\\esercitazioni-CB5\\\\next-blog-main\\\\next-blog-main\\\\src\\\\pages\\\\post\\\\[id].jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n} // export async function getStaticPaths() {\n //   return {\n //     paths: [{ params: { id: \"1\" } }],\n //     fallback: false, // can also be true or 'blocking'\n //   };\n // }\n // export async function getStaticProps({ params }) {\n //   const { id } = params;\n //   //   const res = await fetch(`https://dummyjson.com/post/${id}`);\n //   //   const posts = await res.json();\n //   return {\n //     props: {\n //       //   posts: posts.posts,\n //     },\n //   };\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ1Y7QUFDYztBQUVoRCw2QkFBZSxzQ0FBWTtJQUN6QixNQUFNSyxTQUFTTCxzREFBU0E7SUFDeEIsSUFBSSxFQUFFTSxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUV6QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsQ0FBQztJQUUxQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlHLE9BQU9LLE9BQU8sRUFBRTtZQUNsQlAsK0NBQUdBLENBQUMsQ0FBQyxNQUFNLEVBQUVHLEdBQUcsQ0FBQyxFQUFFSyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0gsWUFBWUc7UUFDaEQsQ0FBQztJQUNILEdBQUc7UUFBQ1AsT0FBT0ssT0FBTztLQUFDO0lBRW5CLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXVix3RUFBWTs7MEJBQzFCLDhEQUFDWTtnQkFBSUMsS0FBS1QsU0FBU1UsS0FBSztnQkFBRUMsS0FBS1gsU0FBU1ksS0FBSzs7Ozs7OzBCQUM3Qyw4REFBQ0M7MEJBQUliLFNBQVNZLEtBQUs7Ozs7OzswQkFDbkIsOERBQUNFOzBCQUFHZCxTQUFTZSxJQUFJOzs7Ozs7Ozs7Ozs7QUFHdkIsQ0FBQyxDQUVELDJDQUEyQztDQUMzQyxhQUFhO0NBQ2Isd0NBQXdDO0NBQ3hDLHlEQUF5RDtDQUN6RCxPQUFPO0NBQ1AsSUFBSTtDQUVKLHFEQUFxRDtDQUNyRCwyQkFBMkI7Q0FDM0Isc0VBQXNFO0NBQ3RFLHlDQUF5QztDQUV6QyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGlDQUFpQztDQUNqQyxTQUFTO0NBQ1QsT0FBTztDQUNQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2cvLi9zcmMvcGFnZXMvcG9zdC9baWRdLmpzeD8zODA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0VUIH0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9kUG9zdC5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IFtwb3N0RGF0YSwgc2V0UG9zdERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5pc1JlYWR5KSB7XG4gICAgICBHRVQoYHBvc3RzLyR7aWR9YCkudGhlbigoZGF0YSkgPT4gc2V0UG9zdERhdGEoZGF0YSkpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRQb3N0fT5cbiAgICAgIDxpbWcgc3JjPXtwb3N0RGF0YS5pbWFnZX0gYWx0PXtwb3N0RGF0YS50aXRsZX0gLz5cbiAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxwPntwb3N0RGF0YS5ib2R5fTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgaWQ6IFwiMVwiIH0gfV0sXG4vLyAgICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBjYW4gYWxzbyBiZSB0cnVlIG9yICdibG9ja2luZydcbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuLy8gICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2R1bW15anNvbi5jb20vcG9zdC8ke2lkfWApO1xuLy8gICAvLyAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICAvLyAgIHBvc3RzOiBwb3N0cy5wb3N0cyxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR0VUIiwic3R5bGVzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBvc3REYXRhIiwic2V0UG9zdERhdGEiLCJpc1JlYWR5IiwidGhlbiIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJkUG9zdCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJoMSIsInAiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/post/[id].jsx\n");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET\": () => (/* binding */ GET)\n/* harmony export */ });\nconst BASE_URL = \"https://dummyjson.com/\";\nconst GET = async (endpoint)=>{\n    const res = await fetch(BASE_URL + endpoint);\n    const data = await res.json();\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBRVYsTUFBTUMsTUFBTSxPQUFPQyxXQUFhO0lBQ3JDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUosV0FBV0U7SUFDbkMsTUFBTUcsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy8uL3NyYy91dGlscy9hcGkuanM/ZTI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9kdW1teWpzb24uY29tL1wiO1xuXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKGVuZHBvaW50KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEJBU0VfVVJMICsgZW5kcG9pbnQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiR0VUIiwiZW5kcG9pbnQiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/api.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/post/[id].jsx"));
module.exports = __webpack_exports__;

})();