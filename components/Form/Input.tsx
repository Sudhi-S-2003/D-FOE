function Input({ type = "text", placeholder = "", label = "", size = "md" }) {
    let width;
    if (size === "sm") {
      width = "25%";
    } else if (size === "md") {
      width = "50%";
    } else if (size === "lg") {
      width = "75%";
    } else if (size === "xl") {
      width = "100%";
    } else {
      width = "90%";
    }
  
    return (
      <div className="inline" style={{ width }}>
        <label className="mb-2 font-semibold">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="border border-gray-300 p-2 rounded"
        />
      </div>
    );
  }
  
  export default Input;
  