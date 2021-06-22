import React, { FC, useEffect, useRef } from "react";
import { FontOffsetNames } from "@grooviz/font-metrics";

export type MetricsParameters = {
  text: string;
  fontFamily: string;
  bold: boolean;
  italic: boolean;
  visibleOffsets: Array<FontOffsetNames>;
  offsetChars: { [key: string]: string };
};

type Props = {
  params: MetricsParameters;
  onParamsChange: (params: MetricsParameters) => void;
};

const MetricsParametersForm: FC<Props> = ({
  params,
  onParamsChange,
}: Props) => {
  const allOffsetCheckboxRef = useRef<HTMLInputElement>(null);
  const setFontFamily = (fontFamily: string) =>
    onParamsChange({ ...params, fontFamily });
  const setText = (text: string) => onParamsChange({ ...params, text });
  const toggleBold = () => onParamsChange({ ...params, bold: !params.bold });
  const toggleItalic = () =>
    onParamsChange({ ...params, italic: !params.italic });
  const toggleOffset = (offsetName: FontOffsetNames) =>
    onParamsChange({
      ...params,
      visibleOffsets: params.visibleOffsets.includes(offsetName)
        ? params.visibleOffsets.filter((x) => x !== offsetName)
        : [...params.visibleOffsets, offsetName],
    });
  const toggleAllOffset = () =>
    onParamsChange({
      ...params,
      visibleOffsets:
        params.visibleOffsets.length === Object.values(FontOffsetNames).length
          ? []
          : Object.values(FontOffsetNames),
    });
  const setOffsetChar = (offsetName: FontOffsetNames, char: string) =>
    onParamsChange({
      ...params,
      offsetChars: { ...params.offsetChars, [offsetName]: char[0] },
    });

  useEffect(() => {
    if (!allOffsetCheckboxRef.current) return;
    allOffsetCheckboxRef.current!.indeterminate =
      params.visibleOffsets.length > 0 &&
      params.visibleOffsets.length < Object.values(FontOffsetNames).length;
    allOffsetCheckboxRef.current!.checked =
      params.visibleOffsets.length === Object.values(FontOffsetNames).length;
  }, [params]);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Text:</td>
            <td>
              <input
                type="text"
                placeholder="Input some text"
                onChange={(e) => setText(e.target.value)}
                value={params.text}
              />
            </td>
          </tr>
          <tr>
            <td>Font:</td>
            <td>
              <select
                value={params.fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <option value="Catamaran">Catamaran</option>
                <option value="Arial">Arial</option>
                <option value="Staatliches">Staatliches</option>
                <option value="Syne">Syne</option>
                <option value="Sabado">Sabado</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Courier New">Courier New</option>
                <option value="Brush Script MT">Brush Script MT</option>
                <option value="Impact">Impact</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Bold:</td>
            <td>
              <input
                type="checkbox"
                checked={params.bold}
                onChange={() => toggleBold()}
              />
            </td>
          </tr>
          <tr>
            <td>Italic:</td>
            <td>
              <input
                type="checkbox"
                checked={params.italic}
                onChange={() => toggleItalic()}
              />
            </td>
          </tr>
          <tr key="all">
            <td>
              <input
                type="checkbox"
                ref={allOffsetCheckboxRef}
                onChange={() => toggleAllOffset()}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          {Object.values(FontOffsetNames).map((offsetName) => (
            <tr key={offsetName}>
              <td>
                <input
                  type="checkbox"
                  checked={params.visibleOffsets.includes(offsetName)}
                  onChange={() => toggleOffset(offsetName)}
                />
              </td>
              <td>{offsetName}</td>
              <td>
                {!["top", "bottom"].includes(offsetName) && (
                  <input
                    type="text"
                    value={params.offsetChars[offsetName]}
                    onChange={(e) => setOffsetChar(offsetName, e.target.value)}
                    size={1}
                    style={{ textAlign: "center" }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MetricsParametersForm;
