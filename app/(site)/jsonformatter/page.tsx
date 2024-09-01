"use client";

import Footer from "@/app/ui/footer";
import { JSON_FORMATTER } from "@/app/ui/seo/descriptions";
import Head from "next/head";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export default function JsonFormat() {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col gap-3 w-full p-5 h-lvh">
      <Head>
        <title>Difference</title>
        <meta name="description" content={JSON_FORMATTER} />
      </Head>
      <div className="text-xl" style={{ margin: "0 auto" }}>
        Enter JSON
      </div>
      <div className="flex gap-3 w-full justify-center">
        <button
          className="btn btn-primary w-fit btn-sm"
          onClick={() => {
            try {
              setFormattedText(JSON.stringify(JSON.parse(inputText), null, 2));
              setInputText(JSON.stringify(JSON.parse(inputText), null, 2));
              setSubmitted(true);
            } catch (error) {
              alert("Invalid JSON format");
            }
          }}
        >
          Format
        </button>
        <button
          className="btn btn-warning w-fit btn-sm"
          onClick={() => setSubmitted(false)}
        >
          Edit
        </button>
      </div>

      {!submitted ? (
        <textarea
          className="textarea textarea-bordered w-1/2 p-2"
          style={{
            margin: "0 auto",
            minHeight: "75vh",
            background: "#282A36",
            color: "#F8F8F2",
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      ) : (
        <div className="w-1/2" style={{ margin: "0 auto" }}>
          <CopyBlock
            wrapLongLines
            text={formattedText}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
          />
        </div>
      )}
    </div>
  );
}
