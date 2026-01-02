"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_utils_imSdkHelpers_ts";
exports.ids = ["src_utils_imSdkHelpers_ts"];
exports.modules = {

/***/ "./src/utils/imSdkHelpers.ts":
/*!***********************************!*\
  !*** ./src/utils/imSdkHelpers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSpecifiedFriendsInfoSafe\": () => (/* binding */ getSpecifiedFriendsInfoSafe)\n/* harmony export */ });\nasync function getSpecifiedFriendsInfoSafe(sdk, ids) {\n    if (!sdk || !ids || !ids.length) return {\n        data: []\n    };\n    // Try new param shape first\n    try {\n        if (typeof sdk.getSpecifiedFriendsInfo === \"function\") {\n            try {\n                return await sdk.getSpecifiedFriendsInfo({\n                    friendUserIDList: ids\n                });\n            } catch (e) {\n                // If object-shape call fails, do not attempt legacy array call (wasm binding mismatch can crash).\n                return {\n                    data: []\n                };\n            }\n        }\n    } catch (e) {\n    // ignore\n    }\n    return {\n        data: []\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW1TZGtIZWxwZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQSwyQkFBMkIsQ0FBQ0MsR0FBUSxFQUFFQyxHQUFhLEVBQUU7SUFDekUsSUFBSSxDQUFDRCxHQUFHLElBQUksQ0FBQ0MsR0FBRyxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsTUFBTSxFQUFFLE9BQU87UUFBRUMsSUFBSSxFQUFFLEVBQUU7S0FBRSxDQUFDO0lBQ3JELDRCQUE0QjtJQUM1QixJQUFJO1FBQ0YsSUFBSSxPQUFPSCxHQUFHLENBQUNJLHVCQUF1QixLQUFLLFVBQVUsRUFBRTtZQUNyRCxJQUFJO2dCQUNGLE9BQU8sTUFBTUosR0FBRyxDQUFDSSx1QkFBdUIsQ0FBQztvQkFBRUMsZ0JBQWdCLEVBQUVKLEdBQUc7aUJBQUUsQ0FBQyxDQUFDO2FBQ3JFLENBQUMsT0FBT0ssQ0FBQyxFQUFFO2dCQUNWLGtHQUFrRztnQkFDbEcsT0FBTztvQkFBRUgsSUFBSSxFQUFFLEVBQUU7aUJBQUUsQ0FBQzthQUNyQjtTQUNGO0tBQ0YsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7SUFDVixTQUFTO0tBQ1Y7SUFDRCxPQUFPO1FBQUVILElBQUksRUFBRSxFQUFFO0tBQUUsQ0FBQztDQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3NyYy91dGlscy9pbVNka0hlbHBlcnMudHM/MWYzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3BlY2lmaWVkRnJpZW5kc0luZm9TYWZlKHNkazogYW55LCBpZHM6IHN0cmluZ1tdKSB7XHJcbiAgaWYgKCFzZGsgfHwgIWlkcyB8fCAhaWRzLmxlbmd0aCkgcmV0dXJuIHsgZGF0YTogW10gfTtcclxuICAvLyBUcnkgbmV3IHBhcmFtIHNoYXBlIGZpcnN0XHJcbiAgdHJ5IHtcclxuICAgIGlmICh0eXBlb2Ygc2RrLmdldFNwZWNpZmllZEZyaWVuZHNJbmZvID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHNkay5nZXRTcGVjaWZpZWRGcmllbmRzSW5mbyh7IGZyaWVuZFVzZXJJRExpc3Q6IGlkcyB9KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIElmIG9iamVjdC1zaGFwZSBjYWxsIGZhaWxzLCBkbyBub3QgYXR0ZW1wdCBsZWdhY3kgYXJyYXkgY2FsbCAod2FzbSBiaW5kaW5nIG1pc21hdGNoIGNhbiBjcmFzaCkuXHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10gfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIGlnbm9yZVxyXG4gIH1cclxuICByZXR1cm4geyBkYXRhOiBbXSB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRTcGVjaWZpZWRGcmllbmRzSW5mb1NhZmUiLCJzZGsiLCJpZHMiLCJsZW5ndGgiLCJkYXRhIiwiZ2V0U3BlY2lmaWVkRnJpZW5kc0luZm8iLCJmcmllbmRVc2VySURMaXN0IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/imSdkHelpers.ts\n");

/***/ })

};
;