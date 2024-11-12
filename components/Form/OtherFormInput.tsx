function OtherFormInput({ options, type }) {
  if (type === "select") {
    return (
      <select>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else if (type === "checkbox") {
    return (
      <div>
        {options.map((option, index) => (
          <label key={index} className="inline-flex items-center">
            <input type="checkbox" value={option.value} className="mr-2" />
            {option.label}
          </label>
        ))}
      </div>
    );
  } else if (type === "radio") {
    return (
      <div>
        {options.map((option, index) => (
          <label key={index} className="inline-flex items-center">
            <input type="radio" name="radio-group" value={option.value} className="mr-2" />
            {option.label}
          </label>
        ))}
      </div>
    );
  } else {
    return <div>Unsupported input type</div>;
  }
}

export default OtherFormInput;
