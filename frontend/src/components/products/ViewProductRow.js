import React, { Fragment, useEffect, useState } from "react";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";
import FormatCommas from "../../utils/FormatCommas";
import Checkbox from "@material-ui/core/Checkbox";

export default function ViewProductRow(props) {
  const {
    product,
    deleteProduct,
    editProduct,
    canManage,
    viewProductDescription,
    index,
    updateProductState,
  } = props;

  const [image, setImage] = useState("../static/images/user.png");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (product.product_images) {
      setImage(
        product.product_images[0] != null &&
          product.product_images[0].image != null
          ? `..${product.product_images[0].image}`
          : "../static/images/logo.svg"
      );
    }
    if (product.colors) {
      setColors(product.colors);
    }

    if (product.size) {
      const viewSizes = JSON.parse(product.size);
      setSizes(viewSizes);
    }
  }, [product]);

  let popUpItems = [
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
      deleteProduct(product.id);
    } else if (value == "Edit") {
      editProduct(product);
    } else if (value == "View") {
      viewProductDescription(product);
    }
    setAnchorEl(null);
  }

  return (
    <Fragment>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div
            onClick={() => viewProductDescription(product)}
            className="col-md-3 mt-1 view_product_img btn_type"
          >
            <img src={image} alt="product image" />
          </div>
        </td>
        <td
          onClick={() => viewProductDescription(product)}
          className="btn_type"
        >
          {product.name}
        </td>
        <td>{product.product_code ? product.product_code : ""}</td>
        <td>{product.category ? product.category.name : ""}</td>
        <td>{product.brand ? product.brand : ""}</td>
        <td width="10%">{`${product.price_currency} ${FormatCommas(
          product.price
        )}`}</td>
        <td>{product.stock_qty}</td>
        <td>
          {product.units
            ? `${product.units.name} (${product.units.symbol})`
            : ""}
        </td>
        <td>{product.brief_description}</td>
        <td>
          <Checkbox
            checked={product.active}
            color="primary"
            onChange={(e) =>
              updateProductState({ id: product.id, active: e.target.checked })
            }
            inputProps={{ "aria-label": "primary checkbox" }}
          />
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
      </tr>
      <CustomPopUpMenu
        popUpValues={popUpValues}
        handlePopUpClick={handlePopClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
    </Fragment>
  );
}
