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
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhcy50c3giXSwibmFtZXMiOlsib2Zmc2V0Q29sb3JzIiwidG9wIiwiYXNjZW50IiwidGl0dGxlIiwidXBwZXIiLCJsb3dlciIsImJhc2VsaW5lIiwiYm90dG9tIiwiZGVzY2VudCIsInJlc2VydmVkMiIsInJlc2VydmVkMyIsIk1ldHJpY3NDYW52YXMiLCJtZXRyaWNzUGFyYW1ldGVycyIsImZvbnRXZWlnaHQiLCJib2xkIiwiZm9udFN0eWxlIiwiaXRhbGljIiwidXNlRm9udE1ldHJpY3MiLCJmb250RmFtaWx5Iiwib3JpZ2luIiwiY2FwSGVpZ2h0Iiwib2Zmc2V0Q2hhcnMiLCJ4SGVpZ2h0IiwibWV0cmljcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInByaW50TGluZSIsImN0eCIsIm9mZnNldCIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJwaXhlbFJhdGlvIiwibGluZVRvIiwiY2FudmFzIiwid2lkdGgiLCJzdHJva2UiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJjdXJyZW50Iiwic3R5bGUiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJ0ZXh0Iiwib2Zmc2V0cyIsInZpc2libGVPZmZzZXRzIiwiZm9yRWFjaCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxLQUFHLEVBQUUsa0JBRGM7QUFFbkJDLFFBQU0sRUFBRSxpQkFGVztBQUduQkMsUUFBTSxFQUFFLGtCQUhXO0FBSW5CQyxPQUFLLEVBQUUsZ0JBSlk7QUFLbkJDLE9BQUssRUFBRSxpQkFMWTtBQU1uQkMsVUFBUSxFQUFFLGtCQU5TO0FBT25CQyxRQUFNLEVBQUUsZ0JBUFc7QUFRbkJDLFNBQU8sRUFBRSxpQkFSVTtBQVNuQkMsV0FBUyxFQUFFLGlCQVRRO0FBVW5CQyxXQUFTLEVBQUU7QUFWUSxDQUFyQjs7QUFpQkEsSUFBTUMsYUFBd0IsR0FBRyxTQUEzQkEsYUFBMkIsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsaUJBQStCLFFBQS9CQSxpQkFBK0I7QUFDakUsTUFBTUMsVUFBVSxHQUFHRCxpQkFBaUIsQ0FBQ0UsSUFBbEIsR0FBeUIsTUFBekIsR0FBa0MsUUFBckQ7QUFDQSxNQUFNQyxTQUFTLEdBQUdILGlCQUFpQixDQUFDSSxNQUFsQixHQUEyQixRQUEzQixHQUFzQyxFQUF4RDs7QUFGaUUsd0JBRy9DQyxxRUFBYyxDQUFDTCxpQkFBaUIsQ0FBQ00sVUFBbkIsRUFBK0I7QUFDN0RDLFVBQU0sRUFBRSxLQURxRDtBQUU3REosYUFBUyxFQUFUQSxTQUY2RDtBQUc3REYsY0FBVSxFQUFWQSxVQUg2RDtBQUk3RE8sYUFBUyxFQUFFUixpQkFBaUIsQ0FBQ1MsV0FBbEIsQ0FBOEIsT0FBOUIsQ0FKa0Q7QUFLN0RDLFdBQU8sRUFBRVYsaUJBQWlCLENBQUNTLFdBQWxCLENBQThCLE9BQTlCLENBTG9EO0FBTTdEYixXQUFPLEVBQUVJLGlCQUFpQixDQUFDUyxXQUFsQixDQUE4QixTQUE5QixDQU5vRDtBQU83RG5CLFVBQU0sRUFBRVUsaUJBQWlCLENBQUNTLFdBQWxCLENBQThCLFFBQTlCLENBUHFEO0FBUTdEbEIsVUFBTSxFQUFFUyxpQkFBaUIsQ0FBQ1MsV0FBbEIsQ0FBOEIsUUFBOUIsQ0FScUQ7QUFTN0RmLFlBQVEsRUFBRU0saUJBQWlCLENBQUNTLFdBQWxCLENBQThCLFVBQTlCO0FBVG1ELEdBQS9CLENBSGlDO0FBQUE7QUFBQSxNQUcxREUsT0FIMEQ7O0FBY2pFLE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsZUFBbUMsRUFBTzs7QUFFMUMsUUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FDaEJDLEdBRGdCLEVBRWhCQyxNQUZnQixFQUdoQkMsS0FIZ0IsRUFJYjtBQUNIRixTQUFHLENBQUVHLFdBQUwsR0FBbUJELEtBQW5CO0FBQ0FGLFNBQUcsQ0FBRUksU0FBTCxHQUFpQixDQUFqQjtBQUNBSixTQUFHLENBQUNLLFNBQUo7QUFDQUwsU0FBRyxDQUFDTSxNQUFKLENBQVcsQ0FBWCxFQUFjQyxPQUFPLEdBQUdOLE1BQU0sR0FBR08sUUFBVCxHQUFvQkMsVUFBNUM7QUFDQVQsU0FBRyxDQUFDVSxNQUFKLENBQVdWLEdBQUcsQ0FBRVcsTUFBTCxDQUFZQyxLQUF2QixFQUE4QkwsT0FBTyxHQUFHTixNQUFNLEdBQUdPLFFBQVQsR0FBb0JDLFVBQTVEO0FBQ0FULFNBQUcsQ0FBQ2EsTUFBSjtBQUNELEtBWEQ7O0FBYUYsUUFBTUosVUFBVSxHQUFHLFFBQWdDSyxNQUFNLENBQUNDLGdCQUF2QyxHQUEwRCxDQUE3RTtBQUNBLFFBQU1QLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFFBQU1RLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVWLFFBQVEsR0FBRyxDQUFyQixDQUFmO0FBQ0EsUUFBTUksS0FBSyxHQUFHSSxNQUFNLEdBQUcsQ0FBdkI7QUFDQSxRQUFNVCxPQUFPLEdBQUdVLElBQUksQ0FBQ0MsSUFBTCxDQUFVVixRQUFRLEdBQUcsR0FBckIsQ0FBaEI7QUFDRSxRQUFNRyxNQUFNLEdBQUdmLFNBQVMsQ0FBQ3VCLE9BQXpCO0FBQ0FSLFVBQU0sQ0FBQ0MsS0FBUCxHQUFlQSxLQUFLLEdBQUdILFVBQXZCO0FBQ0FFLFVBQU0sQ0FBQ0ssTUFBUCxHQUFnQkEsTUFBTSxHQUFHUCxVQUF6QjtBQUNBRSxVQUFNLENBQUNTLEtBQVAsQ0FBYVIsS0FBYixhQUF3QkEsS0FBeEI7QUFDQUQsVUFBTSxDQUFDUyxLQUFQLENBQWFKLE1BQWIsYUFBeUJBLE1BQXpCO0FBQ0EsUUFBTWhCLEdBQUcsR0FBR1csTUFBTSxDQUFFVSxVQUFSLENBQW1CLElBQW5CLENBQVo7QUFDQXJCLE9BQUcsQ0FBRXNCLFNBQUwsR0FBaUIsU0FBakI7QUFDQXRCLE9BQUcsQ0FBRXVCLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CdkIsR0FBRyxDQUFFVyxNQUFMLENBQVlDLEtBQWhDLEVBQXVDWixHQUFHLENBQUVXLE1BQUwsQ0FBWUssTUFBbkQ7QUFDQWhCLE9BQUcsQ0FBRXdCLElBQUwsYUFBZXJDLFNBQWYsY0FBNEJGLFVBQTVCLGNBQTBDdUIsUUFBUSxHQUFHQyxVQUFyRCxnQkFDRXpCLGlCQUFpQixDQUFDTSxVQURwQjtBQUdBVSxPQUFHLENBQUVzQixTQUFMLEdBQWlCLE9BQWpCO0FBQ0F0QixPQUFHLENBQUV5QixZQUFMLEdBQW9CLEtBQXBCO0FBQ0F6QixPQUFHLENBQUUwQixRQUFMLENBQ0UxQyxpQkFBaUIsQ0FBQzJDLElBRHBCLEVBRUUsQ0FGRixFQUdFcEIsT0FBTyxHQUFHWixPQUFPLENBQUNpQyxPQUFSLENBQWdCdkQsR0FBaEIsR0FBc0JtQyxRQUF0QixHQUFpQ0MsVUFIN0M7QUFLQXpCLHFCQUFpQixDQUFDNkMsY0FBbEIsQ0FBaUNDLE9BQWpDLENBQXlDLFVBQUM3QixNQUFEO0FBQUEsYUFDdkNGLFNBQVMsQ0FBQ0MsR0FBRCxFQUFPTCxPQUFPLENBQUNpQyxPQUFSLENBQWdCM0IsTUFBaEIsQ0FBUCxFQUFnQzdCLFlBQVksQ0FBQzZCLE1BQUQsQ0FBNUMsQ0FEOEI7QUFBQSxLQUF6QztBQUdELEdBMUNRLEVBMENOLENBQ0RkLFNBREMsRUFFREYsVUFGQyxFQUdERCxpQkFIQyxFQUlEVyxPQUpDLEVBS0RjLFVBTEMsRUFNREcsS0FOQyxFQU9ESSxNQVBDLEVBUURULE9BUkMsQ0ExQ00sQ0FBVDtBQW9EQSxzQkFDRTtBQUNFLE9BQUcsRUFBRVgsU0FEUDtBQUVFLFNBQUssRUFBRWdCLEtBQUssR0FBR0gsVUFGakI7QUFHRSxVQUFNLEVBQUVPLE1BQU0sR0FBR1AsVUFIbkI7QUFJRSxTQUFLLEVBQUU7QUFBRXNCLGNBQVEsRUFBRSxVQUFaO0FBQXdCbkIsV0FBSyxFQUFMQSxLQUF4QjtBQUErQkksWUFBTSxFQUFOQTtBQUEvQjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBNUVEOztHQUFNakMsYTtVQUdjTSxpRTs7O0tBSGROLGE7QUE4RU4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJiODE0NmQ5MWFjOGYyNGMyNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvbnRNZXRyaWNzIH0gZnJvbSBcIkBncm9vdml6L2ZvbnQtbWV0cmljc1wiO1xyXG5pbXBvcnQgeyBNZXRyaWNzUGFyYW1ldGVycyB9IGZyb20gXCIuL01ldHJpY3NQYXJhbWV0ZXJzXCI7XHJcblxyXG5jb25zdCBvZmZzZXRDb2xvcnMgPSB7XHJcbiAgdG9wOiBcInJnYigxMzYsMTc0LDIyNSlcIixcclxuICBhc2NlbnQ6IFwicmdiKDEzNSwxNzAsMzUpXCIsXHJcbiAgdGl0dGxlOiBcInJnYigxNzEsMTE4LDI0MilcIixcclxuICB1cHBlcjogXCJyZ2IoNjIsMTk1LDczKVwiLFxyXG4gIGxvd2VyOiBcInJnYigyNDYsNjYsMjA4KVwiLFxyXG4gIGJhc2VsaW5lOiBcInJnYigxMzIsMTgzLDE0MylcIixcclxuICBib3R0b206IFwicmdiKDIwNyw3MCw4OClcIixcclxuICBkZXNjZW50OiBcInJnYigyNDcsMTQ3LDMwKVwiLFxyXG4gIHJlc2VydmVkMjogXCJyZ2IoMTQ0LDExMiw5NClcIixcclxuICByZXNlcnZlZDM6IFwicmdiKDI1Myw4OSwyMylcIixcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgbWV0cmljc1BhcmFtZXRlcnM6IE1ldHJpY3NQYXJhbWV0ZXJzO1xyXG59O1xyXG5cclxuY29uc3QgTWV0cmljc0NhbnZhczogRkM8UHJvcHM+ID0gKHsgbWV0cmljc1BhcmFtZXRlcnMgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBmb250V2VpZ2h0ID0gbWV0cmljc1BhcmFtZXRlcnMuYm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICBjb25zdCBmb250U3R5bGUgPSBtZXRyaWNzUGFyYW1ldGVycy5pdGFsaWMgPyBcIml0YWxpY1wiIDogXCJcIjtcclxuICBjb25zdCBbbWV0cmljc10gPSB1c2VGb250TWV0cmljcyhtZXRyaWNzUGFyYW1ldGVycy5mb250RmFtaWx5LCB7XHJcbiAgICBvcmlnaW46IFwidG9wXCIsXHJcbiAgICBmb250U3R5bGUsXHJcbiAgICBmb250V2VpZ2h0LFxyXG4gICAgY2FwSGVpZ2h0OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcInVwcGVyXCJdLFxyXG4gICAgeEhlaWdodDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJsb3dlclwiXSxcclxuICAgIGRlc2NlbnQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1wiZGVzY2VudFwiXSxcclxuICAgIGFzY2VudDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJhc2NlbnRcIl0sXHJcbiAgICB0aXR0bGU6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1widGl0dGxlXCJdLFxyXG4gICAgYmFzZWxpbmU6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1wiYmFzZWxpbmVcIl0sXHJcbiAgfSk7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcHJpbnRMaW5lID0gKFxyXG4gICAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgb2Zmc2V0OiBudW1iZXIsXHJcbiAgICAgIGNvbG9yOiBzdHJpbmdcclxuICAgICkgPT4ge1xyXG4gICAgICBjdHghLnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgIGN0eCEubGluZVdpZHRoID0gNDtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKDAsIHBhZGRpbmcgKyBvZmZzZXQgKiBmb250U2l6ZSAqIHBpeGVsUmF0aW8pO1xyXG4gICAgICBjdHgubGluZVRvKGN0eCEuY2FudmFzLndpZHRoLCBwYWRkaW5nICsgb2Zmc2V0ICogZm9udFNpemUgKiBwaXhlbFJhdGlvKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA6IDE7XHJcbiAgY29uc3QgZm9udFNpemUgPSA2MDtcclxuICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoZm9udFNpemUgKiAyKTtcclxuICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIDM7XHJcbiAgY29uc3QgcGFkZGluZyA9IE1hdGguY2VpbChmb250U2l6ZSAqIDAuNSk7XHJcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoICogcGl4ZWxSYXRpb1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIHBpeGVsUmF0aW9cclxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YFxyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4IS5maWxsU3R5bGUgPSBcIiNBQUVFRUVcIjtcclxuICAgIGN0eCEuZmlsbFJlY3QoMCwgMCwgY3R4IS5jYW52YXMud2lkdGgsIGN0eCEuY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHghLmZvbnQgPSBgJHtmb250U3R5bGV9ICR7Zm9udFdlaWdodH0gJHtmb250U2l6ZSAqIHBpeGVsUmF0aW99cHggJHtcclxuICAgICAgbWV0cmljc1BhcmFtZXRlcnMuZm9udEZhbWlseVxyXG4gICAgfWA7XHJcbiAgICBjdHghLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eCEudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuICAgIGN0eCEuZmlsbFRleHQoXHJcbiAgICAgIG1ldHJpY3NQYXJhbWV0ZXJzLnRleHQsXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhZGRpbmcgKyBtZXRyaWNzLm9mZnNldHMudG9wICogZm9udFNpemUgKiBwaXhlbFJhdGlvXHJcbiAgICApO1xyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMudmlzaWJsZU9mZnNldHMuZm9yRWFjaCgob2Zmc2V0KSA9PlxyXG4gICAgICBwcmludExpbmUoY3R4ISwgbWV0cmljcy5vZmZzZXRzW29mZnNldF0sIG9mZnNldENvbG9yc1tvZmZzZXRdKVxyXG4gICAgKTtcclxuICB9LCBbXHJcbiAgICBmb250U3R5bGUsXHJcbiAgICBmb250V2VpZ2h0LFxyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMsXHJcbiAgICBtZXRyaWNzLFxyXG4gICAgcGl4ZWxSYXRpbyxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgcGFkZGluZyxcclxuICBdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGNhbnZhc1xyXG4gICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgd2lkdGg9e3dpZHRoICogcGl4ZWxSYXRpb31cclxuICAgICAgaGVpZ2h0PXtoZWlnaHQgKiBwaXhlbFJhdGlvfVxyXG4gICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aCwgaGVpZ2h0IH19XHJcbiAgICA+PC9jYW52YXM+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldHJpY3NDYW52YXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=