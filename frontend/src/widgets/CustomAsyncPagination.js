import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export default function CustomAsyncPagination(props) {
  const {
    value,
    setValue,
    fetchData,
    isMulti,
    closeMenuOnSelect,
    isDisabled,
    isClearable,
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
      isClearable={isClearable}
      loadOptions={fetchData}
      value={value}
      onChange={setValue}
      additional={{
        page: 1,
      }}
      styles={colourStyles}
      closeMenuOnSelect={closeMenuOnSelect}
      key={Math.random()}
      isDisabled={isDisabled}
    />
  );
}
