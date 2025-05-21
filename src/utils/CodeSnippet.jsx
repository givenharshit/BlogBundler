import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="relative bg-gray-900 rounded-xl shadow-md">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-8 z-10 text-white hover:text-green-400 transition-colors"
        aria-label="Copy code"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>

      {/* Scrollable syntax-highlighted code */}
      <div className="max-h-[600px] overflow-auto rounded-xl">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1rem",
            minWidth: "100%",
            fontWeight: 600,
            fontSize: "1.2em"
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
