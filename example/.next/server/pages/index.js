(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "../dist/index.js":
/*!************************!*\
  !*** ../dist/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var react = __webpack_require__(/*! react */ "react");

exports.FontHeightNames = void 0;
(function (FontHeightNames) {
    FontHeightNames["capHeight"] = "capHeight";
    FontHeightNames["xHeight"] = "xHeight";
    FontHeightNames["overShoot"] = "overShoot";
    FontHeightNames["lineHeight"] = "lineHeight";
})(exports.FontHeightNames || (exports.FontHeightNames = {}));

var defaultFontHeights = {
    capHeight: 1,
    overShoot: 1,
    xHeight: 1,
    lineHeight: 1,
};

exports.FontOffsetNames = void 0;
(function (FontOffsetNames) {
    FontOffsetNames["top"] = "top";
    FontOffsetNames["ascent"] = "ascent";
    FontOffsetNames["tittle"] = "tittle";
    FontOffsetNames["upper"] = "upper";
    FontOffsetNames["lower"] = "lower";
    FontOffsetNames["baseline"] = "baseline";
    FontOffsetNames["descent"] = "descent";
    FontOffsetNames["bottom"] = "bottom";
})(exports.FontOffsetNames || (exports.FontOffsetNames = {}));

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
    var _b = react.useState({}), cache = _b[0], setCache = _b[1];
    var canvas = react.useState(document.createElement("canvas"))[0];
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

exports.defaultFontHeights = defaultFontHeights;
exports.defaultFontMetrics = defaultFontMetrics;
exports.defaultFontMetricsOptions = defaultFontMetricsOptions;
exports.defaultFontOffsets = defaultFontOffsets;
exports.getCacheHash = getCacheHash;
exports.useFontMetrics = useFontMetrics;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/components/MetricsCanvas.tsx":
/*!******************************************!*\
  !*** ./src/components/MetricsCanvas.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grooviz/font-metrics */ "../dist/index.js");

var _jsxFileName = "C:\\Users\\thier\\Projects\\font-metrics\\example\\src\\components\\MetricsCanvas.tsx";


const offsetColors = {
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

const MetricsCanvas = ({
  metricsParameters
}) => {
  const fontWeight = metricsParameters.bold ? "bold" : "normal";
  const fontStyle = metricsParameters.italic ? "italic" : "";
  const [metrics] = (0,_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__.useFontMetrics)(metricsParameters.fontFamily, {
    origin: "top",
    fontStyle,
    fontWeight,
    capHeight: metricsParameters.offsetChars["upper"],
    xHeight: metricsParameters.offsetChars["lower"],
    descent: metricsParameters.offsetChars["descent"],
    ascent: metricsParameters.offsetChars["ascent"],
    tittle: metricsParameters.offsetChars["tittle"],
    baseline: metricsParameters.offsetChars["baseline"]
  });
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (true) return;

    const printLine = (ctx, offset, color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, padding + offset * fontSize * pixelRatio);
      ctx.lineTo(ctx.canvas.width, padding + offset * fontSize * pixelRatio);
      ctx.stroke();
    };

    const pixelRatio =  false ? 0 : 1;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const fontSize = Math.min(width / 6, height / 2); // const fontSize = 60;
    // const height = Math.ceil(fontSize * 2);
    // const width = height * 3;

    const padding = Math.ceil(fontSize * 0.5);
    const canvas = canvasRef.current;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    canvas.style.width = '90%'; //`${width}px`;

    canvas.style.height = '90%'; //`${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#AAEEEE";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = `${fontStyle} ${fontWeight} ${fontSize * pixelRatio}px ${metricsParameters.fontFamily}`;
    ctx.fillStyle = "black";
    ctx.textBaseline = "top";
    ctx.fillText(metricsParameters.text, 0, padding + metrics.offsets.top * fontSize * pixelRatio);
    metricsParameters.visibleOffsets.forEach(offset => printLine(ctx, metrics.offsets[offset], offsetColors[offset]));
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MetricsCanvas);

/***/ }),

/***/ "./src/components/MetricsParameters.tsx":
/*!**********************************************!*\
  !*** ./src/components/MetricsParameters.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grooviz/font-metrics */ "../dist/index.js");


