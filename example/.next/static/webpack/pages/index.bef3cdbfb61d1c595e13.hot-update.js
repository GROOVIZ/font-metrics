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
    canvas.style.width = '90%'; //`${width}px`;

    canvas.style.height = '90%'; //`${height}px`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhcy50c3giXSwibmFtZXMiOlsib2Zmc2V0Q29sb3JzIiwidG9wIiwiYXNjZW50IiwidGl0dGxlIiwidXBwZXIiLCJsb3dlciIsImJhc2VsaW5lIiwiYm90dG9tIiwiZGVzY2VudCIsInJlc2VydmVkMiIsInJlc2VydmVkMyIsIk1ldHJpY3NDYW52YXMiLCJtZXRyaWNzUGFyYW1ldGVycyIsImZvbnRXZWlnaHQiLCJib2xkIiwiZm9udFN0eWxlIiwiaXRhbGljIiwidXNlRm9udE1ldHJpY3MiLCJmb250RmFtaWx5Iiwib3JpZ2luIiwiY2FwSGVpZ2h0Iiwib2Zmc2V0Q2hhcnMiLCJ4SGVpZ2h0IiwibWV0cmljcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInByaW50TGluZSIsImN0eCIsIm9mZnNldCIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJwaXhlbFJhdGlvIiwibGluZVRvIiwiY2FudmFzIiwid2lkdGgiLCJzdHJva2UiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJjdXJyZW50Iiwic3R5bGUiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJ0ZXh0Iiwib2Zmc2V0cyIsInZpc2libGVPZmZzZXRzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsS0FBRyxFQUFFLGtCQURjO0FBRW5CQyxRQUFNLEVBQUUsaUJBRlc7QUFHbkJDLFFBQU0sRUFBRSxrQkFIVztBQUluQkMsT0FBSyxFQUFFLGdCQUpZO0FBS25CQyxPQUFLLEVBQUUs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ZWJwYWNrL3BhZ2VzL2luZGV4LmJlZjNjZGJmYjYxZDFjNTk1ZTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb250TWV0cmljcyB9IGZyb20gXCJAZ3Jvb3Zpei9mb250LW1ldHJpY3NcIjtcclxuaW1wb3J0IHsgTWV0cmljc1BhcmFtZXRlcnMgfSBmcm9tIFwiLi9NZXRyaWNzUGFyYW1ldGVyc1wiO1xyXG5cclxuY29uc3Qgb2Zmc2V0Q29sb3JzID0ge1xyXG4gIHRvcDogXCJyZ2IoMTM2LDE3NCwyMjUpXCIsXHJcbiAgYXNjZW50OiBcInJnYigxMzUsMTcwLDM1KVwiLFxyXG4gIHRpdHRsZTogXCJyZ2IoMTcxLDExOCwyNDIpXCIsXHJcbiAgdXBwZXI6IFwicmdiKDYyLDE5NSw3MylcIixcclxuICBsb3dlcjogXCJyZ2IoMjQ2LDY2LDIwOClcIixcclxuICBiYXNlbGluZTogXCJyZ2IoMTMyLDE4MywxNDMpXCIsXHJcbiAgYm90dG9tOiBcInJnYigyMDcsNzAsODgpXCIsXHJcbiAgZGVzY2VudDogXCJyZ2IoMjQ3LDE0NywzMClcIixcclxuICByZXNlcnZlZDI6IFwicmdiKDE0NCwxMTIsOTQpXCIsXHJcbiAgcmVzZXJ2ZWQzOiBcInJnYigyNTMsODksMjMpXCIsXHJcbn07XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG1ldHJpY3NQYXJhbWV0ZXJzOiBNZXRyaWNzUGFyYW1ldGVycztcclxufTtcclxuXHJcbmNvbnN0IE1ldHJpY3NDYW52YXM6IEZDPFByb3BzPiA9ICh7IG1ldHJpY3NQYXJhbWV0ZXJzIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgZm9udFdlaWdodCA9IG1ldHJpY3NQYXJhbWV0ZXJzLmJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgY29uc3QgZm9udFN0eWxlID0gbWV0cmljc1BhcmFtZXRlcnMuaXRhbGljID8gXCJpdGFsaWNcIiA6IFwiXCI7XHJcbiAgY29uc3QgW21ldHJpY3NdID0gdXNlRm9udE1ldHJpY3MobWV0cmljc1BhcmFtZXRlcnMuZm9udEZhbWlseSwge1xyXG4gICAgb3JpZ2luOiBcInRvcFwiLFxyXG4gICAgZm9udFN0eWxlLFxyXG4gICAgZm9udFdlaWdodCxcclxuICAgIGNhcEhlaWdodDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJ1cHBlclwiXSxcclxuICAgIHhIZWlnaHQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1wibG93ZXJcIl0sXHJcbiAgICBkZXNjZW50OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImRlc2NlbnRcIl0sXHJcbiAgICBhc2NlbnQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1wiYXNjZW50XCJdLFxyXG4gICAgdGl0dGxlOiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcInRpdHRsZVwiXSxcclxuICAgIGJhc2VsaW5lOiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImJhc2VsaW5lXCJdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHByaW50TGluZSA9IChcclxuICAgICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIG9mZnNldDogbnVtYmVyLFxyXG4gICAgICBjb2xvcjogc3RyaW5nXHJcbiAgICApID0+IHtcclxuICAgICAgY3R4IS5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICBjdHghLmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygwLCBwYWRkaW5nICsgb2Zmc2V0ICogZm9udFNpemUgKiBwaXhlbFJhdGlvKTtcclxuICAgICAgY3R4LmxpbmVUbyhjdHghLmNhbnZhcy53aWR0aCwgcGFkZGluZyArIG9mZnNldCAqIGZvbnRTaXplICogcGl4ZWxSYXRpbyk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHBpeGVsUmF0aW8gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xyXG4gIGNvbnN0IGZvbnRTaXplID0gNjA7XHJcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKGZvbnRTaXplICogMik7XHJcbiAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiAzO1xyXG4gIGNvbnN0IHBhZGRpbmcgPSBNYXRoLmNlaWwoZm9udFNpemUgKiAwLjUpO1xyXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aCAqIHBpeGVsUmF0aW87XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogcGl4ZWxSYXRpbztcclxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICc5MCUnOy8vYCR7d2lkdGh9cHhgO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICc5MCUnOy8vYCR7aGVpZ2h0fXB4YDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4IS5maWxsU3R5bGUgPSBcIiNBQUVFRUVcIjtcclxuICAgIGN0eCEuZmlsbFJlY3QoMCwgMCwgY3R4IS5jYW52YXMud2lkdGgsIGN0eCEuY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHghLmZvbnQgPSBgJHtmb250U3R5bGV9ICR7Zm9udFdlaWdodH0gJHtmb250U2l6ZSAqIHBpeGVsUmF0aW99cHggJHtcclxuICAgICAgbWV0cmljc1BhcmFtZXRlcnMuZm9udEZhbWlseVxyXG4gICAgfWA7XHJcbiAgICBjdHghLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eCEudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuICAgIGN0eCEuZmlsbFRleHQoXHJcbiAgICAgIG1ldHJpY3NQYXJhbWV0ZXJzLnRleHQsXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhZGRpbmcgKyBtZXRyaWNzLm9mZnNldHMudG9wICogZm9udFNpemUgKiBwaXhlbFJhdGlvXHJcbiAgICApO1xyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMudmlzaWJsZU9mZnNldHMuZm9yRWFjaCgob2Zmc2V0KSA9PlxyXG4gICAgICBwcmludExpbmUoY3R4ISwgbWV0cmljcy5vZmZzZXRzW29mZnNldF0sIG9mZnNldENvbG9yc1tvZmZzZXRdKVxyXG4gICAgKTtcclxuICB9LCBbXHJcbiAgICBmb250U3R5bGUsXHJcbiAgICBmb250V2VpZ2h0LFxyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMsXHJcbiAgICBtZXRyaWNzLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Y2FudmFzXHJcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgPjwvY2FudmFzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNzQ2FudmFzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9