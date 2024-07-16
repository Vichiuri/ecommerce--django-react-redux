import React, { useState, useEffect } from "react";
import HtmlParser from "react-html-parser";
import Modal from "react-bootstrap/Modal";
import FormatCommas from "../../utils/FormatCommas";

export default function ViewProductDescription(props) {
  const { show, handleModal, product, editProduct, changePage } = props;

  const [currentImage, setCurrentImage] = useState("");
  const [product_images, setProductImages] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [brief_description, setBriefDescription] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    if (product) {
      setCurrentImage(
        product.product_images[0] != null
          ? product.product_images[0].image != null
            ? product.product_images[0].image
            : ""
          : ""
      );
      setProductImages(product.product_images);
      setPrice(`${product.price_currency} ${FormatCommas(product.price)}`);
      setBrand(product?.branding?.name ?? "");
      setColors(product.colors);
      setBriefDescription(product.brief_description);
      setDescription(HtmlParser(product.description));
      setName(product.name);
      if (product.size) {
        const viewSizes = JSON.parse(product.size);
        setSizes(viewSizes);
      }
    }
  }, [product]);

  function viewEditProduct() {
    handleModal();
    editProduct(product);
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View Description
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <div className="product-view-description">
          <div className="container-fluid">
            <div className="row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content row justify-content-center">
                  <div
                    className="view_prod_description_img tab-pane active"
                    id="pic-1"
                  >
                    <img src={`..${currentImage}`} />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  {product_images.map((image, index) => {
                    return (
                      <li
                        onClick={() => setCurrentImage(image.image)}
                        key={index}
                        className={currentImage == image.image ? "active" : ""}
                      >
                        <a data-target="#pic-1" data-toggle="tab">
                          <img src={`..${image.image}`} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="mt-2 product-title">{name}</h3>
                {/* <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <span className="review-no">41 reviews</span> *
                  </div> */}

                <h4 className="price">
                  current price: <span>{price}</span>
                </h4>
                <p className="vote">
                  <strong>Brand: </strong> {brand}
                </p>
                <h5 className="sizes">
                  Sizes:
                  {sizes.map((size, index) => {
                    return (
                      <span
                        key={index}
                        className="size"
                        data-toggle="tooltip"
                        title="medium"
                      >
                        {size},
                      </span>
                    );
                  })}
                </h5>
                <h5 className="colors">
                  Colors:
                  {colors.map((color, index) => {
                    const styling = color.color;
                    return (
                      <span
                        className="color"
                        style={{
                          background: styling,
                        }}
                        data-toggle="tooltip"
                        key={index}
                      ></span>
                    );
                  })}
                </h5>
                <div>
                  <p className="mt-1 mb-2">{brief_description}</p>
                </div>
                <div className="action">
                  <button
                    onClick={() => viewEditProduct()}
                    className="add-to-cart btn btn-primary"
                    type="button"
                  >
                    Edit Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start border-bottom mt-4">
            <h3 className="ml-4 font-weight-bold">Description</h3>
          </div>
          <p className="product-description mt-2">{description}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
