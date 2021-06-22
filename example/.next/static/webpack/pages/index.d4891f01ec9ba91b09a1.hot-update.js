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

  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
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
    var width = containerRef.current.clientWidth;
    var height = containerRef.current.clientHeight;
    var fontSize = Math.min(width / 6, height / 2); // const fontSize = 60;
    // const height = Math.ceil(fontSize * 2);
    // const width = height * 3;

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    ref: containerRef,
    style: {
      width: '100%',
      height: '100%'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("canvas", {
      ref: canvasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, _this);
};

_s(MetricsCanvas, "wLZt+/9Bx7RjDSIDMEW44TVCKsk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhcy50c3giXSwibmFtZXMiOlsib2Zmc2V0Q29sb3JzIiwidG9wIiwiYXNjZW50IiwidGl0dGxlIiwidXBwZXIiLCJsb3dlciIsImJhc2VsaW5lIiwiYm90dG9tIiwiZGVzY2VudCIsInJlc2VydmVkMiIsInJlc2VydmVkMyIsIk1ldHJpY3NDYW52YXMiLCJtZXRyaWNzUGFyYW1ldGVycyIsImZvbnRXZWlnaHQiLCJib2xkIiwiZm9udFN0eWxlIiwiaXRhbGljIiwidXNlRm9udE1ldHJpY3MiLCJmb250RmFtaWx5Iiwib3JpZ2luIiwiY2FwSGVpZ2h0Iiwib2Zmc2V0Q2hhcnMiLCJ4SGVpZ2h0IiwibWV0cmljcyIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsImNhbnZhc1JlZiIsInVzZUVmZmVjdCIsInByaW50TGluZSIsImN0eCIsIm9mZnNldCIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJwaXhlbFJhdGlvIiwibGluZVRvIiwiY2FudmFzIiwid2lkdGgiLCJzdHJva2UiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNlaWwiLCJzdHlsZSIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInRleHQiLCJvZmZzZXRzIiwidmlzaWJsZU9mZnNldHMiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxLQUFHLEVBQUUsa0JBRGM7QUFFbkJDLFFBQU0sRUFBRSxpQkFGVztBQUduQkMsUUFBTSxF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RGYsU0FEQyxFQUVERixVQUZDLEVBR0RELGlCQUhDLEVBSURXLE9BSkMsQ0E3Q00sQ0FBVDtBQW1EQSxzQkFDRTtBQUFLLE9BQUcsRUFBRUMsWUFBVjtBQUF3QixTQUFLLEVBQUU7QUFBQ2lCLFdBQUssRUFBRSxNQUFSO0FBQWdCTSxZQUFNLEVBQUU7QUFBeEIsS0FBL0I7QUFBQSwyQkFDQTtBQUNFLFNBQUcsRUFBRXJCO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBM0VEOztHQUFNZixhO1VBR2NNLGlFOzs7S0FIZE4sYTtBQTZFTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNDg5MWYwMWVjOWJhOTFiMDlhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9udE1ldHJpY3MgfSBmcm9tIFwiQGdyb292aXovZm9udC1tZXRyaWNzXCI7XHJcbmltcG9ydCB7IE1ldHJpY3NQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vTWV0cmljc1BhcmFtZXRlcnNcIjtcclxuXHJcbmNvbnN0IG9mZnNldENvbG9ycyA9IHtcclxuICB0b3A6IFwicmdiKDEzNiwxNzQsMjI1KVwiLFxyXG4gIGFzY2VudDogXCJyZ2IoMTM1LDE3MCwzNSlcIixcclxuICB0aXR0bGU6IFwicmdiKDE3MSwxMTgsMjQyKVwiLFxyXG4gIHVwcGVyOiBcInJnYig2MiwxOTUsNzMpXCIsXHJcbiAgbG93ZXI6IFwicmdiKDI0Niw2NiwyMDgpXCIsXHJcbiAgYmFzZWxpbmU6IFwicmdiKDEzMiwxODMsMTQzKVwiLFxyXG4gIGJvdHRvbTogXCJyZ2IoMjA3LDcwLDg4KVwiLFxyXG4gIGRlc2NlbnQ6IFwicmdiKDI0NywxNDcsMzApXCIsXHJcbiAgcmVzZXJ2ZWQyOiBcInJnYigxNDQsMTEyLDk0KVwiLFxyXG4gIHJlc2VydmVkMzogXCJyZ2IoMjUzLDg5LDIzKVwiLFxyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBtZXRyaWNzUGFyYW1ldGVyczogTWV0cmljc1BhcmFtZXRlcnM7XHJcbn07XHJcblxyXG5jb25zdCBNZXRyaWNzQ2FudmFzOiBGQzxQcm9wcz4gPSAoeyBtZXRyaWNzUGFyYW1ldGVycyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGZvbnRXZWlnaHQgPSBtZXRyaWNzUGFyYW1ldGVycy5ib2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gIGNvbnN0IGZvbnRTdHlsZSA9IG1ldHJpY3NQYXJhbWV0ZXJzLml0YWxpYyA/IFwiaXRhbGljXCIgOiBcIlwiO1xyXG4gIGNvbnN0IFttZXRyaWNzXSA9IHVzZUZvbnRNZXRyaWNzKG1ldHJpY3NQYXJhbWV0ZXJzLmZvbnRGYW1pbHksIHtcclxuICAgIG9yaWdpbjogXCJ0b3BcIixcclxuICAgIGZvbnRTdHlsZSxcclxuICAgIGZvbnRXZWlnaHQsXHJcbiAgICBjYXBIZWlnaHQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1widXBwZXJcIl0sXHJcbiAgICB4SGVpZ2h0OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImxvd2VyXCJdLFxyXG4gICAgZGVzY2VudDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJkZXNjZW50XCJdLFxyXG4gICAgYXNjZW50OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImFzY2VudFwiXSxcclxuICAgIHRpdHRsZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJ0aXR0bGVcIl0sXHJcbiAgICBiYXNlbGluZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJiYXNlbGluZVwiXSxcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHByaW50TGluZSA9IChcclxuICAgICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIG9mZnNldDogbnVtYmVyLFxyXG4gICAgICBjb2xvcjogc3RyaW5nXHJcbiAgICApID0+IHtcclxuICAgICAgY3R4IS5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICBjdHghLmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygwLCBwYWRkaW5nICsgb2Zmc2V0ICogZm9udFNpemUgKiBwaXhlbFJhdGlvKTtcclxuICAgICAgY3R4LmxpbmVUbyhjdHghLmNhbnZhcy53aWR0aCwgcGFkZGluZyArIG9mZnNldCAqIGZvbnRTaXplICogcGl4ZWxSYXRpbyk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHBpeGVsUmF0aW8gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xyXG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGhcclxuICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHRcclxuICBjb25zdCBmb250U2l6ZSA9IE1hdGgubWluKHdpZHRoLzYsIGhlaWdodC8yKVxyXG4gIC8vIGNvbnN0IGZvbnRTaXplID0gNjA7XHJcbiAgLy8gY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKGZvbnRTaXplICogMik7XHJcbiAgLy8gY29uc3Qgd2lkdGggPSBoZWlnaHQgKiAzO1xyXG4gIGNvbnN0IHBhZGRpbmcgPSBNYXRoLmNlaWwoZm9udFNpemUgKiAwLjUpO1xyXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aCAqIHBpeGVsUmF0aW87XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogcGl4ZWxSYXRpbztcclxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICc5MCUnOy8vYCR7d2lkdGh9cHhgO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICc5MCUnOy8vYCR7aGVpZ2h0fXB4YDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4IS5maWxsU3R5bGUgPSBcIiNBQUVFRUVcIjtcclxuICAgIGN0eCEuZmlsbFJlY3QoMCwgMCwgY3R4IS5jYW52YXMud2lkdGgsIGN0eCEuY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHghLmZvbnQgPSBgJHtmb250U3R5bGV9ICR7Zm9udFdlaWdodH0gJHtmb250U2l6ZSAqIHBpeGVsUmF0aW99cHggJHtcclxuICAgICAgbWV0cmljc1BhcmFtZXRlcnMuZm9udEZhbWlseVxyXG4gICAgfWA7XHJcbiAgICBjdHghLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eCEudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuICAgIGN0eCEuZmlsbFRleHQoXHJcbiAgICAgIG1ldHJpY3NQYXJhbWV0ZXJzLnRleHQsXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhZGRpbmcgKyBtZXRyaWNzLm9mZnNldHMudG9wICogZm9udFNpemUgKiBwaXhlbFJhdGlvXHJcbiAgICApO1xyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMudmlzaWJsZU9mZnNldHMuZm9yRWFjaCgob2Zmc2V0KSA9PlxyXG4gICAgICBwcmludExpbmUoY3R4ISwgbWV0cmljcy5vZmZzZXRzW29mZnNldF0sIG9mZnNldENvbG9yc1tvZmZzZXRdKVxyXG4gICAgKTtcclxuICB9LCBbXHJcbiAgICBmb250U3R5bGUsXHJcbiAgICBmb250V2VpZ2h0LFxyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMsXHJcbiAgICBtZXRyaWNzLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0+XHJcbiAgICA8Y2FudmFzXHJcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldHJpY3NDYW52YXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=