import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import ImageCompress from "../../utils/ImageCompress";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddDistUserModal(props) {
  const { show, handleModal, groups, addDistUser } = props;

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [group, setGroup] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [image, setImage] = useState("../static/images/add_image.png");
  const [compressedImage, setCompressedImage] = useState(null);

  function fileSelectorHandler(e) {
    let fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    const viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    setCompressedImage(fileImage);
  }

  function compressImage(fileImage) {
    ImageCompress(fileImage)
      .then((compressImage) => {
        setCompressedImage(compressImage);
      })
      .catch((error) => console.log(error));
  }

  function uploadUser() {
    setIsError(null);
    setResponseMessage("");
    if (first_name && group && email && phone) {
      let formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("group", group);
      formData.append("phone", phone);
      if (compressedImage) {
        formData.append("photo", compressedImage);
      }
      addDistUser(formData);
      handleModal();
    } else if (!first_name) {
      setIsError(true);
      setResponseMessage("Please input first name");
    } else if (!last_name) {
      setIsError(true);
      setResponseMessage("Please input last name");
    } else if (!group) {
      setIsError(true);
      setResponseMessage("Please input permission group");
    } else if (!email) {
      setIsError(true);
      setResponseMessage("Please input email address");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please input phone number");
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
        <Modal.Title id="contained-modal-title-vcenter">Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <center>
          <div className="add_mng_img" onClick={() => fileInput.click()}>
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
            <label>First Name* <CustomToolTip message={"Input First Name"}/></label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter first name"
              value={first_name}
              name="first_name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Last Name* <CustomToolTip message={"Input Last Name"}/> </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Email Address* <CustomToolTip message={"Input Email Address"}/> </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Phone Number* <CustomToolTip message={"Input Phone Number"}/></label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Select Group* <CustomToolTip message={"Choose a Group"}/></label>
            <select
              className="form-control"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <option value="">...</option>
              {groups.map((group, index) => {
                return (
                  <option key={index} value={group.id}>
                    {group.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadUser()}
        >
          Upload User
        </button>
      </Modal.Footer>
    </Modal>
  );
}
