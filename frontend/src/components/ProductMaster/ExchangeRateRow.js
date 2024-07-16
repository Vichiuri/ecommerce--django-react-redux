import React, { useState } from "react";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function ExchangeRateRow(props) {
  const { index, unit, deleteProductCompoundUnit, editCUnit, canManage } =
    props;
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
      deleteProductCompoundUnit(unit.id);
    } else if (value == "Edit") {
      editCUnit(unit);
    }
    setAnchorEl(null);
  }

  return (
    <tr className="p-2">
      <td className="pl-2">{index + 1}</td>
      <td className="pl-2">{unit.name}</td>
      <td className="pl-2">{unit.first_unit.name}</td>
      <td className="pl-2">{unit.second_unit.name}</td>
      <td className="pl-2">{unit.f_to_s}</td>
      <td className="pl-2">
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
