"use client";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
import { useState } from "react";
import { inter, varelaRound } from "@/app/fonts";

const newStyles = {
  variables: {
    light: {
      codeFoldGutterBackground: "#6F767E",
      codeFoldBackground: "#E2E4E5",
    },
  },
};

const views: string[] = ["split", "unified"];

export default function Difference() {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [view, setView] = useState(views?.at(0));

  function isViewSet(v: string): boolean {
    return view === v;
  }

  return (
    <div className="absolute w-full h-full p-5">
      <div className="flex items-center justify-center gap-3 m-5">
        <button
          className={`${varelaRound.className} ` + "btn btn-primary btn-sm"}
          onClick={(e) => setIsSubmit(true)}
          disabled={isSubmit}
        >
          Submit
        </button>
        <button
          className={`${varelaRound.className} ` + "btn btn-warning btn-sm"}
          onClick={() => setIsSubmit(false)}
          disabled={!isSubmit}
        >
          Reset
        </button>
      </div>
      <div
        className={
          `${inter.className} ` +
          "flex flex-wrap items-center justify-center gap-3 my-5"
        }
      >
        {"View"}
        {views?.map((item) => (
          <div
            key={item}
            className={`badge cursor-pointer m-1 ${
              view === item ? "badge-info" : "badge-neutral "
            }`}
            onClick={() => setView(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {!isSubmit && (
        <div className="relative flex flex-row flex-grow gap-3 min-h-96">
          <div id="content-1" className="relative w-1/2 min-h-full">
            <div className={`${inter.className} ` + "m-3"}>Content 1</div>
            <textarea
              className="textarea textarea-bordered w-full min-h-full"
              value={content1}
              onChange={(e) => setContent1(e.currentTarget.value)}
            />
          </div>

          <div id="content-2" className="relative w-1/2 min-h-full">
            <div className={`${inter.className} ` + "m-3"}>Content 2</div>
            <textarea
              className="textarea textarea-bordered w-full min-h-full"
              value={content2}
              onChange={(e) => setContent2(e.currentTarget.value)}
            />
          </div>
        </div>
      )}
      {isSubmit && (
        <div className="p-5">
          <ReactDiffViewer
            oldValue={content1}
            newValue={content2}
            splitView={isViewSet("split")}
            compareMethod={DiffMethod.WORDS}
            styles={newStyles}
            leftTitle="Version A"
            rightTitle="Version B"
            // renderContent={highlightSyntax}
          />
        </div>
      )}
    </div>
  );
}
