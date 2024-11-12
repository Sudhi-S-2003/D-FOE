import React, { useEffect, useState, useMemo } from "react";
import Forminterface from "@/data/Forminterface";
import FormComponent from "./FormComponent";

function Form({ formdata }: { formdata: Forminterface }) {
  const [styles, setStyles] = useState({
    width: 500,
    height: 700,
    backgroundColor: "white",
    color: "black",
    opacity: 0.5,
  });

  const fontFamilyClass = useMemo(() => {
    const [part1, part2] = formdata.basic.label.split("-");
    return part1 && part2 ? `${part1}-${part2}` : "font-sans";
  }, [formdata]);

  const textSizeClass = useMemo(() => {
    const part3 = formdata.basic.label.split("-")[2];
    return part3 ? `text-${part3}` : "text-base";
  }, [formdata]);

  useEffect(() => {
    const { bgColor, color, width, height } = formdata.basic;
    const [bc, bop] = bgColor.split("-");
    const [c] = color.split("-");

    setStyles({
      width: width || 500,
      height: height || 700,
      backgroundColor: bc || "white",
      color: c || "black",
      opacity: bop || 0.5,
    });
  }, [formdata]);

  return (
    <div className={`overflow-scroll ${fontFamilyClass} ${textSizeClass}`} style={styles}>
      {Array.isArray(formdata.components) &&
        formdata.components.map((component, index) => (
          <FormComponent component={component} key={index} />
        ))}
    </div>
  );
}

export default Form;
