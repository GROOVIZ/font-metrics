import { FontMetricsOptions } from "../types";

export const getCacheHash = (font: string, options: FontMetricsOptions) =>
  [
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
