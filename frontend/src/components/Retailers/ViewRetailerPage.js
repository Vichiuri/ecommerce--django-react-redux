import React from "react";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";

export default function ViewRetailerPage(props) {
  const { retailer, changePage, editRetailer, canManage } = props;
  return (
    <div className="retailer_profile">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="retailer_profile_img">
                    <img
                      src={
                        retailer.contact_pic
                          ? `..${retailer.contact_pic}`
                          : "../static/images/login.jpg"
                      }
                      alt="Retailer-Img"
                      width="150"
                    />
                  </div>

                  <div className="mt-3">
                    <h4>{retailer.contact_name}</h4>
                    {canManage ? (
                      <button
                        onClick={() => editRetailer(retailer)}
                        className="btn btn-primary"
                      >
                        Edit Retailer
                      </button>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
                <ul className="mt-5 list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <i className="fas fa-envelope mr-2"></i>
                      Email
                    </h6>
                    <span className="text-secondary">
                      {retailer.contact_email}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <i className="fas fa-phone mr-2"></i>
                      Phone
                    </h6>
                    <span className="text-secondary">
                      {retailer.contact_phone}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row justify-content-between">
                  <h4 className="font-weight-bolder ml-2">Contact Person</h4>
                  <CustomBreadcrumbs
                    prevPropsName="Retailers"
                    propsName="View Retailer"
                    changePage={changePage}
                  />
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.contact_person}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.contact_details}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.contact_person_phone}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Position</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.contact_person_position}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.contact_city}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h4 className="font-weight-bolder">Retailer Location</h4>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Region</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.region ? retailer.region.name : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.city ? retailer.city.name : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Area</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.area ? retailer.area.name : ""}
                  </div>
                </div>
                <hr />
                <h4 className="font-weight-bolder">Retailer Saleman</h4>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Area</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {retailer.salesman
                      ? retailer.salesman.last_name
                        ? `${retailer.salesman.first_name} ${retailer.salesman.last_name}`
                        : retailer.salesman.first_name
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
