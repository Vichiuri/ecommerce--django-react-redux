import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import ImageCompress from "../../utils/ImageCompress";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditSalesPersonModal({
  person,
  show,
  handleModal,
  editSalesPerson,
}) {
  const [image, setImage] = useState("../static/images/add_image.png");
  const [compressedImage, setCompressedImage] = useState(null);
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (person) {
      setFName(person.first_name ? person.first_name : "");
      setLName(person.last_name ? person.last_name : "");
      setImage(
        person.pic ? `..${person.pic}` : "../static/images/add_image.png"
      );
      setPhone(person.phone ? person.phone : "");
      setEmail(person.email ? person.email : "");
    }
  }, [person]);

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
      formData.append("id", person.id);

      if (compressedImage) {
        formData.append("photo", compressedImage);
      }
      editSalesPerson(formData);
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
    <Modal
      show={show}
      onHide={handleModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit SalesPerson
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <div className="row justify-content-between">
          <div className="col-lg-12 col-md-11 col-sm-12 col-xs-12">
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
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <label>First Name* <CustomToolTip
                    message={"Input First Name"}
                  />  </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter first name"
                  value={f_name}
                  name="f_name"
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
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
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <label>Phone Number*  <CustomToolTip
                    message={"Add the right phone number"}
                  />  </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter phone number"
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <label>Email Address* <CustomToolTip
                    message={"Input a working email address"}
                  /> </label>
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
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => {
            uploadSalesPerson();
            handleModal();
          }}
        >
          Save Sales Person
        </button>
      </Modal.Footer>
    </Modal>
  );
}
