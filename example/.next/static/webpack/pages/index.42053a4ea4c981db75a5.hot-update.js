self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "../dist/index.es.js":
/*!***************************!*\
  !*** ../dist/index.es.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontHeightNames": function() { return /* binding */ FontHeightNames; },
/* harmony export */   "FontOffsetNames": function() { return /* binding */ FontOffsetNames; },
/* harmony export */   "defaultFontHeights": function() { return /* binding */ defaultFontHeights; },
/* harmony export */   "defaultFontMetrics": function() { return /* binding */ defaultFontMetrics; },
/* harmony export */   "defaultFontMetricsOptions": function() { return /* binding */ defaultFontMetricsOptions; },
/* harmony export */   "defaultFontOffsets": function() { return /* binding */ defaultFontOffsets; },
/* harmony export */   "getCacheHash": function() { return /* binding */ getCacheHash; },
/* harmony export */   "useFontMetrics": function() { return /* binding */ useFontMetrics; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var FontHeightNames;
(function (FontHeightNames) {
    FontHeightNames["capHeight"] = "capHeight";
    FontHeightNames["xHeight"] = "xHeight";
    FontHeightNames["overShoot"] = "overShoot";
    FontHeightNames["lineHeight"] = "lineHeight";
})(FontHeightNames || (FontHeightNames = {}));

var defaultFontHeights = {
    capHeight: 1,
    overShoot: 1,
    xHeight: 1,
    lineHeight: 1,
};

var FontOffsetNames;
(function (FontOffsetNames) {
    FontOffsetNames["top"] = "top";
    FontOffsetNames["ascent"] = "ascent";
    FontOffsetNames["tittle"] = "tittle";
    FontOffsetNames["upper"] = "upper";
    FontOffsetNames["lower"] = "lower";
    FontOffsetNames["baseline"] = "baseline";
    FontOffsetNames["descent"] = "descent";
    FontOffsetNames["bottom"] = "bottom";
})(FontOffsetNames || (FontOffsetNames = {}));

var defaultFontOffsets = {
    top: 1,
    ascent: 1,
    tittle: 1,
    upper: 1,
    lower: 1,
    baseline: 1,
    descent: 1,
    bottom: 1,
};

var defaultFontMetrics = {
    fontSize: 16,
    heights: defaultFontHeights,
    offsets: defaultFontOffsets,
};

var defaultFontMetricsOptions = {
    fontSize: 128,
    fontWeight: "",
    fontStyle: "",
    origin: "cssTop",
    capHeight: "H",
    xHeight: "x",
    descent: "p",
    ascent: "h",
    tittle: "i",
    baseline: "n",
    overshoot: "O",
};

var getCacheHash = function (font, options) {
    return [
        font,
        options.fontStyle,
        options.fontWeight,
        options.capHeight,
        options.xHeight,
        options.descent,
        options.ascent,
        options.tittle,
        options.baseline,
        options.overshoot,
    ].join("_");
};

/**
 * The custom Hook [useMetrics] returns the [FontMetrics] for the [font]
 * (defined as a font-family or a comma separated list of font-families)
 * and optional [options].
 */
var useFontMetrics = function (font, options) {
    var _a;
    if (options === void 0) { options = {}; }
    if (typeof document === "undefined")
        return [defaultFontMetrics];
    options = Object.assign(defaultFontMetricsOptions, options);
    var padding = options.fontSize * 0.5;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), cache = _b[0], setCache = _b[1];
    var canvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(document.createElement("canvas"))[0];
    var ctx = canvas.getContext("2d");
    var setFont = function () {
        canvas.width = options.fontSize * 2;
        canvas.height = options.fontSize * 2 + padding;
        ctx.font = options.fontStyle + " " + options.fontWeight + " " + options.fontSize + "px " + font;
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
    };
    var setAlignment = function (baseline) {
        // const ty = baseline === 'bottom' ? canvas.height : 0
        // ctx.setTransform(1, 0, 0, 1, 0, ty)
        ctx.textBaseline = baseline;
    };
    var updateText = function (text) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(text, canvas.width / 2, ctx.textBaseline === "bottom" ? canvas.height : padding);
    };
    var computeCssLineHeight = function () {
        var div = document.createElement("DIV");
        div.id = "__textMeasure";
        div.innerHTML = "x";
        div.style.position = "absolute";
        div.style.top = "-500px";
        div.style.left = "0";
        div.style.fontFamily = font;
        div.style.fontWeight = options.fontWeight;
        div.style.fontStyle = options.fontStyle;
        div.style.fontSize = options.fontSize + "px";
        document.body.appendChild(div);
        var lineHeight = div.offsetHeight;
        document.body.removeChild(div);
        return lineHeight;
    };
    var computeCanvasLineHeight = function () {
        var letter = "A";
        setAlignment("bottom");
        var gutter = canvas.height - measureBottom(letter) - padding;
        setAlignment("top");
        return measureBottom(letter) + gutter;
    };
    var getPixels = function (text) {
        updateText(text);
        return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    };
    var getFirstIndex = function (text) {
        var pixels = getPixels(text);
        for (var i = 3, n = pixels.length; i < n; i += 4) {
            if (pixels[i] > 0)
                return (i - 3) / 4;
        }
        return pixels.length;
    };
    var getLastIndex = function (text) {
        var pixels = getPixels(text);
        for (var i = pixels.length - 1; i >= 3; i -= 4) {
            if (pixels[i] > 0)
                return i / 4;
        }
        return 0;
    };
    var measureTop = function (text) {
        return Math.round(getFirstIndex(text) / canvas.width) - padding;
    };
    var measureBottom = function (text) {
        return Math.round(getLastIndex(text) / canvas.width) - padding;
    };
    var normalize = function (metrics, fontSize, origin) {
        console.log("MMETRICS: ", metrics);
        var result = {
            fontSize: metrics.fontSize,
            heights: Object.assign({}, metrics.heights),
            offsets: Object.assign({}, metrics.offsets),
        };
        if (fontSize !== 1) {
            for (var key in metrics.heights) {
                result.heights[key] /= fontSize;
            }
            for (var key in metrics.offsets) {
                result.offsets[key] /= fontSize;
            }
        }
        var offset = result.offsets[origin];
        for (var key in metrics.offsets) {
            result.offsets[key] -= offset;
        }
        console.log("NNEW MMETRICS: ", result);
        return result;
    };
    var getMetrics = function () {
        var cssLineHeight = computeCssLineHeight();
        var canvasLineHeight = computeCanvasLineHeight();
        var offsets = {
            top: 0,
            ascent: measureTop(options.ascent),
            tittle: measureTop(options.tittle),
            upper: measureTop(options.capHeight),
            lower: measureTop(options.xHeight),
            baseline: measureBottom(options.baseline),
            descent: measureBottom(options.descent),
            bottom: canvasLineHeight,
        };
        var problems = Object.keys(offsets).filter(function (x) { return x !== "top" && offsets[x] <= 0; });
        if (problems.length > 0) {
            console.log("PROBLEMS: ", problems);
            var delta = Math.min.apply(Math, problems.map(function (x) { return offsets[x]; })) - canvasLineHeight * 0.05;
            offsets.top += delta;
        }
        var heights = {
            capHeight: offsets.baseline - offsets.upper,
            overShoot: measureBottom(options.overshoot) - offsets.baseline,
            xHeight: offsets.baseline - offsets.lower,
            lineHeight: cssLineHeight,
        };
        return {
            fontSize: options.fontSize,
            heights: heights,
            offsets: offsets,
        };
    };
    var hash = getCacheHash(font, options);
    if (cache[hash]) {
        if (options.fontSize <= cache[hash].fontSize) {
            return [normalize(cache[hash], 1, options.origin)];
        }
    }
    setFont();
    var newMetrics = normalize(getMetrics(), options.fontSize, options.origin);
    setCache(Object.assign(cache, (_a = {},
        _a[hash] = newMetrics,
        _a)));
    return [newMetrics];
};


