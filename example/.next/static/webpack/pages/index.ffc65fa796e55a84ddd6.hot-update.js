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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2Rpc3QvaW5kZXguZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQVEsR0FBRztBQUN4QixpQkFBaUIsK0NBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRWlLO0FBQ2pLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmYzY1ZmE3OTZlNTVhODRkZGQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudmFyIEZvbnRIZWlnaHROYW1lcztcclxuKGZ1bmN0aW9uIChGb250SGVpZ2h0TmFtZXMpIHtcclxuICAgIEZvbnRIZWlnaHROYW1lc1tcImNhcEhlaWdodFwiXSA9IFwiY2FwSGVpZ2h0XCI7XHJcbiAgICBGb250SGVpZ2h0TmFtZXNbXCJ4SGVpZ2h0XCJdID0gXCJ4SGVpZ2h0XCI7XHJcbiAgICBGb250SGVpZ2h0TmFtZXNbXCJvdmVyU2hvb3RcIl0gPSBcIm92ZXJTaG9vdFwiO1xyXG4gICAgRm9udEhlaWdodE5hbWVzW1wibGluZUhlaWdodFwiXSA9IFwibGluZUhlaWdodFwiO1xyXG59KShGb250SGVpZ2h0TmFtZXMgfHwgKEZvbnRIZWlnaHROYW1lcyA9IHt9KSk7XG5cbnZhciBkZWZhdWx0Rm9udEhlaWdodHMgPSB7XHJcbiAgICBjYXBIZWlnaHQ6IDEsXHJcbiAgICBvdmVyU2hvb3Q6IDEsXHJcbiAgICB4SGVpZ2h0OiAxLFxyXG4gICAgbGluZUhlaWdodDogMSxcclxufTtcblxudmFyIEZvbnRPZmZzZXROYW1lcztcclxuKGZ1bmN0aW9uIChGb250T2Zmc2V0TmFtZXMpIHtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcInRvcFwiXSA9IFwidG9wXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJhc2NlbnRcIl0gPSBcImFzY2VudFwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1widGl0dGxlXCJdID0gXCJ0aXR0bGVcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcInVwcGVyXCJdID0gXCJ1cHBlclwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1wibG93ZXJcIl0gPSBcImxvd2VyXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJiYXNlbGluZVwiXSA9IFwiYmFzZWxpbmVcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcImRlc2NlbnRcIl0gPSBcImRlc2NlbnRcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcImJvdHRvbVwiXSA9IFwiYm90dG9tXCI7XHJcbn0pKEZvbnRPZmZzZXROYW1lcyB8fCAoRm9udE9mZnNldE5hbWVzID0ge30pKTtcblxudmFyIGRlZmF1bHRGb250T2Zmc2V0cyA9IHtcclxuICAgIHRvcDogMSxcclxuICAgIGFzY2VudDogMSxcclxuICAgIHRpdHRsZTogMSxcclxuICAgIHVwcGVyOiAxLFxyXG4gICAgbG93ZXI6IDEsXHJcbiAgICBiYXNlbGluZTogMSxcclxuICAgIGRlc2NlbnQ6IDEsXHJcbiAgICBib3R0b206IDEsXHJcbn07XG5cbnZhciBkZWZhdWx0Rm9udE1ldHJpY3MgPSB7XHJcbiAgICBmb250U2l6ZTogMTYsXHJcbiAgICBoZWlnaHRzOiBkZWZhdWx0Rm9udEhlaWdodHMsXHJcbiAgICBvZmZzZXRzOiBkZWZhdWx0Rm9udE9mZnNldHMsXHJcbn07XG5cbnZhciBkZWZhdWx0Rm9udE1ldHJpY3NPcHRpb25zID0ge1xyXG4gICAgZm9udFNpemU6IDEyOCxcclxuICAgIGZvbnRXZWlnaHQ6IFwiXCIsXHJcbiAgICBmb250U3R5bGU6IFwiXCIsXHJcbiAgICBvcmlnaW46IFwiY3NzVG9wXCIsXHJcbiAgICBjYXBIZWlnaHQ6IFwiSFwiLFxyXG4gICAgeEhlaWdodDogXCJ4XCIsXHJcbiAgICBkZXNjZW50OiBcInBcIixcclxuICAgIGFzY2VudDogXCJoXCIsXHJcbiAgICB0aXR0bGU6IFwiaVwiLFxyXG4gICAgYmFzZWxpbmU6IFwiblwiLFxyXG4gICAgb3ZlcnNob290OiBcIk9cIixcclxufTtcblxudmFyIGdldENhY2hlSGFzaCA9IGZ1bmN0aW9uIChmb250LCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGZvbnQsXHJcbiAgICAgICAgb3B0aW9ucy5mb250U3R5bGUsXHJcbiAgICAgICAgb3B0aW9ucy5mb250V2VpZ2h0LFxyXG4gICAgICAgIG9wdGlvbnMuY2FwSGVpZ2h0LFxyXG4gICAgICAgIG9wdGlvbnMueEhlaWdodCxcclxuICAgICAgICBvcHRpb25zLmRlc2NlbnQsXHJcbiAgICAgICAgb3B0aW9ucy5hc2NlbnQsXHJcbiAgICAgICAgb3B0aW9ucy50aXR0bGUsXHJcbiAgICAgICAgb3B0aW9ucy5iYXNlbGluZSxcclxuICAgICAgICBvcHRpb25zLm92ZXJzaG9vdCxcclxuICAgIF0uam9pbihcIl9cIik7XHJcbn07XG5cbi8qKlxyXG4gKiBUaGUgY3VzdG9tIEhvb2sgW3VzZU1ldHJpY3NdIHJldHVybnMgdGhlIFtGb250TWV0cmljc10gZm9yIHRoZSBbZm9udF1cclxuICogKGRlZmluZWQgYXMgYSBmb250LWZhbWlseSBvciBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIGZvbnQtZmFtaWxpZXMpXHJcbiAqIGFuZCBvcHRpb25hbCBbb3B0aW9uc10uXHJcbiAqL1xyXG52YXIgdXNlRm9udE1ldHJpY3MgPSBmdW5jdGlvbiAoZm9udCwgb3B0aW9ucykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgcmV0dXJuIFtkZWZhdWx0Rm9udE1ldHJpY3NdO1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdEZvbnRNZXRyaWNzT3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICB2YXIgcGFkZGluZyA9IG9wdGlvbnMuZm9udFNpemUgKiAwLjU7XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSh7fSksIGNhY2hlID0gX2JbMF0sIHNldENhY2hlID0gX2JbMV07XHJcbiAgICB2YXIgY2FudmFzID0gdXNlU3RhdGUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSlbMF07XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIHZhciBzZXRGb250ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMuZm9udFNpemUgKiAyO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmZvbnRTaXplICogMiArIHBhZGRpbmc7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBvcHRpb25zLmZvbnRTdHlsZSArIFwiIFwiICsgb3B0aW9ucy5mb250V2VpZ2h0ICsgXCIgXCIgKyBvcHRpb25zLmZvbnRTaXplICsgXCJweCBcIiArIGZvbnQ7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldEFsaWdubWVudCA9IGZ1bmN0aW9uIChiYXNlbGluZSkge1xyXG4gICAgICAgIC8vIGNvbnN0IHR5ID0gYmFzZWxpbmUgPT09ICdib3R0b20nID8gY2FudmFzLmhlaWdodCA6IDBcclxuICAgICAgICAvLyBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIHR5KVxyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBiYXNlbGluZTtcclxuICAgIH07XHJcbiAgICB2YXIgdXBkYXRlVGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBjYW52YXMud2lkdGggLyAyLCBjdHgudGV4dEJhc2VsaW5lID09PSBcImJvdHRvbVwiID8gY2FudmFzLmhlaWdodCA6IHBhZGRpbmcpO1xyXG4gICAgfTtcclxuICAgIHZhciBjb21wdXRlQ3NzTGluZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgICBkaXYuaWQgPSBcIl9fdGV4dE1lYXN1cmVcIjtcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gXCJ4XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBcIi01MDBweFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250O1xyXG4gICAgICAgIGRpdi5zdHlsZS5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0O1xyXG4gICAgICAgIGRpdi5zdHlsZS5mb250U3R5bGUgPSBvcHRpb25zLmZvbnRTdHlsZTtcclxuICAgICAgICBkaXYuc3R5bGUuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplICsgXCJweFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB2YXIgbGluZUhlaWdodCA9IGRpdi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICAgIHJldHVybiBsaW5lSGVpZ2h0O1xyXG4gICAgfTtcclxuICAgIHZhciBjb21wdXRlQ2FudmFzTGluZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGV0dGVyID0gXCJBXCI7XHJcbiAgICAgICAgc2V0QWxpZ25tZW50KFwiYm90dG9tXCIpO1xyXG4gICAgICAgIHZhciBndXR0ZXIgPSBjYW52YXMuaGVpZ2h0IC0gbWVhc3VyZUJvdHRvbShsZXR0ZXIpIC0gcGFkZGluZztcclxuICAgICAgICBzZXRBbGlnbm1lbnQoXCJ0b3BcIik7XHJcbiAgICAgICAgcmV0dXJuIG1lYXN1cmVCb3R0b20obGV0dGVyKSArIGd1dHRlcjtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0UGl4ZWxzID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB1cGRhdGVUZXh0KHRleHQpO1xyXG4gICAgICAgIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkuZGF0YTtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0Rmlyc3RJbmRleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgdmFyIHBpeGVscyA9IGdldFBpeGVscyh0ZXh0KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMywgbiA9IHBpeGVscy5sZW5ndGg7IGkgPCBuOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgaWYgKHBpeGVsc1tpXSA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGkgLSAzKSAvIDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwaXhlbHMubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRMYXN0SW5kZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBwaXhlbHMgPSBnZXRQaXhlbHModGV4dCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHBpeGVscy5sZW5ndGggLSAxOyBpID49IDM7IGkgLT0gNCkge1xyXG4gICAgICAgICAgICBpZiAocGl4ZWxzW2ldID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBpIC8gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgdmFyIG1lYXN1cmVUb3AgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGdldEZpcnN0SW5kZXgodGV4dCkgLyBjYW52YXMud2lkdGgpIC0gcGFkZGluZztcclxuICAgIH07XHJcbiAgICB2YXIgbWVhc3VyZUJvdHRvbSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZ2V0TGFzdEluZGV4KHRleHQpIC8gY2FudmFzLndpZHRoKSAtIHBhZGRpbmc7XHJcbiAgICB9O1xyXG4gICAgdmFyIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChtZXRyaWNzLCBmb250U2l6ZSwgb3JpZ2luKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNTUVUUklDUzogXCIsIG1ldHJpY3MpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBtZXRyaWNzLmZvbnRTaXplLFxyXG4gICAgICAgICAgICBoZWlnaHRzOiBPYmplY3QuYXNzaWduKHt9LCBtZXRyaWNzLmhlaWdodHMpLFxyXG4gICAgICAgICAgICBvZmZzZXRzOiBPYmplY3QuYXNzaWduKHt9LCBtZXRyaWNzLm9mZnNldHMpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGZvbnRTaXplICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBtZXRyaWNzLmhlaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5oZWlnaHRzW2tleV0gLz0gZm9udFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG1ldHJpY3Mub2Zmc2V0cykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm9mZnNldHNba2V5XSAvPSBmb250U2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2Zmc2V0ID0gcmVzdWx0Lm9mZnNldHNbb3JpZ2luXTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbWV0cmljcy5vZmZzZXRzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5vZmZzZXRzW2tleV0gLT0gb2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ORVcgTU1FVFJJQ1M6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldE1ldHJpY3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNzc0xpbmVIZWlnaHQgPSBjb21wdXRlQ3NzTGluZUhlaWdodCgpO1xyXG4gICAgICAgIHZhciBjYW52YXNMaW5lSGVpZ2h0ID0gY29tcHV0ZUNhbnZhc0xpbmVIZWlnaHQoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0cyA9IHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBhc2NlbnQ6IG1lYXN1cmVUb3Aob3B0aW9ucy5hc2NlbnQpLFxyXG4gICAgICAgICAgICB0aXR0bGU6IG1lYXN1cmVUb3Aob3B0aW9ucy50aXR0bGUpLFxyXG4gICAgICAgICAgICB1cHBlcjogbWVhc3VyZVRvcChvcHRpb25zLmNhcEhlaWdodCksXHJcbiAgICAgICAgICAgIGxvd2VyOiBtZWFzdXJlVG9wKG9wdGlvbnMueEhlaWdodCksXHJcbiAgICAgICAgICAgIGJhc2VsaW5lOiBtZWFzdXJlQm90dG9tKG9wdGlvbnMuYmFzZWxpbmUpLFxyXG4gICAgICAgICAgICBkZXNjZW50OiBtZWFzdXJlQm90dG9tKG9wdGlvbnMuZGVzY2VudCksXHJcbiAgICAgICAgICAgIGJvdHRvbTogY2FudmFzTGluZUhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBoZWlnaHRzID0ge1xyXG4gICAgICAgICAgICBjYXBIZWlnaHQ6IG9mZnNldHMuYmFzZWxpbmUgLSBvZmZzZXRzLnVwcGVyLFxyXG4gICAgICAgICAgICBvdmVyU2hvb3Q6IG1lYXN1cmVCb3R0b20ob3B0aW9ucy5vdmVyc2hvb3QpIC0gb2Zmc2V0cy5iYXNlbGluZSxcclxuICAgICAgICAgICAgeEhlaWdodDogb2Zmc2V0cy5iYXNlbGluZSAtIG9mZnNldHMubG93ZXIsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGNzc0xpbmVIZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogb3B0aW9ucy5mb250U2l6ZSxcclxuICAgICAgICAgICAgaGVpZ2h0czogaGVpZ2h0cyxcclxuICAgICAgICAgICAgb2Zmc2V0czogb2Zmc2V0cyxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHZhciBoYXNoID0gZ2V0Q2FjaGVIYXNoKGZvbnQsIG9wdGlvbnMpO1xyXG4gICAgaWYgKGNhY2hlW2hhc2hdKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udFNpemUgPD0gY2FjaGVbaGFzaF0uZm9udFNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtub3JtYWxpemUoY2FjaGVbaGFzaF0sIDEsIG9wdGlvbnMub3JpZ2luKV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Rm9udCgpO1xyXG4gICAgdmFyIG5ld01ldHJpY3MgPSBub3JtYWxpemUoZ2V0TWV0cmljcygpLCBvcHRpb25zLmZvbnRTaXplLCBvcHRpb25zLm9yaWdpbik7XHJcbiAgICBzZXRDYWNoZShPYmplY3QuYXNzaWduKGNhY2hlLCAoX2EgPSB7fSxcclxuICAgICAgICBfYVtoYXNoXSA9IG5ld01ldHJpY3MsXHJcbiAgICAgICAgX2EpKSk7XHJcbiAgICByZXR1cm4gW25ld01ldHJpY3NdO1xyXG59O1xuXG5leHBvcnQgeyBGb250SGVpZ2h0TmFtZXMsIEZvbnRPZmZzZXROYW1lcywgZGVmYXVsdEZvbnRIZWlnaHRzLCBkZWZhdWx0Rm9udE1ldHJpY3MsIGRlZmF1bHRGb250TWV0cmljc09wdGlvbnMsIGRlZmF1bHRGb250T2Zmc2V0cywgZ2V0Q2FjaGVIYXNoLCB1c2VGb250TWV0cmljcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9