"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Left/InpuBox.tsx":
/*!*************************************!*\
  !*** ./components/Left/InpuBox.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/FormDataContext */ \"(app-pages-browser)/./context/FormDataContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nvar Sizes = /*#__PURE__*/ function(Sizes) {\n    Sizes[\"lg\"] = \"lg\";\n    Sizes[\"md\"] = \"md\";\n    Sizes[\"sm\"] = \"sm\";\n    return Sizes;\n}(Sizes || {});\nconst text = [\n    ...Object.values(Sizes).map((size)=>({\n            name: \"text-input\",\n            size: size\n        })),\n    ...Object.values(Sizes).map((size)=>({\n            name: \"number-input\",\n            size: size\n        }))\n];\nfunction InputBox() {\n    _s();\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { setFormData } = (0,_context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__.useFormData)();\n    const handleApply = ()=>{\n        if (!activeItem) return; // Prevent applying if no item is selected\n        const [name, size] = activeItem.split(\"-\");\n        setFormData((prev)=>({\n                ...prev,\n                components: [\n                    ...prev.components,\n                    {\n                        no: prev.components.length + 1,\n                        label: \"\",\n                        type: \"button\",\n                        placeholder: \"\",\n                        option: [],\n                        style: [\n                            {\n                                name: name,\n                                size: size\n                            }\n                        ],\n                        other: {}\n                    }\n                ]\n            }));\n    };\n    const handleClick = (item)=>{\n        setActiveItem(\"\".concat(item.name, \"-\").concat(item.size));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: text.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-red-400 m-3 p-3 hover:scale-95 \".concat(activeItem === \"\".concat(item.name, \"-\").concat(item.size) ? \"bg-green-400 scale-105\" : \"\"),\n                onClick: ()=>handleClick(item),\n                children: [\n                    item.name,\n                    \" - \",\n                    item.size\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\InpuBox.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\InpuBox.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(InputBox, \"kkDk7FdNoVGliuwSPUqIBS5Z7AM=\", false, function() {\n    return [\n        _context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__.useFormData\n    ];\n});\n_c = InputBox;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBox);\nvar _c;\n$RefreshReg$(_c, \"InputBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGVmdC9JbnB1Qm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ3VCO0FBRXhELG1DQUFLRTs7OztXQUFBQTtFQUFBQTtBQVdMLE1BQU1DLE9BQWU7T0FDaEJDLE9BQU9DLE1BQU0sQ0FBQ0gsT0FBT0ksR0FBRyxDQUFDLENBQUNDLE9BQVU7WUFDckNDLE1BQU07WUFDTkQsTUFBTUE7UUFDUjtPQUNHSCxPQUFPQyxNQUFNLENBQUNILE9BQU9JLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ3JDQyxNQUFNO1lBQ05ELE1BQU1BO1FBQ1I7Q0FDRDtBQUVELFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLEVBQUVZLFdBQVcsRUFBRSxHQUFHWCxxRUFBV0E7SUFDbkMsTUFBTVksY0FBYztRQUNsQixJQUFJLENBQUNILFlBQVksUUFBUSwwQ0FBMEM7UUFFbkUsTUFBTSxDQUFDRixNQUFNRCxLQUFLLEdBQUdHLFdBQVdJLEtBQUssQ0FBQztRQUN0Q0YsWUFBWSxDQUFDRyxPQUF5QjtnQkFDcEMsR0FBR0EsSUFBSTtnQkFDUEMsWUFBWTt1QkFDUEQsS0FBS0MsVUFBVTtvQkFDbEI7d0JBQ0VDLElBQUlGLEtBQUtDLFVBQVUsQ0FBQ0UsTUFBTSxHQUFHO3dCQUM3QkMsT0FBTzt3QkFDUEMsTUFBTTt3QkFDTkMsYUFBYTt3QkFDYkMsUUFBUSxFQUFFO3dCQUNWQyxPQUFPOzRCQUFDO2dDQUFFZixNQUFNQTtnQ0FBTUQsTUFBTUE7NEJBQUs7eUJBQUU7d0JBQ25DaUIsT0FBTyxDQUFDO29CQUNWO2lCQUNEO1lBQ0g7SUFDRjtJQUdBLE1BQU1DLGNBQWMsQ0FBQ0M7UUFDbkJmLGNBQWMsR0FBZ0JlLE9BQWJBLEtBQUtsQixJQUFJLEVBQUMsS0FBYSxPQUFWa0IsS0FBS25CLElBQUk7SUFDekM7SUFFQSxxQkFDRSw4REFBQ29CO2tCQUNFeEIsS0FBS0csR0FBRyxDQUFDLENBQUNvQixNQUFNRSxzQkFDZiw4REFBQ0M7Z0JBRUNDLFdBQVcscUNBQ1IsT0FENkNwQixlQUFlLEdBQWdCZ0IsT0FBYkEsS0FBS2xCLElBQUksRUFBQyxLQUFhLE9BQVZrQixLQUFLbkIsSUFBSSxJQUFLLDJCQUEyQjtnQkFFeEh3QixTQUFTLElBQU1OLFlBQVlDOztvQkFFMUJBLEtBQUtsQixJQUFJO29CQUFDO29CQUFJa0IsS0FBS25CLElBQUk7O2VBTG5CcUI7Ozs7Ozs7Ozs7QUFVZjtHQTNDU25COztRQUVpQlIsaUVBQVdBOzs7S0FGNUJRO0FBNkNULGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHN1ZGhpXFxPbmVEcml2ZVxcRGVza3RvcFxcTmV4dFxcRF9GT1JNXFxjb21wb25lbnRzXFxMZWZ0XFxJbnB1Qm94LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybURhdGEgfSBmcm9tIFwiQC9jb250ZXh0L0Zvcm1EYXRhQ29udGV4dFwiO1xyXG5pbXBvcnQgRm9ybWludGVyZmFjZSBmcm9tIFwiQC9kYXRhL0Zvcm1pbnRlcmZhY2VcIjtcclxuZW51bSBTaXplcyB7XHJcbiAgbGcgPSBcImxnXCIsXHJcbiAgbWQgPSBcIm1kXCIsXHJcbiAgc20gPSBcInNtXCIsXHJcbn1cclxuXHJcbmludGVyZmFjZSBGb3JtIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2l6ZTogU2l6ZXM7XHJcbn1cclxuXHJcbmNvbnN0IHRleHQ6IEZvcm1bXSA9IFtcclxuICAuLi5PYmplY3QudmFsdWVzKFNpemVzKS5tYXAoKHNpemUpID0+ICh7XHJcbiAgICBuYW1lOiBcInRleHQtaW5wdXRcIixcclxuICAgIHNpemU6IHNpemUsXHJcbiAgfSkpLFxyXG4gIC4uLk9iamVjdC52YWx1ZXMoU2l6ZXMpLm1hcCgoc2l6ZSkgPT4gKHtcclxuICAgIG5hbWU6IFwibnVtYmVyLWlucHV0XCIsXHJcbiAgICBzaXplOiBzaXplLFxyXG4gIH0pKSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIElucHV0Qm94KCkge1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgeyBzZXRGb3JtRGF0YSB9ID0gdXNlRm9ybURhdGEoKTtcclxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcclxuICAgIGlmICghYWN0aXZlSXRlbSkgcmV0dXJuOyAvLyBQcmV2ZW50IGFwcGx5aW5nIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWRcclxuXHJcbiAgICBjb25zdCBbbmFtZSwgc2l6ZV0gPSBhY3RpdmVJdGVtLnNwbGl0KFwiLVwiKTtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2OiBGb3JtaW50ZXJmYWNlKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAgLi4ucHJldi5jb21wb25lbnRzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5vOiBwcmV2LmNvbXBvbmVudHMubGVuZ3RoICsgMSxcclxuICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICAgICAgb3B0aW9uOiBbXSxcclxuICAgICAgICAgIHN0eWxlOiBbeyBuYW1lOiBuYW1lLCBzaXplOiBzaXplIH1dLFxyXG4gICAgICAgICAgb3RoZXI6IHt9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGl0ZW06IEZvcm0pID0+IHtcclxuICAgIHNldEFjdGl2ZUl0ZW0oYCR7aXRlbS5uYW1lfS0ke2l0ZW0uc2l6ZX1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3RleHQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy1yZWQtNDAwIG0tMyBwLTMgaG92ZXI6c2NhbGUtOTUgJHthY3RpdmVJdGVtID09PSBgJHtpdGVtLm5hbWV9LSR7aXRlbS5zaXplfWAgPyBcImJnLWdyZWVuLTQwMCBzY2FsZS0xMDVcIiA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXRlbS5uYW1lfSAtIHtpdGVtLnNpemV9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUZvcm1EYXRhIiwiU2l6ZXMiLCJ0ZXh0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwic2l6ZSIsIm5hbWUiLCJJbnB1dEJveCIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwic2V0Rm9ybURhdGEiLCJoYW5kbGVBcHBseSIsInNwbGl0IiwicHJldiIsImNvbXBvbmVudHMiLCJubyIsImxlbmd0aCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib3B0aW9uIiwic3R5bGUiLCJvdGhlciIsImhhbmRsZUNsaWNrIiwiaXRlbSIsImRpdiIsImluZGV4IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Left/InpuBox.tsx\n"));

/***/ })

});