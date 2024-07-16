import React, { useState } from "react";
import CustomPopUpMenu from "./CustomPopUpMenu";

export default function CustomPagination(props) {
  const { rows, changeRows, pageDetails, changePage, customViewRows } = props;

  const { current_page, last_page } = pageDetails;

  const [anchorEl, setAnchorEl] = useState(null);

  function handlePopUp(e) {
    if (anchorEl != null) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  }

  function handlePopUpClick(value) {
    changeRows(value);
    handlePopUp(value);
  }

  const popUpItems = customViewRows
    ? customViewRows
    : [
        { name: 25, value: 25 },
        { name: 50, value: 50 },
        { name: 100, value: 100 },
      ];

  const popUpValues = { popUpItems, anchorEl };

  return (
    <div className="container-fluid mt-3 mr-3">
      <div className="row justify-content-end align-items-center bg_themed">
        <div className="mr-4">Rows per page:</div>
        <div onClick={(e) => handlePopUp(e)} className="bg_themed btn">
          {rows}
        </div>
        <div onClick={(e) => handlePopUp(e)} className="ml-1 btn">
          <i className="fas fa-caret-down bg_themed"></i>
        </div>

        <div className="ml-4">{current_page}</div>
        <div className=" ml-1">of</div>
        <div className=" ml-1">{last_page}</div>

        {current_page > 1 ? (
          <div
            onClick={() => changePage(current_page - 1)}
            className=" ml-4 btn"
          >
            <i className="fas fa-chevron-left bg_themed"></i>
          </div>
        ) : (
          <div />
        )}

        {current_page < last_page ? (
          <div
            onClick={() => changePage(current_page + 1)}
            className=" ml-4 btn"
          >
            <i className="fas fa-chevron-right bg_themed"></i>
          </div>
        ) : (
          <div />
        )}
      </div>
      <CustomPopUpMenu
        popUpValues={popUpValues}
        handlePopUp={handlePopUp}
        handlePopUpClick={handlePopUpClick}
      />
    </div>
  );
}
