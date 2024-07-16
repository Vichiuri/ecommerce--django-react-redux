import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddProductBrandModal(props) {
  const { show, handleModal, addProductBrand } = props;

  const [image, setImage] = useState("../static/images/add_image.png");
  const [compressedImage, setCompressedImage] = useState(null);
  const [fileInput, setFileInput] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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

  function uploadProductBrand() {
    setIsError(null);
    setResponseMessage("");
    if (name && description) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      if (compressedImage) {
        formData.append("photo", compressedImage);
      }

      addProductBrand(formData);
      clearModal();
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please enter brand name");
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please enter brand description");
    }
  }

  function clearModal() {
    handleModal();
    setImage("../static/images/add_image.png");
    setName("");
    setDescription("");
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />{" "}
        <center>
          <div className="add_category_img" onClick={() => fileInput.click()}>
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
        <div className="form-group">
          <label>Brand Name* <CustomToolTip message={"Input the most appropriate brand name"} />  </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter unit name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="form-group">
          <label>Description* <CustomToolTip message={"Enter the brand description"} />   </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            placeholder="Please enter description"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadProductBrand()}
        >
          Add Brand
        </button>
      </Modal.Footer>
    </Modal>
  );
}
