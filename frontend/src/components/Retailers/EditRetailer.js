import React, { useState, useEffect } from "react";
import { fetchSelectPriceLevel } from "../../redux/Actions/Products";
import {
  fetchSelectArea,
  fetchSelectCity,
  fetchSelectRetailRegions,
} from "../../redux/Actions/Retailer";
import ImageCompress from "../../utils/ImageCompress";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import CustomAsyncPaginationAdditions from "../../widgets/CustomAsyncPaginationAdditions";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import { fetchSelectSalesPeople } from "../../redux/Actions/Sales";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditRetailer(props) {
  const {
    changePage,

    retailer,
    updateRetailer,
  } = props;
  const [image, setImage] = useState(
    retailer.contact_pic
      ? `..${retailer.contact_pic}`
      : "../static/images/add_image.png"
  );
  const [compressedImage, setCompressedImage] = useState(null);
  const [pin, setPin] = useState(retailer.retailer.pin_no);
  const [name, setName] = useState(retailer.contact_name);
  const [phone, setPhone] = useState(retailer.contact_phone);
  const [email, setEmail] = useState(retailer.contact_email);
  const [level, setLevel] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const [salesPerson, setSalesPerson] = useState("");
  const [contact_person, setContactPerson] = useState(
    retailer.contact_person ? retailer.contact_person : ""
  );
  const [contact_details, setContactDetail] = useState(
    retailer.contact_details ? retailer.contact_details : ""
  );
  const [contact_person_position, setContactPersonPosition] = useState(
    retailer.contact_person_position ? retailer.contact_person_position : ""
  );
  const [contact_city, setContactCity] = useState(
    retailer.contact_city ? retailer.contact_city : ""
  );
  const [contact_person_phone, setContactPersonPhone] = useState(
    retailer.contact_person_phone ? retailer.contact_person_phone : ""
  );
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [city_key, setCityKey] = useState(0);
  const [area_key, setAreaKey] = useState(11);

  useEffect(() => {
    if (retailer) {
      if (retailer.region) {
        const v_region = {
          value: retailer.region,
          label: retailer.region.name,
        };
        setRegion(v_region);
      }

      if (retailer.city) {
        const v_city = {
          value: retailer.city,
          label: retailer.city.name,
        };
        setCity(v_city);
      }

      if (retailer.area) {
        const v_area = {
          value: retailer.area,
          label: retailer.area.name,
        };
        setArea(v_area);
      }
      if (retailer.price_level) {
        const v_level = {
          value: retailer.price_level,
          label: retailer.price_level.level_name,
        };
        setLevel(v_level);
      }
      if (retailer.salesman) {
        const v_sales = {
          value: retailer.salesman,
          label: retailer.salesman.last_name
            ? `${retailer.salesman.first_name} ${retailer.salesman.last_name}`
            : retailer.salesman.first_name,
        };

        setSalesPerson(v_sales);
      }
      const key = Math.random();
      setCityKey(key);
      setAreaKey(key + 10);
    }
  }, [retailer]);

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

  function uploadRetailer() {
    setIsError(null);
    setResponseMessage("");
    if (name && phone && email) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("region_id", region ? region.value.id : "");
      formData.append("area_id", area ? area.value.id : "");
      formData.append("city_id", city ? city.value.id : "");
      formData.append("level_id", level ? level.value.id : "");
      formData.append("contact_person", contact_person);
      formData.append("contact_details", contact_details);
      formData.append("contact_person_position", contact_person_position);
      formData.append("contact_city", contact_city);
      formData.append("contact_person_phone", contact_person_phone);
      formData.append("id", retailer.id);
      formData.append("salesman_id", salesPerson ? salesPerson.value.id : "");
      if (compressedImage) {
        formData.append("photo", compressedImage);
      }

      updateRetailer(formData);
    } else if (!pin) {
      setIsError(true);
      setResponseMessage("Please input KRA Pin");
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input retailer name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please input phone number");
    } else if (!email) {
      setIsError(true);
      setResponseMessage("Please input Retailer email");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  return (
    <div className="row justify-content-end">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Edit Retailer</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Retailers"
                propsName="Edit Retailer"
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
                className="add_retailer_img"
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
                <label>
                  Company Name*{" "}
                  <CustomToolTip message={"Input your company name"} />
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter company name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Tax Pin*{" "}
                  <CustomToolTip message={"Tax pin cannot be edited"} />{" "}
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter tax pin"
                    value={pin}
                    name="name"
                    onChange={(e) => setPin(e.target.value)}
                    disabled
                  />

                  <div className="input-group-append bg-primary text-white">
                    <a
                      href="https://itax.kra.go.ke/KRA-Portal/pinChecker.htm?actionCode=loadPage&viewType=static"
                      className="input-group-text"
                      target="popup"
                      onClick={() => {
                        window.open(
                          "https://itax.kra.go.ke/KRA-Portal/pinChecker.htm?actionCode=loadPage&viewType=static",
                          "popup",
                          "width=600,height=600"
                        );
                        return false;
                      }}
                    >
                      Check Pin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Retailer Email*{" "}
                  <CustomToolTip message={"Retailer email cannot be edited"} />{" "}
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Please enter retailer email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Retailer Phone*{" "}
                  <CustomToolTip message={"Input your phone number"} />{" "}
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter retailer phone"
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Select Price Level{" "}
                  <CustomToolTip message={"choose a price level"} />{" "}
                </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={level}
                  setValue={(value) => setLevel(value)}
                  fetchData={fetchSelectPriceLevel}
                  closeMenuOnSelect={true}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Select Region <CustomToolTip message={"Choose a region"} />{" "}
                </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={region}
                  setValue={(value) => {
                    setRegion(value);
                    setCity("");
                    setCityKey(Math.random());
                    setArea("");
                  }}
                  fetchData={fetchSelectRetailRegions}
                  closeMenuOnSelect={true}
                />
              </div>
            </div>

            {region ? (
              <div className="row justify-content-between">
                <div
                  className={
                    city
                      ? "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
                      : "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
                  }
                >
                  <label>
                    Select City <CustomToolTip message={"Choose a city"} />{" "}
                  </label>

                  <CustomAsyncPaginationAdditions
                    isMulti={false}
                    value={city}
                    setValue={(value) => {
                      setCity(value);
                      setAreaKey(Math.random() + 10);
                      setArea("");
                    }}
                    fetchData={fetchSelectCity}
                    closeMenuOnSelect={true}
                    additional={{
                      page: 1,
                      region: region ? region.value.id : "",
                    }}
                    key={city_key}
                  />
                </div>
                {city ? (
                  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                    <label>
                      Select Area <CustomToolTip message={"Choose an area"} />{" "}
                    </label>

                    <CustomAsyncPaginationAdditions
                      isMulti={false}
                      value={area}
                      setValue={(value) => setArea(value)}
                      fetchData={fetchSelectArea}
                      closeMenuOnSelect={true}
                      additional={{ page: 1, city: city ? city.value.id : "" }}
                      key={area_key}
                    />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ) : (
              <div />
            )}

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Contact Person{" "}
                  <CustomToolTip message={"Enter the contact person name"} />{" "}
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter contact person"
                  value={contact_person}
                  name="contact_person"
                  onChange={(e) => setContactPerson(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Contact Person Phone{" "}
                  <CustomToolTip message={"Input the contact person phone"} />{" "}
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter contact person phone"
                  value={contact_person_phone}
                  name="contact_person_phone"
                  onChange={(e) => setContactPersonPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Contact Person Email{" "}
                  <CustomToolTip message={"Input the contact person email"} />{" "}
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Please enter contact person email"
                  value={contact_details}
                  name="contact_details"
                  onChange={(e) => setContactDetail(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Contact Person Position{" "}
                  <CustomToolTip
                    message={"Input the contact person position e.g Director"}
                  />{" "}
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter contact person Position"
                  value={contact_person_position}
                  name="contact_person_position"
                  onChange={(e) => setContactPersonPosition(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Contact Person Address{" "}
                  <CustomToolTip message={"Input the contact person address"} />{" "}
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter contact person address"
                  value={contact_city}
                  name="contact_city"
                  onChange={(e) => setContactCity(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  Select Sales Person{" "}
                  <CustomToolTip message={"Choose a salesperson"} />{" "}
                </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={salesPerson}
                  setValue={(value) => setSalesPerson(value)}
                  fetchData={fetchSelectSalesPeople}
                  closeMenuOnSelect={true}
                />
              </div>
            </div>

            <div className="row justify-content-end">
              <div
                onClick={() => uploadRetailer()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Update Retailer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
