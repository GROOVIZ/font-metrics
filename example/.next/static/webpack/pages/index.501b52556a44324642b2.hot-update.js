self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MetricsCanvas.tsx":
/*!******************************************!*\
  !*** ./src/components/MetricsCanvas.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_thier_Projects_font_metrics_example_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grooviz/font-metrics */ "../dist/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\thier\\Projects\\font-metrics\\example\\src\\components\\MetricsCanvas.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var offsetColors = {
  top: "rgb(136,174,225)",
  ascent: "rgb(135,170,35)",
  tittle: "rgb(171,118,242)",
  upper: "rgb(62,195,73)",
  lower: "rgb(246,66,208)",
  baseline: "rgb(132,183,143)",
  bottom: "rgb(207,70,88)",
  descent: "rgb(247,147,30)",
  reserved2: "rgb(144,112,94)",
  reserved3: "rgb(253,89,23)"
};

var MetricsCanvas = function MetricsCanvas(_ref) {
  _s();

  var metricsParameters = _ref.metricsParameters;
  var fontWeight = metricsParameters.bold ? "bold" : "normal";
  var fontStyle = metricsParameters.italic ? "italic" : "";

  var _useFontMetrics = (0,_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_3__.useFontMetrics)(metricsParameters.fontFamily, {
    origin: "top",
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    capHeight: metricsParameters.offsetChars["upper"],
    xHeight: metricsParameters.offsetChars["lower"],
    descent: metricsParameters.offsetChars["descent"],
    ascent: metricsParameters.offsetChars["ascent"],
    tittle: metricsParameters.offsetChars["tittle"],
    baseline: metricsParameters.offsetChars["baseline"]
  }),
      _useFontMetrics2 = (0,C_Users_thier_Projects_font_metrics_example_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useFontMetrics, 1),
      metrics = _useFontMetrics2[0];

  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (false) {}

    var printLine = function printLine(ctx, offset, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, padding + offset * fontSize * pixelRatio);
      ctx.lineTo(ctx.canvas.width, padding + offset * fontSize * pixelRatio);
      ctx.stroke();
    };

    var pixelRatio =  true ? window.devicePixelRatio : 0;
    var fontSize = 60;
    var height = Math.ceil(fontSize * 2);
    var width = height * 3;
    var padding = Math.ceil(fontSize * 0.5);
    var canvas = canvasRef.current;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    canvas.style.width = "".concat(width, "px");
    canvas.style.height = "".concat(height, "px");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#AAEEEE";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize * pixelRatio, "px ").concat(metricsParameters.fontFamily);
    ctx.fillStyle = "black";
    ctx.textBaseline = "top";
    ctx.fillText(metricsParameters.text, 0, padding + metrics.offsets.top * fontSize * pixelRatio);
    metricsParameters.visibleOffsets.forEach(function (offset) {
      return printLine(ctx, metrics.offsets[offset], offsetColors[offset]);
    });
  }, [fontStyle, fontWeight, metricsParameters, metrics]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("canvas", {
    ref: canvasRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, _this);
};

_s(MetricsCanvas, "0Ic1/7T/yg2VYE1Yv7oaSm6ioCw=", false, function () {
  return [_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_3__.useFontMetrics];
});

_c = MetricsCanvas;
/* harmony default export */ __webpack_exports__["default"] = (MetricsCanvas);

var _c;

