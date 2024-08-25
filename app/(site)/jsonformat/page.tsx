"use client";

import { useState } from "react";

export default function JsonFormat() {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  return (
    <div className="flex flex-col gap-3 w-full h-lvh p-5">
      <textarea
        className="textarea textarea-bordered w-3/4 p-2 bg-blue-800 text-white"
        style={{ margin: "0 auto", minHeight: "80vh" }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="btn btn-primary w-fit"
        style={{ margin: "0 auto" }}
        onClick={() => {
          try {
            setFormattedText(JSON.stringify(JSON.parse(inputText), null, 2));
            setInputText(JSON.stringify(JSON.parse(inputText), null, 2));
          } catch (error) {
            alert("Invalid JSON format");
          }
        }}
      >
        Format
      </button>
    </div>
  );
}
