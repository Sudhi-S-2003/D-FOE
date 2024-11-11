"use client";
import { useState } from "react";

enum Sizes {
  basic = "round",
  md = "rounded-md",
  lg = "rounded-lg",
  pill = "rounded-full",
}

enum Color {
  red = "red",
  blue = "blue",
  green = "green",
  orange = "orange",
}

interface Form {
  color: Color;
  size: Sizes;
}

const button: Form[] = [
  ...Object.values(Color).flatMap((color) =>
    Object.values(Sizes).map((size) => ({
      color: color,
      size: size,
    }))
  ),
];

function ButtonBox() {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: Form) => {
    setActiveItem(`${item.color}-${item.size}`);
  };

  return (
    <div>
      {button.map((item, index) => (
        <button
          key={index}
          className={`m-3 p-3 hover:scale-95 
            ${activeItem === `${item.color}-${item.size}`
              ?
              `bg-${item.color}-400 scale-105`
              : `bg-slate-400`} 
            ${item.size}`}
          onClick={() => handleClick(item)}
        >
          {item.color} - {item.size}
        </button>
      ))}
    </div>
  );
}

export default ButtonBox;
