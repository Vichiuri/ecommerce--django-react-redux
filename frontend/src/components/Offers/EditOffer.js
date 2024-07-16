import React, { useState, useEffect } from "react";
import { fetchSelectProduct } from "../../redux/Actions/Products";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditOffer(props) {
  const { offer, updateOffers, changePage } = props;

  const [image, setImage] = useState(
    offer.pic ? `..${offer.pic}` : "../static/images/add_image.png"
  );
  const [compressedImage, setCompressedImage] = useState(null);
  const [name, setName] = useState(offer.name ? offer.name : "");
  const [scheme, setScheme] = useState(offer.scheme ? offer.scheme : "");
  const [f_item, setFItem] = useState("");
  const [l_item, setLItem] = useState("");
  const [f_quantity, setFQuantity] = useState(offer.x_amt ? offer.x_amt : "");
  const [l_Quantity, setLQuantity] = useState(offer.y_amt ? offer.y_amt : "");
  const [from, setFrom] = useState(offer.date_from ? offer.date_from : "");
  const [to, setTo] = useState(offer.date_to ? offer.date_to : "");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (offer) {
      const f_v_item = { value: offer.x_item, label: offer.x_item.name };
      const l_v_item = { value: offer.y_item, label: offer.y_item.name };
      setFItem(f_v_item);
      setLItem(l_v_item);
    }
  }, [offer]);

  function fileSelectorHandler(e) {
    let fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    const viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    ImageCompress(fileImage)
      .then((compressImage) => {
        setCompressedImage(compressImage);
      })
      .catch((error) => console.log(error));
  }

  function uploadOffer() {
    setIsError(null);
    setResponseMessage("");
    if (name && scheme && f_item && to && from) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("scheme", scheme);
      formData.append("x_id", f_item.value.id);
      formData.append("y_id", l_item.value.id);
      formData.append("x_amt", f_quantity);
      formData.append("y_amt", l_Quantity);
      formData.append("date_from", from);
      formData.append("date_to", to);
      formData.append("pic", compressedImage);
      formData.append("id", offer.id);
      updateOffers(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input offer name");
    } else if (!scheme) {
      setIsError(true);
      setResponseMessage("Please input scheme type");
    } else if (!f_item) {
      setIsError(true);
      setResponseMessage("Please input one product");
    } else if (!to) {
      setIsError(true);
      setResponseMessage("Please input start date");
    } else if (!from) {
      setIsError(true);
      setResponseMessage("Please input end date");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant info");
    }
  }

  const x_className =
    scheme == "BnXEX" || scheme == "BnXy%O"
      ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
      : "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group";

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Edit Offer</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Offers"
                propsName="Add Offer"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />

            <center>
              <div className="add_offers_img" onClick={() => fileInput.click()}>
                <img src={image} alt="" />
                <input
                  className="image_input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => fileSelectorHandler(e)}
                  ref={(fileInput) => setFileInput(fileInput)}
                />
              </div>
            </center>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Offer Name*  <CustomToolTip message={"Input an offer name"}/> </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter offer name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Select Scheme*  <CustomToolTip message={"Choose a Scheme"}/>  </label>
                <select
                  className="form-control"
                  value={scheme}
                  onChange={(e) => {
                    setScheme(e.target.value);
                    if (e.target.value != "BnXYF") {
                      if (f_item) {
                        setLItem(f_item);
                      }
                    }
                  }}
                  required
                >
                  <option value="">...</option>
                  <option value="BnXEX">Buy n of X GET Extra X</option>
                  <option value="BnXYF">Buy n of X get Y free</option>
                  <option value="BnXy%O">Buy n of X get y% off</option>
                </select>
              </div>
            </div>

            <div className="row justify-content-between mt-2">
              <div className={x_className}>
                <label>Select X Item* <CustomToolTip message={"Choose X Item"}/>  </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={f_item}
                  setValue={(value) => {
                    if (scheme == "BnXEX" || scheme == "BnXy%O") {
                      setFItem(value);
                      setLItem(value);
                    } else {
                      setFItem(value);
                    }
                  }}
                  fetchData={fetchSelectProduct}
                  closeMenuOnSelect={true}
                />
              </div>

              {scheme == "BnXEX" || scheme == "BnXy%O" ? (
                <div />
              ) : (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                  <label>Select Y Item* <CustomToolTip message={"Choose Y Item"}/> </label>
                  <CustomAsyncPagination
                    isMulti={false}
                    value={l_item}
                    setValue={(value) => {
                      setLItem(value);
                    }}
                    fetchData={fetchSelectProduct}
                    closeMenuOnSelect={true}
                  />
                </div>
              )}
            </div>

            <div className="row justify-content-between mt-2">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>X Quantity* <CustomToolTip message={"Input X quantity"}/>  </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter x item quantity"
                  value={f_quantity}
                  name="name"
                  onChange={(e) => setFQuantity(e.target.value)}
                  required
                />
              </div>

              {scheme == "BnXEX" ? (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                  <label>Free Quantity*<CustomToolTip message={"Input free quantity"}/> </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter free quantity"
                    value={l_Quantity}
                    name="name"
                    onChange={(e) => setLQuantity(e.target.value)}
                    required
                  />
                </div>
              ) : scheme == "BnXy%O" ? (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                  <label>Percentage Off* <CustomToolTip message={"input % off"}/>  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter percentage quantity"
                    value={l_Quantity}
                    name="name"
                    onChange={(e) => setLQuantity(e.target.value)}
                    required
                  />
                </div>
              ) : (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                  <label>Y Quantity* <CustomToolTip message={"input Y quantity"}/>  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter y item quantity"
                    value={l_Quantity}
                    name="name"
                    onChange={(e) => setLQuantity(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>From Date* <CustomToolTip message={"Choose from date"}/>  </label>

                <input
                  type="date"
                  className="form-control"
                  placeholder="Please enter from date"
                  value={from}
                  name="name"
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>To Date* <CustomToolTip message={"Choose to date"}/>  </label>

                <input
                  type="date"
                  className="form-control"
                  placeholder="Please enter to date"
                  value={to}
                  name="name"
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row justify-content-end">
              <div
                onClick={() => uploadOffer()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Save Offer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
