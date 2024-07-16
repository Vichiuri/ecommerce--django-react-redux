import React, { useState } from "react";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import CustomTextEditor from "../../widgets/CustomTextEditor";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddCategory(props) {
  const { changePage, categories, addCategory } = props;

  const [p_category, setPCategory] = useState(null);
  const [image, setImage] = useState("../static/images/add_image.png");
  const [name, setName] = useState("");
  const [brief_description, setBriefDescription] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(null);
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
        setLogo(compressImage);
      })
      .catch((error) => console.log(error));
  }

  function uploadCategory() {
    setIsError(null);
    setResponseMessage("");
    if (name && description) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("brief_description", brief_description);
      if (p_category) {
        formData.append("category_id", p_category);
      }

      formData.append("photo", logo);

      addCategory(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input a category name");
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please input category description");
    }
  }

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Add Category</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Categories"
                propsName="Add Category"
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
              <div
                className="add_category_img"
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

            <div className="row justify-content-between mt-2">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label for="exampleFormControlSelect2">
                    Select Parent Category  <CustomToolTip
                    message={"Choose the best parent category"}
                  />  
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect2"
                    value={p_category}
                    onChange={(e) => setPCategory(e.target.value)}
                  >
                    <option value="">...</option>
                    {categories.map((category, index) => {
                      return (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>Category Name*  <CustomToolTip
                    message={"Input the appropriate name"}
                  />  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter category name"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label">Brief Description(250)*<CustomToolTip
                    message={"Enter a small description for your category"}
                  />   </label>
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
                          message: "Description cannot be more than 250 words",
                        },
                      });
                    }
                  }}
                  placeholder="Please input category brief description"
                  required
                />
              </div>
            </div>
            <div>
              <div className="border">
                <h5 className="p-2">
                  Category Description*  <CustomToolTip
                    message={"Enter as much information as you want"}
                  />   </h5>
              </div>
              <CustomTextEditor
                description=""
                setDescription={(e) => setDescription(e.target.getContent())}
              />
            </div>
            <div className="row justify-content-end">
              <div
                onClick={() => uploadCategory()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Add Category
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
