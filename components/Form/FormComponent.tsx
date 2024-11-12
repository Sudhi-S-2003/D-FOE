import Buttoninput from "./Buttoninput";
import Input from "./Input";
import OtherFormInput from "./OtherFormInput";

function FormComponent({ component }) {
  const sizeStyle = component.styles.find((s) => s.size)?.size || "md"; // Set a default size if none provided

  if (["text", "password", "email", "number"].includes(component.type)) {
    return (
      <Input
        type={component.type}
        label={component.label}
        placeholder={component.placeholder}
        size={sizeStyle}
      />
    );
  } else if (["radio", "checkbox", "select"].includes(component.type)) {
    return (
      <OtherFormInput type={component.type} options={component.options} />
    );
  } else if (component.type === "button") {
    return (
      <Buttoninput
        label={component.label}
        size={sizeStyle}
        color={component.styles.find((s) => s.color)?.color || "blue"} // Default color
      />
    );
  } else {
    return <h1>Error: Unsupported component type</h1>;
  }
}

export default FormComponent;
