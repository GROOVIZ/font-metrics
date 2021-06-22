import React, { FC, useEffect, useRef, useState } from "react";
import { useFontMetrics } from "@grooviz/font-metrics";
import { MetricsParameters } from "./MetricsParameters";

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
  reserved3: "rgb(253,89,23)",
};

type Props = {
  metricsParameters: MetricsParameters;
};

const MetricsCanvas: FC<Props> = ({ metricsParameters }: Props) => {
  const fontWeight = metricsParameters.bold ? "bold" : "normal";
  const fontStyle = metricsParameters.italic ? "italic" : "";
  const [metrics] = useFontMetrics(metricsParameters.fontFamily, {
    origin: "top",
    fontStyle,
    fontWeight,
    capHeight: metricsParameters.offsetChars["upper"],
    xHeight: metricsParameters.offsetChars["lower"],
    descent: metricsParameters.offsetChars["descent"],
    ascent: metricsParameters.offsetChars["ascent"],
    tittle: metricsParameters.offsetChars["tittle"],
    baseline: metricsParameters.offsetChars["baseline"],
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const printLine = (
      ctx: CanvasRenderingContext2D,
      offset: number,
      color: string
    ) => {
      ctx!.strokeStyle = color;
      ctx!.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, padding + offset * fontSize * pixelRatio);
      ctx.lineTo(ctx!.canvas.width, padding + offset * fontSize * pixelRatio);
      ctx.stroke();
    };

  const pixelRatio = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const width = containerRef.current.clientWidth
  const height = containerRef.current.clientHeight
  const fontSize = Math.min(width/6, height/2)
  // const fontSize = 60;
  // const height = Math.ceil(fontSize * 2);
  // const width = height * 3;
  const padding = Math.ceil(fontSize * 0.5);
    const canvas = canvasRef.current;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    canvas.style.width = '90%';//`${width}px`;
    canvas.style.height = '90%';//`${height}px`;
    const ctx = canvas!.getContext("2d");
    ctx!.fillStyle = "#AAEEEE";
    ctx!.fillRect(0, 0, ctx!.canvas.width, ctx!.canvas.height);
    ctx!.font = `${fontStyle} ${fontWeight} ${fontSize * pixelRatio}px ${
      metricsParameters.fontFamily
    }`;
    ctx!.fillStyle = "black";
    ctx!.textBaseline = "top";
    ctx!.fillText(
      metricsParameters.text,
      0,
      padding + metrics.offsets.top * fontSize * pixelRatio
    );
    metricsParameters.visibleOffsets.forEach((offset) =>
      printLine(ctx!, metrics.offsets[offset], offsetColors[offset])
    );
  }, [
    fontStyle,
    fontWeight,
    metricsParameters,
    metrics,
  ]);
  return (
    <div ref={containerRef} style={{width: '100%', height: '100%'}}>
    <canvas
      ref={canvasRef}
    ></canvas>
    </div>
  );
};

export default MetricsCanvas;
