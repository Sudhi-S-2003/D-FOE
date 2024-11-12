"use client";
import { useState } from "react";
import Options from "./Option";

enum Name {
  radio = "radio",
  checkbox = "checkbox",
  select = "select"
}

interface Form {
  name: Name;
  label: string;

}

const other: Form[] = [
  { name: Name.radio, label: "Radio" },
  { name: Name.checkbox, label: "Checkbox" },
  { name: Name.select, label: "Select" }
];

function OtherBox() {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: Form) => {
    setActiveItem(item.name);
  };

  return (
    <div>
      {other.map((item, index) => (
        <button
          key={index}
          className={`m-3 p-3 hover:scale-95 transition-all
            ${activeItem === item.name ? `bg-purple-700 scale-105` : `bg-purple-500`} `}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </button>
      ))}
      <Options type={activeItem} />
    </div>
  );
}

export default OtherBox;