var _jsxFileName = "C:\\Users\\thier\\Projects\\font-metrics\\example\\src\\components\\MetricsParameters.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MetricsParametersForm = ({
  params,
  onParamsChange
}) => {
  const allOffsetCheckboxRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const setFontFamily = fontFamily => onParamsChange(_objectSpread(_objectSpread({}, params), {}, {
    fontFamily
  }));

  const setText = text => onParamsChange(_objectSpread(_objectSpread({}, params), {}, {
    text
  }));

  const toggleBold = () => onParamsChange(_objectSpread(_objectSpread({}, params), {}, {
    bold: !params.bold
  }));

  const toggleItalic = () => onParamsChange(_objectSpread(_objectSpread({}, params), {}, {
    italic: !params.italic
  }));

  const toggleOffset = offsetName => onParamsChange(_objectSpread(_objectSpread({}, params), {}, {
    visibleOffsets: params.visibleOffsets.includes(offsetName) ? params.visibleOffsets.filter(x => x !== offsetName) : [...params.visibleOffsets, offsetName]
  }));

  const toggleAllOffset = () => onParamsChange(_objectSpread(_objectSpread({}, params), {}, {
    visibleOffsets: params.visibleOffsets.length === Object.values(_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__.FontOffsetNames).length ? [] : Object.values(_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__.FontOffsetNames)
  }));

  const setOffsetChar = (offsetName, char) => onParamsChange(_objectSpread(_objectSpread({}, params), {}, {
    offsetChars: _objectSpread(_objectSpread({}, params.offsetChars), {}, {
      [offsetName]: char[0]
    })
  }));

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!allOffsetCheckboxRef.current) return;
    allOffsetCheckboxRef.current.indeterminate = params.visibleOffsets.length > 0 && params.visibleOffsets.length < Object.values(_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__.FontOffsetNames).length;
    allOffsetCheckboxRef.current.checked = params.visibleOffsets.length === Object.values(_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__.FontOffsetNames).length;
  }, [params]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "Text:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              placeholder: "Input some text",
              onChange: e => setText(e.target.value),
              value: params.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "Font:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
              value: params.fontFamily,
              onChange: e => setFontFamily(e.target.value),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Catamaran",
                children: "Catamaran"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Arial",
                children: "Arial"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Staatliches",
                children: "Staatliches"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Syne",
                children: "Syne"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Sabado",
                children: "Sabado"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Verdana",
                children: "Verdana"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Georgia",
                children: "Georgia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Courier New",
                children: "Courier New"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Brush Script MT",
                children: "Brush Script MT"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Impact",
                children: "Impact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "Bold:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "checkbox",
              checked: params.bold,
              onChange: () => toggleBold()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "Italic:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "checkbox",
              checked: params.italic,
              onChange: () => toggleItalic()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "checkbox",
              ref: allOffsetCheckboxRef,
              onChange: () => toggleAllOffset()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, undefined)]
        }, "all", true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, undefined), Object.values(_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_2__.FontOffsetNames).map(offsetName => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "checkbox",
              checked: params.visibleOffsets.includes(offsetName),
              onChange: () => toggleOffset(offsetName)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: offsetName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: !["top", "bottom"].includes(offsetName) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              value: params.offsetChars[offsetName],
              onChange: e => setOffsetChar(offsetName, e.target.value),
              size: 1,
              style: {
                textAlign: "center"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, undefined)]
        }, offsetName, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (MetricsParametersForm);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MetricsParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MetricsParameters */ "./src/components/MetricsParameters.tsx");
/* harmony import */ var _components_MetricsCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MetricsCanvas */ "./src/components/MetricsCanvas.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grooviz/font-metrics */ "../dist/index.js");


var _jsxFileName = "C:\\Users\\thier\\Projects\\font-metrics\\example\\src\\pages\\index.tsx";




