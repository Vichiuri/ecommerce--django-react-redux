import React from "react";
import FormatCommas from "../../../utils/FormatCommas";

export default function ViewDashboarCustomers({ view_retailers }) {
  return (
    <div class="col-xl-6 dashb_board_card_padding">
      <div class="white_card card_height_100 mb_30">
        <div class="white_card_header">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="main-title">
                <h3 class="m-0">Top Customers</h3>
              </div>
            </div>
          </div>
        </div>
        <div class=" QA_section">
          <div class="QA_table">
            <div class="dataTables_wrapper no-footer">
              <table class="table lms_table_active2 p-0 table-bordered">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Orders</th>
                    <th className="text-right" scope="col">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {view_retailers.map((retailer, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div class="customer d-flex align-items-center">
                            <div class="thumb_34 mr_15 mt-0">
                              <img
                                class="img-fluid"
                                src={
                                  retailer.contact_pic
                                    ? `..${retailer.contact_pic}`
                                    : "../static/images/user.png"
                                }
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td class="f_s_12 f_w_400 color_text_6">
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
                        </td>
                        <td class="f_s_12 f_w_400 color_text_7">
                          {retailer.order_count
                            ? retailer.order_count.orders_count
                            : 0}{" "}
                        </td>
                        <td class="f_s_12 f_w_400 color_text_6 text-right">
                          {" "}
                          KES{" "}
                          {retailer.order_count
                            ? FormatCommas(retailer.order_count.revenue_count)
                            : 0}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
