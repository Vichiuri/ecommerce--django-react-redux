import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function CustomCheckBox(props) {
  const { option, handleChange, disabled } = props;

  return (
    <div className="check_values">
      <Checkbox
        checked={option.selected}
        onChange={() => handleChange(option)}
        inputProps={{
          "aria-label": "primary checkbox",
        }}
        disabled={disabled}
      />
      <label>{option.name}</label>
    </div>
  );
}
