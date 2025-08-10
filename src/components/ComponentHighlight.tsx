import { useState } from "react";
import CodeHighlighter from "../components/CodeHiglighter";

type ComponentProps = {
  sourceCode: string;
  title: string;
};

const ComponentHighlight = ({ sourceCode, title }: ComponentProps) => {
  const [showCode, setShowCode] = useState<boolean>(false);

  return (
    <>
      <h2 className="ml-[1rem] mt-[3.4rem] text-3xl font-bold mb-6  bg-clip-text">
        {title}
      </h2>
      <button
        className={`ml-[1rem] mb-[1rem] text-[1rem] rounded-lg hover:cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-[1.4rem] py-[0.4rem] font-bold ${
          showCode
            ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
        } text-white`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowCode((prev) => !prev);
        }}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>
      {showCode ? (
        <CodeHighlighter
          codeString={sourceCode}
          language="html"
          maxHeight="70vh"
          outerMaxWidth="calc(100vw - 18rem)"
        />
      ) : (
        <div
          style={{
            maxHeight: "70vh",
            position: "relative",
            overflow: "auto",
          }}
          className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl mb-[1rem] shadow-xl p-[0.6rem] mx-4 border border-gray-200"
        >
          <div
            style={{
              pointerEvents: "none",
            }}
            dangerouslySetInnerHTML={{ __html: sourceCode }}
          />
        </div>
      )}
    </>
  );
};

export default ComponentHighlight;
