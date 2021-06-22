export type FontMetricsOptions = {
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  origin?: string;
  capHeight?: string;
  xHeight?: string;
  descent?: string;
  ascent?: string;
  tittle?: string;
  baseline?: string;
  overshoot?: string;
};

export const defaultFontMetricsOptions: FontMetricsOptions = {
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
