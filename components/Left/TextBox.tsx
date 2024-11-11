"use client";
import { useState } from "react";

enum Sizes {
    sm = "sm",
    lg = "lg",
    xl = "xl",
    xxl = "xxl",
}

enum TextName {
    sans = "font-sans",
    serif = "font-serif",
    mono = "font-mono"
}

interface Form {
    name: TextName;
    size: Sizes;
}

const text: Form[] = [
    ...Object.values(TextName).flatMap((text) =>
        Object.values(Sizes).map((size) => ({
            name: text,
            size: size,
        }))
    ),
];

function TextBox() {
    const [activeItem, setActiveItem] = useState<string>("");

    const handleClick = (item: Form) => {
        const itemIdentifier = `${item.name}-${item.size}`;
        setActiveItem(activeItem === itemIdentifier ? "" : itemIdentifier);
    };

    return (
        <div>
            {text.map((item, index) => (
                <button
                    key={index}
                    className={`${item.name} m-3 p-3 hover:scale-95 ${activeItem === `${item.name}-${item.size}` ? "bg-green-400 scale-105" : "bg-blue-400 "
                        }`}
                    onClick={() => handleClick(item)}
                >
                    {item.name} - {item.size}
                </button>
            ))}
        </div>
    );
}

export default TextBox;
