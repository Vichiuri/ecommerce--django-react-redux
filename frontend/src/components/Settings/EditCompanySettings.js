import React, { useState, useEffect } from "react";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomTextEditor from "../../widgets/CustomTextEditor";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditCompanySettings(props) {
  const {
    distributor,
    viewSetting,
    countries,
    cities,
    fetchCitiesData,
    fetchCountriesData,
    editDistributorSettings,
  } = props;

  const [c_name, setCName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [image, setImage] = useState("../static/images/add_image.png");
  const [compressedImage, setCompressedImage] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (distributor) {
      setCName(distributor.name);
      setEmail(distributor.email);
      setEmail2(distributor.email2);
      setPhone(distributor.phone);
      setPhone2(distributor.phone2);
      setCategory(distributor.category);
      setWebsite(distributor.website);
      setState(distributor.state.id);
      setCountry(distributor.country.id);
      setAddress(distributor.address);
      setImage(
        distributor.logo
          ? `..${distributor.logo}`
          : "../static/images/add_image.png"
      );
      setDescription(distributor.description);
      fetchCountriesData();
      fetchCitiesData("", distributor.country.id);
    }
  }, [distributor]);

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

  function uploadCompanySettings() {
    setIsError(null);
    setResponseMessage("");
    if (
      c_name &&
      email &&
      phone &&
      category &&
      state &&
      country &&
      address &&
      description
    ) {
      let formData = new FormData();
      formData.append("c_name", c_name);
      formData.append("email", email);
      formData.append("email2", email2);
      formData.append("phone", phone);
      formData.append("phone2", phone2);
      formData.append("category", category);
      formData.append("website", website);
      formData.append("address", address);
      formData.append("state", state);
      formData.append("country", country);
      formData.append("description", description);
      if (compressedImage) {
        formData.append("photo", compressedImage);
      }
      editDistributorSettings(formData);
      viewSetting();
    } else if (!c_name) {
      setIsError(true);
      setResponseMessage("Please enter company name");
    } else if (!email) {
      setIsError(true);
      setResponseMessage("Please enter company email");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please enter company phone");
    } else if (!category) {
      setIsError(true);
      setResponseMessage("Please enter company goods details");
    } else if (!state) {
      setIsError(true);
      setResponseMessage("Please select company city");
    } else if (!country) {
      setIsError(true);
      setResponseMessage("Please enter company country");
    } else if (!address) {
      setIsError(true);
      setResponseMessage("Please enter company address");
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please enter company description");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all relevant fields");
    }
  }

  return (
    <div className="card panel">
      <div class="card-header">
        <h3 className="mt-2">Edit Settings</h3>
        <h3>
          <i
            onClick={() => viewSetting()}
            className="fas fa-times btn_type"
          ></i>
        </h3>
      </div>
      <div className="card-content panel-body container-fluid mb-3">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <center>
          <div className="add_company_img" onClick={() => fileInput.click()}>
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
        <div className="row justify-content-between pl-2 pr-2">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Company Name* <CustomToolTip message={"Input Company Name"}/> </label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter company name"
              value={c_name}
              name="name"
              onChange={(e) => setCName(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Company Website  <CustomToolTip message={"Input website link"}/></label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter website address"
              value={website}
              name="name"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>

        <div className="row justify-content-between">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Company Email* <CustomToolTip message={"This field cannot be edited"}/> </label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter email address"
              value={email}
              name="name"
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Contact Email<CustomToolTip message={"Input Contact Person Email"}/></label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter website address"
              value={email2}
              name="name"
              onChange={(e) => setEmail2(e.target.value)}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Company Phone* <CustomToolTip message={"Input Company Phone"}/> </label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter phone number"
              value={phone}
              name="name"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Contact Phone <CustomToolTip message={"Input Contact Phone"}/> </label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter phone number"
              value={phone2}
              name="name"
              onChange={(e) => setPhone2(e.target.value)}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Specialized Goods* <CustomToolTip message={"Input Your Type of Goods"}/> </label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter specialized goods"
              value={category}
              name="name"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Company Address* <CustomToolTip message={"Input Company Address"}/> </label>

            <input
              type="text"
              className="form-control"
              placeholder="Please enter company address"
              value={address}
              name="name"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Select Country*  <CustomToolTip message={"Choose a Country"}/></label>
            <select
              class="form-control"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                fetchCitiesData("", e.target.value);
              }}
              required
            >
              <option value="">...</option>
              {countries.map((view_country, index) => {
                return (
                  <option key={index} value={view_country.id}>
                    {view_country.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Select City* <CustomToolTip message={"Choose a City"}/> </label>
            <select
              class="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">...</option>
              {cities.map((view_city, index) => {
                return (
                  <option key={index} value={view_city.id}>
                    {view_city.city_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className=" card-header mt-2">
          <h5>Category Description*</h5>
        </div>
        <CustomTextEditor
          description={distributor ? distributor.description : ""}
          setDescription={(e) => setDescription(e.target.getContent())}
        />
      </div>
      <div className="row justify-content-end">
        <div
          onClick={() => uploadCompanySettings()}
          className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
        >
          Save Company
        </div>
      </div>
    </div>
  );
}
