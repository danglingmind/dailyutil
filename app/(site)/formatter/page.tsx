"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import prettier from "prettier/standalone";
import * as markdownPlugin from "prettier/plugins/markdown.js";
// import * as parser from "prettier/parser-babel";
import * as parser from "prettier/plugins/babel.js";
import * as parserHtml from "prettier/plugins/html.js";
import * as parserCss from "prettier/plugins/postcss.js";
import * as typeScriptPlugin from "prettier/plugins/typescript.js";

export default function Formatter() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [formattedCode, setFormattedCode] = useState("");

  const formatCode = async () => {
    try {
      const options = {
        parser: language,
        plugins: [
          parser,
          parserHtml,
          parserCss,
          markdownPlugin,
          typeScriptPlugin,
        ],
      };

      const formatted = await prettier.format(code, options);
      console.log(formatted);
      setFormattedCode(formatted);
    } catch (error) {
      console.error("Error formatting code:", error);
      setFormattedCode(
        "Error formatting code. Please check your input and try again."
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Code Formatter</h1>
      <div className="mb-4">
        <label htmlFor="language" className="block mb-2">
          Select Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="markdown">Markdown</option>
          <option value="typescript">TypeScript</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="code" className="block mb-2">
          Enter Code:
        </label>
        <textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-40 p-2 border rounded"
          placeholder="Paste your code here..."
        />
      </div>
      <button
        onClick={formatCode}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Format Code
      </button>
      {formattedCode && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Formatted Code:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{formattedCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
