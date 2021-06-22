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
  var pixelRatio =  true ? window.devicePixelRatio : 0;
  console.log('PIXEL RATIO: ', pixelRatio);
  var fontSize = 64;
  var height = Math.ceil(fontSize * 2);
  var width = height * 3;
  var padding = Math.ceil(fontSize * 0.5);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var printLine = function printLine(ctx, offset, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, padding + offset * fontSize * pixelRatio);
      ctx.lineTo(ctx.canvas.width, padding + offset * fontSize * pixelRatio);
      ctx.stroke();
    };

    var canvas = canvasRef.current;
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
  }, [fontStyle, fontWeight, metricsParameters, metrics, pixelRatio, width, height, padding]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("canvas", {
    ref: canvasRef,
    width: width * pixelRatio,
    height: height * pixelRatio,
    style: {
      position: "absolute",
      width: width,
      height: height
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhcy50c3giXSwibmFtZXMiOlsib2Zmc2V0Q29sb3JzIiwidG9wIiwiYXNjZW50IiwidGl0dGxlIiwidXBwZXIiLCJsb3dlciIsImJhc2VsaW5lIiwiYm90dG9tIiwiZGVzY2VudCIsInJlc2VydmVkMiIsInJlc2VydmVkMyIsIk1ldHJpY3NDYW52YXMiLCJtZXRyaWNzUGFyYW1ldGVycyIsImZvbnRXZWlnaHQiLCJib2xkIiwiZm9udFN0eWxlIiwiaXRhbGljIiwidXNlRm9udE1ldHJpY3MiLCJmb250RmFtaWx5Iiwib3JpZ2luIiwiY2FwSGVpZ2h0Iiwib2Zmc2V0Q2hhcnMiLCJ4SGVpZ2h0IiwibWV0cmljcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsInBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY29uc29sZSIsImxvZyIsImZvbnRTaXplIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJ3aWR0aCIsInBhZGRpbmciLCJ1c2VFZmZlY3QiLCJwcmludExpbmUiLCJjdHgiLCJvZmZzZXQiLCJjb2xvciIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2FudmFzIiwic3Ryb2tlIiwiY3VycmVudCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInRleHQiLCJvZmZzZXRzIiwidmlzaWJsZU9mZnNldHMiLCJmb3JFYWNoIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLEtBQUcsRUFBRSxrQkFEYztBQUVuQkMsUUFBTSxFQUFFLGlCQUZXO0FBR25CQyxRQUFNLEVBQUUsa0JBSFc7QUFJbkJDLE9BQUssRUFBRSxnQkFK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K0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODhiODJjYjU4ZTgwOGU1MWJhMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9udE1ldHJpY3MgfSBmcm9tIFwiQGdyb292aXovZm9udC1tZXRyaWNzXCI7XHJcbmltcG9ydCB7IE1ldHJpY3NQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vTWV0cmljc1BhcmFtZXRlcnNcIjtcclxuXHJcbmNvbnN0IG9mZnNldENvbG9ycyA9IHtcclxuICB0b3A6IFwicmdiKDEzNiwxNzQsMjI1KVwiLFxyXG4gIGFzY2VudDogXCJyZ2IoMTM1LDE3MCwzNSlcIixcclxuICB0aXR0bGU6IFwicmdiKDE3MSwxMTgsMjQyKVwiLFxyXG4gIHVwcGVyOiBcInJnYig2MiwxOTUsNzMpXCIsXHJcbiAgbG93ZXI6IFwicmdiKDI0Niw2NiwyMDgpXCIsXHJcbiAgYmFzZWxpbmU6IFwicmdiKDEzMiwxODMsMTQzKVwiLFxyXG4gIGJvdHRvbTogXCJyZ2IoMjA3LDcwLDg4KVwiLFxyXG4gIGRlc2NlbnQ6IFwicmdiKDI0NywxNDcsMzApXCIsXHJcbiAgcmVzZXJ2ZWQyOiBcInJnYigxNDQsMTEyLDk0KVwiLFxyXG4gIHJlc2VydmVkMzogXCJyZ2IoMjUzLDg5LDIzKVwiLFxyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBtZXRyaWNzUGFyYW1ldGVyczogTWV0cmljc1BhcmFtZXRlcnM7XHJcbn07XHJcblxyXG5jb25zdCBNZXRyaWNzQ2FudmFzOiBGQzxQcm9wcz4gPSAoeyBtZXRyaWNzUGFyYW1ldGVycyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGZvbnRXZWlnaHQgPSBtZXRyaWNzUGFyYW1ldGVycy5ib2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gIGNvbnN0IGZvbnRTdHlsZSA9IG1ldHJpY3NQYXJhbWV0ZXJzLml0YWxpYyA/IFwiaXRhbGljXCIgOiBcIlwiO1xyXG4gIGNvbnN0IFttZXRyaWNzXSA9IHVzZUZvbnRNZXRyaWNzKG1ldHJpY3NQYXJhbWV0ZXJzLmZvbnRGYW1pbHksIHtcclxuICAgIG9yaWdpbjogXCJ0b3BcIixcclxuICAgIGZvbnRTdHlsZSxcclxuICAgIGZvbnRXZWlnaHQsXHJcbiAgICBjYXBIZWlnaHQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1widXBwZXJcIl0sXHJcbiAgICB4SGVpZ2h0OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImxvd2VyXCJdLFxyXG4gICAgZGVzY2VudDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJkZXNjZW50XCJdLFxyXG4gICAgYXNjZW50OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImFzY2VudFwiXSxcclxuICAgIHRpdHRsZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJ0aXR0bGVcIl0sXHJcbiAgICBiYXNlbGluZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJiYXNlbGluZVwiXSxcclxuICB9KTtcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHBpeGVsUmF0aW8gPVxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcclxuICAgIGNvbnNvbGUubG9nKCdQSVhFTCBSQVRJTzogJywgcGl4ZWxSYXRpbyk7XHJcbiAgY29uc3QgZm9udFNpemUgPSA2NDtcclxuICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoZm9udFNpemUgKiAyKTtcclxuICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIDM7XHJcbiAgY29uc3QgcGFkZGluZyA9IE1hdGguY2VpbChmb250U2l6ZSAqIDAuNSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwcmludExpbmUgPSAoXHJcbiAgICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBvZmZzZXQ6IG51bWJlcixcclxuICAgICAgY29sb3I6IHN0cmluZ1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGN0eCEuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgY3R4IS5saW5lV2lkdGggPSA0O1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oMCwgcGFkZGluZyArIG9mZnNldCAqIGZvbnRTaXplICogcGl4ZWxSYXRpbyk7XHJcbiAgICAgIGN0eC5saW5lVG8oY3R4IS5jYW52YXMud2lkdGgsIHBhZGRpbmcgKyBvZmZzZXQgKiBmb250U2l6ZSAqIHBpeGVsUmF0aW8pO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzIS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHghLmZpbGxTdHlsZSA9IFwiI0FBRUVFRVwiO1xyXG4gICAgY3R4IS5maWxsUmVjdCgwLCAwLCBjdHghLmNhbnZhcy53aWR0aCwgY3R4IS5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eCEuZm9udCA9IGAke2ZvbnRTdHlsZX0gJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplICogcGl4ZWxSYXRpb31weCAke1xyXG4gICAgICBtZXRyaWNzUGFyYW1ldGVycy5mb250RmFtaWx5XHJcbiAgICB9YDtcclxuICAgIGN0eCEuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4IS50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgY3R4IS5maWxsVGV4dChcclxuICAgICAgbWV0cmljc1BhcmFtZXRlcnMudGV4dCxcclxuICAgICAgMCxcclxuICAgICAgcGFkZGluZyArIG1ldHJpY3Mub2Zmc2V0cy50b3AgKiBmb250U2l6ZSAqIHBpeGVsUmF0aW9cclxuICAgICk7XHJcbiAgICBtZXRyaWNzUGFyYW1ldGVycy52aXNpYmxlT2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQpID0+XHJcbiAgICAgIHByaW50TGluZShjdHghLCBtZXRyaWNzLm9mZnNldHNbb2Zmc2V0XSwgb2Zmc2V0Q29sb3JzW29mZnNldF0pXHJcbiAgICApO1xyXG4gIH0sIFtcclxuICAgIGZvbnRTdHlsZSxcclxuICAgIGZvbnRXZWlnaHQsXHJcbiAgICBtZXRyaWNzUGFyYW1ldGVycyxcclxuICAgIG1ldHJpY3MsXHJcbiAgICBwaXhlbFJhdGlvLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICBwYWRkaW5nLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Y2FudmFzXHJcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICB3aWR0aD17d2lkdGggKiBwaXhlbFJhdGlvfVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodCAqIHBpeGVsUmF0aW99XHJcbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoLCBoZWlnaHQgfX1cclxuICAgID48L2NhbnZhcz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc0NhbnZhcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==