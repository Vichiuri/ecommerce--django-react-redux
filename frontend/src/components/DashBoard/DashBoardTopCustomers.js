import React from "react";
import ReactHtmlParser from "react-html-parser";
import FormatCommas from "../../utils/FormatCommas";
import { Link } from "react-router-dom";

export default function DashBoardTopCustomers({
  view_retailers,
  view_products,
}) {
  return (
    <div className="row">
      <div className="col-xl-5">
        <div className="card card-table-border-none" data-scroll-height="580">
          <div className="card-header">
            <h2>Top Retailers</h2>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <Link to="/home/retailers" className="card-content side_nav_item">
            {view_retailers.map((retailer, index) => {
              return (
                <div key={index}>
                  <div className="card-content container-fluid side_nav_item">
                    <div className="row justify-content-between">
                      <div className="media">
                        <div className=" mr-3 dashboard_round_img">
                          <img
                            src={
                              retailer.contact_pic
                                ? `..${retailer.contact_pic}`
                                : "../static/images/user.png"
                            }
                            alt="customer image"
                          />
                        </div>
                        <div className="media-body align-self-center">
                          <h6 className="mt-0  font-weight-medium">
                            {retailer.retailer_profile
                              ? retailer.retailer_profile.contact_name
                              : retailer.name}
                          </h6>

                          <small>
                            {retailer.retailer_profile
                              ? retailer.retailer_profile.contact_email
                              : retailer.email}
                          </small>
                        </div>
                      </div>
                      <label className="align-self-center">
                        {retailer.order_count
                          ? retailer.order_count.orders_count
                          : 0}{" "}
                        Orders
                      </label>

                      <label className="align-self-center">
                        Ksh.{" "}
                        {retailer.order_count
                          ? retailer.order_count.revenue_count
                          : 0}
                      </label>
                    </div>
                  </div>
                  <hr className=" divider" />
                </div>
              );
            })}
          </Link>
        </div>
      </div>
      <div className="col-xl-7">
        <div className="card card-default" data-scroll-height="580">
          <div className="card-header">
            <h2>Top Products</h2>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <Link to="/home/products" className="card-content side_nav_item">
            {view_products.map((product, index) => {
              return (
                <div key={index}>
                  <div className="card-content container-fluid side_nav_item">
                    <div className="row justify-content-between">
                      <div className="media">
                        <div className=" mr-3 dashboard_product_img">
                          <img
                            src={
                              product.product_images[0] != null &&
                              product.product_images[0].image != null
                                ? `..${product.product_images[0].image}`
                                : "../static/images/logo.svg"
                            }
                            alt="customer image"
                          />
                        </div>
                      </div>
                      <div className="media-body align-self-center">
                        <h6 className="mb-3 font-weight-medium">
                          {product.name}
                        </h6>

                        <p className="float-md-right">
                          {/* <span className="mr-2">20</span>Sales */}
                        </p>
                        <div className="d-none d-md-block custom_table_height">
                          {ReactHtmlParser(product.description)}
                        </div>
                        <p className="mb-0">
                          {/* <del></del> */}
                          <span className="ml-3 text-success">
                            {product.price_currency}{" "}
                            {FormatCommas(product.price)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className=" divider" />
                </div>
              );
            })}
          </Link>
        </div>
      </div>
    </div>
  );
}
