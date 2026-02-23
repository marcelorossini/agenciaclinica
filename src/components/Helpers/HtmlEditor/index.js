import { useState } from "react";
import {
  Wrapper,
  Tabs,
  Tab,
  Textarea,
  PreviewWrapper,
  PreviewFrame,
} from "./style";

const HtmlEditor = ({ value = "", onChange, onBlur, name }) => {
  const [mode, setMode] = useState("code");

  return (
    <Wrapper>
      <Tabs>
        <Tab
          type="button"
          active={mode === "code"}
          onClick={() => setMode("code")}
        >
          Código
        </Tab>
        <Tab
          type="button"
          active={mode === "preview"}
          onClick={() => setMode("preview")}
        >
          Visualização
        </Tab>
      </Tabs>
      {mode === "code" ? (
        <Textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder="Digite ou cole o HTML aqui..."
          spellCheck={false}
        />
      ) : (
        <PreviewWrapper>
          <PreviewFrame
            title="Preview HTML"
            srcDoc={
              value && (value.trim().startsWith("<!") || value.trim().startsWith("<html"))
                ? value
                : `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${value || ""}</body></html>`
            }
            sandbox="allow-same-origin"
          />
        </PreviewWrapper>
      )}
    </Wrapper>
  );
};

export default HtmlEditor;