function Home() {
  const {
    0: metricsParameters,
    1: setMetricsParameters
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    fontFamily: "Sabado",
    text: "SupArHheifno",
    bold: false,
    italic: false,
    visibleOffsets: Object.values(_grooviz_font_metrics__WEBPACK_IMPORTED_MODULE_4__.FontOffsetNames),
    offsetChars: {
      upper: "H",
      lower: "x",
      descent: "p",
      ascent: "h",
      tittle: "i",
      baseline: "n"
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Font Metrics Hook Hahaha"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Calculate Fonts Metrics using HTML Canvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "This React Package is brought to you by the GROOVIZ Team!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "grid",
        width: "100%",
        gridTemplateColumns: "30% 1fr"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MetricsParameters__WEBPACK_IMPORTED_MODULE_1__.default, {
          params: metricsParameters,
          onParamsChange: x => {
            setMetricsParameters(x);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MetricsCanvas__WEBPACK_IMPORTED_MODULE_2__.default, {
          metricsParameters: metricsParameters
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb250LW1ldHJpY3MtZXhhbXBsZS8uLi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2ZvbnQtbWV0cmljcy1leGFtcGxlLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhcy50c3giLCJ3ZWJwYWNrOi8vZm9udC1tZXRyaWNzLWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9NZXRyaWNzUGFyYW1ldGVycy50c3giLCJ3ZWJwYWNrOi8vZm9udC1tZXRyaWNzLWV4YW1wbGUvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2ZvbnQtbWV0cmljcy1leGFtcGxlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mb250LW1ldHJpY3MtZXhhbXBsZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIm9mZnNldENvbG9ycyIsInRvcCIsImFzY2VudCIsInRpdHRsZSIsInVwcGVyIiwibG93ZXIiLCJiYXNlbGluZSIsImJvdHRvbSIsImRlc2NlbnQiLCJyZXNlcnZlZDIiLCJyZXNlcnZlZDMiLCJNZXRyaWNzQ2FudmFzIiwibWV0cmljc1BhcmFtZXRlcnMiLCJmb250V2VpZ2h0IiwiYm9sZCIsImZvbnRTdHlsZSIsIml0YWxpYyIsIm1ldHJpY3MiLCJ1c2VGb250TWV0cmljcyIsImZvbnRGYW1pbHkiLCJvcmlnaW4iLCJjYXBIZWlnaHQiLCJvZmZzZXRDaGFycyIsInhIZWlnaHQiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJjYW52YXNSZWYiLCJ1c2VFZmZlY3QiLCJwcmludExpbmUiLCJjdHgiLCJvZmZzZXQiLCJjb2xvciIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwicGFkZGluZyIsImZvbnRTaXplIiwicGl4ZWxSYXRpbyIsImxpbmVUbyIsImNhbnZhcyIsIndpZHRoIiwic3Ryb2tlIiwid2luZG93IiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNlaWwiLCJzdHlsZSIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInRleHQiLCJvZmZzZXRzIiwidmlzaWJsZU9mZnNldHMiLCJmb3JFYWNoIiwiTWV0cmljc1BhcmFtZXRlcnNGb3JtIiwicGFyYW1zIiwib25QYXJhbXNDaGFuZ2UiLCJhbGxPZmZzZXRDaGVja2JveFJlZiIsInNldEZvbnRGYW1pbHkiLCJzZXRUZXh0IiwidG9nZ2xlQm9sZCIsInRvZ2dsZUl0YWxpYyIsInRvZ2dsZU9mZnNldCIsIm9mZnNldE5hbWUiLCJpbmNsdWRlcyIsImZpbHRlciIsIngiLCJ0b2dnbGVBbGxPZmZzZXQiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJGb250T2Zmc2V0TmFtZXMiLCJzZXRPZmZzZXRDaGFyIiwiY2hhciIsImluZGV0ZXJtaW5hdGUiLCJjaGVja2VkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidGV4dEFsaWduIiwiSG9tZSIsInNldE1ldHJpY3NQYXJhbWV0ZXJzIiwidXNlU3RhdGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFhOztBQUViLDhDQUE2QyxDQUFDLGNBQWMsRUFBQzs7QUFFN0QsWUFBWSxtQkFBTyxDQUFDLG9CQUFPOztBQUUzQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCLHVCQUF1QixLQUFLOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCLHVCQUF1QixLQUFLOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUNFLDhEQUFDLGtFQUFEO0FBQ0UsZ0JBQU0sRUFBRWpGLGlCQURWO0FBRUUsd0JBQWMsRUFBRzhELENBQUQsSUFBMEI7QUFDeENnQixnQ0FBb0IsQ0FBQ2hCLENBQUQsQ0FBcEI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFlRTtBQUFBLCtCQUNFLDhEQUFDLDhEQUFEO0FBQWUsMkJBQWlCLEVBQUU5RDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUEwQkQsQzs7Ozs7Ozs7Ozs7QUNuREQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmV4cG9ydHMuRm9udEhlaWdodE5hbWVzID0gdm9pZCAwO1xyXG4oZnVuY3Rpb24gKEZvbnRIZWlnaHROYW1lcykge1xyXG4gICAgRm9udEhlaWdodE5hbWVzW1wiY2FwSGVpZ2h0XCJdID0gXCJjYXBIZWlnaHRcIjtcclxuICAgIEZvbnRIZWlnaHROYW1lc1tcInhIZWlnaHRcIl0gPSBcInhIZWlnaHRcIjtcclxuICAgIEZvbnRIZWlnaHROYW1lc1tcIm92ZXJTaG9vdFwiXSA9IFwib3ZlclNob290XCI7XHJcbiAgICBGb250SGVpZ2h0TmFtZXNbXCJsaW5lSGVpZ2h0XCJdID0gXCJsaW5lSGVpZ2h0XCI7XHJcbn0pKGV4cG9ydHMuRm9udEhlaWdodE5hbWVzIHx8IChleHBvcnRzLkZvbnRIZWlnaHROYW1lcyA9IHt9KSk7XG5cbnZhciBkZWZhdWx0Rm9udEhlaWdodHMgPSB7XHJcbiAgICBjYXBIZWlnaHQ6IDEsXHJcbiAgICBvdmVyU2hvb3Q6IDEsXHJcbiAgICB4SGVpZ2h0OiAxLFxyXG4gICAgbGluZUhlaWdodDogMSxcclxufTtcblxuZXhwb3J0cy5Gb250T2Zmc2V0TmFtZXMgPSB2b2lkIDA7XHJcbihmdW5jdGlvbiAoRm9udE9mZnNldE5hbWVzKSB7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJ0b3BcIl0gPSBcInRvcFwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1wiYXNjZW50XCJdID0gXCJhc2NlbnRcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcInRpdHRsZVwiXSA9IFwidGl0dGxlXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJ1cHBlclwiXSA9IFwidXBwZXJcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcImxvd2VyXCJdID0gXCJsb3dlclwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1wiYmFzZWxpbmVcIl0gPSBcImJhc2VsaW5lXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJkZXNjZW50XCJdID0gXCJkZXNjZW50XCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJib3R0b21cIl0gPSBcImJvdHRvbVwiO1xyXG59KShleHBvcnRzLkZvbnRPZmZzZXROYW1lcyB8fCAoZXhwb3J0cy5Gb250T2Zmc2V0TmFtZXMgPSB7fSkpO1xuXG52YXIgZGVmYXVsdEZvbnRPZmZzZXRzID0ge1xyXG4gICAgdG9wOiAxLFxyXG4gICAgYXNjZW50OiAxLFxyXG4gICAgdGl0dGxlOiAxLFxyXG4gICAgdXBwZXI6IDEsXHJcbiAgICBsb3dlcjogMSxcclxuICAgIGJhc2VsaW5lOiAxLFxyXG4gICAgZGVzY2VudDogMSxcclxuICAgIGJvdHRvbTogMSxcclxufTtcblxudmFyIGRlZmF1bHRGb250TWV0cmljcyA9IHtcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIGhlaWdodHM6IGRlZmF1bHRGb250SGVpZ2h0cyxcclxuICAgIG9mZnNldHM6IGRlZmF1bHRGb250T2Zmc2V0cyxcclxufTtcblxudmFyIGRlZmF1bHRGb250TWV0cmljc09wdGlvbnMgPSB7XHJcbiAgICBmb250U2l6ZTogMTI4LFxyXG4gICAgZm9udFdlaWdodDogXCJcIixcclxuICAgIGZvbnRTdHlsZTogXCJcIixcclxuICAgIG9yaWdpbjogXCJjc3NUb3BcIixcclxuICAgIGNhcEhlaWdodDogXCJIXCIsXHJcbiAgICB4SGVpZ2h0OiBcInhcIixcclxuICAgIGRlc2NlbnQ6IFwicFwiLFxyXG4gICAgYXNjZW50OiBcImhcIixcclxuICAgIHRpdHRsZTogXCJpXCIsXHJcbiAgICBiYXNlbGluZTogXCJuXCIsXHJcbiAgICBvdmVyc2hvb3Q6IFwiT1wiLFxyXG59O1xuXG52YXIgZ2V0Q2FjaGVIYXNoID0gZnVuY3Rpb24gKGZvbnQsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgZm9udCxcclxuICAgICAgICBvcHRpb25zLmZvbnRTdHlsZSxcclxuICAgICAgICBvcHRpb25zLmZvbnRXZWlnaHQsXHJcbiAgICAgICAgb3B0aW9ucy5jYXBIZWlnaHQsXHJcbiAgICAgICAgb3B0aW9ucy54SGVpZ2h0LFxyXG4gICAgICAgIG9wdGlvbnMuZGVzY2VudCxcclxuICAgICAgICBvcHRpb25zLmFzY2VudCxcclxuICAgICAgICBvcHRpb25zLnRpdHRsZSxcclxuICAgICAgICBvcHRpb25zLmJhc2VsaW5lLFxyXG4gICAgICAgIG9wdGlvbnMub3ZlcnNob290LFxyXG4gICAgXS5qb2luKFwiX1wiKTtcclxufTtcblxuLyoqXHJcbiAqIFRoZSBjdXN0b20gSG9vayBbdXNlTWV0cmljc10gcmV0dXJucyB0aGUgW0ZvbnRNZXRyaWNzXSBmb3IgdGhlIFtmb250XVxyXG4gKiAoZGVmaW5lZCBhcyBhIGZvbnQtZmFtaWx5IG9yIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgZm9udC1mYW1pbGllcylcclxuICogYW5kIG9wdGlvbmFsIFtvcHRpb25zXS5cclxuICovXHJcbnZhciB1c2VGb250TWV0cmljcyA9IGZ1bmN0aW9uIChmb250LCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICByZXR1cm4gW2RlZmF1bHRGb250TWV0cmljc107XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Rm9udE1ldHJpY3NPcHRpb25zLCBvcHRpb25zKTtcclxuICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5mb250U2l6ZSAqIDAuNTtcclxuICAgIHZhciBfYiA9IHJlYWN0LnVzZVN0YXRlKHt9KSwgY2FjaGUgPSBfYlswXSwgc2V0Q2FjaGUgPSBfYlsxXTtcclxuICAgIHZhciBjYW52YXMgPSByZWFjdC51c2VTdGF0ZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKVswXTtcclxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdmFyIHNldEZvbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gb3B0aW9ucy5mb250U2l6ZSAqIDI7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG9wdGlvbnMuZm9udFNpemUgKiAyICsgcGFkZGluZztcclxuICAgICAgICBjdHguZm9udCA9IG9wdGlvbnMuZm9udFN0eWxlICsgXCIgXCIgKyBvcHRpb25zLmZvbnRXZWlnaHQgKyBcIiBcIiArIG9wdGlvbnMuZm9udFNpemUgKyBcInB4IFwiICsgZm9udDtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0QWxpZ25tZW50ID0gZnVuY3Rpb24gKGJhc2VsaW5lKSB7XHJcbiAgICAgICAgLy8gY29uc3QgdHkgPSBiYXNlbGluZSA9PT0gJ2JvdHRvbScgPyBjYW52YXMuaGVpZ2h0IDogMFxyXG4gICAgICAgIC8vIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgdHkpXHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IGJhc2VsaW5lO1xyXG4gICAgfTtcclxuICAgIHZhciB1cGRhdGVUZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIGNhbnZhcy53aWR0aCAvIDIsIGN0eC50ZXh0QmFzZWxpbmUgPT09IFwiYm90dG9tXCIgPyBjYW52YXMuaGVpZ2h0IDogcGFkZGluZyk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNvbXB1dGVDc3NMaW5lSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICAgIGRpdi5pZCA9IFwiX190ZXh0TWVhc3VyZVwiO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBcInhcIjtcclxuICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IFwiLTUwMHB4XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICBkaXYuc3R5bGUuZm9udEZhbWlseSA9IGZvbnQ7XHJcbiAgICAgICAgZGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBvcHRpb25zLmZvbnRXZWlnaHQ7XHJcbiAgICAgICAgZGl2LnN0eWxlLmZvbnRTdHlsZSA9IG9wdGlvbnMuZm9udFN0eWxlO1xyXG4gICAgICAgIGRpdi5zdHlsZS5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemUgKyBcInB4XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVIZWlnaHQ7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNvbXB1dGVDYW52YXNMaW5lSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsZXR0ZXIgPSBcIkFcIjtcclxuICAgICAgICBzZXRBbGlnbm1lbnQoXCJib3R0b21cIik7XHJcbiAgICAgICAgdmFyIGd1dHRlciA9IGNhbnZhcy5oZWlnaHQgLSBtZWFzdXJlQm90dG9tKGxldHRlcikgLSBwYWRkaW5nO1xyXG4gICAgICAgIHNldEFsaWdubWVudChcInRvcFwiKTtcclxuICAgICAgICByZXR1cm4gbWVhc3VyZUJvdHRvbShsZXR0ZXIpICsgZ3V0dGVyO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRQaXhlbHMgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHVwZGF0ZVRleHQodGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KS5kYXRhO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRGaXJzdEluZGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgcGl4ZWxzID0gZ2V0UGl4ZWxzKHRleHQpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAzLCBuID0gcGl4ZWxzLmxlbmd0aDsgaSA8IG47IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBpZiAocGl4ZWxzW2ldID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSAtIDMpIC8gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBpeGVscy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldExhc3RJbmRleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgdmFyIHBpeGVscyA9IGdldFBpeGVscyh0ZXh0KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gcGl4ZWxzLmxlbmd0aCAtIDE7IGkgPj0gMzsgaSAtPSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChwaXhlbHNbaV0gPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgLyA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICB2YXIgbWVhc3VyZVRvcCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZ2V0Rmlyc3RJbmRleCh0ZXh0KSAvIGNhbnZhcy53aWR0aCkgLSBwYWRkaW5nO1xyXG4gICAgfTtcclxuICAgIHZhciBtZWFzdXJlQm90dG9tID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChnZXRMYXN0SW5kZXgodGV4dCkgLyBjYW52YXMud2lkdGgpIC0gcGFkZGluZztcclxuICAgIH07XHJcbiAgICB2YXIgbm9ybWFsaXplID0gZnVuY3Rpb24gKG1ldHJpY3MsIGZvbnRTaXplLCBvcmlnaW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1NRVRSSUNTOiBcIiwgbWV0cmljcyk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IG1ldHJpY3MuZm9udFNpemUsXHJcbiAgICAgICAgICAgIGhlaWdodHM6IE9iamVjdC5hc3NpZ24oe30sIG1ldHJpY3MuaGVpZ2h0cyksXHJcbiAgICAgICAgICAgIG9mZnNldHM6IE9iamVjdC5hc3NpZ24oe30sIG1ldHJpY3Mub2Zmc2V0cyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZm9udFNpemUgIT09IDEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG1ldHJpY3MuaGVpZ2h0cykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmhlaWdodHNba2V5XSAvPSBmb250U2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbWV0cmljcy5vZmZzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQub2Zmc2V0c1trZXldIC89IGZvbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvZmZzZXQgPSByZXN1bHQub2Zmc2V0c1tvcmlnaW5dO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtZXRyaWNzLm9mZnNldHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm9mZnNldHNba2V5XSAtPSBvZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTk5FVyBNTUVUUklDUzogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0TWV0cmljcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3NzTGluZUhlaWdodCA9IGNvbXB1dGVDc3NMaW5lSGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIGNhbnZhc0xpbmVIZWlnaHQgPSBjb21wdXRlQ2FudmFzTGluZUhlaWdodCgpO1xyXG4gICAgICAgIHZhciBvZmZzZXRzID0ge1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGFzY2VudDogbWVhc3VyZVRvcChvcHRpb25zLmFzY2VudCksXHJcbiAgICAgICAgICAgIHRpdHRsZTogbWVhc3VyZVRvcChvcHRpb25zLnRpdHRsZSksXHJcbiAgICAgICAgICAgIHVwcGVyOiBtZWFzdXJlVG9wKG9wdGlvbnMuY2FwSGVpZ2h0KSxcclxuICAgICAgICAgICAgbG93ZXI6IG1lYXN1cmVUb3Aob3B0aW9ucy54SGVpZ2h0KSxcclxuICAgICAgICAgICAgYmFzZWxpbmU6IG1lYXN1cmVCb3R0b20ob3B0aW9ucy5iYXNlbGluZSksXHJcbiAgICAgICAgICAgIGRlc2NlbnQ6IG1lYXN1cmVCb3R0b20ob3B0aW9ucy5kZXNjZW50KSxcclxuICAgICAgICAgICAgYm90dG9tOiBjYW52YXNMaW5lSGVpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHByb2JsZW1zID0gT2JqZWN0LmtleXMob2Zmc2V0cykuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICE9PSBcInRvcFwiICYmIG9mZnNldHNbeF0gPD0gMDsgfSk7XHJcbiAgICAgICAgaWYgKHByb2JsZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQUk9CTEVNUzogXCIsIHByb2JsZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGhlaWdodHMgPSB7XHJcbiAgICAgICAgICAgIGNhcEhlaWdodDogb2Zmc2V0cy5iYXNlbGluZSAtIG9mZnNldHMudXBwZXIsXHJcbiAgICAgICAgICAgIG92ZXJTaG9vdDogbWVhc3VyZUJvdHRvbShvcHRpb25zLm92ZXJzaG9vdCkgLSBvZmZzZXRzLmJhc2VsaW5lLFxyXG4gICAgICAgICAgICB4SGVpZ2h0OiBvZmZzZXRzLmJhc2VsaW5lIC0gb2Zmc2V0cy5sb3dlcixcclxuICAgICAgICAgICAgbGluZUhlaWdodDogY3NzTGluZUhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBvcHRpb25zLmZvbnRTaXplLFxyXG4gICAgICAgICAgICBoZWlnaHRzOiBoZWlnaHRzLFxyXG4gICAgICAgICAgICBvZmZzZXRzOiBvZmZzZXRzLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhc2ggPSBnZXRDYWNoZUhhc2goZm9udCwgb3B0aW9ucyk7XHJcbiAgICBpZiAoY2FjaGVbaGFzaF0pIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5mb250U2l6ZSA8PSBjYWNoZVtoYXNoXS5mb250U2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW25vcm1hbGl6ZShjYWNoZVtoYXNoXSwgMSwgb3B0aW9ucy5vcmlnaW4pXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRGb250KCk7XHJcbiAgICB2YXIgbmV3TWV0cmljcyA9IG5vcm1hbGl6ZShnZXRNZXRyaWNzKCksIG9wdGlvbnMuZm9udFNpemUsIG9wdGlvbnMub3JpZ2luKTtcclxuICAgIHNldENhY2hlKE9iamVjdC5hc3NpZ24oY2FjaGUsIChfYSA9IHt9LFxyXG4gICAgICAgIF9hW2hhc2hdID0gbmV3TWV0cmljcyxcclxuICAgICAgICBfYSkpKTtcclxuICAgIHJldHVybiBbbmV3TWV0cmljc107XHJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdEZvbnRIZWlnaHRzID0gZGVmYXVsdEZvbnRIZWlnaHRzO1xuZXhwb3J0cy5kZWZhdWx0Rm9udE1ldHJpY3MgPSBkZWZhdWx0Rm9udE1ldHJpY3M7XG5leHBvcnRzLmRlZmF1bHRGb250TWV0cmljc09wdGlvbnMgPSBkZWZhdWx0Rm9udE1ldHJpY3NPcHRpb25zO1xuZXhwb3J0cy5kZWZhdWx0Rm9udE9mZnNldHMgPSBkZWZhdWx0Rm9udE9mZnNldHM7XG5leHBvcnRzLmdldENhY2hlSGFzaCA9IGdldENhY2hlSGFzaDtcbmV4cG9ydHMudXNlRm9udE1ldHJpY3MgPSB1c2VGb250TWV0cmljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9udE1ldHJpY3MgfSBmcm9tIFwiQGdyb292aXovZm9udC1tZXRyaWNzXCI7XHJcbmltcG9ydCB7IE1ldHJpY3NQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vTWV0cmljc1BhcmFtZXRlcnNcIjtcclxuXHJcbmNvbnN0IG9mZnNldENvbG9ycyA9IHtcclxuICB0b3A6IFwicmdiKDEzNiwxNzQsMjI1KVwiLFxyXG4gIGFzY2VudDogXCJyZ2IoMTM1LDE3MCwzNSlcIixcclxuICB0aXR0bGU6IFwicmdiKDE3MSwxMTgsMjQyKVwiLFxyXG4gIHVwcGVyOiBcInJnYig2MiwxOTUsNzMpXCIsXHJcbiAgbG93ZXI6IFwicmdiKDI0Niw2NiwyMDgpXCIsXHJcbiAgYmFzZWxpbmU6IFwicmdiKDEzMiwxODMsMTQzKVwiLFxyXG4gIGJvdHRvbTogXCJyZ2IoMjA3LDcwLDg4KVwiLFxyXG4gIGRlc2NlbnQ6IFwicmdiKDI0NywxNDcsMzApXCIsXHJcbiAgcmVzZXJ2ZWQyOiBcInJnYigxNDQsMTEyLDk0KVwiLFxyXG4gIHJlc2VydmVkMzogXCJyZ2IoMjUzLDg5LDIzKVwiLFxyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBtZXRyaWNzUGFyYW1ldGVyczogTWV0cmljc1BhcmFtZXRlcnM7XHJcbn07XHJcblxyXG5jb25zdCBNZXRyaWNzQ2FudmFzOiBGQzxQcm9wcz4gPSAoeyBtZXRyaWNzUGFyYW1ldGVycyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGZvbnRXZWlnaHQgPSBtZXRyaWNzUGFyYW1ldGVycy5ib2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gIGNvbnN0IGZvbnRTdHlsZSA9IG1ldHJpY3NQYXJhbWV0ZXJzLml0YWxpYyA/IFwiaXRhbGljXCIgOiBcIlwiO1xyXG4gIGNvbnN0IFttZXRyaWNzXSA9IHVzZUZvbnRNZXRyaWNzKG1ldHJpY3NQYXJhbWV0ZXJzLmZvbnRGYW1pbHksIHtcclxuICAgIG9yaWdpbjogXCJ0b3BcIixcclxuICAgIGZvbnRTdHlsZSxcclxuICAgIGZvbnRXZWlnaHQsXHJcbiAgICBjYXBIZWlnaHQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1widXBwZXJcIl0sXHJcbiAgICB4SGVpZ2h0OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImxvd2VyXCJdLFxyXG4gICAgZGVzY2VudDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJkZXNjZW50XCJdLFxyXG4gICAgYXNjZW50OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImFzY2VudFwiXSxcclxuICAgIHRpdHRsZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJ0aXR0bGVcIl0sXHJcbiAgICBiYXNlbGluZTogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJiYXNlbGluZVwiXSxcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHByaW50TGluZSA9IChcclxuICAgICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIG9mZnNldDogbnVtYmVyLFxyXG4gICAgICBjb2xvcjogc3RyaW5nXHJcbiAgICApID0+IHtcclxuICAgICAgY3R4IS5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICBjdHghLmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygwLCBwYWRkaW5nICsgb2Zmc2V0ICogZm9udFNpemUgKiBwaXhlbFJhdGlvKTtcclxuICAgICAgY3R4LmxpbmVUbyhjdHghLmNhbnZhcy53aWR0aCwgcGFkZGluZyArIG9mZnNldCAqIGZvbnRTaXplICogcGl4ZWxSYXRpbyk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHBpeGVsUmF0aW8gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xyXG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGhcclxuICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHRcclxuICBjb25zdCBmb250U2l6ZSA9IE1hdGgubWluKHdpZHRoLzYsIGhlaWdodC8yKVxyXG4gIC8vIGNvbnN0IGZvbnRTaXplID0gNjA7XHJcbiAgLy8gY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKGZvbnRTaXplICogMik7XHJcbiAgLy8gY29uc3Qgd2lkdGggPSBoZWlnaHQgKiAzO1xyXG4gIGNvbnN0IHBhZGRpbmcgPSBNYXRoLmNlaWwoZm9udFNpemUgKiAwLjUpO1xyXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aCAqIHBpeGVsUmF0aW87XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogcGl4ZWxSYXRpbztcclxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICc5MCUnOy8vYCR7d2lkdGh9cHhgO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICc5MCUnOy8vYCR7aGVpZ2h0fXB4YDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4IS5maWxsU3R5bGUgPSBcIiNBQUVFRUVcIjtcclxuICAgIGN0eCEuZmlsbFJlY3QoMCwgMCwgY3R4IS5jYW52YXMud2lkdGgsIGN0eCEuY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHghLmZvbnQgPSBgJHtmb250U3R5bGV9ICR7Zm9udFdlaWdodH0gJHtmb250U2l6ZSAqIHBpeGVsUmF0aW99cHggJHtcclxuICAgICAgbWV0cmljc1BhcmFtZXRlcnMuZm9udEZhbWlseVxyXG4gICAgfWA7XHJcbiAgICBjdHghLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eCEudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuICAgIGN0eCEuZmlsbFRleHQoXHJcbiAgICAgIG1ldHJpY3NQYXJhbWV0ZXJzLnRleHQsXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhZGRpbmcgKyBtZXRyaWNzLm9mZnNldHMudG9wICogZm9udFNpemUgKiBwaXhlbFJhdGlvXHJcbiAgICApO1xyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMudmlzaWJsZU9mZnNldHMuZm9yRWFjaCgob2Zmc2V0KSA9PlxyXG4gICAgICBwcmludExpbmUoY3R4ISwgbWV0cmljcy5vZmZzZXRzW29mZnNldF0sIG9mZnNldENvbG9yc1tvZmZzZXRdKVxyXG4gICAgKTtcclxuICB9LCBbXHJcbiAgICBmb250U3R5bGUsXHJcbiAgICBmb250V2VpZ2h0LFxyXG4gICAgbWV0cmljc1BhcmFtZXRlcnMsXHJcbiAgICBtZXRyaWNzLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0+XHJcbiAgICA8Y2FudmFzXHJcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldHJpY3NDYW52YXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udE9mZnNldE5hbWVzIH0gZnJvbSBcIkBncm9vdml6L2ZvbnQtbWV0cmljc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgTWV0cmljc1BhcmFtZXRlcnMgPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGZvbnRGYW1pbHk6IHN0cmluZztcclxuICBib2xkOiBib29sZWFuO1xyXG4gIGl0YWxpYzogYm9vbGVhbjtcclxuICB2aXNpYmxlT2Zmc2V0czogQXJyYXk8Rm9udE9mZnNldE5hbWVzPjtcclxuICBvZmZzZXRDaGFyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcGFyYW1zOiBNZXRyaWNzUGFyYW1ldGVycztcclxuICBvblBhcmFtc0NoYW5nZTogKHBhcmFtczogTWV0cmljc1BhcmFtZXRlcnMpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBNZXRyaWNzUGFyYW1ldGVyc0Zvcm06IEZDPFByb3BzPiA9ICh7XHJcbiAgcGFyYW1zLFxyXG4gIG9uUGFyYW1zQ2hhbmdlLFxyXG59OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGFsbE9mZnNldENoZWNrYm94UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHNldEZvbnRGYW1pbHkgPSAoZm9udEZhbWlseTogc3RyaW5nKSA9PlxyXG4gICAgb25QYXJhbXNDaGFuZ2UoeyAuLi5wYXJhbXMsIGZvbnRGYW1pbHkgfSk7XHJcbiAgY29uc3Qgc2V0VGV4dCA9ICh0ZXh0OiBzdHJpbmcpID0+IG9uUGFyYW1zQ2hhbmdlKHsgLi4ucGFyYW1zLCB0ZXh0IH0pO1xyXG4gIGNvbnN0IHRvZ2dsZUJvbGQgPSAoKSA9PiBvblBhcmFtc0NoYW5nZSh7IC4uLnBhcmFtcywgYm9sZDogIXBhcmFtcy5ib2xkIH0pO1xyXG4gIGNvbnN0IHRvZ2dsZUl0YWxpYyA9ICgpID0+XHJcbiAgICBvblBhcmFtc0NoYW5nZSh7IC4uLnBhcmFtcywgaXRhbGljOiAhcGFyYW1zLml0YWxpYyB9KTtcclxuICBjb25zdCB0b2dnbGVPZmZzZXQgPSAob2Zmc2V0TmFtZTogRm9udE9mZnNldE5hbWVzKSA9PlxyXG4gICAgb25QYXJhbXNDaGFuZ2Uoe1xyXG4gICAgICAuLi5wYXJhbXMsXHJcbiAgICAgIHZpc2libGVPZmZzZXRzOiBwYXJhbXMudmlzaWJsZU9mZnNldHMuaW5jbHVkZXMob2Zmc2V0TmFtZSlcclxuICAgICAgICA/IHBhcmFtcy52aXNpYmxlT2Zmc2V0cy5maWx0ZXIoKHgpID0+IHggIT09IG9mZnNldE5hbWUpXHJcbiAgICAgICAgOiBbLi4ucGFyYW1zLnZpc2libGVPZmZzZXRzLCBvZmZzZXROYW1lXSxcclxuICAgIH0pO1xyXG4gIGNvbnN0IHRvZ2dsZUFsbE9mZnNldCA9ICgpID0+XHJcbiAgICBvblBhcmFtc0NoYW5nZSh7XHJcbiAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgdmlzaWJsZU9mZnNldHM6XHJcbiAgICAgICAgcGFyYW1zLnZpc2libGVPZmZzZXRzLmxlbmd0aCA9PT0gT2JqZWN0LnZhbHVlcyhGb250T2Zmc2V0TmFtZXMpLmxlbmd0aFxyXG4gICAgICAgICAgPyBbXVxyXG4gICAgICAgICAgOiBPYmplY3QudmFsdWVzKEZvbnRPZmZzZXROYW1lcyksXHJcbiAgICB9KTtcclxuICBjb25zdCBzZXRPZmZzZXRDaGFyID0gKG9mZnNldE5hbWU6IEZvbnRPZmZzZXROYW1lcywgY2hhcjogc3RyaW5nKSA9PlxyXG4gICAgb25QYXJhbXNDaGFuZ2Uoe1xyXG4gICAgICAuLi5wYXJhbXMsXHJcbiAgICAgIG9mZnNldENoYXJzOiB7IC4uLnBhcmFtcy5vZmZzZXRDaGFycywgW29mZnNldE5hbWVdOiBjaGFyWzBdIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYWxsT2Zmc2V0Q2hlY2tib3hSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgYWxsT2Zmc2V0Q2hlY2tib3hSZWYuY3VycmVudCEuaW5kZXRlcm1pbmF0ZSA9XHJcbiAgICAgIHBhcmFtcy52aXNpYmxlT2Zmc2V0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgIHBhcmFtcy52aXNpYmxlT2Zmc2V0cy5sZW5ndGggPCBPYmplY3QudmFsdWVzKEZvbnRPZmZzZXROYW1lcykubGVuZ3RoO1xyXG4gICAgYWxsT2Zmc2V0Q2hlY2tib3hSZWYuY3VycmVudCEuY2hlY2tlZCA9XHJcbiAgICAgIHBhcmFtcy52aXNpYmxlT2Zmc2V0cy5sZW5ndGggPT09IE9iamVjdC52YWx1ZXMoRm9udE9mZnNldE5hbWVzKS5sZW5ndGg7XHJcbiAgfSwgW3BhcmFtc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPlRleHQ6PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBzb21lIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJhbXMudGV4dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPkZvbnQ6PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJhbXMuZm9udEZhbWlseX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9udEZhbWlseShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNhdGFtYXJhblwiPkNhdGFtYXJhbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFyaWFsXCI+QXJpYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdGFhdGxpY2hlc1wiPlN0YWF0bGljaGVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3luZVwiPlN5bmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTYWJhZG9cIj5TYWJhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJWZXJkYW5hXCI+VmVyZGFuYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdlb3JnaWFcIj5HZW9yZ2lhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ291cmllciBOZXdcIj5Db3VyaWVyIE5ldzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJydXNoIFNjcmlwdCBNVFwiPkJydXNoIFNjcmlwdCBNVDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkltcGFjdFwiPkltcGFjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPkJvbGQ6PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3BhcmFtcy5ib2xkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUJvbGQoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPkl0YWxpYzo8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17cGFyYW1zLml0YWxpY31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVJdGFsaWMoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciBrZXk9XCJhbGxcIj5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHJlZj17YWxsT2Zmc2V0Q2hlY2tib3hSZWZ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlQWxsT2Zmc2V0KCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKEZvbnRPZmZzZXROYW1lcykubWFwKChvZmZzZXROYW1lKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e29mZnNldE5hbWV9PlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtwYXJhbXMudmlzaWJsZU9mZnNldHMuaW5jbHVkZXMob2Zmc2V0TmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVPZmZzZXQob2Zmc2V0TmFtZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntvZmZzZXROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgeyFbXCJ0b3BcIiwgXCJib3R0b21cIl0uaW5jbHVkZXMob2Zmc2V0TmFtZSkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcmFtcy5vZmZzZXRDaGFyc1tvZmZzZXROYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9mZnNldENoYXIob2Zmc2V0TmFtZSwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldHJpY3NQYXJhbWV0ZXJzRm9ybTtcclxuIiwiaW1wb3J0IE1ldHJpY3NQYXJhbWV0ZXJzRm9ybSwge1xuICBNZXRyaWNzUGFyYW1ldGVycyxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0cmljc1BhcmFtZXRlcnNcIjtcbmltcG9ydCBNZXRyaWNzQ2FudmFzIGZyb20gXCIuLi9jb21wb25lbnRzL01ldHJpY3NDYW52YXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250T2Zmc2V0TmFtZXMgfSBmcm9tIFwiQGdyb292aXovZm9udC1tZXRyaWNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttZXRyaWNzUGFyYW1ldGVycywgc2V0TWV0cmljc1BhcmFtZXRlcnNdID0gdXNlU3RhdGU8TWV0cmljc1BhcmFtZXRlcnM+KFxuICAgIHtcbiAgICAgIGZvbnRGYW1pbHk6IFwiU2FiYWRvXCIsXG4gICAgICB0ZXh0OiBcIlN1cEFySGhlaWZub1wiLFxuICAgICAgYm9sZDogZmFsc2UsXG4gICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgdmlzaWJsZU9mZnNldHM6IE9iamVjdC52YWx1ZXMoRm9udE9mZnNldE5hbWVzKSxcbiAgICAgIG9mZnNldENoYXJzOiB7XG4gICAgICAgIHVwcGVyOiBcIkhcIixcbiAgICAgICAgbG93ZXI6IFwieFwiLFxuICAgICAgICBkZXNjZW50OiBcInBcIixcbiAgICAgICAgYXNjZW50OiBcImhcIixcbiAgICAgICAgdGl0dGxlOiBcImlcIixcbiAgICAgICAgYmFzZWxpbmU6IFwiblwiLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5Gb250IE1ldHJpY3MgSG9vayBIYWhhaGE8L2gxPlxuICAgICAgPGgyPkNhbGN1bGF0ZSBGb250cyBNZXRyaWNzIHVzaW5nIEhUTUwgQ2FudmFzPC9oMj5cbiAgICAgIDxwPlRoaXMgUmVhY3QgUGFja2FnZSBpcyBicm91Z2h0IHRvIHlvdSBieSB0aGUgR1JPT1ZJWiBUZWFtITwvcD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIzMCUgMWZyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE1ldHJpY3NQYXJhbWV0ZXJzRm9ybVxuICAgICAgICAgICAgcGFyYW1zPXttZXRyaWNzUGFyYW1ldGVyc31cbiAgICAgICAgICAgIG9uUGFyYW1zQ2hhbmdlPXsoeDogTWV0cmljc1BhcmFtZXRlcnMpID0+IHtcbiAgICAgICAgICAgICAgc2V0TWV0cmljc1BhcmFtZXRlcnMoeCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNZXRyaWNzQ2FudmFzIG1ldHJpY3NQYXJhbWV0ZXJzPXttZXRyaWNzUGFyYW1ldGVyc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=