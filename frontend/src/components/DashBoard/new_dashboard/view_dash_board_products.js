import React from "react";
import FormatCommas from "../../../utils/FormatCommas";

export default function ViewDashBoardProducts({ view_products }) {
  return (
    <div className="col-xl-6 col-lg-6 dashb_board_card_padding">
      <div className="white_card card_height_100 mb_30">
        <div className="white_card_header">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="main-title">
                <h3 className="m-0">Top Products</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" QA_section">
          <div className="QA_table">
            <div className="dataTables_wrapper no-footer">
              <table className="table lms_table_active2 p-0 table-bordered">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th className="text-right" scope="col">
                      Price
                    </th>
                    <th className="text-right" scope="col">
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {view_products.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="customer d-flex align-items-center">
                            <div className="thumb_prod mt-0">
                              <img
                                className="img-fluid"
                                src={
                                  product.product_images[0] != null &&
                                  product.product_images[0].image != null
                                    ? `..${product.product_images[0].image}`
                                    : "../static/images/logo.svg"
                                }
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td className="f_s_12 f_w_400 color_text_6" width="30%">
                          <span className="f_s_12 f_w_600 color_text_5">
                            {product.name}
                          </span>
                        </td>
                        <td className="f_s_12 f_w_400 color_text_7 text-right">
                          {product.price_currency} {FormatCommas(product.price)}
                        </td>
                        <td className="f_s_12 f_w_400 color_text_6 text-right">
                          {product.stock_qty}
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
