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
            ascent: measureTop(options.ascent) + 1,
            tittle: measureTop(options.tittle) + 1,
            upper: measureTop(options.capHeight) + 1,
            lower: measureTop(options.xHeight) + 1,
            baseline: measureBottom(options.baseline) + 1,
            descent: measureBottom(options.descent) + 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb250LW1ldHJpY3MtZXhhbXBsZS8uLi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2ZvbnQtbWV0cmljcy1leGFtcGxlLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhcy50c3giLCJ3ZWJwYWNrOi8vZm9udC1tZXRyaWNzLWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9NZXRyaWNzUGFyYW1ldGVycy50c3giLCJ3ZWJwYWNrOi8vZm9udC1tZXRyaWNzLWV4YW1wbGUvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2ZvbnQtbWV0cmljcy1leGFtcGxlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mb250LW1ldHJpY3MtZXhhbXBsZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIm9mZnNldENvbG9ycyIsInRvcCIsImFzY2VudCIsInRpdHRsZSIsInVwcGVyIiwibG93ZXIiLCJiYXNlbGluZSIsImJvdHRvbSIsImRlc2NlbnQiLCJyZXNlcnZlZDIiLCJyZXNlcnZlZDMiLCJNZXRyaWNzQ2FudmFzIiwibWV0cmljc1BhcmFtZXRlcnMiLCJmb250V2VpZ2h0IiwiYm9sZCIsImZvbnRTdHlsZSIsIml0YWxpYyIsIm1ldHJpY3MiLCJ1c2VGb250TWV0cmljcyIsImZvbnRGYW1pbHkiLCJvcmlnaW4iLCJjYXBIZWlnaHQiLCJvZmZzZXRDaGFycyIsInhIZWlnaHQiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJjYW52YXNSZWYiLCJ1c2VFZmZlY3QiLCJwcmludExpbmUiLCJjdHgiLCJvZmZzZXQiLCJjb2xvciIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwicGFkZGluZyIsImZvbnRTaXplIiwicGl4ZWxSYXRpbyIsImxpbmVUbyIsImNhbnZhcyIsIndpZHRoIiwic3Ryb2tlIiwid2luZG93IiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNlaWwiLCJzdHlsZSIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInRleHQiLCJvZmZzZXRzIiwidmlzaWJsZU9mZnNldHMiLCJmb3JFYWNoIiwiTWV0cmljc1BhcmFtZXRlcnNGb3JtIiwicGFyYW1zIiwib25QYXJhbXNDaGFuZ2UiLCJhbGxPZmZzZXRDaGVja2JveFJlZiIsInNldEZvbnRGYW1pbHkiLCJzZXRUZXh0IiwidG9nZ2xlQm9sZCIsInRvZ2dsZUl0YWxpYyIsInRvZ2dsZU9mZnNldCIsIm9mZnNldE5hbWUiLCJpbmNsdWRlcyIsImZpbHRlciIsIngiLCJ0b2dnbGVBbGxPZmZzZXQiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJGb250T2Zmc2V0TmFtZXMiLCJzZXRPZmZzZXRDaGFyIiwiY2hhciIsImluZGV0ZXJtaW5hdGUiLCJjaGVja2VkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidGV4dEFsaWduIiwiSG9tZSIsInNldE1ldHJpY3NQYXJhbWV0ZXJzIiwidXNlU3RhdGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFhOztBQUViLDhDQUE2QyxDQUFDLGNBQWMsRUFBQzs7QUFFN0QsWUFBWSxtQkFBTyxDQUFDLG9CQUFPOztBQUUzQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCLHVCQUF1QixLQUFLOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCLHVCQUF1QixLQUFLOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFFRSx3QkFBYyxFQUFHOEQsQ0FBRCxJQUEwQjtBQUN4Q2dCLGdDQUFvQixDQUFDaEIsQ0FBRCxDQUFwQjtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQWVFO0FBQUEsK0JBQ0UsOERBQUMsOERBQUQ7QUFBZSwyQkFBaUIsRUFBRTlEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQTBCRCxDOzs7Ozs7Ozs7OztBQ25ERCxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZXhwb3J0cy5Gb250SGVpZ2h0TmFtZXMgPSB2b2lkIDA7XHJcbihmdW5jdGlvbiAoRm9udEhlaWdodE5hbWVzKSB7XHJcbiAgICBGb250SGVpZ2h0TmFtZXNbXCJjYXBIZWlnaHRcIl0gPSBcImNhcEhlaWdodFwiO1xyXG4gICAgRm9udEhlaWdodE5hbWVzW1wieEhlaWdodFwiXSA9IFwieEhlaWdodFwiO1xyXG4gICAgRm9udEhlaWdodE5hbWVzW1wib3ZlclNob290XCJdID0gXCJvdmVyU2hvb3RcIjtcclxuICAgIEZvbnRIZWlnaHROYW1lc1tcImxpbmVIZWlnaHRcIl0gPSBcImxpbmVIZWlnaHRcIjtcclxufSkoZXhwb3J0cy5Gb250SGVpZ2h0TmFtZXMgfHwgKGV4cG9ydHMuRm9udEhlaWdodE5hbWVzID0ge30pKTtcblxudmFyIGRlZmF1bHRGb250SGVpZ2h0cyA9IHtcclxuICAgIGNhcEhlaWdodDogMSxcclxuICAgIG92ZXJTaG9vdDogMSxcclxuICAgIHhIZWlnaHQ6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLFxyXG59O1xuXG5leHBvcnRzLkZvbnRPZmZzZXROYW1lcyA9IHZvaWQgMDtcclxuKGZ1bmN0aW9uIChGb250T2Zmc2V0TmFtZXMpIHtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcInRvcFwiXSA9IFwidG9wXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJhc2NlbnRcIl0gPSBcImFzY2VudFwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1widGl0dGxlXCJdID0gXCJ0aXR0bGVcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcInVwcGVyXCJdID0gXCJ1cHBlclwiO1xyXG4gICAgRm9udE9mZnNldE5hbWVzW1wibG93ZXJcIl0gPSBcImxvd2VyXCI7XHJcbiAgICBGb250T2Zmc2V0TmFtZXNbXCJiYXNlbGluZVwiXSA9IFwiYmFzZWxpbmVcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcImRlc2NlbnRcIl0gPSBcImRlc2NlbnRcIjtcclxuICAgIEZvbnRPZmZzZXROYW1lc1tcImJvdHRvbVwiXSA9IFwiYm90dG9tXCI7XHJcbn0pKGV4cG9ydHMuRm9udE9mZnNldE5hbWVzIHx8IChleHBvcnRzLkZvbnRPZmZzZXROYW1lcyA9IHt9KSk7XG5cbnZhciBkZWZhdWx0Rm9udE9mZnNldHMgPSB7XHJcbiAgICB0b3A6IDEsXHJcbiAgICBhc2NlbnQ6IDEsXHJcbiAgICB0aXR0bGU6IDEsXHJcbiAgICB1cHBlcjogMSxcclxuICAgIGxvd2VyOiAxLFxyXG4gICAgYmFzZWxpbmU6IDEsXHJcbiAgICBkZXNjZW50OiAxLFxyXG4gICAgYm90dG9tOiAxLFxyXG59O1xuXG52YXIgZGVmYXVsdEZvbnRNZXRyaWNzID0ge1xyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgaGVpZ2h0czogZGVmYXVsdEZvbnRIZWlnaHRzLFxyXG4gICAgb2Zmc2V0czogZGVmYXVsdEZvbnRPZmZzZXRzLFxyXG59O1xuXG52YXIgZGVmYXVsdEZvbnRNZXRyaWNzT3B0aW9ucyA9IHtcclxuICAgIGZvbnRTaXplOiAxMjgsXHJcbiAgICBmb250V2VpZ2h0OiBcIlwiLFxyXG4gICAgZm9udFN0eWxlOiBcIlwiLFxyXG4gICAgb3JpZ2luOiBcImNzc1RvcFwiLFxyXG4gICAgY2FwSGVpZ2h0OiBcIkhcIixcclxuICAgIHhIZWlnaHQ6IFwieFwiLFxyXG4gICAgZGVzY2VudDogXCJwXCIsXHJcbiAgICBhc2NlbnQ6IFwiaFwiLFxyXG4gICAgdGl0dGxlOiBcImlcIixcclxuICAgIGJhc2VsaW5lOiBcIm5cIixcclxuICAgIG92ZXJzaG9vdDogXCJPXCIsXHJcbn07XG5cbnZhciBnZXRDYWNoZUhhc2ggPSBmdW5jdGlvbiAoZm9udCwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBmb250LFxyXG4gICAgICAgIG9wdGlvbnMuZm9udFN0eWxlLFxyXG4gICAgICAgIG9wdGlvbnMuZm9udFdlaWdodCxcclxuICAgICAgICBvcHRpb25zLmNhcEhlaWdodCxcclxuICAgICAgICBvcHRpb25zLnhIZWlnaHQsXHJcbiAgICAgICAgb3B0aW9ucy5kZXNjZW50LFxyXG4gICAgICAgIG9wdGlvbnMuYXNjZW50LFxyXG4gICAgICAgIG9wdGlvbnMudGl0dGxlLFxyXG4gICAgICAgIG9wdGlvbnMuYmFzZWxpbmUsXHJcbiAgICAgICAgb3B0aW9ucy5vdmVyc2hvb3QsXHJcbiAgICBdLmpvaW4oXCJfXCIpO1xyXG59O1xuXG4vKipcclxuICogVGhlIGN1c3RvbSBIb29rIFt1c2VNZXRyaWNzXSByZXR1cm5zIHRoZSBbRm9udE1ldHJpY3NdIGZvciB0aGUgW2ZvbnRdXHJcbiAqIChkZWZpbmVkIGFzIGEgZm9udC1mYW1pbHkgb3IgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBmb250LWZhbWlsaWVzKVxyXG4gKiBhbmQgb3B0aW9uYWwgW29wdGlvbnNdLlxyXG4gKi9cclxudmFyIHVzZUZvbnRNZXRyaWNzID0gZnVuY3Rpb24gKGZvbnQsIG9wdGlvbnMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIHJldHVybiBbZGVmYXVsdEZvbnRNZXRyaWNzXTtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRGb250TWV0cmljc09wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLmZvbnRTaXplICogMC41O1xyXG4gICAgdmFyIF9iID0gcmVhY3QudXNlU3RhdGUoe30pLCBjYWNoZSA9IF9iWzBdLCBzZXRDYWNoZSA9IF9iWzFdO1xyXG4gICAgdmFyIGNhbnZhcyA9IHJlYWN0LnVzZVN0YXRlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpWzBdO1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB2YXIgc2V0Rm9udCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBvcHRpb25zLmZvbnRTaXplICogMjtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5mb250U2l6ZSAqIDIgKyBwYWRkaW5nO1xyXG4gICAgICAgIGN0eC5mb250ID0gb3B0aW9ucy5mb250U3R5bGUgKyBcIiBcIiArIG9wdGlvbnMuZm9udFdlaWdodCArIFwiIFwiICsgb3B0aW9ucy5mb250U2l6ZSArIFwicHggXCIgKyBmb250O1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRBbGlnbm1lbnQgPSBmdW5jdGlvbiAoYmFzZWxpbmUpIHtcclxuICAgICAgICAvLyBjb25zdCB0eSA9IGJhc2VsaW5lID09PSAnYm90dG9tJyA/IGNhbnZhcy5oZWlnaHQgOiAwXHJcbiAgICAgICAgLy8gY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCB0eSlcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gYmFzZWxpbmU7XHJcbiAgICB9O1xyXG4gICAgdmFyIHVwZGF0ZVRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgY2FudmFzLndpZHRoIC8gMiwgY3R4LnRleHRCYXNlbGluZSA9PT0gXCJib3R0b21cIiA/IGNhbnZhcy5oZWlnaHQgOiBwYWRkaW5nKTtcclxuICAgIH07XHJcbiAgICB2YXIgY29tcHV0ZUNzc0xpbmVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgZGl2LmlkID0gXCJfX3RleHRNZWFzdXJlXCI7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwieFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBkaXYuc3R5bGUudG9wID0gXCItNTAwcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udDtcclxuICAgICAgICBkaXYuc3R5bGUuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodDtcclxuICAgICAgICBkaXYuc3R5bGUuZm9udFN0eWxlID0gb3B0aW9ucy5mb250U3R5bGU7XHJcbiAgICAgICAgZGl2LnN0eWxlLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZSArIFwicHhcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSBkaXYub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICByZXR1cm4gbGluZUhlaWdodDtcclxuICAgIH07XHJcbiAgICB2YXIgY29tcHV0ZUNhbnZhc0xpbmVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxldHRlciA9IFwiQVwiO1xyXG4gICAgICAgIHNldEFsaWdubWVudChcImJvdHRvbVwiKTtcclxuICAgICAgICB2YXIgZ3V0dGVyID0gY2FudmFzLmhlaWdodCAtIG1lYXN1cmVCb3R0b20obGV0dGVyKSAtIHBhZGRpbmc7XHJcbiAgICAgICAgc2V0QWxpZ25tZW50KFwidG9wXCIpO1xyXG4gICAgICAgIHJldHVybiBtZWFzdXJlQm90dG9tKGxldHRlcikgKyBndXR0ZXI7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldFBpeGVscyA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgdXBkYXRlVGV4dCh0ZXh0KTtcclxuICAgICAgICByZXR1cm4gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLmRhdGE7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldEZpcnN0SW5kZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBwaXhlbHMgPSBnZXRQaXhlbHModGV4dCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDMsIG4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbjsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChwaXhlbHNbaV0gPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpIC0gMykgLyA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl4ZWxzLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0TGFzdEluZGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgcGl4ZWxzID0gZ2V0UGl4ZWxzKHRleHQpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBwaXhlbHMubGVuZ3RoIC0gMTsgaSA+PSAzOyBpIC09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHBpeGVsc1tpXSA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAvIDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIHZhciBtZWFzdXJlVG9wID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChnZXRGaXJzdEluZGV4KHRleHQpIC8gY2FudmFzLndpZHRoKSAtIHBhZGRpbmc7XHJcbiAgICB9O1xyXG4gICAgdmFyIG1lYXN1cmVCb3R0b20gPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGdldExhc3RJbmRleCh0ZXh0KSAvIGNhbnZhcy53aWR0aCkgLSBwYWRkaW5nO1xyXG4gICAgfTtcclxuICAgIHZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAobWV0cmljcywgZm9udFNpemUsIG9yaWdpbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTU1FVFJJQ1M6IFwiLCBtZXRyaWNzKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogbWV0cmljcy5mb250U2l6ZSxcclxuICAgICAgICAgICAgaGVpZ2h0czogT2JqZWN0LmFzc2lnbih7fSwgbWV0cmljcy5oZWlnaHRzKSxcclxuICAgICAgICAgICAgb2Zmc2V0czogT2JqZWN0LmFzc2lnbih7fSwgbWV0cmljcy5vZmZzZXRzKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChmb250U2l6ZSAhPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbWV0cmljcy5oZWlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaGVpZ2h0c1trZXldIC89IGZvbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBtZXRyaWNzLm9mZnNldHMpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5vZmZzZXRzW2tleV0gLz0gZm9udFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHJlc3VsdC5vZmZzZXRzW29yaWdpbl07XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG1ldHJpY3Mub2Zmc2V0cykge1xyXG4gICAgICAgICAgICByZXN1bHQub2Zmc2V0c1trZXldIC09IG9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOTkVXIE1NRVRSSUNTOiBcIiwgcmVzdWx0KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRNZXRyaWNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjc3NMaW5lSGVpZ2h0ID0gY29tcHV0ZUNzc0xpbmVIZWlnaHQoKTtcclxuICAgICAgICB2YXIgY2FudmFzTGluZUhlaWdodCA9IGNvbXB1dGVDYW52YXNMaW5lSGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldHMgPSB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYXNjZW50OiBtZWFzdXJlVG9wKG9wdGlvbnMuYXNjZW50KSArIDEsXHJcbiAgICAgICAgICAgIHRpdHRsZTogbWVhc3VyZVRvcChvcHRpb25zLnRpdHRsZSkgKyAxLFxyXG4gICAgICAgICAgICB1cHBlcjogbWVhc3VyZVRvcChvcHRpb25zLmNhcEhlaWdodCkgKyAxLFxyXG4gICAgICAgICAgICBsb3dlcjogbWVhc3VyZVRvcChvcHRpb25zLnhIZWlnaHQpICsgMSxcclxuICAgICAgICAgICAgYmFzZWxpbmU6IG1lYXN1cmVCb3R0b20ob3B0aW9ucy5iYXNlbGluZSkgKyAxLFxyXG4gICAgICAgICAgICBkZXNjZW50OiBtZWFzdXJlQm90dG9tKG9wdGlvbnMuZGVzY2VudCkgKyAxLFxyXG4gICAgICAgICAgICBib3R0b206IGNhbnZhc0xpbmVIZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaGVpZ2h0cyA9IHtcclxuICAgICAgICAgICAgY2FwSGVpZ2h0OiBvZmZzZXRzLmJhc2VsaW5lIC0gb2Zmc2V0cy51cHBlcixcclxuICAgICAgICAgICAgb3ZlclNob290OiBtZWFzdXJlQm90dG9tKG9wdGlvbnMub3ZlcnNob290KSAtIG9mZnNldHMuYmFzZWxpbmUsXHJcbiAgICAgICAgICAgIHhIZWlnaHQ6IG9mZnNldHMuYmFzZWxpbmUgLSBvZmZzZXRzLmxvd2VyLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBjc3NMaW5lSGVpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9udFNpemU6IG9wdGlvbnMuZm9udFNpemUsXHJcbiAgICAgICAgICAgIGhlaWdodHM6IGhlaWdodHMsXHJcbiAgICAgICAgICAgIG9mZnNldHM6IG9mZnNldHMsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICB2YXIgaGFzaCA9IGdldENhY2hlSGFzaChmb250LCBvcHRpb25zKTtcclxuICAgIGlmIChjYWNoZVtoYXNoXSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmZvbnRTaXplIDw9IGNhY2hlW2hhc2hdLmZvbnRTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbm9ybWFsaXplKGNhY2hlW2hhc2hdLCAxLCBvcHRpb25zLm9yaWdpbildO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEZvbnQoKTtcclxuICAgIHZhciBuZXdNZXRyaWNzID0gbm9ybWFsaXplKGdldE1ldHJpY3MoKSwgb3B0aW9ucy5mb250U2l6ZSwgb3B0aW9ucy5vcmlnaW4pO1xyXG4gICAgc2V0Q2FjaGUoT2JqZWN0LmFzc2lnbihjYWNoZSwgKF9hID0ge30sXHJcbiAgICAgICAgX2FbaGFzaF0gPSBuZXdNZXRyaWNzLFxyXG4gICAgICAgIF9hKSkpO1xyXG4gICAgcmV0dXJuIFtuZXdNZXRyaWNzXTtcclxufTtcblxuZXhwb3J0cy5kZWZhdWx0Rm9udEhlaWdodHMgPSBkZWZhdWx0Rm9udEhlaWdodHM7XG5leHBvcnRzLmRlZmF1bHRGb250TWV0cmljcyA9IGRlZmF1bHRGb250TWV0cmljcztcbmV4cG9ydHMuZGVmYXVsdEZvbnRNZXRyaWNzT3B0aW9ucyA9IGRlZmF1bHRGb250TWV0cmljc09wdGlvbnM7XG5leHBvcnRzLmRlZmF1bHRGb250T2Zmc2V0cyA9IGRlZmF1bHRGb250T2Zmc2V0cztcbmV4cG9ydHMuZ2V0Q2FjaGVIYXNoID0gZ2V0Q2FjaGVIYXNoO1xuZXhwb3J0cy51c2VGb250TWV0cmljcyA9IHVzZUZvbnRNZXRyaWNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb250TWV0cmljcyB9IGZyb20gXCJAZ3Jvb3Zpei9mb250LW1ldHJpY3NcIjtcclxuaW1wb3J0IHsgTWV0cmljc1BhcmFtZXRlcnMgfSBmcm9tIFwiLi9NZXRyaWNzUGFyYW1ldGVyc1wiO1xyXG5cclxuY29uc3Qgb2Zmc2V0Q29sb3JzID0ge1xyXG4gIHRvcDogXCJyZ2IoMTM2LDE3NCwyMjUpXCIsXHJcbiAgYXNjZW50OiBcInJnYigxMzUsMTcwLDM1KVwiLFxyXG4gIHRpdHRsZTogXCJyZ2IoMTcxLDExOCwyNDIpXCIsXHJcbiAgdXBwZXI6IFwicmdiKDYyLDE5NSw3MylcIixcclxuICBsb3dlcjogXCJyZ2IoMjQ2LDY2LDIwOClcIixcclxuICBiYXNlbGluZTogXCJyZ2IoMTMyLDE4MywxNDMpXCIsXHJcbiAgYm90dG9tOiBcInJnYigyMDcsNzAsODgpXCIsXHJcbiAgZGVzY2VudDogXCJyZ2IoMjQ3LDE0NywzMClcIixcclxuICByZXNlcnZlZDI6IFwicmdiKDE0NCwxMTIsOTQpXCIsXHJcbiAgcmVzZXJ2ZWQzOiBcInJnYigyNTMsODksMjMpXCIsXHJcbn07XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG1ldHJpY3NQYXJhbWV0ZXJzOiBNZXRyaWNzUGFyYW1ldGVycztcclxufTtcclxuXHJcbmNvbnN0IE1ldHJpY3NDYW52YXM6IEZDPFByb3BzPiA9ICh7IG1ldHJpY3NQYXJhbWV0ZXJzIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgZm9udFdlaWdodCA9IG1ldHJpY3NQYXJhbWV0ZXJzLmJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgY29uc3QgZm9udFN0eWxlID0gbWV0cmljc1BhcmFtZXRlcnMuaXRhbGljID8gXCJpdGFsaWNcIiA6IFwiXCI7XHJcbiAgY29uc3QgW21ldHJpY3NdID0gdXNlRm9udE1ldHJpY3MobWV0cmljc1BhcmFtZXRlcnMuZm9udEZhbWlseSwge1xyXG4gICAgb3JpZ2luOiBcInRvcFwiLFxyXG4gICAgZm9udFN0eWxlLFxyXG4gICAgZm9udFdlaWdodCxcclxuICAgIGNhcEhlaWdodDogbWV0cmljc1BhcmFtZXRlcnMub2Zmc2V0Q2hhcnNbXCJ1cHBlclwiXSxcclxuICAgIHhIZWlnaHQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1wibG93ZXJcIl0sXHJcbiAgICBkZXNjZW50OiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImRlc2NlbnRcIl0sXHJcbiAgICBhc2NlbnQ6IG1ldHJpY3NQYXJhbWV0ZXJzLm9mZnNldENoYXJzW1wiYXNjZW50XCJdLFxyXG4gICAgdGl0dGxlOiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcInRpdHRsZVwiXSxcclxuICAgIGJhc2VsaW5lOiBtZXRyaWNzUGFyYW1ldGVycy5vZmZzZXRDaGFyc1tcImJhc2VsaW5lXCJdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcHJpbnRMaW5lID0gKFxyXG4gICAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgb2Zmc2V0OiBudW1iZXIsXHJcbiAgICAgIGNvbG9yOiBzdHJpbmdcclxuICAgICkgPT4ge1xyXG4gICAgICBjdHghLnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgIGN0eCEubGluZVdpZHRoID0gNDtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKDAsIHBhZGRpbmcgKyBvZmZzZXQgKiBmb250U2l6ZSAqIHBpeGVsUmF0aW8pO1xyXG4gICAgICBjdHgubGluZVRvKGN0eCEuY2FudmFzLndpZHRoLCBwYWRkaW5nICsgb2Zmc2V0ICogZm9udFNpemUgKiBwaXhlbFJhdGlvKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA6IDE7XHJcbiAgY29uc3Qgd2lkdGggPSBjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRXaWR0aFxyXG4gIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodFxyXG4gIGNvbnN0IGZvbnRTaXplID0gTWF0aC5taW4od2lkdGgvNiwgaGVpZ2h0LzIpXHJcbiAgLy8gY29uc3QgZm9udFNpemUgPSA2MDtcclxuICAvLyBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoZm9udFNpemUgKiAyKTtcclxuICAvLyBjb25zdCB3aWR0aCA9IGhlaWdodCAqIDM7XHJcbiAgY29uc3QgcGFkZGluZyA9IE1hdGguY2VpbChmb250U2l6ZSAqIDAuNSk7XHJcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoICogcGl4ZWxSYXRpbztcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBwaXhlbFJhdGlvO1xyXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gJzkwJSc7Ly9gJHt3aWR0aH1weGA7XHJcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzkwJSc7Ly9gJHtoZWlnaHR9cHhgO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzIS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHghLmZpbGxTdHlsZSA9IFwiI0FBRUVFRVwiO1xyXG4gICAgY3R4IS5maWxsUmVjdCgwLCAwLCBjdHghLmNhbnZhcy53aWR0aCwgY3R4IS5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eCEuZm9udCA9IGAke2ZvbnRTdHlsZX0gJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplICogcGl4ZWxSYXRpb31weCAke1xyXG4gICAgICBtZXRyaWNzUGFyYW1ldGVycy5mb250RmFtaWx5XHJcbiAgICB9YDtcclxuICAgIGN0eCEuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4IS50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgY3R4IS5maWxsVGV4dChcclxuICAgICAgbWV0cmljc1BhcmFtZXRlcnMudGV4dCxcclxuICAgICAgMCxcclxuICAgICAgcGFkZGluZyArIG1ldHJpY3Mub2Zmc2V0cy50b3AgKiBmb250U2l6ZSAqIHBpeGVsUmF0aW9cclxuICAgICk7XHJcbiAgICBtZXRyaWNzUGFyYW1ldGVycy52aXNpYmxlT2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQpID0+XHJcbiAgICAgIHByaW50TGluZShjdHghLCBtZXRyaWNzLm9mZnNldHNbb2Zmc2V0XSwgb2Zmc2V0Q29sb3JzW29mZnNldF0pXHJcbiAgICApO1xyXG4gIH0sIFtcclxuICAgIGZvbnRTdHlsZSxcclxuICAgIGZvbnRXZWlnaHQsXHJcbiAgICBtZXRyaWNzUGFyYW1ldGVycyxcclxuICAgIG1ldHJpY3MsXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgIDxjYW52YXNcclxuICAgICAgcmVmPXtjYW52YXNSZWZ9XHJcbiAgICA+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc0NhbnZhcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250T2Zmc2V0TmFtZXMgfSBmcm9tIFwiQGdyb292aXovZm9udC1tZXRyaWNzXCI7XHJcblxyXG5leHBvcnQgdHlwZSBNZXRyaWNzUGFyYW1ldGVycyA9IHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgZm9udEZhbWlseTogc3RyaW5nO1xyXG4gIGJvbGQ6IGJvb2xlYW47XHJcbiAgaXRhbGljOiBib29sZWFuO1xyXG4gIHZpc2libGVPZmZzZXRzOiBBcnJheTxGb250T2Zmc2V0TmFtZXM+O1xyXG4gIG9mZnNldENoYXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBwYXJhbXM6IE1ldHJpY3NQYXJhbWV0ZXJzO1xyXG4gIG9uUGFyYW1zQ2hhbmdlOiAocGFyYW1zOiBNZXRyaWNzUGFyYW1ldGVycykgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IE1ldHJpY3NQYXJhbWV0ZXJzRm9ybTogRkM8UHJvcHM+ID0gKHtcclxuICBwYXJhbXMsXHJcbiAgb25QYXJhbXNDaGFuZ2UsXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgYWxsT2Zmc2V0Q2hlY2tib3hSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3Qgc2V0Rm9udEZhbWlseSA9IChmb250RmFtaWx5OiBzdHJpbmcpID0+XHJcbiAgICBvblBhcmFtc0NoYW5nZSh7IC4uLnBhcmFtcywgZm9udEZhbWlseSB9KTtcclxuICBjb25zdCBzZXRUZXh0ID0gKHRleHQ6IHN0cmluZykgPT4gb25QYXJhbXNDaGFuZ2UoeyAuLi5wYXJhbXMsIHRleHQgfSk7XHJcbiAgY29uc3QgdG9nZ2xlQm9sZCA9ICgpID0+IG9uUGFyYW1zQ2hhbmdlKHsgLi4ucGFyYW1zLCBib2xkOiAhcGFyYW1zLmJvbGQgfSk7XHJcbiAgY29uc3QgdG9nZ2xlSXRhbGljID0gKCkgPT5cclxuICAgIG9uUGFyYW1zQ2hhbmdlKHsgLi4ucGFyYW1zLCBpdGFsaWM6ICFwYXJhbXMuaXRhbGljIH0pO1xyXG4gIGNvbnN0IHRvZ2dsZU9mZnNldCA9IChvZmZzZXROYW1lOiBGb250T2Zmc2V0TmFtZXMpID0+XHJcbiAgICBvblBhcmFtc0NoYW5nZSh7XHJcbiAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgdmlzaWJsZU9mZnNldHM6IHBhcmFtcy52aXNpYmxlT2Zmc2V0cy5pbmNsdWRlcyhvZmZzZXROYW1lKVxyXG4gICAgICAgID8gcGFyYW1zLnZpc2libGVPZmZzZXRzLmZpbHRlcigoeCkgPT4geCAhPT0gb2Zmc2V0TmFtZSlcclxuICAgICAgICA6IFsuLi5wYXJhbXMudmlzaWJsZU9mZnNldHMsIG9mZnNldE5hbWVdLFxyXG4gICAgfSk7XHJcbiAgY29uc3QgdG9nZ2xlQWxsT2Zmc2V0ID0gKCkgPT5cclxuICAgIG9uUGFyYW1zQ2hhbmdlKHtcclxuICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICB2aXNpYmxlT2Zmc2V0czpcclxuICAgICAgICBwYXJhbXMudmlzaWJsZU9mZnNldHMubGVuZ3RoID09PSBPYmplY3QudmFsdWVzKEZvbnRPZmZzZXROYW1lcykubGVuZ3RoXHJcbiAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICA6IE9iamVjdC52YWx1ZXMoRm9udE9mZnNldE5hbWVzKSxcclxuICAgIH0pO1xyXG4gIGNvbnN0IHNldE9mZnNldENoYXIgPSAob2Zmc2V0TmFtZTogRm9udE9mZnNldE5hbWVzLCBjaGFyOiBzdHJpbmcpID0+XHJcbiAgICBvblBhcmFtc0NoYW5nZSh7XHJcbiAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgb2Zmc2V0Q2hhcnM6IHsgLi4ucGFyYW1zLm9mZnNldENoYXJzLCBbb2Zmc2V0TmFtZV06IGNoYXJbMF0gfSxcclxuICAgIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhbGxPZmZzZXRDaGVja2JveFJlZi5jdXJyZW50KSByZXR1cm47XHJcbiAgICBhbGxPZmZzZXRDaGVja2JveFJlZi5jdXJyZW50IS5pbmRldGVybWluYXRlID1cclxuICAgICAgcGFyYW1zLnZpc2libGVPZmZzZXRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgcGFyYW1zLnZpc2libGVPZmZzZXRzLmxlbmd0aCA8IE9iamVjdC52YWx1ZXMoRm9udE9mZnNldE5hbWVzKS5sZW5ndGg7XHJcbiAgICBhbGxPZmZzZXRDaGVja2JveFJlZi5jdXJyZW50IS5jaGVja2VkID1cclxuICAgICAgcGFyYW1zLnZpc2libGVPZmZzZXRzLmxlbmd0aCA9PT0gT2JqZWN0LnZhbHVlcyhGb250T2Zmc2V0TmFtZXMpLmxlbmd0aDtcclxuICB9LCBbcGFyYW1zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+VGV4dDo8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklucHV0IHNvbWUgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhcmFtcy50ZXh0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+Rm9udDo8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhcmFtcy5mb250RmFtaWx5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb250RmFtaWx5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2F0YW1hcmFuXCI+Q2F0YW1hcmFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJpYWxcIj5BcmlhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0YWF0bGljaGVzXCI+U3RhYXRsaWNoZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTeW5lXCI+U3luZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNhYmFkb1wiPlNhYmFkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZlcmRhbmFcIj5WZXJkYW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VvcmdpYVwiPkdlb3JnaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb3VyaWVyIE5ld1wiPkNvdXJpZXIgTmV3PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQnJ1c2ggU2NyaXB0IE1UXCI+QnJ1c2ggU2NyaXB0IE1UPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW1wYWN0XCI+SW1wYWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+Qm9sZDo8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17cGFyYW1zLmJvbGR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlQm9sZCgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+SXRhbGljOjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtwYXJhbXMuaXRhbGljfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUl0YWxpYygpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyIGtleT1cImFsbFwiPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXthbGxPZmZzZXRDaGVja2JveFJlZn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVBbGxPZmZzZXQoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAge09iamVjdC52YWx1ZXMoRm9udE9mZnNldE5hbWVzKS5tYXAoKG9mZnNldE5hbWUpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17b2Zmc2V0TmFtZX0+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3BhcmFtcy52aXNpYmxlT2Zmc2V0cy5pbmNsdWRlcyhvZmZzZXROYW1lKX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZU9mZnNldChvZmZzZXROYW1lKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e29mZnNldE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7IVtcInRvcFwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhvZmZzZXROYW1lKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFyYW1zLm9mZnNldENoYXJzW29mZnNldE5hbWVdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T2Zmc2V0Q2hhcihvZmZzZXROYW1lLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc1BhcmFtZXRlcnNGb3JtO1xyXG4iLCJpbXBvcnQgTWV0cmljc1BhcmFtZXRlcnNGb3JtLCB7XG4gIE1ldHJpY3NQYXJhbWV0ZXJzLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRyaWNzUGFyYW1ldGVyc1wiO1xuaW1wb3J0IE1ldHJpY3NDYW52YXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0cmljc0NhbnZhc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRPZmZzZXROYW1lcyB9IGZyb20gXCJAZ3Jvb3Zpei9mb250LW1ldHJpY3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21ldHJpY3NQYXJhbWV0ZXJzLCBzZXRNZXRyaWNzUGFyYW1ldGVyc10gPSB1c2VTdGF0ZTxNZXRyaWNzUGFyYW1ldGVycz4oXG4gICAge1xuICAgICAgZm9udEZhbWlseTogXCJTYWJhZG9cIixcbiAgICAgIHRleHQ6IFwiU3VwQXJIaGVpZm5vXCIsXG4gICAgICBib2xkOiBmYWxzZSxcbiAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICB2aXNpYmxlT2Zmc2V0czogT2JqZWN0LnZhbHVlcyhGb250T2Zmc2V0TmFtZXMpLFxuICAgICAgb2Zmc2V0Q2hhcnM6IHtcbiAgICAgICAgdXBwZXI6IFwiSFwiLFxuICAgICAgICBsb3dlcjogXCJ4XCIsXG4gICAgICAgIGRlc2NlbnQ6IFwicFwiLFxuICAgICAgICBhc2NlbnQ6IFwiaFwiLFxuICAgICAgICB0aXR0bGU6IFwiaVwiLFxuICAgICAgICBiYXNlbGluZTogXCJuXCIsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkZvbnQgTWV0cmljcyBIb29rIEhhaGFoYTwvaDE+XG4gICAgICA8aDI+Q2FsY3VsYXRlIEZvbnRzIE1ldHJpY3MgdXNpbmcgSFRNTCBDYW52YXM8L2gyPlxuICAgICAgPHA+VGhpcyBSZWFjdCBQYWNrYWdlIGlzIGJyb3VnaHQgdG8geW91IGJ5IHRoZSBHUk9PVklaIFRlYW0hPC9wPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjMwJSAxZnJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TWV0cmljc1BhcmFtZXRlcnNGb3JtXG4gICAgICAgICAgICBwYXJhbXM9e21ldHJpY3NQYXJhbWV0ZXJzfVxuICAgICAgICAgICAgb25QYXJhbXNDaGFuZ2U9eyh4OiBNZXRyaWNzUGFyYW1ldGVycykgPT4ge1xuICAgICAgICAgICAgICBzZXRNZXRyaWNzUGFyYW1ldGVycyh4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE1ldHJpY3NDYW52YXMgbWV0cmljc1BhcmFtZXRlcnM9e21ldHJpY3NQYXJhbWV0ZXJzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==