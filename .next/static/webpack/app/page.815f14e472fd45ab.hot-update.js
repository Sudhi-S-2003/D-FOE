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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/FormDataContext */ \"(app-pages-browser)/./context/FormDataContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nvar Sizes = /*#__PURE__*/ function(Sizes) {\n    Sizes[\"lg\"] = \"lg\";\n    Sizes[\"md\"] = \"md\";\n    Sizes[\"sm\"] = \"sm\";\n    return Sizes;\n}(Sizes || {});\nvar Name = /*#__PURE__*/ function(Name) {\n    Name[Name[\"\"] = 0] = \"\";\n    return Name;\n}(Name || {});\nconst text = [\n    ...Object.values(Sizes).map((size)=>({\n            name: \"text-input\",\n            size: size\n        })),\n    ...Object.values(Sizes).map((size)=>({\n            name: \"number-input\",\n            size: size\n        }))\n];\nfunction InputBox() {\n    _s();\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { setFormData } = (0,_context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__.useFormData)();\n    const handleApply = ()=>{\n        if (!activeItem) return; // Prevent applying if no item is selected\n        const [name, size] = activeItem.split(\"-\");\n        setFormData((prev)=>({\n                ...prev,\n                components: [\n                    ...prev.components,\n                    {\n                        no: prev.components.length + 1,\n                        label: \"\",\n                        type: \"input\",\n                        placeholder: \"\",\n                        option: [],\n                        style: [\n                            {\n                                name: name,\n                                size: size\n                            }\n                        ],\n                        other: {}\n                    }\n                ]\n            }));\n    };\n    const handleClick = (item)=>{\n        setActiveItem(\"\".concat(item.name, \"-\").concat(item.size));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            text.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-red-400 m-3 p-3 hover:scale-95 \".concat(activeItem === \"\".concat(item.name, \"-\").concat(item.size) ? \"bg-green-400 scale-105\" : \"\"),\n                    onClick: ()=>handleClick(item),\n                    children: [\n                        item.name,\n                        \" - \",\n                        item.size\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\InpuBox.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleApply(),\n                disabled: !activeItem,\n                className: \"bg-green-600 m-3 p-3\",\n                children: \"Apply\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\InpuBox.tsx\",\n                lineNumber: 70,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\InpuBox.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(InputBox, \"kkDk7FdNoVGliuwSPUqIBS5Z7AM=\", false, function() {\n    return [\n        _context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__.useFormData\n    ];\n});\n_c = InputBox;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBox);\nvar _c;\n$RefreshReg$(_c, \"InputBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGVmdC9JbnB1Qm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ3VCO0FBRXhELG1DQUFLRTs7OztXQUFBQTtFQUFBQTtBQUtMLGtDQUFLQzs7V0FBQUE7RUFBQUE7QUFRTCxNQUFNQyxPQUFlO09BQ2hCQyxPQUFPQyxNQUFNLENBQUNKLE9BQU9LLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ3JDQyxNQUFNO1lBQ05ELE1BQU1BO1FBQ1I7T0FDR0gsT0FBT0MsTUFBTSxDQUFDSixPQUFPSyxHQUFHLENBQUMsQ0FBQ0MsT0FBVTtZQUNyQ0MsTUFBTTtZQUNORCxNQUFNQTtRQUNSO0NBQ0Q7QUFFRCxTQUFTRTs7SUFDUCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQVM7SUFDckQsTUFBTSxFQUFFYSxXQUFXLEVBQUUsR0FBR1oscUVBQVdBO0lBQ25DLE1BQU1hLGNBQWM7UUFDbEIsSUFBSSxDQUFDSCxZQUFZLFFBQVEsMENBQTBDO1FBRW5FLE1BQU0sQ0FBQ0YsTUFBTUQsS0FBSyxHQUFHRyxXQUFXSSxLQUFLLENBQUM7UUFDdENGLFlBQVksQ0FBQ0csT0FBeUI7Z0JBQ3BDLEdBQUdBLElBQUk7Z0JBQ1BDLFlBQVk7dUJBQ1BELEtBQUtDLFVBQVU7b0JBQ2xCO3dCQUNFQyxJQUFJRixLQUFLQyxVQUFVLENBQUNFLE1BQU0sR0FBRzt3QkFDN0JDLE9BQU87d0JBQ1BDLE1BQU07d0JBQ05DLGFBQWE7d0JBQ2JDLFFBQVEsRUFBRTt3QkFDVkMsT0FBTzs0QkFBQztnQ0FBRWYsTUFBTUE7Z0NBQU1ELE1BQU1BOzRCQUFLO3lCQUFFO3dCQUNuQ2lCLE9BQU8sQ0FBQztvQkFDVjtpQkFDRDtZQUNIO0lBQ0Y7SUFHQSxNQUFNQyxjQUFjLENBQUNDO1FBQ25CZixjQUFjLEdBQWdCZSxPQUFiQSxLQUFLbEIsSUFBSSxFQUFDLEtBQWEsT0FBVmtCLEtBQUtuQixJQUFJO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNvQjs7WUFDRXhCLEtBQUtHLEdBQUcsQ0FBQyxDQUFDb0IsTUFBTUUsc0JBQ2YsOERBQUNDO29CQUVDQyxXQUFXLHFDQUNSLE9BRDZDcEIsZUFBZSxHQUFnQmdCLE9BQWJBLEtBQUtsQixJQUFJLEVBQUMsS0FBYSxPQUFWa0IsS0FBS25CLElBQUksSUFBSywyQkFBMkI7b0JBRXhId0IsU0FBUyxJQUFNTixZQUFZQzs7d0JBRTFCQSxLQUFLbEIsSUFBSTt3QkFBQzt3QkFBSWtCLEtBQUtuQixJQUFJOzttQkFMbkJxQjs7Ozs7MEJBUVIsOERBQUNDO2dCQUNBRSxTQUFTLElBQU1sQjtnQkFDZm1CLFVBQVUsQ0FBQ3RCO2dCQUFZb0IsV0FBVTswQkFDbEM7Ozs7Ozs7Ozs7OztBQUtQO0dBakRTckI7O1FBRWlCVCxpRUFBV0E7OztLQUY1QlM7QUFtRFQsaUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VkaGlcXE9uZURyaXZlXFxEZXNrdG9wXFxOZXh0XFxEX0ZPUk1cXGNvbXBvbmVudHNcXExlZnRcXElucHVCb3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtRGF0YSB9IGZyb20gXCJAL2NvbnRleHQvRm9ybURhdGFDb250ZXh0XCI7XHJcbmltcG9ydCBGb3JtaW50ZXJmYWNlIGZyb20gXCJAL2RhdGEvRm9ybWludGVyZmFjZVwiO1xyXG5lbnVtIFNpemVzIHtcclxuICBsZyA9IFwibGdcIixcclxuICBtZCA9IFwibWRcIixcclxuICBzbSA9IFwic21cIixcclxufVxyXG5lbnVtIE5hbWV7XHJcblwiXCJcclxufVxyXG5pbnRlcmZhY2UgRm9ybSB7XHJcbiAgbmFtZTogTmFtZTtcclxuICBzaXplOiBTaXplcztcclxufVxyXG5cclxuY29uc3QgdGV4dDogRm9ybVtdID0gW1xyXG4gIC4uLk9iamVjdC52YWx1ZXMoU2l6ZXMpLm1hcCgoc2l6ZSkgPT4gKHtcclxuICAgIG5hbWU6IFwidGV4dC1pbnB1dFwiLFxyXG4gICAgc2l6ZTogc2l6ZSxcclxuICB9KSksXHJcbiAgLi4uT2JqZWN0LnZhbHVlcyhTaXplcykubWFwKChzaXplKSA9PiAoe1xyXG4gICAgbmFtZTogXCJudW1iZXItaW5wdXRcIixcclxuICAgIHNpemU6IHNpemUsXHJcbiAgfSkpLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSW5wdXRCb3goKSB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCB7IHNldEZvcm1EYXRhIH0gPSB1c2VGb3JtRGF0YSgpO1xyXG4gIGNvbnN0IGhhbmRsZUFwcGx5ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFhY3RpdmVJdGVtKSByZXR1cm47IC8vIFByZXZlbnQgYXBwbHlpbmcgaWYgbm8gaXRlbSBpcyBzZWxlY3RlZFxyXG5cclxuICAgIGNvbnN0IFtuYW1lLCBzaXplXSA9IGFjdGl2ZUl0ZW0uc3BsaXQoXCItXCIpO1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXY6IEZvcm1pbnRlcmZhY2UpID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICAuLi5wcmV2LmNvbXBvbmVudHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbm86IHByZXYuY29tcG9uZW50cy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICAgIG9wdGlvbjogW10sXHJcbiAgICAgICAgICBzdHlsZTogW3sgbmFtZTogbmFtZSwgc2l6ZTogc2l6ZSB9XSxcclxuICAgICAgICAgIG90aGVyOiB7fSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpdGVtOiBGb3JtKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVJdGVtKGAke2l0ZW0ubmFtZX0tJHtpdGVtLnNpemV9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0ZXh0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYmctcmVkLTQwMCBtLTMgcC0zIGhvdmVyOnNjYWxlLTk1ICR7YWN0aXZlSXRlbSA9PT0gYCR7aXRlbS5uYW1lfS0ke2l0ZW0uc2l6ZX1gID8gXCJiZy1ncmVlbi00MDAgc2NhbGUtMTA1XCIgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaXRlbSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2l0ZW0ubmFtZX0gLSB7aXRlbS5zaXplfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcHBseSgpfVxyXG4gICAgICAgIGRpc2FibGVkPXshYWN0aXZlSXRlbX0gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIG0tMyBwLTNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQXBwbHlcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEJveDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRm9ybURhdGEiLCJTaXplcyIsIk5hbWUiLCJ0ZXh0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwic2l6ZSIsIm5hbWUiLCJJbnB1dEJveCIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwic2V0Rm9ybURhdGEiLCJoYW5kbGVBcHBseSIsInNwbGl0IiwicHJldiIsImNvbXBvbmVudHMiLCJubyIsImxlbmd0aCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib3B0aW9uIiwic3R5bGUiLCJvdGhlciIsImhhbmRsZUNsaWNrIiwiaXRlbSIsImRpdiIsImluZGV4IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpc2FibGVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Left/InpuBox.tsx\n"));

/***/ })

});