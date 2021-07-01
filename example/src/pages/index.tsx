import MetricsParametersForm, {
  MetricsParameters,
} from "../components/MetricsParameters";
import MetricsCanvas from "../components/MetricsCanvas";
import { useState } from "react";
import { FontOffsetNames } from "@grooviz/font-metrics";

export default function Home() {
  const [metricsParameters, setMetricsParameters] = useState<MetricsParameters>(
    {
      fontFamily: "Sabado",
      text: "SupArHheifno",
      bold: false,
      italic: false,
      visibleOffsets: Object.values(FontOffsetNames),
      offsetChars: {
        upper: "H",
        lower: "x",
        descent: "p",
        ascent: "h",
        tittle: "i",
        baseline: "n",
      },
    }
  );
  return (
    <>
      <h1>Font Metrics Hook Hahaha</h1>
      <h2>Calculate Fonts Metrics using HTML Canvas</h2>
      <p>This React Package is brought to you by the GROOVIZ Team!</p>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "30% 1fr",
        }}
      >
        <div>
          <MetricsParametersForm
            params={metricsParameters}
            onParamsChange={(x: MetricsParameters) => {
              setMetricsParameters(x);
            }}
          />
        </div>
        <div>
          <MetricsCanvas metricsParameters={metricsParameters} />
        </div>
      </div>
    </>
  );
}
