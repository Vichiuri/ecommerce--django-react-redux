import React, { useState } from "react";
import HtmlParser from "react-html-parser";
import EditCompanyStatus from "./EditCompanyStatus";

export default function DetailSettings(props) {
  const { updateCompanyStatus, dist_settings } = props;

  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  function editStatus(type, value) {
    setType(type);
    setValue(value);
    setShowModal(true);
  }

  function updateStatus(type, value) {
    updateCompanyStatus({
      id: dist_settings.id,
      about_company: type === "About Us" ? value : dist_settings.about_company,
      privacy_company:
        type === "Privacy Policy" ? value : dist_settings.privacy_company,
      terms_company:
        type === "Terms And Conditions" ? value : dist_settings.terms_company,
    });
  }

  return (
    <div className="profile-info col-md-9">
      <div className="card panel">
        <div className="bio-graph-heading card-header">
          <h3>Detail Settings</h3>
        </div>
        <div className="card-content panel-body container-fluid mb-3">
          <div className="border-bottom p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="row align-items-center pl-3 pr-3">
                <div>
                  <h5>About Us</h5>
                  <div
                    className="detail_item_height"
                  >
                    <p>
                      {dist_settings.about_company
                        ? HtmlParser(dist_settings.about_company)
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-block">
                <div
                  onClick={() =>
                    editStatus("About Us", dist_settings.about_company)
                  }
                  className="btn btn-primary mr-2"
                >
                  {dist_settings.about_company ? (
                    <i className="fas fa-edit text-white"></i>
                  ) : (
                    <i className="fas fa-plus text-white"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="row align-items-center pl-3 pr-3">
                <div>
                  <h5>Privacy Policy</h5>
                  <div className="custom_table_height">
                    <p>
                      {dist_settings.privacy_company
                        ? HtmlParser(dist_settings.privacy_company)
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-block">
                <div
                  onClick={() =>
                    editStatus("Privacy Policy", dist_settings.privacy_company)
                  }
                  className="btn btn-primary mr-2"
                >
                  {dist_settings.privacy_company ? (
                    <i className="fas fa-edit text-white"></i>
                  ) : (
                    <i className="fas fa-plus text-white"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="row align-items-center pl-3 pr-3">
                <div>
                  <h5>Terms And Conditions</h5>
                  <div className="custom_table_height">
                    <p>
                      {dist_settings.terms_company
                        ? HtmlParser(dist_settings.terms_company)
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-block">
                <div
                  onClick={() =>
                    editStatus(
                      "Terms And Conditions",
                      dist_settings.terms_company
                    )
                  }
                  className="btn btn-primary mr-2"
                >
                  {dist_settings.terms_company ? (
                    <i className="fas fa-edit text-white"></i>
                  ) : (
                    <i className="fas fa-plus text-white"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditCompanyStatus
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        type={type}
        value={value}
        updateStatus={updateStatus}
      />
    </div>
  );
}
