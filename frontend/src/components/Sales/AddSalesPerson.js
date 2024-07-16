import React, { useState } from "react";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import ImageCompress from "../../utils/ImageCompress";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddSalesPerson({ changePage, addSalesPerson }) {
  const [image, setImage] = useState("../static/images/add_image.png");
  const [compressedImage, setCompressedImage] = useState(null);
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

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

  function uploadSalesPerson() {
    setIsError(null);
    setResponseMessage("");
    if (f_name && l_name && phone && email) {
      let formData = new FormData();
      formData.append("first_name", f_name);
      formData.append("last_name", l_name);
      formData.append("phone", phone);
      formData.append("email", email);

      if (compressedImage) {
        formData.append("photo", compressedImage);
      }
      addSalesPerson(formData);
    } else if (!f_name) {
      setIsError(true);
      setResponseMessage("Please enter first name");
    } else if (!l_name) {
      setIsError(true);
      setResponseMessage("Please enter last name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please enter phone number");
    } else if (!email) {
      setIsError(true);
      setResponseMessage("Please enter email address");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all relevant details");
    }
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-11 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Add Sales Person</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Sales"
                propsName="Add people"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            <center>
              <div className="add_sales_img" onClick={() => fileInput.click()}>
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
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>First Name* <CustomToolTip
                    message={"Input First Name"}
                  />   </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter first name"
                    value={f_name}
                    name="f_name"
                    onChange={(e) => setFName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>Last Name* <CustomToolTip
                    message={"Input last name"}
                  />   </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter last name"
                    value={l_name}
                    name="l_name"
                    onChange={(e) => setLName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>Phone Number*  <CustomToolTip
                    message={"Add the right phone number"}
                  />   </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter phone number"
                    value={phone}
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>Email Address* <CustomToolTip
                    message={"Input a working email address"}
                  />   </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter email address"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-end">
              <button
                className="btn btn-success btn-lg mr-2 ml-2"
                onClick={() => uploadSalesPerson()}
              >
                Add Sales Person
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
