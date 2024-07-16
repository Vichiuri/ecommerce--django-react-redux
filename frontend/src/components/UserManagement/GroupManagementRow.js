import React, { useState, useEffect } from "react";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function GroupManagementRow(props) {
  const { index, group, deleteManagementGroup, editGroup, canManage } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (group && group.permission) {
      Object.keys(group.permission).map((prop, key) => {
        if (prop != "id" && prop != "distributor") {
          if (group.permission[prop]) {
            setIsActive(true);
          }
        }
      });
    }
  }, [group]);

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
      deleteManagementGroup(group.id);
    } else if (value == "Edit") {
      editGroup(group);
    }
    setAnchorEl(null);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{group.name}</td>

      <td>
        {isActive ? (
          <span className="dot">
            <i className="bg-success"></i>
            Active
          </span>
        ) : (
          <span className="dot">
            <i className="bg-danger"></i>
            In Active
          </span>
        )}
      </td>
      <td>{group.view_users}</td>
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
