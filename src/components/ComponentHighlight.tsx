import { useState } from "react";
import CodeHighlighter from "../components/CodeHiglighter";

type ComponentProps = {
    sourceCode: string
}

const ComponentHighlight = ({sourceCode} : ComponentProps) => {
  const [showCode, setShowCode] = useState<boolean>(false);

  return (
    <>
      <h2 className=" text-2xl font-bold mb-4">Contact Component Code</h2>
      <button
        className={`text-[1rem] rounded-[0.3rem] hover:cursor-pointer  px-[1.4rem] py-[0.4rem] font-bold ${
          showCode ? "bg-red-600" : "bg-sky-500"
        } text-white`}
         onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setShowCode(prev => !prev)
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
          containerPadding="1rem"
        />
      ) : (
        <div>
          {sourceCode}
        </div>
      )}
    </>
  );
};

export default ComponentHighlight;
