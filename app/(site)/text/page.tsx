"use client";
import { CircleX, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { LOREM_IPSUM } from "@/app/lib/constants/lorem-ipsum";
import {
  hash,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
} from "string-transform";

const transformations: Map<string, Function> = new Map<string, Function>([
  ["uppercase", (text: string) => text.toUpperCase()],
  ["lowercase", (text: string) => text.toLowerCase()],
  [
    "capitalize",
    (text: string) =>
      text
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" "),
  ],
  ["reverse", (text: string) => text.split("").reverse().join("")],
  [
    "sentense",
    (text: string) =>
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
  ],
]);

const generators: Map<string, Function> = new Map<string, Function>([
  ["lorem-ipsum", (text: string) => LOREM_IPSUM],
]);

export default function TextMaster() {
  const [inputText, setInputText] = useState("");
  const [transformedText, setTransformedText] = useState("");
  const [transformation, setTransformation] = useState<string>("sentense");
  const [generator, setGenerator] = useState("");
  useEffect(() => {
    const transFunc = transformations.get(transformation);
    transFunc && setTransformedText(transFunc(inputText));
  }, [inputText, transformation]);

  return (
    <div className="max-w-5xl p-20" style={{ margin: "0 auto" }}>
      <div className="flex flex-row gap-2 items-center">
        Text Generators :
        <div className="flex flex-wrap m-1">
          {Array.from(generators.keys()).map((gen) => (
            <div
              key={gen}
              className={`badge ${
                generator === gen ? "badge-primary" : "badge-neutral"
              } m-2`}
              role="button"
              onClick={(e) => {
                const generatorFunc = generators.get(gen);
                generatorFunc && setInputText(generatorFunc(inputText));
              }}
            >
              {gen}
            </div>
          ))}
        </div>
      </div>
      <div className="font-bold text-xl m-1 w-full text-center">Input Text</div>
      <div className="flex flex-row justify-between items-start gap-2">
        <textarea
          className="textarea textarea-bordered w-full min-h-32"
          onChange={(e) => setInputText(e.currentTarget.value)}
          value={inputText}
        />
        <div
          className="tooltip"
          data-tip="clear"
          role="button"
          onClick={() => setInputText("")}
        >
          <CircleX className="w-4 h-4" />
        </div>
      </div>
      <div className="font-bold text-xl mt-4 w-full text-center">
        Transformed Text
      </div>
      <div className="flex flex-wrap m-3">
        {Array.from(transformations.keys()).map((trans) => (
          <div
            key={trans}
            className={
              `badge ${
                transformation === trans ? "badge-primary" : "badge-neutral"
              }` + " m-1"
            }
            role="button"
            onClick={(e) => setTransformation(trans)}
          >
            {trans}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-start gap-2">
        <textarea
          readOnly
          className="textarea textarea-bordered w-full min-h-32"
          value={transformedText}
        />
        <div
          className="tooltip"
          data-tip="copy"
          role="button"
          onClick={() => navigator.clipboard.writeText(transformedText)}
        >
          <Copy className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
