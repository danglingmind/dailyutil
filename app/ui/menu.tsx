"use client";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { HotKeys } from "react-hotkeys";
import { varelaRound } from "../fonts";
import { Repeat } from "lucide-react";

const menuItems: { name: string; key: string; shortCut: string[] }[] = [
  // {
  //   name: "Currency Converter",
  //   key: "moneyconverter",
  //   shortCut: ["ctrl", "shift", "1"],
  // },
  // {
  //   name: "Time Converter",
  //   key: "timeconverter",
  //   shortCut: ["ctrl", "shift", "2"],
  // },
  {
    name: "Text Converter",
    key: "textconverter",
    shortCut: ["ctrl", "shift", "3"],
  },
  // {
  //   name: "Random",
  //   key: "random",
  //   shortCut: ["ctrl", "shift", "4"],
  // },
  {
    name: "Diff",
    key: "diff",
    shortCut: ["ctrl", "shift", "5"],
  },
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  const keyMap = {
    money: "ctrl+shift+1",
    time: "ctrl+shift+2",
    text: "ctrl+shift+3",
  };

  const handlers = {
    money: () => {
      console.log("money");
      setSelectedItem("money");
    },
    time: () => setSelectedItem("time"),
    text: () => setSelectedItem("text"),
  };

  return (
    // <HotKeys keyMap={keyMap} handlers={handlers}>
    // {/* <ul className="menu menu-horizontal bg-base-200 rounded-box w-56 h-full flex gap-14 py-12"> */}
    <div className="flex-none">
      <ul className="menu menu-horizontal bg-base-200 flex justify-center items-center">
        <Link
          href={"/"}
          className="left-5 absolute"
          onClick={() => setSelectedItem("")}
        >
          <Repeat className="w-8 h-8 m-0" />
        </Link>
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link
              href={`/${item.key}`}
              className={
                `${varelaRound.className} ` +
                `${selectedItem === item.key ? "active" : ""} ` +
                "flex flex-col gap-2 m-1 capitalize"
              }
              onClick={() => {
                setSelectedItem(item.key);
              }}
            >
              {item.name}
              {/* <div>
              {item.shortCut?.map((s) => (
                <kbd key={s} className="kbd kbd-sm">
                  {s}
                </kbd>
              ))}
            </div> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    // </HotKeys>
  );
}
