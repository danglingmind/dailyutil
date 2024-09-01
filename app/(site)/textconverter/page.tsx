"use client";
import { CircleX, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { FOX, LOREM_IPSUM } from "@/app/lib/constants/texts";
import {
  hash,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
} from "string-transform";
import { courierPrime, varelaRound } from "@/app/fonts";
import Head from "next/head";
import { TEXT_CONVERTER_DESCRIPTION } from "@/app/ui/seo/descriptions";
import Footer from "@/app/ui/footer";
// import { GASend } from "@/app/lib/ga";

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
  ["lorem ipsum", () => LOREM_IPSUM],
  ["brown fox", () => FOX],
]);

export default function TextMaster() {
  // GASend("pageview", "textconverter");

  const [inputText, setInputText] = useState("");
  const [transformedText, setTransformedText] = useState("");
  const [transformation, setTransformation] = useState<string>("sentense");
  const [generator, setGenerator] = useState("");
  useEffect(() => {
    const transFunc = transformations.get(transformation);
    transFunc && setTransformedText(transFunc(inputText));
  }, [inputText, transformation]);

  return (
    <div className="max-w-5xl p-20 grow h-lvh" style={{ margin: "0 auto" }}>
      <Head>
        <title>Text Converter</title>
        <meta name="description" content={TEXT_CONVERTER_DESCRIPTION} />
      </Head>
      <div
        className={
          `${varelaRound.className} ` +
          "flex flex-row flex-wrap gap-2 items-center"
        }
      >
        {"Text Generators"}
        {Array.from(generators.keys()).map((gen) => (
          <div
            key={gen}
            className={
              `${courierPrime.className} ` +
              `badge ${
                generator === gen ? "badge-primary" : "badge-neutral"
              } m-2 capitalize`
            }
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
      <div
        className={
          `${varelaRound.className} ` +
          "font-bold text-xl m-1 w-full text-center"
        }
      >
        Input Text
      </div>
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
          <CircleX className="w-5 h-5 text-error" />
        </div>
      </div>
      <div
        className={
          `${varelaRound.className} ` +
          "font-bold text-xl mt-8 w-full text-center"
        }
      >
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
          <Copy className="w-5 h-5 text-info" />
        </div>
      </div>
    </div>
  );
}
