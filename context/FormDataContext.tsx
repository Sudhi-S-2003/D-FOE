"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Forminterface from "@/data/Forminterface";

const FormDataContext = createContext<{
  formData: Forminterface;
  setFormData: React.Dispatch<React.SetStateAction<Forminterface>>;
} | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => { 
  const [formData, setFormData] = useState<Forminterface>({
    id: "",
    name: "",
    basic: {
      bgColor: "",
      color: "",
      width: "",
      height: "",
      other: {},
    },
    count: 0,
    components: [],
    userid: "",
    formid: "",
    digest: "",
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
