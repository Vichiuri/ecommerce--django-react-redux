import React, { useState } from "react";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function ViewAreaRow(props) {
  const { index, area, canManage, deleteRetailerArea, editViewCities } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const popUpItems = [
    {
      icon: <i className="fas fa-edit btn_type"></i>,
      name: "Edit",
      value: "Edit",
    },
    {
      icon: <i className="fas fa-trash btn_type"></i>,
      name: "Delete",
      value: "Delete",
    },
  ];

  const popUpValues = { anchorEl, popUpItems };

  function handlePopClick(value) {
    if (value == "Delete") {
      deleteRetailerArea(area.id);
    } else if (value == "Edit") {
      editViewCities(area);
    }
    setAnchorEl(null);
  }
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{area.name}</td>
      <td>{area.city != null ? area.city.name : ""}</td>
      <td>
        <span className="dot">
          <i className="bg-success"></i>
          Completed
        </span>
      </td>
      <td>
        {canManage ? (
          <i
            onClick={(e) => setAnchorEl(e.currentTarget)}
            className="fas fa-ellipsis-h btn_type"
          ></i>
        ) : (
          <div />
        )}
      </td>
      <CustomPopUpMenu
        popUpValues={popUpValues}
        handlePopUpClick={handlePopClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
    </tr>
  );
}
