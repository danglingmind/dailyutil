"use client";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { HotKeys } from "react-hotkeys";
import { varelaRound } from "../fonts";
import { Repeat } from "lucide-react";
import Image from "next/image";
import logoImage from "@/app/logo.png";
import ThemeSwitch from "./themeswitch";

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
    key: "codediff",
    shortCut: ["ctrl", "shift", "5"],
  },
  {
    name: "JSON Format",
    key: "jsonformatter",
    shortCut: ["ctrl", "shift", "6"],
  },
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState("");

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
    <div className="flex-none mt-3 fixed w-full">
      <ul
        className="menu menu-horizontal bg-base-200 flex justify-center items-center rounded-full w-fit"
        style={{ margin: "0 auto" }}
      >
        <Link
          href={"/"}
          className="left-5 absolute"
          onClick={() => setSelectedItem("")}
        >
          <Image src={logoImage} alt="logo" width={50} height={50} />
        </Link>

        {menuItems.map((item) => (
          <li key={item.key}>
            <Link
              href={`/${item.key}`}
              className={
                `${varelaRound.className} ` +
                `${selectedItem === item.key ? "active" : ""} ` +
                "flex flex-col gap-2 m-1 capitalize rounded-full text-xs"
              }
              onClick={() => {
                setSelectedItem(item.key);
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <ThemeSwitch />
      </ul>
    </div>
    // </HotKeys>
  );
}
