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

/***/ "(app-pages-browser)/./components/Left/Option.tsx":
/*!************************************!*\
  !*** ./components/Left/Option.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Options() {\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newOption, setNewOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        label: \"\",\n        value: \"\"\n    }); // State to store the new option being added\n    // Function to handle the form input change\n    const handleInputChange = (e, field)=>{\n        setNewOption({\n            ...newOption,\n            [field]: e.target.value\n        });\n    };\n    // Function to add a new option to the list\n    const handleAddOption = ()=>{\n        if (newOption.label && newOption.value) {\n            setOptions([\n                ...options,\n                newOption\n            ]); // Add the new option to the list\n            setNewOption({\n                label: \"\",\n                value: \"\"\n            }); // Reset the input fields\n        } else {\n            alert(\"Please enter both label and value for the option\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-4\",\n                children: \"Create an Option\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter label\",\n                        value: newOption.label,\n                        onChange: (e)=>handleInputChange(e, \"label\"),\n                        className: \"p-2 border border-gray-300 rounded-md mr-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter value\",\n                        value: newOption.value,\n                        onChange: (e)=>handleInputChange(e, \"value\"),\n                        className: \"p-2 border border-gray-300 rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddOption,\n                        className: \"ml-2 p-2 bg-blue-500 text-white rounded-md\",\n                        children: \"Add Option\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"All Options:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc pl-6\",\n                        children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    option.label,\n                                    \" - \",\n                                    option.value\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\Option.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Options, \"b/3bkSBEIVEsn/m154Z8fE6xGv0=\");\n_c = Options;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Options);\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGVmdC9PcHRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpQztBQVFqQyxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQVcsRUFBRTtJQUNuRCxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQW1DO1FBQzNFTSxPQUFPO1FBQ1BDLE9BQU87SUFDVCxJQUFJLDRDQUE0QztJQUVoRCwyQ0FBMkM7SUFDM0MsTUFBTUMsb0JBQW9CLENBQUNDLEdBQXdDQztRQUNqRUwsYUFBYTtZQUFFLEdBQUdELFNBQVM7WUFBRSxDQUFDTSxNQUFNLEVBQUVELEVBQUVFLE1BQU0sQ0FBQ0osS0FBSztRQUFDO0lBQ3ZEO0lBRUEsMkNBQTJDO0lBQzNDLE1BQU1LLGtCQUFrQjtRQUN0QixJQUFJUixVQUFVRSxLQUFLLElBQUlGLFVBQVVHLEtBQUssRUFBRTtZQUN0Q0osV0FBVzttQkFBSUQ7Z0JBQVNFO2FBQVUsR0FBRyxpQ0FBaUM7WUFDdEVDLGFBQWE7Z0JBQUVDLE9BQU87Z0JBQUlDLE9BQU87WUFBRyxJQUFJLHlCQUF5QjtRQUNuRSxPQUFPO1lBQ0xNLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUI7Ozs7OzswQkFHdkMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1paLE9BQU9ILFVBQVVFLEtBQUs7d0JBQ3RCYyxVQUFVLENBQUNYLElBQU1ELGtCQUFrQkMsR0FBRzt3QkFDdENNLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1paLE9BQU9ILFVBQVVHLEtBQUs7d0JBQ3RCYSxVQUFVLENBQUNYLElBQU1ELGtCQUFrQkMsR0FBRzt3QkFDdENNLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ007d0JBQ0NDLFNBQVNWO3dCQUNURyxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7MEJBTUgsOERBQUNEOztrQ0FDQyw4REFBQ1M7d0JBQUdSLFdBQVU7a0NBQXdCOzs7Ozs7a0NBQ3RDLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FDWGIsUUFBUXVCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNDOztvQ0FDRUYsT0FBT3BCLEtBQUs7b0NBQUM7b0NBQUlvQixPQUFPbkIsS0FBSzs7K0JBRHZCb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckI7R0EvRFMxQjtLQUFBQTtBQWlFVCxpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzdWRoaVxcT25lRHJpdmVcXERlc2t0b3BcXE5leHRcXERfRk9STVxcY29tcG9uZW50c1xcTGVmdFxcT3B0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIERlZmluZSB0aGUgdHlwZSBmb3IgdGhlIG9wdGlvbnNcclxuaW50ZXJmYWNlIE9wdGlvbiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBPcHRpb25zKCkge1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlPE9wdGlvbltdPihbXSk7IFxyXG4gIGNvbnN0IFtuZXdPcHRpb24sIHNldE5ld09wdGlvbl0gPSB1c2VTdGF0ZTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4oe1xyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICB9KTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIG5ldyBvcHRpb24gYmVpbmcgYWRkZWRcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBmb3JtIGlucHV0IGNoYW5nZVxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBmaWVsZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXROZXdPcHRpb24oeyAuLi5uZXdPcHRpb24sIFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBvcHRpb24gdG8gdGhlIGxpc3RcclxuICBjb25zdCBoYW5kbGVBZGRPcHRpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3T3B0aW9uLmxhYmVsICYmIG5ld09wdGlvbi52YWx1ZSkge1xyXG4gICAgICBzZXRPcHRpb25zKFsuLi5vcHRpb25zLCBuZXdPcHRpb25dKTsgLy8gQWRkIHRoZSBuZXcgb3B0aW9uIHRvIHRoZSBsaXN0XHJcbiAgICAgIHNldE5ld09wdGlvbih7IGxhYmVsOiBcIlwiLCB2YWx1ZTogXCJcIiB9KTsgLy8gUmVzZXQgdGhlIGlucHV0IGZpZWxkc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYm90aCBsYWJlbCBhbmQgdmFsdWUgZm9yIHRoZSBvcHRpb25cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+Q3JlYXRlIGFuIE9wdGlvbjwvaDI+XHJcblxyXG4gICAgICB7LyogSW5wdXQgZmllbGRzIGZvciB0aGUgbmV3IG9wdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGxhYmVsXCJcclxuICAgICAgICAgIHZhbHVlPXtuZXdPcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUsIFwibGFiZWxcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG1yLTJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZhbHVlXCJcclxuICAgICAgICAgIHZhbHVlPXtuZXdPcHRpb24udmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUsIFwidmFsdWVcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZE9wdGlvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcC0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIE9wdGlvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBEaXNwbGF5IHRoZSBsaXN0IG9mIGFsbCBvcHRpb25zICovfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5BbGwgT3B0aW9uczo8L2gzPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcGwtNlwiPlxyXG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfSAtIHtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk9wdGlvbnMiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsIm5ld09wdGlvbiIsInNldE5ld09wdGlvbiIsImxhYmVsIiwidmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJmaWVsZCIsInRhcmdldCIsImhhbmRsZUFkZE9wdGlvbiIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwidWwiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImxpIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Left/Option.tsx\n"));

/***/ })

});