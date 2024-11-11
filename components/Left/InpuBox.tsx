"use client";
import { useState } from "react";

enum Sizes {
  lg = "lg",
  md = "md",
  sm = "sm",
}

interface Form {
  name: string;
  size: Sizes;
}

const text: Form[] = [
  ...Object.values(Sizes).map((size) => ({
    name: "text-input",
    size: size,
  })),
  ...Object.values(Sizes).map((size) => ({
    name: "number-input",
    size: size,
  })),
];

function InputBox() {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: Form) => {
    setActiveItem(`${item.name}-${item.size}`);
  };

  return (
    <div>
      {text.map((item, index) => (
        <button
          key={index}
          className={`bg-red-400 m-3 p-3 hover:scale-95 ${activeItem === `${item.name}-${item.size}` ? "bg-green-400 scale-105" : ""
            }`}
          onClick={() => handleClick(item)}
        >
          {item.name} - {item.size}
        </button>
      ))}
    </div>
  );
}

export default InputBox;
