import { Highlight, themes } from "prism-react-renderer";

type CodeHighlighterProps = {
  codeString: string;
  language?: string;
  maxHeight?: string;
  outerMaxWidth?: string;
  containerPadding?: string;
};

export default function CodeHighlighter({
  codeString,
  language = "html",
  maxHeight = "60vh",
  outerMaxWidth = "calc(100vw - 4rem)",
  containerPadding = "0.5rem",
}: CodeHighlighterProps) {
  return (
    <div
      className="code-highlighter-container"
      style={{
        width: "100%",
        maxWidth: outerMaxWidth,
        marginLeft: "auto",
        marginRight: "auto",
        boxSizing: "border-box",
        borderRadius: 8,
        overflow: "hidden",
        padding: containerPadding,
        position: "relative",
      }}
    >
      <div
        className="code-scroll"
        style={{
          width: "100%",
          overflowX: "auto",
          overflowY: "auto",
          boxSizing: "border-box",
          padding: 0,
          maxHeight,
        }}
      >
        <Highlight
          theme={themes.shadesOfPurple}
          code={codeString}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                display: "inline-block",
                whiteSpace: "pre",
                minWidth: "max-content",
                margin: 0,
                padding: "1rem",
                boxSizing: "border-box",
              }}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      textAlign: "right",
                      paddingRight: 8,
                      userSelect: "none",
                      opacity: 0.5,
                      flex: "0 0 48px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {i + 1}
                  </div>
                  
                  <div
                    style={{
                      whiteSpace: "pre",
                      minWidth: 0,
                    }}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      

      <style>
        {`
          @media (max-width: 640px) {
            .code-highlighter-container {
              max-width: calc(100vw - 1rem) !important;
              padding: 0.25rem !important;
              margin: 0 0.5rem !important;
            }
            .code-scroll {
              max-height: 50vh !important;
            }
          }
        `}
      </style>
    </div>
  );
}