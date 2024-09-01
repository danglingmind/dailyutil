"use client";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
import { useState } from "react";
import { inter, varelaRound } from "@/app/fonts";
import { DIFF_DESC } from "@/app/ui/seo/descriptions";
import Head from "next/head";
import Footer from "@/app/ui/footer";
// import { GASend } from "@/app/lib/ga";

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
  //   GASend("pageview", "diff");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [view, setView] = useState(views?.at(0));

  function isViewSet(v: string): boolean {
    return view === v;
  }

  return (
    <div className="w-full p-3 h-lvh">
      <Head>
        <title>Difference</title>
        <meta name="description" content={DIFF_DESC} />
      </Head>
      <div className="flex items-center justify-center gap-3">
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
        <div className="flex flex-row gap-3 p-3">
          <div className="w-1/2">
            <div className={`${inter.className} ` + "m-3"}>Content 1</div>
            <textarea
              className="textarea textarea-bordered w-full box-border min-h-96"
              value={content1}
              onChange={(e) => setContent1(e.currentTarget.value)}
            />
          </div>

          <div className="w-1/2">
            <div className={`${inter.className} ` + "m-3"}>Content 2</div>
            <textarea
              className="textarea textarea-bordered w-full box-border min-h-96"
              value={content2}
              onChange={(e) => setContent2(e.currentTarget.value)}
            />
          </div>
        </div>
      )}
      {isSubmit && (
        <div className="flex flex-row gap-3 p-3">
          <ReactDiffViewer
            oldValue={content1}
            newValue={content2}
            splitView={isViewSet("split")}
            compareMethod={DiffMethod.WORDS}
            styles={newStyles}
            leftTitle="Version A"
            rightTitle="Version B"
            useDarkTheme={true}
            // renderContent={highlightSyntax}
          />
        </div>
      )}
    </div>
  );
}
