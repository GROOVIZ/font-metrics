import { useState } from "react";
import {
  defaultFontMetrics,
  defaultFontMetricsOptions,
  FontHeights,
  FontMetrics,
  FontMetricsOptions,
  FontOffsets,
} from "../types";
import { getCacheHash } from "../utils";

/**
 * The custom Hook [useMetrics] returns the [FontMetrics] for the [font]
 * (defined as a font-family or a comma separated list of font-families)
 * and optional [options].
 */

const useFontMetrics = (font: string, options: FontMetricsOptions = {}) => {
  if (typeof document === "undefined") return [defaultFontMetrics];

  options = Object.assign(defaultFontMetricsOptions, options);
  const padding = options.fontSize! * 0.5;

  const [cache, setCache] = useState<{
    [key: string]: FontMetrics;
  }>({});

  const [canvas] = useState<HTMLCanvasElement>(
    document.createElement("canvas")
  );
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

  const setFont = () => {
    canvas.width = options.fontSize! * 2;
    canvas.height = options.fontSize! * 2 + padding;
    ctx.font = `${options.fontStyle} ${options.fontWeight} ${options.fontSize}px ${font}`;
    ctx.textBaseline = "top";
    ctx.textAlign = "center";
  };

  const setAlignment = (baseline: CanvasTextBaseline) => {
    // const ty = baseline === 'bottom' ? canvas.height : 0
    // ctx.setTransform(1, 0, 0, 1, 0, ty)
    ctx.textBaseline = baseline;
  };

  const updateText = (text: string) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(
      text,
      canvas.width / 2,
      ctx.textBaseline === "bottom" ? canvas.height : padding
    );
  };

  const computeCssLineHeight = () => {
    const div = document.createElement("DIV");
    div.id = "__textMeasure";
    div.innerHTML = "x";
    div.style.position = "absolute";
    div.style.top = "-500px";
    div.style.left = "0";
    div.style.fontFamily = font;
    div.style.fontWeight = options.fontWeight!;
    div.style.fontStyle = options.fontStyle!;
    div.style.fontSize = `${options.fontSize!}px`;
    document.body.appendChild(div);
    const lineHeight = div.offsetHeight;
    document.body.removeChild(div);
    return lineHeight;
  };

  const computeCanvasLineHeight = () => {
    const letter = "A";
    setAlignment("bottom");
    const gutter = canvas.height - measureBottom(letter) - padding;
    setAlignment("top");
    return measureBottom(letter) + gutter;
  };

  const getPixels = (text: string) => {
    updateText(text);
    return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  };

  const getFirstIndex = (text: string) => {
    const pixels = getPixels(text);
    for (let i = 3, n = pixels.length; i < n; i += 4) {
      if (pixels[i] > 0) return (i - 3) / 4;
    }
    return pixels.length;
  };

  const getLastIndex = (text: string) => {
    const pixels = getPixels(text);
    for (let i = pixels.length - 1; i >= 3; i -= 4) {
      if (pixels[i] > 0) return i / 4;
    }
    return 0;
  };

  const measureTop = (text: string) =>
    Math.round(getFirstIndex(text) / canvas.width) - padding;

  const measureBottom = (text: string) =>
    Math.round(getLastIndex(text) / canvas.width) - padding;

  const normalize = (
    metrics: FontMetrics,
    fontSize: number,
    origin: string
  ): FontMetrics => {
    console.log("MMETRICS: ", metrics);
    const result: FontMetrics = {
      fontSize: metrics.fontSize,
      heights: Object.assign({}, metrics.heights),
      offsets: Object.assign({}, metrics.offsets),
    };
    if (fontSize !== 1) {
      for (let key in metrics.heights) {
        result.heights[key as keyof FontHeights] /= fontSize;
      }
      for (let key in metrics.offsets) {
        result.offsets[key as keyof FontOffsets] /= fontSize;
      }
    }
    const offset = result.offsets[origin as keyof FontOffsets];
    for (let key in metrics.offsets) {
      result.offsets[key as keyof FontOffsets] -= offset;
    }
    console.log("NNEW MMETRICS: ", result);
    return result;
  };

  const getMetrics = () => {
    const cssLineHeight = computeCssLineHeight();
    const canvasLineHeight = computeCanvasLineHeight();
    const offsets: FontOffsets = {
      top: 0,
      ascent: measureTop(options.ascent!),
      tittle: measureTop(options.tittle!),
      upper: measureTop(options.capHeight!),
      lower: measureTop(options.xHeight!),
      baseline: measureBottom(options.baseline!),
      descent: measureBottom(options.descent!),
      bottom: canvasLineHeight,
    };
    const problems = Object.keys(offsets).filter(
      (x) => x !== "top" && offsets[x] <= 0
    );
    if (problems.length > 0) {
      console.log("PROBLEMS: ", problems);
    }
    const heights: FontHeights = {
      capHeight: offsets.baseline - offsets.upper,
      overShoot: measureBottom(options.overshoot!) - offsets.baseline,
      xHeight: offsets.baseline - offsets.lower,
      lineHeight: cssLineHeight,
    };
    return {
      fontSize: options.fontSize!,
      heights,
      offsets,
    };
  };

  const hash = getCacheHash(font, options);

  if (cache[hash]) {
    if (options.fontSize! <= cache[hash].fontSize) {
      return [normalize(cache[hash], 1, options.origin!)];
    }
  }

  setFont();

  const newMetrics = normalize(
    getMetrics(),
    options.fontSize!,
    options.origin!
  );

  setCache(
    Object.assign(cache, {
      [hash]: newMetrics,
    })
  );

  return [newMetrics];
};

export default useFontMetrics;
