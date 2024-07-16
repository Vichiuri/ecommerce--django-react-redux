import React, { useState, useEffect } from "react";
import viewCurrencies from "../../utils/currencies";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import CustomTextEditor from "../../widgets/CustomTextEditor";
import CustomViewCurrenciesPopUp from "../../widgets/CustomViewCurrenciesPopUp";
import AddImageCard from "./AddImageCard";
import AsyncSelect from "react-select/async";
import chroma from "chroma-js";
import Axios from "axios";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import {
  fetchSelectCategory,
  fetchSelectProductBrand,
  fetchSelectProductUnits,
} from "../../redux/Actions/Products";
import ReactSelect from "react-select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditProduct(props) {
  const { changePage, categories, units, setResponse, updateProduct, product } =
    props;

  const selectNewTypes = [
    { value: "New", label: "New" },
    { value: "Existing", label: "Existing" },
  ];

  const [category, setCategory] = useState("");
  const [name, setName] = useState(product.name);
  const [viewCurrecy, setViewCurrency] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [qty, setQty] = useState(product.stock_qty);
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState(
    product.description ? product.description : ""
  );
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [inputSize, setInputSize] = useState("");
  const [brands, setBrands] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [brief_description, setBriefDescription] = useState(
    product.brief_description
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewImage, setViewImage] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [deleteImages, setDeleteImages] = useState([]);
  const [customColors, setCustomColors] = useState([]);
  const [variations, setVariations] = useState([]);
  const [type, setType] = useState(
    product.is_new_arrival ? selectNewTypes[0] : selectNewTypes[1]
  );
  const [weight, setWeight] = useState(product.weight);
  const [active, setActive] = useState(product.active ? "active" : "inactive");
  const [productCode, setProductCode] = useState(product.product_code)

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  useEffect(() => {
    let commonCurrency = viewCurrencies.filter(
      (currency) => currency.cc === "KES"
    )[0];

    if (product.units) {
      const v_unit = {
        value: product.units,
        label: product.units.name,
      };

      setUnit(v_unit);
    }
    if (product.category) {
      const v_category = {
        value: product.category,
        label: product.category.name,
      };

      setCategory(v_category);
    }

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
      let currencyArray = viewCurrencies.filter(
        (currency) => currency.cc != commonCurrency.cc
      );
      setCurrencies([commonCurrency, ...currencyArray]);
    } else {
      setViewCurrency(viewCurrencies[0]);
      setCurrencies(viewCurrencies);
    }
    if (product.product_images) {
      let viewImagesArray = [];
      for (let i = 0; i < product.product_images.length; i++) {
        const image = product.product_images[i];
        viewImagesArray.push({ image: `..${image.image}`, id: image.id });
      }
      setViewImage(viewImagesArray);
    }

    if (product.colors) {
      setColors(product.colors);
    }

    if (product.size) {
      const sizes = JSON.parse(product.size);
      setSizes(sizes);
    }

    if (product.branding) {
      const view_brand = {
        value: product?.branding,
        label: product?.branding?.name,
      };
      setBrands(view_brand ?? "");
    }

    fetchCustomColors();
  }, [product]);

  function fetchCustomColors(query) {
    const url = query
      ? `../retailer/api/custom_colors/?query=${query}`
      : "../retailer/api/custom_colors/";

    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    return new Promise((resolve, reject) => {
      Axios.get(url, config)
        .then((res) => {
          setCustomColors(res.data.colors);
          resolve(res.data.colors);
        })
        .catch((error) => {
          const errors = {
            responseMessage: error.response.data,
            status: error.response.status,
          };
          setIsError(true);
          setResponseMessage(errors.responseMessage);
          reject(error.responseMessage);
        });
    });
  }

  function handleInputChange(e) {
    setInputSize(e.target.value);
  }

  function handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      const { value } = e.target;

      setSizes([...sizes, value]);
      setInputSize("");
    }

    if (sizes.length && e.keyCode === 8 && !inputSize.length) {
      setSizes(sizes.slice(0, sizes.length - 1));
    }
  }

  function handleRemoveItem(index) {
    return () => {
      setSizes(sizes.filter((item, i) => i !== index));
    };
  }

  function addViewImage(imageFile) {
    const imageview = URL.createObjectURL(imageFile);
    setViewImage([...viewImage, { image: imageview }]);
  }

  function addPhoto(images) {
    setPhotos([...photos, images]);
  }

  function deleteImage(index) {
    let viewImage1 = viewImage.splice(index, 1)[0];
    let photos1 = photos.splice(index, 1)[0];

    if (viewImage1.id) {
      setDeleteImages([...deleteImages, viewImage1.id]);
    }

    let viewImage2 = viewImage.filter((image) => image != viewImage1);
    let photos2 = photos.filter((image) => image != photos1);

    setViewImage(viewImage2);
    setPhotos(photos2);
  }

  function updateDescription(e) {
    setDescription(e.target.getContent());
  }

  function uploadProduct() {
    setIsError(null);
    setResponseMessage("");
    if (name && description && price && unit) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("category_id", category ? category.value.id : "");
      formData.append("qty", qty);
      formData.append("unit_id", unit ? unit.value.id : "");
      formData.append("price", price);
      formData.append("description", description);
      formData.append("id", product.id);
      formData.append("type", type?.value);
      formData.append("weight", weight);
      formData.append("active", active);
      for (let index = 0; index < photos.length; index++) {
        formData.append("photos" + index, photos[index]);
      }
      let sizesJson = JSON.stringify(sizes);
      let variationJson = JSON.stringify(variations);
      let colorsJson = JSON.stringify(
        colors.map((color) => {
          return color.id;
        })
      );
      let deleteImagesJson = JSON.stringify(deleteImages);

      formData.append("colors", colorsJson);
      formData.append("brand", brands?.value?.id ?? "");
      formData.append("size", sizesJson);
      formData.append("variations", variationJson);
      formData.append("deletedImages", deleteImagesJson);
      formData.append("brief_description", brief_description);
      updateProduct(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please insert product name");
      setResponse({
        isError: true,
        responseMessage: { message: "Please insert product name" },
      });
    } else if (!unit) {
      setIsError(true);
      setResponseMessage("Please add unit for item");
      setResponse({
        isError: true,
        responseMessage: { message: "Please add unit for item" },
      });
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please insert product description");
      setResponse({
        isError: true,
        responseMessage: { message: "Please insert product description" },
      });
    } else if (!category) {
      setIsError(true);
      setResponseMessage("Please insert product category");
      setResponse({
        isError: true,
        responseMessage: { message: "Please insert product category" },
      });
    } else if (!price) {
      setIsError(true);
      setResponseMessage("Please add price for item");
      setResponse({
        isError: true,
        responseMessage: { message: "Please add price for item" },
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all important fields");
      setResponse({
        isError: true,
        responseMessage: { message: "Please input all important fields" },
      });
    }
  }

  function handleCurrencyPopUpClick(value) {
    let commonCurrency = viewCurrencies.filter(
      (currency) => currency.cc === value
    )[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
      let currencyArray = viewCurrencies.filter(
        (currency) => currency.cc != commonCurrency.cc
      );
      setCurrencies([commonCurrency, ...currencyArray]);
    }
    setAnchorEl(null);
  }
  const popUpValues = { anchorEl, popUpItems: currencies };

  const styles = {
    container: {
      border: "1px solid #ddd",
      padding: "5px",
      borderRadius: "5px",
    },

    items: {
      display: "inline-block",
      padding: "2px",
      border: "1px solid blue",
      fontFamily: "Helvetica, sans-serif",
      borderRadius: "5px",
      marginRight: "5px",
      cursor: "pointer",
      backgroundColor: "#1976d2",
      color: "white",
    },

    input: {
      outline: "none",
      border: "none",
      fontSize: "14px",
      fontFamily: "Helvetica, sans-serif",
    },
  };

  return (
    <div className="row justify-content-center mt-2">
      <div className="col-lg-12 col-md-11 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Edit Product</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Products"
                propsName="Edit Product"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />
            <div className="row justify-content-between align-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2">
                <label>
                  Product Name*{" "}
                  <CustomToolTip message={"Enter yourproducts' name"} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please input product name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2">
                <label>
                  Code*{" "}
                  <CustomToolTip message={"Enter your product code"} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please input product code"
                  name="code"
                  value={productCode}
                  onChange={(e) => setProductCode(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                <label>
                  Select Category{" "}
                  <CustomToolTip
                    message={"Choose a category which best fits your  product"}
                  />{" "}
                </label>

                <CustomAsyncPagination
                  isMulti={false}
                  value={category}
                  setValue={(value) => setCategory(value)}
                  fetchData={fetchSelectCategory}
                  closeMenuOnSelect={true}
                  isClearable={true}
                />
              </div>
            </div>

            <div className="row justify-content-between align-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2">
                <label>
                  Product Color{" "}
                  <small>
                    (Type for search){" "}
                    <CustomToolTip message={"Type, then select your colour"} />{" "}
                  </small>
                </label>
                <AsyncSelect
                  closeMenuOnSelect={false}
                  isMulti
                  loadOptions={fetchCustomColors}
                  defaultOptions={customColors}
                  cacheOptions
                  styles={colourStyles}
                  value={colors}
                  onChange={(options) => setColors(options)}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2">
                <label>
                  Product Sizes (Press enter to add){" "}
                  <CustomToolTip message={"Type the size, then press enter"} />{" "}
                </label>
                <div>
                  <label className="row ml-1 mr-1">
                    <ul
                      style={styles.container}
                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
                    >
                      {sizes.map((item, i) => (
                        <li
                          key={i}
                          style={styles.items}
                          className="mr-2"
                          onClick={handleRemoveItem(i)}
                        >
                          {item}
                          <span>
                            <i className="fas fa-times ml-2 text-danger"></i>
                          </span>
                        </li>
                      ))}
                      <input
                        style={styles.input}
                        value={inputSize}
                        className="bg_themed"
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                      />
                    </ul>
                  </label>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2">
                <label>
                  Product Brands{" "}
                  <CustomToolTip message={"Type the brand of your product"} />{" "}
                </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={brands}
                  setValue={(value) => setBrands(value)}
                  fetchData={fetchSelectProductBrand}
                  closeMenuOnSelect={true}
                  isClearable={true}
                />
              </div>
            </div>

            <div className="row justify-content-between align-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
                <label>
                  Select Units*{" "}
                  <CustomToolTip
                    message={"Select a unit which best fits your product"}
                  />{" "}
                </label>

                <CustomAsyncPagination
                  isMulti={false}
                  value={unit}
                  setValue={(value) => setUnit(value)}
                  fetchData={fetchSelectProductUnits}
                  closeMenuOnSelect={true}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
                <label className="control-label">
                  Product Price*{" "}
                   <CustomToolTip message={"Type the price of your product"} />
                </label>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                      className="input-group-prepend"
                    >
                      <span className="input-group-text btn_type">
                        {viewCurrecy ? (
                          <div>{viewCurrecy.cc}</div>
                        ) : (
                          <div>KSH .</div>
                        )}
                        <i className="ml-1 fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Please input amount"
                      required
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  form-group">
                <label className="control-label">
                  Product Stock Quantity*{" "}
                   <CustomToolTip message={"Enter the product quantity"} />
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="Please input stock quantity"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-between align-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
                <label className="control-label">
                  Product Type{" "}
                   <CustomToolTip
                    message={"Choose whether your product is new or not"}
                  />
                </label>
                <div className="form-group">
                  <ReactSelect
                    value={type}
                    isClearable={true}
                    onChange={(value) => setType(value)}
                    name="type"
                    options={selectNewTypes}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
                <label className="control-label">
                  Product Weight{" "}
                  <CustomToolTip message={"Type the weight of your product"} />
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Please input product weight"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <label className="control-label">
                  Product Status{" "}
                  <CustomToolTip
                    message={"Select the status of your product"}
                  />
                </label>
                <RadioGroup
                  row
                  aria-label="Active"
                  name="active"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                >
                  <FormControlLabel
                    value={"active"}
                    control={<Radio color="primary" />}
                    label="Active"
                  />
                  <FormControlLabel
                    value={"inactive"}
                    control={<Radio color="primary" />}
                    label="Inactive"
                    color="primary"
                  />
                </RadioGroup>
              </div>
            </div>

            <div className="border">
              <div  className="border-bottom">
                <h5 className="p-2">
                  Images{" "}
                  <CustomToolTip
                    message={"You can add a maximum of 5 product images"}
                  />
                </h5>
              </div>
              <div className="card-content">
                <AddImageCard
                  photos={viewImage.map((image) => {
                    return image.image;
                  })}
                  inputImage={addPhoto}
                  viewImage={addViewImage}
                  deleteImage={deleteImage}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  form-group">
                <label className="control-label">
                  Brief description(250)*{" "}
                  <CustomToolTip
                    message={"Enter a brief description of your product"}
                  />
                </label>
                <div className="form-group">
                  <textarea
                    type="text"
                    rows={4}
                    className="form-control"
                    value={brief_description}
                    onChange={(e) => {
                      if (e.target.value.length <= 250) {
                        setBriefDescription(e.target.value);
                      } else {
                        setResponse({
                          isError: true,
                          responseMessage: {
                            message:
                              "Description cannot be more than 250 words",
                          },
                        });
                      }
                    }}
                    placeholder="Please input product brief description"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="border">
                <h5 className="p-2">
                  Product Description*{" "}
               <CustomToolTip
                    message={"Add as much information as you want"}
                  />
                </h5>
              </div>

              <CustomTextEditor
                description={product.description ? product.description : ""}
                setDescription={updateDescription}
              />
            </div>

            <div className="row justify-content-end">
              <div
                onClick={() => uploadProduct()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Save Product
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomViewCurrenciesPopUp
        popUpValues={popUpValues}
        handlePopUpClick={handleCurrencyPopUpClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
    </div>
  );
}
