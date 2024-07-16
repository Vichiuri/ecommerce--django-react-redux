import React, { useState, useEffect } from "react";
import viewCurrencies from "../../utils/currencies";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import CustomTextEditor from "../../widgets/CustomTextEditor";
import CustomViewCurrenciesPopUp from "../../widgets/CustomViewCurrenciesPopUp";
import AddImageCard from "./AddImageCard";
import AsyncMultiColorSelect from "../../widgets/AsyncMultiColorSelect";
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

export default function AddProduct(props) {
  const { changePage, setResponse, addProduct } = props;

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [product_code, setProductCode] = useState("");
  const [viewCurrecy, setViewCurrency] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [inputSize, setInputSize] = useState("");
  const [brands, setBrands] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewImage, setViewImage] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [brief_description, setBriefDescription] = useState("");
  const [customColors, setCustomColors] = useState([]);
  const [variations, setVariations] = useState([]);
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [active, setActive] = useState("active");

  const selectNewTypes = [
    { value: "New", label: "New" },
    { value: "Existing", label: "Existing" },
  ];

  useEffect(() => {
    let commonCurrency = viewCurrencies.filter(
      (currency) => currency.cc === "KES"
    )[0];

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
    fetchCustomColors();
  }, []);

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
    setViewImage([...viewImage, imageview]);
  }

  function addPhoto(images) {
    setPhotos([...photos, images]);
  }

  function deleteImage(index) {
    let viewImage1 = viewImage.splice(index, 1);
    let photos1 = photos.splice(index, 1);

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
      formData.append("product_code", product_code);
      formData.append("type", type?.value);
      formData.append("weight", weight);
      formData.append("active", active);
      formData.append("stock_qty", qty);
      formData.append("category_id", category ? category.value.id : "");
      formData.append("units_id", unit ? unit.value.id : "");
      formData.append("price", price);
      formData.append("description", description);
      for (let index = 0; index < photos.length; index++) {
        formData.append("photos" + index, photos[index]);
      }
      let sizesJson = JSON.stringify(sizes);
      let colorsJson = JSON.stringify(
        colors.map((color) => {
          return color.id;
        })
      );
      let variationJson = JSON.stringify(variations);

      formData.append("colors", colorsJson);
      formData.append("brand", brands?.value?.id ?? "");
      formData.append("size", sizesJson);
      formData.append("variations", variationJson);
      formData.append("brief_description", brief_description);

      addProduct(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please insert product name");
      setResponse({
        isError: true,
        responseMessage: { message: "Please insert product name" },
      });
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please insert product description");
      setResponse({
        isError: true,
        responseMessage: { message: "Please insert product description" },
      });
    } else if (!price) {
      setIsError(true);
      setResponseMessage("Please add price for item");
      setResponse({
        isError: true,
        responseMessage: { message: "Please add price for item" },
      });
    } else if (!unit) {
      setIsError(true);
      setResponseMessage("Please add unit for item");
      setResponse({
        isError: true,
        responseMessage: { message: "Please add unit for item" },
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

  function createVariation(v_colors, v_sizes) {
    let variations = [];
    for (let i = 0; i < v_colors.length; i++) {
      const v_color = v_colors[i];

      if (v_sizes.length > 0) {
        for (let j = 0; j < v_sizes.length; j++) {
          const v_size = v_sizes[j];
          let name = `Variation ${i}${j}`;
          let label = v_color.value.label + " " + v_size;
          let variation = {
            color: v_color.value,
            size: v_size,
          };
          variations.push({ name, label, variation });
        }
      } else {
        let name = `Variation ${i}`;
        let label = v_color.label;
        let variation = {
          color: v_color.value,
          size: v_sizes,
        };
        variations.push({ name, label, variation });
      }
    }
  }

  return (
    <div className="row justify-content-center mt-2">
      <div className="col-lg-12 col-md-11 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <>
                <h3>Add Product</h3>
                </>

              <CustomBreadcrumbs
                prevPropsName="Products"
                propsName="Add Product"
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
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group">
                <label className="">
                  Product Name*{" "}
                <CustomToolTip message={"Enter your products' name"} /> 
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
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group">
                <label className="">
                  Products Code*{" "}
                <CustomToolTip message={"Enter your products' Code"} /> 
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please input product Code"
                  name="product_code"
                  value={product_code}
                  onChange={(e) => setProductCode(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
                <label>
                  Select Category
                  <CustomToolTip
                    message={"Choose a category which best fits your  product"}
                  />
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
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group">
                <label>
                  Product Color <small>(Type for search)</small>
                  {<CustomToolTip message={"Type, then select your colour"} /> }
                </label>
                <AsyncMultiColorSelect
                  fetchCustomColors={fetchCustomColors}
                  customColors={customColors}
                  colors={colors}
                  setColors={(options) => {
                    setColors(options);
                  }}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group">
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
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group">
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
                  <div className="input-group">
                    <div
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                      className="input-group-prepend"
                    >
                      <span className="input-group-text">
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
                  />{" "}
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
                  />{" "}
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
              <div className="border-bottom">
                <h5 className="p-2">
                  Images
                  <CustomToolTip
                    message={"You can add a maximum of 5 product images"}
                  />{" "}
                </h5>
              </div>
              <div className="card-content">
                <AddImageCard
                  photos={viewImage}
                  inputImage={addPhoto}
                  viewImage={addViewImage}
                  deleteImage={deleteImage}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  form-group">
                <label className="control-label">
                  Brief description (Max. 250 Chars)*{" "}
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
                  />{" "}
                </h5>
              </div>

              <CustomTextEditor
                description={""}
                setDescription={updateDescription}
              />
            </div>

            <div className="row justify-content-end">
              <div
                onClick={() => uploadProduct()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Add Product
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
