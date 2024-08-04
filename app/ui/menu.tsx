"use client";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { HotKeys } from "react-hotkeys";

const menuItems: { name: string; key: string; shortCut: string[] }[] = [
  {
    name: "Money Game",
    key: "money",
    shortCut: ["ctrl", "shift", "1"],
  },
  {
    name: "Time Travel",
    key: "time",
    shortCut: ["ctrl", "shift", "2"],
  },
  {
    name: "Text Master",
    key: "text",
    shortCut: ["ctrl", "shift", "2"],
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
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <ul className="menu bg-base-200 rounded-box w-56 h-full flex gap-14 py-12">
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link
              href={`/${item.key}`}
              className={
                `${selectedItem === item.key ? "active" : ""} ` +
                "flex flex-col gap-2"
              }
              onClick={() => {
                setSelectedItem(item.key);
              }}
            >
              {item.name}
              <div>
                {item.shortCut?.map((s) => (
                  <kbd key={s} className="kbd kbd-sm">
                    {s}
                  </kbd>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </HotKeys>
  );
}
