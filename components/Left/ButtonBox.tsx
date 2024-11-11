"use client";
import { useState } from "react";
import { useFormData } from "@/context/FormDataContext";
import Forminterface from "@/data/Forminterface";

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
  const { setFormData } = useFormData();
  const handleApply = () => {
    if (!activeItem) return; // Prevent applying if no item is selected

    const [color, size] = activeItem.split("-");
    setFormData((prev: Forminterface) => ({
      ...prev,
      components: [
        ...prev.components,
        {
          no: prev.components.length + 1,
          label: "",
          type: "button",
          placeholder: "",
          option: [],
          style: [{ color: color, size: size }],
          other: {},
        },
      ],
    }));
    setActiveItem("")
  };

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
      <button
        onClick={() => handleApply()}
        disabled={!activeItem} className="bg-green-600 m-3 p-3"
      >
        Apply
      </button>
    </div>
  );
}

export default ButtonBox;
