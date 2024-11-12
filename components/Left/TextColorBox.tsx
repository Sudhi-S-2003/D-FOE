"use client";
import { useState } from "react";
import { useFormData } from "@/context/FormDataContext"; 
import Forminterface from "@/data/Forminterface";
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
    six = 0.6,
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

function TextColorBox() {
    const [activeItem, setActiveItem] = useState<string>("");
    const { setFormData } = useFormData(); 

    const handleClick = (item: { name: string; opacity: number }) => {
        const uniqueKey = `${item.name}-${item.opacity}`;
        setActiveItem(uniqueKey);
        setFormData((prev: Forminterface) => ({
            ...prev,
            basic: {
              ...prev.basic,
              color: uniqueKey,  
            },
          }));
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
                            color: item.name,
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

export default TextColorBox;
