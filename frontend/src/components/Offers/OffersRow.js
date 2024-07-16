import React, { useState } from "react";
import formatDate from "../../utils/FormatDate";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function OffersRow({
  index,
  offer,
  deleteOffer,
  editOffer,
  canManage,
}) {
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
      deleteOffer(offer.id);
    } else if (value == "Edit") {
      editOffer(offer);
    }
  }
  return (
    <tr className="align-items-center h-25">
      <td>{index + 1}</td>
      <td>
        <div className="add_offers_img ">
          <img
            src={offer.pic ? `..${offer.pic}` : "../static/images/logo.svg"}
            alt="logo"
          />
        </div>
      </td>
      <td>{offer.name}</td>
      <td>{offer.date_from ? formatDate(offer.date_from) : ""}</td>
      <td> {offer.date_to ? formatDate(offer.date_to) : ""}</td>
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
