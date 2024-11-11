"use client";
import { useState } from "react";
import { useFormData } from "@/context/FormDataContext";
import Forminterface from "@/data/Forminterface";
function Placeholder({ activeItem }: { type: string }) {
    const [form, setForm] = useState<{ placeholder: string; label: string }>({
        placeholder: "",
        label: "",
    });
    const { setFormData } = useFormData();
    const handleApply = () => {
        if (!activeItem) return; // Prevent applying if no item is selected

        const [name, size] = activeItem.split("-");
        setFormData((prev: Forminterface) => ({
            ...prev,
            components: [
                ...prev.components,
                {
                    no: prev.components.length + 1,
                    label: form.label,
                    type: name,
                    placeholder: form.placeholder,
                    option: [],
                    style: [{ size: size }],
                    other: {},
                },
            ],
        }));
        setForm({ placeholder: "", label: "" });

    };

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
            <button
                onClick={() => handleApply()}
                disabled={!activeItem} className="bg-green-600 m-3 p-3"
            >
                Apply
            </button>
        </div>
    );
}

export default Placeholder;