//# sourceMappingURL=index.es.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2Rpc3QvaW5kZXguZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQVEsR0FBRztBQUN4QixpQkFBaUIsK0NBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSx1Q0FBdUMsRUFBRTtBQUMxRztBQUNBO0FBQ0Esd0VBQXdFLG1CQUFtQixFQUFFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVpSztBQUNqSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MjA1M2E0ZWE0Yzk4MWRiNzVhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBGb250SGVpZ2h0TmFtZXM7XHJcbihmdW5jdGlvbiAoRm9udEhlaWdodE5hbWVzKSB7XHJcbiAgICBGb250SGVpZ2h0TmFtZXNbXCJjYXBIZWlnaHRcIl0gPSBcImNhcEhlaWdodFwiO1xyXG4gICAgRm9udEhlaWdodE5hbWVzW1wieEhlaWdodFwiXSA9IFwieEhlaWdodFwiO1xyXG4gICAgRm9udEhlaWdodE5hbWVzW1wib3ZlclNob290XCJdID0gXCJvdmVyU2hvb3RcIjtcclxuICAgIEZvbnRIZWlnaHROYW1lc1tcImxpbmVIZWlnaHRcIl0gPSBcImxpbmVIZWlnaHRcIjtcclxufSkoRm9udEhlaWdodE5hbWVzIHx8IChGb250SGVpZ2h0TmFtZXMgPSB7fSkpO1xuXG52YXIgZGVmYXVsdEZvbnRIZWlnaHRzID0ge1xyXG4gICAgY2FwSGVpZ2h0OiAxLFxyXG4gICAgb3ZlclNob290OiAxLFxyXG4gICAgeEhlaWdodDogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbn07XG5cbnZhciBGb250T2Zmc2V0TmFtZXM7XHJcbihmdW5jdGlvbiAoRm9udE9mZnNldE5hbWVzKSB7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJ0b3BcIl0gPSBcInRvcFwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1wiYXNjZW50XCJdID0gXCJhc2NlbnRcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcInRpdHRsZVwiXSA9IFwidGl0dGxlXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJ1cHBlclwiXSA9IFwidXBwZXJcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcImxvd2VyXCJdID0gXCJsb3dlclwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1wiYmFzZWxpbmVcIl0gPSBcImJhc2VsaW5lXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJkZXNjZW50XCJdID0gXCJkZXNjZW50XCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJib3R0b21cIl0gPSBcImJvdHRvbVwiO1xyXG59KShGb250T2Zmc2V0TmFtZXMgfHwgKEZvbnRPZmZzZXROYW1lcyA9IHt9KSk7XG5cbnZhciBkZWZhdWx0Rm9udE9mZnNldHMgPSB7XHJcbiAgICB0b3A6IDEsXHJcbiAgICBhc2NlbnQ6IDEsXHJcbiAgICB0aXR0bGU6IDEsXHJcbiAgICB1cHBlcjogMSxcclxuICAgIGxvd2VyOiAxLFxyXG4gICAgYmFzZWxpbmU6IDEsXHJcbiAgICBkZXNjZW50OiAxLFxyXG4gICAgYm90dG9tOiAxLFxyXG59O1xuXG52YXIgZGVmYXVsdEZvbnRNZXRyaWNzID0ge1xyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgaGVpZ2h0czogZGVmYXVsdEZvbnRIZWlnaHRzLFxyXG4gICAgb2Zmc2V0czogZGVmYXVsdEZvbnRPZmZzZXRzLFxyXG59O1xuXG52YXIgZGVmYXVsdEZvbnRNZXRyaWNzT3B0aW9ucyA9IHtcclxuICAgIGZvbnRTaXplOiAxMjgsXHJcbiAgICBmb250V2VpZ2h0OiBcIlwiLFxyXG4gICAgZm9udFN0eWxlOiBcIlwiLFxyXG4gICAgb3JpZ2luOiBcImNzc1RvcFwiLFxyXG4gICAgY2FwSGVpZ2h0OiBcIkhcIixcclxuICAgIHhIZWlnaHQ6IFwieFwiLFxyXG4gICAgZGVzY2VudDogXCJwXCIsXHJcbiAgICBhc2NlbnQ6IFwiaFwiLFxyXG4gICAgdGl0dGxlOiBcImlcIixcclxuICAgIGJhc2VsaW5lOiBcIm5cIixcclxuICAgIG92ZXJzaG9vdDogXCJPXCIsXHJcbn07XG5cbnZhciBnZXRDYWNoZUhhc2ggPSBmdW5jdGlvbiAoZm9udCwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBmb250LFxyXG4gICAgICAgIG9wdGlvbnMuZm9udFN0eWxlLFxyXG4gICAgICAgIG9wdGlvbnMuZm9udFdlaWdodCxcclxuICAgICAgICBvcHRpb25zLmNhcEhlaWdodCxcclxuICAgICAgICBvcHRpb25zLnhIZWlnaHQsXHJcbiAgICAgICAgb3B0aW9ucy5kZXNjZW50LFxyXG4gICAgICAgIG9wdGlvbnMuYXNjZW50LFxyXG4gICAgICAgIG9wdGlvbnMudGl0dGxlLFxyXG4gICAgICAgIG9wdGlvbnMuYmFzZWxpbmUsXHJcbiAgICAgICAgb3B0aW9ucy5vdmVyc2hvb3QsXHJcbiAgICBdLmpvaW4oXCJfXCIpO1xyXG59O1xuXG4vKipcclxuICogVGhlIGN1c3RvbSBIb29rIFt1c2VNZXRyaWNzXSByZXR1cm5zIHRoZSBbRm9udE1ldHJpY3NdIGZvciB0aGUgW2ZvbnRdXHJcbiAqIChkZWZpbmVkIGFzIGEgZm9udC1mYW1pbHkgb3IgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBmb250LWZhbWlsaWVzKVxyXG4gKiBhbmQgb3B0aW9uYWwgW29wdGlvbnNdLlxyXG4gKi9cclxudmFyIHVzZUZvbnRNZXRyaWNzID0gZnVuY3Rpb24gKGZvbnQsIG9wdGlvbnMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIHJldHVybiBbZGVmYXVsdEZvbnRNZXRyaWNzXTtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRGb250TWV0cmljc09wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLmZvbnRTaXplICogMC41O1xyXG4gICAgdmFyIF9iID0gdXNlU3RhdGUoe30pLCBjYWNoZSA9IF9iWzBdLCBzZXRDYWNoZSA9IF9iWzFdO1xyXG4gICAgdmFyIGNhbnZhcyA9IHVzZVN0YXRlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpWzBdO1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB2YXIgc2V0Rm9udCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBvcHRpb25zLmZvbnRTaXplICogMjtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5mb250U2l6ZSAqIDIgKyBwYWRkaW5nO1xyXG4gICAgICAgIGN0eC5mb250ID0gb3B0aW9ucy5mb250U3R5bGUgKyBcIiBcIiArIG9wdGlvbnMuZm9udFdlaWdodCArIFwiIFwiICsgb3B0aW9ucy5mb250U2l6ZSArIFwicHggXCIgKyBmb250O1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRBbGlnbm1lbnQgPSBmdW5jdGlvbiAoYmFzZWxpbmUpIHtcclxuICAgICAgICAvLyBjb25zdCB0eSA9IGJhc2VsaW5lID09PSAnYm90dG9tJyA/IGNhbnZhcy5oZWlnaHQgOiAwXHJcbiAgICAgICAgLy8gY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCB0eSlcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gYmFzZWxpbmU7XHJcbiAgICB9O1xyXG4gICAgdmFyIHVwZGF0ZVRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgY2FudmFzLndpZHRoIC8gMiwgY3R4LnRleHRCYXNlbGluZSA9PT0gXCJib3R0b21cIiA/IGNhbnZhcy5oZWlnaHQgOiBwYWRkaW5nKTtcclxuICAgIH07XHJcbiAgICB2YXIgY29tcHV0ZUNzc0xpbmVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgZGl2LmlkID0gXCJfX3RleHRNZWFzdXJlXCI7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwieFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBkaXYuc3R5bGUudG9wID0gXCItNTAwcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udDtcclxuICAgICAgICBkaXYuc3R5bGUuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodDtcclxuICAgICAgICBkaXYuc3R5bGUuZm9udFN0eWxlID0gb3B0aW9ucy5mb250U3R5bGU7XHJcbiAgICAgICAgZGl2LnN0eWxlLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZSArIFwicHhcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSBkaXYub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICByZXR1cm4gbGluZUhlaWdodDtcclxuICAgIH07XHJcbiAgICB2YXIgY29tcHV0ZUNhbnZhc0xpbmVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxldHRlciA9IFwiQVwiO1xyXG4gICAgICAgIHNldEFsaWdubWVudChcImJvdHRvbVwiKTtcclxuICAgICAgICB2YXIgZ3V0dGVyID0gY2FudmFzLmhlaWdodCAtIG1lYXN1cmVCb3R0b20obGV0dGVyKSAtIHBhZGRpbmc7XHJcbiAgICAgICAgc2V0QWxpZ25tZW50KFwidG9wXCIpO1xyXG4gICAgICAgIHJldHVybiBtZWFzdXJlQm90dG9tKGxldHRlcikgKyBndXR0ZXI7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldFBpeGVscyA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgdXBkYXRlVGV4dCh0ZXh0KTtcclxuICAgICAgICByZXR1cm4gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLmRhdGE7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldEZpcnN0SW5kZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBwaXhlbHMgPSBnZXRQaXhlbHModGV4dCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDMsIG4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbjsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChwaXhlbHNbaV0gPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpIC0gMykgLyA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl4ZWxzLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0TGFzdEluZGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgcGl4ZWxzID0gZ2V0UGl4ZWxzKHRleHQpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBwaXhlbHMubGVuZ3RoIC0gMTsgaSA+PSAzOyBpIC09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHBpeGVsc1tpXSA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAvIDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIHZhciBtZWFzdXJlVG9wID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChnZXRGaXJzdEluZGV4KHRleHQpIC8gY2FudmFzLndpZHRoKSAtIHBhZGRpbmc7XHJcbiAgICB9O1xyXG4gICAgdmFyIG1lYXN1cmVCb3R0b20gPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGdldExhc3RJbmRleCh0ZXh0KSAvIGNhbnZhcy53aWR0aCkgLSBwYWRkaW5nO1xyXG4gICAgfTtcclxuICAgIHZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAobWV0cmljcywgZm9udFNpemUsIG9yaWdpbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTU1FVFJJQ1M6IFwiLCBtZXRyaWNzKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogbWV0cmljcy5mb250U2l6ZSxcclxuICAgICAgICAgICAgaGVpZ2h0czogT2JqZWN0LmFzc2lnbih7fSwgbWV0cmljcy5oZWlnaHRzKSxcclxuICAgICAgICAgICAgb2Zmc2V0czogT2JqZWN0LmFzc2lnbih7fSwgbWV0cmljcy5vZmZzZXRzKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChmb250U2l6ZSAhPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbWV0cmljcy5oZWlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaGVpZ2h0c1trZXldIC89IGZvbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBtZXRyaWNzLm9mZnNldHMpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5vZmZzZXRzW2tleV0gLz0gZm9udFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHJlc3VsdC5vZmZzZXRzW29yaWdpbl07XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG1ldHJpY3Mub2Zmc2V0cykge1xyXG4gICAgICAgICAgICByZXN1bHQub2Zmc2V0c1trZXldIC09IG9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOTkVXIE1NRVRSSUNTOiBcIiwgcmVzdWx0KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRNZXRyaWNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjc3NMaW5lSGVpZ2h0ID0gY29tcHV0ZUNzc0xpbmVIZWlnaHQoKTtcclxuICAgICAgICB2YXIgY2FudmFzTGluZUhlaWdodCA9IGNvbXB1dGVDYW52YXNMaW5lSGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldHMgPSB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYXNjZW50OiBtZWFzdXJlVG9wKG9wdGlvbnMuYXNjZW50KSxcclxuICAgICAgICAgICAgdGl0dGxlOiBtZWFzdXJlVG9wKG9wdGlvbnMudGl0dGxlKSxcclxuICAgICAgICAgICAgdXBwZXI6IG1lYXN1cmVUb3Aob3B0aW9ucy5jYXBIZWlnaHQpLFxyXG4gICAgICAgICAgICBsb3dlcjogbWVhc3VyZVRvcChvcHRpb25zLnhIZWlnaHQpLFxyXG4gICAgICAgICAgICBiYXNlbGluZTogbWVhc3VyZUJvdHRvbShvcHRpb25zLmJhc2VsaW5lKSxcclxuICAgICAgICAgICAgZGVzY2VudDogbWVhc3VyZUJvdHRvbShvcHRpb25zLmRlc2NlbnQpLFxyXG4gICAgICAgICAgICBib3R0b206IGNhbnZhc0xpbmVIZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcHJvYmxlbXMgPSBPYmplY3Qua2V5cyhvZmZzZXRzKS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggIT09IFwidG9wXCIgJiYgb2Zmc2V0c1t4XSA8PSAwOyB9KTtcclxuICAgICAgICBpZiAocHJvYmxlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBST0JMRU1TOiBcIiwgcHJvYmxlbXMpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1pbi5hcHBseShNYXRoLCBwcm9ibGVtcy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIG9mZnNldHNbeF07IH0pKSAtIGNhbnZhc0xpbmVIZWlnaHQgKiAwLjA1O1xyXG4gICAgICAgICAgICBvZmZzZXRzLnRvcCArPSBkZWx0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGhlaWdodHMgPSB7XHJcbiAgICAgICAgICAgIGNhcEhlaWdodDogb2Zmc2V0cy5iYXNlbGluZSAtIG9mZnNldHMudXBwZXIsXHJcbiAgICAgICAgICAgIG92ZXJTaG9vdDogbWVhc3VyZUJvdHRvbShvcHRpb25zLm92ZXJzaG9vdCkgLSBvZmZzZXRzLmJhc2VsaW5lLFxyXG4gICAgICAgICAgICB4SGVpZ2h0OiBvZmZzZXRzLmJhc2VsaW5lIC0gb2Zmc2V0cy5sb3dlcixcclxuICAgICAgICAgICAgbGluZUhlaWdodDogY3NzTGluZUhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBvcHRpb25zLmZvbnRTaXplLFxyXG4gICAgICAgICAgICBoZWlnaHRzOiBoZWlnaHRzLFxyXG4gICAgICAgICAgICBvZmZzZXRzOiBvZmZzZXRzLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhc2ggPSBnZXRDYWNoZUhhc2goZm9udCwgb3B0aW9ucyk7XHJcbiAgICBpZiAoY2FjaGVbaGFzaF0pIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5mb250U2l6ZSA8PSBjYWNoZVtoYXNoXS5mb250U2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW25vcm1hbGl6ZShjYWNoZVtoYXNoXSwgMSwgb3B0aW9ucy5vcmlnaW4pXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRGb250KCk7XHJcbiAgICB2YXIgbmV3TWV0cmljcyA9IG5vcm1hbGl6ZShnZXRNZXRyaWNzKCksIG9wdGlvbnMuZm9udFNpemUsIG9wdGlvbnMub3JpZ2luKTtcclxuICAgIHNldENhY2hlKE9iamVjdC5hc3NpZ24oY2FjaGUsIChfYSA9IHt9LFxyXG4gICAgICAgIF9hW2hhc2hdID0gbmV3TWV0cmljcyxcclxuICAgICAgICBfYSkpKTtcclxuICAgIHJldHVybiBbbmV3TWV0cmljc107XHJcbn07XG5cbmV4cG9ydCB7IEZvbnRIZWlnaHROYW1lcywgRm9udE9mZnNldE5hbWVzLCBkZWZhdWx0Rm9udEhlaWdodHMsIGRlZmF1bHRGb250TWV0cmljcywgZGVmYXVsdEZvbnRNZXRyaWNzT3B0aW9ucywgZGVmYXVsdEZvbnRPZmZzZXRzLCBnZXRDYWNoZUhhc2gsIHVzZUZvbnRNZXRyaWNzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lcy5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=