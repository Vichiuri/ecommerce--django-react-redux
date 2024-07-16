import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export default function CustomAsyncPaginationAdditions(props) {
  const {
    value,
    setValue,
    fetchData,
    isMulti,
    closeMenuOnSelect,
    additional,
    key,
  } = props;

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
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: body.classList.contains(themeLight)
        ? isFocused
          ? "#f1f1f1"
          : "#ffffff"
        : isFocused
        ? "#f1f1f1"
        : "#212529",
    }),
  };

  return (
    <AsyncPaginate
      isMulti={isMulti}
      loadOptions={fetchData}
      value={value}
      onChange={setValue}
      additional={additional}
      styles={colourStyles}
      closeMenuOnSelect={closeMenuOnSelect}
      key={key}
    />
  );
}
