"use client";
import { useState } from "react";
import { useFormData } from "@/context/FormDataContext";
import Forminterface from "@/data/Forminterface";
interface Option {
    label: string;
    value: string;
}

function Options({ type }: { type: string }) {
    const [options, setOptions] = useState<Option[]>([]);
    const [newOption, setNewOption] = useState<{ label: string; value: string }>({
        label: "",
        value: "",
    });
    const { setFormData } = useFormData();
    const handleApply = () => {
        setFormData((prev: Forminterface) => ({
            ...prev,
            components: [
                ...prev.components,
                {
                    no: prev.components.length + 1,
                    label: "",
                    type: type,
                    placeholder: "",
                    options: options,
                    style: [],
                    other: {},
                },
            ],
        }));
        setOptions([])
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewOption({ ...newOption, [field]: e.target.value });
    };

    const handleAddOption = () => {
        if (newOption.label && newOption.value) {
            setOptions([...options, newOption]);
            setNewOption({ label: "", value: "" });
        } else {
            alert("Please enter both label and value for the option");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Create an Option</h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter label"
                    value={newOption.label}
                    onChange={(e) => handleInputChange(e, "label")}
                    className="p-2 border border-gray-300 rounded-md mt-2 text-black"
                />
                <input
                    type="text"
                    placeholder="Enter value"
                    value={newOption.value}
                    onChange={(e) => handleInputChange(e, "value")}
                    className="p-2 border border-gray-300 rounded-md mt-2 text-black"
                />
                <button
                    onClick={handleAddOption}
                    className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                >
                    Add Option
                </button>
            </div>
            <div>
                <h3 className="text-lg font-semibold">All Options:</h3>
                <ul className="list-disc pl-6">
                    {options.map((option, index) => (
                        <li key={index}>
                            {option.label} - {option.value}
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={handleApply}
                disabled={options.length === 0}
                className="bg-green-600 m-3 p-3"
            >
                Apply
            </button>
        </div>
    );
}

export default Options;
