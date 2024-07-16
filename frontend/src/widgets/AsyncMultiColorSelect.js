import React, { useEffect } from "react";
import AsyncSelect from "react-select/async";
import chroma from "chroma-js";

export default function AsyncMultiColorSelect(props) {
  const { fetchCustomColors, customColors, colors, setColors } = props;

  const themeLight = "light";
  const body = document.getElementsByTagName("body")[0];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: body.classList.contains(themeLight)
        ? "#ffffff"
        : "#212529",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: body.classList.contains(themeLight)
        ? "#ffffff"
        : "#212529",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  return (
    <AsyncSelect
      closeMenuOnSelect={false}
      isMulti
      loadOptions={fetchCustomColors}
      defaultOptions={customColors}
      cacheOptions
      styles={colourStyles}
      value={colors}
      onChange={setColors}
    />
  );
}
