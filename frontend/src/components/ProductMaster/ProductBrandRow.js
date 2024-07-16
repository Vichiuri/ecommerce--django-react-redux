import React, { useState } from "react";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function ProductBrandRow(props) {
  const { index, brand, deleteProductBrand, viewEditProductBrand, canManage } =
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
      deleteProductBrand(brand.id);
    } else if (value == "Edit") {
      viewEditProductBrand(brand);
    }
    setAnchorEl(null);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="view_category_img">
        {brand.pic ? (
          <img src={`..${brand.pic}`} alt="logo" />
        ) : (
          <img src={"../static/images/logo.svg"} alt="logo" />
        )}
      </td>
      <td>{brand.name}</td>
      <td className="custom_table_height">{brand.description}</td>
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
