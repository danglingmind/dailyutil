"use client";

import { useState } from "react";

export default function Formatter() {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const handleFormat = async () => {
    let formatted = JSON.stringify(JSON.parse(inputText),null,2);
    
    setInputText(formatted)
    setFormattedText(formatted);
  };

  return (
    <div className="flex flex-col gap-5 w-full h-lvh px-5 py-10">
      <textarea
        className="textarea textarea-bordered w-3/4 bg-gray-100"
        style={{minHeight: "70vh", margin: "0 auto"}}
        placeholder="Enter your code here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button className="btn btn-primary w-fit" style={{margin: "0 auto"}} onClick={handleFormat}>
        Format
      </button>
    </div>
  );
}
