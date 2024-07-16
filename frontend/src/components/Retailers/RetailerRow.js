import React, { useState } from "react";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function RetailerRow({
  index,
  retailer,
  deleteRetailer,
  editRetailer,
  canManage,
  viewRetailerPage,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const popUpItems = [
    {
      icon: <i className="fas fa-eye btn_type"></i>,
      name: "View",
      value: "View",
    },
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
      deleteRetailer(retailer.id);
    } else if (value == "Edit") {
      editRetailer(retailer);
    } else if (value == "View") {
      viewRetailerPage(retailer);
    }
    setAnchorEl(null);
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="retailers_round_img">
          <img
            src={
              retailer.contact_pic
                ? `..${retailer.contact_pic}`
                : "../static/images/user.png"
            }
            alt="customer image"
          />
        </div>
      </td>
      <td>{retailer.contact_name}</td>
      <td>{retailer.contact_email}</td>
      <td>{retailer.contact_phone}</td>
      <td>{retailer.city ? retailer.contact_person : ""}</td>
      <td>{retailer.area ? retailer.contact_person_position : ""}</td>
      <td>{retailer.region ? retailer.region.name : ""}</td>
      <td>{retailer.retailer.pin_no}</td>
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
