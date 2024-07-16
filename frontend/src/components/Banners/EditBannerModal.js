import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditBannerModal(props) {
  const {
    show,
    handleModal,
    updateBanner,
    banner,
    products,
    offers,
    fetchProducts,
    fetchPriceOffers,
  } = props;

  const viewTypes = ["Banner", "Product", "Offer"];

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [compressedImage, setCompressedImage] = useState(null);
  const [image, setImage] = useState("../static/images/add_image.png");
  const [status, setStatus] = useState("Banner");
  const [product_id, setProductId] = useState("");
  const [offer_id, setOfferId] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (banner) {
      setName(banner.name);
      setText(banner.text ? banner.text : "");
      setImage(banner.pic ? banner.pic : "../static/images/add_image.png");
      setStatus(banner.status ? banner.status : "Banner");
      setProductId(banner.product ? banner.product.id : "");
      setOfferId(banner.offer ? banner.offer.id : "");
      if (banner.product) {
        fetchProducts(1);
      } else if (banner.offer) {
        fetchPriceOffers(1);
      }
    }
  }, [banner]);

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

  function uploadBanner() {
    setIsError(null);
    setResponseMessage("");
    if (name && text) {
      if (status == "Product" && !product_id) {
        setIsError(true);
        setResponseMessage("Please select banner product");
      } else if (status == "Offer" && !offer_id) {
        setIsError(true);
        setResponseMessage("Please select banner offer");
      } else {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("text", text);
        formData.append("photo", compressedImage);
        formData.append("offer_id", offer_id);
        formData.append("product_id", product_id);
        formData.append("status", status);
        formData.append("id", banner.id);
        updateBanner(formData);
        handleModal();
      }
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please enter banner name");
    } else if (!text) {
      setIsError(true);
      setResponseMessage("Please enter banner description");
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
          Edit Banner
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />

        <center>
          <div className="add_banner_img" onClick={() => fileInput.click()}>
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
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Banner Name* <CustomToolTip message={"Input banner name"}/>  </label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter banner name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Banner type*  <CustomToolTip message={"Choose a banner type"}/>  </label>

            <select
              className="form-control"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                if (e.target.value == "Product") {
                  setOfferId("");
                  fetchProducts(1);
                } else if (e.target.value == "Offer") {
                  setProductId("");
                  fetchPriceOffers(1);
                } else {
                  setOfferId("");
                  setProductId("");
                }
              }}
              required
            >
              {viewTypes.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row justify-content-between">
          {status == "Product" ? (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Select Product* <CustomToolTip message={"Choose a product"}/> </label>

              <select
                className="form-control"
                value={product_id}
                onChange={(e) => setProductId(e.target.value)}
                required
              >
                <option value="">...</option>
                {products.map((product, index) => {
                  return (
                    <option key={index} value={product.id}>
                      {product.name}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : status == "Offer" ? (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Select Offer*  <CustomToolTip message={"Choose an Offer"}/>  </label>

              <select
                className="form-control"
                value={offer_id}
                onChange={(e) => setOfferId(e.target.value)}
                required
              >
                <option value="">...</option>
                {offers.map((offer, index) => {
                  return (
                    <option key={index} value={offer.id}>
                      {offer.detail_name}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <div />
          )}
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Add Offer Description* <CustomToolTip message={"Input Description"}/>  </label>
            <textarea
              type="text"
              rows="4"
              className="form-control"
              placeholder="Add banner description"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadBanner()}
        >
          Edit Banner
        </button>
      </Modal.Footer>
    </Modal>
  );
}
