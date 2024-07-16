import React, { useState, Fragment } from "react";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";

export default function EditProfile({ user, account, updateUser }) {
  const [first_name, setFirstName] = useState(
    account.first_name ? account.first_name : ""
  );
  const [last_name, setLastName] = useState(
    account.last_name ? account.last_name : ""
  );
  const [bio, setBio] = useState(account.bio ? account.bio : "");
  const [phone, setPhone] = useState(account.phone ? account.phone : "");
  const [photo, setPhoto] = useState(account.pic ? account.pic : "");
  const [compressedImage, setCompressedImage] = useState("");
  const [deleteImage, setDeleteImage] = useState("");
  const [current_password, setCurrentPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function fileSelectorHandler(e) {
    let fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    const viewImage = URL.createObjectURL(fileImage);
    setPhoto(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    ImageCompress(fileImage)
      .then((compressImage) => {
        setCompressedImage(compressImage);
      })
      .catch((error) => console.log(error));
  }

  function uploadUser(viewDeleteImg) {
    setIsError(null);
    setResponseMessage("");
    if (first_name && last_name && phone) {
      let formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("phone", phone);
      formData.append("bio", bio);
      if (compressedImage) {
        formData.append("photo", compressedImage);
      }
      formData.append(
        "delete_image",
        viewDeleteImg ? viewDeleteImg : deleteImage
      );

      if (new_password) {
        if (current_password && new_password == confirm_password) {
          formData.append("new_password", new_password);
          formData.append("confirm_password", confirm_password);
          formData.append("old_password", current_password);
          updateUser(formData);
        } else if (!current_password) {
          setIsError(true);
          setResponseMessage("Please input current password");
        } else if (new_password != confirm_password) {
          setIsError(true);
          setResponseMessage("New Password and confirm do not match");
        }
      } else {
        formData.append("new_password", new_password);
        updateUser(formData);
      }
    } else if (!first_name) {
      setIsError(true);
      setResponseMessage("Please enter first name");
    } else if (!last_name) {
      setIsError(true);
      setResponseMessage("Please enter last name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please enter phone number");
    }
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-3">
          <div className="mx-auto" style={{ width: "140px" }}>
            <div
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                height: "140px",
                backgroundColor: "rgb(233, 236, 239)",
              }}
            >
              <div>
                {photo ? (
                  <img
                    src={photo}
                    alt="user img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      color: "rgb(166, 168, 170)",
                      font: " bold 8pt Arial",
                    }}
                  >
                    140x140
                  </span>
                )}
                <input
                  className="image_input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => fileSelectorHandler(e)}
                  ref={(fileInput) => setFileInput(fileInput)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mb-3">
          <div className="text-center text-sm-left mb-2 mb-sm-0">
            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
              {account.last_name
                ? `${account.first_name} ${account.last_name}`
                : account.first_name}
            </h4>
            <p className="mb-0">{user.email}</p>
            <div className="text-muted">
              <small>{account.phone}</small>
            </div>
            <div className="mt-2 d-flex">
              <button
                onClick={() => fileInput.click()}
                className="btn btn-primary"
              >
                <i className="fa fa-fw fa-camera"></i>
                <span>Change Photo</span>
              </button>

              {photo ? (
                <button
                  onClick={() => {
                    setPhoto("");
                    setCompressedImage("");
                    setDeleteImage(account.pic ?? "");
                    uploadUser(account.pic ?? "");
                  }}
                  className="btn btn-danger ml-2"
                >
                  <i className="fa fa-fw fa-camera"></i>
                  <span>Remove Photo</span>
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content pt-3">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="tab-pane active">
          <div className="form">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        placeholder="Please input first name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        placeholder="Please input last name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Please enter email"
                        value={user.email}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="Please input phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <div className="form-group">
                      <label>About</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="My Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 mb-3">
                <div className="mb-2">
                  <b>Change Password</b>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Current Password</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="••••••"
                        value={current_password}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="••••••"
                        value={new_password}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>
                        Confirm
                        <span className="d-none d-xl-inline">Password</span>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="••••••"
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                <div className="mb-2">
                  <b>Keeping in Touch</b>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  onClick={() => uploadUser()}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
