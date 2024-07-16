import React, { useState } from "react";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function DistUserRow(props) {
  const { index, dist_user, editViewUser, deleteDistUser, canManage } = props;

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
      deleteDistUser(dist_user.id);
    } else if (value == "Edit") {
      editViewUser(dist_user);
    }
    setAnchorEl(null);
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="view_dist_u_img">
          <img
            src={
              dist_user.pic
                ? `..${dist_user.pic}`
                : "../static/images/login.jpg"
            }
            alt="customer image"
          />
        </div>
      </td>
      <td>
        {dist_user.last_name
          ? dist_user.first_name + " " + dist_user.last_name
          : dist_user.first_name}
      </td>
      <td>{dist_user.user.email}</td>
      <td>{dist_user.phone}</td>
      <td>
        {dist_user.permission_group ? dist_user.permission_group.name : <div />}
      </td>

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
