"use client";
import { useState } from "react";

enum Name {
  gray = "gray",
  white = "white",
  orange = "orange",
  lime = "lime",
}

enum Opacity {
  Two = 0.2,
  Three = 0.3,
  Four = 0.4,
  Five = 0.5,
  Six = 0.6,
}

const other: { name: string; opacity: number }[] = [];

Object.values(Name).forEach((color) => {
  Object.values(Opacity)
    .filter((op) => typeof op === "number")
    .forEach((op) => {
      other.push({ name: color, opacity: op });
    });
});

console.log(other);

function BackgroundColorBox() {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: { name: string; opacity: number }) => {
    const uniqueKey = `${item.name}-${item.opacity}`;
    setActiveItem(uniqueKey);
  };

  return (
    <div>
      {other.map((item, index) => {
        return (
          <button
            key={index}
            className={`m-3 p-3 hover:scale-95 transition-all ${activeItem === `${item.name}-${item.opacity}` ? "scale-105" : ""
              }`}
            onClick={() => handleClick(item)}
            style={{
              backgroundColor: item.name,
              opacity: item.opacity,
            }}
          >
            {item.name}-{item.opacity} {activeItem === `${item.name}-${item.opacity}` ? "✅" : ""}
          </button>
        );
      })}
    </div>
  );
}

export default BackgroundColorBox;
