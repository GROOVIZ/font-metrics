import { defaultFontHeights, FontHeights } from "./FontHeights.type";
import { defaultFontOffsets, FontOffsets } from "./FontOffsets.type";

export type FontMetrics = {
  fontSize: number;
  heights: FontHeights;
  offsets: FontOffsets;
};

export const defaultFontMetrics: FontMetrics = {
  fontSize: 16,
  heights: defaultFontHeights,
  offsets: defaultFontOffsets,
};
