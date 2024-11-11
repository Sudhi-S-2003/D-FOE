"use client";

import { hashDataandAdd, verifyHash } from "@/data/Digest";
import Forminterface from "@/data/Forminterface";
import { useState } from "react";
import { useFormData } from "@/context/FormDataContext"

function SubmitBtn() {
    const [message, setMessage] = useState<string>("");
    const { formData, setFormData } = useFormData();


    const addDigest = () => {
        if (formData) {
        hashDataandAdd(formData);
        setMessage("Digest added successfully.");
        }
    };

    // const verifyDigest = () => {
    //     const result = verifyHash(formData); 
    //     if (result.verified) {
    //         setMessage("Digest verification successful.");
    //     } else {
    //         setMessage("Digest verification failed. Recomputing...");
    //         setFormData(result.data); 
    //     }
    // };

    return (
        <div>
            <div>
                <h3>Form Data:</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
            <button onClick={addDigest}>Add Digest</button>
            {/* <button onClick={verifyDigest}>Verify</button> */}
            <div>
                <h4>Status: {message}</h4>
            </div>
        </div>
    );
}

export default SubmitBtn;
