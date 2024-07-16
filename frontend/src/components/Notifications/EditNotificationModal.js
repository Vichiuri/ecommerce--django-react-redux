import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import formatInputDate from "../../utils/FormatInputDate";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";

export default function EditNotificationModal(props) {
  const {
    show,
    handleModal,
    notification,
    updateMobileNotification,
    products,
    offers,
    fetchPriceOffers,
    fetchProducts,
  } = props;

  const view_types = ["Notification", "Product", "Offer"];

  const [name, setName] = useState("");
  const [display_text, setDisplayText] = useState("");
  const [detail, setDetail] = useState("");
  const [compressedImage, setCompressedImage] = useState(null);
  const [image, setImage] = useState("../static/images/add_image.png");
  const [show_from, setShoWFrom] = useState("");
  const [show_to, setShowTo] = useState("");
  const [status, setStatus] = useState("Notification");
  const [product_id, setProductId] = useState("");
  const [offer_id, setOfferId] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (notification) {
      setName(notification.name);
      setDisplayText(notification.display_text);
      setDetail(notification.detail);
      setShoWFrom(formatInputDate(notification.show_from));
      setShowTo(formatInputDate(notification.show_to));
      setImage(
        notification.pic ? notification.pic : "../static/images/add_image.png"
      );
      setStatus(notification.status);
      setProductId(notification.product ? notification.product.id : "");
      setOfferId(notification.offer ? notification.offer.id : "");
      if (notification.product) {
        fetchProducts(1);
      } else if (notification.offer) {
        fetchPriceOffers(1);
      }
    }
  }, [notification]);

  const status_class =
    status == "Notification"
      ? "col-lg-12 col-md-12 col-sm-12 col-xs-12"
      : "col-lg-6 col-md-12 col-sm-12 col-xs-12";

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

  function uploadNotification() {
    setIsError(null);
    setResponseMessage("");
    if (name && display_text && detail && show_from && show_to && status) {
      if (status == "Product" && !product_id) {
        setIsError(true);
        setResponseMessage("Please select banner product");
      } else if (status == "Offer" && !offer_id) {
        setIsError(true);
        setResponseMessage("Please select banner offer");
      } else {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("display_text", display_text);
        formData.append("detail", detail);
        formData.append("show_from", show_from);
        formData.append("show_to", show_to);
        formData.append("product_id", product_id);
        formData.append("offer_id", offer_id);
        formData.append("status", status);
        formData.append("id", notification.id);
        if (compressedImage) {
          formData.append("photo", compressedImage);
        }
        updateMobileNotification(formData);
        handleModal();
      }
    } else if (!status) {
      setIsError(true);
      setResponseMessage("Please select notification type");
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input notification name");
    } else if (!display_text) {
      setIsError(true);
      setResponseMessage("Please input display text");
    } else if (!detail) {
      setIsError(true);
      setResponseMessage("Please input notification details");
    } else if (!show_from) {
      setIsError(true);
      setResponseMessage("Please input show from date");
    } else if (!show_to) {
      setIsError(true);
      setResponseMessage("Please input show to date");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Notification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <center>
          <div
            className="add_notification_img"
            onClick={() => fileInput.click()}
          >
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
            <label>Notification Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Please add notification name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Display text*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Please add display text"
              value={display_text}
              onChange={(e) => setDisplayText(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div class={status_class}>
            <label>Banner type*</label>

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
              {view_types.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          {status == "Notification" ? (
            <div />
          ) : status == "Product" ? (
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Select Product*</label>

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
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Select Offer*</label>

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
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Show From*</label>
            <input
              type="date"
              className="form-control"
              placeholder="Please input show from date"
              value={show_from}
              onChange={(e) => setShoWFrom(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Show To*</label>
            <input
              type="date"
              className="form-control"
              placeholder="Please input show to date"
              value={show_to}
              onChange={(e) => setShowTo(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Details*</label>
            <textarea
              type="text"
              rows="4"
              className="form-control"
              placeholder="Please add notification detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              required
            />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadNotification()}
        >
          Edit Notification
        </button>
      </Modal.Footer>
    </Modal>
  );
}
