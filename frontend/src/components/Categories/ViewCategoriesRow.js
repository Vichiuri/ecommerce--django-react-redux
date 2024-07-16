import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function ViewCategoriesRow(props) {
  const { category, index, deleteCategory, editCategory, canManage } = props;

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
      deleteCategory(category.id);
    } else if (value == "Edit") {
      editCategory(category);
    }
    setAnchorEl(null);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="add_category_img">
        {category.category_pic ? (
          <img src={`..${category.category_pic}`} alt="logo" />
        ) : (
          <img src={"../static/images/logo.svg"} alt="logo" />
        )}
      </td>
      <td>{category.name}</td>
      <td>
        <div className="custom_table_height">{category.brief_description}</div>
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