$RefreshReg$(_c, "MetricsCanvas");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhcy50c3giXSwibmFtZXMiOlsib2Zmc2V0Q29sb3JzIiwidG9wIiwiYXNjZW50IiwidGl0dGxlIiwidXBwZXIiLCJsb3dlciIsImJhc2VsaW5lIiwiYm90dG9tIiwiZGVzY2VudCIsInJlc2VydmVkMiIsInJlc2VydmVkMyIsIk1ldHJpY3NDYW52YXMiLCJtZXRyaWNzUGFyYW1ldGVycyIsImZvbnRXZWlnaHQiLCJib2xkIiwiZm9udFN0eWxlIiwiaXRhbGljIiwidXNlRm9udE1ldHJpY3MiLCJmb250RmFtaWx5Iiwib3JpZ2luIiwiY2FwSGVpZ2h0Iiwib2Zmc2V0Q2hhcnMiLCJ4SGVpZ2h0IiwibWV0cmljcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInByaW50TGluZSIsImN0eCIsIm9mZnNldCIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJwaXhlbFJhdGlvIiwibGluZVRvIiwiY2FudmFzIiwid2lkdGgiLCJzdHJva2UiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJjdXJyZW50Iiwic3R5bGUiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJ0ZXh0Iiwib2Zmc2V0cyIsInZpc2libGVPZmZzZXRzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsS0FBRyxFQUFFLGtCQURjO0FBRW5CQyxRQUFNLEVBQUUsaUJBRlc7QUFHbkJDLFFBQU0sRUFBRSxrQkFIVztBQUluQkMsT0FBSyxFQUFFLGdCQUpZO0FBS25CQyxPQUFLLEVBQUUs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NTZhNDQzMjQ2NDJiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9udE1ldHJpY3MgfSBmcm9tIFwiQGdyb292aXovZm9udC1tZXRyaWNzXCI7XHJcbmltcG9ydCB7IE1ldHJpY3NQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vTWV0cmljc1BhcmFtZXRlcnNcIjtcclxuXHJcbmNvbnN0IG9mZnNldENvbG9ycyA9IHtcclxuICB0b3A6IFwicmdiKDEzNiwxNzQsMjI1KVwiLFxyXG4gIGFzY2VudDogXCJyZ2IoMTM1LDE3MCwzNSlcIixcclxuICB0aXR0bGU6IFwicmdiKDE3MSwxMTgsMjQyKVwiLFxyXG4gIHVwcGVyOiBcInJnYig2MiwxOTUsNzMpXCIsXHJcbiAgbG93ZXI6IFwicmdiKDI0Niw2NiwyMDgpXCIsXHJcbiAgYmFzZWxpbmU6IFwicmdiKDEzMiwxODMsMTQzKVwiLFxyXG4gIGJvdHRvbTogXCJyZ2IoMjA3LDcwLDg4KVwiLFxyXG4gIGRlc2NlbnQ6IFwicmdiKDI0NywxNDcsMzApXCIsXHJcbiAgcmVzZXJ2ZWQyOiBcInJnYigxNDQsMTEyLDk0KVwiLFxyXG4gIHJlc2VydmVkMzogXCJyZ2IoMjUzLDg5LDIzKVwiLFxyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBtZXRyaWNzUGFyYW1ldGVyczogTWV0cmljc1BhcmFtZXRlcnM7XHJcbn07XHJcblxyXG5jb25zdCBNZXRyaWNzQ2FudmFzOiBGQzxQcm9wcz4gPSAoeyBtZXRyaWNzUGFyYW1ldGVycyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGZvbnRXZWlnaHQgPSBtZXRyaWNzUGFyYW1ldGVycy5ib2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gIGNvbnN0IGZvbnRTdHlsZSA9IG1ldHJpY3NQYXJhbWV0ZXJzLml0YWxpYyA/IFwiaXRhbGljXCIgOiBcIlwiO1xyXG4gIGNvbnN0IFttZXRyaWNzXSA9IHVzZUZvbnRNZXRyaWNzKG1ldHJpY3NQYXJhbWV0ZXJzLmZvbnRGYW1pbHksIHtcclxuICAgIG9yaWdpbjogXCJ0b3BcIixcclxuICAgIGZvbnRTdHlsZSxcclxuICAgIGZvbnRXZWlnaHQsXHJcbiAgICBjYXBIZWlnaHQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1widXBwZXJcIl0sXHJcbiAgICB4SGVpZ2h0OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImxvd2VyXCJdLFxyXG4gICAgZGVzY2VudDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJkZXNjZW50XCJdLFxyXG4gICAgYXNjZW50OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImFzY2VudFwiXSxcclxuICAgIHRpdHRsZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJ0aXR0bGVcIl0sXHJcbiAgICBiYXNlbGluZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJiYXNlbGluZVwiXSxcclxuICB9KTtcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwcmludExpbmUgPSAoXHJcbiAgICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBvZmZzZXQ6IG51bWJlcixcclxuICAgICAgY29sb3I6IHN0cmluZ1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGN0eCEuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgY3R4IS5saW5lV2lkdGggPSA0O1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oMCwgcGFkZGluZyArIG9mZnNldCAqIGZvbnRTaXplICogcGl4ZWxSYXRpbyk7XHJcbiAgICAgIGN0eC5saW5lVG8oY3R4IS5jYW52YXMud2lkdGgsIHBhZGRpbmcgKyBvZmZzZXQgKiBmb250U2l6ZSAqIHBpeGVsUmF0aW8pO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBwaXhlbFJhdGlvID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcclxuICBjb25zdCBmb250U2l6ZSA9IDYwO1xyXG4gIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChmb250U2l6ZSAqIDIpO1xyXG4gIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogMztcclxuICBjb25zdCBwYWRkaW5nID0gTWF0aC5jZWlsKGZvbnRTaXplICogMC41KTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBwaXhlbFJhdGlvO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIHBpeGVsUmF0aW87XHJcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4IS5maWxsU3R5bGUgPSBcIiNBQUVFRUVcIjtcclxuICAgIGN0eCEuZmlsbFJlY3QoMCwgMCwgY3R4IS5jYW52YXMud2lkdGgsIGN0eCEuY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHghLmZvbnQgPSBgJHtmb250U3R5bGV9ICR7Zm9udFdlaWdodH0gJHtmb250U2l6ZSAqIHBpeGVsUmF0aW99cHggJHtcclxuICAgICAgbWV0cmljc1BhcmFtZXRlcnMuZm9udEZhbWlseVxyXG4gICAgfWA7XHJcbiAgICBjdHghLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eCEudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuICAgIGN0eCEuZmlsbFRleHQoXHJcbiAgICAgIG1ldHJpY3NQYXJhbWV0ZXJzLnRleHQsXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhZGRpbmcgKyBtZXRyaWNzLm9mZnNldHMudG9wICogZm9udFNpemUgKiBwaXhlbFJhdGlvXHJcbiAgICApO1xyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMudmlzaWJsZU9mZnNldHMuZm9yRWFjaCgob2Zmc2V0KSA9PlxyXG4gICAgICBwcmludExpbmUoY3R4ISwgbWV0cmljcy5vZmZzZXRzW29mZnNldF0sIG9mZnNldENvbG9yc1tvZmZzZXRdKVxyXG4gICAgKTtcclxuICB9LCBbXHJcbiAgICBmb250U3R5bGUsXHJcbiAgICBmb250V2VpZ2h0LFxyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMsXHJcbiAgICBtZXRyaWNzLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Y2FudmFzXHJcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgPjwvY2FudmFzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNzQ2FudmFzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9