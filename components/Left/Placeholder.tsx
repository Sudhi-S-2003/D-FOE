"use client";
import { useState } from "react";

function Placeholder() {
    const [form, setForm] = useState<{ placeholder: string; label: string }>({
        placeholder: "",
        label: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <div>
            <input
                type="text"
                name="placeholder"
                placeholder="Enter placeholder"
                value={form.placeholder}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md mt-2 text-black"
            />
            <input
                type="text"
                name="label"
                placeholder="Enter label"
                value={form.label}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md mt-2 text-black"
            />
            {form.placeholder && <p>Placeholder: {form.placeholder}</p>}
            {form.label && <p>Label: {form.label}</p>}
        </div>
    );
}

export default Placeholder;
