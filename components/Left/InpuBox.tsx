"use client";
import { useState } from "react";
import Placeholder from "./Placeholder";
enum Sizes {
  xl="xl",
  lg = "lg",
  md = "md",
  sm = "sm",
}
enum Name {
  text = "text",
  number = "number",
  email = "email",
  password="password"
}
interface Form {
  name: Name;
  size: Sizes;
}
const text: Form[] = [
  ...Object.values(Name).flatMap((name) =>
    Object.values(Sizes).map((size) => ({
      name: name,
      size: size,
    }))
  ),
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
          className={`m-3 p-3 hover:scale-95 ${activeItem === `${item.name}-${item.size}` ? "bg-green-400 scale-105" : "bg-red-400"
            }`}
          onClick={() => handleClick(item)}
        >
          {item.name} - {item.size}
        </button>
      ))}
      <Placeholder activeItem={activeItem} />
    </div>
  );
}

export default InputBox;
