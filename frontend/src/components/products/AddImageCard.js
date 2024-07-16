import React, { useState } from "react";
import ImageCompress from "../../utils/ImageCompress";

export default function AddImageCard(props) {
  const { photos, inputImage, viewImage, deleteImage } = props;
  const [fileInput, setFileInput] = useState(0);

  function fileSelectorHandler(e) {
    let fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    viewImage(fileImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    ImageCompress(fileImage)
      .then((compressImage) => {
        inputImage(compressImage);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="row m-2">
      {photos.map((photo, index) => {
        return (
          <div
            className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-xs-6 image_card image_view_card"
            key={index}
          >
            {photo ? (
              <div className="product_add_image_card_img">
                <img src={photo} alt="" />
                <button
                  className="delete_btn"
                  onClick={() => deleteImage(index)}
                >
                  x
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        );
      })}

      {!(photos.length > 4) ? (
        <div className="image_card image_add" onClick={() => fileInput.click()}>
          <input
            className="image_input"
            type="file"
            accept="image/*"
            onChange={(e) => fileSelectorHandler(e)}
            ref={(fileInput) => setFileInput(fileInput)}
          />
          <img src={"../static/images/add_image.png"} alt="" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
